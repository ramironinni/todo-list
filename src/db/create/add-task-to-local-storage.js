import { getLocalStorageList } from "../read/get-local-storage-list";
import { saveInLocalStorage } from "./save-in-local-storage";

export function addTaskToLocalStorage(task) {
    const list = getLocalStorageList();

    list.push(task);

    saveInLocalStorage(list);
}
