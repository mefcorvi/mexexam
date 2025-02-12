import type { QuestionData } from './interfaces';

export const questions: QuestionData[] = [
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
      question: 'Мексиканский фильм, основанный на романе иностранного автора',
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
    question: '¿Cuál es la actriz mexicana que actuaba siempre de abuelita?',
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
      question: 'Фигура национального кино, воплотившая мексиканского чародея',
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
      question: 'Комик, представлявший мексиканца из народных классов в кино',
      answer: 'Кантифлас',
      options: ['Педро Инфанте', 'Луис Агилар', 'Хоакин Пардаве']
    }
  },
  {
    id: '49rpg',
    type: 'choice',
    question: '¿Quién fué Mario Moreno?',
    answer: 'El más reconocido comediante mexicano',
    options: ['Pintor mexicano', 'Escritor mexicano', 'Historiador mexicano'],
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
    options: ['Alfonso Cuarón', 'Alejandro González Iñárritu', 'Anthony Quinn'],
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
    id: 'wlfruu',
    type: 'choice',
    question:
      '¿Quién fue ganador del Globo de Oro en 2018 como mejor director?',
    answer: 'Guillermo del Toro',
    options: ['Alfonso Cuarón', 'Alejandro González Iñárritu', 'Anthony Quinn'],
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
    id: 'xni60r',
    type: 'choice',
    question: 'Máximo galardón de la academia mexicana de cinematografía',
    answer: 'Premio Ariel',
    options: ['Premio Amparo Dávila', 'Premio Bellas Artes', 'Premio Ohtli'],
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
];
