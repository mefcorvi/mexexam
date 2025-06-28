import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Por qué es conocida Sor Juana Inés de la Cruz?',
  answer: 'Escritora más importante del período Novo-hispáno',
  options: ['Actriz en el período Revolucionario', 'Traductora', 'Cantante'],
  type: 'choice',
  id: 'qbua2',
  en: {
    question: 'Why is Sor Juana Inés de la Cruz known?',
    answer: 'The most important writer of the New Spanish period',
    options: [
      "Actress in the Revolutionary period",
      "Translator",
      "Singer"
    ]
  },
  ru: {
    question: 'Почему известна Сор Хуана Инес де ла Крус?',
    answer: 'Самая важная писательница новоиспанского периода',
    options: ['Актриса в период революции', 'Переводчица', 'Певица']
  },
  tags: [
    {
      type: 'person',
      name: 'Sor Juana Inés de la Cruz'
    }
  ],
  zh: {
    question: '索尔·胡安娜·伊内斯·德拉克鲁斯为什么出名？',
    answer: '新西班牙时期最重要的作家',
    options: [
      "革命时期的演员",
      "翻译家",
      "歌手"
    ]
  }
};
