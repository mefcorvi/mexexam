import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Cuáles son los mexicanos ganadores del Premio Nobel?',
    answer:
      'Alfonso García Robles, Premio Nobel de la Paz en 1982\nOctavio Paz, Premio Nobel de Literatura en 1990\nJosé Mario Molina Pasquel y Henríquez, Premio Nobel de Química en 1995',
    type: 'text',
    id: 'p52uw',
    note: '\n      <h1>Mexicanos Ganadores del Premio Nobel</h1>\n      <p>México cuenta con tres laureados con el Premio Nobel, quienes han dejado una huella significativa en sus respectivos campos.</p>\n      \n      <h2>Octavio Paz</h2>\n      <p>El primero en recibir este honor fue Octavio Paz, ganador del Premio Nobel de Literatura en 1990. Paz fue reconocido por su obra poética y ensayística, que abarcó temas como la soledad, el amor y la identidad mexicana. Su trabajo más destacado incluye el libro <em>El laberinto de la soledad</em> y numerosas colecciones de poesía. \n      <a href="https://es.wikipedia.org/wiki/Octavio_Paz" target="_blank">Más información</a></p>\n      \n      <h2>Alfonso García Robles</h2>\n      <p>El segundo mexicano en recibir el Premio Nobel fue Alfonso García Robles, quien obtuvo el Premio Nobel de la Paz en 1982. García Robles fue galardonado por su esfuerzo en la negociación y firma del Tratado de Tlatelolco en 1967, que estableció una zona libre de armas nucleares en América Latina y el Caribe. Su labor diplomática fue crucial para la promoción de la paz y la seguridad en la región. \n      <a href="https://es.wikipedia.org/wiki/Alfonso_Garc%C3%ADa_Robles" target="_blank">Más información</a></p>\n      \n      <h2>Mario J. Molina</h2>\n      <p>El tercer laureado es Mario J. Molina, quien ganó el Premio Nobel de Química en 1995 junto con Paul Crutzen y Frank Sherwood Rowland. Molina fue reconocido por su investigación sobre la química atmosférica, particularmente por su trabajo en el descubrimiento del adelgazamiento de la capa de ozono debido a los clorofluorocarbonos (CFC). Sus estudios llevaron a la creación del Protocolo de Montreal, un tratado internacional para la protección de la capa de ozono. \n      <a href="https://es.wikipedia.org/wiki/Mario_Molina" target="_blank">Más información</a></p>          \n    ',
    ru: {
      question: 'Кто из мексиканцев получил Нобелевскую премию?',
      answer:
        'Альфонсо Гарсия Роблес, Нобелевская премия мира в 1982 году\nОктавио Пас, Нобелевская премия по литературе в 1990 году\nХосе Марио Молина Паскель и Энрикес, Нобелевская премия по химии в 1995 году',
      note: '\n        <h1>Мексиканцы - Лауреаты Нобелевской Премии</h1>\n        <p>В Мексике есть три лауреата Нобелевской премии, которые оставили значительный след в своих областях.</p>\n        \n        <h2>Октавио Пас</h2>\n        <p>Первым мексиканцем, получившим эту награду, стал Октавио Пас, лауреат Нобелевской премии по литературе 1990 года. Паса отметили за его поэтические и эссеистические работы, затрагивающие темы одиночества, любви и мексиканской идентичности. Среди его наиболее известных произведений - книга <em>«Лабиринт одиночества»</em> и многочисленные сборники стихов. \n        <a href="https://ru.wikipedia.org/wiki/Октавио_Пас" target="_blank">Подробнее</a></p>\n        \n        <h2>Альфонсо Гарсия Роблес</h2>\n        <p>Вторым мексиканцем, удостоенным Нобелевской премии, стал Альфонсо Гарсия Роблес, лауреат Нобелевской премии мира 1982 года. Гарсия Роблес получил награду за свои усилия в переговорах и подписании Тлателолькского договора в 1967 году, который установил зону, свободную от ядерного оружия в Латинской Америке и Карибском бассейне. Его дипломатическая работа сыграла ключевую роль в продвижении мира и безопасности в регионе. \n        <a href="https://ru.wikipedia.org/wiki/Альфонсо_Гарсия_Роблес" target="_blank">Подробнее</a></p>\n        \n        <h2>Марио Дж. Молина</h2>\n        <p>Третьим лауреатом стал Марио Дж. Молина, получивший Нобелевскую премию по химии в 1995 году вместе с Полом Крутценом и Фрэнком Шервудом Роуландом. Молину отметили за исследования в области атмосферной химии, особенно за открытие истончения озонового слоя из-за хлорфторуглеродов (CFC). Его работа привела к созданию Монреальского протокола, международного соглашения по защите озонового слоя. \n        <a href="https://ru.wikipedia.org/wiki/Марио_Молина" target="_blank">Подробнее</a></p>\n      '
    }
  },
  {
    question: '¿Quién inventó la TV a color?',
    answer: 'Guillermo González Camarena',
    note: '\n      Guillermo González Camarena de Guadalajara, Jalisco, fue el inventor del \n      adaptador cromoscópico para televisores, el primer sistema para transmitir \n      televisión a color. Tenía solo 17 años cuando creó este dispositivo durante la \n      Segunda Guerra Mundial. Camarena solicitó la patente el 14 de agosto de 1941 y \n      la obtuvo el 15 de septiembre de 1942. Más tarde, su invento fue utilizado en la \n      nave espacial "Voyager-1". El 31 de agosto de 1946, realizó la primera \n      transmisión a color desde su laboratorio en la oficina de la Liga Mexicana de \n      Radioexperimentadores en Ciudad de México. La señal de video se transmitía a una \n      frecuencia de 115 MHz, y el sonido en la banda de 40 metros.\n    ',
    options: ['Guillermo Rivera', 'Guillermo Aparicio', 'Gabino Barreda'],
    type: 'choice',
    id: '2ybw8w',
    ru: {
      question: 'Кто изобрел цветное телевидение?',
      answer: 'Гильермо Гонсалес Камарена',
      options: ['Гильермо Ривера', 'Гильермо Апарисио', 'Габино Барреда'],
      note: '\n        Гильермо Гонсалес Камарена из Гвадалахары, штат Халиско, был изобретателем \n        хромоскопического адаптера для телевизоров, первой системы для передачи \n        цветного телевидения. Ему было всего 17 лет, и он создал это устройство во \n        время Второй мировой войны. Камарена подал заявку на патент 14 августа 1941 года \n        и получил его 15 сентября 1942 года. Позже его изобретение использовалось в \n        космическом корабле "Вояджер-1". 31 августа 1946 года он провел первую цветную \n        передачу из своей лаборатории в офисе Мексиканской лиги радиоэкспериментов в \n        Мехико. Видеосигнал передавался на частоте 115 МГц, а звук - в 40-метровом \n        диапазоне.\n      '
    }
  },
  {
    question: '¿Quién inventó la pastilla anticonceptiva?',
    answer: 'Luis Ernesto Miramontes Cárdenas el 15 de Octubre de 1951',
    options: [
      'Luis Echeverria el 13 de Septiembre de 1960',
      'Luis Montevalle el 10 de Noviembre de 1948',
      'Javier Ochoa Hernandez el 12 de Mayo de 1948'
    ],
    type: 'choice',
    id: '3ughgd',
    note: '\n      El químico mexicano Luis Ernesto Miramontes Cárdenas inventó los primeros\n      anticonceptivos orales. En 1951, siendo aún estudiante, sintetizó la noretindrona,\n      un análogo sintético de la progesterona. La patente de la noretindrona fue obtenida\n      por Miramontes junto con George Rosenkranz y Carl Djerassi. Esta sustancia se convirtió\n      en la base del primer anticonceptivo oral en el mundo, utilizado por aproximadamente\n      300 millones de mujeres. En 2005, la Academia Mexicana de Ciencias reconoció este\n      descubrimiento como la contribución más significativa de México a la ciencia mundial.\n    ',
    ru: {
      question: 'Кто изобрел контрацептивные таблетки?',
      answer: 'Луис Эрнесто Мирамонтес Карденас 15 октября 1951 года',
      options: [
        'Луис Эчеверрия 13 сентября 1960 года',
        'Луис Монтевалье 10 ноября 1948 года',
        'Хавьер Очоа Эрнандес 12 мая 1948 года'
      ],
      note: '\n        Мексиканский химик Луис Эрнесто Мирамонтес Карденас изобрёл первые оральные\n        противозачаточные. В 1951 году, будучи студентом, он синтезировал норэтиндрон,\n        синтетический аналог прогестерона. Патент на норэтиндрон был получен Мирамонтесом\n        совместно с Джорджем Розенкранцем и Карлом Джерасси. Это вещество стало основой\n        для первого в мире орального контрацептива, которым воспользовались около 300\n        миллионов женщин. В 2005 году Мексиканская Академия наук признала это открытие\n        самым значительным вкладом Мексики в мировую науку.\n      '
    }
  },
  {
    question:
      'Mexicano que ganó el Premio Nobel de Química por sus investigaciones sobre la capa de ozono',
    answer: 'José Mario Molina Pasquel y Henríquez en 1995',
    options: [
      'Luis Ernesto Miramontes Cárdenas en 1994',
      'Rodolfo Neri Vela en 1992',
      'Guillermo Gonzalez Camarena en 1995'
    ],
    type: 'choice',
    id: '8f8cl4',
    note: '\n      Mario José Molina-Pasquel Henríquez (19 de marzo de 1943 - 7 de octubre de 2020) \n      fue un químico físico mexicano. Desempeñó un papel crucial en el descubrimiento \n      del agujero de ozono en la Antártida y fue co-receptor del Premio Nobel de \n      Química en 1995 por su investigación sobre la amenaza a la capa de ozono de \n      la Tierra por los gases clorofluorocarbonos (CFC). Molina fue el primer \n      científico mexicano en recibir el Premio Nobel de Química.\n    ',
    ru: {
      question:
        'Мексиканец, получивший Нобелевскую премию по химии за исследования озонового слоя',
      answer: 'Хосе Марио Молина Паскель и Энрикес в 1995 году',
      options: [
        'Луис Эрнесто Мирамонтес Карденас в 1994 году',
        'Родольфо Нери Вела в 1992 году',
        'Гильермо Гонсалес Камарена в 1995 году'
      ],
      note: '\n        Марио Хосе Молина-Паскель Энрикес (19 марта 1943 — 7 октября 2020) — мексиканский\n        физикохимик. Он сыграл ключевую роль в открытии антарктической озоновой дыры и был\n        со-лауреатом Нобелевской премии по химии в 1995 году за исследование угрозы озоновому\n        слою Земли от хлорфторуглеродов (CFC). Молина стал первым мексиканским учёным,\n        получившим Нобелевскую премию по химии.\n      '
    }
  },
  {
    question: 'Nombre del primer astronauta mexicano',
    answer: 'Rodolfo Neri Vela',
    options: [
      'Gabriel Mendoza Soza',
      'Erik Ochoa Velez',
      'Javier Del Toro Amezcua'
    ],
    type: 'choice',
    id: 'nseeee',
    note: '\n      El nombre del primer astronauta mexicano es Rodolfo Neri Vela. Realizó su\n      vuelo al espacio en 1985 a bordo del transbordador espacial "Atlantis" como\n      parte de la misión STS-61-B. Neri Vela se convirtió en el primer y hasta ahora\n      único mexicano en haber viajado al espacio.\n    ',
    ru: {
      question: 'Имя первого мексиканского космонавта',
      answer: 'Родольфо Нери Вела',
      options: [
        'Габриэль Мендоса Соза',
        'Эрик Очоа Велес',
        'Хавьер Дель Торо Амескуа'
      ],
      note: '\n        Имя первого мексиканского космонавта — Родольфо Нери Вела. Он совершил\n        полёт в космос в 1985 году на борту космического шаттла "Атлантис" в рамках\n        миссии STS-61-B. Вела стал первым и пока единственным мексиканцем, побывавшим\n        в космосе.\n      '
    }
  },
  {
    question:
      'Astronauta mexicano que participó en la misión STS-61-B del Transbordador Espacial Atlantis',
    answer: 'Rodolfo Neri Vela',
    note: 'La Misión STS-61-B tuvo como principal objetivo poner en órbita tres satélites: el Morelos II de México, el AUSSAT-2 de Australia y el SATCOM KU-2 de los Estados Unidos. Rodolfo Neri Vela fué parte de la tripulación como especialista de carga.',
    options: [
      'Gabriel Mendoza Soza',
      'Erik Ochoa Velez',
      'Javier Del Toro Amezcua'
    ],
    type: 'choice',
    id: 'wdpsaf',
    ru: {
      question:
        'Мексиканский космонавт, участвовавший в миссии STS-61-B шаттла Atlantis',
      answer: 'Родольфо Нери Вела',
      options: [
        'Габриэль Мендоса Соза',
        'Эрик Очоа Велес',
        'Хавьер Дель Торо Амескуа'
      ],
      note: 'Миссия STS-61-B имела основной целью вывести на орбиту три спутника: Morelos II Мексики, AUSSAT-2 Австралии и SATCOM KU-2 США. Родольфо Нери Вела был частью экипажа в качестве специалиста по грузу.'
    }
  },
  {
    question: '¿Quién fué la primera mujer médico en México?',
    answer: 'Matilde Montoya en 1887',
    options: [
      'Gabriela Barragán en 1775',
      'Eleonor Gutierrez en 1908',
      'Anastacia Brizuela en 1888'
    ],
    type: 'choice',
    id: 'qunzo',
    ru: {
      question: 'Кто была первой женщиной-врачом в Мексике?',
      answer: 'Матильда Монтойя в 1887 году',
      options: [
        'Габриэла Барраган в 1775 году',
        'Элеонор Гутьеррес в 1908 году',
        'Анастасия Бризуэла в 1888 году'
      ]
    }
  },
  {
    question: '¿Quién fué Luis Barragán?',
    answer: 'Ingeniero y arquitecto mexicano, autor de las Torres de Satélite',
    options: [
      'Campeón olimpico de natación en 1968',
      'Químico mexicano ganador del Premio Nobel',
      'Reconocido muralista mexicano'
    ],
    type: 'choice',
    id: 'cmy4ic2',
    note: 'Luis Barragán fue uno de los arquitectos más importantes de México y del mundo. Nacido en Guadalajara en 1902, Barragán es conocido por su estilo único que combina elementos modernos con toques tradicionales mexicanos. Sus obras, como la Casa Estudio Luis Barragán y las Torres de Satélite, destacan por el uso innovador del color, la luz y los espacios. En 1980, fue galardonado con el Premio Pritzker, el reconocimiento más prestigioso en la arquitectura. Su legado sigue vivo, inspirando a arquitectos y amantes del arte alrededor del mundo, y su trabajo continúa siendo un referente en la arquitectura contemporánea.',
    noteImage: 'cmy4ic2.jpg',
    ru: {
      question: 'Кто был Луис Барраган?',
      answer: 'Мексиканский инженер и архитектор, автор Спутниковых башен',
      options: [
        'Олимпийский чемпион по плаванию в 1968 году',
        'Мексиканский химик, лауреат Нобелевской премии',
        'Известный мексиканский муралист'
      ],
      note: 'Луис Барраган был одним из самых важных архитекторов Мексики и мира. Родившись в Гвадалахаре в 1902 году, Барраган известен своим уникальным стилем, который сочетает современные элементы с традиционными мексиканскими чертами. Его работы, такие как Дом-студия Луиса Баррагана и Сателлитные башни, выделяются инновационным использованием цвета, света и пространства. В 1980 году он был удостоен Притцкеровской премии, самого престижного признания в области архитектуры. Его наследие живет, вдохновляя архитекторов и любителей искусства по всему миру, и его работы продолжают быть образцом в современной архитектуре.'
    }
  },
  {
    question:
      'Mexicano que ganó el premio Pritzker (Conmúnmente llamado Nobel de la arquitectura) en 1980',
    answer: 'Luis Barragán',
    options: ['Armando Mendoza', 'Javier Aguirre', 'Joaquín Martinez'],
    type: 'choice',
    id: 'ws5ehk',
    ru: {
      question:
        'Мексиканец, получивший премию Прицкера (обычно называемую Нобелем архитектуры) в 1980 году',
      answer: 'Луис Барраган',
      options: ['Армандо Мендоса', 'Хавьер Агирре', 'Хоакин Мартинес']
    }
  },
  {
    question: 'Mexicanos ganadores del Premio Nobel',
    answer:
      'Alfonso García Robles, Octavio Paz, José Mario Molina Pasquel y Henríquez',
    options: [
      'Juan Mendoza, Javier Aguirre y Joaquín Martinez',
      'Luis Barragan, Octavio Martinez y Juan Mendoza',
      'Rodolfo Vela, Erik Ochoa y Javier Del Toro Amezcua'
    ],
    type: 'choice',
    id: '6flj1f',
    ru: {
      question: 'Мексиканцы, получившие Нобелевскую премию',
      answer:
        'Альфонсо Гарсия Роблес, Октавио Пас, Хосе Марио Молина Паскель и Энрикес',
      options: [
        'Хуан Мендоса, Хавьер Агирре и Хоакин Мартинес',
        'Луис Барраган, Октавио Мартинес и Хуан Мендоса',
        'Родольфо Вела, Эрик Очоа и Хавьер Дель Торо Амескуа'
      ]
    }
  },
  {
    question: '¿Cuál fué decretado deporte nacional en 1933?',
    answer: 'La charrería',
    options: ['El boxeo', 'El fútbol', 'La equitación'],
    type: 'choice',
    id: 'zaszi',
    ru: {
      question: 'Какой вид спорта был объявлен национальным в 1933 году?',
      answer: 'Чаррерия',
      options: ['Бокс', 'Футбол', 'Верховая езда']
    }
  },
  {
    question: 'Nombres de famosos boxeadores mexicanos',
    answer:
      'Julio César Chávez, Saúl "El Canelo" Alvarez, Ruben "el púas" Olivares',
    options: [
      'Julio César Furch, Ruben "el púas" Olivares',
      'Julio César Domínguez, Manuel Alvarez, Ruben "el púas" Olivares',
      'Julio César Uribe, Ruben Oropeza'
    ],
    type: 'choice',
    id: 'dtuzwr',
    ru: {
      question: 'Имена известных мексиканских боксеров',
      answer:
        'Хулио Сезар Чавес, Сауль "Канело" Альварес, Рубен "пуас" Оливарес',
      options: [
        'Хулио Сезар Фурч, Рубен "пуас" Оливарес',
        'Хулио Сезар Домингес, Мануэль Альварес, Рубен "пуас" Оливарес',
        'Хулио Сезар Урибе, Рубен Оропеза'
      ]
    }
  },
  {
    question:
      'Apodo de la boxeadora mexicana actualmente considerada como la campeona mundial en la categoría de peso supermosca del Consejo Mundial de Boxeo (CMB)',
    answer: 'La Guerrera, Ana Maria Torres Ramirez',
    options: [
      'La Roca, Ibeth Zamora',
      'La princesa azteca, Jackie Nava',
      'La barbie, Mariana Juarez',
      'La Rusita, Yazmín Rivas Hernandez'
    ],
    type: 'choice',
    id: '4tsx4j',
    ru: {
      question:
        'Прозвище мексиканской боксерши, в настоящее время считающейся чемпионкой мира в весовой категории супермухи Всемирного боксерского совета (CMB)',
      answer: 'Воительница, Ана Мария Торрес Рамирес',
      options: [
        'Скала, Ибет Замора',
        'Ацтекская принцесса, Джеки Нава',
        'Барби, Мариана Хуарес',
        'Русита, Ясмин Ривас Эрнандес'
      ]
    }
  },
  {
    question:
      'Apodo de la boxeadora mexicana reconocida como la mejor boxeadora del año por la Federación Internacional de Boxeo (FIB)',
    answer: 'La Rusita, Yazmín Rivas Hernandez',
    options: [
      'La Guerrera, Ana Maria Torres Ramirez',
      'La Princesa azteca, Jackie Nava',
      'La Barbie, Mariana Juarez'
    ],
    type: 'choice',
    id: 'o8lor',
    ru: {
      question:
        'Прозвище мексиканской боксерши, признанной лучшей боксершей года Международной боксерской федерацией (FIB)',
      answer: 'Русита, Ясмин Ривас Эрнандес',
      options: [
        'Воительница, Ана Мария Торрес Рамирес',
        'Ацтекская принцесса, Джеки Нава',
        'Барби, Мариана Хуарес'
      ]
    }
  },
  {
    question: 'Lugar y fecha en la que México fué sede de los juegos olímpicos',
    answer: 'Ciudad de México, 12 de Octubre 1968',
    options: [
      'Ciudad de México, 6 de Octubre 1970',
      'Guadalajara, 14 de Octubre 1986',
      'Monterrey, 28 de Octubre 1956 '
    ],
    type: 'choice',
    id: '6tsvlxj',
    ru: {
      question: 'Место и дата проведения Олимпийских игр в Мексике',
      answer: 'Мехико, 12 октября 1968 года',
      options: [
        'Мехико, 6 октября 1970 года',
        'Гвадалахара, 14 октября 1986 года',
        'Монтеррей, 28 октября 1956 года'
      ]
    }
  },
  {
    question: '¿En qué años fué México sede de la Copa Mundial de Fútbol?',
    answer: '1970 y 1986',
    options: ['1970 y 1968', '1968 y 1974', '1974 y 1982'],
    type: 'choice',
    id: 'rznah',
    ru: {
      question:
        'В какие годы Мексика была хозяйкой Чемпионата мира по футболу?',
      answer: '1970 и 1986',
      options: ['1970 и 1968', '1968 и 1974', '1974 и 1982']
    }
  },
  {
    question: '¿Cuál es el apodo del futbolista mexicano Javier Hernández?',
    answer: 'Chicharito',
    options: ['Chaparrito', 'Chespirito', 'Cholito'],
    type: 'choice',
    id: 'jopjg8',
    ru: {
      question: 'Какое прозвище у мексиканского футболиста Хавьера Эрнандеса?',
      answer: 'Чичарито',
      options: ['Чапаррито', 'Чеспирито', 'Чолито']
    }
  },
  {
    question: 'Nombres de futbolistas mexicanos famosos en España',
    answer: 'Hugo Sanchez y Rafa Marquez',
    options: [
      'Hugo Sanchez y Chicharito Hernandez',
      'Rafa Hernandez y Hugo Marquez',
      'Luis Garcia y Hugo Sanchez'
    ],
    type: 'choice',
    id: 'efnlyj',
    ru: {
      question: 'Имена известных мексиканских футболистов в Испании',
      answer: 'Хуго Санчес и Рафа Маркес',
      options: [
        'Хуго Санчес и Чичарито Эрнандес',
        'Рафа Эрнандес и Хуго Маркес',
        'Луис Гарсия и Хуго Санчес'
      ]
    }
  },
  {
    question:
      '¿Cuál es el nombre del futbolista mexicano que destacó en Europa en los 90?',
    answer: 'Hugo Sanchez',
    options: ['Jorge Campos', 'Luis Garcia', 'Luis Hernandez'],
    type: 'choice',
    id: 'pn9gb9',
    ru: {
      question:
        'Как зовут мексиканского футболиста, который выделялся в Европе в 90-х годах?',
      answer: 'Хуго Санчес',
      options: ['Хорхе Кампос', 'Луис Гарсия', 'Луис Эрнандес']
    }
  },
  {
    question:
      '¿Quién ganó la medalla de oro en las olimpiadas del año 2000 en Sydney por halterofilia (levantamiento de pesas)?',
    answer: 'Soraya Jiménez Mendivil',
    options: [
      'Anastacia Ramirez Vela',
      'Javier Lozano Herrera',
      'Ernesto Silva Jimenez'
    ],
    type: 'choice',
    id: 'yoyw74',
    ru: {
      question:
        'Кто выиграл золотую медаль на Олимпийских играх 2000 года в Сиднее по тяжелой атлетике (поднятие тяжестей)?',
      answer: 'Сорайя Хименес Мендивиль',
      options: [
        'Анастасия Рамирез Вела',
        'Хавьер Лозано Эррера',
        'Эрнесто Сильва Хименес'
      ]
    }
  },
  {
    question:
      '¿Cuál es el récord de la carrera que ganó Ana Gabriela Guevara Espinoza en 2003?',
    answer: '300 metros planos en 35.30 segundos',
    options: [
      '100 metros planos en 11.13 segundos',
      '200 metros con vallas en 19.4 segundos',
      '400 metros planos en 48.98 segundos'
    ],
    type: 'choice',
    id: 'x9kes9',
    ru: {
      question:
        'Каков рекорд забега, который выиграла Ана Габриэла Гуэвара Эспиноса в 2003 году?',
      answer: '300 метров плоской дорожки за 35,30 секунды',
      options: [
        '100 метров плоской дорожки за 11,13 секунды',
        '200 метров с барьерами за 19,4 секунды',
        '400 метров плоской дорожки за 48,98 секунды'
      ]
    }
  },
  {
    question:
      'Récord de la carrera en que Ana Gabriela Guevara fué medallista de las Olimpíadas de Atenas 2004',
    answer: 'Medalla de plata en 400m planos en 48.89 seg',
    options: [
      'Medalla de plata en 100m planos en 48.89 seg',
      'Medalla de plata en 200m planos en 48.89 seg',
      'Medalla de plata en 300m planos en 48.89 seg'
    ],
    type: 'choice',
    id: 'k8r8uj',
    ru: {
      question:
        'Рекорд забега, в котором Ана Габриэла Гуэвара была призером Олимпийских игр в Афинах 2004 года',
      answer: 'Серебряная медаль в 400 м плоской дорожке за 48,89 сек',
      options: [
        'Серебряная медаль в 100 м плоской дорожке за 48,89 сек',
        'Серебряная медаль в 200 м плоской дорожке за 48,89 сек',
        'Серебряная медаль в 300 м плоской дорожке за 48,89 сек'
      ]
    }
  }
];
