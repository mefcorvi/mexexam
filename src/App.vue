<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { RouterView } from 'vue-router'
import { useRippleController } from './utils/ripple-controller';

useDark();
useRippleController();
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<style scoped></style>
