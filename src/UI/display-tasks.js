import { printTask } from "./print-task/print-task";

export function displayTasks() {
    function readTasks() {
        const storedListJSON = localStorage.getItem("list");
        const storedList = JSON.parse(storedListJSON);
        return storedList;
    }

    const storedList = readTasks();

    storedList.forEach((task) => {
        printTask(task);
    });
}
