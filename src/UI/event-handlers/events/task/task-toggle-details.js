export function taskToggleDetails() {
    const taskContainer = document.querySelector(".task-container");
    const taskShowDetailsBtn = document.querySelector(".task-show-details-btn");
    const taskDetailsContainer = document.querySelector(
        ".task-details-container"
    );

    // taskShowDetailsBtn.addEventListener("click", toggleDetails);
    taskContainer.addEventListener("click", toggle);

    function toggle(e) {
        if (e.target === taskShowDetailsBtn) {
            toggleDetails();
            toggleBtnIcon();
        }
    }

    function toggleDetails() {
        taskDetailsContainer.classList.toggle("task-details-container-active");
    }

    function toggleBtnIcon() {
        taskShowDetailsBtn.innerText =
            taskShowDetailsBtn.innerText === "expand_more"
                ? "expand_less"
                : "expand_more";
    }
}
