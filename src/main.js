import { createApp } from "vue";
import router from "./router";
import Store from "./store/store";
import App from "./App.vue";
import HhTileContainer from "./components/HhTileContainer.vue";
import HhTile from "./components/HhTile.vue";
import HhCharacter from "./components/HhCharacter.vue";
import HhButton from "./components/base/HhButton.vue";

import "./index.css";
const app = createApp(App);
app.use(router);
app.use(Store);
app.component("HhButton", HhButton);

app.component("HhTileContainer", HhTileContainer);
app.component("HhTile", HhTile);
app.component("HhCharacter", HhCharacter);
app.mount("#app");
// console.log("process: ", process.env);
