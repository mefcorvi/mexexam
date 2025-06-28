import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Cuál es el nombre del caldo mexicano elaborado con granos de maíz?',
  answer: 'Pozole',
  options: ['Tatemado', 'Birria', 'Sopa azteca'],
  type: 'choice',
  id: 'jf4ubs',
  en: {
    question: 'What is the name of the Mexican broth made with corn grains?',
    answer: 'Pozole',
    options: [
      "Tatemado",
      "Birria",
      "Sopa azteca"
    ]
  },
  ru: {
    question:
      'Как называется мексиканский суп, приготовленный из кукурузных зерен?',
    answer: 'Позоле',
    options: ['Татемадо', 'Биррия', 'Ацтекский суп']
  },
  zh: {
    question: '墨西哥用玉米粒制作的汤叫什么名字？',
    answer: 'Pozole',
    options: [
      "Tatemado",
      "Birria",
      "Sopa azteca"
    ]
  }
};
