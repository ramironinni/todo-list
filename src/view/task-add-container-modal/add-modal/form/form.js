import { createName } from "./name/name";
import { createDescription } from "./description/description";
import { createSubtasksContainer } from "./subtasks/subtasks-container";
import { createDue } from "./due/due";
import { createPriority } from "./priority/priority";
import { submit } from "./submit/submit";
import { processForm } from "../../../../db/create/process-form";

export function form() {
    const form = document.createElement("form");
    form.classList.add("task-add-form");
    form.dataset.process = "create";

    const taskName = createName();
    form.appendChild(taskName);

    const description = createDescription();
    form.appendChild(description);

    const subtasksContainer = createSubtasksContainer();
    form.appendChild(subtasksContainer);

    const due = createDue();
    form.appendChild(due);

    const priority = createPriority();
    form.appendChild(priority);

    form.appendChild(submit());

    form.addEventListener("submit", (e) => {
        processForm(e, taskName, description, subtasksContainer, due, priority);
    });

    return form;
}
