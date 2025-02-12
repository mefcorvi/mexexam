import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: 'La Independencia de México inició en',
    answer: '1810',
    options: ['1811', '1812', '1800'],
    type: 'choice',
    id: 't3utl8',
    ru: {
      question: 'Независимость Мексики началась в',
      answer: '1810',
      options: ['1811', '1812', '1800']
    }
  },
  {
    question: '¿En qué estado fue el Grito de Independencia?',
    answer: 'Dolores Hidalgo - Guanajuato',
    options: [
      'Mineral de Pozos - Guanajuato',
      'Jalpa - Guanajuato',
      'Salvatierra - Guanajuato'
    ],
    type: 'choice',
    id: 'st0np9',
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
    question: '¿Dónde fué la cuna de la independencia?',
    answer: 'Guanajuato',
    options: ['Querétaro', 'Hidalgo', 'Zacatecas'],
    type: 'choice',
    id: 'sx7n8h',
    ru: {
      question: 'Где была колыбель независимости?',
      answer: 'Гуанахуато',
      options: ['Керетаро', 'Идальго', 'Сакатекас']
    }
  },
  {
    question: '¿A quién se conoce como “El Padre de la Patria”?',
    answer: 'Miguel Hidalgo y Costilla',
    options: [
      'José María Morelos y Pavón',
      'Vicente Guerrero',
      'Agustín de Iturbide'
    ],
    type: 'choice',
    id: '71wti',
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
    question:
      '¿Quién dijo la frase “El Indulto es para los criminales, no para los defensores de la patria”?',
    answer: 'Miguel Hidalgo y Costilla',
    options: [
      'José María Morelos y Pavón',
      'Vicente Guerrero',
      'Agustín de Iturbide'
    ],
    type: 'choice',
    id: '4l9tn',
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
    question: 'Imagen presente en el estandarte de Hidalgo (Blasón de Hidalgo)',
    answer: 'La Virgen de Guadalupe',
    options: [
      'La Virgen del Carmen',
      'La Virgen del Valle',
      'La Virgen de la Candelaria'
    ],
    type: 'choice',
    id: '6l6tqu',
    ru: {
      question: 'Изображение на знамени Идальго (Герб Идальго)',
      answer: 'Дева Гваделупская',
      options: ['Дева Кармельская', 'Дева Долинная', 'Дева Канделярская']
    }
  },
  {
    question: 'Día de la Independencia de México (Grito de Dolores)',
    answer: '16 de septiembre de 1810',
    options: [
      '16 de septiembre de 1811',
      '16 de septiembre de 1800',
      '16 de septiembre de 1812'
    ],
    type: 'choice',
    id: 'xdxspl',
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
    question: 'Nombres de héroes de la independencia',
    answer:
      'Miguel Hidalgo y Costilla\nJosé María Morelos y Pavón\nVicente Guerrero\n Agustín de Iturbide\nIgnacio Allende\nJosefa Ortiz de Domínguez\nFrancisco Javier Mina\nJuan Aldama\nEpigmenio González',
    type: 'text',
    id: 'z6jqx9',
    ru: {
      question: 'Имена героев независимости',
      answer:
        'Мигель Идальго и Костилья\nХосе Мария Морелос и Павон\nВисенте Герреро\nАгустин де Итурбиде\nИгнасио Альенде\nХосефа Ортис де Домингес\nФрансиско Хавьер Мина\nХуан Альдама\nЭпигменио Гонсалес'
    }
  },
  {
    question: 'Mujeres destacadas en la independencia',
    answer: 'Josefa Ortiz de Domínguez y Leona Vicario',
    options: [
      'Josefina Muriel y Leona Vicario',
      'Mónica Salas y Josefa Ortiz de Domínguez',
      'María Gertrudis Armendáriz y Josefina Muriel'
    ],
    type: 'choice',
    id: 'na8vjc',
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
    question: '¿Quién fué conocida como “La Corregidora”?',
    answer: 'Josefa Ortiz de Domínguez',
    options: ['Josefina Muriel', 'Leona Vicario', 'María Gertrudis Armendáriz'],
    type: 'choice',
    id: 'p1ohb',
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
    question: '¿Quién fué Leona Vicario?',
    answer: '​Una de las mujeres más destacadas de la Guerra de Independencia',
    note: 'Se dedicó a informar a los insurgentes de los movimientos que podían interesarles y que ocurrían en la capital del Virreinato.',
    options: [
      '​Una de las mujeres más destacadas de la Revolución',
      '​Mujer destacada durante la conquista',
      '​Mujer fusilada durante de la Guerra de Independencia'
    ],
    type: 'choice',
    id: 'edc22e',
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
    question:
      '¿Quién fué el fundador de "El Pensador Mexicano"? (Periódico más importante en la época de independencia)',
    answer: 'José Joaquín Fernández de Lizardi',
    options: [
      'Juan Fernández de Lizardi',
      'Manuel Fernández de Lizardi',
      'Pedro Fernández de Lizardi'
    ],
    type: 'choice',
    id: 'x6h9km',
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
    question:
      '¿Cuál fué el primer periódico de los insurgentes (época del movimiento independentista)?',
    answer: 'El Despertador Americano en 1810',
    options: [
      'El Informador Americano en 1910',
      'El Americano en 1510',
      'La Gaceta en 1710'
    ],
    type: 'choice',
    id: 'zkhsfa',
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
    question: 'Periódico durante el movimiento Independentista',
    answer: 'El Despertador Americano',
    options: ['El Informador', 'El Americano', 'La Gaceta'],
    type: 'choice',
    id: '722evln',
    ru: {
      question: 'Газета во время движения за независимость',
      answer: 'El Despertador Americano',
      options: ['El Informador', 'El Americano', 'La Gaceta']
    }
  },
  {
    question:
      'Primera institución educativa en 1811 destinada a las ciencias y artes',
    answer: 'Colegio de Minería',
    options: ['Colegio de ciencias', 'Colegio de artes', 'Colegio Tlatelolco'],
    type: 'choice',
    id: 'pjdbgj',
    ru: {
      question:
        'Первое образовательное учреждение в 1811 году, предназначенное для наук и искусств',
      answer: 'Горный колледж',
      options: ['Колледж наук', 'Колледж искусств', 'Колледж Тлателолько']
    }
  },
  {
    question:
      '¿Quién dijo la frase: Sin importar el tamaño de la ciudad o pueblo en donde nacen los hombres o mujeres, ellos son finalmente del tamaño de su obra, del tamaño de su voluntad de engrandecer y enriquecer a sus hermanos?',
    answer: 'Ignacio Allende',
    note: 'Líder de la independencia fusilado junto con Miguel Hidalgo.',
    options: [
      'Vicente Guerrero',
      'José María Morelos y Pavón',
      'Miguel Hidalgo y Costilla'
    ],
    type: 'choice',
    id: 'x8bx8l',
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
    question: '¿Quién dijo la frase: “La patria es primero”?',
    answer: 'Vicente Guerrero',
    options: [
      'José María Morelos y Pavón',
      'Miguel Hidalgo y Costilla',
      'Ignacio Allende'
    ],
    type: 'choice',
    id: 'wkkkqm',
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
    question:
      'Texto en el que aparecen la separación de poderes y los derechos de los indígenas',
    answer: 'Sentimientos de la Nación',
    options: [
      'Constitución de Cadiz',
      'Acuerdos de separación',
      'Nuestros derechos'
    ],
    type: 'choice',
    id: 'kmlxb9j',
    ru: {
      question:
        'Текст, в котором упоминаются разделение властей и права коренных народов',
      answer: 'Чувства Нации',
      options: ['Конституция Кадиса', 'Соглашения о разделении', 'Наши права']
    }
  },
  {
    question: '¿Quién escribió el documento "Sentimientos de la Nación"?',
    answer: 'José María Morelos y Pavón',
    note: 'El documento "Sentimientos de la Nación" fue escrito por José María Morelos, un destacado líder de la independencia de México. Morelos presentó este documento en 1813 durante el Congreso de Chilpancingo, con el objetivo de establecer las bases de una nueva nación libre del dominio español. En "Sentimientos de la Nación", Morelos expone 23 puntos que reflejan sus ideales de justicia social, igualdad y soberanía nacional. Este documento es considerado un pilar fundamental en la historia de México, ya que sentó las bases para la Constitución de Apatzingán de 1814. A través de su redacción, Morelos dejó un legado de lucha por la independencia y los derechos humanos.',
    options: [
      'Miguel Hidalgo y Costilla',
      'Ignacio Allende',
      'Vicente Guerrero'
    ],
    type: 'choice',
    id: 'yk1zir',
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
    question:
      '¿En qué documento se puede leer "Que la América es libre independiente de España y de toda otra nación, gobierno o monarquía, y que así se sancione, dando al mundo las razones. Que la esclavitud se proscriba para siempre..."?',
    answer: 'Sentimientos de la Nación',
    options: [
      'Constitución de Cadiz',
      'Acuerdos de separación',
      'Nuestros derechos'
    ],
    type: 'choice',
    id: 'jhlul4d'
  },
  {
    question: '¿Quién dijo "¡Morir es nada, cuando por la patria se muere!"?',
    answer: 'José María Morelos y Pavón',
    options: [
      'Vicente Guerrero',
      'Miguel Hidalgo y Costilla',
      'Ignacio Allende'
    ],
    type: 'choice',
    id: '4j60ao',
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
    question: '¿Qué es el Plan de Iguala?',
    answer:
      'Documento político proclamado por Agustín de Iturbide, en el cual se declaraba a la Nueva España como país soberano e independiente',
    options: [
      'Proclamado por el por Gral. Santa Anna para desconocer a Iturbide',
      'Tratado donde México cede territorios del norte',
      'Promovido por Porfirio Diaz para evitar la reelección de Benito Juárez'
    ],
    type: 'choice',
    id: '3qbck',
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
    question:
      'El plan firmado por Iturbide para declarar un país independiente fue',
    answer: 'Plan de Iguala',
    options: ['Plan de Tuxtepec', 'Plan de Noria', 'Plan de Ayutla'],
    type: 'choice',
    id: 'i3rjsj',
    ru: {
      question:
        'План, подписанный Итурбиде для провозглашения независимости страны, был',
      answer: 'План Игала',
      options: ['План Тустепек', 'План Нория', 'План Аютла']
    }
  },
  {
    question: '¿Cuándo se firmó el tratado o Plan de Iguala?',
    answer: '24 de Febrero de 1821',
    options: [
      '01 de Febrero de 1821',
      '24 de Diciembre de 1821',
      '24 de Julio de 1821'
    ],
    type: 'choice',
    id: 'brp4x',
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
    question: '¿Qué personajes proclamaron el Plan de Iguala?',
    answer: 'Agustín de Iturbide y Vicente Guerrero',
    options: [
      'Josefa Ortiz de Domínguez y Félix Calleja',
      'Miguel Hidalgo y José María Morelos',
      'Ignacio Allende y Juan Aldama'
    ],
    type: 'choice',
    id: '4el55i',
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
    question:
      '¿Cuáles fueron los tres principios fundamentales del plan de Iguala? / Tres garantías del Ejército Trigarante?',
    answer: 'Religión, Independencia y Unión',
    options: [
      'Defensa, Independencia y Unión',
      'Armas, Independencia y Unión',
      'Independencia, Paz y Unión'
    ],
    type: 'choice',
    id: 'pte3lv',
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
    question: '¿Qué fué el Tratado de Córdoba?',
    answer:
      'Documento en el que se ratifica la Independencia de México, firmado en la ciudad de Córdoba, Veracruz, el 24 de agosto de 1821, por Agustín de Iturbide, (comandante del Ejército Trigarante) y por Juan O`Donoju (Jefe Político Superior de la Provincia de Nueva España).',
    type: 'text',
    id: 'bq7u4j',
    ru: {
      question: 'Что такое Кордовский договор?',
      answer:
        'Документ, подтверждающий Независимость Мексики, подписанный в городе Кордова, Веракрус, 24 августа 1821 года Агустином де Итурбиде (командиром Тригарантной армии) и Хуаном О`Доноху (Главным политическим руководителем провинции Новая Испания).'
    }
  },
  {
    question: '¿Cuál fue la primera constitución de México independiente?',
    answer: 'Constitución Federal de 1824',
    note: 'México fué independiente el 24 de Febrero de 1821 con el Plan de Iguala.',
    options: [
      'Constitución Federal de 1825',
      'Constitución Federal de 1924',
      'Constitución Federal de 1834'
    ],
    type: 'choice',
    id: 'npgvrb',
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
    question:
      '¿Qué sucedió con Iturbide después de lograr la independencia de México?',
    answer:
      'En 1822 Iturbide se coronó como Agustín I Emperador de México, en medio del desorden político del país y el desconocimiento de España de la independencia de México.',
    type: 'text',
    id: '6fj4vq',
    ru: {
      question:
        'Что случилось с Итурбиде после достижения независимости Мексики?',
      answer:
        'В 1822 году Итурбиде короновался как Агустин I Император Мексики, на фоне политического беспорядка в стране и непризнания Испанией независимости Мексики.'
    }
  },
  {
    question: 'Nombre del primer emperador en México',
    answer: 'Agustin de Iturbide',
    options: ['Maximiliano de Habsburgo', 'Cuauhtémoc', 'Cesar Augusto'],
    type: 'choice',
    id: '3vbzfd',
    ru: {
      question: 'Имя первого императора в Мексике',
      answer: 'Агустин де Итурбиде',
      options: ['Максимилиан Габсбург', 'Куаутемок', 'Цезарь Август']
    }
  },
  {
    question: '¿De que se trató el Plan de Casa Mata?',
    answer:
      'Proclamado por Gral. Santa Anna para desconocer a Iturbide como emperador, anular el imperio y reinstalar el Congreso',
    note: '1 de Febrero de 1823 en la Hacienda Casamata, Veracruz.',
    options: [
      'Tratado donde México cede territorios del norte',
      'Promovido por Porfirio Diaz para evitar la reelección de Benito Juárez',
      'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna'
    ],
    type: 'choice',
    id: 'l4zcle',
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
    question: '¿Quién fué el primer presidente de México?',
    answer: 'Guadalupe Victoria',
    note: 'En 1824.',
    options: [
      'Jose María Bocanegra',
      'Anastacio Bustamante',
      'Vicente Guerrero'
    ],
    type: 'choice',
    id: 'msess',
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
    question: '¿Qué fué la batalla de Chapultepec?',
    answer:
      'Fue un conflicto armado que tuvo lugar el día lunes 13 de septiembre de 1847 en el cerro llamado Chapultepec. En el combate intervinieron los ejércitos de Estados Unidos y de México. El motivo de la batalla, y de la invasión en general, fue que Estados Unidos deseaba apoderarse del territorio al norte del Río Bravo, incluido Texas.',
    type: 'text',
    id: '7cxvewb',
    ru: {
      question: 'Что было битвой при Чапультепеке?',
      answer:
        'Это был вооруженный конфликт, который произошел в понедельник, 13 сентября 1847 года на холме под названием Чапультепек. В бою участвовали армии США и Мексики. Причиной битвы и вторжения в целом было желание США завладеть территорией к северу от реки Браво, включая Техас.'
    }
  },
  {
    question:
      'Cadetes militares que defendieron el Castillo de Chapultepec de la invasión norteamericana el 13 de Septiembre de 1847',
    answer: 'Niños héroes',
    options: ['Niños militares', 'Niños salvadores', 'Niños patrióticos'],
    type: 'choice',
    id: '4lgmud',
    ru: {
      question:
        'Военные кадеты, защищавшие Замок Чапультепек от американского вторжения 13 сентября 1847 года',
      answer: 'Детишки герои',
      options: ['Военные дети', 'Дети спасатели', 'Патриотические дети']
    }
  },
  {
    question: 'Nombre de cadetes que enfrentaron a Estados Unidos en CDMX',
    answer: 'Niños héroes',
    options: ['Los liberadores', 'Los conservadores', 'Niños patrióticos'],
    type: 'choice',
    id: 'cpjmxi',
    ru: {
      question: 'Имя кадетов, сражавшихся против США в Мехико',
      answer: 'Детишки герои',
      options: ['Освободители', 'Консерваторы', 'Патриотические дети']
    }
  },
  {
    question: '¿Dónde esta ubicado el Castillo de Chapultepec?',
    answer: 'Cuidad de México',
    options: ['Zacatecas', 'Morelos', 'Jalisco'],
    type: 'choice',
    id: 'sfnp9f',
    ru: {
      question: 'Где находится замок Чапультепек?',
      answer: 'Мехико',
      options: ['Сакатекас', 'Морелос', 'Халиско']
    }
  },
  {
    question: 'Nombres de los Niños Héroes',
    answer:
      'Juan Escutia\nJuan de la Barrera\nAgustín Melgar\nFernando Montes de Oca\nVicente Suárez \nFrancisco Márquez',
    type: 'text',
    id: 'ku09mw',
    ru: {
      question: 'Имена Детей Героев',
      answer:
        'Хуан Эскутия\nХуан де ла Баррера\nАгустин Мельгар\nФернандо Монтес де Ока\nВисенте Суарес\nФрансиско Маркес'
    }
  },
  {
    question: '¿Cuál fue el niño héroe más pequeño?',
    answer: 'Francisco Márquez',
    note: '12 años.',
    options: ['Fernando Montes de Oca', 'Vicente Suárez', 'Juan Escutia'],
    type: 'choice',
    id: 'a66wyr',
    ru: {
      question: 'Кто был самым молодым Детем Героем?',
      answer: 'Франсиско Маркес',
      options: ['Фернандо Монтес де Ока', 'Висенте Суарес', 'Хуан Эскутия'],
      note: '12 лет.'
    }
  },
  {
    question:
      '¿Cuál es el nombre del niño héroe que se lanzó enrollado en la bandera desde el castillo?',
    answer: 'Juan Escutia',
    options: ['Fernando Montes de Oca', 'Vicente Suárez', 'Francisco Márquez'],
    type: 'choice',
    id: 'nq08b',
    ru: {
      question:
        'Как зовут Дитя Героя, который бросился с замка, завернувшись в флаг?',
      answer: 'Хуан Эскутия',
      options: ['Фернандо Монтес де Ока', 'Висенте Суарес', 'Франсиско Маркес']
    }
  },
  {
    question: 'Tratado de Guadalupe Hidalgo',
    answer:
      'Tratado en el que México cede los territorios de California, Nuevo México, Arizona y Nevada',
    note: 'Firmado el 2 de febrero de 1848, poniendo fin a la guerra contra USA.',
    options: [
      'No proliferación de armas nucleares',
      'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
      'Documento en el que se acuerda la Independencia de México'
    ],
    type: 'choice',
    id: 'r8zybd',
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
    question:
      '¿Cuál fue el tratado que puso fin a la guerra con Estados Unidos?',
    answer: 'Tratado Guadalupe Hidalgo',
    options: ['Plan de Tuxtepec', 'Plan de Noria', 'Plan de Ayutla'],
    type: 'choice',
    id: 'seq0o',
    ru: {
      question: 'Какой договор положил конец войне с США?',
      answer: 'Гуадалупе-Идальго договор',
      options: ['План Тустепек', 'План Нория', 'План Аютла']
    }
  },
  {
    question: '¿De qué se trató el Plan de Ayutla?',
    answer:
      'Proclamado por Adrián Florencio Villareal, para dar fin a la dictadura de Antonio López de Santa Anna',
    note: '1 de marzo 1854.',
    options: [
      'No proliferación de armas nucleares',
      'Documento en el que se acuerda la Independencia de México',
      'Promovido por Porfirio Diaz para evitar la reelección de Benito Juárez'
    ],
    type: 'choice',
    id: '6lbj8b',
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
    question:
      '¿Quién derrotó al Gral. Santa Anna en la Batalla de San Jacinto el 21 de Abril de 1836?',
    answer: 'Gral. Samuel Houston (Guerra contra los EEUU por Texas)',
    options: [
      'Gral. George C. Marshall (Guerra contra Francia)',
      'Gral. Douglas MacArthur (Guerra contra Inglaterra)',
      'Gral. Henry H. Arnold (Guerra contra EEUU)'
    ],
    type: 'choice',
    id: '56sg5n',
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
    question: 'La Guerra de Reforma fue entre',
    answer: 'Liberales y Conservadores',
    note: 'Ganando los liberales (Benito Juárez) también llamada guerra de los 3 años.',
    options: [
      'México y Francia',
      'Comunistas e imperialistas',
      'Cuidadanos y el gobierno'
    ],
    type: 'choice',
    id: 'o0eo08',
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
    question: '¿Cuál fue la guerra de los 3 años?',
    answer: 'La Guerra de Reforma (1857 - 1860)',
    options: [
      'La Guerra de la Independencia (1810 - 1813)',
      'La Última Guerra (1960 - 1963)',
      'La Guerra Liberal (1850 - 1853)'
    ],
    type: 'choice',
    id: 'vav3c',
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
    question:
      'Grupo que promovió el desarrollo económico sin afectar la iglesia y los militares',
    answer: 'Conservadores',
    options: ['Liberales', 'Imparciales', 'Cristianos'],
    type: 'choice',
    id: '3sx4kq',
    ru: {
      question:
        'Группа, которая продвигала экономическое развитие, не затрагивая церковь и военных',
      answer: 'Консерваторы',
      options: ['Либералы', 'Беспристрастные', 'Христиане']
    }
  },
  {
    question:
      'Grupo que promovió la integración nacional y abrió camino al capitalismo',
    answer: 'Liberales (Benito Juárez)',
    options: ['Conservadores', 'Cristianos', 'Franceses'],
    type: 'choice',
    id: '7gm5zn',
    ru: {
      question:
        'Группа, которая продвигала национальную интеграцию и открыла путь к капитализму',
      answer: 'Либералы (Бенито Хуарес)',
      options: ['Консерваторы', 'Христиане', 'Французы']
    }
  },
  {
    question: '¿Quién fue Benito Pablo Juárez García?',
    answer:
      'Presidente de México de 1857 a 1872 que promovió las Leyes de Reforma',
    options: [
      'Presidente de México de 1857 a 1872 que promovió el TLC',
      'Presidente de México de 1957 a 1963 que promovió el Plan de La Noria',
      'Presidente de México de 1860 a 1866 que promovió el Plan de Tuxtepec'
    ],
    type: 'choice',
    id: 'qzmya6',
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
    question:
      '¿Cómo se conocen las leyes impulsadas por  Juan Álvarez, Ignacio Comonfort y Benito Juárez para separar a la Iglesia del Estado?',
    answer: 'Leyes de Reforma',
    options: [
      'Nuevas Leyes',
      'Leyes Separatistas',
      'Sentimientos de la Nacion'
    ],
    note: `<ul>
        <li><strong>Leyes de Reforma:</strong> 
            <p>Este conjunto de leyes fue promulgado en la segunda mitad del siglo XIX. Establecieron la separación entre la Iglesia y el Estado, nacionalizaron los bienes eclesiásticos y promovieron la libertad de culto. Estas reformas fueron fundamentales para la modernización del Estado mexicano.</p>
        </li>
        <li><strong>Nuevas Leyes:</strong> 
            <p>Si bien su nombre sugiere cambios, "Nuevas Leyes" no es un término relacionado con las reformas mencionadas. Estas leyes históricamente se asocian con la regulación de la relación entre los colonizadores españoles y los pueblos indígenas en el siglo XVI.</p>
        </li>
        <li><strong>Leyes Separatistas:</strong> 
            <p>Este nombre no es históricamente correcto en este contexto. Aunque las Leyes de Reforma buscaban una separación institucional, nunca se les llamó "Leyes Separatistas".</p>
        </li>
        <li><strong>Sentimientos de la Nación:</strong> 
            <p>Es un documento de 1813 redactado por José María Morelos, donde se establecen principios independentistas y sociales para México, pero no tiene relación con las Leyes de Reforma.</p>
        </li>
    </ul>`,
    type: 'choice',
    id: 'dcpl1',
    ru: {
      question:
        'Как называются законы, продвигаемые Хуаном Альваресом, Игнасио Комонфортом и Бенито Хуаресом для отделения церкви от государства?',
      answer: 'Законы о реформах',
      options: ['Новые законы', 'Законы сепаратистов', 'Чувства Нации'],
      note: `<ul>
        <li><strong>Законы Реформы (Leyes de Reforma):</strong> 
            <p>Эти законы были приняты во второй половине XIX века и установили разделение церкви и государства, национализацию церковной собственности и свободу вероисповедания. Они сыграли важную роль в модернизации мексиканского государства.</p>
        </li>
        <li><strong>Новые законы (Nuevas Leyes):</strong> 
            <p>Хотя название подразумевает реформы, этот термин не относится к разделению церкви и государства. Исторически "Новые законы" касались регулирования отношений между колонизаторами и коренными народами в XVI веке.</p>
        </li>
        <li><strong>Законы Сепаратизма (Leyes Separatistas):</strong> 
            <p>Такого названия для этих реформ не использовали. Хотя они направлены на институциональное разделение, название "Законы Сепаратизма" не применяется.</p>
        </li>
        <li><strong>Чувства нации (Sentimientos de la Nación):</strong> 
            <p>Документ 1813 года, составленный Хосе Марией Морелосом, описывает принципы независимости и социальной справедливости, но не связан с Законами Реформы.</p>
        </li>
      </ul>`
    }
  },
  {
    question:
      'Presidente mexicano al que se le atribuye la frase “Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz"',
    answer: 'Benito Juárez',
    options: [
      'Jose María Bocanegra',
      'Anastacio Bustamante',
      'Vicente Guerrero'
    ],
    type: 'choice',
    id: 'vid4qi',
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
    question: '¿A quién le llaman el benemérito de las américas?',
    answer: 'Benito Juárez',
    options: ['Guadalupe Victoria', 'Anastacio Bustamante', 'Vicente Guerrero'],
    type: 'choice',
    id: 'eyzvo',
    note: `<ul>
        <li><strong>Benito Juárez:</strong> 
            <p>Es conocido como el "Benemérito de las Américas" por su defensa de la soberanía mexicana durante la intervención francesa y sus reformas liberales. Fue presidente de México y luchó por la separación de la Iglesia y el Estado.</p>
        </li>
        <li><strong>Guadalupe Victoria:</strong> 
            <p>Primer presidente de México tras la independencia. Su mandato sentó las bases del nuevo Estado, pero no se le asocia con el título de "Benemérito de las Américas".</p>
        </li>
        <li><strong>Anastasio Bustamante:</strong> 
            <p>Militar y político que ocupó la presidencia varias veces en el siglo XIX. No tiene relación directa con el título de "Benemérito de las Américas".</p>
        </li>
        <li><strong>Vicente Guerrero:</strong> 
            <p>Figura clave en la guerra de independencia. Fue presidente y abolió la esclavitud en México, pero no es conocido con ese título.</p>
        </li>
    </ul>`,
    ru: {
      question: 'Кого называют заслуженным деятелем Америки?',
      answer: 'Бенито Хуарес',
      options: [
        'Гвадалупе Виктория',
        'Анастасио Бустаманте',
        'Висенте Герреро'
      ],
      note: `<ul>
        <li><strong>Бенито Хуарес:</strong> 
            <p>Известен как «Бенемерито де лас Америкас» за защиту суверенитета Мексики во время французской интервенции и либеральные реформы. Был президентом Мексики и выступал за разделение церкви и государства.</p>
        </li>
        <li><strong>Гуадалупе Виктория:</strong> 
            <p>Первый президент Мексики после обретения независимости. Его правление заложило основы нового государства, но это звание ему не присваивали.</p>
        </li>
        <li><strong>Анастасио Бустаманте:</strong> 
            <p>Военный и политик, несколько раз занимавший пост президента в XIX веке. С этим званием не связан.</p>
        </li>
        <li><strong>Висенте Герреро:</strong> 
            <p>Ключевая фигура войны за независимость. Будучи президентом, отменил рабство в Мексике, но этого титула не носит.</p>
        </li>
    </ul>`
    }
  },
  {
    question: 'Fecha en que se estableció el primer registro civil',
    answer: '28 de Julio de 1859',
    options: [
      '28 de Diciembre de 1750',
      '5 de Marzo de 1900',
      '28 de Noviembre de 1889'
    ],
    type: 'choice',
    id: '0wfh8d',
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
    question: 'Fecha en que se expidió la primera acta de nacimiento',
    answer: '10 de noviembre de 1859',
    options: [
      '15 de Diciembre de 1559',
      '20 de Enero de 1779',
      '05 de noviembre de 1959'
    ],
    type: 'choice',
    id: 's5n1y',
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
    question: '¿Cuándo fue la Batalla de Puebla?',
    answer: '5 de mayo de 1862',
    options: ['15 de mayo de 1862', '20 de mayo de 1962', '25 de mayo de 1762'],
    type: 'choice',
    id: 'ves8i7',
    ru: {
      question: 'Когда была битва при Пуэбле?',
      answer: '5 мая 1862 года',
      options: ['15 мая 1862 года', '20 мая 1962 года', '25 мая 1762 года']
    }
  },
  {
    question: '¿Qué fué la Batalla de Puebla?',
    answer:
      'Conflicto armado liderado por Ignacio Zaragoza contra la segunda intervención francesa, siendo México vencedor',
    note: 'Más tarde con un nuevo ejército los franceses vencen a los mexicanos y establecen el segundo imperio bajo el mando de Maximiliano de Habsburgo.',
    options: [
      'Batalla comandada por el general Francisco Xavier Mina lograron la victoria ante las fuerzas realistas',
      'Batalla comandada por Ignacio López Rayón fueron derrotados en combate por las fuerzas realistas del Gral. Emparan',
      'Fue una victoria militar de los realistas sobre las fuerzas insurgentes mexicanas durante la Guerra de Independencia'
    ],
    type: 'choice',
    id: '3kf1de',
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
    question: '¿Quién fué el emperador del segundo imperio mexicano?',
    answer: 'Maximiliano de Habsburgo',
    options: ['Agustín de Iturbide', 'Cuauhtémoc', 'Cesar Augusto'],
    type: 'choice',
    id: '3f17tc',
    ru: {
      question: 'Кто был императором второй мексиканской империи?',
      answer: 'Максимилиан Габсбург',
      options: ['Агустин де Итурбиде', 'Куаутемок', 'Цезарь Август']
    }
  },
  {
    question: '¿Quién hizo el trazo de Paseo de la Reforma y cómo se llamó?',
    answer: 'Maximiliano de Habsburgo, se llamó Paseo de la Emperatriz',
    options: [
      'Agustín de Iturbide, se llamó Paseo del Emperador',
      'Cuauhtémoc, se llamó Paseo del Imperio',
      'Guadalupe Victoria, se llamó Paseo Guadalupe'
    ],
    type: 'choice',
    id: 'fmrbfj',
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
    question: '¿Cuándo y dónde murió Maximiliano de Habsburgo?',
    answer: '19 de Junio de 1867 en Querétaro',
    options: [
      '10 de Diciembre de 1897 en Zacatecas',
      '25 de Enero de 1880 en Durango',
      '15 de Marzo de 1767 en Coahuila'
    ],
    type: 'choice',
    id: 'tb600h',
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
    question:
      '¿Quién asumió la presidencia después de la muerte de Benito Juárez?',
    answer: 'Sebastián Lerdo de Tejada',
    note: 'Era el presidente de la Suprema Corte de Justicia.',
    options: [
      'Jose María Bocanegra',
      'Anastacio Bustamante',
      'Vicente Guerrero'
    ],
    type: 'choice',
    id: '9qsob7',
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
    question:
      '¿En qué año comenzaron las obras del primer ferrocarril en México?',
    answer: '1842',
    options: ['1942', '1800', '1835'],
    type: 'choice',
    id: '43twum',
    ru: {
      question:
        'В каком году начались работы по строительству первой железной дороги в Мексике?',
      answer: '1842',
      options: ['1942', '1800', '1835']
    }
  },
  {
    question:
      '¿En qué año se inauguró el primer tramo ferroviario en México (Veracruz - El Molino)?',
    answer: '1850',
    options: ['1860 ', '1970', '1830'],
    type: 'choice',
    id: 'qbo78',
    ru: {
      question:
        'В каком году был открыт первый железнодорожный участок в Мексике (Веракрус - Эль Молино)?',
      answer: '1850',
      options: ['1860', '1970', '1830']
    }
  },
  {
    question:
      'México perdió la mitad de su territorio a mediados del siglo XIX, como consecuencia del enfrentamiento con',
    answer: 'USA',
    options: ['Belice', 'Guatemala', 'Francia'],
    type: 'choice',
    id: 'msd6vq',
    ru: {
      question:
        'Мексика потеряла половину своей территории в середине XIX века в результате столкновения с',
      answer: 'США',
      options: ['Белиз', 'Гватемала', 'Франция']
    }
  },
  {
    question:
      'Batallón extranjero que participó y ayudó a México en la Guerra contra EEUU',
    answer: 'Batallón de San Patricio',
    note: 'Fué una unidad militar compuesta por cientos de inmigrantes europeos (alemanes, irlandeses y estadounidenses) que lucharon en el ejército mexicano contra la invasión de los Estados Unidos, de 1846 a 1848. Tomaron el nombre del Santo Patrono de Irlanda.',
    options: [
      'Batallón de San Cipriano',
      'Batallón de Santiago el Mayor',
      'Batallón de San Nicolás'
    ],
    type: 'choice',
    id: 'tno9tc',
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
    question: '¿Quién fué Porfirio Díaz?',
    answer:
      'Militar Mexicano que se destacó en la batalla del 5 de mayo en Puebla contra los franceses, posteriormente presidente de México',
    options: [
      'Conocido por promover la lucha de independencia',
      'Autor de las famosas Catrinas',
      'Lider de la victoria militar de los realistas sobre las fuerzas insurgentes mexicanas'
    ],
    type: 'choice',
    id: 'ftiuhn',
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
    question: 'Nombre completo de Porfirio Diaz',
    answer: 'Jose de la Cruz Porfirio Diaz Mori',
    options: [
      'Jose Porfirio Cruz Diaz Rodriguez',
      'Jose Manuel Porfirio Gómez Diaz',
      'Juan Jose Porfirio Diaz Méndez'
    ],
    type: 'choice',
    id: 'tycqlp',
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
    question: '¿De que se trató el Plan de Tuxtepec?',
    answer:
      'Plan elaborado por Porfirio Diaz para destituir al gobierno de Sebastián Lerdo de Tejada y evitar su reelección',
    note: '10 de enero de 1876, se firmó en Tuxtepec, Oaxaca.',
    options: [
      'No proliferación de armas nucleares',
      'Proclamado por Adrián Florencio Villareal para terminar con la dictadura de Santa Anna',
      'Plan promovido por Porfirio Diaz para evitar la reelección de Benito Juárez'
    ],
    type: 'choice',
    id: '7yzg3j',
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
    question:
      '¿Cómo se llamó el plan que promovió Porfirio Diaz para evitar la reelección de Benito Juárez?',
    answer: 'Plan de La Noria o Revolución de La Noria',
    note: '1871.',
    options: ['Plan de Iguala', 'Plan de Ayutla', 'Plan de Tuxtepec'],
    type: 'choice',
    id: '38o62c',
    ru: {
      question:
        'Как назывался план, продвигаемый Порфирио Диасом для предотвращения переизбрания Бенито Хуареса?',
      answer: 'План Ла Нория или Революция Ла Нория',
      options: ['План Игала', 'План Аютла', 'План Тустепек'],
      note: '1871 год.'
    }
  },
  {
    question:
      'Movimiento político-militar dirigido por Porfirio Díaz en 1871 para impedir la reelección de Benito Juárez',
    answer: 'Plan de Noria',
    options: ['Plan de Tuxtepec', 'Plan de Iguala', 'Plan de Ayutla'],
    type: 'choice',
    id: '803vqf',
    ru: {
      question:
        'Политико-военное движение, возглавляемое Порфирио Диасом в 1871 году для предотвращения переизбрания Бенито Хуареса',
      answer: 'План Ла Нория',
      options: ['План Тустепек', 'План Игала', 'План Аютла']
    }
  },
  {
    question: 'Presidente mexicano que duró más de treinta años en el poder',
    answer: 'Porfirio Díaz',
    note: 'Duró 34 años.',
    options: ['Benito Juárez', 'Guadalupe Victoria', 'Vicente Fox'],
    type: 'choice',
    id: 'rdbf3f',
    ru: {
      question:
        'Мексиканский президент, который пробыл у власти более тридцати лет',
      answer: 'Порфирио Диас',
      options: ['Бенито Хуарес', 'Гвадалупе Виктория', 'Висенте Фокс'],
      note: 'Пробыл 34 года.'
    }
  },
  {
    question: 'El Porfiriato se conoce como una época de extensión de',
    answer: 'Las vías férreas',
    options: ['Las vías aéreas', 'Las carreteras', 'La tecnología'],
    type: 'choice',
    id: 'a9p27c',
    ru: {
      question: 'Порфириат известен как эпоха расширения',
      answer: 'Железных дорог',
      options: ['Воздушных путей', 'Шоссейных дорог', 'Технологий']
    }
  },
  {
    question: 'Etapa pre-revolucionaria',
    answer: '1876 a 1910 (El Porfiriato)',
    options: [
      '1976 a 1980 (Maderismo)',
      '1929 a 1932 (Cardenismo)',
      '1913 a 1920 (Constitucionalismo)'
    ],
    type: 'choice',
    id: '8mlqzf',
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
    question: 'Periódico revolucionario en la época en el Porfiriato',
    answer: 'El hijo de Ahuizote',
    options: [
      'El hijo de su mamá',
      'El hijo de Ajolote',
      'La Gaceta de México'
    ],
    type: 'choice',
    id: 'jhm84v',
    ru: {
      question: 'Революционная газета в эпоху Порфириата',
      answer: 'El hijo de Ahuizote',
      options: ['Сын своей мамы', 'Сын Ажолоте', 'Газета Мексики']
    }
  },
  {
    question: 'Obras más importantes del Porfiriato',
    answer:
      'El Teléfono\nEl Sistema Ferroviario\nEl Teatro de Bellas Artes\nEl Ángel de la Independencia\nEl Palacio Postal',
    type: 'text',
    id: '4vc9n',
    ru: {
      question: 'Самые важные произведения эпохи Порфириата',
      answer:
        'Телефон\nЖелезнодорожная система\nТеатр изящных искусств\nАнгел Независимости\nПочтовый дворец'
    }
  },
  {
    question:
      'Contribución tecnológica al país durante el gobierno de Porfirio Diaz',
    answer: 'El teléfono',
    note: 'El 16 de Septiembre de 1878. En un tendido que iba desde el Castillo Chapultepec hasta Palacio Nacional.',
    options: ['El fonógrafo', 'El tranvía', 'El gran canal'],
    type: 'choice',
    id: 'dmvcb9',
    ru: {
      question:
        'Технологический вклад в страну во время правления Порфирио Диаса',
      answer: 'Телефон',
      options: ['Фонограф', 'Трамвай', 'Большой канал'],
      note: '16 сентября 1878 года. В прокладке, простирающейся от замка Чапультепек до Национального дворца.'
    }
  },
  {
    question: '¿Que inauguró Porfirio Diaz el 17 de febrero de 1907?',
    answer: 'El Palacio Postal',
    options: ['El tranvía', 'El gran canal', 'El cine'],
    type: 'choice',
    id: '0l4ws9',
    ru: {
      question: 'Что открыл Порфирио Диас 17 февраля 1907 года?',
      answer: 'Почтовый дворец',
      options: ['Трамвай', 'Большой канал', 'Кино']
    }
  },
  {
    question:
      'Forma de asesinato común en el porfiato o metodo de fusilamineto usado en el porfiriato',
    answer: 'Ley de fuga',
    options: ['Ley de fusilamiento', 'Ley de Porfirio', 'Ley de calles'],
    type: 'choice',
    id: 'dtuuwm',
    ru: {
      question:
        'Обычная форма убийства в эпоху Порфириата или метод расстрела, использовавшийся в эпоху Порфириата',
      answer: 'Закон о побеге',
      options: ['Закон о расстреле', 'Закон Порфирио', 'Закон улиц']
    }
  },
  {
    question: '¿A que se conoce como la Ley de Fuga?',
    answer: 'Un tipo de ejecución usada en el Porfiriato',
    note: 'Consistía en hacerle creer a un prisionero que podía escapar para asesinarlo por la espalda.',
    options: [
      'Expulsión del país usada en el Porfiriato',
      'Castigo por no pagar impuestos',
      'Deportación de obreros en el Porfiriato'
    ],
    type: 'choice',
    id: 'kumpd',
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
    question:
      '¿Que presidente dijo “Tan lejos de Dios y tan cerca de Estados Unidos”?',
    answer: 'Porfirio Díaz',
    options: ['Vicente Fox', 'Benito Juárez', 'Francisco I. Madero'],
    type: 'choice',
    id: 'wlitd',
    ru: {
      question:
        'Какой президент сказал: «Так далеко от Бога и так близко к Соединенным Штатам»?',
      answer: 'Порфирио Диас',
      options: ['Висенте Фокс', 'Бенито Хуарес', 'Франсиско И. Мадеро']
    }
  },
  {
    question: '¿Cuando se inauguró el Ángel de la independencia?',
    answer: '16 de septiembre de 1910',
    options: [
      '05 de septiembre de 1910',
      '20 de septiembre de 1910',
      '10 de septiembre de 1910'
    ],
    type: 'choice',
    id: 'kk4wt',
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
    question: '¿En qué año se fundó la UNAM?',
    answer: 'El 22 de Septiembre de 1910',
    note: 'Por Justo Sierra durante el gobierno Porfirio Díaz.',
    options: [
      'El 22 de Diciembre de 1910',
      'El 22 de Febrero de 1910',
      'El 15 de Octubre de 1910'
    ],
    type: 'choice',
    id: '97ib7',
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
    question: '¿Cuál es la universidad más antigua de México?',
    answer: 'UNAM',
    options: ['BUAP', 'UGTO', 'UDG'],
    type: 'choice',
    id: '1cmmne',
    ru: {
      question: 'Какой университет является самым старым в Мексике?',
      answer: 'УНАМ',
      options: ['БУАП', 'УГТО', 'УДГ']
    }
  },
  {
    question: 'Lema de la UNAM',
    answer: 'Por mi raza hablará el espíritu',
    options: [
      'Por mi raza hablará la gente',
      'Por mi espíritu',
      'Por mi raza hablarán mañana'
    ],
    type: 'choice',
    id: 'oxvm77',
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
    question: '¿Quién dijo la frase “Por mi raza hablará el espíritu”?',
    answer: 'Jose Vasconcelos',
    options: [
      'José María Pino Suárez',
      'Ignacio García Téllez',
      'Justo Sierra'
    ],
    type: 'choice',
    id: 'pf7qtc',
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
    question:
      '¿Quién dijo la frase “Yo no vengo a trabajar por la universidad, sino a pedir a la universidad que trabaje por el pueblo”?',
    answer: 'Jose Vasconcelos',
    options: [
      'José María Pino Suárez',
      'Ignacio García Téllez',
      'Justo Sierra'
    ],
    type: 'choice',
    id: '3sn3g',
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
    question: '¿Qué presidente le dio autonomía a la UNAM?',
    answer: 'Emilio Portes Gil',
    options: [
      'Pascual Ortiz Rubio',
      'Abelardo Rodríguez Luján',
      'Lázaro Cárdenas del Río'
    ],
    type: 'choice',
    id: 'veft0m',
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
