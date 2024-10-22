import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteName } from './names';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/settings',
      name: RouteName.Settings,
      component: () => import('../pages/OptionsPage.vue')
    },
    {
      path: '/start',
      children: [
        {
          path: 'section',
          name: RouteName.ChooseSection,
          component: () => import('../pages/SectionsPage.vue')
        },
        {
          path: '',
          name: RouteName.Start,
          component: () => import('../pages/StartPage.vue')
        }
      ]
    },
    {
      path: '/all/:id',
      name: RouteName.AllQuestions,
      component: () => import('../pages/QuestionPage.vue')
    },
    {
      path: '/:sectionId/:id',
      name: RouteName.SectionQuestions,
      component: () => import('../pages/QuestionPage.vue')
    },
    {
      path: '/',
      name: RouteName.Home,
      component: () => import('../pages/IndexPage.vue')
    }
  ]
});

export default router;
