import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Nombre de la flor que se usa el día de muertos',
  answer: 'Cempasúchil',
  note: 'Comúnmente de color amarillo o naranja.',
  options: ['Nochebuena', 'Dalia', 'Magnolia'],
  type: 'choice',
  id: 'qvrsn',
  ru: {
    question: 'Название цветка, который используется в День мертвых',
    answer: 'Цемпасучиль',
    options: ['Пуансеттия', 'Георгин', 'Магнолия'],
    note: 'Обычно желтого или оранжевого цвета.'
  },
  en: {
    question: 'Name of the flower used on the Day of the Dead',
    answer: 'Cempasúchil',
    options: [
      "Poinsettia",
      "Dahlia",
      "Magnolia"
    ],
    note: 'Commonly yellow or orange.'
  },
  zh: {
    question: '在亡灵节使用的花的名称',
    answer: 'Cempasúchil',
    options: [
      "圣诞红",
      "大丽花",
      "木兰"
    ],
    note: '通常是黄色或橙色。'
  }
};
