import { createTaskDetailsControllers } from "./details-controllers";
import { createTaskDetailsDescription } from "./details-description";
import { createDetailsList } from "./details-list";

export function createTaskDetailsContainer(task) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("task-details-container");
    detailsContainer.dataset.target = "task-details-container";

    const detailsControllers = createTaskDetailsControllers();
    detailsContainer.appendChild(detailsControllers);

    const detailsDescription = createTaskDetailsDescription(task);
    detailsContainer.appendChild(detailsDescription);

    const taskDetailsList = createDetailsList(task);
    detailsContainer.appendChild(taskDetailsList);

    return detailsContainer;
}
