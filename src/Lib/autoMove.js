import { ref, computed } from "vue";

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const createRandomMove = () => {
  let direction = getRandomIntInclusive(1, 4);
  console.log("Direction index: ", direction);
  switch (direction) {
    case 1:
      return "forward";
    case 2:
      return "backward";
    case 3:
      return "left";
    case 4:
      return "right";
    default:
      return "";
  }
};

export { createRandomMove };
