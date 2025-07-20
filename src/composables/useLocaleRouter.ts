import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLocalization } from '@/stores/localization';
import type { Locale } from '@/lang';
import { RouteName } from '@/router/names';

export const useLocaleRouter = () => {
  const route = useRoute();
  const router = useRouter();
  const { locale } = useLocalization();

  // Get current locale from route or fallback to store
  const currentLocale = computed<Locale>(() => {
    const routeLocale = route.params.locale as Locale;
    if (['en', 'es', 'ru', 'zh'].includes(routeLocale)) {
      return routeLocale;
    }
    return locale.value;
  });

  // Generate locale-aware URL
  const getLocalePath = (
    routeName: RouteName,
    params?: Record<string, any>,
    targetLocale?: Locale
  ): string => {
    const localeToUse = targetLocale || currentLocale.value;
    const routeParams = { ...params, locale: localeToUse };

    try {
      const resolved = router.resolve({ name: routeName, params: routeParams });
      return resolved.fullPath;
    } catch (error) {
      console.warn('Failed to resolve route:', routeName, error);
      return `/${localeToUse}`;
    }
  };

  // Navigate with locale awareness
  const pushLocale = (routeName: RouteName, params?: Record<string, any>) => {
    const routeParams = { locale: currentLocale.value, ...params };
    return router.push({ name: routeName, params: routeParams });
  };

  // Replace with locale awareness
  const replaceLocale = (
    routeName: RouteName,
    params?: Record<string, any>
  ) => {
    const routeParams = { locale: currentLocale.value, ...params };
    return router.replace({ name: routeName, params: routeParams });
  };

  // Generate links for all locales (for language switcher)
  const getLocaleLinks = () => {
    const locales: Locale[] = ['en', 'es', 'ru', 'zh'];
    return locales.map((loc) => ({
      locale: loc,
      href: getLocalePath(route.name as RouteName, route.params, loc)
    }));
  };

  return {
    currentLocale,
    getLocalePath,
    pushLocale,
    replaceLocale,
    getLocaleLinks
  };
};
