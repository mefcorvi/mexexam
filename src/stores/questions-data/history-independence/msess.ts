import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién fué el primer presidente de México?',
  answer: 'Guadalupe Victoria',
  note: 'En 1824.',
  options: [
    'Jose María Bocanegra',
    'Anastacio Bustamante',
    'Vicente Guerrero'
  ],
  type: 'choice',
  id: 'msess',
  en: {
    question: 'Who was the first president of Mexico?',
    answer: 'Guadalupe Victoria',
    options: [
      "Jose María Bocanegra",
      "Anastacio Bustamante",
      "Vicente Guerrero"
    ],
    note: 'In 1824.'
  },
  ru: {
    question: 'Кто был первым президентом Мексики?',
    answer: 'Гвадалупе Виктория',
    options: [
      'Хосе Мария Боканегра',
      'Анастасио Бустаманте',
      'Висенте Герреро'
    ]
  },
  zh: {
    question: '墨西哥的第一任总统是谁？',
    answer: '瓜达卢佩·维多利亚',
    options: [
      "何塞·玛丽亚·博卡内格拉",
      "阿纳斯塔西奥·布斯塔曼特",
      "文森特·格雷罗"
    ],
    note: '在1824年。'
  }
};
