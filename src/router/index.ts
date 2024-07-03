import { createRouter } from 'vue-router';
import { history } from './history';

const router = createRouter({
  history,
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: () => import('../pages/questions/IndexPage.vue')
    }
  ]
});

export default router;
