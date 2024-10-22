import type { QuestionData } from '../questions/interfaces';

export const questions: QuestionData[] = [
  {
    question:
      '¿Cuál de las siguientes siglas corresponde a un instituto de salud?',
    answer: 'IMSS',
    options: ['PROFECO', 'INM', 'ACNUR', 'ONU', 'CFE', 'COMAR'],
    type: 'choice',
    id: 'qifbbm'
  },
  {
    question: '¿Qué productos exporta México?',
    answer: 'Aceite crudo de petróleo, autopartes y productos de cobre',
    options: [
      'Plata, oro y papel',
      'Textiles, zapatos y juguetes',
      'Gasolina, gas butano y productos agrícolas'
    ],
    type: 'choice',
    id: 'tlxphb'
  },
  {
    question: '¿Qué lugar ocupa México en la economía mundial?',
    answer: '16',
    options: ['20', '25', '28'],
    type: 'choice',
    id: 'zu8kl'
  },
  {
    question: '¿Qué fué la Ley de calles?',
    answer:
      'Ley expedida para controlar y limitar el culto católico en México, oficialmente llamada ley de tolerancia de cultos, elaborada durante la presidencia de Plutarco Elías Calles',
    options: [
      'Un tipo de ejecución usada en el Porfiriato',
      'Ley para cobrar impuestos durante la presidencia de Plutarco Elías Calles',
      'Ley para cobrar a quienes usaran las principales calles de la cuidad en carruajes'
    ],
    type: 'choice',
    id: 'bzlhfc'
  },
  {
    question: '¿Qué fué la Guerra Cristera?',
    answer:
      'Conflicto armado de 1926 a 1929 entre el gobierno y católicos que estaban en contra de la Ley Calles',
    options: [
      'Enfrentamiento armado con Inglaterra por territorio mexicano',
      'Guerra civil que aconteció en México del año de 1858 a 1861.​La nación estaba dividida entre Liberales y Conservadores',
      'Conflicto armado contra EEUU por Texas'
    ],
    type: 'choice',
    id: '586rtj'
  },
  {
    question: '¿Quién creó el Banco de México en 1925 (Banco Nacional)?',
    answer: 'Plutarco Elias Calles',
    options: ['Alvaro Obregón', 'Emilio Portes Gil', 'José Lopez Portillo'],
    type: 'choice',
    id: '4q7r2t'
  },
  {
    question: '¿Quién fundó el Partido Nacional Revolucionario en 1929?',
    answer: 'Plutarco Elias Calles',
    note: 'Hoy es el PRI desde 1946',
    options: ['Alvaro Obregón', 'Emilio Portes Gil', 'José Lopez Portillo'],
    type: 'choice',
    id: 'jfaxdf'
  },
  {
    question: '¿Cuándo fue el periodo conocido como el Maximato?',
    answer: '1928 - 1934',
    note: 'Se llama así por Plutarco Elias Calles, dado que era conocido como el "Máximo de la revolución" y fue quien más influencia tenía en ese periodo. Fue un período de presidentes interinos derivados del asesinato de Álvaro Obregón que termino con la elección de Lázaro Cárdenas.',
    options: ['1920 - 1930', '1910 - 1920', '1958 - 1978'],
    type: 'choice',
    id: '96mve'
  },
  {
    question: '¿Qué presidente fué asesinado en 1928?',
    answer: 'Álvaro Obregón',
    note: '17 de Julio de 1928.',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'fdn0o'
  },
  {
    question: '¿Qué presidentes conformaron el Maximato?',
    answer: `Emilio Portes Gil (1928 - 1930)
      Pascual Ortiz Rubio (1930 - 1932)
      Abelardo Rodríguez Lujan (1932 - 1934) (Fundó el Palacio de Bellas Artes)`,
    type: 'text',
    id: '7vvzt5j'
  },
  {
    question: '¿Qué presidente inauguró la Diana Cazadora?',
    answer: 'Manuel Ávila Camacho',
    note: 'El 10 de Octubre de 1942, es una fuente monumental localizada en la avenida Paseo de la Reforma de la Ciudad de México.',
    options: [
      'Abelardo Rodríguez Lujan',
      'Emilio Portes Gil',
      'Álvaro Obregón'
    ],
    type: 'choice',
    id: 'y1lj4m'
  },
  {
    question: '¿Con qué otro nombre se conoce a la Diana Cazadora?',
    answer: 'Flechadora de las Estrellas del Norte',
    options: [
      'Lanzadora de las Estrellas del Norte',
      'Cazadora de las Estrellas del Norte',
      'Guerrera de las Estrellas del Norte'
    ],
    type: 'choice',
    id: 'd5euru'
  },
  {
    question: '¿Quién fue el primer secretario de salud?',
    answer: 'Gustavo Baz Prada',
    options: ['Manuel Ávila Camacho', 'Álvaro Obregón', 'José Lopez Portillo'],
    type: 'choice',
    id: '3bvwo'
  },
  {
    question: '¿Cuándo se creó el IMSS?',
    answer: '19 de enero de 1943',
    note: 'Durante la presidencia de Manuel Ávila Camacho.',
    options: [
      '19 de Diciembre de 1990',
      '19 de Septiembre de 1940',
      '19 de Julio de 1953'
    ],
    type: 'choice',
    id: 'ibcgz1g'
  },
  {
    question:
      '¿Qué presidente declaró la guerra contra los llamados países del eje (Alemania, Italia y Japón) durante la Segunda Guerra Mundial?',
    answer: 'Manuel Ávila Camacho',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '17luvl'
  },
  {
    question: '¿Cómo participó México en la Segunda Guerra Mundial?',
    answer: 'Con el envío de fuerza aérea expedicionaria, "Escuadrón 201"',
    options: [
      'Con el envio de petróleo y productos industriales a los aliados',
      'Con el envio de una fuerza expedicionaria de 500 hombres para la liberación de Paris',
      'Con el envío de 2 fragatas y un destructor para el frente del Pacífico'
    ],
    type: 'choice',
    id: 'rnxzei'
  },
  {
    question: '¿En qué batalla participó el "Escuadrón 201"?',
    answer: 'Segunda Guerra Mundial',
    options: [
      'Primera Guerra Mundial',
      'Guerra contra EEUU',
      'La Guerra de Independencia'
    ],
    type: 'choice',
    id: 'zmt27t'
  },
  {
    question: '¿Qué político comunista ruso recibió asilo político en México?',
    answer: 'Leon Trotsky',
    options: ['Aleksándr Protopópov', 'Zhorés Alfiórov', 'Ruslán Áushev'],
    type: 'choice',
    id: 'fchpcn'
  },
  {
    question: 'Extranjero con que tuvo amoríos con Frida Khalo',
    answer: 'Leon Trotsky',
    options: ['Aleksándr Protopópov', 'Zhorés Alfiórov', 'Ruslán Áushev'],
    type: 'choice',
    id: 't2xqok'
  },
  {
    question:
      '¿Cuál es la avenida más importante de CDMX y qué presidente le dió su nombre?',
    answer: 'Av. Reforma, Sebastián Lerdo de Tejada',
    options: [
      'Av. 16 de Septiembre, Alvaro Obregon',
      'Av. de los Insurgentes, Plutarco Elias Calles',
      'Av. Constituyentes, José Lopez Portillo'
    ],
    type: 'choice',
    id: 'kqsr4w'
  },
  {
    question: '¿Quién puso el nombre de Reforma a Paseo la Reforma?',
    answer: 'Sebastián Lerdo de Tejada',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '25qt8g'
  },
  {
    question:
      'Nombre del partido político que gobernó durante siete décadas en el siglo XX',
    answer: 'Partido Revolucionario Institucional (PRI)',
    note: '1930 - 2000',
    options: [
      'Partido Acción Nacional (PAN)',
      'Movimiento Ciudadano',
      'Partido del Trabajo (PT)'
    ],
    type: 'choice',
    id: '9eh92i'
  },
  {
    question: 'Institución educativa creada para carreras técnicas',
    answer: 'Instituto Politécnico Nacional (IPN)',
    options: ['Universidad Nacional', 'Universidad Abierta', 'UNAM'],
    type: 'choice',
    id: 'qnjl3v'
  },
  {
    question: 'Biblioteca considerada patrimonio cultural por la UNESCO',
    answer: 'Biblioteca Central de la UNAM',
    options: [
      'Biblioteca José Vasconcelos',
      'Biblioteca del Congreso de la Unión',
      'Biblioteca Miguel Lerdo de Tejada'
    ],
    type: 'choice',
    id: 'qeeyrn'
  },
  {
    question:
      '¿Qué universidad técnica creó Lázaro Cárdenas? / ¿Qué institución educativa creó el presidente Lázaro Cárdenas?',
    answer: 'Instituto Politécnico Nacional (IPN)',
    options: [
      'Universidad Nacional',
      'Universidad Abierta',
      'Instituto Lázaro Cárdenas'
    ],
    type: 'choice',
    id: 'q3trij'
  },
  {
    question: '¿Cuándo se creo el Instituto Politécnico Nacional (IPN)?',
    answer: '1 de Enero de 1936',
    options: [
      '1 de Enero de 1956',
      '1 de Diciembre de 1996',
      '1 de Julio de 1936'
    ],
    type: 'choice',
    id: 's7qn6'
  },
  {
    question: '¿Cuál es el lema del Instituto Politécnico Nacional (IPN)?',
    answer: 'La Técnica al Servicio de la Patria',
    options: [
      'Servicio a la Patria',
      'Yo Sirvo de la Patria',
      'La Técnica de la Patria'
    ],
    type: 'choice',
    id: 'msnx9j'
  },
  {
    question: 'El 18 de marzo de 1938 el presidente Lázaro Cárdenas',
    answer: 'Nacionalizó la industria petrolera',
    note: 'Expropió los bienes a las petroleras extranjeras.',
    options: [
      'Nacionalizó la industria minera',
      'Nacionalizó la industria textil',
      'Nacionalizó la industria química'
    ],
    type: 'choice',
    id: 'xzvder'
  },
  {
    question:
      '¿En qué año se fundó la Universidad Autónoma Metropolitana (UAM)?',
    answer:
      '01 de Enero de 1974 durante el gobierno de Luis Echeverría Álvarez',
    type: 'text',
    id: '56sow4'
  },
  {
    question:
      '¿Cuál es el lema de la Universidad Autónoma Metropolitana (UAM)?',
    answer: 'In Calli Ixcahuicopa (Casa abierta al tiempo)',
    options: [
      'La Técnica al Servicio de la Patria',
      'Tierra y libertad',
      'Por mi raza hablará el espíritu'
    ],
    type: 'choice',
    id: 'phazmf'
  },
  {
    question: 'Símbolo de la modernización inaugurado en 1950',
    answer: 'Torre Latinoamericana',
    options: ['Torre Reforma', 'Torre Ejecutiva Pemex', 'Torre Diana'],
    type: 'choice',
    id: 'so9fek'
  },
  {
    question: 'Nombre científico del petróleo',
    answer: 'Crudo, crudo petrolífero o petróleo crudo',
    type: 'text',
    id: 't1dxuo'
  },
  {
    question: '¿Cuándo se decreta el derecho al voto de la mujer?',
    answer: '17 de Octubre de 1953',
    note: 'Durante el mandato de Adolfo Ruíz Cortines.',
    options: [
      '17 de Octubre de 1853',
      '17 de Julio de 1953',
      '17 de Noviembre de 1953'
    ],
    type: 'choice',
    id: 'x2fgn'
  },
  {
    question: '¿Cuándo votan por primera vez las mujeres?',
    answer: '3 de Julio de 1955',
    options: [
      '3 de Julio de 1995',
      '3 de Diciembre de 1855',
      '3 de Octubre de 1955'
    ],
    type: 'choice',
    id: 'xjal2'
  },
  {
    question:
      'Durante el periodo presidencial de cual presidente se creó el ISSSTE',
    answer: 'Adolfo López Mateos',
    note: '1958 - 1964.',
    options: [
      'Plutarco Elias Calles',
      'Emilio Portes Gil',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '9xxi3'
  },
  {
    question: 'Fecha de mayor movilización estudiantil en México',
    answer: '26 de julio de 1968',
    options: [
      '20 de noviembre de 1910',
      '24 de diciembre de 1999',
      '3 de Julio de 1955'
    ],
    type: 'choice',
    id: 'pylvb6'
  },
  {
    question: '¿Cuándo fue la matanza de Tlatelolco?',
    answer: '2 de Octubre de 1968',
    options: [
      '2 de Julio de 1995',
      '3 de Diciembre de 1855',
      '5 de Octubre de 1955'
    ],
    type: 'choice',
    id: 'zvqre'
  },
  {
    question: 'Presidente al mando cuando fue la matanza de Tlatelolco',
    answer: 'Gustavo Díaz Ordaz',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'jdc3if'
  },
  {
    question: '¿Qué es el Tratado de Tlatelolco?',
    answer: 'Acuerdo de no proliferación de armas nucleares en América Latina',
    options: [
      'Documento en el que se acuerda la Independencia de México',
      'Tratado que puso fin a la guerra con EEUU',
      'Se acuerda el libre comercio con EEUU y Canadá'
    ],
    type: 'choice',
    id: '7noyod'
  },
  {
    question: '¿Cuándo se firmó Tratado de Tlatelolco?',
    answer: '14 de Febrero de 1967',
    options: [
      '20 de Noviembre de 1910',
      '10 de Diciembre de 1850',
      '16 de Septiembre de 1810'
    ],
    type: 'choice',
    id: 'cwafo7'
  },
  {
    question:
      'El Tratado de Tlatelolco, logro de la diplomacia mexicana, se atañe a',
    answer:
      'Alfonso García Robles, ganador del Premio Nobel de la Paz en 1982 y al presidente Gustavo Diaz Ordaz',
    options: [
      'José Mario Molina Pasquel, Premio Nobel de Química en 1995 y al presidente López Mateos',
      'Al presidente Lázaro Cárdenas',
      'Rodolfo Neri Vela'
    ],
    type: 'choice',
    id: '3icml6'
  },
  {
    question: '¿En qué fecha se inauguró el metro de la CDMX (línea rosa)?',
    answer: '4 de Septiembre de 1969',
    options: [
      '4 de Julio de 1995',
      '13 de Diciembre de 1855',
      '10 de Octubre de 1955'
    ],
    type: 'choice',
    id: 'h06tu'
  },
  {
    question: 'Bajo qué presidencia se inauguró el metro de la CDMX',
    answer: 'Gustavo Diaz Ordaz',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'q3nqr'
  },
  {
    question: '¿Qué significa CONALEP?',
    answer: 'Colegio Nacional de Educación Profesional Técnica',
    options: [
      'Escuela Nacional de Educación Profesional Técnica',
      'Colegio Nacional de Educación Técnica',
      'Colegio de Educación Profesional Técnica'
    ],
    type: 'choice',
    id: 'p1xktzo'
  },
  {
    question: '¿Cuándo y quien fundó CONALEP?',
    answer:
      'Abril de 1978 por el Ing. José Antonio Padilla Segura (presidencia Lopez Portillo)',
    options: [
      'Julio de 1998 por el Ing. Rodolfo Neri Vela (presidencia Lázaro Cárdenas)',
      'Enero de 1783 por el Ing. José Mario Molina (presidencia López Mateos)',
      'Marzo de 1950 por el Ing. Manuel Gutierrez (presidencia Ruíz Cortines)'
    ],
    type: 'choice',
    id: 'ibhiep'
  },
  {
    question:
      '¿Qué presidente recibió al Papa Juan Pablo II en su primera visita?',
    answer: 'José Lopez Portillo',
    note: 'Primera visita 26 de enero - 1 de febrero de 1979.',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'Adolfo Ruíz Cortines'
    ],
    type: 'choice',
    id: 'nbihf'
  },
  {
    question: '¿Quién nacionalizó la Banca?',
    answer: 'José Lopez Portillo',
    note: 'El 1 de septiembre de 1982.',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'Emilio Portes Gil'
    ],
    type: 'choice',
    id: '0wsjtr'
  },
  {
    question: '¿Cuáles fueron los presidentes de la época del neoliberalismo?',
    answer: `Carlos Salinas de Gortari (1988 - 1994)
      Ernesto Zedillo (1994 - 2000)
      Vicente Fox (2000 - 2006)`,
    type: 'text',
    id: 'rnfqdk'
  },
  {
    question: '¿Cuándo se firmó el tratado de libre comercio (TLC, NAFTA)?',
    answer: '17 de Diciembre de 1992',
    options: [
      '17 de Julio de 1990',
      '17 de Diciembre de 1982',
      '10 de Diciembre de 1992'
    ],
    type: 'choice',
    id: 'icbeoq'
  },
  {
    question:
      '¿Cuándo entró en vigor el tratado de libre comercio (TLC, NAFTA)?',
    answer: '01 de Enero de 1994',
    options: [
      '01 de Julio de 1990',
      '17 de Diciembre de 1982',
      '10 de Diciembre de 1992'
    ],
    type: 'choice',
    id: 'qgtdj'
  },
  {
    question:
      'Nombre del presidente que firmó el tratado de libre comercio NAFTA',
    answer: 'Carlos Salinas de Gortari',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: 'vb4dny'
  },
  {
    question:
      '¿Con qué países celebró México el tratado comercial conocido como TLCAN o NAFTA?',
    answer: 'Estados Unidos y Canadá',
    options: [
      'Estados Unidos y Belice',
      'Estados Unidos y Guatemala',
      'Estados Unidos y Panamá'
    ],
    type: 'choice',
    id: 'f0g2r2'
  },
  {
    question:
      '¿Cómo se llamó el movimiento civil en Chiapas en 1994 del Comandante Marco?',
    answer:
      'Movimiento Zapatista / Conflicto Chiapaneco /  Ejército Zapatista de Liberación Nacional (EZLN)',
    options: [
      'Movimiento Quinta República',
      'Movimiento Ciudadano por la Justicia 5 de Julio',
      'Movimiento de Regeneración Nacional'
    ],
    type: 'choice',
    id: '232q2v'
  },
  {
    question: '¿Cuándo se inició el Movimiento Zapatista?',
    answer: '1994',
    options: ['1992', '1990', '1980'],
    type: 'choice',
    id: 'nhrkhih'
  },
  {
    question:
      '¿Cómo se llama el seguro de salud creado en 2004 que ayuda a las personas desempleadas o que trabajan independiente?',
    answer: 'Seguro Popular de Salud',
    options: [
      'Seguro del Poder Popular de Salud',
      'Seguro de Salud',
      'Salud para todos'
    ],
    type: 'choice',
    id: 'yxyv6'
  },
  {
    question: 'Fecha de inicio del voto mexicano en el exterior',
    answer: '2005',
    options: ['2000', '2003', '2010'],
    type: 'choice',
    id: '1kivqa'
  },
  {
    question: '¿Cuándo fue el apagón analógico en México?',
    answer: '31 de Diciembre de 2015',
    options: [
      '31 de Febrero de 2015',
      '31 de Julio de 2000',
      '31 de Octubre de 2018'
    ],
    type: 'choice',
    id: 'lmitgi'
  },
  {
    question:
      '¿En qué año fue el temblor por el cual se cayó el Ángel de la Independencia?',
    answer: '1957',
    options: ['1950', '1880', '1987'],
    type: 'choice',
    id: '9imf29'
  },
  {
    question: '¿Cuándo se cayó el Ángel de la Independencia?',
    answer: '28 de Julio de 1957',
    options: [
      '31 de Febrero de 1974',
      '31 de Diciembre de 2000',
      '31 de Octubre de 1950'
    ],
    type: 'choice',
    id: 'mdwh2l'
  },
  {
    question:
      'La estructura donde se construiría el Palacio Legislativo Federal de Emile Bernard, se utilizó para edificar el monumento de',
    answer: 'Monumento a la Revolución',
    options: [
      'Monumento a los Héroes de la Independencia',
      'Monumento a Diana Cazadora',
      'Monumento a los Niños Héroes'
    ],
    type: 'choice',
    id: 't37f6e'
  },
  {
    question:
      'Fué construido para ser el Palacio Legislativo pero terminó siendo',
    answer: 'Monumento a la Revolución',
    options: [
      'Monumento a los Héroes de la Independencia',
      'Monumento a Diana Cazadora',
      'Monumento a los Niños Héroes'
    ],
    type: 'choice',
    id: 'bsyy8v'
  },
  {
    question: 'Rascacielos de 43 pisos que ha resistido 3 terremotos',
    answer: 'Torre Latinoamericana',
    options: ['Torre Reforma', 'Torre Ejecutiva Pemex', 'Torre Diana'],
    type: 'choice',
    id: 'njah2q'
  },
  {
    question:
      '¿Qué presidente estuvo durante el terremoto de 1985 y el mundial de 1986?',
    answer: 'Miguel de la Madrid',
    options: [
      'Plutarco Elias Calles',
      'Adolfo López Mateos',
      'José Lopez Portillo'
    ],
    type: 'choice',
    id: '43kjlf'
  },
  {
    question: '¿Quién está en el billete de 100 pesos?',
    answer: 'Sor Juana Inés de la Cruz',
    options: [
      'Benito Juarez',
      'Miguel Hidalgo y Costilla',
      'Francisco I. Madero'
    ],
    type: 'choice',
    id: 'lxwrsn'
  },
  {
    question: '¿Qué representa el monumento La Estela de Luz?',
    answer:
      'Festejo del Bicentenario de la Independencia y Centenario de la Revolución Mexicana',
    options: [
      'Tributo a la Diana Cazadora',
      'Festejo del Centenario de la Revolución Mexicana',
      'Tributo a la suavicrema'
    ],
    type: 'choice',
    id: 'e9bwco'
  },
  {
    question:
      '¿Cuál fue el monumento construido para conmemorar el Bicentenario de la Independencia y el Centenario de la Revolución Mexicana?',
    answer: 'Estela de Luz',
    note: 'Se inauguró el 7 de enero de 2012.',
    options: [
      'Monumento a los Héroes de la Independencia',
      'Monumento a Diana Cazadora',
      'Monumento a los Niños Héroes'
    ],
    type: 'choice',
    id: 'hoex7w'
  },
  {
    question:
      '¿En qué año se cambió el nombre de Distrito Federal a Ciudad de México?',
    answer: '2016',
    note: '29 Enero 2016.',
    options: ['2015', '2010', '2000'],
    type: 'choice',
    id: '8cco1h'
  },
  {
    question: 'Estado que cambió su nombre en 2016',
    answer: 'Ciudad de México',
    options: ['Quintana Roo', 'Jalisco', 'Colima'],
    type: 'choice',
    id: 'pugot'
  },
  {
    question: 'En la ciudad de México, "El Zócalo" alude a',
    answer: 'La Plaza Principal o Plaza de la Constitución',
    options: ['Plaza Patria', 'Plaza Roja', 'Plaza de los Héroes'],
    type: 'choice',
    id: 'b3eanf'
  },
  {
    question: '¿Cómo se conoce el centro histórico de CDMX? ',
    answer: 'La Ciudad de los Palacios',
    options: [
      'La Ciudad de los Héroes',
      'Los Palacios',
      'La Ciudad de los Eterna'
    ],
    type: 'choice',
    id: '1cafmf'
  },
  {
    question: '¿Cuál es el estado con mayor producción de zapatos?',
    answer: 'Guanajuato',
    options: ['Jalisco', 'Nuevo León', 'Estado de México'],
    type: 'choice',
    id: '2rc1'
  },
  {
    question: '¿Cuál de las siguientes aseveraciones sobre México es falsa? ',
    answer:
      'México es uno de los países con menor desigualdad social en América Latina',
    options: [
      'La superficie de México es de 1.964 MM de Km²',
      'Río Bravo, es el más largo del país',
      'La capital de Jalisco es Guadalajara'
    ],
    type: 'choice',
    id: '7z0bvt'
  }
];
