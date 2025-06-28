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

const { t, locale, saveLanguage, languages } = useLocalization();

const selectLanguage = (langCode: string) => {
  saveLanguage(langCode as 'en' | 'es' | 'ru');
  locale.value = langCode as 'en' | 'es' | 'ru';
};
</script>
<template>
  <GeneralPage :class="$style.page" hideTopBar>
    <div :class="$style.languageSelector">
      <div :class="$style.languageScroll">
        <button v-for="lang in languages" :key="lang.code"
          :class="[$style.languageOption, { [$style.active]: locale === lang.code }]"
          @click="selectLanguage(lang.code)">
          <span :class="$style.languageName">{{ lang.name }}</span>
        </button>
      </div>
    </div>
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

.languageSelector {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  padding: var(--gap-s);

  background: var(--bg-color);
  border-bottom: 1px solid var(--border-color);

  .languageScroll {
    display: flex;
    justify-content: center;
    gap: var(--gap-s);

    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .languageOption {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: var(--gap-s) var(--gap-s);

      color: var(--text-color);
      white-space: nowrap;

      background: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);

      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: var(--secondary-color-10);
        border-color: var(--secondary-color);
      }

      &.active {
        opacity: 0.5;
      }

      .languageName {
        font-size: var(--font-size-a1);
        font-weight: 500;
      }
    }
  }
}


.menu {
  margin-top: var(--gap);
}
</style>