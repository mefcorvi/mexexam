import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Institución educativa creada para carreras técnicas',
  answer: 'Instituto Politécnico Nacional (IPN)',
  options: ['Universidad Nacional', 'Universidad Abierta', 'UNAM'],
  type: 'choice',
  id: 'ibqkcl',
  en: {
    question: 'Educational institution created for technical careers',
    answer: 'Instituto Politécnico Nacional (IPN)',
    options: [
      "National University",
      "Open University",
      "UNAM"
    ]
  },
  ru: {
    question:
      'Образовательное учреждение, созданное для технических специальностей',
    answer: 'Национальный политехнический институт (IPN)',
    options: ['Национальный университет', 'Открытый университет', 'UNAM']
  },
  zh: {
    question: '为技术职业而设立的教育机构',
    answer: '国立 Polytechnic Institute (IPN)',
    options: [
      "国立大学",
      "开放大学",
      "UNAM"
    ]
  }
};
