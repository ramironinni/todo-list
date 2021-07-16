const sideNavBtn = document.querySelector(".side-nav-btn");

sideNavBtn.addEventListener("click", showSideNav);

const sideNav = document.querySelector(".side-nav");

function showSideNav() {
    sideNav.classList.add("side-nav-active");
}
