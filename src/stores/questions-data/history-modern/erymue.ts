import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Con qué otro nombre se conoce a la Diana Cazadora?',
  answer: 'Flechadora de las Estrellas del Norte',
  options: [
    'Lanzadora de las Estrellas del Norte',
    'Cazadora de las Estrellas del Norte',
    'Guerrera de las Estrellas del Norte'
  ],
  type: 'choice',
  id: 'erymue',
  en: {
    question: 'What is the other name for the Hunter\'s Moon?',
    answer: 'Archer of the North Stars',
    options: [
      "Launcher of the North Stars",
      "Hunter of the North Stars",
      "Warrior of the North Stars"
    ]
  },
  ru: {
    question: 'Под каким другим именем известна Диана-Охотница?',
    answer: 'Стрелок с Северных Звезд',
    options: [
      'Метательница Северных Звезд',
      'Охотница Северных Звезд',
      'Воин Северных Звезд'
    ]
  },
  zh: {
    question: '猎手女神还有什么其他名字？',
    answer: '北方星辰的射手',
    options: [
      "北方星辰的投掷者",
      "北方星辰的猎手",
      "北方星辰的战士"
    ]
  }
};
