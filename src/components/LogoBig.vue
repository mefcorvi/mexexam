<script setup lang="ts">
</script>
<template>
  <div :class="$style.logo">
    <img src="/logo.svg" width="192" height="192" />
    <h3>MexExam</h3>
  </div>
</template>
<style module lang="less">
.logo {
  h3 {
    margin: 0;

    font-size: var(--font-size-5);
    line-height: 1;
    font-weight: 500;
    text-align: center;
  }

  img {
    max-width: 50vw;
    max-height: 50vh;
    margin-bottom: var(--gap-s);

    border: 5px solid #012D48;
    border-radius: 50%;
    aspect-ratio: 1;
  }
}
</style>