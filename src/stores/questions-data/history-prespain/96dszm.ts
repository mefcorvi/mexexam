import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué es el Monte Albán?',
  answer: 'Fue la antigua capital de los Zapotecos',
  note: 'Contó con una población de 35.000 personas.',
  options: [
    'Fue la antigua capital de los Mixtecos',
    'Fue la antigua capital de los Olmecas',
    'Fue la antigua capital de los Mayas'
  ],
  type: 'choice',
  id: '96dszm',
  en: {
    question: 'What is Monte Albán?',
    answer: 'It was the ancient capital of the Zapotecs.',
    options: [
      "It was the ancient capital of the Mixtecs.",
      "It was the ancient capital of the Olmecs.",
      "It was the ancient capital of the Mayans."
    ],
    note: 'It had a population of 35,000 people.'
  },
  ru: {
    question: 'Что такое Монте-Альбан?',
    answer: 'Это была древняя столица сапотеков',
    options: [
      'Это была древняя столица микстеков',
      'Это была древняя столица ольмеков',
      'Это была древняя столица майя'
    ],
    note: 'Имел население в 35 000 человек.'
  }
};
