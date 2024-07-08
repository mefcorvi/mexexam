<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const start = () => {
  $router.push({
    name: 'question',
    params: {
      id: 'init'
    }
  })
}
</script>
<template>
  <GeneralPage :class="$style.page">
    <img src="/logo.svg" width="192" height="192" />
    <h3>MexExam</h3>
    <div :class="$style.menu">
      <GeneralButton @click="start">Start</GeneralButton>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;

  h3 {
    font-weight: 500;
    font-size: 1.8rem;
  }

  img {
    max-width: 50vw;
    max-height: 50vh;
    aspect-ratio: 1;
    margin-bottom: var(--gap-s);
    border-radius: 50%;
    border: 5px solid #012D48;
  }
}

.menu {
  margin-top: var(--gap);
}
</style>