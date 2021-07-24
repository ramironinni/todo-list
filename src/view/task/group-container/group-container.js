import { addToGroupContainer } from "./add-to-group-container";
import { getLocalStorageList } from "../../../db/read/get-local-storage-list";

export function groupContainer() {
    const storedList = getLocalStorageList();

    storedList.forEach((task) => {
        addToGroupContainer(task);
    });
}
