<template>
  <div
    class="bg-[url(/src/assets/tiles-grass.png)] bg-no-repeat w-[32px] h-[32px] overflow-hidden"
    :style="{ 'background-position': spriteCoordinates }"
  ></div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: { type: String, required: true }
});

const getSprite = (type) => {
  switch (type) {
    case "grass":
      return "0px 0px";
    case "trees":
      return "-32px 0px";
    case "double-trees":
      return "-64px 0px";
    case "hole":
      return "-96px -32px";
    case "water":
      return "0px -64px";
  }
};

let spriteCoordinates = getSprite(props.type);

// console.log("type: ", props.type);
</script>
