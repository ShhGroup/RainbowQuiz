// MainPage.tsx - ЧАСТИНА 1
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { generateUrlWithTracking } from "../components/TrackingUtilities";
import {
  detectBrowserLanguage,
  getLanguageTranslations,
  Translation,
} from "../translations";

// Етапи попапів відповідно до нових даних
enum Step {
  POPUP1 = 1,
  POPUP2 = 2,
  POPUP3 = 3,
  POPUP4 = 4,
  POPUP5 = 5,
  POPUP6 = 6,
}

// Інтерфейс для селектабельних опцій
interface SelectableOption {
  id: string;
  label: string;
}

const MainPage = () => {
  // Визначення мови та отримання перекладів
  const [translations, setTranslations] = useState<Translation | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>(Step.POPUP1);
  const [backgroundImage, setBackgroundImage] = useState<string>(
    "./images/bg1_mob.png"
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Вибрані відповіді користувача
  const [answers, setAnswers] = useState({
    popup2: null as boolean | null,
    popup3: [] as string[],
    popup4: [] as string[],
    popup5: [] as string[],
  });

  // Анімація появи при зміні кроку
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Визначення мови браузера при завантаженні
  useEffect(() => {
    const browserLang = detectBrowserLanguage();
    setTranslations(getLanguageTranslations(browserLang));

  }, []);

  // Встановлення фонового зображення залежно від розміру екрана та поточного кроку
  useEffect(() => {
    const updateBackgroundImage = () => {
      const isMobile = window.innerWidth < 1024;
      const suffix = isMobile ? "_mob" : "_desk";
      setBackgroundImage(`./images/bg${currentStep}${suffix}.png`);
    };

    // Встановлюємо початкове зображення
    updateBackgroundImage();

    // Слухаємо зміни розміру вікна
    window.addEventListener("resize", updateBackgroundImage);

    // Очищаємо слухач при демонтажі
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, [currentStep]);

  // Якщо переклади ще не завантажені, показуємо заглушку
  if (!translations) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  // Функція для переходу до наступного кроку
  const nextStep = () => {
    if (currentStep === Step.POPUP6) {
      // Генеруємо URL з параметрами трекінгу для кнопки CTA
      const trackingParams = generateUrlWithTracking("CTAbutton");

      // Отримуємо базовий URL поточного сайту (без параметрів)
      const baseUrl = window.location.origin + window.location.pathname;

      // Повний URL для редіректу
      const redirectUrl = baseUrl + trackingParams.substring(1); // Видаляємо початковий /

      console.log(`Redirecting from CTA button: ${redirectUrl}`);

      // Перенаправлення на сторінку offer з трекінгом
      window.location.href = redirectUrl;
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Функція для обробки множинного вибору з лімітом 3 елементи
  const toggleMultipleChoice = (key: string, value: string) => {
    setAnswers((prev) => {
      const currentArray = prev[key as keyof typeof prev] as string[];

      if (currentArray.includes(value)) {
        // Якщо елемент вже вибраний, видаляємо його
        const newArray = currentArray.filter((item) => item !== value);
        return {
          ...prev,
          [key]: newArray,
        };
      } else {
        // Якщо елемент не вибраний, додаємо його (якщо не досягнуто ліміту)
        if (currentArray.length < 3) {
          const newArray = [...currentArray, value];
          return {
            ...prev,
            [key]: newArray,
          };
        }
        // Якщо досягнуто ліміт, не додаємо новий елемент
        return prev;
      }
    });
  }; // ЧАСТИНА 2 - Функції рендерингу опцій (чисті анімації)

  // Рендер опцій для множинного вибору з фотографіями (для popup3)
  const renderMultipleChoiceOptionsWithImages = (
    options: SelectableOption[],
    selectedValues: string[],
    onToggle: (value: string) => void
  ) => {
    return (
      <div className="flex flex-col gap-3 mt-4">
        {options.map((option, index) => {
          const isSelected = selectedValues.includes(option.id);
          const isDisabled = !isSelected && selectedValues.length >= 3;
          const imageNumber = index + 1;

          return (
            <div
              key={option.id}
              className="w-full"
              style={{
                animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
              }}
            >
              <label
                className={`
                  block w-full text-left max-w-[414px] rounded-full cursor-pointer transition-all duration-200 relative overflow-hidden
                  ${
                    isSelected
                      ? "bg-gradient-to-r from-[#FFBF00] to-[#A9C505] text-white border-2 border-[#AE9D55]"
                      : "bg-[#FFBF0038] text-white border-2 border-[#AE9D55]"
                  }
                  ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => !isDisabled && onToggle(option.id)}
                />

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <img
                      src={`./images/option${imageNumber}.png`}
                      alt={`Option ${imageNumber}`}
                      className="w-[49px] h-[49px] sm:w-[59px] ml-[-2px] sm:h-[59px] border-2 border-[#AE9D55] rounded-full object-cover"
                    />
                  </div>

                  <div className="font-medium text-[13px] sm:text-base leading-[19px] flex-1">
                    {option.label}
                  </div>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  // Рендер опцій для множинного вибору з чекбоксами (для popup4 та popup5)
  const renderMultipleChoiceOptionsWithoutImages = (
    options: SelectableOption[],
    selectedValues: string[],
    onToggle: (value: string) => void
  ) => {
    return (
      <div className="flex flex-col gap-3 mt-4">
        {options.map((option, index) => {
          const isSelected = selectedValues.includes(option.id);
          const isDisabled = !isSelected && selectedValues.length >= 3;

          return (
            <div
              key={option.id}
              className="w-full"
              style={{
                animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
              }}
            >
              <label
                className={`
                block w-full text-left max-w-[414px] rounded-full cursor-pointer transition-all duration-200 relative overflow-hidden
                ${
                  isSelected
                    ? "bg-gradient-to-r from-[#FFBF00] to-[#A9C505] text-white border-2 border-[#AE9D55]"
                    : "bg-[#FFBF0038] text-white border-2 border-[#AE9D55]"
                }
                ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => !isDisabled && onToggle(option.id)}
                />

                <div className="flex items-center gap-3 h-[53px] pl-3 pr-1">
                  <div className="flex-shrink-0">
                    <div
                      className={`
                      sm:w-[33px] w-[28px] h-[28px] sm:h-[33px] 
                      rounded-full border-2 border-[#FEFB46] 
                      flex items-center justify-center transition-all duration-200
                      ${isSelected ? "bg-[#FEFB46]" : "bg-transparent"}
                    `}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#7C5D2A]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="font-semibold text-[13px] sm:text-base leading-[17px] flex-1">
                    {option.label}
                  </div>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  // Опції для кожного кроку
  const popup3Options: SelectableOption[] = [
    { id: "popup3_option1", label: translations.popup3_option1 },
    { id: "popup3_option2", label: translations.popup3_option2 },
    { id: "popup3_option3", label: translations.popup3_option3 },
    { id: "popup3_option4", label: translations.popup3_option4 },
  ];

  const popup4Options: SelectableOption[] = [
    { id: "popup4_option1", label: translations.popup4_option1 },
    { id: "popup4_option2", label: translations.popup4_option2 },
    { id: "popup4_option3", label: translations.popup4_option3 },
  ];

  const popup5Options: SelectableOption[] = [
    { id: "popup5_option1", label: translations.popup5_option1 },
    { id: "popup5_option2", label: translations.popup5_option2 },
    { id: "popup5_option3", label: translations.popup5_option3 },
    { id: "popup5_option4", label: translations.popup5_option4 },
  ]; // ЧАСТИНА 3A - Рендеринг попапів 1-3 (чисті переходи)

  // Вміст для кожного кроку
  const renderStepContent = () => {
    switch (currentStep) {
      case Step.POPUP1:
        return (
          <div
            className={`w-full h-full flex items-center flex-col transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1
              className="sm:text-[40px] text-[16px] text-[#FFFB00] font-black text-center sm:leading-[49px] mt-[95px] sm:mt-[33px]"
              style={{
                textShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeIn 0.6s ease-out",
              }}
            >
              {translations.title}
            </h1>
            <div
              className="flex flex-col max-w-[450px] border-2 border-[#FFFC45] items-center p-5 text-center overflow-hidden rounded-[30px] mt-[20px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.46) 38.83%, rgba(115, 6, 29, 0.46) 100%)",
                boxShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeInUp 0.6s ease-out 0.2s both",
              }}
            >
              <img
                src="./images/boobs_image.png"
                alt="boobs"
                className="mt-[-21px]"
                style={{ animation: "fadeIn 0.5s ease-out 0.4s both" }}
              />

              <div className="flex-row flex items-start w-[95%]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
                <div
                  className="text-white font-bold text-[22px] sm:text-[32px] sm:leading-[35px] leading-[22px] w-full text-center mb-2.5"
                  style={{ animation: "fadeIn 0.5s ease-out 0.5s both" }}
                >
                  {translations.popup1_title}
                </div>
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
              </div>

              <p
                className="font-light text-[16px] sm:text-[24px] leading-[19px] sm:leading-[29px] text-white/90"
                style={{ animation: "fadeIn 0.5s ease-out 0.6s both" }}
              >
                {translations.popup1_text1}
              </p>

              <p
                className="font-medium text-[16px] sm:text-[24px] text-white leading-[19px] sm:leading-[29px] mt-2"
                style={{ animation: "fadeIn 0.5s ease-out 0.7s both" }}
              >
                {translations.popup1_text2}
              </p>

              <div
                className="flex gap-2.5 mt-3 sm:mt-5 w-full justify-center"
                style={{ animation: "fadeInUp 0.5s ease-out 0.8s both" }}
              >
                <button
                  onClick={nextStep}
                  className="w-[288px] cursor-pointer h-[60px] sm:h-[74px] rounded-[20px] text-[38px] sm:text-[48px] font-medium gap-1 text-white flex flex-row items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(273deg, #FC0 27.88%, #03B934 106.77%)",
                    boxShadow: "0px 6px 5.7px 0px rgba(102, 42, 42, 0.50)",
                  }}
                >
                  <span>{translations.popup_button_ok}</span>
                  <ArrowRight size={40} />
                </button>
              </div>

              <p
                className="text-[12px] sm:text-[16px] font-medium leading-[14px] sm:leading-[19px] text-center text-white max-w-[170px] mt-[10px] sm:mt-[20px]"
                style={{ animation: "fadeIn 0.5s ease-out 0.9s both" }}
              >
                {translations.popup_underButtonText}
              </p>
            </div>
          </div>
        );

      case Step.POPUP2:
        return (
          <div
            className={`transition-all duration-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="flex flex-col max-w-[450px] border-2 border-[#FFFC45] items-center p-5 text-center overflow-hidden rounded-[30px] mt-[-80px] sm:mt-[0px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.46) 38.83%, rgba(115, 6, 29, 0.46) 100%)",
                boxShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeIn 0.4s ease-out",
              }}
            >
              <div className="flex-row flex items-center w-[100%]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-[-5px]"></span>
                <div
                  className="text-white font-bold text-[22px] sm:text-[32px] sm:leading-[35px] leading-[22px] w-full text-center mb-2.5"
                  style={{ animation: "fadeIn 0.3s ease-out 0.1s both" }}
                >
                  {translations.popup2_title}
                </div>
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-[-5px]"></span>
              </div>

              {(() => {
                const text1 = translations.popup2_text1;
                const words = text1.split(" ");
                const firstThreeWords = words.slice(0, 3).join(" ");
                const remainingWords = words.slice(3).join(" ");

                return (
                  <p
                    className="text-[16px] sm:text-[24px] leading-[19px] sm:leading-[29px] text-white mt-[20px] sm:mt-[35px]"
                    style={{ animation: "fadeIn 0.3s ease-out 0.2s both" }}
                  >
                    <span style={{ fontWeight: 700 }}>{firstThreeWords}</span>
                    {remainingWords && (
                      <span style={{ fontWeight: 300 }}> {remainingWords}</span>
                    )}
                  </p>
                );
              })()}

              {(() => {
                const text2 = translations.popup2_text2;
                const words = text2.split(" ");

                return (
                  <p
                    className="text-[16px] sm:text-[24px] text-white leading-[19px] sm:leading-[29px] mt-[20px]"
                    style={{ animation: "fadeIn 0.3s ease-out 0.3s both" }}
                  >
                    {words.map((word, index) => (
                      <span
                        key={index}
                        style={{ fontWeight: index === 2 ? 700 : 500 }}
                      >
                        {word}
                        {index < words.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </p>
                );
              })()}

              <div
                className="flex gap-2.5 mt-5 sm:mt-5 w-full justify-center"
                style={{ animation: "fadeInUp 0.3s ease-out 0.4s both" }}
              >
                <button
                  onClick={nextStep}
                  className="w-[288px] cursor-pointer h-[60px] sm:h-[74px] rounded-[20px] text-[38px] sm:text-[48px] font-medium gap-1 text-white flex flex-row items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(273deg, #FC0 27.88%, #03B934 106.77%)",
                    boxShadow: "0px 6px 5.7px 0px rgba(102, 42, 42, 0.50)",
                  }}
                >
                  <span>{translations.popup_button_yes}</span>
                  <ArrowRight size={40} />
                </button>
              </div>

              <p
                className="text-[12px] sm:text-[16px] font-medium leading-[14px] sm:leading-[19px] text-center text-white max-w-[170px] mt-[10px] sm:mt-[20px]"
                style={{ animation: "fadeIn 0.3s ease-out 0.5s both" }}
              >
                {translations.popup_underButtonText}
              </p>
            </div>
          </div>
        );

      case Step.POPUP3:
        return (
          <div
            className={`w-full h-full flex items-center justify-center transition-all duration-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="flex flex-col max-w-[450px] border-2 border-[#FFFC45] items-center p-5 text-center overflow-hidden rounded-[30px] mt-[-80px] sm:mt-[0px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.46) 38.83%, rgba(115, 6, 29, 0.46) 100%)",
                boxShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeIn 0.4s ease-out",
              }}
            >
              <div className="flex-row flex items-start w-[100%]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
                <div
                  className="text-white font-bold text-[22px] sm:text-[32px] sm:leading-[35px] leading-[22px] w-full text-center mb-2.5"
                  style={{ animation: "fadeIn 0.3s ease-out 0.1s both" }}
                >
                  {translations.popup3_title}
                </div>
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
              </div>

              <p
                className="font-medium text-[13px] sm:text-[16px] leading-[13px] sm:leading-[19px] text-white mt-1"
                style={{ animation: "fadeIn 0.3s ease-out 0.2s both" }}
              >
                {translations.popup_honestText}
              </p>

              <div className="w-full mt-0 sm:mt-4">
                {renderMultipleChoiceOptionsWithImages(
                  popup3Options,
                  answers.popup3,
                  (value) => toggleMultipleChoice("popup3", value)
                )}
              </div>

              <div
                className="w-full h-[53px] rounded-[14px] border-[#42BD27] mt-[18px] sm:mt-[27px] border-2 flex items-center text-[#FFCC01] pl-[14px] font-bold text-[13px] leading-[16px] sm:text-[16px]"
                style={{
                  background:
                    "linear-gradient(95deg, rgba(94, 192, 34, 0.20) -11.33%, rgba(46, 189, 44, 0.20) 126.15%)",
                  animation: "fadeIn 0.3s ease-out 0.4s both",
                }}
              >
                {translations.popup3_text1}
              </div>

              <div
                className="flex gap-2.5 mt-5 w-full justify-center"
                style={{ animation: "fadeInUp 0.3s ease-out 0.5s both" }}
              >
                <button
                  onClick={nextStep}
                  className="w-[288px] cursor-pointer h-[60px] sm:h-[74px] rounded-[20px] text-[38px] sm:text-[48px] font-medium gap-1 text-white flex flex-row items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(273deg, #FC0 27.88%, #03B934 106.77%)",
                    boxShadow: "0px 6px 5.7px 0px rgba(102, 42, 42, 0.50)",
                  }}
                >
                  <span>{translations.popup_button_next}</span>
                  <ArrowRight size={40} />
                </button>
              </div>
            </div>
          </div>
        ); // ЧАСТИНА 3B - Popup4-6 та фінальний return (максимально чисто)

      case Step.POPUP4:
        return (
          <div
            className={`w-full h-full flex items-center justify-center transition-all duration-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="flex flex-col max-w-[450px] border-2 border-[#FFFC45] items-center p-5 text-center overflow-hidden rounded-[30px] mt-[-90px] sm:mt-[0px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.46) 38.83%, rgba(115, 6, 29, 0.46) 100%)",
                boxShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeIn 0.4s ease-out",
              }}
            >
              <div className="flex-row flex items-start w-[100%] gap-1">
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
                <div
                  className="text-white font-bold text-[22px] sm:text-[32px] sm:leading-[35px] leading-[22px] w-full text-center mb-2.5"
                  style={{ animation: "fadeIn 0.3s ease-out 0.1s both" }}
                >
                  {translations.popup4_title}
                </div>
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
              </div>

              <p
                className="font-medium text-[13px] sm:text-[16px] leading-[13px] sm:leading-[19px] text-white mt-1"
                style={{ animation: "fadeIn 0.3s ease-out 0.2s both" }}
              >
                {translations.popup_honestText}
              </p>

              <div className="w-full mt-0">
                {renderMultipleChoiceOptionsWithoutImages(
                  popup4Options,
                  answers.popup4,
                  (value) => toggleMultipleChoice("popup4", value)
                )}
              </div>

              {(() => {
                const text = translations.popup4_text1;
                const lines = text.split("\n");

                return (
                  <p
                    className="text-white whitespace-break-spaces text-center mt-4 max-w-[80%] text-[12px] sm:text-[16px]"
                    style={{ animation: "fadeIn 0.3s ease-out 0.4s both" }}
                  >
                    {lines.map((line, index) => (
                      <span key={index}>
                        {index === lines.length - 1 ? (
                          <span className="font-bold">{line}</span>
                        ) : (
                          line
                        )}
                        {index < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                );
              })()}

              <div
                className="flex gap-2.5 mt-5 w-full justify-center"
                style={{ animation: "fadeInUp 0.3s ease-out 0.5s both" }}
              >
                <button
                  onClick={nextStep}
                  className="w-[288px] cursor-pointer h-[60px] sm:h-[74px] rounded-[20px] text-[38px] sm:text-[48px] font-medium gap-1 text-white flex flex-row items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(273deg, #FC0 27.88%, #03B934 106.77%)",
                    boxShadow: "0px 6px 5.7px 0px rgba(102, 42, 42, 0.50)",
                  }}
                >
                  <span>{translations.popup_button_next}</span>
                  <ArrowRight size={40} />
                </button>
              </div>
            </div>
          </div>
        );

      case Step.POPUP5:
        return (
          <div
            className={`w-full h-full flex items-center justify-center transition-all duration-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="flex flex-col max-w-[450px] border-2 border-[#FFFC45] items-center p-5 text-center overflow-hidden rounded-[30px] mt-[-100px] sm:mt-[0px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.46) 38.83%, rgba(115, 6, 29, 0.46) 100%)",
                boxShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeIn 0.4s ease-out",
              }}
            >
              <div className="flex-row flex items-start w-[100%] gap-1">
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
                <div
                  className="text-white font-bold text-[22px] sm:text-[32px] sm:leading-[35px] leading-[22px] w-full text-center mb-2.5"
                  style={{ animation: "fadeIn 0.3s ease-out 0.1s both" }}
                >
                  {translations.popup5_title}
                </div>
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
              </div>

              <p
                className="font-medium text-[13px] sm:text-[16px] leading-[13px] sm:leading-[19px] text-white mt-1"
                style={{ animation: "fadeIn 0.3s ease-out 0.2s both" }}
              >
                {translations.popup_honestText}
              </p>

              <div className="w-full mt-0">
                {renderMultipleChoiceOptionsWithoutImages(
                  popup5Options,
                  answers.popup5,
                  (value) => toggleMultipleChoice("popup5", value)
                )}
              </div>

              {(() => {
                const text = translations.popup5_text1;
                const lines = text.split("\n");

                return (
                  <p
                    className="text-white whitespace-break-spaces text-center mt-4 max-w-[80%] text-[12px] sm:text-[16px]"
                    style={{ animation: "fadeIn 0.3s ease-out 0.4s both" }}
                  >
                    {lines.map((line, index) => (
                      <span key={index}>
                        {index === lines.length - 1 ? (
                          <span className="font-bold">{line}</span>
                        ) : (
                          line
                        )}
                        {index < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                );
              })()}

              <div
                className="flex gap-2.5 mt-5 w-full justify-center"
                style={{ animation: "fadeInUp 0.3s ease-out 0.5s both" }}
              >
                <button
                  onClick={nextStep}
                  className="w-[288px] cursor-pointer h-[60px] sm:h-[74px] rounded-[20px] text-[38px] sm:text-[48px] font-medium gap-1 text-white flex flex-row items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(273deg, #FC0 27.88%, #03B934 106.77%)",
                    boxShadow: "0px 6px 5.7px 0px rgba(102, 42, 42, 0.50)",
                  }}
                >
                  <span>{translations.popup_button_next}</span>
                  <ArrowRight size={40} />
                </button>
              </div>
            </div>
          </div>
        );

      case Step.POPUP6:
        return (
          <div
            className={`transition-all duration-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="flex flex-col max-w-[450px] border-2 border-[#FFFC45] items-center p-5 text-center overflow-hidden rounded-[30px] mt-[-40px] sm:mt-[30px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.46) 38.83%, rgba(115, 6, 29, 0.46) 100%)",
                boxShadow:
                  "0px 5px 7.3px rgba(0, 0, 0, 0.67), 2px 1px 0px rgba(250, 0, 0, 0.78)",
                animation: "fadeIn 0.4s ease-out",
              }}
            >
              <div className="flex-row flex items-start w-[100%]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
                <div
                  className="text-white font-bold text-[22px] sm:text-[32px] sm:leading-[35px] leading-[22px] w-full text-center mb-2.5"
                  style={{ animation: "fadeIn 0.3s ease-out 0.1s both" }}
                >
                  {translations.popup6_title}
                </div>
                <span className="w-[14px] h-[14px] rounded-full bg-[#FF0000] mt-2"></span>
              </div>

              <p
                className="font-light text-[16px] sm:text-[24px] leading-[19px] sm:leading-[29px] text-white/90"
                style={{ animation: "fadeIn 0.3s ease-out 0.2s both" }}
              >
                {translations.popup6_text1}
              </p>

              {(() => {
                const text = translations.popup6_text2;
                const words = text.split(" ");

                return (
                  <p
                    className="font-light text-[16px] sm:text-[24px] text-white leading-[19px] sm:leading-[29px] mt-2"
                    style={{ animation: "fadeIn 0.3s ease-out 0.3s both" }}
                  >
                    {words.map((word, index) => (
                      <span
                        key={index}
                        style={{ fontWeight: index === 2 ? 700 : 500 }}
                      >
                        {word}
                        {index < words.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </p>
                );
              })()}

              <p
                className="font-light text-[16px] sm:text-[24px] text-white leading-[19px] sm:leading-[29px] mt-2"
                style={{ animation: "fadeIn 0.3s ease-out 0.4s both" }}
              >
                {translations.popup6_text3}
              </p>

              <div
                className="flex gap-2.5 mt-3 sm:mt-5 w-full justify-center"
                style={{ animation: "fadeInUp 0.3s ease-out 0.5s both" }}
              >
                <button
                  onClick={nextStep}
                  className="w-[288px] cursor-pointer h-[60px] sm:h-[74px] rounded-[20px] text-[38px] sm:text-[48px] font-medium gap-1 text-white flex flex-row items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(273deg, #FC0 27.88%, #03B934 106.77%)",
                    boxShadow: "0px 6px 5.7px 0px rgba(102, 42, 42, 0.50)",
                  }}
                >
                  <span>{translations.popup_button_next}</span>
                  <ArrowRight size={40} />
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="flex justify-center items-center w-full h-full px-5">
        {renderStepContent()}
      </div>

      {/* Мінімальні CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MainPage;
