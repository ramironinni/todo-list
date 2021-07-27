import { detailsControllers } from "./details-controllers";
import { detailsDescription } from "./details-description";
import { detailsDue } from "./details-due";
import { detailsList } from "./details-list";

export function detailsContainer(task) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("task-details-container");
    detailsContainer.dataset.target = "task-details-container";

    detailsContainer.appendChild(detailsControllers(task));

    if (task.description) {
        detailsContainer.appendChild(detailsDescription(task));
    }
    if (task.subtasks) {
        detailsContainer.appendChild(detailsList(task));
    }
    if (task.dueDate) {
        detailsContainer.appendChild(detailsDue(task));
    }

    return detailsContainer;
}
