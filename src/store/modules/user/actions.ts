import { Commit } from "vuex";
import { IUserModuleTypes } from "./interface";
import { MutationsTypes } from "./mutationsTypes";
type Icx = {
    commit: Commit;
    state: IUserModuleTypes;
};
export default {
    [MutationsTypes.setUser]({ commit }: Icx, payload: number) {
        commit(MutationsTypes.setUser, payload);
    },
};
