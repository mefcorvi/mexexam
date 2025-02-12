import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question:
      '¿Cuál de las siguientes siglas corresponde a un instituto de salud?',
    answer: 'IMSS',
    options: ['PROFECO', 'INM', 'ACNUR', 'ONU', 'CFE', 'COMAR'],
    type: 'choice',
    id: '8m305s',
    ru: {
      question:
        'Какая из следующих аббревиатур относится к институту здравоохранения?',
      answer: 'IMSS',
      options: ['PROFECO', 'INM', 'ACNUR', 'ONU', 'CFE', 'COMAR']
    }
  },
  {
    question: '¿Qué productos exporta México?',
    answer: 'Aceite crudo de petróleo, autopartes y productos de cobre',
    options: [
      'Plata, oro y papel',
      'Textiles, zapatos y juguetes',
      'Gasolina, gas butano y productos agrícolas'
    ],
    type: 'choice',
    id: 'g4zg7d',
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
    question: '¿Qué lugar ocupa México en la economía mundial?',
    answer: '16',
    options: ['20', '25', '28'],
    type: 'choice',
    id: '7gu0ni',
    ru: {
      question: 'Какое место занимает Мексика в мировой экономике?',
      answer: '16',
      options: ['20', '25', '28']
    }
  },
  {
    question: '¿Qué fué la Ley de calles?',
    answer:
      'Ley expedida para controlar y limitar el culto católico en México, oficialmente llamada ley de tolerancia de cultos, elaborada durante la presidencia de Plutarco Elías Calles',
    options: [
      'Un tipo de ejecución usada en el Porfiriato',
      'Ley para cobrar impuestos durante la presidencia de Plutarco Elías Calles',
      'Ley para cobrar a quienes usaran las principales calles de la cuidad en carruajes'
    ],
    type: 'choice',
    id: 'dzq5dm',
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
    question: '¿Qué fué la Guerra Cristera?',
    answer:
      'Conflicto armado de 1926 a 1929 entre el gobierno y católicos que estaban en contra de la Ley Calles',
    options: [
      'Enfrentamiento armado con Inglaterra por territorio mexicano',
      'Guerra civil que aconteció en México del año de 1858 a 1861.​La nación estaba dividida entre Liberales y Conservadores',
      'Conflicto armado contra EEUU por Texas'
    ],
    type: 'choice',
    id: '0knhfh',
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
    question: '¿Quién creó el Banco de México en 1925 (Banco Nacional)?',
    answer: 'Plutarco Elias Calles',
    options: ['Alvaro Obregón', 'Emilio Portes Gil', 'José Lopez Portillo'],
    type: 'choice',
    id: 'id3fo',
    ru: {
      question: 'Кто создал Банк Мексики в 1925 году (Национальный банк)?',
      answer: 'Плутарко Элиас Кальес',
      options: ['Альваро Обрегон', 'Эмилио Портес Хиль', 'Хосе Лопес Портильо']
    }
  },
  {
    question: '¿Quién fundó el Partido Nacional Revolucionario en 1929?',
    answer: 'Plutarco Elias Calles',
    note: 'Hoy es el PRI desde 1946',
    options: ['Alvaro Obregón', 'Emilio Portes Gil', 'José Lopez Portillo'],
    type: 'choice',
    id: 'xjf1v9',
    ru: {
      question: 'Кто основал Национальную революционную партию в 1929 году?',
      answer: 'Плутарко Элиас Кальес',
      options: ['Альваро Обрегон', 'Эмилио Портес Хиль', 'Хосе Лопес Портильо'],
      note: 'Сегодня это PRI с 1946 года'
    }
  },
  {
    question: '¿Cuándo fue el periodo conocido como el Maximato?',
    answer: '1928 - 1934',
    note: 'Se llama así por Plutarco Elias Calles, dado que era conocido como el "Máximo de la revolución" y fue quien más influencia tenía en ese periodo. Fue un período de presidentes interinos derivados del asesinato de Álvaro Obregón que termino con la elección de Lázaro Cárdenas.',
    options: ['1920 - 1930', '1910 - 1920', '1958 - 1978'],
    type: 'choice',
    id: 'r8ll9',
    ru: {
      question: 'Когда был период, известный как Максимато?',
      answer: '1928 - 1934',
      options: ['1920 - 1930', '1910 - 1920', '1958 - 1978'],
      note: 'Так назван в честь Плутарко Элиаса Кальеса, так как его называли "Максимум революции", и он был наиболее влиятельным в этот период. Это был период временных президентов, возникший после убийства Альваро Обрегона и закончившийся выборами Лазаро Карденаса.'
    }
  },
  {
    question: '¿Qué presidente fué asesinado en 1928?',
    answer: 'Álvaro Obregón',
    note: '17 de Julio de 1928.',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '8oqet',
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
    question: '¿Qué presidentes conformaron el Maximato?',
    answer:
      'Emilio Portes Gil (1928 - 1930)\nPascual Ortiz Rubio (1930 - 1932)\nAbelardo Rodríguez Lujan (1932 - 1934) (Fundó el Palacio de Bellas Artes)',
    type: 'text',
    id: '5owd1',
    ru: {
      question: 'Какие президенты составили Максимато?',
      answer:
        'Эмилио Портес Хиль (1928 - 1930)\nПаскуаль Ортис Рубио (1930 - 1932)\nАбелардо Родригес Лухан (1932 - 1934) (Основал Дворец изящных искусств)'
    }
  },
  {
    question: '¿Qué presidente inauguró la Diana Cazadora?',
    answer: 'Manuel Ávila Camacho',
    note: 'El 10 de Octubre de 1942, es una fuente monumental localizada en la avenida Paseo de la Reforma de la Ciudad de México.',
    options: [
      'Abelardo Rodríguez Lujan',
      'Emilio Portes Gil',
      'Álvaro Obregón'
    ],
    type: 'choice',
    id: 'p6dczl',
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
    question: '¿Con qué otro nombre se conoce a la Diana Cazadora?',
    answer: 'Flechadora de las Estrellas del Norte',
    options: [
      'Lanzadora de las Estrellas del Norte',
      'Cazadora de las Estrellas del Norte',
      'Guerrera de las Estrellas del Norte'
    ],
    type: 'choice',
    id: 'erymue',
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
    question: '¿Quién fue el primer secretario de salud?',
    answer: 'Gustavo Baz Prada',
    options: ['Manuel Ávila Camacho', 'Álvaro Obregón', 'José Lopez Portillo'],
    type: 'choice',
    id: 'bln6ib',
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
    question: '¿Cuándo se creó el IMSS?',
    answer: '19 de enero de 1943',
    note: 'Durante la presidencia de Manuel Ávila Camacho.',
    options: [
      '19 de Diciembre de 1990',
      '19 de Septiembre de 1940',
      '19 de Julio de 1953'
    ],
    type: 'choice',
    id: 'bme6xu',
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
    question:
      '¿Qué presidente declaró la guerra contra los llamados países del eje (Alemania, Italia y Japón) durante la Segunda Guerra Mundial?',
    answer: 'Manuel Ávila Camacho',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'rzoeg8',
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
    question: '¿Cómo participó México en la Segunda Guerra Mundial?',
    answer: 'Con el envío de fuerza aérea expedicionaria, "Escuadrón 201"',
    options: [
      'Con el envio de petróleo y productos industriales a los aliados',
      'Con el envio de una fuerza expedicionaria de 500 hombres para la liberación de Paris',
      'Con el envío de 2 fragatas y un destructor para el frente del Pacífico'
    ],
    type: 'choice',
    id: 'kmzciw',
    ru: {
      question: 'Как Мексика участвовала во Второй мировой войне?',
      answer: 'Отправив экспедиционные военно-воздушные силы, "Эскадрилья 201"',
      options: [
        'Отправив нефть и промышленные товары союзникам',
        'Отправив экспедиционные силы из 500 человек для освобождения Парижа',
        'Отправив 2 фрегата и один эсминец на Тихоокеанский фронт'
      ]
    }
  },
  {
    question: '¿En qué batalla participó el "Escuadrón 201"?',
    answer: 'Segunda Guerra Mundial',
    options: [
      'Primera Guerra Mundial',
      'Guerra contra EEUU',
      'La Guerra de Independencia'
    ],
    type: 'choice',
    id: 'l08ps',
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
    question: '¿Qué político comunista ruso recibió asilo político en México?',
    answer: 'Leon Trotsky',
    options: ['Aleksándr Protopópov', 'Zhorés Alfiórov', 'Ruslán Áushev'],
    type: 'choice',
    id: '1s025c',
    ru: {
      question:
        'Какой русский коммунистический политик получил политическое убежище в Мексике?',
      answer: 'Лев Троцкий',
      options: ['Александр Протопопов', 'Жорес Алферов', 'Руслан Аушев']
    }
  },
  {
    question: 'Extranjero con que tuvo amoríos con Frida Khalo',
    answer: 'Leon Trotsky',
    options: ['Aleksándr Protopópov', 'Zhorés Alfiórov', 'Ruslán Áushev'],
    type: 'choice',
    id: 'm3o108',
    ru: {
      question: 'Иностранец, с которым у Фриды Кало был роман',
      answer: 'Лев Троцкий',
      options: ['Александр Протопопов', 'Жорес Алферов', 'Руслан Аушев']
    }
  },
  {
    question:
      '¿Cuál es la avenida más importante de CDMX y qué presidente le dió su nombre?',
    answer: 'Av. Reforma, Sebastián Lerdo de Tejada',
    options: [
      'Av. 16 de Septiembre, Alvaro Obregon',
      'Av. de los Insurgentes, Plutarco Elias Calles',
      'Av. Constituyentes, José Lopez Portillo'
    ],
    type: 'choice',
    id: 't77nu7',
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
    question: '¿Quién puso el nombre de Reforma a Paseo la Reforma?',
    answer: 'Sebastián Lerdo de Tejada',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '9af7g',
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
    question:
      'Nombre del partido político que gobernó durante siete décadas en el siglo XX',
    answer: 'Partido Revolucionario Institucional (PRI)',
    note: '1930 - 2000',
    options: [
      'Partido Acción Nacional (PAN)',
      'Movimiento Ciudadano',
      'Partido del Trabajo (PT)'
    ],
    type: 'choice',
    id: 'wxxh5g',
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
    question: 'Institución educativa creada para carreras técnicas',
    answer: 'Instituto Politécnico Nacional (IPN)',
    options: ['Universidad Nacional', 'Universidad Abierta', 'UNAM'],
    type: 'choice',
    id: 'ibqkcl',
    ru: {
      question:
        'Образовательное учреждение, созданное для технических специальностей',
      answer: 'Национальный политехнический институт (IPN)',
      options: ['Национальный университет', 'Открытый университет', 'UNAM']
    }
  },
  {
    question: 'Biblioteca considerada patrimonio cultural por la UNESCO',
    answer: 'Biblioteca Central de la UNAM',
    options: [
      'Biblioteca José Vasconcelos',
      'Biblioteca del Congreso de la Unión',
      'Biblioteca Miguel Lerdo de Tejada'
    ],
    type: 'choice',
    id: '34wxme',
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
    question:
      '¿Qué universidad técnica creó Lázaro Cárdenas? / ¿Qué institución educativa creó el presidente Lázaro Cárdenas?',
    answer: 'Instituto Politécnico Nacional (IPN)',
    options: [
      'Universidad Nacional',
      'Universidad Abierta',
      'Instituto Lázaro Cárdenas'
    ],
    type: 'choice',
    id: '8jtrsb',
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
    question: '¿Cuándo se creo el Instituto Politécnico Nacional (IPN)?',
    answer: '1 de Enero de 1936',
    options: [
      '1 de Enero de 1956',
      '1 de Diciembre de 1996',
      '1 de Julio de 1936'
    ],
    type: 'choice',
    id: '17mdzc',
    ru: {
      question: 'Когда был создан Национальный политехнический институт (IPN)?',
      answer: '1 января 1936 года',
      options: ['1 января 1956 года', '1 декабря 1996 года', '1 июля 1936 года']
    }
  },
  {
    question: '¿Cuál es el lema del Instituto Politécnico Nacional (IPN)?',
    answer: 'La Técnica al Servicio de la Patria',
    options: [
      'Servicio a la Patria',
      'Yo Sirvo de la Patria',
      'La Técnica de la Patria'
    ],
    type: 'choice',
    id: '2l9sg',
    ru: {
      question: 'Каков девиз Национального политехнического института (IPN)?',
      answer: 'Техника на службе Родины',
      options: ['Служба Родине', 'Я служу Родине', 'Техника Родины']
    }
  },
  {
    question: 'El 18 de marzo de 1938 el presidente Lázaro Cárdenas',
    answer: 'Nacionalizó la industria petrolera',
    note: 'Expropió los bienes a las petroleras extranjeras.',
    options: [
      'Nacionalizó la industria minera',
      'Nacionalizó la industria textil',
      'Nacionalizó la industria química'
    ],
    type: 'choice',
    id: 'dw6dw',
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
    question:
      '¿En qué año se fundó la Universidad Autónoma Metropolitana (UAM)?',
    answer:
      '01 de Enero de 1974 durante el gobierno de Luis Echeverría Álvarez',
    type: 'text',
    id: 'i241va',
    ru: {
      question:
        'В каком году был основан Автономный столичный университет (UAM)?',
      answer: '1 января 1974 года во время правления Луиса Эчеверрии Альвареса'
    }
  },
  {
    question:
      '¿Cuál es el lema de la Universidad Autónoma Metropolitana (UAM)?',
    answer: 'In Calli Ixcahuicopa (Casa abierta al tiempo)',
    options: [
      'La Técnica al Servicio de la Patria',
      'Tierra y libertad',
      'Por mi raza hablará el espíritu'
    ],
    type: 'choice',
    id: 'fnnvhn',
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
    question: 'Símbolo de la modernización inaugurado en 1950',
    answer: 'Torre Latinoamericana',
    options: ['Torre Reforma', 'Torre Ejecutiva Pemex', 'Torre Diana'],
    type: 'choice',
    id: 'jwjaum',
    ru: {
      question: 'Символ модернизации, открытый в 1950 году',
      answer: 'Латиноамериканская башня',
      options: ['Башня Реформа', 'Исполнительная башня Pemex', 'Башня Диана']
    }
  },
  {
    question: 'Nombre científico del petróleo',
    answer: 'Crudo, crudo petrolífero o petróleo crudo',
    type: 'text',
    id: 'fx3o3r',
    ru: {
      question: 'Научное название нефти',
      answer: 'Сырая нефть, нефтяной сырец или сырая нефть'
    }
  },
  {
    question: '¿Cuándo se decreta el derecho al voto de la mujer?',
    answer: '17 de Octubre de 1953',
    note: 'Durante el mandato de Adolfo Ruíz Cortines.',
    options: [
      '17 de Octubre de 1853',
      '17 de Julio de 1953',
      '17 de Noviembre de 1953'
    ],
    type: 'choice',
    id: 'mwelr7',
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
    question: '¿Cuándo votan por primera vez las mujeres?',
    answer: '3 de Julio de 1955',
    options: [
      '3 de Julio de 1995',
      '3 de Diciembre de 1855',
      '3 de Octubre de 1955'
    ],
    type: 'choice',
    id: 'euj1f',
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
    question:
      'Durante el periodo presidencial de cual presidente se creó el ISSSTE',
    answer: 'Adolfo López Mateos',
    note: '1958 - 1964.',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'ng6dzl',
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
    question: 'Fecha de mayor movilización estudiantil en México',
    answer: '26 de julio de 1968',
    options: [
      '20 de noviembre de 1910',
      '24 de diciembre de 1999',
      '3 de Julio de 1955'
    ],
    type: 'choice',
    id: 'lpfzae',
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
    question: '¿Cuándo fue la matanza de Tlatelolco?',
    answer: '2 de Octubre de 1968',
    options: [
      '2 de Julio de 1995',
      '3 de Diciembre de 1855',
      '5 de Octubre de 1955'
    ],
    type: 'choice',
    id: 'im7pft',
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
    question: 'Presidente al mando cuando fue la matanza de Tlatelolco',
    answer: 'Gustavo Díaz Ordaz',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '2nts7',
    ru: {
      question: 'Президент, находившийся у власти во время резни в Тлателолько',
      answer: 'Густаво Диас Ордас',
      options: [
        'Плутарко Элиас Кальес',
        'Адольфо Лопес Матеос',
        'Хосе Лопес Портильо'
      ]
    }
  },
  {
    question: '¿Qué es el Tratado de Tlatelolco?',
    answer: 'Acuerdo de no proliferación de armas nucleares en América Latina',
    options: [
      'Documento en el que se acuerda la Independencia de México',
      'Tratado que puso fin a la guerra con EEUU',
      'Se acuerda el libre comercio con EEUU y Canadá'
    ],
    type: 'choice',
    id: '25wlcj',
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
    question: '¿Cuándo se firmó Tratado de Tlatelolco?',
    answer: '14 de Febrero de 1967',
    options: [
      '20 de Noviembre de 1910',
      '10 de Diciembre de 1850',
      '16 de Septiembre de 1810'
    ],
    type: 'choice',
    id: 'n6weh7',
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
    question:
      'El Tratado de Tlatelolco, logro de la diplomacia mexicana, se atañe a',
    answer:
      'Alfonso García Robles, ganador del Premio Nobel de la Paz en 1982 y al presidente Gustavo Diaz Ordaz',
    options: [
      'José Mario Molina Pasquel, Premio Nobel de Química en 1995 y al presidente López Mateos',
      'Al presidente Lázaro Cárdenas',
      'Rodolfo Neri Vela'
    ],
    type: 'choice',
    id: '7lkf3o',
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
    question: '¿En qué fecha se inauguró el metro de la CDMX (línea rosa)?',
    answer: '4 de Septiembre de 1969',
    options: [
      '4 de Julio de 1995',
      '13 de Diciembre de 1855',
      '10 de Octubre de 1955'
    ],
    type: 'choice',
    id: 'y7l987',
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
    question: 'Bajo qué presidencia se inauguró el metro de la CDMX',
    answer: 'Gustavo Diaz Ordaz',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '6xwclc',
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
    question: '¿Qué significa CONALEP?',
    answer: 'Colegio Nacional de Educación Profesional Técnica',
    options: [
      'Escuela Nacional de Educación Profesional Técnica',
      'Colegio Nacional de Educación Técnica',
      'Colegio de Educación Profesional Técnica'
    ],
    type: 'choice',
    id: 'pysja9',
    ru: {
      question: 'Что означает CONALEP?',
      answer: 'Национальный колледж профессионально-технического образования',
      options: [
        'Национальная школа профессионально-технического образования',
        'Национальный колледж технического образования',
        'Колледж профессионально-технического образования'
      ]
    }
  },
  {
    question: '¿Cuándo y quien fundó CONALEP?',
    answer:
      'Abril de 1978 por el Ing. José Antonio Padilla Segura (presidencia Lopez Portillo)',
    options: [
      'Julio de 1998 por el Ing. Rodolfo Neri Vela (presidencia Lázaro Cárdenas)',
      'Enero de 1783 por el Ing. José Mario Molina (presidencia López Mateos)',
      'Marzo de 1950 por el Ing. Manuel Gutierrez (presidencia Ruíz Cortines)'
    ],
    type: 'choice',
    id: '8txxh',
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
    question:
      '¿Qué presidente recibió al Papa Juan Pablo II en su primera visita?',
    answer: 'José Lopez Portillo',
    note: 'Primera visita 26 de enero - 1 de febrero de 1979.',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'Adolfo Ruíz Cortines'
    ],
    type: 'choice',
    id: '9dqjf7',
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
    question: '¿Quién nacionalizó la Banca?',
    answer: 'José Lopez Portillo',
    note: 'El 1 de septiembre de 1982.',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'Emilio Portes Gil'
    ],
    type: 'choice',
    id: 'ql5w9g',
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
    question: '¿Cuáles fueron los presidentes de la época del neoliberalismo?',
    answer:
      'Carlos Salinas de Gortari (1988 - 1994)\nErnesto Zedillo (1994 - 2000)\nVicente Fox (2000 - 2006)',
    type: 'text',
    id: 'p2jk2',
    ru: {
      question: 'Какие президенты были в эпоху неолиберализма?',
      answer:
        'Карлос Салинас де Гортари (1988 - 1994)\nЭрнесто Седильо (1994 - 2000)\nВисенте Фокс (2000 - 2006)'
    }
  },
  {
    question: '¿Cuándo se firmó el tratado de libre comercio (TLC, NAFTA)?',
    answer: '17 de Diciembre de 1992',
    options: [
      '17 de Julio de 1990',
      '17 de Diciembre de 1982',
      '10 de Diciembre de 1992'
    ],
    type: 'choice',
    id: 'nuxqi9',
    ru: {
      question: 'Когда был подписан договор о свободной торговле (TLC, NAFTA)?',
      answer: '17 декабря 1992 года',
      options: [
        '17 июля 1990 года',
        '17 декабря 1982 года',
        '10 декабря 1992 года'
      ]
    }
  },
  {
    question:
      '¿Cuándo entró en vigor el tratado de libre comercio (TLC, NAFTA)?',
    answer: '01 de Enero de 1994',
    options: [
      '01 de Julio de 1990',
      '17 de Diciembre de 1982',
      '10 de Diciembre de 1992'
    ],
    type: 'choice',
    id: 'vto1q',
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
    question:
      'Nombre del presidente que firmó el tratado de libre comercio NAFTA',
    answer: 'Carlos Salinas de Gortari',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '5r8jok',
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
    question:
      '¿Con qué países celebró México el tratado comercial conocido como TLCAN o NAFTA?',
    answer: 'Estados Unidos y Canadá',
    options: [
      'Estados Unidos y Belice',
      'Estados Unidos y Guatemala',
      'Estados Unidos y Panamá'
    ],
    type: 'choice',
    id: 'u3c5d4',
    ru: {
      question:
        'С какими странами Мексика заключила торговое соглашение, известное как TLCAN или NAFTA?',
      answer: 'США и Канада',
      options: ['США и Белиз', 'США и Гватемала', 'США и Панама']
    }
  },
  {
    question:
      '¿Cómo se llamó el movimiento civil en Chiapas en 1994 del Comandante Marco?',
    answer:
      'Movimiento Zapatista / Conflicto Chiapaneco /  Ejército Zapatista de Liberación Nacional (EZLN)',
    options: [
      'Movimiento Quinta República',
      'Movimiento Ciudadano por la Justicia 5 de Julio',
      'Movimiento de Regeneración Nacional'
    ],
    type: 'choice',
    id: 'tojy6f',
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
    question: '¿Cuándo se inició el Movimiento Zapatista?',
    answer: '1994',
    options: ['1992', '1990', '1980'],
    type: 'choice',
    id: 'f5ousk',
    ru: {
      question: 'Когда началось Сапатистское движение?',
      answer: '1994',
      options: ['1992', '1990', '1980']
    }
  },
  {
    question:
      '¿Cómo se llama el seguro de salud creado en 2004 que ayuda a las personas desempleadas o que trabajan independiente?',
    answer: 'Seguro Popular de Salud',
    options: [
      'Seguro del Poder Popular de Salud',
      'Seguro de Salud',
      'Salud para todos'
    ],
    type: 'choice',
    id: 'qpzfx',
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
    question: 'Fecha de inicio del voto mexicano en el exterior',
    answer: '2005',
    options: ['2000', '2003', '2010'],
    type: 'choice',
    id: 'rw6qlf',
    ru: {
      question: 'Дата начала голосования мексиканцев за границей',
      answer: '2005',
      options: ['2000', '2003', '2010']
    }
  },
  {
    question: '¿Cuándo fue el apagón analógico en México?',
    answer: '31 de Diciembre de 2015',
    options: [
      '31 de Febrero de 2015',
      '31 de Julio de 2000',
      '31 de Octubre de 2018'
    ],
    type: 'choice',
    id: 'unwtc',
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
    question:
      '¿En qué año fue el temblor por el cual se cayó el Ángel de la Independencia?',
    answer: '1957',
    options: ['1950', '1880', '1987'],
    type: 'choice',
    id: 'rx4idh',
    ru: {
      question:
        'В каком году произошло землетрясение, из-за которого упал Ангел Независимости?',
      answer: '1957',
      options: ['1950', '1880', '1987']
    }
  },
  {
    question: '¿Cuándo se cayó el Ángel de la Independencia?',
    answer: '28 de Julio de 1957',
    options: [
      '31 de Febrero de 1974',
      '31 de Diciembre de 2000',
      '31 de Octubre de 1950'
    ],
    type: 'choice',
    id: 'hvhqj',
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
    question:
      'La estructura donde se construiría el Palacio Legislativo Federal de Emile Bernard, se utilizó para edificar el monumento de',
    answer: 'Monumento a la Revolución',
    options: [
      'Monumento a los Héroes de la Independencia',
      'Monumento a Diana Cazadora',
      'Monumento a los Niños Héroes'
    ],
    type: 'choice',
    id: 'bbukk',
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
    question:
      'Fué construido para ser el Palacio Legislativo pero terminó siendo',
    answer: 'Monumento a la Revolución',
    options: [
      'Monumento a los Héroes de la Independencia',
      'Monumento a Diana Cazadora',
      'Monumento a los Niños Héroes'
    ],
    type: 'choice',
    id: 'rqrrr6',
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
    question: 'Rascacielos de 43 pisos que ha resistido 3 terremotos',
    answer: 'Torre Latinoamericana',
    options: ['Torre Reforma', 'Torre Ejecutiva Pemex', 'Torre Diana'],
    type: 'choice',
    id: 'gi619h',
    ru: {
      question: 'Небоскреб из 43 этажей, выдержавший 3 землетрясения',
      answer: 'Латиноамериканская башня',
      options: ['Башня Реформа', 'Исполнительная башня Pemex', 'Башня Диана']
    }
  },
  {
    question:
      '¿Qué presidente estuvo durante el terremoto de 1985 y el mundial de 1986?',
    answer: 'Miguel de la Madrid',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'sabr0xp',
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
    question: '¿Quién está en el billete de 100 pesos?',
    answer: 'Sor Juana Inés de la Cruz',
    options: [
      'Benito Juarez',
      'Miguel Hidalgo y Costilla',
      'Francisco I. Madero'
    ],
    type: 'choice',
    id: 'ho2hz',
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
    question: '¿Qué representa el monumento La Estela de Luz?',
    answer:
      'Festejo del Bicentenario de la Independencia y Centenario de la Revolución Mexicana',
    options: [
      'Tributo a la Diana Cazadora',
      'Festejo del Centenario de la Revolución Mexicana',
      'Tributo a la suavicrema'
    ],
    type: 'choice',
    id: 'k7ddsl',
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
    question:
      '¿Cuál fue el monumento construido para conmemorar el Bicentenario de la Independencia y el Centenario de la Revolución Mexicana?',
    answer: 'Estela de Luz',
    note: 'Se inauguró el 7 de enero de 2012.',
    options: [
      'Monumento a los Héroes de la Independencia',
      'Monumento a Diana Cazadora',
      'Monumento a los Niños Héroes'
    ],
    type: 'choice',
    id: '9luuh6',
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
    question:
      '¿En qué año se cambió el nombre de Distrito Federal a Ciudad de México?',
    answer: '2016',
    note: '29 Enero 2016.',
    options: ['2015', '2010', '2000'],
    type: 'choice',
    id: 'qfq77',
    ru: {
      question:
        'В каком году название Федерального округа было изменено на Мехико?',
      answer: '2016',
      options: ['2015', '2010', '2000'],
      note: '29 января 2016 года.'
    }
  },
  {
    question: 'Estado que cambió su nombre en 2016',
    answer: 'Ciudad de México',
    options: ['Quintana Roo', 'Jalisco', 'Colima'],
    type: 'choice',
    id: 's2ta0s',
    ru: {
      question: 'Штат, изменивший свое название в 2016 году',
      answer: 'Мехико',
      options: ['Кинтана-Роо', 'Халиско', 'Колима']
    }
  },
  {
    question: 'En la ciudad de México, "El Zócalo" alude a',
    answer: 'La Plaza Principal o Plaza de la Constitución',
    options: ['Plaza Patria', 'Plaza Roja', 'Plaza de los Héroes'],
    type: 'choice',
    id: 'nbe99r',
    ru: {
      question: 'В Мехико "Сокало" относится к',
      answer: 'Главная площадь или Площадь Конституции',
      options: ['Площадь Родины', 'Красная площадь', 'Площадь Героев']
    }
  },
  {
    question: '¿Cómo se conoce el centro histórico de CDMX? ',
    answer: 'La Ciudad de los Palacios',
    options: [
      'La Ciudad de los Héroes',
      'Los Palacios',
      'La Ciudad de los Eterna'
    ],
    type: 'choice',
    id: '1cafmf'
  },
  {
    question: '¿Cuál es el estado con mayor producción de zapatos?',
    answer: 'Guanajuato',
    options: ['Jalisco', 'Nuevo León', 'Estado de México'],
    type: 'choice',
    id: '0ehocj',
    ru: {
      question: 'Какой штат является крупнейшим производителем обуви?',
      answer: 'Гуанахуато',
      options: ['Халиско', 'Нуэво-Леон', 'Штат Мехико']
    }
  },
  {
    question: '¿Cuál de las siguientes aseveraciones sobre México es falsa? ',
    answer:
      'México es uno de los países con menor desigualdad social en América Latina',
    options: [
      'La superficie de México es de 1.964 MM de Km²',
      'Río Bravo, es el más largo del país',
      'La capital de Jalisco es Guadalajara'
    ],
    type: 'choice',
    id: '7z0bvt'
  }
];
