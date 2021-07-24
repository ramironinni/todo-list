export function yesBtn() {
    const yesBtn = document.createElement("button");
    yesBtn.classList.add("task-delete-answer-btn");
    yesBtn.id = "delete-true";
    yesBtn.innerText = "Yes";

    return yesBtn;
}
