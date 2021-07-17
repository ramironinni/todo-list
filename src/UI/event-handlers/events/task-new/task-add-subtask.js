export function addSubtask() {
    const addSubtaskBtn = document.querySelector(
        ".task-add-subtask-add-another"
    );
    addSubtaskBtn.addEventListener("click", add);

    const subtasksContainer = document.querySelector(
        ".task-add-subtask-item-container"
    );

    let subtaskCounter = 2;

    function add() {
        if (subtaskCounter < 5) {
            const newSubtask = document.createElement("input");
            newSubtask.classList.add("task-add-subtask-item-input");
            newSubtask.placeholder = "Subtask (optional)";
            // newSubtask.name = `new-subtask-name-${subtaskCounter}`;
            subtaskCounter++;
            newSubtask.name = "subtask";
            subtasksContainer.appendChild(newSubtask);
        }
    }
}
