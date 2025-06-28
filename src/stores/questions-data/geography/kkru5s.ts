import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿En qué estado de la república se encuentran las Ruinas de Palenque?',
  answer: 'Chiapas',
  note: 'Pertenece a los Mayas.',
  options: ['Guerrero', 'Tabasco', 'Veracruz'],
  type: 'choice',
  id: 'kkru5s',
  en: {
    question: 'In which state of the republic are the Ruins of Palenque located?',
    answer: 'Chiapas',
    options: [
      "Guerrero",
      "Tabasco",
      "Veracruz"
    ],
    note: 'It belongs to the Mayans.'
  },
  ru: {
    question: 'В каком штате республики находятся Руины Паленке?',
    answer: 'Чьяпас',
    options: ['Герреро', 'Табаско', 'Веракрус'],
    note: 'Принадлежит Майя.'
  },
  zh: {
    question: '帕伦克遗址位于哪个州？',
    answer: '恰帕斯',
    options: [
      "格雷罗",
      "塔巴斯科",
      "韦拉克鲁斯"
    ],
    note: '属于玛雅文明。'
  }
};
