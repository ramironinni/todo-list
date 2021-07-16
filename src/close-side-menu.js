const sideNavCloseBtn = document.querySelector(".side-nav-close-btn");

sideNavCloseBtn.addEventListener("click", closeSideNav);

const sideNav = document.querySelector(".side-nav");

function closeSideNav() {
    sideNav.classList.remove("side-nav-active");
}
