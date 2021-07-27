import { getTaskById } from "../../../db/read/get-task-by-id";

export function processEditTask(e) {
    const form = document.querySelector(".task-add-form");
    form.dataset.process = "edit";

    const submitButton = document.querySelector(".task-add-submit-btn");
    submitButton.innerText = "Edit";

    const taskId = e.target.dataset.taskId;
    form.dataset.editedTask = taskId;

    const task = getTaskById(taskId);

    const h2 = document.querySelector(".task-add-title");
    h2.innerText = "Edit task";

    const title = document.querySelector(".task-add-name");
    title.value = task.title;

    if (task.description) {
        const description = document.querySelector(".task-add-description");
        description.value = task.description;
    }

    if (task.subtasks.length) {
        const subtasksLastIndex = task.subtasks.length - 1; // 3

        const subtaskInput = document.querySelector(
            ".task-add-subtask-item-input"
        );

        const container = document.querySelector(
            ".task-add-subtask-item-container"
        );

        subtaskInput.value = task.subtasks[0].title; // id 1

        for (let i = 0; i < subtasksLastIndex; i++) {
            const extraTask = subtaskInput.cloneNode();
            extraTask.dataset.subtaskId =
                Number(subtaskInput.dataset.subtaskId) + i + 1; // 1 + 0 + 1 = 2
            extraTask.value = task.subtasks[i + 1].title;
            container.insertAdjacentElement("beforeend", extraTask);
        }
    }

    const due = document.querySelector(".task-add-due-date");
    due.value = task.dueDate;

    // const priority = document.querySelector(".task-checkmark");
    const priorityLevel = task.priority;

    const span = document.querySelector(`.priority-${priorityLevel}`);
    span.previousSibling.checked = true;
}
