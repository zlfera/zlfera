import { IRootState, IAllStateTypes } from "./interface";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUserStore } from "vuex";
import user from "./modules/user";
import cart from "./modules/cart";
export const key: InjectionKey<Store<IRootState>> = Symbol("zlfera");
export const userStore = function <T = IAllStateTypes>(): Store<T> {
    return baseUserStore<T>(key);
};
export default createStore<IRootState>({
    modules: {
        user,
        cart,
    },
});
