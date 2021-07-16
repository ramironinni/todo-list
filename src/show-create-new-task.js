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

const addTaskCloseBtn = document.querySelector(".task-add-close-btn");
addTaskCloseBtn.addEventListener("click", cloaseCreateNewTask);

function cloaseCreateNewTask(e) {
    taskAddModalContainer.classList.remove("task-add-modal-container-active");
}
