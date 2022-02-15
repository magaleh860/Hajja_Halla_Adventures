<template>
  <div
    :class="[
      `bg-[url(${props.characterTile})]`,
      'w-[24px]',
      'h-[32px]',
      'absolute',
      'overflow-hidden'
    ]"
    :style="{
      top: currentCoordinates[0] * 32 + 'px',
      left: currentCoordinates[1] * 32 + 'px',
      'background-position': spriteCoordinates
    }"
  ></div>
</template>
<script setup>
import { defineProps, ref, computed } from "vue";
import { randomMove } from "../Lib/autoMove";

const props = defineProps({
  map: { type: Array, required: true },
  tilesAccessability: { type: Object, required: true },
  characterTile: { type: String, required: true },
  autoMove: { type: Boolean, default: false }
});

let classObj = {};
let currentCoordinates = ref([19, 10]);
let currentDirection = ref("forward");

let spriteCoordinates = computed(() => {
  console.log("Current direction: ", currentDirection.value);
  switch (currentDirection.value) {
    case "forward":
      return "0px 0px";
    case "backward":
      return "0px -64px";
    case "left":
      return "0px -96px";
    case "right":
      return "0px -32px";
    default:
      return "";
  }
});
let isValidMove = (direction, currentCoordinates, map, tilesAccessability) => {
  let yIndex = currentCoordinates[0];
  let xIndex = currentCoordinates[1];

  switch (direction) {
    case "forward":
      return yIndex - 1 >= 0
        ? tilesAccessability[map[yIndex - 1][xIndex]]
        : false;
    case "backward":
      return yIndex + 1 < 20
        ? tilesAccessability[map[yIndex + 1][xIndex]]
        : false;
    case "left":
      return xIndex - 1 >= 0
        ? tilesAccessability[map[yIndex][xIndex - 1]]
        : false;
    case "right":
      return xIndex + 1 < 20
        ? tilesAccessability[map[yIndex][xIndex + 1]]
        : false;
  }
};

let move = (direction, currentCoordinates) => {
  console.log("Inside move: ", direction, currentCoordinates);
  switch (direction) {
    case "forward":
      if (
        isValidMove(
          "forward",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      ) {
        currentDirection.value = direction;
        currentCoordinates[0] -= 1;
      }
      break;
    case "backward":
      if (
        isValidMove(
          "backward",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      ) {
        currentDirection.value = direction;
        currentCoordinates[0] += 1;
      }
      break;
    case "left":
      if (
        isValidMove(
          "left",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      ) {
        currentDirection.value = direction;
        currentCoordinates[1] -= 1;
      }

      break;
    case "right":
      if (
        isValidMove(
          "right",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      ) {
        currentDirection.value = direction;
        currentCoordinates[1] += 1;
      }
      break;
    default:
      break;
  }
};

// adds random movement
if (props.autoMove) {
  setInterval(() => {
    randomMove(currentCoordinates.value);
  }, 1000);
}

window.addEventListener("keydown", (e) => {
  // console.log("Event: ", e);
  console.log("keyClicked: ", e.key);
  if (e.key == "ArrowUp") move("forward", currentCoordinates.value);
  else if (e.key == "ArrowDown") move("backward", currentCoordinates.value);
  else if (e.key == "ArrowLeft") move("left", currentCoordinates.value);
  else if (e.key == "ArrowRight") move("right", currentCoordinates.value);
  else console.log("key clicked: ", e.key);
});
</script>
