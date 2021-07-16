const addSubtaskBtn = document.querySelector(".task-add-subtask-add-another");
addSubtaskBtn.addEventListener("click", addSubtask);

const subtasksContainer = document.querySelector(
    ".task-add-subtask-item-container"
);

let subtaskCounter = 2;

function addSubtask() {
    if (subtaskCounter < 6) {
        const newSubtask = document.createElement("input");
        newSubtask.classList.add("task-add-subtask-item-input");
        newSubtask.placeholder = "Subtask (optional)";
        // newSubtask.name = `new-subtask-name-${subtaskCounter}`;
        subtaskCounter++;
        newSubtask.name = "subtask";
        subtasksContainer.appendChild(newSubtask);
    }
}
