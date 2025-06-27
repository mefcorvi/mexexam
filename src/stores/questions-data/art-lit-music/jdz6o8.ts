import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Escribió sobre Francisco I. Madero',
  answer: 'Paco Ignacio Taibo II',
  options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
  type: 'choice',
  id: 'jdz6o8',
  en: {
    question: 'He wrote about Francisco I. Madero',
    answer: 'Paco Ignacio Taibo II',
    options: [
      "Octavio Paz",
      "Elena Poniatowska",
      "Carlos Fuentes"
    ]
  },
  ru: {
    question: 'Кто написал о Франсиско И. Мадеро?',
    answer: 'Пако Игнасио Тайбо II',
    options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
  },
  tags: [
    {
      type: 'person',
      name: 'Paco Ignacio Taibo II'
    },
    {
      type: 'person',
      name: 'Francisco I. Madero'
    },
    {
      type: 'date',
      value: '2009'
    }
  ]
};
