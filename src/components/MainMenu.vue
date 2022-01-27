<template>
  <div class="main-menu-container">
    <h1>Main Menu</h1>
    <button class="main-menu-buttons" @click="$router.push('/firstlevel')">
      Campain
    </button>
    <button class="main-menu-buttons">Load game</button>
    <button class="main-menu-buttons">Challenges</button>
    <button class="main-menu-buttons">Options</button>
    <button class="main-menu-buttons" @click="$router.push('/')">Back</button>
  </div>
</template>

<script setup></script>
<style scoped>
.main-menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 140, 255);
}

.main-menu-buttons {
  background: cyan;
  width: 200px;
  border-radius: 5px;
  margin: 20px;
}
</style>
