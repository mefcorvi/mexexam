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
        await navigator.serviceWorker.register('/sw.js?v=2');
      } catch (error) {
        console.error('Service Worker registration failed', error);
      }
    }

    const sections = await loadSectionsData();
    await Promise.all(sections.map((section) => section.questions()));
  })();
}
