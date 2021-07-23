import { createTaskCheckboxContainer } from "./task-checkbox-container";
import { createTaskContainer } from "./task-container";
import { createTaskDetailsContainer } from "./details-container/details-container";

export function printTask(task) {
    const taskContainer = createTaskContainer(task);

    const checkboxContainer = createTaskCheckboxContainer(task);
    taskContainer.appendChild(checkboxContainer);

    const detailsContainer = createTaskDetailsContainer(task);

    taskContainer.appendChild(detailsContainer);

    // *****

    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );
    tasksGroupContainer.appendChild(taskContainer);
}
