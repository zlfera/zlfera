import { IRootState } from "./../../interface";
import { Module } from "vuex";

import { CartState } from "./types";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

const cart: Module<CartState, IRootState> = {
    namespaced: true,
    state,
    actions,
    mutations,
};
export default cart;
