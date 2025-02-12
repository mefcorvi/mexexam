import type { QuestionData, SectionData } from './interfaces';

export const questions: QuestionData[] = [
  {
    id: 'rtt498',
    type: 'choice',
    question: 'Bebida típica de México',
    answer: 'Tequila',
    options: ['Vodka', 'Whisky', 'Mojito'],
    ru: {
      question: 'Типичный напиток Мексики',
      answer: 'Текила',
      options: ['Водка', 'Виски', 'Мохито']
    }
  },
  {
    id: '0tk2bj',
    type: 'choice',
    question:
      'Comida típica de México que está hecha a base de harina de maíz y se envuelve en hoja de plátano',
    answer: 'Tamal',
    options: ['Pozole', 'Sopitos', 'Tatemado'],
    ru: {
      question:
        'Типичное мексиканское блюдо из кукурузной муки, завернутое в банановый лист',
      answer: 'Тамаль',
      options: ['Позоле', 'Сопитос', 'Татемадо']
    }
  },
  {
    id: 'kc1i08',
    type: 'choice',
    question: '¿Qué son escamoles?',
    answer: 'Huevos de hormiga',
    options: ['Gusanos', 'Grillos', 'Avispas'],
    note: 'Son huevos de la hormiga güijera, apreciadas en México desde tiempos prehispánicos. Las hormigas escamoleras son muy agresivas, lo cual, dificulta su explotación y hace de los escamoles un platillo caro.',
    ru: {
      question: 'Что такое эскамолес?',
      answer: 'Яйца муравьев',
      options: ['Черви', 'Сверчки', 'Осы'],
      note: 'Это яйца муравьев güijera, ценимые в Мексике с доиспанских времен. Муравьи эскамолеры очень агрессивны, что затрудняет их добычу и делает эскамолес дорогим блюдом.'
    }
  },
  {
    id: '2i8j5l',
    type: 'choice',
    question: 'Productos originarios de México',
    answer: 'Chocolate, aguacate, tomate, pavo',
    options: [
      'Frijol, tomate, nopal, cerezas',
      'Jicama, vainilla, cafe, jalapeños',
      'Maiz, aguacate, quinoa, trigo'
    ],
    ru: {
      question: 'Продукты, происходящие из Мексики',
      answer: 'Шоколад, авокадо, помидор, индейка',
      options: [
        'Фасоль, помидор, нопал, вишня',
        'Джикама, ваниль, кофе, халапеньо',
        'Кукуруза, авокадо, киноа, пшеница'
      ]
    }
  },
  {
    id: 'sm08sx',
    type: 'choice',
    question: 'Dulce típico de Xochimilco hecho de amaranto',
    answer: 'Alegría',
    options: ['Chocolate de mesa', 'Tamarindo enchilado', 'Mazapán'],
    ru: {
      question: 'Типичный сладость из Сочимилько, сделанный из амаранта',
      answer: 'Алегрия',
      options: ['Столовый шоколад', 'Тамаринд с чили', 'Мазапан']
    }
  },
  {
    id: 'jf4ubs',
    type: 'choice',
    question:
      '¿Cuál es el nombre del caldo mexicano elaborado con granos de maíz?',
    answer: 'Pozole',
    options: ['Tatemado', 'Birria', 'Sopa azteca'],
    ru: {
      question:
        'Как называется мексиканский суп, приготовленный из кукурузных зерен?',
      answer: 'Позоле',
      options: ['Татемадо', 'Биррия', 'Ацтекский суп']
    }
  },
  {
    id: 'tqrhg',
    type: 'choice',
    question: '¿De dónde es originaria la ensalada de noche buena?',
    answer: 'Michoacán',
    options: ['Jalisco', 'Chihuahua', 'Yucatán'],
    ru: {
      question: 'Откуда родом рождественский салат?',
      answer: 'Мичоакан',
      options: ['Халиско', 'Чиуауа', 'Юкатан']
    }
  },
  {
    id: '80ah7',
    type: 'choice',
    question: 'Bebidas sacadas del agave',
    answer: 'Tequila y mezcal',
    options: ['Tequila y horchata', 'Pulque y tonayan', 'Tejuino y tequila'],
    ru: {
      question: 'Напитки из агавы',
      answer: 'Текила и мескаль',
      options: ['Текила и орчата', 'Пульке и тонайан', 'Техуино и текила']
    }
  },
  {
    id: 'ot6jzr',
    type: 'choice',
    question: 'Platillos mexicanos a base de tortilla',
    answer: 'Sopes, tlacoyos, memelas',
    options: [
      'Sopes, tlacoyos, pozole',
      'Mole, tlacoyos, memelas',
      'Sopes, barbacoa, memelas'
    ],
    note: 'También: tacos, quesadillas, tostadas, flautas, panuchos, enchiladas, enfrijoladas.',
    ru: {
      question: 'Мексиканские блюда на основе тортильи',
      answer: 'Сопес, тлакойос, мемелас',
      options: [
        'Сопес, тлакойос, позоле',
        'Моле, тлакойос, мемелас',
        'Сопес, барбакоа, мемелас'
      ],
      note: 'Также: такос, кесадильи, тостадас, флаутас, панучос, энчиладас, энфрихоладас.'
    }
  },
  {
    id: '47n3me',
    type: 'choice',
    question: '¿Qué son memelas?',
    answer: 'Tortillas de maíz ovaladas (Puebla)',
    options: [
      'Caldo de maíz generalmente con carne de cerdo',
      'Enchiladas potosinas',
      'Postre michoacano a base de leche'
    ],
    ru: {
      question: 'Что такое мемелас?',
      answer: 'Овальные кукурузные тортильи (Пуэбла)',
      options: [
        'Кукурузный суп обычно со свининой',
        'Потосинские энчилады',
        'Мичоаканский десерт на основе молока'
      ]
    }
  },
  {
    id: '42i2f',
    type: 'choice',
    question:
      '¿De dónde son originarios la sopa de lima, los panuchos y la cochinita pibil?',
    answer: 'Yucatán',
    options: ['Colima', 'Tamaulipas', 'Baja California Sur'],
    ru: {
      question: 'Откуда родом суп из лайма, панучос и кочинита пибиль?',
      answer: 'Юкатан',
      options: ['Колима', 'Тамаулипас', 'Баха Калифорния Сур']
    }
  },
  {
    id: 'pb4qvt',
    type: 'choice',
    question: 'Plato típico de Monterrey',
    answer: 'El Cabrito',
    options: ['Birria', 'Barbacoa', 'Discada'],
    ru: {
      question: 'Типичное блюдо Монтеррея',
      answer: 'Эль Кабрито',
      options: ['Биррия', 'Барбакоа', 'Дискада']
    }
  },
  {
    id: 'g3wj',
    type: 'choice',
    question: 'El cabrito y la machaca son platos originarios de',
    answer: 'Nuevo León',
    options: ['Sinaloa', 'Guerrero', 'San Luis Potosí'],
    ru: {
      question: 'Эль Кабрито и Мачака — блюда, происходящие из',
      answer: 'Нуэво-Леон',
      options: ['Синалоа', 'Герреро', 'Сан-Луис-Потоси']
    }
  },
  {
    id: '3ynb1i',
    type: 'choice',
    question:
      'Lugar dónde son tradicionales los tamales de queso para el día de muertos',
    answer: 'San Luis Potosí',
    options: ['Tabasco', 'Zacatecas', 'Michoacán'],
    ru: {
      question: 'Место, где традиционны сырные тамалес на День мертвых',
      answer: 'Сан-Луис-Потоси',
      options: ['Табаско', 'Сакатекас', 'Мичоакан']
    }
  },
  {
    id: '49u8dh',
    type: 'choice',
    question: '¿De dónde es originario el Chile en Nogada?',
    answer: 'Puebla',
    options: ['Chiapas', 'Sonora', 'Oaxaca'],
    ru: {
      question: 'Откуда родом Чили эн Ногада?',
      answer: 'Пуэбла',
      options: ['Чьяпас', 'Сонора', 'Оахака']
    }
  },
  {
    id: 'cq2kqh',
    type: 'choice',
    question: 'Nombre de 3 platos típicos poblanos',
    answer: 'Mole poblano, chiles en nogada, chalupas',
    options: [
      'Mole negro de puebla, Cabrito, memelas',
      'Tamales, enchiladas poblanas, tacos dorados',
      'Entamalados, enchiladas poblanas, sopes'
    ],
    ru: {
      question: 'Назовите 3 типичных блюда из Пуэблы',
      answer: 'Моле поблано, чили эн ногада, чалупас',
      options: [
        'Черный моле из Пуэблы, Кабрито, мемелас',
        'Тамалес, побланские энчилады, хрустящие тако',
        'Энтамаладас, побланские энчилады, сопес'
      ]
    }
  },
  {
    id: '3fx8l',
    type: 'choice',
    question: 'Plato típico de Veracruz',
    answer: 'Zacahuil',
    options: ['Cabrito', 'Mole veracruzano', 'Tamales Jarochos'],
    ru: {
      question: 'Типичное блюдо Веракруса',
      answer: 'Закахуиль',
      options: ['Кабрито', 'Веракрусанский моле', 'Харочские тамалес']
    }
  },
  {
    id: '2rb6fl',
    type: 'choice',
    question: '¿Qué insectos son comestibles?',
    answer:
      'Chapulines (saltamontes), escamoles (huevos de hormiga), jumiles, gusanos de maguey',
    options: [
      'Mosquito tigre, jumiles',
      'Avispas amarillas, gusanos de maguey',
      'Escamoles, arañas'
    ],
    ru: {
      question: 'Какие насекомые съедобны?',
      answer:
        'Чапулины (кузнечики), эскамолес (яйца муравьев), жумилес, черви магея',
      options: [
        'Тигровый комар, жумилес',
        'Желтые осы, черви магея',
        'Эскамолес, пауки'
      ]
    }
  },
  {
    id: '4fk6wq',
    type: 'choice',
    question: 'Bebida prehispánica conocida como curado',
    answer: 'Pulque',
    options: ['Tequila', 'Tejuino', 'Jocoque'],
    ru: {
      question: 'Доиспанский напиток, известный как курадо',
      answer: 'Пульке',
      options: ['Текила', 'Техуино', 'Жококе']
    }
  },
  {
    id: 'v6fvle',
    type: 'choice',
    question: 'Bebida sacada del maguey',
    answer: 'Pulque',
    options: ['Tejuino', 'Jocoque', 'Tehuical'],
    ru: {
      question: 'Напиток из магея',
      answer: 'Пульке',
      options: ['Техуино', 'Жококе', 'Техуикаль']
    }
  },
  {
    id: 'cfzjkc',
    type: 'choice',
    question: '¿Cuál es el ingrediente principal del mole?',
    answer: 'Chocolate amargo',
    options: ['Ajonjolí', 'Pimienta', 'Leche'],
    ru: {
      question: 'Какой основной ингредиент у моле?',
      answer: 'Горький шоколад',
      options: ['Кунжут', 'Перец', 'Молоко']
    }
  },
  {
    id: 'tex1wl',
    type: 'choice',
    question: '¿De dónde es el platillo de los 7 moles?',
    answer: 'Oaxaca',
    options: ['Puebla', 'Sonora', 'Chiapas'],
    note: 'Se considera que el mole oaxaqueño es la combinación de 7 moles de la región: mole negro, mole amarillo, mole colorado, mole verde, mole rojo, mole chichillo y mole estofado.',
    ru: {
      question: 'Откуда родом блюдо из 7 моле?',
      answer: 'Оахака',
      options: ['Пуэбла', 'Сонора', 'Чьяпас'],
      note: 'Считается, что оахаканский моле представляет собой комбинацию из 7 моле региона: черный моле, желтый моле, красный моле, зеленый моле, красный моле, чичилло моле и тушеный моле.'
    }
  },
  {
    id: '0nlefq',
    type: 'text',
    question: '¿Cuáles son los ingredientes del mole?',
    answer:
      'Chocolate amargo, chile ancho, chile mulato, chile pasilla, chipotle, jitomate, almendra, plátano, nueces, pasas, ajonjolí, clavo, canela, perejil, pimienta, cebolla, ajo',
    ru: {
      question: 'Какие ингредиенты входят в моле?',
      answer:
        'Горький шоколад, анчо чили, мулато чили, пасилья чили, чипотле, помидор, миндаль, банан, орехи, изюм, кунжут, гвоздика, корица, петрушка, перец, лук, чеснок'
    }
  },
  {
    id: '1ulju',
    type: 'choice',
    question: '¿Qué es la guanábana?',
    answer: 'Fruta de cáscara verde y pulpa blanca',
    options: [
      'Bebida refrescante del estado de Veracruz',
      'Platillo típico de Tlaxcala preparado con maíz y carne de pollo',
      'Dulce tradicional duranguense a base de leche de cabra'
    ],
    ru: {
      question: 'Что такое гуанабана?',
      answer: 'Фрукт с зеленой кожурой и белой мякотью',
      options: [
        'Освежающий напиток из штата Веракрус',
        'Типичное блюдо из Тласкалы, приготовленное из кукурузы и куриного мяса',
        'Традиционный дессерт из Дуранго на основе козьего молока'
      ]
    }
  },
  {
    id: 'duot1',
    type: 'choice',
    question: 'Postre típico a base de harina de trigo',
    answer: 'Buñuelos',
    options: ['Chongos zamoranos', 'Alegría', 'Ate'],
    ru: {
      question: 'Типичный десерт из пшеничной муки',
      answer: 'Буньюэлос',
      options: ['Чонгос заморанос', 'Алегрия', 'Ате']
    }
  },
  {
    id: 'io7hf5',
    type: 'choice',
    question: 'Postre típico de Guadalajara',
    answer: 'Jericalla (Es similar al flan o crème brûlée)',
    options: [
      'Gelatina Jalicience',
      'Chongos de Jalisco',
      'Palanquetas de cacahuate'
    ],
    note: 'Esta hecho a base de leche, huevos, vainilla, canela y azúcar.',
    ru: {
      question: 'Типичный десерт из Гвадалахары',
      answer: 'Херикайя (Похож на флан или крем-брюле)',
      options: [
        'Желатин из Халиско',
        'Чонгос из Халиско',
        'Арахисовые паланкетас'
      ],
      note: 'Сделан из молока, яиц, ванили, корицы и сахара.'
    }
  },
  {
    id: 'kigymc',
    type: 'choice',
    question: 'Dulce típico de Guanajuato',
    answer: 'Charamuscas',
    options: ['Obleas', 'Cocadas', 'Dulces de alfeñique'],
    ru: {
      question: 'Типичная сладость из Гуанахуато',
      answer: 'Чарамускас',
      options: ['Облеас', 'Кокадас', 'Альфенике']
    }
  },
  {
    id: 'lr3tzh',
    type: 'choice',
    question: 'Dulce típico de Pachuca, Hidalgo',
    answer: 'Palanquetas (barras/turrón de cacahuate)',
    options: [
      'Jamoncillo (semillas de calabaza y piñón)',
      'Muéganos (trozos de harina pegados con dulce)',
      'Gallo (pepita de calavaza en forma de gallito)'
    ],
    ru: {
      question: 'Типичный сладость из Пачука, Идальго',
      answer: 'Паланкетас (батончики/нуга из арахиса)',
      options: [
        'Хамонсильо (семена тыквы и пинии)',
        'Муэганос (кусочки муки, склеенные сладостью)',
        'Гайо (тыквенные семечки в форме петушка)'
      ]
    }
  },
  {
    id: 'twmbsd',
    type: 'choice',
    question: '¿Qué es la cajeta?',
    answer: 'Dulce de leche quemada de cabra',
    options: [
      'Dulce de tortilla con azúcar',
      'Dulce de amaranto con miel',
      'Dulce de leche con coco'
    ],
    ru: {
      question: 'Что такое кахета?',
      answer: 'Карамелизованное козье молоко',
      options: [
        'Сладость из тортильи с сахаром',
        'Сладость из амаранта с медом',
        'Сладость из молока с кокосом'
      ]
    }
  },
  {
    id: 'eualk',
    type: 'choice',
    question: '¿De dónde es el queso menonita?',
    answer: 'Chihuahua',
    options: ['Coahuila', 'Sonora', 'Colima'],
    ru: {
      question: 'Откуда происходит менонитский сыр?',
      answer: 'Чиуауа',
      options: ['Коауила', 'Сонора', 'Колима']
    }
  },
  {
    id: 'maf0ej',
    type: 'choice',
    question: '¿De dónde es típico el queso de tuna?',
    answer: 'San Luis Potosí',
    options: ['Hidalgo', 'Quintana Roo', 'Querétaro'],
    ru: {
      question: 'Где типичен сыр из тунца?',
      answer: 'Сан-Луис-Потоси',
      options: ['Идальго', 'Кинтана-Роо', 'Керетаро']
    }
  }
];
