import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: 'El teatro de mayor prestigio en la Ciudad de México es',
    answer: 'Palacio de Bellas Artes',
    options: ['Teatro Mayor', 'Teatro Juarez', 'Palacio del Arte y la Cultura'],
    type: 'choice',
    id: 'oqiuc',
    note: `    <ul>
        <li><strong>Teatro Mayor</strong> – No existe un teatro con este nombre en la Ciudad de México.</li>
        <li><strong>Teatro Juárez</strong> – Se encuentra en Guanajuato, no en la Ciudad de México.</li>
        <li><strong>Palacio del Arte y la Cultura</strong> – No corresponde a ningún recinto reconocido en la ciudad.</li>
        <li><strong>Palacio de Bellas Artes</strong> – Es el teatro más prestigioso y emblemático de la Ciudad de México.</li>
    </ul>`,
    ru: {
      question: 'Самый престижный театр в Мехико это',
      answer: 'Дворец изящных искусств',
      options: ['Театр Майор', 'Театр Хуарес', 'Дворец искусства и культуры'],
      note: `<ul>
          <li><strong>Teatro Mayor</strong> – В Мехико нет театра с таким названием.</li>
          <li><strong>Teatro Juárez</strong> – Находится в Гуанахуато, а не в Мехико.</li>
          <li><strong>Palacio del Arte y la Cultura</strong> – Не соответствует какому-либо известному театру в городе.</li>
          <li><strong>Palacio de Bellas Artes</strong> – Это самый престижный и знаковый театр Мехико.</li>
      </ul>`
    },
    tags: [
      {
        type: 'state',
        value: 'CDMX'
      }
    ]
  },
  {
    question:
      '¿Qué se inauguró durante el período presidencial de Abelardo Rodríguez Lujan?',
    answer: 'El Palacio de Bellas Artes',
    note: '29 de Septiembre de 1934.',
    options: ['El IMSS', 'La Diana Cazadora', 'La Estela de Luz'],
    type: 'choice',
    id: '27dhya',
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
    question:
      'Nombre del antiguo teatro donde se construyó el Palacio de Bellas Artes',
    answer: 'Teatro Nacional',
    options: [
      'Teatro antiguo',
      'Teatro de la Ciudad de México',
      'Teatro Metropolitano'
    ],
    type: 'choice',
    id: 'llflfe',
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
    question: '¿Dónde se ubica el Teatro Juárez?',
    answer: 'Guanajuato',
    note: `<ul>
      <li><strong>Guanajuato:</strong> 
          <p>El Teatro Juárez se encuentra en Guanajuato. Inaugurado en 1903, es famoso por su arquitectura neoclásica y art nouveau, y es sede del Festival Internacional Cervantino.</p>
      </li>
      <li><strong>Zacatecas:</strong> 
          <p>Ciudad con importante herencia colonial, aunque el Teatro Juárez no está aquí. Su teatro más conocido es el Fernando Calderón.</p>
      </li>
      <li><strong>Jalisco:</strong> 
          <p>Famoso por la música mariachi y el tequila. En su capital, Guadalajara, se encuentra el Teatro Degollado.</p>
      </li>
      <li><strong>CDMX:</strong> 
          <p>Centro cultural de México, aunque el Teatro Juárez no está aquí. Alberga el Palacio de Bellas Artes.</p>
      </li>
      </ul>`,
    options: ['Zacatecas', 'Jalisco', 'CDMX'],
    type: 'choice',
    id: '4ls26c',
    ru: {
      question: 'Где находится Театр Хуарес?',
      answer: 'Гуанахуато',
      options: ['Сакатекас', 'Халиско', 'Мехико'],
      note: `<ul>
        <li><strong>Гуанахуато:</strong> 
            <p>Театр Хуарес находится в Гуанахуато. Открыт в 1903 году, известен своей архитектурой в стиле неоклассицизма и ар-нуво. Здесь проходит фестиваль Сервантеса.</p>
        </li>
        <li><strong>Сакатекас:</strong> 
            <p>Колониальный город с богатой историей, но Театр Хуарес там не расположен. Известен Театр Фернандо Кальдерона.</p>
        </li>
        <li><strong>Халиско:</strong> 
            <p>Известен мариачи и текилой. В Гвадалахаре расположен Театр Дегольядо.</p>
        </li>
        <li><strong>Мехико (CDMX):</strong> 
            <p>Культурный центр страны, но Театр Хуарес находится не здесь. Известен Дворец изящных искусств.</p>
        </li>
    </ul>`
    },
    tags: [
      {
        type: 'state',
        value: 'Guanajuato'
      }
    ]
  },
  {
    question:
      '¿Cómo se llama el premio que entrega el Instituto Nacional de Bellas Artes?',
    answer: 'Premio Bellas Artes',
    options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
    note: `<ul>
      <li><strong>Premio Bellas Artes</strong> – Es la respuesta correcta, es el principal premio otorgado por el Instituto Nacional de Bellas Artes.</li>
      <li><strong>José Vasconcelos</strong> – Es un premio otorgado por logros culturales, pero no está directamente relacionado con el INBA.</li>
      <li><strong>El Heraldo de México</strong> – Es un premio periodístico, no vinculado al INBA.</li>
      <li><strong>Premio Ohtli</strong> – Se entrega a mexicanos por su apoyo a la diáspora mexicana, sin relación con el INBA.</li>
    </ul>`,
    type: 'choice',
    id: 'xi6wy',
    ru: {
      question:
        'Как называется премия, вручаемая Национальным институтом изящных искусств?',
      answer: 'Премия изящных искусств',
      options: ['Хосе Васконселос', 'Эль Херальдо де Мехико', 'Премия Охтли'],
      note: `<ul>
        <li><strong>Premio Bellas Artes</strong> – Это правильный ответ, это основная премия от Национального института изящных искусств.</li>
        <li><strong>José Vasconcelos</strong> – Премия, вручаемая за культурные достижения, но не связана с INBA напрямую.</li>
        <li><strong>El Heraldo de México</strong> – Журналистская премия, не связана с INBA.</li>
        <li><strong>Premio Ohtli</strong> – Присуждается мексиканцам за вклад в поддержку мексиканской диаспоры, не имеет отношения к INBA.</li>
      </ul>`
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
    question:
      '¿Cómo se llama el premio que entrega Bellas Artes de cuento o literario?',
    answer: 'Amparo Dávila',
    options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
    type: 'choice',
    id: 'rkxodd',
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
    question: 'Mexicanos que han ganado Premio Cervantes',
    answer:
      'Octavio Paz\nCarlos Fuentes\nElena Poniatowska\nJose Emilio Pacheco\nFernando del Paso\nSergio Pitol',
    type: 'text',
    id: 'ejdnlp',
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
    question: '¿Que fué Juan Rulfo?',
    answer: 'Escritor',
    note: 'Reconocido como uno de los grandes maestros de la narrativa hispanoamericana del siglo XX.',
    options: ['Pintor', 'Muralista', 'Escultor'],
    type: 'choice',
    id: 'vsl5gh',
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
    question: '¿Quién escribió "El llano en llamas"?',
    answer: 'Juan Rulfo',
    options: ['Octavio Paz', 'Carlos Fuentes', 'Elena Poniatowska'],
    type: 'choice',
    id: 'pf8qgf',
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
    question:
      '¿Qué obra escribió Carlos Fuentes sobre la vida mexicana en 1958?',
    answer: 'La región más transparente',
    options: [
      'Temporada de zopilotes',
      'El llano en llamas',
      'Las voces de Tlatelolco'
    ],
    type: 'choice',
    id: 'j687v8',
    note: `"La región más transparente" es la primera novela de Carlos Fuentes, publicada en 1958. Fuentes comenzó a escribirla a los 25 años, inspirado en la temática urbana de la Ciudad de México, a diferencia de la temática rural de Juan Rulfo. La obra refleja el lenguaje y los acentos de diferentes clases sociales. El título fue inspirado por una frase de Alexander von Humboldt sobre el valle de México, también utilizada por Alfonso Reyes.`,
    ru: {
      question:
        'Какое произведение написал Карлос Фуэнтес о мексиканской жизни в 1958 году?',
      answer: 'Край наипрозрачнейшей ясности',
      options: ['Сезон стервятников', 'Пылающая равнина', 'Голоса Тлателолко'],
      note: `«Край наипрозрачнейшей ясности» — первый роман Карлоса Фуэнтеса, опубликованный в 1958 году. Начав писать его в 25 лет, Фуэнтес вдохновлялся урбанистической тематикой Мехико, в отличие от сельской тематики Хуана Рульфо. В романе отражены лексика и акценты различных слоев общества. Название навеяно фразой Александра фон Гумбольдта о долине Мехико, использованной также Альфонсо Рейесом.`
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
    question: '"La muerte de Artemio Cruz" es una novela de',
    answer: 'Carlos Fuentes',
    options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
    type: 'choice',
    id: 'uk2sk',
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
    question: '¿Quién escribió "Los Cinco Soles de México"?',
    answer: 'Carlos Fuentes',
    options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
    type: 'choice',
    id: 'y805zc',
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
    question: '¿Quién escribió "Aura"?',
    answer: 'Carlos Fuentes',
    options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
    type: 'choice',
    id: 'is89di',
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
    question: '¿Quién escribió "La Noche de Tlatelolco"?',
    answer: 'Elena Poniatowska',
    note: 'Escritora, periodista y activista mexicana, nacida en Francia. Es una crónica basada en la matanza estudiantil sucedida durante el 2 de octubre de 1968 en la Plaza de las Tres Culturas.',
    options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
    type: 'choice',
    id: 'lfo42q',
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
    question: '¿Quién escribió "Las Voces de Tlatelolco"?',
    answer: 'José Emilio Pacheco',
    note: 'No confundir "Las Voces de Tlatelolco" con "La Noche de Tlatelolco", nótese que son obras y autores diferentes.',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'nxelct',
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
    question: '¿Quién escribió "Relámpagos de Agosto"?',
    answer: 'Jorge Ibargüengoitia',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'o3huvr',
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
    question:
      'Temporada de zopilotes: Una historia narrativa de la Decena Trágica, ¿Quién es su autor?',
    answer: 'Paco Ignacio Taibo II',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: '1r9cra',
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
    question: '¿De qué trato Temporada de Zopilotes?',
    answer: 'De la Decena Trágica',
    note: 'Golpe Militar de los 10 días (09 al 19 de Febrero de 1913) liderado por Victoriano Huerta para derrocar a Francisco I. Madero.',
    options: [
      'La matanza estudiantil Tlatelolco',
      'Critica al presidente Porfirio Diaz',
      'Poema revolucionario'
    ],
    type: 'choice',
    id: '1j1zkr',
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
    question: 'Escribió sobre Francisco I. Madero',
    answer: 'Paco Ignacio Taibo II',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'jdz6o8',
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
    question: 'Libro escrito por Francisco I. Madero',
    answer: 'La Sucesión Presidencial',
    note: 'Es un  libro donde Madero crítica al entonces presidente Porfirio Diaz después de un largo periodo de mandato de 34 años.',
    options: ['Primero sueño', 'El laberinto de la soledad', 'El Complot'],
    type: 'choice',
    id: 'giwoup',
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
    question: '¿Por qué es conocida Sor Juana Inés de la Cruz?',
    answer: 'Escritora más importante del período Novo-hispáno',
    options: ['Actriz en el período Revolucionario', 'Traductora', 'Cantante'],
    type: 'choice',
    id: 'qbua2',
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
    question:
      '¿Quién dijo la frase "Hombres necios que acusáis a la mujer sin razón, sin ver que vos sois la ocasión de lo mismo que culpáis"?',
    answer: 'Sor Juana Inés de la Cruz',
    options: ['Isabel Fraire', 'Elena Jordana', 'Minerva Reynosa'],
    type: 'choice',
    id: '6j90kp',
    ru: {
      question:
        'Кто сказал фразу "Глупцы, обвиняющие женщину без причины, не видя, что вы сами являетесь причиной того, в чем обвиняете"?',
      answer: 'Сор Хуана Инес де ла Крус',
      options: ['Изабель Фраире', 'Елена Джордана', 'Минерва Рейноса'],
      note: '\n        <p><em>"Мужчины глупцы, что обвиняют"</em> — сатирико-философская поэма Сор Хуаны \n        Инес де ла Крус (1651-1695), известная по первым словам своей первой строки. В \n        этом стихотворении поэтесса утверждает, что мужчины провоцируют женское \n        сексуальное поведение, которое затем сами же и осуждают. Сор Хуана остроумно \n        показывает противоречивость мужских ожиданий и обвинений, сравнивая их поведение \n        с ребёнком, который пугается созданного им же самим воображаемого чудовища. \n        Поэтесса критикует двойные стандарты мужчин, требующих от женщин непорочности, \n        но в то же время соблазняющих их. В стихотворении подчёркивается, что вина за \n        аморальное поведение ложится не только на женщин, но и на мужчин, которые \n        провоцируют это поведение. В итоге, Сор Хуана призывает мужчин быть \n        последовательными в своих требованиях и прекратить осуждать женщин за \n        собственные действия.</p>\n      '
    },
    note: '\n      <p><em>"Hombres necios que acusáis"</em> es un poema satírico-filosófico de Sor \n      Juana Inés de la Cruz (1651-1695), conocido por las palabras de su primera línea. \n      En este poema, la poetisa plantea que los hombres provocan el comportamiento \n      sexual femenino que luego censuran. Sor Juana muestra con ingenio la contradicción \n      entre las expectativas y acusaciones de los hombres, comparando su comportamiento \n      con el de un niño que teme al monstruo imaginario que él mismo creó. La poetisa \n      critica los dobles estándares de los hombres, que exigen pureza de las mujeres \n      mientras las seducen. El poema destaca que la culpa por el comportamiento inmoral \n      recae tanto en las mujeres como en los hombres que lo provocan. En conclusión, \n      Sor Juana insta a los hombres a ser coherentes en sus demandas y dejar de culpar \n      a las mujeres por sus propias acciones.</p>\n    ',
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
    question: 'Nombres de poetas mexicanos',
    answer:
      'Octavio Paz\nAmado Nervo\nJose Emilio Pacheco\nRosario Castellanos\nJaime Sabines',
    type: 'text',
    id: 'wef8u',
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
    question:
      'Poema que escribió Bernardo Balbuena sobre la Nueva España en 1604',
    answer: 'La Grandeza Mexicana',
    options: ['Desamor', 'Detente', 'Fragmento de Nocturno'],
    type: 'choice',
    id: 'm4v3yt',
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
    question:
      'Exponente de la literatura de la revolucionaria / Escritor muy importante de la revolución',
    answer: 'Mariano Azuela',
    note: 'Médico, opositor al Porfiriato.',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'gtj9oh',
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
    question:
      '¿Qué géneros escribían los siguientes autores: Juan Rulfo, Mario Bellatin y Jorge Volpi?',
    answer: 'Narrativa, novela',
    options: ['Dramático', 'Lírico', 'Didáctico'],
    type: 'choice',
    id: 'wyunxcc',
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
    question: 'Famoso escritor mexicano de música para niños',
    answer: 'Francisco Gabilondo Soler, alias Cri Cri',
    options: [
      'Octavio Paz, alias Lagrimita',
      'Juan Rulfo, alias Cepillín',
      'Carlos Fuentes, alias Crin Crin'
    ],
    type: 'choice',
    id: '406sce',
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
    question: '¿Quién escribió "El ratón vaquero"?',
    answer: 'Cri Cri (Francisco Gabilondo Soler)',
    options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
    type: 'choice',
    id: 'h761z9',
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
    question: '¿Cuál es el nombre de Juan Gabriel (El Divo de Juárez)?',
    answer: 'Alberto Aguilera Valadez',
    options: [
      'José Rómulo Sosa Ortíz',
      'Ángel Agustín María Carlos Fausto',
      'Mario Fortino Alfonso Moreno Reyes'
    ],
    type: 'choice',
    id: '4rucg6',
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
    question: 'El arpa es un instrumento musical de',
    answer: 'Veracruz',
    options: ['Guanajuato', 'Campeche', 'Yucatán'],
    type: 'choice',
    id: 'bbtgs9',
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
