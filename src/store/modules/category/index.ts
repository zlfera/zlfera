import { Module } from "vuex";
import { IRootState } from "./../../interface";
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import { CategoryState } from "./types";
const category: Module<CategoryState, IRootState> = {
    namespaced: true,
    state,
    actions,
    mutations,
};
export default category;
