import { localStorageUpdateTaskChecked } from "../../../../../db/update/update-task-checked";

export function toggleTaskChecked(e) {
    const taskId = e.target.parentNode.parentNode.id;
    localStorageUpdateTaskChecked(taskId);
}
