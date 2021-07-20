import { defaultList } from "./default-list";

export function populateLocalStorage() {
    const localStorage = window.localStorage;

    if (localStorage.getItem("list")) {
        return;
    }

    const defaltListJSON = JSON.stringify(defaultList);
    localStorage.setItem("list", defaltListJSON);
    // const listJSON = localStorage.getItem("list");
    // const list = JSON.parse(listJSON);

    // console.log(list);
}
