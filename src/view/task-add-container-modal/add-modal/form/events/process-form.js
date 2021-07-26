import { getLastId } from "../../../../../db/read/get-last-id";
import { addTaskToLocalStorage } from "../../../../../db/create/add-task-to-local-storage";

export function processForm(
    e,
    taskName,
    description,
    subtasksContainer,
    due,
    priority
) {
    e.preventDefault();

    // console.log(taskName.value);

    // console.log(description.value);

    const lastId = getLastId();

    const subtasks = subtasksContainer.childNodes[0].childNodes[0].childNodes;
    const subtasksProcessed = [];
    subtasks.forEach((subtask) => {
        if (subtask.value) {
            const subtaskProcessed = {
                title: subtask.value,
                checked: false,
            };
            subtasksProcessed.push(subtaskProcessed);
        }
        // console.log(subtask.value);
    });

    // console.dir(due.childNodes[0].value);

    const priorityLevels = priority.childNodes;

    let priorityLevelProcessed;
    priorityLevels.forEach((level) => {
        const checked = level.childNodes[0].checked;
        if (checked) {
            // console.dir(checked);
            const priorityLevel = level.childNodes[1].classList[1];
            priorityLevelProcessed = Number(
                priorityLevel[priorityLevel.length - 1]
            );
            // console.dir(priorityLevel);
        }
    });

    const newTask = {
        id: lastId + 1,
        title: taskName.value,
        checked: false,
        description: description.value,
        subtasks: subtasksProcessed,
        dueDate: due.value,
        priority: priorityLevelProcessed,
    };

    console.log(newTask);
    addTaskToLocalStorage(newTask);
}
