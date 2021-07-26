import { list } from "./list/list";
import { add } from "./add/add";

export function createSubtasksContainer() {
    const subtasksContainer = document.createElement("div");
    subtasksContainer.classList.add("task-add-subtasks-container");

    subtasksContainer.appendChild(list());
    subtasksContainer.appendChild(add());
    return subtasksContainer;
}
