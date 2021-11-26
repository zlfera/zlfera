import { Module } from "vuex";
import { IRootState } from "./../../interface";
import actions from "./actions";

import { IUserModuleTypes } from "./interface";
import mutations from "./mutations";
import state from "./state";

const user: Module<IUserModuleTypes, IRootState> = {
    namespaced: true,
    state,
    actions,
    mutations,
};
export default user;
