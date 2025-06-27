import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuánto tiempo dura el mandato presidencial en México?',
  answer: '6 años sin reelección',
  options: [
    '4 años con capacidad de reelegirse sólamente 1 periodo más',
    '4 años sin reeleción',
    '6 años con reeleciónes indefinidas'
  ],
  type: 'choice',
  id: 'bj2ii',
  en: {
    question: 'How long is the presidential term in Mexico?',
    answer: '6 years without re-election',
    options: [
      "4 years with the ability to re-elect for only 1 more term",
      "4 years without re-election",
      "6 years with indefinite re-elections"
    ]
  },
  ru: {
    question: 'Как долго длится президентский срок в Мексике?',
    answer: '6 лет без переизбрания',
    options: [
      '4 года с возможностью переизбрания только на 1 дополнительный период',
      '4 года без переизбрания',
      '6 лет с неограниченным переизбранием'
    ]
  }
};
