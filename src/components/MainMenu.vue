<template>
  <div class="flex flex-col justify-center items-center bg-cyan-400">
    <h1>Main Menu</h1>
    <HhButton @click="$router.push('/firstlevel')"> Campain </HhButton>
    <HhButton>Load game</HhButton>
    <HhButton>Challenges</HhButton>
    <HhButton>Options</HhButton>
    <HhButton @click="$router.push('/')">Back</HhButton>
  </div>
</template>

<script setup></script>
