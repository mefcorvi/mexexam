<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { useLocalization } from '@/stores/localization';
import { usePreferencesStore } from '@/stores/preferences';
import { useQuestionsStore } from '@/stores/questions';
import { useTranslations } from '@/stores/translations';
import { useStatisticsStore } from '@/stores/statistics';
import { useLocaleRouter } from '@/composables/useLocaleRouter';
import { RouteName } from '@/router/names';
import { useTextsStore } from '@/stores/texts';

const { pushLocale } = useLocaleRouter();
const { t, locale } = useLocalization();
const { selectedMode, selectedSectionId, showNotes, hideTranslationsInTexts } = usePreferencesStore();
const { sections, loadSections } = useQuestionsStore();
const translations = useTranslations();
const { getGlobalStats, resetStatistics } = useStatisticsStore();
const { texts } = useTextsStore();

const modeScrollRef = ref<HTMLElement>();

const scrollToSelectedMode = async () => {
  await nextTick();

  if (!modeScrollRef.value) {
    return;
  }

  const activeButton = modeScrollRef.value.querySelector('[data-active="true"]') as HTMLElement;

  if (!activeButton) {
    return;
  }

  activeButton.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
};

watch(selectedMode, (newValue, oldValue) => {
  scrollToSelectedMode();

  if (newValue === 'texts' || oldValue === 'texts') {
    selectedSectionId.value = null;
  }
});

onMounted(() => {
  loadSections();
  scrollToSelectedMode();
});

const orderedSections = computed(() => {
  return Array.from(sections.values()).map(x => ({
    ...x,
    title: translations.t(locale.value, x.title)
  })).sort((a, b) => a.title.localeCompare(b.title));
});

const modes = computed(() => [
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
  },
  {
    value: 'texts',
    label: t('Texts'),
    description: t('Texts mode description')
  }
] as const);

const currentModeDescription = computed(() => {
  const mode = modes.value.find(m => m.value === selectedMode.value);
  return mode?.description || '';
});

const startSession = () => {
  if (!selectedSectionId.value) {
    // Start with all questions
    if (selectedMode.value === 'training') {
      pushLocale(RouteName.AllQuestions, { id: 'init' });
    } else if (selectedMode.value === 'flashcards') {
      pushLocale(RouteName.FlashCards, { sectionId: 'all', id: 'init' });
    } else if (selectedMode.value === 'exam') {
      pushLocale(RouteName.Exam);
    }
  } else {
    // Start with selected section
    if (selectedMode.value === 'training') {
      pushLocale(RouteName.SectionQuestions, { sectionId: selectedSectionId.value, id: 'init' });
    } else if (selectedMode.value === 'flashcards') {
      pushLocale(RouteName.FlashCards, { sectionId: selectedSectionId.value, id: 'init' });
    } else if (selectedMode.value === 'exam') {
      pushLocale(RouteName.SectionExam, { sectionId: selectedSectionId.value });
    } else if (selectedMode.value === 'texts') {
      pushLocale(RouteName.Text, { id: selectedSectionId.value });
      selectedSectionId.value = null;
    }
  }
};

const isStartDisabled = computed(() => {
  if (selectedMode.value === 'texts') {
    return !selectedSectionId.value;
  }

  return false;
});

const handleResetStatistics = () => {
  if (confirm(t('Are you sure you want to reset all statistics? This action cannot be undone.'))) {
    resetStatistics();
  }
};
</script>

<template>
  <GeneralPage :title="t('Start')">
    <!-- Mode Selection -->
    <div :class="$style.section">
      <h3 :class="$style.sectionTitle">{{ t('Choose mode') }}</h3>
      <div :class="$style.modeScroll" ref="modeScrollRef">
        <button v-for="mode in modes" :key="mode.value"
          :class="[$style.modeOption, { [$style.active]: selectedMode === mode.value }]"
          :data-active="selectedMode === mode.value" @click="selectedMode = mode.value">
          <span :class="$style.modeLabel">{{ mode.label }}</span>
        </button>
      </div>
      <div :class="$style.modeDescription">
        {{ currentModeDescription }}
      </div>
      <div v-if="selectedMode !== 'exam' && selectedMode !== 'texts'" :class="$style.setting">
        <label>{{ t('Show notes') }}</label>
        <ToggleSwitch v-model="showNotes" size="16px" />
      </div>
      <div v-if="selectedMode === 'texts' && locale !== 'es'" :class="$style.setting">
        <label>{{ t('Hide translations') }}</label>
        <ToggleSwitch v-model="hideTranslationsInTexts" size="16px" />
      </div>
    </div>

    <!-- Scope Selection -->
    <div :class="$style.section" v-if="selectedMode !== 'texts'">
      <h3 :class="$style.sectionTitle">{{ t('Choose questions') }}</h3>

      <!-- Section Selection (only shown when scope is 'section') -->
      <div :class="$style.sectionSelection">
        <button :class="[$style.sectionOption, { [$style.active]: !selectedSectionId }]"
          @click="selectedSectionId = null">
          <span :class="$style.sectionLabel">{{ t('All questions') }}</span>
        </button>
        <button v-for="section in orderedSections" :key="section.id"
          :class="[$style.sectionOption, { [$style.active]: selectedSectionId === section.id }]"
          @click="selectedSectionId = section.id">
          <span :class="$style.sectionLabel">{{ section.title }}</span>
        </button>
      </div>
    </div>

    <!-- Text Selection (only shown when mode is 'texts') -->
    <div :class="$style.section" v-if="selectedMode === 'texts'">
      <h3 :class="$style.sectionTitle">{{ t('Choose text') }}</h3>
      <div :class="$style.sectionSelection">
        <button v-for="text in texts.sort((a, b) => a.title[locale]?.localeCompare(b.title[locale] ?? '') ?? 0)"
          :key="text.id" :class="[$style.sectionOption, { [$style.active]: selectedSectionId === text.id }]"
          @click="selectedSectionId = text.id; startSession();">
          <span :class="$style.sectionLabel">{{ text.title[locale] }}</span>
        </button>
      </div>
    </div>

    <!-- Statistics Section -->
    <div :class="$style.section" v-if="getGlobalStats.totalQuestions > 0 && selectedMode !== 'texts'">
      <h3 :class="$style.sectionTitle">{{ t('Global Statistics') }}</h3>
      <div :class="$style.statsGrid">
        <div :class="$style.statItem">
          <div :class="$style.statValue">{{ getGlobalStats.totalQuestions }}</div>
          <div :class="$style.statLabel">{{ t('Total Questions Answered') }}</div>
        </div>
        <div :class="$style.statItem">
          <div :class="$style.statValue">{{ Math.round(getGlobalStats.averageAccuracy) }}%</div>
          <div :class="$style.statLabel">{{ t('Average Accuracy') }}</div>
        </div>
        <div :class="$style.statItem">
          <div :class="$style.statValue">{{ getGlobalStats.easyQuestions }}</div>
          <div :class="$style.statLabel">{{ t('Easy Questions') }}</div>
        </div>
        <div :class="$style.statItem">
          <div :class="$style.statValue">{{ getGlobalStats.mediumQuestions }}</div>
          <div :class="$style.statLabel">{{ t('Medium Questions') }}</div>
        </div>
        <div :class="$style.statItem">
          <div :class="$style.statValue">{{ getGlobalStats.hardQuestions }}</div>
          <div :class="$style.statLabel">{{ t('Hard Questions') }}</div>
        </div>
      </div>
      <GeneralButton @click="handleResetStatistics" :class="$style.resetButton">
        {{ t('Reset Statistics') }}
      </GeneralButton>
    </div>
    <div v-if="selectedMode !== 'texts'" :style="{ height: '52px' }">&nbsp;</div>
    <!-- Start Button -->
    <div v-if="selectedMode !== 'texts'" :class="$style.startSection">
      <GeneralButton @click="startSession" :class="$style.startButton" :disabled="isStartDisabled">
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
  color: var(--text-color);
}

.modeScroll {
  display: flex;
  justify-content: flex-start;

  max-width: calc(100vw - var(--gap-l));
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
  text-align: left;
  color: var(--text-color);

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);
}

.sectionSelection {
  display: flex;
  flex-direction: column;

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
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.setting {
  display: flex;
  align-items: center;

  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-1);

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);
  gap: var(--gap-s);
}

.statsGrid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--gap-s);
}

.statItem {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: var(--gap-s);

  text-align: center;

  background: var(--main-color-10);
  border: 1px solid var(--main-color-20);
  border-radius: var(--border-radius);
}

.statValue {
  margin-bottom: var(--gap-xs);

  font-size: var(--font-size-3);
  font-weight: 600;
  color: var(--text-color);
}

.statLabel {
  font-size: var(--font-size-0);
  line-height: 1.2;
  color: var(--text-color);
}

.resetButton {
  width: fit-content;

  font-size: var(--font-size-a1);
  color: var(--error-text-color);

  background: var(--error-bg-color);
  border: 1px solid var(--error-color);

  &:hover:not(:disabled) {
    color: var(--error-text-color);

    background: var(--error-color);
  }
}
</style>