import type { QuestionData } from './interfaces';

export const questions: QuestionData[] = [
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
    question: 'El estado de la república de mayor extensión territorial es',
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
      options: ['Карибское море', 'Мексиканский залив', 'Атлантический океан']
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
      options: ['Акведук Седасо', 'Система Кокиматлан', 'Система Куахимальпа']
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
    question: '¿Cuál es la ciudad conocida como la Puerta de Oro del Bajío?',
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
];
