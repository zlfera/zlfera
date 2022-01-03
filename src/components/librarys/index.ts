import { App } from "vue";
import XtxSkeleton from "./xtx-skeleton.vue";
import xtxCarousel from "./xtx-carousel.vue";
import XtxMore from "./xtx-more.vue";
import XtxBread from "./xtx-bread.vue";
import xtxBreadItem from "./xtx-bread-item.vue";
//import defaultImg from "@/assets/images/200.png";
export default {
    install(app: App<Element>) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component("XtxSkeleton", XtxSkeleton);
        app.component("xtxCarousel", xtxCarousel);
        app.component("XtxMore", XtxMore);
        app.component("XtxBread", XtxBread);
        app.component("XtxBreadItem", xtxBreadItem);
        defineDirective(app);
    },
};
const defineDirective = (app: App) => {
    // 图片懒加载指令
    app.directive("lazyload", {
        mounted(el, binding) {
            const observer = new IntersectionObserver(
                ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        observer.unobserve(el);
                        el.onerror = () => {
                            //el.src = defaultImg;
                        };
                        el.src = binding.value;
                    }
                },
                {
                    threshold: 0.01,
                }
            );
            console.log("mounted");

            observer.observe(el);
        },
    });
};
