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

const openSettings = () => {
  $router.push({
    name: 'settings'
  })
};

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page" hideTopBar>
    <div :class="$style.logo">
      <img src="/logo.svg" width="192" height="192" />
      <h3>MexExam</h3>
    </div>
    <div :class="$style.menu">
      <GeneralButton @click="start">{{ t('Start') }}</GeneralButton>
      <GeneralButton @click="openSettings">{{ t('Settings') }}</GeneralButton>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;

  .logo {
    h3 {
      margin: 0;

      font-size: var(--font-size-5);
      font-weight: 500;
      text-align: center;
    }

    img {
      max-width: 50vw;
      max-height: 50vh;
      margin-bottom: var(--gap-s);

      border: 5px solid #012D48;
      border-radius: 50%;
      aspect-ratio: 1;
    }
  }
}

.menu {
  margin-top: var(--gap);
}
</style>