import { defaultList } from "./default-list";

export function populateLocalStorage() {
    if (localStorage.getItem("list")) {
        return;
    }

    const defaltListJSON = JSON.stringify(defaultList);
    localStorage.setItem("list", defaltListJSON);
}
