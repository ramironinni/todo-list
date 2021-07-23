import { createTaskCheckboxContainer } from "./container/checkbox-container/checkbox-container";
import { createTaskContainer } from "./container/container";
import { createTaskDetailsContainer } from "./container/details-container/details-container";

export function addToGroupContainer(task) {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );
    const taskContainer = createTaskContainer(task);

    const checkboxContainer = createTaskCheckboxContainer(task);
    taskContainer.appendChild(checkboxContainer);

    const detailsContainer = createTaskDetailsContainer(task);
    taskContainer.appendChild(detailsContainer);

    tasksGroupContainer.appendChild(taskContainer);
}
