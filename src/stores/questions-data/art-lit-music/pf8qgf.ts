import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién escribió "El llano en llamas"?',
  answer: 'Juan Rulfo',
  options: ['Octavio Paz', 'Carlos Fuentes', 'Elena Poniatowska'],
  type: 'choice',
  id: 'pf8qgf',
  en: {
    question: 'Who wrote "El llano en llamas"?',
    answer: 'Juan Rulfo',
    options: [
      "Octavio Paz",
      "Carlos Fuentes",
      "Elena Poniatowska"
    ]
  },
  ru: {
    question: 'Кто написал "Пылающую равнину"?',
    answer: 'Хуан Рульфо',
    options: ['Октавио Пас', 'Карлос Фуэнтес', 'Элена Понятовска']
  },
  tags: [
    {
      type: 'person',
      name: 'Juan Rulfo'
    },
    {
      type: 'date',
      value: '1953-09-01'
    }
  ]
};
