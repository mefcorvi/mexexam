import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién escribió "Relámpagos de Agosto"?',
  answer: 'Jorge Ibargüengoitia',
  options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
  type: 'choice',
  id: 'o3huvr',
  en: {
    question: 'Who wrote "Relámpagos de Agosto"?',
    answer: 'Jorge Ibargüengoitia',
    options: [
      "Octavio Paz",
      "Elena Poniatowska",
      "Carlos Fuentes"
    ]
  },
  ru: {
    question: 'Кто написал "Августовские молнии"?',
    answer: 'Хорхе Ибаргуэнгоития',
    options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
  },
  tags: [
    {
      type: 'person',
      name: 'Jorge Ibargüengoitia'
    },
    {
      type: 'date',
      value: '1964'
    }
  ],
  zh: {
    question: '谁写了《八月的闪电》？',
    answer: 'Jorge Ibargüengoitia',
    options: [
      "Octavio Paz",
      "Elena Poniatowska",
      "Carlos Fuentes"
    ]
  }
};
