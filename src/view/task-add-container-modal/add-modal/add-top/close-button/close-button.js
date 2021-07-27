import { icon } from "./icon";
import { closeCreateNewTask } from "./events/close-create-new-task";

export function closeButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("task-add-close-btn");
    closeButton.appendChild(icon());

    closeButton.addEventListener("click", closeCreateNewTask);

    return closeButton;
}
