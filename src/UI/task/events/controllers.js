import { taskToggleDetails } from "./task-toggle-details";
import { taskShowEditDetails } from "./task-show-edit";
import { taskShowDelete } from "./delete/task-show-delete";

export function controllers() {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.addEventListener("click", controller);

    function controller(e) {
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
