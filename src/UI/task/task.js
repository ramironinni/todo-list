import { read } from "./read/read";
import { create } from "./create/create";
import { events } from "./events/events";
// import { deleteTask } from "./delete/delete";

export function task() {
    read();
    create();
    events();
    // deleteTask();
}
