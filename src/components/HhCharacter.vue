<template>
  <div
    :class="[
      //`bg-[url(${props.characterTile})]`,
      'bg-[url(/src/assets/gypsy-001.png)]',
      'w-[24px]',
      'h-[32px]',
      'absolute',
      'overflow-hidden'
    ]"
    :style="{
      top: currentCoordinates[0] * 32 + 'px',
      left: currentCoordinates[1] * 32 + 'px',
      'background-position': spriteCoordinates,
      'transition-property': 'top, left',
      'transition-timing-function': 'linear',
      'transition-duration': '500ms'
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

let currentCoordinates = ref([19, 10]);
let currentDirection = ref("forward");
let movingSpriteIndex = ref(1);
let movingInProgess = ref(false);
let spriteCoordinates = computed(() => {
  let spriteType = currentDirection.value + "_" + movingSpriteIndex.value;
  switch (spriteType) {
    case "forward_1":
      return "0px 0px";
    case "forward_2":
      return "-24px 0px";
    case "forward_3":
      return "-48px 0px";
    case "backward_1":
      return "0px -64px";
    case "backward_2":
      return "-24px -64px";
    case "backward_3":
      return "-48px -64px";
    case "left_1":
      return "0px -96px";
    case "left_2":
      return "-24px -96px";
    case "left_3":
      return "-48px -96px";
    case "right_1":
      return "0px -32px";
    case "right_2":
      return "-24px -32px";
    case "right_3":
      return "-48px -32px";
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

  if (movingInProgess.value) return;
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
        movingInProgess.value = true;
        setTimeout(() => {
          movingInProgess.value = false;
        }, 300);
        setTimeout(() => {
          movingSpriteIndex.value = 2;
          console.log(movingSpriteIndex.value);
        }, 100);
        setTimeout(() => {
          movingSpriteIndex.value = 3;
          console.log(movingSpriteIndex.value);
        }, 200);
        setTimeout(() => {
          movingSpriteIndex.value = 1;
          console.log(movingSpriteIndex.value);
        }, 300);
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
        movingInProgess.value = true;
        setTimeout(() => {
          movingInProgess.value = false;
        }, 300);
        setTimeout(() => {
          movingSpriteIndex.value = 2;
          console.log(movingSpriteIndex.value);
        }, 100);
        setTimeout(() => {
          movingSpriteIndex.value = 3;
          console.log(movingSpriteIndex.value);
        }, 200);
        setTimeout(() => {
          movingSpriteIndex.value = 1;
          console.log(movingSpriteIndex.value);
        }, 300);
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
        movingInProgess.value = true;
        setTimeout(() => {
          movingInProgess.value = false;
        }, 300);
        setTimeout(() => {
          movingSpriteIndex.value = 2;
          console.log(movingSpriteIndex.value);
        }, 100);
        setTimeout(() => {
          movingSpriteIndex.value = 3;
          console.log(movingSpriteIndex.value);
        }, 200);
        setTimeout(() => {
          movingSpriteIndex.value = 1;
          console.log(movingSpriteIndex.value);
        }, 300);
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
        movingInProgess.value = true;
        setTimeout(() => {
          movingInProgess.value = false;
        }, 300);
        setTimeout(() => {
          movingSpriteIndex.value = 2;
          console.log(movingSpriteIndex.value);
        }, 100);
        setTimeout(() => {
          movingSpriteIndex.value = 3;
          console.log(movingSpriteIndex.value);
        }, 200);
        setTimeout(() => {
          movingSpriteIndex.value = 1;
          console.log(movingSpriteIndex.value);
        }, 300);
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
