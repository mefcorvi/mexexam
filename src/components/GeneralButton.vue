<script setup lang="ts">
</script>
<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>
<style module lang="less">
.button {
  font-size: 1.1rem;
  margin-bottom: var(--gap-s);
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  text-align: center;
  width: 100%;
  transition: background-color 200ms, color 200ms;
}
</style>