import request from "@/utils/request";
import { Ref } from "vue";

export const findBrand = (limit: number) => {
    return request("/home/brand", "get", { limit });
};
export async function findBrands(limit: number, goods: Ref<{}[]>) {
    const data = (await request("/home/brand", "get", {
        limit,
    })) as unknown as { result: [] };
    goods.value = data.result;
}
export async function findBanner(sliders: Ref<[]>) {
    const data = (await request("/home/banner", "get")) as unknown as {
        result: [];
    };

    sliders.value = data.result;
}
export async function findNew(goods: Ref<{}[]>) {
    const data = (await request("/home/new", "get")) as unknown as {
        result: [];
    };
    goods.value = data.result;
}
export async function findHot(goods: Ref<{}[]>) {
    const data = (await request("/home/hot", "get")) as unknown as {
        result: [];
    };
    goods.value = data.result;
}
export async function findGoods(goods: Ref<{}[]>) {
    const data = (await request("/home/goods", "get")) as unknown as {
        result: [];
    };
    goods.value = data.result;
}
export async function findSpecial(goods: Ref<{}[]>) {
    const data = (await request("/home/special", "get")) as unknown as {
        result: [];
    };
    goods.value = data.result;
}
