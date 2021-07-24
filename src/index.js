import "./style.css";
import { task } from "./UI/task/task";
import { eventHandlers } from "./UI/event-handlers/event-handlers";
import { populateLocalStorage } from "./db/create/populate-local-storage";

eventHandlers();
populateLocalStorage();
task();
