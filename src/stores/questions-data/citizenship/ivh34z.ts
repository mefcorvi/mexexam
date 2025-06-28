import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Secretaría que se encarga de cobrar impuestos?',
  answer: 'SHCP: Secretaría de Hacienda y Crédito Público',
  options: [
    'SAT: Secretaria de Administración Tributaria',
    'SAIM: Secretaría de Administracion de Impuestos',
    'SENAT: Secretaria Nacional de Administración Tributaria'
  ],
  type: 'choice',
  id: 'ivh34z',
  en: {
    question: 'Which department is responsible for collecting taxes?',
    answer: 'SHCP: Ministry of Finance and Public Credit',
    options: [
      "SAT: Tax Administration Service",
      "SAIM: Tax Administration Secretariat",
      "SENAT: National Tax Administration Secretariat"
    ]
  },
  ru: {
    question: 'Какое министерство занимается сбором налогов?',
    answer: 'СНКП: Министерство финансов и общественного кредита',
    options: [
      'САТ: Федеральная налоговая служба',
      'САИМ: Секретариат по управлению налогами',
      'СЕНАТ: Национальный секретариат налогового управления'
    ]
  },
  zh: {
    question: '负责征收税款的秘书处是什么？',
    answer: 'SHCP：财政和公共信贷秘书处',
    options: [
      "SAT：税务管理秘书处",
      "SAIM：税务管理秘书处",
      "SENAT：国家税务管理秘书处"
    ]
  }
};
