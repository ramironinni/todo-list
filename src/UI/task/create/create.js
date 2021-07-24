import { addContainer } from "./add-container/add-container";
import { events } from "./events/events";

export function create() {
    document.body.appendChild(addContainer());
    events();
}
