<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import { useLocalization } from '@/stores/localization';
import { RouteName } from '@/router/names';
import { useLocaleRouter } from '@/composables/useLocaleRouter';
import { useTextsStore } from '@/stores/texts';

const { texts } = useTextsStore();

const { locale } = useLocalization();
const { pushLocale } = useLocaleRouter();

const openText = (id: string) => {
  pushLocale(RouteName.Text, { id });
};
</script>
<template>
  <GeneralPage :class="$style.page">
    <div :class="$style.tilesMenu">
      <div :class="$style.tile" v-for="text of texts" :key="text.id" @click="openText(text.id)">
        <div :class="$style.tileTitle">
          {{ text.title[locale] }}
        </div>
      </div>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
}

.tilesMenu {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: var(--gap-s);
  gap: var(--gap-s);
}

.tile {
  position: relative;

  width: 100%;
  max-width: 400px;
  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-2);
  line-height: 1.2;
  text-align: left;
  color: var(--main-text-color);

  background: var(--main-color);
  border-radius: var(--border-radius);

  cursor: pointer;
  transition: background var(--transition-duration);

  .onHover({
    background: var(--secondary-color);
  });
}
</style>
