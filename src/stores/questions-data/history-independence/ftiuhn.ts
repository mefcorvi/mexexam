import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién fué Porfirio Díaz?',
  answer:
    'Militar Mexicano que se destacó en la batalla del 5 de mayo en Puebla contra los franceses, posteriormente presidente de México',
  options: [
    'Conocido por promover la lucha de independencia',
    'Autor de las famosas Catrinas',
    'Lider de la victoria militar de los realistas sobre las fuerzas insurgentes mexicanas'
  ],
  type: 'choice',
  id: 'ftiuhn',
  en: {
    question: 'Who was Porfirio Díaz?',
    answer: 'Mexican military leader who distinguished himself in the Battle of May 5 in Puebla against the French, later president of Mexico',
    options: [
      "Known for promoting the struggle for independence",
      "Author of the famous Catrinas",
      "Leader of the military victory of the royalists over the Mexican insurgent forces"
    ]
  },
  ru: {
    question: 'Кто был Порфирио Диас?',
    answer:
      'Мексиканский военный, отличившийся в битве 5 мая в Пуэбле против французов, позднее президент Мексики',
    options: [
      'Известен продвижением борьбы за независимость',
      'Автор знаменитых Катринас',
      'Лидер военной победы роялистов над мексиканскими повстанческими силами'
    ]
  }
};
