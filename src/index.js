import "./style.css";
import { eventHandlers } from "./UI/event-handlers/event-handlers";
import { populateLocalStorage } from "./db/populate-local-storage";

eventHandlers();
populateLocalStorage();
