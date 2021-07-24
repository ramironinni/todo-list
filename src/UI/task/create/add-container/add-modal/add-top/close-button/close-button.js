import { icon } from "./icon";

export function closeButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("task-add-close-btn");
    closeButton.appendChild(icon());
    return closeButton;
}
