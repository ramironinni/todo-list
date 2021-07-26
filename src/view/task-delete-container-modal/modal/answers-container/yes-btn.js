import { taskProcessDelete } from "../../events/task-process-delete";
import { closeDelete } from "../../events/close-delete";

export function yesBtn() {
    const yesBtn = document.createElement("button");
    yesBtn.classList.add("task-delete-answer-btn");
    yesBtn.id = "delete-true";
    yesBtn.innerText = "Yes";

    yesBtn.addEventListener("click", (e) => {
        taskProcessDelete(e);
        closeDelete();
    });

    return yesBtn;
}
