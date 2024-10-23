import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Qué es una tienda de abarrotes?',
    answer:
      'Lugar donde venden productos de uso cotidiano, viveres, articulos de limpieza, etc',
    options: [
      'Venta de inciensos',
      'Tienda de ropa económica',
      'Donde compras zapatos al mayor'
    ],
    type: 'choice',
    id: '3ij6ef',
    ru: {
      question: 'Что такое магазин абарротес?',
      answer:
        'Место, где продают товары повседневного использования, продукты, чистящие средства и т.д.',
      options: [
        'Продажа благовоний',
        'Магазин дешевой одежды',
        'Где покупают обувь оптом'
      ]
    }
  },
  {
    question: 'Historieta mexicana creada por Gabriel Vargas',
    answer: 'La Familia Burrón',
    note: 'Comenzó en 1948 y el último número apareció en 2009, más de 60 años de publicación ininterrumpida. Aborda las aventuras de una familia de clase baja de la Ciudad de México.',
    options: ['Archie', 'Mafalda', 'Spiderman', 'Heidi'],
    type: 'choice',
    id: 'of7v37',
    ru: {
      question: 'Мексиканский комикс, созданный Габриэлем Варгасом',
      answer: 'Семья Буррон',
      options: ['Арчи', 'Маффальда', 'Человек-паук', 'Хайди'],
      note: 'Начался в 1948 году, последний выпуск вышел в 2009 году, более 60 лет непрерывной публикации. Рассказ о приключениях семьи из низшего класса города Мехико.'
    }
  },
  {
    question: 'Día de la Virgen de Guadalupe',
    answer: '12 de Diciembre',
    options: ['16 de Septiembre', '20 de Noviembre', '10 de Mayo'],
    type: 'choice',
    id: 'wj038d',
    ru: {
      question: 'День Девы Гваделупской',
      answer: '12 декабря',
      options: ['16 сентября', '20 ноября', '10 мая']
    }
  },
  {
    question:
      '¿Como se le conoce popularmente a los habitantes de la Ciudad de México?',
    answer: 'Chilangos',
    options: ['Porteños', 'Pipope', 'Regios'],
    type: 'choice',
    id: 'ksyvo',
    ru: {
      question: 'Как популярно называют жителей Мехико?',
      answer: 'Чиланго',
      options: ['Портеньос', 'Пипопе', 'Региос']
    }
  },
  {
    question:
      'Nombre de las embarcaciones coloridas con flores que se usan en Xochimilco, populares para los turistas',
    answer: 'Trajineras',
    options: ['Chinampa', 'Barcazas', 'Buques'],
    type: 'choice',
    id: '9laxw6',
    ru: {
      question:
        'Название красочных лодок с цветами, используемых в Сочимилько, популярных среди туристов',
      answer: 'Трахинерас',
      options: ['Чинампа', 'Баркасы', 'Суда']
    }
  },
  {
    question: 'Otro modo de llamar a la base o lugar de taxis en México',
    answer: 'Sitios',
    options: ['Estacionamiento', 'Planta', 'Taxímetro'],
    type: 'choice',
    id: '3x0fioi',
    ru: {
      question: 'Другой способ назвать стоянку такси в Мексике',
      answer: 'Сито',
      options: ['Парковка', 'Завод', 'Таксометр']
    }
  },
  {
    question:
      'Pan en forma de rosca, adornado con frutas, contiene figuritas y se come en la celebración de',
    answer: 'El día de reyes',
    note: '6 de Enero.',
    options: ['Navidad', 'Año nuevo', 'Semana Santa'],
    type: 'choice',
    id: 'z0m4nc',
    ru: {
      question:
        'Хлеб в форме кольца, украшенный фруктами, содержит фигурки и едят на праздновании',
      answer: 'Дня волхвов',
      options: ['Рождества', 'Нового года', 'Страстной недели'],
      note: '6 января.'
    }
  },
  {
    question:
      'Tiene forma de estrella, se llena de dulces y de juguetes, se usa en cumpleaños y durante los días previos a la Navidad, se golpea con un palo',
    answer: 'Piñata',
    note: 'Los siete picos simbolizan los siete pecados capitales: pereza, envidia, gula, ira, lujuria, avaricia y soberbia.',
    options: ['Bolo', 'Pachanga', 'Posada'],
    type: 'choice',
    id: 'vbj329',
    ru: {
      question:
        'Имеет форму звезды, наполняется сладостями и игрушками, используется на днях рождения и в дни перед Рождеством, бьют палкой',
      answer: 'Пиньята',
      options: ['Боло', 'Пачанга', 'Посада'],
      note: 'Семь вершин символизируют семь смертных грехов: лень, зависть, обжорство, гнев, похоть, жадность и гордыню.'
    }
  },
  {
    question: 'Flor de color rojo típica de navidad',
    answer: 'Nochebuena',
    options: ['Cempasúchil', 'Dalia', 'Magnolia'],
    type: 'choice',
    id: 'oizu1a',
    ru: {
      question: 'Типичный рождественский красный цветок',
      answer: 'Пуансеттия',
      options: ['Цемпасучиль', 'Георгин', 'Магнолия']
    }
  },
  {
    question: '¿De dónde proviene el mariachi?',
    answer: 'Jalisco',
    options: ['Oaxaca', 'Zacatecas', 'Michoacán', 'Guanajuato'],
    type: 'choice',
    id: 'xowyri',
    ru: {
      question: 'Откуда происходит мариачи?',
      answer: 'Халиско',
      options: ['Оахака', 'Сакатекас', 'Мичоакан', 'Гуанахуато']
    }
  },
  {
    question: '¿Qué significa México?',
    answer: 'En el ombligo de la luna / En el centro del Lago de la Luna',
    type: 'text',
    id: 'xreg2x',
    ru: {
      question: 'Что означает Мексика?',
      answer: 'В пупке луны / В центре озера Луны'
    }
  },
  {
    question: '¿A qué se le llama fonda?',
    answer: 'A un pequeño restaurante económico',
    options: ['A un hostal', 'A un carro pequeño', 'A un barrio popular'],
    type: 'choice',
    id: 'j34dgo',
    ru: {
      question: 'Что называют фондой?',
      answer: 'Маленький экономичный ресторан',
      options: ['Хостел', 'Маленькая машина', 'Популярный район']
    }
  },
  {
    question: 'Lugar donde se come a precios bajos',
    answer: 'Fonda',
    options: ['Pujol', 'Mexique', 'Oxte'],
    type: 'choice',
    id: 'xplrtr',
    ru: {
      question: 'Место, где можно поесть по низким ценам',
      answer: 'Фонда',
      options: ['Пухоль', 'Мексик', 'Охте']
    }
  },
  {
    question: 'En México, una tlapalería es',
    answer: 'Una tienda de pinturas y solventes, ferretería',
    options: [
      'Una heladería',
      'Una tienda de tlacuaches',
      'Un tipo de restaurante'
    ],
    type: 'choice',
    id: '5n6w2r',
    ru: {
      question: 'В Мексике, tlapalería это',
      answer: 'Магазин красок и растворителей, хозяйственный магазин',
      options: ['Мороженое', 'Магазин тлакуачей', 'Тип ресторана']
    }
  },
  {
    question:
      'Perro originario de México o nombre de raza de perro prehispánico de poco pelo',
    answer: 'Xoloitzcuintle',
    options: ['Chihuahua', 'Techichi', 'Calupoh'],
    type: 'choice',
    id: 'yya656',
    ru: {
      question:
        'Собака, родом из Мексики или название породы доиспанской собаки с короткой шерстью',
      answer: 'Шолоицкуинтли',
      options: ['Чихуахуа', 'Течичи', 'Калупох']
    }
  },
  {
    question: 'El vocablo "chaparro" significa',
    answer: 'Bajo de estatura',
    options: ['Alto', 'Originario del Chaparro', 'Santurron'],
    type: 'choice',
    id: 'fez81l',
    ru: {
      question: 'Слово "чапарро" означает',
      answer: 'Низкорослый',
      options: ['Высокий', 'Родом из Чапарро', 'Святоша']
    }
  },
  {
    question: '¿Qué es una bomba Yucateca?',
    answer:
      'Comúnmente las "bombas" son rimas. Estos versos son recitados de manera improvisada y pueden ser románticos, jocosos e inclusive melosos, pero nunca groseros. En ocasiones llegan a causar risa por su composición a manera de broma o descaro.',
    type: 'text',
    id: '3tobod',
    ru: {
      question: 'Что такое юкатанская бомба?',
      answer:
        'Обычно "бомбы" - это рифмы. Эти стихи произносятся импровизированно и могут быть романтическими, шутливыми или даже сладкими, но никогда не грубыми. Иногда они вызывают смех из-за своей шутливости или дерзости.'
    }
  },
  {
    question:
      'En el habla popular de México, el término "marchante(a)" se refiere a',
    answer:
      'Un término que se utiliza en los mercados populares y es sinónimo indistintamente de vendedor o cliente',
    options: [
      'Una persona que tiene mucho optimismo',
      'Un vendedor de obras de arte',
      'Un bailarín'
    ],
    type: 'choice',
    id: '2f7t5m',
    ru: {
      question: 'В разговорной речи Мексики, термин "marchante(a)" относится к',
      answer:
        'Термин, используемый на популярных рынках и является синонимом продавца или клиента',
      options: [
        'Человек, который очень оптимистичен',
        'Продавец произведений искусства',
        'Танцор'
      ]
    }
  },
  {
    question: 'La palabra "Jarocho" alude a que es propio de',
    answer: 'Veracruz',
    options: ['Chiapas', 'Campeche', 'Oaxaca'],
    type: 'choice',
    id: 'kxkane',
    ru: {
      question: 'Слово "Jarocho" означает, что оно родом из',
      answer: 'Веракрус',
      options: ['Чьяпас', 'Кампече', 'Оахака']
    }
  },
  {
    question: '¿Qué significa papalote?',
    answer: 'Mariposa en Náhuatl',
    options: ['Papa', 'Papagayo', 'Jitomate'],
    type: 'choice',
    id: 'zalpk',
    ru: {
      question: 'Что означает папалоте?',
      answer: 'Бабочка на языке науатль',
      options: ['Картофель', 'Попугай', 'Помидор']
    }
  },
  {
    question: '¿Qué es el metate?',
    answer:
      'Es un utensilio de cocina utilizado en diversas culturas (Maya, mexica, etc) y hasta la actualidad. Se compone de dos elementos: el metate, es decir, una plancha rectangular y el metlapile, el rodillo cilíndrico que se agarra con ambas manos. Se emplea para moler maíz, chiles, especias, etc',
    type: 'text',
    id: '8g97ki',
    ru: {
      question: 'Что такое метате?',
      answer:
        'Это кухонный инструмент, использовавшийся в различных культурах (майя, миштеки и др.) и до настоящего времени. Состоит из двух элементов: метате, то есть прямоугольной плиты, и метлапиле, цилиндрического ролика, который держат обеими руками. Используется для измельчения кукурузы, чили, специй и т.д.'
    }
  },
  {
    question: '¿Qué es la Guelaguetza?',
    answer:
      'Es una fiesta conocida como los lunes del cerro que se celebra dos lunes de julio cercanos al día de la Virgen del Carmen en Oaxaca. Guelaguetza es una palabra Zapoteca que denota el acto de participar cooperando; es un don gratuito que no lleva consigo más obligación que la de la reciprocidad. Se refiere a la cortesía y atención con que se debe tratar a los demás, se relaciona con el compartir, la cortesía, cooperar y los presentes o regalos.',
    type: 'text',
    id: 'sd674',
    ru: {
      question: 'Что такое Гуэлагетца?',
      answer:
        'Это праздник, известный как понедельники на холме, который отмечается два понедельника июля, близкие ко дню Девы Кармен в Оахаке. Гуэлагетца - это слово сапотеков, обозначающее акт участия в сотрудничестве; это бесплатный подарок, не подразумевающий никаких обязательств, кроме взаимности. Оно относится к вежливости и внимательности в обращении с другими, связано с дележом, вежливостью, сотрудничеством и подарками.'
    }
  },
  {
    question: '¿De dónde es la Guelaguetza?',
    answer: 'Oaxaca',
    options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
    type: 'choice',
    id: 'bubij',
    ru: {
      question: 'Откуда Гуэлагетца?',
      answer: 'Оахака',
      options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
    }
  },
  {
    question:
      '¿Cuál es la representación religiosa que se realiza en Iztapalapa?',
    answer: 'La Pasión de Cristo',
    options: ['la Anunciación', 'El Bautismo', 'El Juicio'],
    type: 'choice',
    id: 'w4uj7',
    ru: {
      question: 'Какое религиозное представление проводится в Истапалапе?',
      answer: 'Страсти Христовы',
      options: ['Благовещение', 'Крещение', 'Суд']
    }
  },
  {
    question: '¿Dónde se celebra la Pasión de Cristo en CDMX?',
    answer: 'Iztapalapa',
    options: ['Coyoacán', 'Iztacalco', 'Cuajimalpa'],
    type: 'choice',
    id: '5yuul',
    ru: {
      question: 'Где в Мехико отмечают Страсти Христовы?',
      answer: 'Истапалапа',
      options: ['Койоакан', 'Истакалько', 'Куахимальпа']
    }
  },
  {
    question: '¿Cuál es el baile nacional de México?',
    answer: 'Jarabe Tapatío',
    options: ['El Huapango', 'La Jarana', 'La Danza de los Viejitos'],
    type: 'choice',
    id: '7kytj',
    ru: {
      question: 'Какой танец является национальным танцем Мексики?',
      answer: 'Харабе Тапатио',
      options: ['Уапанго', 'Харана', 'Танец стариков']
    }
  },
  {
    question: 'Baile de Jalisco',
    answer: 'Jarabe Tapatío',
    options: ['El Huapango', 'La Jarana', 'La Danza de los Viejitos'],
    type: 'choice',
    id: 'wtjfbh',
    ru: {
      question: 'Танец Халиско',
      answer: 'Харабе Тапатио',
      options: ['Уапанго', 'Харана', 'Танец стариков']
    }
  },
  {
    question: 'Jarana es un baile de o Jarana es una manifestación de',
    answer: 'Yucatán',
    options: ['Chiapas', 'Campeche', 'Oaxaca'],
    type: 'choice',
    id: 'cnwkpn',
    ru: {
      question: 'Харана - это танец или проявление',
      answer: 'Юкатан',
      options: ['Чьяпас', 'Кампече', 'Оахака']
    }
  },
  {
    question: '¿De dónde es la danza del venado?',
    answer: 'Sonora',
    options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
    type: 'choice',
    id: 'gbrvkd',
    ru: {
      question: 'Откуда танец оленя?',
      answer: 'Сонора',
      options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
    }
  },
  {
    question: '¿De dónde es el baile de los viejitos?',
    answer: 'Michoacán',
    options: ['Zacatecas', 'Oaxaca', 'Nuevo León'],
    type: 'choice',
    id: 'ixslb6',
    ru: {
      question: 'Откуда танец стариков?',
      answer: 'Мичоакан',
      options: ['Сакатекас', 'Оахака', 'Нуэво-Леон']
    }
  },
  {
    question: '¿De dónde es el baile de la piña o baile flor de piña?',
    answer: 'Oaxaca',
    options: ['Chiapas', 'Campeche', 'Yucatán'],
    type: 'choice',
    id: '1kyxvr',
    ru: {
      question: 'Откуда танец ананаса или танец цветка ананаса?',
      answer: 'Оахака',
      options: ['Чьяпас', 'Кампече', 'Юкатан']
    }
  },
  {
    question: '¿Qué son los voladores de Papantla?',
    answer: 'Danza Indígena de Veracruz',
    options: [
      'Aviones de Papantla',
      'Plato típico de Papantla',
      'Fuegos artificiales de Papantla'
    ],
    type: 'choice',
    id: '1ei18',
    ru: {
      question: 'Что такое voladores de Papantla?',
      answer: 'Индейский танец из Веракруса',
      options: [
        'Самолеты из Папантлы',
        'Типичное блюдо Папантлы',
        'Фейерверки Папантлы'
      ]
    }
  },
  {
    question:
      'Ritual que está asociado a la fertilidad, se ejecuta con cuatro danzantes que representan los cuatro puntos cardinales y el caporal.',
    answer: 'Los voladores de Papantla',
    note: 'La fertilidad se representa mediante el descenso de los danzantes, que simbolizan la caída de la lluvia. Se utiliza un tronco o "palo volador" de más de 20 metros. En lo alto de la estructura, se sitúa el caporal, personaje que toca un tambor y una flauta, y coordina el ritual.',
    options: [
      'Los voladores de Oaxaca',
      'Los voladores de Zacatecas',
      'Los voladores de Colima'
    ],
    type: 'choice',
    id: 'wvlk1',
    ru: {
      question:
        'Ритуал, связанный с плодородием, выполняется четырьмя танцорами, представляющими четыре стороны света, и капоралем.',
      answer: 'Летчики Папантлы',
      options: ['Летчики Оахаки', 'Летчики Сакатекаса', 'Летчики Колимы'],
      note: 'Плодородие представлено спуском танцоров, символизирующим падение дождя. Используется ствол или "летучий столб" высотой более 20 метров. Наверху конструкции находится капораль, который играет на барабане и флейте и координирует ритуал.'
    }
  },
  {
    question:
      'Una festividad que es patrimonio intangible de la humanidad o fiesta inscrita en el patrimonio cultural',
    answer: 'Día de Muertos',
    options: [
      'Carnaval de Veracruz',
      'Día de la Candelaria',
      'Lucha libre mexicana'
    ],
    type: 'choice',
    id: '87xo3',
    ru: {
      question:
        'Праздник, который является нематериальным наследием человечества или включен в культурное наследие',
      answer: 'День мертвых',
      options: [
        'Карнавал в Веракрусе',
        'День Канделарии',
        'Мексиканская борьба'
      ]
    }
  },
  {
    question: 'Nombre de la flor que se usa el día de muertos',
    answer: 'Cempasúchil',
    note: 'Comúnmente de color amarillo o naranja.',
    options: ['Nochebuena', 'Dalia', 'Magnolia'],
    type: 'choice',
    id: 'qvrsn',
    ru: {
      question: 'Название цветка, который используется в День мертвых',
      answer: 'Цемпасучиль',
      options: ['Пуансеттия', 'Георгин', 'Магнолия'],
      note: 'Обычно желтого или оранжевого цвета.'
    }
  },
  {
    question:
      'Versos festivos que se escriben en noviembre con motivo del día de muertos',
    answer: 'Calaveras o Calaveritas',
    options: ['Poesias', 'Bombas Yucatecas', 'Rimas'],
    type: 'choice',
    id: '4q1tgc',
    ru: {
      question:
        'Праздничные стихи, которые пишут в ноябре по случаю Дня мертвых',
      answer: 'Калаверы или Калаверитас',
      options: ['Стихи', 'Юкатанские бомбы', 'Рифмы']
    }
  },
  {
    question: 'Género música que pertenece al estado de Veracruz',
    answer: 'El Son Jarocho',
    options: ['Corridos', 'La Norteña', 'Ranchera'],
    type: 'choice',
    id: 'cvy71',
    ru: {
      question: 'Музыкальный жанр, который принадлежит штату Веракрус',
      answer: 'Сон Харочо',
      options: ['Корридо', 'Нортеña', 'Ранчера']
    }
  },
  {
    question:
      'Himno popular de la ciudad de Veracruz o canción popular de Veracruz',
    answer: 'La Bamba',
    options: [
      'México Lindo y Querido',
      'Canción Mixteca',
      'El Huapango de Moncayo'
    ],
    type: 'choice',
    id: '2iy41p',
    ru: {
      question:
        'Популярный гимн города Веракрус или популярная песня Веракруса',
      answer: 'Ла Бамба',
      options: ['Мексика Линдо и Керидо', 'Песня Миштека', 'Уапанго Монкайо']
    }
  },
  {
    question: 'Es costumbre cantar "Las golondrinas" para',
    answer: 'Despedir a alguien',
    options: [
      'Recibir a alguien',
      'Celebrar un cumpleaños',
      'Celebrar un triunfo'
    ],
    type: 'choice',
    id: 'r38hw',
    ru: {
      question: 'Принято петь "Лас Голондринас" чтобы',
      answer: 'Прощаться с кем-то',
      options: [
        'Встречать кого-то',
        'Праздновать день рождения',
        'Праздновать победу'
      ]
    }
  },
  {
    question: 'En los cumpleaños se suele cantar en homenaje al festejado',
    answer: 'Las mañanitas',
    options: ['Las golondrinas', 'Cumpleaños feliz', 'Serenatas'],
    type: 'choice',
    id: 's8s3lb',
    ru: {
      question: 'На днях рождения обычно поют в честь именинника',
      answer: 'Лас маньянитас',
      options: ['Лас Голондринас', 'С Днем Рождения', 'Серенады']
    }
  },
  {
    question: 'Las "posadas" son fiestas privadas o vecinales que se realizan',
    answer: 'Los días previos a la navidad',
    options: [
      'Los días de semana santa',
      'Durante año nuevo',
      'En vacaciones de verano'
    ],
    type: 'choice',
    id: 'zk169p',
    ru: {
      question:
        '"Посады" - это частные или соседские праздники, которые проводятся',
      answer: 'В дни перед Рождеством',
      options: [
        'В дни Страстной недели',
        'Во время Нового года',
        'На летних каникулах'
      ]
    }
  },
  {
    question: '¿Qué se celebra el 10 de mayo?',
    answer: 'El día de las madres',
    options: ['El día del padre', 'El día del niño', 'El día de la candelaria'],
    type: 'choice',
    id: 'z63u7s',
    ru: {
      question: 'Что отмечается 10 мая?',
      answer: 'День матери',
      options: ['День отца', 'День ребенка', 'День Канделарии']
    }
  },
  {
    question: '¿Cuál fue la primera Miss Universo Mexicana?',
    answer: 'Maria Guadalupe Jones',
    note: 'Mejor conocida como Lupita Jones en el año de 1991.',
    options: ['Dayana Mendoza', 'Stefania Fernández', 'Gabriela Isler'],
    type: 'choice',
    id: '1zzqvcq',
    ru: {
      question: 'Кто была первой мексиканкой, ставшей Мисс Вселенная?',
      answer: 'Мария Гвадалупе Джонс',
      options: ['Дайана Мендоса', 'Стефания Фернандес', 'Габриэла Исслер'],
      note: 'Более известная как Лупита Джонс в 1991 году.'
    }
  },
  {
    question: '¿Quiénes fueron las mexicanas ganadoras del Miss Universo?',
    answer:
      'Maria Guadalupe (Lupita) Jones (1991), Ximena Navarrete (2010), Andrea Meza (2020)',
    options: [
      'Dayana Mendoza (2008), Stefania Fernández (2009), Gabriela Isler (2013)',
      'Irene Sáez (1981), Bárbara Palacios (1986), Alicia Machado (1996)',
      'Taliana Vargas (2008), Ariadna Gutiérrez (2015), Laura González (2017)'
    ],
    type: 'choice',
    id: 'e3ogq',
    ru: {
      question:
        'Кто были мексиканками, победившими на конкурсе Мисс Вселенная?',
      answer:
        'Мария Гвадалупе (Лупита) Джонс (1991), Химена Наваррете (2010), Андреа Меза (2020)',
      options: [
        'Дайана Мендоса (2008), Стефания Фернандес (2009), Габриэла Исслер (2013)',
        'Ирен Саэс (1981), Барбара Палациос (1986), Алисия Мачадо (1996)',
        'Талиана Варгас (2008), Ариадна Гутьеррес (2015), Лаура Гонсалес (2017)'
      ]
    }
  },
  {
    question: '¿Qué significa el refrán: "A darle que es mole de olla"?',
    answer: 'Invitación a hacer alguna cosa con buen ánimo y sin demora',
    options: [
      'Empezar a comer pronto',
      'Ir a una fiesta local',
      'Compartir un platillo de mole poblano'
    ],
    type: 'choice',
    id: 'odn3u',
    ru: {
      question: 'Что означает пословица: "A darle que es mole de olla"?',
      answer: 'Приглашение сделать что-то с хорошим настроением и без задержек',
      options: [
        'Начать есть поскорее',
        'Пойти на местный праздник',
        'Разделить блюдо из моле поблано'
      ]
    }
  },
  {
    question:
      '¿Cómo se llama donde van a parar los fiesteros? (conductores alcoholizados)',
    answer: 'El torito',
    options: ['El becerrito', 'La vaquita', 'El corral'],
    type: 'choice',
    id: 'srd279',
    ru: {
      question:
        'Как называется место, куда отправляют гуляк? (пьяных водителей)',
      answer: 'Торито',
      options: ['Бесеррито', 'Вакита', 'Корраль']
    }
  },
  {
    question: 'Famoso callejón de Guanajuato',
    answer: 'El callejón del beso',
    options: [
      'Callejón del infierno',
      'Callejon del perro muerto',
      'Callejon de las ánimas'
    ],
    type: 'choice',
    id: 'jrigjp',
    ru: {
      question: 'Знаменитый переулок в Гуанахуато',
      answer: 'Переулок поцелуя',
      options: ['Переулок ада', 'Переулок мертвой собаки', 'Переулок душ']
    }
  },
  {
    question: 'Imagen religiosa más venerada en México',
    answer: 'La Virgen de Guadalupe',
    options: [
      'La Virgen de Zapopan',
      'La Virgen del Valle',
      'La Virgen del Carmen'
    ],
    type: 'choice',
    id: '2j5u9m',
    ru: {
      question: 'Самый почитаемый религиозный образ в Мексике',
      answer: 'Дева Гваделупская',
      options: ['Дева Запопанская', 'Дева Долины', 'Дева Кармельская']
    }
  },
  {
    question: '¿Cuántos Patrimonios Unesco tiene México?',
    answer: '35',
    note: 'Inscritos en la Lista de Patrimonio Mundial, de los cuales, 6 bienes son naturales (N), 27 bienes culturales y 2 mixtos (m).',
    options: ['15', '20', '25'],
    type: 'choice',
    id: 'c8b3h',
    ru: {
      question: 'Сколько объектов ЮНЕСКО имеет Мексика?',
      answer: '35',
      options: ['15', '20', '25'],
      note: 'Включены в Список всемирного наследия, из которых 6 объектов являются природными, 27 культурными и 2 смешанными.'
    }
  },
  {
    question: '¿Cuántos Patrimonios culturales Unesco tiene México?',
    answer: '27',
    options: ['15', '20', '25'],
    type: 'choice',
    id: 't2yzrf',
    ru: {
      question: 'Сколько культурных объектов ЮНЕСКО имеет Мексика?',
      answer: '27',
      options: ['15', '20', '25']
    }
  },
  {
    question:
      'Bienes naturales patrimonio de la humanidad según UNESCO en México',
    answer:
      'Sian ka’an, Quintana Roo (1987)\nSantuario de ballenas de El Vizcaíno, BCS (1993)\nIslas y áreas protegidas del Golfo de California (2005)\nReserva de la biósfera de la mariposa monarca, Michoacán/Estado de México (2008)\nReserva de la biósfera El pinacate y gran desierto de Altar, Sonora (2013)\nArchipiélago de Revillagigedo (2016)',
    type: 'text',
    id: '839hmi',
    ru: {
      question:
        'Природные объекты всемирного наследия по версии ЮНЕСКО в Мексике',
      answer:
        'Сиан Каан, Кинтана Роо (1987)\nСвятилище китов Эль-Вискайно, БКС (1993)\nОстрова и охраняемые районы Калифорнийского залива (2005)\nБиосферный заповедник бабочки-монарха, Мичоакан/Мехико (2008)\nБиосферный заповедник Эль Пинакате и Большая пустыня Алтар, Сонора (2013)\nАрхипелаг Ревилья-Гигедо (2016)'
    }
  },
  {
    question: 'Bienes mixtos patrimonio de la humanidad según UNESCO en México',
    answer:
      'Antigua Ciudad Maya y bosques tropicales protegidos de Calakmul, Campeche (2002, 2014)\nValle de Tehuacán -Cuicatlán: hábitat originario de Mesoamérica (2018)',
    type: 'text',
    id: 'tqzkz',
    ru: {
      question:
        'Смешанные объекты всемирного наследия по версии ЮНЕСКО в Мексике',
      answer:
        'Древний город майя и охраняемые тропические леса Калакмуль, Кампече (2002, 2014)\nДолина Теуакан-Куикатлан: родина Мезоамерики (2018)'
    }
  },
  {
    question:
      'Patrimonios intangibles, inmateriales de la humanidad según la UNESCO',
    answer:
      'Día de Muertos (2008)\nLa peregrinación a la peña de Bernal (2009)\nVoladores de Papantla (2009)\nLa Pirekua, canto tradicional de los Purépechas (2010)\nLos Parachicos en la fiesta tradicional de Enero de Chiapa de Corzo (2010)\nCocina Tradicional Mexicana de Michoacán (2010)\nEl Mariachi (2011)\nLa Charrería (2016)\nLa Romería de Zapopan (2018)',
    type: 'text',
    id: 'rgh655',
    ru: {
      question:
        'Нематериальное культурное наследие человечества по версии ЮНЕСКО',
      answer:
        'День мертвых (2008)\nПаломничество к скале Бернал (2009)\nЛетчики Папантлы (2009)\nПирекуа, традиционная песня пурепеча (2010)\nПарачикос на традиционном январском празднике Чьяпа-де-Корсо (2010)\nТрадиционная мексиканская кухня Мичоакана (2010)\nМариачи (2011)\nЧаррерия (2016)\nРомерия в Сапопане (2018)'
    }
  },
  {
    question: 'Zonas arqueológicas patrimonio de la humanidad según UNESCO',
    answer:
      'Palenque\nMonte Albán\nChichen Itzá\nTeotihuacán\nTajín\nUxmal\nXochicalco\n Calakmul',
    type: 'text',
    id: 'fu8gq',
    ru: {
      question: 'Археологические зоны всемирного наследия по версии ЮНЕСКО',
      answer:
        'Паленке\nМонте-Альбан\nЧичен-Ица\nТеотиуакан\nТахин\nУшмаль\nСочикалько\nКалакмуль'
    }
  },
  {
    question: '¿Cuál sítio arqueológico NO es un patrimonio UNESCO de México?',
    answer: 'Parque Nacional de Tikal',
    note: 'Está en Guatemala.',
    options: ['Monte Albán', 'Chichen Itzá', 'Uxmal'],
    type: 'choice',
    id: '56p1t',
    ru: {
      question:
        'Какой археологический объект НЕ является объектом ЮНЕСКО в Мексике?',
      answer: 'Национальный парк Тикаль',
      options: ['Монте-Альбан', 'Чичен-Ица', 'Ушмаль'],
      note: 'Находится в Гватемале.'
    }
  },
  {
    question: '¿Dónde se ubica la zona arqueológica El Tajín?',
    answer: 'Papantla, Veracruz',
    options: ['Oaxaca', 'Chiapas', 'Campeche'],
    type: 'choice',
    id: 'sq3rga',
    ru: {
      question: 'Где находится археологическая зона Эль-Тахин?',
      answer: 'Папантла, Веракрус',
      options: ['Оахака', 'Чьяпас', 'Кампече']
    }
  },
  {
    question:
      'Lugar decretado patrimonio de la humanidad por la UNESCO en 1992',
    answer: 'Tajín',
    options: ['Palenque', 'Monte Albán', 'Chichen Itzá'],
    type: 'choice',
    id: 'tmmdhg',
    ru: {
      question:
        'Место, объявленное объектом всемирного наследия ЮНЕСКО в 1992 году',
      answer: 'Тахин',
      options: ['Паленке', 'Монте-Альбан', 'Чичен-Ица']
    }
  },
  {
    question: '¿Dónde se encuentra la pirámide de Los Nichos?',
    answer: 'En la zona arqueológica El Tajín',
    note: 'En el estado de Veracruz, pertenece a la cultura Totonaca.',
    options: ['Palenque, Chiapas', 'Yucatán', 'Campeche'],
    type: 'choice',
    id: 'mzjtyp',
    ru: {
      question: 'Где находится пирамида Лос Ничос?',
      answer: 'В археологической зоне Эль-Тахин',
      options: ['Паленке, Чьяпас', 'Юкатан', 'Кампече'],
      note: 'В штате Веракрус, принадлежит культуре тотонаков.'
    }
  },
  {
    question: 'Zona arqueológica de Morelos',
    answer: 'Xochicalco',
    options: ['Montealbán', 'Paquimé', 'Palenque'],
    type: 'choice',
    id: 'pytlj',
    ru: {
      question: 'Археологическая зона Морелоса',
      answer: 'Сочикалько',
      options: ['Монте-Альбан', 'Пакиме', 'Паленке']
    }
  },
  {
    question: '¿Dónde se encuentra la zona arqueológica de Cacaxtla?',
    answer: 'Tlaxcala',
    note: 'Destaca por lo bien conservados de sus murales.',
    options: ['Chiapas', 'Yucatán', 'Campeche'],
    type: 'choice',
    id: '4bn4b9',
    ru: {
      question: 'Где находится археологическая зона Какстла?',
      answer: 'Тласкала',
      options: ['Чьяпас', 'Юкатан', 'Кампече'],
      note: 'Известен хорошо сохранившимися фресками.'
    }
  },
  {
    question: '¿Dónde se encuentra la zona arqueológica de Huatabampo?',
    answer: 'Sonora',
    options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
    type: 'choice',
    id: 'u4jpsvi',
    ru: {
      question: 'Где находится археологическая зона Уатабампо?',
      answer: 'Сонора',
      options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
    }
  },
  {
    question:
      '¿Donde se encuentra la zona arqueológica de Chalchihuites o AltaVista?',
    answer: 'Zacatecas',
    options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
    type: 'choice',
    id: 'isejb8',
    ru: {
      question:
        'Где находится археологическая зона Чальчихуитес или Альтависта?',
      answer: 'Сакатекас',
      options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
    }
  },
  {
    question: '¿Dónde se encuentra la zona arqueológica de Villa de Reyes?',
    answer: 'San Luis Potosí',
    options: ['Chiapas', 'Campeche', 'Oaxaca'],
    type: 'choice',
    id: '6ipoz',
    ru: {
      question: 'Где находится археологическая зона Вилья-де-Рейес?',
      answer: 'Сан-Луис-Потоси',
      options: ['Чьяпас', 'Кампече', 'Оахака']
    }
  },
  {
    question:
      '¿Dónde se encuentra la zona arqueológica de San Antonio Nogalar?',
    answer: 'Tamaulipas',
    options: ['Chiapas', 'Campeche', 'Oaxaca'],
    type: 'choice',
    id: 'mkyxl',
    ru: {
      question: 'Где находится археологическая зона Сан-Антонио Ногалар?',
      answer: 'Тамаулипас',
      options: ['Чьяпас', 'Кампече', 'Оахака']
    }
  }
];
