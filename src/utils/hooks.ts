import { useIntersectionObserver } from "@vueuse/core";
import { Ref, ref } from "vue";

export function useLazyData(fn: Function) {
    const target = ref(null);

    const { stop } = useIntersectionObserver(
        target,
        ([{ isIntersecting }], _observerElement) => {
            if (isIntersecting) {
                stop();
                fn();
            }
        }
    );
    return target;
}
