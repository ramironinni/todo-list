import { showCreateNewTask } from "./show-create-new-task";
import { addSubtask } from "./task-add-subtask";

export function events() {
    showCreateNewTask();
    addSubtask();
}
