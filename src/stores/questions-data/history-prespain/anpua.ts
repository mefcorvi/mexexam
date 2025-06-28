import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué fue Tenochtitlán?',
  answer: 'Capital de los Mexicas',
  options: [
    'Capital de los Teotihuacanos',
    'Capital de los Tarascos',
    'Capital de los Toltecas'
  ],
  type: 'choice',
  id: 'anpua',
  en: {
    question: 'What was Tenochtitlán?',
    answer: 'Capital of the Mexicas',
    options: [
      "Capital of the Teotihuacans",
      "Capital of the Tarascans",
      "Capital of the Toltecs"
    ]
  },
  ru: {
    question: 'Что такое Теночтитлан?',
    answer: 'Столица Мексики',
    options: [
      'Столица Теотиуаканцев',
      'Столица Тарасков',
      'Столица Тольтеков'
    ]
  },
  zh: {
    question: '特诺奇提特兰是什么？',
    answer: '墨西哥人的首都',
    options: [
      "特奥蒂瓦坎人的首都",
      "塔拉斯科人的首都",
      "托尔特克人的首都"
    ]
  }
};
