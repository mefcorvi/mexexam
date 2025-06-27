import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    'Película mexicana basada en una novela escrita por un extranjero',
  answer: 'Macario',
  note: 'Escrita por B. Traven, fue un actor y novelista alemán, se trata de la relación de un indígena con la muerte durante la víspera del día de muertos en la Nueva España.',
  options: ['En vísperas de una guerra', 'La Lucha', 'Vámonos'],
  type: 'choice',
  id: 'piqdrf',
  en: {
    question: 'Mexican film based on a novel written by a foreigner',
    answer: 'Macario',
    options: [
      "On the Eve of a War",
      "The Struggle",
      "Let's Go"
    ],
    note: 'Written by B. Traven, he was a German actor and novelist, it deals with the relationship of an indigenous person with death during the eve of the Day of the Dead in New Spain.'
  },
  ru: {
    question: 'Мексиканский фильм, основанный на романе иностранного автора',
    answer: 'Макарио',
    options: ['Накануне войны', 'Борьба', 'Вамонес'],
    note: 'Написан Б. Травеном, немецким актером и романистом, рассказывает о взаимоотношениях индейца со смертью накануне Дня мертвых в Новой Испании.'
  }
};
