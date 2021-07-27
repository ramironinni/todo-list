export function detailsDue(task) {
    const container = document.createElement("div");
    container.classList.add("task-details-due-container");

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.classList.add("task-details-due-icon");
    icon.innerText = "today";

    const date = document.createElement("div");
    date.classList.add("task-details-due-date");
    date.innerText = task.dueDate;

    container.appendChild(icon);
    container.appendChild(date);

    return container;
}
