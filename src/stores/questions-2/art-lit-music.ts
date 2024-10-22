import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: 'El teatro de mayor prestigio en la Ciudad de México es',
    answer: 'Palacio de Bellas Artes',
    options: ['Teatro Mayor', 'Teatro Juarez', 'Palacio del Arte y la Cultura'],
    type: 'choice',
    id: '5ib12l'
  },
  {
    question:
      '¿Qué se inauguró durante el período presidencial de Abelardo Rodríguez Lujan?',
    answer: 'El Palacio de Bellas Artes',
    note: '29 de Septiembre de 1934.',
    options: ['El IMSS', 'La Diana Cazadora', 'La Estela de Luz'],
    type: 'choice',
    id: 'vaqt5n'
  },
  {
    question:
      'Nombre del antiguo teatro donde se construyó el Palacio de Bellas Artes',
    answer: 'Teatro Nacional',
    options: [
      'Teatro antiguo',
      'Teatro de la Ciudad de México',
      'Teatro Metropolitano'
    ],
    type: 'choice',
    id: 'qwejeq'
  },
  {
    question: '¿Dónde se ubica el Teatro Juárez?',
    answer: 'Guanajuato',
    note: 'Es uno de los teatros históricos más reconocidos de México, sede del Festival Cervantino.',
    options: ['Zacatecas', 'Jalisco', 'CDMX'],
    type: 'choice',
    id: 'botuxt'
  },
  {
    question:
      '¿Cómo se llama el premio que entrega el Instituto Nacional de Bellas Artes?',
    answer: 'Premio Bellas Artes',
    note: 'Fundado en 1945, premia diferentes categorías.',
    options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
    type: 'choice',
    id: 'vrrt3s'
  },
  {
    question:
      '¿Cómo se llama el premio que entrega Bellas Artes de cuento o literario?',
    answer: 'Amparo Dávila',
    options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
    type: 'choice',
    id: 'u6gvi'
  },
  {
    question: 'Mexicanos que han ganado Premio Cervantes',
    answer: `Octavio Paz
      Carlos Fuentes
      Elena Poniatowska
      Jose Emilio Pacheco
      Fernando del Paso
      Sergio Pitol`,
    type: 'text',
    id: 'rnr17'
  },
  {
    question: '¿Que fué Juan Rulfo?',
    answer: 'Escritor',
    note: 'Reconocido como uno de los grandes maestros de la narrativa hispanoamericana del siglo XX.',
    options: ['Pintor', 'Muralista', 'Escultor'],
    type: 'choice',
    id: 'b4t7he'
  },
  {
    question: '¿Quién escribió "El llano en llamas"?',
    answer: 'Juan Rulfo',
    options: ['Octavio Paz', 'Carlos Fuentes', 'Elena Poniatowska'],
    type: 'choice',
    id: '0ehmfm'
  },
  {
    question:
      '¿Qué obra escribió Carlos Fuentes sobre la vida mexicana en 1958?',
    answer: 'La región más transparente',
    options: [
      'Temporada de zopilotes',
      'El llano en llamas',
      'Las voces de Tlatelolco'
    ],
    type: 'choice',
    id: 'zktar'
  },
  {
    question: '"La muerte de Artemio Cruz" es una novela de',
    answer: 'Carlos Fuentes',
    options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
    type: 'choice',
    id: 'yq504s'
  },
  {
    question: '¿Quién escribió "Los Cinco Soles de México"?',
    answer: 'Carlos Fuentes',
    options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
    type: 'choice',
    id: 'xx5cp7'
  },
  {
    question: '¿Quién escribió "Aura"?',
    answer: 'Carlos Fuentes',
    options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
    type: 'choice',
    id: '44o3cb'
  },
  {
    question: '¿Quién escribió "La Noche de Tlatelolco"?',
    answer: 'Elena Poniatowska',
    note: 'Escritora, periodista y activista mexicana, nacida en Francia. Es una crónica basada en la matanza estudiantil sucedida durante el 2 de octubre de 1968 en la Plaza de las Tres Culturas.',
    options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
    type: 'choice',
    id: 'sn11zoq'
  },
  {
    question: '¿Quién escribió "Las Voces de Tlatelolco"?',
    answer: 'José Emilio Pacheco',
    note: 'No confundir "Las Voces de Tlatelolco" con "La Noche de Tlatelolco", nótese que son obras y autores diferentes.',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'zi3lzu'
  },
  {
    question: '¿Quién escribió "Relámpagos de Agosto"?',
    answer: 'Jorge Ibargüengoitia',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'zvggl'
  },
  {
    question:
      'Temporada de zopilotes: Una historia narrativa de la Decena Trágica, ¿Quién es su autor?',
    answer: 'Paco Ignacio Taibo II',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'r7aln'
  },
  {
    question: '¿De qué trato Temporada de Zopilotes?',
    answer: 'De la Decena Trágica',
    note: 'Golpe Militar de los 10 días (09 al 19 de Febrero de 1913) liderado por Victoriano Huerta para derrocar a Francisco I. Madero.',
    options: [
      'La matanza estudiantil Tlatelolco',
      'Critica al presidente Porfirio Diaz',
      'Poema revolucionario'
    ],
    type: 'choice',
    id: 'igrk3'
  },
  {
    question: 'Escribió sobre Francisco I. Madero',
    answer: 'Paco Ignacio Taibo II',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'xm9nlp'
  },
  {
    question: 'Libro escrito por Francisco I. Madero',
    answer: 'La Sucesión Presidencial',
    note: 'Es un  libro donde Madero crítica al entonces presidente Porfirio Diaz después de un largo periodo de mandato de 34 años.',
    options: ['Primero sueño', 'El laberinto de la soledad', 'El Complot'],
    type: 'choice',
    id: '3ehbp'
  },
  {
    question: '¿Por qué es conocida Sor Juana Inés de la Cruz?',
    answer: 'Escritora más importante del período Novo-hispáno',
    options: ['Actriz en el período Revolucionario', 'Traductora', 'Cantante'],
    type: 'choice',
    id: 'j8lxai'
  },
  {
    question:
      '¿Quién dijo la frase "Hombres necios que acusáis a la mujer sin razón, sin ver que vos sois la ocasión de lo mismo que culpáis"?',
    answer: 'Sor Juana Inés de la Cruz',
    options: ['Isabel Fraire', 'Elena Jordana', 'Minerva Reynosa'],
    type: 'choice',
    id: '5bfxgt'
  },
  {
    question: 'Nombres de poetas mexicanos',
    answer: `Octavio Paz
      Amado Nervo
      Jose Emilio Pacheco
      Rosario Castellanos
      Jaime Sabines`,
    type: 'text',
    id: 'qx2wma'
  },
  {
    question:
      'Poema que escribió Bernardo Balbuena sobre la Nueva España en 1604',
    answer: 'La Grandeza Mexicana',
    options: ['Desamor', 'Detente', 'Fragmento de Nocturno'],
    type: 'choice',
    id: '28065'
  },
  {
    question:
      'Exponente de la literatura de la revolucionaria / Escritor muy importante de la revolución',
    answer: 'Mariano Azuela',
    note: 'Médico, opositor al Porfiriato.',
    options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
    type: 'choice',
    id: 'ff3wmz'
  },
  {
    question:
      '¿Qué géneros escribían los siguientes autores: Juan Rulfo, Mario Bellatin y Jorge Volpi?',
    answer: 'Narrativa, novela',
    options: ['Dramático', 'Lírico', 'Didáctico'],
    type: 'choice',
    id: 'bmee9b'
  },
  {
    question: 'Famoso escritor mexicano de música para niños',
    answer: 'Francisco Gabilondo Soler, alias Cri Cri',
    options: [
      'Octavio Paz, alias Lagrimita',
      'Juan Rulfo, alias Cepillín',
      'Carlos Fuentes, alias Crin Crin'
    ],
    type: 'choice',
    id: 'rm158'
  },
  {
    question: '¿Quién escribió "El ratón vaquero"?',
    answer: 'Cri Cri (Francisco Gabilondo Soler)',
    options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
    type: 'choice',
    id: 'v8qv6'
  },
  {
    question: '¿Cuál es el nombre de Juan Gabriel (El Divo de Juárez)?',
    answer: 'Alberto Aguilera Valadez',
    options: [
      'José Rómulo Sosa Ortíz',
      'Ángel Agustín María Carlos Fausto',
      'Mario Fortino Alfonso Moreno Reyes'
    ],
    type: 'choice',
    id: 'vyzv5'
  },
  {
    question: 'El arpa es un instrumento musical de',
    answer: 'Veracruz',
    options: ['Guanajuato', 'Campeche', 'Yucatán'],
    type: 'choice',
    id: 'xadbqt'
  }
];
