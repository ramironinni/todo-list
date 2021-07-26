export function showCreateNewTask() {
    const addTaskBtn = document.querySelector(".add-task-floating-btn");
    addTaskBtn.addEventListener("click", show);

    function show() {
        const addContainer = document.querySelector(
            ".task-add-modal-container"
        );

        addContainer.classList.add("task-add-modal-container-active");
    }
}
