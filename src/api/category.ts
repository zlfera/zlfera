import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { Ref } from "vue";
import { Brand, Result, SaleProperty, Zlfera } from "./types";
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
export async function findTopCategory(id: string, category: Ref<{}[]>) {
    const data = (await request("/category", "get", { id })) as unknown as {
        result: { children: [] };
    };
    category.value = data.result.children;
}
export async function findSubCategoryFilter(
    id: string,
    filter: Ref<Result>
    //filterLoaded: Ref<boolean>
) {
    const data = (await request("/category/sub/filter", "get", {
        id,
    })) as unknown as Zlfera;
    data.result.selectedBrand = null;
    data.result.brands.unshift({ id: null, name: "全部" } as unknown as Brand);
    data.result.saleProperties.forEach((p: SaleProperty) => {
        p.selectedProp = null;
        p.properties.unshift({ id: null, name: "全部" });
    });

    //filterLoaded.value = false;
    filter.value = data.result;
}
// export async function findSubCategoryGoods(
//     params: unknown,
//     goodsList: Ref<{}[]>
// ) {
//     const data = (await request(
//         "/category/goods/temporary",
//         "post",
//         params
//     )) as unknown as { result: [] };

//     return data;
// }
export async function findSubCategoryGoods(params: unknown) {
    return request("/category/goods/temporary", "post", params) as unknown as {
        result: { items: [] };
    };
}
