const addTaskForm = document.querySelector(".task-add-form");
addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

const addTaskBtn = document.querySelector(".add-task-floating-btn");

addTaskBtn.addEventListener("click", showCreateNewTask);

const taskAddModalContainer = document.querySelector(
    ".task-add-modal-container"
);

function showCreateNewTask() {
    taskAddModalContainer.classList.add("task-add-modal-container-active");
}
