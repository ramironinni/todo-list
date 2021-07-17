export function showEditDetails() {
    const taskEditDetailsBtn = document.querySelector(".task-details-edit-btn");
    taskEditDetailsBtn.addEventListener("click", show);

    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    function show() {
        taskAddModalContainer.classList.add("task-add-modal-container-active");
    }
}
