import { addModal } from "./add-modal/add-modal";
import { showCreateNewTask } from "./events/show-create-new-task";
import { addSubtask } from "./events/task-add-subtask";

export function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild(addModal());

    window.addEventListener("click", (e) => {
        if (e.target === addContainer) {
            addContainer.classList.remove("task-add-modal-container-active");
        }
    });

    document.body.appendChild(addContainer);

    const addTaskBtn = document.querySelector(".add-task-floating-btn");
    addTaskBtn.addEventListener("click", showCreateNewTask);

    addSubtask();
}
