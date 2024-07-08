import { createRouter } from 'vue-router';
import { history } from './history';

const router = createRouter({
  history,
  routes: [
    {
      path: '/:id',
      name: 'question',
      component: () => import('../pages/questions/QuestionPage.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/IndexPage.vue')
    }
  ]
});

export default router;
