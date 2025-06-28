import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién imparte la justicia en México?',
  answer: 'El Poder Judicial con división federal y estatal',
  options: [
    'La policía en sus tres niveles, federal, estatal y municipal',
    'El presidente y la camara de diputados',
    'El senado de la república'
  ],
  type: 'choice',
  id: 'xr1mfr',
  en: {
    question: 'Who administers justice in Mexico?',
    answer: 'The Judicial Power with federal and state division',
    options: [
      "The police at its three levels: federal, state, and municipal",
      "The president and the chamber of deputies",
      "The Senate of the Republic"
    ]
  },
  ru: {
    question: 'Кто осуществляет правосудие в Мексике?',
    answer: 'Судебная власть с федеральным и штатным делением',
    options: [
      'Полиция на трех уровнях, федеральном, штатном и муниципальном',
      'Президент и палата депутатов',
      'Сенат республики'
    ]
  },
  zh: {
    question: '谁在墨西哥实施司法？',
    answer: '联邦和州的司法权',
    options: [
      "联邦、州和市三级的警察",
      "总统和众议院",
      "共和国参议院"
    ]
  }
};
