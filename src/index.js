import "./style.css";

import { sideNav } from "./view/side-nav/side-nav";
import { task } from "./view/task/task";
import { populateLocalStorage } from "./db/create/populate-local-storage";

sideNav();
populateLocalStorage();
task();
