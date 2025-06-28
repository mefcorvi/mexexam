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
  ],
  zh: {
    question: '谁写了《Aura》？',
    answer: '卡洛斯·富恩特斯',
    options: [
      "奥克塔维奥·帕斯",
      "胡安·鲁尔福",
      "埃琳娜·波尼亚托夫斯卡"
    ]
  }
};
