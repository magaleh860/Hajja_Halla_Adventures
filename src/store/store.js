// import Vue from "vue";
import { createStore } from 'vuex';
import { MainScreenStore } from "./modules/MainScreenStore.js";
// Vue.use(Vuex);

export default createStore({
  modules: {
    MainScreenStore
  },
});
