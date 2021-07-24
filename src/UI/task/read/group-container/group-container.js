import { taskContainer } from "./container/container";

export function groupContainer(task) {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.appendChild(taskContainer(task));
}
