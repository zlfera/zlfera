import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//import Home from "../views/Home.vue";
const Layout = () => import("@/views/Layout.vue");
const Home = () => import("@/views/home/Index.vue");
const Category = () => import("@/views/category/Index.vue");
const Sub = () => import("@/views/category/Sub.vue");
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",

        component: Layout,
        children: [
            { path: "/", component: Home },
            { path: "/category/:id", component: Category },
            { path: "/category/sub/:id", component: Sub },
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
});

export default router;
