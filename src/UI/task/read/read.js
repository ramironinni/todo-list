import { addToGroupContainer } from "./add-to-group-container";
import { getLocalStorageList } from "./get-local-storage-list";

export function read() {
    const storedList = getLocalStorageList();

    storedList.forEach((task) => {
        addToGroupContainer(task);
    });
}
