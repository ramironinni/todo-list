import { closeButton } from "./close-button/close-button";
import { title } from "./title/title";

export function addTop() {
    const addTop = document.createElement("div");
    addTop.classList.add("task-add-top");
    addTop.appendChild(closeButton());
    addTop.appendChild(title());
    return addTop;
}
