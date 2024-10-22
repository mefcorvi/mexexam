<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { RouterView } from 'vue-router'
import { useRippleController } from './utils/ripple-controller';

useDark();
useRippleController();
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </Transition>
  </RouterView>
</template>

<style scoped></style>
