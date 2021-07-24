import { groupContainer } from "./group-container/group-container";
import { addContainer } from "./add-container/add-container";
import { events } from "./events/events";
import { deleteContainer } from "./delete-container/delete-container";

export function task() {
    groupContainer();
    addContainer();
    events();
    deleteContainer();
}
