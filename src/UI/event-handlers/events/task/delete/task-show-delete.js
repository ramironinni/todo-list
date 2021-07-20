import { taskProcessDelete } from "./task-process-delete";

export function taskShowDelete(e) {
    const deleteBox = document.querySelector(".task-delete-modal-container");
    deleteBox.classList.add("task-delete-modal-container-active");

    const deleteTrueBtn = document.getElementById("delete-true");
    deleteTrueBtn.addEventListener("click", () => {
        taskProcessDelete(e);
        taskCloseDelete();
    });

    const deleteFalseBtn = document.getElementById("delete-false");
    deleteFalseBtn.addEventListener("click", taskCloseDelete);

    const deleteCloseBtn = document.querySelector(".task-delete-close-btn");
    deleteCloseBtn.addEventListener("click", taskCloseDelete);

    function taskCloseDelete() {
        deleteBox.classList.remove("task-delete-modal-container-active");
    }
}
