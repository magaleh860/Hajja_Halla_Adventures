<template>
  <div
    class="tiles-container relative grid"
    :style="{
      width: '640px',
      height: '640px'
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
// let width = process.env.VITE_GAME_MAP_WIDTH;
// let height = process.env.VITE_GAME_MAP_HEIGHT;
</script>
<style scoped>
.tiles-container {
  grid-template-rows:
    32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px
    32px 32px 32px 32px 32px 32px 32px;
  grid-template-columns:
    32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px
    32px 32px 32px 32px 32px 32px 32px;
}
</style>
