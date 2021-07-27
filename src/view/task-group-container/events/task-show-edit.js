import { showCreateNewTask } from "../../task-add-container-modal/events/show-create-new-task";

export function taskShowEditDetails(e) {
    const edit = true;
    showCreateNewTask(e, edit);
}
