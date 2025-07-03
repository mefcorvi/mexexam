import { useRoute } from 'vue-router';
import { RouteName } from '@/router/names';

export interface SEOConfig {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
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

    // Update robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      const robotsContent = config.noindex
        ? 'noindex, nofollow'
        : 'index, follow';
      robotsMeta.setAttribute('content', robotsContent);
    }
  };

  const getDefaultSEOConfig = (): SEOConfig => {
    const routeName = route.name as RouteName;

    switch (routeName) {
      case RouteName.Home:
        return {
          title: 'MexExam - Naturalization Exam Preparation',
          description:
            'MexExam is an application for preparing for the naturalization exam in Mexico. It contains questions on topics that will be on the exam and allows you to practice in exam mode.',
          canonical: `${window.location.origin}/`
        };

      case RouteName.Start:
        return {
          title: 'Start Learning - MexExam',
          description:
            'Choose your study mode and begin preparing for the Mexican naturalization exam with MexExam.',
          canonical: `${window.location.origin}/start`
        };

      case RouteName.ChooseSection:
        return {
          title: 'Choose Section - MexExam',
          description:
            'Select a study section to focus on specific topics for the Mexican naturalization exam.',
          canonical: `${window.location.origin}/start/section`
        };

      case RouteName.Exam:
        return {
          title: 'Exam Mode - MexExam',
          description:
            'Practice the Mexican naturalization exam in a simulated test environment.',
          canonical: `${window.location.origin}/exam`
        };

      case RouteName.SectionExam:
        return {
          title: 'Section Exam - MexExam',
          description:
            'Take a focused exam on a specific section of the Mexican naturalization test.',
          canonical: `${window.location.origin}/exam/${route.params.sectionId}`
        };

      case RouteName.FlashCards:
        return {
          title: 'Flash Cards - MexExam',
          description:
            'Study with interactive flash cards for the Mexican naturalization exam.',
          canonical: `${window.location.origin}/flashcards/${route.params.sectionId}/${route.params.id}`
        };

      case RouteName.AllQuestions:
        return {
          title: 'All Questions - MexExam',
          description:
            'Browse all questions for the Mexican naturalization exam.',
          canonical: `${window.location.origin}/all/${route.params.id}`
        };

      case RouteName.SectionQuestions:
        return {
          title: 'Section Questions - MexExam',
          description:
            'Study questions from a specific section of the Mexican naturalization exam.',
          canonical: `${window.location.origin}/${route.params.sectionId}/${route.params.id}`
        };

      case RouteName.Settings:
        return {
          title: 'Settings - MexExam',
          description: 'Configure your MexExam preferences and study settings.',
          canonical: `${window.location.origin}/settings`
        };

      default:
        return {
          title: 'MexExam',
          description:
            'MexExam is an application for preparing for the naturalization exam in Mexico.',
          canonical: `${window.location.origin}${route.path}`
        };
    }
  };

  return {
    updateMetaTags,
    getDefaultSEOConfig
  };
};
