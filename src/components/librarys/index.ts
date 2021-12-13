import { App } from "vue";
import XtxSkeleton from "./xtx-skeleton.vue";
import xtxCarousel from "./xtx-carousel.vue";
import XtxMore from "./xtx-more.vue";
export default {
    install(app: App<Element>) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component("XtxSkeleton", XtxSkeleton);
        app.component("xtxCarousel", xtxCarousel);
        app.component("XtxMore", XtxMore);
    },
};
