import { topCategory } from "@/api/constants";
import { CategoryState } from "./types";

export default <CategoryState>{
    list: topCategory.map((item: string) => {
        return { name: item };
    }),
};
