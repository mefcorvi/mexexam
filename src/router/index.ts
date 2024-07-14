import { createRouter } from 'vue-router';
import { history } from './history';

const router = createRouter({
  history,
  routes: [
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/OptionsPage.vue')
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
