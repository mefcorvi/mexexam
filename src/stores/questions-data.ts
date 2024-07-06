import type { DeepReadonly } from 'vue';

type QuestionsData = {
  sections: {
    id: string;
    title: string;
    ru: {
      title: string;
    };
    questions: {
      id: string;
      type: 'text' | 'choice';
      question: string;
      answer: string;
      options?: string[];
      note?: string;
      noteImage?: string;
      ru: {
        question: string;
        answer: string;
        options?: string[];
        note?: string;
      };
    }[];
  }[];
};

export const questionsData: DeepReadonly<QuestionsData> = {
  sections: [
    {
      id: 'xhrpl7t',
      title: 'Ciencia y deportes',
      ru: {
        title: 'Наука и спорт'
      },
      questions: [
        {
          id: 'p52uw',
          type: 'text',
          question: '¿Cuáles son los mexicanos ganadores del Premio Nobel?',
          answer:
            'Alfonso García Robles, Premio Nobel de la Paz en 1982\nOctavio Paz, Premio Nobel de Literatura en 1990\nJosé Mario Molina Pasquel y Henríquez, Premio Nobel de Química en 1995',
          note: `
            <h1>Mexicanos Ganadores del Premio Nobel</h1>
            <p>México cuenta con tres laureados con el Premio Nobel, quienes han dejado una huella significativa en sus respectivos campos.</p>
            
            <h2>Octavio Paz</h2>
            <p>El primero en recibir este honor fue Octavio Paz, ganador del Premio Nobel de Literatura en 1990. Paz fue reconocido por su obra poética y ensayística, que abarcó temas como la soledad, el amor y la identidad mexicana. Su trabajo más destacado incluye el libro <em>El laberinto de la soledad</em> y numerosas colecciones de poesía. 
            <a href="https://es.wikipedia.org/wiki/Octavio_Paz" target="_blank">Más información</a></p>
            
            <h2>Alfonso García Robles</h2>
            <p>El segundo mexicano en recibir el Premio Nobel fue Alfonso García Robles, quien obtuvo el Premio Nobel de la Paz en 1982. García Robles fue galardonado por su esfuerzo en la negociación y firma del Tratado de Tlatelolco en 1967, que estableció una zona libre de armas nucleares en América Latina y el Caribe. Su labor diplomática fue crucial para la promoción de la paz y la seguridad en la región. 
            <a href="https://es.wikipedia.org/wiki/Alfonso_Garc%C3%ADa_Robles" target="_blank">Más información</a></p>
            
            <h2>Mario J. Molina</h2>
            <p>El tercer laureado es Mario J. Molina, quien ganó el Premio Nobel de Química en 1995 junto con Paul Crutzen y Frank Sherwood Rowland. Molina fue reconocido por su investigación sobre la química atmosférica, particularmente por su trabajo en el descubrimiento del adelgazamiento de la capa de ozono debido a los clorofluorocarbonos (CFC). Sus estudios llevaron a la creación del Protocolo de Montreal, un tratado internacional para la protección de la capa de ozono. 
            <a href="https://es.wikipedia.org/wiki/Mario_Molina" target="_blank">Más información</a></p>          
          `,
          ru: {
            question: 'Кто из мексиканцев получил Нобелевскую премию?',
            answer:
              'Альфонсо Гарсия Роблес, Нобелевская премия мира в 1982 году\nОктавио Пас, Нобелевская премия по литературе в 1990 году\nХосе Марио Молина Паскель и Энрикес, Нобелевская премия по химии в 1995 году',
            note: `
              <h1>Мексиканцы - Лауреаты Нобелевской Премии</h1>
              <p>В Мексике есть три лауреата Нобелевской премии, которые оставили значительный след в своих областях.</p>
              
              <h2>Октавио Пас</h2>
              <p>Первым мексиканцем, получившим эту награду, стал Октавио Пас, лауреат Нобелевской премии по литературе 1990 года. Паса отметили за его поэтические и эссеистические работы, затрагивающие темы одиночества, любви и мексиканской идентичности. Среди его наиболее известных произведений - книга <em>«Лабиринт одиночества»</em> и многочисленные сборники стихов. 
              <a href="https://ru.wikipedia.org/wiki/Октавио_Пас" target="_blank">Подробнее</a></p>
              
              <h2>Альфонсо Гарсия Роблес</h2>
              <p>Вторым мексиканцем, удостоенным Нобелевской премии, стал Альфонсо Гарсия Роблес, лауреат Нобелевской премии мира 1982 года. Гарсия Роблес получил награду за свои усилия в переговорах и подписании Тлателолькского договора в 1967 году, который установил зону, свободную от ядерного оружия в Латинской Америке и Карибском бассейне. Его дипломатическая работа сыграла ключевую роль в продвижении мира и безопасности в регионе. 
              <a href="https://ru.wikipedia.org/wiki/Альфонсо_Гарсия_Роблес" target="_blank">Подробнее</a></p>
              
              <h2>Марио Дж. Молина</h2>
              <p>Третьим лауреатом стал Марио Дж. Молина, получивший Нобелевскую премию по химии в 1995 году вместе с Полом Крутценом и Фрэнком Шервудом Роуландом. Молину отметили за исследования в области атмосферной химии, особенно за открытие истончения озонового слоя из-за хлорфторуглеродов (CFC). Его работа привела к созданию Монреальского протокола, международного соглашения по защите озонового слоя. 
              <a href="https://ru.wikipedia.org/wiki/Марио_Молина" target="_blank">Подробнее</a></p>
            `
          }
        },
        {
          id: '2ybw8w',
          type: 'choice',
          question: '¿Quién inventó la TV a color?',
          answer: 'Guillermo González Camarena',
          options: ['Guillermo Rivera', 'Guillermo Aparicio', 'Gabino Barreda'],
          note: `
            Guillermo González Camarena de Guadalajara, Jalisco, fue el inventor del 
            adaptador cromoscópico para televisores, el primer sistema para transmitir 
            televisión a color. Tenía solo 17 años cuando creó este dispositivo durante la 
            Segunda Guerra Mundial. Camarena solicitó la patente el 14 de agosto de 1941 y 
            la obtuvo el 15 de septiembre de 1942. Más tarde, su invento fue utilizado en la 
            nave espacial "Voyager-1". El 31 de agosto de 1946, realizó la primera 
            transmisión a color desde su laboratorio en la oficina de la Liga Mexicana de 
            Radioexperimentadores en Ciudad de México. La señal de video se transmitía a una 
            frecuencia de 115 MHz, y el sonido en la banda de 40 metros.
          `,
          ru: {
            question: 'Кто изобрел цветное телевидение?',
            answer: 'Гильермо Гонсалес Камарена',
            options: ['Гильермо Ривера', 'Гильермо Апарисио', 'Габино Барреда'],
            note: `
              Гильермо Гонсалес Камарена из Гвадалахары, штат Халиско, был изобретателем 
              хромоскопического адаптера для телевизоров, первой системы для передачи 
              цветного телевидения. Ему было всего 17 лет, и он создал это устройство во 
              время Второй мировой войны. Камарена подал заявку на патент 14 августа 1941 года 
              и получил его 15 сентября 1942 года. Позже его изобретение использовалось в 
              космическом корабле "Вояджер-1". 31 августа 1946 года он провел первую цветную 
              передачу из своей лаборатории в офисе Мексиканской лиги радиоэкспериментов в 
              Мехико. Видеосигнал передавался на частоте 115 МГц, а звук - в 40-метровом 
              диапазоне.
            `
          }
        },
        {
          id: '3ughgd',
          type: 'choice',
          question: '¿Quién inventó la pastilla anticonceptiva?',
          answer: 'Luis Ernesto Miramontes Cárdenas el 15 de Octubre de 1951',
          options: [
            'Luis Echeverria el 13 de Septiembre de 1960',
            'Luis Montevalle el 10 de Noviembre de 1948',
            'Javier Ochoa Hernandez el 12 de Mayo de 1948'
          ],
          note: `
            El químico mexicano Luis Ernesto Miramontes Cárdenas inventó los primeros
            anticonceptivos orales. En 1951, siendo aún estudiante, sintetizó la noretindrona,
            un análogo sintético de la progesterona. La patente de la noretindrona fue obtenida
            por Miramontes junto con George Rosenkranz y Carl Djerassi. Esta sustancia se convirtió
            en la base del primer anticonceptivo oral en el mundo, utilizado por aproximadamente
            300 millones de mujeres. En 2005, la Academia Mexicana de Ciencias reconoció este
            descubrimiento como la contribución más significativa de México a la ciencia mundial.
          `,
          ru: {
            question: 'Кто изобрел контрацептивные таблетки?',
            answer: 'Луис Эрнесто Мирамонтес Карденас 15 октября 1951 года',
            options: [
              'Луис Эчеверрия 13 сентября 1960 года',
              'Луис Монтевалье 10 ноября 1948 года',
              'Хавьер Очоа Эрнандес 12 мая 1948 года'
            ],
            note: `
              Мексиканский химик Луис Эрнесто Мирамонтес Карденас изобрёл первые оральные
              противозачаточные. В 1951 году, будучи студентом, он синтезировал норэтиндрон,
              синтетический аналог прогестерона. Патент на норэтиндрон был получен Мирамонтесом
              совместно с Джорджем Розенкранцем и Карлом Джерасси. Это вещество стало основой
              для первого в мире орального контрацептива, которым воспользовались около 300
              миллионов женщин. В 2005 году Мексиканская Академия наук признала это открытие
              самым значительным вкладом Мексики в мировую науку.
            `
          }
        },
        {
          id: '8f8cl4',
          type: 'choice',
          question:
            'Mexicano que ganó el Premio Nobel de Química por sus investigaciones sobre la capa de ozono',
          answer: 'José Mario Molina Pasquel y Henríquez en 1995',
          options: [
            'Luis Ernesto Miramontes Cárdenas en 1994',
            'Rodolfo Neri Vela en 1992',
            'Guillermo Gonzalez Camarena en 1995'
          ],
          note: `
            Mario José Molina-Pasquel Henríquez (19 de marzo de 1943 - 7 de octubre de 2020) 
            fue un químico físico mexicano. Desempeñó un papel crucial en el descubrimiento 
            del agujero de ozono en la Antártida y fue co-receptor del Premio Nobel de 
            Química en 1995 por su investigación sobre la amenaza a la capa de ozono de 
            la Tierra por los gases clorofluorocarbonos (CFC). Molina fue el primer 
            científico mexicano en recibir el Premio Nobel de Química.
          `,
          ru: {
            question:
              'Мексиканец, получивший Нобелевскую премию по химии за исследования озонового слоя',
            answer: 'Хосе Марио Молина Паскель и Энрикес в 1995 году',
            options: [
              'Луис Эрнесто Мирамонтес Карденас в 1994 году',
              'Родольфо Нери Вела в 1992 году',
              'Гильермо Гонсалес Камарена в 1995 году'
            ],
            note: `
              Марио Хосе Молина-Паскель Энрикес (19 марта 1943 — 7 октября 2020) — мексиканский
              физикохимик. Он сыграл ключевую роль в открытии антарктической озоновой дыры и был
              со-лауреатом Нобелевской премии по химии в 1995 году за исследование угрозы озоновому
              слою Земли от хлорфторуглеродов (CFC). Молина стал первым мексиканским учёным,
              получившим Нобелевскую премию по химии.
            `
          }
        },
        {
          id: 'nseeee',
          type: 'choice',
          question: 'Nombre del primer astronauta mexicano',
          answer: 'Rodolfo Neri Vela',
          options: [
            'Gabriel Mendoza Soza',
            'Erik Ochoa Velez',
            'Javier Del Toro Amezcua'
          ],
          note: `
            El nombre del primer astronauta mexicano es Rodolfo Neri Vela. Realizó su
            vuelo al espacio en 1985 a bordo del transbordador espacial "Atlantis" como
            parte de la misión STS-61-B. Neri Vela se convirtió en el primer y hasta ahora
            único mexicano en haber viajado al espacio.
          `,
          ru: {
            question: 'Имя первого мексиканского космонавта',
            answer: 'Родольфо Нери Вела',
            options: [
              'Габриэль Мендоса Соза',
              'Эрик Очоа Велес',
              'Хавьер Дель Торо Амескуа'
            ],
            note: `
              Имя первого мексиканского космонавта — Родольфо Нери Вела. Он совершил
              полёт в космос в 1985 году на борту космического шаттла "Атлантис" в рамках
              миссии STS-61-B. Вела стал первым и пока единственным мексиканцем, побывавшим
              в космосе.
            `
          }
        },
        {
          id: 'wdpsaf',
          type: 'choice',
          question:
            'Astronauta mexicano que participó en la misión STS-61-B del Transbordador Espacial Atlantis',
          answer: 'Rodolfo Neri Vela',
          options: [
            'Gabriel Mendoza Soza',
            'Erik Ochoa Velez',
            'Javier Del Toro Amezcua'
          ],
          note: 'La Misión STS-61-B tuvo como principal objetivo poner en órbita tres satélites: el Morelos II de México, el AUSSAT-2 de Australia y el SATCOM KU-2 de los Estados Unidos. Rodolfo Neri Vela fué parte de la tripulación como especialista de carga.',
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
          id: 'qunzo',
          type: 'choice',
          question: '¿Quién fué la primera mujer médico en México?',
          answer: 'Matilde Montoya en 1887',
          options: [
            'Gabriela Barragán en 1775',
            'Eleonor Gutierrez en 1908',
            'Anastacia Brizuela en 1888'
          ],
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
          id: 'cmy4ic2',
          type: 'choice',
          question: '¿Quién fué Luis Barragán?',
          answer:
            'Ingeniero y arquitecto mexicano, autor de las Torres de Satélite',
          options: [
            'Campeón olimpico de natación en 1968',
            'Químico mexicano ganador del Premio Nobel',
            'Reconocido muralista mexicano'
          ],
          note: 'Luis Barragán fue uno de los arquitectos más importantes de México y del mundo. Nacido en Guadalajara en 1902, Barragán es conocido por su estilo único que combina elementos modernos con toques tradicionales mexicanos. Sus obras, como la Casa Estudio Luis Barragán y las Torres de Satélite, destacan por el uso innovador del color, la luz y los espacios. En 1980, fue galardonado con el Premio Pritzker, el reconocimiento más prestigioso en la arquitectura. Su legado sigue vivo, inspirando a arquitectos y amantes del arte alrededor del mundo, y su trabajo continúa siendo un referente en la arquitectura contemporánea.',
          noteImage: 'cmy4ic2.jpg',
          ru: {
            question: 'Кто был Луис Барраган?',
            answer:
              'Мексиканский инженер и архитектор, автор Спутниковых башен',
            options: [
              'Олимпийский чемпион по плаванию в 1968 году',
              'Мексиканский химик, лауреат Нобелевской премии',
              'Известный мексиканский муралист'
            ],
            note: 'Луис Барраган был одним из самых важных архитекторов Мексики и мира. Родившись в Гвадалахаре в 1902 году, Барраган известен своим уникальным стилем, который сочетает современные элементы с традиционными мексиканскими чертами. Его работы, такие как Дом-студия Луиса Баррагана и Сателлитные башни, выделяются инновационным использованием цвета, света и пространства. В 1980 году он был удостоен Притцкеровской премии, самого престижного признания в области архитектуры. Его наследие живет, вдохновляя архитекторов и любителей искусства по всему миру, и его работы продолжают быть образцом в современной архитектуре.'
          }
        },
        {
          id: 'ws5ehk',
          type: 'choice',
          question:
            'Mexicano que ganó el premio Pritzker (Conmúnmente llamado Nobel de la arquitectura) en 1980',
          answer: 'Luis Barragán',
          options: ['Armando Mendoza', 'Javier Aguirre', 'Joaquín Martinez'],
          ru: {
            question:
              'Мексиканец, получивший премию Прицкера (обычно называемую Нобелем архитектуры) в 1980 году',
            answer: 'Луис Барраган',
            options: ['Армандо Мендоса', 'Хавьер Агирре', 'Хоакин Мартинес']
          }
        },
        {
          id: '6flj1f',
          type: 'choice',
          question: 'Mexicanos ganadores del Premio Nobel',
          answer:
            'Alfonso García Robles, Octavio Paz, José Mario Molina Pasquel y Henríquez',
          options: [
            'Juan Mendoza, Javier Aguirre y Joaquín Martinez',
            'Luis Barragan, Octavio Martinez y Juan Mendoza',
            'Rodolfo Vela, Erik Ochoa y Javier Del Toro Amezcua'
          ],
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
          id: 'zaszi',
          type: 'choice',
          question: '¿Cuál fué decretado deporte nacional en 1933?',
          answer: 'La charrería',
          options: ['El boxeo', 'El fútbol', 'La equitación'],
          ru: {
            question: 'Какой вид спорта был объявлен национальным в 1933 году?',
            answer: 'Чаррерия',
            options: ['Бокс', 'Футбол', 'Верховая езда']
          }
        },
        {
          id: 'dtuzwr',
          type: 'choice',
          question: 'Nombres de famosos boxeadores mexicanos',
          answer:
            'Julio César Chávez, Saúl "El Canelo" Alvarez, Ruben "el púas" Olivares',
          options: [
            'Julio César Furch, Ruben "el púas" Olivares',
            'Julio César Domínguez, Manuel Alvarez, Ruben "el púas" Olivares',
            'Julio César Uribe, Ruben Oropeza'
          ],
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
          id: '4tsx4j',
          type: 'choice',
          question:
            'Apodo de la boxeadora mexicana actualmente considerada como la campeona mundial en la categoría de peso supermosca del Consejo Mundial de Boxeo (CMB)',
          answer: 'La Guerrera, Ana Maria Torres Ramirez',
          options: [
            'La Roca, Ibeth Zamora',
            'La princesa azteca, Jackie Nava',
            'La barbie, Mariana Juarez',
            'La Rusita, Yazmín Rivas Hernandez'
          ],
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
          id: 'o8lor',
          type: 'choice',
          question:
            'Apodo de la boxeadora mexicana reconocida como la mejor boxeadora del año por la Federación Internacional de Boxeo (FIB)',
          answer: 'La Rusita, Yazmín Rivas Hernandez',
          options: [
            'La Guerrera, Ana Maria Torres Ramirez',
            'La Princesa azteca, Jackie Nava',
            'La Barbie, Mariana Juarez'
          ],
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
          id: '6tsvlxj',
          type: 'choice',
          question:
            'Lugar y fecha en la que México fué sede de los juegos olímpicos',
          answer: 'Ciudad de México, 12 de Octubre 1968',
          options: [
            'Ciudad de México, 6 de Octubre 1970',
            'Guadalajara, 14 de Octubre 1986',
            'Monterrey, 28 de Octubre 1956 '
          ],
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
          id: 'rznah',
          type: 'choice',
          question:
            '¿En qué años fué México sede de la Copa Mundial de Fútbol?',
          answer: '1970 y 1986',
          options: ['1970 y 1968', '1968 y 1974', '1974 y 1982'],
          ru: {
            question:
              'В какие годы Мексика была хозяйкой Чемпионата мира по футболу?',
            answer: '1970 и 1986',
            options: ['1970 и 1968', '1968 и 1974', '1974 и 1982']
          }
        },
        {
          id: 'jopjg8',
          type: 'choice',
          question:
            '¿Cuál es el apodo del futbolista mexicano Javier Hernández?',
          answer: 'Chicharito',
          options: ['Chaparrito', 'Chespirito', 'Cholito'],
          ru: {
            question:
              'Какое прозвище у мексиканского футболиста Хавьера Эрнандеса?',
            answer: 'Чичарито',
            options: ['Чапаррито', 'Чеспирито', 'Чолито']
          }
        },
        {
          id: 'efnlyj',
          type: 'choice',
          question: 'Nombres de futbolistas mexicanos famosos en España',
          answer: 'Hugo Sanchez y Rafa Marquez',
          options: [
            'Hugo Sanchez y Chicharito Hernandez',
            'Rafa Hernandez y Hugo Marquez',
            'Luis Garcia y Hugo Sanchez'
          ],
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
          id: 'pn9gb9',
          type: 'choice',
          question:
            '¿Cuál es el nombre del futbolista mexicano que destacó en Europa en los 90?',
          answer: 'Hugo Sanchez',
          options: ['Jorge Campos', 'Luis Garcia', 'Luis Hernandez'],
          ru: {
            question:
              'Как зовут мексиканского футболиста, который выделялся в Европе в 90-х годах?',
            answer: 'Хуго Санчес',
            options: ['Хорхе Кампос', 'Луис Гарсия', 'Луис Эрнандес']
          }
        },
        {
          id: 'yoyw74',
          type: 'choice',
          question:
            '¿Quién ganó la medalla de oro en las olimpiadas del año 2000 en Sydney por halterofilia (levantamiento de pesas)?',
          answer: 'Soraya Jiménez Mendivil',
          options: [
            'Anastacia Ramirez Vela',
            'Javier Lozano Herrera',
            'Ernesto Silva Jimenez'
          ],
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
          id: 'x9kes9',
          type: 'choice',
          question:
            '¿Cuál es el récord de la carrera que ganó Ana Gabriela Guevara Espinoza en 2003?',
          answer: '300 metros planos en 35.30 segundos',
          options: [
            '100 metros planos en 11.13 segundos',
            '200 metros con vallas en 19.4 segundos',
            '400 metros planos en 48.98 segundos'
          ],
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
          id: 'k8r8uj',
          type: 'choice',
          question:
            'Récord de la carrera en que Ana Gabriela Guevara fué medallista de las Olimpíadas de Atenas 2004',
          answer: 'Medalla de plata en 400m planos en 48.89 seg',
          options: [
            'Medalla de plata en 100m planos en 48.89 seg',
            'Medalla de plata en 200m planos en 48.89 seg',
            'Medalla de plata en 300m planos en 48.89 seg'
          ],
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
        },
        {
          id: 'hlg0d9',
          type: 'text',
          question:
            '¿En que se destacaron los deportistas mexicanos en las olimpiadas del 2012?',
          answer: 'Fútbol\nTiro con Arco\nClavado\nTaekwondo',
          ru: {
            question:
              'В чем выделялись мексиканские спортсмены на Олимпийских играх 2012 года?',
            answer: 'Футбол\nСтрельба из лука\nПрыжки в воду\nТхэквондо'
          }
        },
        {
          id: 'qnkbzl',
          type: 'text',
          question: 'Nombrar algunos de los medallistas olímpicos mexicanos',
          answer:
            'Humberto Marilles Cortés, en equitación\nJoaquín Capilla, saltos ornamentales\nFelipe el tibio Muñoz, natación\nMaría Teresa Ramírez, Natación\nRicardo Delgado, boxeo\nAntonio Roldán, boxeo\nAna Guevara, atletismo',
          ru: {
            question: 'Назвать некоторых олимпийских медалистов из Мексики',
            answer:
              'Умберто Марильес Кортес, конный спорт\nХоакин Капилья, прыжки в воду\nФелипе "теплый" Муньос, плавание\nМария Тереза Рамирес, плавание\nРикардо Дельгадо, бокс\nАнтонио Ролдан, бокс\nАна Гуэвара, легкая атлетика'
          }
        }
      ]
    },
    {
      id: 'm2661',
      title: 'Civismo',
      ru: {
        title: 'Гражданство'
      },
      questions: [
        {
          id: 'r7s4yk',
          type: 'choice',
          question: 'Árbol nacional',
          answer: 'Ahuehuete o árbol de tule',
          options: ['Árbol de aguacate', 'Parota', 'Agave'],
          ru: {
            question: 'Национальное дерево',
            answer: 'Агуэхуэте или тулевое дерево',
            options: ['Авокадо', 'Парота', 'Агаве']
          }
        },
        {
          id: '03gm3o',
          type: 'choice',
          question: 'Animal nacional',
          answer: 'Águila real',
          options: ['Burro', 'Caballo', 'Serpiente'],
          ru: {
            question: 'Национальное животное',
            answer: 'Королевский орел',
            options: ['Осел', 'Лошадь', 'Змея']
          }
        },
        {
          id: 'vzfh9',
          type: 'choice',
          question: 'Flor nacional',
          answer: 'Dalia',
          options: ['Cempazuchitl', 'Rosa', 'Margarita'],
          ru: {
            question: 'Национальный цветок',
            answer: 'Далия',
            options: ['Цемпазучитль', 'Роза', 'Маргаритка']
          }
        },
        {
          id: '7gml3a',
          type: 'choice',
          question: 'Nombre oficial de México',
          answer: 'Estados Unidos Mexicanos',
          options: [
            'México',
            'Estados Unidos del Sur Mexicano',
            'República de México'
          ],
          ru: {
            question: 'Официальное название Мексики',
            answer: 'Мексиканские Соединенные Штаты',
            options: [
              'Мексика',
              'Соединенные Штаты Южной Мексики',
              'Республика Мексика'
            ]
          }
        },
        {
          id: '5jhoxe',
          type: 'choice',
          question: '¿Cómo se llama la ley fundamental de México?',
          answer: 'Constitución Política de los Estados Unidos Mexicanos',
          options: [
            'Constitución Mexicana',
            'Libro de leyes de la república Mexicana',
            'Reglamento Nacional de los Estados Unidos Mexicanos'
          ],
          ru: {
            question: 'Как называется основной закон Мексики?',
            answer: 'Политическая конституция Мексиканских Соединенных Штатов',
            options: [
              'Мексиканская конституция',
              'Книга законов республики Мексика',
              'Национальный регламент Мексиканских Соединенных Штатов'
            ]
          }
        },
        {
          id: 'l7gfov',
          type: 'choice',
          question:
            '¿Qué documento rige a los extranjeros y mexicanos en el territorio nacional o que documento otorga derechos a los mexicanos?',
          answer: 'Constitución Política de los Estados Unidos Mexicanos',
          options: [
            'Constitución Mexicana',
            'Libro de leyes de la república Mexicana',
            'Reglamento Nacional de los Estados Unidos Mexicanos'
          ],
          ru: {
            question:
              'Какой документ регулирует иностранцев и мексиканцев на национальной территории или какой документ предоставляет права мексиканцам?',
            answer: 'Политическая конституция Мексиканских Соединенных Штатов',
            options: [
              'Мексиканская конституция',
              'Книга законов республики Мексика',
              'Национальный регламент Мексиканских Соединенных Штатов'
            ]
          }
        },
        {
          id: '7e79j',
          type: 'choice',
          question:
            'Artículo de la constitución que prohíbe la esclavitud, habla sobre los derechos humanos y la discriminación',
          answer: 'Artículo 1',
          options: ['Artículo 3', 'Artículo 128', 'Artículo 10'],
          ru: {
            question:
              'Статья конституции, запрещающая рабство, говорит о правах человека и дискриминации',
            answer: 'Статья 1',
            options: ['Статья 3', 'Статья 128', 'Статья 10']
          }
        },
        {
          id: 'xznx4k',
          type: 'choice',
          question:
            '¿Cuál es el artículo de la constitución que habla del derecho de los pueblos indígenas? / Artículo de la constitución que establece una nación pluricultural',
          answer: 'Artículo 2',
          options: ['Artículo 1', 'Artículo 3', 'Artículo 4'],
          ru: {
            question:
              'Какая статья конституции говорит о праве коренных народов? / Статья конституции, устанавливающая многонациональное государство',
            answer: 'Статья 2',
            options: ['Статья 1', 'Статья 3', 'Статья 4']
          }
        },
        {
          id: 'f3k4k',
          type: 'choice',
          question:
            '¿Cuál es el artículo de la constitución que rige la educación primaria y secundaria?',
          answer: 'Artículo 3',
          options: ['Artículo 1', 'Artículo 5', 'Artículo 2'],
          ru: {
            question:
              'Какая статья конституции регулирует начальное и среднее образование?',
            answer: 'Статья 3',
            options: ['Статья 1', 'Статья 5', 'Статья 2']
          }
        },
        {
          id: 'b4mmhg',
          type: 'choice',
          question:
            '¿Cual artículo de la constitución dice que la educación es gratuita y obligatoria?',
          answer: 'Artículo 3',
          options: ['Artículo 1', 'Artículo 5', 'Artículo 2'],
          ru: {
            question:
              'Какая статья конституции говорит, что образование бесплатно и обязательно?',
            answer: 'Статья 3',
            options: ['Статья 1', 'Статья 5', 'Статья 2']
          }
        },
        {
          id: '9qngj7',
          type: 'choice',
          question:
            '¿Cuál artículo de la constitución habla sobre la libertad de trabajo?',
          answer: 'Artículo 5',
          options: ['Artículo 1', 'Artículo 4', 'Artículo 2'],
          ru: {
            question: 'Какая статья конституции говорит о свободе труда?',
            answer: 'Статья 5',
            options: ['Статья 1', 'Статья 4', 'Статья 2']
          }
        },
        {
          id: '5jnher',
          type: 'choice',
          question:
            '¿Cuál artículo de la constitución habla sobre la libertad de expresión?',
          answer: 'Artículo 6',
          options: ['Artículo 9', 'Artículo 1', 'Artículo 7'],
          ru: {
            question: 'Какая статья конституции говорит о свободе слова?',
            answer: 'Статья 6',
            options: ['Статья 9', 'Статья 1', 'Статья 7']
          }
        },
        {
          id: 'aekgt',
          type: 'choice',
          question:
            'Artículo de la constitución que trata sobre el derecho de petición',
          answer: 'Artículo 8',
          options: ['Artículo 10', 'Artículo 5', 'Artículo 6'],
          ru: {
            question: 'Статья конституции, говорящая о праве на обращение',
            answer: 'Статья 8',
            options: ['Статья 10', 'Статья 5', 'Статья 6']
          }
        },
        {
          id: 'tkott',
          type: 'choice',
          question:
            'Artículo de la constitución que trata el derecho a buscar y recibir asilo',
          answer: 'Artículo 11',
          options: ['Artículo 10', 'Artículo 8', 'Artículo 20'],
          ru: {
            question:
              'Статья конституции, говорящая о праве на поиск и получение убежища',
            answer: 'Статья 11',
            options: ['Статья 10', 'Статья 8', 'Статья 20']
          }
        },
        {
          id: 'eopryv',
          type: 'choice',
          question:
            'Artículo de la constitución sobre las obligaciones de los ciudadanos',
          answer: 'Artículo 31',
          options: ['Artículo 13', 'Artículo 30', 'Artículo 33'],
          ru: {
            question: 'Статья конституции о обязанностях граждан',
            answer: 'Статья 31',
            options: ['Статья 13', 'Статья 30', 'Статья 33']
          }
        },
        {
          id: 'd00wke',
          type: 'choice',
          question:
            'Artículo de la constitución que habla sobre los extranjeros',
          answer: 'Artículo 33',
          options: ['Artículo 13', 'Artículo 23', 'Artículo 31'],
          ru: {
            question: 'Статья конституции, говорящая об иностранцах',
            answer: 'Статья 33',
            options: ['Статья 13', 'Статья 23', 'Статья 31']
          }
        },
        {
          id: 'pgb65j',
          type: 'choice',
          question:
            '¿Cuál artículo de la constitución trata sobre los derechos de los ciudadanos?',
          answer: 'Artículo 35',
          options: ['Artículo 15', 'Artículo 5', 'Artículo 53'],
          ru: {
            question: 'Какая статья конституции говорит о правах граждан?',
            answer: 'Статья 35',
            options: ['Статья 15', 'Статья 5', 'Статья 53']
          }
        },
        {
          id: '94xre7',
          type: 'choice',
          question:
            '¿Cuál es el artículo de la constitución que explica cómo puedes perder la naturalización?',
          answer: 'Artículo 37',
          options: ['Artículo 17', 'Artículo 57', 'Artículo 27'],
          ru: {
            question:
              'Какая статья конституции объясняет, как можно потерять натурализацию?',
            answer: 'Статья 37',
            options: ['Статья 17', 'Статья 57', 'Статья 27']
          }
        },
        {
          id: '0j0ah7',
          type: 'choice',
          question: '¿Cuáles son los símbolos patrios?',
          answer: 'La Bandera, el himno nacional y el escudo nacional',
          options: [
            'La bandera, la charrería y el catolicismo',
            'El himno nacional, la bandera y la virgen de Guadalupe',
            'Los tacos, el tequila y la charreria'
          ],
          ru: {
            question: 'Какие национальные символы?',
            answer: 'Флаг, гимн и герб',
            options: [
              'Флаг, чаррерия и католицизм',
              'Гимн, флаг и Дева Гвадалупе',
              'Такос, текила и чаррерия'
            ]
          }
        },
        {
          id: '4wscae',
          type: 'choice',
          question: '¿Cuándo fué creado el Himno Nacional?',
          answer: '13 de Septiembre de 1854',
          options: [
            '10 de Septiembre de 1854',
            '13 de Agosto de 1854',
            '10 de Agosto de 1855'
          ],
          ru: {
            question: 'Когда был создан Гимн?',
            answer: '13 сентября 1854 года',
            options: [
              '10 сентября 1854 года',
              '13 августа 1854 года',
              '10 августа 1855 года'
            ]
          }
        },
        {
          id: 'eziegc',
          type: 'choice',
          question: '¿Cuándo fué declarado oficial el Himno Nacional?',
          answer: '1943 durante la presidencia de Manuel Ávila Camacho',
          options: [
            '1950 durante la presidencia de Lázaro Cárdenas',
            '1982 durante la presidencia de López Mateos',
            '1945 durante la presidencia de Díaz Ordaz'
          ],
          ru: {
            question: 'Когда был официально объявлен Гимн?',
            answer: '1943 год во время президентства Мануэля Авила Камачо',
            options: [
              '1950 год во время президентства Ласаро Карденаса',
              '1982 год во время президентства Лопеса Матеоса',
              '1945 год во время президентства Диаса Ордаса'
            ]
          }
        },
        {
          id: 'brvwv',
          type: 'choice',
          question:
            '¿Cuál de los símbolos patrios fue reconocido oficialmente en 1943 durante la presidencia de Manuel Ávila Camacho?',
          answer: 'El Himno Nacional',
          options: ['La Bandera', 'El Escudo Nacional', 'La Charrería'],
          ru: {
            question:
              'Какой из национальных символов был официально признан в 1943 году во время президентства Мануэля Авила Камачо?',
            answer: 'Гимн',
            options: ['Флаг', 'Герб', 'Чаррерия']
          }
        },
        {
          id: 'fudy1op',
          type: 'choice',
          question: 'El tema dominante del Himno Nacional Mexicano',
          answer: 'Una exhortación a la guerra defensiva',
          options: [
            'Invadir otras naciones',
            'Expandir el territorio',
            'Atacar a los enemigos de la nación'
          ],
          ru: {
            question: 'Доминирующая тема Мексиканского Гимна',
            answer: 'Призыв к оборонительной войне',
            options: [
              'Вторжение в другие нации',
              'Расширить территорию',
              'Атаковать врагов нации'
            ]
          }
        },
        {
          id: 'cufb4',
          type: 'choice',
          question: '¿Quién escribió la letra del Himno Nacional?',
          answer: 'El poeta potosino Francisco González Bocanegra',
          options: [
            'El poeta español Jaime Nunó Roca',
            'El poeta veracruzano Ritchie Valens',
            'El poeta colimense Jorge Solorzano'
          ],
          ru: {
            question: 'Кто написал текст Гимна?',
            answer: 'Поэт Франсиско Гонсалес Боканегра',
            options: [
              'Испанский поэт Хайме Нуньо Рока',
              'Веракрусский поэт Ричи Валенс',
              'Колименский поэт Хорхе Солорсано'
            ]
          }
        },
        {
          id: 'b1vwds',
          type: 'choice',
          question: '¿Quién compuso la música del Himno Nacional?',
          answer: 'El músico español Jaime Nunó',
          options: [
            'El músico potosino Francisco González Bocanegra',
            'El músico Dominicano José Perez Guardiola',
            'El músico frances Charles Ferdinand Latrille'
          ],
          ru: {
            question: 'Кто сочинил музыку Гимна?',
            answer: 'Испанский музыкант Хайме Нуньо',
            options: [
              'Музыкант Франсиско Гонсалес Боканегра',
              'Музыкант Доминикана Хосе Перес Гуардиола',
              'Музыкант француз Шарль Фердинанд Латриль'
            ]
          }
        },
        {
          id: '2igt9',
          type: 'choice',
          question:
            'En el Himno Nacional, la expresión "Más si osare un extraño enemigo" ¿Qué significa?',
          answer: 'Sí un enemigo desconocido se atreviera',
          options: [
            'Cuando un enemigo de la nación ataque',
            'Los enemigos extraños son osados',
            'Más de un enemigo esta al acecho'
          ],
          ru: {
            question:
              'В Гимне Национальном выражение "Más si osare un extraño enemigo" Что означает?',
            answer: 'Если бы враг неизвестный осмелился',
            options: [
              'Когда враг нации атакует',
              'Иностранные враги смелы',
              'Больше одного врага подстерегает'
            ]
          }
        },
        {
          id: 'gj9z7',
          type: 'text',
          question: 'Descripción de la bandera, colores y elementos',
          answer:
            'Es un rectángulo dividido en tres franjas verticales de igual proporción, de colores verde blanco y rojo. El Escudo Nacional se encuentra al centro de la franja blanca. El color verde simboliza esperanza, blanco la pureza de los ideales y rojo la sangre derramada por los héroes de la patria.',
          ru: {
            question: 'Описание флага, цветов и элементов',
            answer:
              'Это прямоугольник, разделенный на три вертикальные полосы одинаковой пропорции, зеленый белый и красный. Герб национальный находится в центре белой полосы. Зеленый цвет символизирует надежду, белый чистоту идеалов, а красный кровь пролитую героями отечества.'
          }
        },
        {
          id: 'g0hf2u',
          type: 'text',
          question: 'Descripción del escudo nacional y sus elementos',
          answer:
            'Está constituido por un águila, posada su garra izquierda sobre un nopal florecido que nace en una peña que emerge de un lago, sujeta con la derecha y con el pico, en actitud de devorar a una serpiente curvada, varias pencas del nopal se ramifican a los lados. Dos ramas, una de encino al frente del águila y otra de laurel al lado opuesto.',
          ru: {
            question: 'Описание национального герба и его элементов',
            answer:
              'Он состоит из орла, сидящего на лапе слева на цветущем кактусе, растущем на скале, вздымающейся из озера, держащего правой лапой и клювом, в позе поглощения изогнутой змеи, несколько листьев кактуса разветвляются по сторонам. Две ветви, одна из дуба перед орлом и другая из лавра на противоположной стороне.'
          }
        },
        {
          id: 'e0akao',
          type: 'choice',
          question:
            '¿Cúal es el significado de el águila y la serpiente que aparecen en el escudo nacional mexicano, incluido en la franja blanca de la bandera?',
          answer: 'Representan una leyenda prehispánica',
          options: [
            'Representan una leyenda católica',
            'Representan una pintura',
            'Representan un ritual'
          ],
          ru: {
            question:
              'Каково значение орла и змеи, изображенных на национальном гербе Мексики, включенном в белую полосу флага?',
            answer: 'Представляют собой предисловие',
            options: [
              'Представляют собой католическую легенду',
              'Представляют собой картину',
              'Представляют собой ритуал'
            ]
          }
        },
        {
          id: 'sqxvrk',
          type: 'choice',
          question: '¿Quién es el máximo comandante de las Fuerzas Armadas?',
          answer: 'El presidente de la república',
          options: [
            'El Estado Mayor',
            'El general en servicio de mayor rango en el ejercito',
            'El titular de la Secretaría de la Defensa Nacional'
          ],
          ru: {
            question: 'Кто является верховным командующим Вооруженными силами?',
            answer: 'Президент республики',
            options: [
              'Генеральный штаб',
              'Генерал с наивысшим рангом в армии',
              'Руководитель Министерства национальной обороны'
            ]
          }
        },
        {
          id: 'to5cl',
          type: 'choice',
          question: 'Los tres niveles de gobierno en México son',
          answer: 'Federación, estado y municipio',
          options: [
            'Primario, secundario y terciario',
            'Ejecutivo, legislativo y judicial',
            'Federación, delegación y provincia'
          ],
          ru: {
            question: 'Три уровня правительства в Мексике',
            answer: 'Федерация, штат и муниципалитет',
            options: [
              'Первичный, вторичный и третичный',
              'Исполнительная, законодательная и судебная',
              'Федерация, делегация и провинция'
            ]
          }
        },
        {
          id: '41ajni',
          type: 'choice',
          question: 'Según la constitución, ¿Cuáles son los poderes máximos?',
          answer: 'Ejecutivo, legislativo y judicial',
          options: [
            'El presidente y las secretarías de gobierno',
            'Los diputados y los ciudadanos',
            'Tribunal Supremo de Justicia, Instituto Nacional Electoral y los cuerpos policiales'
          ],
          ru: {
            question: 'Согласно конституции, какие власти максимальны?',
            answer: 'Исполнительная, законодательная и судебная',
            options: [
              'Президент и министерства правительства',
              'Депутаты и граждане',
              'Верховный суд, Национальный институт избирательной системы и полицейские органы'
            ]
          }
        },
        {
          id: 'xr1mfr',
          type: 'choice',
          question: '¿Quién imparte la justicia en México?',
          answer: 'El Poder Judicial con división federal y estatal',
          options: [
            'La policía en sus tres niveles, federal, estatal y municipal',
            'El presidente y la camara de diputados',
            'El senado de la república'
          ],
          ru: {
            question: 'Кто осуществляет правосудие в Мексике?',
            answer: 'Судебная власть с федеральным и штатным делением',
            options: [
              'Полиция на трех уровнях, федеральном, штатном и муниципальном',
              'Президент и палата депутатов',
              'Сенат республики'
            ]
          }
        },
        {
          id: '12udrk',
          type: 'text',
          question: 'Estructura del Poder Judicial Mexicano',
          answer:
            'Suprema Corte de Justicia\nTribunal Electoral\nLos Tribunales de Circuito (Colegiados y Unitarios)\nJuzgados de Distrito\nConsejo de la Judicatura Federal',
          ru: {
            question: 'Структура Мексиканской судебной власти',
            answer:
              'Верховный суд\nИзбирательный трибунал\nОкружные суды (коллегиальные и единичные)\nРайонные суды\nСовет федеральной юстиции'
          }
        },
        {
          id: 'u56wa',
          type: 'choice',
          question: '¿Cuántos magistrados tiene la Corte Suprema de Justicia?',
          answer: '11',
          options: [
            '32',
            '500',
            '2 por cada estado de la república mexicana (64)'
          ],
          ru: {
            question: 'Сколько судей в Верховном суде?',
            answer: '11',
            options: [
              '32',
              '500',
              'По 2 на каждый штат республики Мексика (64)'
            ]
          }
        },
        {
          id: 'zvhp7',
          type: 'choice',
          question: '¿Cuál es el organo depositario del Poder Legislativo?',
          answer: 'El Congreso de la Unión',
          options: [
            'El Presidente de la República',
            'La Guardia Nacional',
            'El Instituto Nacional Electoral'
          ],
          ru: {
            question: 'Какой орган является хранилищем законодательной власти?',
            answer: 'Конгресс Союза',
            options: [
              'Президент республики',
              'Национальная гвардия',
              'Национальный институт избирательной системы'
            ]
          }
        },
        {
          id: 'eksbft',
          type: 'choice',
          question: '¿Quienes crean y aprueban las leyes en México?',
          answer: 'Los diputados y senadores del congreso de la unión',
          options: [
            'Los ciudadanos por medio del voto',
            'El presidente de la república',
            'Los jueces y magistrados de la suprema corte de justicia'
          ],
          ru: {
            question: 'Кто создает и принимает законы в Мексике?',
            answer: 'Депутаты и сенаторы конгресса союза',
            options: [
              'Граждане посредством голосования',
              'Президент республики',
              'Судьи и магистраты верховного суда правосудия'
            ]
          }
        },
        {
          id: 'lusig',
          type: 'choice',
          question: '¿Cuántos diputados tiene el congreso?',
          answer: '500',
          options: ['11', '32', '128'],
          ru: {
            question: 'Сколько депутатов в конгрессе?',
            answer: '500',
            options: ['11', '32', '128']
          }
        },
        {
          id: 'n34pze',
          type: 'choice',
          question:
            '¿A qué entidad representan los diputados del Congreso de la Unión?',
          answer: 'A los distritos electorales',
          options: [
            'A los estados de la república',
            'A los municipios',
            'A las regiones del país'
          ],
          ru: {
            question: 'Какую сущность представляют депутаты конгресса союза?',
            answer: 'Избирательные округа',
            options: ['Штаты республики', 'Муниципалитеты', 'Регионы страны']
          }
        },
        {
          id: '40ihpn',
          type: 'choice',
          question: '¿Cuántos distritos electorales hay en México?',
          answer: '300',
          options: ['32', '500', '128'],
          ru: {
            question: 'Сколько избирательных округов в Мексике?',
            answer: '300',
            options: ['32', '500', '128']
          }
        },
        {
          id: '0uvmu',
          type: 'choice',
          question: '¿A quién representan los senadores?',
          answer: 'A las entidades federativas',
          options: [
            'Al presidente de la republica',
            'A jueces y magistrados',
            'A los municipios'
          ],
          ru: {
            question: 'Кого представляют сенаторы?',
            answer: 'Субъекты федерации',
            options: [
              'Президента республики',
              'Судей и магистрата',
              'Муниципалитеты'
            ]
          }
        },
        {
          id: 'wp6sgq',
          type: 'choice',
          question: '¿Cuántos senadores hay en México?',
          answer: '128',
          options: ['500', '11', '158'],
          ru: {
            question: 'Сколько сенаторов в Мексике?',
            answer: '128',
            options: ['500', '11', '158']
          }
        },
        {
          id: 'bj2ii',
          type: 'choice',
          question: '¿Cuánto tiempo dura el mandato presidencial en México?',
          answer: '6 años sin reelección',
          options: [
            '4 años con capacidad de reelegirse sólamente 1 periodo más',
            '4 años sin reeleción',
            '6 años con reeleciónes indefinidas'
          ],
          ru: {
            question: 'Как долго длится президентский срок в Мексике?',
            answer: '6 лет без переизбрания',
            options: [
              '4 года с возможностью переизбрания только на 1 дополнительный период',
              '4 года без переизбрания',
              '6 лет с неограниченным переизбранием'
            ]
          }
        },
        {
          id: '7w0won',
          type: 'choice',
          question: '¿Cuándo son las elecciones presidenciales en México?',
          answer: 'El primer domingo de Junio cada 6 años',
          options: [
            'El primer domingo de Diciembre cada 6 años',
            'El primer domingo de Enero cada 6 años',
            'El primer domingo Febrero cada 6 años'
          ],
          ru: {
            question: 'Когда президентские выборы в Мексике?',
            answer: 'Первое воскресенье июня каждые 6 лет',
            options: [
              'Первое воскресенье декабря каждые 6 лет',
              'Первое воскресенье января каждые 6 лет',
              'Первое воскресенье февраля каждые 6 лет'
            ]
          }
        },
        {
          id: '86nw8',
          type: 'choice',
          question: '"Los Pinos”, en la capital de México, es el nombre de',
          answer:
            'Residencia oficial del presidente de la República desde 1934 hasta Noviembre 2018',
          options: [
            'Museo de arte revolucionario fundado en 1946',
            'Parque urbano localizado en la alcaldía Miguel Hidalgo',
            'Monumento nacional considerado patrimonio cultural de la humanidad por la unesco'
          ],
          note: 'Desde 1 diciembre 2018 es un espacio abierto al público, el presidente actual AMLO no vive allí.',
          ru: {
            question: '"Лос Пинос", в столице Мексики, это название',
            answer:
              'Официальная резиденция президента республики с 1934 года по ноябрь 2018 года',
            options: [
              'Музей революционного искусства, основанный в 1946 году',
              'Городской парк, расположенный в административном районе Мигель Идальго',
              'Национальный памятник, признанный ЮНЕСКО культурным наследием человечества'
            ],
            note: 'С 1 декабря 2018 года это открытое пространство для общественности, нынешний президент АМЛО там не живет.'
          }
        },
        {
          id: 'lzieq',
          type: 'choice',
          question: '¿A qué edad se puede votar en México?',
          answer: '18 años',
          options: ['16 años', '21 años', '19 años'],
          ru: {
            question: 'Во сколько лет можно голосовать в Мексике?',
            answer: '18 лет',
            options: ['16 лет', '21 год', '19 лет']
          }
        },
        {
          id: 'hz6m7r',
          type: 'choice',
          question:
            '¿Dónde se hacen las denuncias del consumidor? o ¿Cuál es la institución de protección al consumidor?',
          answer: 'PROFECO: Procuraduría Federal del Consumidor',
          options: [
            'POFECO: Poder Federal del Consumidor',
            'MINCO: Ministerio Nacional del Consumidor',
            'MINPROCON: Ministerio de Proteción de los Consumidores'
          ],
          ru: {
            question:
              'Где можно подать жалобу потребителя? или Какое учреждение занимается защитой прав потребителей?',
            answer:
              'PROFECO: Федеральная прокуратура по защите прав потребителей',
            options: [
              'ПОФЕКО: Федеральная служба по защите прав потребителей',
              'МИНКО: Национальное министерство по делам потребителей',
              'МИНПРОКОН: Министерство по защите прав потребителей'
            ]
          }
        },
        {
          id: 'ivh34z',
          type: 'choice',
          question: '¿Secretaría que se encarga de cobrar impuestos?',
          answer: 'SHCP: Secretaría de Hacienda y Crédito Público',
          options: [
            'SAT: Secretaria de Administración Tributaria',
            'SAIM: Secretaría de Administracion de Impuestos',
            'SENAT: Secretaria Nacional de Administración Tributaria'
          ],
          ru: {
            question: 'Какое министерство занимается сбором налогов?',
            answer: 'СНКП: Министерство финансов и общественного кредита',
            options: [
              'САТ: Федеральная налоговая служба',
              'САИМ: Секретариат по управлению налогами',
              'СЕНАТ: Национальный секретариат налогового управления'
            ]
          }
        },
        {
          id: 'yes4zc',
          type: 'choice',
          question: '¿Qué órgano público otorga las cédulas profesionales?',
          answer:
            'Secretaria de Educación Pública (SEP) mediante la Dirección General de Profesiones',
          options: [
            'La Universidad Nacional Autónoma de México (UNAM)',
            'Ministerio Nacional de Educación (MNE) a través de la direccion general de profesionistas',
            'Es facultad exclusiva del Instituto Politécnico Nacional (IPN)'
          ],
          ru: {
            question:
              'Какой государственный орган выдает профессиональные удостоверения?',
            answer:
              'Министерство образования (SEP) через главное управление профессионалов',
            options: [
              'Национальный автономный университет Мексики (UNAM)',
              'Министерство национального образования (MNE) через главное управление профессионалов',
              'Это исключительное право Национального политехнического института (IPN)'
            ]
          }
        },
        {
          id: 'lycqq7',
          type: 'choice',
          question:
            'El organismo encargado de regular la participación de los partidos políticos en las elecciones es',
          answer: 'INE (Instituto Nacional Electoral)',
          options: [
            'IFE (Instituto Federal Electoral)',
            'CNE (Consejo Nacional Electoral)',
            'CFE (Comisión Federal Electoral)'
          ],
          note: 'A partir del 4 de Abril del 2014, anteriormente era Instituto Federal Electoral (IFE).',
          ru: {
            question:
              'Орган, ответственный за регулирование участия политических партий в выборах',
            answer: 'INE (Национальный институт избирательной системы)',
            options: [
              'IFE (Федеральный институт избирательной системы)',
              'CNE (Национальный избирательный совет)',
              'CFE (Федеральная избирательная комиссия)'
            ],
            note: 'С 4 апреля 2014 года, ранее это был Федеральный институт избирательной системы (IFE).'
          }
        },
        {
          id: 'r1yt4h',
          type: 'choice',
          question: '¿Cuántos consulados tiene México?',
          answer: '67',
          options: ['61', '69', '63'],
          ru: {
            question: 'Сколько консульств в Мексике?',
            answer: '67',
            options: ['61', '69', '63']
          }
        },
        {
          id: 'py325r',
          type: 'choice',
          question: '¿Cuántas embajadas tiene México?',
          answer: '80',
          options: ['50', '60', '70'],
          ru: {
            question: 'Сколько посольств в Мексике?',
            answer: '80',
            options: ['50', '60', '70']
          }
        },
        {
          id: 'r45ra',
          type: 'choice',
          question: '¿Cuándo se fundó el IFE?',
          answer: '11 de Octubre de 1990',
          options: [
            '11 de Marzo de 1990',
            '7 de Mayo de 1986',
            '14 de Noviembre de 1986'
          ],
          ru: {
            question:
              'Когда был основан Федеральный институт избирательной системы?',
            answer: '11 октября 1990 года',
            options: [
              '11 марта 1990 года',
              '7 мая 1986 года',
              '14 ноября 1986 года'
            ]
          }
        },
        {
          id: 'q1es7f9',
          type: 'choice',
          question: '¿En que año se creó el INE?',
          answer: '2014',
          options: ['2000', '2011', '2006'],
          ru: {
            question:
              'В каком году был создан INE (Национальный институт избирательной системы)?',
            answer: '2014',
            options: ['2000', '2011', '2006']
          }
        },
        {
          id: '97cwd',
          type: 'choice',
          question:
            '¿Qué dice la constitución sobre como debe ser la educación?',
          answer: 'Laica, gratuita, obligatoria y de calidad',
          options: [
            'Gratuita y de calidad',
            'Obligatoria y de calidad',
            'Laica y gratuita'
          ],
          ru: {
            question:
              'Что говорит конституция о том, каким должно быть образование?',
            answer: 'Светское, бесплатное, обязательное и качественное',
            options: [
              'Бесплатное и качественное',
              'Обязательное и качественное',
              'Светское и бесплатное'
            ]
          }
        },
        {
          id: 'fxlk4',
          type: 'choice',
          question:
            'Según la constitución, la educación es obligatoria ¿En qué niveles académicos?',
          answer:
            'Educación preescolar, primaria, secundaria y preparatoria o bachillerato',
          options: [
            'Educación primaria, secundaria y preparatoria o bachillerato',
            'Educación preescolar, primaria y secundaria',
            'Educación preescolar y primaria'
          ],
          ru: {
            question:
              'Согласно конституции, образование является обязательным. На каких академических уровнях?',
            answer:
              'Дошкольное, начальное, среднее и подготовительное или бакалавриат',
            options: [
              'Начальное, среднее и подготовительное или бакалавриат',
              'Дошкольное, начальное и среднее',
              'Дошкольное и начальное'
            ]
          }
        },
        {
          id: 'njczl8',
          type: 'text',
          question: '¿Cuánto dura la educación en México?',
          answer:
            'Preescolar: 3 años\n Primaria: 6 años\nSecundaria: 3 años\n Preparatoria o bachillerato: 3 años',
          ru: {
            question: 'Сколько длится образование в Мексике?',
            answer:
              'Дошкольное: 3 года\nНачальное: 6 лет\nСреднее: 3 года\nПодготовительное или бакалавриат: 3 года'
          }
        },
        {
          id: 'klh0xw6',
          type: 'choice',
          question: '¿Cuántos años dura la educación primaria en México?',
          answer: '6 años',
          options: ['5 años', '3 años', '1 año'],
          ru: {
            question: 'Сколько лет длится начальное образование в Мексике?',
            answer: '6 лет',
            options: ['5 лет', '3 года', '1 год']
          }
        },
        {
          id: 'j7k7wj',
          type: 'choice',
          question:
            '¿En qué año se declaró gratuita y obligatoria la educación elemental? / En qué año se fundó la Escuela Nacional Preparatoria y quién lo hizo?',
          answer:
            'El 2 de Diciembre de 1867 durante el periodo de Benito Juárez',
          options: [
            'El 2 de Diciembre de 1850 durante el periodo de Ignacio Comonfort',
            'El 15 de Diciembre de 1871 durante el periodo de Sebastián Lerdo de Tejada',
            'El 09 de Diciembre de 1877 durante el periodo de Porfirio Díaz'
          ],
          ru: {
            question:
              'В каком году было объявлено бесплатное и обязательное начальное образование? / В каком году была основана Национальная подготовительная школа и кем?',
            answer: '2 декабря 1867 года в период правления Бенито Хуареса',
            options: [
              '2 декабря 1850 года в период правления Игнасио Комонфорта',
              '15 декабря 1871 года в период правления Себастьяна Лердо де Техада',
              '9 декабря 1877 года в период правления Порфирио Диаса'
            ]
          }
        },
        {
          id: 'klq3nh',
          type: 'choice',
          question: '¿Cuánto dura el CICLO ESCOLAR primario en México?',
          answer: '1 año',
          options: ['2 años', '3 años', '6 años'],
          note: 'Es diferente a cuanto dura la primaria que son 6 años.',
          ru: {
            question: 'Сколько длится учебный год в начальной школе в Мексике?',
            answer: '1 год',
            note: 'Это отличается от того, сколько длится начальное образование, которое составляет 6 лет.'
          }
        },
        {
          id: 'xj18wn',
          type: 'choice',
          question: '¿Quién es la canciller actual?',
          answer: 'Alicia Bárcena',
          options: [
            'Luis Videgaray',
            'José Antonio Meade',
            'Luis Ernesto Derbez'
          ],
          ru: {
            question: 'Кто является текущим министром иностранных дел?',
            answer: 'Алисия Барсена',
            options: [
              'Луис Видегарай',
              'Хосе Антонио Меаде',
              'Луис Эрнесто Дербес'
            ]
          }
        },
        {
          id: 'heluul',
          type: 'text',
          question:
            'Listado en orden de los más recientes presidentes de México',
          answer:
            'Andrés Manuel López Obrador 2018 - 2024\nEnrique Peña Nieto 2012 - 2018\nFelipe Calderón Hinojosa 2006 - 2012\nVicente Fox Quesada 2000 - 2006\nErnesto Cedillo Ponce de León 1994 - 2000\nCarlos Salinas de Gortari 1988 - 1994\nMiguel de la Madrid Hurtado 1982 - 1988\nJosé López Portillo y Pacheco 1976 - 1982\nLuis Echeverría Álvarez 1970 - 1976\nGustavo Díaz Ordaz 1964 - 1970',
          ru: {
            question: 'Список в порядке последних президентов Мексики',
            answer:
              'Андрес Мануэль Лопес Обрадор 2018 - 2024\nЭнрике Пенья Ньето 2012 - 2018\nФелипе Кальдерон Иноса 2006 - 2012\nВисенте Фокс Кесада 2000 - 2006\nЭрнесто Седильо Понсе де Леон 1994 - 2000\nКарлос Салинас де Гортари 1988 - 1994\nМигель де ла Мадрид Уртадо 1982 - 1988\nХосе Лопес Портильо и Пачеко 1976 - 1982\nЛуис Эчеверрия Альварес 1970 - 1976\nГуставо Диас Ордас 1964 - 1970'
          }
        },
        {
          id: 'fn8mv',
          type: 'text',
          question: 'Algunas fechas conmemorativas en México',
          answer:
            'Día de la Candelaria - 2 de febrero\nDía de la Constitución - 5 de febrero\nDía de la Bandera Nacional - 24 de febrero\nNatalicio de Benito Juárez - 21 de marzo\nAniversario de la Batalla de Puebla - 5 de mayo\nDía de la Independencia - 16 de septiembre\nDía de Muertos - 2 de noviembre\nAniversario de la revolución - 20 de noviembre',
          ru: {
            question: 'Некоторые памятные даты в Мексике',
            answer:
              'День Свечи - 2 февраля\nДень Конституции - 5 февраля\nДень Национального Флага - 24 февраля\nДень Рождения Бенито Хуареса - 21 марта\nГодовщина Битвы при Пуэбле - 5 мая\nДень Независимости - 16 сентября\nДень Мертвых - 2 ноября\nГодовщина революции - 20 ноября'
          }
        }
      ]
    },
    {
      id: 'k91hli',
      title: 'Gastronomía',
      ru: {
        title: 'Гастрономия'
      },
      questions: [
        {
          id: 'rtt498',
          type: 'choice',
          question: 'Bebida típica de México',
          answer: 'Tequila',
          options: ['Vodka', 'Whisky', 'Mojito'],
          ru: {
            question: 'Типичный напиток Мексики',
            answer: 'Текила',
            options: ['Водка', 'Виски', 'Мохито']
          }
        },
        {
          id: '0tk2bj',
          type: 'choice',
          question:
            'Comida típica de México que está hecha a base de harina de maíz y se envuelve en hoja de plátano',
          answer: 'Tamal',
          options: ['Pozole', 'Sopitos', 'Tatemado'],
          ru: {
            question:
              'Типичное мексиканское блюдо из кукурузной муки, завернутое в банановый лист',
            answer: 'Тамаль',
            options: ['Позоле', 'Сопитос', 'Татемадо']
          }
        },
        {
          id: 'kc1i08',
          type: 'choice',
          question: '¿Qué son escamoles?',
          answer: 'Huevos de hormiga',
          options: ['Gusanos', 'Grillos', 'Avispas'],
          note: 'Son huevos de la hormiga güijera, apreciadas en México desde tiempos prehispánicos. Las hormigas escamoleras son muy agresivas, lo cual, dificulta su explotación y hace de los escamoles un platillo caro.',
          ru: {
            question: 'Что такое эскамолес?',
            answer: 'Яйца муравьев',
            options: ['Черви', 'Сверчки', 'Осы'],
            note: 'Это яйца муравьев güijera, ценимые в Мексике с доиспанских времен. Муравьи эскамолеры очень агрессивны, что затрудняет их добычу и делает эскамолес дорогим блюдом.'
          }
        },
        {
          id: '2i8j5l',
          type: 'choice',
          question: 'Productos originarios de México',
          answer: 'Chocolate, aguacate, tomate, pavo',
          options: [
            'Frijol, tomate, nopal, cerezas',
            'Jicama, vainilla, cafe, jalapeños',
            'Maiz, aguacate, quinoa, trigo'
          ],
          ru: {
            question: 'Продукты, происходящие из Мексики',
            answer: 'Шоколад, авокадо, помидор, индейка',
            options: [
              'Фасоль, помидор, нопал, вишня',
              'Джикама, ваниль, кофе, халапеньо',
              'Кукуруза, авокадо, киноа, пшеница'
            ]
          }
        },
        {
          id: 'sm08sx',
          type: 'choice',
          question: 'Dulce típico de Xochimilco hecho de amaranto',
          answer: 'Alegría',
          options: ['Chocolate de mesa', 'Tamarindo enchilado', 'Mazapán'],
          ru: {
            question: 'Типичный сладость из Сочимилько, сделанный из амаранта',
            answer: 'Алегрия',
            options: ['Столовый шоколад', 'Тамаринд с чили', 'Мазапан']
          }
        },
        {
          id: 'jf4ubs',
          type: 'choice',
          question:
            '¿Cuál es el nombre del caldo mexicano elaborado con granos de maíz?',
          answer: 'Pozole',
          options: ['Tatemado', 'Birria', 'Sopa azteca'],
          ru: {
            question:
              'Как называется мексиканский суп, приготовленный из кукурузных зерен?',
            answer: 'Позоле',
            options: ['Татемадо', 'Биррия', 'Ацтекский суп']
          }
        },
        {
          id: 'tqrhg',
          type: 'choice',
          question: '¿De dónde es originaria la ensalada de noche buena?',
          answer: 'Michoacán',
          options: ['Jalisco', 'Chihuahua', 'Yucatán'],
          ru: {
            question: 'Откуда родом рождественский салат?',
            answer: 'Мичоакан',
            options: ['Халиско', 'Чиуауа', 'Юкатан']
          }
        },
        {
          id: '80ah7',
          type: 'choice',
          question: 'Bebidas sacadas del agave',
          answer: 'Tequila y mezcal',
          options: [
            'Tequila y horchata',
            'Pulque y tonayan',
            'Tejuino y tequila'
          ],
          ru: {
            question: 'Напитки из агавы',
            answer: 'Текила и мескаль',
            options: ['Текила и орчата', 'Пульке и тонайан', 'Техуино и текила']
          }
        },
        {
          id: 'ot6jzr',
          type: 'choice',
          question: 'Platillos mexicanos a base de tortilla',
          answer: 'Sopes, tlacoyos, memelas',
          options: [
            'Sopes, tlacoyos, pozole',
            'Mole, tlacoyos, memelas',
            'Sopes, barbacoa, memelas'
          ],
          note: 'También: tacos, quesadillas, tostadas, flautas, panuchos, enchiladas, enfrijoladas.',
          ru: {
            question: 'Мексиканские блюда на основе тортильи',
            answer: 'Сопес, тлакойос, мемелас',
            options: [
              'Сопес, тлакойос, позоле',
              'Моле, тлакойос, мемелас',
              'Сопес, барбакоа, мемелас'
            ],
            note: 'Также: такос, кесадильи, тостадас, флаутас, панучос, энчиладас, энфрихоладас.'
          }
        },
        {
          id: '47n3me',
          type: 'choice',
          question: '¿Qué son memelas?',
          answer: 'Tortillas de maíz ovaladas (Puebla)',
          options: [
            'Caldo de maíz generalmente con carne de cerdo',
            'Enchiladas potosinas',
            'Postre michoacano a base de leche'
          ],
          ru: {
            question: 'Что такое мемелас?',
            answer: 'Овальные кукурузные тортильи (Пуэбла)',
            options: [
              'Кукурузный суп обычно со свининой',
              'Потосинские энчилады',
              'Мичоаканский десерт на основе молока'
            ]
          }
        },
        {
          id: '42i2f',
          type: 'choice',
          question:
            '¿De dónde son originarios la sopa de lima, los panuchos y la cochinita pibil?',
          answer: 'Yucatán',
          options: ['Colima', 'Tamaulipas', 'Baja California Sur'],
          ru: {
            question: 'Откуда родом суп из лайма, панучос и кочинита пибиль?',
            answer: 'Юкатан',
            options: ['Колима', 'Тамаулипас', 'Баха Калифорния Сур']
          }
        },
        {
          id: 'pb4qvt',
          type: 'choice',
          question: 'Plato típico de Monterrey',
          answer: 'El Cabrito',
          options: ['Birria', 'Barbacoa', 'Discada'],
          ru: {
            question: 'Типичное блюдо Монтеррея',
            answer: 'Эль Кабрито',
            options: ['Биррия', 'Барбакоа', 'Дискада']
          }
        },
        {
          id: 'g3wj',
          type: 'choice',
          question: 'El cabrito y la machaca son platos originarios de',
          answer: 'Nuevo León',
          options: ['Sinaloa', 'Guerrero', 'San Luis Potosí'],
          ru: {
            question: 'Эль Кабрито и Мачака — блюда, происходящие из',
            answer: 'Нуэво-Леон',
            options: ['Синалоа', 'Герреро', 'Сан-Луис-Потоси']
          }
        },
        {
          id: '3ynb1i',
          type: 'choice',
          question:
            'Lugar dónde son tradicionales los tamales de queso para el día de muertos',
          answer: 'San Luis Potosí',
          options: ['Tabasco', 'Zacatecas', 'Michoacán'],
          ru: {
            question: 'Место, где традиционны сырные тамалес на День мертвых',
            answer: 'Сан-Луис-Потоси',
            options: ['Табаско', 'Сакатекас', 'Мичоакан']
          }
        },
        {
          id: '49u8dh',
          type: 'choice',
          question: '¿De dónde es originario el Chile en Nogada?',
          answer: 'Puebla',
          options: ['Chiapas', 'Sonora', 'Oaxaca'],
          ru: {
            question: 'Откуда родом Чили эн Ногада?',
            answer: 'Пуэбла',
            options: ['Чьяпас', 'Сонора', 'Оахака']
          }
        },
        {
          id: 'cq2kqh',
          type: 'choice',
          question: 'Nombre de 3 platos típicos poblanos',
          answer: 'Mole poblano, chiles en nogada, chalupas',
          options: [
            'Mole negro de puebla, Cabrito, memelas',
            'Tamales, enchiladas poblanas, tacos dorados',
            'Entamalados, enchiladas poblanas, sopes'
          ],
          ru: {
            question: 'Назовите 3 типичных блюда из Пуэблы',
            answer: 'Моле поблано, чили эн ногада, чалупас',
            options: [
              'Черный моле из Пуэблы, Кабрито, мемелас',
              'Тамалес, побланские энчилады, хрустящие тако',
              'Энтамаладас, побланские энчилады, сопес'
            ]
          }
        },
        {
          id: '3fx8l',
          type: 'choice',
          question: 'Plato típico de Veracruz',
          answer: 'Zacahuil',
          options: ['Cabrito', 'Mole veracruzano', 'Tamales Jarochos'],
          ru: {
            question: 'Типичное блюдо Веракруса',
            answer: 'Закахуиль',
            options: ['Кабрито', 'Веракрусанский моле', 'Харочские тамалес']
          }
        },
        {
          id: '2rb6fl',
          type: 'choice',
          question: '¿Qué insectos son comestibles?',
          answer:
            'Chapulines (saltamontes), escamoles (huevos de hormiga), jumiles, gusanos de maguey',
          options: [
            'Mosquito tigre, jumiles',
            'Avispas amarillas, gusanos de maguey',
            'Escamoles, arañas'
          ],
          ru: {
            question: 'Какие насекомые съедобны?',
            answer:
              'Чапулины (кузнечики), эскамолес (яйца муравьев), жумилес, черви магея',
            options: [
              'Тигровый комар, жумилес',
              'Желтые осы, черви магея',
              'Эскамолес, пауки'
            ]
          }
        },
        {
          id: '4fk6wq',
          type: 'choice',
          question: 'Bebida prehispánica conocida como curado',
          answer: 'Pulque',
          options: ['Tequila', 'Tejuino', 'Jocoque'],
          ru: {
            question: 'Доиспанский напиток, известный как курадо',
            answer: 'Пульке',
            options: ['Текила', 'Техуино', 'Жококе']
          }
        },
        {
          id: 'v6fvle',
          type: 'choice',
          question: 'Bebida sacada del maguey',
          answer: 'Pulque',
          options: ['Tejuino', 'Jocoque', 'Tehuical'],
          ru: {
            question: 'Напиток из магея',
            answer: 'Пульке',
            options: ['Техуино', 'Жококе', 'Техуикаль']
          }
        },
        {
          id: 'cfzjkc',
          type: 'choice',
          question: '¿Cuál es el ingrediente principal del mole?',
          answer: 'Chocolate amargo',
          options: ['Ajonjolí', 'Pimienta', 'Leche'],
          ru: {
            question: 'Какой основной ингредиент у моле?',
            answer: 'Горький шоколад',
            options: ['Кунжут', 'Перец', 'Молоко']
          }
        },
        {
          id: 'tex1wl',
          type: 'choice',
          question: '¿De dónde es el platillo de los 7 moles?',
          answer: 'Oaxaca',
          options: ['Puebla', 'Sonora', 'Chiapas'],
          note: 'Se considera que el mole oaxaqueño es la combinación de 7 moles de la región: mole negro, mole amarillo, mole colorado, mole verde, mole rojo, mole chichillo y mole estofado.',
          ru: {
            question: 'Откуда родом блюдо из 7 моле?',
            answer: 'Оахака',
            options: ['Пуэбла', 'Сонора', 'Чьяпас'],
            note: 'Считается, что оахаканский моле представляет собой комбинацию из 7 моле региона: черный моле, желтый моле, красный моле, зеленый моле, красный моле, чичилло моле и тушеный моле.'
          }
        },
        {
          id: '0nlefq',
          type: 'text',
          question: '¿Cuáles son los ingredientes del mole?',
          answer:
            'Chocolate amargo, chile ancho, chile mulato, chile pasilla, chipotle, jitomate, almendra, plátano, nueces, pasas, ajonjolí, clavo, canela, perejil, pimienta, cebolla, ajo',
          ru: {
            question: 'Какие ингредиенты входят в моле?',
            answer:
              'Горький шоколад, анчо чили, мулато чили, пасилья чили, чипотле, помидор, миндаль, банан, орехи, изюм, кунжут, гвоздика, корица, петрушка, перец, лук, чеснок'
          }
        },
        {
          id: '1ulju',
          type: 'choice',
          question: '¿Qué es la guanábana?',
          answer: 'Fruta de cáscara verde y pulpa blanca',
          options: [
            'Bebida refrescante del estado de Veracruz',
            'Platillo típico de Tlaxcala preparado con maíz y carne de pollo',
            'Dulce tradicional duranguense a base de leche de cabra'
          ],
          ru: {
            question: 'Что такое гуанабана?',
            answer: 'Фрукт с зеленой кожурой и белой мякотью',
            options: [
              'Освежающий напиток из штата Веракрус',
              'Типичное блюдо из Тласкалы, приготовленное из кукурузы и куриного мяса',
              'Традиционный дессерт из Дуранго на основе козьего молока'
            ]
          }
        },
        {
          id: 'duot1',
          type: 'choice',
          question: 'Postre típico a base de harina de trigo',
          answer: 'Buñuelos',
          options: ['Chongos zamoranos', 'Alegría', 'Ate'],
          ru: {
            question: 'Типичный десерт из пшеничной муки',
            answer: 'Буньюэлос',
            options: ['Чонгос заморанос', 'Алегрия', 'Ате']
          }
        },
        {
          id: 'io7hf5',
          type: 'choice',
          question: 'Postre típico de Guadalajara',
          answer: 'Jericalla (Es similar al flan o crème brûlée)',
          options: [
            'Gelatina Jalicience',
            'Chongos de Jalisco',
            'Palanquetas de cacahuate'
          ],
          note: 'Esta hecho a base de leche, huevos, vainilla, canela y azúcar.',
          ru: {
            question: 'Типичный десерт из Гвадалахары',
            answer: 'Херикайя (Похож на флан или крем-брюле)',
            options: [
              'Желатин из Халиско',
              'Чонгос из Халиско',
              'Арахисовые паланкетас'
            ],
            note: 'Сделан из молока, яиц, ванили, корицы и сахара.'
          }
        },
        {
          id: 'kigymc',
          type: 'choice',
          question: 'Dulce típico de Guanajuato',
          answer: 'Charamuscas',
          options: ['Obleas', 'Cocadas', 'Dulces de alfeñique'],
          ru: {
            question: 'Типичная сладость из Гуанахуато',
            answer: 'Чарамускас',
            options: ['Облеас', 'Кокадас', 'Альфенике']
          }
        },
        {
          id: 'lr3tzh',
          type: 'choice',
          question: 'Dulce típico de Pachuca, Hidalgo',
          answer: 'Palanquetas (barras/turrón de cacahuate)',
          options: [
            'Jamoncillo (semillas de calabaza y piñón)',
            'Muéganos (trozos de harina pegados con dulce)',
            'Gallo (pepita de calavaza en forma de gallito)'
          ],
          ru: {
            question: 'Типичный сладость из Пачука, Идальго',
            answer: 'Паланкетас (батончики/нуга из арахиса)',
            options: [
              'Хамонсильо (семена тыквы и пинии)',
              'Муэганос (кусочки муки, склеенные сладостью)',
              'Гайо (тыквенные семечки в форме петушка)'
            ]
          }
        },
        {
          id: 'twmbsd',
          type: 'choice',
          question: '¿Qué es la cajeta?',
          answer: 'Dulce de leche quemada de cabra',
          options: [
            'Dulce de tortilla con azúcar',
            'Dulce de amaranto con miel',
            'Dulce de leche con coco'
          ],
          ru: {
            question: 'Что такое кахета?',
            answer: 'Карамелизованное козье молоко',
            options: [
              'Сладость из тортильи с сахаром',
              'Сладость из амаранта с медом',
              'Сладость из молока с кокосом'
            ]
          }
        },
        {
          id: 'eualk',
          type: 'choice',
          question: '¿De dónde es el queso menonita?',
          answer: 'Chihuahua',
          options: ['Coahuila', 'Sonora', 'Colima'],
          ru: {
            question: 'Откуда происходит менонитский сыр?',
            answer: 'Чиуауа',
            options: ['Коауила', 'Сонора', 'Колима']
          }
        },
        {
          id: 'maf0ej',
          type: 'choice',
          question: '¿De dónde es típico el queso de tuna?',
          answer: 'San Luis Potosí',
          options: ['Hidalgo', 'Quintana Roo', 'Querétaro'],
          ru: {
            question: 'Где типичен сыр из тунца?',
            answer: 'Сан-Луис-Потоси',
            options: ['Идальго', 'Кинтана-Роо', 'Керетаро']
          }
        }
      ]
    },
    {
      id: 'hmc4a',
      title: 'Geografía y población',
      ru: {
        title: 'География и население'
      },
      questions: [
        {
          id: 'htrtajl',
          type: 'choice',
          question: '¿Cuál es la extensión territorial de México?',
          answer: '1.964 millones de Km²',
          options: [
            '1.230 millones de Km²',
            '1.858 millones de Km²',
            '1.754 millones de Km²'
          ],
          ru: {
            question: 'Какова территориальная площадь Мексики?',
            answer: '1,964 миллиона км²',
            options: [
              '1,230 миллиона км²',
              '1,858 миллиона км²',
              '1,754 миллиона км²'
            ]
          }
        },
        {
          id: '5ihtam',
          type: 'choice',
          question:
            'Superficie total de México (Superficie continental, insular y mar territorial)',
          answer: '5.1 MM Km²',
          options: ['91.3 MM Km²', '1.3 MM Km²', '3.91 MM Km²'],
          ru: {
            question:
              'Общая площадь Мексики (континентальная, островная и территориальные воды)',
            answer: '5,1 млн км²',
            options: ['91,3 млн км²', '1,3 млн км²', '3,91 млн км²']
          }
        },
        {
          id: '33r4p',
          type: 'choice',
          question: '¿Con qué países tiene frontera México?',
          answer: 'Estados Unidos, Guatemala y Belice',
          options: [
            'Estados Unidos y Guatemala',
            'Estados Unidos y Belice',
            'Estados Unidos'
          ],
          ru: {
            question: 'С какими странами граничит Мексика?',
            answer: 'США, Гватемала и Белиз',
            options: ['США и Гватемала', 'США и Белиз', 'США']
          }
        },
        {
          id: 'sa5ehd',
          type: 'choice',
          question: 'Geográficamente dónde está ubicado México',
          answer: 'En el sur de América del Norte',
          options: [
            'América del Sur',
            'América Central',
            'En el norte de América Central'
          ],
          ru: {
            question: 'Географически где находится Мексика?',
            answer: 'На юге Северной Америки',
            options: [
              'Южная Америка',
              'Центральная Америка',
              'На севере Центральной Америки'
            ]
          }
        },
        {
          id: 'yioh7',
          type: 'choice',
          question: '¿Cuántos estados o entidades federativas tiene México?',
          answer: '32',
          options: ['38', '25', '29'],
          ru: {
            question: 'Сколько штатов или федеративных единиц в Мексике?',
            answer: '32',
            options: ['38', '25', '29']
          }
        },
        {
          id: 'trzdna',
          type: 'choice',
          question: '¿Cuántas penínsulas tiene México?',
          answer: '2, Penínsulas de Baja California y Yucatán',
          options: [
            '2, Penínsulas de Chiapas y Yucatán',
            '2, Penínsulas de Baja California y Oaxaca',
            '2, Penínsulas de Sonora y Yucatán'
          ],
          ru: {
            question: 'Сколько полуостровов в Мексике?',
            answer: '2, полуострова Нижняя Калифорния и Юкатан',
            options: [
              '2, полуострова Чьяпас и Юкатан',
              '2, полуострова Нижняя Калифорния и Оахака',
              '2, полуострова Сонора и Юкатан'
            ]
          }
        },
        {
          id: '6rkpqm',
          type: 'choice',
          question: '¿Cuántas sierras madres tiene México?',
          answer: '2, Oriental y Occidental',
          options: [
            '2, Oriental y Oaxaca',
            '2, Chiapa y Occidental',
            '2, Sur y Oriental'
          ],
          ru: {
            question: 'Сколько Сьерра-Мадре в Мексике?',
            answer: '2, Восточная и Западная',
            options: [
              '2, Восточная и Оахака',
              '2, Чьяпас и Западная',
              '2, Южная и Восточная'
            ]
          }
        },
        {
          id: '8tumjl',
          type: 'text',
          question: 'Sierras de México',
          answer:
            'Sierra Madre Oriental\nSierra Madre Occidental\nSierra del Sur\nSierra de Oaxaca\nSierra de Chiapas',
          ru: {
            question: 'Горные хребты Мексики',
            answer:
              'Сьерра-Мадре Восточная\nСьерра-Мадре Западная\nЮжная Сьерра\nОахакская Сьерра\nЧьяпасская Сьерра'
          }
        },
        {
          id: 'ktwowc3',
          type: 'choice',
          question: 'Población de México (Censo INEGI 2020)',
          answer: '126,014,024',
          options: ['98,014,094', '223,014,054 ', '180,014,087'],
          ru: {
            question: 'Население Мексики (перепись INEGI 2020)',
            answer: '126,014,024',
            options: ['98,014,094', '223,014,054', '180,014,087']
          }
        },
        {
          id: '4075p',
          type: 'choice',
          question: 'Ciudad más poblada de México',
          answer: 'Ciudad de México',
          options: ['Zacatecas', 'Colima', 'Guanajuato'],
          ru: {
            question: 'Самый населенный город Мексики',
            answer: 'Мехико',
            options: ['Сакатекас', 'Колима', 'Гуанахуато']
          }
        },
        {
          id: '8nfa36',
          type: 'text',
          question: 'Las tres ciudades más grandes y pobladas del país son',
          answer: 'CDMX, Guadalajara y Monterrey',
          ru: {
            question: 'Три самых крупных и населенных города страны',
            answer: 'Мехико, Гвадалахара и Монтеррей'
          }
        },
        {
          id: '0f6q6',
          type: 'choice',
          question: 'Nombres de islas de México',
          answer: 'Islas María, Isla Mujeres, Cozumel, Holbox, Isla Guadalupe',
          options: [
            'Isla de Tórtola, San Vicente y las Granadinas',
            'Isla Eleuthera, Isla de Santa Lucía, Long Island',
            'Isla Providenciales, Islas Caicos, Isla Saona'
          ],
          ru: {
            question: 'Названия островов Мексики',
            answer:
              'Острова Мария, Остров Женщин, Косумель, Хольбокс, Остров Гуадалупе',
            options: [
              'Остров Тортола, Сан-Висенте и Гренадины',
              'Остров Элеутера, Остров Сент-Люсия, Лонг-Айленд',
              'Остров Провиденсиалес, Острова Кайкос, Остров Саона'
            ]
          }
        },
        {
          id: 'hjb8f8',
          type: 'choice',
          question: '¿Dónde se encuentra el Parque Nacional Los Azufres?',
          answer: 'Michoacán',
          options: ['Guerrero', 'Oaxaca', 'Coahuila'],
          ru: {
            question: 'Где находится Национальный парк Лос-Асуфрес?',
            answer: 'Мичоакан',
            options: ['Герреро', 'Оахака', 'Коауила']
          }
        },
        {
          id: 'we69w2',
          type: 'choice',
          question: '¿Dónde se encuentran las Grutas de Cacahuamilpa?',
          answer: 'Guerrero',
          options: ['Oaxaca', 'Yucatán', 'Campeche'],
          ru: {
            question: 'Где находятся Пещеры Какуамильпа?',
            answer: 'Герреро',
            options: ['Оахака', 'Юкатан', 'Кампече']
          }
        },
        {
          id: '8n3o4b',
          type: 'choice',
          question: 'Reserva natural en el estado de Sonora',
          answer: 'Biosfera del Pinacate y Desierto del Altar',
          options: [
            'Biosfera del Pinacate y Desierto de los Leones',
            'Biosfera de Sian Ka´an y Desierto del Altar',
            'Biosfera de Mariposa Monarca y Desierto del Altar'
          ],
          ru: {
            question: 'Природный заповедник в штате Сонора',
            answer: 'Биосфера Пинакате и Пустыня Альтар',
            options: [
              'Биосфера Пинакате и Пустыня Леонов',
              'Биосфера Сиан Каан и Пустыня Альтар',
              'Биосфера бабочки монарха и Пустыня Альтар'
            ]
          }
        },
        {
          id: 'zop9e',
          type: 'choice',
          question: 'Reserva natural del Golfo de Baja California',
          answer: 'Parque Nacional Cabo Pulmo',
          options: [
            'Biosfera del Pinacate',
            'Biosfera de Mariposa Monarca',
            'Arrecifes de Cozumel'
          ],
          ru: {
            question: 'Природный заповедник в заливе Нижняя Калифорния',
            answer: 'Национальный парк Кабо Пульмо',
            options: [
              'Биосфера Пинакате',
              'Биосфера бабочки монарха',
              'Рифы Косумель'
            ]
          }
        },
        {
          id: 'x69zr4',
          type: 'choice',
          question:
            '¿Cómo se llama la reserva natural protegida en el Golfo de México? o nombre de reserva ecológica que da al Golfo de México',
          answer: 'El Arrecife Veracruzano',
          options: [
            'Arrecife de Puerto Morelos',
            'Arrecifes de Cozumel',
            'Arrecifes de Sian Ka´an'
          ],
          ru: {
            question:
              'Как называется охраняемый природный заповедник в Мексиканском заливе? или название экологического заповедника, выходящего на Мексиканский залив',
            answer: 'Веракрузский риф',
            options: ['Риф Пуэрто-Морелос', 'Рифы Косумель', 'Рифы Сиан Каан']
          }
        },
        {
          id: '2ff6ga',
          type: 'choice',
          question:
            'Lugar de México donde se ven ballenas, lobos marinos o lugar donde se observan en libertad ballenas jorobadas',
          answer: 'Mar de Cortés',
          options: ['Mar Caribe', 'Golfo de México', 'Oceano Pacífico Sur'],
          ru: {
            question:
              'Место в Мексике, где можно увидеть китов, морских львов или место, где можно наблюдать свободных горбатых китов',
            answer: 'Море Кортеса',
            options: [
              'Карибское море',
              'Мексиканский залив',
              'Южная часть Тихого океана'
            ]
          }
        },
        {
          id: 'so0mz',
          type: 'choice',
          question: '¿Dónde está el Mar de Cortés o Mar Bermejo?',
          answer: 'Baja California',
          options: ['Veracruz', 'Guerrero', 'Quintana Roo'],
          ru: {
            question: 'Где находится Море Кортеса или Красное море?',
            answer: 'Нижняя Калифорния',
            options: ['Веракрус', 'Герреро', 'Кинтана-Роо']
          }
        },
        {
          id: '4zklm',
          type: 'choice',
          question: '¿Qué estados rodean el Mar de Cortés?',
          answer: 'Baja California Norte, Baja California Sur, Sonora, Sinaloa',
          options: [
            'Baja California Norte, Durango, Sonora, Sinaloa',
            'Baja California Norte, Baja California Sur, Tamaulipas, Sinaloa',
            'Baja California Norte, Baja California Sur, Sonora, Zacatecas'
          ],
          ru: {
            question: 'Какие штаты окружают Море Кортеса?',
            answer:
              'Нижняя Калифорния Северная, Нижняя Калифорния Южная, Сонора, Синалоа',
            options: [
              'Нижняя Калифорния Северная, Дуранго, Сонора, Синалоа',
              'Нижняя Калифорния Северная, Нижняя Калифорния Южная, Тамаулипас, Синалоа',
              'Нижняя Калифорния Северная, Нижняя Калифорния Южная, Сонора, Сакатекас'
            ]
          }
        },
        {
          id: 't00e6',
          type: 'choice',
          question:
            'Ciudad de la república mexicana con abundante arquitectura colonial',
          answer: 'Puebla',
          options: ['Jalisco', 'Campeche', 'Colima'],
          ru: {
            question:
              'Город в Мексиканской республике с обилием колониальной архитектуры',
            answer: 'Пуэбла',
            options: ['Халиско', 'Кампече', 'Колима']
          }
        },
        {
          id: 'j0jxs',
          type: 'text',
          question: 'Ríos más largos de México',
          answer:
            'Río Bravo\nRío Usumacinta\nRio Tijuana\nRío Lerma\nRío Colorado\nRío Papaloapan\nRio Conchos',
          ru: {
            question: 'Самые длинные реки Мексики',
            answer:
              'Рио-Браво\nРио-Усумасинта\nРио-Тихуана\nРио-Лерма\nРио-Колорадо\nРио-Папалоапан\nРио-Кончос'
          }
        },
        {
          id: 'd8ocoh',
          type: 'choice',
          question: '¿Cuál es el río más largo de México?',
          answer: 'Río Bravo',
          options: ['Río Papaloapan', 'Río Coatzacoalcos', 'Río Santiago'],
          ru: {
            question: 'Какая самая длинная река в Мексике?',
            answer: 'Рио-Браво',
            options: ['Рио-Папалоапан', 'Рио-Коацакоалькос', 'Рио-Сантьяго']
          }
        },
        {
          id: 'pnxvc4',
          type: 'choice',
          question: '¿Cuáles son los estados que atraviesa el Río Bravo?',
          answer: 'Chihuahua, Coahuila, Tamaulipas, Nuevo León',
          options: [
            'Chihuahua, Durango, Tamaulipas, Nuevo León',
            'Baja California, Coahuila, Tamaulipas, Nuevo León',
            'Sinaloa, Coahuila, Tamaulipas, Nuevo León'
          ],
          ru: {
            question: 'Какие штаты пересекает река Рио-Браво?',
            answer: 'Чиуауа, Коауила, Тамаулипас, Нуэво-Леон',
            options: [
              'Чиуауа, Дуранго, Тамаулипас, Нуэво-Леон',
              'Нижняя Калифорния, Коауила, Тамаулипас, Нуэво-Леон',
              'Синалоа, Коауила, Тамаулипас, Нуэво-Леон'
            ]
          }
        },
        {
          id: 'j5ya3',
          type: 'text',
          question: '¿Cuáles son los estados del norte de México?',
          answer:
            'Baja California - Mexicali\nBaja California Sur - La Paz\nCoahuila - Saltillo\nChihuahua - Chihuahua\nDurango - Durango\nNuevo León - Monterrey\nSonora - Hermosillo\nTamaulipas - Ciudad Victoria\nSinaloa - Culiacán',
          ru: {
            question: 'Какие штаты находятся на севере Мексики?',
            answer:
              'Нижняя Калифорния - Мехикали\nНижняя Калифорния Южная - Ла-Пас\nКоауила - Сальтильо\nЧиуауа - Чиуауа\nДуранго - Дуранго\nНуэво-Леон - Монтеррей\nСонора - Эрмосильо\nТамаулипас - Сьюдад-Виктория\nСиналоа - Кульякан'
          }
        },
        {
          id: 'c0bgv',
          type: 'choice',
          question:
            'El estado de la república de mayor extensión territorial es',
          answer: 'Chihuahua',
          options: ['Coahuila', 'Durango', 'Veracruz'],
          ru: {
            question: 'Штат республики с самой большой территорией',
            answer: 'Чиуауа',
            options: ['Коауила', 'Дуранго', 'Веракрус']
          }
        },
        {
          id: 'geg1rn',
          type: 'choice',
          question: 'Capital de Sinaloa',
          answer: 'Culiacán',
          options: ['Los Mochis', 'Mazatlán', 'El Rosario'],
          ru: {
            question: 'Столица Синалоа',
            answer: 'Кульякан',
            options: ['Лос Мочис', 'Масатлан', 'Эль Росарио']
          }
        },
        {
          id: 'ypvyof',
          type: 'choice',
          question:
            'Acapulco fue durante los siglos XVII y XVIII un importante puerto porque controlaba la navegación en el',
          answer: 'Océano Pacífico',
          options: ['Mar Caribe', 'Golfo de México', 'Oceano Atlántico'],
          ru: {
            question:
              'Акапулько в XVII и XVIII веках был важным портом, так как контролировал судоходство в',
            answer: 'Тихом океане',
            options: [
              'Карибское море',
              'Мексиканский залив',
              'Атлантический океан'
            ]
          }
        },
        {
          id: 'fv2t4',
          type: 'choice',
          question: 'El puerto de Acapulco está en',
          answer: 'Guerrero',
          options: ['Colima', 'Nayarit', 'Oaxaca'],
          ru: {
            question: 'Порт Акапулько находится в',
            answer: 'Герреро',
            options: ['Колима', 'Наярит', 'Оахака']
          }
        },
        {
          id: '0ylwbj',
          type: 'choice',
          question: 'Principales puertos turísticos',
          answer: 'Cozumel, Acapulco, Mazatlán',
          options: [
            'Cozumel, Acapulco, Manzanillo',
            'Veracruz, Acapulco, Mazatlán',
            'Cozumel, Lázaro Cárdenas, Mazatlán'
          ],
          ru: {
            question: 'Основные туристические порты',
            answer: 'Косумель, Акапулько, Масатлан',
            options: [
              'Косумель, Акапулько, Мансанильо',
              'Веракрус, Акапулько, Масатлан',
              'Косумель, Ласаро Карденас, Масатлан'
            ]
          }
        },
        {
          id: '6gnz5r',
          type: 'choice',
          question: 'Tres destinos de playa en México son',
          answer: 'Acapulco, Huatulco, Cancún',
          options: [
            'Acapulco, Tequila, Cancún',
            'Acapulco, Guanajuato, Cancún',
            'Acapulco, Puebla, Cancún'
          ],
          ru: {
            question: 'Три пляжных направления в Мексике',
            answer: 'Акапулько, Уатулько, Канкун',
            options: [
              'Акапулько, Текила, Канкун',
              'Акапулько, Гуанахуато, Канкун',
              'Акапулько, Пуэбла, Канкун'
            ]
          }
        },
        {
          id: 'mce8ol',
          type: 'choice',
          question: 'Sistema de acueducto de CDMX y EDO de MEX',
          answer: 'Sistema Cutzamala',
          options: [
            'Acueducto del Cedazo',
            'Sistema Coquimatlán',
            'Sistema Cuajimalpa'
          ],
          ru: {
            question: 'Система водопровода Мехико и штата Мехико',
            answer: 'Система Кутзамала',
            options: [
              'Акведук Седасо',
              'Система Кокиматлан',
              'Система Куахимальпа'
            ]
          }
        },
        {
          id: '2ls25',
          type: 'choice',
          question: '¿Qué es la Peña de Bernal, dónde se encuentra?',
          answer: 'Es el tercer monolito más grande del mundo, Querétaro',
          options: [
            'El monolito más grande del mundo, Zacatecas',
            'Es el segundo monolito más grande del mundo, Oaxaca',
            'Es la caída de agua más alta de México, Jalisco'
          ],
          ru: {
            question: 'Что такое Пенья-де-Берналь, где она находится?',
            answer: 'Третий по величине монолит в мире, Керетаро',
            options: [
              'Самый большой монолит в мире, Сакатекас',
              'Второй по величине монолит в мире, Оахака',
              'Самый высокий водопад в Мексике, Халиско'
            ]
          }
        },
        {
          id: 'u6i1ga',
          type: 'choice',
          question:
            '¿En qué estado de la república se encuentra el “Cañón del Sumidero”?',
          answer: 'Chiapas',
          options: ['Oaxaca', 'Guerrero', 'Tabasco'],
          ru: {
            question: 'В каком штате республики находится "Каньон Сумидеро"?',
            answer: 'Чьяпас',
            options: ['Оахака', 'Герреро', 'Табаско']
          }
        },
        {
          id: 'kkru5s',
          type: 'choice',
          question:
            '¿En qué estado de la república se encuentran las Ruinas de Palenque?',
          answer: 'Chiapas',
          options: ['Guerrero', 'Tabasco', 'Veracruz'],
          note: 'Pertenece a los Mayas.',
          ru: {
            question: 'В каком штате республики находятся Руины Паленке?',
            answer: 'Чьяпас',
            options: ['Герреро', 'Табаско', 'Веракрус'],
            note: 'Принадлежит Майя.'
          }
        },
        {
          id: 'sf3xxo',
          type: 'choice',
          question: 'Las ruinas de Monte Albán se localizan en',
          answer: 'Oaxaca',
          options: ['Guerrero', 'Tabasco', 'Veracruz'],
          ru: {
            question: 'Руины Монте-Альбан находятся в',
            answer: 'Оахака',
            options: ['Герреро', 'Табаско', 'Веракрус']
          }
        },
        {
          id: 'xvpuv8',
          type: 'choice',
          question:
            '¿En qué estado de la república se encuentra la ciudad de Guadalajara?',
          answer: 'Jalisco',
          options: ['Zacatecas', 'Morelia', 'Puebla'],
          ru: {
            question: 'В каком штате республики находится город Гвадалахара?',
            answer: 'Халиско',
            options: ['Сакатекас', 'Морелия', 'Пуэбла']
          }
        },
        {
          id: '8a3r23j',
          type: 'choice',
          question: 'En qué estado se encuentra La Venta',
          answer: 'Tabasco',
          options: ['Campeche', 'Oaxaca', 'Veracruz'],
          ru: {
            question: 'В каком штате находится Ла Вента',
            answer: 'Табаско',
            options: ['Кампече', 'Оахака', 'Веракрус']
          }
        },
        {
          id: 'md1se',
          type: 'choice',
          question: 'En qué estado se encuentra Calakmul',
          answer: 'Campeche',
          options: ['Oaxaca', 'Veracruz', 'Tabasco'],
          ru: {
            question: 'В каком штате находится Калакмуль',
            answer: 'Кампече',
            options: ['Оахака', 'Веракрус', 'Табаско']
          }
        },
        {
          id: 'fnqoyk',
          type: 'choice',
          question: 'Capital del estado de Nuevo León',
          answer: 'Monterrey',
          options: ['Juárez', 'Santa Catarina', 'Santiago'],
          ru: {
            question: 'Столица штата Нуэво-Леон',
            answer: 'Монтеррей',
            options: ['Хуарес', 'Санта-Каталина', 'Сантьяго']
          }
        },
        {
          id: 'aa4jlg',
          type: 'choice',
          question: 'Icono turístico de Monterrey',
          answer: 'El Cerro de la Silla',
          options: ['El Cerro', 'Parque La Huasteca', 'Grutas de García'],
          ru: {
            question: 'Туристический символ Монтеррея',
            answer: 'Серро-де-ла-Силья',
            options: ['Эль Серро', 'Парк Ла Уастека', 'Пещеры Гарсия']
          }
        },
        {
          id: '26juir',
          type: 'choice',
          question: '¿A qué se le conoce como Don Goyo y la Mujer Dormida?',
          answer: 'A los volcanes Popocatépetl y al Iztaccíhuatl',
          options: [
            'A los volcanes Popocatépetl y al Nevado de Toluca',
            'A los volcanes Malinche y al Nevado de Toluca',
            'A los volcanes Popocatépetl y al Chichinautzin'
          ],
          ru: {
            question: 'Что известно как Дон Гойо и Спящая женщина?',
            answer: 'Вулканы Попокатепетль и Истаксиуатль',
            options: [
              'Вулканы Попокатепетль и Невадо де Толука',
              'Вулканы Малинче и Невадо де Толука',
              'Вулканы Попокатепетль и Чичинауцин'
            ]
          }
        },
        {
          id: 'u5whom',
          type: 'choice',
          question: '¿Cuáles son los volcanes del Estado de México y Puebla?',
          answer: 'Popocatépetl e Iztaccíhuatl',
          options: [
            'Guadalupe y Pinacate',
            'Cerro Prieto y San Quintín',
            'El Chichón y Tacana'
          ],
          ru: {
            question: 'Какие вулканы находятся в штате Мехико и Пуэбла?',
            answer: 'Попокатепетль и Истаксиуатль',
            options: [
              'Гуадалупе и Пинакате',
              'Серро Прието и Сан-Кинтин',
              'Эль Чичон и Такана'
            ]
          }
        },
        {
          id: '0o14he',
          type: 'choice',
          question:
            'Nombre del volcán que se ubica entre Morelos, Puebla y Estado de México',
          answer: 'Popocatépetl',
          options: ['Cerro Prieto', 'Tacana', 'Guadalupe'],
          note: 'En náhuatl "el cerro que humea", popoca "humear"; tepētl, "cerro."',
          ru: {
            question:
              'Название вулкана, который находится между Морелосом, Пуэблой и штатом Мехико',
            answer: 'Попокатепетль',
            options: ['Серро Прието', 'Такана', 'Гуадалупе'],
            note: 'На языке науатль "дымящийся холм", popoca "дымить"; tepētl, "холм".'
          }
        },
        {
          id: 'hs1qu',
          type: 'choice',
          question: '¿Cuál es la montaña más alta de México?',
          answer: 'Citlaltépetl (Pico de Orizaba)',
          options: ['Popocatépetl', 'Nevado de Toluca', 'Iztaccíhuatl'],
          note: 'Ubicada entre los estados de Veracruz y Puebla.',
          ru: {
            question: 'Какая самая высокая гора в Мексике?',
            answer: 'Ситлалтепетль (Пик Орисаба)',
            options: ['Попокатепетль', 'Невадо де Толука', 'Истаксиуатль'],
            note: 'Расположена между штатами Веракрус и Пуэбла.'
          }
        },
        {
          id: 'nnbap5',
          type: 'text',
          question: 'Volcanes o picos más altos de México',
          answer:
            'Pico de Orizaba. En náhuatl “Citlaltépetl” 5,610 m entre Puebla y Veracruz.\nPopocatépetl 5,452 (Don Goyo) volcán activo entre el Estado de México, Puebla y Morelos.\nNevado de Toluca o Xinantécatl, 4,559 en el Estado de México\nVolcán Sierra Negra Tliltépetl. 4,580 en el oriente de Puebla.',
          ru: {
            question: 'Самые высокие вулканы или пики Мексики',
            answer:
              'Пик Орисаба. На языке науатль “Ситлалтепетль” 5,610 м между Пуэблой и Веракрусом.\nПопокатепетль 5,452 (Дон Гойо) активный вулкан между штатом Мехико, Пуэблой и Морелосом.\nНевадо де Толука или Синантекатль, 4,559 м в штате Мехико.\nВулкан Сьерра Негра Тлилтепетль. 4,580 м на востоке Пуэблы.'
          }
        },
        {
          id: 'yi002',
          type: 'choice',
          question: '¿Qué son los pueblos mágicos?',
          answer:
            'Pueblos que han sido reconocidos por su riqueza histórica y cultural. Programa de la Secretaría de Turismo (SECTUR)',
          options: [
            'Pueblos donde los mexicas practicaron sacrificios humanos',
            'Pueblos con una economía pujante',
            'Pueblos que según la leyenda azteca eran habitados por criaturas mitológicas'
          ],
          ru: {
            question: 'Что такое волшебные города?',
            answer:
              'Города, признанные за их историческое и культурное богатство. Программа Секретариата по туризму (SECTUR)',
            options: [
              'Города, где мексиканцы практиковали человеческие жертвоприношения',
              'Города с развивающейся экономикой',
              'Города, которые, согласно ацтекской легенде, были населены мифическими существами'
            ]
          }
        },
        {
          id: 'rvg7e',
          type: 'choice',
          question: '¿Cuantos pueblos mágicos hay?',
          answer: '132',
          options: ['156', '152', '119'],
          ru: {
            question: 'Сколько волшебных городов существует?',
            answer: '132',
            options: ['156', '152', '119']
          }
        },
        {
          id: 'dew1gp',
          type: 'choice',
          question: 'Pueblo mágico de San Luis Potosí',
          answer: 'Xilitla',
          options: ['Tapalpa', 'Tepotzotlán', 'Tequila'],
          ru: {
            question: 'Волшебный город Сан-Луис-Потоси',
            answer: 'Хилитла',
            options: ['Тапальпа', 'Тепоцотлан', 'Текила']
          }
        },
        {
          id: 'w9vqkc',
          type: 'choice',
          question: 'Pueblo mágico de Zacatecas',
          answer: 'Jerez de García Salinas',
          options: ['Jiquilpan', 'Cholula', 'Tequila'],
          ru: {
            question: 'Волшебный город Сакатекас',
            answer: 'Херес де Гарсия Салинас',
            options: ['Хикильпан', 'Чолула', 'Текила']
          }
        },
        {
          id: 'w8xx2p',
          type: 'choice',
          question: 'Pueblo mágico de Michoacán',
          answer: 'Jiquilpan',
          options: ['Chignahuapan', 'Cholula', 'Tequila'],
          ru: {
            question: 'Волшебный город Мичоакан',
            answer: 'Хикильпан',
            options: ['Чигнауапан', 'Чолула', 'Текила']
          }
        },
        {
          id: 'pi91mh',
          type: 'choice',
          question: 'Pueblos mágicos en Puebla',
          answer: 'Chignahuapan, Xicotepec',
          options: [
            'Tequila, Tapalpa',
            'Villa del Carbón, Tepotzotlán',
            'Capulálpam, Mazunte'
          ],
          ru: {
            question: 'Волшебные города в Пуэбле',
            answer: 'Чигнауапан, Сикотепек',
            options: [
              'Текила, Тапальпа',
              'Вилья-дель-Карбон, Тепоцотлан',
              'Капулапам, Мазунте'
            ]
          }
        },
        {
          id: 'ozuhmt',
          type: 'choice',
          question: '¿Dónde se ubica el pueblo mágico de Cholula?',
          answer: 'Puebla',
          options: ['Zacatecas', 'Jalisco', 'Coahuila'],
          ru: {
            question: 'Где находится волшебный город Чолула?',
            answer: 'Пуэбла',
            options: ['Сакатекас', 'Халиско', 'Коауила']
          }
        },
        {
          id: 'pw9no',
          type: 'choice',
          question: 'Pueblo mágico del Estado de México',
          answer: 'Villa del Carbón',
          options: ['Chignahuapan', 'Cholula', 'Tequila'],
          ru: {
            question: 'Волшебный город штата Мехико',
            answer: 'Вилья-дель-Карбон',
            options: ['Чигнауапан', 'Чолула', 'Текила']
          }
        },
        {
          id: 'pakp57',
          type: 'choice',
          question: '¿Dónde queda Izamal, pueblo mágico?',
          answer: 'Yucatán',
          options: ['Zacatecas', 'Michoacan', 'Veracruz'],
          ru: {
            question: 'Где находится волшебный город Изамаль?',
            answer: 'Юкатан',
            options: ['Сакатекас', 'Мичоакан', 'Веракрус']
          }
        },
        {
          id: 'jxrhn3',
          type: 'choice',
          question:
            '¿Cuál es la ciudad conocida como la Puerta de Oro del Bajío?',
          answer: 'Celaya, Guanajuato',
          options: ['Michoacán', 'Guadalajara', 'Aguascalientes'],
          ru: {
            question: 'Какой город известен как Золотые Ворота Бахио?',
            answer: 'Селайя, Гуанахуато',
            options: ['Мичоакан', 'Гвадалахара', 'Агуаскальентес']
          }
        },
        {
          id: 'zfdl8',
          type: 'choice',
          question: '¿Cuál es la ciudad conocida como la Perla del Bajío?',
          answer: 'León',
          options: ['Michoacán', 'Guadalajara', 'Aguascalientes'],
          ru: {
            question: 'Какой город известен как Жемчужина Бахио?',
            answer: 'Леон',
            options: ['Мичоакан', 'Гвадалахара', 'Агуаскальентес']
          }
        },
        {
          id: 't3o71o',
          type: 'choice',
          question: '¿A que cuidad se conoce como "La bella airosa"?',
          answer: 'Pachuca',
          options: ['Guadalajara', 'Xalapa', 'Oaxaca'],
          note: 'En el estado de Hidalgo.',
          ru: {
            question: 'Какой город известен как "Красавица ветреная"?',
            answer: 'Пачука',
            options: ['Гвадалахара', 'Халапа', 'Оахака'],
            note: 'В штате Идальго.'
          }
        },
        {
          id: '9902s2',
          type: 'choice',
          question: '¿Cual es la ciudad 4 veces heroica o 3 veces triunfante?',
          answer: 'Veracruz',
          options: ['Cuidad del Carmen', 'Puebla', 'Zacatecas'],
          ru: {
            question: 'Какой город 4 раза героический или 3 раза триумфальный?',
            answer: 'Веракрус',
            options: ['Куэдад-дель-Кармен', 'Пуэбла', 'Сакатекас']
          }
        },
        {
          id: 'h239hx',
          type: 'text',
          question: 'Animales mexicanos en peligro de extinción',
          answer:
            'Jaguar (Ocelote)\nÁguila Real\nMariposa Monarca\nEl ajolote (Axolotl)\n Tortuga Caguama\n Guacamaya Roja\nOso Negro\nLa Vaquita Marina',
          ru: {
            question: 'Мексиканские животные под угрозой исчезновения',
            answer:
              'Ягуар (оцелот)\nКоролевский орел\nБабочка монарх\nАкселотль\nЛоггерхед черепаха\nКрасный ара\nЧерный медведь\nКалифорнийская морская свинья'
          }
        }
      ]
    },
    {
      id: 'z7ige6',
      title: 'Historia: Conquista y Colonia',
      ru: {
        title: 'История: Завоевание и колония'
      },
      questions: [
        {
          id: '8vmgpt',
          type: 'text',
          question: 'La Conquista de México-Tenochtitlán',
          answer:
            'Fue la derrota de los mexicas, a favor del rey Carlos I de España. Tenochtitlán cayó al mando de Hernán Cortés, después de dos años de intentos militares entre 1519  y 1521.',
          ru: {
            question: 'Завоевание Мексики-Теночтитлана',
            answer:
              'Это было поражение ацтеков в пользу короля Карлоса I Испании. Теночтитлан пал под командованием Эрнана Кортеса после двух лет военных попыток между 1519 и 1521 годами.'
          }
        },
        {
          id: '2zvpa',
          type: 'choice',
          question: '¿Razones que promovieron el descubrimiento de América?',
          answer:
            'Descubrir nuevas rutas comerciales y expandir el régimen feudal',
          options: [
            'Buscando el mestizaje',
            'Tuvieron una revelación',
            'Estrenar nuevos barcos'
          ],
          ru: {
            question: 'Причины, способствовавшие открытию Америки?',
            answer:
              'Открытие новых торговых путей и расширение феодального режима',
            options: [
              'В поисках смешения рас',
              'Имели откровение',
              'Испытать новые корабли'
            ]
          }
        },
        {
          id: 'jqrq7p',
          type: 'choice',
          question:
            '¿Por qué los conquistadores / españoles salieron de España?',
          answer: 'Buscando riquezas',
          options: [
            'Buscando el mestizaje',
            'Tuvieron una revelación',
            'Estrenar nuevos barcos'
          ],
          ru: {
            question: 'Почему конкистадоры/испанцы покинули Испанию?',
            answer: 'В поисках богатства',
            options: [
              'В поисках смешения рас',
              'Имели откровение',
              'Испытать новые корабли'
            ]
          }
        },
        {
          id: '31grp',
          type: 'choice',
          question: 'Nombre del conquistador que derrotó al Imperio Mexica',
          answer: 'Hernán Cortés',
          options: ['Cristobal Colón', 'Francisco Pizarro', 'Núñez de Balboa'],
          ru: {
            question: 'Имя конкистадора, победившего Империю Мексика',
            answer: 'Эрнан Кортес',
            options: [
              'Кристофор Колумб',
              'Франсиско Писарро',
              'Нуньес де Бальбоа'
            ]
          }
        },
        {
          id: 'gru2pc',
          type: 'choice',
          question: '¿Cuándo se fundó Villa Rica de la Vera Cruz?',
          answer: '10 de Julio de 1519',
          options: [
            '10 de Agosto de 1518',
            '10 de Septiembre de 1520',
            '10 de Julio de 1521'
          ],
          ru: {
            question: 'Когда была основана Вилья-Рика-де-ла-Вера-Крус?',
            answer: '10 июля 1519 года',
            options: [
              '10 августа 1518 года',
              '10 сентября 1520 года',
              '10 июля 1521 года'
            ]
          }
        },
        {
          id: '9p8hbf',
          type: 'choice',
          question: '¿Quién fundó Villa Rica de la Veracruz?',
          answer: 'Hernan Cortés',
          options: ['Cristobal Colón', 'Francisco Pizarro', 'Núñez de Balboa'],
          ru: {
            question: 'Кто основал Вилья-Рика-де-ла-Веракрус?',
            answer: 'Эрнан Кортес',
            options: [
              'Кристофор Колумб',
              'Франсиско Писарро',
              'Нуньес де Бальбоа'
            ]
          }
        },
        {
          id: 'bis404',
          type: 'choice',
          question: '¿Qué es la Villa Rica de Veracruz?',
          answer:
            'Hernán Cortés da ese nombre al primer ayuntamiento de América Continental, hoy ciudad de Veracruz',
          options: [
            'Primera provincia fundada en el Norte de México durante el Virreinato',
            'Un plan del Gral. Santa Anna para desconocer a Iturbide',
            'Una cueva donde Hernán Cortés escondió los tesoros'
          ],
          ru: {
            question: 'Что такое Вилья-Рика-де-Веракрус?',
            answer:
              'Эрнан Кортес дал это имя первому муниципалитету континентальной Америки, сегодня это город Веракрус',
            options: [
              'Первая провинция, основанная на севере Мексики во время вице-королевства',
              'План генерала Санта-Анны по отказу признать Итурбиде',
              'Пещера, где Эрнан Кортес спрятал сокровища'
            ]
          }
        },
        {
          id: 'ttdsfk',
          type: 'choice',
          question:
            '¿Quien era el emperador Mexica cuando llegaron los españoles?',
          answer: 'Moctezuma Xocoyotzin',
          options: ['Huitzilíhuitl', 'Cuauhtémoc', 'Ahuítzotl'],
          ru: {
            question: 'Кто был императором Мексики, когда прибыли испанцы?',
            answer: 'Монтесума Шокойотцин',
            options: ['Уицилиуитль', 'Куаутемок', 'Ауицотль']
          }
        },
        {
          id: 'oki0o9',
          type: 'choice',
          question: '¿Cuando entraron los conquistadores a Tenochtitlan?',
          answer: '8 de noviembre de 1519',
          options: [
            '18 de noviembre de 1519',
            '8 de noviembre de 1521',
            '8 de noviembre de 1510'
          ],
          note: 'El emperador Moctezuma se reunió con Hernan Cortés, Moctezuma pensó que los españoles eran enviados de  Quetzalcóatl (Dios Mexica) los recibió con obsequios.',
          ru: {
            question: 'Когда конкистадоры вошли в Теночтитлан?',
            answer: '8 ноября 1519 года',
            options: [
              '18 ноября 1519 года',
              '8 ноября 1521 года',
              '8 ноября 1510 года'
            ],
            note: 'Император Монтесума встретился с Эрнаном Кортесом, Монтесума думал, что испанцы были посланниками Кетцалькоатля (бога ацтеков), и принял их с подарками.'
          }
        },
        {
          id: 'sbf2mh',
          type: 'choice',
          question: '¿Quién era la intérprete de Hernán Cortés?',
          answer: 'La Malinche, Marina',
          options: ['Tecuelhuetzin', 'Tecuichpo', 'María de Estrada'],
          note: 'De aquí surge el popular adjetivo “malinchista” haciendo referencia que prefieres lo extranjero a lo propio, puesto que, la malinche siendo indigena, fue intérprete, consejera e intermediaria de Hernán Cortés, jugó un papel fundamental para que se concretara la conquista de los españoles.',
          ru: {
            question: 'Кто была переводчицей Эрнана Кортеса?',
            answer: 'Малинче, Марина',
            options: ['Текуэльуетсин', 'Текуйчпо', 'Мария де Эстрада'],
            note: 'Отсюда возникает популярный прилагательный «малинчиста», указывающий на то, что предпочитаешь иностранное своему. Малинче, будучи коренной жительницей, была переводчицей, советницей и посредницей Эрнана Кортеса, сыграла ключевую роль в завершении испанского завоевания.'
          }
        },
        {
          id: '2hcr28',
          type: 'choice',
          question:
            '¿Cómo se llamó la batalla donde los Aztecas derrotaron a los españoles?',
          answer: 'La Noche Triste',
          options: [
            'La Decena Trágica',
            'La Noche Victoriosa',
            'Batalla Azteca'
          ],
          ru: {
            question:
              'Как называлась битва, в которой ацтеки победили испанцев?',
            answer: 'Ночь Печали',
            options: [
              'Трагическая Десятка',
              'Победоносная Ночь',
              'Битва Ацтеков'
            ]
          }
        },
        {
          id: 'jh5i8c',
          type: 'choice',
          question:
            '¿Cuál es el nombre del árbol donde lloró Hernán Cortés el día de la Noche Triste?',
          answer: 'Ahuehuete',
          options: ['Primavera', 'Parota', 'Huizache'],
          ru: {
            question:
              'Как называется дерево, под которым плакал Эрнан Кортес в ночь Печали?',
            answer: 'Ахеуэтль',
            options: ['Примавера', 'Парота', 'Уизаче']
          }
        },
        {
          id: 'rutst7',
          type: 'choice',
          question:
            'Líder prehispánico que lideró la victoria durante la noche triste',
          answer: 'Cuitláhuac',
          options: ['Cuauhtémoc', 'Moctezuma', 'Ahuítzotl'],
          note: 'Era hermano de Moctezuma, dirigió el imperio Mexica luego de la muerte de Moctezuma.',
          ru: {
            question: 'Доколумбовский лидер, возглавивший победу в ночь Печали',
            answer: 'Куитлауак',
            options: ['Куаутемок', 'Монтесума', 'Ауицотль'],
            note: 'Он был братом Монтесумы и возглавлял империю Мексика после его смерти.'
          }
        },
        {
          id: '0v142q',
          type: 'choice',
          question:
            'Nombre del último emperador Mexica, a quien los conquistadores españoles torturaron quemándole los pies',
          answer: 'Cuauhtémoc',
          options: ['Huitzilíhuitl', 'Moctezuma', 'Ahuítzotl'],
          ru: {
            question:
              'Имя последнего императора Мексики, которого испанские конкистадоры пытали, сжигая ему ноги',
            answer: 'Куаутемок',
            options: ['Уицилиуитль', 'Монтесума', 'Ауицотль']
          }
        },
        {
          id: 'tiryw5',
          type: 'choice',
          question: '¿Por qué le quemaron los pies a Cuauhtémoc?',
          answer: 'Para confesar que había hecho con el tesoro de Moctezuma',
          options: [
            'Para confesar que había hecho con sus tesoros',
            'Para confesar que había hecho con el tesoro de Ahuítzotl',
            'Para confesar que había hecho con el tesoro de Huitzilíhuitl'
          ],
          ru: {
            question: 'Почему Куаутемоку сожгли ноги?',
            answer: 'Чтобы признаться, что он сделал с сокровищем Монтесумы',
            options: [
              'Чтобы признаться, что он сделал со своими сокровищами',
              'Чтобы признаться, что он сделал с сокровищем Ауицотля',
              'Чтобы признаться, что он сделал с сокровищем Уицилиуитля'
            ]
          }
        },
        {
          id: '1snu8',
          type: 'choice',
          question: '¿Cuales fueron los 3 últimos emperadores mexicas?',
          answer: 'Moctezuma, Cuitláhuac y Cuauhtémoc',
          options: [
            'Tízoc, Cuitláhuac y Cuauhtémoc',
            'Moctezuma, Ahuízotl y Cuauhtémoc',
            'Acamapichitli, Huitzilíhuitl y Chimalpopoca'
          ],
          note: 'Moctezuma: Estaba al mando cuando llegó hernán cortés, fue asesinado por su propio pueblo. Cuitláhuac: Hermano de Moctezuma, solo duró 80 días a cargo del imperio, lideró la batalla de noche triste, murió de viruela. Cuauhtémoc: Fue asesinado por los españoles cuando cayó Tenochtitlán.',
          ru: {
            question: 'Кто были последние 3 императора мексиков?',
            answer: 'Монтесума, Куитлауак и Куаутемок',
            options: [
              'Тизок, Куитлауак и Куаутемок',
              'Монтесума, Ауицотль и Куаутемок',
              'Акамапичитли, Уицилиуитль и Чимальпопока'
            ],
            note: 'Монтесума: был во главе, когда прибыл Эрнан Кортес, был убит своим собственным народом. Куитлауак: брат Монтесумы, правил империей всего 80 дней, возглавил битву в ночь Печали, умер от оспы. Куаутемок: был убит испанцами, когда пал Теночтитлан.'
          }
        },
        {
          id: '8tj93',
          type: 'choice',
          question: 'Año en que cayó México Tenochtitlán',
          answer: '1521',
          options: ['1520', '1512', '1530'],
          note: 'Después de la noche triste en 1520, los españoles se reorganizaron y atacaron de nuevo Tenochtitlán, los mexicas estaban muriendo de enfermedades contagiosas como viruela, sarampión, gripe, lo que que imposibilitó que se defendieran y terminó con la caída del imperio en 1521.',
          ru: {
            question: 'Год падения Мексики Теночтитлана',
            answer: '1521',
            options: ['1520', '1512', '1530'],
            note: 'После ночи Печали в 1520 году испанцы перегруппировались и снова атаковали Теночтитлан. Мексиканцы умирали от заразных болезней, таких как оспа, корь, грипп, что не позволило им защищаться и привело к падению империи в 1521 году.'
          }
        },
        {
          id: 'a8emdur',
          type: 'choice',
          question: 'El palacio de Axayacatl es también conocido como',
          answer: 'Casas viejas',
          options: ['Casas nuevas', 'Casa palacio', 'Casa sagrada'],
          ru: {
            question: 'Дворец Аксаятль также известен как',
            answer: 'Старые дома',
            options: ['Новые дома', 'Дом дворец', 'Священный дом']
          }
        },
        {
          id: '8zinr',
          type: 'text',
          question: '¿Qué es México Colonial?',
          answer:
            'Inicia después de la caída de México Tenochtitlan en 1521, durante éste período nuestra tierra y su población estuvieron bajo el dominio de los reyes de España. México recibe el nombre de Nueva España, se produce el mestizaje (encuentro biológico y cultural de etnias diferentes, en el que éstas se mezclan, dando nacimiento a nuevas etnias y nuevos genotipos) se integra la religión, se introduce la ganadería, explotación de plata, siembra del trigo, etcétera.  Pasado el tiempo, la corona española incrementa a tal punto la desigualdad y la corrupción que conllevaría años más tarde a la independencia.',
          ru: {
            question: 'Что такое Колониальная Мексика?',
            answer:
              'Начинается после падения Мексики Теночтитлана в 1521 году. В этот период наша земля и её население находились под властью испанских королей. Мексика получает название Новая Испания, происходит метисация (биологическая и культурная встреча различных этносов, в которой они смешиваются, порождая новые этносы и новые генотипы), интеграция религии, вводится скотоводство, добыча серебра, посев пшеницы и т.д. Со временем испанская корона увеличивает неравенство и коррупцию до такой степени, что это приведет к независимости через годы.'
          }
        },
        {
          id: 'mfns0v',
          type: 'choice',
          question: 'El periodo fundacional de la conquista fue',
          answer: '1519 - 1610',
          options: ['1522 - 1610', '1519 - 1500', '1510 - 1680'],
          ru: {
            question: 'Основной период завоевания был',
            answer: '1519 - 1610',
            options: ['1522 - 1610', '1519 - 1500', '1510 - 1680']
          }
        },
        {
          id: '4wm1w7',
          type: 'choice',
          question: '¿Cuando se consolida la etapa Colonial?',
          answer: '1530 - 1560',
          options: ['1510 - 1540', '1530 - 1660', '1800 - 1960'],
          ru: {
            question: 'Когда закрепляется колониальный этап?',
            answer: '1530 - 1560',
            options: ['1510 - 1540', '1530 - 1660', '1800 - 1960']
          }
        },
        {
          id: 'sfmeaq',
          type: 'choice',
          question: 'Nombre de México durante el periodo colonial',
          answer: 'Nueva España',
          options: ['España', 'España Segunda', 'España Americana'],
          ru: {
            question: 'Название Мексики в колониальный период',
            answer: 'Новая Испания',
            options: ['Испания', 'Вторая Испания', 'Американская Испания']
          }
        },
        {
          id: 'dayv6ym',
          type: 'choice',
          question: '¿Quién era la máxima autoridad en la Nueva España?',
          answer: 'El virrey',
          options: ['El capitán general', 'El gobernador real', 'El teniente'],
          note: 'Era a quien la monarquía española encargaba administrar, vigilar, cobrar impuestos y encabezar operaciones militares.',
          ru: {
            question: 'Кто был высшей властью в Новой Испании?',
            answer: 'Вице-король',
            options: [
              'Генеральный капитан',
              'Королевский губернатор',
              'Лейтенант'
            ],
            note: 'Он был назначен испанской монархией для управления, надзора, сбора налогов и руководства военными операциями.'
          }
        },
        {
          id: 'o0j5ux',
          type: 'choice',
          question: 'Primer Virrey de la Nueva España',
          answer: 'Antonio de Mendoza y Pacheco o Don Antonio de Mendoza',
          options: [
            'Luis de Velasco y Ruiz de Alarcón',
            'Juan O`Donoju',
            'Martín Enríquez de Almansa'
          ],
          ru: {
            question: 'Первый вице-король Новой Испании',
            answer: 'Антонио де Мендоса и Пачеко или Дон Антонио де Мендоса',
            options: [
              'Луис де Веласко и Руис де Аларкон',
              'Хуан О`Доноху',
              'Мартин Энрикес де Алманса'
            ]
          }
        },
        {
          id: 'nfupw',
          type: 'choice',
          question: 'Segundo Virrey De Nueva España',
          answer: 'Luis de Velasco y Ruiz de Alarcón',
          options: [
            'Juan O`Donoju',
            'Martín Enríquez de Almansa',
            'Antonio de Mendoza y Pacheco'
          ],
          ru: {
            question: 'Второй вице-король Новой Испании',
            answer: 'Луис де Веласко и Руис де Аларкон',
            options: [
              'Хуан О`Доноху',
              'Мартин Энрикес де Алманса',
              'Антонио де Мендоса и Пачеко'
            ]
          }
        },
        {
          id: 'dicqp',
          type: 'choice',
          question: '¿Quién fue el último Virrey de la Nueva España?',
          answer: 'Juan Ruiz de Apodaca',
          options: [
            'Martín Enríquez de Almansa',
            'Antonio de Mendoza y Pacheco',
            'Luis de Velasco y Ruiz de Alarcón'
          ],
          note: 'Algunas fuentes señalan a Juan O`Donoju como el último virrey de la Nueva España, sin embargo su cargo exactamente se llamó Jefe político superior de la Nueva España, Juan Ruiz de Apodaca fué el último con el título de Virrey.',
          ru: {
            question: 'Кто был последним вице-королем Новой Испании?',
            answer: 'Хуан Руис де Аподака',
            options: [
              'Мартин Энрикес де Алманса',
              'Антонио де Мендоса и Пачеко',
              'Луис де Веласко и Руис де Аларкон'
            ],
            note: 'Некоторые источники называют Хуана О`Доноху последним вице-королем Новой Испании, однако его должность официально называлась Главный политический начальник Новой Испании, Хуан Руис де Аподака был последним, кто носил титул вице-короля.'
          }
        },
        {
          id: 'rma53j',
          type: 'choice',
          question:
            '¿Cuáles fueron las leyes para el buen tratamiento y conservación de los indios?',
          answer: 'Las Leyes Nuevas',
          options: [
            'Las Leyes de los indios',
            'Las Leyes Viejas',
            'Las leyes liberales'
          ],
          ru: {
            question:
              'Какие законы были приняты для хорошего обращения и сохранения индейцев?',
            answer: 'Новые Законы',
            options: ['Законы индейцев', 'Старые Законы', 'Либеральные законы']
          }
        },
        {
          id: 'qvxbp',
          type: 'choice',
          question:
            'Primera intendencia u oficialía de la Nueva España fundada en 1770',
          answer: 'Intendencia de Arizpe (hoy Sonora y Sinaloa)',
          options: [
            'Nueva Vizcaya (hoy Durango, Chihuahua y Sinaloa)',
            'Intendencia de San Luis Potosí',
            'Intendencia de Guadalajara'
          ],
          note: 'El sistema de intendencias fue una estructura administrativa de la corona española con el fin de organizar el gobierno y la administración territorial, se establecieron en total 12 intendencias: México, Puebla, Veracruz, Oaxaca, Valladolid, Guanajuato, San Luis Potosí, Guadalajara, Zacatecas, Arizpe, Mérida y Durango.',
          ru: {
            question:
              'Первый интендант или официальное учреждение Новой Испании, основанное в 1770 году',
            answer: 'Интендант Ариспе (сегодня Сонора и Синалоа)',
            options: [
              'Новая Вискайя (сегодня Дуранго, Чиуауа и Синалоа)',
              'Интендант Сан-Луис-Потоси',
              'Интендант Гвадалахара'
            ],
            note: 'Система интендантов была административной структурой испанской короны для организации управления и территориального администрирования, всего было создано 12 интендантов: Мехико, Пуэбла, Веракрус, Оахака, Вальядолид, Гуанахуато, Сан-Луис-Потоси, Гвадалахара, Сакатекас, Ариспе, Мерида и Дуранго.'
          }
        },
        {
          id: 'jya24m',
          type: 'choice',
          question:
            'Fue la primera provincia en ser explorada y fundada en el norte de México durante el virreinato de la Nueva España',
          answer: 'La Nueva Vizcaya',
          options: ['La Nueva Galicia', 'La Nueva Navarra', 'Nuevo México'],
          ru: {
            question:
              'Первая провинция, исследованная и основанная на севере Мексики во время вице-королевства Новой Испании',
            answer: 'Новая Вискайя',
            options: ['Новая Галисия', 'Новая Навара', 'Новая Мексика']
          }
        },
        {
          id: 'arbnf',
          type: 'choice',
          question:
            'Estados actuales que conformaban la Nueva Vizcaya en la época colonial',
          answer: 'Durango, Chihuahua y Sinaloa',
          options: [
            'Yucatán, Campeche, Chiapas',
            'Jalisco, Colima, Michoacán',
            'Guerrero, Puebla, Oaxaca'
          ],
          ru: {
            question:
              'Современные штаты, которые составляли Новую Вискайю в колониальную эпоху',
            answer: 'Дуранго, Чиуауа и Синалоа',
            options: [
              'Юкатан, Кампече, Чьяпас',
              'Халиско, Колима, Мичоакан',
              'Герреро, Пуэбла, Оахака'
            ]
          }
        },
        {
          id: 'ar3toq',
          type: 'text',
          question: '¿Qué fue la Constitución de Cádiz?',
          answer:
            'La Constitución Política de la Monarquía Española, más conocida como Constitución española de 1812 o Constitución de Cádiz,​ conocida popularmente como la Pepa. Dividió la Nueva España en 6 provincias.',
          ru: {
            question: 'Что такое Конституция Кадиса?',
            answer:
              'Политическая Конституция Испанской Монархии, более известная как Испанская Конституция 1812 года или Конституция Кадиса, известная в народе как Пепа. Она разделила Новую Испанию на 6 провинций.'
          }
        },
        {
          id: 'k7vu3j',
          type: 'choice',
          question:
            'El zócalo de la Ciudad de México también conocido como Plaza de la constitución se llama así por la constitución de',
          answer: 'Constitución de Cádiz de 1812',
          options: [
            'Constitución de Apatzingán',
            'Constitución de 1824',
            'Constitución de 1857'
          ],
          ru: {
            question:
              'Сокало в Мехико, также известная как Площадь Конституции, называется так в честь Конституции',
            answer: 'Конституция Кадиса 1812 года',
            options: [
              'Конституция Апасингана',
              'Конституция 1824 года',
              'Конституция 1857 года'
            ]
          }
        },
        {
          id: 'qjk5g3',
          type: 'choice',
          question:
            '¿Quién hizo la ley de imprenta que sale en la Constitución de Cádiz?',
          answer: 'José Isidro Morales',
          options: [
            'Álvaro Flórez Estrada',
            'Vicente Morales Duárez',
            'Evaristo Pérez de Castro'
          ],
          ru: {
            question:
              'Кто составил закон о печати, который вошел в Конституцию Кадиса?',
            answer: 'Хосе Исидро Моралес',
            options: [
              'Альваро Флорес Эстрада',
              'Висенте Моралес Дуэрес',
              'Эваристо Перес де Кастро'
            ]
          }
        },
        {
          id: 'gxwqjr',
          type: 'choice',
          question:
            'Creador de un periódico en la época de la Constitución de Cádiz',
          answer: 'José Isidro Morales',
          options: [
            'Álvaro Flórez Estrada',
            'Vicente Morales Duárez',
            'Evaristo Pérez de Castro'
          ],
          ru: {
            question: 'Создатель газеты в эпоху Конституции Кадиса',
            answer: 'Хосе Исидро Моралес',
            options: [
              'Альваро Флорес Эстрада',
              'Висенте Моралес Дуэрес',
              'Эваристо Перес де Кастро'
            ]
          }
        },
        {
          id: '7nryjs',
          type: 'choice',
          question:
            '¿Cómo denominaban a los hijos de los españoles nacidos en la Nueva España?',
          answer: 'Criollos',
          options: ['Morisco', 'Mulato', 'Zambo'],
          ru: {
            question: 'Как называли детей испанцев, рожденных в Новой Испании?',
            answer: 'Креолы',
            options: ['Мориски', 'Мулаты', 'Замбо']
          }
        },
        {
          id: '2ffnj5',
          type: 'choice',
          question: '¿Qué es un mestizo?',
          answer: 'Hijo de español e indio',
          options: [
            'Hijo de mulato y español',
            'Hijo de negro e indio',
            'Hijo de español y mestizo'
          ],
          ru: {
            question: 'Кто такой метис?',
            answer: 'Сын испанца и индейца',
            options: [
              'Сын мулата и испанца',
              'Сын негра и индейца',
              'Сын испанца и метиса'
            ]
          }
        },
        {
          id: 'dpa1wg',
          type: 'choice',
          question: 'En la época colonial ¿A quienes se les llamaba peones?',
          answer: 'A los trabajadores asalariados de las haciendas',
          options: [
            'A los hacendados',
            'A los campesinos que trabajaban en minifundios',
            'A los hijos de español e indio'
          ],
          ru: {
            question: 'В колониальную эпоху кого называли пеонами?',
            answer: 'Наемных работников на плантациях',
            options: [
              'Плантаторов',
              'Крестьян, работающих на мелких участках',
              'Сыновей испанцев и индейцев'
            ]
          }
        },
        {
          id: 'bg08r8',
          type: 'choice',
          question: 'La "Encomienda" y el "Visitador" fueron instituciones',
          answer: 'Coloniales',
          options: ['De la Independencia', 'De la revolución', 'Prehispánicas'],
          ru: {
            question: '"Энкомьенда" и "Визитадор" были учреждениями',
            answer: 'Колониальными',
            options: [
              'Периода независимости',
              'Революционными',
              'Доколумбовыми'
            ]
          }
        },
        {
          id: 'ng2yl9',
          type: 'text',
          question: '¿Qué es la encomienda?',
          answer:
            'La encomienda en Nueva España fue introducida por Hernán Cortés después de la conquista de Tenochtitlan como forma de “repartir” los indios a distintos conquistadores y colonos.',
          ru: {
            question: 'Что такое энкомьенда?',
            answer:
              'Энкомьенда в Новой Испании была введена Эрнаном Кортесом после завоевания Теночтитлана как способ «распределения» индейцев между различными конкистадорами и колонистами.'
          }
        },
        {
          id: 'oyhng',
          type: 'text',
          question: '¿Qué era la figura del visitador?',
          answer:
            'Era un individuo investido de autoridad para supervisar y tomaba nota de todo lo que debía ser juzgado y corregido en lo político, económico y militar, mandado desde España por la Corona.',
          ru: {
            question: 'Кто такой визитадор?',
            answer:
              'Это было лицо, наделенное властью для надзора, и записывающее все, что должно было быть рассмотрено и исправлено в политической, экономической и военной сферах, посланное из Испании Короной.'
          }
        },
        {
          id: 'wvvl1r',
          type: 'choice',
          question: 'El mineral que más se extraía en la Nueva España era',
          answer: 'La plata',
          options: ['El oro', 'El cobre', 'El plomo'],
          ru: {
            question: 'Минерал, который больше всего добывался в Новой Испании',
            answer: 'Серебро',
            options: ['Золото', 'Медь', 'Свинец']
          }
        },
        {
          id: 'kx7jd',
          type: 'choice',
          question:
            'El Palacio Nacional, sede del Poder Ejecutivo Federal, inicialmente fué construido como',
          answer: 'Segunda Casa de Hernan Cortes o Casas Nuevas',
          options: [
            'Un escondite',
            'Un refugio para los enfermos',
            'Una iglesia'
          ],
          ru: {
            question:
              'Национальный дворец, резиденция Федеральной исполнительной власти, первоначально был построен как',
            answer: 'Второй дом Эрнана Кортеса или Новые дома',
            options: ['Убежище', 'Приют для больных', 'Церковь']
          }
        },
        {
          id: '31nlp9',
          type: 'text',
          question:
            'En la época de la Nueva España ¿A que se le llamaba obrajes?',
          answer:
            'Eran centros artesanales que existieron a mediados del siglo XVI, con 50 trabajadores en promedio, en los cuales se producían textiles, hilos y lana de calidad burda. Estos productos se vendían a indios y mulatos, los cuales no podían pagar el precio del mismo producto importado de Europa. Los trabajadores eran indios y delincuentes condenados por delitos que eran explotados por los obrajeros.',
          ru: {
            question: 'В эпоху Новой Испании что называли обрахес?',
            answer:
              'Это были ремесленные центры, существовавшие в середине XVI века, в которых работало в среднем 50 человек, производивших текстиль, нити и шерсть грубого качества. Эти продукты продавались индейцам и мулатам, которые не могли заплатить цену за тот же продукт, импортированный из Европы. Работники были индейцами и преступниками, осужденными за преступления и эксплуатируемыми обрахадорами.'
          }
        },
        {
          id: '7f2zs',
          type: 'choice',
          question:
            'Esquema imperial por el cual se exigía el pago de los más ricos para contribuir al gobierno',
          answer: 'Unión de Armas',
          options: [
            'Unión de la plata',
            'Unión del oro',
            'Unión de protección'
          ],
          note: 'Debían aportar dinero y armas para la defensa de la corona española.',
          ru: {
            question:
              'Имперская схема, по которой от самых богатых требовалась оплата для вклада в правительство',
            answer: 'Союз Оружия',
            options: ['Союз Серебра', 'Союз Золота', 'Союз Защиты'],
            note: 'Они должны были вносить деньги и оружие для защиты испанской короны.'
          }
        },
        {
          id: 'vdiqi',
          type: 'choice',
          question: 'Año en que se creó la primera imprenta de México',
          answer: '1539',
          options: ['1510', '1500', '1545'],
          note: 'Durante el mandato de Don Antonio de Mendoza en la Nueva España.',
          ru: {
            question: 'Год создания первой печатной машины в Мексике',
            answer: '1539',
            options: ['1510', '1500', '1545'],
            note: 'Во время правления Дона Антонио де Мендоса в Новой Испании.'
          }
        },
        {
          id: 'tvjlg8',
          type: 'choice',
          question:
            'Primer periódico de México o primer periódico impreso en la Nueva España',
          answer: 'La Gaceta de México',
          options: [
            'Diario de México',
            'Noticias de México',
            'Últimas noticias'
          ],
          note: 'Su fundador fue el periodista y religioso Juan Ignacio María de Castorena Urzúa y Goyeneche.',
          ru: {
            question:
              'Первая газета Мексики или первая газета, напечатанная в Новой Испании',
            answer: 'Газета Мексики',
            options: [
              'Ежедневник Мексики',
              'Новости Мексики',
              'Последние новости'
            ],
            note: 'Ее основателем был журналист и священник Хуан Игнасио Мария де Касторена Урсуа и Гойенече.'
          }
        },
        {
          id: 'qhep1n',
          type: 'choice',
          question:
            'Nombre del periódico creado en el S. XVIII en la Nueva España',
          answer: 'La Gaceta de México',
          options: [
            'Diario de México',
            'Noticias de México',
            'Últimas noticias'
          ],
          ru: {
            question: 'Название газеты, созданной в XVIII веке в Новой Испании',
            answer: 'Газета Мексики',
            options: [
              'Ежедневник Мексики',
              'Новости Мексики',
              'Последние новости'
            ]
          }
        },
        {
          id: 'qksmp9',
          type: 'choice',
          question:
            'Institución creada para compensar las falencias del sistema judicial en la Nueva España',
          answer: 'Tribunal de la Acordada',
          options: [
            'Tribunal de la Justicia',
            'Tribunal Nueva España',
            'Tribunal Español'
          ],
          ru: {
            question:
              'Учреждение, созданное для компенсации недостатков судебной системы в Новой Испании',
            answer: 'Суд Аккордада',
            options: [
              'Суд Справедливости',
              'Суд Новой Испании',
              'Испанский Суд'
            ]
          }
        },
        {
          id: 'bbgerf',
          type: 'choice',
          question:
            'Primera institución durante la colonia de educación superior para indígenas o escuela de los nobles indígenas en la época del Virreinato',
          answer: 'Colegio de la Santa Cruz de Santiago Tlatelolco',
          options: [
            'Colegio de San Nicolás Obispo',
            'Colegio de San Ildefonso',
            'Colegio de San Martín'
          ],
          ru: {
            question:
              'Первое учреждение высшего образования для индейцев или школа для благородных индейцев в эпоху вице-королевства',
            answer: 'Колледж Святого Креста Сантьяго Тлателолько',
            options: [
              'Колледж Святого Николая Епископа',
              'Колледж Сан-Ильдефонсо',
              'Колледж Сан-Мартин'
            ]
          }
        },
        {
          id: '645m54',
          type: 'choice',
          question:
            'Nombre del sistema financiero donde se exigía a grandes consorcios contribuir al mantenimiento de la corona',
          answer: 'La Real Hacienda. Cajas de la Real Hacienda',
          options: ['Unión de Armas', 'Ley de Fuga', 'La Acordada'],
          ru: {
            question:
              'Название финансовой системы, в которой от крупных консорциумов требовалось вносить вклад в содержание короны',
            answer: 'Королевская Казна. Королевские Казны',
            options: ['Союз Оружия', 'Закон о побеге', 'Аккордада']
          }
        },
        {
          id: 'jblzne',
          type: 'choice',
          question: '¿En qué consistió la conspiración de Valladolid?',
          answer:
            'Pretendían establecer un congreso soberano que gobernaría a nombre de Fernando VII',
          options: [
            'Establecer el imperio de Fernando VII',
            'Derrocar el gobierno de Fernando VII',
            'Pretendian establecer un congreso soberano independiente de Fernando VII'
          ],
          note: '21 de diciembre de 1809.',
          ru: {
            question: 'В чем заключался заговор в Вальядолиде?',
            answer:
              'Они намеревались создать суверенный конгресс, который управлял бы от имени Фердинанда VII',
            options: [
              'Создать империю Фердинанда VII',
              'Свергнуть правительство Фердинанда VII',
              'Намеревались создать суверенный конгресс, независимый от Фердинанда VII'
            ],
            note: '21 декабря 1809 года.'
          }
        },
        {
          id: '5x8joj',
          type: 'choice',
          question:
            'El principal culto religioso de la sociedad novohispana que perdura en la actualidad',
          answer: 'La Virgen de Guadalupe',
          options: [
            'La Virgen de Zapopan',
            'La Virgen del Valle',
            'La Virgen del Carmen'
          ],
          ru: {
            question:
              'Главный религиозный культ новоиспанского общества, существующий до сих пор',
            answer: 'Дева Гваделупская',
            options: ['Дева Запопанская', 'Дева Долинная', 'Дева Кармельская']
          }
        }
      ]
    },
    {
      id: 'u7glcp',
      title: 'Historia: Independencia',
      ru: {
        title: 'История: Независимость'
      },
      questions: [
        {
          id: 't3utl8',
          type: 'choice',
          question: 'La Independencia de México inició en',
          answer: '1810',
          options: ['1811', '1812', '1800'],
          ru: {
            question: 'Независимость Мексики началась в',
            answer: '1810',
            options: ['1811', '1812', '1800']
          }
        },
        {
          id: 'st0np9',
          type: 'choice',
          question: '¿En qué estado fue el Grito de Independencia?',
          answer: 'Dolores Hidalgo - Guanajuato',
          options: [
            'Mineral de Pozos - Guanajuato',
            'Jalpa - Guanajuato',
            'Salvatierra - Guanajuato'
          ],
          ru: {
            question: 'В каком штате прозвучал Крик Независимости?',
            answer: 'Долорес Идальго - Гуанахуато',
            options: [
              'Минераль де Позос - Гуанахуато',
              'Хальпа - Гуанахуато',
              'Сальватиерра - Гуанахуато'
            ]
          }
        },
        {
          id: 'sx7n8h',
          type: 'choice',
          question: '¿Dónde fué la cuna de la independencia?',
          answer: 'Guanajuato',
          options: ['Querétaro', 'Hidalgo', 'Zacatecas'],
          ru: {
            question: 'Где была колыбель независимости?',
            answer: 'Гуанахуато',
            options: ['Керетаро', 'Идальго', 'Сакатекас']
          }
        },
        {
          id: '71wti',
          type: 'choice',
          question: '¿A quién se conoce como “El Padre de la Patria”?',
          answer: 'Miguel Hidalgo y Costilla',
          options: [
            'José María Morelos y Pavón',
            'Vicente Guerrero',
            'Agustín de Iturbide'
          ],
          ru: {
            question: 'Кого знают как «Отца Отечества»?',
            answer: 'Мигель Идальго и Костилья',
            options: [
              'Хосе Мария Морелос и Павон',
              'Висенте Герреро',
              'Агустин де Итурбиде'
            ]
          }
        },
        {
          id: '4l9tn',
          type: 'choice',
          question:
            '¿Quién dijo la frase “El Indulto es para los criminales, no para los defensores de la patria”?',
          answer: 'Miguel Hidalgo y Costilla',
          options: [
            'José María Morelos y Pavón',
            'Vicente Guerrero',
            'Agustín de Iturbide'
          ],
          ru: {
            question:
              'Кто сказал фразу «Помилование для преступников, а не для защитников Родины»?',
            answer: 'Мигель Идальго и Костилья',
            options: [
              'Хосе Мария Морелос и Павон',
              'Висенте Герреро',
              'Агустин де Итурбиде'
            ]
          }
        },
        {
          id: '6l6tqu',
          type: 'choice',
          question:
            'Imagen presente en el estandarte de Hidalgo (Blasón de Hidalgo)',
          answer: 'La Virgen de Guadalupe',
          options: [
            'La Virgen del Carmen',
            'La Virgen del Valle',
            'La Virgen de la Candelaria'
          ],
          ru: {
            question: 'Изображение на знамени Идальго (Герб Идальго)',
            answer: 'Дева Гваделупская',
            options: ['Дева Кармельская', 'Дева Долинная', 'Дева Канделярская']
          }
        },
        {
          id: 'xdxspl',
          type: 'choice',
          question: 'Día de la Independencia de México (Grito de Dolores)',
          answer: '16 de septiembre de 1810',
          options: [
            '16 de septiembre de 1811',
            '16 de septiembre de 1800',
            '16 de septiembre de 1812'
          ],
          ru: {
            question: 'День Независимости Мексики (Крик Долорес)',
            answer: '16 сентября 1810 года',
            options: [
              '16 сентября 1811 года',
              '16 сентября 1800 года',
              '16 сентября 1812 года'
            ]
          }
        },
        {
          id: 'z6jqx9',
          type: 'text',
          question: 'Nombres de héroes de la independencia',
          answer:
            'Miguel Hidalgo y Costilla\nJosé María Morelos y Pavón\nVicente Guerrero\n Agustín de Iturbide\nIgnacio Allende\nJosefa Ortiz de Domínguez\nFrancisco Javier Mina\nJuan Aldama\nEpigmenio González',
          ru: {
            question: 'Имена героев независимости',
            answer:
              'Мигель Идальго и Костилья\nХосе Мария Морелос и Павон\nВисенте Герреро\nАгустин де Итурбиде\nИгнасио Альенде\nХосефа Ортис де Домингес\nФрансиско Хавьер Мина\nХуан Альдама\nЭпигменио Гонсалес'
          }
        },
        {
          id: 'na8vjc',
          type: 'choice',
          question: 'Mujeres destacadas en la independencia',
          answer: 'Josefa Ortiz de Domínguez y Leona Vicario',
          options: [
            'Josefina Muriel y Leona Vicario',
            'Mónica Salas y Josefa Ortiz de Domínguez',
            'María Gertrudis Armendáriz y Josefina Muriel'
          ],
          ru: {
            question: 'Выдающиеся женщины в борьбе за независимость',
            answer: 'Хосефа Ортис де Домингес и Леона Викарио',
            options: [
              'Хосефина Муриель и Леона Викарио',
              'Моника Салас и Хосефа Ортис де Домингес',
              'Мария Гертрудис Армендарис и Хосефина Муриель'
            ]
          }
        },
        {
          id: 'p1ohb',
          type: 'choice',
          question: '¿Quién fué conocida como “La Corregidora”?',
          answer: 'Josefa Ortiz de Domínguez',
          options: [
            'Josefina Muriel',
            'Leona Vicario',
            'María Gertrudis Armendáriz'
          ],
          ru: {
            question: 'Кто была известна как «Коррехидора»?',
            answer: 'Хосефа Ортис де Домингес',
            options: [
              'Хосефина Муриель',
              'Леона Викарио',
              'Мария Гертрудис Армендарис'
            ]
          }
        },
        {
          id: 'edc22e',
          type: 'choice',
          question: '¿Quién fué Leona Vicario?',
          answer:
            '​Una de las mujeres más destacadas de la Guerra de Independencia',
          options: [
            '​Una de las mujeres más destacadas de la Revolución',
            '​Mujer destacada durante la conquista',
            '​Mujer fusilada durante de la Guerra de Independencia'
          ],
          note: 'Se dedicó a informar a los insurgentes de los movimientos que podían interesarles y que ocurrían en la capital del Virreinato.',
          ru: {
            question: 'Кто была Леона Викарио?',
            answer: 'Одна из самых выдающихся женщин в Войне за независимость',
            options: [
              'Одна из самых выдающихся женщин в Революции',
              'Выдающаяся женщина во время завоевания',
              'Женщина, расстрелянная во время Войны за независимость'
            ],
            note: 'Она занималась информированием повстанцев о движениях, которые могли их заинтересовать и происходили в столице Вице-королевства.'
          }
        },
        {
          id: 'x6h9km',
          type: 'choice',
          question:
            '¿Quién fué el fundador de "El Pensador Mexicano"? (Periódico más importante en la época de independencia)',
          answer: 'José Joaquín Fernández de Lizardi',
          options: [
            'Juan Fernández de Lizardi',
            'Manuel Fernández de Lizardi',
            'Pedro Fernández de Lizardi'
          ],
          ru: {
            question:
              'Кто был основателем «El Pensador Mexicano»? (Самая важная газета в эпоху независимости)',
            answer: 'Хосе Хоакин Фернандес де Лисарди',
            options: [
              'Хуан Фернандес де Лисарди',
              'Мануэль Фернандес де Лисарди',
              'Педро Фернандес де Лисарди'
            ]
          }
        },
        {
          id: 'zkhsfa',
          type: 'choice',
          question:
            '¿Cuál fué el primer periódico de los insurgentes (época del movimiento independentista)?',
          answer: 'El Despertador Americano en 1810',
          options: [
            'El Informador Americano en 1910',
            'El Americano en 1510',
            'La Gaceta en 1710'
          ],
          ru: {
            question:
              'Какая была первая газета повстанцев (эпоха движения за независимость)?',
            answer: 'El Despertador Americano в 1810 году',
            options: [
              'El Informador Americano в 1910 году',
              'El Americano в 1510 году',
              'La Gaceta в 1710 году'
            ]
          }
        },
        {
          id: '722evln',
          type: 'choice',
          question: 'Periódico durante el movimiento Independentista',
          answer: 'El Despertador Americano',
          options: ['El Informador', 'El Americano', 'La Gaceta'],
          ru: {
            question: 'Газета во время движения за независимость',
            answer: 'El Despertador Americano',
            options: ['El Informador', 'El Americano', 'La Gaceta']
          }
        },
        {
          id: 'pjdbgj',
          type: 'choice',
          question:
            'Primera institución educativa en 1811 destinada a las ciencias y artes',
          answer: 'Colegio de Minería',
          options: [
            'Colegio de ciencias',
            'Colegio de artes',
            'Colegio Tlatelolco'
          ],
          ru: {
            question:
              'Первое образовательное учреждение в 1811 году, предназначенное для наук и искусств',
            answer: 'Горный колледж',
            options: ['Колледж наук', 'Колледж искусств', 'Колледж Тлателолько']
          }
        },
        {
          id: 'x8bx8l',
          type: 'choice',
          question:
            '¿Quién dijo la frase: Sin importar el tamaño de la ciudad o pueblo en donde nacen los hombres o mujeres, ellos son finalmente del tamaño de su obra, del tamaño de su voluntad de engrandecer y enriquecer a sus hermanos?',
          answer: 'Ignacio Allende',
          options: [
            'Vicente Guerrero',
            'José María Morelos y Pavón',
            'Miguel Hidalgo y Costilla'
          ],
          note: 'Líder de la independencia fusilado junto con Miguel Hidalgo.',
          ru: {
            question:
              'Кто сказал фразу: «Не важно, в каком городе или деревне рождаются мужчины или женщины, они, в конце концов, равны своему делу, своему желанию возвеличить и обогатить своих братьев»?',
            answer: 'Игнасио Альенде',
            options: [
              'Висенте Герреро',
              'Хосе Мария Морелос и Павон',
              'Мигель Идальго и Костилья'
            ],
            note: 'Лидер независимости, расстрелянный вместе с Мигелем Идальго.'
          }
        },
        {
          id: 'wkkkqm',
          type: 'choice',
          question: '¿Quién dijo la frase: “La patria es primero”?',
          answer: 'Vicente Guerrero',
          options: [
            'José María Morelos y Pavón',
            'Miguel Hidalgo y Costilla',
            'Ignacio Allende'
          ],
          ru: {
            question: 'Кто сказал фразу: «Родина прежде всего»?',
            answer: 'Висенте Герреро',
            options: [
              'Хосе Мария Морелос и Павон',
              'Мигель Идальго и Костилья',
              'Игнасио Альенде'
            ]
          }
        },
        {
          id: 'kmlxb9j',
          type: 'choice',
          question:
            'Texto en el que aparecen la separación de poderes y los derechos de los indígenas',
          answer: 'Sentimientos de la Nación',
          options: [
            'Constitución de Cadiz',
            'Acuerdos de separación',
            'Nuestros derechos'
          ],
          ru: {
            question:
              'Текст, в котором упоминаются разделение властей и права коренных народов',
            answer: 'Чувства Нации',
            options: [
              'Конституция Кадиса',
              'Соглашения о разделении',
              'Наши права'
            ]
          }
        },
        {
          id: 'yk1zir',
          type: 'choice',
          question: '¿Quién escribió el documento "Sentimientos de la Nación"?',
          answer: 'José María Morelos y Pavón',
          options: [
            'Miguel Hidalgo y Costilla',
            'Ignacio Allende',
            'Vicente Guerrero'
          ],
          note: 'El documento "Sentimientos de la Nación" fue escrito por José María Morelos, un destacado líder de la independencia de México. Morelos presentó este documento en 1813 durante el Congreso de Chilpancingo, con el objetivo de establecer las bases de una nueva nación libre del dominio español. En "Sentimientos de la Nación", Morelos expone 23 puntos que reflejan sus ideales de justicia social, igualdad y soberanía nacional. Este documento es considerado un pilar fundamental en la historia de México, ya que sentó las bases para la Constitución de Apatzingán de 1814. A través de su redacción, Morelos dejó un legado de lucha por la independencia y los derechos humanos.',
          noteImage: 'yk1zir.jpg',
          ru: {
            question: 'Кто написал документ «Чувства Нации»?',
            answer: 'Хосе Мария Морелос и Павон',
            options: [
              'Мигель Идальго и Костилья',
              'Игнасио Альенде',
              'Висенте Герреро'
            ],
            note: 'Документ "Чувства нации" был написан Хосе Марией Морелосом, выдающимся лидером мексиканской борьбы за независимость. Морелос представил этот документ в 1813 году на Конгрессе в Чильпансинго с целью заложить основы новой нации, свободной от испанского господства. В "Чувствах нации" Морелос изложил 23 пункта, отражающие его идеалы социальной справедливости, равенства и национального суверенитета. Этот документ считается важнейшим в истории Мексики, так как он стал основой для Конституции Апатсингана 1814 года. Через свое творчество Морелос оставил наследие борьбы за независимость и права человека.'
          }
        },
        {
          id: '5vo1i44',
          type: 'choice',
          question:
            '¿En qué documento se puede leer "Que la América es libre independiente de España y de toda otra Nación, Gobierno o Monarquía, y que así se sancione, dando al Mundo las razones. Que la Esclavitud se proscriba para siempre..."?',
          answer: 'Sentimientos de la Nación',
          options: [
            'Constitución de Cadiz',
            'Acuerdos de separación',
            'Nuestros derechos'
          ],
          ru: {
            question:
              'В каком документе можно прочитать «Что Америка свободна и независима от Испании и любой другой Нации, Правительства или Монархии, и что так будет санкционировано, дав миру причины. Что рабство будет запрещено навсегда...»?',
            answer: 'Чувства Нации',
            options: [
              'Конституция Кадиса',
              'Соглашения о разделении',
              'Наши права'
            ]
          }
        },
        {
          id: '4j60ao',
          type: 'choice',
          question:
            '¿Quién dijo "¡Morir es nada, cuando por la patria se muere!"?',
          answer: 'José María Morelos y Pavón',
          options: [
            'Vicente Guerrero',
            'Miguel Hidalgo y Costilla',
            'Ignacio Allende'
          ],
          ru: {
            question:
              'Кто сказал «Умереть - это ничто, когда умираешь за Родину!»?',
            answer: 'Хосе Мария Морелос и Павон',
            options: [
              'Висенте Герреро',
              'Мигель Идальго и Костилья',
              'Игнасио Альенде'
            ]
          }
        },
        {
          id: '3qbck',
          type: 'choice',
          question: '¿Qué es el Plan de Iguala?',
          answer:
            'Documento político proclamado por Agustín de Iturbide, en el cual se declaraba a la Nueva España como país soberano e independiente',
          options: [
            'Proclamado por el por Gral. Santa Anna para desconocer a Iturbide',
            'Tratado donde México cede territorios del norte',
            'Promovido por Porfirio Diaz para evitar la reelección de Benito Juárez'
          ],
          ru: {
            question: 'Что такое План Игала?',
            answer:
              'Политический документ, провозглашенный Агустином де Итурбиде, в котором Новая Испания объявляется суверенной и независимой страной',
            options: [
              'Провозглашен генералом Санта-Анной, чтобы не признавать Итурбиде',
              'Договор, по которому Мексика уступает территории на севере',
              'Продвигается Порфирио Диасом, чтобы избежать переизбрания Бенито Хуареса'
            ]
          }
        },
        {
          id: 'i3rjsj',
          type: 'choice',
          question:
            'El plan firmado por Iturbide para declarar un país independiente fue',
          answer: 'Plan de Iguala',
          options: ['Plan de Tuxtepec', 'Plan de Noria', 'Plan de Ayutla'],
          ru: {
            question:
              'План, подписанный Итурбиде для провозглашения независимости страны, был',
            answer: 'План Игала',
            options: ['План Тустепек', 'План Нория', 'План Аютла']
          }
        },
        {
          id: 'brp4x',
          type: 'choice',
          question: '¿Cuándo se firmó el tratado o Plan de Iguala?',
          answer: '24 de Febrero de 1821',
          options: [
            '01 de Febrero de 1821',
            '24 de Diciembre de 1821',
            '24 de Julio de 1821'
          ],
          ru: {
            question: 'Когда был подписан договор или План Игала?',
            answer: '24 февраля 1821 года',
            options: [
              '1 февраля 1821 года',
              '24 декабря 1821 года',
              '24 июля 1821 года'
            ]
          }
        },
        {
          id: '4el55i',
          type: 'choice',
          question: '¿Qué personajes proclamaron el Plan de Iguala?',
          answer: 'Agustín de Iturbide y Vicente Guerrero',
          options: [
            'Josefa Ortiz de Domínguez y Félix Calleja',
            'Miguel Hidalgo y José María Morelos',
            'Ignacio Allende y Juan Aldama'
          ],
          ru: {
            question: 'Какие личности провозгласили План Игала?',
            answer: 'Агустин де Итурбиде и Висенте Герреро',
            options: [
              'Хосефа Ортис де Домингес и Феликс Каллеха',
              'Мигель Идальго и Хосе Мария Морелос',
              'Игнасио Альенде и Хуан Альдама'
            ]
          }
        },
        {
          id: 'pte3lv',
          type: 'choice',
          question:
            '¿Cuáles fueron los tres principios fundamentales del plan de Iguala? / Tres garantías del Ejército Trigarante?',
          answer: 'Religión, Independencia y Unión',
          options: [
            'Defensa, Independencia y Unión',
            'Armas, Independencia y Unión',
            'Independencia, Paz y Unión'
          ],
          ru: {
            question:
              'Какие были три основных принципа плана Игала? / Три гарантии Тригарантной армии?',
            answer: 'Религия, Независимость и Единство',
            options: [
              'Оборона, Независимость и Единство',
              'Оружие, Независимость и Единство',
              'Независимость, Мир и Единство'
            ]
          }
        },
        {
          id: 'bq7u4j',
          type: 'text',
          question: '¿Qué fué el Tratado de Córdoba?',
          answer:
            'Documento en el que se ratifica la Independencia de México, firmado en la ciudad de Córdoba, Veracruz, el 24 de agosto de 1821, por Agustín de Iturbide, (comandante del Ejército Trigarante) y por Juan O`Donoju (Jefe Político Superior de la Provincia de Nueva España).',
          ru: {
            question: 'Что такое Кордовский договор?',
            answer:
              'Документ, подтверждающий Независимость Мексики, подписанный в городе Кордова, Веракрус, 24 августа 1821 года Агустином де Итурбиде (командиром Тригарантной армии) и Хуаном О`Доноху (Главным политическим руководителем провинции Новая Испания).'
          }
        },
        {
          id: 'npgvrb',
          type: 'choice',
          question:
            '¿Cuál fue la primera constitución de México independiente?',
          answer: 'Constitución Federal de 1824',
          options: [
            'Constitución Federal de 1825',
            'Constitución Federal de 1924',
            'Constitución Federal de 1834'
          ],
          note: 'México fué independiente el 24 de Febrero de 1821 con el Plan de Iguala.',
          ru: {
            question: 'Какой была первая конституция независимой Мексики?',
            answer: 'Федеральная конституция 1824 года',
            options: [
              'Федеральная конституция 1825 года',
              'Федеральная конституция 1924 года',
              'Федеральная конституция 1834 года'
            ],
            note: 'Мексика стала независимой 24 февраля 1821 года с Планом Игала.'
          }
        },
        {
          id: '6fj4vq',
          type: 'text',
          question:
            '¿Qué sucedió con Iturbide después de lograr la independencia de México?',
          answer:
            'En 1822 Iturbide se coronó como Agustín I Emperador de México, en medio del desorden político del país y el desconocimiento de España de la independencia de México.',
          ru: {
            question:
              'Что случилось с Итурбиде после достижения независимости Мексики?',
            answer:
              'В 1822 году Итурбиде короновался как Агустин I Император Мексики, на фоне политического беспорядка в стране и непризнания Испанией независимости Мексики.'
          }
        },
        {
          id: '3vbzfd',
          type: 'choice',
          question: 'Nombre del primer emperador en México',
          answer: 'Agustin de Iturbide',
          options: ['Maximiliano de Habsburgo', 'Cuauhtémoc', 'Cesar Augusto'],
          ru: {
            question: 'Имя первого императора в Мексике',
            answer: 'Агустин де Итурбиде',
            options: ['Максимилиан Габсбург', 'Куаутемок', 'Цезарь Август']
          }
        },
        {
          id: 'l4zcle',
          type: 'choice',
          question: '¿De que se trató el Plan de Casa Mata?',
          answer:
            'Proclamado por Gral. Santa Anna para desconocer a Iturbide como emperador, anular el imperio y reinstalar el Congreso',
          options: [
            'Tratado donde México cede territorios del norte',
            'Promovido por Porfirio Diaz para evitar la reelección de Benito Juárez',
            'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna'
          ],
          note: '1 de Febrero de 1823 en la Hacienda Casamata, Veracruz.',
          ru: {
            question: 'О чем был План Каса Мата?',
            answer:
              'Провозглашен генералом Санта-Анной, чтобы не признавать Итурбиде императором, аннулировать империю и восстановить Конгресс',
            options: [
              'Договор, по которому Мексика уступает территории на севере',
              'Продвигается Порфирио Диасом, чтобы избежать переизбрания Бенито Хуареса',
              'Провозглашен Адрианом Флоренсио Вильярреалом для окончания диктатуры Санта-Анны'
            ],
            note: '1 февраля 1823 года в имении Касамата, Веракрус.'
          }
        },
        {
          id: 'msess',
          type: 'choice',
          question: '¿Quién fué el primer presidente de México?',
          answer: 'Guadalupe Victoria',
          options: [
            'Jose María Bocanegra',
            'Anastacio Bustamante',
            'Vicente Guerrero'
          ],
          ru: {
            question: 'Кто был первым президентом Мексики?',
            answer: 'Гвадалупе Виктория',
            options: [
              'Хосе Мария Боканегра',
              'Анастасио Бустаманте',
              'Висенте Герреро'
            ]
          }
        },
        {
          id: '7cxvewb',
          type: 'text',
          question: '¿Qué fué la batalla de Chapultepec?',
          answer:
            'Fue un conflicto armado que tuvo lugar el día lunes 13 de septiembre de 1847 en el cerro llamado Chapultepec. En el combate intervinieron los ejércitos de Estados Unidos y de México. El motivo de la batalla, y de la invasión en general, fue que Estados Unidos deseaba apoderarse del territorio al norte del Río Bravo, incluido Texas.',
          ru: {
            question: 'Что было битвой при Чапультепеке?',
            answer:
              'Это был вооруженный конфликт, который произошел в понедельник, 13 сентября 1847 года на холме под названием Чапультепек. В бою участвовали армии США и Мексики. Причиной битвы и вторжения в целом было желание США завладеть территорией к северу от реки Браво, включая Техас.'
          }
        },
        {
          id: '4lgmud',
          type: 'choice',
          question:
            'Cadetes militares que defendieron el Castillo de Chapultepec de la invasión norteamericana el 13 de Septiembre de 1847',
          answer: 'Niños héroes',
          options: ['Niños militares', 'Niños salvadores', 'Niños patrióticos'],
          ru: {
            question:
              'Военные кадеты, защищавшие Замок Чапультепек от американского вторжения 13 сентября 1847 года',
            answer: 'Детишки герои',
            options: ['Военные дети', 'Дети спасатели', 'Патриотические дети']
          }
        },
        {
          id: 'cpjmxi',
          type: 'choice',
          question:
            'Nombre de cadetes que enfrentaron a Estados Unidos en CDMX',
          answer: 'Niños héroes',
          options: [
            'Los liberadores',
            'Los conservadores',
            'Niños patrióticos'
          ],
          ru: {
            question: 'Имя кадетов, сражавшихся против США в Мехико',
            answer: 'Детишки герои',
            options: ['Освободители', 'Консерваторы', 'Патриотические дети']
          }
        },
        {
          id: 'sfnp9f',
          type: 'choice',
          question: '¿Dónde esta ubicado el Castillo de Chapultepec?',
          answer: 'Cuidad de México',
          options: ['Zacatecas', 'Morelos', 'Jalisco'],
          ru: {
            question: 'Где находится замок Чапультепек?',
            answer: 'Мехико',
            options: ['Сакатекас', 'Морелос', 'Халиско']
          }
        },
        {
          id: 'ku09mw',
          type: 'text',
          question: 'Nombres de los Niños Héroes',
          answer:
            'Juan Escutia\nJuan de la Barrera\nAgustín Melgar\nFernando Montes de Oca\nVicente Suárez \nFrancisco Márquez',
          ru: {
            question: 'Имена Детей Героев',
            answer:
              'Хуан Эскутия\nХуан де ла Баррера\nАгустин Мельгар\nФернандо Монтес де Ока\nВисенте Суарес\nФрансиско Маркес'
          }
        },
        {
          id: 'a66wyr',
          type: 'choice',
          question: '¿Cuál fue el niño héroe más pequeño?',
          answer: 'Francisco Márquez',
          options: ['Fernando Montes de Oca', 'Vicente Suárez', 'Juan Escutia'],
          note: '12 años.',
          ru: {
            question: 'Кто был самым молодым Детем Героем?',
            answer: 'Франсиско Маркес',
            options: [
              'Фернандо Монтес де Ока',
              'Висенте Суарес',
              'Хуан Эскутия'
            ],
            note: '12 лет.'
          }
        },
        {
          id: 'nq08b',
          type: 'choice',
          question:
            '¿Cuál es el nombre del niño héroe que se lanzó enrollado en la bandera desde el castillo?',
          answer: 'Juan Escutia',
          options: [
            'Fernando Montes de Oca',
            'Vicente Suárez',
            'Francisco Márquez'
          ],
          ru: {
            question:
              'Как зовут Дитя Героя, который бросился с замка, завернувшись в флаг?',
            answer: 'Хуан Эскутия',
            options: [
              'Фернандо Монтес де Ока',
              'Висенте Суарес',
              'Франсиско Маркес'
            ]
          }
        },
        {
          id: 'r8zybd',
          type: 'choice',
          question: 'Tratado de Guadalupe Hidalgo',
          answer:
            'Tratado en el que México cede los territorios de California, Nuevo México, Arizona y Nevada',
          options: [
            'No proliferación de armas nucleares',
            'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
            'Documento en el que se acuerda la Independencia de México'
          ],
          note: 'Firmado el 2 de febrero de 1848, poniendo fin a la guerra contra USA.',
          ru: {
            question: 'Гуадалупе-Идальго договор',
            answer:
              'Договор, по которому Мексика уступает территории Калифорнии, Нью-Мексико, Аризоны и Невады',
            options: [
              'Не распространение ядерного оружия',
              'Провозглашен Адрианом Флоренсио Вильярреалом для окончания диктатуры Санта-Анны',
              'Документ, по которому согласована Независимость Мексики'
            ],
            note: 'Подписан 2 февраля 1848 года, положив конец войне с США.'
          }
        },
        {
          id: 'seq0o',
          type: 'choice',
          question:
            '¿Cuál fue el tratado que puso fin a la guerra con Estados Unidos?',
          answer: 'Tratado Guadalupe Hidalgo',
          options: ['Plan de Tuxtepec', 'Plan de Noria', 'Plan de Ayutla'],
          ru: {
            question: 'Какой договор положил конец войне с США?',
            answer: 'Гуадалупе-Идальго договор',
            options: ['План Тустепек', 'План Нория', 'План Аютла']
          }
        },
        {
          id: '6lbj8b',
          type: 'choice',
          question: '¿De qué se trató el Plan de Ayutla?',
          answer:
            'Proclamado por Adrián Florencio Villareal, para dar fin a la dictadura de Antonio López de Santa Anna',
          options: [
            'No proliferación de armas nucleares',
            'Documento en el que se acuerda la Independencia de México',
            'Promovido por Porfirio Diaz para evitar la reelección de Benito Juárez'
          ],
          note: '1 de marzo 1854.',
          ru: {
            question: 'О чем был План Аютла?',
            answer:
              'Провозглашен Адрианом Флоренсио Вильярреалом, чтобы положить конец диктатуре Антонио Лопеса де Санта Анны',
            options: [
              'Не распространение ядерного оружия',
              'Документ, по которому согласована Независимость Мексики',
              'Продвигается Порфирио Диасом, чтобы избежать переизбрания Бенито Хуареса'
            ],
            note: '1 марта 1854 года.'
          }
        },
        {
          id: '56sg5n',
          type: 'choice',
          question:
            '¿Quién derrotó al Gral. Santa Anna en la Batalla de San Jacinto el 21 de Abril de 1836?',
          answer: 'Gral. Samuel Houston (Guerra contra los EEUU por Texas)',
          options: [
            'Gral. George C. Marshall (Guerra contra Francia)',
            'Gral. Douglas MacArthur (Guerra contra Inglaterra)',
            'Gral. Henry H. Arnold (Guerra contra EEUU)'
          ],
          ru: {
            question:
              'Кто победил генерала Санта Анну в битве при Сан-Хасинто 21 апреля 1836 года?',
            answer: 'Генерал Самуэль Хьюстон (Война против США за Техас)',
            options: [
              'Генерал Джордж К. Маршалл (Война против Франции)',
              'Генерал Дуглас Макартур (Война против Англии)',
              'Генерал Генри Х. Арнольд (Война против США)'
            ]
          }
        },
        {
          id: 'o0eo08',
          type: 'choice',
          question: 'La Guerra de Reforma fue entre',
          answer: 'Liberales y Conservadores',
          options: [
            'México y Francia',
            'Comunistas e imperialistas',
            'Cuidadanos y el gobierno'
          ],
          note: 'Ganando los liberales (Benito Juárez) también llamada guerra de los 3 años.',
          ru: {
            question: 'Реформенная война была между',
            answer: 'Либералами и Консерваторами',
            options: [
              'Мексикой и Францией',
              'Коммунистами и империалистами',
              'Гражданами и правительством'
            ],
            note: 'Выиграли либералы (Бенито Хуарес), также называемая войной трех лет.'
          }
        },
        {
          id: 'vav3c',
          type: 'choice',
          question: '¿Cuál fue la guerra de los 3 años?',
          answer: 'La Guerra de Reforma (1857 - 1860)',
          options: [
            'La Guerra de la Independencia (1810 - 1813)',
            'La Última Guerra (1960 - 1963)',
            'La Guerra Liberal (1850 - 1853)'
          ],
          ru: {
            question: 'Что было войной трех лет?',
            answer: 'Реформенная война (1857 - 1860)',
            options: [
              'Война за независимость (1810 - 1813)',
              'Последняя война (1960 - 1963)',
              'Либеральная война (1850 - 1853)'
            ]
          }
        },
        {
          id: '3sx4kq',
          type: 'choice',
          question:
            'Grupo que promovió el desarrollo económico sin afectar la iglesia y los militares',
          answer: 'Conservadores',
          options: ['Liberales', 'Imparciales', 'Cristianos'],
          ru: {
            question:
              'Группа, которая продвигала экономическое развитие, не затрагивая церковь и военных',
            answer: 'Консерваторы',
            options: ['Либералы', 'Беспристрастные', 'Христиане']
          }
        },
        {
          id: '7gm5zn',
          type: 'choice',
          question:
            'Grupo que promovió la integración nacional y abrió camino al capitalismo',
          answer: 'Liberales (Benito Juárez)',
          options: ['Conservadores', 'Cristianos', 'Franceses'],
          ru: {
            question:
              'Группа, которая продвигала национальную интеграцию и открыла путь к капитализму',
            answer: 'Либералы (Бенито Хуарес)',
            options: ['Консерваторы', 'Христиане', 'Французы']
          }
        },
        {
          id: 'qzmya6',
          type: 'choice',
          question: '¿Quién fue Benito Pablo Juárez García?',
          answer:
            'Presidente de México de 1857 a 1872 que promovió las Leyes de Reforma',
          options: [
            'Presidente de México de 1857 a 1872 que promovió el TLC',
            'Presidente de México de 1957 a 1963 que promovió el Plan de La Noria',
            'Presidente de México de 1860 a 1866 que promovió el Plan de Tuxtepec'
          ],
          ru: {
            question: 'Кто был Бенито Пабло Хуарес Гарсия?',
            answer:
              'Президент Мексики с 1857 по 1872 год, который продвигал Законы о реформах',
            options: [
              'Президент Мексики с 1857 по 1872 год, который продвигал НАФТА',
              'Президент Мексики с 1957 по 1963 год, который продвигал План Нория',
              'Президент Мексики с 1860 по 1866 год, который продвигал План Тустепек'
            ]
          }
        },
        {
          id: 'dcpl1',
          type: 'choice',
          question:
            '¿Cómo se conocen las leyes impulsadas por  Juan Álvarez, Ignacio Comonfort y Benito Juárez para separar a la Iglesia del Estado?',
          answer: 'Leyes de Reforma',
          options: [
            'Nuevas Leyes',
            'Leyes Separatistas',
            'Sentimientos de la Nacion'
          ],
          ru: {
            question:
              'Как называются законы, продвигаемые Хуаном Альваресом, Игнасио Комонфортом и Бенито Хуаресом для отделения церкви от государства?',
            answer: 'Законы о реформах',
            options: ['Новые законы', 'Законы сепаратистов', 'Чувства Нации']
          }
        },
        {
          id: 'vid4qi',
          type: 'choice',
          question:
            'Presidente mexicano al que se le atribuye la frase “Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz"',
          answer: 'Benito Juárez',
          options: [
            'Jose María Bocanegra',
            'Anastacio Bustamante',
            'Vicente Guerrero'
          ],
          ru: {
            question:
              'Мексиканский президент, которому приписывают фразу «Между людьми, как между нациями, уважение к чужим правам есть мир»',
            answer: 'Бенито Хуарес',
            options: [
              'Хосе Мария Боканегра',
              'Анастасио Бустаманте',
              'Висенте Герреро'
            ]
          }
        },
        {
          id: 'eyzvo',
          type: 'choice',
          question: '¿A quién le llaman el benemérito de las américas?',
          answer: 'Benito Juárez',
          options: [
            'Guadalupe Victoria',
            'Anastacio Bustamante',
            'Vicente Guerrero'
          ],
          ru: {
            question: 'Кого называют благодетелем Америки?',
            answer: 'Бенито Хуарес',
            options: [
              'Гвадалупе Виктория',
              'Анастасио Бустаманте',
              'Висенте Герреро'
            ]
          }
        },
        {
          id: 'hj9bub',
          type: 'text',
          question: 'Nombre las leyes que contemplaban libertad de imprenta',
          answer:
            'Ley de Imprenta o Ley Lares fue promulgada el 23 de Abril de 1853. Ley Lafragua o Libertad de Imprenta que entró en vigor el 28 de Diciembre de 1855.',
          ru: {
            question: 'Назовите законы, предусматривающие свободу печати',
            answer:
              'Закон о печати или Закон Лареса был принят 23 апреля 1853 года. Закон Лафрага или Свобода печати вступил в силу 28 декабря 1855 года.'
          }
        },
        {
          id: '0wfh8d',
          type: 'choice',
          question: 'Fecha en que se estableció el primer registro civil',
          answer: '28 de Julio de 1859',
          options: [
            '28 de Diciembre de 1750',
            '5 de Marzo de 1900',
            '28 de Noviembre de 1889'
          ],
          ru: {
            question: 'Дата учреждения первого гражданского регистра',
            answer: '28 июля 1859 года',
            options: [
              '28 декабря 1750 года',
              '5 марта 1900 года',
              '28 ноября 1889 года'
            ]
          }
        },
        {
          id: 's5n1y',
          type: 'choice',
          question: 'Fecha en que se expidió la primera acta de nacimiento',
          answer: '10 de noviembre de 1859',
          options: [
            '15 de Diciembre de 1559',
            '20 de Enero de 1779',
            '05 de noviembre de 1959'
          ],
          ru: {
            question: 'Дата выдачи первого свидетельства о рождении',
            answer: '10 ноября 1859 года',
            options: [
              '15 декабря 1559 года',
              '20 января 1779 года',
              '5 ноября 1959 года'
            ]
          }
        },
        {
          id: 'ves8i7',
          type: 'choice',
          question: '¿Cuándo fue la Batalla de Puebla?',
          answer: '5 de mayo de 1862',
          options: [
            '15 de mayo de 1862',
            '20 de mayo de 1962',
            '25 de mayo de 1762'
          ],
          ru: {
            question: 'Когда была битва при Пуэбле?',
            answer: '5 мая 1862 года',
            options: [
              '15 мая 1862 года',
              '20 мая 1962 года',
              '25 мая 1762 года'
            ]
          }
        },
        {
          id: '3kf1de',
          type: 'choice',
          question: '¿Qué fué la Batalla de Puebla?',
          answer:
            'Conflicto armado liderado por Ignacio Zaragoza contra la segunda intervención francesa, siendo México vencedor',
          options: [
            'Batalla comandada por el general Francisco Xavier Mina lograron la victoria ante las fuerzas realistas',
            'Batalla comandada por Ignacio López Rayón fueron derrotados en combate por las fuerzas realistas del Gral. Emparan',
            'Fue una victoria militar de los realistas sobre las fuerzas insurgentes mexicanas durante la Guerra de Independencia'
          ],
          note: 'Más tarde con un nuevo ejército los franceses vencen a los mexicanos y establecen el segundo imperio bajo el mando de Maximiliano de Habsburgo.',
          ru: {
            question: 'Что было битвой при Пуэбле?',
            answer:
              'Вооруженный конфликт под руководством Игнасио Сарагосы против второй французской интервенции, где Мексика одержала победу',
            options: [
              'Битва под командованием генерала Франсиско Ксавьера Мины, одержавшего победу над роялистами',
              'Битва под командованием Игнасио Лопеса Района, потерпевшего поражение в бою от роялистов генерала Эмпарана',
              'Военная победа роялистов над мексиканскими повстанческими силами во время войны за независимость'
            ],
            note: 'Позже с новой армией французы побеждают мексиканцев и устанавливают второй имперский режим под командованием Максимилиана Габсбурга.'
          }
        },
        {
          id: '3f17tc',
          type: 'choice',
          question: '¿Quién fué el emperador del segundo imperio mexicano?',
          answer: 'Maximiliano de Habsburgo',
          options: ['Agustín de Iturbide', 'Cuauhtémoc', 'Cesar Augusto'],
          ru: {
            question: 'Кто был императором второй мексиканской империи?',
            answer: 'Максимилиан Габсбург',
            options: ['Агустин де Итурбиде', 'Куаутемок', 'Цезарь Август']
          }
        },
        {
          id: 'fmrbfj',
          type: 'choice',
          question:
            '¿Quién hizo el trazo de Paseo de la Reforma y cómo se llamó?',
          answer: 'Maximiliano de Habsburgo, se llamó Paseo de la Emperatriz',
          options: [
            'Agustín de Iturbide, se llamó Paseo del Emperador',
            'Cuauhtémoc, se llamó Paseo del Imperio',
            'Guadalupe Victoria, se llamó Paseo Guadalupe'
          ],
          ru: {
            question:
              'Кто разработал проект Paseo de la Reforma и как он назывался?',
            answer: 'Максимилиан Габсбург, назывался Paseo de la Emperatriz',
            options: [
              'Агустин де Итурбиде, назывался Paseo del Emperador',
              'Куаутемок, назывался Paseo del Imperio',
              'Гвадалупе Виктория, назывался Paseo Guadalupe'
            ]
          }
        },
        {
          id: 'tb600h',
          type: 'choice',
          question: '¿Cuándo y dónde murió Maximiliano de Habsburgo?',
          answer: '19 de Junio de 1867 en Querétaro',
          options: [
            '10 de Diciembre de 1897 en Zacatecas',
            '25 de Enero de 1880 en Durango',
            '15 de Marzo de 1767 en Coahuila'
          ],
          ru: {
            question: 'Когда и где умер Максимилиан Габсбург?',
            answer: '19 июня 1867 года в Керетаро',
            options: [
              '10 декабря 1897 года в Сакатекасе',
              '25 января 1880 года в Дуранго',
              '15 марта 1767 года в Коауиле'
            ]
          }
        },
        {
          id: '1079pa',
          type: 'choice',
          question:
            '¿Cuáles fueron los generales apresados y fusilados con Maximiliano de Habsburgo?',
          answer: 'Miguel Miramón y Tomas Mejía',
          options: [
            'Pedro Miramón y Juan Mejía',
            'Ignacio Miramón y Pedro Mejía',
            'Miguel Hidalgo y Jesus María Morelos'
          ],
          ru: {
            question:
              'Какие генералы были арестованы и расстреляны вместе с Максимилианом Габсбургом?',
            answer: 'Мигель Мирамон и Томас Мехия',
            options: [
              'Педро Мирамон и Хуан Мехия',
              'Игнасио Мирамон и Педро Мехия',
              'Мигель Идальго и Хесус Мария Морелос'
            ]
          }
        },
        {
          id: '9qsob7',
          type: 'choice',
          question:
            '¿Quién asumió la presidencia después de la muerte de Benito Juárez?',
          answer: 'Sebastián Lerdo de Tejada',
          options: [
            'Jose María Bocanegra',
            'Anastacio Bustamante',
            'Vicente Guerrero'
          ],
          note: 'Era el presidente de la Suprema Corte de Justicia.',
          ru: {
            question: 'Кто занял пост президента после смерти Бенито Хуареса?',
            answer: 'Себастьян Лердо де Техада',
            options: [
              'Хосе Мария Боканегра',
              'Анастасио Бустаманте',
              'Висенте Герреро'
            ],
            note: 'Он был председателем Верховного суда.'
          }
        },
        {
          id: '43twum',
          type: 'choice',
          question:
            '¿En qué año comenzaron las obras del primer ferrocarril en México?',
          answer: '1842',
          options: ['1942', '1800', '1835'],
          ru: {
            question:
              'В каком году начались работы по строительству первой железной дороги в Мексике?',
            answer: '1842',
            options: ['1942', '1800', '1835']
          }
        },
        {
          id: 'qbo78',
          type: 'choice',
          question:
            '¿En qué año se inauguró el primer tramo ferroviario en México (Veracruz - El Molino)?',
          answer: '1850',
          options: ['1860 ', '1970', '1830'],
          ru: {
            question:
              'В каком году был открыт первый железнодорожный участок в Мексике (Веракрус - Эль Молино)?',
            answer: '1850',
            options: ['1860', '1970', '1830']
          }
        },
        {
          id: 't6co3t',
          type: 'choice',
          question:
            'Estado que declara su independencia de México en 1841 y se reincorpora al mismo en 1848',
          answer: 'Yucatán',
          options: ['Quintana Roo', 'Campeche', 'Veracruz'],
          ru: {
            question:
              'Штат, объявивший независимость от Мексики в 1841 году и вернувшийся в ее состав в 1848 году',
            answer: 'Юкатан',
            options: ['Кинтана-Роо', 'Кампече', 'Веракрус']
          }
        },
        {
          id: 'msd6vq',
          type: 'choice',
          question:
            'México perdió la mitad de su territorio a mediados del siglo XIX, como consecuencia del enfrentamiento con',
          answer: 'USA',
          options: ['Belice', 'Guatemala', 'Francia'],
          ru: {
            question:
              'Мексика потеряла половину своей территории в середине XIX века в результате столкновения с',
            answer: 'США',
            options: ['Белиз', 'Гватемала', 'Франция']
          }
        },
        {
          id: 'tno9tc',
          type: 'choice',
          question:
            'Batallón extranjero que participó y ayudó a México en la Guerra contra EEUU',
          answer: 'Batallón de San Patricio',
          options: [
            'Batallón de San Cipriano',
            'Batallón de Santiago el Mayor',
            'Batallón de San Nicolás'
          ],
          note: 'Fué una unidad militar compuesta por cientos de inmigrantes europeos (alemanes, irlandeses y estadounidenses) que lucharon en el ejército mexicano contra la invasión de los Estados Unidos, de 1846 a 1848. Tomaron el nombre del Santo Patrono de Irlanda.',
          ru: {
            question:
              'Иностранный батальон, участвовавший и помогавший Мексике в войне против США',
            answer: 'Батальон Святого Патрика',
            options: [
              'Батальон Святого Киприана',
              'Батальон Святого Иакова',
              'Батальон Святого Николая'
            ],
            note: 'Это было воинское подразделение, состоящее из сотен европейских иммигрантов (немцев, ирландцев и американцев), которые сражались в мексиканской армии против вторжения США с 1846 по 1848 год. Они взяли имя святого покровителя Ирландии.'
          }
        },
        {
          id: 'ftiuhn',
          type: 'choice',
          question: '¿Quién fué Porfirio Díaz?',
          answer:
            'Militar Mexicano que se destacó en la batalla del 5 de mayo en Puebla contra los franceses, posteriormente presidente de México',
          options: [
            'Conocido por promover la lucha de independencia',
            'Autor de las famosas Catrinas',
            'Lider de la victoria militar de los realistas sobre las fuerzas insurgentes mexicanas'
          ],
          ru: {
            question: 'Кто был Порфирио Диас?',
            answer:
              'Мексиканский военный, отличившийся в битве 5 мая в Пуэбле против французов, позднее президент Мексики',
            options: [
              'Известен продвижением борьбы за независимость',
              'Автор знаменитых Катринас',
              'Лидер военной победы роялистов над мексиканскими повстанческими силами'
            ]
          }
        },
        {
          id: 'tycqlp',
          type: 'choice',
          question: 'Nombre completo de Porfirio Diaz',
          answer: 'Jose de la Cruz Porfirio Diaz Mori',
          options: [
            'Jose Porfirio Cruz Diaz Rodriguez',
            'Jose Manuel Porfirio Gómez Diaz',
            'Juan Jose Porfirio Diaz Méndez'
          ],
          ru: {
            question: 'Полное имя Порфирио Диас',
            answer: 'Хосе де ла Крус Порфирио Диас Мори',
            options: [
              'Хосе Порфирио Крус Диас Родригес',
              'Хосе Мануэль Порфирио Гомес Диас',
              'Хуан Хосе Порфирио Диас Мендес'
            ]
          }
        },
        {
          id: '7yzg3j',
          type: 'choice',
          question: '¿De que se trató el Plan de Tuxtepec?',
          answer:
            'Plan elaborado por Porfirio Diaz para destituir al gobierno de Sebastián Lerdo de Tejada y evitar su reelección',
          options: [
            'No proliferación de armas nucleares',
            'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
            'Plan promovido por Porfirio Diaz para evitar la reelección de Benito Juárez'
          ],
          note: '10 de enero de 1876, se firmó en Tuxtepec, Oaxaca.',
          ru: {
            question: 'О чем был План Тустепек?',
            answer:
              'План, разработанный Порфирио Диасом для свержения правительства Себастьяна Лердо де Техады и предотвращения его переизбрания',
            options: [
              'Не распространение ядерного оружия',
              'Провозглашен Адрианом Флоренсио Вильярреалом для окончания диктатуры Санта-Анны',
              'План, продвигаемый Порфирио Диасом для предотвращения переизбрания Бенито Хуареса'
            ],
            note: '10 января 1876 года, подписан в Тустепеке, Оахака.'
          }
        },
        {
          id: '38o62c',
          type: 'choice',
          question:
            '¿Cómo se llamó el plan que promovió Porfirio Diaz para evitar la reelección de Benito Juárez?',
          answer: 'Plan de La Noria o Revolución de La Noria',
          options: ['Plan de Iguala', 'Plan de Ayutla', 'Plan de Tuxtepec'],
          note: '1871.',
          ru: {
            question:
              'Как назывался план, продвигаемый Порфирио Диасом для предотвращения переизбрания Бенито Хуареса?',
            answer: 'План Ла Нория или Революция Ла Нория',
            options: ['План Игала', 'План Аютла', 'План Тустепек'],
            note: '1871 год.'
          }
        },
        {
          id: '803vqf',
          type: 'choice',
          question:
            'Movimiento político-militar dirigido por Porfirio Díaz en 1871 para impedir la reelección de Benito Juárez',
          answer: 'Plan de Noria',
          options: ['Plan de Tuxtepec', 'Plan de Iguala', 'Plan de Ayutla'],
          ru: {
            question:
              'Политико-военное движение, возглавляемое Порфирио Диасом в 1871 году для предотвращения переизбрания Бенито Хуареса',
            answer: 'План Ла Нория',
            options: ['План Тустепек', 'План Игала', 'План Аютла']
          }
        },
        {
          id: 'rdbf3f',
          type: 'choice',
          question:
            'Presidente mexicano que duró más de treinta años en el poder',
          answer: 'Porfirio Díaz',
          options: ['Benito Juárez', 'Guadalupe Victoria', 'Vicente Fox'],
          note: 'Duró 34 años.',
          ru: {
            question:
              'Мексиканский президент, который пробыл у власти более тридцати лет',
            answer: 'Порфирио Диас',
            options: ['Бенито Хуарес', 'Гвадалупе Виктория', 'Висенте Фокс'],
            note: 'Пробыл 34 года.'
          }
        },
        {
          id: 'a9p27c',
          type: 'choice',
          question: 'El Porfiriato se conoce como una época de extensión de',
          answer: 'Las vías férreas',
          options: ['Las vías aéreas', 'Las carreteras', 'La tecnología'],
          ru: {
            question: 'Порфириат известен как эпоха расширения',
            answer: 'Железных дорог',
            options: ['Воздушных путей', 'Шоссейных дорог', 'Технологий']
          }
        },
        {
          id: '8mlqzf',
          type: 'choice',
          question: 'Etapa pre-revolucionaria',
          answer: '1876 a 1910 (El Porfiriato)',
          options: [
            '1976 a 1980 (Maderismo)',
            '1929 a 1932 (Cardenismo)',
            '1913 a 1920 (Constitucionalismo)'
          ],
          ru: {
            question: 'Предреволюционный этап',
            answer: '1876 по 1910 год (Порфириат)',
            options: [
              '1976 по 1980 год (Мадеризм)',
              '1929 по 1932 год (Карденизм)',
              '1913 по 1920 год (Конституционализм)'
            ]
          }
        },
        {
          id: 'jhm84v',
          type: 'choice',
          question: 'Periódico revolucionario en la época en el Porfiriato',
          answer: 'El hijo de Ahuizote',
          options: [
            'El hijo de su mamá',
            'El hijo de Ajolote',
            'La Gaceta de México'
          ],
          ru: {
            question: 'Революционная газета в эпоху Порфириата',
            answer: 'El hijo de Ahuizote',
            options: ['Сын своей мамы', 'Сын Ажолоте', 'Газета Мексики']
          }
        },
        {
          id: '4vc9n',
          type: 'text',
          question: 'Obras más importantes del Porfiriato',
          answer:
            'El Teléfono\nEl Sistema Ferroviario\nEl Teatro de Bellas Artes\nEl Ángel de la Independencia\nEl Palacio Postal',
          ru: {
            question: 'Самые важные произведения эпохи Порфириата',
            answer:
              'Телефон\nЖелезнодорожная система\nТеатр изящных искусств\nАнгел Независимости\nПочтовый дворец'
          }
        },
        {
          id: 'dmvcb9',
          type: 'choice',
          question:
            'Contribución tecnológica al país durante el gobierno de Porfirio Diaz',
          answer: 'El teléfono',
          options: ['El fonógrafo', 'El tranvía', 'El gran canal'],
          note: 'El 16 de Septiembre de 1878. En un tendido que iba desde el Castillo Chapultepec hasta Palacio Nacional.',
          ru: {
            question:
              'Технологический вклад в страну во время правления Порфирио Диаса',
            answer: 'Телефон',
            options: ['Фонограф', 'Трамвай', 'Большой канал'],
            note: '16 сентября 1878 года. В прокладке, простирающейся от замка Чапультепек до Национального дворца.'
          }
        },
        {
          id: '0l4ws9',
          type: 'choice',
          question: '¿Que inauguró Porfirio Diaz el 17 de febrero de 1907?',
          answer: 'El Palacio Postal',
          options: ['El tranvía', 'El gran canal', 'El cine'],
          ru: {
            question: 'Что открыл Порфирио Диас 17 февраля 1907 года?',
            answer: 'Почтовый дворец',
            options: ['Трамвай', 'Большой канал', 'Кино']
          }
        },
        {
          id: 'dtuuwm',
          type: 'choice',
          question:
            'Forma de asesinato común en el porfiato o metodo de fusilamineto usado en el porfiriato',
          answer: 'Ley de fuga',
          options: ['Ley de fusilamiento', 'Ley de Porfirio', 'Ley de calles'],
          ru: {
            question:
              'Обычная форма убийства в эпоху Порфириата или метод расстрела, использовавшийся в эпоху Порфириата',
            answer: 'Закон о побеге',
            options: ['Закон о расстреле', 'Закон Порфирио', 'Закон улиц']
          }
        },
        {
          id: 'kumpd',
          type: 'choice',
          question: '¿A que se conoce como la Ley de Fuga?',
          answer: 'Un tipo de ejecución usada en el Porfiriato',
          options: [
            'Expulsión del país usada en el Porfiriato',
            'Castigo por no pagar impuestos',
            'Deportación de obreros en el Porfiriato'
          ],
          note: 'Consistía en hacerle creer a un prisionero que podía escapar para asesinarlo por la espalda.',
          ru: {
            question: 'Что известно как Закон о побеге?',
            answer: 'Тип казни, использовавшийся в эпоху Порфириата',
            options: [
              'Изгнание из страны, использовавшееся в эпоху Порфириата',
              'Наказание за неуплату налогов',
              'Депортация рабочих в эпоху Порфириата'
            ],
            note: 'Заключалось в том, чтобы заставить заключенного поверить, что он может сбежать, чтобы убить его в спину.'
          }
        },
        {
          id: 'wlitd',
          type: 'choice',
          question:
            '¿Que presidente dijo “Tan lejos de Dios y tan cerca de Estados Unidos”?',
          answer: 'Porfirio Díaz',
          options: ['Vicente Fox', 'Benito Juárez', 'Francisco I. Madero'],
          ru: {
            question:
              'Какой президент сказал: «Так далеко от Бога и так близко к Соединенным Штатам»?',
            answer: 'Порфирио Диас',
            options: ['Висенте Фокс', 'Бенито Хуарес', 'Франсиско И. Мадеро']
          }
        },
        {
          id: 'kk4wt',
          type: 'choice',
          question: '¿Cuando se inauguró el Ángel de la independencia?',
          answer: '16 de septiembre de 1910',
          options: [
            '05 de septiembre de 1910',
            '20 de septiembre de 1910',
            '10 de septiembre de 1910'
          ],
          ru: {
            question: 'Когда был открыт Ангел независимости?',
            answer: '16 сентября 1910 года',
            options: [
              '5 сентября 1910 года',
              '20 сентября 1910 года',
              '10 сентября 1910 года'
            ]
          }
        },
        {
          id: '97ib7',
          type: 'choice',
          question: '¿En qué año se fundó la UNAM?',
          answer: 'El 22 de Septiembre de 1910',
          options: [
            'El 22 de Diciembre de 1910',
            'El 22 de Febrero de 1910',
            'El 15 de Octubre de 1910'
          ],
          note: 'Por Justo Sierra durante el gobierno Porfirio Díaz.',
          ru: {
            question: 'В каком году был основан УНАМ?',
            answer: '22 сентября 1910 года',
            options: [
              '22 декабря 1910 года',
              '22 февраля 1910 года',
              '15 октября 1910 года'
            ],
            note: 'Хусто Сьерра во время правления Порфирио Диаса.'
          }
        },
        {
          id: '1cmmne',
          type: 'choice',
          question: '¿Cuál es la universidad más antigua de México?',
          answer: 'UNAM',
          options: ['BUAP', 'UGTO', 'UDG'],
          ru: {
            question: 'Какой университет является самым старым в Мексике?',
            answer: 'УНАМ',
            options: ['БУАП', 'УГТО', 'УДГ']
          }
        },
        {
          id: 'oxvm77',
          type: 'choice',
          question: 'Lema de la UNAM',
          answer: 'Por mi raza hablará el espíritu',
          options: [
            'Por mi raza hablará la gente',
            'Por mi espíritu',
            'Por mi raza hablarán mañana'
          ],
          ru: {
            question: 'Девиз УНАМ',
            answer: 'За мою расу будет говорить дух',
            options: [
              'За мою расу будет говорить народ',
              'За мой дух',
              'За мою расу будут говорить завтра'
            ]
          }
        },
        {
          id: 'pf7qtc',
          type: 'choice',
          question: '¿Quién dijo la frase “Por mi raza hablará el espíritu”?',
          answer: 'Jose Vasconcelos',
          options: [
            'José María Pino Suárez',
            'Ignacio García Téllez',
            'Justo Sierra'
          ],
          ru: {
            question: 'Кто сказал фразу «За мою расу будет говорить дух»?',
            answer: 'Хосе Васконселос',
            options: [
              'Хосе Мария Пино Суарес',
              'Игнасио Гарсия Теллес',
              'Хусто Сьерра'
            ]
          }
        },
        {
          id: '3sn3g',
          type: 'choice',
          question:
            '¿Quién dijo la frase “Yo no vengo a trabajar por la universidad, sino a pedir a la universidad que trabaje por el pueblo”?',
          answer: 'Jose Vasconcelos',
          options: [
            'José María Pino Suárez',
            'Ignacio García Téllez',
            'Justo Sierra'
          ],
          ru: {
            question:
              'Кто сказал фразу «Я не пришел работать ради университета, я пришел попросить университет работать ради народа»?',
            answer: 'Хосе Васконселос',
            options: [
              'Хосе Мария Пино Суарес',
              'Игнасио Гарсия Теллес',
              'Хусто Сьерра'
            ]
          }
        },
        {
          id: 'veft0m',
          type: 'choice',
          question: '¿Qué presidente le dio autonomía a la UNAM?',
          answer: 'Emilio Portes Gil',
          options: [
            'Pascual Ortiz Rubio',
            'Abelardo Rodríguez Luján',
            'Lázaro Cárdenas del Río'
          ],
          ru: {
            question: 'Какой президент дал автономию УНАМ?',
            answer: 'Эмилио Портес Хиль',
            options: [
              'Паскуаль Ортис Рубио',
              'Абелардо Родригес Лухан',
              'Ласаро Карденас дель Рио'
            ]
          }
        }
      ]
    },
    {
      id: 'okkktn',
      title: 'Historia: México Contemporáneo',
      ru: {
        title: 'История: Современная Мексика'
      },
      questions: [
        {
          id: 'dudawe',
          type: 'choice',
          question: '¿Quién es la primera mujer mexicana en viajar al espacio?',
          answer: 'Katya Echazarreta',
          options: ['Margarita Salas', 'Teresa Romero', 'Lisa Gonzalez'],
          ru: {
            question: 'Кто первая мексиканская женщина, полетевшая в космос?',
            answer: 'Катя Эчазаррета',
            options: ['Маргарита Салас', 'Тереза Ромеро', 'Лиза Гонсалес']
          }
        },
        {
          id: '8m305s',
          type: 'choice',
          question:
            '¿Cuál de las siguientes siglas corresponde a un instituto de salud?',
          answer: 'IMSS',
          options: ['PROFECO', 'INM', 'ACNUR', 'ONU', 'CFE', 'COMAR'],
          ru: {
            question:
              'Какая из следующих аббревиатур относится к институту здравоохранения?',
            answer: 'IMSS',
            options: ['PROFECO', 'INM', 'ACNUR', 'ONU', 'CFE', 'COMAR']
          }
        },
        {
          id: 'g4zg7d',
          type: 'choice',
          question: '¿Qué productos exporta México?',
          answer: 'Aceite crudo de petróleo, autopartes y productos de cobre',
          options: [
            'Plata, oro y papel',
            'Textiles, zapatos y juguetes',
            'Gasolina, gas butano y productos agrícolas'
          ],
          ru: {
            question: 'Какие продукты экспортирует Мексика?',
            answer: 'Сырая нефть, автозапчасти и медные изделия',
            options: [
              'Серебро, золото и бумага',
              'Текстиль, обувь и игрушки',
              'Бензин, бутановый газ и сельскохозяйственная продукция'
            ]
          }
        },
        {
          id: '7gu0ni',
          type: 'choice',
          question: '¿Qué lugar ocupa México en la economía mundial?',
          answer: '16',
          options: ['20', '25', '28'],
          ru: {
            question: 'Какое место занимает Мексика в мировой экономике?',
            answer: '16',
            options: ['20', '25', '28']
          }
        },
        {
          id: 'dzq5dm',
          type: 'choice',
          question: '¿Qué fué la Ley de calles?',
          answer:
            'Ley expedida para controlar y limitar el culto católico en México, oficialmente llamada ley de tolerancia de cultos, elaborada durante la presidencia de Plutarco Elías Calles',
          options: [
            'Un tipo de ejecución usada en el Porfiriato',
            'Ley para cobrar impuestos durante la presidencia de Plutarco Elías Calles',
            'Ley para cobrar a quienes usaran las principales calles de la cuidad en carruajes'
          ],
          ru: {
            question: 'Что такое Закон о улицах?',
            answer:
              'Закон, изданный для контроля и ограничения католического культа в Мексике, официально называемый законом о терпимости культов, разработанный во время президентства Плутарко Элиаса Кальеса',
            options: [
              'Тип казни, используемой во времена Порфириато',
              'Закон о взимании налогов во время президентства Плутарко Элиаса Кальеса',
              'Закон о взимании платы с тех, кто использовал главные улицы города в экипажах'
            ]
          }
        },
        {
          id: '0knhfh',
          type: 'choice',
          question: '¿Qué fué la Guerra Cristera?',
          answer:
            'Conflicto armado de 1926 a 1929 entre el gobierno y católicos que estaban en contra de la Ley Calles',
          options: [
            'Enfrentamiento armado con Inglaterra por territorio mexicano',
            'Guerra civil que aconteció en México del año de 1858 a 1861.​La nación estaba dividida entre Liberales y Conservadores',
            'Conflicto armado contra EEUU por Texas'
          ],
          ru: {
            question: 'Что такое Кристеро?',
            answer:
              'Вооруженный конфликт с 1926 по 1929 год между правительством и католиками, выступавшими против Закона Кальеса',
            options: [
              'Вооруженное столкновение с Англией за мексиканскую территорию',
              'Гражданская война, происходившая в Мексике с 1858 по 1861 год. Страна была разделена между либералами и консерваторами',
              'Вооруженный конфликт с США за Техас'
            ]
          }
        },
        {
          id: 'id3fo',
          type: 'choice',
          question: '¿Quién creó el Banco de México en 1925 (Banco Nacional)?',
          answer: 'Plutarco Elias Calles',
          options: [
            'Alvaro Obregón',
            'Emilio Portes Gil',
            'José Lopez Portillo'
          ],
          ru: {
            question:
              'Кто создал Банк Мексики в 1925 году (Национальный банк)?',
            answer: 'Плутарко Элиас Кальес',
            options: [
              'Альваро Обрегон',
              'Эмилио Портес Хиль',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'xjf1v9',
          type: 'choice',
          question: '¿Quién fundó el Partido Nacional Revolucionario en 1929?',
          answer: 'Plutarco Elias Calles',
          options: [
            'Alvaro Obregón',
            'Emilio Portes Gil',
            'José Lopez Portillo'
          ],
          note: 'Hoy es el PRI desde 1946',
          ru: {
            question:
              'Кто основал Национальную революционную партию в 1929 году?',
            answer: 'Плутарко Элиас Кальес',
            options: [
              'Альваро Обрегон',
              'Эмилио Портес Хиль',
              'Хосе Лопес Портильо'
            ],
            note: 'Сегодня это PRI с 1946 года'
          }
        },
        {
          id: 'r8ll9',
          type: 'choice',
          question: '¿Cuándo fue el periodo conocido como el Maximato?',
          answer: '1928 - 1934',
          options: ['1920 - 1930', '1910 - 1920', '1958 - 1978'],
          note: 'Se llama así por Plutarco Elias Calles, dado que era conocido como el "Máximo de la revolución" y fue quien más influencia tenía en ese periodo. Fue un período de presidentes interinos derivados del asesinato de Álvaro Obregón que termino con la elección de Lázaro Cárdenas.',
          ru: {
            question: 'Когда был период, известный как Максимато?',
            answer: '1928 - 1934',
            options: ['1920 - 1930', '1910 - 1920', '1958 - 1978'],
            note: 'Так назван в честь Плутарко Элиаса Кальеса, так как его называли "Максимум революции", и он был наиболее влиятельным в этот период. Это был период временных президентов, возникший после убийства Альваро Обрегона и закончившийся выборами Лазаро Карденаса.'
          }
        },
        {
          id: '8oqet',
          type: 'choice',
          question: '¿Qué presidente fué asesinado en 1928?',
          answer: 'Álvaro Obregón',
          options: [
            'Plutarco Elias Calles',
            'Emilio Portes Gil',
            'José Lopez Portillo'
          ],
          note: '17 de Julio de 1928.',
          ru: {
            question: 'Какой президент был убит в 1928 году?',
            answer: 'Альваро Обрегон',
            options: [
              'Плутарко Элиас Кальес',
              'Эмилио Портес Хиль',
              'Хосе Лопес Портильо'
            ],
            note: '17 июля 1928 года.'
          }
        },
        {
          id: '5owd1',
          type: 'text',
          question: '¿Qué presidentes conformaron el Maximato?',
          answer:
            'Emilio Portes Gil (1928 - 1930)\nPascual Ortiz Rubio (1930 - 1932)\nAbelardo Rodríguez Lujan (1932 - 1934) (Fundó el Palacio de Bellas Artes)',
          ru: {
            question: 'Какие президенты составили Максимато?',
            answer:
              'Эмилио Портес Хиль (1928 - 1930)\nПаскуаль Ортис Рубио (1930 - 1932)\nАбелардо Родригес Лухан (1932 - 1934) (Основал Дворец изящных искусств)'
          }
        },
        {
          id: 'p6dczl',
          type: 'choice',
          question: '¿Qué presidente inauguró la Diana Cazadora?',
          answer: 'Manuel Ávila Camacho',
          options: [
            'Abelardo Rodríguez Lujan',
            'Emilio Portes Gil',
            'Álvaro Obregón'
          ],
          note: 'El 10 de Octubre de 1942, es una fuente monumental localizada en la avenida Paseo de la Reforma de la Ciudad de México.',
          ru: {
            question: 'Какой президент открыл Диану-Охотницу?',
            answer: 'Мануэль Авила Камачо',
            options: [
              'Абелардо Родригес Лухан',
              'Эмилио Портес Хиль',
              'Альваро Обрегон'
            ],
            note: '10 октября 1942 года, это монументальный фонтан, расположенный на авеню Пасео-де-ла-Реформа в Мехико.'
          }
        },
        {
          id: 'erymue',
          type: 'choice',
          question: '¿Con qué otro nombre se conoce a la Diana Cazadora?',
          answer: 'Flechadora de las Estrellas del Norte',
          options: [
            'Lanzadora de las Estrellas del Norte',
            'Cazadora de las Estrellas del Norte',
            'Guerrera de las Estrellas del Norte'
          ],
          ru: {
            question: 'Под каким другим именем известна Диана-Охотница?',
            answer: 'Стрелок с Северных Звезд',
            options: [
              'Метательница Северных Звезд',
              'Охотница Северных Звезд',
              'Воин Северных Звезд'
            ]
          }
        },
        {
          id: 'bln6ib',
          type: 'choice',
          question: '¿Quién fue el primer secretario de salud?',
          answer: 'Gustavo Baz Prada',
          options: [
            'Manuel Ávila Camacho',
            'Álvaro Obregón',
            'José Lopez Portillo'
          ],
          ru: {
            question: 'Кто был первым министром здравоохранения?',
            answer: 'Густаво Баз Прада',
            options: [
              'Мануэль Авила Камачо',
              'Альваро Обрегон',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'bme6xu',
          type: 'choice',
          question: '¿Cuándo se creó el IMSS?',
          answer: '19 de enero de 1943',
          options: [
            '19 de Diciembre de 1990',
            '19 de Septiembre de 1940',
            '19 de Julio de 1953'
          ],
          note: 'Durante la presidencia de Manuel Ávila Camacho.',
          ru: {
            question: 'Когда был создан IMSS?',
            answer: '19 января 1943 года',
            options: [
              '19 декабря 1990 года',
              '19 сентября 1940 года',
              '19 июля 1953 года'
            ],
            note: 'Во время президентства Мануэля Авилы Камачо.'
          }
        },
        {
          id: 'rzoeg8',
          type: 'choice',
          question:
            '¿Qué presidente declaró la guerra contra los llamados países del eje (Alemania, Italia y Japón) durante la Segunda Guerra Mundial?',
          answer: 'Manuel Ávila Camacho',
          options: [
            'Plutarco Elias Calles',
            'Emilio Portes Gil',
            'José Lopez Portillo'
          ],
          ru: {
            question:
              'Какой президент объявил войну странам оси (Германии, Италии и Японии) во время Второй мировой войны?',
            answer: 'Мануэль Авила Камачо',
            options: [
              'Плутарко Элиас Кальес',
              'Эмилио Портес Хиль',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'kmzciw',
          type: 'choice',
          question: '¿Cómo participó México en la Segunda Guerra Mundial?',
          answer:
            'Con el envío de fuerza aérea expedicionaria, "Escuadrón 201"',
          options: [
            'Con el envio de petróleo y productos industriales a los aliados',
            'Con el envio de una fuerza expedicionaria de 500 hombres para la liberación de Paris',
            'Con el envío de 2 fragatas y un destructor para el frente del Pacífico'
          ],
          ru: {
            question: 'Как Мексика участвовала во Второй мировой войне?',
            answer:
              'Отправив экспедиционные военно-воздушные силы, "Эскадрилья 201"',
            options: [
              'Отправив нефть и промышленные товары союзникам',
              'Отправив экспедиционные силы из 500 человек для освобождения Парижа',
              'Отправив 2 фрегата и один эсминец на Тихоокеанский фронт'
            ]
          }
        },
        {
          id: 'l08ps',
          type: 'choice',
          question: '¿En qué batalla participó el "Escuadrón 201"?',
          answer: 'Segunda Guerra Mundial',
          options: [
            'Primera Guerra Mundial',
            'Guerra contra EEUU',
            'La Guerra de Independencia'
          ],
          ru: {
            question: 'В какой битве участвовала "Эскадрилья 201"?',
            answer: 'Вторая мировая война',
            options: [
              'Первая мировая война',
              'Война против США',
              'Война за независимость'
            ]
          }
        },
        {
          id: '1s025c',
          type: 'choice',
          question:
            '¿Qué político comunista ruso recibió asilo político en México?',
          answer: 'Leon Trotsky',
          options: ['Aleksándr Protopópov', 'Zhorés Alfiórov', 'Ruslán Áushev'],
          ru: {
            question:
              'Какой русский коммунистический политик получил политическое убежище в Мексике?',
            answer: 'Лев Троцкий',
            options: ['Александр Протопопов', 'Жорес Алферов', 'Руслан Аушев']
          }
        },
        {
          id: 'm3o108',
          type: 'choice',
          question: 'Extranjero con que tuvo amoríos con Frida Khalo',
          answer: 'Leon Trotsky',
          options: ['Aleksándr Protopópov', 'Zhorés Alfiórov', 'Ruslán Áushev'],
          ru: {
            question: 'Иностранец, с которым у Фриды Кало был роман',
            answer: 'Лев Троцкий',
            options: ['Александр Протопопов', 'Жорес Алферов', 'Руслан Аушев']
          }
        },
        {
          id: 't77nu7',
          type: 'choice',
          question:
            '¿Cuál es la avenida más importante de CDMX y qué presidente le dió su nombre?',
          answer: 'Av. Reforma, Sebastián Lerdo de Tejada',
          options: [
            'Av. 16 de Septiembre, Alvaro Obregon',
            'Av. de los Insurgentes, Plutarco Elias Calles',
            'Av. Constituyentes, José Lopez Portillo'
          ],
          ru: {
            question:
              'Какая самая важная улица в Мехико и какой президент дал ей имя?',
            answer: 'Авеню Реформа, Себастьян Лердо де Техада',
            options: [
              'Авеню 16 Сентября, Альваро Обрегон',
              'Авеню Инсургентес, Плутарко Элиас Кальес',
              'Авеню Конституэнтис, Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: '9af7g',
          type: 'choice',
          question: '¿Quién puso el nombre de Reforma a Paseo la Reforma?',
          answer: 'Sebastián Lerdo de Tejada',
          options: [
            'Plutarco Elias Calles',
            'Emilio Portes Gil',
            'José Lopez Portillo'
          ],
          ru: {
            question: 'Кто дал имя Реформа проспекту Пасео-де-ла-Реформа?',
            answer: 'Себастьян Лердо де Техада',
            options: [
              'Плутарко Элиас Кальес',
              'Эмилио Портес Хиль',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'wxxh5g',
          type: 'choice',
          question:
            'Nombre del partido político que gobernó durante siete décadas en el siglo XX',
          answer: 'Partido Revolucionario Institucional (PRI)',
          options: [
            'Partido Acción Nacional (PAN)',
            'Movimiento Ciudadano',
            'Partido del Trabajo (PT)'
          ],
          note: '1930 - 2000',
          ru: {
            question:
              'Название политической партии, управлявшей в течение семи десятилетий в XX веке',
            answer: 'Институционно-революционная партия (PRI)',
            options: [
              'Национальная акция (PAN)',
              'Гражданское движение',
              'Трудовая партия (PT)'
            ],
            note: '1930 - 2000'
          }
        },
        {
          id: 'ibqkcl',
          type: 'choice',
          question: 'Institución educativa creada para carreras técnicas',
          answer: 'Instituto Politécnico Nacional (IPN)',
          options: ['Universidad Nacional', 'Universidad Abierta', 'UNAM'],
          ru: {
            question:
              'Образовательное учреждение, созданное для технических специальностей',
            answer: 'Национальный политехнический институт (IPN)',
            options: [
              'Национальный университет',
              'Открытый университет',
              'UNAM'
            ]
          }
        },
        {
          id: '34wxme',
          type: 'choice',
          question: 'Biblioteca considerada patrimonio cultural por la UNESCO',
          answer: 'Biblioteca Central de la UNAM',
          options: [
            'Biblioteca José Vasconcelos',
            'Biblioteca del Congreso de la Unión',
            'Biblioteca Miguel Lerdo de Tejada'
          ],
          ru: {
            question: 'Библиотека, считающаяся культурным наследием ЮНЕСКО',
            answer: 'Центральная библиотека UNAM',
            options: [
              'Библиотека Хосе Васконселоса',
              'Библиотека Конгресса Союза',
              'Библиотека Мигеля Лердо де Техада'
            ]
          }
        },
        {
          id: '8jtrsb',
          type: 'choice',
          question:
            '¿Qué universidad técnica creó Lázaro Cárdenas? / ¿Qué institución educativa creó el presidente Lázaro Cárdenas?',
          answer: 'Instituto Politécnico Nacional (IPN)',
          options: [
            'Universidad Nacional',
            'Universidad Abierta',
            'Instituto Lázaro Cárdenas'
          ],
          ru: {
            question:
              'Какой технический университет создал Лазаро Карденас? / Какое образовательное учреждение создал президент Лазаро Карденас?',
            answer: 'Национальный политехнический институт (IPN)',
            options: [
              'Национальный университет',
              'Открытый университет',
              'Институт Лазаро Карденас'
            ]
          }
        },
        {
          id: '17mdzc',
          type: 'choice',
          question: '¿Cuándo se creo el Instituto Politécnico Nacional (IPN)?',
          answer: '1 de Enero de 1936',
          options: [
            '1 de Enero de 1956',
            '1 de Diciembre de 1996',
            '1 de Julio de 1936'
          ],
          ru: {
            question:
              'Когда был создан Национальный политехнический институт (IPN)?',
            answer: '1 января 1936 года',
            options: [
              '1 января 1956 года',
              '1 декабря 1996 года',
              '1 июля 1936 года'
            ]
          }
        },
        {
          id: '2l9sg',
          type: 'choice',
          question:
            '¿Cuál es el lema del Instituto Politécnico Nacional (IPN)?',
          answer: 'La Técnica al Servicio de la Patria',
          options: [
            'Servicio a la Patria',
            'Yo Sirvo de la Patria',
            'La Técnica de la Patria'
          ],
          ru: {
            question:
              'Каков девиз Национального политехнического института (IPN)?',
            answer: 'Техника на службе Родины',
            options: ['Служба Родине', 'Я служу Родине', 'Техника Родины']
          }
        },
        {
          id: 'dw6dw',
          type: 'choice',
          question: 'El 18 de marzo de 1938 el presidente Lázaro Cárdenas',
          answer: 'Nacionalizó la industria petrolera',
          options: [
            'Nacionalizó la industria minera',
            'Nacionalizó la industria textil',
            'Nacionalizó la industria química'
          ],
          note: 'Expropió los bienes a las petroleras extranjeras.',
          ru: {
            question: '18 марта 1938 года президент Лазаро Карденас',
            answer: 'Национализировал нефтяную промышленность',
            options: [
              'Национализировал горнодобывающую промышленность',
              'Национализировал текстильную промышленность',
              'Национализировал химическую промышленность'
            ],
            note: 'Конфисковал имущество у иностранных нефтяных компаний.'
          }
        },
        {
          id: 'i241va',
          type: 'text',
          question:
            '¿En qué año se fundó la Universidad Autónoma Metropolitana (UAM)?',
          answer:
            '01 de Enero de 1974 durante el gobierno de Luis Echeverría Álvarez',
          ru: {
            question:
              'В каком году был основан Автономный столичный университет (UAM)?',
            answer:
              '1 января 1974 года во время правления Луиса Эчеверрии Альвареса'
          }
        },
        {
          id: 'fnnvhn',
          type: 'choice',
          question:
            '¿Cuál es el lema de la Universidad Autónoma Metropolitana (UAM)?',
          answer: 'In Calli Ixcahuicopa (Casa abierta al tiempo)',
          options: [
            'La Técnica al Servicio de la Patria',
            'Tierra y libertad',
            'Por mi raza hablará el espíritu'
          ],
          ru: {
            question: 'Каков девиз Автономного столичного университета (UAM)?',
            answer: 'In Calli Ixcahuicopa (Дом, открытый во времени)',
            options: [
              'Техника на службе Родины',
              'Земля и свобода',
              'Дух говорит за мою расу'
            ]
          }
        },
        {
          id: 'jwjaum',
          type: 'choice',
          question: 'Símbolo de la modernización inaugurado en 1950',
          answer: 'Torre Latinoamericana',
          options: ['Torre Reforma', 'Torre Ejecutiva Pemex', 'Torre Diana'],
          ru: {
            question: 'Символ модернизации, открытый в 1950 году',
            answer: 'Латиноамериканская башня',
            options: [
              'Башня Реформа',
              'Исполнительная башня Pemex',
              'Башня Диана'
            ]
          }
        },
        {
          id: 'fx3o3r',
          type: 'text',
          question: 'Nombre científico del petróleo',
          answer: 'Crudo, crudo petrolífero o petróleo crudo',
          ru: {
            question: 'Научное название нефти',
            answer: 'Сырая нефть, нефтяной сырец или сырая нефть'
          }
        },
        {
          id: 'mwelr7',
          type: 'choice',
          question: '¿Cuándo se decreta el derecho al voto de la mujer?',
          answer: '17 de Octubre de 1953',
          options: [
            '17 de Octubre de 1853',
            '17 de Julio de 1953',
            '17 de Noviembre de 1953'
          ],
          note: 'Durante el mandato de Adolfo Ruíz Cortines.',
          ru: {
            question: 'Когда было провозглашено право женщин на голосование?',
            answer: '17 октября 1953 года',
            options: [
              '17 октября 1853 года',
              '17 июля 1953 года',
              '17 ноября 1953 года'
            ],
            note: 'Во время правления Адольфо Руиса Кортинаса.'
          }
        },
        {
          id: 'euj1f',
          type: 'choice',
          question: '¿Cuándo votan por primera vez las mujeres?',
          answer: '3 de Julio de 1955',
          options: [
            '3 de Julio de 1995',
            '3 de Diciembre de 1855',
            '3 de Octubre de 1955'
          ],
          ru: {
            question: 'Когда женщины впервые проголосовали?',
            answer: '3 июля 1955 года',
            options: [
              '3 июля 1995 года',
              '3 декабря 1855 года',
              '3 октября 1955 года'
            ]
          }
        },
        {
          id: 'ng6dzl',
          type: 'choice',
          question:
            'Durante el periodo presidencial de cual presidente se creó el ISSSTE',
          answer: 'Adolfo López Mateos',
          options: [
            'Plutarco Elias Calles',
            'Emilio Portes Gil',
            'José Lopez Portillo'
          ],
          note: '1958 - 1964.',
          ru: {
            question: 'В период правления какого президента был создан ISSSTE?',
            answer: 'Адольфо Лопес Матеос',
            options: [
              'Плутарко Элиас Кальес',
              'Эмилио Портес Хиль',
              'Хосе Лопес Портильо'
            ],
            note: '1958 - 1964.'
          }
        },
        {
          id: 'lpfzae',
          type: 'choice',
          question: 'Fecha de mayor movilización estudiantil en México',
          answer: '26 de julio de 1968',
          options: [
            '20 de noviembre de 1910',
            '24 de diciembre de 1999',
            '3 de Julio de 1955'
          ],
          ru: {
            question: 'Дата крупнейшей студенческой мобилизации в Мексике',
            answer: '26 июля 1968 года',
            options: [
              '20 ноября 1910 года',
              '24 декабря 1999 года',
              '3 июля 1955 года'
            ]
          }
        },
        {
          id: 'im7pft',
          type: 'choice',
          question: '¿Cuándo fue la matanza de Tlatelolco?',
          answer: '2 de Octubre de 1968',
          options: [
            '2 de Julio de 1995',
            '3 de Diciembre de 1855',
            '5 de Octubre de 1955'
          ],
          ru: {
            question: 'Когда была резня в Тлателолько?',
            answer: '2 октября 1968 года',
            options: [
              '2 июля 1995 года',
              '3 декабря 1855 года',
              '5 октября 1955 года'
            ]
          }
        },
        {
          id: '2nts7',
          type: 'choice',
          question: 'Presidente al mando cuando fue la matanza de Tlatelolco',
          answer: 'Gustavo Díaz Ordaz',
          options: [
            'Plutarco Elias Calles',
            'Adolfo López Mateos',
            'José Lopez Portillo'
          ],
          ru: {
            question:
              'Президент, находившийся у власти во время резни в Тлателолько',
            answer: 'Густаво Диас Ордас',
            options: [
              'Плутарко Элиас Кальес',
              'Адольфо Лопес Матеос',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: '25wlcj',
          type: 'choice',
          question: '¿Qué es el Tratado de Tlatelolco?',
          answer:
            'Acuerdo de no proliferación de armas nucleares en América Latina',
          options: [
            'Documento en el que se acuerda la Independencia de México',
            'Tratado que puso fin a la guerra con EEUU',
            'Se acuerda el libre comercio con EEUU y Canadá'
          ],
          ru: {
            question: 'Что такое Договор Тлателолько?',
            answer:
              'Соглашение о нераспространении ядерного оружия в Латинской Америке',
            options: [
              'Документ, в котором согласована независимость Мексики',
              'Договор, положивший конец войне с США',
              'Соглашение о свободной торговле с США и Канадой'
            ]
          }
        },
        {
          id: 'n6weh7',
          type: 'choice',
          question: '¿Cuándo se firmó Tratado de Tlatelolco?',
          answer: '14 de Febrero de 1967',
          options: [
            '20 de Noviembre de 1910',
            '10 de Diciembre de 1850',
            '16 de Septiembre de 1810'
          ],
          ru: {
            question: 'Когда был подписан Договор Тлателолько?',
            answer: '14 февраля 1967 года',
            options: [
              '20 ноября 1910 года',
              '10 декабря 1850 года',
              '16 сентября 1810 года'
            ]
          }
        },
        {
          id: '7lkf3o',
          type: 'choice',
          question:
            'El Tratado de Tlatelolco, logro de la diplomacia mexicana, se atañe a',
          answer:
            'Alfonso García Robles, ganador del Premio Nobel de la Paz en 1982 y al presidente Gustavo Diaz Ordaz',
          options: [
            'José Mario Molina Pasquel, Premio Nobel de Química en 1995 y al presidente López Mateos',
            'Al presidente Lázaro Cárdenas',
            'Rodolfo Neri Vela'
          ],
          ru: {
            question:
              'Договор Тлателолько, достижение мексиканской дипломатии, относится к',
            answer:
              'Альфонсо Гарсия Роблес, лауреат Нобелевской премии мира 1982 года, и президенту Густаво Диас Ордасу',
            options: [
              'Хосе Марио Молина Паскель, лауреат Нобелевской премии по химии 1995 года, и президенту Лопес Матеосу',
              'Президенту Лазаро Карденасу',
              'Родольфо Нери Вела'
            ]
          }
        },
        {
          id: 'y7l987',
          type: 'choice',
          question:
            '¿En qué fecha se inauguró el metro de la CDMX (línea rosa)?',
          answer: '4 de Septiembre de 1969',
          options: [
            '4 de Julio de 1995',
            '13 de Diciembre de 1855',
            '10 de Octubre de 1955'
          ],
          ru: {
            question: 'Когда была открыта розовая линия метро Мехико?',
            answer: '4 сентября 1969 года',
            options: [
              '4 июля 1995 года',
              '13 декабря 1855 года',
              '10 октября 1955 года'
            ]
          }
        },
        {
          id: '6xwclc',
          type: 'choice',
          question: 'Bajo qué presidencia se inauguró el metro de la CDMX',
          answer: 'Gustavo Diaz Ordaz',
          options: [
            'Plutarco Elias Calles',
            'Adolfo López Mateos',
            'José Lopez Portillo'
          ],
          ru: {
            question: 'При каком президентстве было открыто метро Мехико?',
            answer: 'Густаво Диас Ордас',
            options: [
              'Плутарко Элиас Кальес',
              'Адольфо Лопес Матеос',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'pysja9',
          type: 'choice',
          question: '¿Qué significa CONALEP?',
          answer: 'Colegio Nacional de Educación Profesional Técnica',
          options: [
            'Escuela Nacional de Educación Profesional Técnica',
            'Colegio Nacional de Educación Técnica',
            'Colegio de Educación Profesional Técnica'
          ],
          ru: {
            question: 'Что означает CONALEP?',
            answer:
              'Национальный колледж профессионально-технического образования',
            options: [
              'Национальная школа профессионально-технического образования',
              'Национальный колледж технического образования',
              'Колледж профессионально-технического образования'
            ]
          }
        },
        {
          id: '8txxh',
          type: 'choice',
          question: '¿Cuándo y quien fundó CONALEP?',
          answer:
            'Abril de 1978 por el Ing. José Antonio Padilla Segura (presidencia Lopez Portillo)',
          options: [
            'Julio de 1998 por el Ing. Rodolfo Neri Vela (presidencia Lázaro Cárdenas)',
            'Enero de 1783 por el Ing. José Mario Molina (presidencia López Mateos)',
            'Marzo de 1950 por el Ing. Manuel Gutierrez (presidencia Ruíz Cortines)'
          ],
          ru: {
            question: 'Когда и кто основал CONALEP?',
            answer:
              'Апрель 1978 года, Инженер Хосе Антонио Падилья Сегура (президентство Лопес Портильо)',
            options: [
              'Июль 1998 года, Инженер Родольфо Нери Вела (президентство Лазаро Карденас)',
              'Январь 1783 года, Инженер Хосе Марио Молина (президентство Лопес Матеос)',
              'Март 1950 года, Инженер Мануэль Гутьеррес (президентство Руис Кортина)'
            ]
          }
        },
        {
          id: '9dqjf7',
          type: 'choice',
          question:
            '¿Qué presidente recibió al Papa Juan Pablo II en su primera visita?',
          answer: 'José Lopez Portillo',
          options: [
            'Plutarco Elias Calles',
            'Adolfo López Mateos',
            'Adolfo Ruíz Cortines'
          ],
          note: 'Primera visita 26 de enero - 1 de febrero de 1979.',
          ru: {
            question:
              'Какой президент принял Папу Иоанна Павла II во время его первого визита?',
            answer: 'Хосе Лопес Портильо',
            options: [
              'Плутарко Элиас Кальес',
              'Адольфо Лопес Матеос',
              'Адольфо Руис Кортина'
            ],
            note: 'Первый визит с 26 января по 1 февраля 1979 года.'
          }
        },
        {
          id: 'ql5w9g',
          type: 'choice',
          question: '¿Quién nacionalizó la Banca?',
          answer: 'José Lopez Portillo',
          options: [
            'Plutarco Elias Calles',
            'Adolfo López Mateos',
            'Emilio Portes Gil'
          ],
          note: 'El 1 de septiembre de 1982.',
          ru: {
            question: 'Кто национализировал банковскую систему?',
            answer: 'Хосе Лопес Портильо',
            options: [
              'Плутарко Элиас Кальес',
              'Адольфо Лопес Матеос',
              'Эмилио Портес Хиль'
            ],
            note: '1 сентября 1982 года.'
          }
        },
        {
          id: 'p2jk2',
          type: 'text',
          question:
            '¿Cuáles fueron los presidentes de la época del neoliberalismo?',
          answer:
            'Carlos Salinas de Gortari (1988 - 1994)\nErnesto Zedillo (1994 - 2000)\nVicente Fox (2000 - 2006)',
          ru: {
            question: 'Какие президенты были в эпоху неолиберализма?',
            answer:
              'Карлос Салинас де Гортари (1988 - 1994)\nЭрнесто Седильо (1994 - 2000)\nВисенте Фокс (2000 - 2006)'
          }
        },
        {
          id: 'nuxqi9',
          type: 'choice',
          question:
            '¿Cuándo se firmó el tratado de libre comercio (TLC, NAFTA)?',
          answer: '17 de Diciembre de 1992',
          options: [
            '17 de Julio de 1990',
            '17 de Diciembre de 1982',
            '10 de Diciembre de 1992'
          ],
          ru: {
            question:
              'Когда был подписан договор о свободной торговле (TLC, NAFTA)?',
            answer: '17 декабря 1992 года',
            options: [
              '17 июля 1990 года',
              '17 декабря 1982 года',
              '10 декабря 1992 года'
            ]
          }
        },
        {
          id: 'vto1q',
          type: 'choice',
          question:
            '¿Cuándo entró en vigor el tratado de libre comercio (TLC, NAFTA)?',
          answer: '01 de Enero de 1994',
          options: [
            '01 de Julio de 1990',
            '17 de Diciembre de 1982',
            '10 de Diciembre de 1992'
          ],
          ru: {
            question:
              'Когда вступил в силу договор о свободной торговле (TLC, NAFTA)?',
            answer: '1 января 1994 года',
            options: [
              '1 июля 1990 года',
              '17 декабря 1982 года',
              '10 декабря 1992 года'
            ]
          }
        },
        {
          id: '5r8jok',
          type: 'choice',
          question:
            'Nombre del presidente que firmó el tratado de libre comercio NAFTA',
          answer: 'Carlos Salinas de Gortari',
          options: [
            'Plutarco Elias Calles',
            'Adolfo López Mateos',
            'José Lopez Portillo'
          ],
          ru: {
            question:
              'Имя президента, подписавшего договор о свободной торговле NAFTA',
            answer: 'Карлос Салинас де Гортари',
            options: [
              'Плутарко Элиас Кальес',
              'Адольфо Лопес Матеос',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'u3c5d4',
          type: 'choice',
          question:
            '¿Con qué países celebró México el tratado comercial conocido como TLCAN o NAFTA?',
          answer: 'Estados Unidos y Canadá',
          options: [
            'Estados Unidos y Belice',
            'Estados Unidos y Guatemala',
            'Estados Unidos y Panamá'
          ],
          ru: {
            question:
              'С какими странами Мексика заключила торговое соглашение, известное как TLCAN или NAFTA?',
            answer: 'США и Канада',
            options: ['США и Белиз', 'США и Гватемала', 'США и Панама']
          }
        },
        {
          id: 'tojy6f',
          type: 'choice',
          question:
            '¿Cómo se llamó el movimiento civil en Chiapas en 1994 del Comandante Marco?',
          answer:
            'Movimiento Zapatista / Conflicto Chiapaneco /  Ejército Zapatista de Liberación Nacional (EZLN)',
          options: [
            'Movimiento Quinta República',
            'Movimiento Ciudadano por la Justicia 5 de Julio',
            'Movimiento de Regeneración Nacional'
          ],
          ru: {
            question:
              'Как называлось гражданское движение в Чьяпасе в 1994 году под руководством Команданта Маркоса?',
            answer:
              'Сапатистское движение / Конфликт в Чьяпасе / Сапатистская армия национального освобождения (EZLN)',
            options: [
              'Движение Пятая Республика',
              'Гражданское движение за справедливость 5 июля',
              'Движение национального возрождения'
            ]
          }
        },
        {
          id: 'f5ousk',
          type: 'choice',
          question: '¿Cuándo se inició el Movimiento Zapatista?',
          answer: '1994',
          options: ['1992', '1990', '1980'],
          ru: {
            question: 'Когда началось Сапатистское движение?',
            answer: '1994',
            options: ['1992', '1990', '1980']
          }
        },
        {
          id: 'qpzfx',
          type: 'choice',
          question:
            '¿Cómo se llama el seguro de salud creado en 2004 que ayuda a las personas desempleadas o que trabajan independiente?',
          answer: 'Seguro Popular de Salud',
          options: [
            'Seguro del Poder Popular de Salud',
            'Seguro de Salud',
            'Salud para todos'
          ],
          ru: {
            question:
              'Как называется страхование здоровья, созданное в 2004 году, которое помогает безработным или работающим самостоятельно людям?',
            answer: 'Популярное медицинское страхование',
            options: [
              'Страхование здоровья народной власти',
              'Медицинское страхование',
              'Здоровье для всех'
            ]
          }
        },
        {
          id: 'rw6qlf',
          type: 'choice',
          question: 'Fecha de inicio del voto mexicano en el exterior',
          answer: '2005',
          options: ['2000', '2003', '2010'],
          ru: {
            question: 'Дата начала голосования мексиканцев за границей',
            answer: '2005',
            options: ['2000', '2003', '2010']
          }
        },
        {
          id: 'unwtc',
          type: 'choice',
          question: '¿Cuándo fue el apagón analógico en México?',
          answer: '31 de Diciembre de 2015',
          options: [
            '31 de Febrero de 2015',
            '31 de Julio de 2000',
            '31 de Octubre de 2018'
          ],
          ru: {
            question: 'Когда произошел аналоговый переход в Мексике?',
            answer: '31 декабря 2015 года',
            options: [
              '31 февраля 2015 года',
              '31 июля 2000 года',
              '31 октября 2018 года'
            ]
          }
        },
        {
          id: 'rx4idh',
          type: 'choice',
          question:
            '¿En qué año fue el temblor por el cual se cayó el Ángel de la Independencia?',
          answer: '1957',
          options: ['1950', '1880', '1987'],
          ru: {
            question:
              'В каком году произошло землетрясение, из-за которого упал Ангел Независимости?',
            answer: '1957',
            options: ['1950', '1880', '1987']
          }
        },
        {
          id: 'hvhqj',
          type: 'choice',
          question: '¿Cuándo se cayó el Ángel de la Independencia?',
          answer: '28 de Julio de 1957',
          options: [
            '31 de Febrero de 1974',
            '31 de Diciembre de 2000',
            '31 de Octubre de 1950'
          ],
          ru: {
            question: 'Когда упал Ангел Независимости?',
            answer: '28 июля 1957 года',
            options: [
              '31 февраля 1974 года',
              '31 декабря 2000 года',
              '31 октября 1950 года'
            ]
          }
        },
        {
          id: 'bbukk',
          type: 'choice',
          question:
            'La estructura donde se construiría el Palacio Legislativo Federal de Emile Bernard, se utilizó para edificar el monumento de',
          answer: 'Monumento a la Revolución',
          options: [
            'Monumento a los Héroes de la Independencia',
            'Monumento a Diana Cazadora',
            'Monumento a los Niños Héroes'
          ],
          ru: {
            question:
              'Структура, на которой должен был быть построен Федеральный законодательный дворец Эмиля Бернара, использовалась для возведения памятника',
            answer: 'Памятник революции',
            options: [
              'Памятник героям независимости',
              'Памятник Диане-Охотнице',
              'Памятник детям-героям'
            ]
          }
        },
        {
          id: 'rqrrr6',
          type: 'choice',
          question:
            'Fué construido para ser el Palacio Legislativo pero terminó siendo',
          answer: 'Monumento a la Revolución',
          options: [
            'Monumento a los Héroes de la Independencia',
            'Monumento a Diana Cazadora',
            'Monumento a los Niños Héroes'
          ],
          ru: {
            question:
              'Был построен для того, чтобы быть Законодательным дворцом, но в итоге стал',
            answer: 'Памятником революции',
            options: [
              'Памятником героям независимости',
              'Памятником Диане-Охотнице',
              'Памятником детям-героям'
            ]
          }
        },
        {
          id: 'gi619h',
          type: 'choice',
          question: 'Rascacielos de 43 pisos que ha resistido 3 terremotos',
          answer: 'Torre Latinoamericana',
          options: ['Torre Reforma', 'Torre Ejecutiva Pemex', 'Torre Diana'],
          ru: {
            question: 'Небоскреб из 43 этажей, выдержавший 3 землетрясения',
            answer: 'Латиноамериканская башня',
            options: [
              'Башня Реформа',
              'Исполнительная башня Pemex',
              'Башня Диана'
            ]
          }
        },
        {
          id: '2pi8md',
          type: 'choice',
          question: 'Terremotos que derribaron iglesias',
          answer: '1985 en Colima, 2017 en Puebla',
          options: [
            '2001 en Jalisco, 1990 en Querétaro',
            '2018 en Zacatecas, 1997 en Oaxaca',
            '2001 en Chihuahua, 2020 en Monterrey'
          ],
          ru: {
            question: 'Землетрясения, разрушившие церкви',
            answer: '1985 в Колиме, 2017 в Пуэбле',
            options: [
              '2001 в Халиско, 1990 в Керетаро',
              '2018 в Сакатекасе, 1997 в Оахаке',
              '2001 в Чиуауа, 2020 в Монтеррее'
            ]
          }
        },
        {
          id: 'sabr0xp',
          type: 'choice',
          question:
            '¿Qué presidente estuvo durante el terremoto de 1985 y el mundial de 1986?',
          answer: 'Miguel de la Madrid',
          options: [
            'Plutarco Elias Calles',
            'Adolfo López Mateos',
            'José Lopez Portillo'
          ],
          ru: {
            question:
              'Какой президент был во время землетрясения 1985 года и чемпионата мира 1986 года?',
            answer: 'Мигель де ла Мадрид',
            options: [
              'Плутарко Элиас Кальес',
              'Адольфо Лопес Матеос',
              'Хосе Лопес Портильо'
            ]
          }
        },
        {
          id: 'ho2hz',
          type: 'choice',
          question: '¿Quién está en el billete de 100 pesos?',
          answer: 'Sor Juana Inés de la Cruz',
          options: [
            'Benito Juarez',
            'Miguel Hidalgo y Costilla',
            'Francisco I. Madero'
          ],
          ru: {
            question: 'Кто изображен на банкноте в 100 песо?',
            answer: 'Сор Хуана Инес де ла Крус',
            options: [
              'Бенито Хуарес',
              'Мигель Идальго и Костилья',
              'Франсиско И. Мадеро'
            ]
          }
        },
        {
          id: 'k7ddsl',
          type: 'choice',
          question: '¿Qué representa el monumento La Estela de Luz?',
          answer:
            'Festejo del Bicentenario de la Independencia y Centenario de la Revolución Mexicana',
          options: [
            'Tributo a la Diana Cazadora',
            'Festejo del Centenario de la Revolución Mexicana',
            'Tributo a la suavicrema'
          ],
          ru: {
            question: 'Что символизирует памятник Ла Эстела де Лус?',
            answer:
              'Празднование двухсотлетия независимости и столетия Мексиканской революции',
            options: [
              'Дань Диане-Охотнице',
              'Празднование столетия Мексиканской революции',
              'Дань мороженому'
            ]
          }
        },
        {
          id: '9luuh6',
          type: 'choice',
          question:
            '¿Cuál fue el monumento construido para conmemorar el Bicentenario de la Independencia y el Centenario de la Revolución Mexicana?',
          answer: 'Estela de Luz',
          options: [
            'Monumento a los Héroes de la Independencia',
            'Monumento a Diana Cazadora',
            'Monumento a los Niños Héroes'
          ],
          note: 'Se inauguró el 7 de enero de 2012.',
          ru: {
            question:
              'Какой памятник был построен в честь двухсотлетия независимости и столетия Мексиканской революции?',
            answer: 'Эстела де Лус',
            options: [
              'Памятник героям независимости',
              'Памятник Диане-Охотнице',
              'Памятник детям-героям'
            ],
            note: 'Он был открыт 7 января 2012 года.'
          }
        },
        {
          id: 'qfq77',
          type: 'choice',
          question:
            '¿En qué año se cambió el nombre de Distrito Federal a Ciudad de México?',
          answer: '2016',
          options: ['2015', '2010', '2000'],
          note: '29 Enero 2016.',
          ru: {
            question:
              'В каком году название Федерального округа было изменено на Мехико?',
            answer: '2016',
            options: ['2015', '2010', '2000'],
            note: '29 января 2016 года.'
          }
        },
        {
          id: 's2ta0s',
          type: 'choice',
          question: 'Estado que cambió su nombre en 2016',
          answer: 'Ciudad de México',
          options: ['Quintana Roo', 'Jalisco', 'Colima'],
          ru: {
            question: 'Штат, изменивший свое название в 2016 году',
            answer: 'Мехико',
            options: ['Кинтана-Роо', 'Халиско', 'Колима']
          }
        },
        {
          id: 'nbe99r',
          type: 'choice',
          question: 'En la ciudad de México, "El Zócalo" alude a',
          answer: 'La Plaza Principal o Plaza de la Constitución',
          options: ['Plaza Patria', 'Plaza Roja', 'Plaza de los Héroes'],
          ru: {
            question: 'В Мехико "Сокало" относится к',
            answer: 'Главная площадь или Площадь Конституции',
            options: ['Площадь Родины', 'Красная площадь', 'Площадь Героев']
          }
        },
        {
          id: 'gaa87',
          type: 'choice',
          question: '¿Cómo se conoce el centro histórico de CDMX?',
          answer: 'La Ciudad de los Palacios',
          options: [
            'La Ciudad de los Héroes',
            'Los Palacios',
            'La Ciudad de los Eterna'
          ],
          ru: {
            question: 'Как называется исторический центр Мехико?',
            answer: 'Город дворцов',
            options: ['Город героев', 'Дворцы', 'Вечный город']
          }
        },
        {
          id: '0ehocj',
          type: 'choice',
          question: '¿Cuál es el estado con mayor producción de zapatos?',
          answer: 'Guanajuato',
          options: ['Jalisco', 'Nuevo León', 'Estado de México'],
          ru: {
            question: 'Какой штат является крупнейшим производителем обуви?',
            answer: 'Гуанахуато',
            options: ['Халиско', 'Нуэво-Леон', 'Штат Мехико']
          }
        },
        {
          id: 'tmi4hn',
          type: 'choice',
          question:
            '¿Cuál de las siguientes aseveraciones sobre México es falsa?',
          answer:
            'México es uno de los países con menor desigualdad social en América Latina',
          options: [
            'La superficie de México es de 1.964 MM de Km²',
            'Río Bravo, es el más largo del país',
            'La capital de Jalisco es Guadalajara'
          ],
          ru: {
            question:
              'Какое из следующих утверждений о Мексике является ложным?',
            answer:
              'Мексика - одна из стран с наименьшим социальным неравенством в Латинской Америке',
            options: [
              'Площадь Мексики составляет 1.964 миллиона км²',
              'Река Рио-Браво является самой длинной в стране',
              'Столица Халиско - Гвадалахара'
            ]
          }
        }
      ]
    },
    {
      id: 'zpvby',
      title: 'Historia: México Prehispánico',
      ru: {
        title: 'История: Доколумбова Мексика'
      },
      questions: [
        {
          id: '4igue',
          type: 'text',
          question: '¿Qué es México prehispánico?',
          answer:
            'Es el periodo antes de la conquista y colonización española de 1521, la historia de los pueblos que vivieron en éste territorio, las grandes culturas olmeca, maya, zapoteca, toltecas, purépecha, azteca entre muchas otras que construyeron un impresionante estilo de vida, agricultura, comercio, arte, arquitectura y organización social que deslumbró más tarde a los conquistadores.',
          ru: {
            question: 'Что такое доколумбова Мексика?',
            answer:
              'Это период до испанского завоевания и колонизации 1521 года, история народов, живших на этой территории, великие культуры ольмеков, майя, сапотеков, тольтеков, пурепечей, ацтеков и многих других, которые создали впечатляющий образ жизни, сельское хозяйство, торговлю, искусство, архитектуру и социальную организацию, которые позже поразили завоевателей.'
          }
        },
        {
          id: 'gm6o46',
          type: 'choice',
          question: '¿Cuándo se construyeron las pirámides del sol y la luna?',
          answer: 'Entre el año 0 y 200 DC',
          options: [
            'Entre el año 10 y 200 DC',
            'Entre el año 100 y 300 DC',
            'Entre el año 1 y 200 DC'
          ],
          ru: {
            question: 'Когда были построены пирамиды Солнца и Луны?',
            answer: 'Между 0 и 200 годами н.э.',
            options: [
              'Между 10 и 200 годами н.э.',
              'Между 100 и 300 годами н.э.',
              'Между 1 и 200 годами н.э.'
            ]
          }
        },
        {
          id: 'rrmogc',
          type: 'choice',
          question:
            'Cultura con más desarrollo en el posclásico 950 d.c - 1521 d.c',
          answer: 'Azteca/Mexica',
          options: ['Olmeca', 'Teotihuacana', 'Tolteca'],
          ru: {
            question:
              'Культура с наибольшим развитием в постклассическом периоде 950 н.э. - 1521 н.э.',
            answer: 'Ацтеки/Мексика',
            options: ['Ольмеки', 'Теотиуаканская', 'Тольтеки']
          }
        },
        {
          id: 'yo2foi',
          type: 'choice',
          question:
            '¿En qué etapa prehispánica se empezaron a construir los reinos?',
          answer: 'Preclásica',
          options: ['Clasico', 'Postclásico', 'Epoca Colonial'],
          ru: {
            question:
              'На каком доколумбовом этапе начали строиться королевства?',
            answer: 'Доклассический',
            options: ['Классический', 'Постклассический', 'Колониальный период']
          }
        },
        {
          id: '4ejj5h',
          type: 'choice',
          question:
            '¿En qué etapa de la cultura prehispánica se desarrollaron los señoríos?',
          answer: 'Preclásico',
          options: ['Clasico', 'Postclásico', 'Epoca Colonial'],
          ru: {
            question:
              'На каком этапе доколумбовой культуры развивались сеньории?',
            answer: 'Доклассический',
            options: ['Классический', 'Постклассический', 'Колониальный период']
          }
        },
        {
          id: 'l6wi8',
          type: 'choice',
          question: 'Período en el que más se desarrolló la cultura Olmeca',
          answer: 'Preclásico',
          options: ['Clasico', 'Postclásico', 'Epoca Colonial'],
          ru: {
            question: 'Период наибольшего развития культуры ольмеков',
            answer: 'Доклассический',
            options: ['Классический', 'Постклассический', 'Колониальный период']
          }
        },
        {
          id: 'tpti8c',
          type: 'choice',
          question:
            'El mayor desarrollo de la cultura mesoamericana se dio durante el período',
          answer: 'Clásico',
          options: ['Pos clásico', 'Pre clásico', 'Época colonial'],
          ru: {
            question:
              'Наибольшее развитие мезоамериканской культуры произошло в период',
            answer: 'Классический',
            options: [
              'Постклассический',
              'Доклассический',
              'Колониальный период'
            ]
          }
        },
        {
          id: 'w71v17',
          type: 'choice',
          question: 'Época prehispánica que tuvo más desarrollo en su cultura',
          answer: 'Pos clásico',
          options: ['Clasico medio', 'Pre clásico', 'Época colonial'],
          ru: {
            question:
              'Доколумбова эпоха, имевшая наибольшее культурное развитие',
            answer: 'Постклассический',
            options: [
              'Средний классический',
              'Доклассический',
              'Колониальный период'
            ]
          }
        },
        {
          id: 'anpua',
          type: 'choice',
          question: '¿Qué fue Tenochtitlán?',
          answer: 'Capital de los Mexicas',
          options: [
            'Capital de los Teotihuacanos',
            'Capital de los Tarascos',
            'Capital de los Toltecas'
          ],
          ru: {
            question: 'Что такое Теночтитлан?',
            answer: 'Столица Мексики',
            options: [
              'Столица Теотиуаканцев',
              'Столица Тарасков',
              'Столица Тольтеков'
            ]
          }
        },
        {
          id: 'ulrvtc',
          type: 'choice',
          question: '¿Cuándo se fundó Tenochtitlán?',
          answer: '1325',
          options: ['1350', '1315', '1352', '1330'],
          ru: {
            question: 'Когда был основан Теночтитлан?',
            answer: '1325',
            options: ['1350', '1315', '1352', '1330']
          }
        },
        {
          id: '0r7224',
          type: 'choice',
          question: 'Año en que cayó México Tenochtitlán',
          answer: '1521',
          options: ['1512', '1525', '1520'],
          ru: {
            question: 'Год падения Мехико-Теночтитлана',
            answer: '1521',
            options: ['1512', '1525', '1520']
          }
        },
        {
          id: 'c873au',
          type: 'choice',
          question: 'Edificio o museo que alberga el centro de Tenochtitlán',
          answer: 'Templo Mayor',
          options: ['Templo Menor', 'Templo Sagrado', 'Templo de los Dioses'],
          ru: {
            question:
              'Здание или музей, в котором находится центр Теночтитлана',
            answer: 'Главный храм',
            options: ['Малый храм', 'Священный храм', 'Храм богов']
          }
        },
        {
          id: 'shvwqe',
          type: 'choice',
          question: '¿A qué se le conoce como el hombre de Tepexpan?',
          answer: 'Es un esqueleto precolombino',
          options: [
            'Fantasma precolombino',
            'Leyenda de un asesino',
            'Comerciante de Tepexpan'
          ],
          note: 'Encontrado en 1947 a las orillas del lago Texcoco, siendo el más antiguo de Mesoamérica encontrado hasta ahora.',
          ru: {
            question: 'Что известно как человек из Тепекспана?',
            answer: 'Это доколумбовский скелет',
            options: [
              'Доколумбовский призрак',
              'Легенда об убийце',
              'Торговец из Тепекспана'
            ],
            note: 'Найден в 1947 году на берегу озера Тескоко, является самым древним из найденных в Мезоамерике.'
          }
        },
        {
          id: 'ff6ov',
          type: 'choice',
          question:
            '¿Con qué comercializaban en la época prehispánica? o moneda de intercambio principal de los pueblos mesoamericanos',
          answer: 'Cacao',
          options: ['Plata', 'Cerámica', 'Piedras preciosas'],
          ru: {
            question:
              'Чем торговали в доколумбовую эпоху? или основная валюта обмена мезоамериканских народов',
            answer: 'Какао',
            options: ['Серебро', 'Керамика', 'Драгоценные камни']
          }
        },
        {
          id: '7czrck',
          type: 'choice',
          question: 'La base alimenticia de los pueblos mesoamericanos fue',
          answer: 'El maíz',
          options: ['El aguacate', 'El trigo', 'El jitomate'],
          ru: {
            question: 'Основой питания мезоамериканских народов был',
            answer: 'Кукуруза',
            options: ['Авокадо', 'Пшеница', 'Помидоры']
          }
        },
        {
          id: 'qo73hd',
          type: 'choice',
          question: '¿Cuántas lenguas indígenas existen en México?',
          answer: '68',
          options: ['63', '53', '65'],
          ru: {
            question: 'Сколько индейских языков существует в Мексике?',
            answer: '68',
            options: ['63', '53', '65']
          }
        },
        {
          id: 'geo7ut',
          type: 'choice',
          question:
            '¿Cuál fue uno de los productos artesanales más finos del México antiguo?',
          answer: 'La cerámica anaranjada delgada',
          options: ['El barro cocido', 'Las piñatas', 'La platería'],
          ru: {
            question:
              'Что было одним из самых изысканных ремесленных изделий древней Мексики?',
            answer: 'Тонкая оранжевая керамика',
            options: ['Обожженная глина', 'Пиньяты', 'Ювелирные изделия']
          }
        },
        {
          id: '9zce5c',
          type: 'choice',
          question:
            '¿Cuál es otro término para referirse a los emperadores mexicas?',
          answer: 'Tlatoani',
          options: ['Tonatiuh', 'Huitzilopochtli', 'Huitlacoche'],
          ru: {
            question:
              'Какой еще термин используется для обозначения мексиканских императоров?',
            answer: 'Тлатоани',
            options: ['Тонатиу', 'Уицилопочтли', 'Уитлакоче']
          }
        },
        {
          id: 'mo8v',
          type: 'text',
          question: 'Juego de pelota prehispánico',
          answer:
            'Fue un deporte en equipo de mesoamérica, aparentemente cumplía la función de resolver conflictos de diversa naturaleza: pleitos por tierras, tributo, controles comerciales, también de manera informal, para la recreación de los niños y mujeres. Se encontraron campos de juego de pelota en tierras de la cultura Maya, Teotihuacana, Mexica.',
          ru: {
            question: 'Доколумбовая игра в мяч',
            answer:
              'Это была командная игра мезоамерики, выполнявшая функцию разрешения конфликтов различного характера: споры за земли, дань, торговые споры, а также неформально для развлечения детей и женщин. Поля для игры в мяч были найдены на территориях культуры Майя, Теотиуакана, Мексики.'
          }
        },
        {
          id: '79lnuh',
          type: 'choice',
          question: 'Cultura madre',
          answer: 'Olmeca',
          options: ['Maya', 'Teotihuacana', 'Mexica'],
          ru: {
            question: 'Материнская культура',
            answer: 'Ольмеки',
            options: ['Майя', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: '9wqj4s',
          type: 'choice',
          question:
            '¿Cuál es la cultura prehispánica que adoraba a los jaguares?',
          answer: 'Olmeca',
          options: ['Maya', 'Teotihuacana', 'Mexica'],
          ru: {
            question: 'Какая доколумбовая культура поклонялась ягуарам?',
            answer: 'Ольмеки',
            options: ['Майя', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: '4d8g6',
          type: 'choice',
          question:
            'En el periodo preclásico ¿Cuál fue la tribu más dominante?',
          answer: 'Olmeca',
          options: ['Maya', 'Teotihuacana', 'Mexica'],
          ru: {
            question:
              'В доклассическом периоде какая была самая доминирующая племя?',
            answer: 'Ольмеки',
            options: ['Майя', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: 'jo2fz',
          type: 'choice',
          question:
            'Cultura de las cabezas colosales o cultura del preclásico medio',
          answer: 'Olmeca',
          options: ['Maya', 'Teotihuacana', 'Mexica'],
          ru: {
            question:
              'Культура колоссальных голов или культура среднего доклассического периода',
            answer: 'Ольмеки',
            options: ['Майя', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: 'eyo6ai',
          type: 'choice',
          question:
            'Las mesas de piedra para actos ceremoniales son de la cultura',
          answer: 'Olmeca',
          options: ['Maya', 'Teotihuacana', 'Mexica'],
          ru: {
            question:
              'Каменные столы для церемониальных действий принадлежат культуре',
            answer: 'Ольмеки',
            options: ['Майя', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: 'k4tv2d',
          type: 'choice',
          question:
            '¿Cuál es el centro ceremonial MÁS IMPORTANTE de la cultura Olmeca?',
          answer: 'La Venta, Tabasco',
          options: [
            'San Lorenzo, Veracruz',
            'Chichén Itzá, Yucatán',
            'Pirámide de la Luna, Teotihuacán'
          ],
          ru: {
            question:
              'Какой самый важный церемониальный центр культуры ольмеков?',
            answer: 'Ла Вента, Табаско',
            options: [
              'Сан-Лоренсо, Веракрус',
              'Чичен-Ица, Юкатан',
              'Пирамида Луны, Теотиуакан'
            ]
          }
        },
        {
          id: 'fjaun8',
          type: 'choice',
          question:
            '¿Dónde se encuentra LA PIRÁMIDE más antigua? o primera pirámide mesoamericana hecha de lodo y tierra',
          answer: 'La Venta, Tabasco',
          options: [
            'San Lorenzo, Veracruz',
            'Chichén Itzá, Yucatán',
            'Pirámide de la Luna, Teotihuacan'
          ],
          note: 'Pertenece a la cultura Olmeca.',
          ru: {
            question:
              'Где находится самая старая ПИРАМИДА? или первая мезоамериканская пирамида, сделанная из грязи и земли',
            answer: 'Ла Вента, Табаско',
            options: [
              'Сан-Лоренсо, Веракрус',
              'Чичен-Ица, Юкатан',
              'Пирамида Луны, Теотиуакан'
            ],
            note: 'Принадлежит культуре ольмеков.'
          }
        },
        {
          id: 't68xjr',
          type: 'choice',
          question: 'Centro ceremonial MÁS ANTIGUO de la cultura Olmeca',
          answer: 'San Lorenzo, Veracruz',
          options: [
            'La Venta, Tabasco',
            'Chichén Itzá, Yucatán',
            'Pirámide de la Luna, Teotihuacán'
          ],
          ru: {
            question: 'Самый древний церемониальный центр культуры ольмеков',
            answer: 'Сан-Лоренсо, Веракрус',
            options: [
              'Ла Вента, Табаско',
              'Чичен-Ица, Юкатан',
              'Пирамида Луны, Теотиуакан'
            ]
          }
        },
        {
          id: 'u9fik',
          type: 'choice',
          question: 'Los centros ceremoniales olmecas más importantes fueron',
          answer: 'La Venta, Tres Zapotes y San Lorenzo',
          options: [
            'La Venta, Pirámide del Sol y San Lorenzo',
            'San Lorenzo, La Venta y Chichén Itzá',
            'La Venta, Tres Zapotes y Tollan-Xicocotitlan'
          ],
          ru: {
            question: 'Самые важные церемониальные центры ольмеков были',
            answer: 'Ла Вента, Трес Сапотес и Сан-Лоренсо',
            options: [
              'Ла Вента, Пирамида Солнца и Сан-Лоренсо',
              'Сан-Лоренсо, Ла Вента и Чичен-Ица',
              'Ла Вента, Трес Сапотес и Толлан-Шикокотитлан'
            ]
          }
        },
        {
          id: 'f0nm2',
          type: 'choice',
          question:
            '¿Que civilización se asentó en Chiapas, Yucatán,  Veracruz, Guatemala, Belice y Quintana Roo?',
          answer: 'Los Mayas',
          options: ['Los Teotihuacanos', 'Los Mexicas', 'Los Toltecas'],
          ru: {
            question:
              'Какая цивилизация поселилась в Чьяпасе, Юкатане, Веракрусе, Гватемале, Белизе и Кинтана-Роо?',
            answer: 'Майя',
            options: ['Теотиуаканцы', 'Мексика', 'Тольтеки']
          }
        },
        {
          id: 'ctzqro',
          type: 'choice',
          question: 'Los mayas se caracterizaban por ser',
          answer: 'Astrónomos y matemáticos',
          options: [
            'Astrónomos y físicos',
            'Físicos y químicos',
            'Astrónomos y curanderos'
          ],
          ru: {
            question: 'Майя отличались тем, что были',
            answer: 'Астрономами и математиками',
            options: [
              'Астрономами и физиками',
              'Физиками и химиками',
              'Астрономами и целителями'
            ]
          }
        },
        {
          id: '7eww4i',
          type: 'choice',
          question: '¿Qué era la cuenta larga?',
          answer: 'Un calendario de origen Maya',
          options: [
            'Deudas altas por pagar',
            'Castigo Mesoamericano',
            'Sacrificio Maya'
          ],
          ru: {
            question: 'Что такое длинный счёт?',
            answer: 'Календарь майя',
            options: [
              'Высокие долги для оплаты',
              'Мезоамериканское наказание',
              'Жертвоприношение майя'
            ]
          }
        },
        {
          id: 'pf69dz',
          type: 'choice',
          question: '¿A quien se le atribuye la creación del cero?',
          answer: 'A los Mayas',
          options: ['A los Teotihuacanos', 'A los Mexicas', 'A los Zapotecos'],
          ru: {
            question: 'Кому приписывается создание нуля?',
            answer: 'Майя',
            options: ['Теотиуаканцы', 'Мексика', 'Сапотеки']
          }
        },
        {
          id: '9570d',
          type: 'choice',
          question:
            '¿Cuál es la Deidad Maya del comercio, también conocido como dios del cacao o sexta deidad maya más comúnmente representada en los códices?',
          answer: 'Ek Chuah',
          options: ['Chaac', 'Ah Mun', 'Chuah'],
          ru: {
            question:
              'Какое божество майя торговли, также известное как бог какао или шестое божество майя, наиболее часто изображаемое в кодексах?',
            answer: 'Эк Чуах',
            options: ['Чаак', 'Ах Мун', 'Чуах']
          }
        },
        {
          id: 'm4nvq5',
          type: 'choice',
          question: 'Diosa Maya de la luna',
          answer: 'Ixchel',
          options: ['Chaac', 'Ah Mun', 'Ek Chuah'],
          ru: {
            question: 'Богиня Луны у майя',
            answer: 'Ишчель',
            options: ['Чаак', 'Ах Мун', 'Эк Чуах']
          }
        },
        {
          id: 'otsc2',
          type: 'text',
          question: 'Deidades o dioses Mayas',
          answer:
            'Chaac, dios de la lluvia\nAh mun, dios del maíz\nAhau Kin, dios del sol\nIxchel, diosa de la luna\nBuluc Chabtan, dios de la guerra, destrucción y de los sacrificio humanos',
          ru: {
            question: 'Божества или боги майя',
            answer:
              'Чаак, бог дождя\nАх Мун, бог кукурузы\nАхау Кин, бог солнца\nИшчель, богиня луны\nБулук Чабтан, бог войны, разрушения и человеческих жертвоприношений'
          }
        },
        {
          id: 'g77xgf',
          type: 'choice',
          question: '¿Cuál es la pirámide MÁS ALTA de México?',
          answer: 'Toniná (pertenece a la cultura Maya)',
          options: [
            'La Venta (pertenece a la cultura Olmeca)',
            'El sol (pertenece a la cultura Teotihuacana)',
            'Chichén Itzá (pertenece a la cultura Maya)'
          ],
          note: 'Mide más de 75 metros de altura.',
          ru: {
            question: 'Какая самая высокая пирамида в Мексике?',
            answer: 'Тонина (принадлежит культуре Майя)',
            options: [
              'Ла Вента (принадлежит культуре ольмеков)',
              'Солнце (принадлежит культуре теотиуаканов)',
              'Чичен Ица (принадлежит культуре Майя)'
            ],
            note: 'Её высота составляет более 75 метров.'
          }
        },
        {
          id: 'difwyf',
          type: 'choice',
          question: 'Chichén Itzá fue una poderosa ciudad',
          answer: 'Maya',
          options: ['Mixteca', 'Tarasca', 'Teotihuacana', 'Mexica'],
          ru: {
            question: 'Чичен Ица был могущественным городом',
            answer: 'Майя',
            options: ['Миштеки', 'Тараски', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: '64uo9f',
          type: 'choice',
          question: 'Cultura que se estableció en la Ciudad de Palenque',
          answer: 'Maya',
          options: ['Mixteca', 'Tarasca', 'Teotihuacana', 'Mexica'],
          ru: {
            question: 'Культура, поселившаяся в городе Паленке',
            answer: 'Майя',
            options: ['Миштеки', 'Тараски', 'Теотиуаканская', 'Мексика']
          }
        },
        {
          id: '9kvbrc',
          type: 'choice',
          question: 'Otro nombre del templo de Kukulkan, Chichén Itzá',
          answer: 'El Castillo',
          options: ['La Pirámide', 'El Gran Templo', 'La Luna'],
          ru: {
            question: 'Другое название храма Кукулькана в Чичен-Ице',
            answer: 'Замок',
            options: ['Пирамида', 'Великий храм', 'Луна']
          }
        },
        {
          id: 'l64l3el',
          type: 'choice',
          question:
            'Manuscrito en papel amate o cuero con representaciones pictóricas que relataba asuntos históricos y religiosos del México antiguo',
          answer: 'Códice',
          options: ['Biblia', 'Relatos', 'Libro sagrado'],
          ru: {
            question:
              'Рукопись на амате или коже с пиктографическими изображениями, повествующая об исторических и религиозных делах древней Мексики',
            answer: 'Кодекс',
            options: ['Библия', 'Рассказы', 'Священная книга']
          }
        },
        {
          id: 'cdyjb',
          type: 'choice',
          question:
            'Nombres de centros ceremoniales o ciudades de la cultura Maya',
          answer:
            'Palenque, Yaxchilán, Calakmul, Tikal, Toniná, Chichen Itzá, Copán y Uxmal',
          options: [
            'Mitla, Zaachila, Monte Albán, El Gallo y Bonete',
            'Pátzcuaro, Ihuatzio y Tzintzuntzan',
            'San Lorenzo, La Venta, Laguna de los Cerros y Tres Zapotes'
          ],
          ru: {
            question:
              'Названия церемониальных центров или городов культуры Майя',
            answer:
              'Паленке, Яшчилан, Калакмуль, Тикаль, Тонина, Чичен-Ица, Копан и Ушмаль',
            options: [
              'Митла, Заачила, Монте Альбан, Эль Гайо и Бонете',
              'Пацкуаро, Иуатсио и Цинцунцан',
              'Сан-Лоренсо, Ла Вента, Лагуна де лос Серрос и Трес Сапотес'
            ]
          }
        },
        {
          id: 'f8cqm',
          type: 'choice',
          question: '¿Qué significa Teotihuacán?',
          answer: 'Ciudad de los Dioses',
          options: ['Cuidad Sagrada', 'Cuidad del Maíz', 'Cuidad Eterna'],
          ru: {
            question: 'Что означает Теотиуакан?',
            answer: 'Город богов',
            options: ['Священный город', 'Город кукурузы', 'Вечный город']
          }
        },
        {
          id: 'im3lar',
          type: 'choice',
          question: '¿Qué fué Teotihuacan?',
          answer: 'Fue un centro ceremonial y ciudad',
          options: [
            'Fue una cuidad secreta',
            'Fue una isla',
            'Fue un dios Maya'
          ],
          note: 'En su etapa de mayor esplendor la ciudad albergaba al menos 25.000 personas, incluyendo las suburbios unas 150.000-200.000 personas. A diferencia de otros sitios, Teotihuacán era una ciudad con mercados, barrios de artesanos y comerciantes. Fue la civilización más poderosa de Mesoamérica, ninguna otra ciudad igualó su tamaño.',
          ru: {
            question: 'Что такое Теотиуакан?',
            answer: 'Это был церемониальный центр и город',
            options: [
              'Это был секретный город',
              'Это был остров',
              'Это был бог Майя'
            ],
            note: 'В период своего расцвета город насчитывал не менее 25 000 человек, включая пригороды около 150 000-200 000 человек. В отличие от других мест, Теотиуакан был городом с рынками, районами ремесленников и торговцев. Это была самая мощная цивилизация Мезоамерики, ни один другой город не равнялся её размеру.'
          }
        },
        {
          id: '4n4y58',
          type: 'choice',
          question: '¿Dónde se encuentran las pirámides del Sol y de la Luna?',
          answer: 'Teotihuacan, Estado de México',
          options: [
            'Cuidad de México',
            'Mérida, Yucatán',
            'Oaxaca de Juárez, Oaxaca'
          ],
          ru: {
            question: 'Где находятся пирамиды Солнца и Луны?',
            answer: 'Теотиуакан, штат Мехико',
            options: ['Мехико', 'Мерида, Юкатан', 'Оахака-де-Хуарес, Оахака']
          }
        },
        {
          id: '1fbcyc',
          type: 'choice',
          question: '¿Dónde se ubicaba la Calzada de los Muertos?',
          answer: 'En Teotihuacán',
          options: ['En Chichén Itzá', 'En la Venta', 'En San Lorenzo'],
          note: 'Era la avenida principal con 2 km de longitud.',
          ru: {
            question: 'Где находилась Дорога мёртвых?',
            answer: 'В Теотиуакане',
            options: ['В Чичен-Ице', 'В Ла Венте', 'В Сан-Лоренсо'],
            note: 'Это был главный проспект длиной 2 км.'
          }
        },
        {
          id: '6iu6qi',
          type: 'choice',
          question:
            '¿Cuáles eran los dos grandes grupos étnicos que habitaban en Teotihuacán?',
          answer: 'Nahuas y Otomíes',
          options: [
            'Nahuas y Zapotecas',
            'Mixtecas y Otomíes',
            'Totonacas y Otomíes'
          ],
          ru: {
            question: 'Какие две большие этнические группы жили в Теотиуакане?',
            answer: 'Нахуа и отоми',
            options: ['Нахуа и сапотеки', 'Миштеки и отоми', 'Тотонаки и отоми']
          }
        },
        {
          id: 'nvcnw',
          type: 'choice',
          question: 'Tres productos que los Teotihuacanos obtenían del maguey',
          answer: 'Pulque, cordajes y fibras textiles',
          options: [
            'Pulque, cera y fibras textiles',
            'Pulque, cenizas y cera',
            'Pulque, cordajes y envoltura para tamales'
          ],
          ru: {
            question: 'Три продукта, которые теотиуаканцы получали из магея',
            answer: 'Пульке, канаты и текстильные волокна',
            options: [
              'Пульке, воск и текстильные волокна',
              'Пульке, пепел и воск',
              'Пульке, канаты и обёртка для тамале'
            ]
          }
        },
        {
          id: 'mm9c7e',
          type: 'choice',
          question: '¿Cuál es la deidad suprema de los Teotihuacanos?',
          answer: 'Quetzalcóatl',
          options: ['Cuauhtémoc', 'Moctezuma', 'Huitzilopochtli'],
          note: 'En náhuatl significa ‘Serpiente Emplumada’, de quetzalli ‘pluma’ y cōhuātl ‘serpiente’.',
          ru: {
            question: 'Какое верховное божество теотиуаканцев?',
            answer: 'Кецалькоатль',
            options: ['Куаутемок', 'Монтесума', 'Уицилопочтли'],
            note: "На языке науатль означает 'Пернатый змей', от quetzalli 'перо' и cōhuātl 'змея'."
          }
        },
        {
          id: 'dfr7e',
          type: 'choice',
          question:
            'Deidad del México antiguo conocida como la Serpiente Emplumada',
          answer: 'Quetzalcóatl',
          options: ['Cuauhtémoc', 'Moctezuma', 'Ek Chuah'],
          ru: {
            question: 'Божество древней Мексики, известное как Пернатый змей',
            answer: 'Кецалькоатль',
            options: ['Куаутемок', 'Монтесума', 'Эк Чуах']
          }
        },
        {
          id: 'qeyb0l',
          type: 'choice',
          question:
            '¿Donde se encontraron vestigios de la cultura teotihuacana?',
          answer: 'Tikal',
          options: ['Monte Albán', 'Chichen Itzá', 'Uxmal'],
          note: 'Ubicado en Guatemala. ¿Qué es un vestigio? Señal o huella que queda de algo o de alguien que ha pasado o que ha desaparecido.',
          ru: {
            question: 'Где были найдены следы культуры Теотиуакана?',
            answer: 'Тикаль',
            options: ['Монте-Альбан', 'Чичен-Ица', 'Ушмаль'],
            note: 'Расположен в Гватемале. Что такое след? Знак или отпечаток, оставшийся от чего-то или кого-то, кто прошёл или исчез.'
          }
        },
        {
          id: '6729b',
          type: 'choice',
          question: '¿Dónde se desarrolló la civilización zapoteca?',
          answer:
            'En los valles de Etla, Tlacolula y Zimatlán en el estado de Oaxaca',
          options: [
            'En el Valle de Cuautitlán y Tlacolula de Ciudad de México',
            'El valle del Toloache en Baja Califonia Sur',
            'Valle de Vizcaino en Tijuana'
          ],
          ru: {
            question: 'Где развивалась сапотекская цивилизация?',
            answer: 'В долинах Этла, Тлаколула и Симатлан в штате Оахака',
            options: [
              'В долине Куатитлан и Тлаколула в Мехико',
              'В долине Толоче в Южной Нижней Калифорнии',
              'В долине Вискаино в Тихуане'
            ]
          }
        },
        {
          id: '96dszm',
          type: 'choice',
          question: '¿Qué es el Monte Albán?',
          answer: 'Fue la antigua capital de los Zapotecos',
          options: [
            'Fue la antigua capital de los Mixtecos',
            'Fue la antigua capital de los Olmecas',
            'Fue la antigua capital de los Mayas'
          ],
          note: 'Contó con una población de 35.000 personas.',
          ru: {
            question: 'Что такое Монте-Альбан?',
            answer: 'Это была древняя столица сапотеков',
            options: [
              'Это была древняя столица микстеков',
              'Это была древняя столица ольмеков',
              'Это была древняя столица майя'
            ],
            note: 'Имел население в 35 000 человек.'
          }
        },
        {
          id: 'q6qyag',
          type: 'choice',
          question: 'Edificio público de Monte Albán',
          answer: 'Edificio de los danzantes',
          options: [
            'Edificio de los dioses',
            'Edificio sagrado',
            'Edificio de los triunfantes'
          ],
          ru: {
            question: 'Общественное здание Монте-Альбана',
            answer: 'Здание танцоров',
            options: ['Здание богов', 'Священное здание', 'Здание триумфаторов']
          }
        },
        {
          id: 'pbwmh',
          type: 'choice',
          question:
            '¿A qué se debe el nombre del edificio de los danzantes en Monte Albán?',
          answer:
            'A que las figuras esculpidas en sus lápidas parecen moverse o contorsionarse',
          options: [
            'A una leyenda prehispánica',
            'A un ritual y baile sagrado de los zapotecos',
            'A un danzante sagrado'
          ],
          ru: {
            question: 'Почему здание танцоров в Монте-Альбане так называется?',
            answer:
              'Потому что фигуры, вырезанные на надгробиях, кажутся движущимися или скрученными',
            options: [
              'Из-за доколумбовой легенды',
              'Из-за священного ритуала и танца сапотеков',
              'Из-за священного танцора'
            ]
          }
        },
        {
          id: '70jo',
          type: 'choice',
          question: '¿Dónde se asentaron los Toltecas?',
          answer: 'Tula de Allende, estado de Hidalgo',
          options: [
            'Pachuca, estado de Hidalgo',
            'Tulancingo, estado de Hidalgo',
            'Ixmiquilpan, estado de Hidalgo'
          ],
          ru: {
            question: 'Где поселились тольтеки?',
            answer: 'Тула-де-Альенде, штат Идальго',
            options: [
              'Пачука, штат Идальго',
              'Тулансинго, штат Идальго',
              'Икстмиикплан, штат Идальго'
            ]
          }
        },
        {
          id: 'ks2fby',
          type: 'choice',
          question: '¿Qué significa Tolteca?',
          answer: 'Habitante de Tula',
          options: ['Tuleño', 'Habitante de Toluca', 'Habitante de Tultepec'],
          ru: {
            question: 'Что означает Толтека?',
            answer: 'Житель Тулы',
            options: ['Туленец', 'Житель Толуки', 'Житель Тултепека']
          }
        },
        {
          id: 'no84x',
          type: 'choice',
          question: '¿Qué significa Tula en Náhuatl?',
          answer: 'Juncal, o junto al tular',
          options: [
            'Lugar de coyotes',
            'Cuidad de las flores',
            'En el cerro escrito o pintado'
          ],
          ru: {
            question: 'Что означает Тула на науатль?',
            answer: 'Камышовый лес или рядом с камышом',
            options: [
              'Место койотов',
              'Город цветов',
              'На расписанной или нарисованной горе'
            ]
          }
        },
        {
          id: 'ntzzbj',
          type: 'choice',
          question:
            'Nombre del altar que construía una cultura prehispánica con la base decorada con cráneos tallados en piedra y estacas para ensartar cabezas de los sacrificados',
          answer: 'Tzompantli',
          options: ['Izquitl', 'Tiyānquiztli', 'Itacatl'],
          note: 'Era una estructura parecida a un áбaco donde cada travesaño estaba formado por una hilera de cabezas humanas. El más conocido de acuerdo a diferentes estimaciones antiguas llegó a tener cerca de 60.000 cráneos humanos al momento de la llegada de los españoles en 1521.',
          ru: {
            question:
              'Название алтаря, построенного доколумбовой культурой с основой, украшенной черепами, вырезанными из камня, и кольями для насаживания голов жертв',
            answer: 'Цомпантли',
            options: ['Изкитль', 'Тиянкистли', 'Итакатль'],
            note: 'Это была структура, похожая на абак, где каждая перекладина состояла из ряда человеческих голов. Самый известный по различным древним оценкам содержал около 60 000 человеческих черепов на момент прибытия испанцев в 1521 году.'
          }
        },
        {
          id: 'shm798',
          type: 'choice',
          question: '¿Ciudad donde se usaba el macabro Tzompantli?',
          answer: 'Tula',
          options: ['Chichen Itzá', 'Teotihuacán', 'San Lorenzo'],
          ru: {
            question: 'Город, где использовался мрачный Цомпантли?',
            answer: 'Тула',
            options: ['Чичен Ица', 'Теотиуакан', 'Сан Лоренсо']
          }
        },
        {
          id: '9kvbz',
          type: 'choice',
          question: 'Tribu originaria de Michoacán',
          answer: 'Purépechas',
          options: ['Totonacas', 'Rarámuris', 'Huastecos'],
          ru: {
            question: 'Племя, родом из Мичоакана',
            answer: 'Пурепеча',
            options: ['Тотонаки', 'Рарамуру', 'Уастеки']
          }
        },
        {
          id: 'gkxakp',
          type: 'choice',
          question: 'Los tarascos se destacaron por ser',
          answer:
            'Artesanos, destacaron como carpinteros y especialmente la metalurgia; trabajaron fundamentalmente el oro y la plata',
          options: [
            'Astrónomos y matemáticos',
            'Comerciantes, artesanos y arquitectos',
            'Astrónomos, politicos, artistas y religiosos'
          ],
          ru: {
            question: 'Тараски отличались тем, что были',
            answer:
              'Ремесленниками, выделялись как плотники и особенно металлурги; работали преимущественно с золотом и серебром',
            options: [
              'Астрономами и математиками',
              'Торговцами, ремесленниками и архитекторами',
              'Астрономами, политиками, художниками и религиозными деятелями'
            ]
          }
        },
        {
          id: 'wsozik',
          type: 'choice',
          question: '¿Quién fue Chalchiuhtlicue?',
          answer: 'Diosa de los lagos y corrientes de agua de los Mexicas',
          options: [
            'Dios del cielo y de la tierra',
            'Diosa de la fertilidad Mexica',
            'Dios del viento'
          ],
          ru: {
            question: 'Кто такая Чалчиутликуэ?',
            answer: 'Богиня озёр и водных потоков у мексиканцев',
            options: [
              'Бог неба и земли',
              'Богиня плодородия у мексиканцев',
              'Бог ветра'
            ]
          }
        },
        {
          id: 'tciuki',
          type: 'choice',
          question: 'Diosa de la fertilidad Mexica',
          answer: 'Coatlicue',
          options: ['Cihuacóatl', 'Xochiquetzal', 'Omecíhuatl'],
          ru: {
            question: 'Богиня плодородия у мексиканцев',
            answer: 'Коатликуэ',
            options: ['Сивакоатль', 'Шочикетцаль', 'Омесиуатль']
          }
        },
        {
          id: 'zfdjy',
          type: 'choice',
          question: '¿Quién era el dios de la guerra Mexica?',
          answer: 'Huitzilopochtli',
          options: ['Quetzalcoatl', 'Tepeyollotl', 'Chalchitlicue'],
          ru: {
            question: 'Кто был богом войны у мексиканцев?',
            answer: 'Уицилопочтли',
            options: ['Кецалькоатль', 'Тепейоллотль', 'Чалчитликуэ']
          }
        },
        {
          id: 'qy4bh',
          type: 'choice',
          question: 'Deidad azteca relacionada con el sol',
          answer: 'Tonatiuh',
          options: ['Huitzilopochtli', 'Quetzalcoatl', 'Chalchitlicue'],
          ru: {
            question: 'Ацтекское божество, связанное с солнцем',
            answer: 'Тонатиу',
            options: ['Уицилопочтли', 'Кецалькоатль', 'Чалчитликуэ']
          }
        },
        {
          id: 'qznxrq',
          type: 'choice',
          question: 'Deidad azteca de la lluvia y del relámpago',
          answer: 'Tlaloc',
          options: ['Quetzalcóatl', 'Coatlicue', 'Tonatiuh'],
          note: 'Como tributo se le ofrecían niños y perros sacrificados.',
          ru: {
            question: 'Ацтекское божество дождя и молнии',
            answer: 'Тлалок',
            options: ['Кецалькоатль', 'Коатликуэ', 'Тонатиу'],
            note: 'В качестве дани ему приносили в жертву детей и собак.'
          }
        },
        {
          id: 'hfbbj',
          type: 'choice',
          question: 'Anfibio representado junto al Dios Xólotl',
          answer: 'Ajolote',
          options: ['Dermophiidae', 'Sapo', 'Rana'],
          ru: {
            question: 'Амфибия, изображенная рядом с богом Шолотлем',
            answer: 'Аксолотль',
            options: ['Dermophiidae', 'Жаба', 'Лягушка']
          }
        },
        {
          id: 'tq5fu',
          type: 'choice',
          question: 'Lugar mítico de donde salieron los Mexicas o Aztecas',
          answer: 'Aztlán',
          options: ['Teotihuacan', 'Tenochitlán', 'San Lorenzo'],
          ru: {
            question: 'Мифическое место, откуда вышли мексиканцы или ацтеки',
            answer: 'Ацтлан',
            options: ['Теотиуакан', 'Теночитлан', 'Сан Лоренсо']
          }
        },
        {
          id: 'bdc1te',
          type: 'choice',
          question: '¿Que significa Aztlán?',
          answer: 'Garza, lugar de las garzas',
          options: [
            'Dios, lugar de los dioses',
            'Sagrado, lugar sagrado',
            'Flores, lugar de las flores'
          ],
          ru: {
            question: 'Что означает Ацтлан?',
            answer: 'Цапля, место цапель',
            options: [
              'Бог, место богов',
              'Священный, священное место',
              'Цветы, место цветов'
            ]
          }
        },
        {
          id: 'ncd0nn',
          type: 'choice',
          question:
            'Terreno construido sobre las lagunas del Valle de México que sirvió de base al sistema productivo del altiplano central. En la actualidad, puede encontrarse en Xochimilco',
          answer: 'Chinampa',
          options: ['Isla', 'Islote', 'Sistema artificial de cultivo'],
          ru: {
            question:
              'Участок, построенный на озёрах долины Мехико, служивший основой производственной системы центрального нагорья. В настоящее время его можно найти в Сочимилько',
            answer: 'Чинампа',
            options: ['Остров', 'Островок', 'Искусственная система земледелия']
          }
        },
        {
          id: 'sx586e',
          type: 'choice',
          question:
            '¿Cuáles eran las escuelas donde asistían los indios prehispánicos e hijos de los nobles mexicas?',
          answer:
            'Calmecac (nobles), Telpochcalli (plebeyos o jóvenes del pueblo)',
          options: [
            'Colegio de la Santa Cruz de Santiago Tlatelolco (nobles), Telpochcalli (plebeyos o jóvenes del pueblo)',
            'Calmecac (nobles), Colegio de San Nicolás Obispo (plebeyos o jóvenes del pueblo)',
            'Colegio de San Ildefonso (nobles), Telpochcalli (plebeyos o jóvenes del pueblo)'
          ],
          ru: {
            question:
              'Какие были школы, где учились доколумбовые индейцы и дети мексиканской знати?',
            answer:
              'Кальмекак (знать), Телпочкалли (простолюдины или молодёжь из народа)',
            options: [
              'Колледж Санта-Крус-де-Сантьяго Тлателолко (знать), Телпочкалли (простолюдины или молодёжь из народа)',
              'Кальмекак (знать), Колледж Сан-Николас Обиспо (простолюдины или молодёжь из народа)',
              'Колледж Сан-Ильдефонсо (знать), Телпочкалли (простолюдины или молодёжь из народа)'
            ]
          }
        },
        {
          id: 'zt2ips',
          type: 'choice',
          question: '¿Por qué actividad fueron conocidos los aztecas?',
          answer:
            'Guerreros, agricultura, comercio, culto religioso y sacrificios humanos',
          options: [
            'Astrónomía, agricultura y matemática',
            'Comercio, artesanía y arquitectura',
            'Astronomía, política, arte y religión'
          ],
          ru: {
            question: 'Чем были известны ацтеки?',
            answer:
              'Воины, земледелие, торговля, религиозный культ и человеческие жертвоприношения',
            options: [
              'Астрономия, земледелие и математика',
              'Торговля, ремесло и архитектура',
              'Астрономия, политика, искусство и религия'
            ]
          }
        },
        {
          id: 'lcpqm',
          type: 'choice',
          question: '¿Qué significa Cuauhtémoc?',
          answer: 'Águila que desciende o águila que se posa',
          options: [
            'Varilla de cabellos',
            'Colibrí zurdo',
            'Criatura espinosa'
          ],
          ru: {
            question: 'Что означает Куаутемок?',
            answer: 'Орёл, который спускается или садится',
            options: ['Волосок', 'Левша колибри', 'Колючее существо']
          }
        },
        {
          id: 'j6dm9',
          type: 'choice',
          question:
            'Significado de la palabra altepetl con la que los tlatoanis denominaban a sus ciudades',
          answer: 'Cerro de agua',
          options: [
            'Cerro de agua azul',
            'Cerro de tlatoanis',
            'Cerro de dios'
          ],
          ru: {
            question:
              'Значение слова альтепетль, которым тлатоани называли свои города',
            answer: 'Гора воды',
            options: ['Гора синей воды', 'Гора тлатоани', 'Гора бога']
          }
        },
        {
          id: '2h2smu',
          type: 'choice',
          question: '¿Quienes integraron la triple alianza?',
          answer: 'Tenochtitlan, Texcoco, Tlacopan',
          options: [
            'Teotihuacán, Texcoco, Tlacopan',
            'San Lorenzo, Texcoco, Tlacopan',
            'Tenochtitlan, Texcoco, La Venta'
          ],
          ru: {
            question: 'Кто составлял тройственный союз?',
            answer: 'Теночтитлан, Тескоко, Тлакпан',
            options: [
              'Теотиуакан, Тескоко, Тлакпан',
              'Сан-Лоренсо, Тескоко, Тлакпан',
              'Теночтитлан, Тескоко, Ла Вента'
            ]
          }
        },
        {
          id: 'zrp7adn',
          type: 'choice',
          question: 'Etnia de Guanajuato',
          answer: 'Chichimeca Jonaz',
          options: ['Tolteca', 'Rarámuri', 'Zapotecos'],
          ru: {
            question: 'Этническая группа Гуанахуато',
            answer: 'Чичимеки Джонас',
            options: ['Тольтеки', 'Рарамуру', 'Сапотеки']
          }
        },
        {
          id: 'n7iuy',
          type: 'choice',
          question: 'Cultura indígena que persiste en el norte del país',
          answer: 'Tarahumara',
          options: ['Maya', 'Zapoteca', 'Mexica'],
          ru: {
            question: 'Коренная культура, сохраняющаяся на севере страны',
            answer: 'Тараумара',
            options: ['Майя', 'Сапотека', 'Мексика']
          }
        },
        {
          id: 'ih28m8',
          type: 'choice',
          question: '¿De qué parte del país son los Tarahumaras?',
          answer: 'Chihuahua',
          options: ['Durango', 'Sonora', 'Baja California'],
          ru: {
            question: 'Из какой части страны тараумары?',
            answer: 'Чихуахуа',
            options: ['Дуранго', 'Сонора', 'Баха Калифорния']
          }
        },
        {
          id: 'bsd7a',
          type: 'choice',
          question: 'Tribu indígena de Durango',
          answer: 'Tepehuanes',
          options: ['Mayas', 'Zapotecas', 'Mexicas'],
          ru: {
            question: 'Коренное племя Дуранго',
            answer: 'Тепеуаны',
            options: ['Майя', 'Сапотеки', 'Мексика']
          }
        },
        {
          id: 'k3uvs',
          type: 'choice',
          question: 'Tribu indígena de Coahuila',
          answer: 'Kikapú',
          options: ['Maya', 'Zapoteca', 'Mexica'],
          ru: {
            question: 'Коренное племя Коауилы',
            answer: 'Кикапу',
            options: ['Майя', 'Сапотеки', 'Мексика']
          }
        },
        {
          id: '8ovq5m',
          type: 'choice',
          question: 'Comunidad indígena que habita actualmente en Tabasco',
          answer: 'Mayas-Chontales',
          options: ['Tarahumara', 'Zapotecos', 'Toltecas'],
          ru: {
            question:
              'Коренное сообщество, проживающее в настоящее время в Табаско',
            answer: 'Майя-Чонтали',
            options: ['Тараумара', 'Сапотеки', 'Тольтеки']
          }
        }
      ]
    },
    {
      id: 'v00zr',
      title: 'Historia: Revolución',
      ru: {
        title: 'История: Революция'
      },
      questions: [
        {
          id: 'r9q5k',
          type: 'text',
          question: '¿Qué es la revolución?',
          answer:
            'Inicia cuando Fracisco I Madero publica el Plan San Luis Potosí donde llama a tomar las armas, aparecen personajes como Pascual Orozco, Pancho Villa y Emiliano Zapata, se inicia una lucha en la que los revolucionarios salen victoriosos y Porfirio Díaz renuncia al poder en Mayo de 1911.',
          ru: {
            question: 'Что такое революция?',
            answer:
              'Начинается, когда Франсиско I. Мадеро публикует План Сан-Луис-Потоси, в котором призывает взяться за оружие, появляются такие персонажи, как Паскуаль Ороско, Панчо Вилья и Эмилиано Сапата, начинается борьба, в которой революционеры выходят победителями, и Порфирио Диас отказывается от власти в мае 1911 года.'
          }
        },
        {
          id: 'rhx4t',
          type: 'choice',
          question: 'Fecha de la Revolución Mexicana',
          answer: '20 de noviembre de 1910',
          options: [
            '05 de noviembre de 1810',
            '15 de noviembre de 1710',
            '30 de noviembre de 1910'
          ],
          ru: {
            question: 'Дата Мексиканской революции',
            answer: '20 ноября 1910 года',
            options: [
              '05 ноября 1810 года',
              '15 ноября 1710 года',
              '30 ноября 1910 года'
            ]
          }
        },
        {
          id: '0r04xt',
          type: 'choice',
          question: '¿Qué se celebra el 20 de noviembre?',
          answer: 'Día de la Revolución Mexicana',
          options: [
            'Dia de los Muertos',
            'Independencia de México',
            'Dia de la Bandera'
          ],
          ru: {
            question: 'Что отмечается 20 ноября?',
            answer: 'День Мексиканской революции',
            options: ['День мертвых', 'Независимость Мексики', 'День флага']
          }
        },
        {
          id: 'bkxotq',
          type: 'choice',
          question: 'Orden cronológico de los eventos',
          answer: 'Conquista, independencia y revolución',
          options: [
            'Conquista, Revolución e Independencia',
            'Revolución, Conquista e Independencia',
            'Independencia, Revolución, Conquista'
          ],
          ru: {
            question: 'Хронологический порядок событий',
            answer: 'Завоевание, независимость и революция',
            options: [
              'Завоевание, революция и независимость',
              'Революция, завоевание и независимость',
              'Независимость, революция, завоевание'
            ]
          }
        },
        {
          id: 'el3ek',
          type: 'text',
          question: 'Personajes de la revolución',
          answer:
            'Porfirio Diaz\nPancho Villa\nFrancisco I. Madero\nEmiliano Zapata\nVictoriano Huerta\nVenustiano Carranza\nPino Suarez\nPlutarco Elias Calles',
          ru: {
            question: 'Персонажи революции',
            answer:
              'Порфирио Диас\nПанчо Вилья\nФрансиско И. Мадеро\nЭмилиано Сапата\nВикториано Уэрта\nВенустиано Карранса\nПино Суарес\nПлутарко Элиас Кальес'
          }
        },
        {
          id: '78azu',
          type: 'choice',
          question: '¿De qué se trató el plan de San Luis Potosí?',
          answer:
            'Fué promulgado por Francisco I. Madero, para evitar la reelección de Porfirio Diaz y derrocar el porfiriato. Se buscaba lograr elecciones libres y democráticas',
          options: [
            'No proliferación de armas nucleares',
            'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
            'Documento en el que se acuerda la Independencia de México'
          ],
          note: '5 de Octubre de 1910.',
          ru: {
            question: 'О чем был план Сан-Луис-Потоси?',
            answer:
              'Был издан Франсиско И. Мадеро, чтобы предотвратить переизбрание Порфирио Диаса и свергнуть порфириат. Стремились к свободным и демократическим выборам',
            options: [
              'Нераспространение ядерного оружия',
              'Провозглашен Адрианом Флоренсио Вильярреалом для прекращения диктатуры Санта-Анны',
              'Документ, в котором согласовывается независимость Мексики'
            ],
            note: '5 октября 1910 года.'
          }
        },
        {
          id: 'j4khkr',
          type: 'choice',
          question:
            'El lema “Sufragio efectivo, no reelección” fue la bandera política de',
          answer: 'Francisco I. Madero',
          options: ['Benito Juarez', 'Porfirio Díaz', 'Vicente Guerrero'],
          ru: {
            question:
              'Лозунг “Эффективное избирательное право, без переизбрания” был политическим лозунгом',
            answer: 'Франсиско И. Мадеро',
            options: ['Бенито Хуарес', 'Порфирио Диас', 'Висенте Герреро']
          }
        },
        {
          id: 'aijexh',
          type: 'choice',
          question:
            'Nombre del líder agrario que encabezó la revolución mexicana en el estado de Morelos',
          answer: 'Emiliano Zapata',
          options: [
            'Doroteo Arango',
            'Venustiano Carranza',
            'Francisco I. Madero'
          ],
          ru: {
            question:
              'Имя аграрного лидера, возглавившего мексиканскую революцию в штате Морелос',
            answer: 'Эмилиано Сапата',
            options: [
              'Доротео Аранго',
              'Венустиано Карранса',
              'Франсиско И. Мадеро'
            ]
          }
        },
        {
          id: '3cxsnd',
          type: 'choice',
          question: '¿Quién dijo "Tierra y libertad"?',
          answer: 'Emiliano Zapata',
          options: [
            'Doroteo Arango',
            'Venustiano Carranza',
            'Francisco I. Madero'
          ],
          ru: {
            question: 'Кто сказал "Земля и свобода"?',
            answer: 'Эмилиано Сапата',
            options: [
              'Доротео Аранго',
              'Венустиано Карранса',
              'Франсиско И. Мадеро'
            ]
          }
        },
        {
          id: 'cb6wha',
          type: 'choice',
          question: '¿Cuándo y dónde fué asesinado Emiliano Zapata?',
          answer: 'En la hacienda Chinameca, Morelos, el 10 de abril de 1919',
          options: [
            'En ciudad de Mexico el 14 de Febrero de 1920',
            'En Puebla el 10 de Marzo de 1918',
            'En la hacienda del Carmen en Hidalgo el 27 de Abril de 1919'
          ],
          ru: {
            question: 'Когда и где был убит Эмилиано Сапата?',
            answer: 'На асьенде Чинамека, Морелос, 10 апреля 1919 года',
            options: [
              'В Мехико 14 февраля 1920 года',
              'В Пуэбле 10 марта 1918 года',
              'На асьенде дель Кармен в Идальго 27 апреля 1919 года'
            ]
          }
        },
        {
          id: 'ckeul',
          type: 'choice',
          question:
            'Acontecimiento relacionado con la industria minera y la revolución',
          answer: 'Huelga de Cananea',
          options: ['Huelga Minera', 'Huelga de Sonora', 'Huelga industrial'],
          note: 'Fue una huelga dada en la ciudad minera de cobre de Cananea, Sonora, que sentó precedentes para la revolución, por lo que a la ciudad se le conoce como cuna de la revolución.',
          ru: {
            question:
              'Событие, связанное с горнодобывающей промышленностью и революцией',
            answer: 'Забастовка в Кананеа',
            options: [
              'Горнодобывающая забастовка',
              'Забастовка в Соноре',
              'Промышленная забастовка'
            ],
            note: 'Это была забастовка в медном шахтерском городе Кананеа, Сонора, которая создала прецедент для революции, поэтому город известен как колыбель революции.'
          }
        },
        {
          id: 'rqmyz',
          type: 'choice',
          question:
            'Composición musical característica de la época revolucionaria',
          answer: 'El Corrido',
          options: ['Las Golondrinas', 'La Bikina', 'Las Mañanitas'],
          note: 'Narrativa popular en forma de canción sobre temas políticos, históricos, etc.',
          ru: {
            question:
              'Музыкальная композиция, характерная для революционной эпохи',
            answer: 'Корридо',
            options: ['Лас Голондринас', 'Ла Бикина', 'Лас Мананитас'],
            note: 'Популярный рассказ в виде песни о политических, исторических и других темах.'
          }
        },
        {
          id: 'ajp61',
          type: 'choice',
          question: 'Nombre de un famoso corrido revolucionario',
          answer: 'La Adelita',
          options: ['El Caballo Blanco', 'La Valentina', 'El Barzón'],
          ru: {
            question: 'Название известного революционного корридо',
            answer: 'Ла Аделита',
            options: ['Эль Кабальо Бланко', 'Ла Валентина', 'Эль Барсон']
          }
        },
        {
          id: 'sifxm',
          type: 'choice',
          question: '"Las Adelitas" acompañaron a sus hombres al combate en',
          answer: 'La Revolución de 1910',
          options: [
            'La lucha independentista',
            'La Guerra Cristera',
            'La Batalla de Puebla'
          ],
          ru: {
            question: '"Аделиты" сопровождали своих мужчин в бою в',
            answer: 'Революции 1910 года',
            options: [
              'Войне за независимость',
              'Кристерской войне',
              'Битве при Пуэбле'
            ]
          }
        },
        {
          id: 'vlz2nd',
          type: 'choice',
          question: '¿De qué se trató el plan de Ayala?',
          answer:
            'Proclamado por Emiliano Zapata para desconocer el gobierno de Francisco I. Madero y devolver la propiedad a los campesinos. Su lema fue: "Reforma, Libertad, Justicia y Ley"',
          options: [
            'No proliferación de armas nucleares',
            'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
            'Documento en el que se acuerda la Independencia de México'
          ],
          note: '28 de Noviembre de 1911.',
          ru: {
            question: 'О чем был план Аялы?',
            answer:
              'Провозглашен Эмилиано Сапатой для непризнания правительства Франсиско И. Мадеро и возвращения собственности крестьянам. Его лозунг был: "Реформа, Свобода, Справедливость и Закон"',
            options: [
              'Нераспространение ядерного оружия',
              'Провозглашен Адрианом Флоренсио Вильярреалом для прекращения диктатуры Санта-Анны',
              'Документ, в котором согласовывается независимость Мексики'
            ],
            note: '28 ноября 1911 года.'
          }
        },
        {
          id: 'zwrqpw',
          type: 'choice',
          question:
            '¿Quién fué el autor de la traición de Francisco I. Madero?',
          answer: 'Victoriano Huerta',
          options: ['Emiliano Zapata', 'Porfirio Díaz', 'Venustiano Carranza'],
          ru: {
            question: 'Кто был автором предательства Франсиско И. Мадеро?',
            answer: 'Викториано Уэрта',
            options: ['Эмилиано Сапата', 'Порфирио Диас', 'Венустиано Карранса']
          }
        },
        {
          id: 'wvd8rc',
          type: 'choice',
          question:
            'Nombre del golpe de estado ocurrido del 9 al 19 de febrero de 1913 o golpe militar para  derrocar a Francisco I. Madero',
          answer: 'Decena Trágica',
          options: [
            'Temporada de Zopilotes',
            'El Golpe Duro',
            'La Noche Triste'
          ],
          ru: {
            question:
              'Название государственного переворота, произошедшего с 9 по 19 февраля 1913 года или военного переворота для свержения Франсиско И. Мадеро',
            answer: 'Трагическая десятка',
            options: ['Сезон стервятников', 'Жесткий удар', 'Грустная ночь']
          }
        },
        {
          id: 'v9ykzf',
          type: 'choice',
          question: '¿De qué trató el Plan de Guadalupe?',
          answer:
            'Plan para desconocer el gobierno de Victoriano Huerta por la traición a Francisco I. Madero. Fue creado por Venustiano Carranza',
          options: [
            'No proliferación de armas nucleares',
            'México suma territorio en el Norte',
            'Documento en el que se acuerda la Independencia de México'
          ],
          note: 'Firmado el 26 de Marzo de 1913 en la Hacienda Guadalupe en Coahuila.',
          ru: {
            question: 'О чем был план Гваделупе?',
            answer:
              'План по непризнанию правительства Викториано Уэрты за предательство Франсиско И. Мадеро. Создан Венустиано Каррансой',
            options: [
              'Нераспространение ядерного оружия',
              'Мексика присоединяет территорию на севере',
              'Документ, в котором согласовывается независимость Мексики'
            ],
            note: 'Подписан 26 марта 1913 года в асьенде Гваделупе в Коауиле.'
          }
        },
        {
          id: 'x28cz8',
          type: 'choice',
          question:
            'Plan de Venustiano Carranza para derrocar a Victoriano Huerta',
          answer: 'Plan Guadalupe',
          options: ['Plan de Iguala', 'Plan de San Luis', 'Plan de Noria'],
          ru: {
            question: 'План Венустиано Каррансы по свержению Викториано Уэрты',
            answer: 'План Гваделупе',
            options: ['План Игала', 'План Сан-Луиса', 'План Нории']
          }
        },
        {
          id: 'hxqtgo',
          type: 'choice',
          question:
            '¿Quién encabezaba el ejército constitucionalista durante la revolución?',
          answer: 'Venustiano Carranza',
          options: ['Francisco I. Madero', 'Doroteo Arango', 'Emiliano Zapata'],
          ru: {
            question:
              'Кто возглавлял конституционную армию во время революции?',
            answer: 'Венустиано Карранса',
            options: [
              'Франсиско И. Мадеро',
              'Доротео Аранго',
              'Эмилиано Сапата'
            ]
          }
        },
        {
          id: 'r9zca',
          type: 'choice',
          question: '¿Quién fué Pancho Villa?',
          answer: 'Líder de la revolución mexicana',
          options: [
            'Líder de la independencia',
            'Virrey de España',
            'Un traidor de la revolución mexicana'
          ],
          note: 'Apareció en escena cuando Venustiano Carranza llamó a formar el ejército constitucionalista.',
          ru: {
            question: 'Кем был Панчо Вилья?',
            answer: 'Лидер мексиканской революции',
            options: [
              'Лидер независимости',
              'Вице-король Испании',
              'Предатель мексиканской революции'
            ],
            note: 'Появился на сцене, когда Венустиано Карранса призвал создать конституционную армию.'
          }
        },
        {
          id: '3x4ei9',
          type: 'choice',
          question: 'Nombre de Pancho Villa',
          answer: 'José Doroteo Arango Arámbula',
          options: [
            'Emiliano Zapata Salazar',
            'Victoriano Huerta',
            'Venustiano Carranza'
          ],
          ru: {
            question: 'Имя Панчо Вильи',
            answer: 'Хосе Доротео Аранго Арамбула',
            options: [
              'Эмилиано Сапата Салазар',
              'Викториано Уэрта',
              'Венустиано Карранса'
            ]
          }
        },
        {
          id: '7ouw55',
          type: 'choice',
          question: '¿A quién se le conoce como el Centauro del Norte?',
          answer: 'Pancho Villa',
          options: [
            'Emiliano Zapata',
            'Victoriano Huerta',
            'Venustiano Carranza'
          ],
          ru: {
            question: 'Кого знают как Кентавра Севера?',
            answer: 'Панчо Вилью',
            options: [
              'Эмилиано Сапата',
              'Викториано Уэрта',
              'Венустиано Карранса'
            ]
          }
        },
        {
          id: 'rna7ea',
          type: 'choice',
          question: '¿Cuándo y dónde fué asesinado Pancho Villa?',
          answer: '20 de Julio de 1923 en Parral, Chihuahua',
          options: [
            '05 de Julio de 1923 en Querétaro',
            '20 de Diciembre de 1923 en Coahuila',
            '10 de Febrero de 1923 en Nuevo León'
          ],
          note: 'Fue abaleado múltiples veces en su vehículo y su cadáver fue decapitado.',
          ru: {
            question: 'Когда и где был убит Панчо Вилья?',
            answer: '20 июля 1923 года в Паррале, Чиуауа',
            options: [
              '5 июля 1923 года в Керетаро',
              '20 декабря 1923 года в Коауиле',
              '10 февраля 1923 года в Нуэво-Леоне'
            ],
            note: 'Был многократно застрелен в своем автомобиле, а его тело было обезглавлено.'
          }
        },
        {
          id: '5aq09b',
          type: 'choice',
          question:
            '¿En qué año se firmó la constitución que nos rige actualmente?',
          answer: '5 de Febrero de 1917 en Querétaro',
          options: [
            '7 de Marzo de 1917 en Jalisco',
            '12 de Diciembre en Ciudad de Mexico',
            '3 de Enero en Nuevo León'
          ],
          ru: {
            question:
              'В каком году была подписана конституция, которая нас сейчас регулирует?',
            answer: '5 февраля 1917 года в Керетаро',
            options: [
              '7 марта 1917 года в Халиско',
              '12 декабря в Мехико',
              '3 января в Нуэво-Леоне'
            ]
          }
        },
        {
          id: 'xnvjwm',
          type: 'choice',
          question:
            '¿Quién fué el primer secretario de educación pública de México (1921)?',
          answer: 'José Vasconcelos',
          options: [
            'Elba Esther Gordillo',
            'Bernardo J. Gastélum',
            'Plutarco Elías Calles'
          ],
          ru: {
            question:
              'Кто был первым секретарем общественного образования Мексики (1921)?',
            answer: 'Хосе Васконселос',
            options: [
              'Эльба Эстер Гордильо',
              'Бернардо Х. Гастелум',
              'Плутарко Элиас Кальес'
            ]
          }
        },
        {
          id: 'bmrub9',
          type: 'choice',
          question:
            '¿Quién fue el Secretario de educación pública y bellas artes de 1901 a 1911?',
          answer: 'Justo Sierra',
          options: [
            'Jose Vasconcelos',
            'Félix Fulgencio Palavicini',
            'Bernardo J. Gastélum'
          ],
          ru: {
            question:
              'Кто был секретарем общественного образования и изящных искусств с 1901 по 1911 год?',
            answer: 'Хусто Сьерра',
            options: [
              'Хосе Васконселос',
              'Феликс Фульхенсио Палавичини',
              'Бернардо Х. Гастелум'
            ]
          }
        }
      ]
    },
    {
      id: 'u6w4x',
      title: 'Artes I: Literatura y música',
      ru: {
        title: ''
      },
      questions: [
        {
          id: 'oqiuc',
          type: 'choice',
          question: 'El teatro de mayor prestigio en la Ciudad de México es',
          answer: 'Palacio de Bellas Artes',
          options: [
            'Teatro Mayor',
            'Teatro Juarez',
            'Palacio del Arte y la Cultura'
          ],
          ru: {
            question: 'Самый престижный театр в Мехико это',
            answer: 'Дворец изящных искусств',
            options: [
              'Театр Майор',
              'Театр Хуарес',
              'Дворец искусства и культуры'
            ]
          }
        },
        {
          id: '27dhya',
          type: 'choice',
          question:
            '¿Qué se inauguró durante el período presidencial de Abelardo Rodríguez Lujan?',
          answer: 'El Palacio de Bellas Artes',
          options: ['El IMSS', 'La Diana Cazadora', 'La Estela de Luz'],
          note: '29 de Septiembre de 1934.',
          ru: {
            question:
              'Что было открыто в период президентства Абелардо Родригеса Лухана?',
            answer: 'Дворец изящных искусств',
            options: ['IMSS', 'Диана Охотница', 'Эстела де Лус'],
            note: '29 сентября 1934 года.'
          }
        },
        {
          id: 'llflfe',
          type: 'choice',
          question:
            'Nombre del antiguo teatro donde se construyó el Palacio de Bellas Artes',
          answer: 'Teatro Nacional',
          options: [
            'Teatro antiguo',
            'Teatro de la Ciudad de México',
            'Teatro Metropolitano'
          ],
          ru: {
            question:
              'Название старого театра, на месте которого построен Дворец изящных искусств',
            answer: 'Национальный театр',
            options: [
              'Старый театр',
              'Театр города Мехико',
              'Метрополитенский театр'
            ]
          }
        },
        {
          id: '4ls26c',
          type: 'choice',
          question: '¿Dónde se ubica el Teatro Juárez?',
          answer: 'Guanajuato',
          options: ['Zacatecas', 'Jalisco', 'CDMX'],
          note: 'Es uno de los teatros históricos más reconocidos de México, sede del Festival Cervantino.',
          ru: {
            question: 'Где находится Театр Хуарес?',
            answer: 'Гуанахуато',
            options: ['Сакатекас', 'Халиско', 'Мехико'],
            note: 'Это один из самых известных исторических театров Мексики, место проведения Фестиваля Сервантеса.'
          }
        },
        {
          id: 'xi6wy',
          type: 'choice',
          question:
            '¿Cómo se llama el premio que entrega el Instituto Nacional de Bellas Artes?',
          answer: 'Premio Bellas Artes',
          options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
          note: 'Fundado en 1945, premia diferentes categorías.',
          ru: {
            question:
              'Как называется премия, вручаемая Национальным институтом изящных искусств?',
            answer: 'Премия изящных искусств',
            options: [
              'Хосе Васконселос',
              'Эль Херальдо де Мехико',
              'Премия Охтли'
            ],
            note: 'Основана в 1945 году, награждает в различных категориях.'
          }
        },
        {
          id: 'rkxodd',
          type: 'choice',
          question:
            '¿Cómo se llama el premio que entrega Bellas Artes de cuento o literario?',
          answer: 'Amparo Dávila',
          options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
          ru: {
            question:
              'Как называется премия, вручаемая за рассказ или литературное произведение?',
            answer: 'Ампаро Давила',
            options: [
              'Хосе Васконселос',
              'Эль Херальдо де Мехико',
              'Премия Охтли'
            ]
          }
        },
        {
          id: 'ejdnlp',
          type: 'text',
          question: 'Mexicanos que han ganado Premio Cervantes',
          answer:
            'Octavio Paz\nCarlos Fuentes\nElena Poniatowska\nJose Emilio Pacheco\nFernando del Paso\nSergio Pitol',
          ru: {
            question: 'Мексиканцы, выигравшие премию Сервантеса',
            answer:
              'Октавио Пас\nКарлос Фуэнтес\nЕлена Понятовская\nХосе Эмилио Пачеко\nФернандо дель Пасо\nСерхио Питоль'
          }
        },
        {
          id: 'vsl5gh',
          type: 'choice',
          question: '¿Que fué Juan Rulfo?',
          answer: 'Escritor',
          options: ['Pintor', 'Muralista', 'Escultor'],
          note: 'Reconocido como uno de los grandes maestros de la narrativa hispanoamericana del siglo XX.',
          ru: {
            question: 'Кем был Хуан Рульфо?',
            answer: 'Писатель',
            options: ['Художник', 'Муралист', 'Скульптор'],
            note: 'Признан одним из великих мастеров латиноамериканской прозы XX века.'
          }
        },
        {
          id: 'pf8qgf',
          type: 'choice',
          question: '¿Quién escribió "El llano en llamas"?',
          answer: 'Juan Rulfo',
          options: ['Octavio Paz', 'Carlos Fuentes', 'Elena Poniatowska'],
          ru: {
            question: 'Кто написал "Пылающую равнину"?',
            answer: 'Хуан Рульфо',
            options: ['Октавио Пас', 'Карлос Фуэнтес', 'Елена Понятовская']
          }
        },
        {
          id: 'j687v8',
          type: 'choice',
          question:
            '¿Qué obra escribió Carlos Fuentes sobre la vida mexicana en 1958?',
          answer: 'La región más transparente',
          options: [
            'Temporada de zopilotes',
            'El llano en llamas',
            'Las voces de Tlatelolco'
          ],
          ru: {
            question:
              'Какое произведение написал Карлос Фуэнтес о мексиканской жизни в 1958 году?',
            answer: 'Самый прозрачный регион',
            options: [
              'Сезон стервятников',
              'Пылающая равнина',
              'Голоса Тлателолко'
            ]
          }
        },
        {
          id: 'uk2sk',
          type: 'choice',
          question: '"La muerte de Artemio Cruz" es una novela de',
          answer: 'Carlos Fuentes',
          options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
          ru: {
            question: '"Смерть Артемио Круса" это роман',
            answer: 'Карлоса Фуэнтеса',
            options: ['Октавио Пас', 'Хуан Рульфо', 'Елена Понятовская']
          }
        },
        {
          id: 'y805zc',
          type: 'choice',
          question: '¿Quién escribió "Los Cinco Soles de México"?',
          answer: 'Carlos Fuentes',
          options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
          ru: {
            question: 'Кто написал "Пять солнц Мексики"?',
            answer: 'Карлос Фуэнтес',
            options: ['Октавио Пас', 'Хуан Рульфо', 'Елена Понятовская']
          }
        },
        {
          id: 'is89di',
          type: 'choice',
          question: '¿Quién escribió "Aura"?',
          answer: 'Carlos Fuentes',
          options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
          ru: {
            question: 'Кто написал "Ауру"?',
            answer: 'Карлос Фуэнтес',
            options: ['Октавио Пас', 'Хуан Рульфо', 'Елена Понятовская']
          }
        },
        {
          id: 'lfo42q',
          type: 'choice',
          question: '¿Quién escribió "La Noche de Tlatelolco"?',
          answer: 'Elena Poniatowska',
          options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
          note: 'Escritora, periodista y activista mexicana, nacida en Francia. Es una crónica basada en la matanza estudiantil sucedida durante el 2 de octubre de 1968 en la Plaza de las Tres Culturas.',
          ru: {
            question: 'Кто написал "Ночь Тлателолко"?',
            answer: 'Елена Понятовская',
            options: ['Октавио Пас', 'Хуан Рульфо', 'Карлос Фуэнтес'],
            note: 'Писательница, журналистка и активистка мексиканского происхождения, родилась во Франции. Это хроника, основанная на студенческой бойне, произошедшей 2 октября 1968 года на площади Трех Культур.'
          }
        },
        {
          id: 'nxelct',
          type: 'choice',
          question: '¿Quién escribió "Las Voces de Tlatelolco"?',
          answer: 'José Emilio Pacheco',
          options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
          note: 'No confundir "Las Voces de Tlatelolco" con "La Noche de Tlatelolco", nótese que son obras y autores diferentes.',
          ru: {
            question: 'Кто написал "Голоса Тлателолко"?',
            answer: 'Хосе Эмилио Пачеко',
            options: ['Октавио Пас', 'Елена Понятовская', 'Карлос Фуэнтес'],
            note: 'Не путайте "Голоса Тлателолко" с "Ночью Тлателолко", обратите внимание, что это разные произведения и авторы.'
          }
        },
        {
          id: 'o3huvr',
          type: 'choice',
          question: '¿Quién escribió "Relámpagos de Agosto"?',
          answer: 'Jorge Ibargüengoitia',
          options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
          ru: {
            question: 'Кто написал "Августовские молнии"?',
            answer: 'Хорхе Ибаргуэнгоития',
            options: ['Октавио Пас', 'Елена Понятовская', 'Карлос Фуэнтес']
          }
        },
        {
          id: '1r9cra',
          type: 'choice',
          question:
            'Temporada de zopilotes: Una historia narrativa de la Decena Trágica, ¿Quién es su autor?',
          answer: 'Paco Ignacio Taibo II',
          options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
          ru: {
            question:
              'Сезон стервятников: Рассказ о Трагической десятке, кто его автор?',
            answer: 'Пако Игнасио Тайбо II',
            options: ['Октавио Пас', 'Елена Понятовская', 'Карлос Фуэнтес']
          }
        },
        {
          id: '1j1zkr',
          type: 'choice',
          question: '¿De qué trato Temporada de Zopilotes?',
          answer: 'De la Decena Trágica',
          options: [
            'La matanza estudiantil Tlatelolco',
            'Critica al presidente Porfirio Diaz',
            'Poema revolucionario'
          ],
          note: 'Golpe Militar de los 10 días (09 al 19 de Febrero de 1913) liderado por Victoriano Huerta para derrocar a Francisco I. Madero.',
          ru: {
            question: 'О чем "Сезон стервятников"?',
            answer: 'О Трагической десятке',
            options: [
              'Студенческая бойня в Тлателолко',
              'Критика президента Порфирио Диаса',
              'Революционное стихотворение'
            ],
            note: 'Военный переворот длительностью 10 дней (с 9 по 19 февраля 1913 года), возглавляемый Викториано Уэртой для свержения Франсиско И. Мадеро.'
          }
        },
        {
          id: 'jdz6o8',
          type: 'choice',
          question: 'Escribió sobre Francisco I. Madero',
          answer: 'Paco Ignacio Taibo II',
          options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
          ru: {
            question: 'Кто написал о Франсиско И. Мадеро?',
            answer: 'Пако Игнасио Тайбо II',
            options: ['Октавио Пас', 'Елена Понятовская', 'Карлос Фуэнтес']
          }
        },
        {
          id: 'giwoup',
          type: 'choice',
          question: 'Libro escrito por Francisco I. Madero',
          answer: 'La Sucesión Presidencial',
          options: [
            'Primero sueño',
            'El laberinto de la soledad',
            'El Complot'
          ],
          note: 'Es un  libro donde Madero crítica al entonces presidente Porfirio Diaz después de un largo periodo de mandato de 34 años.',
          ru: {
            question: 'Книга, написанная Франсиско И. Мадеро',
            answer: 'Президентская преемственность',
            options: ['Первый сон', 'Лабиринт одиночества', 'Заговор'],
            note: 'Это книга, где Мадеро критикует тогдашнего президента Порфирио Диаса после его долгого 34-летнего правления.'
          }
        },
        {
          id: 'qbua2',
          type: 'choice',
          question: '¿Por qué es conocida Sor Juana Inés de la Cruz?',
          answer: 'Escritora más importante del período Novo-hispáno',
          options: [
            'Actriz en el período Revolucionario',
            'Traductora',
            'Cantante'
          ],
          ru: {
            question: 'Почему известна Сор Хуана Инес де ла Крус?',
            answer: 'Самая важная писательница новоиспанского периода',
            options: ['Актриса в период революции', 'Переводчица', 'Певица']
          }
        },
        {
          id: '6j90kp',
          type: 'choice',
          question:
            '¿Quién dijo la frase "Hombres necios que acusáis a la mujer sin razón, sin ver que vos sois la ocasión de lo mismo que culpáis"?',
          answer: 'Sor Juana Inés de la Cruz',
          options: ['Isabel Fraire', 'Elena Jordana', 'Minerva Reynosa'],
          ru: {
            question:
              'Кто сказал фразу "Глупцы, обвиняющие женщину без причины, не видя, что вы сами являетесь причиной того, в чем обвиняете"?',
            answer: 'Сор Хуана Инес де ла Крус',
            options: ['Изабель Фраире', 'Елена Джордана', 'Минерва Рейноса']
          }
        },
        {
          id: 'japmw4s',
          type: 'text',
          question: 'Obras más conocidas de Sor Juana Inés de la Cruz',
          answer:
            'Primero Sueño\nRedondillas\nLos empeños de una casa\nAmor es más laberinto',
          ru: {
            question:
              'Наиболее известные произведения Сор Хуаны Инес де ла Крус',
            answer:
              'Первый сон\nРедондильяс\nОбязательства одного дома\nЛюбовь - это больше лабиринта'
          }
        },
        {
          id: 'wef8u',
          type: 'text',
          question: 'Nombres de poetas mexicanos',
          answer:
            'Octavio Paz\nAmado Nervo\nJose Emilio Pacheco\nRosario Castellanos\nJaime Sabines',
          ru: {
            question: 'Имена мексиканских поэтов',
            answer:
              'Октавио Пас\nАмадо Нерво\nХосе Эмилио Пачеко\nРосарио Кастельянос\nХайме Сабинес'
          }
        },
        {
          id: 'vu7wom',
          type: 'text',
          question: 'Obras de Rosario Castellanos',
          answer: 'Balún Canán\nCiudad Real\nÁlbum de Familia',
          ru: {
            question: 'Произведения Росарио Кастельянос',
            answer: 'Балуун Канан\nСьюдад Реаль\nСемейный альбом'
          }
        },
        {
          id: 'm4v3yt',
          type: 'choice',
          question:
            'Poema que escribió Bernardo Balbuena sobre la Nueva España en 1604',
          answer: 'La Grandeza Mexicana',
          options: ['Desamor', 'Detente', 'Fragmento de Nocturno'],
          ru: {
            question:
              'Стихотворение, написанное Бернардо Бальбуэной о Новой Испании в 1604 году',
            answer: 'Величие Мексики',
            options: ['Без любви', 'Стой', 'Фрагмент Ноктюрна']
          }
        },
        {
          id: 'gtj9oh',
          type: 'choice',
          question:
            'Exponente de la literatura de la revolucionaria / Escritor muy importante de la revolución',
          answer: 'Mariano Azuela',
          options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
          note: 'Médico, opositor al Porfiriato.',
          ru: {
            question:
              'Представитель революционной литературы / Очень важный писатель революции',
            answer: 'Мариано Асела',
            options: ['Октавио Пас', 'Елена Понятовская', 'Карлос Фуэнтес'],
            note: 'Врач, противник порфириата.'
          }
        },
        {
          id: 'i15xho',
          type: 'text',
          question: 'Algunos escritores de narrativa en México',
          answer:
            'Juan Rulfo (El Llano en Llamas)\nJose Emilio Pacheco (las Voces de Tlatelolco)\nCarlos Fuentes (La Región Más transparente)\nPaco Taibo II (Temporada de Zopilotes)\nJorge Ibargüengoitia (Relámpagos de Agosto)\nCarlos Monsiváis\nJuan Villoro',
          ru: {
            question: 'Некоторые писатели прозы в Мексике',
            answer:
              'Хуан Рульфо (Пылающая равнина)\nХосе Эмилио Пачеко (Голоса Тлателолко)\nКарлос Фуэнтес (Самый прозрачный регион)\nПако Тайбо II (Сезон стервятников)\nХорхе Ибаргуэнгоития (Августовские молнии)\nКарлос Монсиваль\nХуан Вильоро'
          }
        },
        {
          id: 'wyunxcc',
          type: 'choice',
          question:
            '¿Qué géneros escribían los siguientes autores: Juan Rulfo, Mario Bellatin y Jorge Volpi?',
          answer: 'Narrativa, novela',
          options: ['Dramático', 'Lírico', 'Didáctico'],
          ru: {
            question:
              'Какие жанры писали следующие авторы: Хуан Рульфо, Марио Беллатин и Хорхе Вольпи?',
            answer: 'Проза, роман',
            options: ['Драматический', 'Лирический', 'Дидактический']
          }
        },
        {
          id: '406sce',
          type: 'choice',
          question: 'Famoso escritor mexicano de música para niños',
          answer: 'Francisco Gabilondo Soler, alias Cri Cri',
          options: [
            'Octavio Paz, alias Lagrimita',
            'Juan Rulfo, alias Cepillín',
            'Carlos Fuentes, alias Crin Crin'
          ],
          ru: {
            question: 'Известный мексиканский автор детской музыки',
            answer: 'Франсиско Габилондо Солер, также известный как Кри Кри',
            options: [
              'Октавио Пас, также известный как Лагримита',
              'Хуан Рульфо, также известный как Сепильин',
              'Карлос Фуэнтес, также известный как Крин Крин'
            ]
          }
        },
        {
          id: 'h761z9',
          type: 'choice',
          question: '¿Quién escribió "El ratón vaquero"?',
          answer: 'Cri Cri (Francisco Gabilondo Soler)',
          options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
          note: '"El ratón vaquero" es una canción infantil muy popular en México, escrita por el famoso compositor y cantante Francisco Gabilondo Soler, conocido como Cri-Cri. Cri-Cri es una figura icónica de la música infantil mexicana, y sus canciones han entretenido a generaciones de niños desde la década de 1940. "El ratón vaquero" narra la historia de un ratón que llega a una prisión y se comunica en inglés, añadiendo un toque de humor y aprendizaje de idiomas a la canción. La creatividad y la narrativa de Cri-Cri han dejado una huella perdurable en la cultura mexicana. Su legado sigue vivo en la memoria colectiva y en el corazón de muchas familias mexicanas.',
          noteImage: 'h761z9.jpg',
          ru: {
            question: 'Кто написал "Ковбоя-мышонка"?',
            answer: 'Кри Кри (Франсиско Габилондо Солер)',
            options: ['Октавио Пас', 'Хуан Рульфо', 'Карлос Фуэнтес'],
            note: '«Ковбойская мышь» — это очень популярная в Мексике детская песня, написанная известным композитором и певцом Франциско Габилондо Солером, известным как Кри-Кри. Кри-Кри — знаковая фигура в мексиканской детской музыке, и его песни развлекали поколения детей с 1940-х годов. «Ковбойская мышь» рассказывает историю мышонка, который попадает в тюрьму и разговаривает на английском, добавляя песне юмор и элементы изучения языков. Творчество и повествование Кри-Кри оставили неизгладимый след в мексиканской культуре. Его наследие живет в коллективной памяти и в сердцах многих мексиканских семей.'
          }
        },
        {
          id: '4rucg6',
          type: 'choice',
          question: '¿Cuál es el nombre de Juan Gabriel (El Divo de Juárez)?',
          answer: 'Alberto Aguilera Valadez',
          options: [
            'José Rómulo Sosa Ortíz',
            'Ángel Agustín María Carlos Fausto',
            'Mario Fortino Alfonso Moreno Reyes'
          ],
          ru: {
            question:
              'Каково настоящее имя Хуана Габриэля (Эль Диво де Хуарес)?',
            answer: 'Альберто Агильера Вальдес',
            options: [
              'Хосе Ромуло Соса Ортис',
              'Ангел Агустин Мария Карлос Фаусто',
              'Марио Фортинов Альфонсо Морено Рейес'
            ]
          }
        },
        {
          id: 'bbtgs9',
          type: 'choice',
          question: 'El arpa es un instrumento musical de',
          answer: 'Veracruz',
          options: ['Guanajuato', 'Campeche', 'Yucatán'],
          ru: {
            question: 'Арфа это музыкальный инструмент из',
            answer: 'Веракрус',
            options: ['Гуанахуато', 'Кампече', 'Юкатан']
          }
        }
      ]
    },
    {
      id: 'bzymvt',
      title: 'Artes II: Pintura y cine',
      ru: {
        title: ''
      },
      questions: [
        {
          id: 'y5kn8',
          type: 'text',
          question: 'Pintores mexicanos reconocidos',
          answer:
            'Jose Maria Velazco\nDiego Rivera\nFrida Khalo\nRufino Tamayo\nDavid Alfaro Siqueiros\nJose Clemente Orozco\nJose Luis Cuevas',
          ru: {
            question: 'Признанные мексиканские художники',
            answer:
              'Хосе Мария Веласко\nДиего Ривера\nФрида Кало\nРуфино Тамайо\nДавид Альфаро Сикейрос\nХосе Клементе Ороско\nХосе Луис Куэвас'
          }
        },
        {
          id: 'qm5nep',
          type: 'choice',
          question: 'Representante del muralismo mexicano',
          answer: 'Diego Rivera',
          options: ['Frida Khalo', 'Rufino Tamayo', 'Jose Maria Velazco'],
          ru: {
            question: 'Представитель мексиканского мурализма',
            answer: 'Диего Ривера',
            options: ['Фрида Кало', 'Руфино Тамайо', 'Хосе Мария Веласко']
          }
        },
        {
          id: 'toos4d',
          type: 'choice',
          question: 'Autor del mural del Palacio Nacional',
          answer: 'Diego Rivera',
          options: ['Frida Khalo', 'Rufino Tamayo', 'Jose Maria Velazco'],
          ru: {
            question: 'Автор фрески в Национальном дворце',
            answer: 'Диего Ривера',
            options: ['Фрида Кало', 'Руфино Тамайо', 'Хосе Мария Веласко']
          }
        },
        {
          id: 'iekho',
          type: 'choice',
          question:
            'Autor del mural en el museo de antropología sobre la Serpiente emplumada',
          answer: 'Rufino Tamayo',
          options: ['Frida Khalo', 'Diego Rivera', 'Jose Maria Velazco'],
          ru: {
            question: 'Автор фрески в музее антропологии о Пернатом змее',
            answer: 'Руфино Тамайо',
            options: ['Фрида Кало', 'Диего Ривера', 'Хосе Мария Веласко']
          }
        },
        {
          id: 'otxkma',
          type: 'choice',
          question: '¿Quién fué y por qué es conocida Frida Khalo?',
          answer:
            'Pintora más importante de América Latina, conocida por sus autorretratos',
          options: [
            'Escultora más importante de América Latina, conocida por El caballito de Reforma',
            'Actriz mexicana conocida por Marimar',
            'Cantante mexicana, conocida por la la canción Amor Eterno'
          ],
          ru: {
            question: 'Кем была и почему известна Фрида Кало?',
            answer:
              'Самая важная художница Латинской Америки, известная своими автопортретами',
            options: [
              'Самая важная скульпторка Латинской Америки, известная скульптурой "Кабальито де Реформа"',
              'Мексиканская актриса, известная по сериалу "Маримар"',
              'Мексиканская певица, известная песней "Amor Eterno"'
            ]
          }
        },
        {
          id: 'oykxyl',
          type: 'choice',
          question: 'Nombre completo de Frida Khalo',
          answer: 'Magdalena Carmen Frida Kahlo Calderón',
          options: [
            'Magdalena Kahlo Calderón',
            'Carmen Frida Kahlo Calderón',
            'Magdalena Carmen Josefina Frida Kahlo Calderón'
          ],
          ru: {
            question: 'Полное имя Фриды Кало',
            answer: 'Магдалена Кармен Фрида Кало Кальдерон',
            options: [
              'Магдалена Кало Кальдерон',
              'Кармен Фрида Кало Кальдерон',
              'Магдалена Кармен Хосефина Фрида Кало Кальдерон'
            ]
          }
        },
        {
          id: 'oiqfy4',
          type: 'choice',
          question: 'Pintor paisajista mexicano',
          answer: 'Jose Maria Velazco',
          options: ['Frida Khalo', 'Diego Rivera', 'Rufino Tamayo'],
          ru: {
            question: 'Мексиканский пейзажист',
            answer: 'Хосе Мария Веласко',
            options: ['Фрида Кало', 'Диего Ривера', 'Руфино Тамайо']
          }
        },
        {
          id: 'oqoad',
          type: 'choice',
          question: '¿Qué pintaba Jose María Velazco?',
          answer: 'Paisajes',
          options: ['Mujeres', 'Alegorías', 'Autoretratos'],
          ru: {
            question: 'Что рисовал Хосе Мария Веласко?',
            answer: 'Пейзажи',
            options: ['Женщин', 'Аллегории', 'Автопортреты']
          }
        },
        {
          id: 'ymf5cl',
          type: 'choice',
          question:
            'Titiritero y artista plástico mexicano del movimiento estridentista autor de la escultura "Hombre Corriendo"',
          answer: 'German Cueto',
          options: ['Jose Maria Velazco', 'Diego Rivera', 'Rufino Tamayo'],
          ru: {
            question:
              'Мексиканский кукольник и художник пластического искусства движения эстридентизм, автор скульптуры "Бегущий человек"',
            answer: 'Герман Куэто',
            options: ['Хосе Мария Веласко', 'Диего Ривера', 'Руфино Тамайо']
          }
        },
        {
          id: '4m5fnl',
          type: 'choice',
          question:
            'Famoso escultor mexicano especializado en escultura monumental o figuras geométricas de gran tamaño',
          answer:
            'Enrique Carbajal González Santiván mejor conocido como Sebastián, el del caballito de reforma',
          options: [
            'Gianlorenzo Bernini',
            'Eloy Palacios',
            'Rodrigo Arenas Betancourt'
          ],
          ru: {
            question:
              'Известный мексиканский скульптор, специализирующийся на монументальной скульптуре или больших геометрических фигурах',
            answer:
              'Энрике Карбахаль Гонсалес Сантиван, более известный как Себастьян, автор "Кабальито де Реформа"',
            options: [
              'Джанлоренцо Бернини',
              'Элой Палациос',
              'Родриго Арена Бетанкур'
            ]
          }
        },
        {
          id: 'bhitcg',
          type: 'choice',
          question:
            'Nombre del escultor cuyas obras se basan en figuras geométricas de gran tamaño',
          answer: 'Enrique Carbajal',
          options: ['Jose Maria Velazco', 'Diego Rivera', 'Rufino Tamayo'],
          ru: {
            question:
              'Имя скульптора, чьи работы основаны на больших геометрических фигурах',
            answer: 'Энрике Карбахаль',
            options: ['Хосе Мария Веласко', 'Диего Ривера', 'Руфино Тамайо']
          }
        },
        {
          id: 'l95eox',
          type: 'choice',
          question: 'Autor de las catrinas (Calaveras)',
          answer: 'José Guadalupe Posada',
          options: ['Jose Maria Velazco', 'Diego Rivera', 'Rufino Tamayo'],
          ru: {
            question: 'Автор катрин (черепов)',
            answer: 'Хосе Гвадалупе Посада',
            options: ['Хосе Мария Веласко', 'Диего Ривера', 'Руфино Тамайо']
          }
        },
        {
          id: 'l1naz5',
          type: 'choice',
          question: 'Monumento que modernizó México',
          answer: 'El Caballito de Reforma',
          options: [
            'La Diana Cazadora',
            'Los Niños Héroes',
            'Los Héroes de la Independencia'
          ],
          ru: {
            question: 'Монумент, который модернизировал Мексику',
            answer: '"Кабальито де Реформа"',
            options: ['Диана Охотница', 'Дети-герои', 'Герои независимости']
          }
        },
        {
          id: '3f7mv',
          type: 'choice',
          question: '¿Cuándo empezó la época de oro del cine mexicano?',
          answer: 'En 1935',
          options: ['En 1930', 'En 1920', 'En 1955'],
          note: 'Comenzó simbólicamente con la película Vámonos con Pancho Villa.',
          ru: {
            question: 'Когда началась золотая эпоха мексиканского кино?',
            answer: 'В 1935 году',
            options: ['В 1930 году', 'В 1920 году', 'В 1955 году'],
            note: 'Символически началась с фильма "Пойдем с Панчо Вильей".'
          }
        },
        {
          id: '67dljq',
          type: 'choice',
          question: 'Año en que inicia la nueva época del cine mexicano',
          answer: '1990',
          options: ['1930', '1920', '1955'],
          ru: {
            question: 'Год начала новой эпохи мексиканского кино',
            answer: '1990',
            options: ['1930', '1920', '1955']
          }
        },
        {
          id: '935u1',
          type: 'choice',
          question: '¿Cuál fue la primera película filmada en México?',
          answer:
            'El Presidente de la República (Porfirio Díaz) Paseando a Caballo en el Bosque de Chapultepec en 1896',
          options: ['Vámonos', 'Santa', 'La Lucha'],
          ru: {
            question: 'Какой был первый фильм, снятый в Мексике?',
            answer:
              'Президент Республики (Порфирио Диас) на прогулке верхом в лесу Чапультепек в 1896 году',
            options: ['Вамонес', 'Санта', 'Борьба']
          }
        },
        {
          id: '43sh4h',
          type: 'choice',
          question: '¿Cuál fué la primera película sonora en México?',
          answer: 'Santa',
          options: ['Vámonos', 'El presidente de la república', 'La lucha'],
          note: 'Grabada en 1931 y estrenada en 1932.',
          ru: {
            question: 'Какой был первый звуковой фильм в Мексике?',
            answer: 'Санта',
            options: ['Вамонес', 'Президент Республики', 'Борьба'],
            note: 'Записана в 1931 году и выпущена в 1932 году.'
          }
        },
        {
          id: 'bnvk6n',
          type: 'choice',
          question: '¿Cuál fue la primera película a color filmada en México?',
          answer: 'Así se quiere en Jalisco, en 1942',
          options: [
            'Así se quiere en Guanajuato, en 1930',
            'Así se quiere en Aguascalientes, en 1950',
            'Así se quiere en México, en 1932'
          ],
          ru: {
            question: 'Какой был первый цветной фильм, снятый в Мексике?',
            answer: '"Так любят в Халиско" в 1942 году',
            options: [
              '"Так любят в Гуанахуато" в 1930 году',
              '"Так любят в Агуаскальентесе" в 1950 году',
              '"Так любят в Мексике" в 1932 году'
            ]
          }
        },
        {
          id: '7qb5yd',
          type: 'choice',
          question: '¿Cuál personaje fue interpretado por Pedro Infante?',
          answer: 'Pepe el Toro',
          options: ['Tin Tan', 'Tizoc', 'Resortes'],
          ru: {
            question: 'Какого персонажа сыграл Педро Инфанте?',
            answer: 'Пепе эль Торо',
            options: ['Тин Тан', 'Тисок', 'Ресортес']
          }
        },
        {
          id: 'piqdrf',
          type: 'choice',
          question:
            'Película mexicana basada en una novela escrita por un extranjero',
          answer: 'Macario',
          options: ['En vísperas de una guerra', 'La Lucha', 'Vámonos'],
          note: 'Escrita por B. Traven, fue un actor y novelista alemán, se trata de la relación de un indígena con la muerte durante la víspera del día de muertos en la Nueva España.',
          ru: {
            question:
              'Мексиканский фильм, основанный на романе иностранного автора',
            answer: 'Макарио',
            options: ['Накануне войны', 'Борьба', 'Вамонес'],
            note: 'Написан Б. Травеном, немецким актером и романистом, рассказывает о взаимоотношениях индейца со смертью накануне Дня мертвых в Новой Испании.'
          }
        },
        {
          id: '50hth',
          type: 'choice',
          question: '¿Cuáles son actores de la época dorada del cine mexicano?',
          answer: 'Pedro Infante, Jorge Negrete y Sara Garcia',
          options: [
            'Pedro Infante, Jorge Negrete y Juan Rulfo',
            'Mario Moreno, Jorge Negrete y Sara Garcia',
            'Pedro Infante, Carmen Salinas y Sara Garcia'
          ],
          ru: {
            question: 'Кто являются актерами золотой эпохи мексиканского кино?',
            answer: 'Педро Инфанте, Хорхе Негрете и Сара Гарсия',
            options: [
              'Педро Инфанте, Хорхе Негрете и Хуан Рульфо',
              'Марио Морено, Хорхе Негрете и Сара Гарсия',
              'Педро Инфанте, Кармен Салинас и Сара Гарсия'
            ]
          }
        },
        {
          id: 'phfe9i',
          type: 'text',
          question: 'Actores de la época de oro del cine mexicano',
          answer:
            'Jorge Negrete\nPedro Infante\nSarita Garcia (abuela)\nMaría Félix\nLuis Aguilar\nDolores del Río\nAbel Salazar\nPedro Armendáriz\nBlanca Estela Pavón\nAntonio Badú\nJoaquín Pardavé',
          ru: {
            question: 'Актеры золотой эпохи мексиканского кино',
            answer:
              'Хорхе Негрете\nПедро Инфанте\nСарита Гарсия (бабушка)\nМария Феликс\nЛуис Агилар\nДолорес дель Рио\nАбель Салазар\nПедро Армендарис\nБланка Эстела Павон\nАнтонио Баду\nХоакин Пардаве'
          }
        },
        {
          id: 'd5hztq',
          type: 'choice',
          question:
            '¿Cómo se llamaba la actriz extranjera de la época dorada del cine mexicano?',
          answer: 'Libertad Lamarque',
          options: ['Sara Garcia', 'Elsa Aguirre', 'Maria Félix'],
          ru: {
            question:
              'Как звали иностранную актрису золотой эпохи мексиканского кино?',
            answer: 'Либертад Ламарке',
            options: ['Сара Гарсия', 'Эльза Агирре', 'Мария Феликс']
          }
        },
        {
          id: '6o5x5',
          type: 'choice',
          question: 'Actrices mexicanas de la época dorada del cine mexicano',
          answer: 'María Félix, Sara García, Dolores del Río',
          options: [
            'María Félix, Salma Hayek, Dolores del Río',
            'Kate del Castillo, Sara García, Dolores del Río',
            'María Félix, Sara García, Carmen Salinas'
          ],
          ru: {
            question: 'Мексиканские актрисы золотой эпохи мексиканского кино',
            answer: 'Мария Феликс, Сара Гарсия, Долорес дель Рио',
            options: [
              'Мария Феликс, Сальма Хайек, Долорес дель Рио',
              'Кейт дель Кастильо, Сара Гарсия, Долорес дель Рио',
              'Мария Феликс, Сара Гарсия, Кармен Салинас'
            ]
          }
        },
        {
          id: 'eigxfw',
          type: 'choice',
          question:
            'María Félix y Dolores del Río fueron personajes destacados en el ámbito de',
          answer: 'El cine',
          options: ['La musica', 'La pintura', 'El baile'],
          ru: {
            question:
              'Мария Феликс и Долорес дель Рио были выдающимися персонажами в области',
            answer: 'Кино',
            options: ['Музыки', 'Живописи', 'Танца']
          }
        },
        {
          id: 'fqm1y2',
          type: 'choice',
          question:
            '¿Cuál es la actriz mexicana que actuaba siempre de abuelita?',
          answer: 'Sara (Sarita) García',
          options: ['María Félix', 'Dolores del Río', 'Carmen Salinas'],
          ru: {
            question: 'Какая мексиканская актриса всегда играла бабушек?',
            answer: 'Сара (Сарита) Гарсия',
            options: ['Мария Феликс', 'Долорес дель Рио', 'Кармен Салинас']
          }
        },
        {
          id: 'ktf4e',
          type: 'choice',
          question: '¿Quién fue Jorge Negrete?',
          answer: 'Un actor y cantante',
          options: ['Un pintor', 'Un político', 'Un poetista y escritor'],
          note: 'Fue uno de los actores más emblemáticos de la época de oro del cine mexicano.',
          ru: {
            question: 'Кем был Хорхе Негрете?',
            answer: 'Актером и певцом',
            options: ['Художником', 'Политиком', 'Поэтом и писателем'],
            note: 'Был одним из самых знаковых актеров золотой эпохи мексиканского кино.'
          }
        },
        {
          id: 'a7c0cc',
          type: 'choice',
          question: 'Nombre completo de Jorge Negrete',
          answer: 'Jorge Alberto Negrete Moreno',
          options: [
            'Jorge Negrete Moreno',
            'Jorge Manuel Negrete',
            'Jorge Eliberto Negrete Moreno Perez'
          ],
          ru: {
            question: 'Полное имя Хорхе Негрете',
            answer: 'Хорхе Альберто Негрете Морено',
            options: [
              'Хорхе Негрете Морено',
              'Хорхе Мануэль Негрете',
              'Хорхе Элиберто Негрете Морено Перес'
            ]
          }
        },
        {
          id: 'c7vi7d',
          type: 'choice',
          question: 'Figura del cine nacional que encarnó al charro mexicano',
          answer: 'Jorge Negrete',
          options: ['Pedro Infante', 'Luis Aguilar', 'Joaquín Pardavé'],
          ru: {
            question:
              'Фигура национального кино, воплотившая мексиканского чародея',
            answer: 'Хорхе Негрете',
            options: ['Педро Инфанте', 'Луис Агилар', 'Хоакин Пардаве']
          }
        },
        {
          id: 'hwz4xe',
          type: 'choice',
          question:
            'Cómico que representó al mexicano de las clases populares en el cine',
          answer: 'Cantinflas',
          options: ['Pedro Infante', 'Luis Aguilar', 'Joaquín Pardavé'],
          ru: {
            question:
              'Комик, представлявший мексиканца из народных классов в кино',
            answer: 'Кантифлас',
            options: ['Педро Инфанте', 'Луис Агилар', 'Хоакин Пардаве']
          }
        },
        {
          id: '49rpg',
          type: 'choice',
          question: '¿Quién fué Mario Moreno?',
          answer: 'El más reconocido comediante mexicano',
          options: [
            'Pintor mexicano',
            'Escritor mexicano',
            'Historiador mexicano'
          ],
          note: 'Conocido como Cantinflas',
          ru: {
            question: 'Кем был Марио Морено?',
            answer: 'Самым признанным мексиканским комиком',
            options: [
              'Мексиканским художником',
              'Мексиканским писателем',
              'Мексиканским историком'
            ],
            note: 'Известный как Кантифлас'
          }
        },
        {
          id: '8azaxj',
          type: 'choice',
          question: '¿Cómo es el nombre completo de Cantinflas?',
          answer: 'Mario Fortino Alfonso Moreno Reyes',
          options: [
            'Mario Manuel Reyes',
            'Mario de Jesús Moreno',
            'Mario Alberto Moreno Reyes'
          ],
          ru: {
            question: 'Как полное имя Кантифласа?',
            answer: 'Марио Фортинов Альфонсо Морено Рейес',
            options: [
              'Марио Мануэль Рейес',
              'Марио де Хесус Морено',
              'Марио Альберто Морено Рейес'
            ]
          }
        },
        {
          id: '7ja3ba',
          type: 'choice',
          question: '¿Qué actor interpretó al Chavo del 8?',
          answer: 'Roberto Gómez Bolaños',
          options: [
            'Alfonso Cuarón',
            'Alejandro González Iñárritu',
            'Anthony Quinn'
          ],
          ru: {
            question: 'Какой актер сыграл Чаво из 8?',
            answer: 'Роберто Гомес Боланос',
            options: [
              'Альфонсо Куарон',
              'Алехандро Гонсалес Иньярриту',
              'Энтони Куинн'
            ]
          }
        },
        {
          id: '86yf2',
          type: 'choice',
          question: '"No contaban con mi astucia", es una frase de',
          answer: 'El Chapulín Colorado',
          options: ['El Chavo del 8', 'La Chilindrina', 'Quico'],
          note: '"Que no panda el cúnico (pánico)", "Lo tenía fríamente calculado" son otras frases famosas de éste personaje creado e interpretado por Roberto Gómez Bolaños.',
          ru: {
            question: '"Не рассчитывали на мою хитрость" - это фраза',
            answer: 'Чапулин Колорадо',
            options: ['Чаво из 8', 'Чилиндрина', 'Кико'],
            note: '"Не поддавайтесь панике", "У меня было все холодно рассчитано" - это другие известные фразы этого персонажа, созданного и сыгранного Роберто Гомесом Боланосом.'
          }
        },
        {
          id: 'vmi4id',
          type: 'choice',
          question: 'Mexicano que ha ganado dos Premios Oscar como mejor actor',
          answer: 'Anthony Quinn',
          options: [
            'Alfonso Cuarón',
            'Alejandro González Iñárritu',
            'Guillermo del Toro'
          ],
          note: 'En 1952 y 1956.',
          ru: {
            question:
              'Мексиканец, дважды получивший премию Оскар как лучший актер',
            answer: 'Энтони Куинн',
            options: [
              'Альфонсо Куарон',
              'Алехандро Гонсалес Иньярриту',
              'Гильермо дель Торо'
            ],
            note: 'В 1952 и 1956 годах.'
          }
        },
        {
          id: 'qytm58',
          type: 'choice',
          question: 'Mexicanos ganadores de Premios Oscar como mejor director',
          answer: 'Alejandro González Iñárritu y Alfonso Cuarón',
          options: [
            'Guillermo del Toro y Anthonio Meza',
            'Eugenio Caballero y Alfonso Martinez',
            'Rodolfo Neri Vela y Eugenio Derbez'
          ],
          note: 'Alejandro González Iñárritu por Birdman en el 2015 y por The Revenant en el 2016, Alfonso Cuarón por Gravity en el 2014 y por Roma en el 2019.',
          ru: {
            question:
              'Мексиканцы, получившие премию Оскар как лучшие режиссеры',
            answer: 'Алехандро Гонсалес Иньярриту и Альфонсо Куарон',
            options: [
              'Гильермо дель Торо и Антонио Меза',
              'Евгений Кабальеро и Альфонсо Мартинес',
              'Родольфо Нери Вела и Эухенио Дербез'
            ],
            note: 'Алехандро Гонсалес Иньярриту за фильм "Бердмэн" в 2015 году и за фильм "Выживший" в 2016 году, Альфонсо Куарон за фильм "Гравитация" в 2014 году и за фильм "Рома" в 2019 году.'
          }
        },
        {
          id: 'wlfruu',
          type: 'choice',
          question:
            '¿Quién fue ganador del Globo de Oro en 2018 como mejor director?',
          answer: 'Guillermo del Toro',
          options: [
            'Alfonso Cuarón',
            'Alejandro González Iñárritu',
            'Anthony Quinn'
          ],
          ru: {
            question:
              'Кто выиграл Золотой глобус в 2018 году как лучший режиссер?',
            answer: 'Гильермо дель Торо',
            options: [
              'Альфонсо Куарон',
              'Алехандро Гонсалес Иньярриту',
              'Энтони Куинн'
            ]
          }
        },
        {
          id: 'xni60r',
          type: 'choice',
          question: 'Máximo galardón de la academia mexicana de cinematografía',
          answer: 'Premio Ariel',
          options: [
            'Premio Amparo Dávila',
            'Premio Bellas Artes',
            'Premio Ohtli'
          ],
          ru: {
            question: 'Высшая награда мексиканской академии кинематографии',
            answer: 'Премия Ариэль',
            options: [
              'Премия Ампаро Давила',
              'Премия изящных искусств',
              'Премия Охтли'
            ]
          }
        },
        {
          id: '9rmly3',
          type: 'text',
          question: 'Mexicanos ganadores de premios Oscar',
          answer:
            "Alfonso Cuarón (5): Mejor Montaje y Mejor Director por Gravity (2014), Mejor Director, Mejor película y Mejor extranjera y Mejor Fotografía por Roma en 2019.\nAlejandro González Iñárritu (4): Mejor Película, Director y Guión Original por Birdman en el 2015 y Mejor Director por The Revenant en el 2016\nEmmanuel Lubezki (3): Mejor Fotografía Gravity (2013), Birdman (2014) y The Revenant (2015)\nGuillermo del Toro (2): Mejor Fotografía y Mejor Director por The Shape of Water (2018)\nAnthony Quinn (2): Mejor Actor por Viva Zapata en 1952 y El loco del pelo rojo en 1956\nEmile Kuri (2): Primer Mexicano en ganar un premio Oscar\nLupita Nyong'o (1)\nEugenio Caballero (1)\nGuillermo Navarro (1)\nManuel Arango (1)\nBeatriz de Alba (1)",
          ru: {
            question: 'Мексиканцы, получившие премию Оскар',
            answer:
              'Альфонсо Куарон (5): Лучший монтаж и лучший режиссер за "Гравитацию" (2014), лучший режиссер, лучший фильм, лучший иностранный фильм и лучшая операторская работа за "Рома" (2019).\nАлехандро Гонсалес Иньярриту (4): Лучший фильм, режиссер и оригинальный сценарий за "Бердмэн" (2015) и лучший режиссер за "Выживший" (2016).\nЭммануэль Любецки (3): Лучшая операторская работа за "Гравитацию" (2013), "Бердмэн" (2014) и "Выживший" (2015).\nГильермо дель Торо (2): Лучшая операторская работа и лучший режиссер за "Форма воды" (2018).\nЭнтони Куинн (2): Лучший актер за "Вива Сапата" (1952) и "Сумасшедший художник" (1956).\nЭмиль Кури (2): Первый мексиканец, получивший премию Оскар.\nЛупита Нионго (1)\nЕвгений Кабальеро (1)\nГильермо Наварро (1)\nМануэль Аранго (1)\nБеатрис де Альба (1)'
          }
        },
        {
          id: '38nu7c',
          type: 'text',
          question: 'Épocas del cine mexicano',
          answer:
            'Cine Mudo 1896 - 1931\nIndustrialización 1930 - 1940\nÉpoca de Oro 1940 - 1952\nCrisis Recurrente 1952 - 1970\nApertura del Nuevo Cine Mexicano 1970 - 1976\nDesmantelamiento, Agonía y Muerte 1976 - 1994\nRetorno a los Orígenes 1994 - 2006',
          ru: {
            question: 'Эпохи мексиканского кино',
            answer:
              'Немое кино 1896 - 1931\nИндустриализация 1930 - 1940\nЗолотая эпоха 1940 - 1952\nПериодические кризисы 1952 - 1970\nОткрытие нового мексиканского кино 1970 - 1976\nРазрушение, агония и смерть 1976 - 1994\nВозвращение к истокам 1994 - 2006'
          }
        }
      ]
    },
    {
      id: 'iy3qg',
      title: 'Tradiciones y cultura',
      ru: {
        title: ''
      },
      questions: [
        {
          id: '3ij6ef',
          type: 'choice',
          question: '¿Qué es una tienda de abarrotes?',
          answer:
            'Lugar donde venden productos de uso cotidiano, viveres, articulos de limpieza, etc',
          options: [
            'Venta de inciensos',
            'Tienda de ropa económica',
            'Donde compras zapatos al mayor'
          ],
          ru: {
            question: 'Что такое магазин абарротес?',
            answer:
              'Место, где продают товары повседневного использования, продукты, чистящие средства и т.д.',
            options: [
              'Продажа благовоний',
              'Магазин дешевой одежды',
              'Где покупают обувь оптом'
            ]
          }
        },
        {
          id: 'of7v37',
          type: 'choice',
          question: 'Historieta mexicana creada por Gabriel Vargas',
          answer: 'La Familia Burrón',
          options: ['Archie', 'Mafalda', 'Spiderman', 'Heidi'],
          note: 'Comenzó en 1948 y el último número apareció en 2009, más de 60 años de publicación ininterrumpida. Aborda las aventuras de una familia de clase baja de la Ciudad de México.',
          ru: {
            question: 'Мексиканский комикс, созданный Габриэлем Варгасом',
            answer: 'Семья Буррон',
            options: ['Арчи', 'Маффальда', 'Человек-паук', 'Хайди'],
            note: 'Начался в 1948 году, последний выпуск вышел в 2009 году, более 60 лет непрерывной публикации. Рассказ о приключениях семьи из низшего класса города Мехико.'
          }
        },
        {
          id: 'wj038d',
          type: 'choice',
          question: 'Día de la Virgen de Guadalupe',
          answer: '12 de Diciembre',
          options: ['16 de Septiembre', '20 de Noviembre', '10 de Mayo'],
          ru: {
            question: 'День Девы Гваделупской',
            answer: '12 декабря',
            options: ['16 сентября', '20 ноября', '10 мая']
          }
        },
        {
          id: 'ksyvo',
          type: 'choice',
          question:
            '¿Como se le conoce popularmente a los habitantes de la Ciudad de México?',
          answer: 'Chilangos',
          options: ['Porteños', 'Pipope', 'Regios'],
          ru: {
            question: 'Как популярно называют жителей Мехико?',
            answer: 'Чиланго',
            options: ['Портеньос', 'Пипопе', 'Региос']
          }
        },
        {
          id: '9laxw6',
          type: 'choice',
          question:
            'Nombre de las embarcaciones coloridas con flores que se usan en Xochimilco, populares para los turistas',
          answer: 'Trajineras',
          options: ['Chinampa', 'Barcazas', 'Buques'],
          ru: {
            question:
              'Название красочных лодок с цветами, используемых в Сочимилько, популярных среди туристов',
            answer: 'Трахинерас',
            options: ['Чинампа', 'Баркасы', 'Суда']
          }
        },
        {
          id: '3x0fioi',
          type: 'choice',
          question: 'Otro modo de llamar a la base o lugar de taxis en México',
          answer: 'Sitios',
          options: ['Estacionamiento', 'Planta', 'Taxímetro'],
          ru: {
            question: 'Другой способ назвать стоянку такси в Мексике',
            answer: 'Сито',
            options: ['Парковка', 'Завод', 'Таксометр']
          }
        },
        {
          id: 'z0m4nc',
          type: 'choice',
          question:
            'Pan en forma de rosca, adornado con frutas, contiene figuritas y se come en la celebración de',
          answer: 'El día de reyes',
          options: ['Navidad', 'Año nuevo', 'Semana Santa'],
          note: '6 de Enero.',
          ru: {
            question:
              'Хлеб в форме кольца, украшенный фруктами, содержит фигурки и едят на праздновании',
            answer: 'Дня волхвов',
            options: ['Рождества', 'Нового года', 'Страстной недели'],
            note: '6 января.'
          }
        },
        {
          id: 'vbj329',
          type: 'choice',
          question:
            'Tiene forma de estrella, se llena de dulces y de juguetes, se usa en cumpleaños y durante los días previos a la Navidad, se golpea con un palo',
          answer: 'Piñata',
          options: ['Bolo', 'Pachanga', 'Posada'],
          note: 'Los siete picos simbolizan los siete pecados capitales: pereza, envidia, gula, ira, lujuria, avaricia y soberbia.',
          ru: {
            question:
              'Имеет форму звезды, наполняется сладостями и игрушками, используется на днях рождения и в дни перед Рождеством, бьют палкой',
            answer: 'Пиньята',
            options: ['Боло', 'Пачанга', 'Посада'],
            note: 'Семь вершин символизируют семь смертных грехов: лень, зависть, обжорство, гнев, похоть, жадность и гордыню.'
          }
        },
        {
          id: 'oizu1a',
          type: 'choice',
          question: 'Flor de color rojo típica de navidad',
          answer: 'Nochebuena',
          options: ['Cempasúchil', 'Dalia', 'Magnolia'],
          ru: {
            question: 'Типичный рождественский красный цветок',
            answer: 'Пуансеттия',
            options: ['Цемпасучиль', 'Георгин', 'Магнолия']
          }
        },
        {
          id: 'xowyri',
          type: 'choice',
          question: '¿De dónde proviene el mariachi?',
          answer: 'Jalisco',
          options: ['Oaxaca', 'Zacatecas', 'Michoacán', 'Guanajuato'],
          ru: {
            question: 'Откуда происходит мариачи?',
            answer: 'Халиско',
            options: ['Оахака', 'Сакатекас', 'Мичоакан', 'Гуанахуато']
          }
        },
        {
          id: 'xreg2x',
          type: 'text',
          question: '¿Qué significa México?',
          answer: 'En el ombligo de la luna / En el centro del Lago de la Luna',
          ru: {
            question: 'Что означает Мексика?',
            answer: 'В пупке луны / В центре озера Луны'
          }
        },
        {
          id: 'j34dgo',
          type: 'choice',
          question: '¿A qué se le llama fonda?',
          answer: 'A un pequeño restaurante económico',
          options: ['A un hostal', 'A un carro pequeño', 'A un barrio popular'],
          ru: {
            question: 'Что называют фондой?',
            answer: 'Маленький экономичный ресторан',
            options: ['Хостел', 'Маленькая машина', 'Популярный район']
          }
        },
        {
          id: 'xplrtr',
          type: 'choice',
          question: 'Lugar donde se come a precios bajos',
          answer: 'Fonda',
          options: ['Pujol', 'Mexique', 'Oxte'],
          ru: {
            question: 'Место, где можно поесть по низким ценам',
            answer: 'Фонда',
            options: ['Пухоль', 'Мексик', 'Охте']
          }
        },
        {
          id: '5n6w2r',
          type: 'choice',
          question: 'En México, una tlapalería es',
          answer: 'Una tienda de pinturas y solventes, ferretería',
          options: [
            'Una heladería',
            'Una tienda de tlacuaches',
            'Un tipo de restaurante'
          ],
          ru: {
            question: 'В Мексике, tlapalería это',
            answer: 'Магазин красок и растворителей, хозяйственный магазин',
            options: ['Мороженое', 'Магазин тлакуачей', 'Тип ресторана']
          }
        },
        {
          id: 'yya656',
          type: 'choice',
          question:
            'Perro originario de México o nombre de raza de perro prehispánico de poco pelo',
          answer: 'Xoloitzcuintle',
          options: ['Chihuahua', 'Techichi', 'Calupoh'],
          ru: {
            question:
              'Собака, родом из Мексики или название породы доиспанской собаки с короткой шерстью',
            answer: 'Шолоицкуинтли',
            options: ['Чихуахуа', 'Течичи', 'Калупох']
          }
        },
        {
          id: 'fez81l',
          type: 'choice',
          question: 'El vocablo "chaparro" significa',
          answer: 'Bajo de estatura',
          options: ['Alto', 'Originario del Chaparro', 'Santurron'],
          ru: {
            question: 'Слово "чапарро" означает',
            answer: 'Низкорослый',
            options: ['Высокий', 'Родом из Чапарро', 'Святоша']
          }
        },
        {
          id: '3tobod',
          type: 'text',
          question: '¿Qué es una bomba Yucateca?',
          answer:
            'Comúnmente las "bombas" son rimas. Estos versos son recitados de manera improvisada y pueden ser románticos, jocosos e inclusive melosos, pero nunca groseros. En ocasiones llegan a causar risa por su composición a manera de broma o descaro.',
          ru: {
            question: 'Что такое юкатанская бомба?',
            answer:
              'Обычно "бомбы" - это рифмы. Эти стихи произносятся импровизированно и могут быть романтическими, шутливыми или даже сладкими, но никогда не грубыми. Иногда они вызывают смех из-за своей шутливости или дерзости.'
          }
        },
        {
          id: '2f7t5m',
          type: 'choice',
          question:
            'En el habla popular de México, el término "marchante(a)" se refiere a',
          answer:
            'Un término que se utiliza en los mercados populares y es sinónimo indistintamente de vendedor o cliente',
          options: [
            'Una persona que tiene mucho optimismo',
            'Un vendedor de obras de arte',
            'Un bailarín'
          ],
          ru: {
            question:
              'В разговорной речи Мексики, термин "marchante(a)" относится к',
            answer:
              'Термин, используемый на популярных рынках и является синонимом продавца или клиента',
            options: [
              'Человек, который очень оптимистичен',
              'Продавец произведений искусства',
              'Танцор'
            ]
          }
        },
        {
          id: 'kxkane',
          type: 'choice',
          question: 'La palabra "Jarocho" alude a que es propio de',
          answer: 'Veracruz',
          options: ['Chiapas', 'Campeche', 'Oaxaca'],
          ru: {
            question: 'Слово "Jarocho" означает, что оно родом из',
            answer: 'Веракрус',
            options: ['Чьяпас', 'Кампече', 'Оахака']
          }
        },
        {
          id: 'zalpk',
          type: 'choice',
          question: '¿Qué significa papalote?',
          answer: 'Mariposa en Náhuatl',
          options: ['Papa', 'Papagayo', 'Jitomate'],
          ru: {
            question: 'Что означает папалоте?',
            answer: 'Бабочка на языке науатль',
            options: ['Картофель', 'Попугай', 'Помидор']
          }
        },
        {
          id: '8g97ki',
          type: 'text',
          question: '¿Qué es el metate?',
          answer:
            'Es un utensilio de cocina utilizado en diversas culturas (Maya, mexica, etc) y hasta la actualidad. Se compone de dos elementos: el metate, es decir, una plancha rectangular y el metlapile, el rodillo cilíndrico que se agarra con ambas manos. Se emplea para moler maíz, chiles, especias, etc',
          ru: {
            question: 'Что такое метате?',
            answer:
              'Это кухонный инструмент, использовавшийся в различных культурах (майя, миштеки и др.) и до настоящего времени. Состоит из двух элементов: метате, то есть прямоугольной плиты, и метлапиле, цилиндрического ролика, который держат обеими руками. Используется для измельчения кукурузы, чили, специй и т.д.'
          }
        },
        {
          id: 'sd674',
          type: 'text',
          question: '¿Qué es la Guelaguetza?',
          answer:
            'Es una fiesta conocida como los lunes del cerro que se celebra dos lunes de julio cercanos al día de la Virgen del Carmen en Oaxaca. Guelaguetza es una palabra Zapoteca que denota el acto de participar cooperando; es un don gratuito que no lleva consigo más obligación que la de la reciprocidad. Se refiere a la cortesía y atención con que se debe tratar a los demás, se relaciona con el compartir, la cortesía, cooperar y los presentes o regalos.',
          ru: {
            question: 'Что такое Гуэлагетца?',
            answer:
              'Это праздник, известный как понедельники на холме, который отмечается два понедельника июля, близкие ко дню Девы Кармен в Оахаке. Гуэлагетца - это слово сапотеков, обозначающее акт участия в сотрудничестве; это бесплатный подарок, не подразумевающий никаких обязательств, кроме взаимности. Оно относится к вежливости и внимательности в обращении с другими, связано с дележом, вежливостью, сотрудничеством и подарками.'
          }
        },
        {
          id: 'bubij',
          type: 'choice',
          question: '¿De dónde es la Guelaguetza?',
          answer: 'Oaxaca',
          options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
          ru: {
            question: 'Откуда Гуэлагетца?',
            answer: 'Оахака',
            options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
          }
        },
        {
          id: 'w4uj7',
          type: 'choice',
          question:
            '¿Cuál es la representación religiosa que se realiza en Iztapalapa?',
          answer: 'La Pasión de Cristo',
          options: ['la Anunciación', 'El Bautismo', 'El Juicio'],
          ru: {
            question:
              'Какое религиозное представление проводится в Истапалапе?',
            answer: 'Страсти Христовы',
            options: ['Благовещение', 'Крещение', 'Суд']
          }
        },
        {
          id: '5yuul',
          type: 'choice',
          question: '¿Dónde se celebra la Pasión de Cristo en CDMX?',
          answer: 'Iztapalapa',
          options: ['Coyoacán', 'Iztacalco', 'Cuajimalpa'],
          ru: {
            question: 'Где в Мехико отмечают Страсти Христовы?',
            answer: 'Истапалапа',
            options: ['Койоакан', 'Истакалько', 'Куахимальпа']
          }
        },
        {
          id: '7kytj',
          type: 'choice',
          question: '¿Cuál es el baile nacional de México?',
          answer: 'Jarabe Tapatío',
          options: ['El Huapango', 'La Jarana', 'La Danza de los Viejitos'],
          ru: {
            question: 'Какой танец является национальным танцем Мексики?',
            answer: 'Харабе Тапатио',
            options: ['Уапанго', 'Харана', 'Танец стариков']
          }
        },
        {
          id: 'wtjfbh',
          type: 'choice',
          question: 'Baile de Jalisco',
          answer: 'Jarabe Tapatío',
          options: ['El Huapango', 'La Jarana', 'La Danza de los Viejitos'],
          ru: {
            question: 'Танец Халиско',
            answer: 'Харабе Тапатио',
            options: ['Уапанго', 'Харана', 'Танец стариков']
          }
        },
        {
          id: 'cnwkpn',
          type: 'choice',
          question: 'Jarana es un baile de o Jarana es una manifestación de',
          answer: 'Yucatán',
          options: ['Chiapas', 'Campeche', 'Oaxaca'],
          ru: {
            question: 'Харана - это танец или проявление',
            answer: 'Юкатан',
            options: ['Чьяпас', 'Кампече', 'Оахака']
          }
        },
        {
          id: 'gbrvkd',
          type: 'choice',
          question: '¿De dónde es la danza del venado?',
          answer: 'Sonora',
          options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
          ru: {
            question: 'Откуда танец оленя?',
            answer: 'Сонора',
            options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
          }
        },
        {
          id: 'ixslb6',
          type: 'choice',
          question: '¿De dónde es el baile de los viejitos?',
          answer: 'Michoacán',
          options: ['Zacatecas', 'Oaxaca', 'Nuevo León'],
          ru: {
            question: 'Откуда танец стариков?',
            answer: 'Мичоакан',
            options: ['Сакатекас', 'Оахака', 'Нуэво-Леон']
          }
        },
        {
          id: '1kyxvr',
          type: 'choice',
          question: '¿De dónde es el baile de la piña o baile flor de piña?',
          answer: 'Oaxaca',
          options: ['Chiapas', 'Campeche', 'Yucatán'],
          ru: {
            question: 'Откуда танец ананаса или танец цветка ананаса?',
            answer: 'Оахака',
            options: ['Чьяпас', 'Кампече', 'Юкатан']
          }
        },
        {
          id: '1ei18',
          type: 'choice',
          question: '¿Qué son los voladores de Papantla?',
          answer: 'Danza Indígena de Veracruz',
          options: [
            'Aviones de Papantla',
            'Plato típico de Papantla',
            'Fuegos artificiales de Papantla'
          ],
          ru: {
            question: 'Что такое voladores de Papantla?',
            answer: 'Индейский танец из Веракруса',
            options: [
              'Самолеты из Папантлы',
              'Типичное блюдо Папантлы',
              'Фейерверки Папантлы'
            ]
          }
        },
        {
          id: 'wvlk1',
          type: 'choice',
          question:
            'Ritual que está asociado a la fertilidad, se ejecuta con cuatro danzantes que representan los cuatro puntos cardinales y el caporal.',
          answer: 'Los voladores de Papantla',
          options: [
            'Los voladores de Oaxaca',
            'Los voladores de Zacatecas',
            'Los voladores de Colima'
          ],
          note: 'La fertilidad se representa mediante el descenso de los danzantes, que simbolizan la caída de la lluvia. Se utiliza un tronco o "palo volador" de más de 20 metros. En lo alto de la estructura, se sitúa el caporal, personaje que toca un tambor y una flauta, y coordina el ritual.',
          ru: {
            question:
              'Ритуал, связанный с плодородием, выполняется четырьмя танцорами, представляющими четыре стороны света, и капоралем.',
            answer: 'Летчики Папантлы',
            options: ['Летчики Оахаки', 'Летчики Сакатекаса', 'Летчики Колимы'],
            note: 'Плодородие представлено спуском танцоров, символизирующим падение дождя. Используется ствол или "летучий столб" высотой более 20 метров. Наверху конструкции находится капораль, который играет на барабане и флейте и координирует ритуал.'
          }
        },
        {
          id: '87xo3',
          type: 'choice',
          question:
            'Una festividad que es patrimonio intangible de la humanidad o fiesta inscrita en el patrimonio cultural',
          answer: 'Día de Muertos',
          options: [
            'Carnaval de Veracruz',
            'Día de la Candelaria',
            'Lucha libre mexicana'
          ],
          ru: {
            question:
              'Праздник, который является нематериальным наследием человечества или включен в культурное наследие',
            answer: 'День мертвых',
            options: [
              'Карнавал в Веракрусе',
              'День Канделарии',
              'Мексиканская борьба'
            ]
          }
        },
        {
          id: 'qvrsn',
          type: 'choice',
          question: 'Nombre de la flor que se usa el día de muertos',
          answer: 'Cempasúchil',
          options: ['Nochebuena', 'Dalia', 'Magnolia'],
          note: 'Comúnmente de color amarillo o naranja.',
          ru: {
            question: 'Название цветка, который используется в День мертвых',
            answer: 'Цемпасучиль',
            options: ['Пуансеттия', 'Георгин', 'Магнолия'],
            note: 'Обычно желтого или оранжевого цвета.'
          }
        },
        {
          id: '4q1tgc',
          type: 'choice',
          question:
            'Versos festivos que se escriben en noviembre con motivo del día de muertos',
          answer: 'Calaveras o Calaveritas',
          options: ['Poesias', 'Bombas Yucatecas', 'Rimas'],
          ru: {
            question:
              'Праздничные стихи, которые пишут в ноябре по случаю Дня мертвых',
            answer: 'Калаверы или Калаверитас',
            options: ['Стихи', 'Юкатанские бомбы', 'Рифмы']
          }
        },
        {
          id: 'cvy71',
          type: 'choice',
          question: 'Género música que pertenece al estado de Veracruz',
          answer: 'El Son Jarocho',
          options: ['Corridos', 'La Norteña', 'Ranchera'],
          ru: {
            question: 'Музыкальный жанр, который принадлежит штату Веракрус',
            answer: 'Сон Харочо',
            options: ['Корридо', 'Нортеña', 'Ранчера']
          }
        },
        {
          id: '2iy41p',
          type: 'choice',
          question:
            'Himno popular de la ciudad de Veracruz o canción popular de Veracruz',
          answer: 'La Bamba',
          options: [
            'México Lindo y Querido',
            'Canción Mixteca',
            'El Huapango de Moncayo'
          ],
          ru: {
            question:
              'Популярный гимн города Веракрус или популярная песня Веракруса',
            answer: 'Ла Бамба',
            options: [
              'Мексика Линдо и Керидо',
              'Песня Миштека',
              'Уапанго Монкайо'
            ]
          }
        },
        {
          id: 'r38hw',
          type: 'choice',
          question: 'Es costumbre cantar "Las golondrinas" para',
          answer: 'Despedir a alguien',
          options: [
            'Recibir a alguien',
            'Celebrar un cumpleaños',
            'Celebrar un triunfo'
          ],
          ru: {
            question: 'Принято петь "Лас Голондринас" чтобы',
            answer: 'Прощаться с кем-то',
            options: [
              'Встречать кого-то',
              'Праздновать день рождения',
              'Праздновать победу'
            ]
          }
        },
        {
          id: 's8s3lb',
          type: 'choice',
          question:
            'En los cumpleaños se suele cantar en homenaje al festejado',
          answer: 'Las mañanitas',
          options: ['Las golondrinas', 'Cumpleaños feliz', 'Serenatas'],
          ru: {
            question: 'На днях рождения обычно поют в честь именинника',
            answer: 'Лас маньянитас',
            options: ['Лас Голондринас', 'С Днем Рождения', 'Серенады']
          }
        },
        {
          id: 'zk169p',
          type: 'choice',
          question:
            'Las "posadas" son fiestas privadas o vecinales que se realizan',
          answer: 'Los días previos a la navidad',
          options: [
            'Los días de semana santa',
            'Durante año nuevo',
            'En vacaciones de verano'
          ],
          ru: {
            question:
              '"Посады" - это частные или соседские праздники, которые проводятся',
            answer: 'В дни перед Рождеством',
            options: [
              'В дни Страстной недели',
              'Во время Нового года',
              'На летних каникулах'
            ]
          }
        },
        {
          id: 'z63u7s',
          type: 'choice',
          question: '¿Qué se celebra el 10 de mayo?',
          answer: 'El día de las madres',
          options: [
            'El día del padre',
            'El día del niño',
            'El día de la candelaria'
          ],
          ru: {
            question: 'Что отмечается 10 мая?',
            answer: 'День матери',
            options: ['День отца', 'День ребенка', 'День Канделарии']
          }
        },
        {
          id: '1zzqvcq',
          type: 'choice',
          question: '¿Cuál fue la primera Miss Universo Mexicana?',
          answer: 'Maria Guadalupe Jones',
          options: ['Dayana Mendoza', 'Stefania Fernández', 'Gabriela Isler'],
          note: 'Mejor conocida como Lupita Jones en el año de 1991.',
          ru: {
            question: 'Кто была первой мексиканкой, ставшей Мисс Вселенная?',
            answer: 'Мария Гвадалупе Джонс',
            options: [
              'Дайана Мендоса',
              'Стефания Фернандес',
              'Габриэла Исслер'
            ],
            note: 'Более известная как Лупита Джонс в 1991 году.'
          }
        },
        {
          id: 'e3ogq',
          type: 'choice',
          question:
            '¿Quiénes fueron las mexicanas ganadoras del Miss Universo?',
          answer:
            'Maria Guadalupe (Lupita) Jones (1991), Ximena Navarrete (2010), Andrea Meza (2020)',
          options: [
            'Dayana Mendoza (2008), Stefania Fernández (2009), Gabriela Isler (2013)',
            'Irene Sáez (1981), Bárbara Palacios (1986), Alicia Machado (1996)',
            'Taliana Vargas (2008), Ariadna Gutiérrez (2015), Laura González (2017)'
          ],
          ru: {
            question:
              'Кто были мексиканками, победившими на конкурсе Мисс Вселенная?',
            answer:
              'Мария Гвадалупе (Лупита) Джонс (1991), Химена Наваррете (2010), Андреа Меза (2020)',
            options: [
              'Дайана Мендоса (2008), Стефания Фернандес (2009), Габриэла Исслер (2013)',
              'Ирен Саэс (1981), Барбара Палациос (1986), Алисия Мачадо (1996)',
              'Талиана Варгас (2008), Ариадна Гутьеррес (2015), Лаура Гонсалес (2017)'
            ]
          }
        },
        {
          id: 'odn3u',
          type: 'choice',
          question: '¿Qué significa el refrán: "A darle que es mole de olla"?',
          answer: 'Invitación a hacer alguna cosa con buen ánimo y sin demora',
          options: [
            'Empezar a comer pronto',
            'Ir a una fiesta local',
            'Compartir un platillo de mole poblano'
          ],
          ru: {
            question: 'Что означает пословица: "A darle que es mole de olla"?',
            answer:
              'Приглашение сделать что-то с хорошим настроением и без задержек',
            options: [
              'Начать есть поскорее',
              'Пойти на местный праздник',
              'Разделить блюдо из моле поблано'
            ]
          }
        },
        {
          id: 'srd279',
          type: 'choice',
          question:
            '¿Cómo se llama donde van a parar los fiesteros? (conductores alcoholizados)',
          answer: 'El torito',
          options: ['El becerrito', 'La vaquita', 'El corral'],
          ru: {
            question:
              'Как называется место, куда отправляют гуляк? (пьяных водителей)',
            answer: 'Торито',
            options: ['Бесеррито', 'Вакита', 'Корраль']
          }
        },
        {
          id: 'jrigjp',
          type: 'choice',
          question: 'Famoso callejón de Guanajuato',
          answer: 'El callejón del beso',
          options: [
            'Callejón del infierno',
            'Callejon del perro muerto',
            'Callejon de las ánimas'
          ],
          ru: {
            question: 'Знаменитый переулок в Гуанахуато',
            answer: 'Переулок поцелуя',
            options: ['Переулок ада', 'Переулок мертвой собаки', 'Переулок душ']
          }
        },
        {
          id: '2j5u9m',
          type: 'choice',
          question: 'Imagen religiosa más venerada en México',
          answer: 'La Virgen de Guadalupe',
          options: [
            'La Virgen de Zapopan',
            'La Virgen del Valle',
            'La Virgen del Carmen'
          ],
          ru: {
            question: 'Самый почитаемый религиозный образ в Мексике',
            answer: 'Дева Гваделупская',
            options: ['Дева Запопанская', 'Дева Долины', 'Дева Кармельская']
          }
        },
        {
          id: 'c8b3h',
          type: 'choice',
          question: '¿Cuántos Patrimonios Unesco tiene México?',
          answer: '35',
          options: ['15', '20', '25'],
          note: 'Inscritos en la Lista de Patrimonio Mundial, de los cuales, 6 bienes son naturales (N), 27 bienes culturales y 2 mixtos (m).',
          ru: {
            question: 'Сколько объектов ЮНЕСКО имеет Мексика?',
            answer: '35',
            options: ['15', '20', '25'],
            note: 'Включены в Список всемирного наследия, из которых 6 объектов являются природными, 27 культурными и 2 смешанными.'
          }
        },
        {
          id: 't2yzrf',
          type: 'choice',
          question: '¿Cuántos Patrimonios culturales Unesco tiene México?',
          answer: '27',
          options: ['15', '20', '25'],
          ru: {
            question: 'Сколько культурных объектов ЮНЕСКО имеет Мексика?',
            answer: '27',
            options: ['15', '20', '25']
          }
        },
        {
          id: '839hmi',
          type: 'text',
          question:
            'Bienes naturales patrimonio de la humanidad según UNESCO en México',
          answer:
            'Sian ka’an, Quintana Roo (1987)\nSantuario de ballenas de El Vizcaíno, BCS (1993)\nIslas y áreas protegidas del Golfo de California (2005)\nReserva de la biósfera de la mariposa monarca, Michoacán/Estado de México (2008)\nReserva de la biósfera El pinacate y gran desierto de Altar, Sonora (2013)\nArchipiélago de Revillagigedo (2016)',
          ru: {
            question:
              'Природные объекты всемирного наследия по версии ЮНЕСКО в Мексике',
            answer:
              'Сиан Каан, Кинтана Роо (1987)\nСвятилище китов Эль-Вискайно, БКС (1993)\nОстрова и охраняемые районы Калифорнийского залива (2005)\nБиосферный заповедник бабочки-монарха, Мичоакан/Мехико (2008)\nБиосферный заповедник Эль Пинакате и Большая пустыня Алтар, Сонора (2013)\nАрхипелаг Ревилья-Гигедо (2016)'
          }
        },
        {
          id: 'tqzkz',
          type: 'text',
          question:
            'Bienes mixtos patrimonio de la humanidad según UNESCO en México',
          answer:
            'Antigua Ciudad Maya y bosques tropicales protegidos de Calakmul, Campeche (2002, 2014)\nValle de Tehuacán -Cuicatlán: hábitat originario de Mesoamérica (2018)',
          ru: {
            question:
              'Смешанные объекты всемирного наследия по версии ЮНЕСКО в Мексике',
            answer:
              'Древний город майя и охраняемые тропические леса Калакмуль, Кампече (2002, 2014)\nДолина Теуакан-Куикатлан: родина Мезоамерики (2018)'
          }
        },
        {
          id: 'rgh655',
          type: 'text',
          question:
            'Patrimonios intangibles, inmateriales de la humanidad según la UNESCO',
          answer:
            'Día de Muertos (2008)\nLa peregrinación a la peña de Bernal (2009)\nVoladores de Papantla (2009)\nLa Pirekua, canto tradicional de los Purépechas (2010)\nLos Parachicos en la fiesta tradicional de Enero de Chiapa de Corzo (2010)\nCocina Tradicional Mexicana de Michoacán (2010)\nEl Mariachi (2011)\nLa Charrería (2016)\nLa Romería de Zapopan (2018)',
          ru: {
            question:
              'Нематериальное культурное наследие человечества по версии ЮНЕСКО',
            answer:
              'День мертвых (2008)\nПаломничество к скале Бернал (2009)\nЛетчики Папантлы (2009)\nПирекуа, традиционная песня пурепеча (2010)\nПарачикос на традиционном январском празднике Чьяпа-де-Корсо (2010)\nТрадиционная мексиканская кухня Мичоакана (2010)\nМариачи (2011)\nЧаррерия (2016)\nРомерия в Сапопане (2018)'
          }
        },
        {
          id: 'fu8gq',
          type: 'text',
          question:
            'Zonas arqueológicas patrimonio de la humanidad según UNESCO',
          answer:
            'Palenque\nMonte Albán\nChichen Itzá\nTeotihuacán\nTajín\nUxmal\nXochicalco\n Calakmul',
          ru: {
            question:
              'Археологические зоны всемирного наследия по версии ЮНЕСКО',
            answer:
              'Паленке\nМонте-Альбан\nЧичен-Ица\nТеотиуакан\nТахин\nУшмаль\nСочикалько\nКалакмуль'
          }
        },
        {
          id: '56p1t',
          type: 'choice',
          question:
            '¿Cuál sítio arqueológico NO es un patrimonio UNESCO de México?',
          answer: 'Parque Nacional de Tikal',
          options: ['Monte Albán', 'Chichen Itzá', 'Uxmal'],
          note: 'Está en Guatemala.',
          ru: {
            question:
              'Какой археологический объект НЕ является объектом ЮНЕСКО в Мексике?',
            answer: 'Национальный парк Тикаль',
            options: ['Монте-Альбан', 'Чичен-Ица', 'Ушмаль'],
            note: 'Находится в Гватемале.'
          }
        },
        {
          id: 'sq3rga',
          type: 'choice',
          question: '¿Dónde se ubica la zona arqueológica El Tajín?',
          answer: 'Papantla, Veracruz',
          options: ['Oaxaca', 'Chiapas', 'Campeche'],
          ru: {
            question: 'Где находится археологическая зона Эль-Тахин?',
            answer: 'Папантла, Веракрус',
            options: ['Оахака', 'Чьяпас', 'Кампече']
          }
        },
        {
          id: 'tmmdhg',
          type: 'choice',
          question:
            'Lugar decretado patrimonio de la humanidad por la UNESCO en 1992',
          answer: 'Tajín',
          options: ['Palenque', 'Monte Albán', 'Chichen Itzá'],
          ru: {
            question:
              'Место, объявленное объектом всемирного наследия ЮНЕСКО в 1992 году',
            answer: 'Тахин',
            options: ['Паленке', 'Монте-Альбан', 'Чичен-Ица']
          }
        },
        {
          id: 'mzjtyp',
          type: 'choice',
          question: '¿Dónde se encuentra la pirámide de Los Nichos?',
          answer: 'En la zona arqueológica El Tajín',
          options: ['Palenque, Chiapas', 'Yucatán', 'Campeche'],
          note: 'En el estado de Veracruz, pertenece a la cultura Totonaca.',
          ru: {
            question: 'Где находится пирамида Лос Ничос?',
            answer: 'В археологической зоне Эль-Тахин',
            options: ['Паленке, Чьяпас', 'Юкатан', 'Кампече'],
            note: 'В штате Веракрус, принадлежит культуре тотонаков.'
          }
        },
        {
          id: 'pytlj',
          type: 'choice',
          question: 'Zona arqueológica de Morelos',
          answer: 'Xochicalco',
          options: ['Montealbán', 'Paquimé', 'Palenque'],
          ru: {
            question: 'Археологическая зона Морелоса',
            answer: 'Сочикалько',
            options: ['Монте-Альбан', 'Пакиме', 'Паленке']
          }
        },
        {
          id: '4bn4b9',
          type: 'choice',
          question: '¿Dónde se encuentra la zona arqueológica de Cacaxtla?',
          answer: 'Tlaxcala',
          options: ['Chiapas', 'Yucatán', 'Campeche'],
          note: 'Destaca por lo bien conservados de sus murales.',
          ru: {
            question: 'Где находится археологическая зона Какстла?',
            answer: 'Тласкала',
            options: ['Чьяпас', 'Юкатан', 'Кампече'],
            note: 'Известен хорошо сохранившимися фресками.'
          }
        },
        {
          id: 'u4jpsvi',
          type: 'choice',
          question: '¿Dónde se encuentra la zona arqueológica de Huatabampo?',
          answer: 'Sonora',
          options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
          ru: {
            question: 'Где находится археологическая зона Уатабампо?',
            answer: 'Сонора',
            options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
          }
        },
        {
          id: 'isejb8',
          type: 'choice',
          question:
            '¿Donde se encuentra la zona arqueológica de Chalchihuites o AltaVista?',
          answer: 'Zacatecas',
          options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
          ru: {
            question:
              'Где находится археологическая зона Чальчихуитес или Альтависта?',
            answer: 'Сакатекас',
            options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
          }
        },
        {
          id: '6ipoz',
          type: 'choice',
          question:
            '¿Dónde se encuentra la zona arqueológica de Villa de Reyes?',
          answer: 'San Luis Potosí',
          options: ['Chiapas', 'Campeche', 'Oaxaca'],
          ru: {
            question: 'Где находится археологическая зона Вилья-де-Рейес?',
            answer: 'Сан-Луис-Потоси',
            options: ['Чьяпас', 'Кампече', 'Оахака']
          }
        },
        {
          id: 'mkyxl',
          type: 'choice',
          question:
            '¿Dónde se encuentra la zona arqueológica de San Antonio Nogalar?',
          answer: 'Tamaulipas',
          options: ['Chiapas', 'Campeche', 'Oaxaca'],
          ru: {
            question: 'Где находится археологическая зона Сан-Антонио Ногалар?',
            answer: 'Тамаулипас',
            options: ['Чьяпас', 'Кампече', 'Оахака']
          }
        }
      ]
    }
  ]
};