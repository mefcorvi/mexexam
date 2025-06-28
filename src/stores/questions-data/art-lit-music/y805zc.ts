import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién escribió "Los Cinco Soles de México"?',
  answer: 'Carlos Fuentes',
  options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
  type: 'choice',
  id: 'y805zc',
  en: {
    question: 'Who wrote "Los Cinco Soles de México"?',
    answer: 'Carlos Fuentes',
    options: [
      "Octavio Paz",
      "Juan Rulfo",
      "Elena Poniatowska"
    ]
  },
  ru: {
    question: 'Кто написал "Пять солнц Мексики"?',
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
      value: '2000'
    }
  ],
  zh: {
    question: '谁写了《墨西哥的五个太阳》？',
    answer: '卡洛斯·富恩特斯',
    options: [
      "奥克塔维奥·帕斯",
      "胡安·鲁尔福",
      "埃莱娜·波尼亚托夫斯卡"
    ]
  }
};
