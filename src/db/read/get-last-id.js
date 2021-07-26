import { getLocalStorageList } from "./get-local-storage-list";

export function getLastId() {
    const list = getLocalStorageList();

    const lastId = list[list.length - 1].id;

    return lastId;
}
