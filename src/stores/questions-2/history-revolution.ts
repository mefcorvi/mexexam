import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question: '¿Qué es la revolución?',
    answer:
      'Inicia cuando Fracisco I Madero publica el Plan San Luis Potosí donde llama a tomar las armas, aparecen personajes como Pascual Orozco, Pancho Villa y Emiliano Zapata, se inicia una lucha en la que los revolucionarios salen victoriosos y Porfirio Díaz renuncia al poder en Mayo de 1911.',
    type: 'text',
    id: 'u860q'
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
    id: 'fu8jnh'
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
    id: '7rtd3m'
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
    id: '5aq18m'
  },
  {
    question: 'Personajes de la revolución',
    answer: `Porfirio Diaz
      Pancho Villa
      Francisco I. Madero
      Emiliano Zapata
      Victoriano Huerta
      Venustiano Carranza
      Pino Suarez'
      Plutarco Elias Calles`,
    type: 'text',
    id: '5g1unq'
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
    id: 'y8qdso'
  },
  {
    question:
      'El lema “Sufragio efectivo, no reelección” fue la bandera política de',
    answer: 'Francisco I. Madero',
    options: ['Benito Juarez', 'Porfirio Díaz', 'Vicente Guerrero'],
    type: 'choice',
    id: '4xdewdv'
  },
  {
    question:
      'Nombre del líder agrario que encabezó la revolución mexicana en el estado de Morelos',
    answer: 'Emiliano Zapata',
    options: ['Doroteo Arango', 'Venustiano Carranza', 'Francisco I. Madero'],
    type: 'choice',
    id: 'gxj3z9'
  },
  {
    question: '¿Quién dijo "Tierra y libertad"?',
    answer: 'Emiliano Zapata',
    options: ['Doroteo Arango', 'Venustiano Carranza', 'Francisco I. Madero'],
    type: 'choice',
    id: 'r79e3k'
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
    id: 'siis4'
  },
  {
    question:
      'Acontecimiento relacionado con la industria minera y la revolución',
    answer: 'Huelga de Cananea',
    note: 'Fue una huelga dada en la ciudad minera de cobre de Cananea, Sonora, que sentó precedentes para la revolución, por lo que a la ciudad se le conoce como cuna de la revolución.',
    options: ['Huelga Minera', 'Huelga de Sonora', 'Huelga industrial'],
    type: 'choice',
    id: 'cws58'
  },
  {
    question: 'Composición musical característica de la época revolucionaria',
    answer: 'El Corrido',
    note: 'Narrativa popular en forma de canción sobre temas políticos, históricos, etc.',
    options: ['Las Golondrinas', 'La Bikina', 'Las Mañanitas'],
    type: 'choice',
    id: 'syg71m'
  },
  {
    question: 'Nombre de un famoso corrido revolucionario',
    answer: 'La Adelita',
    options: ['El Caballo Blanco', 'La Valentina', 'El Barzón'],
    type: 'choice',
    id: 'o8qddb'
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
    id: '5jccdm'
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
    id: 'ycdgc7'
  },
  {
    question: '¿Quién fué el autor de la traición de Francisco I. Madero?',
    answer: 'Victoriano Huerta',
    options: ['Emiliano Zapata', 'Porfirio Díaz', 'Venustiano Carranza'],
    type: 'choice',
    id: 'ziijtj'
  },
  {
    question:
      'Nombre del golpe de estado ocurrido del 9 al 19 de febrero de 1913 o golpe militar para  derrocar a Francisco I. Madero',
    answer: 'Decena Trágica',
    options: ['Temporada de Zopilotes', 'El Golpe Duro', 'La Noche Triste'],
    type: 'choice',
    id: 'tar2h6'
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
    id: '17yvo5'
  },
  {
    question: 'Plan de Venustiano Carranza para derrocar a Victoriano Huerta',
    answer: 'Plan Guadalupe',
    options: ['Plan de Iguala', 'Plan de San Luis', 'Plan de Noria'],
    type: 'choice',
    id: 'vwge5'
  },
  {
    question:
      '¿Quién encabezaba el ejército constitucionalista durante la revolución?',
    answer: 'Venustiano Carranza',
    options: ['Francisco I. Madero', 'Doroteo Arango', 'Emiliano Zapata'],
    type: 'choice',
    id: 'qzt8eq'
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
    id: '7aegfb'
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
    id: '94elxj'
  },
  {
    question: '¿A quién se le conoce como el Centauro del Norte?',
    answer: 'Pancho Villa',
    options: ['Emiliano Zapata', 'Victoriano Huerta', 'Venustiano Carranza'],
    type: 'choice',
    id: '6th2un'
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
    id: 'v6ou9t'
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
    id: 'htcons'
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
    id: 'ocshea'
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
    id: 'y2oqz'
  }
];
