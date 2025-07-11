import { useEffect, useState } from "react";

interface TrackingUtilitiesProps {
  enableBackButton?: boolean;
  enableLoadTimeTracking?: boolean;
  enableFacebookPixel?: boolean;
}

// Окремий компонент для попапу з доданим хрестиком для закриття
const ExitPopup: React.FC<{
  onClose: () => void;
  onClaimClick: () => void;
}> = ({ onClose, onClaimClick }) => {
  
  // ДОДАНО: Функція для трекінгу ViewContent при закритті попапу
  const handleClose = () => {
    console.log('Popup closed - tracking ViewContent');
    if ((window as any).fbq) {
      (window as any).fbq('track', 'ViewContent');
    }
    onClose();
  };

  return (
    <div
      id="exit-popup"
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-opacity-80 bg-black transition-opacity duration-300"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div
        className="bg-white p-6 rounded-2xl max-w-[88vw] text-center shadow-lg relative"
        style={{ animation: "popupFadeIn 0.45s" }}
      >
        {/* Додаємо хрестик для закриття попапу */}
        <button
          onClick={handleClose} // ЗМІНЕНО: Використовуємо handleClose замість onClose
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-[#2667ff] text-2xl font-medium mt-0 mb-0">
          Wait, you're about to leave... 😏
        </h2>
        <p className="mb-2">
          Leaving already? You're about to miss some intense moments with women
          who know exactly what they want!
        </p>
        <p className="text-xl">
          This is your chance to connect and explore exciting encounters...
        </p>
        <button
          onClick={onClaimClick}
          className="bg-[#2667ff] mt-2 text-white py-3 px-8 text-lg border-none rounded-lg cursor-pointer shadow-md hover:bg-[#1548ad] transition-colors duration-200"
        >
          STAY AND EXPERIENCE MORE
        </button>
      </div>
    </div>
  );
};

// Facebook Pixel Manager
const FacebookPixelManager = {
  pixelId: '',
  isInitialized: false,
  
  // Ініціалізація Facebook Pixel
  init(pixelId: string) {
    // Перевіряємо чи вже існує fbq на сторінці та чи піксель вже ініціалізований
    if ((window as any).fbq && this.isInitialized) {
      console.log('Facebook Pixel: already initialized, skipping');
      return;
    }
    
    // Перевіряємо чи fbq вже існує глобально (можливо ініціалізований іншим кодом)
    if ((window as any).fbq && (window as any).fbq.loaded) {
      console.log('Facebook Pixel: already loaded globally, using existing instance');
      this.pixelId = pixelId;
      this.isInitialized = true;
      // Додаємо наш піксель ID до існуючого fbq
      (window as any).fbq('init', pixelId);
      return;
    }
    
    if (!pixelId) {
      console.log('Facebook Pixel: no pixel ID provided');
      return;
    }

    this.pixelId = pixelId;
    console.log(`Initializing Facebook Pixel with ID: ${pixelId}`);

    // Завантажуємо Facebook Pixel код тільки якщо його ще немає
    if (!(window as any).fbq) {
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      // Чекаємо поки скрипт завантажиться
      const checkFbq = () => {
        if ((window as any).fbq && (window as any).fbq.loaded && !this.isInitialized) {
          (window as any).fbq('init', pixelId);
          this.isInitialized = true;
          console.log(`Facebook Pixel initialized successfully with ID: ${pixelId}`);
        } else if (!this.isInitialized) {
          setTimeout(checkFbq, 100);
        }
      };
      checkFbq();
    } else {
      // fbq вже існує, просто ініціалізуємо наш піксель
      (window as any).fbq('init', pixelId);
      this.isInitialized = true;
      console.log(`Facebook Pixel initialized successfully with ID: ${pixelId}`);
    }
  },

  // Трекінг PageView
  trackPageView() {
    if ((window as any).fbq && this.isInitialized) {
      (window as any).fbq('track', 'PageView');
      console.log('Facebook Pixel: PageView tracked');
    }
  },

  // Трекінг ViewContent (користувач виходить зі сторінки)
  trackViewContent() {
    if ((window as any).fbq && this.isInitialized) {
      (window as any).fbq('track', 'ViewContent');
      console.log('Facebook Pixel: ViewContent tracked');
    }
  },

  // Трекінг Contact (початок квізу)
  trackContact() {
    if ((window as any).fbq && this.isInitialized) {
      (window as any).fbq('track', 'Contact');
      console.log('Facebook Pixel: Contact tracked');
    }
  },

  // Трекінг InitiateCheckout (CTA кнопка)
  trackInitiateCheckout() {
    if ((window as any).fbq && this.isInitialized) {
      (window as any).fbq('track', 'InitiateCheckout');
      console.log('Facebook Pixel: InitiateCheckout tracked');
    }
  }
};

/**
 * Отримує Pixel ID з URL параметра Q або q
 */
const getPixelIdFromUrl = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  const pixelId = urlParams.get('Q') || urlParams.get('q');
  
  if (pixelId) {
    console.log(`Found Pixel ID in URL: ${pixelId}`);
    return pixelId;
  }
  
  console.warn('Facebook Pixel ID not found in URL parameters Q or q');
  return null;
};

/**
 * Витягує Facebook Browser ID (fbp) з кукі або створює fallback
 */
const getFacebookBrowserId = (): string => {
  try {
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith('_fbp=')) {
        const fbpValue = trimmedCookie.substring(5);
        console.log(`Facebook Browser ID found in cookies: ${fbpValue}`);
        return fbpValue;
      }
    }
    
    // Якщо _fbp не знайдено, створюємо fallback ID
    console.log('Facebook Browser ID not found in cookies, generating fallback');
    
    let fallbackId = sessionStorage.getItem('fallback_fbp');
    if (!fallbackId) {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 9999999999);
      fallbackId = `fb.1.${timestamp}.${random}`;
      sessionStorage.setItem('fallback_fbp', fallbackId);
      console.log(`Generated fallback Facebook ID: ${fallbackId}`);
    } else {
      console.log(`Using existing fallback Facebook ID: ${fallbackId}`);
    }
    
    return fallbackId;
    
  } catch (error) {
    console.error('Error extracting Facebook Browser ID:', error);
    const errorFallback = `fb.1.${Date.now()}.${Math.floor(Math.random() * 9999999999)}`;
    console.log(`Error fallback Facebook ID: ${errorFallback}`);
    return errorFallback;
  }
};

// ДОДАНО: Функція для автоматичного додавання трекінгу до кнопок
const addQuizTracking = () => {
  setTimeout(() => {
    // Отримуємо поточний URL для визначення сторінки
    const currentUrl = window.location.href;
    const hasLpParam = currentUrl.includes('_lp=1');
    
    console.log(`Adding quiz tracking. Has LP param: ${hasLpParam}`);

    // 1. Перша кнопка квізу (Continue) - Contact
    // Трекаємо тільки якщо це початкова сторінка (без _lp=1)
    if (!hasLpParam) {
      const firstButtons = document.querySelectorAll('button');
      let foundFirstButton = false;
      
      firstButtons.forEach((button: Element) => {
        const buttonElement = button as HTMLElement;
        const buttonText = buttonElement.textContent?.toLowerCase() || '';
        
        // Шукаємо саме першу кнопку "Continue" на початковій сторінці
        if (!foundFirstButton && 
            (buttonText.includes('continue') || buttonText.includes('продовжити') || buttonText.includes('далі')) 
            && !buttonElement.hasAttribute('data-quiz-tracked')) {
          
          buttonElement.addEventListener('click', () => {
            console.log('FIRST Quiz button (Continue) - tracking Contact');
            FacebookPixelManager.trackContact();
          });
          buttonElement.setAttribute('data-quiz-tracked', 'contact');
          console.log('Added Contact tracking to FIRST Continue button');
          foundFirstButton = true; // Зупиняємо після першої знайденої
        }
      });
    }

    // 2. Fake кнопки (fakebuttonclose, fakebuttonback) - ViewContent
    const fakeButtons = document.querySelectorAll('button');
    fakeButtons.forEach((button: Element) => {
      const buttonElement = button as HTMLElement;
      const img = buttonElement.querySelector('img');
      
      if (img && !buttonElement.hasAttribute('data-quiz-tracked')) {
        const imgSrc = img.getAttribute('src') || '';
        
        // Шукаємо кнопки з back.png або close.png
        if (imgSrc.includes('back.png') || imgSrc.includes('close.png')) {
          buttonElement.addEventListener('click', () => {
            console.log('Fake button (back/close) - tracking ViewContent');
            FacebookPixelManager.trackViewContent();
          });
          buttonElement.setAttribute('data-quiz-tracked', 'viewcontent');
          console.log(`Added ViewContent tracking to fake button: ${imgSrc}`);
        }
      }
    });

    // 3. Фінальна CTA кнопка - InitiateCheckout
    // Шукаємо тільки кнопку з конкретним текстом фінальної дії
    const ctaButtons = document.querySelectorAll('button');
    ctaButtons.forEach((button: Element) => {
      const buttonElement = button as HTMLElement;
      const buttonText = buttonElement.textContent?.toLowerCase() || '';
      
      // Шукаємо саме фінальну кнопку з "fuck" або "трахатися" в тексті
      if ((buttonText.includes('fuck') || buttonText.includes('трахат')) 
          && !buttonElement.hasAttribute('data-quiz-tracked')) {
        
        buttonElement.addEventListener('click', () => {
          console.log('FINAL CTA button - tracking InitiateCheckout');
          FacebookPixelManager.trackInitiateCheckout();
        });
        buttonElement.setAttribute('data-quiz-tracked', 'checkout');
        console.log('Added InitiateCheckout tracking to FINAL CTA button');
      }
    });
  }, 1000);
};

const TrackingUtilities: React.FC<TrackingUtilitiesProps> = ({
  enableBackButton = true,
  enableLoadTimeTracking = true,
  enableFacebookPixel = true,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [pageExitTracked, setPageExitTracked] = useState(false);

  useEffect(() => {
    // Зберігаємо ширину та висоту екрану в sessionStorage
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const screenSize = `${screenWidth}x${screenHeight}`;

    sessionStorage.setItem("screen_size", screenSize);
    console.log(`Screen size saved: ${screenSize}`);

    // Ініціалізація Facebook Pixel
    if (enableFacebookPixel) {
      const pixelId = getPixelIdFromUrl();
      if (pixelId) {
        // Ініціалізуємо піксель
        FacebookPixelManager.init(pixelId);
        
        // Чекаємо трохи і трекаємо PageView
        setTimeout(() => {
          FacebookPixelManager.trackPageView();
          
          // ДОДАНО: Налаштовуємо трекінг кнопок після ініціалізації піксела
          addQuizTracking();
          
          // Перевіряємо кнопки кожні 2 секунди (для динамічно створених кнопок)
          const trackingInterval = setInterval(() => {
            addQuizTracking();
          }, 2000);
          
          // Ще трохи чекаємо і зберігаємо fbp
          setTimeout(() => {
            const fbp = getFacebookBrowserId();
            sessionStorage.setItem("facebook_browser_id", fbp);
            console.log(`Facebook Browser ID saved to session: ${fbp}`);
            
            // Очищуємо інтервал через 30 секунд
            setTimeout(() => {
              clearInterval(trackingInterval);
              console.log('Quiz tracking interval cleared');
            }, 30000);
          }, 1000);
        }, 100);
      } else {
        // Якщо немає pixel ID, все одно зберігаємо fallback fbp
        const fbp = getFacebookBrowserId();
        sessionStorage.setItem("facebook_browser_id", fbp);
      }
    } else {
      // Якщо Facebook Pixel відключений
      const fbp = getFacebookBrowserId();
      sessionStorage.setItem("facebook_browser_id", fbp);
    }

    // Додаємо keyframes анімацію для попапу
    const style = document.createElement("style");
    style.textContent = `
      @keyframes popupFadeIn {
        from { opacity: 0; transform: scale(0.94); }
        to { opacity: 1; transform: scale(1); }
      }
      
      #exit-popup {
        background-color: rgba(0, 0, 0, 0.8) !important;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);

    // Обробники для відстеження виходу зі сторінки
    const handleBeforeUnload = () => {
      if (!pageExitTracked && enableFacebookPixel) {
        FacebookPixelManager.trackViewContent();
        setPageExitTracked(true);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !pageExitTracked && enableFacebookPixel) {
        FacebookPixelManager.trackViewContent();
        setPageExitTracked(true);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Функція для очищення при розмонтуванні
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enableFacebookPixel, pageExitTracked]);

  // Функція для перенаправлення на оффер при натисканні кнопки
  const handleClaimClick = () => {
    // Трекаємо InitiateCheckout перед редіректом
    if (enableFacebookPixel) {
      FacebookPixelManager.trackInitiateCheckout();
    }

    // Генеруємо URL з параметрами трекінгу
    const trackingParams = generateUrlWithTracking("popUp");
    const baseUrl = window.location.origin + window.location.pathname;
    const redirectUrl = baseUrl + trackingParams.substring(1);

    console.log(`Redirecting from popup with tracking params: ${redirectUrl}`);
    window.location.href = redirectUrl;
  };

  useEffect(() => {
    console.log("TrackingUtilities mounted with backfix and gesture trap");

    const startTime = Date.now();
    let loadHandler: (() => void) | null = null;

    // Визначення Facebook App
    const detectFBApp = () => {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      return /FBAN|FBAV|FB_IAB|FB4A|FBIOS|FBAV/i.test(ua);
    };

    // Вимірювання часу завантаження сторінки
    if (enableLoadTimeTracking) {
      loadHandler = () => {
        const loadTime = (Date.now() - startTime) / 1000;
        const formattedLoadTime = loadTime.toFixed(3);
        sessionStorage.setItem("page_load_time", formattedLoadTime);
        console.log(`Page load time tracked: ${formattedLoadTime}s`);
      };

      if (document.readyState === "complete") {
        loadHandler();
      } else {
        window.addEventListener("load", loadHandler);
      }
    }

    // ОНОВЛЕНО: Функція для редіректу з backfix параметром + ViewContent трекінг
    function redirectWithBackfix() {
      // ДОДАНО: Трекаємо ViewContent при backfix редіректі
      if (enableFacebookPixel) {
        console.log('Backfix redirect - tracking ViewContent');
        FacebookPixelManager.trackViewContent();
      }
      
      sessionStorage.setItem("backfix_param", "backfix");
      const trackingParams = generateUrlWithTracking("backfix");
      const baseUrl = window.location.origin + window.location.pathname;
      const redirectUrl = baseUrl + trackingParams.substring(1);

      console.log(`Redirecting with backfix to: ${redirectUrl}`);
      window.location.replace(redirectUrl);
    }

    let popStateHandler: ((e: PopStateEvent) => void) | null = null;
    let hashChangeHandler: (() => void) | null = null;
    let visibilityHandler: (() => void) | null = null;

    // === BACKFIX (для кнопки "Назад") ===
    if (enableBackButton) {
      function setBacktrap() {
        for (let i = 0; i < 2; i++) {
          window.history.pushState(
            { backfix: true },
            "",
            window.location.href + "#back" + i + Date.now()
          );
        }
        console.log("Backfix trap initialized");
      }

      popStateHandler = (e: PopStateEvent) => {
        if (detectFBApp()) {
          setTimeout(() => {
            redirectWithBackfix();
          }, 150);
        } else {
          if (e.state && e.state.backfix) {
            redirectWithBackfix();
          }
        }
      };

      hashChangeHandler = () => {
        if (window.location.hash && /#back\d+/.test(window.location.hash)) {
          redirectWithBackfix();
        }
      };

      visibilityHandler = () => {
        if (document.visibilityState === "hidden") {
          setTimeout(() => {
            redirectWithBackfix();
          }, 300);
        }
      };

      setBacktrap();
      window.addEventListener("popstate", popStateHandler);
      window.addEventListener("hashchange", hashChangeHandler);

      if (detectFBApp()) {
        window.addEventListener("visibilitychange", visibilityHandler);
      }
    }

    // === GESTURE / SCROLL / PULL-TO-REFRESH TRAP ===
    let trapFired = false;
    let lastScrollY = window.scrollY;
    let scrollDirection = 0;
    let isInitialScroll = true;

    function displayPopup() {
      if (trapFired) return;
      trapFired = true;
      setShowPopup(true);
      console.log("Gesture trap activated: showing popup");
    }

    const scrollHandler = () => {
      let nowScroll = window.scrollY;

      if (isInitialScroll) {
        isInitialScroll = false;
        lastScrollY = nowScroll;
        return;
      }

      if (nowScroll < lastScrollY) {
        scrollDirection = -1;
      } else if (nowScroll > lastScrollY) {
        scrollDirection = 1;
      }

      if (scrollDirection === -1 && nowScroll < 20 && lastScrollY > 200) {
        displayPopup();
      }

      lastScrollY = nowScroll;
    };
    window.addEventListener("scroll", scrollHandler);

    // Touch gestures
    let touchStartX = 0, touchStartY = 0;
    
    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const touchEndHandler = (e: TouchEvent) => {
      if (e.changedTouches.length === 1) {
        let dX = e.changedTouches[0].clientX - touchStartX;
        let dY = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(dX) > 100 && Math.abs(dY) < 50) {
          displayPopup();
        }
      }
    };

    window.addEventListener("touchstart", touchStartHandler);
    window.addEventListener("touchend", touchEndHandler);

    // Pull-to-refresh trap
    let startY = 0, pulling = false;
    
    const pullStartHandler = (e: TouchEvent) => {
      if (window.scrollY === 0 && e.touches.length === 1) {
        startY = e.touches[0].clientY;
        pulling = true;
      }
    };

    const pullMoveHandler = (e: TouchEvent) => {
      if (!pulling) return;
      let currentY = e.touches[0].clientY;
      if (currentY - startY > 50 && window.scrollY === 0) {
        displayPopup();
        pulling = false;
      }
      if (currentY - startY < 0) pulling = false;
    };

    const pullEndHandler = () => {
      pulling = false;
    };

    window.addEventListener("touchstart", pullStartHandler, { passive: true });
    window.addEventListener("touchmove", pullMoveHandler, { passive: true });
    window.addEventListener("touchend", pullEndHandler);

    // Cleanup function
    return () => {
      if (enableLoadTimeTracking && loadHandler) {
        window.removeEventListener("load", loadHandler);
      }

      if (popStateHandler) {
        window.removeEventListener("popstate", popStateHandler);
      }

      if (hashChangeHandler) {
        window.removeEventListener("hashchange", hashChangeHandler);
      }

      if (visibilityHandler && detectFBApp()) {
        window.removeEventListener("visibilitychange", visibilityHandler);
      }

      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("touchstart", touchStartHandler);
      window.removeEventListener("touchend", touchEndHandler);
      window.removeEventListener("touchstart", pullStartHandler);
      window.removeEventListener("touchmove", pullMoveHandler);
      window.removeEventListener("touchend", pullEndHandler);
    };
  }, [enableBackButton, enableLoadTimeTracking, enableFacebookPixel]); // ДОДАНО enableFacebookPixel в dependencies

  if (showPopup) {
    return (
      <ExitPopup
        onClose={() => setShowPopup(false)}
        onClaimClick={handleClaimClick}
      />
    );
  }

  return null;
};

/**
 * Генерує URL з відстеженими параметрами
 */
export const generateUrlWithTracking = (buttonType: string): string => {
  let loadTime = sessionStorage.getItem("page_load_time");
  if (!loadTime || parseFloat(loadTime) < 0) {
    loadTime = "0.000";
  }

  const screenSize = sessionStorage.getItem("screen_size") || "unknown";
  
  // Спробуємо ще раз отримати актуальний Facebook Browser ID
  let fbp = sessionStorage.getItem("facebook_browser_id") || "unknown";
  if (fbp === "unknown") {
    const freshFbp = getFacebookBrowserId();
    sessionStorage.setItem("facebook_browser_id", freshFbp);
    fbp = freshFbp;
    console.log(`Updated Facebook Browser ID: ${fbp}`);
  }

  const hasBackfix = sessionStorage.getItem("backfix_param") === "backfix";
  let transitionType = buttonType;
  if (hasBackfix && buttonType !== "popUp") {
    transitionType = "backfix";
  }

  const finalUrl = `/?_lp=1&sub_id_16=${fbp}&sub_id_20=${transitionType}&sub_id_21=${loadTime}&sub_id_22=${screenSize}`;
  console.log(`Generated tracking URL: ${finalUrl}`);
  
  return finalUrl;
};

// ДОДАНО: Експорт функцій для ручного трекінгу
export const trackQuizStart = (): void => {
  console.log('Manual quiz start tracking');
  FacebookPixelManager.trackContact();
};

export const trackCTAClick = (): void => {
  console.log('Manual CTA click tracking');
  FacebookPixelManager.trackInitiateCheckout();
};

export const trackViewContent = (): void => {
  console.log('Manual view content tracking');
  FacebookPixelManager.trackViewContent();
};

export default TrackingUtilities;