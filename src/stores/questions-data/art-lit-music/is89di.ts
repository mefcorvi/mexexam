import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién escribió "Aura"?',
  answer: 'Carlos Fuentes',
  options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
  type: 'choice',
  id: 'is89di',
  en: {
    question: 'Who wrote "Aura"?',
    answer: 'Carlos Fuentes',
    options: [
      "Octavio Paz",
      "Juan Rulfo",
      "Elena Poniatowska"
    ]
  },
  ru: {
    question: 'Кто написал "Ауру"?',
    answer: 'Карлос Фуэнтес',
    options: ['Октавио Пас', 'Хуан Рульфо', 'Элена Понятовска']
  },
  tags: [
    {
      type: 'person',
      name: 'Carlos Fuentes'
    },
    {
      type: 'date',
      value: '1986'
    }
  ]
};
