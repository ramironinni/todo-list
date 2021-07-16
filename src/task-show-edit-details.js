const taskEditDetailsBtn = document.querySelector(".task-details-edit-btn");
taskEditDetailsBtn.addEventListener("click", showEditDetails);

const taskAddModalContainer = document.querySelector(
    ".task-add-modal-container"
);

function showEditDetails() {
    taskAddModalContainer.classList.add("task-add-modal-container-active");
}
