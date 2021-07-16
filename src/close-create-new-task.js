const addTaskCloseBtn = document.querySelector(".task-add-close-btn");
addTaskCloseBtn.addEventListener("click", closeCreateNewTask);

const taskAddModalContainer = document.querySelector(
    ".task-add-modal-container"
);

function closeCreateNewTask() {
    taskAddModalContainer.classList.remove("task-add-modal-container-active");
}

window.addEventListener("click", (e) => {
    if (e.target === taskAddModalContainer) {
        taskAddModalContainer.classList.remove(
            "task-add-modal-container-active"
        );
    }
});
