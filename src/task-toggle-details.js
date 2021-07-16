const taskShowDetailsBtn = document.querySelector(".task-show-details-btn");
taskShowDetailsBtn.addEventListener("click", toggleDetails);

const taskDetailsContainer = document.querySelector(".task-details-container");

function toggleDetails() {
    taskDetailsContainer.classList.toggle("task-details-container-active");

    if (taskShowDetailsBtn.innerText === "expand_more") {
        taskShowDetailsBtn.innerText = "expand_less";
    } else {
        taskShowDetailsBtn.innerText = "expand_more";
    }
}
