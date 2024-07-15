import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/OptionsPage.vue')
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../pages/StartPage.vue')
    },
    {
      path: '/:id',
      name: 'question',
      component: () => import('../pages/QuestionPage.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/IndexPage.vue')
    }
  ]
});

export default router;
