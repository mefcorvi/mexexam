import type { QuestionData } from './interfaces';

export const questions: QuestionData[] = [
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
    question: 'Imagen presente en el estandarte de Hidalgo (Blasón de Hidalgo)',
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
    options: ['Josefina Muriel', 'Leona Vicario', 'María Gertrudis Armendáriz'],
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
    answer: '​Una de las mujeres más destacadas de la Guerra de Independencia',
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
    options: ['Colegio de ciencias', 'Colegio de artes', 'Colegio Tlatelolco'],
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
      options: ['Конституция Кадиса', 'Соглашения о разделении', 'Наши права']
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
      options: ['Конституция Кадиса', 'Соглашения о разделении', 'Наши права']
    }
  },
  {
    id: '4j60ao',
    type: 'choice',
    question: '¿Quién dijo "¡Morir es nada, cuando por la patria se muere!"?',
    answer: 'José María Morelos y Pavón',
    options: [
      'Vicente Guerrero',
      'Miguel Hidalgo y Costilla',
      'Ignacio Allende'
    ],
    ru: {
      question: 'Кто сказал «Умереть - это ничто, когда умираешь за Родину!»?',
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
    question: '¿Cuál fue la primera constitución de México independiente?',
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
    question: 'Nombre de cadetes que enfrentaron a Estados Unidos en CDMX',
    answer: 'Niños héroes',
    options: ['Los liberadores', 'Los conservadores', 'Niños patrióticos'],
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
      options: ['Фернандо Монтес де Ока', 'Висенте Суарес', 'Хуан Эскутия'],
      note: '12 лет.'
    }
  },
  {
    id: 'nq08b',
    type: 'choice',
    question:
      '¿Cuál es el nombre del niño héroe que se lanzó enrollado en la bandera desde el castillo?',
    answer: 'Juan Escutia',
    options: ['Fernando Montes de Oca', 'Vicente Suárez', 'Francisco Márquez'],
    ru: {
      question:
        'Как зовут Дитя Героя, который бросился с замка, завернувшись в флаг?',
      answer: 'Хуан Эскутия',
      options: ['Фернандо Монтес де Ока', 'Висенте Суарес', 'Франсиско Маркес']
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
    options: ['Guadalupe Victoria', 'Anastacio Bustamante', 'Vicente Guerrero'],
    ru: {
      question: 'Кого называют благодетелем Америки?',
      answer: 'Бенито Хуарес',
      options: ['Гвадалупе Виктория', 'Анастасио Бустаманте', 'Висенте Герреро']
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
    options: ['15 de mayo de 1862', '20 de mayo de 1962', '25 de mayo de 1762'],
    ru: {
      question: 'Когда была битва при Пуэбле?',
      answer: '5 мая 1862 года',
      options: ['15 мая 1862 года', '20 мая 1962 года', '25 мая 1762 года']
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
    question: '¿Quién hizo el trazo de Paseo de la Reforma y cómo se llamó?',
    answer: 'Maximiliano de Habsburgo, se llamó Paseo de la Emperatriz',
    options: [
      'Agustín de Iturbide, se llamó Paseo del Emperador',
      'Cuauhtémoc, se llamó Paseo del Imperio',
      'Guadalupe Victoria, se llamó Paseo Guadalupe'
    ],
    ru: {
      question: 'Кто разработал проект Paseo de la Reforma и как он назывался?',
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
    question: 'Presidente mexicano que duró más de treinta años en el poder',
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
];
