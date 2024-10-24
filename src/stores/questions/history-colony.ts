import type { QuestionData } from './interfaces';

export const questions: QuestionData[] = [
  {
    id: '8vmgpt',
    type: 'text',
    question: 'La Conquista de México-Tenochtitlán',
    answer:
      'Fue la derrota de los mexicas, a favor del rey Carlos I de España. Tenochtitlán cayó al mando de Hernán Cortés, después de dos años de intentos militares entre 1519  y 1521.',
    ru: {
      question: 'Завоевание Мексики-Теночтитлана',
      answer:
        'Это было поражение ацтеков в пользу короля Карлоса I Испании. Теночтитлан пал под командованием Эрнана Кортеса после двух лет военных попыток между 1519 и 1521 годами.'
    }
  },
  {
    id: '2zvpa',
    type: 'choice',
    question: '¿Razones que promovieron el descubrimiento de América?',
    answer: 'Descubrir nuevas rutas comerciales y expandir el régimen feudal',
    options: [
      'Buscando el mestizaje',
      'Tuvieron una revelación',
      'Estrenar nuevos barcos'
    ],
    ru: {
      question: 'Причины, способствовавшие открытию Америки?',
      answer: 'Открытие новых торговых путей и расширение феодального режима',
      options: [
        'В поисках смешения рас',
        'Имели откровение',
        'Испытать новые корабли'
      ]
    }
  },
  {
    id: 'jqrq7p',
    type: 'choice',
    question: '¿Por qué los conquistadores / españoles salieron de España?',
    answer: 'Buscando riquezas',
    options: [
      'Buscando el mestizaje',
      'Tuvieron una revelación',
      'Estrenar nuevos barcos'
    ],
    ru: {
      question: 'Почему конкистадоры/испанцы покинули Испанию?',
      answer: 'В поисках богатства',
      options: [
        'В поисках смешения рас',
        'Имели откровение',
        'Испытать новые корабли'
      ]
    }
  },
  {
    id: '31grp',
    type: 'choice',
    question: 'Nombre del conquistador que derrotó al Imperio Mexica',
    answer: 'Hernán Cortés',
    options: ['Cristobal Colón', 'Francisco Pizarro', 'Núñez de Balboa'],
    ru: {
      question: 'Имя конкистадора, победившего Империю Мексика',
      answer: 'Эрнан Кортес',
      options: ['Кристофор Колумб', 'Франсиско Писарро', 'Нуньес де Бальбоа']
    }
  },
  {
    id: 'gru2pc',
    type: 'choice',
    question: '¿Cuándo se fundó Villa Rica de la Vera Cruz?',
    answer: '10 de Julio de 1519',
    options: [
      '10 de Agosto de 1518',
      '10 de Septiembre de 1520',
      '10 de Julio de 1521'
    ],
    ru: {
      question: 'Когда была основана Вилья-Рика-де-ла-Вера-Крус?',
      answer: '10 июля 1519 года',
      options: [
        '10 августа 1518 года',
        '10 сентября 1520 года',
        '10 июля 1521 года'
      ]
    }
  },
  {
    id: '9p8hbf',
    type: 'choice',
    question: '¿Quién fundó Villa Rica de la Veracruz?',
    answer: 'Hernan Cortés',
    options: ['Cristobal Colón', 'Francisco Pizarro', 'Núñez de Balboa'],
    ru: {
      question: 'Кто основал Вилья-Рика-де-ла-Веракрус?',
      answer: 'Эрнан Кортес',
      options: ['Кристофор Колумб', 'Франсиско Писарро', 'Нуньес де Бальбоа']
    }
  },
  {
    id: 'bis404',
    type: 'choice',
    question: '¿Qué es la Villa Rica de Veracruz?',
    answer:
      'Hernán Cortés da ese nombre al primer ayuntamiento de América Continental, hoy ciudad de Veracruz',
    options: [
      'Primera provincia fundada en el Norte de México durante el Virreinato',
      'Un plan del Gral. Santa Anna para desconocer a Iturbide',
      'Una cueva donde Hernán Cortés escondió los tesoros'
    ],
    ru: {
      question: 'Что такое Вилья-Рика-де-Веракрус?',
      answer:
        'Эрнан Кортес дал это имя первому муниципалитету континентальной Америки, сегодня это город Веракрус',
      options: [
        'Первая провинция, основанная на севере Мексики во время вице-королевства',
        'План генерала Санта-Анны по отказу признать Итурбиде',
        'Пещера, где Эрнан Кортес спрятал сокровища'
      ]
    }
  },
  {
    id: 'ttdsfk',
    type: 'choice',
    question: '¿Quien era el emperador Mexica cuando llegaron los españoles?',
    answer: 'Moctezuma Xocoyotzin',
    options: ['Huitzilíhuitl', 'Cuauhtémoc', 'Ahuítzotl'],
    ru: {
      question: 'Кто был императором Мексики, когда прибыли испанцы?',
      answer: 'Монтесума Шокойотцин',
      options: ['Уицилиуитль', 'Куаутемок', 'Ауицотль']
    }
  },
  {
    id: 'oki0o9',
    type: 'choice',
    question: '¿Cuando entraron los conquistadores a Tenochtitlan?',
    answer: '8 de noviembre de 1519',
    options: [
      '18 de noviembre de 1519',
      '8 de noviembre de 1521',
      '8 de noviembre de 1510'
    ],
    note: 'El emperador Moctezuma se reunió con Hernan Cortés, Moctezuma pensó que los españoles eran enviados de  Quetzalcóatl (Dios Mexica) los recibió con obsequios.',
    ru: {
      question: 'Когда конкистадоры вошли в Теночтитлан?',
      answer: '8 ноября 1519 года',
      options: [
        '18 ноября 1519 года',
        '8 ноября 1521 года',
        '8 ноября 1510 года'
      ],
      note: 'Император Монтесума встретился с Эрнаном Кортесом, Монтесума думал, что испанцы были посланниками Кетцалькоатля (бога ацтеков), и принял их с подарками.'
    }
  },
  {
    id: 'sbf2mh',
    type: 'choice',
    question: '¿Quién era la intérprete de Hernán Cortés?',
    answer: 'La Malinche, Marina',
    options: ['Tecuelhuetzin', 'Tecuichpo', 'María de Estrada'],
    note: 'De aquí surge el popular adjetivo “malinchista” haciendo referencia que prefieres lo extranjero a lo propio, puesto que, la malinche siendo indigena, fue intérprete, consejera e intermediaria de Hernán Cortés, jugó un papel fundamental para que se concretara la conquista de los españoles.',
    ru: {
      question: 'Кто была переводчицей Эрнана Кортеса?',
      answer: 'Малинче, Марина',
      options: ['Текуэльуетсин', 'Текуйчпо', 'Мария де Эстрада'],
      note: 'Отсюда возникает популярный прилагательный «малинчиста», указывающий на то, что предпочитаешь иностранное своему. Малинче, будучи коренной жительницей, была переводчицей, советницей и посредницей Эрнана Кортеса, сыграла ключевую роль в завершении испанского завоевания.'
    }
  },
  {
    id: '2hcr28',
    type: 'choice',
    question:
      '¿Cómo se llamó la batalla donde los Aztecas derrotaron a los españoles?',
    answer: 'La Noche Triste',
    options: ['La Decena Trágica', 'La Noche Victoriosa', 'Batalla Azteca'],
    ru: {
      question: 'Как называлась битва, в которой ацтеки победили испанцев?',
      answer: 'Ночь Печали',
      options: ['Трагическая Десятка', 'Победоносная Ночь', 'Битва Ацтеков']
    }
  },
  {
    id: 'jh5i8c',
    type: 'choice',
    question:
      '¿Cuál es el nombre del árbol donde lloró Hernán Cortés el día de la Noche Triste?',
    answer: 'Ahuehuete',
    options: ['Primavera', 'Parota', 'Huizache'],
    ru: {
      question:
        'Как называется дерево, под которым плакал Эрнан Кортес в ночь Печали?',
      answer: 'Ахеуэтль',
      options: ['Примавера', 'Парота', 'Уизаче']
    }
  },
  {
    id: 'rutst7',
    type: 'choice',
    question:
      'Líder prehispánico que lideró la victoria durante la noche triste',
    answer: 'Cuitláhuac',
    options: ['Cuauhtémoc', 'Moctezuma', 'Ahuítzotl'],
    note: 'Era hermano de Moctezuma, dirigió el imperio Mexica luego de la muerte de Moctezuma.',
    ru: {
      question: 'Доколумбовский лидер, возглавивший победу в ночь Печали',
      answer: 'Куитлауак',
      options: ['Куаутемок', 'Монтесума', 'Ауицотль'],
      note: 'Он был братом Монтесумы и возглавлял империю Мексика после его смерти.'
    }
  },
  {
    id: '0v142q',
    type: 'choice',
    question:
      'Nombre del último emperador Mexica, a quien los conquistadores españoles torturaron quemándole los pies',
    answer: 'Cuauhtémoc',
    options: ['Huitzilíhuitl', 'Moctezuma', 'Ahuítzotl'],
    ru: {
      question:
        'Имя последнего императора Мексики, которого испанские конкистадоры пытали, сжигая ему ноги',
      answer: 'Куаутемок',
      options: ['Уицилиуитль', 'Монтесума', 'Ауицотль']
    }
  },
  {
    id: 'tiryw5',
    type: 'choice',
    question: '¿Por qué le quemaron los pies a Cuauhtémoc?',
    answer: 'Para confesar que había hecho con el tesoro de Moctezuma',
    options: [
      'Para confesar que había hecho con sus tesoros',
      'Para confesar que había hecho con el tesoro de Ahuítzotl',
      'Para confesar que había hecho con el tesoro de Huitzilíhuitl'
    ],
    ru: {
      question: 'Почему Куаутемоку сожгли ноги?',
      answer: 'Чтобы признаться, что он сделал с сокровищем Монтесумы',
      options: [
        'Чтобы признаться, что он сделал со своими сокровищами',
        'Чтобы признаться, что он сделал с сокровищем Ауицотля',
        'Чтобы признаться, что он сделал с сокровищем Уицилиуитля'
      ]
    }
  },
  {
    id: '1snu8',
    type: 'choice',
    question: '¿Cuales fueron los 3 últimos emperadores mexicas?',
    answer: 'Moctezuma, Cuitláhuac y Cuauhtémoc',
    options: [
      'Tízoc, Cuitláhuac y Cuauhtémoc',
      'Moctezuma, Ahuízotl y Cuauhtémoc',
      'Acamapichitli, Huitzilíhuitl y Chimalpopoca'
    ],
    note: 'Moctezuma: Estaba al mando cuando llegó hernán cortés, fue asesinado por su propio pueblo. Cuitláhuac: Hermano de Moctezuma, solo duró 80 días a cargo del imperio, lideró la batalla de noche triste, murió de viruela. Cuauhtémoc: Fue asesinado por los españoles cuando cayó Tenochtitlán.',
    ru: {
      question: 'Кто были последние 3 императора мексиков?',
      answer: 'Монтесума, Куитлауак и Куаутемок',
      options: [
        'Тизок, Куитлауак и Куаутемок',
        'Монтесума, Ауицотль и Куаутемок',
        'Акамапичитли, Уицилиуитль и Чимальпопока'
      ],
      note: 'Монтесума: был во главе, когда прибыл Эрнан Кортес, был убит своим собственным народом. Куитлауак: брат Монтесумы, правил империей всего 80 дней, возглавил битву в ночь Печали, умер от оспы. Куаутемок: был убит испанцами, когда пал Теночтитлан.'
    }
  },
  {
    id: '8tj93',
    type: 'choice',
    question: 'Año en que cayó México Tenochtitlán',
    answer: '1521',
    options: ['1520', '1512', '1530'],
    note: 'Después de la noche triste en 1520, los españoles se reorganizaron y atacaron de nuevo Tenochtitlán, los mexicas estaban muriendo de enfermedades contagiosas como viruela, sarampión, gripe, lo que que imposibilitó que se defendieran y terminó con la caída del imperio en 1521.',
    ru: {
      question: 'Год падения Мексики Теночтитлана',
      answer: '1521',
      options: ['1520', '1512', '1530'],
      note: 'После ночи Печали в 1520 году испанцы перегруппировались и снова атаковали Теночтитлан. Мексиканцы умирали от заразных болезней, таких как оспа, корь, грипп, что не позволило им защищаться и привело к падению империи в 1521 году.'
    }
  },
  {
    id: 'a8emdur',
    type: 'choice',
    question: 'El palacio de Axayacatl es también conocido como',
    answer: 'Casas viejas',
    options: ['Casas nuevas', 'Casa palacio', 'Casa sagrada'],
    ru: {
      question: 'Дворец Аксаятль также известен как',
      answer: 'Старые дома',
      options: ['Новые дома', 'Дом дворец', 'Священный дом']
    }
  },
  {
    id: '8zinr',
    type: 'text',
    question: '¿Qué es México Colonial?',
    answer:
      'Inicia después de la caída de México Tenochtitlan en 1521, durante éste período nuestra tierra y su población estuvieron bajo el dominio de los reyes de España. México recibe el nombre de Nueva España, se produce el mestizaje (encuentro biológico y cultural de etnias diferentes, en el que éstas se mezclan, dando nacimiento a nuevas etnias y nuevos genotipos) se integra la religión, se introduce la ganadería, explotación de plata, siembra del trigo, etcétera.  Pasado el tiempo, la corona española incrementa a tal punto la desigualdad y la corrupción que conllevaría años más tarde a la independencia.',
    ru: {
      question: 'Что такое Колониальная Мексика?',
      answer:
        'Начинается после падения Мексики Теночтитлана в 1521 году. В этот период наша земля и её население находились под властью испанских королей. Мексика получает название Новая Испания, происходит метисация (биологическая и культурная встреча различных этносов, в которой они смешиваются, порождая новые этносы и новые генотипы), интеграция религии, вводится скотоводство, добыча серебра, посев пшеницы и т.д. Со временем испанская корона увеличивает неравенство и коррупцию до такой степени, что это приведет к независимости через годы.'
    }
  },
  {
    id: 'mfns0v',
    type: 'choice',
    question: 'El periodo fundacional de la conquista fue',
    answer: '1519 - 1610',
    options: ['1522 - 1610', '1519 - 1500', '1510 - 1680'],
    ru: {
      question: 'Основной период завоевания был',
      answer: '1519 - 1610',
      options: ['1522 - 1610', '1519 - 1500', '1510 - 1680']
    }
  },
  {
    id: '4wm1w7',
    type: 'choice',
    question: '¿Cuando se consolida la etapa Colonial?',
    answer: '1530 - 1560',
    options: ['1510 - 1540', '1530 - 1660', '1800 - 1960'],
    ru: {
      question: 'Когда закрепляется колониальный этап?',
      answer: '1530 - 1560',
      options: ['1510 - 1540', '1530 - 1660', '1800 - 1960']
    }
  },
  {
    id: 'sfmeaq',
    type: 'choice',
    question: 'Nombre de México durante el periodo colonial',
    answer: 'Nueva España',
    options: ['España', 'España Segunda', 'España Americana'],
    ru: {
      question: 'Название Мексики в колониальный период',
      answer: 'Новая Испания',
      options: ['Испания', 'Вторая Испания', 'Американская Испания']
    }
  },
  {
    id: 'dayv6ym',
    type: 'choice',
    question: '¿Quién era la máxima autoridad en la Nueva España?',
    answer: 'El virrey',
    options: ['El capitán general', 'El gobernador real', 'El teniente'],
    note: 'Era a quien la monarquía española encargaba administrar, vigilar, cobrar impuestos y encabezar operaciones militares.',
    ru: {
      question: 'Кто был высшей властью в Новой Испании?',
      answer: 'Вице-король',
      options: ['Генеральный капитан', 'Королевский губернатор', 'Лейтенант'],
      note: 'Он был назначен испанской монархией для управления, надзора, сбора налогов и руководства военными операциями.'
    }
  },
  {
    id: 'o0j5ux',
    type: 'choice',
    question: 'Primer Virrey de la Nueva España',
    answer: 'Antonio de Mendoza y Pacheco o Don Antonio de Mendoza',
    options: [
      'Luis de Velasco y Ruiz de Alarcón',
      'Juan O`Donoju',
      'Martín Enríquez de Almansa'
    ],
    ru: {
      question: 'Первый вице-король Новой Испании',
      answer: 'Антонио де Мендоса и Пачеко или Дон Антонио де Мендоса',
      options: [
        'Луис де Веласко и Руис де Аларкон',
        'Хуан О`Доноху',
        'Мартин Энрикес де Алманса'
      ]
    }
  },
  {
    id: 'nfupw',
    type: 'choice',
    question: 'Segundo Virrey De Nueva España',
    answer: 'Luis de Velasco y Ruiz de Alarcón',
    options: [
      'Juan O`Donoju',
      'Martín Enríquez de Almansa',
      'Antonio de Mendoza y Pacheco'
    ],
    ru: {
      question: 'Второй вице-король Новой Испании',
      answer: 'Луис де Веласко и Руис де Аларкон',
      options: [
        'Хуан О`Доноху',
        'Мартин Энрикес де Алманса',
        'Антонио де Мендоса и Пачеко'
      ]
    }
  },
  {
    id: 'dicqp',
    type: 'choice',
    question: '¿Quién fue el último Virrey de la Nueva España?',
    answer: 'Juan Ruiz de Apodaca',
    options: [
      'Martín Enríquez de Almansa',
      'Antonio de Mendoza y Pacheco',
      'Luis de Velasco y Ruiz de Alarcón'
    ],
    note: 'Algunas fuentes señalan a Juan O`Donoju como el último virrey de la Nueva España, sin embargo su cargo exactamente se llamó Jefe político superior de la Nueva España, Juan Ruiz de Apodaca fué el último con el título de Virrey.',
    ru: {
      question: 'Кто был последним вице-королем Новой Испании?',
      answer: 'Хуан Руис де Аподака',
      options: [
        'Мартин Энрикес де Алманса',
        'Антонио де Мендоса и Пачеко',
        'Луис де Веласко и Руис де Аларкон'
      ],
      note: 'Некоторые источники называют Хуана О`Доноху последним вице-королем Новой Испании, однако его должность официально называлась Главный политический начальник Новой Испании, Хуан Руис де Аподака был последним, кто носил титул вице-короля.'
    }
  },
  {
    id: 'rma53j',
    type: 'choice',
    question:
      '¿Cuáles fueron las leyes para el buen tratamiento y conservación de los indios?',
    answer: 'Las Leyes Nuevas',
    options: [
      'Las Leyes de los indios',
      'Las Leyes Viejas',
      'Las leyes liberales'
    ],
    ru: {
      question:
        'Какие законы были приняты для хорошего обращения и сохранения индейцев?',
      answer: 'Новые Законы',
      options: ['Законы индейцев', 'Старые Законы', 'Либеральные законы']
    }
  },
  {
    id: 'qvxbp',
    type: 'choice',
    question:
      'Primera intendencia u oficialía de la Nueva España fundada en 1770',
    answer: 'Intendencia de Arizpe (hoy Sonora y Sinaloa)',
    options: [
      'Nueva Vizcaya (hoy Durango, Chihuahua y Sinaloa)',
      'Intendencia de San Luis Potosí',
      'Intendencia de Guadalajara'
    ],
    note: 'El sistema de intendencias fue una estructura administrativa de la corona española con el fin de organizar el gobierno y la administración territorial, se establecieron en total 12 intendencias: México, Puebla, Veracruz, Oaxaca, Valladolid, Guanajuato, San Luis Potosí, Guadalajara, Zacatecas, Arizpe, Mérida y Durango.',
    ru: {
      question:
        'Первый интендант или официальное учреждение Новой Испании, основанное в 1770 году',
      answer: 'Интендант Ариспе (сегодня Сонора и Синалоа)',
      options: [
        'Новая Вискайя (сегодня Дуранго, Чиуауа и Синалоа)',
        'Интендант Сан-Луис-Потоси',
        'Интендант Гвадалахара'
      ],
      note: 'Система интендантов была административной структурой испанской короны для организации управления и территориального администрирования, всего было создано 12 интендантов: Мехико, Пуэбла, Веракрус, Оахака, Вальядолид, Гуанахуато, Сан-Луис-Потоси, Гвадалахара, Сакатекас, Ариспе, Мерида и Дуранго.'
    }
  },
  {
    id: 'jya24m',
    type: 'choice',
    question:
      'Fue la primera provincia en ser explorada y fundada en el norte de México durante el virreinato de la Nueva España',
    answer: 'La Nueva Vizcaya',
    options: ['La Nueva Galicia', 'La Nueva Navarra', 'Nuevo México'],
    ru: {
      question:
        'Первая провинция, исследованная и основанная на севере Мексики во время вице-королевства Новой Испании',
      answer: 'Новая Вискайя',
      options: ['Новая Галисия', 'Новая Навара', 'Новая Мексика']
    }
  },
  {
    id: 'arbnf',
    type: 'choice',
    question:
      'Estados actuales que conformaban la Nueva Vizcaya en la época colonial',
    answer: 'Durango, Chihuahua y Sinaloa',
    options: [
      'Yucatán, Campeche, Chiapas',
      'Jalisco, Colima, Michoacán',
      'Guerrero, Puebla, Oaxaca'
    ],
    ru: {
      question:
        'Современные штаты, которые составляли Новую Вискайю в колониальную эпоху',
      answer: 'Дуранго, Чиуауа и Синалоа',
      options: [
        'Юкатан, Кампече, Чьяпас',
        'Халиско, Колима, Мичоакан',
        'Герреро, Пуэбла, Оахака'
      ]
    }
  },
  {
    id: 'ar3toq',
    type: 'text',
    question: '¿Qué fue la Constitución de Cádiz?',
    answer:
      'La Constitución Política de la Monarquía Española, más conocida como Constitución española de 1812 o Constitución de Cádiz,​ conocida popularmente como la Pepa. Dividió la Nueva España en 6 provincias.',
    ru: {
      question: 'Что такое Конституция Кадиса?',
      answer:
        'Политическая Конституция Испанской Монархии, более известная как Испанская Конституция 1812 года или Конституция Кадиса, известная в народе как Пепа. Она разделила Новую Испанию на 6 провинций.'
    }
  },
  {
    id: 'k7vu3j',
    type: 'choice',
    question:
      'El zócalo de la Ciudad de México también conocido como Plaza de la constitución se llama así por la constitución de',
    answer: 'Constitución de Cádiz de 1812',
    options: [
      'Constitución de Apatzingán',
      'Constitución de 1824',
      'Constitución de 1857'
    ],
    ru: {
      question:
        'Сокало в Мехико, также известная как Площадь Конституции, называется так в честь Конституции',
      answer: 'Конституция Кадиса 1812 года',
      options: [
        'Конституция Апасингана',
        'Конституция 1824 года',
        'Конституция 1857 года'
      ]
    }
  },
  {
    id: 'qjk5g3',
    type: 'choice',
    question:
      '¿Quién hizo la ley de imprenta que sale en la Constitución de Cádiz?',
    answer: 'José Isidro Morales',
    options: [
      'Álvaro Flórez Estrada',
      'Vicente Morales Duárez',
      'Evaristo Pérez de Castro'
    ],
    ru: {
      question:
        'Кто составил закон о печати, который вошел в Конституцию Кадиса?',
      answer: 'Хосе Исидро Моралес',
      options: [
        'Альваро Флорес Эстрада',
        'Висенте Моралес Дуэрес',
        'Эваристо Перес де Кастро'
      ]
    }
  },
  {
    id: 'gxwqjr',
    type: 'choice',
    question: 'Creador de un periódico en la época de la Constitución de Cádiz',
    answer: 'José Isidro Morales',
    options: [
      'Álvaro Flórez Estrada',
      'Vicente Morales Duárez',
      'Evaristo Pérez de Castro'
    ],
    ru: {
      question: 'Создатель газеты в эпоху Конституции Кадиса',
      answer: 'Хосе Исидро Моралес',
      options: [
        'Альваро Флорес Эстрада',
        'Висенте Моралес Дуэрес',
        'Эваристо Перес де Кастро'
      ]
    }
  },
  {
    id: '7nryjs',
    type: 'choice',
    question:
      '¿Cómo denominaban a los hijos de los españoles nacidos en la Nueva España?',
    answer: 'Criollos',
    options: ['Morisco', 'Mulato', 'Zambo'],
    ru: {
      question: 'Как называли детей испанцев, рожденных в Новой Испании?',
      answer: 'Креолы',
      options: ['Мориски', 'Мулаты', 'Замбо']
    }
  },
  {
    id: '2ffnj5',
    type: 'choice',
    question: '¿Qué es un mestizo?',
    answer: 'Hijo de español e indio',
    options: [
      'Hijo de mulato y español',
      'Hijo de negro e indio',
      'Hijo de español y mestizo'
    ],
    ru: {
      question: 'Кто такой метис?',
      answer: 'Сын испанца и индейца',
      options: [
        'Сын мулата и испанца',
        'Сын негра и индейца',
        'Сын испанца и метиса'
      ]
    }
  },
  {
    id: 'dpa1wg',
    type: 'choice',
    question: 'En la época colonial ¿A quienes se les llamaba peones?',
    answer: 'A los trabajadores asalariados de las haciendas',
    options: [
      'A los hacendados',
      'A los campesinos que trabajaban en minifundios',
      'A los hijos de español e indio'
    ],
    ru: {
      question: 'В колониальную эпоху кого называли пеонами?',
      answer: 'Наемных работников на плантациях',
      options: [
        'Плантаторов',
        'Крестьян, работающих на мелких участках',
        'Сыновей испанцев и индейцев'
      ]
    }
  },
  {
    id: 'bg08r8',
    type: 'choice',
    question: 'La "Encomienda" y el "Visitador" fueron instituciones',
    answer: 'Coloniales',
    options: ['De la Independencia', 'De la revolución', 'Prehispánicas'],
    ru: {
      question: '"Энкомьенда" и "Визитадор" были учреждениями',
      answer: 'Колониальными',
      options: ['Периода независимости', 'Революционными', 'Доколумбовыми']
    }
  },
  {
    id: 'ng2yl9',
    type: 'text',
    question: '¿Qué es la encomienda?',
    answer:
      'La encomienda en Nueva España fue introducida por Hernán Cortés después de la conquista de Tenochtitlan como forma de “repartir” los indios a distintos conquistadores y colonos.',
    ru: {
      question: 'Что такое энкомьенда?',
      answer:
        'Энкомьенда в Новой Испании была введена Эрнаном Кортесом после завоевания Теночтитлана как способ «распределения» индейцев между различными конкистадорами и колонистами.'
    }
  },
  {
    id: 'oyhng',
    type: 'text',
    question: '¿Qué era la figura del visitador?',
    answer:
      'Era un individuo investido de autoridad para supervisar y tomaba nota de todo lo que debía ser juzgado y corregido en lo político, económico y militar, mandado desde España por la Corona.',
    ru: {
      question: 'Кто такой визитадор?',
      answer:
        'Это было лицо, наделенное властью для надзора, и записывающее все, что должно было быть рассмотрено и исправлено в политической, экономической и военной сферах, посланное из Испании Короной.'
    }
  },
  {
    id: 'wvvl1r',
    type: 'choice',
    question: 'El mineral que más se extraía en la Nueva España era',
    answer: 'La plata',
    options: ['El oro', 'El cobre', 'El plomo'],
    ru: {
      question: 'Минерал, который больше всего добывался в Новой Испании',
      answer: 'Серебро',
      options: ['Золото', 'Медь', 'Свинец']
    }
  },
  {
    id: 'kx7jd',
    type: 'choice',
    question:
      'El Palacio Nacional, sede del Poder Ejecutivo Federal, inicialmente fué construido como',
    answer: 'Segunda Casa de Hernan Cortes o Casas Nuevas',
    options: ['Un escondite', 'Un refugio para los enfermos', 'Una iglesia'],
    ru: {
      question:
        'Национальный дворец, резиденция Федеральной исполнительной власти, первоначально был построен как',
      answer: 'Второй дом Эрнана Кортеса или Новые дома',
      options: ['Убежище', 'Приют для больных', 'Церковь']
    }
  },
  {
    id: '31nlp9',
    type: 'text',
    question: 'En la época de la Nueva España ¿A que se le llamaba obrajes?',
    answer:
      'Eran centros artesanales que existieron a mediados del siglo XVI, con 50 trabajadores en promedio, en los cuales se producían textiles, hilos y lana de calidad burda. Estos productos se vendían a indios y mulatos, los cuales no podían pagar el precio del mismo producto importado de Europa. Los trabajadores eran indios y delincuentes condenados por delitos que eran explotados por los obrajeros.',
    ru: {
      question: 'В эпоху Новой Испании что называли обрахес?',
      answer:
        'Это были ремесленные центры, существовавшие в середине XVI века, в которых работало в среднем 50 человек, производивших текстиль, нити и шерсть грубого качества. Эти продукты продавались индейцам и мулатам, которые не могли заплатить цену за тот же продукт, импортированный из Европы. Работники были индейцами и преступниками, осужденными за преступления и эксплуатируемыми обрахадорами.'
    }
  },
  {
    id: '7f2zs',
    type: 'choice',
    question:
      'Esquema imperial por el cual se exigía el pago de los más ricos para contribuir al gobierno',
    answer: 'Unión de Armas',
    options: ['Unión de la plata', 'Unión del oro', 'Unión de protección'],
    note: 'Debían aportar dinero y armas para la defensa de la corona española.',
    ru: {
      question:
        'Имперская схема, по которой от самых богатых требовалась оплата для вклада в правительство',
      answer: 'Союз Оружия',
      options: ['Союз Серебра', 'Союз Золота', 'Союз Защиты'],
      note: 'Они должны были вносить деньги и оружие для защиты испанской короны.'
    }
  },
  {
    id: 'vdiqi',
    type: 'choice',
    question: 'Año en que se creó la primera imprenta de México',
    answer: '1539',
    options: ['1510', '1500', '1545'],
    note: 'Durante el mandato de Don Antonio de Mendoza en la Nueva España.',
    ru: {
      question: 'Год создания первой печатной машины в Мексике',
      answer: '1539',
      options: ['1510', '1500', '1545'],
      note: 'Во время правления Дона Антонио де Мендоса в Новой Испании.'
    }
  },
  {
    id: 'tvjlg8',
    type: 'choice',
    question:
      'Primer periódico de México o primer periódico impreso en la Nueva España',
    answer: 'La Gaceta de México',
    options: ['Diario de México', 'Noticias de México', 'Últimas noticias'],
    note: 'Su fundador fue el periodista y religioso Juan Ignacio María de Castorena Urzúa y Goyeneche.',
    ru: {
      question:
        'Первая газета Мексики или первая газета, напечатанная в Новой Испании',
      answer: 'Газета Мексики',
      options: ['Ежедневник Мексики', 'Новости Мексики', 'Последние новости'],
      note: 'Ее основателем был журналист и священник Хуан Игнасио Мария де Касторена Урсуа и Гойенече.'
    }
  },
  {
    id: 'qhep1n',
    type: 'choice',
    question: 'Nombre del periódico creado en el S. XVIII en la Nueva España',
    answer: 'La Gaceta de México',
    options: ['Diario de México', 'Noticias de México', 'Últimas noticias'],
    ru: {
      question: 'Название газеты, созданной в XVIII веке в Новой Испании',
      answer: 'Газета Мексики',
      options: ['Ежедневник Мексики', 'Новости Мексики', 'Последние новости']
    }
  },
  {
    id: 'qksmp9',
    type: 'choice',
    question:
      'Institución creada para compensar las falencias del sistema judicial en la Nueva España',
    answer: 'Tribunal de la Acordada',
    options: [
      'Tribunal de la Justicia',
      'Tribunal Nueva España',
      'Tribunal Español'
    ],
    ru: {
      question:
        'Учреждение, созданное для компенсации недостатков судебной системы в Новой Испании',
      answer: 'Суд Аккордада',
      options: ['Суд Справедливости', 'Суд Новой Испании', 'Испанский Суд']
    }
  },
  {
    id: 'bbgerf',
    type: 'choice',
    question:
      'Primera institución durante la colonia de educación superior para indígenas o escuela de los nobles indígenas en la época del Virreinato',
    answer: 'Colegio de la Santa Cruz de Santiago Tlatelolco',
    options: [
      'Colegio de San Nicolás Obispo',
      'Colegio de San Ildefonso',
      'Colegio de San Martín'
    ],
    ru: {
      question:
        'Первое учреждение высшего образования для индейцев или школа для благородных индейцев в эпоху вице-королевства',
      answer: 'Колледж Святого Креста Сантьяго Тлателолько',
      options: [
        'Колледж Святого Николая Епископа',
        'Колледж Сан-Ильдефонсо',
        'Колледж Сан-Мартин'
      ]
    }
  },
  {
    id: '645m54',
    type: 'choice',
    question:
      'Nombre del sistema financiero donde se exigía a grandes consorcios contribuir al mantenimiento de la corona',
    answer: 'La Real Hacienda. Cajas de la Real Hacienda',
    options: ['Unión de Armas', 'Ley de Fuga', 'La Acordada'],
    ru: {
      question:
        'Название финансовой системы, в которой от крупных консорциумов требовалось вносить вклад в содержание короны',
      answer: 'Королевская Казна. Королевские Казны',
      options: ['Союз Оружия', 'Закон о побеге', 'Аккордада']
    }
  },
  {
    id: 'jblzne',
    type: 'choice',
    question: '¿En qué consistió la conspiración de Valladolid?',
    answer:
      'Pretendían establecer un congreso soberano que gobernaría a nombre de Fernando VII',
    options: [
      'Establecer el imperio de Fernando VII',
      'Derrocar el gobierno de Fernando VII',
      'Pretendian establecer un congreso soberano independiente de Fernando VII'
    ],
    note: '21 de diciembre de 1809.',
    ru: {
      question: 'В чем заключался заговор в Вальядолиде?',
      answer:
        'Они намеревались создать суверенный конгресс, который управлял бы от имени Фердинанда VII',
      options: [
        'Создать империю Фердинанда VII',
        'Свергнуть правительство Фердинанда VII',
        'Намеревались создать суверенный конгресс, независимый от Фердинанда VII'
      ],
      note: '21 декабря 1809 года.'
    }
  },
  {
    id: '5x8joj',
    type: 'choice',
    question:
      'El principal culto religioso de la sociedad novohispana que perdura en la actualidad',
    answer: 'La Virgen de Guadalupe',
    options: [
      'La Virgen de Zapopan',
      'La Virgen del Valle',
      'La Virgen del Carmen'
    ],
    ru: {
      question:
        'Главный религиозный культ новоиспанского общества, существующий до сих пор',
      answer: 'Дева Гваделупская',
      options: ['Дева Запопанская', 'Дева Долинная', 'Дева Кармельская']
    }
  }
];
