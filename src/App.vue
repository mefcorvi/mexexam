<script setup lang="ts">
import { useDark, useEventListener } from '@vueuse/core';
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useRippleController } from './utils/ripple-controller';
import { watch, onMounted } from 'vue';
import { useSEO } from './utils/seo';
import { useLocalization } from '@/stores/localization';
import type { Locale } from '@/lang';

useDark();
useRippleController();

const route = useRoute();
const { updateMetaTags, getDefaultSEOConfig } = useSEO();
const { setLocale } = useLocalization();

// Function to update SEO meta tags
const updateSEO = () => {
  const config = getDefaultSEOConfig();
  updateMetaTags(config);
};

// Sync locale with route
watch(() => route.params.locale, (newLocale) => {
  if (newLocale && ['en', 'es', 'ru', 'zh'].includes(newLocale as string)) {
    setLocale(newLocale as Locale);
  }
}, { immediate: true });

// Watch for route changes and update SEO
watch(() => route.path, updateSEO, { immediate: true });

onMounted(() => {
  updateSEO();
});

const $router = useRouter();

useEventListener('click', (ev) => {
  let target = ev.target as HTMLElement | null;
  let isLink = false;

  while (target) {
    if (target.tagName === 'A') {
      isLink = true;
      break;
    }
    target = target.parentElement;
  }

  if (!target || !isLink) {
    return;
  }

  ev.preventDefault();

  const href = target.getAttribute('href');
  const path = href?.replace(/^\//, '');

  if (!path || !href) {
    return;
  }

  const isExternal = href?.startsWith('http');
  const isReplace = target.getAttribute('data-replace') === 'true';

  if (isExternal) {
    window.open(href, '_blank');
  } else {
    if (isReplace) {
      $router.replace(path);
    } else {
      $router.push(path);
    }
  }
});
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<style scoped></style>
