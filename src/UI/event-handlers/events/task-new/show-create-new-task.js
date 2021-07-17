export function showCreateNewTask() {
    const addTaskForm = document.querySelector(".task-add-form");
    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    const addTaskBtn = document.querySelector(".add-task-floating-btn");

    addTaskBtn.addEventListener("click", show);

    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    function show() {
        taskAddModalContainer.classList.add("task-add-modal-container-active");
    }
}
