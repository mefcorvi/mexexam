import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿A quién representan los senadores?',
  answer: 'A las entidades federativas',
  options: [
    'Al presidente de la republica',
    'A jueces y magistrados',
    'A los municipios'
  ],
  type: 'choice',
  id: '0uvmu',
  en: {
    question: 'Who do the senators represent?',
    answer: 'The federal entities',
    options: [
      "The president of the republic",
      "To judges and magistrates",
      "To the municipalities"
    ]
  },
  ru: {
    question: 'Кого представляют сенаторы?',
    answer: 'Субъекты федерации',
    options: ['Президента республики', 'Судей и магистрата', 'Муниципалитеты']
  },
  zh: {
    question: '参议员代表谁？',
    answer: '联邦实体',
    options: [
      "代表共和国总统",
      "代表法官和裁判",
      "代表市镇"
    ]
  }
};
