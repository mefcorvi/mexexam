import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿De dónde es el queso menonita?',
  answer: 'Chihuahua',
  options: ['Coahuila', 'Sonora', 'Colima'],
  type: 'choice',
  id: 'eualk',
  en: {
    question: 'Where is Mennonite cheese from?',
    answer: 'Chihuahua',
    options: [
      "Coahuila",
      "Sonora",
      "Colima"
    ]
  },
  ru: {
    question: 'Откуда происходит менонитский сыр?',
    answer: 'Чиуауа',
    options: ['Коауила', 'Сонора', 'Колима']
  }
};
