import { closeDelete } from "../../events/close-delete";

export function noBtn() {
    const noBtn = document.createElement("button");
    noBtn.classList.add("task-delete-answer-btn");
    noBtn.id = "delete-false";
    noBtn.innerText = "No";
    noBtn.addEventListener("click", closeDelete);

    return noBtn;
}
