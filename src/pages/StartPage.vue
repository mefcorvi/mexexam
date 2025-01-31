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

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page" :title="t('Start')">
    <GeneralMenu>
      <GeneralButton @click="allQuestions">{{ t('All questions') }}</GeneralButton>
      <GeneralButton @click="chooseSection">{{ t('Choose section') }}</GeneralButton>
    </GeneralMenu>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
}
</style>