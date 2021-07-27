import { getLocalStorageList } from "./get-local-storage-list";

export function getTaskById(taskId) {
    const list = getLocalStorageList();

    const foundTask = list.find((task) => task.id === Number(taskId));

    return foundTask;
}
