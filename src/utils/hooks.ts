import { useIntersectionObserver } from "@vueuse/core";
import { Ref, ref } from "vue";

export function useLazyData(fn: Function) {
    const target = ref(null);

    const { stop } = useIntersectionObserver(
        target,
        (
            [{ isIntersecting }]: IntersectionObserverEntry[],
            _observerElement: IntersectionObserver
        ) => {
            if (isIntersecting) {
                stop();
                fn();
            }
        },
        { threshold: 0 }
    );
    return target;
}
