import './assets/main.less';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import { loadSectionsData } from './stores/sections';

const app = createApp(App);

app.use(router);

app.mount('#app');

if (!import.meta.env.DEV) {
  // Preload questions data
  (async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js?v=6');
      } catch (error) {
        console.error('Service Worker registration failed', error);
      }
    }

    const sections = await loadSectionsData();
    await Promise.all(sections.map((section) => section.questions()));
  })();

  // Preload all route components
  const preloadRouteComponents = async () => {
    const routeComponents = [
      () => import('./pages/OptionsPage.vue'),
      () => import('./pages/SectionsPage.vue'),
      () => import('./pages/StartPage.vue'),
      () => import('./pages/ExamPage.vue'),
      () => import('./pages/QuestionPage.vue'),
      () => import('./pages/IndexPage.vue')
    ];

    try {
      await Promise.all(routeComponents.map((component) => component()));
    } catch (error) {
      console.error('Failed to preload route components:', error);
    }
  };

  // Preload components after a short delay to not block initial render
  setTimeout(preloadRouteComponents, 1000);
}
