import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Cómo se llama donde van a parar los fiesteros? (conductores alcoholizados)',
  answer: 'El torito',
  options: ['El becerrito', 'La vaquita', 'El corral'],
  type: 'choice',
  id: 'srd279',
  ru: {
    question:
      'Как называется место, куда отправляют гуляк? (пьяных водителей)',
    answer: 'Торито',
    options: ['Бесеррито', 'Вакита', 'Корраль']
  },
  en: {
    question: 'What is the name of where party-goers end up? (drunk drivers)',
    answer: 'El torito',
    options: [
      "El becerrito",
      "La vaquita",
      "El corral"
    ]
  },
  zh: {
    question: '喝酒司机们最终去哪里？',
    answer: '小公牛',
    options: [
      "小牛仔",
      "小奶牛",
      "牛圈"
    ]
  }
};
