import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//import { key } from "./store/index";
createApp(App).use(store).use(router).mount("#app");
