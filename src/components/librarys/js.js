var el;
window.onload = function () {
    el = document.querySelector(".q");

    const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
            if (isIntersecting) {
                el.innerText = 456;
                observer.unobserve(el);
                el.onerror = () => {
                    //el.src = defaultImg;
                };
                // el.src = binding.value;
                el.innerText = 7899;
            }
        },
        {
            threshold: 0.01,
        }
    );
    observer.observe(el);
};
