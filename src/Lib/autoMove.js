import { ref, computed } from "vue";

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const randomMove = (coordinates) => {
  let axis = getRandomIntInclusive(0, 1);
  let step = getRandomIntInclusive(-1, 1);
  coordinates[axis] += step;
};

export { randomMove };
