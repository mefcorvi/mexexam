import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuál fué decretado deporte nacional en 1933?',
  answer: 'La charrería',
  options: ['El boxeo', 'El fútbol', 'La equitación'],
  type: 'choice',
  id: 'zaszi',
  ru: {
    question: 'Какой вид спорта был объявлен национальным в 1933 году?',
    answer: 'Чаррерия',
    options: ['Бокс', 'Футбол', 'Верховая езда']
  },
  en: {
    question: 'What was declared a national sport in 1933?',
    answer: 'La charrería',
    options: [
      "Boxing",
      "Soccer",
      "Equestrianism"
    ]
  }
};
