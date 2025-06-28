import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuál sítio arqueológico NO es un patrimonio UNESCO de México?',
  answer: 'Parque Nacional de Tikal',
  note: 'Está en Guatemala.',
  options: ['Monte Albán', 'Chichen Itzá', 'Uxmal'],
  type: 'choice',
  id: '56p1t',
  ru: {
    question:
      'Какой археологический объект НЕ является объектом ЮНЕСКО в Мексике?',
    answer: 'Национальный парк Тикаль',
    options: ['Монте-Альбан', 'Чичен-Ица', 'Ушмаль'],
    note: 'Находится в Гватемале.'
  },
  en: {
    question: 'Which archaeological site is NOT a UNESCO heritage site in Mexico?',
    answer: 'Tikal National Park',
    options: [
      "Monte Albán",
      "Chichen Itzá",
      "Uxmal"
    ],
    note: 'It is in Guatemala.'
  },
  zh: {
    question: '哪个考古遗址不是墨西哥的联合国教科文组织世界遗产？',
    answer: '蒂卡尔国家公园',
    options: [
      "蒙特阿尔班",
      "奇琴伊察",
      "乌克斯马尔"
    ],
    note: '它在危地马拉。'
  }
};
