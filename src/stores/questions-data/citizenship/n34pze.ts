import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿A qué entidad representan los diputados del Congreso de la Unión?',
  answer: 'A los distritos electorales',
  options: [
    'A los estados de la república',
    'A los municipios',
    'A las regiones del país'
  ],
  type: 'choice',
  id: 'n34pze',
  en: {
    question: 'Which entity do the deputies of the Congress of the Union represent?',
    answer: 'The electoral districts',
    options: [
      "The states of the republic",
      "The municipalities",
      "The regions of the country"
    ]
  },
  ru: {
    question: 'Какую сущность представляют депутаты конгресса союза?',
    answer: 'Избирательные округа',
    options: ['Штаты республики', 'Муниципалитеты', 'Регионы страны']
  },
  zh: {
    question: '国会的代表们代表哪个实体？',
    answer: '选区',
    options: [
      "代表共和国的州",
      "代表市",
      "代表国家的地区"
    ]
  }
};
