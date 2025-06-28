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
  ],
  zh: {
    question: '谁写了《火焰中的平原》？',
    answer: '胡安·鲁尔福',
    options: [
      "奥克塔维奥·帕斯",
      "卡洛斯·富恩特斯",
      "埃琳娜·波尼亚托夫斯卡"
    ]
  }
};
