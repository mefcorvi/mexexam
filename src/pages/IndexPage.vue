<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
import LogoBig from '@/components/LogoBig.vue';
import { useLocalization } from '@/stores/localization';
import { useLocaleRouter } from '@/composables/useLocaleRouter';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { RouteName } from '@/router/names';

const { getLocalePath } = useLocaleRouter();
const { t } = useLocalization();
const { languageLinks } = useLanguageSwitcher();
</script>
<template>
  <GeneralPage :class="$style.page" hideTopBar>
    <div :class="$style.languageSelector">
      <div :class="$style.languageScroll">
        <a v-for="lang in languageLinks" :key="lang.code" :href="lang.href"
          :class="[$style.languageOption, { [$style.active]: lang.isActive }]">
          <span :class="$style.languageName">{{ lang.name }}</span>
        </a>
      </div>
    </div>
    <LogoBig />
    <div :class="$style.description" v-html="t('Description')" />
    <GeneralMenu>
      <GeneralButton :href="getLocalePath(RouteName.Start)">{{ t('Start') }}</GeneralButton>
      <GeneralButton :href="getLocalePath(RouteName.Settings)">{{ t('Settings') }}</GeneralButton>
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
      text-decoration: none;
      white-space: nowrap;

      background: var(--bg-color);
      border-radius: var(--border-radius);

      cursor: pointer;
      transition: all 0.2s ease;

      .onHover({
        text-decoration: none;

        background: var(--secondary-color-10);
        border-color: var(--secondary-color);
      });

    &.active {
      opacity: 0.5;

      pointer-events: none;
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

.description {
  max-width: 600px;
  margin: 0 var(--gap);
  padding: var(--gap);

  text-align: center;

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);
}
</style>