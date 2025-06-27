import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién fue el último Virrey de la Nueva España?',
  answer: 'Juan Ruiz de Apodaca',
  note: 'Algunas fuentes señalan a Juan O`Donoju como el último virrey de la Nueva España, sin embargo su cargo exactamente se llamó Jefe político superior de la Nueva España, Juan Ruiz de Apodaca fué el último con el título de Virrey.',
  options: [
    'Martín Enríquez de Almansa',
    'Antonio de Mendoza y Pacheco',
    'Luis de Velasco y Ruiz de Alarcón'
  ],
  type: 'choice',
  id: 'dicqp',
  en: {
    question: 'Who was the last Viceroy of New Spain?',
    answer: 'Juan Ruiz de Apodaca',
    options: [
      "Martín Enríquez de Almansa",
      "Antonio de Mendoza y Pacheco",
      "Luis de Velasco y Ruiz de Alarcón"
    ],
    note: 'Some sources point to Juan O\'Donoju as the last viceroy of New Spain; however, his position was officially titled Superior Political Chief of New Spain. Juan Ruiz de Apodaca was the last to hold the title of Viceroy.'
  },
  ru: {
    question: 'Кто был последним вице-королем Новой Испании?',
    answer: 'Хуан Руис де Аподака',
    options: [
      'Мартин Энрикес де Алманса',
      'Антонио де Мендоса и Пачеко',
      'Луис де Веласко и Руис де Аларкон'
    ],
    note: 'Некоторые источники называют Хуана О`Доноху последним вице-королем Новой Испании, однако его должность официально называлась Главный политический начальник Новой Испании, Хуан Руис де Аподака был последним, кто носил титул вице-короля.'
  }
};
