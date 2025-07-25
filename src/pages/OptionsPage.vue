<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import { useLocalization } from '@/stores/localization';
import { usePreferencesStore } from '@/stores/preferences';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { useDark } from '@vueuse/core';
import { watch } from 'vue';

const isDarkTheme = useDark();
const { t, locale, saveLanguage } = useLocalization();
const { showNotes } = usePreferencesStore();
const { switchLanguage } = useLanguageSwitcher();

const uiLanguages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'ru', label: 'Русский' },
  { value: 'zh', label: '中文' }
];

// Save language preference when it changes
watch(locale, (newLocale) => {
  saveLanguage(newLocale);
  switchLanguage(newLocale);
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
      <div :class="$style.setting">
        <label>{{ t('Show notes') }}</label>
        <ToggleSwitch v-model="showNotes" size="16px" />
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

  width: 100%;
  max-width: 600px;
  padding: var(--gap);

  font-size: var(--font-size-1);

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);
  gap: var(--gap);
}

.setting {
  display: flex;
  align-items: center;

  max-width: 360px;
  gap: 0.5em;

  label {
    flex-grow: 0;

    width: 10em;

    font-weight: 500;
    text-align: left;
  }
}
</style>