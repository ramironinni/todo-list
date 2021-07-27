import { addModal } from "./add-modal/add-modal";
import { events } from "./events/events";

export function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild(addModal());

    window.addEventListener("click", (e) => {
        if (e.target === addContainer) {
            addContainer.classList.remove("task-add-modal-container-active");
        }
    });

    document.body.appendChild(addContainer);
    events();
}
