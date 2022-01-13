import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//import Home from "../views/Home.vue";
const Layout = () => import("@/views/Layout.vue");
const Home = () => import("@/views/home/Home.vue");
const Category = () => import("@/views/category/Index.vue");
const Sub = () => import("@/views/category/Sub.vue");
//const Goods = () => import("@/views/goods/Index.vue");
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",

        component: Layout,
        children: [
            { path: "/", component: Home },
            { path: "/category/:id", component: Category },
            { path: "/category/sub/:id", component: Sub },
            // { path: "/product/:id", component: Goods },
        ],
    },

    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        //路由滚动行为
        return { left: 0, top: 0 };
    },
});

export default router;
