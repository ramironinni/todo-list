export function question() {
    const question = document.createElement("div");
    question.classList.add("task-delete-question");
    question.innerText = "Do you want to delete this task?";

    return question;
}
