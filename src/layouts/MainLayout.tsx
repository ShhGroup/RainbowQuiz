import TrackingUtilities, { generateUrlWithTracking } from '../components/TrackingUtilities';

function MainLayout({children}: any) {
  // Функція для редіректу на оффер при кліку на fake кнопки
  const handleFakeButtonClick = (buttonType: string) => {
    // Генеруємо URL з параметрами трекінгу
    const trackingParams = generateUrlWithTracking(buttonType);
    
    // Отримуємо базовий URL поточного сайту (без параметрів)
    const baseUrl = window.location.origin + window.location.pathname;
    
    // Повний URL для редіректу
    const redirectUrl = baseUrl + trackingParams.substring(1); // Видаляємо початковий /
    
    console.log(`Redirecting from ${buttonType} button: ${redirectUrl}`);
    
    // Перенаправляємо на поточний сайт з параметрами
    window.location.href = redirectUrl;
  };

  return (
    <main className="w-full h-screen overflow-hidden">
      {/* Додаємо трекінг компонент */}
      <TrackingUtilities 
        enableBackButton={true} 
        enableLoadTimeTracking={true} 
      />
      
      <div className="flex w-full justify-between pr-4 pl-2 pt-3 absolute z-50 top-0 left-0 right-0">
        <button 
          onClick={() => handleFakeButtonClick('fakeBackButton')}
          className="w-9 h-9 rounded-full  flex justify-center items-center cursor-pointer border-none"
        >
          <img src="./images/back.png" alt="icon" className="mr-[0px]"/>
        </button>
        <button 
          onClick={() => handleFakeButtonClick('fakeCloseButton')}
          className="w-9 h-9 rounded-full flex justify-center items-center cursor-pointer border-none"
        >
          <img src="./images/close.png" alt="icon" />
        </button>
      </div>
      {children} 
    </main>
  )
}

export default MainLayout
