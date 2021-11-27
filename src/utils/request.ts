import router from "@/router";
import store from "@/store";
import axios, { AxiosError, AxiosResponse, Method } from "axios";
export const baseURL = "http://apipc-xiaotuxian-front-devtest.itheima.net/";
const instance = axios.create({
  baseURL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (req) => {
    const { profile } = store.state.user;
    if (profile.token) {
      req.headers!.Authorization = `Bear${profile.token}`;
    }
    return req;
  },
  (err: AxiosError) => {
    return Promise.reject(err.message);
  }
);
instance.interceptors.response.use(
  (res) => {
    res.data;
  },
  (err: AxiosError) => {
    if (err.response && err.response.status === 401) {
      store.commit("user/setUser", {});
      const full_path = encodeURIComponent(router.currentRoute.value.fullPath);
      router.push("/login?redirectUrl=" + full_path);
    }
    return Promise.reject(err);
  }
);
export default (url: string, method: Method, submit_date: any) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === "get" ? "params" : "data"]: submit_date,
  });
};
