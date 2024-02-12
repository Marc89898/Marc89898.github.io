let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        document.querySelector(".navbar-scroll").classList.add("navbar-up");
    } else {
        document.querySelector(".navbar-scroll").classList.remove("navbar-up");
    }
    lastScrollTop = scrollTop;
});