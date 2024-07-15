<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import { useRouter } from 'vue-router';
import { useDark } from '@vueuse/core';
import { useLocalization } from '@/stores/localization';

useDark();

const $router = useRouter();

const start = () => {
  $router.push({
    name: 'question',
    params: {
      id: 'init'
    }
  })
};

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page">
    <div :class="$style.menu">
      <GeneralButton @click="start">{{ t('Start') }}</GeneralButton>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
}

.menu {
  margin-top: var(--gap);
}
</style>