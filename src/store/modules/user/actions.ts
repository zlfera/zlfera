import { Commit } from "vuex";
import { IUserModuleTypes, User } from "./interface";
import { MutationsTypes } from "./mutationsTypes";
type Icx = {
  commit: Commit;
  state: IUserModuleTypes;
};
export default {
  [MutationsTypes.setUser]({ commit }: Icx, payload: User) {
    commit(MutationsTypes.setUser, payload);
  },
};
