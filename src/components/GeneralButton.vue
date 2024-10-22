<script setup lang="ts">
</script>
<template>
  <button data-rpl :class="$style.button">
    <slot />
  </button>
</template>
<style module lang="less">
.button {
  width: 100%;
  margin-bottom: var(--gap-s);

  text-align: center;
  letter-spacing: 0.02em;

  cursor: pointer;
}
</style>