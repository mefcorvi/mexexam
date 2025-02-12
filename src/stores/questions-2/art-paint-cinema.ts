import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: 'Pintores mexicanos reconocidos',
    answer:
      'Jose Maria Velazco\nDiego Rivera\nFrida Khalo\nRufino Tamayo\nDavid Alfaro Siqueiros\nJose Clemente Orozco\nJose Luis Cuevas',
    type: 'text',
    id: 'y5kn8',
    ru: {
      question: 'Признанные мексиканские художники',
      answer:
        'Хосе Мария Веласко\nДиего Ривера\nФрида Кало\nРуфино Тамайо\nДавид Альфаро Сикейрос\nХосе Клементе Ороско\nХосе Луис Куэвас'
    }
  },
  {
    question: 'Representante del muralismo mexicano',
    answer: 'Diego Rivera',
    options: ['Frida Khalo', 'Rufino Tamayo', 'Jose Maria Velazco'],
    type: 'choice',
    id: 'qm5nep',
    ru: {
      question: 'Представитель мексиканского мурализма',
      answer: 'Диего Ривера',
      options: ['Фрида Кало', 'Руфино Тамайо', 'Хосе Мария Веласко']
    }
  },
  {
    question: 'Autor del mural del Palacio Nacional',
    answer: 'Diego Rivera',
    options: ['Frida Khalo', 'Rufino Tamayo', 'Jose Maria Velazco'],
    type: 'choice',
    id: 'toos4d',
    ru: {
      question: 'Автор фрески в Национальном дворце',
      answer: 'Диего Ривера',
      options: ['Фрида Кало', 'Руфино Тамайо', 'Хосе Мария Веласко']
    }
  },
  {
    question:
      'Autor del mural en el museo de antropología sobre la Serpiente emplumada',
    answer: 'Rufino Tamayo',
    options: ['Frida Khalo', 'Diego Rivera', 'Jose Maria Velazco'],
    type: 'choice',
    id: 'iekho',
    ru: {
      question: 'Автор фрески в музее антропологии о Пернатом змее',
      answer: 'Руфино Тамайо',
      options: ['Фрида Кало', 'Диего Ривера', 'Хосе Мария Веласко']
    }
  },
  {
    question: '¿Quién fué y por qué es conocida Frida Khalo?',
    answer:
      'Pintora más importante de América Latina, conocida por sus autorretratos',
    options: [
      'Escultora más importante de América Latina, conocida por El caballito de Reforma',
      'Actriz mexicana conocida por Marimar',
      'Cantante mexicana, conocida por la la canción Amor Eterno'
    ],
    type: 'choice',
    id: 'otxkma',
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
    question: 'Nombre completo de Frida Khalo',
    answer: 'Magdalena Carmen Frida Kahlo Calderón',
    options: [
      'Magdalena Kahlo Calderón',
      'Carmen Frida Kahlo Calderón',
      'Magdalena Carmen Josefina Frida Kahlo Calderón'
    ],
    type: 'choice',
    id: 'oykxyl',
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
    question: 'Pintor paisajista mexicano',
    answer: 'Jose Maria Velazco',
    options: ['Frida Khalo', 'Diego Rivera', 'Rufino Tamayo'],
    type: 'choice',
    id: 'oiqfy4',
    ru: {
      question: 'Мексиканский пейзажист',
      answer: 'Хосе Мария Веласко',
      options: ['Фрида Кало', 'Диего Ривера', 'Руфино Тамайо']
    }
  },
  {
    question: '¿Qué pintaba Jose María Velazco?',
    answer: 'Paisajes',
    options: ['Mujeres', 'Alegorías', 'Autoretratos'],
    type: 'choice',
    id: 'oqoad',
    ru: {
      question: 'Что рисовал Хосе Мария Веласко?',
      answer: 'Пейзажи',
      options: ['Женщин', 'Аллегории', 'Автопортреты']
    }
  },
  {
    question:
      'Titiritero y artista plástico mexicano del movimiento estridentista autor de la escultura "Hombre Corriendo"',
    answer: 'German Cueto',
    options: ['Jose Maria Velazco', 'Diego Rivera', 'Rufino Tamayo'],
    type: 'choice',
    id: 'ymf5cl',
    ru: {
      question:
        'Мексиканский кукольник и художник пластического искусства движения эстридентизм, автор скульптуры "Бегущий человек"',
      answer: 'Герман Куэто',
      options: ['Хосе Мария Веласко', 'Диего Ривера', 'Руфино Тамайо']
    }
  },
  {
    question:
      'Famoso escultor mexicano especializado en escultura monumental o figuras geométricas de gran tamaño',
    answer:
      'Enrique Carbajal González Santiván mejor conocido como Sebastián, el del caballito de reforma',
    options: [
      'Gianlorenzo Bernini',
      'Eloy Palacios',
      'Rodrigo Arenas Betancourt'
    ],
    type: 'choice',
    id: '4m5fnl',
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
    question:
      'Nombre del escultor cuyas obras se basan en figuras geométricas de gran tamaño',
    answer: 'Enrique Carbajal',
    options: ['Jose Maria Velazco', 'Diego Rivera', 'Rufino Tamayo'],
    type: 'choice',
    id: 'bhitcg',
    ru: {
      question:
        'Имя скульптора, чьи работы основаны на больших геометрических фигурах',
      answer: 'Энрике Карбахаль',
      options: ['Хосе Мария Веласко', 'Диего Ривера', 'Руфино Тамайо']
    }
  },
  {
    question: 'Autor de las catrinas (Calaveras)',
    answer: 'José Guadalupe Posada',
    options: ['Jose Maria Velazco', 'Diego Rivera', 'Rufino Tamayo'],
    type: 'choice',
    id: 'l95eox',
    ru: {
      question: 'Автор катрин (черепов)',
      answer: 'Хосе Гвадалупе Посада',
      options: ['Хосе Мария Веласко', 'Диего Ривера', 'Руфино Тамайо']
    }
  },
  {
    question: 'Monumento que modernizó México',
    answer: 'El Caballito de Reforma',
    options: [
      'La Diana Cazadora',
      'Los Niños Héroes',
      'Los Héroes de la Independencia'
    ],
    type: 'choice',
    id: 'l1naz5',
    ru: {
      question: 'Монумент, который модернизировал Мексику',
      answer: '"Кабальито де Реформа"',
      options: ['Диана Охотница', 'Дети-герои', 'Герои независимости']
    }
  },
  {
    question: '¿Cuándo empezó la época de oro del cine mexicano?',
    answer: 'En 1935',
    note: 'Comenzó simbólicamente con la película Vámonos con Pancho Villa.',
    options: ['En 1930', 'En 1920', 'En 1955'],
    type: 'choice',
    id: '3f7mv',
    ru: {
      question: 'Когда началась золотая эпоха мексиканского кино?',
      answer: 'В 1935 году',
      options: ['В 1930 году', 'В 1920 году', 'В 1955 году'],
      note: 'Символически началась с фильма "Пойдем с Панчо Вильей".'
    }
  },
  {
    question: 'Año en que inicia la nueva época del cine mexicano',
    answer: '1990',
    options: ['1930', '1920', '1955'],
    type: 'choice',
    id: '67dljq',
    ru: {
      question: 'Год начала новой эпохи мексиканского кино',
      answer: '1990',
      options: ['1930', '1920', '1955']
    }
  },
  {
    question: '¿Cuál fue la primera película filmada en México?',
    answer:
      'El Presidente de la República (Porfirio Díaz) Paseando a Caballo en el Bosque de Chapultepec en 1896',
    options: ['Vámonos', 'Santa', 'La Lucha'],
    type: 'choice',
    id: '935u1',
    ru: {
      question: 'Какой был первый фильм, снятый в Мексике?',
      answer:
        'Президент Республики (Порфирио Диас) на прогулке верхом в лесу Чапультепек в 1896 году',
      options: ['Вамонес', 'Санта', 'Борьба']
    }
  },
  {
    question: '¿Cuál fué la primera película sonora en México?',
    answer: 'Santa',
    note: 'Grabada en 1931 y estrenada en 1932.',
    options: ['Vámonos', 'El presidente de la república', 'La lucha'],
    type: 'choice',
    id: '43sh4h',
    ru: {
      question: 'Какой был первый звуковой фильм в Мексике?',
      answer: 'Санта',
      options: ['Вамонес', 'Президент Республики', 'Борьба'],
      note: 'Записана в 1931 году и выпущена в 1932 году.'
    }
  },
  {
    question: '¿Cuál fue la primera película a color filmada en México?',
    answer: 'Así se quiere en Jalisco, en 1942',
    options: [
      'Así se quiere en Guanajuato, en 1930',
      'Así se quiere en Aguascalientes, en 1950',
      'Así se quiere en México, en 1932'
    ],
    type: 'choice',
    id: 'bnvk6n',
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
    question: '¿Cuál personaje fue interpretado por Pedro Infante?',
    answer: 'Pepe el Toro',
    options: ['Tin Tan', 'Tizoc', 'Resortes'],
    type: 'choice',
    id: '7qb5yd',
    ru: {
      question: 'Какого персонажа сыграл Педро Инфанте?',
      answer: 'Пепе эль Торо',
      options: ['Тин Тан', 'Тисок', 'Ресортес']
    }
  },
  {
    question:
      'Película mexicana basada en una novela escrita por un extranjero',
    answer: 'Macario',
    note: 'Escrita por B. Traven, fue un actor y novelista alemán, se trata de la relación de un indígena con la muerte durante la víspera del día de muertos en la Nueva España.',
    options: ['En vísperas de una guerra', 'La Lucha', 'Vámonos'],
    type: 'choice',
    id: 'piqdrf',
    ru: {
      question: 'Мексиканский фильм, основанный на романе иностранного автора',
      answer: 'Макарио',
      options: ['Накануне войны', 'Борьба', 'Вамонес'],
      note: 'Написан Б. Травеном, немецким актером и романистом, рассказывает о взаимоотношениях индейца со смертью накануне Дня мертвых в Новой Испании.'
    }
  },
  {
    question: '¿Cuáles son actores de la época dorada del cine mexicano?',
    answer: 'Pedro Infante, Jorge Negrete y Sara Garcia',
    options: [
      'Pedro Infante, Jorge Negrete y Juan Rulfo',
      'Mario Moreno, Jorge Negrete y Sara Garcia',
      'Pedro Infante, Carmen Salinas y Sara Garcia'
    ],
    type: 'choice',
    id: '50hth',
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
    question:
      '¿Cómo se llamaba la actriz extranjera de la época dorada del cine mexicano?',
    answer: 'Libertad Lamarque',
    options: ['Sara Garcia', 'Elsa Aguirre', 'Maria Félix'],
    type: 'choice',
    id: 'd5hztq',
    ru: {
      question:
        'Как звали иностранную актрису золотой эпохи мексиканского кино?',
      answer: 'Либертад Ламарке',
      options: ['Сара Гарсия', 'Эльза Агирре', 'Мария Феликс']
    }
  },
  {
    question: 'Actrices mexicanas de la época dorada del cine mexicano',
    answer: 'María Félix, Sara García, Dolores del Río',
    options: [
      'María Félix, Salma Hayek, Dolores del Río',
      'Kate del Castillo, Sara García, Dolores del Río',
      'María Félix, Sara García, Carmen Salinas'
    ],
    type: 'choice',
    id: '6o5x5',
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
    question:
      'María Félix y Dolores del Río fueron personajes destacados en el ámbito de',
    answer: 'El cine',
    options: ['La musica', 'La pintura', 'El baile'],
    type: 'choice',
    id: 'eigxfw',
    ru: {
      question:
        'Мария Феликс и Долорес дель Рио были выдающимися персонажами в области',
      answer: 'Кино',
      options: ['Музыки', 'Живописи', 'Танца']
    }
  },
  {
    question: '¿Cuál es la actriz mexicana que actuaba siempre de abuelita?',
    answer: 'Sara (Sarita) García',
    options: ['María Félix', 'Dolores del Río', 'Carmen Salinas'],
    type: 'choice',
    id: 'fqm1y2',
    ru: {
      question: 'Какая мексиканская актриса всегда играла бабушек?',
      answer: 'Сара (Сарита) Гарсия',
      options: ['Мария Феликс', 'Долорес дель Рио', 'Кармен Салинас']
    }
  },
  {
    question: '¿Quién fue Jorge Negrete?',
    answer: 'Un actor y cantante',
    note: 'Fue uno de los actores más emblemáticos de la época de oro del cine mexicano.',
    options: ['Un pintor', 'Un político', 'Un poetista y escritor'],
    type: 'choice',
    id: 'ktf4e',
    ru: {
      question: 'Кем был Хорхе Негрете?',
      answer: 'Актером и певцом',
      options: ['Художником', 'Политиком', 'Поэтом и писателем'],
      note: 'Был одним из самых знаковых актеров золотой эпохи мексиканского кино.'
    }
  },
  {
    question: 'Nombre completo de Jorge Negrete',
    answer: 'Jorge Alberto Negrete Moreno',
    options: [
      'Jorge Negrete Moreno',
      'Jorge Manuel Negrete',
      'Jorge Eliberto Negrete Moreno Perez'
    ],
    type: 'choice',
    id: 'a7c0cc',
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
    question: 'Figura del cine nacional que encarnó al charro mexicano',
    answer: 'Jorge Negrete',
    options: ['Pedro Infante', 'Luis Aguilar', 'Joaquín Pardavé'],
    type: 'choice',
    id: 'c7vi7d',
    ru: {
      question: 'Фигура национального кино, воплотившая мексиканского чародея',
      answer: 'Хорхе Негрете',
      options: ['Педро Инфанте', 'Луис Агилар', 'Хоакин Пардаве']
    }
  },
  {
    question:
      'Cómico que representó al mexicano de las clases populares en el cine',
    answer: 'Cantinflas',
    options: ['Pedro Infante', 'Luis Aguilar', 'Joaquín Pardavé'],
    type: 'choice',
    id: 'hwz4xe',
    ru: {
      question: 'Комик, представлявший мексиканца из народных классов в кино',
      answer: 'Кантифлас',
      options: ['Педро Инфанте', 'Луис Агилар', 'Хоакин Пардаве']
    }
  },
  {
    question: '¿Quién fué Mario Moreno?',
    answer: 'El más reconocido comediante mexicano',
    note: 'Conocido como Cantinflas',
    options: ['Pintor mexicano', 'Escritor mexicano', 'Historiador mexicano'],
    type: 'choice',
    id: '49rpg',
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
    question: '¿Cómo es el nombre completo de Cantinflas?',
    answer: 'Mario Fortino Alfonso Moreno Reyes',
    options: [
      'Mario Manuel Reyes',
      'Mario de Jesús Moreno',
      'Mario Alberto Moreno Reyes'
    ],
    type: 'choice',
    id: '8azaxj',
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
    question: '¿Qué actor interpretó al Chavo del 8?',
    answer: 'Roberto Gómez Bolaños',
    options: ['Alfonso Cuarón', 'Alejandro González Iñárritu', 'Anthony Quinn'],
    type: 'choice',
    id: '7ja3ba',
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
    question: '"No contaban con mi astucia", es una frase de',
    answer: 'El Chapulín Colorado',
    note: '"Que no panda el cúnico (pánico)", "Lo tenía fríamente calculado" son otras frases famosas de éste personaje creado e interpretado por Roberto Gómez Bolaños.',
    options: ['El Chavo del 8', 'La Chilindrina', 'Quico'],
    type: 'choice',
    id: '86yf2',
    ru: {
      question: '"Не рассчитывали на мою хитрость" - это фраза',
      answer: 'Чапулин Колорадо',
      options: ['Чаво из 8', 'Чилиндрина', 'Кико'],
      note: '"Не поддавайтесь панике", "У меня было все холодно рассчитано" - это другие известные фразы этого персонажа, созданного и сыгранного Роберто Гомесом Боланосом.'
    }
  },
  {
    question: 'Mexicano que ha ganado dos Premios Oscar como mejor actor',
    answer: 'Anthony Quinn',
    note: 'En 1952 y 1956.',
    options: [
      'Alfonso Cuarón',
      'Alejandro González Iñárritu',
      'Guillermo del Toro'
    ],
    type: 'choice',
    id: 'vmi4id',
    ru: {
      question: 'Мексиканец, дважды получивший премию Оскар как лучший актер',
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
    question: 'Mexicanos ganadores de Premios Oscar como mejor director',
    answer: 'Alejandro González Iñárritu y Alfonso Cuarón',
    note: 'Alejandro González Iñárritu por Birdman en el 2015 y por The Revenant en el 2016, Alfonso Cuarón por Gravity en el 2014 y por Roma en el 2019.',
    options: [
      'Guillermo del Toro y Anthonio Meza',
      'Eugenio Caballero y Alfonso Martinez',
      'Rodolfo Neri Vela y Eugenio Derbez'
    ],
    type: 'choice',
    id: 'qytm58',
    ru: {
      question: 'Мексиканцы, получившие премию Оскар как лучшие режиссеры',
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
    question:
      '¿Quién fue ganador del Globo de Oro en 2018 como mejor director?',
    answer: 'Guillermo del Toro',
    options: ['Alfonso Cuarón', 'Alejandro González Iñárritu', 'Anthony Quinn'],
    type: 'choice',
    id: 'wlfruu',
    ru: {
      question: 'Кто выиграл Золотой глобус в 2018 году как лучший режиссер?',
      answer: 'Гильермо дель Торо',
      options: [
        'Альфонсо Куарон',
        'Алехандро Гонсалес Иньярриту',
        'Энтони Куинн'
      ]
    }
  },
  {
    question: 'Máximo galardón de la academia mexicana de cinematografía',
    answer: 'Premio Ariel',
    options: ['Premio Amparo Dávila', 'Premio Bellas Artes', 'Premio Ohtli'],
    type: 'choice',
    id: 'xni60r',
    ru: {
      question: 'Высшая награда мексиканской академии кинематографии',
      answer: 'Премия Ариэль',
      options: [
        'Премия Ампаро Давила',
        'Премия изящных искусств',
        'Премия Охтли'
      ]
    }
  }
];
