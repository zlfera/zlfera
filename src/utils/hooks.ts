import { useIntersectionObserver } from "@vueuse/core";
import { Ref, ref } from "vue";

export function useLazyData(fn: Function, goods: Ref<{}[]>) {
    const target = ref(null);

    const { stop } = useIntersectionObserver(
        target,
        ([{ isIntersecting }], _observerElement) => {
            if (isIntersecting) {
                stop();
                fn(goods);
            }
        }
    );
    return target;
}
