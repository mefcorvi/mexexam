<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import { useLocalization } from '@/stores/localization';
import { useDark } from '@vueuse/core';
import { watch } from 'vue';

const isDarkTheme = useDark();
const { t, locale, saveLanguage } = useLocalization();

const uiLanguages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'ru', label: 'Русский' }
];

// Save language preference when it changes
watch(locale, (newLocale) => {
  saveLanguage(newLocale);
});
</script>
<template>
  <GeneralPage :class="$style.page">
    <div :class="$style.setting">
      <label>{{ t('Dark theme') }}:</label>
      <ToggleSwitch v-model="isDarkTheme" size="16px" />
    </div>
    <div :class="$style.setting">
      <label>{{ t('Language') }}:</label>
      <CustomSelect v-model="locale" :options="uiLanguages" />
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
}

.setting {
  display: flex;
  align-items: center;

  width: 360px;
  margin-top: 1.5em;
  gap: 0.5em;

  label {
    flex-grow: 0;

    width: 10em;

    text-align: right;
  }
}
</style>