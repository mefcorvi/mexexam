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
  { value: 'ru', label: 'Русский' },
  { value: 'zh', label: '中文' }
];

// Save language preference when it changes
watch(locale, (newLocale) => {
  saveLanguage(newLocale);
});
</script>
<template>
  <GeneralPage :class="$style.page" :title="t('Settings')">
    <div :class="$style.settings">
      <div :class="$style.setting">
        <label>{{ t('Dark theme') }}</label>
        <ToggleSwitch v-model="isDarkTheme" size="16px" />
      </div>
      <div :class="$style.setting">
        <label>{{ t('Language') }}</label>
        <CustomSelect v-model="locale" :options="uiLanguages" />
      </div>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: flex-start;

  margin-top: var(--gap-l);
  padding-top: var(--gap-l);
}

.settings {
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  padding: var(--gap);

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);
}

.setting {
  display: flex;
  align-items: center;

  width: 360px;
  gap: 0.5em;

  label {
    flex-grow: 0;

    width: 10em;

    font-weight: 500;
    text-align: left;
  }
}
</style>