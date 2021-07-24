import { closeBtn } from "./close-btn/close-btn";
import { question } from "./question/question";
import { answersContainer } from "./answers-container/answers-container";

export function modal() {
    const modal = document.createElement("div");
    modal.classList.add("task-delete-modal");

    modal.appendChild(closeBtn());
    modal.appendChild(question());
    modal.appendChild(answersContainer());

    return modal;
}
