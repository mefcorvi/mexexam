import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'El teatro de mayor prestigio en la Ciudad de México es',
  answer: 'Palacio de Bellas Artes',
  options: ['Teatro Mayor', 'Teatro Juarez', 'Palacio del Arte y la Cultura'],
  type: 'choice',
  id: 'oqiuc',
  note: `    <ul>
        <li><strong>Teatro Mayor</strong> – No existe un teatro con este nombre en la Ciudad de México.</li>
        <li><strong>Teatro Juárez</strong> – Se encuentra en Guanajuato, no en la Ciudad de México.</li>
        <li><strong>Palacio del Arte y la Cultura</strong> – No corresponde a ningún recinto reconocido en la ciudad.</li>
        <li><strong>Palacio de Bellas Artes</strong> – Es el teatro más prestigioso y emblemático de la Ciudad de México.</li>
    </ul>`,
  en: {
    question: 'The most prestigious theater in Mexico City is',
    answer: 'Palacio de Bellas Artes',
    options: [
      "Teatro Mayor",
      "Teatro Juarez",
      "Palacio del Arte y la Cultura"
    ]
  },
  ru: {
    question: 'Самый престижный театр в Мехико это',
    answer: 'Дворец изящных искусств',
    options: ['Театр Майор', 'Театр Хуарес', 'Дворец искусства и культуры'],
    note: `<ul>
          <li><strong>Teatro Mayor</strong> – В Мехико нет театра с таким названием.</li>
          <li><strong>Teatro Juárez</strong> – Находится в Гуанахуато, а не в Мехико.</li>
          <li><strong>Palacio del Arte y la Cultura</strong> – Не соответствует какому-либо известному театру в городе.</li>
          <li><strong>Palacio de Bellas Artes</strong> – Это самый престижный и знаковый театр Мехико.</li>
      </ul>`
  },
  tags: [
    {
      type: 'state',
      value: 'CDMX'
    }
  ],
  zh: {
    question: '墨西哥城最有声望的剧院是',
    answer: '美术宫',
    options: [
      "大剧院",
      "华雷斯剧院",
      "艺术与文化宫"
    ]
  }
};
