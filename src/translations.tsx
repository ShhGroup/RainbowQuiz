// Мови, які підтримуються на цій сторінці
export const supportedLanguages = [
  "en", // Англійська (за замовчуванням)
  "es", // Іспанська
  "it", // Італійська
  "de", // Німецька
  "fr", // Французька
  "uk", // Українська
  "pl", // Польська
  "cs", // Чеська
  "nl", // Голландська
  "da", // Данська
  "sv", // Шведська
  "el", // Грецька
  "no", // Норвезька
  "fi", // Фінська
  "ja", // Японська
  "ro", // Румунська
  "hr", // Хорватська
  "ar", // Арабська
  "sk", // Словацька
  "ru", // Російська
  "tr", // Турецька
  "pt", // Португальська
  "zh", // Китайська
  "hu", // Угорська
  "lt", // Литовська
  "bg", // Болгарська
  "sr", // Сербська
  "sq", // Албанська
] as const;

// Типізація для кодів мов
export type LanguageCode = (typeof supportedLanguages)[number];

// Назви мов (для відображення в селекторі мов)
export const languageNames: Record<LanguageCode, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
  fr: "Français",
  uk: "Українська",
  pl: "Polski",
  cs: "Čeština",
  nl: "Nederlands",
  da: "Dansk",
  sv: "Svenska",
  el: "Ελληνικά",
  no: "Norsk",
  fi: "Suomi",
  ja: "日本語",
  ro: "Română",
  hr: "Hrvatski",
  ar: "العربية",
  sk: "Slovenčina",
  ru: "Русский",
  tr: "Türkçe",
  pt: "Português",
  zh: "中文",
  hu: "Magyar",
  lt: "Lietuvių",
  bg: "Български",
  sr: "Српски",
  sq: "Shqip",
};

// Визначення типу для перекладів
export interface Translation {
  // Step 1
  title: string;
  popup1_title: string;
  popup1_text1: string;
  popup1_text2: string;
  popup2_title: string;
  popup2_text1: string;
  popup2_text2: string;
  popup3_title: string;
  popup3_option1: string;
  popup3_option2: string;
  popup3_option3: string;
  popup3_option4: string;
  popup3_text1: string;
  popup4_title: string;
  popup4_option1: string;
  popup4_option2: string;
  popup4_option3: string;
  popup4_text1: string;
  popup5_title: string;
  popup5_option1: string;
  popup5_option2: string;
  popup5_option3: string;
  popup5_option4: string;
  popup5_text1: string;
  popup6_title: string;
  popup6_text1: string;
  popup6_text2: string;
  popup6_text3: string;
  popup_button_next: string;
  popup_button_ok: string;
  popup_button_yes: string;
  popup_honestText: string;
  popup_underButtonText: string;
}

// Переклади для всіх текстів інтерфейсу
export const translations: Record<LanguageCode, Translation> = {
  // Англійська (мова за замовчуванням)
  en: {
    title:
      "READY TO GET LAID TONIGHT? \n YOUR NEXT SEX PARTNER IS JUST A CLICK AWAY!",
    popup1_title:
      "The Milf you like is waiting \n for you, her message is \n already in the chat",
    popup1_text1:
      "46 local women are online right now — all within a few miles of you — and they're not looking for pen pals",
    popup1_text2: "Take a quick quiz to begin chatting!",
    popup2_title: "WANT TO SEE \n UNCENSORED NUDES \n RIGHT NOW?",
    popup2_text1: "🔥HELL YES — or keep living bored",
    popup2_text2: "👉 Click 'YES' to see who's getting \n naked near you.",
    popup3_title: "WHAT KIND OF BODY \n TURNS YOU ON?",
    popup3_option1: "🔥MILFs who know what they want",
    popup3_option2: "🍒Big, mouthwatering breasts",
    popup3_option3: "🍑 Thick, juicy asses",
    popup3_option4: "👀 Slim and sexy",
    popup3_text1: "Enter your option - surprise us...|",
    popup4_title: "WHAT EXACTLY DO YOU \n WANT — SEX, \n COMMITMENT, OR BOTH?",
    popup4_option1: "🍆 Casual sex — no strings, just bodies",
    popup4_option2: "🔥 One-night stand — hit it and quit it",
    popup4_option3:
      "💑 Looking for a partner — \n someone to f*ck and vibe with",
    popup4_text1: "Be real. Be bold \n Your next move starts here",
    popup5_title: "HOW CLOSE DO YOU WANT \n YOUR NEXT FUCK TO BE?",
    popup5_option1:
      "🚶‍♀️ Walking distance — \n you could be at her door in minutes",
    popup5_option2: "🏙️ Same city — \n she's already waiting nearby",
    popup5_option3: "🚗 Nearby cities? Fine — \n if she's worth the drive",
    popup5_option4: "🗺️ Same country — still game, just not lazy",
    popup5_text1: "Choose your zone — \n hookups are happening fast",
    popup6_title:
      "NAILED IT — YOU'RE \n EXACTLY WHAT THESE \n WOMEN ARE LOOKING FOR",
    popup6_text1:
      "Your answers match dozens of local, \n horny women ready to meet right now",
    popup6_text2:
      '🔥 Click "NEXT" to unlock their \n pics, profiles, and fantasies',
    popup6_text3: "Don't waste this — they're online and waiting",
    popup_button_next: "NEXT",
    popup_button_ok: "OK",
    popup_button_yes: "YES",
    popup_honestText: "(Pick up to 3 — don't overthink it, just be honest.)",
    popup_underButtonText: 'Click the "continue" button \n and take the survey',
  },

  // Іспанська
  es: {
    title:
      "¿LISTO PARA FOLLAR ESTA NOCHE? \n ¡TU PRÓXIMA PAREJA SEXUAL ESTÁ A UN CLIC!",
    popup1_title:
      "La MILF que te gusta está esperando \n por ti, su mensaje ya está \n en el chat",
    popup1_text1:
      "46 mujeres locales están en línea ahora — todas a unas pocas millas de ti — y no buscan amigos por correspondencia",
    popup1_text2: "¡Responde un cuestionario rápido para comenzar a chatear!",
    popup2_title: "¿QUIERES VER \n DESNUDOS SIN CENSURA \n AHORA MISMO?",
    popup2_text1: "🔥DIABLOS SÍ — o sigue viviendo aburrido",
    popup2_text2:
      '👉 Haz clic en "SÍ" para ver quién se está \n desnudando cerca de ti.',
    popup3_title: "¿QUÉ TIPO DE CUERPO \n TE EXCITA?",
    popup3_option1: "🔥MILFs que saben lo que quieren",
    popup3_option2: "🍒Pechos grandes y deliciosos",
    popup3_option3: "🍑 Culos gruesos y jugosos",
    popup3_option4: "👀 Delgada y sexy",
    popup3_text1: "Ingresa tu opción - sorpréndenos...|",
    popup4_title: "¿QUÉ EXACTAMENTE QUIERES \n — SEXO, COMPROMISO \n O AMBOS?",
    popup4_option1: "🍆 Sexo casual — sin ataduras, solo cuerpos",
    popup4_option2: "🔥 Aventura de una noche — úsala y déjala",
    popup4_option3: "💑 Buscando pareja — \n alguien para follar y conectar",
    popup4_text1: "Sé real. Sé audaz \n Tu próximo movimiento comienza aquí",
    popup5_title: "¿QUÉ TAN CERCA QUIERES \n TU PRÓXIMO POLVO?",
    popup5_option1:
      "🚶‍♀️ Distancia caminando — \n podrías estar en su puerta en minutos",
    popup5_option2: "🏙️ Misma ciudad — \n ya está esperando cerca",
    popup5_option3: "🚗 ¿Ciudades cercanas? Bien — \n si vale la pena el viaje",
    popup5_option4: "🗺️ Mismo país — aún interesado, no perezoso",
    popup5_text1: "Elige tu zona — \n los encuentros están pasando rápido",
    popup6_title:
      "PERFECTO — ERES \n EXACTAMENTE LO QUE \n ESTAS MUJERES BUSCAN",
    popup6_text1:
      "Tus respuestas coinciden con docenas de mujeres locales \n calientes listas para conocerte ahora",
    popup6_text2:
      '🔥 Haz clic en "SIGUIENTE" para desbloquear sus \n fotos, perfiles y fantasías',
    popup6_text3: "No desperdicies esto — están en línea y esperando",
    popup_button_next: "SIGUIENTE",
    popup_button_ok: "OK",
    popup_button_yes: "SÍ",
    popup_honestText:
      "(Elige hasta 3 — no lo pienses demasiado, solo sé honesto.)",
    popup_underButtonText:
      'Haz clic en el botón "continuar" \n y responde la encuesta',
  },

  // Італійська
  it: {
    title:
      "PRONTO A SCOPARE STASERA? \n IL TUO PROSSIMO PARTNER SESSUALE È A UN CLIC!",
    popup1_title:
      "La MILF che ti piace ti sta aspettando, \n il suo messaggio è già \n nella chat",
    popup1_text1:
      "46 donne locali sono online ora — tutte nel raggio di pochi chilometri da te — e non cercano amici di penna",
    popup1_text2: "Fai un quiz veloce per iniziare a chattare!",
    popup2_title: "VUOI VEDERE \n NUDI NON CENSURATI \n ADESSO?",
    popup2_text1: "🔥CAZZO SÌ — o continua a vivere annoiato",
    popup2_text2:
      '👉 Clicca "SÌ" per vedere chi si sta \n spogliando vicino a te.',
    popup3_title: "CHE TIPO DI CORPO \n TI ECCITA?",
    popup3_option1: "🔥MILF che sanno cosa vogliono",
    popup3_option2: "🍒Tette grosse e appetitose",
    popup3_option3: "🍑 Culi grossi e succosi",
    popup3_option4: "👀 Magra e sexy",
    popup3_text1: "Inserisci la tua opzione - sorprendici...|",
    popup4_title: "COSA VUOI ESATTAMENTE \n — SESSO, IMPEGNO \n O ENTRAMBI?",
    popup4_option1: "🍆 Sesso casual — senza legami, solo corpi",
    popup4_option2: "🔥 Avventura di una notte — colpisci e scappa",
    popup4_option3:
      "💑 Cerco un partner — \n qualcuno con cui scopare e connettermi",
    popup4_text1: "Sii vero. Sii audace \n La tua prossima mossa inizia qui",
    popup5_title: "QUANTO VICINO VUOI \n LA TUA PROSSIMA SCOPATA?",
    popup5_option1:
      "🚶‍♀️ Distanza a piedi — \n potresti essere alla sua porta in minuti",
    popup5_option2: "🏙️ Stessa città — \n ti sta già aspettando vicino",
    popup5_option3: "🚗 Città vicine? Va bene — \n se vale la pena guidare",
    popup5_option4: "🗺️ Stesso paese — ancora interessato, non pigro",
    popup5_text1:
      "Scegli la tua zona — \n gli incontri stanno succedendo velocemente",
    popup6_title:
      "PERFETTO — SEI \n ESATTAMENTE QUELLO CHE \n QUESTE DONNE CERCANO",
    popup6_text1:
      "Le tue risposte corrispondono a dozzine di donne locali \n arrapate pronte a incontrarti ora",
    popup6_text2:
      '🔥 Clicca "AVANTI" per sbloccare le loro \n foto, profili e fantasie',
    popup6_text3: "Non sprecare questo — sono online e aspettano",
    popup_button_next: "AVANTI",
    popup_button_ok: "OK",
    popup_button_yes: "SÌ",
    popup_honestText:
      "(Scegli fino a 3 — non pensarci troppo, sii solo onesto.)",
    popup_underButtonText:
      'Clicca il pulsante "continua" \n e fai il sondaggio',
  },

  // Німецька
  de: {
    title:
      "BEREIT, HEUTE NACHT ZU FICKEN? \n DEIN NÄCHSTER SEXPARTNER IST NUR EINEN KLICK ENTFERNT!",
    popup1_title:
      "Die MILF, die dir gefällt, wartet \n auf dich, ihre Nachricht ist \n bereits im Chat",
    popup1_text1:
      "46 lokale Frauen sind gerade online — alle nur wenige Meilen von dir entfernt — und sie suchen keine Brieffreunde",
    popup1_text2: "Mach ein schnelles Quiz, um zu chatten!",
    popup2_title: "WILLST DU \n UNZENSIERTE NACKTBILDER \n JETZT SEHEN?",
    popup2_text1: "🔥VERDAMMT JA — oder bleib gelangweilt",
    popup2_text2:
      '👉 Klick "JA" um zu sehen, wer sich \n in deiner Nähe auszieht.',
    popup3_title: "WELCHE ART VON KÖRPER \n MACHT DICH AN?",
    popup3_option1: "🔥MILFs, die wissen, was sie wollen",
    popup3_option2: "🍒Große, verlockende Brüste",
    popup3_option3: "🍑 Dicke, saftige Ärsche",
    popup3_option4: "👀 Schlank und sexy",
    popup3_text1: "Gib deine Option ein - überrasche uns...|",
    popup4_title: "WAS WILLST DU GENAU \n — SEX, VERPFLICHTUNG \n ODER BEIDES?",
    popup4_option1: "🍆 Gelegenheitssex — keine Bindungen, nur Körper",
    popup4_option2: "🔥 One-Night-Stand — ran und wieder weg",
    popup4_option3:
      "💑 Suche einen Partner — \n jemanden zum ficken und verstehen",
    popup4_text1: "Sei echt. Sei mutig \n Dein nächster Zug beginnt hier",
    popup5_title: "WIE NAH WILLST DU \n DEINEN NÄCHSTEN FICK?",
    popup5_option1:
      "🚶‍♀️ Fußentfernung — \n du könntest in Minuten vor ihrer Tür stehen",
    popup5_option2: "🏙️ Gleiche Stadt — \n sie wartet bereits in der Nähe",
    popup5_option3: "🚗 Nachbarstädte? Okay — \n wenn sie die Fahrt wert ist",
    popup5_option4: "🗺️ Gleiches Land — immer noch interessiert, nicht faul",
    popup5_text1: "Wähle deine Zone — \n Hookups passieren schnell",
    popup6_title: "PERFEKT — DU BIST \n GENAU DAS, WAS DIESE \n FRAUEN SUCHEN",
    popup6_text1:
      "Deine Antworten passen zu Dutzenden lokaler, \n geiler Frauen, die bereit sind, dich jetzt zu treffen",
    popup6_text2:
      '🔥 Klick "WEITER" um ihre \n Bilder, Profile und Fantasien freizuschalten',
    popup6_text3: "Verschwende das nicht — sie sind online und warten",
    popup_button_next: "WEITER",
    popup_button_ok: "OK",
    popup_button_yes: "JA",
    popup_honestText:
      "(Wähle bis zu 3 — denk nicht zu viel nach, sei einfach ehrlich.)",
    popup_underButtonText: 'Klick den "weiter" Button \n und mach die Umfrage',
  },

  // Французька
  fr: {
    title:
      "PRÊT À BAISER CE SOIR? \n TON PROCHAIN PARTENAIRE SEXUEL EST À UN CLIC!",
    popup1_title:
      "La MILF que tu aimes t'attend, \n son message est déjà \n dans le chat",
    popup1_text1:
      "46 femmes locales sont en ligne maintenant — toutes à quelques kilomètres de toi — et elles ne cherchent pas de correspondants",
    popup1_text2: "Fais un quiz rapide pour commencer à chatter!",
    popup2_title: "VEUX-TU VOIR \n DES NUS NON CENSURÉS \n MAINTENANT?",
    popup2_text1: "🔥PUTAIN OUI — ou continue à vivre ennuyé",
    popup2_text2: '👉 Clique "OUI" pour voir qui se \n déshabille près de toi.',
    popup3_title: "QUEL TYPE DE CORPS \n T'EXCITE?",
    popup3_option1: "🔥MILFs qui savent ce qu'elles veulent",
    popup3_option2: "🍒Gros seins appétissants",
    popup3_option3: "🍑 Gros culs juteux",
    popup3_option4: "👀 Mince et sexy",
    popup3_text1: "Entre ton option - surprends-nous...|",
    popup4_title:
      "QUE VEUX-TU EXACTEMENT \n — SEXE, ENGAGEMENT \n OU LES DEUX?",
    popup4_option1: "🍆 Sexe occasionnel — sans attaches, juste des corps",
    popup4_option2: "🔥 Coup d'un soir — frappe et tire-toi",
    popup4_option3:
      "💑 Cherche un partenaire — \n quelqu'un pour baiser et connecter",
    popup4_text1:
      "Sois vrai. Sois audacieux \n Ton prochain mouvement commence ici",
    popup5_title: "À QUELLE DISTANCE VEUX-TU \n TON PROCHAIN COUP?",
    popup5_option1:
      "🚶‍♀️ Distance à pied — \n tu pourrais être à sa porte en minutes",
    popup5_option2: "🏙️ Même ville — \n elle t'attend déjà près",
    popup5_option3: "🚗 Villes proches? Bien — \n si elle vaut le trajet",
    popup5_option4: "🗺️ Même pays — encore intéressé, pas paresseux",
    popup5_text1: "Choisis ta zone — \n les rencontres se passent vite",
    popup6_title:
      "PARFAIT — TU ES \n EXACTEMENT CE QUE \n CES FEMMES CHERCHENT",
    popup6_text1:
      "Tes réponses correspondent à des dizaines de femmes locales \n excitées prêtes à te rencontrer maintenant",
    popup6_text2:
      '🔥 Clique "SUIVANT" pour débloquer leurs \n photos, profils et fantasmes',
    popup6_text3: "Ne gaspille pas ça — elles sont en ligne et attendent",
    popup_button_next: "SUIVANT",
    popup_button_ok: "OK",
    popup_button_yes: "OUI",
    popup_honestText:
      "(Choisis jusqu'à 3 — ne réfléchis pas trop, sois juste honnête.)",
    popup_underButtonText: 'Clique le bouton "continuer" \n et fais le sondage',
  },

  // Українська
  uk: {
    title:
      "ГОТОВИЙ ТРАХНУТИСЯ СЬОГОДНІ ВНОЧІ? \n ТВІЙ НАСТУПНИЙ СЕКСУАЛЬНИЙ ПАРТНЕР ЛИШЕ ЗА КЛІКОМ!",
    popup1_title:
      "Мілфа, яка тобі подобається, чекає \n на тебе, її повідомлення вже \n у чаті",
    popup1_text1:
      "46 місцевих жінок онлайн прямо зараз — усі в межах кількох кілометрів від тебе — і вони не шукають друзів по листуванню",
    popup1_text2: "Пройди швидкий тест, щоб почати спілкування!",
    popup2_title: "ХОЧЕШ ПОБАЧИТИ \n НЕЦЕНЗУРНІ ОГОЛЕНІ ФОТО \n ПРЯМО ЗАРАЗ?",
    popup2_text1: "🔥ЗВИЧАЙНО ТАК — або продовжуй жити нудно",
    popup2_text2:
      '👉 Натисни "ТАК", щоб побачити, хто \n роздягається поряд з тобою.',
    popup3_title: "ЯКИЙ ТИП ТІЛА \n ТЕБЕ ЗБУДЖУЄ?",
    popup3_option1: "🔥МІЛФи, які знають, чого хочуть",
    popup3_option2: "🍒Великі, апетитні груди",
    popup3_option3: "🍑 Пишні, соковиті сідниці",
    popup3_option4: "👀 Струнка і сексуальна",
    popup3_text1: "Введи свій варіант - здивуй нас...|",
    popup4_title: "ЩО САМЕ ТИ ХОЧЕШ \n — СЕКС, ВІДНОСИНИ \n ЧИ ОБА?",
    popup4_option1: "🍆 Випадковий секс — без зобов'язань, лише тіла",
    popup4_option2: "🔥 Одна ніч — трахнув і пішов",
    popup4_option3: "💑 Шукаю партнера — \n когось для сексу та спілкування",
    popup4_text1:
      "Будь справжнім. Будь сміливим \n Твій наступний крок починається тут",
    popup5_title: "НА ЯКІЙ ВІДСТАНІ ТИ ХОЧЕШ \n СВІЙ НАСТУПНИЙ СЕКС?",
    popup5_option1: "🚶‍♀️ Пішки — \n ти міг би бути біля її дверей за хвилини",
    popup5_option2: "🏙️ Те ж місто — \n вона вже чекає поруч",
    popup5_option3: "🚗 Сусідні міста? Добре — \n якщо вона варта поїздки",
    popup5_option4: "🗺️ Та ж країна — все ще цікавий, не лінивий",
    popup5_text1: "Вибери свою зону — \n зустрічі відбуваються швидко",
    popup6_title: "ВІДМІННО — ТИ САМЕ ТОЙ, \n КОГО ШУКАЮТЬ ЦІ ЖІНКИ",
    popup6_text1:
      "Твої відповіді збігаються з десятками місцевих \n збуджених жінок, готових зустрітися прямо зараз",
    popup6_text2:
      '🔥 Натисни "ДАЛІ", щоб розблокувати їх \n фото, профілі та фантазії',
    popup6_text3: "Не втрачай цього — вони онлайн і чекають",
    popup_button_next: "ДАЛІ",
    popup_button_ok: "ОК",
    popup_button_yes: "ТАК",
    popup_honestText: "(Вибери до 3 — не думай довго, просто будь чесним.)",
    popup_underButtonText: 'Натисни кнопку "продовжити" \n і пройди опитування',
  },

  // Польська
  pl: {
    title:
      "GOTOWY NA RUCHANIE DZIŚ WIECZOREM? \n TWÓJ NASTĘPNY PARTNER SEKSUALNY TO TYLKO KLIKNIĘCIE!",
    popup1_title:
      "MILF, którą lubisz, czeka \n na ciebie, jej wiadomość już \n jest w czacie",
    popup1_text1:
      "46 lokalnych kobiet jest teraz online — wszystkie w promieniu kilku mil od ciebie — i nie szukają korespondentów",
    popup1_text2: "Weź szybki quiz, aby zacząć czatować!",
    popup2_title: "CHCESZ ZOBACZYĆ \n NIECENZURALNE NAGIE ZDJĘCIA \n TERAZ?",
    popup2_text1: "🔥KURWA TAK — albo żyj dalej w nudzie",
    popup2_text2:
      '👉 Kliknij "TAK", aby zobaczyć, kto się \n rozbiera w twojej okolicy.',
    popup3_title: "JAKI TYP CIAŁA \n CIĘ PODNIECA?",
    popup3_option1: "🔥MILFy, które wiedzą, czego chcą",
    popup3_option2: "🍒Duże, smakowite piersi",
    popup3_option3: "🍑 Grube, soczyste tyłki",
    popup3_option4: "👀 Szczupła i seksowna",
    popup3_text1: "Wprowadź swoją opcję - zaskocz nas...|",
    popup4_title:
      "CZEGO DOKŁADNIE CHCESZ \n — SEKSU, ZOBOWIĄZANIA \n CZY OBOIGA?",
    popup4_option1: "🍆 Przygodny seks — bez zobowiązań, tylko ciała",
    popup4_option2: "🔥 Jednorazowe spotkanie — przelecieć i uciec",
    popup4_option3: "💑 Szukam partnera — \n kogoś do pieprzenia i gadania",
    popup4_text1:
      "Bądź prawdziwy. Bądź odważny \n Twój kolejny ruch zaczyna się tutaj",
    popup5_title: "JAK BLISKO CHCESZ \n SWOJEGO NASTĘPNEGO RUCHANIA?",
    popup5_option1:
      "🚶‍♀️ Odległość spacerowa — \n mógłbyś być przy jej drzwiach w minuty",
    popup5_option2: "🏙️ To samo miasto — \n już czeka w pobliżu",
    popup5_option3: "🚗 Pobliskie miasta? W porządku — \n jeśli warta jazdy",
    popup5_option4: "🗺️ Ten sam kraj — wciąż zainteresowany, nie leniwy",
    popup5_text1: "Wybierz swoją strefę — \n spotkania dzieją się szybko",
    popup6_title:
      "ŚWIETNIE — JESTEŚ \n DOKŁADNIE TYM, CZEGO \n TE KOBIETY SZUKAJĄ",
    popup6_text1:
      "Twoje odpowiedzi pasują do dziesiątek lokalnych, \n napalonych kobiet gotowych spotkać się teraz",
    popup6_text2:
      '🔥 Kliknij "DALEJ", aby odblokować ich \n zdjęcia, profile i fantazje',
    popup6_text3: "Nie marnuj tego — są online i czekają",
    popup_button_next: "DALEJ",
    popup_button_ok: "OK",
    popup_button_yes: "TAK",
    popup_honestText:
      "(Wybierz do 3 — nie myśl za dużo, po prostu bądź szczery.)",
    popup_underButtonText:
      'Kliknij przycisk "kontynuuj" \n i weź udział w ankiecie',
  },

  // Чеська
  cs: {
    title:
      "PŘIPRAVEN NA ŠUKÁNÍ DNES VEČER? \n TVŮJ DALŠÍ SEXUÁLNÍ PARTNER JE JEN KLIK DALEKO!",
    popup1_title:
      "MILF, kterou máš rád, na tebe čeká, \n její zpráva už je \n v chatu",
    popup1_text1:
      "46 místních žen je teď online — všechny v okruhu několika mil od tebe — a nehledají dopisovatele",
    popup1_text2: "Udělej rychlý kvíz a začni chatovat!",
    popup2_title: "CHCEŠ VIDĚT \n NECENZUROVANÉ NAHÉ FOTKY \n TEĎKA?",
    popup2_text1: "🔥KURVA ANO — nebo žij dál v nudě",
    popup2_text2: '👉 Klikni "ANO" a uvidíš, kdo se \n svléká blízko tebe.',
    popup3_title: "JAKÝ TYP TĚLA \n TĚ VZRUŠUJE?",
    popup3_option1: "🔥MILFky, které vědí, co chtějí",
    popup3_option2: "🍒Velká, lákavá prsa",
    popup3_option3: "🍑 Tlusté, šťavnaté zadky",
    popup3_option4: "👀 Štíhlá a sexy",
    popup3_text1: "Zadej svou možnost - překvap nás...|",
    popup4_title: "CO PŘESNĚ CHCEŠ \n — SEX, ZÁVAZEK \n NEBO OBÉ?",
    popup4_option1: "🍆 Nezávazný sex — žádné závazky, jen těla",
    popup4_option2: "🔥 Jednu noc — ošukat a zmizet",
    popup4_option3: "💑 Hledám partnera — \n někoho na šukání a povídání",
    popup4_text1: "Buď skutečný. Buď odvážný \n Tvůj další tah začíná tady",
    popup5_title: "JAK BLÍZKO CHCEŠ \n SVŮJ DALŠÍ SEX?",
    popup5_option1:
      "🚶‍♀️ Pěší vzdálenost — \n mohl bys být u jejích dveří za minuty",
    popup5_option2: "🏙️ Stejné město — \n už čeká nablízku",
    popup5_option3: "🚗 Blízká města? Dobrý — \n pokud stojí za cestu",
    popup5_option4: "🗺️ Stejná země — stále zájem, ne líný",
    popup5_text1: "Vyber svou zónu — \n setkání se dějí rychle",
    popup6_title: "SKVĚLÉ — JSI \n PŘESNĚ TO, CO \n TYTO ŽENY HLEDAJÍ",
    popup6_text1:
      "Tvé odpovědi pasují desítkám místních \n nadrženích žen připravených se setkat teď",
    popup6_text2:
      '🔥 Klikni "DALŠÍ" a odemkni jejich \n fotky, profily a fantazie',
    popup6_text3: "Nevyplýtvej to — jsou online a čekají",
    popup_button_next: "DALŠÍ",
    popup_button_ok: "OK",
    popup_button_yes: "ANO",
    popup_honestText: "(Vyber až 3 — nemysli na to moc, buď jen upřímný.)",
    popup_underButtonText:
      'Klikni na tlačítko "pokračovat" \n a udělej průzkum',
  },

  // Голландська
  nl: {
    title:
      "KLAAR OM VANAVOND TE NEUKEN? \n JE VOLGENDE SEKSPARTNER IS SLECHTS EEN KLIK WEG!",
    popup1_title:
      "De MILF die je leuk vindt wacht \n op je, haar bericht staat al \n in de chat",
    popup1_text1:
      "46 lokale vrouwen zijn nu online — allemaal binnen een paar mijl van je — en ze zoeken geen penvrienden",
    popup1_text2: "Doe een snelle quiz om te beginnen met chatten!",
    popup2_title: "WIL JE \n ONGECENSUREERDE NAAKTFOTO'S \n NU ZIEN?",
    popup2_text1: "🔥VERDAMME JA — of blijf saai leven",
    popup2_text2:
      '👉 Klik "JA" om te zien wie zich \n uitkleedt bij jou in de buurt.',
    popup3_title: "WELK TYPE LICHAAM \n WINDT JE OP?",
    popup3_option1: "🔥MILFs die weten wat ze willen",
    popup3_option2: "🍒Grote, verleidelijke borsten",
    popup3_option3: "🍑 Dikke, sappige konten",
    popup3_option4: "👀 Slank en sexy",
    popup3_text1: "Voer je optie in - verras ons...|",
    popup4_title: "WAT WIL JE PRECIES \n — SEKS, VERBINTENIS \n OF BEIDE?",
    popup4_option1:
      "🍆 Ongedwongen seks — geen verplichtingen, alleen lichamen",
    popup4_option2: "🔥 One-night stand — neuken en wegwezen",
    popup4_option3:
      "💑 Zoek een partner — \n iemand om te neuken en mee te verbinden",
    popup4_text1: "Wees echt. Wees brutaal \n Je volgende zet begint hier",
    popup5_title: "HOE DICHTBIJ WIL JE \n JE VOLGENDE NEUKPARTIJ?",
    popup5_option1:
      "🚶‍♀️ Loopafstand — \n je zou binnen minuten bij haar deur kunnen zijn",
    popup5_option2: "🏙️ Zelfde stad — \n ze wacht al dichtbij",
    popup5_option3: "🚗 Nabijgelegen steden? Prima — \n als ze de rit waard is",
    popup5_option4: "🗺️ Zelfde land — nog steeds geïnteresseerd, niet lui",
    popup5_text1: "Kies je zone — \n dates gebeuren snel",
    popup6_title: "PERFECT — JE BENT \n PRECIES WAT DEZE \n VROUWEN ZOEKEN",
    popup6_text1:
      "Je antwoorden komen overeen met tientallen lokale, \n geile vrouwen die nu klaar zijn om af te spreken",
    popup6_text2:
      '🔥 Klik "VOLGENDE" om hun \n foto\'s, profielen en fantasieën te ontgrendelen',
    popup6_text3: "Verspil dit niet — ze zijn online en wachten",
    popup_button_next: "VOLGENDE",
    popup_button_ok: "OK",
    popup_button_yes: "JA",
    popup_honestText:
      "(Kies er maximaal 3 — denk er niet te veel over na, wees gewoon eerlijk.)",
    popup_underButtonText: 'Klik op de "doorgaan" knop \n en doe de enquête',
  },

  // Данська
  da: {
    title:
      "KLAR TIL AT KNALDE I AFTEN? \n DIN NÆSTE SEKSPARTNER ER BARE ET KLIK VÆMK!",
    popup1_title:
      "MILFen du kan lide venter \n på dig, hendes besked er allerede \n i chatten",
    popup1_text1:
      "46 lokale kvinder er online lige nu — alle inden for få kilometer fra dig — og de leder ikke efter pennvenne",
    popup1_text2: "Tag en hurtig quiz for at begynde at chatte!",
    popup2_title: "VIL DU SE \n UCENSUREREDE NØGENBILLEDER \n NU?",
    popup2_text1: "🔥FANDEME JA — eller bliv ved med at leve kedeligt",
    popup2_text2:
      '👉 Klik "JA" for at se hvem der \n klæder sig af tæt på dig.',
    popup3_title: "HVILKEN TYPE KROP \n TÆNDER DIG?",
    popup3_option1: "🔥MILFs der ved hvad de vil have",
    popup3_option2: "🍒Store, lækre bryster",
    popup3_option3: "🍑 Tykke, saftige røve",
    popup3_option4: "👀 Slank og sexet",
    popup3_text1: "Indtast din mulighed - overrask os...|",
    popup4_title:
      "HVAD VIL DU PRÆCIS \n — SEX, FORPLIGTELSE \n ELLER BEGGE DELE?",
    popup4_option1: "🍆 Afslappet sex — ingen forpligtelser, bare kroppe",
    popup4_option2: "🔥 One-night stand — knald og forsvind",
    popup4_option3:
      "💑 Leder efter en partner — \n nogen at knalde og forbinde med",
    popup4_text1: "Vær ægte. Vær modig \n Dit næste træk starter her",
    popup5_title: "HVOR TÆT VIL DU HAVE \n DIT NÆSTE KNALD?",
    popup5_option1:
      "🚶‍♀️ Gåafstand — \n du kunne være ved hendes dør på minutter",
    popup5_option2: "🏙️ Samme by — \n hun venter allerede tæt på",
    popup5_option3: "🚗 Nærliggende byer? Fint — \n hvis hun er køreturen værd",
    popup5_option4: "🗺️ Samme land — stadig interesseret, ikke doven",
    popup5_text1: "Vælg din zone — \n hookups sker hurtigt",
    popup6_title: "PERFEKT — DU ER \n PRÆCIS HVAD DISSE \n KVINDER LEDER EFTER",
    popup6_text1:
      "Dine svar matcher snesevis af lokale, \n liderlige kvinder klar til at mødes nu",
    popup6_text2:
      '🔥 Klik "NÆSTE" for at låse deres \n billeder, profiler og fantasier op',
    popup6_text3: "Spild ikke dette — de er online og venter",
    popup_button_next: "NÆSTE",
    popup_button_ok: "OK",
    popup_button_yes: "JA",
    popup_honestText:
      "(Vælg op til 3 — tænk ikke for meget over det, vær bare ærlig.)",
    popup_underButtonText: 'Klik på "fortsæt" knappen \n og tag undersøgelsen',
  },

  // Шведська
  sv: {
    title:
      "REDO ATT KNULLA IKVÄLL? \n DIN NÄSTA SEXPARTNER ÄR BARA ETT KLICK BORT!",
    popup1_title:
      "MILFen du gillar väntar \n på dig, hennes meddelande finns redan \n i chatten",
    popup1_text1:
      "46 lokala kvinnor är online just nu — alla inom några mil från dig — och de letar inte efter pennvänner",
    popup1_text2: "Ta en snabb quiz för att börja chatta!",
    popup2_title: "VILL DU SE \n OCENSURERADE NAKENBILDER \n NU?",
    popup2_text1: "🔥FAN JA — eller fortsätt leva tråkigt",
    popup2_text2: '👉 Klicka "JA" för att se vem som \n klär av sig nära dig.',
    popup3_title: "VILKEN TYP AV KROPP \n TÄNDER DIG?",
    popup3_option1: "🔥MILFs som vet vad de vill ha",
    popup3_option2: "🍒Stora, läckra bröst",
    popup3_option3: "🍑 Tjocka, saftiga rumpor",
    popup3_option4: "👀 Smal och sexig",
    popup3_text1: "Ange ditt alternativ - överraska oss...|",
    popup4_title: "VAD VILL DU EXAKT \n — SEX, FÖRBINDELSE \n ELLER BÅDA?",
    popup4_option1: "🍆 Avslappnad sex — inga förpliktelser, bara kroppar",
    popup4_option2: "🔥 One-night stand — knulla och försvinn",
    popup4_option3:
      "💑 Letar efter en partner — \n någon att knulla och ansluta med",
    popup4_text1: "Var äkta. Var modig \n Ditt nästa drag börjar här",
    popup5_title: "HUR NÄRA VILL DU HA \n DITT NÄSTA KNULL?",
    popup5_option1:
      "🚶‍♀️ Gångavstånd — \n du kunde vara vid hennes dörr på minuter",
    popup5_option2: "🏙️ Samma stad — \n hon väntar redan nära",
    popup5_option3: "🚗 Närliggande städer? Bra — \n om hon är värd resan",
    popup5_option4: "🗺️ Samma land — fortfarande intresserad, inte lat",
    popup5_text1: "Välj din zon — \n träffar händer snabbt",
    popup6_title: "PERFEKT — DU ÄR \n EXAKT VAD DESSA \n KVINNOR LETAR EFTER",
    popup6_text1:
      "Dina svar matchar dussintals lokala, \n kåta kvinnor redo att träffas nu",
    popup6_text2:
      '🔥 Klicka "NÄSTA" för att låsa upp deras \n bilder, profiler och fantasier',
    popup6_text3: "Slösa inte bort detta — de är online och väntar",
    popup_button_next: "NÄSTA",
    popup_button_ok: "OK",
    popup_button_yes: "JA",
    popup_honestText:
      "(Välj upp till 3 — tänk inte för mycket, var bara ärlig.)",
    popup_underButtonText:
      'Klicka på "fortsätt" knappen \n och ta undersökningen',
  },

  // Грецька
  el: {
    title:
      "ΈΤΟΙΜΟΣ ΝΑ ΓΑΜΉΣΕΙΣ ΑΠΌΨΕ; \n Ο ΕΠΌΜΕΝΟΣ ΣΕΞΟΥΑΛΙΚΌΣ ΣΟΥ ΕΤΑΊΡΟΣ ΕΊΝΑΙ ΈΝΑ ΚΛΙΚ ΜΑΚΡΙΆ!",
    popup1_title:
      "Η MILF που σου αρέσει σε περιμένει, \n το μήνυμά της είναι ήδη \n στο chat",
    popup1_text1:
      "46 τοπικές γυναίκες είναι online τώρα — όλες μέσα σε λίγα χιλιόμετρα από εσένα — και δεν ψάχνουν για φίλους αλληλογραφίας",
    popup1_text2: "Κάνε ένα γρήγορο κουίζ για να αρχίσεις να συνομιλείς!",
    popup2_title: "ΘΈΛΕΙΣ ΝΑ ΔΕΙΣ \n ΜΗΚΕΤΤSURED ΓΥΜΝΈΣ ΦΩΤΟΓΡΑΦΊΕΣ \n ΤΏΡΑ;",
    popup2_text1: "🔥ΣΤΟΝ ΠΟΎΤΣΟ ΝΑΙ — ή συνέχισε να ζεις βαρετά",
    popup2_text2: '👉 Κάνε κλικ "ΝΑΙ" για να δεις ποια \n γδύνεται κοντά σου.',
    popup3_title: "ΤΚΊΠΟΣ ΣΏΜΑΤΟΣ \n ΣΕ ΔΙΕΓΕΊΡΕΙ;",
    popup3_option1: "🔥MILFs που ξέρουν τι θέλουν",
    popup3_option2: "🍒Μεγάλα, νόστιμα στήθη",
    popup3_option3: "🍑 Χοντρούς, ζουμερούς κώλους",
    popup3_option4: "👀 Λεπτή και σέξι",
    popup3_text1: "Εισάγετε την επιλογή σας - εκπλήξτε μας...|",
    popup4_title: "ΤΙ ΑΚΡΙΒΏΣ ΘΈΛΕΙΣ \n — ΣΕΞ, ΔΈΣΜΕΥΣΗ \n Ή ΚΑΙ ΤΑ ΔΎΟ;",
    popup4_option1: "🍆 Περιστασιακό σεξ — χωρίς δεσμεύσεις, μόνο σώματα",
    popup4_option2: "🔥 One-night stand — γάμα και φύγε",
    popup4_option3:
      "💑 Ψάχνω για σύντροφο — \n κάποιον να γαμήσω και να συνδεθώ",
    popup4_text1:
      "Να είσαι αληθινός. Να είσαι τολμηρός \n Η επόμενη κίνησή σου αρχίζει εδώ",
    popup5_title: "ΠΌΣΟ ΚΟΝΤΆ ΘΈΛΕΙΣ \n ΤΟ ΕΠΌΜΕΝΟ ΓΆΜΗΜΆ ΣΟΥ;",
    popup5_option1:
      "🚶‍♀️ Απόσταση περπατήματος — \n θα μπορούσες να είσαι στην πόρτα της σε λεπτά",
    popup5_option2: "🏙️ Ίδια πόλη — \n περιμένει ήδη κοντά",
    popup5_option3: "🚗 Κοντινές πόλεις; Εντάξει — \n αν αξίζει το ταξίδι",
    popup5_option4: "🗺️ Ίδια χώρα — ακόμα ενδιαφέρομαι, όχι τεμπέλης",
    popup5_text1: "Διάλεξε τη ζώνη σου — \n οι συναντήσεις γίνονται γρήγορα",
    popup6_title:
      "ΤΈΛΕΙΑ — ΕΊΣΑΙ \n ΑΚΡΙΒΏΣ ΑΥΤΌ ΠΟΥ \n ΨΆΧΝΟΥΝ ΑΥΤΈΣ ΟΙ ΓΥΝΑΊΚΕΣ",
    popup6_text1:
      "Οι απαντήσεις σου ταιριάζουν με δεκάδες τοπικές, \n καυλωμένες γυναίκες έτοιμες να συναντηθούν τώρα",
    popup6_text2:
      '🔥 Κάνε κλικ "ΕΠΌΜΕΝΟ" για να ξεκλειδώσεις τις \n φωτογραφίες, προφίλ και φαντασιώσεις τους',
    popup6_text3: "Μην το σπαταλήσεις — είναι online και περιμένουν",
    popup_button_next: "ΕΠΌΜΕΝΟ",
    popup_button_ok: "ΟΚ",
    popup_button_yes: "ΝΑΙ",
    popup_honestText:
      "(Διάλεξε μέχρι 3 — μην το σκέφτεσαι πολύ, απλά να είσαι ειλικρινής.)",
    popup_underButtonText:
      'Κάνε κλικ στο κουμπί "συνέχεια" \n και κάνε την έρευνα',
  },

  // Норвезька
  no: {
    title:
      "KLAR FOR Å PULE I KVELD? \n DIN NESTE SEKSPARTNER ER BARE ET KLIKK UNNA!",
    popup1_title:
      "MILFen du liker venter \n på deg, beskjeden hennes er allerede \n i chatten",
    popup1_text1:
      "46 lokale kvinner er online nå — alle innenfor noen få mil fra deg — og de leter ikke etter pennvenner",
    popup1_text2: "Ta en rask quiz for å begynne å chatte!",
    popup2_title: "VIL DU SE \n USENSURERTE NAKENBILA \n NÅ?",
    popup2_text1: "🔥FAEN JA — eller fortsett å leve kjedelig",
    popup2_text2: '👉 Klikk "JA" for å se hvem som \n kler seg av nær deg.',
    popup3_title: "HVILKEN TYPE KROPP \n TENNER DEG?",
    popup3_option1: "🔥MILFs som vet hva de vil ha",
    popup3_option2: "🍒Store, lekre bryster",
    popup3_option3: "🍑 Tykke, saftige rumper",
    popup3_option4: "👀 Slank og sexy",
    popup3_text1: "Skriv inn ditt alternativ - overrask oss...|",
    popup4_title: "HVA VIL DU NØYAKTIG \n — SEX, FORPLIKTELSE \n ELLER BEGGE?",
    popup4_option1: "🍆 Uforpliktende sex — ingen strenger, bare kropper",
    popup4_option2: "🔥 One-night stand — pul og stikk av",
    popup4_option3: "💑 Leter etter en partner — \n noen å pule og koble til",
    popup4_text1: "Vær ekte. Vær modig \n Ditt neste trekk starter her",
    popup5_title: "HVOR NÆRT VIL DU HA \n DITT NESTE PUL?",
    popup5_option1:
      "🚶‍♀️ Gangavstand — \n du kunne vært ved døren hennes på minutter",
    popup5_option2: "🏙️ Samme by — \n hun venter allerede i nærheten",
    popup5_option3:
      "🚗 Nærliggende byer? Greit — \n hvis hun er verdt kjøreturen",
    popup5_option4: "🗺️ Samme land — fortsatt interessert, ikke lat",
    popup5_text1: "Velg din sone — \n hookups skjer raskt",
    popup6_title:
      "PERFEKT — DU ER \n NØYAKTIG HVA DISSE \n KVINNENE LETER ETTER",
    popup6_text1:
      "Dine svar matcher dusinvis av lokale, \n kåte kvinner klare til å møtes nå",
    popup6_text2:
      '🔥 Klikk "NESTE" for å låse opp deres \n bilder, profiler og fantasier',
    popup6_text3: "Ikke kast bort dette — de er online og venter",
    popup_button_next: "NESTE",
    popup_button_ok: "OK",
    popup_button_yes: "JA",
    popup_honestText:
      "(Velg opptil 3 — ikke tenk for mye over det, bare vær ærlig.)",
    popup_underButtonText: 'Klikk "fortsett" knappen \n og ta undersøkelsen',
  },

  // Фінська
  fi: {
    title:
      "VALMIS NUSSIMAAN TÄNÄ ILTANA? \n SEURAAVA SEKSIKUMPPANISI ON VAIN KLIKKAUKSEN PÄÄSSÄ!",
    popup1_title:
      "MILF, josta pidät, odottaa \n sinua, hänen viestinsä on jo \n chatissa",
    popup1_text1:
      "46 paikallista naista on verkossa juuri nyt — kaikki muutaman mailin säteellä sinusta — eivätkä he etsi kirjeenvaihtokavereita",
    popup1_text2: "Tee nopea tietokilpailu aloittaaksesi chattailun!",
    popup2_title: "HALUATKO NÄHDÄ \n SENSUROIMATTOMIA ALASTONKUVIA \n NYT?",
    popup2_text1: "🔥HELVETTI KYLLÄ — tai jatka elämistä tylsästi",
    popup2_text2:
      '👉 Klikkaa "KYLLÄ" nähdäksesi kuka \n riisuu vaatteita lähellä sinua.',
    popup3_title: "MINKÄLAINEN VARTALO \n KIIHOTTAA SINUA?",
    popup3_option1: "🔥MILFit jotka tietävät mitä haluavat",
    popup3_option2: "🍒Isot, herkulliet rinnat",
    popup3_option3: "🍑 Paksut, mehevät pereet",
    popup3_option4: "👀 Laiha ja seksikäs",
    popup3_text1: "Syötä vaihtoehtosi - yllätä meidät...|",
    popup4_title:
      "MITÄ TARKALLEEN HALUAT \n — SEKSIÄ, SITOUTUMISTA \n VAI MOLEMPIA?",
    popup4_option1: "🍆 Irtoseksiä — ei siteitä, vain kehot",
    popup4_option2: "🔥 Yhden yön juttu — nainti ja häipyminen",
    popup4_option3: "💑 Etsin kumppania — \n joku naintiin ja yhteyteen",
    popup4_text1: "Ole aito. Ole rohkea \n Seuraava siirtosi alkaa täältä",
    popup5_title: "KUINKA LÄHELLÄ HALUAT \n SEURAAVAN NAINTISI?",
    popup5_option1:
      "🚶‍♀️ Kävelymatkan päässä — \n voisit olla hänen ovellaan minuuteissa",
    popup5_option2: "🏙️ Sama kaupunki — \n hän odottaa jo lähellä",
    popup5_option3: "🚗 Lähikaupungit? Hyvä — \n jos hän on matkan arvoinen",
    popup5_option4: "🗺️ Sama maa — yhä kiinnostunut, en laiska",
    popup5_text1: "Valitse vyöhykkeesi — \n tapaamiset tapahtuvat nopeasti",
    popup6_title:
      "TÄYDELLINEN — OLET \n JUURI SITÄ MITÄ NÄMÄ \n NAISET ETSIVÄT",
    popup6_text1:
      "Vastauksesi vastaavat kymmeniä paikallisia, \n kiimojeja naisia valmiita tapaamaan nyt",
    popup6_text2:
      '🔥 Klikkaa "SEURAAVA" avataksesi heidän \n kuvansa, profiilinsa ja fantasiansa',
    popup6_text3: "Älä tuhlaa tätä — he ovat verkossa ja odottavat",
    popup_button_next: "SEURAAVA",
    popup_button_ok: "OK",
    popup_button_yes: "KYLLÄ",
    popup_honestText:
      "(Valitse enintään 3 — älä mieti liikaa, ole vain rehellinen.)",
    popup_underButtonText: 'Klikkaa "jatka" nappia \n ja tee kysely',
  },

  // Японська
  ja: {
    title: "今夜ヤル準備はできてる？\n次のセックスパートナーはクリック一つで！",
    popup1_title:
      "君が好きなMILFが待ってるよ、\n彼女のメッセージはもう\nチャットにある",
    popup1_text1:
      "46人の地元女性が今オンライン中 — 全員君から数マイル以内 — そして文通相手を探してない",
    popup1_text2: "チャットを始めるためにクイッククイズを受けよう！",
    popup2_title: "無修正ヌード写真を\n今すぐ見たい？",
    popup2_text1: "🔥地獄のイエス — それとも退屈な生活を続ける",
    popup2_text2: "👉 「イエス」をクリックして近くで\n裸になってる人を見よう。",
    popup3_title: "どんなタイプの体が\n君を興奮させる？",
    popup3_option1: "🔥自分の欲しいものを知ってるMILF",
    popup3_option2: "🍒大きくて美味しそうな胸",
    popup3_option3: "🍑 厚くてジューシーなお尻",
    popup3_option4: "👀 スリムでセクシー",
    popup3_text1: "君の選択を入力して - 私たちを驚かせて...|",
    popup4_title:
      "正確に何が欲しい？\nセックス、コミットメント、\nそれとも両方？",
    popup4_option1: "🍆 カジュアルセックス — しがらみなし、ただの体",
    popup4_option2: "🔥 ワンナイトスタンド — ヤッて逃げる",
    popup4_option3: "💑 パートナーを探してる — \nヤッて繋がれる誰か",
    popup4_text1: "リアルであれ。大胆であれ\n君の次の動きはここから始まる",
    popup5_title: "次のセックスをどのくらい\n近くで欲しい？",
    popup5_option1: "🚶‍♀️ 徒歩圏内 — \n数分で彼女のドアに着けるかも",
    popup5_option2: "🏙️ 同じ街 — \n彼女はもう近くで待ってる",
    popup5_option3: "🚗 近隣の街？いいよ — \n運転する価値があるなら",
    popup5_option4: "🗺️ 同じ国 — まだ興味あり、怠け者じゃない",
    popup5_text1: "君のゾーンを選んで — \nフックアップは速く起こってる",
    popup6_title: "完璧 — 君はまさに\nこれらの女性が\n探してるものだ",
    popup6_text1:
      "君の答えは何十人もの地元の\nエッチな女性と一致、今すぐ会う準備ができてる",
    popup6_text2:
      "🔥 「次へ」をクリックして彼女たちの\n写真、プロフィール、ファンタジーをアンロック",
    popup6_text3: "これを無駄にするな — 彼女たちはオンラインで待ってる",
    popup_button_next: "次へ",
    popup_button_ok: "OK",
    popup_button_yes: "イエス",
    popup_honestText: "(3つまで選んで — 考えすぎないで、ただ正直に。)",
    popup_underButtonText:
      "「続ける」ボタンをクリックして\nアンケートを受けよう",
  },

  // Румунська
  ro: {
    title:
      "GATA SĂ FUTI LA NOAPTE? \n URMĂTORUL TĂU PARTENER SEXUAL ESTE LA UN CLICK DISTANȚĂ!",
    popup1_title:
      "MILF-ul care îți place te așteaptă, \n mesajul ei este deja \n în chat",
    popup1_text1:
      "46 de femei locale sunt online acum — toate în raza a câtorva mile de tine — și nu caută corespondenti",
    popup1_text2: "Fă un quiz rapid pentru a începe să chatezi!",
    popup2_title: "VREI SĂ VEZI \n NUDURI NECENZURATE \n ACUM?",
    popup2_text1: "🔥DRACU' DA — sau continuă să trăiești plictisitor",
    popup2_text2: '👉 Dă click pe "DA" să vezi cine se \n dezbracă lângă tine.',
    popup3_title: "CE TIP DE CORP \n TE EXCITĂ?",
    popup3_option1: "🔥MILF-uri care știu ce vor",
    popup3_option2: "🍒Sâni mari și apetisanți",
    popup3_option3: "🍑 Fundulete groase și suculente",
    popup3_option4: "👀 Slabă și sexy",
    popup3_text1: "Introdu opțiunea ta - surprinde-ne...|",
    popup4_title: "CE VREI EXACT \n — SEX, ANGAJAMENT \n SAU AMBELE?",
    popup4_option1: "🍆 Sex casual — fără obligații, doar corpuri",
    popup4_option2: "🔥 O aventură — futi și pleci",
    popup4_option3:
      "💑 Caut un partener — \n pe cineva să fut și să mă conectez",
    popup4_text1:
      "Fii real. Fii îndrăzneț \n Următoarea ta mișcare începe aici",
    popup5_title: "CÂT DE APROAPE VREI \n URMĂTOAREA TA FUTERE?",
    popup5_option1:
      "🚶‍♀️ Distanță de mers pe jos — \n ai putea fi la ușa ei în minute",
    popup5_option2: "🏙️ Același oraș — \n ea te așteaptă deja aproape",
    popup5_option3: "🚗 Orașe apropiate? Bine — \n dacă merită drumul",
    popup5_option4: "🗺️ Aceeași țară — încă interesat, nu leneș",
    popup5_text1: "Alege-ți zona — \n întâlnirile se întâmplă rapid",
    popup6_title: "PERFECT — EȘTI \n EXACT CEEA CE \n CAUTĂ ACESTE FEMEI",
    popup6_text1:
      "Răspunsurile tale se potrivesc cu zeci de femei locale \n excitate gata să se întâlnească acum",
    popup6_text2:
      '🔥 Dă click pe "URMĂTORUL" să le deblochezi \n pozele, profilurile și fanteziile',
    popup6_text3: "Nu irosi asta — sunt online și așteaptă",
    popup_button_next: "URMĂTORUL",
    popup_button_ok: "OK",
    popup_button_yes: "DA",
    popup_honestText:
      "(Alege până la 3 — nu te gândi prea mult, fii doar sincer.)",
    popup_underButtonText: 'Dă click pe butonul "continuă" \n și fă sondajul',
  },

  // Хорватська
  hr: {
    title:
      "SPREMAN ZA JEBANJE VEČERAS? \n TVOJ SLJEDEĆI SEKSUALNI PARTNER JE NA JEDAN KLIK!",
    popup1_title:
      "MILF koja ti se sviđa te čeka, \n njena poruka je već \n u chatu",
    popup1_text1:
      "46 lokalnih žena je online sada — sve u krugu nekoliko milja od tebe — i ne traže dopisnike",
    popup1_text2: "Radi brzi kviz da počneš s chatom!",
    popup2_title: "ŽELIŠ VIDJETI \n NECENZURIRANE GOLE SLIKE \n SADA?",
    popup2_text1: "🔥JEBENO DA — ili nastavi živjeti dosadno",
    popup2_text2: '👉 Klikni "DA" da vidiš tko se \n skida blizu tebe.',
    popup3_title: "KAKAV TIP TIJELA \n TE PALI?",
    popup3_option1: "🔥MILF-ove koje znaju što žele",
    popup3_option2: "🍒Velike, ukusne sise",
    popup3_option3: "🍑 Debele, sočne guzice",
    popup3_option4: "👀 Mršava i seksi",
    popup3_text1: "Unesi svoju opciju - iznenadi nas...|",
    popup4_title: "ŠTO TOČNO ŽELIŠ \n — SEKS, VEZU \n ILI OBOJE?",
    popup4_option1: "🍆 Ležerni seks — bez obveza, samo tijela",
    popup4_option2: "🔥 Jednu noć — jebi i nestani",
    popup4_option3: "💑 Tražim partnera — \n nekoga za jebanje i povezivanje",
    popup4_text1:
      "Budi pravi. Budi hrabar \n Tvoj sljedeći potez počinje ovdje",
    popup5_title: "KOLIKO BLIZU ŽELIŠ \n SVOJE SLJEDEĆE JEBANJE?",
    popup5_option1:
      "🚶‍♀️ Pješačka udaljenost — \n mogao bi biti na njezinim vratima za minute",
    popup5_option2: "🏙️ Isti grad — \n već te čeka blizu",
    popup5_option3: "🚗 Obližnji gradovi? Dobro — \n ako je vrijedna puta",
    popup5_option4: "🗺️ Ista zemlja — još uvijek zainteresiran, ne lijen",
    popup5_text1: "Odaberi svoju zonu — \n spojevi se događaju brzo",
    popup6_title: "SAVRŠENO — TI SI \n TOČNO ONO ŠTO \n OVE ŽENE TRAŽE",
    popup6_text1:
      "Tvoji odgovori odgovaraju desetcima lokalnih \n napaljih žena spremnih se upoznati sada",
    popup6_text2:
      '🔥 Klikni "SLJEDEĆE" da otkljućaš njihove \n slike, profile i fantazije',
    popup6_text3: "Ne propusti ovo — online su i čekaju",
    popup_button_next: "SLJEDEĆE",
    popup_button_ok: "OK",
    popup_button_yes: "DA",
    popup_honestText:
      "(Odaberi do 3 — ne razmišljaj previše, samo budi iskren.)",
    popup_underButtonText: 'Klikni gumb "nastavi" \n i radi anketu',
  },

  // Арабська
  ar: {
    title: "مستعد للنيك الليلة؟\nشريكك الجنسي التالي على بعد نقرة واحدة!",
    popup1_title: "الميلف التي تحبها تنتظرك،\nرسالتها موجودة بالفعل\nفي الشات",
    popup1_text1:
      "46 امرأة محلية متصلة الآن — جميعهن على بعد أميال قليلة منك — ولسن يبحثن عن أصدقاء مراسلة",
    popup1_text2: "خذ اختبار سريع لتبدأ المحادثة!",
    popup2_title: "تريد أن ترى\nصور عارية غير مراقبة\nالآن؟",
    popup2_text1: "🔥تباً نعم — أو استمر في العيش بملل",
    popup2_text2: '👉 اضغط "نعم" لترى من\nيتعرى بالقرب منك.',
    popup3_title: "أي نوع من الأجسام\nيثيرك؟",
    popup3_option1: "🔥ميلفات يعرفن ما يردن",
    popup3_option2: "🍒أثداء كبيرة شهية",
    popup3_option3: "🍑 مؤخرات سمينة وعصيرة",
    popup3_option4: "👀 نحيفة ومثيرة",
    popup3_text1: "أدخل خيارك - فاجئنا...|",
    popup4_title: "ماذا تريد بالضبط\n— جنس، التزام\nأم كلاهما؟",
    popup4_option1: "🍆 جنس عارض — بلا قيود، فقط أجساد",
    popup4_option2: "🔥 ليلة واحدة — انك واهرب",
    popup4_option3: "💑 أبحث عن شريك —\nشخص للنيك والتواصل",
    popup4_text1: "كن حقيقياً. كن جريئاً\nحركتك التالية تبدأ هنا",
    popup5_title: "ما مدى قرب\nنيكتك التالية؟",
    popup5_option1: "🚶‍♀️ مسافة مشي —\nيمكن أن تكون عند بابها خلال دقائق",
    popup5_option2: "🏙️ نفس المدينة —\nتنتظرك بالفعل قريباً",
    popup5_option3: "🚗 مدن قريبة؟ حسناً —\nإذا كانت تستحق السفر",
    popup5_option4: "🗺️ نفس البلد — لا زلت مهتماً، لست كسولاً",
    popup5_text1: "اختر منطقتك —\nاللقاءات تحدث بسرعة",
    popup6_title: "مثالي — أنت\nبالضبط ما تبحث\nعنه هؤلاء النساء",
    popup6_text1:
      "إجاباتك تطابق عشرات النساء المحليات\nالمثارات المستعدات للقاء الآن",
    popup6_text2: '🔥 اضغط "التالي" لفتح\nصورهن وملفاتهن وخيالاتهن',
    popup6_text3: "لا تضيع هذا — هن متصلات وينتظرن",
    popup_button_next: "التالي",
    popup_button_ok: "موافق",
    popup_button_yes: "نعم",
    popup_honestText: "(اختر حتى 3 — لا تفكر كثيراً، كن صادقاً فقط.)",
    popup_underButtonText: 'اضغط زر "متابعة"\nوخذ الاستطلاع',
  },

  // Словацька
  sk: {
    title:
      "PRIPRAVENÝ ŠUKAŤ DNES VEČER? \n TVOJ ĎALŠÍ SEXUÁLNY PARTNER JE LEN KLIK ĎALEKO!",
    popup1_title:
      "MILF, ktorú máš rád, na teba čaká, \n jej správa už je \n v chate",
    popup1_text1:
      "46 miestnych žien je teraz online — všetky v okruhu pár míľ od teba — a nehľadajú dopisovateľov",
    popup1_text2: "Urob rýchly kvíz a začni čatovať!",
    popup2_title: "CHCEŠ VIDIEŤ \n NECENZUROVANÉ NAHÉ FOTKY \n TERAZ?",
    popup2_text1: "🔥KURVA ÁNO — alebo žij ďalej nudne",
    popup2_text2: '👉 Klikni "ÁNO" a uvidíš kto sa \n vyzlieka blízko teba.',
    popup3_title: "AKÝ TYP TELA \n ŤA VZRUŠUJE?",
    popup3_option1: "🔥MILFky, ktoré vedia čo chcú",
    popup3_option2: "🍒Veľké, chutné prsia",
    popup3_option3: "🍑 Tučné, šťavnaté zadky",
    popup3_option4: "👀 Štíhla a sexy",
    popup3_text1: "Zadaj svoju možnosť - prekvaP nás...|",
    popup4_title: "ČO PRESNE CHCEŠ \n — SEX, ZÁVÄZOK \n ALEBO OBE?",
    popup4_option1: "🍆 Nezáväzný sex — žiadne putá, len telá",
    popup4_option2: "🔥 Jednu noc — ošukať a zmizniť",
    popup4_option3: "💑 Hľadám partnera — \n niekoho na šukanie a spojenie",
    popup4_text1: "Buď skutočný. Buď odvážny \n Tvoj ďalší ťah začína tu",
    popup5_title: "AKO BLÍZKO CHCEŠ \n SVOJ ĎALŠÍ SEX?",
    popup5_option1:
      "🚶‍♀️ Pešia vzdialenosť — \n mohol by si byť pri jej dverách za minúty",
    popup5_option2: "🏙️ To isté mesto — \n už čaká nablízku",
    popup5_option3: "🚗 Blízke mestá? Dobre — \n ak stojí za cestu",
    popup5_option4: "🗺️ Tá istá krajina — stále záujem, nie lenivý",
    popup5_text1: "Vyber svoju zónu — \n stretnutia sa dejú rýchlo",
    popup6_title: "VÝBORNE — SI \n PRESNE TO ČO \n TIETO ŽENY HĽADAJÚ",
    popup6_text1:
      "Tvoje odpovede pasujú desiatkam miestnych \n nadrženích žien pripravených stretnúť sa teraz",
    popup6_text2:
      '🔥 Klikni "ĎALEJ" a odomkni ich \n fotky, profily a fantázie',
    popup6_text3: "Nevyplytva to — sú online a čakajú",
    popup_button_next: "ĎALEJ",
    popup_button_ok: "OK",
    popup_button_yes: "ÁNO",
    popup_honestText: "(Vyber až 3 — nemysli na to veľa, buď len úprimný.)",
    popup_underButtonText: 'Klikni na tlačidlo "pokračovať" \n a urob prieskum',
  },

  // Російська
  ru: {
    title:
      "ГОТОВ ТРАХАТЬСЯ СЕГОДНЯ ВЕЧЕРОМ? \n ТВОЙ СЛЕДУЮЩИЙ СЕКСУАЛЬНЫЙ ПАРТНЕР В ОДНОМ КЛИКЕ!",
    popup1_title:
      "МИЛФА, которая тебе нравится, ждет \n тебя, ее сообщение уже \n в чате",
    popup1_text1:
      "46 местных женщин онлайн прямо сейчас — все в нескольких милях от тебя — и они не ищут друзей по переписке",
    popup1_text2: "Пройди быстрый тест, чтобы начать общение!",
    popup2_title: "ХОЧЕШЬ УВИДЕТЬ \n НЕЦЕНЗУРНЫЕ ГОЛЫЕ ФОТО \n ПРЯМО СЕЙЧАС?",
    popup2_text1: "🔥БЛЯДЬ ДА — или продолжай жить скучно",
    popup2_text2:
      '👉 Нажми "ДА", чтобы увидеть кто \n раздевается рядом с тобой.',
    popup3_title: "КАКОЙ ТИП ТЕЛА \n ТЕБЯ ВОЗБУЖДАЕТ?",
    popup3_option1: "🔥МИЛФы, которые знают чего хотят",
    popup3_option2: "🍒Большие, аппетитные сиськи",
    popup3_option3: "🍑 Толстые, сочные жопы",
    popup3_option4: "👀 Стройная и сексуальная",
    popup3_text1: "Введи свой вариант - удиви нас...|",
    popup4_title: "ЧТО ИМЕННО ТЫ ХОЧЕШЬ \n — СЕКС, ОТНОШЕНИЯ \n ИЛИ ОБА?",
    popup4_option1: "🍆 Случайный секс — без обязательств, только тела",
    popup4_option2: "🔥 На одну ночь — трахнул и ушел",
    popup4_option3: "💑 Ищу партнера — \n кого-то для секса и общения",
    popup4_text1:
      "Будь настоящим. Будь смелым \n Твой следующий шаг начинается здесь",
    popup5_title: "НА КАКОМ РАССТОЯНИИ ТЫ ХОЧЕШЬ \n СВОЙ СЛЕДУЮЩИЙ СЕКС?",
    popup5_option1: "🚶‍♀️ Пешком — \n ты мог бы быть у ее двери за минуты",
    popup5_option2: "🏙️ Тот же город — \n она уже ждет рядом",
    popup5_option3: "🚗 Соседние города? Хорошо — \n если она стоит поездки",
    popup5_option4: "🗺️ Та же страна — все еще интересуюсь, не ленивый",
    popup5_text1: "Выбери свою зону — \n встречи происходят быстро",
    popup6_title: "ОТЛИЧНО — ТЫ ИМЕННО ТОТ, \n КОГО ИЩУТ ЭТИ ЖЕНЩИНЫ",
    popup6_text1:
      "Твои ответы совпадают с десятками местных \n возбужденных женщин, готовых встретиться прямо сейчас",
    popup6_text2:
      '🔥 Нажми "ДАЛЕЕ", чтобы разблокировать их \n фото, профили и фантазии',
    popup6_text3: "Не теряй это — они онлайн и ждут",
    popup_button_next: "ДАЛЕЕ",
    popup_button_ok: "ОК",
    popup_button_yes: "ДА",
    popup_honestText: "(Выбери до 3 — не думай долго, просто будь честным.)",
    popup_underButtonText: 'Нажми кнопку "продолжить" \n и пройди опрос',
  },

  // Турецька
  tr: {
    title:
      "BU GECE SİKİŞMEYE HAZIR MISIN? \n BİR SONRAKİ SEKS PARTNERIN SADECE BİR TIK UZAKTA!",
    popup1_title: "Sevdiğin MILF seni bekliyor, \n mesajı zaten \n sohbette",
    popup1_text1:
      "46 yerel kadın şu anda çevrimiçi — hepsi senden birkaç mil uzakta — ve mektup arkadaşı aramıyorlar",
    popup1_text2: "Sohbet etmeye başlamak için hızlı bir test yap!",
    popup2_title: "SANSÜRSÜZ ÇIPLAK FOTOĞRAFLARI \n ŞİMDİ GÖRMEK İSTER MİSİN?",
    popup2_text1: "🔥LANET EVET — ya da sıkıcı yaşamaya devam et",
    popup2_text2:
      '👉 Yakınında kimin \n soyunduğunu görmek için "EVET"e tıkla.',
    popup3_title: "HANGİ TİP VÜCUT \n SENİ TAHRIK EDİYOR?",
    popup3_option1: "🔥Ne istediklerini bilen MILFler",
    popup3_option2: "🍒Büyük, iştah açıcı göğüsler",
    popup3_option3: "🍑 Kalın, sulu kalçalar",
    popup3_option4: "👀 İnce ve seksi",
    popup3_text1: "Seçeneğini gir - bizi şaşırt...|",
    popup4_title:
      "TAM OLARAK NE İSTİYORSUN \n — SEKS, BAĞLILIK \n YA DA İKİSİ?",
    popup4_option1: "🍆 Günlük seks — bağ yok, sadece bedenler",
    popup4_option2: "🔥 Tek gecelik — sik ve git",
    popup4_option3: "💑 Partner arıyorum — \n sikişecek ve bağlanacak biri",
    popup4_text1: "Gerçek ol. Cesur ol \n Bir sonraki hamlen burada başlıyor",
    popup5_title: "BİR SONRAKİ SİKİŞİNİ \n NE KADAR YAKIN İSTİYORSUN?",
    popup5_option1:
      "🚶‍♀️ Yürüme mesafesi — \n dakikalar içinde kapısında olabilirsin",
    popup5_option2: "🏙️ Aynı şehir — \n zaten yakında bekliyor",
    popup5_option3: "🚗 Yakın şehirler? Tamam — \n yolculuğa değerse",
    popup5_option4: "🗺️ Aynı ülke — hala ilgili, tembel değil",
    popup5_text1: "Bölgeni seç — \n buluşmalar hızlı oluyor",
    popup6_title: "MÜKEMMEL — SEN \n TAM BU KADINLARIN \n ARADIĞI KİŞİSİN",
    popup6_text1:
      "Cevapların onlarca yerel, \n azgın kadınla eşleşiyor, şimdi buluşmaya hazırlar",
    popup6_text2:
      '🔥 Fotoğraflarını, profillerini ve fantezilerini \n açmak için "SONRAKİ"ye tıkla',
    popup6_text3: "Bunu harcama — onlar çevrimiçi ve bekliyorlar",
    popup_button_next: "SONRAKİ",
    popup_button_ok: "TAMAM",
    popup_button_yes: "EVET",
    popup_honestText: "(3'e kadar seç — çok düşünme, sadece dürüst ol.)",
    popup_underButtonText: '"Devam et" butonuna tıkla \n ve anketi yap',
  },

  // Португальська
  pt: {
    title:
      "PRONTO PARA TRANSAR HOJE À NOITE? \n SUA PRÓXIMA PARCEIRA SEXUAL ESTÁ A UM CLIQUE DE DISTÂNCIA!",
    popup1_title:
      "A Milf que você curte está te esperando \n e já deixou uma mensagem no chat",
    popup1_text1:
      "46 mulheres locais estão online agora — todas a poucos quilômetros de você — e nenhuma quer apenas conversar",
    popup1_text2: "Responda um quiz rápido para começar a conversar!",
    popup2_title: "QUER VER NUDES \n SEM CENSURA \n AGORA MESMO?",
    popup2_text1: "🔥CLARO QUE SIM — ou continue entediado",
    popup2_text2:
      "👉 Clique em 'SIM' para ver quem está \n pelada perto de você.",
    popup3_title: "QUE TIPO DE CORPO \n TE DEIXA LOUCO?",
    popup3_option1: "🔥MILFs que sabem o que querem",
    popup3_option2: "🍒Peitões de dar água na boca",
    popup3_option3: "🍑 Bundas grandes e suculentas",
    popup3_option4: "👀 Magras e gostosas",
    popup3_text1: "Digite sua opção — surpreenda a gente...",
    popup4_title:
      "O QUE EXATAMENTE VOCÊ \n QUER — SEXO, \n COMPROMISSO OU OS DOIS?",
    popup4_option1: "🍆 Sexo casual — só corpos, sem laços",
    popup4_option2: "🔥 Uma noite só — mete e vaza",
    popup4_option3: "💑 Procurando alguém — \n pra transar e curtir junto",
    popup4_text1: "Seja real. Seja ousado. \n Seu próximo passo começa aqui",
    popup5_title: "QUÃO PERTO VOCÊ QUER \n SEU PRÓXIMO SEXO?",
    popup5_option1:
      "🚶‍♀️ Distância a pé — \n você pode chegar à porta dela em minutos",
    popup5_option2: "🏙️ Mesma cidade — \n ela já está te esperando por perto",
    popup5_option3: "🚗 Cidades próximas? Beleza — \n se ela valer a viagem",
    popup5_option4: "🗺️ Mesmo país — topa, só não seja preguiçoso",
    popup5_text1: "Escolha sua zona — \n os encontros estão rolando rápido",
    popup6_title:
      "MANDE BEM — VOCÊ É \n EXATAMENTE O QUE ELAS \n ESTÃO PROCURANDO",
    popup6_text1:
      "Suas respostas combinam com dezenas de mulheres \n locais prontas pra te encontrar agora mesmo",
    popup6_text2:
      '🔥 Clique em "PRÓXIMO" para desbloquear \n fotos, perfis e fantasias delas',
    popup6_text3: "Não perca isso — elas estão online e esperando",
    popup_button_next: "PRÓXIMO",
    popup_button_ok: "OK",
    popup_button_yes: "SIM",
    popup_honestText:
      "(Escolha até 3 — não pense demais, apenas seja sincero.)",
    popup_underButtonText:
      'Clique no botão "continuar" \n e responda ao questionário',
  },
  zh: {
    title: "今晚想要做爱吗？\n 你的下一个性伴侣只需点击一下！",
    popup1_title: "你喜欢的熟女正在等你 \n 她的消息 \n 已经在聊天室了",
    popup1_text1:
      "46位本地女性现在正在线 — 她们都在你附近几公里内 — 而且她们不想聊无聊的天",
    popup1_text2: "快速回答几个问题即可开始聊天！",
    popup2_title: "想现在就看 \n 无遮挡的裸照吗？",
    popup2_text1: "🔥当然想 — 否则就继续无聊吧",
    popup2_text2: "👉 点击“是”看看谁 \n 在你附近脱光了",
    popup3_title: "哪种身材 \n 最能让你兴奋？",
    popup3_option1: "🔥懂得自己要什么的熟女",
    popup3_option2: "🍒大而诱人的胸部",
    popup3_option3: "🍑 丰满多汁的臀部",
    popup3_option4: "👀 苗条又性感",
    popup3_text1: "输入你的偏好 — 给我们个惊喜...",
    popup4_title: "你到底想要什么？\n 性、关系，还是两者都有？",
    popup4_option1: "🍆 随意做爱 — 纯肉体，没有关系",
    popup4_option2: "🔥 一夜情 — 做完就走",
    popup4_option3: "💑 找伴侣 — \n 可以做爱也能相处的那种",
    popup4_text1: "做自己，别害羞 \n 你的下一步从这里开始",
    popup5_title: "你希望 \n 跟她发生关系的距离多近？",
    popup5_option1: "🚶‍♀️ 步行距离内 — \n 几分钟内就能敲她的门",
    popup5_option2: "🏙️ 同一个城市 — \n 她就在附近等你",
    popup5_option3: "🚗 附近城市也行 — \n 只要值得开车去",
    popup5_option4: "🗺️ 同一个国家 — 也行，只要你不懒",
    popup5_text1: "选好你的区域 — \n 连接正在迅速发生",
    popup6_title: "太棒了 — \n 你就是她们要找的那种男人",
    popup6_text1: "你的回答匹配了几十位 \n 渴望见面的本地辣妹",
    popup6_text2: "🔥 点击“下一步”解锁她们的 \n 照片、资料和幻想",
    popup6_text3: "别浪费机会 — 她们现在就在线上等你",
    popup_button_next: "下一步",
    popup_button_ok: "好",
    popup_button_yes: "是",
    popup_honestText: "(最多选3项 — 别想太多，诚实回答。)",
    popup_underButtonText: "点击“继续”按钮 \n 参加问卷",
  },

  hu: {
    title:
      "KÉSZEN ÁLLSZ MA ESTE EGY DUGÁSRA? \n A KÖVETKEZŐ SZEXPARTNERED CSAK EGY KATTINTÁSRA VAN!",
    popup1_title:
      "A Milf, aki tetszik neked, már vár rád \n és üzenetet hagyott a csevegésben",
    popup1_text1:
      "46 helyi nő van most online — mind néhány kilométeren belül — és egyikük sem barátkozni akar",
    popup1_text2: "Kezdd el a beszélgetést egy gyors kérdőív kitöltésével!",
    popup2_title: "SZERETNÉL MOST \n CENZÚRÁZATLAN MEZTELEN KÉPEKET LÁTNI?",
    popup2_text1: "🔥PERSZE, vagy maradj unott továbbra is",
    popup2_text2:
      "👉 Kattints az „IGEN”-re, és nézd meg, \n ki vetkőzik a közeledben.",
    popup3_title: "MELYIK TESTTÍPUS \n HOZ LÁZBA?",
    popup3_option1: "🔥MILF-ek, akik tudják, mit akarnak",
    popup3_option2: "🍒Nagy, nyálcsorgató mellek",
    popup3_option3: "🍑 Vastag, lédús fenekek",
    popup3_option4: "👀 Karcsú és szexi",
    popup3_text1: "Írd be a saját válaszod — lepj meg minket...",
    popup4_title:
      "PONTOSAN MIT \n AKARSZ — SZEXET, \n KAPCSOLATOT VAGY MINDKETTŐT?",
    popup4_option1: "🍆 Alkalmi szex — semmi kötöttség, csak testek",
    popup4_option2: "🔥 Egyéjszakás kaland — csak gyors menet",
    popup4_option3: "💑 Társat keresek — \n akivel lehet dugni és együtt lenni",
    popup4_text1: "Légy őszinte. Légy bátor. \n Itt indul a következő lépésed",
    popup5_title: "MILYEN KÖZEL LEGYEN \n A KÖVETKEZŐ SZEXPARTNERED?",
    popup5_option1: "🚶‍♀️ Gyalogtávolság — \n perceken belül ott lehetsz nála",
    popup5_option2: "🏙️ Ugyanabban a városban — \n már vár is rád",
    popup5_option3: "🚗 Közeli városok? Mehet — \n ha megéri az utat",
    popup5_option4:
      "🗺️ Ugyanabban az országban — belefér, csak ne legyél lusta",
    popup5_text1: "Válaszd ki a zónád — \n a kalandok gyorsan történnek",
    popup6_title: "TALÁLT — PONT TE \n VAGY AZ, AKIT EZEK A \n NŐK KERESNEK",
    popup6_text1: "A válaszaid egyeznek tucatnyi \n helyi, szexre vágyó nőével",
    popup6_text2:
      "🔥 Kattints a „TOVÁBB” gombra, hogy \n megnézd a képeiket, profiljaikat és vágyaikat",
    popup6_text3: "Ne szalaszd el — ők most is online várnak",
    popup_button_next: "TOVÁBB",
    popup_button_ok: "OKÉ",
    popup_button_yes: "IGEN",
    popup_honestText:
      "(Legfeljebb 3-at válassz — ne agyalj túl sokat, csak légy őszinte.)",
    popup_underButtonText:
      "Kattints a „folytatás” gombra, \n és töltsd ki a kérdőívet",
  },
  lt: {
    title:
      "PASIRUOŠĘS PASIMYLĖTI ŠIANDIEN? \n TAVO KITAS SEKSO PARTNERIS – TIK VIENAS SPUSTELĖJIMAS!",
    popup1_title:
      "Tavo pamėgta Milf jau laukia tavęs \n jos žinutė jau pokalbyje",
    popup1_text1:
      "46 vietinės moterys šiuo metu prisijungusios — visos vos už kelių kilometrų — ir nė viena neieško susirašinėjimo draugo",
    popup1_text2: "Atsakyk į trumpą viktoriną ir pradėk pokalbį!",
    popup2_title: "NORĖTUM PAMATYTI \n NECENZŪRUOTŲ NUOGŲ \n NUOTRAUKŲ DABAR?",
    popup2_text1: "🔥TAIP, žinoma — arba toliau gyvenk nuobodžiai",
    popup2_text2:
      "👉 Spausk „TAIP“ ir pamatyk, \n kas šalia tavęs nusirenginėja",
    popup3_title: "KOKIO TIPO KŪNAS \n TAVE JAUDINA?",
    popup3_option1: "🔥MILF moterys, kurios žino, ko nori",
    popup3_option2: "🍒Didelės, viliojančios krūtys",
    popup3_option3: "🍑 Storos, sultingos užpakaliukai",
    popup3_option4: "👀 Lieknos ir seksualios",
    popup3_text1: "Įvesk savo variantą — nustebink mus...",
    popup4_title:
      "KO IŠ TIKRŲJŲ \n IEŠKAI — SEKSO, \n RIMTŲ SANTYKIŲ AR ABIEJŲ?",
    popup4_option1: "🍆 Atsitiktinis seksas — be įsipareigojimų, tik kūnai",
    popup4_option2: "🔥 Vienos nakties nuotykis — padarei ir viskas",
    popup4_option3:
      "💑 Ieškau partnerio — \n su kuriuo galima pasimylėti ir gerai leisti laiką",
    popup4_text1:
      "Būk tikras. Būk drąsus. \n Tavo kitas žingsnis prasideda čia",
    popup5_title: "KAIP ARTIMAI NORI \n TURĖTI SEKSO?",
    popup5_option1:
      "🚶‍♀️ Pėsčiomis pasiekiama — \n galėtum būti prie jos durų per kelias minutes",
    popup5_option2: "🏙️ Tas pats miestas — \n ji jau laukia netoliese",
    popup5_option3: "🚗 Netolimi miestai? Gerai — \n jei ji to verta",
    popup5_option4: "🗺️ Ta pati šalis — vis tiek tinka, tik nebūk tinginys",
    popup5_text1: "Pasirink savo zoną — \n pasimatymai vyksta greitai",
    popup6_title: "TAIKLIAI — TU ESI \n BŪTENT TAS, KO ŠIOS \n MOTERYS IEŠKO",
    popup6_text1:
      "Tavo atsakymai sutampa su dešimtimis vietinių, \n geidžiančių moterų, kurios pasiruošusios susitikti dabar",
    popup6_text2:
      "🔥 Spausk „TOLIAU“, kad atrakintum jų \n nuotraukas, profilius ir fantazijas",
    popup6_text3: "Nešvaistyk šanso — jos prisijungusios ir laukia",
    popup_button_next: "TOLIAU",
    popup_button_ok: "GERAI",
    popup_button_yes: "TAIP",
    popup_honestText:
      "(Pasirink iki 3 — negalvok per ilgai, tiesiog būk atviras.)",
    popup_underButtonText: "Spausk mygtuką „tęsti“ \n ir atsakyk į klausimus",
  },
  bg: {
    title:
      "ГОТОВ ЛИ СИ ЗА СЕКС ТАЗИ ВЕЧЕР? \n СЛЕДВАЩИЯТ ТИ ПАРТНЬОР Е НА ЕДИН КЛИК РАЗСТОЯНИЕ!",
    popup1_title:
      "Харесваната от теб милфка те чака \n и вече ти е писала в чата",
    popup1_text1:
      "46 местни жени са онлайн в момента — всички на няколко километра от теб — и нито една не търси кореспонденция",
    popup1_text2: "Отговори на кратка анкета и започни чат!",
    popup2_title: "ИСКАШ ЛИ ДА ВИДИШ \n НЕЦЕНЗУРИРАНИ ГОЛИ СНИМКИ \n ОЩЕ СЕГА?",
    popup2_text1: "🔥РАЗБИРА СЕ — или си остани в скуката",
    popup2_text2:
      "👉 Натисни „ДА“, за да видиш \n кой се съблича близо до теб.",
    popup3_title: "КАКВО ТЯЛО \n ТЕ ВЪЗБУЖДА НАЙ-МНОГО?",
    popup3_option1: "🔥MILF-ки, които знаят какво искат",
    popup3_option2: "🍒Големи, сочни гърди",
    popup3_option3: "🍑 Апетитни, стегнати дупета",
    popup3_option4: "👀 Слаби и секси тела",
    popup3_text1: "Въведи свой вариант — изненадай ни...",
    popup4_title: "КАКВО ТОЧНО \n ИСКАШ — СЕКС, \n ВРЪЗКА ИЛИ И ДВЕТЕ?",
    popup4_option1: "🍆 Неангажиращ секс — само тела, без чувства",
    popup4_option2: "🔥 Еднократна авантюра — удряш и изчезваш",
    popup4_option3: "💑 Търся партньор — \n за секс и приятно изкарване",
    popup4_text1: "Бъди честен. Бъди смел. \n Следващата крачка започва оттук",
    popup5_title: "КОЛКО БЛИЗО ИСКАШ \n ДА БЪДЕ СЛЕДВАЩИЯТ ТИ СЕКС?",
    popup5_option1:
      "🚶‍♀️ На пешеходно разстояние — \n можеш да стигнеш до вратата ѝ за минути",
    popup5_option2: "🏙️ В същия град — \n тя вече те чака наблизо",
    popup5_option3: "🚗 Съседни градове? Става — \n ако си струва пътуването",
    popup5_option4: "🗺️ В същата страна — ок, стига да не те мързи",
    popup5_text1: "Избери зона — \n срещите се случват бързо",
    popup6_title: "УЦЕЛИ ЯКО — \n ТИ СИ ТОЧНО ТОВА, \n КОЕТО ТЕЗИ ЖЕНИ ТЪРСЯТ",
    popup6_text1:
      "Отговорите ти съвпадат с желанията на десетки \n местни жени, готови за среща още сега",
    popup6_text2:
      "🔥 Натисни „НАПРЕД“, за да отключиш \n техните снимки, профили и фантазии",
    popup6_text3: "Не го пропускай — те са онлайн и чакат",
    popup_button_next: "НАПРЕД",
    popup_button_ok: "ОК",
    popup_button_yes: "ДА",
    popup_honestText: "(Избери до 3 — не мисли много, просто бъди честен.)",
    popup_underButtonText: "Натисни бутона „продължи“ \n и попълни анкетата",
  },
  sr: {
    title:
      "SPREMAN SI ZA SEKS VEČERAS? \n TVOJ SLEDEĆI SEKS PARTNER JE SAMO JEDAN KLIK DALEKO!",
    popup1_title:
      "Milf koja ti se sviđa te čeka \n i već ti je ostavila poruku u četu",
    popup1_text1:
      "46 lokalnih žena je sada online — sve su na par kilometara od tebe — i nijedna ne traži dopisivanje",
    popup1_text2: "Uradi kratak kviz da započneš razgovor!",
    popup2_title: "ŽELIŠ DA VIDIŠ \n NECENZURISANE GOLE FOTKE \n ODMAH?",
    popup2_text1: "🔥NARAVNO — ili nastavi da se dosađuješ",
    popup2_text2: "👉 Klikni „DA“ da vidiš ko se \n skida blizu tebe.",
    popup3_title: "KAKVO TI TELO \n PALI FANTAZIJU?",
    popup3_option1: "🔥MILF žene koje znaju šta hoće",
    popup3_option2: "🍒Velike, sočne grudi",
    popup3_option3: "🍑 Debele, sočne guze",
    popup3_option4: "👀 Vitke i seksi",
    popup3_text1: "Unesi svoju opciju — iznenadi nas...",
    popup4_title: "ŠTA TAČNO ŽELIŠ — \n SEKS, VEZU ILI OBOJE?",
    popup4_option1: "🍆 Neobavezan seks — bez osećanja, samo tela",
    popup4_option2: "🔥 Jednu noć — uzmi i idi",
    popup4_option3: "💑 Tražim nekoga — \n za seks i zajedničku vibru",
    popup4_text1: "Budi iskren. Budi hrabar. \n Sledeći korak počinje ovde",
    popup5_title: "KOLIKO BLIZU ŽELIŠ \n SVOJ NAREDNI SEKS?",
    popup5_option1: "🚶‍♀️ Na par minuta hoda — \n za tili čas si kod nje",
    popup5_option2: "🏙️ Isti grad — \n već te čeka u blizini",
    popup5_option3: "🚗 Obližnji gradovi? Može — \n ako vredi vožnje",
    popup5_option4: "🗺️ Ista zemlja — okej, samo nemoj biti lenj",
    popup5_text1: "Izaberi svoju zonu — \n šeme se dešavaju brzo",
    popup6_title:
      "POGAĐAŠ U CENTAR — \n TI SI TAČNO ONAJ KOJEG \n OVE ŽENE TRAŽE",
    popup6_text1:
      "Tvoji odgovori se poklapaju sa desetinama \n lokalnih žena koje su spremne da se vide odmah",
    popup6_text2:
      "🔥 Klikni „DALJE“ da otključaš njihove \n slike, profile i fantazije",
    popup6_text3: "Ne propuštaj ovo — one su online i čekaju",
    popup_button_next: "DALJE",
    popup_button_ok: "OK",
    popup_button_yes: "DA",
    popup_honestText:
      "(Izaberi do 3 — ne razmišljaj previše, samo budi iskren.)",
    popup_underButtonText: "Klikni na dugme „nastavi“ \n i popuni upitnik",
  },
  sq: {
    title:
      "GATI PËR TË BËRË SEKS SONTE? \n PARTNERI YT I RRADHËS ËSHTË VETËM NJË KLIK LARG!",
    popup1_title:
      "Milf-i që të pëlqen po të pret \n dhe mesazhi i saj është \n tashmë në chat",
    popup1_text1:
      "46 gra lokale janë online tani — të gjitha brenda disa kilometrave — dhe asnjëra nuk po kërkon letra dashurie",
    popup1_text2: "Përgjigju një kuizi të shkurtër për të filluar bisedën!",
    popup2_title: "DO TË SHOHËSH \n FOTO LAKURIQ PA CENZURË \n TANI?",
    popup2_text1: "🔥SIGURISHT — ose vazhdo të jetosh në mërzi",
    popup2_text2: "👉 Kliko ‘PO’ për të parë kush \n po zhvishet pranë teje.",
    popup3_title: "ÇFARË LLOJ TRUPI \n TË NDEZ?",
    popup3_option1: "🔥MILF-a që dinë çfarë duan",
    popup3_option2: "🍒Gjokse të mëdha dhe joshëse",
    popup3_option3: "🍑 Bythë të trasha dhe të lëngshme",
    popup3_option4: "👀 Të holla dhe seksi",
    popup3_text1: "Shkruaj opsionin tënd — na surprizo...",
    popup4_title: "ÇFARË PIKËRISHT \n KËRKON — SEKS, \n LIDHJE APO TË DYJA?",
    popup4_option1: "🍆 Seks rastësor — pa angazhime, vetëm trupat",
    popup4_option2: "🔥 Një natë e vetme — bëje dhe ik",
    popup4_option3:
      "💑 Kërkoj partner/e — \n dikë për të bërë seks dhe për të shijuar kohën",
    popup4_text1:
      "Ji i/e sinqertë. Ji i/e guximshëm/me. \n Hapi yt i radhës fillon këtu",
    popup5_title: "SA PRANË DOJE \n TË ISHTE SEKSI YT I RRADHËS?",
    popup5_option1:
      "🚶‍♀️ Në distancë ecjeje — \n mund të jesh te dera e saj për disa minuta",
    popup5_option2: "🏙️ Në të njëjtin qytet — \n ajo po të pret afër",
    popup5_option3: "🚗 Qytete përreth? Ok — \n nëse ia vlen udhëtimi",
    popup5_option4:
      "🗺️ Në të njëjtin shtet — në rregull, vetëm mos u bë dembel",
    popup5_text1: "Zgjidh zonën tënde — \n takimet po ndodhin shpejt",
    popup6_title:
      "E GODETE NË SHENJË — \n TI JE FIX AI QË \n KËTO GRA PO KËRKOJNË",
    popup6_text1:
      "Përgjigjet e tua përputhen me dhjetëra \n gra lokale të eksituara që duan takim tani",
    popup6_text2:
      "🔥 Kliko “VAZHDO” për të zbuluar \n fotot, profilin dhe fantazitë e tyre",
    popup6_text3: "Mos e humb këtë mundësi — ato janë online dhe po presin",
    popup_button_next: "VAZHDO",
    popup_button_ok: "OK",
    popup_button_yes: "PO",
    popup_honestText:
      "(Zgjidh deri në 3 — mos e mendoni shumë, vetëm jini të sinqertë.)",
    popup_underButtonText: "Kliko butonin “vazhdo” \n dhe plotëso pyetësorin",
  },
};

// Функція для визначення мови браузера
export const detectBrowserLanguage = (): LanguageCode => {
  try {
    // Спочатку пробуємо navigator.language
    if (typeof window !== "undefined" && navigator) {
      let browserLang =
        navigator.language ||
        (navigator as any).userLanguage ||
        (navigator as any).browserLanguage;

      // Якщо знайдено, витягуємо лише код мови (наприклад, 'en-US' -> 'en')
      if (browserLang) {
        browserLang = browserLang.split("-")[0].toLowerCase();

        // Спеціальна обробка для української мови
        if (browserLang === "ua") {
          browserLang = "uk";
        }
      }

      // Перевіряємо, чи підтримується мова
      if (
        browserLang &&
        supportedLanguages.includes(browserLang as LanguageCode)
      ) {
        console.log(`Мова браузера визначена: ${browserLang}`);
        return browserLang as LanguageCode;
      }
    }
  } catch (error) {
    console.error("Помилка при визначенні мови браузера:", error);
  }

  // За замовчуванням повертаємо англійську, якщо мова не підтримується
  return "en";
};

// Функція для отримання перекладу за конкретним ключем
export const getTranslation = (
  key: keyof Translation,
  lang: LanguageCode = "en"
): string => {
  // Якщо мова не підтримується, повертаємося до англійської
  if (!supportedLanguages.includes(lang)) {
    lang = "en";
  }

  // Повертаємо переклад за ключем
  return translations[lang][key];
};

// Функція для отримання всіх перекладів для конкретної мови
export const getLanguageTranslations = (
  lang: LanguageCode = "en"
): Translation => {
  // Якщо мова не підтримується, повертаємося до англійської
  if (!supportedLanguages.includes(lang)) {
    lang = "en";
  }

  return translations[lang];
};

// Функція для заміни плейсхолдерів в тексті
export const replaceTextPlaceholders = (text: string, city: string): string => {
  return text.replace("{city}", city);
};

// Функція для ініціалізації локалізації
export const initializeLocalization = () => {
  const detectedLang = detectBrowserLanguage();
  console.log(`Ініціалізація локалізації з мовою: ${detectedLang}`);
  return detectedLang;
};
