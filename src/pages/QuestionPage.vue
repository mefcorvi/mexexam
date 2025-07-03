<script setup lang="ts">
import { mdiCog } from '@mdi/js';
import { computed, nextTick, ref, useCssModule, watch } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { type QuestionOption } from '@/stores/questions';
import { useRouteParams } from '@vueuse/router';
import { useRouter } from 'vue-router';
import { until } from '@vueuse/core';
import { useFreeSessionStore } from '@/stores/free-session';
import { useTranslations } from '@/stores/translations';
import { RouteName } from '@/router/names';
import { useLocalization } from '@/stores/localization';

const $style = useCssModule();
const $router = useRouter();
const translations = useTranslations();
const { locale, getLanguageName } = useLocalization();

const {
  startAll,
  startSection,
  stat,
  isAnswerRevealed,
  currentOptionsRandomized,
  currentQuestion,
  getRandomQuestionId,
  revealAnswer,
  selectAnswer,
  updateCounters,
  selectedAnswer,
  setQuestion,
  hasQuestion,
} = useFreeSessionStore();

const questionParamId = useRouteParams<string>('id', '');
const sectionParamId = useRouteParams<string>('sectionId', '');

const blinkingAnswer = ref<QuestionOption>();

const onQuestionIdChanged = () => {
  if (questionParamId.value === '') {
    return;
  }

  blinkingAnswer.value = undefined;

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
      }
    })
  }
}

const isAllStarted = ref(false);

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
    if (newValue[1]) {
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


let blinkingTimeout: number | undefined;

const isPageFadeOut = ref(false);
let changeQuestionTimeout: number | undefined;

/**
 * Selects a next question.
 */
const nextQuestion = () => {
  blinkingAnswer.value = undefined;
  window.clearTimeout(blinkingTimeout);

  changeQuestionTimeout = undefined;
  window.clearTimeout(changeQuestionTimeout);

  isPageFadeOut.value = true;

  changeQuestionTimeout = window.setTimeout(async () => {
    changeQuestionTimeout = undefined;

    await $router.replace({
      params: {
        id: getRandomQuestionId(),
      },
    })

    await until(selectedAnswer).toBeUndefined();
    await nextTick();
    isPageFadeOut.value = false;
  }, parseInt($style.pageFadeOutDuration, 10));
}

/**
 * Next navigation.
 */
const forward = () => {
  // changing animation is in progress
  if (changeQuestionTimeout) {
    return;
  }

  // current question is choice and answer is not selected, ignore
  if (currentQuestion.value?.type === 'choice' && !selectedAnswer.value) {
    return;
  }

  // current question is text and answer is hidden, just shown answer
  if (currentQuestion.value?.type === 'text' && !isAnswerRevealed.value) {
    revealAnswer();
    return;
  }

  // select next question
  nextQuestion();
}

const getOptionClass = (option: QuestionOption) => {
  const result: string[] = [];

  if (option.id === -1) {
    result.push($style.dontKnowOption);
  }

  if (!selectedAnswer.value) {
    return result;
  }

  // user is selected correct answer
  if (selectedAnswer.value.isAnswer) {
    // selected option is marked as correct
    if (option === selectedAnswer.value) {
      return $style.correct;
    }

    // other options are faded out
    result.push($style['wrong-fade']);
    return result;
  }

  // user is selected wrong answer and we want to show correct answer as blinking
  if (option === blinkingAnswer.value) {
    result.push($style['correct-blinking']);
    return result;
  }

  // if blinking has ended, show correct option as correct
  if (option.isAnswer) {
    result.push($style.correct);
    return result;
  }

  // current option is wrong
  result.push($style.wrong);
  return result;
}

const onOptionClick = (option: QuestionOption) => {
  // user has already made a choice, so go to the next question
  if (selectedAnswer.value) {
    forward();
    return;
  }

  selectAnswer(option);
  updateCounters();

  if (!option.isAnswer) {
    const correctAnswer = currentOptionsRandomized.value.find(x => x.isAnswer);
    blinkingAnswer.value = correctAnswer;
  }

  blinkingTimeout = window.setTimeout(() => {
    blinkingAnswer.value = undefined;
  }, 1000);
}

const isQuestionLanguageSwitched = ref(true);

// Question language: 'es' or current UI language
const questionLocale = computed(() => {
  return isQuestionLanguageSwitched.value ? 'es' : locale.value;
});

const onPageClick = (ev: MouseEvent) => {
  if (isButtonOrLinkClick(ev)) {
    return;
  }

  forward();
}

const toggleQuestionLanguage = () => {
  if (!window.getSelection()?.isCollapsed) {
    return;
  }

  isQuestionLanguageSwitched.value = !isQuestionLanguageSwitched.value;
}

const t = (key: string) => {
  return translations.t(questionLocale.value, key);
}

const openSettings = () => {
  $router.push({
    name: RouteName.Settings
  });
}

function isButtonOrLinkClick(ev: MouseEvent) {
  const target = ev.target as HTMLElement;
  return target.tagName === 'BUTTON' || target.tagName === 'A';
}
</script>

<template>
  <GeneralPage @click="onPageClick" :class="{ [$style.fadeOut]: isPageFadeOut }" :reserveSpace="false">
    <template #topBar>
      <div :class="$style.navigation">
        <div @click.stop="openSettings">
          <SvgIcon type="mdi" :path="mdiCog" />
        </div>
      </div>
    </template>
    <div :class="$style.question" v-if="currentQuestion">
      <div :class="$style.progress">
        <div :class="$style.correctAnswers">{{ stat.correctQuestions }}
        </div>
        <div :class="$style.wrongAnswers">{{ stat.wrongQuestions }}</div>
        <div :class="$style.allAnswers">{{ stat.totalQuestions }}</div>
      </div>
      <div :class="$style.text" @click.stop="toggleQuestionLanguage">
        <div>
          <div :class="$style.sectionTitle">{{ t(currentQuestion.section.title) }}</div>
          <div> {{ t(currentQuestion.question) }}</div>
        </div>
      </div>
      <div :class="$style.languageButtonContainer">
        <div v-if="locale !== 'es'" @click.stop="toggleQuestionLanguage" :class="$style.languageButton">
          <span :class="$style.languageLabel">→ {{ questionLocale === locale ? getLanguageName('es') :
            getLanguageName(locale) }}</span>
        </div>
      </div>
      <div :class="$style.answers">
        <template v-if="currentQuestion.type === 'choice'">
          <div v-for="option in currentOptionsRandomized" :key="`${currentQuestion.id}-${option.id}`"
            :class="$style.option">
            <GeneralButton @click.stop="onOptionClick(option)" :disabled="!!selectedAnswer"
              :class="[$style.button, getOptionClass(option)]">
              {{ t(option.value) }}
            </GeneralButton>
          </div>
        </template>
        <div v-if="currentQuestion.type === 'text'"
          :class="[$style.answer, isAnswerRevealed ? '' : $style.hiddenAnswer]" @click.stop="forward">
          <p :key="idx" v-for="(item, idx) of t(currentQuestion.answer).split('\n')">{{ item }}</p>
        </div>
      </div>
    </div>
  </GeneralPage>
</template>

<style module lang="less">
@pageFadeOutDuration: 100ms;

:export {
  pageFadeOutDuration: @pageFadeOutDuration;
}

.counter {
  font-weight: 500;

  cursor: pointer;
}

.question {
  position: relative;

  width: 100%;
  height: 100%;
  margin-top: var(--gap-l);
}

.text {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  align-content: center;
  align-items: flex-end;

  width: 100%;
  min-height: 6em;
  margin-bottom: var(--gap-s);
  padding: 0.75em 1em;

  font-size: var(--font-size-3);
  line-height: 130%;
  font-weight: 400;
  text-wrap: pretty;
  text-shadow: var(--text-shadow);

  background: linear-gradient(90deg, var(--secondary-color-alpha-5), var(--secondary-color-alpha-30), var(--secondary-color-alpha-5));
  border-radius: var(--border-radius);

  &>div {
    max-width: 400px;

    text-align: center;

    opacity: 1;
    transition: opacity @pageFadeOutDuration;
  }

  img {
    width: 64px;
    height: 64px;
    margin: 0 auto;

    border-radius: var(--border-radius);
  }
}

.languageButtonContainer {
  position: relative;
  left: 50%;
  z-index: 1;

  max-width: 400px;

  transform: translateX(-50%);
}


.answers {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-s);

  padding: var(--gap);

  font-size: var(--font-size-2);

  opacity: 1;
  transition: opacity @pageFadeOutDuration;

  .option {
    width: 100%;
    max-width: 400px;
  }

}

.fadeOut {
  .text>div {
    opacity: 0;
  }

  .answers {
    opacity: 0;
  }
}

.button {
  &.correct {
    color: var(--success-text-color);

    background: var(--success-bg-color);
  }

  &.correct-blinking {
    animation: success 300ms infinite;
  }

  &.wrong {
    color: var(--error-text-color);

    background: var(--error-bg-color);
  }

  &.wrong-fade {
    opacity: 0.3;
  }
}

.next {
  color: var(--text-color);

  background: var(--secondary-color-20);
}

.answer {
  width: 100%;
  margin-bottom: 1rem;

  font-size: var(--font-size-2);
  text-align: center;

  cursor: pointer;
  filter: blur(0);
  transition: filter 200ms;
}

.hiddenAnswer {
  filter: blur(10px);
}

.navigation {
  display: flex;
  flex-shrink: 0;

  font-size: var(--font-size-4);
  line-height: 100%;

  user-select: none;

  .back {
    flex-grow: 1;

    text-align: right;
  }

  .forward {
    flex-grow: 1;

    text-align: left;
  }

  &>div {
    padding: var(--gap-s);

    cursor: pointer;
    transition: opacity 200ms;
  }

  .disabled {
    cursor: default;
    opacity: 0.3;
  }
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

@keyframes success {

  0%,
  49% {
    color: var(--success-text-color);

    background: var(--success-bg-color);
  }

  50%,
  100% {
    color: var(--btn-text-color);

    background: var(--btn-bg-color);
  }
}

.sectionTitle {
  font-size: var(--font-size-a2);

  opacity: 0.3;
}

.languageButton {
  position: absolute;
  right: 0;
  bottom: -8px;

  display: flex;
  align-items: center;

  padding: var(--gap-s);

  font-size: var(--font-size-a1);
  line-height: 100%;

  background: var(--bg-color);
  border-radius: var(--border-radius);

  cursor: pointer;
  opacity: 0.7;
  transition: opacity 200ms;

  user-select: none;

  .onHover({
    opacity: 1;
  });

.languageLabel {
  flex-grow: 1;

  font-size: var(--font-size-a1);
}
}
</style>
