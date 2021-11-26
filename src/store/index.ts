import { IAllStateTypes } from "./interface";
//import { InjectionKey } from "vue";
import { createStore } from "vuex";
import user from "./modules/user";
import cart from "./modules/cart";
import { category } from "./modules/category";
import createPersistedstate from "vuex-persistedstate";
//export const key: InjectionKey<Store<IAllStateTypes>> = Symbol("zlfera");
// export const userStore = function <T = IAllStateTypes>(): Store<T> {
//     return baseUserStore<T>(key);
// };
export default createStore<IAllStateTypes>({
    modules: {
        user,
        cart,
        category,
    },
    plugins: [
        createPersistedstate({
            key: "zlfera-pc",
            paths: ["user", "cart"],
        }),
    ],
});
