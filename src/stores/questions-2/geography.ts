import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Cuál es la extensión territorial de México?',
    answer: '1.964 millones de Km²',
    options: [
      '1.230 millones de Km²',
      '1.858 millones de Km²',
      '1.754 millones de Km²'
    ],
    type: 'choice',
    id: 'gguasp'
  },
  {
    question:
      'Superficie total de México (Superficie continental, insular y mar territorial)',
    answer: '5.1 MM Km²',
    options: ['91.3 MM Km²', '1.3 MM Km²', '3.91 MM Km²'],
    type: 'choice',
    id: 'epv0tk'
  },
  {
    question: '¿Con qué países tiene frontera México?',
    answer: 'Estados Unidos, Guatemala y Belice',
    options: [
      'Estados Unidos y Guatemala',
      'Estados Unidos y Belice',
      'Estados Unidos'
    ],
    type: 'choice',
    id: '5ocd7j'
  },
  {
    question: 'Geográficamente dónde está ubicado México',
    answer: 'En el sur de América del Norte',
    options: [
      'América del Sur',
      'América Central',
      'En el norte de América Central'
    ],
    type: 'choice',
    id: 'wkkmj'
  },
  {
    question: '¿Cuántos estados o entidades federativas tiene México?',
    answer: '32',
    options: ['38', '25', '29'],
    type: 'choice',
    id: '65yast'
  },
  {
    question: '¿Cuántas penínsulas tiene México?',
    answer: '2, Penínsulas de Baja California y Yucatán',
    options: [
      '2, Penínsulas de Chiapas y Yucatán',
      '2, Penínsulas de Baja California y Oaxaca',
      '2, Penínsulas de Sonora y Yucatán'
    ],
    type: 'choice',
    id: 'qx0qha'
  },
  {
    question: '¿Cuántas sierras madres tiene México?',
    answer: '2, Oriental y Occidental',
    options: [
      '2, Oriental y Oaxaca',
      '2, Chiapa y Occidental',
      '2, Sur y Oriental'
    ],
    type: 'choice',
    id: 'jbzlhj'
  },
  {
    question: 'Sierras de México',
    answer: `Sierra Madre Oriental
      Sierra Madre Occidental
      Sierra del Sur
      Sierra de Oaxaca
      Sierra de Chiapas`,
    type: 'text',
    id: 'k50io'
  },
  {
    question: 'Población de México (Censo INEGI 2020)',
    answer: '126,014,024',
    options: ['98,014,094', '223,014,054 ', '180,014,087'],
    type: 'choice',
    id: '1gkn5y'
  },
  {
    question: 'Ciudad más poblada de México',
    answer: 'Ciudad de México',
    options: ['Zacatecas', 'Colima', 'Guanajuato'],
    type: 'choice',
    id: 'y4q6e'
  },
  {
    question: 'Las tres ciudades más grandes y pobladas del país son',
    answer: 'CDMX, Guadalajara y Monterrey',
    type: 'text',
    id: 'zml93k'
  },
  {
    question: 'Nombres de islas de México',
    answer: 'Islas María, Isla Mujeres, Cozumel, Holbox, Isla Guadalupe',
    options: [
      'Isla de Tórtola, San Vicente y las Granadinas',
      'Isla Eleuthera, Isla de Santa Lucía, Long Island',
      'Isla Providenciales, Islas Caicos, Isla Saona'
    ],
    type: 'choice',
    id: 'xomcvf'
  },
  {
    question: '¿Dónde se encuentra el Parque Nacional Los Azufres?',
    answer: 'Michoacán',
    options: ['Guerrero', 'Oaxaca', 'Coahuila'],
    type: 'choice',
    id: 'yn1u1p'
  },
  {
    question: '¿Dónde se encuentran las Grutas de Cacahuamilpa?',
    answer: 'Guerrero',
    options: ['Oaxaca', 'Yucatán', 'Campeche'],
    type: 'choice',
    id: 'gomuah'
  },
  {
    question: 'Reserva natural en el estado de Sonora',
    answer: 'Biosfera del Pinacate y Desierto del Altar',
    options: [
      'Biosfera del Pinacate y Desierto de los Leones',
      'Biosfera de Sian Ka´an y Desierto del Altar',
      'Biosfera de Mariposa Monarca y Desierto del Altar'
    ],
    type: 'choice',
    id: '8nnfr8'
  },
  {
    question: 'Reserva natural del Golfo de Baja California',
    answer: 'Parque Nacional Cabo Pulmo',
    options: [
      'Biosfera del Pinacate',
      'Biosfera de Mariposa Monarca',
      'Arrecifes de Cozumel'
    ],
    type: 'choice',
    id: '9nzqdf'
  },
  {
    question:
      '¿Cómo se llama la reserva natural protegida en el Golfo de México? o nombre de reserva ecológica que da al Golfo de México',
    answer: 'El Arrecife Veracruzano',
    options: [
      'Arrecife de Puerto Morelos',
      'Arrecifes de Cozumel',
      'Arrecifes de Sian Ka´an'
    ],
    type: 'choice',
    id: 'nh0j9y'
  },
  {
    question:
      'Lugar de México donde se observan ballenas jorobadas y lobos marinos',
    answer: 'Mar de Cortés',
    options: ['Mar Caribe', 'Golfo de México', 'Oceano Pacífico Sur'],
    type: 'choice',
    id: 'kpdsrs'
  },
  {
    question: '¿Dónde está el Mar de Cortés o Mar Bermejo?',
    answer: 'Baja California',
    options: ['Veracruz', 'Guerrero', 'Quintana Roo'],
    type: 'choice',
    id: 'x95hhp'
  },
  {
    question: '¿Qué estados rodean el Mar de Cortés?',
    answer: 'Baja California Norte, Baja California Sur, Sonora, Sinaloa',
    options: [
      'Baja California Norte, Durango, Sonora, Sinaloa',
      'Baja California Norte, Baja California Sur, Tamaulipas, Sinaloa',
      'Baja California Norte, Baja California Sur, Sonora, Zacatecas'
    ],
    type: 'choice',
    id: 'sg8sqa'
  },
  {
    question:
      'Ciudad de la república mexicana con abundante arquitectura colonial',
    answer: 'Puebla',
    options: ['Jalisco', 'Campeche', 'Colima'],
    type: 'choice',
    id: 'asxfal'
  },
  {
    question: '¿Cuál es el río más largo de México?',
    answer: 'Río Bravo',
    options: ['Río Papaloapan', 'Río Coatzacoalcos', 'Río Santiago'],
    type: 'choice',
    id: '7cpkr7'
  },
  {
    question: '¿Cuáles son los estados que atraviesa el Río Bravo?',
    answer: 'Chihuahua, Coahuila, Tamaulipas, Nuevo León',
    options: [
      'Chihuahua, Durango, Tamaulipas, Nuevo León',
      'Baja California, Coahuila, Tamaulipas, Nuevo León',
      'Sinaloa, Coahuila, Tamaulipas, Nuevo León'
    ],
    type: 'choice',
    id: '0au2z'
  },
  {
    question: '¿Cuáles son los estados del norte de México?',
    answer: `Baja California - Mexicali
      Baja California Sur - La Paz
      Coahuila - Saltillo
      Chihuahua - Chihuahua
      Durango - Durango
      Nuevo León - Monterrey
      Sonora - Hermosillo
      Tamaulipas - Ciudad Victoria
      Sinaloa - Culiacán`,
    type: 'text',
    id: '9qo5rh'
  },
  {
    question: 'El estado de la república de mayor extensión territorial es',
    answer: 'Chihuahua',
    options: ['Coahuila', 'Durango', 'Veracruz'],
    type: 'choice',
    id: 'rc51gr'
  },
  {
    question: 'Capital de Sinaloa',
    answer: 'Culiacán',
    options: ['Los Mochis', 'Mazatlán', 'El Rosario'],
    type: 'choice',
    id: 'qrlumr'
  },
  {
    question:
      'Acapulco fue durante los siglos XVII y XVIII un importante puerto porque controlaba la navegación en el',
    answer: 'Océano Pacífico',
    options: ['Mar Caribe', 'Golfo de México', 'Oceano Atlántico'],
    type: 'choice',
    id: 'a32ycb'
  },
  {
    question: 'El puerto de Acapulco está en',
    answer: 'Guerrero',
    options: ['Colima', 'Nayarit', 'Oaxaca'],
    type: 'choice',
    id: 'ezcrq'
  },
  {
    question: 'Principales puertos turísticos',
    answer: 'Cozumel, Acapulco, Mazatlán',
    options: [
      'Cozumel, Acapulco, Manzanillo',
      'Veracruz, Acapulco, Mazatlán',
      'Cozumel, Lázaro Cárdenas, Mazatlán'
    ],
    type: 'choice',
    id: 'lfzcp5'
  },
  {
    question: 'Tres destinos de playa en México son',
    answer: 'Acapulco, Huatulco, Cancún',
    options: [
      'Acapulco, Tequila, Cancún',
      'Acapulco, Guanajuato, Cancún',
      'Acapulco, Puebla, Cancún'
    ],
    type: 'choice',
    id: 'ng6j9d'
  },
  {
    question: 'Sistema de acueducto de CDMX y EDO de MEX',
    answer: 'Sistema Cutzamala',
    options: [
      'Acueducto del Cedazo',
      'Sistema Coquimatlán',
      'Sistema Cuajimalpa'
    ],
    type: 'choice',
    id: 'l7rwi'
  },
  {
    question: '¿Qué es la Peña de Bernal, dónde se encuentra?',
    answer: 'Es el tercer monolito más grande del mundo, Querétaro',
    options: [
      'El monolito más grande del mundo, Zacatecas',
      'Es el segundo monolito más grande del mundo, Oaxaca',
      'Es la caída de agua más alta de México, Jalisco'
    ],
    type: 'choice',
    id: 'inpmv2'
  },
  {
    question:
      '¿En qué estado de la república se encuentra el “Cañón del Sumidero”?',
    answer: 'Chiapas',
    options: ['Oaxaca', 'Guerrero', 'Tabasco'],
    type: 'choice',
    id: 'zbknu'
  },
  {
    question:
      '¿En qué estado de la república se encuentran las Ruinas de Palenque?',
    answer: 'Chiapas',
    note: 'Pertenece a los Mayas.',
    options: ['Guerrero', 'Tabasco', 'Veracruz'],
    type: 'choice',
    id: 'vhp65h'
  },
  {
    question: 'Las ruinas de Monte Albán se localizan en',
    answer: 'Oaxaca',
    options: ['Guerrero', 'Tabasco', 'Veracruz'],
    type: 'choice',
    id: 'yiepn8'
  },
  {
    question:
      '¿En qué estado de la república se encuentra la ciudad de Guadalajara?',
    answer: 'Jalisco',
    options: ['Zacatecas', 'Morelia', 'Puebla'],
    type: 'choice',
    id: 'drv2lb'
  },
  {
    question: 'En qué estado se encuentra La Venta',
    answer: 'Tabasco',
    options: ['Campeche', 'Oaxaca', 'Veracruz'],
    type: 'choice',
    id: 'b1koz8'
  },
  {
    question: 'En qué estado se encuentra Calakmul',
    answer: 'Campeche',
    options: ['Oaxaca', 'Veracruz', 'Tabasco'],
    type: 'choice',
    id: 'xz45x'
  },
  {
    question: 'Capital del estado de Nuevo León',
    answer: 'Monterrey',
    options: ['Juárez', 'Santa Catarina', 'Santiago'],
    type: 'choice',
    id: 'izay1k'
  },
  {
    question: 'Icono turístico de Monterrey',
    answer: 'El Cerro de la Silla',
    options: ['El Cerro', 'Parque La Huasteca', 'Grutas de García'],
    type: 'choice',
    id: 'tx2pwq'
  },
  {
    question: '¿A qué se le conoce como Don Goyo y la Mujer Dormida?',
    answer: 'A los volcanes Popocatépetl y al Iztaccíhuatl',
    options: [
      'A los volcanes Popocatépetl y al Nevado de Toluca',
      'A los volcanes Malinche y al Nevado de Toluca',
      'A los volcanes Popocatépetl y al Chichinautzin'
    ],
    type: 'choice',
    id: 'm73jv'
  },
  {
    question: '¿Cuáles son los volcanes del Estado de México y Puebla?',
    answer: 'Popocatépetl e Iztaccíhuatl',
    options: [
      'Guadalupe y Pinacate',
      'Cerro Prieto y San Quintín',
      'El Chichón y Tacana'
    ],
    type: 'choice',
    id: 'uze7ogg'
  },
  {
    question:
      'Nombre del volcán que se ubica entre Morelos, Puebla y Estado de México',
    answer: 'Popocatépetl',
    note: 'En náhuatl "el cerro que humea", popoca "humear"; tepētl, "cerro."',
    options: ['Cerro Prieto', 'Tacana', 'Guadalupe'],
    type: 'choice',
    id: 'o62wx'
  },
  {
    question: '¿Cuál es la montaña más alta de México?',
    answer: 'Citlaltépetl (Pico de Orizaba)',
    note: 'Ubicada entre los estados de Veracruz y Puebla.',
    options: ['Popocatépetl', 'Nevado de Toluca', 'Iztaccíhuatl'],
    type: 'choice',
    id: 'untiyk'
  },
  {
    question: '¿Qué son los pueblos mágicos?',
    answer:
      'Pueblos que han sido reconocidos por su riqueza histórica y cultural. Programa de la Secretaría de Turismo (SECTUR)',
    options: [
      'Pueblos donde los mexicas practicaron sacrificios humanos',
      'Pueblos con una economía pujante',
      'Pueblos que según la leyenda azteca eran habitados por criaturas mitológicas'
    ],
    type: 'choice',
    id: '2d4fc'
  },
  {
    question: '¿Cuantos pueblos mágicos hay?',
    answer: '132',
    options: ['156', '152', '119'],
    type: 'choice',
    id: 'gr7bew'
  },
  {
    question: 'Pueblo mágico de San Luis Potosí',
    answer: 'Xilitla',
    options: ['Tapalpa', 'Tepotzotlán', 'Tequila'],
    type: 'choice',
    id: '3zyqeg'
  },
  {
    question: 'Pueblo mágico de Zacatecas',
    answer: 'Jerez de García Salinas',
    options: ['Jiquilpan', 'Cholula', 'Tequila'],
    type: 'choice',
    id: 'asd0ar'
  },
  {
    question: 'Pueblo mágico de Michoacán',
    answer: 'Jiquilpan',
    options: ['Chignahuapan', 'Cholula', 'Tequila'],
    type: 'choice',
    id: 'uuc91'
  },
  {
    question: 'Pueblos mágicos en Puebla',
    answer: 'Chignahuapan, Xicotepec',
    options: [
      'Tequila, Tapalpa',
      'Villa del Carbón, Tepotzotlán',
      'Capulálpam, Mazunte'
    ],
    type: 'choice',
    id: 'janifb'
  },
  {
    question: '¿Dónde se ubica el pueblo mágico de Cholula?',
    answer: 'Puebla',
    options: ['Zacatecas', 'Jalisco', 'Coahuila'],
    type: 'choice',
    id: 'h84ic'
  },
  {
    question: 'Pueblo mágico del Estado de México',
    answer: 'Villa del Carbón',
    options: ['Chignahuapan', 'Cholula', 'Tequila'],
    type: 'choice',
    id: '7ah97t'
  },
  {
    question: '¿Dónde queda Izamal, pueblo mágico?',
    answer: 'Yucatán',
    options: ['Zacatecas', 'Michoacan', 'Veracruz'],
    type: 'choice',
    id: '9pbhme'
  },
  {
    question: '¿Cuál es la ciudad conocida como la Puerta de Oro del Bajío?',
    answer: 'Celaya, Guanajuato',
    options: ['Michoacán', 'Guadalajara', 'Aguascalientes'],
    type: 'choice',
    id: 'adalqf'
  },
  {
    question: '¿Cuál es la ciudad conocida como la Perla del Bajío?',
    answer: 'León',
    options: ['Michoacán', 'Guadalajara', 'Aguascalientes'],
    type: 'choice',
    id: 'wrd0zd'
  },
  {
    question: '¿A que cuidad se conoce como "La Bella Airosa"?',
    answer: 'Pachuca',
    note: 'En el estado de Hidalgo.',
    options: ['Guadalajara', 'Xalapa', 'Oaxaca'],
    type: 'choice',
    id: 'b84in5'
  },
  {
    question: '¿Cual es la ciudad 4 veces heroica o 3 veces triunfante?',
    answer: 'Veracruz',
    options: ['Cuidad del Carmen', 'Puebla', 'Zacatecas'],
    type: 'choice',
    id: 'b2vc1m'
  },
  {
    question: 'Animales mexicanos en peligro de extinción',
    answer: `Jaguar (Ocelote)
      Águila Real
      Mariposa Monarca
      El ajolote (Axolotl)
      Tortuga Caguama
      Guacamaya Roja
      Oso Negro
      La Vaquita Marina`,
    type: 'text',
    id: 'giknl'
  }
];
