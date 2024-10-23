import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: 'Bebida típica de México',
    answer: 'Tequila',
    options: ['Vodka', 'Whisky', 'Mojito'],
    type: 'choice',
    id: 'rtt498',
    ru: {
      question: 'Типичный напиток Мексики',
      answer: 'Текила',
      options: ['Водка', 'Виски', 'Мохито']
    }
  },
  {
    question:
      'Comida típica de México que está hecha a base de harina de maíz y se envuelve en hoja de plátano',
    answer: 'Tamal',
    options: ['Pozole', 'Sopitos', 'Tatemado'],
    type: 'choice',
    id: '0tk2bj',
    ru: {
      question:
        'Типичное мексиканское блюдо из кукурузной муки, завернутое в банановый лист',
      answer: 'Тамаль',
      options: ['Позоле', 'Сопитос', 'Татемадо']
    }
  },
  {
    question: '¿Qué son escamoles?',
    answer: 'Huevos de hormiga',
    note: 'Son huevos de la hormiga güijera, apreciadas en México desde tiempos prehispánicos. Las hormigas escamoleras son muy agresivas, lo cual, dificulta su explotación y hace de los escamoles un platillo caro.',
    options: ['Gusanos', 'Grillos', 'Avispas'],
    type: 'choice',
    id: 'kc1i08',
    ru: {
      question: 'Что такое эскамолес?',
      answer: 'Яйца муравьев',
      options: ['Черви', 'Сверчки', 'Осы'],
      note: 'Это яйца муравьев güijera, ценимые в Мексике с доиспанских времен. Муравьи эскамолеры очень агрессивны, что затрудняет их добычу и делает эскамолес дорогим блюдом.'
    }
  },
  {
    question: 'Productos originarios de México',
    answer: 'Chocolate, aguacate, tomate, pavo',
    options: [
      'Frijol, tomate, nopal, cerezas',
      'Jicama, vainilla, cafe, jalapeños',
      'Maiz, aguacate, quinoa, trigo'
    ],
    type: 'choice',
    id: '2i8j5l',
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
    question: 'Dulce típico de Xochimilco hecho de amaranto',
    answer: 'Alegría',
    options: ['Chocolate de mesa', 'Tamarindo enchilado', 'Mazapán'],
    type: 'choice',
    id: 'sm08sx',
    ru: {
      question: 'Типичный сладость из Сочимилько, сделанный из амаранта',
      answer: 'Алегрия',
      options: ['Столовый шоколад', 'Тамаринд с чили', 'Мазапан']
    }
  },
  {
    question:
      '¿Cuál es el nombre del caldo mexicano elaborado con granos de maíz?',
    answer: 'Pozole',
    options: ['Tatemado', 'Birria', 'Sopa azteca'],
    type: 'choice',
    id: 'jf4ubs',
    ru: {
      question:
        'Как называется мексиканский суп, приготовленный из кукурузных зерен?',
      answer: 'Позоле',
      options: ['Татемадо', 'Биррия', 'Ацтекский суп']
    }
  },
  {
    question: '¿De dónde es originaria la ensalada de noche buena?',
    answer: 'Michoacán',
    options: ['Jalisco', 'Chihuahua', 'Yucatán'],
    type: 'choice',
    id: 'tqrhg',
    ru: {
      question: 'Откуда родом рождественский салат?',
      answer: 'Мичоакан',
      options: ['Халиско', 'Чиуауа', 'Юкатан']
    }
  },
  {
    question: 'Bebidas sacadas del agave',
    answer: 'Tequila y mezcal',
    options: ['Tequila y horchata', 'Pulque y tonayan', 'Tejuino y tequila'],
    type: 'choice',
    id: '80ah7',
    ru: {
      question: 'Напитки из агавы',
      answer: 'Текила и мескаль',
      options: ['Текила и орчата', 'Пульке и тонайан', 'Техуино и текила']
    }
  },
  {
    question: 'Platillos mexicanos a base de tortilla',
    answer: 'Sopes, tlacoyos, memelas',
    note: 'También: tacos, quesadillas, tostadas, flautas, panuchos, enchiladas, enfrijoladas.',
    options: [
      'Sopes, tlacoyos, pozole',
      'Mole, tlacoyos, memelas',
      'Sopes, barbacoa, memelas'
    ],
    type: 'choice',
    id: 'ot6jzr',
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
    question: '¿Qué son memelas?',
    answer: 'Tortillas de maíz ovaladas (Puebla)',
    options: [
      'Caldo de maíz generalmente con carne de cerdo',
      'Enchiladas potosinas',
      'Postre michoacano a base de leche'
    ],
    type: 'choice',
    id: '47n3me',
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
    question:
      '¿De dónde son originarios la sopa de lima, los panuchos y la cochinita pibil?',
    answer: 'Yucatán',
    options: ['Colima', 'Tamaulipas', 'Baja California Sur'],
    type: 'choice',
    id: '42i2f',
    ru: {
      question: 'Откуда родом суп из лайма, панучос и кочинита пибиль?',
      answer: 'Юкатан',
      options: ['Колима', 'Тамаулипас', 'Баха Калифорния Сур']
    }
  },
  {
    question: 'Plato típico de Monterrey',
    answer: 'El Cabrito',
    options: ['Birria', 'Barbacoa', 'Discada'],
    type: 'choice',
    id: 'pb4qvt',
    ru: {
      question: 'Типичное блюдо Монтеррея',
      answer: 'Эль Кабрито',
      options: ['Биррия', 'Барбакоа', 'Дискада']
    }
  },
  {
    question: 'El cabrito y la machaca son platos originarios de',
    answer: 'Nuevo León',
    options: ['Sinaloa', 'Guerrero', 'San Luis Potosí'],
    type: 'choice',
    id: 'g3wj',
    ru: {
      question: 'Эль Кабрито и Мачака — блюда, происходящие из',
      answer: 'Нуэво-Леон',
      options: ['Синалоа', 'Герреро', 'Сан-Луис-Потоси']
    }
  },
  {
    question:
      'Lugar dónde son tradicionales los tamales de queso para el día de muertos',
    answer: 'San Luis Potosí',
    options: ['Tabasco', 'Zacatecas', 'Michoacán'],
    type: 'choice',
    id: '3ynb1i',
    ru: {
      question: 'Место, где традиционны сырные тамалес на День мертвых',
      answer: 'Сан-Луис-Потоси',
      options: ['Табаско', 'Сакатекас', 'Мичоакан']
    }
  },
  {
    question: '¿De dónde es originario el Chile en Nogada?',
    answer: 'Puebla',
    options: ['Chiapas', 'Sonora', 'Oaxaca'],
    type: 'choice',
    id: '49u8dh',
    ru: {
      question: 'Откуда родом Чили эн Ногада?',
      answer: 'Пуэбла',
      options: ['Чьяпас', 'Сонора', 'Оахака']
    }
  },
  {
    question: 'Nombre de 3 platos típicos poblanos',
    answer: 'Mole poblano, chiles en nogada, chalupas',
    options: [
      'Mole negro de puebla, Cabrito, memelas',
      'Tamales, enchiladas poblanas, tacos dorados',
      'Entamalados, enchiladas poblanas, sopes'
    ],
    type: 'choice',
    id: 'cq2kqh',
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
    question: 'Plato típico de Veracruz',
    answer: 'Zacahuil',
    options: ['Cabrito', 'Mole veracruzano', 'Tamales Jarochos'],
    type: 'choice',
    id: '3fx8l',
    ru: {
      question: 'Типичное блюдо Веракруса',
      answer: 'Закахуиль',
      options: ['Кабрито', 'Веракрусанский моле', 'Харочские тамалес']
    }
  },
  {
    question: '¿Qué insectos son comestibles?',
    answer:
      'Chapulines (saltamontes), escamoles (huevos de hormiga), jumiles, gusanos de maguey',
    options: [
      'Mosquito tigre, jumiles',
      'Avispas amarillas, gusanos de maguey',
      'Escamoles, arañas'
    ],
    type: 'choice',
    id: '2rb6fl',
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
    question: 'Bebida prehispánica conocida como curado',
    answer: 'Pulque',
    options: ['Tequila', 'Tejuino', 'Jocoque'],
    type: 'choice',
    id: '4fk6wq',
    ru: {
      question: 'Доиспанский напиток, известный как курадо',
      answer: 'Пульке',
      options: ['Текила', 'Техуино', 'Жококе']
    }
  },
  {
    question: 'Bebida sacada del maguey',
    answer: 'Pulque',
    options: ['Tejuino', 'Jocoque', 'Tehuical'],
    type: 'choice',
    id: 'v6fvle',
    ru: {
      question: 'Напиток из магея',
      answer: 'Пульке',
      options: ['Техуино', 'Жококе', 'Техуикаль']
    }
  },
  {
    question: '¿Cuál es el ingrediente principal del mole?',
    answer: 'Chocolate amargo',
    options: ['Ajonjolí', 'Pimienta', 'Leche'],
    type: 'choice',
    id: 'cfzjkc',
    ru: {
      question: 'Какой основной ингредиент у моле?',
      answer: 'Горький шоколад',
      options: ['Кунжут', 'Перец', 'Молоко']
    }
  },
  {
    question: '¿De dónde es el platillo de los 7 moles?',
    answer: 'Oaxaca',
    note: 'Se considera que el mole oaxaqueño es la combinación de 7 moles de la región: mole negro, mole amarillo, mole colorado, mole verde, mole rojo, mole chichillo y mole estofado.',
    options: ['Puebla', 'Sonora', 'Chiapas'],
    type: 'choice',
    id: 'tex1wl',
    ru: {
      question: 'Откуда родом блюдо из 7 моле?',
      answer: 'Оахака',
      options: ['Пуэбла', 'Сонора', 'Чьяпас'],
      note: 'Считается, что оахаканский моле представляет собой комбинацию из 7 моле региона: черный моле, желтый моле, красный моле, зеленый моле, красный моле, чичилло моле и тушеный моле.'
    }
  },
  {
    question: '¿Qué es la guanábana?',
    answer: 'Fruta de cáscara verde y pulpa blanca',
    options: [
      'Bebida refrescante del estado de Veracruz',
      'Platillo típico de Tlaxcala preparado con maíz y carne de pollo',
      'Dulce tradicional duranguense a base de leche de cabra'
    ],
    type: 'choice',
    id: '1ulju',
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
    question: 'Postre típico a base de harina de trigo',
    answer: 'Buñuelos',
    options: ['Chongos zamoranos', 'Alegría', 'Ate'],
    type: 'choice',
    id: 'duot1',
    ru: {
      question: 'Типичный десерт из пшеничной муки',
      answer: 'Буньюэлос',
      options: ['Чонгос заморанос', 'Алегрия', 'Ате']
    }
  },
  {
    question: 'Postre típico de Guadalajara',
    answer: 'Jericalla (Es similar al flan o crème brûlée)',
    note: 'Esta hecho a base de leche, huevos, vainilla, canela y azúcar.',
    options: [
      'Gelatina Jalicience',
      'Chongos de Jalisco',
      'Palanquetas de cacahuate'
    ],
    type: 'choice',
    id: 'io7hf5',
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
    question: 'Dulce típico de Guanajuato',
    answer: 'Charamuscas',
    options: ['Obleas', 'Cocadas', 'Dulces de alfeñique'],
    type: 'choice',
    id: 'kigymc',
    ru: {
      question: 'Типичная сладость из Гуанахуато',
      answer: 'Чарамускас',
      options: ['Облеас', 'Кокадас', 'Альфенике']
    }
  },
  {
    question: 'Dulce típico de Pachuca, Hidalgo',
    answer: 'Palanquetas (barras/turrón de cacahuate)',
    options: [
      'Jamoncillo (semillas de calabaza y piñón)',
      'Muéganos (trozos de harina pegados con dulce)',
      'Gallo (pepita de calavaza en forma de gallito)'
    ],
    type: 'choice',
    id: 'lr3tzh',
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
    question: '¿Qué es la cajeta?',
    answer: 'Dulce de leche quemada de cabra',
    options: [
      'Dulce de tortilla con azúcar',
      'Dulce de amaranto con miel',
      'Dulce de leche con coco'
    ],
    type: 'choice',
    id: 'twmbsd',
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
    question: '¿De dónde es el queso menonita?',
    answer: 'Chihuahua',
    options: ['Coahuila', 'Sonora', 'Colima'],
    type: 'choice',
    id: 'eualk',
    ru: {
      question: 'Откуда происходит менонитский сыр?',
      answer: 'Чиуауа',
      options: ['Коауила', 'Сонора', 'Колима']
    }
  },
  {
    question: '¿De dónde es típico el queso de tuna?',
    answer: 'San Luis Potosí',
    options: ['Hidalgo', 'Quintana Roo', 'Querétaro'],
    type: 'choice',
    id: 'maf0ej',
    ru: {
      question: 'Где типичен сыр из тунца?',
      answer: 'Сан-Луис-Потоси',
      options: ['Идальго', 'Кинтана-Роо', 'Керетаро']
    }
  }
];
