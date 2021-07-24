export function detailsDescription(task) {
    const detailsDescription = document.createElement("p");
    detailsDescription.classList.add("task-details-description");
    detailsDescription.innerText = task.description;

    return detailsDescription;
}
