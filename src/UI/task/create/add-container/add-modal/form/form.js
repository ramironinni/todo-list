import { name } from "./name/name";
import { description } from "./description/description";
import { subtasksContainer } from "./subtasks/subtasks-container";
import { due } from "./due/due";
import { priority } from "./priority/priority";
import { submit } from "./submit/submit";

export function form() {
    const form = document.createElement("form");
    form.classList.add("task-add-form");
    form.appendChild(name());
    form.appendChild(description());
    form.appendChild(subtasksContainer());
    form.appendChild(due());
    form.appendChild(priority());
    form.appendChild(submit());

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    function showForm() {
        form.classList.add("task-add-modal-container-active");
    }

    return form;
}
