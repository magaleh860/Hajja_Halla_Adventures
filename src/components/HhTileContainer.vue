<template>
  <div
    class="tiles-container"
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
  /* width: 640px;
  height: 640px; */
  /* display: flex;
  flex-flow: wrap; */
  position: relative;
  display: grid;
  grid-template-rows:
    32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px
    32px 32px 32px 32px 32px 32px 32px;
  grid-template-columns:
    32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px 32px
    32px 32px 32px 32px 32px 32px 32px;
}
</style>
