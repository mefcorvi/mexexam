import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién fué Pancho Villa?',
  answer: 'Líder de la revolución mexicana',
  note: 'Apareció en escena cuando Venustiano Carranza llamó a formar el ejército constitucionalista.',
  options: [
    'Líder de la independencia',
    'Virrey de España',
    'Un traidor de la revolución mexicana'
  ],
  type: 'choice',
  id: 'r9zca',
  ru: {
    question: 'Кем был Панчо Вилья?',
    answer: 'Лидер мексиканской революции',
    options: [
      'Лидер независимости',
      'Вице-король Испании',
      'Предатель мексиканской революции'
    ],
    note: 'Появился на сцене, когда Венустиано Карранса призвал создать конституционную армию.'
  },
  en: {
    question: 'Who was Pancho Villa?',
    answer: 'Leader of the Mexican Revolution',
    options: [
      "Leader of the independence",
      "Viceroy of Spain",
      "A traitor of the Mexican Revolution"
    ],
    note: 'He came onto the scene when Venustiano Carranza called to form the constitutionalist army.'
  },
  zh: {
    question: '潘乔·维拉是谁？',
    answer: '墨西哥革命的领袖',
    options: [
      "独立领袖",
      "西班牙总督",
      "墨西哥革命的叛徒"
    ],
    note: '当韦努斯蒂亚诺·卡兰萨呼吁组建宪法军时，他出现在舞台上。'
  }
};
