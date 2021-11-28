import { IUserModuleTypes } from "./interface";
import { MutationsTypes } from "./mutationsTypes";

export default {
    [MutationsTypes.setUser](state: IUserModuleTypes): void {
        state.profile.token = "123";
    },
};
