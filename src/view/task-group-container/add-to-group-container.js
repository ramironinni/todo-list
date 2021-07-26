import { taskContainer } from "./task-container/task-container";

export function addToGroupContainer(task) {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.appendChild(taskContainer(task));
}
