import request from "@/utils/request";
//获取首页头部信息
export const findAllCategory = () => {
    return request("/home/category/head", "get");
};
