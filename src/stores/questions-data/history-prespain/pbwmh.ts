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
  },
  zh: {
    question: '蒙特阿尔班的舞者建筑名称来源于什么？',
    answer: '因为雕刻在其墓碑上的人物似乎在移动或扭动',
    options: [
      "与一个前西班牙时期的传说有关",
      "与萨波特克人的一个神圣仪式和舞蹈有关",
      "与一个神圣的舞者有关"
    ]
  }
};
