import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Qué es la revolución?',
    answer:
      'Inicia cuando Fracisco I Madero publica el Plan San Luis Potosí donde llama a tomar las armas, aparecen personajes como Pascual Orozco, Pancho Villa y Emiliano Zapata, se inicia una lucha en la que los revolucionarios salen victoriosos y Porfirio Díaz renuncia al poder en Mayo de 1911.',
    type: 'text',
    id: 'r9q5k',
    ru: {
      question: 'Что такое революция?',
      answer:
        'Начинается, когда Франсиско I. Мадеро публикует План Сан-Луис-Потоси, в котором призывает взяться за оружие, появляются такие персонажи, как Паскуаль Ороско, Панчо Вилья и Эмилиано Сапата, начинается борьба, в которой революционеры выходят победителями, и Порфирио Диас отказывается от власти в мае 1911 года.'
    }
  },
  {
    question: 'Fecha de la Revolución Mexicana',
    answer: '20 de noviembre de 1910',
    options: [
      '05 de noviembre de 1810',
      '15 de noviembre de 1710',
      '30 de noviembre de 1910'
    ],
    type: 'choice',
    id: 'rhx4t',
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
    question: '¿Qué se celebra el 20 de noviembre?',
    answer: 'Día de la Revolución Mexicana',
    options: [
      'Dia de los Muertos',
      'Independencia de México',
      'Dia de la Bandera'
    ],
    type: 'choice',
    id: '0r04xt',
    ru: {
      question: 'Что отмечается 20 ноября?',
      answer: 'День Мексиканской революции',
      options: ['День мертвых', 'Независимость Мексики', 'День флага']
    }
  },
  {
    question: 'Orden cronológico de los eventos',
    answer: 'Conquista, independencia y revolución',
    options: [
      'Conquista, Revolución e Independencia',
      'Revolución, Conquista e Independencia',
      'Independencia, Revolución, Conquista'
    ],
    type: 'choice',
    id: 'bkxotq',
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
    question: 'Personajes de la revolución',
    answer:
      'Porfirio Diaz\nPancho Villa\nFrancisco I. Madero\nEmiliano Zapata\nVictoriano Huerta\nVenustiano Carranza\nPino Suarez\nPlutarco Elias Calles',
    type: 'text',
    id: 'el3ek',
    ru: {
      question: 'Персонажи революции',
      answer:
        'Порфирио Диас\nПанчо Вилья\nФрансиско И. Мадеро\nЭмилиано Сапата\nВикториано Уэрта\nВенустиано Карранса\nПино Суарес\nПлутарко Элиас Кальес'
    }
  },
  {
    question: '¿De qué se trató el plan de San Luis Potosí?',
    answer:
      'Fué promulgado por Francisco I. Madero, para evitar la reelección de Porfirio Diaz y derrocar el porfiriato. Se buscaba lograr elecciones libres y democráticas',
    note: '5 de Octubre de 1910.',
    options: [
      'No proliferación de armas nucleares',
      'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
      'Documento en el que se acuerda la Independencia de México'
    ],
    type: 'choice',
    id: '78azu',
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
    question:
      'El lema “Sufragio efectivo, no reelección” fue la bandera política de',
    answer: 'Francisco I. Madero',
    options: ['Benito Juarez', 'Porfirio Díaz', 'Vicente Guerrero'],
    type: 'choice',
    id: 'j4khkr',
    ru: {
      question:
        'Лозунг “Эффективное избирательное право, без переизбрания” был политическим лозунгом',
      answer: 'Франсиско И. Мадеро',
      options: ['Бенито Хуарес', 'Порфирио Диас', 'Висенте Герреро']
    }
  },
  {
    question:
      'Nombre del líder agrario que encabezó la revolución mexicana en el estado de Morelos',
    answer: 'Emiliano Zapata',
    options: ['Doroteo Arango', 'Venustiano Carranza', 'Francisco I. Madero'],
    type: 'choice',
    id: 'aijexh',
    ru: {
      question:
        'Имя аграрного лидера, возглавившего мексиканскую революцию в штате Морелос',
      answer: 'Эмилиано Сапата',
      options: ['Доротео Аранго', 'Венустиано Карранса', 'Франсиско И. Мадеро']
    }
  },
  {
    question: '¿Quién dijo "Tierra y libertad"?',
    answer: 'Emiliano Zapata',
    options: ['Doroteo Arango', 'Venustiano Carranza', 'Francisco I. Madero'],
    type: 'choice',
    id: '3cxsnd',
    ru: {
      question: 'Кто сказал "Земля и свобода"?',
      answer: 'Эмилиано Сапата',
      options: ['Доротео Аранго', 'Венустиано Карранса', 'Франсиско И. Мадеро']
    }
  },
  {
    question: '¿Cuándo y dónde fué asesinado Emiliano Zapata?',
    answer: 'En la hacienda Chinameca, Morelos, el 10 de abril de 1919',
    options: [
      'En ciudad de Mexico el 14 de Febrero de 1920',
      'En Puebla el 10 de Marzo de 1918',
      'En la hacienda del Carmen en Hidalgo el 27 de Abril de 1919'
    ],
    type: 'choice',
    id: 'cb6wha',
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
    question:
      'Acontecimiento relacionado con la industria minera y la revolución',
    answer: 'Huelga de Cananea',
    note: 'Fue una huelga dada en la ciudad minera de cobre de Cananea, Sonora, que sentó precedentes para la revolución, por lo que a la ciudad se le conoce como cuna de la revolución.',
    options: ['Huelga Minera', 'Huelga de Sonora', 'Huelga industrial'],
    type: 'choice',
    id: 'ckeul',
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
    question: 'Composición musical característica de la época revolucionaria',
    answer: 'El Corrido',
    note: 'Narrativa popular en forma de canción sobre temas políticos, históricos, etc.',
    options: ['Las Golondrinas', 'La Bikina', 'Las Mañanitas'],
    type: 'choice',
    id: 'rqmyz',
    ru: {
      question: 'Музыкальная композиция, характерная для революционной эпохи',
      answer: 'Корридо',
      options: ['Лас Голондринас', 'Ла Бикина', 'Лас Мананитас'],
      note: 'Популярный рассказ в виде песни о политических, исторических и других темах.'
    }
  },
  {
    question: 'Nombre de un famoso corrido revolucionario',
    answer: 'La Adelita',
    options: ['El Caballo Blanco', 'La Valentina', 'El Barzón'],
    type: 'choice',
    id: 'ajp61',
    ru: {
      question: 'Название известного революционного корридо',
      answer: 'Ла Аделита',
      options: ['Эль Кабальо Бланко', 'Ла Валентина', 'Эль Барсон']
    }
  },
  {
    question: '"Las Adelitas" acompañaron a sus hombres al combate en',
    answer: 'La Revolución de 1910',
    options: [
      'La lucha independentista',
      'La Guerra Cristera',
      'La Batalla de Puebla'
    ],
    type: 'choice',
    id: 'sifxm',
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
    question: '¿De qué se trató el plan de Ayala?',
    answer:
      'Proclamado por Emiliano Zapata para desconocer el gobierno de Francisco I. Madero y devolver la propiedad a los campesinos. Su lema fue: "Reforma, Libertad, Justicia y Ley"',
    note: '28 de Noviembre de 1911.',
    options: [
      'No proliferación de armas nucleares',
      'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
      'Documento en el que se acuerda la Independencia de México'
    ],
    type: 'choice',
    id: 'vlz2nd',
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
    question: '¿Quién fué el autor de la traición de Francisco I. Madero?',
    answer: 'Victoriano Huerta',
    options: ['Emiliano Zapata', 'Porfirio Díaz', 'Venustiano Carranza'],
    type: 'choice',
    id: 'zwrqpw',
    ru: {
      question: 'Кто был автором предательства Франсиско И. Мадеро?',
      answer: 'Викториано Уэрта',
      options: ['Эмилиано Сапата', 'Порфирио Диас', 'Венустиано Карранса']
    }
  },
  {
    question:
      'Nombre del golpe de estado ocurrido del 9 al 19 de febrero de 1913 o golpe militar para  derrocar a Francisco I. Madero',
    answer: 'Decena Trágica',
    options: ['Temporada de Zopilotes', 'El Golpe Duro', 'La Noche Triste'],
    type: 'choice',
    id: 'wvd8rc',
    ru: {
      question:
        'Название государственного переворота, произошедшего с 9 по 19 февраля 1913 года или военного переворота для свержения Франсиско И. Мадеро',
      answer: 'Трагическая десятка',
      options: ['Сезон стервятников', 'Жесткий удар', 'Грустная ночь']
    }
  },
  {
    question: '¿De qué trató el Plan de Guadalupe?',
    answer:
      'Plan para desconocer el gobierno de Victoriano Huerta por la traición a Francisco I. Madero. Fue creado por Venustiano Carranza',
    note: 'Firmado el 26 de Marzo de 1913 en la Hacienda Guadalupe en Coahuila.',
    options: [
      'No proliferación de armas nucleares',
      'México suma territorio en el Norte',
      'Documento en el que se acuerda la Independencia de México'
    ],
    type: 'choice',
    id: 'v9ykzf',
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
    question: 'Plan de Venustiano Carranza para derrocar a Victoriano Huerta',
    answer: 'Plan Guadalupe',
    options: ['Plan de Iguala', 'Plan de San Luis', 'Plan de Noria'],
    type: 'choice',
    id: 'x28cz8',
    ru: {
      question: 'План Венустиано Каррансы по свержению Викториано Уэрты',
      answer: 'План Гваделупе',
      options: ['План Игала', 'План Сан-Луиса', 'План Нории']
    }
  },
  {
    question:
      '¿Quién encabezaba el ejército constitucionalista durante la revolución?',
    answer: 'Venustiano Carranza',
    options: ['Francisco I. Madero', 'Doroteo Arango', 'Emiliano Zapata'],
    type: 'choice',
    id: 'hxqtgo',
    ru: {
      question: 'Кто возглавлял конституционную армию во время революции?',
      answer: 'Венустиано Карранса',
      options: ['Франсиско И. Мадеро', 'Доротео Аранго', 'Эмилиано Сапата']
    }
  },
  {
    question: '¿Quién fué Pancho Villa?',
    answer: 'Líder de la revolución mexicana',
    note: 'Apareció en escena cuando Venustiano Carranza llamó a formar el ejército constitucionalista.',
    options: [
      'Líder de la independencia',
      'Virrey de España',
      'Un traidor de la revolución mexicana'
    ],
    type: 'choice',
    id: 'r9zca',
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
    question: 'Nombre de Pancho Villa',
    answer: 'José Doroteo Arango Arámbula',
    options: [
      'Emiliano Zapata Salazar',
      'Victoriano Huerta',
      'Venustiano Carranza'
    ],
    type: 'choice',
    id: '3x4ei9',
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
    question: '¿A quién se le conoce como el Centauro del Norte?',
    answer: 'Pancho Villa',
    options: ['Emiliano Zapata', 'Victoriano Huerta', 'Venustiano Carranza'],
    type: 'choice',
    id: '7ouw55',
    ru: {
      question: 'Кого знают как Кентавра Севера?',
      answer: 'Панчо Вилью',
      options: ['Эмилиано Сапата', 'Викториано Уэрта', 'Венустиано Карранса']
    }
  },
  {
    question: '¿Cuándo y dónde fué asesinado Pancho Villa?',
    answer: '20 de Julio de 1923 en Parral, Chihuahua',
    note: 'Fue abaleado múltiples veces en su vehículo y su cadáver fue decapitado.',
    options: [
      '05 de Julio de 1923 en Querétaro',
      '20 de Diciembre de 1923 en Coahuila',
      '10 de Febrero de 1923 en Nuevo León'
    ],
    type: 'choice',
    id: 'rna7ea',
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
    question: '¿En qué año se firmó la constitución que nos rige actualmente?',
    answer: '5 de Febrero de 1917 en Querétaro',
    options: [
      '7 de Marzo de 1917 en Jalisco',
      '12 de Diciembre en Ciudad de Mexico',
      '3 de Enero en Nuevo León'
    ],
    type: 'choice',
    id: '5aq09b',
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
    question:
      '¿Quién fué el primer secretario de educación pública de México (1921)?',
    answer: 'José Vasconcelos',
    options: [
      'Elba Esther Gordillo',
      'Bernardo J. Gastélum',
      'Plutarco Elías Calles'
    ],
    type: 'choice',
    id: 'xnvjwm',
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
    question:
      '¿Quién fue el Secretario de educación pública y bellas artes de 1901 a 1911?',
    answer: 'Justo Sierra',
    options: [
      'Jose Vasconcelos',
      'Félix Fulgencio Palavicini',
      'Bernardo J. Gastélum'
    ],
    type: 'choice',
    id: 'bmrub9',
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
];
