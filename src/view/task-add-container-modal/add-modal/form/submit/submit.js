export function submit() {
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.classList.add("task-add-submit-btn");
    submit.innerText = "Add";

    return submit;
}
