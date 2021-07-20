import { controllers } from "./events/task/controllers";
import { closeCreateNewTask } from "./events/task-new/close-create-new-task";
import { showCreateNewTask } from "./events/task-new/show-create-new-task";
import { showSideNav } from "./events/side-nav/show-side-nav";
import { closeSideNav } from "./events/side-nav/close-side-nav";
import { addSubtask } from "./events/task-new/task-add-subtask";

export function eventHandlers() {
    controllers();
    closeCreateNewTask();
    showCreateNewTask();
    showSideNav();
    closeSideNav();
    addSubtask();
}
