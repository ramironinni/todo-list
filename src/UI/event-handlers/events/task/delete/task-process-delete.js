export function taskProcessDelete(e) {
    function findParent(source, filter) {
        const root = document.documentElement;
        while (source != root) {
            if (filter(source)) {
                return source;
            }
            source = source.parentNode;
        }
    }

    const taskId = findParent(e.target, (elem) => {
        return elem.dataset.taskId;
    }).dataset.taskId;

    const taskToDelete = document.getElementById(taskId);
    taskToDelete.parentNode.removeChild(taskToDelete);
}
