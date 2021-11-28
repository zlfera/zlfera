import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/styles/common.less";
import { key } from "./store/index";
createApp(App).use(store, key).use(router).mount("#app");
