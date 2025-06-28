import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Dónde se encuentra la pirámide de Los Nichos?',
  answer: 'En la zona arqueológica El Tajín',
  note: 'En el estado de Veracruz, pertenece a la cultura Totonaca.',
  options: ['Palenque, Chiapas', 'Yucatán', 'Campeche'],
  type: 'choice',
  id: 'mzjtyp',
  ru: {
    question: 'Где находится пирамида Лос Ничос?',
    answer: 'В археологической зоне Эль-Тахин',
    options: ['Паленке, Чьяпас', 'Юкатан', 'Кампече'],
    note: 'В штате Веракрус, принадлежит культуре тотонаков.'
  },
  en: {
    question: 'Where is the Pyramid of Los Nichos located?',
    answer: 'In the archaeological zone of El Tajín',
    options: [
      "Palenque, Chiapas",
      "Yucatán",
      "Campeche"
    ],
    note: 'In the state of Veracruz, it belongs to the Totonac culture.'
  },
  zh: {
    question: '洛斯尼乔斯金字塔在哪里？',
    answer: '在埃尔塔欣考古区',
    options: [
      "帕伦克，恰帕斯",
      "尤卡坦",
      "坎佩切"
    ],
    note: '位于韦拉克鲁斯州，属于托托纳克文化。'
  }
};
