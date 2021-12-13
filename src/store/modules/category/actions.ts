import { Commit } from "vuex";
import { findAllCategory } from "./../../../api/category";

import { CategoryList, CategoryState } from "./types";
type Icx = {
    commit: Commit;
    state: CategoryState;
};

export default {
    async getList({ commit }: Icx) {
        const { result } = (await findAllCategory()) as unknown as {
            msg: string;
            result: [];
        };
        result.forEach((item: CategoryList) => {
            item.open = false;
        });

        commit("setList", result);
    },
};
