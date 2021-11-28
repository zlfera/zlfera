import { CategoryState } from "./types";

export default {
    setList(state: CategoryState, headCategory: []) {
        state.list = headCategory;
    },
};
