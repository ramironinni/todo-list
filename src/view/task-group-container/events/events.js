import { taskToggleDetails } from "./task-toggle-details";
import { taskShowEditDetails } from "./task-show-edit";
import { taskShowDelete } from "../../task-delete-container-modal/events/task-show-delete";

export function events() {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.addEventListener("click", handler);

    function handler(e) {
        const target = e.target.dataset.target;
        switch (target) {
            case "task-show-details-btn":
                taskToggleDetails(e);
                break;
            case "task-details-edit-btn":
                taskShowEditDetails(e);
                break;
            case "task-details-delete-btn":
                taskShowDelete(e);
                break;
        }
    }
}
