import "./style.css";
import { eventHandlers } from "./UI/event-handlers/event-handlers";
import { task } from "./UI/task/task";
import { populateLocalStorage } from "./db/create/populate-local-storage";

eventHandlers();
populateLocalStorage();
task();
