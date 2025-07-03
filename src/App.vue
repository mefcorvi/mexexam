<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { RouterView, useRoute } from 'vue-router'
import { useRippleController } from './utils/ripple-controller';
import { watch, onMounted } from 'vue';
import { useSEO } from './utils/seo';

useDark();
useRippleController();

const route = useRoute();
const { updateMetaTags, getDefaultSEOConfig } = useSEO();

// Function to update SEO meta tags
const updateSEO = () => {
  const config = getDefaultSEOConfig();
  updateMetaTags(config);
};

// Watch for route changes and update SEO
watch(() => route.path, updateSEO, { immediate: true });

onMounted(() => {
  updateSEO();
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
