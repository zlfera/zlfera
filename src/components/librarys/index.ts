import { App, Component } from "vue";
import XtxSkeleton from "./xtx-skeleton.vue";
import xtxCarousel from "./xtx-carousel.vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
// import XtxMore from "./xtx-more.vue";
// import XtxBread from "./XtxBread.vue";
// import xtxBreadItem from "./XtxBreadItem.vue";
//import defaultImg from "@/assets/images/200.png";
const importFn = require.context("./", false, /\.vue$/);
export default {
    install(app: App<Element>) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component("XtxSkeleton", XtxSkeleton);
        app.component("xtxCarousel", xtxCarousel);
        // app.component("XtxMore", XtxMore);
        // app.component("XtxBread", XtxBread);
        // app.component("XtxBreadItem", xtxBreadItem);
        importFn.keys().forEach((path: string) => {
            const component: Component = importFn(path).default;
            //
            const componentName = upperFirst(
                camelCase(
                    // 获取和目录深度无关的文件名
                    path
                        .split("/")
                        .pop()!
                        .replace(/\.\w+$/, "")
                )
            );

            //
            app.component(componentName, component);
        });
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
