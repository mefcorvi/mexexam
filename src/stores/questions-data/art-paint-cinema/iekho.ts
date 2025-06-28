import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    'Autor del mural en el museo de antropología sobre la Serpiente emplumada',
  answer: 'Rufino Tamayo',
  options: ['Frida Khalo', 'Diego Rivera', 'Jose Maria Velazco'],
  type: 'choice',
  id: 'iekho',
  en: {
    question: 'Author of the mural in the anthropology museum about the Feathered Serpent',
    answer: 'Rufino Tamayo',
    options: [
      "Frida Kahlo",
      "Diego Rivera",
      "Jose Maria Velazco"
    ]
  },
  ru: {
    question: 'Автор фрески в музее антропологии о Пернатом змее',
    answer: 'Руфино Тамайо',
    options: ['Фрида Кало', 'Диего Ривера', 'Хосе Мария Веласко']
  },
  zh: {
    question: '人类学博物馆中关于羽蛇神的壁画作者',
    answer: '鲁菲诺·塔马约',
    options: [
      "弗里达·卡洛",
      "迭戈·里维拉",
      "何塞·玛丽亚·维拉斯科"
    ]
  }
};
