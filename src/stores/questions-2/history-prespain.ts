import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Qué es México prehispánico?',
    answer:
      'Es el periodo antes de la conquista y colonización española de 1521, la historia de los pueblos que vivieron en éste territorio, las grandes culturas olmeca, maya, zapoteca, toltecas, purépecha, azteca entre muchas otras que construyeron un impresionante estilo de vida, agricultura, comercio, arte, arquitectura y organización social que deslumbró más tarde a los conquistadores.',
    type: 'text',
    id: '4igue',
    ru: {
      question: 'Что такое доколумбова Мексика?',
      answer:
        'Это период до испанского завоевания и колонизации 1521 года, история народов, живших на этой территории, великие культуры ольмеков, майя, сапотеков, тольтеков, пурепечей, ацтеков и многих других, которые создали впечатляющий образ жизни, сельское хозяйство, торговлю, искусство, архитектуру и социальную организацию, которые позже поразили завоевателей.'
    }
  },
  {
    question:
      '¿Con qué comercializaban en la época prehispánica? o moneda de intercambio principal de los pueblos mesoamericanos',
    answer: 'Cacao',
    options: ['Plata', 'Cerámica', 'Piedras preciosas'],
    type: 'choice',
    id: 'ff6ov',
    ru: {
      question:
        'Чем торговали в доколумбовую эпоху? или основная валюта обмена мезоамериканских народов',
      answer: 'Какао',
      options: ['Серебро', 'Керамика', 'Драгоценные камни']
    }
  },
  {
    question: 'La base alimenticia de los pueblos mesoamericanos fue',
    answer: 'El maíz',
    options: ['El aguacate', 'El trigo', 'El jitomate'],
    type: 'choice',
    id: '7czrck',
    ru: {
      question: 'Основой питания мезоамериканских народов был',
      answer: 'Кукуруза',
      options: ['Авокадо', 'Пшеница', 'Помидоры']
    }
  },
  {
    question:
      'El mayor desarrollo de la cultura mesoamericana se dio durante el período',
    answer: 'Clásico',
    options: ['Pos clásico', 'Pre clásico', 'Época colonial'],
    type: 'choice',
    id: 'tpti8c',
    ru: {
      question:
        'Наибольшее развитие мезоамериканской культуры произошло в период',
      answer: 'Классический',
      options: ['Постклассический', 'Доклассический', 'Колониальный период']
    }
  },
  {
    question: '¿A qué se le conoce como el hombre de Tepexpan?',
    answer: 'Es un esqueleto precolombino',
    note: 'Encontrado en 1947 a las orillas del lago Texcoco, siendo el más antiguo de Mesoamérica encontrado hasta ahora.',
    options: [
      'Fantasma precolombino',
      'Leyenda de un asesino',
      'Comerciante de Tepexpan'
    ],
    type: 'choice',
    id: 'shvwqe',
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
    question: '¿Cuántas lenguas indígenas existen en México?',
    answer: '68',
    options: ['63', '53', '65'],
    type: 'choice',
    id: 'qo73hd',
    ru: {
      question: 'Сколько индейских языков существует в Мексике?',
      answer: '68',
      options: ['63', '53', '65']
    }
  },
  {
    question:
      '¿Cuál fue uno de los productos artesanales más finos del México antiguo?',
    answer: 'La cerámica anaranjada delgada',
    options: ['El barro cocido', 'Las piñatas', 'La platería'],
    type: 'choice',
    id: 'geo7ut',
    ru: {
      question:
        'Что было одним из самых изысканных ремесленных изделий древней Мексики?',
      answer: 'Тонкая оранжевая керамика',
      options: ['Обожженная глина', 'Пиньяты', 'Ювелирные изделия']
    }
  },
  {
    question: '¿Cuál es otro término para referirse a los emperadores mexicas?',
    answer: 'Tlatoani',
    options: ['Tonatiuh', 'Huitzilopochtli', 'Huitlacoche'],
    type: 'choice',
    id: '9zce5c',
    ru: {
      question:
        'Какой еще термин используется для обозначения мексиканских императоров?',
      answer: 'Тлатоани',
      options: ['Тонатиу', 'Уицилопочтли', 'Уитлакоче']
    }
  },
  {
    question: 'Juego de pelota prehispánico',
    answer:
      'Fue un deporte en equipo de mesoamérica, aparentemente cumplía la función de resolver conflictos de diversa naturaleza: pleitos por tierras, tributo, controles comerciales, también de manera informal, para la recreación de los niños y mujeres. Se encontraron campos de juego de pelota en tierras de la cultura Maya, Teotihuacana, Mexica.',
    type: 'text',
    id: 'mo8v',
    ru: {
      question: 'Доколумбовая игра в мяч',
      answer:
        'Это была командная игра мезоамерики, выполнявшая функцию разрешения конфликтов различного характера: споры за земли, дань, торговые споры, а также неформально для развлечения детей и женщин. Поля для игры в мяч были найдены на территориях культуры Майя, Теотиуакана, Мексики.'
    }
  },
  {
    question: 'Cultura madre',
    answer: 'Olmeca',
    options: ['Maya', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: '79lnuh',
    ru: {
      question: 'Материнская культура',
      answer: 'Ольмеки',
      options: ['Майя', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question: '¿Cuál es la cultura prehispánica que adoraba a los jaguares?',
    answer: 'Olmeca',
    options: ['Maya', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: '9wqj4s',
    ru: {
      question: 'Какая доколумбовая культура поклонялась ягуарам?',
      answer: 'Ольмеки',
      options: ['Майя', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question: 'En el periodo preclásico ¿Cuál fue la tribu más dominante?',
    answer: 'Olmeca',
    options: ['Maya', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: '4d8g6',
    ru: {
      question: 'В доклассическом периоде какая была самая доминирующая племя?',
      answer: 'Ольмеки',
      options: ['Майя', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question: 'Período en el que más se desarrolló la cultura Olmeca',
    answer: 'Preclásico',
    options: ['Clasico', 'Postclásico', 'Epoca Colonial'],
    type: 'choice',
    id: 'l6wi8',
    ru: {
      question: 'Период наибольшего развития культуры ольмеков',
      answer: 'Доклассический',
      options: ['Классический', 'Постклассический', 'Колониальный период']
    }
  },
  {
    question:
      '¿En qué etapa surgieron los primeros reinos o señoríos en Mesoamérica?',
    answer: 'Preclásico',
    options: ['Clasico', 'Postclásico', 'Epoca Colonial'],
    type: 'choice',
    id: 'e2mhmi'
  },
  {
    question: 'Cultura de las cabezas colosales o cultura del preclásico medio',
    answer: 'Olmeca',
    options: ['Maya', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: 'jo2fz',
    ru: {
      question:
        'Культура колоссальных голов или культура среднего доклассического периода',
      answer: 'Ольмеки',
      options: ['Майя', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question: 'Las mesas de piedra para actos ceremoniales son de la cultura',
    answer: 'Olmeca',
    options: ['Maya', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: 'eyo6ai',
    ru: {
      question:
        'Каменные столы для церемониальных действий принадлежат культуре',
      answer: 'Ольмеки',
      options: ['Майя', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question:
      '¿Cuál es el centro ceremonial MÁS IMPORTANTE de la cultura Olmeca?',
    answer: 'La Venta, Tabasco',
    options: [
      'San Lorenzo, Veracruz',
      'Chichén Itzá, Yucatán',
      'Pirámide de la Luna, Teotihuacán'
    ],
    type: 'choice',
    id: 'k4tv2d',
    ru: {
      question: 'Какой самый важный церемониальный центр культуры ольмеков?',
      answer: 'Ла Вента, Табаско',
      options: [
        'Сан-Лоренсо, Веракрус',
        'Чичен-Ица, Юкатан',
        'Пирамида Луны, Теотиуакан'
      ]
    }
  },
  {
    question:
      '¿Dónde se encuentra LA PIRÁMIDE más antigua? o primera pirámide mesoamericana hecha de lodo y tierra',
    answer: 'La Venta, Tabasco',
    note: 'Pertenece a la cultura Olmeca.',
    options: [
      'San Lorenzo, Veracruz',
      'Chichén Itzá, Yucatán',
      'Pirámide de la Luna, Teotihuacan'
    ],
    type: 'choice',
    id: 'fjaun8',
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
    question: 'Centro ceremonial MÁS ANTIGUO de la cultura Olmeca',
    answer: 'San Lorenzo, Veracruz',
    options: [
      'La Venta, Tabasco',
      'Chichén Itzá, Yucatán',
      'Pirámide de la Luna, Teotihuacán'
    ],
    type: 'choice',
    id: 't68xjr',
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
    question: 'Los centros ceremoniales Olmecas más importantes fueron',
    answer: 'La Venta, Tres Zapotes y San Lorenzo',
    options: [
      'La Venta, Pirámide del Sol y San Lorenzo',
      'San Lorenzo, La Venta y Chichén Itzá',
      'La Venta, Tres Zapotes y Tollan-Xicocotitlan'
    ],
    type: 'choice',
    id: 'ws046bn'
  },
  {
    question:
      '¿Que civilización se asentó en Chiapas, Yucatán,  Veracruz, Guatemala, Belice y Quintana Roo?',
    answer: 'Los Mayas',
    options: ['Los Teotihuacanos', 'Los Mexicas', 'Los Toltecas'],
    type: 'choice',
    id: 'f0nm2',
    ru: {
      question:
        'Какая цивилизация поселилась в Чьяпасе, Юкатане, Веракрусе, Гватемале, Белизе и Кинтана-Роо?',
      answer: 'Майя',
      options: ['Теотиуаканцы', 'Мексика', 'Тольтеки']
    }
  },
  {
    question: 'Los mayas se caracterizaban por ser',
    answer: 'Astrónomos y matemáticos',
    options: [
      'Astrónomos y físicos',
      'Físicos y químicos',
      'Astrónomos y curanderos'
    ],
    type: 'choice',
    id: 'ctzqro',
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
    question: '¿Qué era la cuenta larga?',
    answer: 'Un calendario de origen Maya',
    options: [
      'Deudas altas por pagar',
      'Castigo Mesoamericano',
      'Sacrificio Maya'
    ],
    type: 'choice',
    id: '7eww4i',
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
    question: '¿A quien se le atribuye la creación del cero?',
    answer: 'A los Mayas',
    options: ['A los Teotihuacanos', 'A los Mexicas', 'A los Zapotecos'],
    type: 'choice',
    id: 'pf69dz',
    ru: {
      question: 'Кому приписывается создание нуля?',
      answer: 'Майя',
      options: ['Теотиуаканцы', 'Мексика', 'Сапотеки']
    }
  },
  {
    question:
      '¿Cuál es la Deidad Maya del comercio, también conocido como dios del cacao o sexta deidad maya más comúnmente representada en los códices?',
    answer: 'Ek Chuah',
    options: ['Chaac', 'Ah Mun', 'Chuah'],
    type: 'choice',
    id: '9570d',
    ru: {
      question:
        'Какое божество майя торговли, также известное как бог какао или шестое божество майя, наиболее часто изображаемое в кодексах?',
      answer: 'Эк Чуах',
      options: ['Чаак', 'Ах Мун', 'Чуах']
    }
  },
  {
    question: 'Diosa Maya de la luna',
    answer: 'Ixchel',
    options: ['Chaac', 'Ah Mun', 'Ek Chuah'],
    type: 'choice',
    id: 'm4nvq5',
    ru: {
      question: 'Богиня Луны у майя',
      answer: 'Ишчель',
      options: ['Чаак', 'Ах Мун', 'Эк Чуах']
    }
  },
  {
    question: '¿Cuál es la pirámide MÁS ALTA de México?',
    answer: 'Toniná (pertenece a la cultura Maya)',
    note: 'Mide más de 75 metros de altura.',
    options: [
      'La Venta (pertenece a la cultura Olmeca)',
      'El sol (pertenece a la cultura Teotihuacana)',
      'Chichén Itzá (pertenece a la cultura Maya)'
    ],
    type: 'choice',
    id: 'g77xgf',
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
    question: 'Chichén Itzá fue una poderosa ciudad',
    answer: 'Maya',
    options: ['Mixteca', 'Tarasca', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: 'difwyf',
    ru: {
      question: 'Чичен Ица был могущественным городом',
      answer: 'Майя',
      options: ['Миштеки', 'Тараски', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question: 'Cultura que se estableció en la Ciudad de Palenque',
    answer: 'Maya',
    options: ['Mixteca', 'Tarasca', 'Teotihuacana', 'Mexica'],
    type: 'choice',
    id: '64uo9f',
    ru: {
      question: 'Культура, поселившаяся в городе Паленке',
      answer: 'Майя',
      options: ['Миштеки', 'Тараски', 'Теотиуаканская', 'Мексика']
    }
  },
  {
    question: 'Otro nombre del templo de Kukulkan, Chichén Itzá',
    answer: 'El Castillo',
    options: ['La Pirámide', 'El Gran Templo', 'La Luna'],
    type: 'choice',
    id: '9kvbrc',
    ru: {
      question: 'Другое название храма Кукулькана в Чичен-Ице',
      answer: 'Замок',
      options: ['Пирамида', 'Великий храм', 'Луна']
    }
  },
  {
    question:
      'Manuscrito en papel amate o cuero con representaciones pictóricas que relataba asuntos históricos y religiosos del México antiguo',
    answer: 'Códice',
    options: ['Biblia', 'Relatos', 'Libro sagrado'],
    type: 'choice',
    id: 'l64l3el',
    ru: {
      question:
        'Рукопись на амате или коже с пиктографическими изображениями, повествующая об исторических и религиозных делах древней Мексики',
      answer: 'Кодекс',
      options: ['Библия', 'Рассказы', 'Священная книга']
    }
  },
  {
    question: 'Nombres de centros ceremoniales o ciudades de la cultura Maya',
    answer:
      'Palenque, Yaxchilán, Calakmul, Tikal, Toniná, Chichen Itzá, Copán y Uxmal',
    options: [
      'Mitla, Zaachila, Monte Albán, El Gallo y Bonete',
      'Pátzcuaro, Ihuatzio y Tzintzuntzan',
      'San Lorenzo, La Venta, Laguna de los Cerros y Tres Zapotes'
    ],
    type: 'choice',
    id: 'cdyjb',
    ru: {
      question: 'Названия церемониальных центров или городов культуры Майя',
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
    question: '¿Qué fué Teotihuacan?',
    answer: 'Fue un centro ceremonial y ciudad',
    note: 'En su etapa de mayor esplendor la ciudad albergaba al menos 25.000 personas, incluyendo las suburbios unas 150.000-200.000 personas. A diferencia de otros sitios, Teotihuacán era una ciudad con mercados, barrios de artesanos y comerciantes. Fue la civilización más poderosa de Mesoamérica, ninguna otra ciudad igualó su tamaño.',
    options: ['Fue una cuidad secreta', 'Fue una isla', 'Fue un dios Maya'],
    type: 'choice',
    id: 'im3lar',
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
    question: '¿Qué significa Teotihuacán?',
    answer: 'Ciudad de los Dioses',
    options: ['Cuidad Sagrada', 'Cuidad del Maíz', 'Cuidad Eterna'],
    type: 'choice',
    id: 'f8cqm',
    ru: {
      question: 'Что означает Теотиуакан?',
      answer: 'Город богов',
      options: ['Священный город', 'Город кукурузы', 'Вечный город']
    }
  },
  {
    question: '¿Dónde se encuentran las pirámides del Sol y de la Luna?',
    answer: 'Teotihuacan, Estado de México',
    options: [
      'Cuidad de México',
      'Mérida, Yucatán',
      'Oaxaca de Juárez, Oaxaca'
    ],
    type: 'choice',
    id: '4n4y58',
    ru: {
      question: 'Где находятся пирамиды Солнца и Луны?',
      answer: 'Теотиуакан, штат Мехико',
      options: ['Мехико', 'Мерида, Юкатан', 'Оахака-де-Хуарес, Оахака']
    }
  },
  {
    question: '¿Cuándo se construyeron las pirámides del sol y la luna?',
    answer: 'Entre el año 0 y 200 DC',
    options: [
      'Entre el año 10 y 200 DC',
      'Entre el año 100 y 300 DC',
      'Entre el año 1 y 200 DC'
    ],
    type: 'choice',
    id: 'gm6o46',
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
    question: '¿Dónde se ubicaba la Calzada de los Muertos?',
    answer: 'En Teotihuacán',
    note: 'Era la avenida principal con 2 km de longitud.',
    options: ['En Chichén Itzá', 'En la Venta', 'En San Lorenzo'],
    type: 'choice',
    id: '1fbcyc',
    ru: {
      question: 'Где находилась Дорога мёртвых?',
      answer: 'В Теотиуакане',
      options: ['В Чичен-Ице', 'В Ла Венте', 'В Сан-Лоренсо'],
      note: 'Это был главный проспект длиной 2 км.'
    }
  },
  {
    question:
      '¿Cuáles eran los dos grandes grupos étnicos que habitaban en Teotihuacán?',
    answer: 'Nahuas y Otomíes',
    options: [
      'Nahuas y Zapotecas',
      'Mixtecas y Otomíes',
      'Totonacas y Otomíes'
    ],
    type: 'choice',
    id: '6iu6qi',
    ru: {
      question: 'Какие две большие этнические группы жили в Теотиуакане?',
      answer: 'Нахуа и отоми',
      options: ['Нахуа и сапотеки', 'Миштеки и отоми', 'Тотонаки и отоми']
    }
  },
  {
    question: 'Tres productos que los Teotihuacanos obtenían del maguey',
    answer: 'Pulque, cordajes y fibras textiles',
    options: [
      'Pulque, cera y fibras textiles',
      'Pulque, cenizas y cera',
      'Pulque, cordajes y envoltura para tamales'
    ],
    type: 'choice',
    id: 'nvcnw',
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
    question: '¿Cuál es la deidad suprema de los Teotihuacanos?',
    answer: 'Quetzalcóatl',
    note: 'En náhuatl significa ‘Serpiente Emplumada’, de quetzalli ‘pluma’ y cōhuātl ‘serpiente’.',
    options: ['Cuauhtémoc', 'Moctezuma', 'Huitzilopochtli'],
    type: 'choice',
    id: 'mm9c7e',
    ru: {
      question: 'Какое верховное божество теотиуаканцев?',
      answer: 'Кецалькоатль',
      options: ['Куаутемок', 'Монтесума', 'Уицилопочтли'],
      note: "На языке науатль означает 'Пернатый змей', от quetzalli 'перо' и cōhuātl 'змея'."
    }
  },
  {
    question: 'Deidad del México antiguo conocida como la Serpiente Emplumada',
    answer: 'Quetzalcóatl',
    options: ['Cuauhtémoc', 'Moctezuma', 'Ek Chuah'],
    type: 'choice',
    id: 'dfr7e',
    ru: {
      question: 'Божество древней Мексики, известное как Пернатый змей',
      answer: 'Кецалькоатль',
      options: ['Куаутемок', 'Монтесума', 'Эк Чуах']
    }
  },
  {
    question: '¿Donde se encontraron vestigios de la cultura teotihuacana?',
    answer: 'Tikal',
    note: 'Ubicado en Guatemala. ¿Qué es un vestigio? Señal o huella que queda de algo o de alguien que ha pasado o que ha desaparecido.',
    options: ['Monte Albán', 'Chichen Itzá', 'Uxmal'],
    type: 'choice',
    id: 'qeyb0l',
    ru: {
      question: 'Где были найдены следы культуры Теотиуакана?',
      answer: 'Тикаль',
      options: ['Монте-Альбан', 'Чичен-Ица', 'Ушмаль'],
      note: 'Расположен в Гватемале. Что такое след? Знак или отпечаток, оставшийся от чего-то или кого-то, кто прошёл или исчез.'
    }
  },
  {
    question: '¿Dónde se desarrolló la civilización zapoteca?',
    answer:
      'En los valles de Etla, Tlacolula y Zimatlán en el estado de Oaxaca',
    options: [
      'En el Valle de Cuautitlán y Tlacolula de Ciudad de México',
      'El valle del Toloache en Baja Califonia Sur',
      'Valle de Vizcaino en Tijuana'
    ],
    type: 'choice',
    id: '6729b',
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
    question: '¿Qué es el Monte Albán?',
    answer: 'Fue la antigua capital de los Zapotecos',
    note: 'Contó con una población de 35.000 personas.',
    options: [
      'Fue la antigua capital de los Mixtecos',
      'Fue la antigua capital de los Olmecas',
      'Fue la antigua capital de los Mayas'
    ],
    type: 'choice',
    id: '96dszm',
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
    question: 'Edificio público de Monte Albán',
    answer: 'Edificio de los danzantes',
    options: [
      'Edificio de los dioses',
      'Edificio sagrado',
      'Edificio de los triunfantes'
    ],
    type: 'choice',
    id: 'q6qyag',
    ru: {
      question: 'Общественное здание Монте-Альбана',
      answer: 'Здание танцоров',
      options: ['Здание богов', 'Священное здание', 'Здание триумфаторов']
    }
  },
  {
    question:
      '¿A qué se debe el nombre del edificio de los danzantes en Monte Albán?',
    answer:
      'A que las figuras esculpidas en sus lápidas parecen moverse o contorsionarse',
    options: [
      'A una leyenda prehispánica',
      'A un ritual y baile sagrado de los zapotecos',
      'A un danzante sagrado'
    ],
    type: 'choice',
    id: 'pbwmh',
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
    question: '¿Dónde se asentaron los Toltecas?',
    answer: 'Tula de Allende, estado de Hidalgo',
    options: [
      'Pachuca, estado de Hidalgo',
      'Tulancingo, estado de Hidalgo',
      'Ixmiquilpan, estado de Hidalgo'
    ],
    type: 'choice',
    id: '70jo',
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
    question: '¿Qué significa Tolteca?',
    answer: 'Habitante de Tula',
    options: ['Tuleño', 'Habitante de Toluca', 'Habitante de Tultepec'],
    type: 'choice',
    id: 'ks2fby',
    ru: {
      question: 'Что означает Толтека?',
      answer: 'Житель Тулы',
      options: ['Туленец', 'Житель Толуки', 'Житель Тултепека']
    }
  },
  {
    question: '¿Qué significa Tula en Náhuatl?',
    answer: 'Juncal, o junto al tular',
    options: [
      'Lugar de coyotes',
      'Cuidad de las flores',
      'En el cerro escrito o pintado'
    ],
    type: 'choice',
    id: 'no84x',
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
    question:
      'Nombre del altar que construía una cultura prehispánica con la base decorada con cráneos tallados en piedra y estacas para ensartar cabezas de los sacrificados',
    answer: 'Tzompantli',
    note: 'Era una estructura parecida a un áбaco donde cada travesaño estaba formado por una hilera de cabezas humanas. El más conocido de acuerdo a diferentes estimaciones antiguas llegó a tener cerca de 60.000 cráneos humanos al momento de la llegada de los españoles en 1521.',
    options: ['Izquitl', 'Tiyānquiztli', 'Itacatl'],
    type: 'choice',
    id: 'ntzzbj',
    ru: {
      question:
        'Название алтаря, построенного доколумбовой культурой с основой, украшенной черепами, вырезанными из камня, и кольями для насаживания голов жертв',
      answer: 'Цомпантли',
      options: ['Изкитль', 'Тиянкистли', 'Итакатль'],
      note: 'Это была структура, похожая на абак, где каждая перекладина состояла из ряда человеческих голов. Самый известный по различным древним оценкам содержал около 60 000 человеческих черепов на момент прибытия испанцев в 1521 году.'
    }
  },
  {
    question: '¿Ciudad donde se usaba el macabro Tzompantli?',
    answer: 'Tula',
    options: ['Chichen Itzá', 'Teotihuacán', 'San Lorenzo'],
    type: 'choice',
    id: 'shm798',
    ru: {
      question: 'Город, где использовался мрачный Цомпантли?',
      answer: 'Тула',
      options: ['Чичен Ица', 'Теотиуакан', 'Сан Лоренсо']
    }
  },
  {
    question: 'Tribu originaria de Michoacán',
    answer: 'Purépechas',
    options: ['Totonacas', 'Rarámuris', 'Huastecos'],
    type: 'choice',
    id: '9kvbz',
    ru: {
      question: 'Племя, родом из Мичоакана',
      answer: 'Пурепеча',
      options: ['Тотонаки', 'Рарамуру', 'Уастеки']
    }
  },
  {
    question: 'Cultura con más desarrollo en el posclásico 950 d.c - 1521 d.c',
    answer: 'Azteca/Mexica',
    options: ['Olmeca', 'Teotihuacana', 'Tolteca'],
    type: 'choice',
    id: 'rrmogc',
    ru: {
      question:
        'Культура с наибольшим развитием в постклассическом периоде 950 н.э. - 1521 н.э.',
      answer: 'Ацтеки/Мексика',
      options: ['Ольмеки', 'Теотиуаканская', 'Тольтеки']
    }
  },
  {
    question: '¿Qué fue Tenochtitlán?',
    answer: 'Capital de los Mexicas',
    options: [
      'Capital de los Teotihuacanos',
      'Capital de los Tarascos',
      'Capital de los Toltecas'
    ],
    type: 'choice',
    id: 'anpua',
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
    question: '¿Cuándo se fundó Tenochtitlán?',
    answer: '1325',
    options: ['1350', '1315', '1352', '1330'],
    type: 'choice',
    id: 'ulrvtc',
    ru: {
      question: 'Когда был основан Теночтитлан?',
      answer: '1325',
      options: ['1350', '1315', '1352', '1330']
    }
  },
  {
    question: 'Año en que cayó México Tenochtitlán',
    answer: '1521',
    options: ['1512', '1525', '1520'],
    type: 'choice',
    id: '0r7224',
    ru: {
      question: 'Год падения Мехико-Теночтитлана',
      answer: '1521',
      options: ['1512', '1525', '1520']
    }
  },
  {
    question: 'Edificio o museo que alberga el centro de Tenochtitlán',
    answer: 'Templo Mayor',
    options: ['Templo Menor', 'Templo Sagrado', 'Templo de los Dioses'],
    type: 'choice',
    id: 'c873au',
    ru: {
      question: 'Здание или музей, в котором находится центр Теночтитлана',
      answer: 'Главный храм',
      options: ['Малый храм', 'Священный храм', 'Храм богов']
    }
  },
  {
    question: '¿Quién fue Chalchiuhtlicue?',
    answer: 'Diosa de los lagos y corrientes de agua de los Mexicas',
    options: [
      'Dios del cielo y de la tierra',
      'Diosa de la fertilidad Mexica',
      'Dios del viento'
    ],
    type: 'choice',
    id: 'wsozik',
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
    question: 'Diosa de la fertilidad Mexica',
    answer: 'Coatlicue',
    options: ['Cihuacóatl', 'Xochiquetzal', 'Omecíhuatl'],
    type: 'choice',
    id: 'tciuki',
    ru: {
      question: 'Богиня плодородия у мексиканцев',
      answer: 'Коатликуэ',
      options: ['Сивакоатль', 'Шочикетцаль', 'Омесиуатль']
    }
  },
  {
    question: '¿Quién era el dios de la guerra Mexica?',
    answer: 'Huitzilopochtli',
    options: ['Quetzalcoatl', 'Tepeyollotl', 'Chalchitlicue'],
    type: 'choice',
    id: 'zfdjy',
    ru: {
      question: 'Кто был богом войны у мексиканцев?',
      answer: 'Уицилопочтли',
      options: ['Кецалькоатль', 'Тепейоллотль', 'Чалчитликуэ']
    }
  },
  {
    question: 'Deidad azteca relacionada con el sol',
    answer: 'Tonatiuh',
    options: ['Huitzilopochtli', 'Quetzalcoatl', 'Chalchitlicue'],
    type: 'choice',
    id: 'qy4bh',
    ru: {
      question: 'Ацтекское божество, связанное с солнцем',
      answer: 'Тонатиу',
      options: ['Уицилопочтли', 'Кецалькоатль', 'Чалчитликуэ']
    }
  },
  {
    question: 'Deidad azteca de la lluvia y del relámpago',
    answer: 'Tlaloc',
    note: 'Como tributo se le ofrecían niños y perros sacrificados.',
    options: ['Quetzalcóatl', 'Coatlicue', 'Tonatiuh'],
    type: 'choice',
    id: 'qznxrq',
    ru: {
      question: 'Ацтекское божество дождя и молнии',
      answer: 'Тлалок',
      options: ['Кецалькоатль', 'Коатликуэ', 'Тонатиу'],
      note: 'В качестве дани ему приносили в жертву детей и собак.'
    }
  },
  {
    question: 'Anfibio representado junto al Dios Xólotl',
    answer: 'Ajolote',
    options: ['Dermophiidae', 'Sapo', 'Rana'],
    type: 'choice',
    id: 'hfbbj',
    ru: {
      question: 'Амфибия, изображенная рядом с богом Шолотлем',
      answer: 'Аксолотль',
      options: ['Dermophiidae', 'Жаба', 'Лягушка']
    }
  },
  {
    question: 'Lugar mítico de donde salieron los Mexicas o Aztecas',
    answer: 'Aztlán',
    options: ['Teotihuacan', 'Tenochitlán', 'San Lorenzo'],
    type: 'choice',
    id: 'tq5fu',
    ru: {
      question: 'Мифическое место, откуда вышли мексиканцы или ацтеки',
      answer: 'Ацтлан',
      options: ['Теотиуакан', 'Теночитлан', 'Сан Лоренсо']
    }
  },
  {
    question: '¿Que significa Aztlán?',
    answer: 'Garza, lugar de las garzas',
    options: [
      'Dios, lugar de los dioses',
      'Sagrado, lugar sagrado',
      'Flores, lugar de las flores'
    ],
    type: 'choice',
    id: 'bdc1te',
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
    question:
      'Terreno construido sobre las lagunas del Valle de México que sirvió de base al sistema productivo del altiplano central. En la actualidad, puede encontrarse en Xochimilco',
    answer: 'Chinampa',
    options: ['Isla', 'Islote', 'Sistema artificial de cultivo'],
    type: 'choice',
    id: 'ncd0nn',
    ru: {
      question:
        'Участок, построенный на озёрах долины Мехико, служивший основой производственной системы центрального нагорья. В настоящее время его можно найти в Сочимилько',
      answer: 'Чинампа',
      options: ['Остров', 'Островок', 'Искусственная система земледелия']
    }
  },
  {
    question:
      '¿Cuáles eran las escuelas donde asistían los indios prehispánicos e hijos de los nobles mexicas?',
    answer: 'Calmecac (nobles), Telpochcalli (plebeyos o jóvenes del pueblo)',
    options: [
      'Colegio de la Santa Cruz de Santiago Tlatelolco (nobles), Telpochcalli (plebeyos o jóvenes del pueblo)',
      'Calmecac (nobles), Colegio de San Nicolás Obispo (plebeyos o jóvenes del pueblo)',
      'Colegio de San Ildefonso (nobles), Telpochcalli (plebeyos o jóvenes del pueblo)'
    ],
    type: 'choice',
    id: 'sx586e',
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
    question: '¿Por qué actividad fueron conocidos los aztecas?',
    answer:
      'Guerreros, agricultura, comercio, culto religioso y sacrificios humanos',
    options: [
      'Astrónomía, agricultura y matemática',
      'Comercio, artesanía y arquitectura',
      'Astronomía, política, arte y religión'
    ],
    type: 'choice',
    id: 'zt2ips',
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
    question: '¿Qué significa Cuauhtémoc?',
    answer: 'Águila que desciende o águila que se posa',
    options: ['Varilla de cabellos', 'Colibrí zurdo', 'Criatura espinosa'],
    type: 'choice',
    id: 'lcpqm',
    ru: {
      question: 'Что означает Куаутемок?',
      answer: 'Орёл, который спускается или садится',
      options: ['Волосок', 'Левша колибри', 'Колючее существо']
    }
  },
  {
    question:
      'Significado de la palabra altepetl con la que los tlatoanis denominaban a sus ciudades',
    answer: 'Cerro de agua',
    options: ['Cerro de agua azul', 'Cerro de tlatoanis', 'Cerro de dios'],
    type: 'choice',
    id: 'j6dm9',
    ru: {
      question:
        'Значение слова альтепетль, которым тлатоани называли свои города',
      answer: 'Гора воды',
      options: ['Гора синей воды', 'Гора тлатоани', 'Гора бога']
    }
  },
  {
    question: '¿Quienes integraron la triple alianza?',
    answer: 'Tenochtitlan, Texcoco, Tlacopan',
    note: 'Fue acordada por los tres jefes indígenas del valle de México en 1427 con fines económicos.',
    options: [
      'Teotihuacán, Texcoco, Tlacopan',
      'San Lorenzo, Texcoco, Tlacopan',
      'Tenochtitlan, Texcoco, La Venta'
    ],
    type: 'choice',
    id: '2h2smu',
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
    question: 'Etnia de Guanajuato',
    answer: 'Chichimeca Jonaz',
    options: ['Tolteca', 'Rarámuri', 'Zapotecos'],
    type: 'choice',
    id: 'zrp7adn',
    ru: {
      question: 'Этническая группа Гуанахуато',
      answer: 'Чичимеки Джонас',
      options: ['Тольтеки', 'Рарамуру', 'Сапотеки']
    }
  },
  {
    question: 'Cultura indígena que persiste en el norte del país',
    answer: 'Tarahumara',
    options: ['Maya', 'Zapoteca', 'Mexica'],
    type: 'choice',
    id: 'n7iuy',
    ru: {
      question: 'Коренная культура, сохраняющаяся на севере страны',
      answer: 'Тараумара',
      options: ['Майя', 'Сапотека', 'Мексика']
    }
  },
  {
    question: '¿De qué parte del país son los Tarahumaras?',
    answer: 'Chihuahua',
    options: ['Durango', 'Sonora', 'Baja California'],
    type: 'choice',
    id: 'ih28m8',
    ru: {
      question: 'Из какой части страны тараумары?',
      answer: 'Чихуахуа',
      options: ['Дуранго', 'Сонора', 'Баха Калифорния']
    }
  },
  {
    question: 'Tribu indígena de Durango',
    answer: 'Tepehuanes',
    options: ['Mayas', 'Zapotecas', 'Mexicas'],
    type: 'choice',
    id: 'bsd7a',
    ru: {
      question: 'Коренное племя Дуранго',
      answer: 'Тепеуаны',
      options: ['Майя', 'Сапотеки', 'Мексика']
    }
  },
  {
    question: 'Tribu indígena de Coahuila',
    answer: 'Kikapú',
    options: ['Maya', 'Zapoteca', 'Mexica'],
    type: 'choice',
    id: 'k3uvs',
    ru: {
      question: 'Коренное племя Коауилы',
      answer: 'Кикапу',
      options: ['Майя', 'Сапотеки', 'Мексика']
    }
  },
  {
    question: 'Comunidad indígena que habita actualmente en Tabasco',
    answer: 'Mayas-Chontales',
    options: ['Tarahumara', 'Zapotecos', 'Toltecas'],
    type: 'choice',
    id: '8ovq5m',
    ru: {
      question: 'Коренное сообщество, проживающее в настоящее время в Табаско',
      answer: 'Майя-Чонтали',
      options: ['Тараумара', 'Сапотеки', 'Тольтеки']
    }
  }
];
