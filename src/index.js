import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@styles/main.css";

const appVue = createApp(App);

appVue.use(store);
appVue.use(router);
appVue.mount("#app");
//createApp(App).mount("#app");
