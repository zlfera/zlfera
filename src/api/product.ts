import request from "@/utils/request";
import { Ref } from "@vue/runtime-dom";
import { Data, Goods } from "./productTypes";

export const findGoods = async (id: string, goods: Ref<Goods>) => {
    const data: Data = (await request("/goods", "get", {
        id,
    })) as unknown as Data;
    goods.value = data.result;
};
