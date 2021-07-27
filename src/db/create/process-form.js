import { getLastId } from "../read/get-last-id";
import { addTaskToLocalStorage } from "./add-task-to-local-storage";
import { closeCreateNewTask } from "../../view/task-add-container-modal/add-modal/add-top/close-button/events/close-create-new-task";
import { addToGroupContainer } from "../../view/task-group-container/add-to-group-container";

export function processForm(
    e,
    taskName,
    description,
    subtasksContainer,
    due,
    priority
) {
    e.preventDefault();

    const lastId = getLastId();
    let id = lastId + 1;

    if (e.target.dataset.process === "edit") {
        id = e.target.dataset.editedTask;
    }

    const title = taskName.value;

    if (!title) {
        taskName.placeholder = "You must enter a name";
        taskName.classList.add("task-add-name-validation-false");
    }

    const subtasks = subtasksContainer.childNodes[0].childNodes[0].childNodes;
    const subtasksProcessed = [];
    subtasks.forEach((subtask) => {
        if (subtask.value) {
            const subtaskProcessed = {
                id: subtask.dataset.subtaskId,
                title: subtask.value,
                checked: false,
            };
            subtasksProcessed.push(subtaskProcessed);
        }
    });

    const dueDate = due.childNodes[0].value;

    const priorityLevels = priority.childNodes;

    let priorityLevelProcessed;
    priorityLevels.forEach((level) => {
        const checked = level.childNodes[0].checked;
        if (checked) {
            const priorityLevel = level.childNodes[1].classList[1];
            priorityLevelProcessed = Number(
                priorityLevel[priorityLevel.length - 1]
            );
        }
    });

    const newTask = {
        id,
        title,
        checked: false,
        description: description.value,
        subtasks: subtasksProcessed,
        dueDate,
        priority: priorityLevelProcessed,
    };

    if (title) {
        closeCreateNewTask();
        addToGroupContainer(newTask);
        addTaskToLocalStorage(newTask);
    }

    e.target.reset();
}
