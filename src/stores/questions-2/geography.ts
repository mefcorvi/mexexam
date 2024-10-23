import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Cuál es la extensión territorial de México?',
    answer: '1.964 millones de Km²',
    options: [
      '1.230 millones de Km²',
      '1.858 millones de Km²',
      '1.754 millones de Km²'
    ],
    type: 'choice',
    id: 'htrtajl',
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
    question:
      'Superficie total de México (Superficie continental, insular y mar territorial)',
    answer: '5.1 MM Km²',
    options: ['91.3 MM Km²', '1.3 MM Km²', '3.91 MM Km²'],
    type: 'choice',
    id: '5ihtam',
    ru: {
      question:
        'Общая площадь Мексики (континентальная, островная и территориальные воды)',
      answer: '5,1 млн км²',
      options: ['91,3 млн км²', '1,3 млн км²', '3,91 млн км²']
    }
  },
  {
    question: '¿Con qué países tiene frontera México?',
    answer: 'Estados Unidos, Guatemala y Belice',
    options: [
      'Estados Unidos y Guatemala',
      'Estados Unidos y Belice',
      'Estados Unidos'
    ],
    type: 'choice',
    id: '33r4p',
    ru: {
      question: 'С какими странами граничит Мексика?',
      answer: 'США, Гватемала и Белиз',
      options: ['США и Гватемала', 'США и Белиз', 'США']
    }
  },
  {
    question: 'Geográficamente dónde está ubicado México',
    answer: 'En el sur de América del Norte',
    options: [
      'América del Sur',
      'América Central',
      'En el norte de América Central'
    ],
    type: 'choice',
    id: 'sa5ehd',
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
    question: '¿Cuántos estados o entidades federativas tiene México?',
    answer: '32',
    options: ['38', '25', '29'],
    type: 'choice',
    id: 'yioh7',
    ru: {
      question: 'Сколько штатов или федеративных единиц в Мексике?',
      answer: '32',
      options: ['38', '25', '29']
    }
  },
  {
    question: '¿Cuántas penínsulas tiene México?',
    answer: '2, Penínsulas de Baja California y Yucatán',
    options: [
      '2, Penínsulas de Chiapas y Yucatán',
      '2, Penínsulas de Baja California y Oaxaca',
      '2, Penínsulas de Sonora y Yucatán'
    ],
    type: 'choice',
    id: 'trzdna',
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
    question: '¿Cuántas sierras madres tiene México?',
    answer: '2, Oriental y Occidental',
    options: [
      '2, Oriental y Oaxaca',
      '2, Chiapa y Occidental',
      '2, Sur y Oriental'
    ],
    type: 'choice',
    id: '6rkpqm',
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
    question: 'Sierras de México',
    answer:
      'Sierra Madre Oriental\nSierra Madre Occidental\nSierra del Sur\nSierra de Oaxaca\nSierra de Chiapas',
    type: 'text',
    id: '8tumjl',
    ru: {
      question: 'Горные хребты Мексики',
      answer:
        'Сьерра-Мадре Восточная\nСьерра-Мадре Западная\nЮжная Сьерра\nОахакская Сьерра\nЧьяпасская Сьерра'
    }
  },
  {
    question: 'Población de México (Censo INEGI 2020)',
    answer: '126,014,024',
    options: ['98,014,094', '223,014,054 ', '180,014,087'],
    type: 'choice',
    id: 'ktwowc3',
    ru: {
      question: 'Население Мексики (перепись INEGI 2020)',
      answer: '126,014,024',
      options: ['98,014,094', '223,014,054', '180,014,087']
    }
  },
  {
    question: 'Ciudad más poblada de México',
    answer: 'Ciudad de México',
    options: ['Zacatecas', 'Colima', 'Guanajuato'],
    type: 'choice',
    id: '4075p',
    ru: {
      question: 'Самый населенный город Мексики',
      answer: 'Мехико',
      options: ['Сакатекас', 'Колима', 'Гуанахуато']
    }
  },
  {
    question: 'Las tres ciudades más grandes y pobladas del país son',
    answer: 'CDMX, Guadalajara y Monterrey',
    type: 'text',
    id: '8nfa36',
    ru: {
      question: 'Три самых крупных и населенных города страны',
      answer: 'Мехико, Гвадалахара и Монтеррей'
    }
  },
  {
    question: 'Nombres de islas de México',
    answer: 'Islas María, Isla Mujeres, Cozumel, Holbox, Isla Guadalupe',
    options: [
      'Isla de Tórtola, San Vicente y las Granadinas',
      'Isla Eleuthera, Isla de Santa Lucía, Long Island',
      'Isla Providenciales, Islas Caicos, Isla Saona'
    ],
    type: 'choice',
    id: '0f6q6',
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
    question: '¿Dónde se encuentra el Parque Nacional Los Azufres?',
    answer: 'Michoacán',
    options: ['Guerrero', 'Oaxaca', 'Coahuila'],
    type: 'choice',
    id: 'hjb8f8',
    ru: {
      question: 'Где находится Национальный парк Лос-Асуфрес?',
      answer: 'Мичоакан',
      options: ['Герреро', 'Оахака', 'Коауила']
    }
  },
  {
    question: '¿Dónde se encuentran las Grutas de Cacahuamilpa?',
    answer: 'Guerrero',
    options: ['Oaxaca', 'Yucatán', 'Campeche'],
    type: 'choice',
    id: 'we69w2',
    ru: {
      question: 'Где находятся Пещеры Какуамильпа?',
      answer: 'Герреро',
      options: ['Оахака', 'Юкатан', 'Кампече']
    }
  },
  {
    question: 'Reserva natural en el estado de Sonora',
    answer: 'Biosfera del Pinacate y Desierto del Altar',
    options: [
      'Biosfera del Pinacate y Desierto de los Leones',
      'Biosfera de Sian Ka´an y Desierto del Altar',
      'Biosfera de Mariposa Monarca y Desierto del Altar'
    ],
    type: 'choice',
    id: '8n3o4b',
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
    question: 'Reserva natural del Golfo de Baja California',
    answer: 'Parque Nacional Cabo Pulmo',
    options: [
      'Biosfera del Pinacate',
      'Biosfera de Mariposa Monarca',
      'Arrecifes de Cozumel'
    ],
    type: 'choice',
    id: 'zop9e',
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
    question:
      '¿Cómo se llama la reserva natural protegida en el Golfo de México? o nombre de reserva ecológica que da al Golfo de México',
    answer: 'El Arrecife Veracruzano',
    options: [
      'Arrecife de Puerto Morelos',
      'Arrecifes de Cozumel',
      'Arrecifes de Sian Ka´an'
    ],
    type: 'choice',
    id: 'x69zr4',
    ru: {
      question:
        'Как называется охраняемый природный заповедник в Мексиканском заливе? или название экологического заповедника, выходящего на Мексиканский залив',
      answer: 'Веракрузский риф',
      options: ['Риф Пуэрто-Морелос', 'Рифы Косумель', 'Рифы Сиан Каан']
    }
  },
  {
    question:
      'Lugar de México donde se observan ballenas jorobadas y lobos marinos',
    answer: 'Mar de Cortés',
    options: ['Mar Caribe', 'Golfo de México', 'Oceano Pacífico Sur'],
    type: 'choice',
    id: 'kpdsrs'
  },
  {
    question: '¿Dónde está el Mar de Cortés o Mar Bermejo?',
    answer: 'Baja California',
    options: ['Veracruz', 'Guerrero', 'Quintana Roo'],
    type: 'choice',
    id: 'so0mz',
    ru: {
      question: 'Где находится Море Кортеса или Красное море?',
      answer: 'Нижняя Калифорния',
      options: ['Веракрус', 'Герреро', 'Кинтана-Роо']
    }
  },
  {
    question: '¿Qué estados rodean el Mar de Cortés?',
    answer: 'Baja California Norte, Baja California Sur, Sonora, Sinaloa',
    options: [
      'Baja California Norte, Durango, Sonora, Sinaloa',
      'Baja California Norte, Baja California Sur, Tamaulipas, Sinaloa',
      'Baja California Norte, Baja California Sur, Sonora, Zacatecas'
    ],
    type: 'choice',
    id: '4zklm',
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
    question:
      'Ciudad de la república mexicana con abundante arquitectura colonial',
    answer: 'Puebla',
    options: ['Jalisco', 'Campeche', 'Colima'],
    type: 'choice',
    id: 't00e6',
    ru: {
      question:
        'Город в Мексиканской республике с обилием колониальной архитектуры',
      answer: 'Пуэбла',
      options: ['Халиско', 'Кампече', 'Колима']
    }
  },
  {
    question: '¿Cuál es el río más largo de México?',
    answer: 'Río Bravo',
    options: ['Río Papaloapan', 'Río Coatzacoalcos', 'Río Santiago'],
    type: 'choice',
    id: 'd8ocoh',
    ru: {
      question: 'Какая самая длинная река в Мексике?',
      answer: 'Рио-Браво',
      options: ['Рио-Папалоапан', 'Рио-Коацакоалькос', 'Рио-Сантьяго']
    }
  },
  {
    question: '¿Cuáles son los estados que atraviesa el Río Bravo?',
    answer: 'Chihuahua, Coahuila, Tamaulipas, Nuevo León',
    options: [
      'Chihuahua, Durango, Tamaulipas, Nuevo León',
      'Baja California, Coahuila, Tamaulipas, Nuevo León',
      'Sinaloa, Coahuila, Tamaulipas, Nuevo León'
    ],
    type: 'choice',
    id: 'pnxvc4',
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
    question: '¿Cuáles son los estados del norte de México?',
    answer:
      'Baja California - Mexicali\nBaja California Sur - La Paz\nCoahuila - Saltillo\nChihuahua - Chihuahua\nDurango - Durango\nNuevo León - Monterrey\nSonora - Hermosillo\nTamaulipas - Ciudad Victoria\nSinaloa - Culiacán',
    type: 'text',
    id: 'j5ya3',
    ru: {
      question: 'Какие штаты находятся на севере Мексики?',
      answer:
        'Нижняя Калифорния - Мехикали\nНижняя Калифорния Южная - Ла-Пас\nКоауила - Сальтильо\nЧиуауа - Чиуауа\nДуранго - Дуранго\nНуэво-Леон - Монтеррей\nСонора - Эрмосильо\nТамаулипас - Сьюдад-Виктория\nСиналоа - Кульякан'
    }
  },
  {
    question: 'El estado de la república de mayor extensión territorial es',
    answer: 'Chihuahua',
    options: ['Coahuila', 'Durango', 'Veracruz'],
    type: 'choice',
    id: 'c0bgv',
    ru: {
      question: 'Штат республики с самой большой территорией',
      answer: 'Чиуауа',
      options: ['Коауила', 'Дуранго', 'Веракрус']
    }
  },
  {
    question: 'Capital de Sinaloa',
    answer: 'Culiacán',
    options: ['Los Mochis', 'Mazatlán', 'El Rosario'],
    type: 'choice',
    id: 'geg1rn',
    ru: {
      question: 'Столица Синалоа',
      answer: 'Кульякан',
      options: ['Лос Мочис', 'Масатлан', 'Эль Росарио']
    }
  },
  {
    question:
      'Acapulco fue durante los siglos XVII y XVIII un importante puerto porque controlaba la navegación en el',
    answer: 'Océano Pacífico',
    options: ['Mar Caribe', 'Golfo de México', 'Oceano Atlántico'],
    type: 'choice',
    id: 'ypvyof',
    ru: {
      question:
        'Акапулько в XVII и XVIII веках был важным портом, так как контролировал судоходство в',
      answer: 'Тихом океане',
      options: ['Карибское море', 'Мексиканский залив', 'Атлантический океан']
    }
  },
  {
    question: 'El puerto de Acapulco está en',
    answer: 'Guerrero',
    options: ['Colima', 'Nayarit', 'Oaxaca'],
    type: 'choice',
    id: 'fv2t4',
    ru: {
      question: 'Порт Акапулько находится в',
      answer: 'Герреро',
      options: ['Колима', 'Наярит', 'Оахака']
    }
  },
  {
    question: 'Principales puertos turísticos',
    answer: 'Cozumel, Acapulco, Mazatlán',
    options: [
      'Cozumel, Acapulco, Manzanillo',
      'Veracruz, Acapulco, Mazatlán',
      'Cozumel, Lázaro Cárdenas, Mazatlán'
    ],
    type: 'choice',
    id: '0ylwbj',
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
    question: 'Tres destinos de playa en México son',
    answer: 'Acapulco, Huatulco, Cancún',
    options: [
      'Acapulco, Tequila, Cancún',
      'Acapulco, Guanajuato, Cancún',
      'Acapulco, Puebla, Cancún'
    ],
    type: 'choice',
    id: '6gnz5r',
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
    question: 'Sistema de acueducto de CDMX y EDO de MEX',
    answer: 'Sistema Cutzamala',
    options: [
      'Acueducto del Cedazo',
      'Sistema Coquimatlán',
      'Sistema Cuajimalpa'
    ],
    type: 'choice',
    id: 'mce8ol',
    ru: {
      question: 'Система водопровода Мехико и штата Мехико',
      answer: 'Система Кутзамала',
      options: ['Акведук Седасо', 'Система Кокиматлан', 'Система Куахимальпа']
    }
  },
  {
    question: '¿Qué es la Peña de Bernal, dónde se encuentra?',
    answer: 'Es el tercer monolito más grande del mundo, Querétaro',
    options: [
      'El monolito más grande del mundo, Zacatecas',
      'Es el segundo monolito más grande del mundo, Oaxaca',
      'Es la caída de agua más alta de México, Jalisco'
    ],
    type: 'choice',
    id: '2ls25',
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
    question:
      '¿En qué estado de la república se encuentra el “Cañón del Sumidero”?',
    answer: 'Chiapas',
    options: ['Oaxaca', 'Guerrero', 'Tabasco'],
    type: 'choice',
    id: 'u6i1ga',
    ru: {
      question: 'В каком штате республики находится "Каньон Сумидеро"?',
      answer: 'Чьяпас',
      options: ['Оахака', 'Герреро', 'Табаско']
    }
  },
  {
    question:
      '¿En qué estado de la república se encuentran las Ruinas de Palenque?',
    answer: 'Chiapas',
    note: 'Pertenece a los Mayas.',
    options: ['Guerrero', 'Tabasco', 'Veracruz'],
    type: 'choice',
    id: 'kkru5s',
    ru: {
      question: 'В каком штате республики находятся Руины Паленке?',
      answer: 'Чьяпас',
      options: ['Герреро', 'Табаско', 'Веракрус'],
      note: 'Принадлежит Майя.'
    }
  },
  {
    question: 'Las ruinas de Monte Albán se localizan en',
    answer: 'Oaxaca',
    options: ['Guerrero', 'Tabasco', 'Veracruz'],
    type: 'choice',
    id: 'sf3xxo',
    ru: {
      question: 'Руины Монте-Альбан находятся в',
      answer: 'Оахака',
      options: ['Герреро', 'Табаско', 'Веракрус']
    }
  },
  {
    question:
      '¿En qué estado de la república se encuentra la ciudad de Guadalajara?',
    answer: 'Jalisco',
    options: ['Zacatecas', 'Morelia', 'Puebla'],
    type: 'choice',
    id: 'xvpuv8',
    ru: {
      question: 'В каком штате республики находится город Гвадалахара?',
      answer: 'Халиско',
      options: ['Сакатекас', 'Морелия', 'Пуэбла']
    }
  },
  {
    question: 'En qué estado se encuentra La Venta',
    answer: 'Tabasco',
    options: ['Campeche', 'Oaxaca', 'Veracruz'],
    type: 'choice',
    id: '8a3r23j',
    ru: {
      question: 'В каком штате находится Ла Вента',
      answer: 'Табаско',
      options: ['Кампече', 'Оахака', 'Веракрус']
    }
  },
  {
    question: 'En qué estado se encuentra Calakmul',
    answer: 'Campeche',
    options: ['Oaxaca', 'Veracruz', 'Tabasco'],
    type: 'choice',
    id: 'md1se',
    ru: {
      question: 'В каком штате находится Калакмуль',
      answer: 'Кампече',
      options: ['Оахака', 'Веракрус', 'Табаско']
    }
  },
  {
    question: 'Capital del estado de Nuevo León',
    answer: 'Monterrey',
    options: ['Juárez', 'Santa Catarina', 'Santiago'],
    type: 'choice',
    id: 'fnqoyk',
    ru: {
      question: 'Столица штата Нуэво-Леон',
      answer: 'Монтеррей',
      options: ['Хуарес', 'Санта-Каталина', 'Сантьяго']
    }
  },
  {
    question: 'Icono turístico de Monterrey',
    answer: 'El Cerro de la Silla',
    options: ['El Cerro', 'Parque La Huasteca', 'Grutas de García'],
    type: 'choice',
    id: 'aa4jlg',
    ru: {
      question: 'Туристический символ Монтеррея',
      answer: 'Серро-де-ла-Силья',
      options: ['Эль Серро', 'Парк Ла Уастека', 'Пещеры Гарсия']
    }
  },
  {
    question: '¿A qué se le conoce como Don Goyo y la Mujer Dormida?',
    answer: 'A los volcanes Popocatépetl y al Iztaccíhuatl',
    options: [
      'A los volcanes Popocatépetl y al Nevado de Toluca',
      'A los volcanes Malinche y al Nevado de Toluca',
      'A los volcanes Popocatépetl y al Chichinautzin'
    ],
    type: 'choice',
    id: '26juir',
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
    question: '¿Cuáles son los volcanes del Estado de México y Puebla?',
    answer: 'Popocatépetl e Iztaccíhuatl',
    options: [
      'Guadalupe y Pinacate',
      'Cerro Prieto y San Quintín',
      'El Chichón y Tacana'
    ],
    type: 'choice',
    id: 'u5whom',
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
    question:
      'Nombre del volcán que se ubica entre Morelos, Puebla y Estado de México',
    answer: 'Popocatépetl',
    note: 'En náhuatl "el cerro que humea", popoca "humear"; tepētl, "cerro."',
    options: ['Cerro Prieto', 'Tacana', 'Guadalupe'],
    type: 'choice',
    id: '0o14he',
    ru: {
      question:
        'Название вулкана, который находится между Морелосом, Пуэблой и штатом Мехико',
      answer: 'Попокатепетль',
      options: ['Серро Прието', 'Такана', 'Гуадалупе'],
      note: 'На языке науатль "дымящийся холм", popoca "дымить"; tepētl, "холм".'
    }
  },
  {
    question: '¿Cuál es la montaña más alta de México?',
    answer: 'Citlaltépetl (Pico de Orizaba)',
    note: 'Ubicada entre los estados de Veracruz y Puebla.',
    options: ['Popocatépetl', 'Nevado de Toluca', 'Iztaccíhuatl'],
    type: 'choice',
    id: 'hs1qu',
    ru: {
      question: 'Какая самая высокая гора в Мексике?',
      answer: 'Ситлалтепетль (Пик Орисаба)',
      options: ['Попокатепетль', 'Невадо де Толука', 'Истаксиуатль'],
      note: 'Расположена между штатами Веракрус и Пуэбла.'
    }
  },
  {
    question: '¿Qué son los pueblos mágicos?',
    answer:
      'Pueblos que han sido reconocidos por su riqueza histórica y cultural. Programa de la Secretaría de Turismo (SECTUR)',
    options: [
      'Pueblos donde los mexicas practicaron sacrificios humanos',
      'Pueblos con una economía pujante',
      'Pueblos que según la leyenda azteca eran habitados por criaturas mitológicas'
    ],
    type: 'choice',
    id: 'yi002',
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
    question: '¿Cuantos pueblos mágicos hay?',
    answer: '132',
    options: ['156', '152', '119'],
    type: 'choice',
    id: 'rvg7e',
    ru: {
      question: 'Сколько волшебных городов существует?',
      answer: '132',
      options: ['156', '152', '119']
    }
  },
  {
    question: 'Pueblo mágico de San Luis Potosí',
    answer: 'Xilitla',
    options: ['Tapalpa', 'Tepotzotlán', 'Tequila'],
    type: 'choice',
    id: 'dew1gp',
    ru: {
      question: 'Волшебный город Сан-Луис-Потоси',
      answer: 'Хилитла',
      options: ['Тапальпа', 'Тепоцотлан', 'Текила']
    }
  },
  {
    question: 'Pueblo mágico de Zacatecas',
    answer: 'Jerez de García Salinas',
    options: ['Jiquilpan', 'Cholula', 'Tequila'],
    type: 'choice',
    id: 'w9vqkc',
    ru: {
      question: 'Волшебный город Сакатекас',
      answer: 'Херес де Гарсия Салинас',
      options: ['Хикильпан', 'Чолула', 'Текила']
    }
  },
  {
    question: 'Pueblo mágico de Michoacán',
    answer: 'Jiquilpan',
    options: ['Chignahuapan', 'Cholula', 'Tequila'],
    type: 'choice',
    id: 'w8xx2p',
    ru: {
      question: 'Волшебный город Мичоакан',
      answer: 'Хикильпан',
      options: ['Чигнауапан', 'Чолула', 'Текила']
    }
  },
  {
    question: 'Pueblos mágicos en Puebla',
    answer: 'Chignahuapan, Xicotepec',
    options: [
      'Tequila, Tapalpa',
      'Villa del Carbón, Tepotzotlán',
      'Capulálpam, Mazunte'
    ],
    type: 'choice',
    id: 'pi91mh',
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
    question: '¿Dónde se ubica el pueblo mágico de Cholula?',
    answer: 'Puebla',
    options: ['Zacatecas', 'Jalisco', 'Coahuila'],
    type: 'choice',
    id: 'ozuhmt',
    ru: {
      question: 'Где находится волшебный город Чолула?',
      answer: 'Пуэбла',
      options: ['Сакатекас', 'Халиско', 'Коауила']
    }
  },
  {
    question: 'Pueblo mágico del Estado de México',
    answer: 'Villa del Carbón',
    options: ['Chignahuapan', 'Cholula', 'Tequila'],
    type: 'choice',
    id: 'pw9no',
    ru: {
      question: 'Волшебный город штата Мехико',
      answer: 'Вилья-дель-Карбон',
      options: ['Чигнауапан', 'Чолула', 'Текила']
    }
  },
  {
    question: '¿Dónde queda Izamal, pueblo mágico?',
    answer: 'Yucatán',
    options: ['Zacatecas', 'Michoacan', 'Veracruz'],
    type: 'choice',
    id: 'pakp57',
    ru: {
      question: 'Где находится волшебный город Изамаль?',
      answer: 'Юкатан',
      options: ['Сакатекас', 'Мичоакан', 'Веракрус']
    }
  },
  {
    question: '¿Cuál es la ciudad conocida como la Puerta de Oro del Bajío?',
    answer: 'Celaya, Guanajuato',
    options: ['Michoacán', 'Guadalajara', 'Aguascalientes'],
    type: 'choice',
    id: 'jxrhn3',
    ru: {
      question: 'Какой город известен как Золотые Ворота Бахио?',
      answer: 'Селайя, Гуанахуато',
      options: ['Мичоакан', 'Гвадалахара', 'Агуаскальентес']
    }
  },
  {
    question: '¿Cuál es la ciudad conocida como la Perla del Bajío?',
    answer: 'León',
    options: ['Michoacán', 'Guadalajara', 'Aguascalientes'],
    type: 'choice',
    id: 'zfdl8',
    ru: {
      question: 'Какой город известен как Жемчужина Бахио?',
      answer: 'Леон',
      options: ['Мичоакан', 'Гвадалахара', 'Агуаскальентес']
    }
  },
  {
    question: '¿A que cuidad se conoce como "La Bella Airosa"?',
    answer: 'Pachuca',
    note: 'En el estado de Hidalgo.',
    options: ['Guadalajara', 'Xalapa', 'Oaxaca'],
    type: 'choice',
    id: 'b84in5'
  },
  {
    question: '¿Cual es la ciudad 4 veces heroica o 3 veces triunfante?',
    answer: 'Veracruz',
    options: ['Cuidad del Carmen', 'Puebla', 'Zacatecas'],
    type: 'choice',
    id: '9902s2',
    ru: {
      question: 'Какой город 4 раза героический или 3 раза триумфальный?',
      answer: 'Веракрус',
      options: ['Куэдад-дель-Кармен', 'Пуэбла', 'Сакатекас']
    }
  },
  {
    question: 'Animales mexicanos en peligro de extinción',
    answer:
      'Jaguar (Ocelote)\nÁguila Real\nMariposa Monarca\nEl ajolote (Axolotl)\n Tortuga Caguama\n Guacamaya Roja\nOso Negro\nLa Vaquita Marina',
    type: 'text',
    id: 'h239hx',
    ru: {
      question: 'Мексиканские животные под угрозой исчезновения',
      answer:
        'Ягуар (оцелот)\nКоролевский орел\nБабочка монарх\nАкселотль\nЛоггерхед черепаха\nКрасный ара\nЧерный медведь\nКалифорнийская морская свинья'
    }
  }
];