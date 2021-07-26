import { yesBtn } from "./yes-btn";
import { noBtn } from "./no-btn";

export function answersContainer() {
    const answersContainer = document.createElement("div");
    answersContainer.classList.add("task-delete-answers-container");

    answersContainer.appendChild(yesBtn());
    answersContainer.appendChild(noBtn());

    return answersContainer;
}
