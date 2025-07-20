import { useRoute } from 'vue-router';
import { RouteName } from '@/router/names';
import type { Locale } from '@/lang';

export interface SEOConfig {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  hreflang?: Array<{ locale: Locale; href: string }>;
}

export const useSEO = () => {
  const route = useRoute();

  const updateMetaTags = (config: SEOConfig) => {
    const baseUrl = window.location.origin;

    // Update title
    if (config.title) {
      document.title = config.title;
    }

    // Update description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && config.description) {
      descriptionMeta.setAttribute('content', config.description);
    }

    // Update canonical URL
    const canonicalUrl = config.canonical || `${baseUrl}${route.path}`;
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    document.head.appendChild(canonicalLink);

    // Remove existing hreflang links
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());

    // Add hreflang links
    if (config.hreflang && config.hreflang.length > 0) {
      config.hreflang.forEach(({ locale, href }) => {
        const hreflangLink = document.createElement('link');
        hreflangLink.rel = 'alternate';
        hreflangLink.hreflang = locale;
        hreflangLink.href = `${baseUrl}${href}`;
        document.head.appendChild(hreflangLink);
      });

      // Add x-default hreflang (typically to Spanish as it's the default)
      const defaultHref = config.hreflang.find(h => h.locale === 'es')?.href || config.hreflang[0].href;
      const xDefaultLink = document.createElement('link');
      xDefaultLink.rel = 'alternate';
      xDefaultLink.hreflang = 'x-default';
      xDefaultLink.href = `${baseUrl}${defaultHref}`;
      document.head.appendChild(xDefaultLink);
    }

    // Update robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      const robotsContent = config.noindex
        ? 'noindex, nofollow'
        : 'index, follow';
      robotsMeta.setAttribute('content', robotsContent);
    }
  };

  const generateHreflangLinks = (routeName: RouteName): Array<{ locale: Locale; href: string }> => {
    const locales: Locale[] = ['en', 'es', 'ru', 'zh'];
    
    return locales.map(locale => {
      let path = '';
      
      switch (routeName) {
        case RouteName.Home:
          path = `/${locale}`;
          break;
        case RouteName.Start:
          path = `/${locale}/start`;
          break;
        case RouteName.ChooseSection:
          path = `/${locale}/start/section`;
          break;
        case RouteName.Exam:
          path = `/${locale}/exam`;
          break;
        case RouteName.SectionExam:
          path = `/${locale}/exam/${route.params.sectionId}`;
          break;
        case RouteName.FlashCards:
          path = `/${locale}/flashcards/${route.params.sectionId}/${route.params.id}`;
          break;
        case RouteName.AllQuestions:
          path = `/${locale}/all/${route.params.id}`;
          break;
        case RouteName.SectionQuestions:
          path = `/${locale}/${route.params.sectionId}/${route.params.id}`;
          break;
        case RouteName.Settings:
          path = `/${locale}/settings`;
          break;
        default:
          path = `/${locale}`;
      }
      
      return { locale, href: path };
    });
  };

  const getDefaultSEOConfig = (): SEOConfig => {
    const routeName = route.name as RouteName;
    const baseUrl = window.location.origin;
    
    // Generate hreflang links for all supported locales
    const hreflangLinks = generateHreflangLinks(routeName);
    
    // Get the canonical URL for the current locale (Spanish is preferred for canonical)
    const canonicalHref = hreflangLinks.find(link => link.locale === 'es')?.href || hreflangLinks[0].href;

    switch (routeName) {
      case RouteName.Home:
        return {
          title: 'MexExam - Naturalization Exam Preparation',
          description:
            'MexExam is an application for preparing for the naturalization exam in Mexico. It contains questions on topics that will be on the exam and allows you to practice in exam mode.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.Start:
        return {
          title: 'Start Learning - MexExam',
          description:
            'Choose your study mode and begin preparing for the Mexican naturalization exam with MexExam.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.ChooseSection:
        return {
          title: 'Choose Section - MexExam',
          description:
            'Select a study section to focus on specific topics for the Mexican naturalization exam.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.Exam:
        return {
          title: 'Exam Mode - MexExam',
          description:
            'Practice the Mexican naturalization exam in a simulated test environment.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.SectionExam:
        return {
          title: 'Section Exam - MexExam',
          description:
            'Take a focused exam on a specific section of the Mexican naturalization test.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.FlashCards:
        return {
          title: 'Flash Cards - MexExam',
          description:
            'Study with interactive flash cards for the Mexican naturalization exam.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.AllQuestions:
        return {
          title: 'All Questions - MexExam',
          description:
            'Browse all questions for the Mexican naturalization exam.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.SectionQuestions:
        return {
          title: 'Section Questions - MexExam',
          description:
            'Study questions from a specific section of the Mexican naturalization exam.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      case RouteName.Settings:
        return {
          title: 'Settings - MexExam',
          description: 'Configure your MexExam preferences and study settings.',
          canonical: `${baseUrl}${canonicalHref}`,
          hreflang: hreflangLinks
        };

      default:
        return {
          title: 'MexExam',
          description:
            'MexExam is an application for preparing for the naturalization exam in Mexico.',
          canonical: `${baseUrl}${route.path}`,
          hreflang: hreflangLinks
        };
    }
  };

  return {
    updateMetaTags,
    getDefaultSEOConfig
  };
};
