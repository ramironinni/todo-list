import "./style.css";

import { sideNav } from "./view/side-nav/side-nav";
import { populateLocalStorage } from "./db/create/populate-local-storage";

import { groupContainer } from "./view/task-group-container/group-container";
import { addContainer } from "./view/task-add-container-modal/add-container";
import { deleteContainer } from "./view/task-delete-container-modal/delete-container";

sideNav();
populateLocalStorage();

groupContainer();
addContainer();
deleteContainer();
