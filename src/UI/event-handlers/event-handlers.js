// import { controllers } from "./events/task/controllers";
// import { closeCreateNewTask } from "../task/create/events/close-create-new-task";
// import { showCreateNewTask } from "../task/create/events/show-create-new-task";
import { showSideNav } from "./events/side-nav/show-side-nav";
import { closeSideNav } from "./events/side-nav/close-side-nav";
// import { addSubtask } from "../task/create/events/task-add-subtask";

export function eventHandlers() {
    // controllers();
    // closeCreateNewTask();
    // showCreateNewTask();
    showSideNav();
    closeSideNav();
    // addSubtask();
}
