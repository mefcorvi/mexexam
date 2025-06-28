import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién es el máximo comandante de las Fuerzas Armadas?',
  answer: 'El presidente de la república',
  options: [
    'El Estado Mayor',
    'El general en servicio de mayor rango en el ejercito',
    'El titular de la Secretaría de la Defensa Nacional'
  ],
  type: 'choice',
  id: 'sqxvrk',
  en: {
    question: 'Who is the highest commander of the Armed Forces?',
    answer: 'The president of the republic',
    options: [
      "The General Staff",
      "The highest-ranking active general in the army",
      "The head of the Secretariat of National Defense"
    ]
  },
  ru: {
    question: 'Кто является верховным командующим Вооруженными силами?',
    answer: 'Президент республики',
    options: [
      'Генеральный штаб',
      'Генерал с наивысшим рангом в армии',
      'Руководитель Министерства национальной обороны'
    ]
  },
  zh: {
    question: '谁是武装部队的最高指挥官？',
    answer: '共和国总统',
    options: [
      "总参谋部",
      "现役最高军衔的将军",
      "国防部部长"
    ]
  }
};
