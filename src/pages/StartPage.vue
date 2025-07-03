<script setup lang="ts">
import { computed, onMounted } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import { useRouter } from 'vue-router';
import { useLocalization } from '@/stores/localization';
import { usePreferencesStore, type StudyMode } from '@/stores/preferences';
import { useQuestionsStore } from '@/stores/questions';
import { useTranslations } from '@/stores/translations';
import { RouteName } from '@/router/names';

const $router = useRouter();
const { t, locale } = useLocalization();
const { selectedMode, selectedSectionId } = usePreferencesStore();
const { sections, loadSections } = useQuestionsStore();
const translations = useTranslations();

onMounted(() => {
  loadSections();
});

const modes: { value: StudyMode; label: string; description: string }[] = [
  {
    value: 'training',
    label: t('Training'),
    description: t('Training mode description')
  },
  {
    value: 'flashcards',
    label: t('Flash Cards'),
    description: t('Flash cards mode description')
  },
  {
    value: 'exam',
    label: t('Exam'),
    description: t('Exam mode description')
  }
];

const currentModeDescription = computed(() => {
  const mode = modes.find(m => m.value === selectedMode.value);
  return mode?.description || '';
});

const startSession = () => {
  if (!selectedSectionId.value) {
    // Start with all questions
    if (selectedMode.value === 'training') {
      $router.push({
        name: RouteName.AllQuestions,
        params: { id: 'init' }
      });
    } else if (selectedMode.value === 'flashcards') {
      $router.push({
        name: RouteName.FlashCards,
        params: { sectionId: 'all', id: 'init' }
      });
    } else if (selectedMode.value === 'exam') {
      $router.push({
        name: RouteName.Exam
      });
    }
  } else {
    // Start with selected section
    if (selectedMode.value === 'training') {
      $router.push({
        name: RouteName.SectionQuestions,
        params: { sectionId: selectedSectionId.value, id: 'init' }
      });
    } else if (selectedMode.value === 'flashcards') {
      $router.push({
        name: RouteName.FlashCards,
        params: { sectionId: selectedSectionId.value, id: 'init' }
      });
    } else if (selectedMode.value === 'exam') {
      $router.push({
        name: RouteName.SectionExam,
        params: { sectionId: selectedSectionId.value }
      });
    }
  }
};
</script>

<template>
  <GeneralPage :title="t('Start')">
    <!-- Mode Selection -->
    <div :class="$style.section">
      <h3 :class="$style.sectionTitle">{{ t('Choose mode') }}</h3>
      <div :class="$style.modeScroll">
        <button v-for="mode in modes" :key="mode.value"
          :class="[$style.modeOption, { [$style.active]: selectedMode === mode.value }]"
          @click="selectedMode = mode.value">
          <span :class="$style.modeLabel">{{ mode.label }}</span>
        </button>
      </div>
      <div :class="$style.modeDescription">
        {{ currentModeDescription }}
      </div>
    </div>

    <!-- Scope Selection -->
    <div :class="$style.section">
      <h3 :class="$style.sectionTitle">{{ t('Choose questions') }}</h3>

      <!-- Section Selection (only shown when scope is 'section') -->
      <div :class="$style.sectionSelection">
        <button :class="[$style.sectionOption, { [$style.active]: !selectedSectionId }]"
          @click="selectedSectionId = null">
          <span :class="$style.sectionLabel">{{ t('All questions') }}</span>
        </button>
        <button v-for="section in sections.values()" :key="section.id"
          :class="[$style.sectionOption, { [$style.active]: selectedSectionId === section.id }]"
          @click="selectedSectionId = section.id">
          <span :class="$style.sectionLabel">{{ translations.t(locale, section.title) }}</span>
        </button>
      </div>
    </div>

    <!-- Start Button -->
    <div :class="$style.startSection">
      <GeneralButton @click="startSession" :class="$style.startButton">
        {{ t('Start') }}
      </GeneralButton>
    </div>
  </GeneralPage>
</template>

<style module lang="less">
.section {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
  gap: var(--gap-s);
}

.sectionTitle {
  margin: 0;

  font-size: var(--font-size-2);
  font-weight: 600;
  text-align: center;
  color: var(--text-color);
}

.modeScroll {
  display: flex;
  justify-content: center;

  min-width: 100%;
  overflow-x: auto;
  gap: var(--gap-s);
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.modeOption {
  flex-shrink: 0;

  padding: var(--gap-s) var(--gap);

  white-space: nowrap;

  background: var(--main-color-10);
  border: 2px solid var(--main-color-20);
  border-radius: var(--border-radius);

  cursor: pointer;
  transition: all var(--transition-duration);

  &:hover {
    background: var(--main-color-20);
    border-color: var(--main-color-30);
  }

  &.active {
    color: var(--main-text-color);

    background: var(--main-color);
    border-color: var(--main-color);
  }
}

.modeLabel {
  font-size: var(--font-size-1);
}

.modeDescription {
  padding: var(--gap);

  font-size: var(--font-size-1);
  line-height: 1.5;
  text-align: center;
  color: var(--text-color);

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);
}

.sectionSelection {
  display: flex;
  flex-direction: column;

  margin-bottom: 52px;
  padding: var(--gap-s);

  gap: var(--gap-s);
}

.sectionOption {
  padding: var(--gap-s) var(--gap);

  text-align: left;

  background: var(--bg-color);
  border: 1px solid var(--negative-color-alpha-10);
  border-radius: var(--border-radius);

  cursor: pointer;
  transition: all var(--transition-duration);

  &:hover {
    background: var(--main-color-10);
    border-color: var(--main-color-20);
  }

  &.active {
    color: var(--main-text-color);

    background: var(--main-color);
    border-color: var(--main-color);
  }
}

.sectionLabel {
  font-size: var(--font-size-1);
  font-weight: 500;
}

.startSection {
  position: fixed;
  bottom: 0;
  z-index: 100;

  display: flex;
  justify-content: center;

  width: 100vw;
  padding: var(--gap-s) var(--gap);

  background: linear-gradient(to top, var(--bg-color), transparent);
}

.startButton {
  max-width: 450px;

  color: var(--secondary-text-color);

  background: var(--secondary-color);

  &:hover:not(:disabled) {
    background: var(--secondary-color-80);
  }

  &:disabled {
    transform: translateX(-50%);
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>