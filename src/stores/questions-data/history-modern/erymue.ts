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
  }
};
