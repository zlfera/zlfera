import { CategoryList, CategoryState } from "./types";

export default {
    setList(state: CategoryState, headCategory: []) {
        state.list = headCategory;
    },
    show(state: CategoryState, item: CategoryList) {
        const category = state.list.find(
            (category) => category.id === item.id
        ) as CategoryList;

        category.open = true;
        console.log(category);
    },
    hide(state: CategoryState, item: CategoryList) {
        const category = state.list.find(
            (category) => category.id === item.id
        ) as CategoryList;
        category.open = false;
        console.log(category);
    },
};
