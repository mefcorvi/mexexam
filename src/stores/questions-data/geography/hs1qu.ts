import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuál es la montaña más alta de México?',
  answer: 'Citlaltépetl (Pico de Orizaba)',
  note: 'Ubicada entre los estados de Veracruz y Puebla.',
  options: ['Popocatépetl', 'Nevado de Toluca', 'Iztaccíhuatl'],
  type: 'choice',
  id: 'hs1qu',
  en: {
    question: 'What is the highest mountain in Mexico?',
    answer: 'Citlaltépetl (Pico de Orizaba)',
    options: [
      "Popocatépetl",
      "Nevado de Toluca",
      "Iztaccíhuatl"
    ],
    note: 'Located between the states of Veracruz and Puebla.'
  },
  ru: {
    question: 'Какая самая высокая гора в Мексике?',
    answer: 'Ситлалтепетль (Пик Орисаба)',
    options: ['Попокатепетль', 'Невадо де Толука', 'Истаксиуатль'],
    note: 'Расположена между штатами Веракрус и Пуэбла.'
  }
};
