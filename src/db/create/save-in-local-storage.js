export function saveInLocalStorage(list) {
    const listJSON = JSON.stringify(list);
    localStorage.setItem("list", listJSON);
}
