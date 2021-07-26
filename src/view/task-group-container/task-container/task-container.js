import { checkboxContainer } from "./checkbox-container/checkbox-container";
import { detailsContainer } from "./details-container/details-container";

export function taskContainer(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.dataset.taskId = `task-${task.id}`;
    taskContainer.id = `task-${task.id}`;

    taskContainer.appendChild(checkboxContainer(task));

    taskContainer.appendChild(detailsContainer(task));

    return taskContainer;
}
