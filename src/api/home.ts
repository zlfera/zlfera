import request from "@/utils/request";

export const findBrand = (limit: number) => {
    return request("/home/brand", "get", { limit });
};
