import type { SectionData } from './interfaces';

const sections: SectionData[] = [
  {
    id: 'u6w4x',
    title: 'Artes I: Literatura y música',
    image: 'literatura.jpg',
    ru: {
      title: 'Искусство I: Литература и музыка'
    },
    questions: () =>
      import(`./questions-data/art-lit-music`).then((x) => x.questions)
  },
  {
    id: 'bzymvt',
    title: 'Artes II: Pintura y cine',
    image: 'pintura.jpg',
    ru: {
      title: 'Искусство II: Живопись и кино'
    },
    questions: () =>
      import(`./questions-data/art-paint-cinema`).then((x) => x.questions)
  },
  {
    id: 'm2661',
    title: 'Civismo',
    image: 'citizenship.jpg',
    ru: {
      title: 'Гражданство'
    },
    questions: () =>
      import(`./questions-data/citizenship`).then((x) => x.questions)
  },
  {
    id: 'k91hli',
    title: 'Gastronomía',
    image: 'gastronomy.webp',
    ru: {
      title: 'Гастрономия'
    },
    questions: () =>
      import(`./questions-data/gastronomy`).then((x) => x.questions)
  },
  {
    id: 'hmc4a',
    title: 'Geografía y población',
    image: 'geography.webp',
    ru: {
      title: 'География и население'
    },
    questions: () =>
      import(`./questions-data/geography`).then((x) => x.questions)
  },
  {
    id: 'z7ige6',
    title: 'Historia: Conquista y Colonia',
    ru: {
      title: 'История: Завоевание и колония'
    },
    questions: () =>
      import(`./questions-data/history-colony`).then((x) => x.questions)
  },
  {
    id: 'u7glcp',
    title: 'Historia: Independencia',
    image: 'independency.webp',
    ru: {
      title: 'История: Независимость'
    },
    questions: () =>
      import(`./questions-data/history-independence`).then((x) => x.questions)
  },
  {
    id: 'okkktn',
    title: 'Historia: México Contemporáneo',
    image: 'modern.webp',
    ru: {
      title: 'История: Современная Мексика'
    },
    questions: () =>
      import(`./questions-data/history-modern`).then((x) => x.questions)
  },
  {
    id: 'zpvby',
    title: 'Historia: México Prehispánico',
    image: 'prehispanic.webp',
    ru: {
      title: 'История: Доколумбова Мексика'
    },
    questions: () =>
      import(`./questions-data/history-prespain`).then((x) => x.questions)
  },
  {
    id: 'v00zr',
    title: 'Historia: Revolución',
    image: 'revolucion.webp',
    ru: {
      title: 'История: Революция'
    },
    questions: () =>
      import(`./questions-data/history-revolution`).then((x) => x.questions)
  },
  {
    id: 'xhrpl7t',
    title: 'Ciencia y deportes',
    image: 'science.webp',
    ru: {
      title: 'Наука и спорт'
    },
    questions: () => import(`./questions-data/science`).then((x) => x.questions)
  },
  {
    id: 'iy3qg',
    title: 'Tradiciones y cultura',
    image: 'traditions.webp',
    ru: {
      title: 'Традиции и культура'
    },
    questions: () =>
      import(`./questions-data/traditions-culture`).then((x) => x.questions)
  }
];

export const loadSectionsData = async () => {
  return sections;
};
