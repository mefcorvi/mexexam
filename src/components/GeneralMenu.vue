<script setup lang="ts">
</script>
<template>
  <div :class="$style.menu">
    <slot />
  </div>
</template>
<style module lang="less">
.page {
  justify-content: center;
}

.menu {
  display: flex;
  flex-direction: column;

  gap: var(--gap-s);
}
</style>