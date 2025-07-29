import { createRouter, createWebHistory } from 'vue-router';
import { RouteName } from './names';
import type { Locale } from '@/lang';

// Define supported locales
const supportedLocales: Locale[] = ['en', 'es', 'ru', 'zh'];

// Helper function to get default locale
const getDefaultLocale = (): Locale => {
  const saved = localStorage.getItem('uiLanguage') as Locale;
  if (saved && supportedLocales.includes(saved)) {
    return saved;
  }
  return 'es'; // Default to Spanish
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Redirect root to default locale
    {
      path: '/',
      redirect: () => {
        const locale = getDefaultLocale();
        return `/${locale}`;
      }
    },
    // Locale-prefixed routes
    {
      path: '/:locale(en|es|ru|zh)',
      children: [
        {
          path: 'admin',
          name: RouteName.Admin,
          component: () => import('../pages/AdminPage.vue')
        },
        {
          path: 'settings',
          name: RouteName.Settings,
          component: () => import('../pages/OptionsPage.vue')
        },
        {
          path: 'start',
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
          path: 'texts',
          name: RouteName.Texts,
          component: () => import('../pages/TextsPage.vue')
        },
        {
          path: 'texts/:id',
          name: RouteName.Text,
          component: () => import('../pages/TextPage.vue')
        },
        {
          path: 'exam',
          name: RouteName.Exam,
          component: () => import('../pages/ExamPage.vue')
        },
        {
          path: 'exam/:sectionId',
          name: RouteName.SectionExam,
          component: () => import('../pages/ExamPage.vue')
        },
        {
          path: 'flashcards/:sectionId/:id',
          name: RouteName.FlashCards,
          component: () => import('../pages/FlashCardsPage.vue')
        },
        {
          path: 'all/:id',
          name: RouteName.AllQuestions,
          component: () => import('../pages/QuestionPage.vue')
        },
        {
          path: ':sectionId/:id',
          name: RouteName.SectionQuestions,
          component: () => import('../pages/QuestionPage.vue')
        },
        {
          path: '',
          name: RouteName.Home,
          component: () => import('../pages/IndexPage.vue')
        }
      ]
    },
    // Catch-all redirect for non-locale paths
    {
      path: '/:pathMatch(.*)*',
      redirect: (to) => {
        const locale = getDefaultLocale();
        return `/${locale}${to.path}`;
      }
    }
  ]
});

export default router;
