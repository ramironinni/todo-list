import { groupContainer } from "./group-container/group-container";
import { getLocalStorageList } from "../../../db/read/get-local-storage-list";

export function read() {
    const storedList = getLocalStorageList();

    storedList.forEach((task) => {
        groupContainer(task);
    });
}
