<template>
  <h1>{{ msgModified }}</h1>
  <h1>{{ computed1 }}</h1>
  <h1>{{ data }}</h1>
  <h1>{{ count }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
  reactive,
  computed,
  onErrorCaptured,
} from "vue";
// defineProps({
//   msg: String
// });
const msgModified = ref(":::");
const count = ref(0);

const data = reactive({
  title: "HelloWorld",
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
<style scoped>
a {
  color: #42b983;
}
</style>
