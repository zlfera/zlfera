import { App } from "vue";
import XtxSkeleton from "./xtx-skeleton.vue";

export default {
    install(app: App<Element>) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component("XtxSkeleton", XtxSkeleton);
    },
};
