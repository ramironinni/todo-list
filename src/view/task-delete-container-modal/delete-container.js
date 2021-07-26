import { modal } from "./modal/modal";
import { events } from "./events/events";

export function deleteContainer(taskId) {
    const deleteContainer = document.createElement("div");
    deleteContainer.classList.add("task-delete-modal-container");
    // deleteContainer.classList.add("task-delete-modal-container-active");

    deleteContainer.appendChild(modal());

    document.body.appendChild(deleteContainer);
}
