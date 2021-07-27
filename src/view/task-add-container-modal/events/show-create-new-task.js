export function showCreateNewTask(e, edit) {
    const addContainer = document.querySelector(".task-add-modal-container");

    addContainer.classList.add("task-add-modal-container-active");

    if (typeof edit != "undefined") {
        const h2 = document.querySelector(".task-add-title");
        h2.innerText = "Edit task";

        const title = document.querySelector(".task-add-name");

        const description = document.querySelector(".task-add-name");
        const due = document.querySelector(".task-add-modal-container");
        // const priority = document.querySelector(".task-add-modal-container");
    }
}
