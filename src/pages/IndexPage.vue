<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
import LogoBig from '@/components/LogoBig.vue';
import { useRouter } from 'vue-router';
import { useLocalization } from '@/stores/localization';
import { RouteName } from '@/router/names';

const $router = useRouter();

const start = () => {
  $router.push({
    name: RouteName.Start
  })
};

const openSettings = () => {
  $router.push({
    name: RouteName.Settings
  })
};

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page" hideTopBar>
    <LogoBig />
    <GeneralMenu>
      <GeneralButton @click="start">{{ t('Start') }}</GeneralButton>
      <GeneralButton @click="openSettings">{{ t('Settings') }}</GeneralButton>
    </GeneralMenu>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
  gap: var(--gap);
}

.menu {
  margin-top: var(--gap);
}
</style>