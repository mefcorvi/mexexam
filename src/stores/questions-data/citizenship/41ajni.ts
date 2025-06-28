import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Según la constitución, ¿Cuáles son los poderes máximos?',
  answer: 'Ejecutivo, legislativo y judicial',
  options: [
    'El presidente y las secretarías de gobierno',
    'Los diputados y los ciudadanos',
    'Tribunal Supremo de Justicia, Instituto Nacional Electoral y los cuerpos policiales'
  ],
  type: 'choice',
  id: '41ajni',
  en: {
    question: 'According to the constitution, what are the highest powers?',
    answer: 'Executive, legislative, and judicial',
    options: [
      "The president and the government secretariats",
      "The deputies and the citizens",
      "Supreme Court of Justice, National Electoral Institute, and the police forces"
    ]
  },
  ru: {
    question: 'Согласно конституции, какие власти максимальны?',
    answer: 'Исполнительная, законодательная и судебная',
    options: [
      'Президент и министерства правительства',
      'Депутаты и граждане',
      'Верховный суд, Национальный институт избирательной системы и полицейские органы'
    ]
  },
  zh: {
    question: '根据宪法，最高权力是什么？',
    answer: '行政、立法和司法',
    options: [
      "总统和政府部门",
      "国会议员和公民",
      "最高法院、国家选举委员会和警察机构"
    ]
  }
};
