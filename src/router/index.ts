import { createRouter, createWebHistory } from 'vue-router';
import { RouteName } from './names';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/exam',
      name: RouteName.Exam,
      component: () => import('../pages/ExamPage.vue')
    },
    {
      path: '/exam/:sectionId',
      name: RouteName.SectionExam,
      component: () => import('../pages/ExamPage.vue')
    },
    {
      path: '/flashcards/:sectionId/:id',
      name: RouteName.FlashCards,
      component: () => import('../pages/FlashCardsPage.vue')
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
