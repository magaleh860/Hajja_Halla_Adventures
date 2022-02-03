<template>
  <div
    class="bg-[url('../assets/logo.png')] w-[32px] h-[32px] absolute"
    :style="{
      top: currentCoordinates[0] + 'px',
      left: currentCoordinates[1] + 'px'
    }"
  ></div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  map: { type: Array, required: true },
  tilesAccessability: { type: Object, required: true }
});

let currentCoordinates = ref([608, 256]);
let isValidMove = (direction, currentCoordinates, map, tilesAccessability) => {
  let yIndex = currentCoordinates[0] / 32;
  let xIndex = currentCoordinates[1] / 32;
  // console.log(
  //   "Inside isValidMove: ",
  //   direction,
  //   currentCoordinates,
  //   map,
  //   tilesAccessability
  // );
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

// console.log(
//   "Can move forward: ",
//   isValidMove(
//     "forward",
//     currentCoordinates.value,
//     props.map,
//     props.tilesAccessability
//   )
// );
// console.log(
//   "Can move backward: ",
//   isValidMove(
//     "backward",
//     currentCoordinates.value,
//     props.map,
//     props.tilesAccessability
//   )
// );
// console.log(
//   "Can move left: ",
//   isValidMove(
//     "left",
//     currentCoordinates.value,
//     props.map,
//     props.tilesAccessability
//   )
// );
// console.log(
//   "Can move right: ",
//   isValidMove(
//     "right",
//     currentCoordinates.value,
//     props.map,
//     props.tilesAccessability
//   )
// );

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
      )
        currentCoordinates[0] -= 32;
      break;
    case "backward":
      if (
        isValidMove(
          "backward",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      )
        currentCoordinates[0] += 32;
      break;
    case "left":
      if (
        isValidMove(
          "left",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      )
        currentCoordinates[1] -= 32;
      break;
    case "right":
      if (
        isValidMove(
          "right",
          currentCoordinates,
          props.map,
          props.tilesAccessability
        )
      )
        currentCoordinates[1] += 32;
      break;
    default:
      break;
  }
};

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
