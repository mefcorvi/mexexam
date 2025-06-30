<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
import { useRouter } from 'vue-router';
import { useLocalization } from '@/stores/localization';
import { RouteName } from '@/router/names';

const $router = useRouter();

const allQuestions = () => {
  $router.push({
    name: RouteName.AllQuestions,
    params: {
      id: 'init'
    }
  })
};

const chooseSection = () => {
  $router.push({
    name: RouteName.ChooseSection
  })
};

const startExam = () => {
  $router.push({
    name: RouteName.Exam
  })
};

const chooseSectionExam = () => {
  $router.push({
    name: RouteName.ChooseSection,
    query: { mode: 'exam' }
  })
};

const startFlashCards = () => {
  $router.push({
    name: RouteName.FlashCards,
    params: {
      sectionId: 'all',
      id: 'init'
    }
  })
};

const chooseSectionFlashCards = () => {
  $router.push({
    name: RouteName.ChooseSection,
    query: { mode: 'flashcards' }
  })
};

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page" :title="t('Start')">
    <GeneralMenu>
      <GeneralButton @click="allQuestions">{{ t('All questions') }}</GeneralButton>
      <GeneralButton @click="chooseSection">{{ t('Choose section') }}</GeneralButton>
      <GeneralButton @click="startExam">{{ t('Exam mode') }}</GeneralButton>
      <GeneralButton @click="chooseSectionExam">{{ t('Section Exam') }}</GeneralButton>
      <GeneralButton @click="startFlashCards">{{ t('Flash Cards') }}</GeneralButton>
      <GeneralButton @click="chooseSectionFlashCards">{{ t('Flash cards mode') }}</GeneralButton>
    </GeneralMenu>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
}
</style>