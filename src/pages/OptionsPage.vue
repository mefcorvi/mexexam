<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { useLocalization } from '@/stores/localization';
import { useDark } from '@vueuse/core';

const isDarkTheme = useDark();
const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page">
    <div>
      <ToggleSwitch v-model="isDarkTheme" size="16px" :label="t('Dark theme')" />
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
}
</style>