<script setup lang="ts">
import { ref, useCssModule, watch, computed } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { mdiCog, mdiRotate3d } from '@mdi/js';
import { useRouteParams } from '@vueuse/router';
import { useRouter } from 'vue-router';
import { useFreeSessionStore } from '@/stores/free-session';
import { useTranslations } from '@/stores/translations';
import { RouteName } from '@/router/names';
import { useLocalization } from '@/stores/localization';
import { useActivatableEffect } from '@/composables/activatable-effect';

const $style = useCssModule();
const $router = useRouter();
const translations = useTranslations();

const {
  startAll,
  startSection,
  currentQuestion,
  getRandomQuestionId,
  setQuestion,
  hasQuestion,
  markQuestionCorrect,
  markQuestionWrong,
  stat,
} = useFreeSessionStore();

const questionParamId = useRouteParams<string>('id', '');
const sectionParamId = useRouteParams<string>('sectionId', '');

const isFlipped = ref(false);

const onQuestionIdChanged = () => {
  if (questionParamId.value === '') {
    return;
  }

  isFlipped.value = false;

  if (hasQuestion(questionParamId.value)) {
    setQuestion(questionParamId.value);
  } else {
    const questionId = getRandomQuestionId();

    if (!questionId) {
      $router.replace({
        name: RouteName.Home,
      });
      return;
    }

    $router.replace({
      params: {
        id: questionId,
        sectionId: sectionParamId.value,
      }
    })
  }
}

const isAllStarted = ref(false);

useActivatableEffect(() => {
  watch(() => [questionParamId.value, sectionParamId.value], async (newValue, oldValue) => {
    if (!oldValue) {
      oldValue = ['', ''];
    }

    if (!newValue[0] && !newValue[1]) {
      return;
    }

    if (newValue[0] === oldValue[0] && newValue[1] === oldValue[1]) {
      return;
    }

    if (newValue[1] !== oldValue[1] || !oldValue[1]) {
      if (newValue[1] !== 'all') {
        isAllStarted.value = false;
        await startSection(newValue[1]);
      } else {
        if (!isAllStarted.value) {
          isAllStarted.value = true;
          await startAll();
        }
      }
    }

    onQuestionIdChanged();
  }, { immediate: true });
}, { immediate: true });

/**
 * Flips the card to show question or answer.
 */
const flipCard = () => {
  isFlipped.value = !isFlipped.value;
}

/**
 * Marks the current question as remembered and moves to the next question.
 */
const markAsRemembered = async () => {
  markQuestionCorrect();
  isFlipped.value = false;

  setTimeout(() => {
    $router.replace({
      params: {
        id: getRandomQuestionId(),
        sectionId: sectionParamId.value,
      },
    });
  }, 200);
}

/**
 * Marks the current question as not remembered and moves to the next question.
 */
const markAsNotRemembered = async () => {
  markQuestionWrong();
  isFlipped.value = false;

  setTimeout(() => {
    $router.replace({
      params: {
        id: getRandomQuestionId(),
        sectionId: sectionParamId.value,
      },
    });
  }, 200);
}


const openSettings = () => {
  $router.push({
    name: RouteName.Settings
  })
};

const { t, locale, getLanguageName } = useLocalization();

const isQuestionLanguageSwitched = ref(true);

// Question language: 'es' or current UI language
const questionLocale = computed(() => {
  return isQuestionLanguageSwitched.value ? 'es' : locale.value;
});

const toggleQuestionLanguage = () => {
  isQuestionLanguageSwitched.value = !isQuestionLanguageSwitched.value;
}

const qt = (text: string) => {
  return translations.t(questionLocale.value, text);
}
</script>

<template>
  <GeneralPage :class="[$style.page]">
    <template #topBar>
      <div :class="$style.topBar">
        <div :class="$style.spacer"></div>
        <div :class="$style.settingsBtn" @click.stop="openSettings">
          <SvgIcon :path="mdiCog" />
        </div>
      </div>
    </template>

    <div :class="$style.cardContainer" v-if="currentQuestion">
      <div :class="$style.progress">
        <div :class="$style.correctAnswers">{{ stat.correctQuestions }}</div>
        <div :class="$style.wrongAnswers">{{ stat.wrongQuestions }}</div>
        <div :class="$style.allAnswers">{{ stat.totalQuestions }}</div>
      </div>
      <div :class="[$style.card, { [$style.flipped]: isFlipped }]" @click="flipCard">
        <div :class="$style.cardInner">
          <div v-if="locale !== 'es'" @click.stop="toggleQuestionLanguage" :class="$style.languageButton">
            <span :class="$style.languageLabel">→ {{ questionLocale === locale ? getLanguageName('es') :
              getLanguageName(locale) }}</span>
          </div>
          <!-- Question Side -->
          <div :class="$style.cardFront">
            <div :class="$style.questionContent">
              <h2 :class="$style.questionTitle">{{ t('Question') }}</h2>
              <div :class="$style.questionText">
                {{ qt(currentQuestion.question) }}
              </div>
              <div :class="$style.flipHint">
                <SvgIcon :path="mdiRotate3d" />
                {{ t('Tap to see answer') }}
              </div>
            </div>
          </div>

          <!-- Answer Side -->
          <div :class="$style.cardBack">
            <div :class="$style.answerContent">
              <h2 :class="$style.answerTitle">{{ t('Answer') }}</h2>
              <div :class="$style.answerText">
                {{ qt(currentQuestion.answer) }}
              </div>
              <div v-if="currentQuestion?.note" :class="$style.note" v-html="qt(currentQuestion.note)">
              </div>
              <div :class="$style.answerButtons">
                <GeneralButton @click.stop="markAsNotRemembered" variant="outlined">
                  {{ t('Forgot') }}
                </GeneralButton>
                <GeneralButton @click.stop="markAsRemembered" variant="filled">
                  {{ t('Remember') }}
                </GeneralButton>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </GeneralPage>
</template>

<style module lang="less">
.page {
  justify-content: center;
  gap: var(--gap);
}

.topBar {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  min-height: var(--topbar-height);
  padding: 0 var(--gap);
}

.spacer {
  flex: 1;
}

.settingsBtn {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--gap-s);

  border-radius: var(--border-radius);

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--secondary-color-10);
  }
}

.cardContainer {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 600px;
  min-height: 400px;
  padding: var(--gap);

  gap: var(--gap-s);
}

.progress {
  position: absolute;
  top: -10px;
  left: 50%;
  z-index: 2;

  display: flex;

  transform: translateX(-50%);

  gap: var(--gap-s);

  &>div {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;

    height: var(--font-size-3);
    padding: 0 2px;

    border-radius: var(--border-radius);
  }

  .correctAnswers {
    color: var(--success-text-color);

    background: var(--success-bg-color);
  }

  .wrongAnswers {
    color: var(--error-text-color);

    background: var(--error-bg-color);
  }

  .allAnswers {
    background: var(--bg-color-alpha-50);
  }
}

.card {
  width: 100%;
  max-width: 600px;
  height: 400px;

  perspective: 1000px;
  cursor: pointer;
}

.cardInner {
  position: relative;

  width: 100%;
  height: 100%;

  text-align: center;

  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card.flipped .cardInner {
  transform: rotateY(180deg);
}

.cardFront,
.cardBack {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: var(--gap);

  background: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  backface-visibility: hidden;
}

.cardBack {
  transform: rotateY(180deg);
}

.questionContent,
.answerContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  gap: var(--gap);
}

.questionTitle,
.answerTitle {
  margin: 0;

  font-size: var(--font-size-h2);
  font-weight: 600;
  color: var(--text-color);
}

.questionText,
.answerText {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  font-size: var(--font-size-2);
  line-height: 1.6;
  text-align: center;
  color: var(--text-color);
}

.note {
  max-height: 100px;
  padding: var(--gap-s);
  overflow-y: auto;

  font-size: var(--font-size-a2);
  text-align: left;
  color: var(--secondary-color);

  background: var(--secondary-color-10);
  border-left: 4px solid var(--secondary-color);
  border-radius: var(--border-radius);
}

.answerButtons {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: var(--gap-s);

  width: 100%;

  button {
    max-width: 150px;
  }
}

.flipHint {
  display: flex;
  align-items: center;

  font-size: var(--font-size-a2);
  color: var(--negative-color-alpha-60);
  gap: var(--gap-s);
}

.languageButton {
  position: absolute;
  top: -32px;
  right: var(--gap);
  z-index: 1;

  display: flex;
  align-items: center;

  padding: var(--gap-s);

  font-size: var(--font-size-a1);
  line-height: 100%;

  background: var(--negative-color-alpha-5);
  border-radius: var(--border-radius);

  transform-style: preserve-3d;
  cursor: pointer;
  opacity: 0.7;
  transition: transform 0.6s, opacity 0.2s;

  user-select: none;
  will-change: transform, opacity;

  .onHover({
    opacity: 1;
  });

.languageLabel {
  flex-grow: 1;

  font-size: var(--font-size-a1);
}
}

.flipped .languageButton {
  transform: rotateY(180deg);
}
</style>