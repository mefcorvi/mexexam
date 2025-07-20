import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLocalization } from '@/stores/localization';
import { useLocaleRouter } from '@/composables/useLocaleRouter';
import type { Locale } from '@/lang';

export const useLanguageSwitcher = () => {
  const $router = useRouter();
  const route = useRoute();
  const { locale, languages, setLocale } = useLocalization();
  const { getLocalePath } = useLocaleRouter();

  // Generate language links for the current page
  const languageLinks = computed(() => {
    return languages.map((lang) => {
      const href = getLocalePath(
        route.name as any,
        route.params,
        lang.code as Locale
      );

      return {
        code: lang.code as Locale,
        name: lang.name,
        href,
        isActive: locale.value === lang.code
      };
    });
  });

  // Switch language with proper URL update
  const switchLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    const newPath = getLocalePath(route.name as any, route.params, newLocale);

    // Use replace instead of push to avoid adding to history
    $router.replace(newPath);
  };

  // Switch language using href (better for SEO as it maintains proper anchor behavior)
  const switchLanguageWithHref = (newLocale: Locale): string => {
    return getLocalePath(route.name as any, route.params, newLocale);
  };

  return {
    languageLinks,
    switchLanguage,
    switchLanguageWithHref
  };
};
