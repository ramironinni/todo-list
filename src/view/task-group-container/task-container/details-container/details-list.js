import { toggleSubtaskChecked } from "./events/toggle-subtask-checked";

export function detailsList(task) {
    const detailsList = document.createElement("div");
    detailsList.classList.add("task-details-list");

    function createItemContainer(subtaskId, subtaskTitle, subtaskChecked) {
        const itemContainer = document.createElement("label");
        itemContainer.classList.add("task-details-item-container");

        const checkbox = (() => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = subtaskChecked;
            checkbox.classList.add("task-details-item-checkbox");
            checkbox.dataset.subtaskId = subtaskId;
            checkbox.addEventListener("change", toggleSubtaskChecked);
            return checkbox;
        })();

        const checkmark = (() => {
            const checkmark = document.createElement("span");
            checkmark.classList.add("task-details-item-checkmark");
            return checkmark;
        })();

        const text = (() => {
            const text = document.createElement("span");
            text.classList.add("task-details-item-text");
            text.innerText = subtaskTitle;
            return text;
        })();

        itemContainer.appendChild(checkbox);
        itemContainer.appendChild(checkmark);
        itemContainer.appendChild(text);

        return itemContainer;
    }

    (function printSubtaskElements() {
        task.subtasks.forEach((subtask) => {
            const itemContainer = createItemContainer(
                subtask.id,
                subtask.title,
                subtask.checked
            );
            detailsList.appendChild(itemContainer);
        });
    })();

    return detailsList;
}
