import type { SectionData } from './interfaces';

const sections: SectionData[] = [
  {
    id: 'u6w4x',
    title: 'Artes I: Literatura y música',
    image: 'literatura.jpg',
    en: {
      title: 'Arts I: Literature and Music'
    },
    ru: {
      title: 'Искусство I: Литература и музыка'
    },
    zh: {
      title: '艺术I：文学与音乐'
    },
    questions: () =>
      import(`./questions-data/art-lit-music`).then((x) => x.questions)
  },
  {
    id: 'bzymvt',
    title: 'Artes II: Pintura y cine',
    image: 'pintura.jpg',
    en: {
      title: 'Arts II: Painting and Cinema'
    },
    ru: {
      title: 'Искусство II: Живопись и кино'
    },
    zh: {
      title: '艺术II：绘画与电影'
    },
    questions: () =>
      import(`./questions-data/art-paint-cinema`).then((x) => x.questions)
  },
  {
    id: 'm2661',
    title: 'Civismo',
    image: 'citizenship.jpg',
    en: {
      title: 'Citizenship'
    },
    ru: {
      title: 'Гражданство'
    },
    zh: {
      title: '公民教育'
    },
    questions: () =>
      import(`./questions-data/citizenship`).then((x) => x.questions)
  },
  {
    id: 'k91hli',
    title: 'Gastronomía',
    image: 'gastronomy.webp',
    en: {
      title: 'Gastronomy'
    },
    ru: {
      title: 'Гастрономия'
    },
    zh: {
      title: '美食'
    },
    questions: () =>
      import(`./questions-data/gastronomy`).then((x) => x.questions)
  },
  {
    id: 'hmc4a',
    title: 'Geografía y población',
    image: 'geography.webp',
    en: {
      title: 'Geography and Population'
    },
    ru: {
      title: 'География и население'
    },
    zh: {
      title: '地理与人口'
    },
    questions: () =>
      import(`./questions-data/geography`).then((x) => x.questions)
  },
  {
    id: 'z7ige6',
    title: 'Historia: Conquista y Colonia',
    en: {
      title: 'History: Conquest and Colony'
    },
    ru: {
      title: 'История: Завоевание и колония'
    },
    zh: {
      title: '历史：征服与殖民'
    },
    questions: () =>
      import(`./questions-data/history-colony`).then((x) => x.questions)
  },
  {
    id: 'u7glcp',
    title: 'Historia: Independencia',
    image: 'independency.webp',
    en: {
      title: 'History: Independence'
    },
    ru: {
      title: 'История: Независимость'
    },
    zh: {
      title: '历史：独立'
    },
    questions: () =>
      import(`./questions-data/history-independence`).then((x) => x.questions)
  },
  {
    id: 'okkktn',
    title: 'Historia: México Contemporáneo',
    image: 'modern.webp',
    en: {
      title: 'History: Contemporary Mexico'
    },
    ru: {
      title: 'История: Современная Мексика'
    },
    zh: {
      title: '历史：现代墨西哥'
    },
    questions: () =>
      import(`./questions-data/history-modern`).then((x) => x.questions)
  },
  {
    id: 'zpvby',
    title: 'Historia: México Prehispánico',
    image: 'prehispanic.webp',
    en: {
      title: 'History: Pre-Hispanic Mexico'
    },
    ru: {
      title: 'История: Доколумбова Мексика'
    },
    zh: {
      title: '历史：前西班牙时期墨西哥'
    },
    questions: () =>
      import(`./questions-data/history-prespain`).then((x) => x.questions)
  },
  {
    id: 'v00zr',
    title: 'Historia: Revolución',
    image: 'revolucion.webp',
    en: {
      title: 'History: Revolution'
    },
    ru: {
      title: 'История: Революция'
    },
    zh: {
      title: '历史：革命'
    },
    questions: () =>
      import(`./questions-data/history-revolution`).then((x) => x.questions)
  },
  {
    id: 'xhrpl7t',
    title: 'Ciencia y deportes',
    image: 'science.webp',
    en: {
      title: 'Science and Sports'
    },
    ru: {
      title: 'Наука и спорт'
    },
    zh: {
      title: '科学与体育'
    },
    questions: () => import(`./questions-data/science`).then((x) => x.questions)
  },
  {
    id: 'iy3qg',
    title: 'Tradiciones y cultura',
    image: 'traditions.webp',
    en: {
      title: 'Traditions and Culture'
    },
    ru: {
      title: 'Традиции и культура'
    },
    zh: {
      title: '传统与文化'
    },
    questions: () =>
      import(`./questions-data/traditions-culture`).then((x) => x.questions)
  }
];

export const loadSectionsData = async () => {
  return sections;
};
