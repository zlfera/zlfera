import request from "@/utils/request";
import { Ref } from "vue";
//获取首页头部信息
export const findAllCategory = () => {
    return request("/home/category/head", "get");
};
export async function findCategorys(category: Ref<{}[]>) {
    const data = (await request("/home/category/head", "get")) as unknown as {
        result: [];
    };
    category.value = data.result;
}
