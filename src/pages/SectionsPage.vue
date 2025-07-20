<script setup lang="ts">
import { computed } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import { useLocalization } from '@/stores/localization';
import { useQuestionsStore } from '@/stores/questions';
import { useRoute } from 'vue-router';
import { RouteName } from '@/router/names';
import { useTranslations } from '@/stores/translations';
import { useLocaleRouter } from '@/composables/useLocaleRouter';

const {
  sections,
  loadSections,
} = useQuestionsStore();

const translations = useTranslations();
const { locale } = useLocalization();
const $route = useRoute();
const { pushLocale } = useLocaleRouter();

loadSections();

const isExamMode = computed(() => {
  return $route.name === RouteName.ChooseSection && $route.query.mode === 'exam';
});

const isFlashCardsMode = computed(() => {
  return $route.name === RouteName.ChooseSection && $route.query.mode === 'flashcards';
});

const pageTitle = computed(() => {
  if (isExamMode.value) {
    return t('Choose section for exam');
  } else if (isFlashCardsMode.value) {
    return t('Choose section for flash cards');
  } else {
    return t('Choose section');
  }
});

const startSection = (sectionId: string) => {
  if (isExamMode.value) {
    pushLocale(RouteName.SectionExam, { sectionId });
  } else if (isFlashCardsMode.value) {
    pushLocale(RouteName.FlashCards, { sectionId, id: 'init' });
  } else {
    pushLocale(RouteName.SectionQuestions, { sectionId, id: 'init' });
  }
};

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page" :title="pageTitle">
    <div :class="$style.tilesMenu">
      <div :class="$style.tile" v-for="section of sections.values()" :key="section.id"
        @click="startSection(section.id)">
        <div :class="$style.tileTitle">{{ translations.t(locale, section.title) }}</div>
      </div>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;

  padding-top: var(--topbar-height);
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