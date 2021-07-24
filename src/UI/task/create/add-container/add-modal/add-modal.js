import { addTop } from "./add-top/add-top";
import { form } from "./form/form";

export function addModal() {
    const addModal = document.createElement("div");
    addModal.classList.add("task-add-modal");
    addModal.appendChild(addTop());
    addModal.appendChild(form());
    return addModal;
}
