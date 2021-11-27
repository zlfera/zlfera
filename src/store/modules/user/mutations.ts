import { IUserModuleTypes, User } from "./interface";
import { MutationsTypes } from "./mutationsTypes";

export default {
  [MutationsTypes.setUser](state: IUserModuleTypes, payload: User): void {
    state.profile.account = payload.account;
  },
};
