import { addModal } from "./add-modal/add-modal";
import { events } from "./events/events";

export function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild(addModal());

    document.body.appendChild(addContainer);
    events();
}
