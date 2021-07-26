import { getLocalStorageList } from "../read/get-local-storage-list";
import { saveInLocalStorage } from "../create/save-in-local-storage";

export function localStorageUpdateTaskChecked(taskId) {
    taskId = Number(taskId[taskId.length - 1]);

    const list = getLocalStorageList();

    const taskToUpdateIndex = list.findIndex((task) => task.id === taskId);

    list[taskToUpdateIndex].checked = !list[taskToUpdateIndex].checked;

    console.log(list);

    saveInLocalStorage(list);
}