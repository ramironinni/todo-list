import { addModal } from "./add-modal/add-modal";

export function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild(addModal());

    return addContainer;
}
