<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="title">
      <span style="color: red">Welcome</span>
      <span style="color: green">to</span>
      <span style="color: orange">Halla</span>
      <span style="color: blue">Adventures!</span>
    </h1>
    <img src="../assets/grandma.gif" />
    <!-- <h1>{{computed1}}</h1>
  <h1>{{data}}</h1>
  <h1>{{count}}</h1> -->

    <hh-button type="button" @click="$router.push('/mainmenu')"
      >Start</hh-button
    >
    <!-- <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
  </div>
</template>
<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
  reactive,
  computed,
  onErrorCaptured
} from "vue";
// defineProps({
//   msg: String
// });
const msgModified = ref(":::");
const count = ref(0);

const data = reactive({
  title: "HelloWorld"
});

const computed1 = computed(() => {
  return msgModified.value + count.value;
});

onErrorCaptured((e) => {
  console.log("Error: ", e);
  return true;
});
// onMounted();
// onUnmounted();
</script>
