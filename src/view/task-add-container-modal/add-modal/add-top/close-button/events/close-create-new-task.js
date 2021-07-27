export function closeCreateNewTask() {
    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    taskAddModalContainer.classList.remove("task-add-modal-container-active");
}
