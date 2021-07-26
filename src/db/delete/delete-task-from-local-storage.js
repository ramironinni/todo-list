import { saveInLocalStorage } from "../create/save-in-local-storage";
import { getLocalStorageList } from "../read/get-local-storage-list";

export function deleteTaskFromLocalStorage(taskId) {
    const list = getLocalStorageList();
    taskId = Number(taskId);

    const toDeleteIdex = list.findIndex((task) => task.id === taskId);

    list.splice(toDeleteIdex, 1);

    saveInLocalStorage(list);
}
