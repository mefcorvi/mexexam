import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿A qué se debe el nombre del edificio de los danzantes en Monte Albán?',
  answer:
    'A que las figuras esculpidas en sus lápidas parecen moverse o contorsionarse',
  options: [
    'A una leyenda prehispánica',
    'A un ritual y baile sagrado de los zapotecos',
    'A un danzante sagrado'
  ],
  type: 'choice',
  id: 'pbwmh',
  ru: {
    question: 'Почему здание танцоров в Монте-Альбане так называется?',
    answer:
      'Потому что фигуры, вырезанные на надгробиях, кажутся движущимися или скрученными',
    options: [
      'Из-за доколумбовой легенды',
      'Из-за священного ритуала и танца сапотеков',
      'Из-за священного танцора'
    ]
  },
  en: {
    question: 'What is the reason for the name of the dancers\' building in Monte Albán?',
    answer: 'Because the figures sculpted on its slabs seem to move or contort',
    options: [
      "To a pre-Hispanic legend",
      "To a sacred ritual and dance of the Zapotecs",
      "To a sacred dancer"
    ]
  }
};
