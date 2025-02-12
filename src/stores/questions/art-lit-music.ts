import type { QuestionData } from './interfaces';

export const questions: QuestionData[] = [
  {
    id: 'oqiuc',
    type: 'choice',
    question: 'El teatro de mayor prestigio en la Ciudad de México es',
    answer: 'Palacio de Bellas Artes',
    options: ['Teatro Mayor', 'Teatro Juarez', 'Palacio del Arte y la Cultura'],
    ru: {
      question: 'Самый престижный театр в Мехико это',
      answer: 'Дворец изящных искусств',
      options: ['Театр Майор', 'Театр Хуарес', 'Дворец искусства и культуры']
    },
    tags: [
      {
        type: 'state',
        value: 'CDMX'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Abelardo Rodríguez Lujan'
      },
      {
        type: 'date',
        value: '1934-09-29'
      },
      {
        type: 'state',
        value: 'CDMX'
      }
    ]
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
      options: ['Старый театр', 'Театр города Мехико', 'Метрополитенский театр']
    },
    tags: [
      {
        type: 'state',
        value: 'CDMX'
      }
    ]
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
    },
    tags: [
      {
        type: 'state',
        value: 'Guanajuato'
      }
    ]
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
      options: ['Хосе Васконселос', 'Эль Херальдо де Мехико', 'Премия Охтли'],
      note: 'Основана в 1945 году, награждает в различных категориях.'
    },
    tags: [
      {
        type: 'state',
        value: 'CDMX'
      },
      {
        type: 'date',
        value: '1945'
      }
    ]
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
      options: ['Хосе Васконселос', 'Эль Херальдо де Мехико', 'Премия Охтли']
    },
    tags: [
      {
        type: 'date',
        value: '1976'
      },
      {
        type: 'state',
        value: 'San Luis Potosí'
      },
      {
        type: 'person',
        name: 'Amparo Dávila'
      }
    ]
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
        'Октавио Пас\nКарлос Фуэнтес\nЭлена Понятовска\nХосе Эмилио Пачеко\nФернандо дель Пасо\nСерхио Питоль'
    },
    tags: [
      {
        type: 'person',
        name: 'Octavio Paz'
      },
      {
        type: 'person',
        name: 'Carlos Fuentes'
      },
      {
        type: 'person',
        name: 'Elena Poniatowska'
      },
      {
        type: 'person',
        name: 'Jose Emilio Pacheco'
      },
      {
        type: 'person',
        name: 'Fernando del Paso'
      },
      {
        type: 'person',
        name: 'Sergio Pitol'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Juan Rulfo'
      },
      {
        type: 'date',
        value: '1917-05-16'
      },
      {
        type: 'date',
        value: '1986-01-07'
      },
      {
        type: 'state',
        value: 'Jalisco'
      }
    ]
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
      options: ['Октавио Пас', 'Карлос Фуэнтес', 'Элена Понятовска']
    },
    tags: [
      {
        type: 'person',
        name: 'Juan Rulfo'
      },
      {
        type: 'date',
        value: '1953-09-01'
      }
    ]
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
    note: `
    <p><em>La región más transparente</em> fue la primera novela escrita por Carlos 
      Fuentes, publicada cuando tenía 29 años. Fuentes comenzó a escribirla a los 25, 
      inspirándose en la temática urbana de la Ciudad de México, en contraste con la 
      ruralidad tratada por Juan Rulfo en <em>Pedro Páramo</em>. Utilizó un estilo 
      narrativo que refleja el léxico de diversos estratos sociales de la ciudad, 
      similar al de Balzac, incorporando extranjerismos y acentos de inmigrantes. El 
      título de la novela se inspiró en una frase de Alexander von Humboldt sobre el 
      valle de la Ciudad de México, también utilizada por Alfonso Reyes en su obra 
      <em>Visión de Anáhuac</em>. Parte de esta obra fue anticipada en la Revista de 
      Literatura Mexicana en 1955 antes de su publicación completa por el Fondo de 
      Cultura Económica en mayo de 1958.</p>
    `,
    ru: {
      question:
        'Какое произведение написал Карлос Фуэнтес о мексиканской жизни в 1958 году?',
      answer: 'Край наипрозрачнейшей ясности',
      options: ['Сезон стервятников', 'Пылающая равнина', 'Голоса Тлателолко'],
      note: `
      <p><em>Край наипрозрачнейшей ясности</em> был первым романом Карлоса Фуэнтеса, 
      опубликованным, когда ему было 29 лет. Фуэнтес начал писать его в 25 лет, 
      вдохновляясь городской тематикой Мехико, в отличие от сельской тематики, 
      описанной Хуаном Рульфо в <em>Педро Парамо</em>. Он использовал повествовательный 
      стиль, отражающий лексику различных социальных слоев города, подобно Бальзаку, 
      включая заимствования и акценты иммигрантов. Название романа было вдохновлено 
      фразой Александра фон Гумбольдта о долине Мехико, также использованной Альфонсо 
      Рейесом в его произведении <em>Видение Анауака</em>. Часть этого произведения 
      была предварительно опубликована в Мексиканском литературном журнале в 1955 году 
      перед полной публикацией Фондом экономической культуры в мае 1958 года.</p>
      `
    },
    tags: [
      {
        type: 'person',
        name: 'Carlos Fuentes'
      },
      {
        type: 'date',
        value: '1958'
      }
    ]
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
      options: ['Октавио Паса', 'Хуана Рульфо', 'Элены Понятовски']
    },
    tags: [
      {
        type: 'person',
        name: 'Carlos Fuentes'
      },
      {
        type: 'date',
        value: '1962'
      }
    ]
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
      options: ['Октавио Пас', 'Хуан Рульфо', 'Элена Понятовска']
    },
    tags: [
      {
        type: 'person',
        name: 'Carlos Fuentes'
      },
      {
        type: 'date',
        value: '2000'
      }
    ]
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
      options: ['Октавио Пас', 'Хуан Рульфо', 'Элена Понятовска']
    },
    tags: [
      {
        type: 'person',
        name: 'Carlos Fuentes'
      },
      {
        type: 'date',
        value: '1986'
      }
    ]
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
      answer: 'Элена Понятовска',
      options: ['Октавио Пас', 'Хуан Рульфо', 'Карлос Фуэнтес'],
      note: 'Писательница, журналистка и активистка мексиканского происхождения, родилась во Франции. Это хроника, основанная на студенческой бойне, произошедшей 2 октября 1968 года на площади Трех Культур.'
    },
    tags: [
      {
        type: 'person',
        name: 'Elena Poniatowska'
      },
      {
        type: 'date',
        value: '1971'
      }
    ]
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
      options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес'],
      note: 'Не путайте "Голоса Тлателолко" с "Ночью Тлателолко", обратите внимание, что это разные произведения и авторы.'
    },
    tags: [
      {
        type: 'person',
        name: 'José Emilio Pacheco'
      },
      {
        type: 'date',
        value: '1968-10-02'
      }
    ]
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
      options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
    },
    tags: [
      {
        type: 'person',
        name: 'Jorge Ibargüengoitia'
      },
      {
        type: 'date',
        value: '1964'
      }
    ]
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
      options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
    },
    tags: [
      {
        type: 'person',
        name: 'Paco Ignacio Taibo II'
      },
      {
        type: 'date',
        value: '2009'
      },
      {
        type: 'event',
        value: 'Decena Trágica'
      }
    ]
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
    },
    tags: [
      {
        type: 'event',
        value: 'Decena Trágica'
      }
    ]
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
      options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
    },
    tags: [
      {
        type: 'person',
        name: 'Paco Ignacio Taibo II'
      },
      {
        type: 'person',
        name: 'Francisco I. Madero'
      },
      {
        type: 'date',
        value: '2009'
      }
    ]
  },
  {
    id: 'giwoup',
    type: 'choice',
    question: 'Libro escrito por Francisco I. Madero',
    answer: 'La Sucesión Presidencial',
    options: ['Primero sueño', 'El laberinto de la soledad', 'El Complot'],
    note: 'Es un  libro donde Madero crítica al entonces presidente Porfirio Diaz después de un largo periodo de mandato de 34 años.',
    ru: {
      question: 'Книга, написанная Франсиско И. Мадеро',
      answer: 'Президентская преемственность',
      options: ['Первый сон', 'Лабиринт одиночества', 'Заговор'],
      note: 'Это книга, где Мадеро критикует тогдашнего президента Порфирио Диаса после его долгого 34-летнего правления.'
    },
    tags: [
      {
        type: 'person',
        name: 'Francisco I. Madero'
      },
      {
        type: 'date',
        value: '1908'
      }
    ]
  },
  {
    id: 'qbua2',
    type: 'choice',
    question: '¿Por qué es conocida Sor Juana Inés de la Cruz?',
    answer: 'Escritora más importante del período Novo-hispáno',
    options: ['Actriz en el período Revolucionario', 'Traductora', 'Cantante'],
    ru: {
      question: 'Почему известна Сор Хуана Инес де ла Крус?',
      answer: 'Самая важная писательница новоиспанского периода',
      options: ['Актриса в период революции', 'Переводчица', 'Певица']
    },
    tags: [
      {
        type: 'person',
        name: 'Sor Juana Inés de la Cruz'
      }
    ]
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
      options: ['Изабель Фраире', 'Елена Джордана', 'Минерва Рейноса'],
      note: `
        <p><em>"Мужчины глупцы, что обвиняют"</em> — сатирико-философская поэма Сор Хуаны 
        Инес де ла Крус (1651-1695), известная по первым словам своей первой строки. В 
        этом стихотворении поэтесса утверждает, что мужчины провоцируют женское 
        сексуальное поведение, которое затем сами же и осуждают. Сор Хуана остроумно 
        показывает противоречивость мужских ожиданий и обвинений, сравнивая их поведение 
        с ребёнком, который пугается созданного им же самим воображаемого чудовища. 
        Поэтесса критикует двойные стандарты мужчин, требующих от женщин непорочности, 
        но в то же время соблазняющих их. В стихотворении подчёркивается, что вина за 
        аморальное поведение ложится не только на женщин, но и на мужчин, которые 
        провоцируют это поведение. В итоге, Сор Хуана призывает мужчин быть 
        последовательными в своих требованиях и прекратить осуждать женщин за 
        собственные действия.</p>
      `
    },
    note: `
      <p><em>"Hombres necios que acusáis"</em> es un poema satírico-filosófico de Sor 
      Juana Inés de la Cruz (1651-1695), conocido por las palabras de su primera línea. 
      En este poema, la poetisa plantea que los hombres provocan el comportamiento 
      sexual femenino que luego censuran. Sor Juana muestra con ingenio la contradicción 
      entre las expectativas y acusaciones de los hombres, comparando su comportamiento 
      con el de un niño que teme al monstruo imaginario que él mismo creó. La poetisa 
      critica los dobles estándares de los hombres, que exigen pureza de las mujeres 
      mientras las seducen. El poema destaca que la culpa por el comportamiento inmoral 
      recae tanto en las mujeres como en los hombres que lo provocan. En conclusión, 
      Sor Juana insta a los hombres a ser coherentes en sus demandas y dejar de culpar 
      a las mujeres por sus propias acciones.</p>
    `,
    tags: [
      {
        type: 'person',
        name: 'Sor Juana Inés de la Cruz'
      },
      {
        type: 'date',
        value: '1689'
      }
    ]
  },
  {
    id: 'japmw4s',
    type: 'text',
    question: 'Obras más conocidas de Sor Juana Inés de la Cruz',
    answer:
      'Primero Sueño\nRedondillas\nLos empeños de una casa\nAmor es más laberinto',
    ru: {
      question: 'Наиболее известные произведения Сор Хуаны Инес де ла Крус',
      answer:
        'Первый сон\nРедондильяс\nОбязательства одного дома\nЛюбовь - это больше лабиринта'
    },
    tags: [
      {
        type: 'person',
        name: 'Sor Juana Inés de la Cruz'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Octavio Paz'
      },
      {
        type: 'person',
        name: 'Amado Nervo'
      },
      {
        type: 'person',
        name: 'Jose Emilio Pacheco'
      },
      {
        type: 'person',
        name: 'Rosario Castellanos'
      },
      {
        type: 'person',
        name: 'Jaime Sabines'
      }
    ]
  },
  {
    id: 'vu7wom',
    type: 'text',
    question: 'Obras de Rosario Castellanos',
    answer: 'Balún Canán\nCiudad Real\nÁlbum de Familia',
    ru: {
      question: 'Произведения Росарио Кастельянос',
      answer: 'Балуун Канан\nСьюдад Реаль\nСемейный альбом'
    },
    tags: [
      {
        type: 'person',
        name: 'Rosario Castellanos'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Bernardo Balbuena'
      },
      {
        type: 'date',
        value: '1604'
      }
    ]
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
      options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес'],
      note: 'Врач, противник порфириата.'
    },
    tags: [
      {
        type: 'person',
        name: 'Mariano Azuela'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Juan Rulfo'
      },
      {
        type: 'person',
        name: 'Jose Emilio Pacheco'
      },
      {
        type: 'person',
        name: 'Carlos Fuentes'
      },
      {
        type: 'person',
        name: 'Paco Taibo II'
      },
      {
        type: 'person',
        name: 'Jorge Ibargüengoitia'
      },
      {
        type: 'person',
        name: 'Carlos Monsiváis'
      },
      {
        type: 'person',
        name: 'Juan Villoro'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Juan Rulfo'
      },
      {
        type: 'person',
        name: 'Mario Bellatin'
      },
      {
        type: 'person',
        name: 'Jorge Volpi'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Francisco Gabilondo Soler'
      }
    ]
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
    },
    tags: [
      {
        type: 'person',
        name: 'Francisco Gabilondo Soler'
      },
      {
        type: 'date',
        value: '1934'
      }
    ]
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
      question: 'Каково настоящее имя Хуана Габриэля (Эль Диво де Хуарес)?',
      answer: 'Альберто Агильера Вальдес',
      options: [
        'Хосе Ромуло Соса Ортис',
        'Ангел Агустин Мария Карлос Фаусто',
        'Марио Фортинов Альфонсо Морено Рейес'
      ]
    },
    tags: [
      {
        type: 'person',
        name: 'Juan Gabriel'
      }
    ]
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
    },
    tags: [
      {
        type: 'state',
        value: 'Veracruz'
      }
    ]
  }
];
