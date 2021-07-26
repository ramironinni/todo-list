import { closeDelete } from "../../events/close-delete";

export function closeBtn() {
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("task-delete-close-btn");

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.innerText = "close";

    closeBtn.appendChild(icon);
    closeBtn.addEventListener("click", closeDelete);

    return closeBtn;
}
