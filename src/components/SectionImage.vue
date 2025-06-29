<script setup lang="ts">
import type { QuestionsSection } from '@/stores/questions';

defineProps<{
  section: QuestionsSection;
}>();
</script>
<template>
  <img :src="`/sections/${section.image}`" v-if="section.image" alt="Section Image" />
</template>
<style module lang="less"></style>