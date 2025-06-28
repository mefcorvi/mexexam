import './assets/main.less';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { loadSectionsData } from './stores/sections';

const app = createApp(App);

app.use(router);

app.mount('#app');

if (!import.meta.env.DEV) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => console.log('Service Worker registered'))
      .catch(console.error);

    // Preload questions data
    (async () => {
      const sections = await loadSectionsData();
      await Promise.all(sections.map((section) => section.questions()));
    })();
  }
}
