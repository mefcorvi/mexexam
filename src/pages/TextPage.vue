<script setup lang="ts">
import { mdiCog } from '@mdi/js';
import { computed, ref, useCssModule, watch } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { useRouteParams } from '@vueuse/router';
import { useTranslations } from '@/stores/translations';
import { RouteName } from '@/router/names';
import { useLocalization } from '@/stores/localization';
import { useActivatableEffect } from '@/composables/activatable-effect';
import { useLocaleRouter } from '@/composables/useLocaleRouter';
import { useTextsStore, type Text } from '@/stores/texts';
import { usePreferencesStore } from '@/stores/preferences';
import type { LocalizedString } from '@/utils/questions-schema';

const $style = useCssModule();
const translations = useTranslations();
const { locale } = useLocalization();
const { hideTranslationsInTexts } = usePreferencesStore();

const { getText } = useTextsStore();

const { pushLocale } = useLocaleRouter();

const textId = useRouteParams<string>('id', '');

const selectedText = ref<Text | null>(null);
const userAnswers = ref<(string | null)[]>([]);
const shuffledOptions = ref<LocalizedString[][]>([]);

useActivatableEffect(
  () => {
    watch(
      () => textId.value,
      async (newValue) => {
        selectedText.value = getText(newValue);
        if (selectedText.value) {
          userAnswers.value = new Array(selectedText.value.questions.length).fill(null);
          // Initialize shuffled options for each question
          shuffledOptions.value = selectedText.value.questions.map(q => getShuffledOptions(q));
        }
      },
      { immediate: true }
    );
  },
  { immediate: true }
);

const shouldShowTranslation = computed(() => locale.value !== 'es' && !hideTranslationsInTexts.value);

const uit = (key: string) => {
  return translations.t(locale.value, key);
};

const openSettings = () => {
  pushLocale(RouteName.Settings);
};

// Function to shuffle array options
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

// Create shuffled options for each question including the correct answer
const getShuffledOptions = (question: any) => {
  if (!question.options) return [];
  const allOptions = [...question.options, question.answer];
  return shuffleArray(allOptions);
};

// Get option styling class based on user's selection
const getOptionClass = (question: any, option: any, questionIdx: number) => {
  const userAnswer = userAnswers.value[questionIdx];

  if (!userAnswer) {
    return ''; // No answer selected yet
  }

  const isCorrectOption = option[locale.value] === question.answer[locale.value];
  const isSelectedOption = option[locale.value] === userAnswer;

  if (isSelectedOption) {
    return isCorrectOption ? $style.correct : $style.wrong;
  }

  if (isCorrectOption && userAnswer !== question.answer[locale.value]) {
    return $style.correct; // Show correct answer when user selected wrong
  }

  return userAnswer ? $style.wrongFade : ''; // Fade unselected options when answer is given
};
</script>

<template>
  <GeneralPage :reserveSpace="false">
    <template #topBar>
      <div :class="$style.navigation">
        <div @click.stop="openSettings">
          <SvgIcon type="mdi" :path="mdiCog" />
        </div>
      </div>
    </template>
    <template v-if="selectedText">
      <div :class="$style.title">
        <div :class="$style.original">
          {{ selectedText.title.es }}
        </div>
        <div v-if="shouldShowTranslation" :class="$style.translation">
          {{ selectedText.title[locale] }}
        </div>
      </div>
      <div :class="$style.summary">
        {{ selectedText.summary[shouldShowTranslation ? locale : 'es'] }}
      </div>
      <div :class="$style.text" v-if="selectedText.text.es">
        <div :class="$style.part" :key="idx" v-for="(s, idx) in selectedText.text.es">
          <p :class="$style.original">{{ s }}</p>
          <p v-if="shouldShowTranslation" :class="$style.translation">
            {{ selectedText.text[locale]?.[idx] }}
          </p>
        </div>
      </div>
      <div :class="$style.questions">
        <h2>{{ uit('Questions') }}</h2>
        <div :class="$style.questionsList">
          <div v-for="(q, idx) in selectedText.questions" :key="idx" :class="$style.question">
            <div :class="$style.questionText">
              <div :class="$style.original">
                {{ q.text.es }}
              </div>
              <div v-if="shouldShowTranslation" :class="$style.translation">
                {{ q.text[locale] }}
              </div>
            </div>
            <div :class="$style.answerOptions">
              <div v-for="(option, optionIdx) in shuffledOptions[idx] || []" :key="optionIdx"
                :class="$style.optionWrapper">
                <GeneralButton @click="userAnswers[idx] = option[locale] ?? null"
                  :class="[$style.optionButton, getOptionClass(q, option, idx)]">
                  <div :class="$style.original">
                    {{ option.es }}
                  </div>
                  <div v-if="shouldShowTranslation" :class="$style.translation">
                    {{ option[locale] }}
                  </div>
                </GeneralButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </GeneralPage>
</template>

<style module lang="less">
.text {
  position: relative;

  width: 100%;
  max-width: var(--main-width);
  height: 100%;
}

.title {
  max-width: var(--main-width);

  font-size: var(--font-size-3);
  text-align: center;

  .translation {
    font-size: 70%;
    color: var(--negative-color-alpha-50);
  }
}

.summary {
  max-width: calc(var(--main-width) + var(--gap) * 2);
  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-a1);

  background: var(--secondary-color-10);
  border-radius: var(--border-radius);

  .translation {
    font-size: 80%;
    color: var(--negative-color-alpha-50);
  }
}

.part {
  position: relative;

  margin-bottom: var(--gap);

  font-size: var(--font-size-1);

  p {
    margin-bottom: 0;
  }

  .translation {
    font-size: 80%;
    color: var(--negative-color-alpha-50);
  }
}

.questions {
  max-width: var(--main-width);

  h2 {
    margin-bottom: var(--gap-s);

    font-size: var(--font-size-3);
    text-align: center;
  }

  .question {
    margin-bottom: var(--gap);

    font-size: var(--font-size-1);

    .translation {
      font-size: 80%;
      color: var(--negative-color-alpha-50);
    }
  }

  .questionText {
    .original {
      font-weight: 500;
    }
  }

  .answerText {
    font-size: 95%;
  }

  .answerOptions {
    display: flex;
    flex-direction: column;

    margin-top: var(--gap-s);

    gap: var(--gap-s);
  }

  .optionWrapper {
    width: 100%;
  }

  .optionButton {
    width: 100%;
    padding: var(--gap-s) var(--gap-s);

    font-size: var(--font-size-a1);
    text-align: left;

    .original {
      font-weight: 500;
    }

    &.correct {
      color: var(--success-text-color);

      background: var(--success-bg-color);
    }

    &.wrong {
      color: var(--error-text-color);

      background: var(--error-bg-color);
    }

    &.wrongFade {
      opacity: 0.3;
    }

    .translation {
      color: inherit;

      opacity: 0.5;
    }
  }
}
</style>
