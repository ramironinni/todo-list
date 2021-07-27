import { processEditTask } from "./process-edit-task";

export function showCreateNewTask(e, edit) {
    const addContainer = document.querySelector(".task-add-modal-container");

    addContainer.classList.add("task-add-modal-container-active");

    if (typeof edit != "undefined") {
        processEditTask(e);
    }
}
