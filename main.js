/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-primary: #2876be;\n    --color-priority-1: #ca2c2c;\n    --color-priority-2: #ca802c;\n    --color-priority-3: #3f6dc2;\n    --color-priority-4: #702cca;\n    --color-grey: #7a7a7a;\n    --color-shadow: #a5a5a5;\n    --color-element-primary: #e1e1e1;\n    --color-element-secondary: #e6e6e6;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\ninput {\n    border: none;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: var(--color-primary);\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: var(--color-primary);\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 4;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: var(--color-element-secondary);\n    color: #252525;\n    box-shadow: none;\n    opacity: 0;\n}\n\n.side-nav-active {\n    width: 10rem;\n    box-shadow: 0px 0px 17px 3px #2525258a;\n    opacity: 1;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item-active {\n    background-color: var(--color-shadow);\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 0.5rem;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-1 {\n    border: 0.13rem solid var(--color-priority-1);\n}\n\n.task-checkmark.task-checkmark-priority-2 {\n    border: 0.13rem solid var(--color-priority-2);\n}\n\n.task-checkmark.task-checkmark-priority-3 {\n    border: 0.13rem solid var(--color-priority-3);\n}\n\n.task-checkmark.task-checkmark-priority-4 {\n    border: 0.13rem solid var(--color-priority-4);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n    width: 100%;\n    max-height: 0;\n    padding: 0 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-secondary);\n    box-shadow: 0.2rem 0.2rem 0.5rem var(--color-shadow);\n    opacity: 0;\n    transition: 0.5s ease-out;\n}\n\n.task-details-container-active {\n    max-height: fit-content;\n    padding: 1.5rem 1rem;\n    margin-bottom: 1rem;\n    opacity: 1;\n}\n\n.task-details-description {\n    width: 100%;\n    margin: 1rem 0;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-controllers {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.task-details-edit-btn,\n.task-details-delete-btn {\n    margin-left: 0.5rem;\n}\n\n.task-details-edit-btn span,\n.task-add-close-btn span,\n.task-details-delete-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-details-due-container {\n    display: flex;\n}\n\n.task-details-due-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.task-add-modal-container,\n.task-delete-modal-container {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 5rem;\n    /* justify-content: center;\n    align-items: center; */\n    background-color: #0000005b;\n}\n\n.task-add-modal-container-active,\n.task-delete-modal-container-active {\n    /* display: flex; */\n    display: block;\n}\n\n.task-add-modal,\n.task-delete-modal {\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    height: fit-content;\n    margin: auto;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n    box-shadow: 0 0 1rem #5c5c5c;\n    animation-name: animatetop;\n    animation-duration: 0.6s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n.task-delete-modal {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 4rem 2rem 3rem;\n}\n\n.task-delete-answers-container {\n    display: flex;\n    justify-content: center;\n}\n\n.task-delete-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-delete-close-btn span {\n    font-size: 1rem;\n}\n\n.task-delete-answer-btn {\n    margin: 1rem 0.5rem 0;\n}\n\n.task-add-title {\n    font-size: 1rem;\n    margin: 0 0 1.5rem;\n}\n\n.task-add-description,\n.task-add-name,\n.task-add-subtask-item-input,\n.task-add-due-date {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-subtasks-container {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.task-add-subtask-item-container {\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-add-subtask-item-input {\n    margin-bottom: 0.1rem;\n}\n\n.task-add-subtask-add-another {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    padding: 0.1rem;\n    border-radius: 2rem;\n    color: #fff;\n    background-color: #6e94b8;\n    box-shadow: 0.1rem 0.1rem 0.5rem #000;\n    font-size: 0.5rem;\n}\n\n.task-add-subtask-add-another span {\n    font-size: 1rem;\n}\n\n.task-add-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-add-due-date {\n    margin-bottom: 0.3rem;\n}\n\n/* \n.task-add-due-text {\n    margin: 0.5rem 0;\n} */\n\n.task-add-priority-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1rem 0;\n}\n\n.task-add-priority-item-container {\n    position: relative;\n    width: 20%;\n}\n\n.task-add-priority-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.priority-selector {\n    height: 1rem;\n    border-radius: 0.3rem;\n    display: block;\n}\n\n.priority-1 {\n    border: 0.15rem solid var(--color-priority-1);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-1 {\n    background-color: var(--color-priority-1);\n}\n\n.priority-2 {\n    border: 0.15rem solid var(--color-priority-2);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-2 {\n    background-color: var(--color-priority-2);\n}\n\n.priority-3 {\n    border: 0.15rem solid var(--color-priority-3);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-3 {\n    background-color: var(--color-priority-3);\n}\n\n.priority-4 {\n    border: 0.15rem solid var(--color-priority-4);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-4 {\n    background-color: var(--color-priority-4);\n}\n.task-add-priority-item-checkbox:checked ~ .priority-selector {\n    box-shadow: 0 0 0.4rem #000;\n}\n\n.task-add-submit-btn,\n.task-delete-answer-btn {\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: var(--color-primary);\n    color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-primary: #2876be;\n    --color-priority-1: #ca2c2c;\n    --color-priority-2: #ca802c;\n    --color-priority-3: #3f6dc2;\n    --color-priority-4: #702cca;\n    --color-grey: #7a7a7a;\n    --color-shadow: #a5a5a5;\n    --color-element-primary: #e1e1e1;\n    --color-element-secondary: #e6e6e6;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\ninput {\n    border: none;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: var(--color-primary);\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: var(--color-primary);\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 4;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: var(--color-element-secondary);\n    color: #252525;\n    box-shadow: none;\n    opacity: 0;\n}\n\n.side-nav-active {\n    width: 10rem;\n    box-shadow: 0px 0px 17px 3px #2525258a;\n    opacity: 1;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item-active {\n    background-color: var(--color-shadow);\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 0.5rem;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-1 {\n    border: 0.13rem solid var(--color-priority-1);\n}\n\n.task-checkmark.task-checkmark-priority-2 {\n    border: 0.13rem solid var(--color-priority-2);\n}\n\n.task-checkmark.task-checkmark-priority-3 {\n    border: 0.13rem solid var(--color-priority-3);\n}\n\n.task-checkmark.task-checkmark-priority-4 {\n    border: 0.13rem solid var(--color-priority-4);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n    width: 100%;\n    max-height: 0;\n    padding: 0 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-secondary);\n    box-shadow: 0.2rem 0.2rem 0.5rem var(--color-shadow);\n    opacity: 0;\n    transition: 0.5s ease-out;\n}\n\n.task-details-container-active {\n    max-height: fit-content;\n    padding: 1.5rem 1rem;\n    margin-bottom: 1rem;\n    opacity: 1;\n}\n\n.task-details-description {\n    width: 100%;\n    margin: 1rem 0;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-controllers {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.task-details-edit-btn,\n.task-details-delete-btn {\n    margin-left: 0.5rem;\n}\n\n.task-details-edit-btn span,\n.task-add-close-btn span,\n.task-details-delete-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-details-due-container {\n    display: flex;\n}\n\n.task-details-due-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.task-add-modal-container,\n.task-delete-modal-container {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 5rem;\n    /* justify-content: center;\n    align-items: center; */\n    background-color: #0000005b;\n}\n\n.task-add-modal-container-active,\n.task-delete-modal-container-active {\n    /* display: flex; */\n    display: block;\n}\n\n.task-add-modal,\n.task-delete-modal {\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    height: fit-content;\n    margin: auto;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n    box-shadow: 0 0 1rem #5c5c5c;\n    animation-name: animatetop;\n    animation-duration: 0.6s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n.task-delete-modal {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 4rem 2rem 3rem;\n}\n\n.task-delete-answers-container {\n    display: flex;\n    justify-content: center;\n}\n\n.task-delete-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-delete-close-btn span {\n    font-size: 1rem;\n}\n\n.task-delete-answer-btn {\n    margin: 1rem 0.5rem 0;\n}\n\n.task-add-title {\n    font-size: 1rem;\n    margin: 0 0 1.5rem;\n}\n\n.task-add-description,\n.task-add-name,\n.task-add-subtask-item-input,\n.task-add-due-date {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-subtasks-container {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.task-add-subtask-item-container {\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-add-subtask-item-input {\n    margin-bottom: 0.1rem;\n}\n\n.task-add-subtask-add-another {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    padding: 0.1rem;\n    border-radius: 2rem;\n    color: #fff;\n    background-color: #6e94b8;\n    box-shadow: 0.1rem 0.1rem 0.5rem #000;\n    font-size: 0.5rem;\n}\n\n.task-add-subtask-add-another span {\n    font-size: 1rem;\n}\n\n.task-add-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-add-due-date {\n    margin-bottom: 0.3rem;\n}\n\n/* \n.task-add-due-text {\n    margin: 0.5rem 0;\n} */\n\n.task-add-priority-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1rem 0;\n}\n\n.task-add-priority-item-container {\n    position: relative;\n    width: 20%;\n}\n\n.task-add-priority-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.priority-selector {\n    height: 1rem;\n    border-radius: 0.3rem;\n    display: block;\n}\n\n.priority-1 {\n    border: 0.15rem solid var(--color-priority-1);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-1 {\n    background-color: var(--color-priority-1);\n}\n\n.priority-2 {\n    border: 0.15rem solid var(--color-priority-2);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-2 {\n    background-color: var(--color-priority-2);\n}\n\n.priority-3 {\n    border: 0.15rem solid var(--color-priority-3);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-3 {\n    background-color: var(--color-priority-3);\n}\n\n.priority-4 {\n    border: 0.15rem solid var(--color-priority-4);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-4 {\n    background-color: var(--color-priority-4);\n}\n.task-add-priority-item-checkbox:checked ~ .priority-selector {\n    box-shadow: 0 0 0.4rem #000;\n}\n\n.task-add-submit-btn,\n.task-delete-answer-btn {\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: var(--color-primary);\n    color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/db/create/add-task-to-local-storage.js":
/*!****************************************************!*\
  !*** ./src/db/create/add-task-to-local-storage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToLocalStorage": () => (/* binding */ addTaskToLocalStorage)
/* harmony export */ });
/* harmony import */ var _read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../read/get-local-storage-list */ "./src/db/read/get-local-storage-list.js");
/* harmony import */ var _save_in_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-in-local-storage */ "./src/db/create/save-in-local-storage.js");



function addTaskToLocalStorage(task) {
    const list = (0,_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageList)();

    list.push(task);

    (0,_save_in_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveInLocalStorage)(list);
}


/***/ }),

/***/ "./src/db/create/default-list.js":
/*!***************************************!*\
  !*** ./src/db/create/default-list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultList": () => (/* binding */ defaultList)
/* harmony export */ });
const defaultList = [
    {
        id: 1,
        title: "Buy pizza ingredients",
        checked: false,
        description: "Lenny doesn't like anchovies!",
        subtasks: [
            { title: "Cheese", checked: false },
            { title: "Tomato", checked: true },
            { title: "Olives", checked: false },
        ],
        dueDate: "2021-07-23",
        priority: 1,
    },
    {
        id: 2,
        title: "Do laundry",
        checked: false,
        description: "",
        subtasks: [],
        dueDate: "2021-07-23",
        priority: 1,
    },
    {
        id: 3,
        title: "Finish project",
        checked: false,
        description: "Don't forget to use Pomodoro Timer",
        subtasks: [
            { title: "Add fancy animations", checked: true },
            { title: "Review SOLID principles", checked: false },
            { title: "Fix bugs", checked: true },
        ],
        dueDate: "2021-07-23",
        priority: 3,
    },
    {
        id: 4,
        title: "Make bread",
        checked: true,
        description: "Use olive oil?",
        subtasks: [
            { title: "Buy yeast", checked: true },
            { title: "Try new recipe", checked: false },
        ],
        dueDate: "2021-07-28",
        priority: 2,
    },
];


/***/ }),

/***/ "./src/db/create/populate-local-storage.js":
/*!*************************************************!*\
  !*** ./src/db/create/populate-local-storage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateLocalStorage": () => (/* binding */ populateLocalStorage)
/* harmony export */ });
/* harmony import */ var _default_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-list */ "./src/db/create/default-list.js");


function populateLocalStorage() {
    if (localStorage.getItem("list")) {
        return;
    }

    const defaltListJSON = JSON.stringify(_default_list__WEBPACK_IMPORTED_MODULE_0__.defaultList);
    localStorage.setItem("list", defaltListJSON);
}


/***/ }),

/***/ "./src/db/create/save-in-local-storage.js":
/*!************************************************!*\
  !*** ./src/db/create/save-in-local-storage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveInLocalStorage": () => (/* binding */ saveInLocalStorage)
/* harmony export */ });
function saveInLocalStorage(list) {
    const listJSON = JSON.stringify(list);
    localStorage.setItem("list", listJSON);
}


/***/ }),

/***/ "./src/db/delete/delete-task-from-local-storage.js":
/*!*********************************************************!*\
  !*** ./src/db/delete/delete-task-from-local-storage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTaskFromLocalStorage": () => (/* binding */ deleteTaskFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _create_save_in_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/save-in-local-storage */ "./src/db/create/save-in-local-storage.js");
/* harmony import */ var _read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../read/get-local-storage-list */ "./src/db/read/get-local-storage-list.js");



function deleteTaskFromLocalStorage(taskId) {
    const list = (0,_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageList)();
    taskId = Number(taskId);

    const toDeleteIdex = list.findIndex((task) => task.id === taskId);

    list.splice(toDeleteIdex, 1);

    (0,_create_save_in_local_storage__WEBPACK_IMPORTED_MODULE_0__.saveInLocalStorage)(list);
}


/***/ }),

/***/ "./src/db/read/get-last-id.js":
/*!************************************!*\
  !*** ./src/db/read/get-last-id.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLastId": () => (/* binding */ getLastId)
/* harmony export */ });
/* harmony import */ var _get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-storage-list */ "./src/db/read/get-local-storage-list.js");


function getLastId() {
    const list = (0,_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageList)();

    const lastId = list[list.length - 1].id;

    return lastId;
}


/***/ }),

/***/ "./src/db/read/get-local-storage-list.js":
/*!***********************************************!*\
  !*** ./src/db/read/get-local-storage-list.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorageList": () => (/* binding */ getLocalStorageList)
/* harmony export */ });
function getLocalStorageList() {
    const storedListJSON = localStorage.getItem("list");
    const storedList = JSON.parse(storedListJSON);
    return storedList;
}


/***/ }),

/***/ "./src/db/update/update-task-checked.js":
/*!**********************************************!*\
  !*** ./src/db/update/update-task-checked.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageUpdateTaskChecked": () => (/* binding */ localStorageUpdateTaskChecked)
/* harmony export */ });
/* harmony import */ var _read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../read/get-local-storage-list */ "./src/db/read/get-local-storage-list.js");
/* harmony import */ var _create_save_in_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/save-in-local-storage */ "./src/db/create/save-in-local-storage.js");



function localStorageUpdateTaskChecked(taskId) {
    taskId = Number(taskId[taskId.length - 1]);

    const list = (0,_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageList)();

    const taskToUpdateIndex = list.findIndex((task) => task.id === taskId);

    list[taskToUpdateIndex].checked = !list[taskToUpdateIndex].checked;

    (0,_create_save_in_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveInLocalStorage)(list);
}


/***/ }),

/***/ "./src/view/side-nav/events/close-side-nav.js":
/*!****************************************************!*\
  !*** ./src/view/side-nav/events/close-side-nav.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeSideNav": () => (/* binding */ closeSideNav)
/* harmony export */ });
function closeSideNav() {
    const sideNavCloseBtn = document.querySelector(".side-nav-close-btn");

    sideNavCloseBtn.addEventListener("click", closeSideNav);

    const sideNav = document.querySelector(".side-nav");

    function closeSideNav() {
        sideNav.classList.remove("side-nav-active");
    }
}


/***/ }),

/***/ "./src/view/side-nav/events/events.js":
/*!********************************************!*\
  !*** ./src/view/side-nav/events/events.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _show_side_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-side-nav */ "./src/view/side-nav/events/show-side-nav.js");
/* harmony import */ var _close_side_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-side-nav */ "./src/view/side-nav/events/close-side-nav.js");



function events() {
    (0,_show_side_nav__WEBPACK_IMPORTED_MODULE_0__.showSideNav)();
    (0,_close_side_nav__WEBPACK_IMPORTED_MODULE_1__.closeSideNav)();
}


/***/ }),

/***/ "./src/view/side-nav/events/show-side-nav.js":
/*!***************************************************!*\
  !*** ./src/view/side-nav/events/show-side-nav.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showSideNav": () => (/* binding */ showSideNav)
/* harmony export */ });
function showSideNav() {
    const sideNavBtn = document.querySelector(".side-nav-btn");

    sideNavBtn.addEventListener("click", show);

    const sideNav = document.querySelector(".side-nav");

    function show() {
        sideNav.classList.add("side-nav-active");
    }
}


/***/ }),

/***/ "./src/view/side-nav/side-nav.js":
/*!***************************************!*\
  !*** ./src/view/side-nav/side-nav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideNav": () => (/* binding */ sideNav)
/* harmony export */ });
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/events */ "./src/view/side-nav/events/events.js");


function sideNav() {
    (0,_events_events__WEBPACK_IMPORTED_MODULE_0__.events)();
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-container.js":
/*!************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-container.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addContainer": () => (/* binding */ addContainer)
/* harmony export */ });
/* harmony import */ var _add_modal_add_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-modal/add-modal */ "./src/view/task-add-container-modal/add-modal/add-modal.js");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/events */ "./src/view/task-add-container-modal/events/events.js");



function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild((0,_add_modal_add_modal__WEBPACK_IMPORTED_MODULE_0__.addModal)());

    document.body.appendChild(addContainer);
    (0,_events_events__WEBPACK_IMPORTED_MODULE_1__.events)();
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/add-modal.js":
/*!******************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/add-modal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addModal": () => (/* binding */ addModal)
/* harmony export */ });
/* harmony import */ var _add_top_add_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-top/add-top */ "./src/view/task-add-container-modal/add-modal/add-top/add-top.js");
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form */ "./src/view/task-add-container-modal/add-modal/form/form.js");



function addModal() {
    const addModal = document.createElement("div");
    addModal.classList.add("task-add-modal");
    addModal.appendChild((0,_add_top_add_top__WEBPACK_IMPORTED_MODULE_0__.addTop)());
    addModal.appendChild((0,_form_form__WEBPACK_IMPORTED_MODULE_1__.form)());
    return addModal;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/add-top/add-top.js":
/*!************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/add-top/add-top.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTop": () => (/* binding */ addTop)
/* harmony export */ });
/* harmony import */ var _close_button_close_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-button/close-button */ "./src/view/task-add-container-modal/add-modal/add-top/close-button/close-button.js");
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title/title */ "./src/view/task-add-container-modal/add-modal/add-top/title/title.js");



function addTop() {
    const addTop = document.createElement("div");
    addTop.classList.add("task-add-top");
    addTop.appendChild((0,_close_button_close_button__WEBPACK_IMPORTED_MODULE_0__.closeButton)());
    addTop.appendChild((0,_title_title__WEBPACK_IMPORTED_MODULE_1__.title)());
    return addTop;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/add-top/close-button/close-button.js":
/*!******************************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/add-top/close-button/close-button.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeButton": () => (/* binding */ closeButton)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/view/task-add-container-modal/add-modal/add-top/close-button/icon.js");


function closeButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("task-add-close-btn");
    closeButton.appendChild((0,_icon__WEBPACK_IMPORTED_MODULE_0__.icon)());
    return closeButton;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/add-top/close-button/icon.js":
/*!**********************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/add-top/close-button/icon.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
function icon() {
    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.innerText = "close";
    return icon;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/add-top/title/title.js":
/*!****************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/add-top/title/title.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
function title() {
    const title = document.createElement("h2");
    title.classList.add("task-add-title");
    title.innerText = "New task";
    return title;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/description/description.js":
/*!*************************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/description/description.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDescription": () => (/* binding */ createDescription)
/* harmony export */ });
function createDescription() {
    const description = document.createElement("input");
    description.type = "text";
    description.classList.add("task-add-description");
    description.placeholder = "Description (optional)";
    description.name = "new-task-description";
    return description;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/due/due.js":
/*!*********************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/due/due.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDue": () => (/* binding */ createDue)
/* harmony export */ });
function createDue() {
    const due = document.createElement("div");

    const input = document.createElement("input");
    input.classList.add("task-add-due-date");
    input.type = "date";
    input.name = "new-task-due-date";

    due.appendChild(input);

    return due;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/events/process-form.js":
/*!*********************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/events/process-form.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processForm": () => (/* binding */ processForm)
/* harmony export */ });
/* harmony import */ var _db_read_get_last_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../db/read/get-last-id */ "./src/db/read/get-last-id.js");
/* harmony import */ var _db_create_add_task_to_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../db/create/add-task-to-local-storage */ "./src/db/create/add-task-to-local-storage.js");



function processForm(
    e,
    taskName,
    description,
    subtasksContainer,
    due,
    priority
) {
    e.preventDefault();

    // console.log(taskName.value);

    // console.log(description.value);

    const lastId = (0,_db_read_get_last_id__WEBPACK_IMPORTED_MODULE_0__.getLastId)();

    const subtasks = subtasksContainer.childNodes[0].childNodes[0].childNodes;
    const subtasksProcessed = [];
    subtasks.forEach((subtask) => {
        if (subtask.value) {
            const subtaskProcessed = {
                title: subtask.value,
                checked: false,
            };
            subtasksProcessed.push(subtaskProcessed);
        }
        // console.log(subtask.value);
    });

    // console.dir(due.childNodes[0].value);

    const priorityLevels = priority.childNodes;

    let priorityLevelProcessed;
    priorityLevels.forEach((level) => {
        const checked = level.childNodes[0].checked;
        if (checked) {
            // console.dir(checked);
            const priorityLevel = level.childNodes[1].classList[1];
            priorityLevelProcessed = Number(
                priorityLevel[priorityLevel.length - 1]
            );
            // console.dir(priorityLevel);
        }
    });

    const newTask = {
        id: lastId + 1,
        title: taskName.value,
        checked: false,
        description: description.value,
        subtasks: subtasksProcessed,
        dueDate: due.value,
        priority: priorityLevelProcessed,
    };

    console.log(newTask);
    (0,_db_create_add_task_to_local_storage__WEBPACK_IMPORTED_MODULE_1__.addTaskToLocalStorage)(newTask);
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/form.js":
/*!******************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/form.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _name_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name/name */ "./src/view/task-add-container-modal/add-modal/form/name/name.js");
/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description/description */ "./src/view/task-add-container-modal/add-modal/form/description/description.js");
/* harmony import */ var _subtasks_subtasks_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtasks/subtasks-container */ "./src/view/task-add-container-modal/add-modal/form/subtasks/subtasks-container.js");
/* harmony import */ var _due_due__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./due/due */ "./src/view/task-add-container-modal/add-modal/form/due/due.js");
/* harmony import */ var _priority_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priority/priority */ "./src/view/task-add-container-modal/add-modal/form/priority/priority.js");
/* harmony import */ var _submit_submit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit/submit */ "./src/view/task-add-container-modal/add-modal/form/submit/submit.js");
/* harmony import */ var _events_process_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/process-form */ "./src/view/task-add-container-modal/add-modal/form/events/process-form.js");








function form() {
    const form = document.createElement("form");
    form.classList.add("task-add-form");

    const taskName = (0,_name_name__WEBPACK_IMPORTED_MODULE_0__.createName)();
    form.appendChild(taskName);

    const description = (0,_description_description__WEBPACK_IMPORTED_MODULE_1__.createDescription)();
    form.appendChild(description);

    const subtasksContainer = (0,_subtasks_subtasks_container__WEBPACK_IMPORTED_MODULE_2__.createSubtasksContainer)();
    form.appendChild(subtasksContainer);

    const due = (0,_due_due__WEBPACK_IMPORTED_MODULE_3__.createDue)();
    form.appendChild(due);

    const priority = (0,_priority_priority__WEBPACK_IMPORTED_MODULE_4__.createPriority)();
    form.appendChild(priority);

    form.appendChild((0,_submit_submit__WEBPACK_IMPORTED_MODULE_5__.submit)());

    form.addEventListener("submit", (e) => {
        (0,_events_process_form__WEBPACK_IMPORTED_MODULE_6__.processForm)(e, taskName, description, subtasksContainer, due, priority);
    });

    return form;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/name/name.js":
/*!***********************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/name/name.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createName": () => (/* binding */ createName)
/* harmony export */ });
function createName() {
    const name = document.createElement("input");
    name.type = "text";
    name.classList.add("task-add-name");
    name.placeholder = "Task";
    name.name = "new-task-name";
    return name;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/priority/priority.js":
/*!*******************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/priority/priority.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPriority": () => (/* binding */ createPriority)
/* harmony export */ });
function createPriority() {
    const priority = document.createElement("div");
    priority.classList.add("task-add-priority-container");

    const levels = [1, 2, 3, 4];

    levels.forEach((level) => {
        const label = document.createElement("label");
        label.classList.add("task-add-priority-item-container");

        const input = document.createElement("input");
        input.classList.add("task-add-priority-item-checkbox");
        input.type = "radio";
        input.name = "priority";

        const span = document.createElement("span");
        span.classList.add("priority-selector");
        span.classList.add(`priority-${level}`);

        label.appendChild(input);
        label.appendChild(span);

        priority.appendChild(label);
    });

    return priority;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/submit/submit.js":
/*!***************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/submit/submit.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submit": () => (/* binding */ submit)
/* harmony export */ });
function submit() {
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.classList.add("task-add-submit-btn");
    submit.innerText = "Add";

    return submit;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/subtasks/add/add.js":
/*!******************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/subtasks/add/add.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add)
/* harmony export */ });
function add() {
    const add = document.createElement("div");
    add.classList.add("task-add-subtask-add-another-container");

    const button = document.createElement("div");
    button.classList.add("task-add-subtask-add-another");

    const span = document.createElement("span");
    span.classList.add("material-icons-outlined");
    span.innerText = "add";

    button.appendChild(span);
    add.appendChild(button);

    return add;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/subtasks/list/list.js":
/*!********************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/subtasks/list/list.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
function list() {
    const list = document.createElement("div");
    list.classList.add("task-add-subtasks-list");

    const label = document.createElement("label");
    label.classList.add("task-add-subtask-item-container");

    const input = document.createElement("input");
    input.classList.add("task-add-subtask-item-input");
    input.type = "text";
    input.placeholder = "Subtask (optional)";
    input.name = "new-subtask-name-1";

    label.appendChild(input);

    list.appendChild(label);

    return list;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/form/subtasks/subtasks-container.js":
/*!*****************************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/form/subtasks/subtasks-container.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubtasksContainer": () => (/* binding */ createSubtasksContainer)
/* harmony export */ });
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list */ "./src/view/task-add-container-modal/add-modal/form/subtasks/list/list.js");
/* harmony import */ var _add_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add */ "./src/view/task-add-container-modal/add-modal/form/subtasks/add/add.js");



function createSubtasksContainer() {
    const subtasksContainer = document.createElement("div");
    subtasksContainer.classList.add("task-add-subtasks-container");

    subtasksContainer.appendChild((0,_list_list__WEBPACK_IMPORTED_MODULE_0__.list)());
    subtasksContainer.appendChild((0,_add_add__WEBPACK_IMPORTED_MODULE_1__.add)());
    return subtasksContainer;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/events/close-create-new-task.js":
/*!***************************************************************************!*\
  !*** ./src/view/task-add-container-modal/events/close-create-new-task.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeCreateNewTask": () => (/* binding */ closeCreateNewTask)
/* harmony export */ });
function closeCreateNewTask() {
    const addTaskCloseBtn = document.querySelector(".task-add-close-btn");
    addTaskCloseBtn.addEventListener("click", close);

    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    function close() {
        taskAddModalContainer.classList.remove(
            "task-add-modal-container-active"
        );
    }

    window.addEventListener("click", (e) => {
        if (e.target === taskAddModalContainer) {
            taskAddModalContainer.classList.remove(
                "task-add-modal-container-active"
            );
        }
    });
}


/***/ }),

/***/ "./src/view/task-add-container-modal/events/events.js":
/*!************************************************************!*\
  !*** ./src/view/task-add-container-modal/events/events.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _show_create_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-create-new-task */ "./src/view/task-add-container-modal/events/show-create-new-task.js");
/* harmony import */ var _close_create_new_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-create-new-task */ "./src/view/task-add-container-modal/events/close-create-new-task.js");
/* harmony import */ var _task_add_subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-add-subtask */ "./src/view/task-add-container-modal/events/task-add-subtask.js");




function events() {
    (0,_show_create_new_task__WEBPACK_IMPORTED_MODULE_0__.showCreateNewTask)();
    (0,_close_create_new_task__WEBPACK_IMPORTED_MODULE_1__.closeCreateNewTask)();
    (0,_task_add_subtask__WEBPACK_IMPORTED_MODULE_2__.addSubtask)();
}


/***/ }),

/***/ "./src/view/task-add-container-modal/events/show-create-new-task.js":
/*!**************************************************************************!*\
  !*** ./src/view/task-add-container-modal/events/show-create-new-task.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCreateNewTask": () => (/* binding */ showCreateNewTask)
/* harmony export */ });
function showCreateNewTask() {
    const addTaskBtn = document.querySelector(".add-task-floating-btn");
    addTaskBtn.addEventListener("click", show);

    function show() {
        const addContainer = document.querySelector(
            ".task-add-modal-container"
        );

        addContainer.classList.add("task-add-modal-container-active");
    }
}


/***/ }),

/***/ "./src/view/task-add-container-modal/events/task-add-subtask.js":
/*!**********************************************************************!*\
  !*** ./src/view/task-add-container-modal/events/task-add-subtask.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSubtask": () => (/* binding */ addSubtask)
/* harmony export */ });
function addSubtask() {
    const addSubtaskBtn = document.querySelector(
        ".task-add-subtask-add-another"
    );
    addSubtaskBtn.addEventListener("click", add);

    const subtasksContainer = document.querySelector(
        ".task-add-subtask-item-container"
    );

    let subtaskCounter = 2;

    function add() {
        if (subtaskCounter < 5) {
            const newSubtask = document.createElement("input");
            newSubtask.classList.add("task-add-subtask-item-input");
            newSubtask.placeholder = "Subtask (optional)";
            newSubtask.name = `new-subtask-name-${subtaskCounter}`;
            subtasksContainer.appendChild(newSubtask);
            subtaskCounter++;
        }
    }
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/delete-container.js":
/*!******************************************************************!*\
  !*** ./src/view/task-delete-container-modal/delete-container.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteContainer": () => (/* binding */ deleteContainer)
/* harmony export */ });
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal */ "./src/view/task-delete-container-modal/modal/modal.js");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/events */ "./src/view/task-delete-container-modal/events/events.js");



function deleteContainer(taskId) {
    const deleteContainer = document.createElement("div");
    deleteContainer.classList.add("task-delete-modal-container");
    // deleteContainer.classList.add("task-delete-modal-container-active");

    deleteContainer.appendChild((0,_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal)());

    document.body.appendChild(deleteContainer);
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/events/close-delete.js":
/*!*********************************************************************!*\
  !*** ./src/view/task-delete-container-modal/events/close-delete.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeDelete": () => (/* binding */ closeDelete)
/* harmony export */ });
function closeDelete() {
    const deleteBox = document.querySelector(".task-delete-modal-container");
    deleteBox.classList.remove("task-delete-modal-container-active");
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/events/events.js":
/*!***************************************************************!*\
  !*** ./src/view/task-delete-container-modal/events/events.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _task_show_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-show-delete */ "./src/view/task-delete-container-modal/events/task-show-delete.js");


function events() {
    (0,_task_show_delete__WEBPACK_IMPORTED_MODULE_0__.taskShowDelete)();
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/events/task-process-delete.js":
/*!****************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/events/task-process-delete.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskProcessDelete": () => (/* binding */ taskProcessDelete)
/* harmony export */ });
/* harmony import */ var _db_delete_delete_task_from_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/delete/delete-task-from-local-storage */ "./src/db/delete/delete-task-from-local-storage.js");


function taskProcessDelete(e) {
    // function findParent(source, filter) {
    //     const root = document.documentElement;
    //     while (source != root) {
    //         if (filter(source)) {
    //             return source;
    //         }
    //         source = source.parentNode;
    //     }
    // }

    // const taskId = findParent(e.target, (elem) => {
    //     return elem.dataset.taskId;
    // }).dataset.taskId;

    const taskId = e.target.parentNode.parentNode.parentNode.dataset.delete;

    const taskToDelete = document.getElementById(`task-${taskId}`);
    taskToDelete.parentNode.removeChild(taskToDelete);

    (0,_db_delete_delete_task_from_local_storage__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocalStorage)(taskId);
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/events/task-show-delete.js":
/*!*************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/events/task-show-delete.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskShowDelete": () => (/* binding */ taskShowDelete)
/* harmony export */ });
// import { taskProcessDelete } from "./task-process-delete";

function taskShowDelete(e) {
    const deleteBox = document.querySelector(".task-delete-modal-container");
    deleteBox.classList.add("task-delete-modal-container-active");
    deleteBox.dataset.delete = e.target.dataset.delete;

    // const deleteTrueBtn = document.getElementById("delete-true");
    // deleteTrueBtn.addEventListener("click", () => {
    //     taskProcessDelete(e);
    //     taskCloseDelete();
    // // });

    // // const deleteFalseBtn = document.getElementById("delete-false");
    // // deleteFalseBtn.addEventListener("click", taskCloseDelete);

    // const deleteCloseBtn = document.querySelector(".task-delete-close-btn");
    // deleteCloseBtn.addEventListener("click", taskCloseDelete);

    // function taskCloseDelete() {
    //     deleteBox.classList.remove("task-delete-modal-container-active");
    // }
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/modal/answers-container/answers-container.js":
/*!*******************************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/modal/answers-container/answers-container.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answersContainer": () => (/* binding */ answersContainer)
/* harmony export */ });
/* harmony import */ var _yes_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yes-btn */ "./src/view/task-delete-container-modal/modal/answers-container/yes-btn.js");
/* harmony import */ var _no_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-btn */ "./src/view/task-delete-container-modal/modal/answers-container/no-btn.js");



function answersContainer() {
    const answersContainer = document.createElement("div");
    answersContainer.classList.add("task-delete-answers-container");

    answersContainer.appendChild((0,_yes_btn__WEBPACK_IMPORTED_MODULE_0__.yesBtn)());
    answersContainer.appendChild((0,_no_btn__WEBPACK_IMPORTED_MODULE_1__.noBtn)());

    return answersContainer;
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/modal/answers-container/no-btn.js":
/*!********************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/modal/answers-container/no-btn.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noBtn": () => (/* binding */ noBtn)
/* harmony export */ });
/* harmony import */ var _events_close_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events/close-delete */ "./src/view/task-delete-container-modal/events/close-delete.js");


function noBtn() {
    const noBtn = document.createElement("button");
    noBtn.classList.add("task-delete-answer-btn");
    noBtn.id = "delete-false";
    noBtn.innerText = "No";
    noBtn.addEventListener("click", _events_close_delete__WEBPACK_IMPORTED_MODULE_0__.closeDelete);

    return noBtn;
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/modal/answers-container/yes-btn.js":
/*!*********************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/modal/answers-container/yes-btn.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yesBtn": () => (/* binding */ yesBtn)
/* harmony export */ });
/* harmony import */ var _events_task_process_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events/task-process-delete */ "./src/view/task-delete-container-modal/events/task-process-delete.js");
/* harmony import */ var _events_close_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/close-delete */ "./src/view/task-delete-container-modal/events/close-delete.js");



function yesBtn() {
    const yesBtn = document.createElement("button");
    yesBtn.classList.add("task-delete-answer-btn");
    yesBtn.id = "delete-true";
    yesBtn.innerText = "Yes";

    yesBtn.addEventListener("click", (e) => {
        (0,_events_task_process_delete__WEBPACK_IMPORTED_MODULE_0__.taskProcessDelete)(e);
        (0,_events_close_delete__WEBPACK_IMPORTED_MODULE_1__.closeDelete)();
    });

    return yesBtn;
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/modal/close-btn/close-btn.js":
/*!***************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/modal/close-btn/close-btn.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeBtn": () => (/* binding */ closeBtn)
/* harmony export */ });
/* harmony import */ var _events_close_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events/close-delete */ "./src/view/task-delete-container-modal/events/close-delete.js");


function closeBtn() {
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("task-delete-close-btn");

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.innerText = "close";

    closeBtn.appendChild(icon);
    closeBtn.addEventListener("click", _events_close_delete__WEBPACK_IMPORTED_MODULE_0__.closeDelete);

    return closeBtn;
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/modal/modal.js":
/*!*************************************************************!*\
  !*** ./src/view/task-delete-container-modal/modal/modal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _close_btn_close_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-btn/close-btn */ "./src/view/task-delete-container-modal/modal/close-btn/close-btn.js");
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question/question */ "./src/view/task-delete-container-modal/modal/question/question.js");
/* harmony import */ var _answers_container_answers_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answers-container/answers-container */ "./src/view/task-delete-container-modal/modal/answers-container/answers-container.js");




function modal() {
    const modal = document.createElement("div");
    modal.classList.add("task-delete-modal");

    modal.appendChild((0,_close_btn_close_btn__WEBPACK_IMPORTED_MODULE_0__.closeBtn)());
    modal.appendChild((0,_question_question__WEBPACK_IMPORTED_MODULE_1__.question)());
    modal.appendChild((0,_answers_container_answers_container__WEBPACK_IMPORTED_MODULE_2__.answersContainer)());

    return modal;
}


/***/ }),

/***/ "./src/view/task-delete-container-modal/modal/question/question.js":
/*!*************************************************************************!*\
  !*** ./src/view/task-delete-container-modal/modal/question/question.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "question": () => (/* binding */ question)
/* harmony export */ });
function question() {
    const question = document.createElement("div");
    question.classList.add("task-delete-question");
    question.innerText = "Do you want to delete this task?";

    return question;
}


/***/ }),

/***/ "./src/view/task-group-container/add-to-group-container.js":
/*!*****************************************************************!*\
  !*** ./src/view/task-group-container/add-to-group-container.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToGroupContainer": () => (/* binding */ addToGroupContainer)
/* harmony export */ });
/* harmony import */ var _task_container_task_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-container/task-container */ "./src/view/task-group-container/task-container/task-container.js");


function addToGroupContainer(task) {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.appendChild((0,_task_container_task_container__WEBPACK_IMPORTED_MODULE_0__.taskContainer)(task));
}


/***/ }),

/***/ "./src/view/task-group-container/events/events.js":
/*!********************************************************!*\
  !*** ./src/view/task-group-container/events/events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _task_toggle_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-toggle-details */ "./src/view/task-group-container/events/task-toggle-details.js");
/* harmony import */ var _task_show_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-show-edit */ "./src/view/task-group-container/events/task-show-edit.js");
/* harmony import */ var _task_delete_container_modal_events_task_show_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../task-delete-container-modal/events/task-show-delete */ "./src/view/task-delete-container-modal/events/task-show-delete.js");




function events() {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.addEventListener("click", handler);

    function handler(e) {
        const target = e.target.dataset.target;
        switch (target) {
            case "task-show-details-btn":
                (0,_task_toggle_details__WEBPACK_IMPORTED_MODULE_0__.taskToggleDetails)(e);
                break;
            case "task-details-edit-btn":
                (0,_task_show_edit__WEBPACK_IMPORTED_MODULE_1__.taskShowEditDetails)(e);
                break;
            case "task-details-delete-btn":
                (0,_task_delete_container_modal_events_task_show_delete__WEBPACK_IMPORTED_MODULE_2__.taskShowDelete)(e);
                break;
        }
    }
}


/***/ }),

/***/ "./src/view/task-group-container/events/task-show-edit.js":
/*!****************************************************************!*\
  !*** ./src/view/task-group-container/events/task-show-edit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskShowEditDetails": () => (/* binding */ taskShowEditDetails)
/* harmony export */ });
function taskShowEditDetails(e) {
    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    taskAddModalContainer.classList.add("task-add-modal-container-active");
}


/***/ }),

/***/ "./src/view/task-group-container/events/task-toggle-details.js":
/*!*********************************************************************!*\
  !*** ./src/view/task-group-container/events/task-toggle-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskToggleDetails": () => (/* binding */ taskToggleDetails)
/* harmony export */ });
function taskToggleDetails(e) {
    toggleDetails(e);
    toggleBtnIcon(e);

    function toggleDetails(e) {
        const taskDetailsContainer =
            e.target.parentNode.parentNode.lastElementChild;
        taskDetailsContainer.classList.toggle("task-details-container-active");
    }

    function toggleBtnIcon(e) {
        const taskShowDetailsBtn = e.target.parentNode.lastElementChild;
        taskShowDetailsBtn.innerText =
            taskShowDetailsBtn.innerText === "expand_more"
                ? "expand_less"
                : "expand_more";
    }
}


/***/ }),

/***/ "./src/view/task-group-container/group-container.js":
/*!**********************************************************!*\
  !*** ./src/view/task-group-container/group-container.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupContainer": () => (/* binding */ groupContainer)
/* harmony export */ });
/* harmony import */ var _add_to_group_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-group-container */ "./src/view/task-group-container/add-to-group-container.js");
/* harmony import */ var _db_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/read/get-local-storage-list */ "./src/db/read/get-local-storage-list.js");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/events */ "./src/view/task-group-container/events/events.js");




function groupContainer() {
    const storedList = (0,_db_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageList)();

    storedList.forEach((task) => {
        (0,_add_to_group_container__WEBPACK_IMPORTED_MODULE_0__.addToGroupContainer)(task);
    });

    (0,_events_events__WEBPACK_IMPORTED_MODULE_2__.events)();
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/checkbox-container/checkbox-container.js":
/*!***********************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/checkbox-container/checkbox-container.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxContainer": () => (/* binding */ checkboxContainer)
/* harmony export */ });
/* harmony import */ var _events_toggle_task_checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/toggle-task-checked */ "./src/view/task-group-container/task-container/checkbox-container/events/toggle-task-checked.js");


function checkboxContainer(task) {
    const checkboxContainer = document.createElement("label");
    checkboxContainer.classList.add("task-checkbox-container");

    const checkbox = (() => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.checked;
        checkbox.classList.add("task-checkbox");
        checkbox.addEventListener("change", _events_toggle_task_checked__WEBPACK_IMPORTED_MODULE_0__.toggleTaskChecked);

        return checkbox;
    })();

    const checkmark = (() => {
        const checkmark = document.createElement("span");
        checkmark.classList.add("task-checkmark");
        checkmark.classList.add(`task-checkmark-priority-${task.priority}`);
        return checkmark;
    })();

    const title = (() => {
        const title = document.createElement("span");
        title.classList.add("task-title");
        title.innerText = task.title;
        return title;
    })();

    const showDetailsBtn = (() => {
        const showDetailsBtn = document.createElement("button");
        showDetailsBtn.classList.add("material-icons-outlined");
        showDetailsBtn.classList.add("task-show-details-btn");
        showDetailsBtn.dataset.target = "task-show-details-btn";
        showDetailsBtn.innerText = "expand_more";
        return showDetailsBtn;
    })();

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkmark);
    checkboxContainer.appendChild(title);
    checkboxContainer.appendChild(showDetailsBtn);

    return checkboxContainer;
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/checkbox-container/events/toggle-task-checked.js":
/*!*******************************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/checkbox-container/events/toggle-task-checked.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleTaskChecked": () => (/* binding */ toggleTaskChecked)
/* harmony export */ });
/* harmony import */ var _db_update_update_task_checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../db/update/update-task-checked */ "./src/db/update/update-task-checked.js");


function toggleTaskChecked(e) {
    const taskId = e.target.parentNode.parentNode.id;
    (0,_db_update_update_task_checked__WEBPACK_IMPORTED_MODULE_0__.localStorageUpdateTaskChecked)(taskId);
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/details-container/details-container.js":
/*!*********************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/details-container/details-container.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsContainer": () => (/* binding */ detailsContainer)
/* harmony export */ });
/* harmony import */ var _details_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-controllers */ "./src/view/task-group-container/task-container/details-container/details-controllers.js");
/* harmony import */ var _details_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-description */ "./src/view/task-group-container/task-container/details-container/details-description.js");
/* harmony import */ var _details_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-list */ "./src/view/task-group-container/task-container/details-container/details-list.js");




function detailsContainer(task) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("task-details-container");
    detailsContainer.dataset.target = "task-details-container";

    detailsContainer.appendChild((0,_details_controllers__WEBPACK_IMPORTED_MODULE_0__.detailsControllers)(task));

    if (task.description) {
        detailsContainer.appendChild((0,_details_description__WEBPACK_IMPORTED_MODULE_1__.detailsDescription)(task));
    }
    if (task.subtasks) {
        detailsContainer.appendChild((0,_details_list__WEBPACK_IMPORTED_MODULE_2__.detailsList)(task));
    }

    return detailsContainer;
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/details-container/details-controllers.js":
/*!***********************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/details-container/details-controllers.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsControllers": () => (/* binding */ detailsControllers)
/* harmony export */ });
function detailsControllers(task) {
    const detailsControllers = document.createElement("div");
    detailsControllers.classList.add("task-details-controllers");

    const detailsEditBtn = (() => {
        const detailsEditBtn = document.createElement("button");
        detailsEditBtn.classList.add("task-details-edit-btn");
        return detailsEditBtn;
    })();

    const detailsEditIcon = (() => {
        const detailsEditIcon = document.createElement("span");
        detailsEditIcon.classList.add("material-icons-outlined");
        detailsEditIcon.dataset.target = "task-details-edit-btn";
        detailsEditIcon.innerText = "edit";
        return detailsEditIcon;
    })();

    const detailsDeleteBtn = (() => {
        const detailsDeleteBtn = document.createElement("button");
        detailsDeleteBtn.classList.add("task-details-delete-btn");
        return detailsDeleteBtn;
    })();

    const detailsDeleteIcon = (() => {
        const detailsDeleteIcon = document.createElement("span");
        detailsDeleteIcon.classList.add("material-icons-outlined");
        detailsDeleteIcon.dataset.target = "task-details-delete-btn";
        detailsDeleteIcon.dataset.delete = `${task.id}`;
        detailsDeleteIcon.innerText = "delete";
        return detailsDeleteIcon;
    })();

    detailsEditBtn.appendChild(detailsEditIcon);
    detailsControllers.appendChild(detailsEditBtn);
    detailsDeleteBtn.appendChild(detailsDeleteIcon);
    detailsControllers.appendChild(detailsDeleteBtn);

    return detailsControllers;
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/details-container/details-description.js":
/*!***********************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/details-container/details-description.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsDescription": () => (/* binding */ detailsDescription)
/* harmony export */ });
function detailsDescription(task) {
    const detailsDescription = document.createElement("p");
    detailsDescription.classList.add("task-details-description");
    detailsDescription.innerText = task.description;

    return detailsDescription;
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/details-container/details-list.js":
/*!****************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/details-container/details-list.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsList": () => (/* binding */ detailsList)
/* harmony export */ });
function detailsList(task) {
    const detailsList = document.createElement("div");
    detailsList.classList.add("task-details-list");

    function createItemContainer(subtaskTitle, subtaskChecked) {
        const itemContainer = document.createElement("label");
        itemContainer.classList.add("task-details-item-container");

        const checkbox = (() => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = subtaskChecked;
            checkbox.classList.add("task-details-item-checkbox");
            return checkbox;
        })();

        const checkmark = (() => {
            const checkmark = document.createElement("span");
            checkmark.classList.add("task-details-item-checkmark");
            return checkmark;
        })();

        const text = (() => {
            const text = document.createElement("span");
            text.classList.add("task-details-item-text");
            text.innerText = subtaskTitle;
            return text;
        })();

        itemContainer.appendChild(checkbox);
        itemContainer.appendChild(checkmark);
        itemContainer.appendChild(text);

        return itemContainer;
    }

    (function printSubtaskElements() {
        task.subtasks.forEach((subtask) => {
            const itemContainer = createItemContainer(
                subtask.title,
                subtask.checked
            );
            detailsList.appendChild(itemContainer);
        });
    })();

    return detailsList;
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/task-container.js":
/*!************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/task-container.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskContainer": () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _checkbox_container_checkbox_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-container/checkbox-container */ "./src/view/task-group-container/task-container/checkbox-container/checkbox-container.js");
/* harmony import */ var _details_container_details_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-container/details-container */ "./src/view/task-group-container/task-container/details-container/details-container.js");



function taskContainer(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.dataset.taskId = `task-${task.id}`;
    taskContainer.id = `task-${task.id}`;

    taskContainer.appendChild((0,_checkbox_container_checkbox_container__WEBPACK_IMPORTED_MODULE_0__.checkboxContainer)(task));

    taskContainer.appendChild((0,_details_container_details_container__WEBPACK_IMPORTED_MODULE_1__.detailsContainer)(task));

    return taskContainer;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_side_nav_side_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/side-nav/side-nav */ "./src/view/side-nav/side-nav.js");
/* harmony import */ var _db_create_populate_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db/create/populate-local-storage */ "./src/db/create/populate-local-storage.js");
/* harmony import */ var _view_task_group_container_group_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/task-group-container/group-container */ "./src/view/task-group-container/group-container.js");
/* harmony import */ var _view_task_add_container_modal_add_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/task-add-container-modal/add-container */ "./src/view/task-add-container-modal/add-container.js");
/* harmony import */ var _view_task_delete_container_modal_delete_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/task-delete-container-modal/delete-container */ "./src/view/task-delete-container-modal/delete-container.js");









(0,_view_side_nav_side_nav__WEBPACK_IMPORTED_MODULE_1__.sideNav)();
(0,_db_create_populate_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateLocalStorage)();

(0,_view_task_group_container_group_container__WEBPACK_IMPORTED_MODULE_3__.groupContainer)();
(0,_view_task_add_container_modal_add_container__WEBPACK_IMPORTED_MODULE_4__.addContainer)();
(0,_view_task_delete_container_modal_delete_container__WEBPACK_IMPORTED_MODULE_5__.deleteContainer)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RiL2NyZWF0ZS9hZGQtdGFzay10by1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvZGVmYXVsdC1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvZGVsZXRlL2RlbGV0ZS10YXNrLWZyb20tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbGFzdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi91cGRhdGUvdXBkYXRlLXRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zaWRlLW5hdi9ldmVudHMvY2xvc2Utc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zaWRlLW5hdi9ldmVudHMvc2hvdy1zaWRlLW5hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zaWRlLW5hdi9zaWRlLW5hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvYWRkLXRvcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvY2xvc2UtYnV0dG9uL2Nsb3NlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvY2xvc2UtYnV0dG9uL2ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL3RpdGxlL3RpdGxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vZHVlL2R1ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vZXZlbnRzL3Byb2Nlc3MtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vbmFtZS9uYW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9wcmlvcml0eS9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vc3VibWl0L3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vc3VidGFza3MvYWRkL2FkZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vc3VidGFza3MvbGlzdC9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJ0YXNrcy9zdWJ0YXNrcy1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2V2ZW50cy9jbG9zZS1jcmVhdGUtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2V2ZW50cy9zaG93LWNyZWF0ZS1uZXctdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvZXZlbnRzL3Rhc2stYWRkLXN1YnRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL2RlbGV0ZS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL2V2ZW50cy9jbG9zZS1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL2V2ZW50cy90YXNrLXByb2Nlc3MtZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvdGFzay1zaG93LWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvbW9kYWwvYW5zd2Vycy1jb250YWluZXIvYW5zd2Vycy1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Fuc3dlcnMtY29udGFpbmVyL25vLWJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvbW9kYWwvYW5zd2Vycy1jb250YWluZXIveWVzLWJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvbW9kYWwvY2xvc2UtYnRuL2Nsb3NlLWJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2FkZC10by1ncm91cC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9ldmVudHMvdGFzay1zaG93LWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZXZlbnRzL3Rhc2stdG9nZ2xlLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZ3JvdXAtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lci9jaGVja2JveC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyL2V2ZW50cy90b2dnbGUtdGFzay1jaGVja2VkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtY29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvdGFzay1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELCtCQUErQixrQ0FBa0Msa0NBQWtDLGtDQUFrQyxrQ0FBa0MsNEJBQTRCLDhCQUE4Qix1Q0FBdUMseUNBQXlDLEdBQUcsNEJBQTRCLDZCQUE2QixHQUFHLFVBQVUsd0JBQXdCLDZDQUE2QywrQkFBK0IsMEJBQTBCLFdBQVcsVUFBVSxnQkFBZ0IsbURBQW1ELHdCQUF3QixHQUFHLG1EQUFtRCx3QkFBd0Isd0JBQXdCLG1DQUFtQyw4QkFBOEIsV0FBVyxxQkFBcUIsMkJBQTJCLEdBQUcsWUFBWSxtQkFBbUIsaUJBQWlCLHNCQUFzQixvQ0FBb0MsR0FBRyxXQUFXLG1CQUFtQixHQUFHLHFCQUFxQixzQ0FBc0MseUJBQXlCLEdBQUcsY0FBYyw2Q0FBNkMsR0FBRyxtQkFBbUIsb0JBQW9CLHNCQUFzQixxQ0FBcUMsZ0JBQWdCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IsR0FBRyxtQkFBbUIsdUJBQXVCLHVCQUF1QixHQUFHLGlDQUFpQyx3QkFBd0IsTUFBTSx1QkFBdUIsa0JBQWtCLEdBQUcsNEJBQTRCLHlCQUF5QixxQkFBcUIsb0JBQW9CLGlCQUFpQixvQkFBb0IsMEJBQTBCLHNCQUFzQiw2Q0FBNkMsK0NBQStDLEdBQUcsZUFBZSxzQkFBc0IsaUJBQWlCLGFBQWEsY0FBYyxvQkFBb0IsOEJBQThCLG1CQUFtQixlQUFlLHlCQUF5Qix1QkFBdUIsdURBQXVELHFCQUFxQix1QkFBdUIsaUJBQWlCLEdBQUcsc0JBQXNCLG1CQUFtQiw2Q0FBNkMsaUJBQWlCLEdBQUcsb0JBQW9CLG9CQUFvQixzQkFBc0IsNkJBQTZCLDRCQUE0QixrQkFBa0IsaUJBQWlCLEdBQUcsb0JBQW9CLGlCQUFpQixzQkFBc0IsNEJBQTRCLHNCQUFzQix1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLDBCQUEwQixxQkFBcUIsNEJBQTRCLEdBQUcseUJBQXlCLDJCQUEyQixHQUFHLGtEQUFrRCw0Q0FBNEMsR0FBRywyQkFBMkIsdUJBQXVCLGlCQUFpQixHQUFHLCtCQUErQixzQkFBc0IsR0FBRyxvQ0FBb0MsMkJBQTJCLEdBQUcsMkJBQTJCLHlCQUF5Qix1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQixHQUFHLFFBQVEseUJBQXlCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsNEJBQTRCLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIseUJBQXlCLGtCQUFrQixvQkFBb0IsNEJBQTRCLHFEQUFxRCxHQUFHLG9CQUFvQix5QkFBeUIsZUFBZSxvQkFBb0IsR0FBRyxxQkFBcUIscUJBQXFCLGtCQUFrQixtQkFBbUIsMkJBQTJCLDBCQUEwQixvQ0FBb0MsR0FBRywrQ0FBK0Msb0RBQW9ELEdBQUcsK0NBQStDLG9EQUFvRCxHQUFHLCtDQUErQyxvREFBb0QsR0FBRywrQ0FBK0Msb0RBQW9ELEdBQUcsOENBQThDLDBDQUEwQyxzQ0FBc0MsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsMENBQTBDLCtCQUErQixvQ0FBb0MsR0FBRyw0QkFBNEIseUJBQXlCLGtCQUFrQixHQUFHLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixrQkFBa0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsdURBQXVELDJEQUEyRCxpQkFBaUIsZ0NBQWdDLEdBQUcsb0NBQW9DLDhCQUE4QiwyQkFBMkIsMEJBQTBCLGlCQUFpQixHQUFHLCtCQUErQixrQkFBa0IscUJBQXFCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixHQUFHLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLCtCQUErQixvQkFBb0IsZ0NBQWdDLEdBQUcsdURBQXVELDBCQUEwQixHQUFHLDRGQUE0RixzQkFBc0IsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsa0NBQWtDLG9CQUFvQix5QkFBeUIsNEJBQTRCLEdBQUcsa0NBQWtDLHFCQUFxQixrQkFBa0IsbUJBQW1CLDJCQUEyQiwwQkFBMEIsbUNBQW1DLEdBQUcsaUNBQWlDLHlCQUF5QixvQkFBb0IsR0FBRyx3RUFBd0UsMENBQTBDLHNDQUFzQyxHQUFHLG1FQUFtRSwrQkFBK0Isb0NBQW9DLEdBQUcsaUNBQWlDLG9CQUFvQixHQUFHLDRCQUE0QixzQkFBc0IsMkJBQTJCLEdBQUcsOERBQThELHNCQUFzQixpQkFBaUIsYUFBYSxjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQ0FBaUMsMEJBQTBCLHFDQUFxQyxHQUFHLDRFQUE0RSx1QkFBdUIsd0JBQXdCLEdBQUcsMENBQTBDLHlCQUF5QixpQkFBaUIsaUJBQWlCLDBCQUEwQixtQkFBbUIsb0JBQW9CLDRCQUE0QixxREFBcUQsbUNBQW1DLGlDQUFpQywrQkFBK0IsR0FBRywyQkFBMkIsWUFBWSxzQkFBc0IscUJBQXFCLE9BQU8sVUFBVSxpQkFBaUIscUJBQXFCLE9BQU8sR0FBRyx3QkFBd0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsNEJBQTRCLHFDQUFxQyxzQkFBc0IsOEJBQThCLEdBQUcsb0NBQW9DLG9CQUFvQiw4QkFBOEIsR0FBRyw0QkFBNEIseUJBQXlCLGdCQUFnQixrQkFBa0IsR0FBRyxpQ0FBaUMsc0JBQXNCLEdBQUcsNkJBQTZCLDRCQUE0QixHQUFHLHFCQUFxQixzQkFBc0IseUJBQXlCLEdBQUcsZ0dBQWdHLGtCQUFrQix1QkFBdUIsc0JBQXNCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLEdBQUcsa0NBQWtDLHlCQUF5QiwwQkFBMEIsR0FBRyxzQ0FBc0MseUJBQXlCLDRCQUE0QixHQUFHLGtDQUFrQyw0QkFBNEIsR0FBRyxtQ0FBbUMseUJBQXlCLGVBQWUsZ0JBQWdCLG9CQUFvQixzQkFBc0IsMEJBQTBCLGtCQUFrQixnQ0FBZ0MsNENBQTRDLHdCQUF3QixHQUFHLHdDQUF3QyxzQkFBc0IsR0FBRyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHFDQUFxQyxvQkFBb0Isb0NBQW9DLHFCQUFxQixHQUFHLHVDQUF1Qyx5QkFBeUIsaUJBQWlCLEdBQUcsc0NBQXNDLHlCQUF5QixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLDRCQUE0QixxQkFBcUIsR0FBRyxpQkFBaUIsb0RBQW9ELEdBQUcsNERBQTRELGdEQUFnRCxHQUFHLGlCQUFpQixvREFBb0QsR0FBRyw0REFBNEQsZ0RBQWdELEdBQUcsaUJBQWlCLG9EQUFvRCxHQUFHLDREQUE0RCxnREFBZ0QsR0FBRyxpQkFBaUIsb0RBQW9ELEdBQUcsNERBQTRELGdEQUFnRCxHQUFHLGlFQUFpRSxrQ0FBa0MsR0FBRyxvREFBb0Qsa0JBQWtCLHNCQUFzQiwwQkFBMEIsNkNBQTZDLGtCQUFrQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixxQkFBcUIsT0FBTyxLQUFLLG9CQUFvQixhQUFhLGFBQWEsT0FBTyxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFN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dkNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DNEU7QUFDSDs7QUFFbEU7QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQsK0JBQStCLFFBQVE7O0FBRXZDLDhCQUE4Qix5RkFBaUI7O0FBRS9DLDhCQUE4QixzRkFBZ0I7O0FBRTlDO0FBQ0E7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRThCO0FBQ3VCOztBQUVHO0FBQ0E7QUFDUzs7QUFFdEYsZ0VBQU87QUFDUCx1RkFBb0I7O0FBRXBCLDBGQUFjO0FBQ2QsMEZBQVk7QUFDWixtR0FBZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI4NzZiZTtcXG4gICAgLS1jb2xvci1wcmlvcml0eS0xOiAjY2EyYzJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTI6ICNjYTgwMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMzogIzNmNmRjMjtcXG4gICAgLS1jb2xvci1wcmlvcml0eS00OiAjNzAyY2NhO1xcbiAgICAtLWNvbG9yLWdyZXk6ICM3YTdhN2E7XFxuICAgIC0tY29sb3Itc2hhZG93OiAjYTVhNWE1O1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeTogI2U2ZTZlNjtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnRvcC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0LWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b3AtbmF2LWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwOyAqL1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtLWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRkLXRhc2stZmxvYXRpbmctYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEuM3JlbTtcXG4gICAgcmlnaHQ6IDEuM3JlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzI1MjUyNTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1hY3RpdmUge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAzcHggIzI1MjUyNThhO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2lkZS1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbTpob3ZlcixcXG4uc2lkZS1uYXYtaXRlbS1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxufVxcblxcbi50YXNrcy1ncm91cC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS00IHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLXNob3ctZGV0YWlscy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC41cmVtIHZhcigtLWNvbG9yLXNoYWRvdyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0bixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4sXFxuLnRhc2stYWRkLWNsb3NlLWJ0biBzcGFuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXIsXFxuLnRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDViO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSxcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwsXFxuLnRhc2stZGVsZXRlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzVjNWM1YztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0zMDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbSAzcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDAgMCAxLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1kZXNjcmlwdGlvbixcXG4udGFzay1hZGQtbmFtZSxcXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0LFxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU5NGI4O1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMDAwO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWR1ZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcblxcbi8qIFxcbi50YXNrLWFkZC1kdWUtdGV4dCB7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufSAqL1xcblxcbi50YXNrLWFkZC1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi5wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjMDAwO1xcbn1cXG5cXG4udGFzay1hZGQtc3VibWl0LWJ0bixcXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0FBQ3RDOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07SUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixXQUFXLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTtJQUNJLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7O0FBRUE7Ozs7O0lBS0ksaUJBQWlCLEVBQUUsTUFBTTtJQUN6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OztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI4NzZiZTtcXG4gICAgLS1jb2xvci1wcmlvcml0eS0xOiAjY2EyYzJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTI6ICNjYTgwMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMzogIzNmNmRjMjtcXG4gICAgLS1jb2xvci1wcmlvcml0eS00OiAjNzAyY2NhO1xcbiAgICAtLWNvbG9yLWdyZXk6ICM3YTdhN2E7XFxuICAgIC0tY29sb3Itc2hhZG93OiAjYTVhNWE1O1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeTogI2U2ZTZlNjtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnRvcC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0LWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b3AtbmF2LWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwOyAqL1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtLWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRkLXRhc2stZmxvYXRpbmctYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEuM3JlbTtcXG4gICAgcmlnaHQ6IDEuM3JlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzI1MjUyNTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1hY3RpdmUge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAzcHggIzI1MjUyNThhO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2lkZS1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbTpob3ZlcixcXG4uc2lkZS1uYXYtaXRlbS1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxufVxcblxcbi50YXNrcy1ncm91cC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS00IHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLXNob3ctZGV0YWlscy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC41cmVtIHZhcigtLWNvbG9yLXNoYWRvdyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0bixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4sXFxuLnRhc2stYWRkLWNsb3NlLWJ0biBzcGFuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXIsXFxuLnRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDViO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSxcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwsXFxuLnRhc2stZGVsZXRlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzVjNWM1YztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0zMDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbSAzcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDAgMCAxLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1kZXNjcmlwdGlvbixcXG4udGFzay1hZGQtbmFtZSxcXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0LFxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU5NGI4O1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMDAwO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWR1ZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcblxcbi8qIFxcbi50YXNrLWFkZC1kdWUtdGV4dCB7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufSAqL1xcblxcbi50YXNrLWFkZC1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi5wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjMDAwO1xcbn1cXG5cXG4udGFzay1hZGQtc3VibWl0LWJ0bixcXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc2F2ZS1pbi1sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UodGFzaykge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG5cbiAgICBsaXN0LnB1c2godGFzayk7XG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCk7XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdExpc3QgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiQnV5IHBpenphIGluZ3JlZGllbnRzXCIsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMZW5ueSBkb2Vzbid0IGxpa2UgYW5jaG92aWVzIVwiLFxuICAgICAgICBzdWJ0YXNrczogW1xuICAgICAgICAgICAgeyB0aXRsZTogXCJDaGVlc2VcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVG9tYXRvXCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiT2xpdmVzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yM1wiLFxuICAgICAgICBwcmlvcml0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIkRvIGxhdW5kcnlcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBzdWJ0YXNrczogW10sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yM1wiLFxuICAgICAgICBwcmlvcml0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIkZpbmlzaCBwcm9qZWN0XCIsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb24ndCBmb3JnZXQgdG8gdXNlIFBvbW9kb3JvIFRpbWVyXCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkFkZCBmYW5jeSBhbmltYXRpb25zXCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiUmV2aWV3IFNPTElEIHByaW5jaXBsZXNcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRml4IGJ1Z3NcIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjEtMDctMjNcIixcbiAgICAgICAgcHJpb3JpdHk6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogXCJNYWtlIGJyZWFkXCIsXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZSBvbGl2ZSBvaWw/XCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkJ1eSB5ZWFzdFwiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlRyeSBuZXcgcmVjaXBlXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yOFwiLFxuICAgICAgICBwcmlvcml0eTogMixcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGRlZmF1bHRMaXN0IH0gZnJvbSBcIi4vZGVmYXVsdC1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0XCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhbHRMaXN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgZGVmYWx0TGlzdEpTT04pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVJbkxvY2FsU3RvcmFnZShsaXN0KSB7XG4gICAgY29uc3QgbGlzdEpTT04gPSBKU09OLnN0cmluZ2lmeShsaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgbGlzdEpTT04pO1xufVxuIiwiaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NyZWF0ZS9zYXZlLWluLWxvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0YXNrSWQpIHtcbiAgICBjb25zdCBsaXN0ID0gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpO1xuICAgIHRhc2tJZCA9IE51bWJlcih0YXNrSWQpO1xuXG4gICAgY29uc3QgdG9EZWxldGVJZGV4ID0gbGlzdC5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICBsaXN0LnNwbGljZSh0b0RlbGV0ZUlkZXgsIDEpO1xuXG4gICAgc2F2ZUluTG9jYWxTdG9yYWdlKGxpc3QpO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlTGlzdCB9IGZyb20gXCIuL2dldC1sb2NhbC1zdG9yYWdlLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RJZCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpO1xuXG4gICAgY29uc3QgbGFzdElkID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLmlkO1xuXG4gICAgcmV0dXJuIGxhc3RJZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VMaXN0KCkge1xuICAgIGNvbnN0IHN0b3JlZExpc3RKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0XCIpO1xuICAgIGNvbnN0IHN0b3JlZExpc3QgPSBKU09OLnBhcnNlKHN0b3JlZExpc3RKU09OKTtcbiAgICByZXR1cm4gc3RvcmVkTGlzdDtcbn1cbiIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5pbXBvcnQgeyBzYXZlSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxTdG9yYWdlVXBkYXRlVGFza0NoZWNrZWQodGFza0lkKSB7XG4gICAgdGFza0lkID0gTnVtYmVyKHRhc2tJZFt0YXNrSWQubGVuZ3RoIC0gMV0pO1xuXG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGNvbnN0IHRhc2tUb1VwZGF0ZUluZGV4ID0gbGlzdC5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICBsaXN0W3Rhc2tUb1VwZGF0ZUluZGV4XS5jaGVja2VkID0gIWxpc3RbdGFza1RvVXBkYXRlSW5kZXhdLmNoZWNrZWQ7XG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNpZGVOYXZDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXYtY2xvc2UtYnRuXCIpO1xuXG4gICAgc2lkZU5hdkNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVNpZGVOYXYpO1xuXG4gICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXZcIik7XG5cbiAgICBmdW5jdGlvbiBjbG9zZVNpZGVOYXYoKSB7XG4gICAgICAgIHNpZGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcInNpZGUtbmF2LWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzaG93U2lkZU5hdiB9IGZyb20gXCIuL3Nob3ctc2lkZS1uYXZcIjtcbmltcG9ydCB7IGNsb3NlU2lkZU5hdiB9IGZyb20gXCIuL2Nsb3NlLXNpZGUtbmF2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgc2hvd1NpZGVOYXYoKTtcbiAgICBjbG9zZVNpZGVOYXYoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZU5hdigpIHtcbiAgICBjb25zdCBzaWRlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hdi1idG5cIik7XG5cbiAgICBzaWRlTmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93KTtcblxuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwic2lkZS1uYXYtYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVOYXYoKSB7XG4gICAgZXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyBhZGRNb2RhbCB9IGZyb20gXCIuL2FkZC1tb2RhbC9hZGQtbW9kYWxcIjtcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRNb2RhbCgpKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQ29udGFpbmVyKTtcbiAgICBldmVudHMoKTtcbn1cbiIsImltcG9ydCB7IGFkZFRvcCB9IGZyb20gXCIuL2FkZC10b3AvYWRkLXRvcFwiO1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm0vZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWwoKSB7XG4gICAgY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbFwiKTtcbiAgICBhZGRNb2RhbC5hcHBlbmRDaGlsZChhZGRUb3AoKSk7XG4gICAgYWRkTW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSgpKTtcbiAgICByZXR1cm4gYWRkTW9kYWw7XG59XG4iLCJpbXBvcnQgeyBjbG9zZUJ1dHRvbiB9IGZyb20gXCIuL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b25cIjtcbmltcG9ydCB7IHRpdGxlIH0gZnJvbSBcIi4vdGl0bGUvdGl0bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvcCgpIHtcbiAgICBjb25zdCBhZGRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvcC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdG9wXCIpO1xuICAgIGFkZFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbigpKTtcbiAgICBhZGRUb3AuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgcmV0dXJuIGFkZFRvcDtcbn1cbiIsImltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWNsb3NlLWJ0blwiKTtcbiAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKCkpO1xuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpY29uKCkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcbiAgICByZXR1cm4gaWNvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0aXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJOZXcgdGFza1wiO1xuICAgIHJldHVybiB0aXRsZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCI7XG4gICAgZGVzY3JpcHRpb24ubmFtZSA9IFwibmV3LXRhc2stZGVzY3JpcHRpb25cIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVlKCkge1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtZHVlLWRhdGVcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGlucHV0Lm5hbWUgPSBcIm5ldy10YXNrLWR1ZS1kYXRlXCI7XG5cbiAgICBkdWUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGR1ZTtcbn1cbiIsImltcG9ydCB7IGdldExhc3RJZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYi9yZWFkL2dldC1sYXN0LWlkXCI7XG5pbXBvcnQgeyBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vZGIvY3JlYXRlL2FkZC10YXNrLXRvLWxvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGb3JtKFxuICAgIGUsXG4gICAgdGFza05hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgc3VidGFza3NDb250YWluZXIsXG4gICAgZHVlLFxuICAgIHByaW9yaXR5XG4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTmFtZS52YWx1ZSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbi52YWx1ZSk7XG5cbiAgICBjb25zdCBsYXN0SWQgPSBnZXRMYXN0SWQoKTtcblxuICAgIGNvbnN0IHN1YnRhc2tzID0gc3VidGFza3NDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXM7XG4gICAgY29uc3Qgc3VidGFza3NQcm9jZXNzZWQgPSBbXTtcbiAgICBzdWJ0YXNrcy5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICAgIGlmIChzdWJ0YXNrLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJ0YXNrUHJvY2Vzc2VkID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdWJ0YXNrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnRhc2tzUHJvY2Vzc2VkLnB1c2goc3VidGFza1Byb2Nlc3NlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VidGFzay52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmRpcihkdWUuY2hpbGROb2Rlc1swXS52YWx1ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxldmVscyA9IHByaW9yaXR5LmNoaWxkTm9kZXM7XG5cbiAgICBsZXQgcHJpb3JpdHlMZXZlbFByb2Nlc3NlZDtcbiAgICBwcmlvcml0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gbGV2ZWwuY2hpbGROb2Rlc1swXS5jaGVja2VkO1xuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoY2hlY2tlZCk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxldmVsID0gbGV2ZWwuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3RbMV07XG4gICAgICAgICAgICBwcmlvcml0eUxldmVsUHJvY2Vzc2VkID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGV2ZWxbcHJpb3JpdHlMZXZlbC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHByaW9yaXR5TGV2ZWwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogbGFzdElkICsgMSxcbiAgICAgICAgdGl0bGU6IHRhc2tOYW1lLnZhbHVlLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICBzdWJ0YXNrczogc3VidGFza3NQcm9jZXNzZWQsXG4gICAgICAgIGR1ZURhdGU6IGR1ZS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5TGV2ZWxQcm9jZXNzZWQsXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgIGFkZFRhc2tUb0xvY2FsU3RvcmFnZShuZXdUYXNrKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5hbWUgfSBmcm9tIFwiLi9uYW1lL25hbWVcIjtcbmltcG9ydCB7IGNyZWF0ZURlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZGVzY3JpcHRpb24vZGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZVN1YnRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vc3VidGFza3Mvc3VidGFza3MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVEdWUgfSBmcm9tIFwiLi9kdWUvZHVlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5L3ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzdWJtaXQgfSBmcm9tIFwiLi9zdWJtaXQvc3VibWl0XCI7XG5pbXBvcnQgeyBwcm9jZXNzRm9ybSB9IGZyb20gXCIuL2V2ZW50cy9wcm9jZXNzLWZvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWZvcm1cIik7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGNyZWF0ZU5hbWUoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHN1YnRhc2tzQ29udGFpbmVyID0gY3JlYXRlU3VidGFza3NDb250YWluZXIoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1YnRhc2tzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGR1ZSA9IGNyZWF0ZUR1ZSgpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlUHJpb3JpdHkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KCkpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIHByb2Nlc3NGb3JtKGUsIHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgc3VidGFza3NDb250YWluZXIsIGR1ZSwgcHJpb3JpdHkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLW5hbWVcIik7XG4gICAgbmFtZS5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xuICAgIG5hbWUubmFtZSA9IFwibmV3LXRhc2stbmFtZVwiO1xuICAgIHJldHVybiBuYW1lO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5KCkge1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtcHJpb3JpdHktY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gWzEsIDIsIDMsIDRdO1xuXG4gICAgbGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtcHJpb3JpdHktaXRlbS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94XCIpO1xuICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICBpbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktc2VsZWN0b3JcIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtsZXZlbH1gKTtcblxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmlvcml0eTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJtaXQtYnRuXCIpO1xuICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcIkFkZFwiO1xuXG4gICAgcmV0dXJuIHN1Ym1pdDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGQoKSB7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXItY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXJcIik7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBcImFkZFwiO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGFkZC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGFkZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2tzLWxpc3RcIik7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJTdWJ0YXNrIChvcHRpb25hbClcIjtcbiAgICBpbnB1dC5uYW1lID0gXCJuZXctc3VidGFzay1uYW1lLTFcIjtcblxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59XG4iLCJpbXBvcnQgeyBsaXN0IH0gZnJvbSBcIi4vbGlzdC9saXN0XCI7XG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi9hZGQvYWRkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdWJ0YXNrc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VidGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lclwiKTtcblxuICAgIHN1YnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QoKSk7XG4gICAgc3VidGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkKCkpO1xuICAgIHJldHVybiBzdWJ0YXNrc0NvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbG9zZUNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza0Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1jbG9zZS1idG5cIik7XG4gICAgYWRkVGFza0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG5cbiAgICBjb25zdCB0YXNrQWRkTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1tb2RhbC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgdGFza0FkZE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICBcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0YXNrQWRkTW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRhc2tBZGRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgICAgIFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBzaG93Q3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL3Nob3ctY3JlYXRlLW5ldy10YXNrXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9jbG9zZS1jcmVhdGUtbmV3LXRhc2tcIjtcbmltcG9ydCB7IGFkZFN1YnRhc2sgfSBmcm9tIFwiLi90YXNrLWFkZC1zdWJ0YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgc2hvd0NyZWF0ZU5ld1Rhc2soKTtcbiAgICBjbG9zZUNyZWF0ZU5ld1Rhc2soKTtcbiAgICBhZGRTdWJ0YXNrKCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZU5ld1Rhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZmxvYXRpbmctYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3cpO1xuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgY29uc3QgYWRkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0YXNrKCkge1xuICAgIGNvbnN0IGFkZFN1YnRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyXCJcbiAgICApO1xuICAgIGFkZFN1YnRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZCk7XG5cbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICBsZXQgc3VidGFza0NvdW50ZXIgPSAyO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICBpZiAoc3VidGFza0NvdW50ZXIgPCA1KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdWJ0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5wbGFjZWhvbGRlciA9IFwiU3VidGFzayAob3B0aW9uYWwpXCI7XG4gICAgICAgICAgICBuZXdTdWJ0YXNrLm5hbWUgPSBgbmV3LXN1YnRhc2stbmFtZS0ke3N1YnRhc2tDb3VudGVyfWA7XG4gICAgICAgICAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdTdWJ0YXNrKTtcbiAgICAgICAgICAgIHN1YnRhc2tDb3VudGVyKys7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb250YWluZXIodGFza0lkKSB7XG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAvLyBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG5cbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwoKSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZUNvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VEZWxldGUoKSB7XG4gICAgY29uc3QgZGVsZXRlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgZGVsZXRlQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xufVxuIiwiaW1wb3J0IHsgdGFza1Nob3dEZWxldGUgfSBmcm9tIFwiLi90YXNrLXNob3ctZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgdGFza1Nob3dEZWxldGUoKTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uLy4uL2RiL2RlbGV0ZS9kZWxldGUtdGFzay1mcm9tLWxvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tQcm9jZXNzRGVsZXRlKGUpIHtcbiAgICAvLyBmdW5jdGlvbiBmaW5kUGFyZW50KHNvdXJjZSwgZmlsdGVyKSB7XG4gICAgLy8gICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gICAgIHdoaWxlIChzb3VyY2UgIT0gcm9vdCkge1xuICAgIC8vICAgICAgICAgaWYgKGZpbHRlcihzb3VyY2UpKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHNvdXJjZSA9IHNvdXJjZS5wYXJlbnROb2RlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdGFza0lkID0gZmluZFBhcmVudChlLnRhcmdldCwgKGVsZW0pID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGVsZW0uZGF0YXNldC50YXNrSWQ7XG4gICAgLy8gfSkuZGF0YXNldC50YXNrSWQ7XG5cbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmRlbGV0ZTtcblxuICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7dGFza0lkfWApO1xuICAgIHRhc2tUb0RlbGV0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG5cbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0YXNrSWQpO1xufVxuIiwiLy8gaW1wb3J0IHsgdGFza1Byb2Nlc3NEZWxldGUgfSBmcm9tIFwiLi90YXNrLXByb2Nlc3MtZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrU2hvd0RlbGV0ZShlKSB7XG4gICAgY29uc3QgZGVsZXRlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgZGVsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIGRlbGV0ZUJveC5kYXRhc2V0LmRlbGV0ZSA9IGUudGFyZ2V0LmRhdGFzZXQuZGVsZXRlO1xuXG4gICAgLy8gY29uc3QgZGVsZXRlVHJ1ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLXRydWVcIik7XG4gICAgLy8gZGVsZXRlVHJ1ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICB0YXNrUHJvY2Vzc0RlbGV0ZShlKTtcbiAgICAvLyAgICAgdGFza0Nsb3NlRGVsZXRlKCk7XG4gICAgLy8gLy8gfSk7XG5cbiAgICAvLyAvLyBjb25zdCBkZWxldGVGYWxzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWZhbHNlXCIpO1xuICAgIC8vIC8vIGRlbGV0ZUZhbHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ2xvc2VEZWxldGUpO1xuXG4gICAgLy8gY29uc3QgZGVsZXRlQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlLWNsb3NlLWJ0blwiKTtcbiAgICAvLyBkZWxldGVDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0Nsb3NlRGVsZXRlKTtcblxuICAgIC8vIGZ1bmN0aW9uIHRhc2tDbG9zZURlbGV0ZSgpIHtcbiAgICAvLyAgICAgZGVsZXRlQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIC8vIH1cbn1cbiIsImltcG9ydCB7IHllc0J0biB9IGZyb20gXCIuL3llcy1idG5cIjtcbmltcG9ydCB7IG5vQnRuIH0gZnJvbSBcIi4vbm8tYnRuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbnN3ZXJzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuc3dlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWFuc3dlcnMtY29udGFpbmVyXCIpO1xuXG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4oKSk7XG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub0J0bigpKTtcblxuICAgIHJldHVybiBhbnN3ZXJzQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VEZWxldGUgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2Nsb3NlLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9CdG4oKSB7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXItYnRuXCIpO1xuICAgIG5vQnRuLmlkID0gXCJkZWxldGUtZmFsc2VcIjtcbiAgICBub0J0bi5pbm5lclRleHQgPSBcIk5vXCI7XG4gICAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGVsZXRlKTtcblxuICAgIHJldHVybiBub0J0bjtcbn1cbiIsImltcG9ydCB7IHRhc2tQcm9jZXNzRGVsZXRlIH0gZnJvbSBcIi4uLy4uL2V2ZW50cy90YXNrLXByb2Nlc3MtZGVsZXRlXCI7XG5pbXBvcnQgeyBjbG9zZURlbGV0ZSB9IGZyb20gXCIuLi8uLi9ldmVudHMvY2xvc2UtZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXNCdG4oKSB7XG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWFuc3dlci1idG5cIik7XG4gICAgeWVzQnRuLmlkID0gXCJkZWxldGUtdHJ1ZVwiO1xuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllc1wiO1xuXG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrUHJvY2Vzc0RlbGV0ZShlKTtcbiAgICAgICAgY2xvc2VEZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB5ZXNCdG47XG59XG4iLCJpbXBvcnQgeyBjbG9zZURlbGV0ZSB9IGZyb20gXCIuLi8uLi9ldmVudHMvY2xvc2UtZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ0bigpIHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWNsb3NlLWJ0blwiKTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcblxuICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURlbGV0ZSk7XG5cbiAgICByZXR1cm4gY2xvc2VCdG47XG59XG4iLCJpbXBvcnQgeyBjbG9zZUJ0biB9IGZyb20gXCIuL2Nsb3NlLWJ0bi9jbG9zZS1idG5cIjtcbmltcG9ydCB7IHF1ZXN0aW9uIH0gZnJvbSBcIi4vcXVlc3Rpb24vcXVlc3Rpb25cIjtcbmltcG9ydCB7IGFuc3dlcnNDb250YWluZXIgfSBmcm9tIFwiLi9hbnN3ZXJzLWNvbnRhaW5lci9hbnN3ZXJzLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHF1ZXN0aW9uKCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGFuc3dlcnNDb250YWluZXIoKSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcXVlc3Rpb24oKSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1xdWVzdGlvblwiKTtcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPSBcIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCI7XG5cbiAgICByZXR1cm4gcXVlc3Rpb247XG59XG4iLCJpbXBvcnQgeyB0YXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFzay1jb250YWluZXIvdGFzay1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvR3JvdXBDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IHRhc2tzR3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrcy1ncm91cC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrc0dyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIodGFzaykpO1xufVxuIiwiaW1wb3J0IHsgdGFza1RvZ2dsZURldGFpbHMgfSBmcm9tIFwiLi90YXNrLXRvZ2dsZS1kZXRhaWxzXCI7XG5pbXBvcnQgeyB0YXNrU2hvd0VkaXREZXRhaWxzIH0gZnJvbSBcIi4vdGFzay1zaG93LWVkaXRcIjtcbmltcG9ydCB7IHRhc2tTaG93RGVsZXRlIH0gZnJvbSBcIi4uLy4uL3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvdGFzay1zaG93LWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIGNvbnN0IHRhc2tzR3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrcy1ncm91cC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrc0dyb3VwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgc3dpdGNoICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIjpcbiAgICAgICAgICAgICAgICB0YXNrVG9nZ2xlRGV0YWlscyhlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIjpcbiAgICAgICAgICAgICAgICB0YXNrU2hvd0VkaXREZXRhaWxzKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRhc2stZGV0YWlscy1kZWxldGUtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1Nob3dEZWxldGUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGFza1Nob3dFZGl0RGV0YWlscyhlKSB7XG4gICAgY29uc3QgdGFza0FkZE1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgdGFza0FkZE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRhc2tUb2dnbGVEZXRhaWxzKGUpIHtcbiAgICB0b2dnbGVEZXRhaWxzKGUpO1xuICAgIHRvZ2dsZUJ0bkljb24oZSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVEZXRhaWxzKGUpIHtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHNDb250YWluZXIgPVxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRhc2tEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWRldGFpbHMtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCdG5JY29uKGUpIHtcbiAgICAgICAgY29uc3QgdGFza1Nob3dEZXRhaWxzQnRuID0gZS50YXJnZXQucGFyZW50Tm9kZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB0YXNrU2hvd0RldGFpbHNCdG4uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIHRhc2tTaG93RGV0YWlsc0J0bi5pbm5lclRleHQgPT09IFwiZXhwYW5kX21vcmVcIlxuICAgICAgICAgICAgICAgID8gXCJleHBhbmRfbGVzc1wiXG4gICAgICAgICAgICAgICAgOiBcImV4cGFuZF9tb3JlXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYWRkVG9Hcm91cENvbnRhaW5lciB9IGZyb20gXCIuL2FkZC10by1ncm91cC1jb250YWluZXJcIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vLi4vZGIvcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBzdG9yZWRMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpO1xuXG4gICAgc3RvcmVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGFkZFRvR3JvdXBDb250YWluZXIodGFzayk7XG4gICAgfSk7XG5cbiAgICBldmVudHMoKTtcbn1cbiIsImltcG9ydCB7IHRvZ2dsZVRhc2tDaGVja2VkIH0gZnJvbSBcIi4vZXZlbnRzL3RvZ2dsZS10YXNrLWNoZWNrZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrYm94Q29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBjaGVja2JveCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jaGVja2VkO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2dnbGVUYXNrQ2hlY2tlZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjaGVja21hcmsgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrbWFya1wiKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoYHRhc2stY2hlY2ttYXJrLXByaW9yaXR5LSR7dGFzay5wcmlvcml0eX1gKTtcbiAgICAgICAgcmV0dXJuIGNoZWNrbWFyaztcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzaG93RGV0YWlsc0J0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3dEZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2hvd0RldGFpbHNCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1zaG93LWRldGFpbHMtYnRuXCIpO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1zaG93LWRldGFpbHMtYnRuXCI7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmlubmVyVGV4dCA9IFwiZXhwYW5kX21vcmVcIjtcbiAgICAgICAgcmV0dXJuIHNob3dEZXRhaWxzQnRuO1xuICAgIH0pKCk7XG5cbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd0RldGFpbHNCdG4pO1xuXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlVXBkYXRlVGFza0NoZWNrZWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vZGIvdXBkYXRlL3VwZGF0ZS10YXNrLWNoZWNrZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhc2tDaGVja2VkKGUpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgbG9jYWxTdG9yYWdlVXBkYXRlVGFza0NoZWNrZWQodGFza0lkKTtcbn1cbiIsImltcG9ydCB7IGRldGFpbHNDb250cm9sbGVycyB9IGZyb20gXCIuL2RldGFpbHMtY29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGRldGFpbHNEZXNjcmlwdGlvbiB9IGZyb20gXCIuL2RldGFpbHMtZGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IGRldGFpbHNMaXN0IH0gZnJvbSBcIi4vZGV0YWlscy1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRhaWxzQ29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtY29udGFpbmVyXCIpO1xuICAgIGRldGFpbHNDb250YWluZXIuZGF0YXNldC50YXJnZXQgPSBcInRhc2stZGV0YWlscy1jb250YWluZXJcIjtcblxuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRyb2xsZXJzKHRhc2spKTtcblxuICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rlc2NyaXB0aW9uKHRhc2spKTtcbiAgICB9XG4gICAgaWYgKHRhc2suc3VidGFza3MpIHtcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzTGlzdCh0YXNrKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRldGFpbHNDb250YWluZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0NvbnRyb2xsZXJzKHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzQ29udHJvbGxlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNDb250cm9sbGVycy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzXCIpO1xuXG4gICAgY29uc3QgZGV0YWlsc0VkaXRCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRldGFpbHNFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIik7XG4gICAgICAgIHJldHVybiBkZXRhaWxzRWRpdEJ0bjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZGV0YWlsc0VkaXRJY29uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0VkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1kZXRhaWxzLWVkaXQtYnRuXCI7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5pbm5lclRleHQgPSBcImVkaXRcIjtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNFZGl0SWNvbjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZGV0YWlsc0RlbGV0ZUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZXRhaWxzRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNEZWxldGVCdG47XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRldGFpbHNEZWxldGVJY29uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1kZXRhaWxzLWRlbGV0ZS1idG5cIjtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUljb24uZGF0YXNldC5kZWxldGUgPSBgJHt0YXNrLmlkfWA7XG4gICAgICAgIGRldGFpbHNEZWxldGVJY29uLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG4gICAgICAgIHJldHVybiBkZXRhaWxzRGVsZXRlSWNvbjtcbiAgICB9KSgpO1xuXG4gICAgZGV0YWlsc0VkaXRCdG4uYXBwZW5kQ2hpbGQoZGV0YWlsc0VkaXRJY29uKTtcbiAgICBkZXRhaWxzQ29udHJvbGxlcnMuYXBwZW5kQ2hpbGQoZGV0YWlsc0VkaXRCdG4pO1xuICAgIGRldGFpbHNEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGV0YWlsc0RlbGV0ZUljb24pO1xuICAgIGRldGFpbHNDb250cm9sbGVycy5hcHBlbmRDaGlsZChkZXRhaWxzRGVsZXRlQnRuKTtcblxuICAgIHJldHVybiBkZXRhaWxzQ29udHJvbGxlcnM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0Rlc2NyaXB0aW9uKHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXRhaWxzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXRhaWxzRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiBkZXRhaWxzRGVzY3JpcHRpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0xpc3QodGFzaykge1xuICAgIGNvbnN0IGRldGFpbHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWxpc3RcIik7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ29udGFpbmVyKHN1YnRhc2tUaXRsZSwgc3VidGFza0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdWJ0YXNrQ2hlY2tlZDtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjaGVja21hcmsgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFya1wiKTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja21hcms7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS10ZXh0XCIpO1xuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSBzdWJ0YXNrVGl0bGU7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xuICAgIH1cblxuICAgIChmdW5jdGlvbiBwcmludFN1YnRhc2tFbGVtZW50cygpIHtcbiAgICAgICAgdGFzay5zdWJ0YXNrcy5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gY3JlYXRlSXRlbUNvbnRhaW5lcihcbiAgICAgICAgICAgICAgICBzdWJ0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgIHN1YnRhc2suY2hlY2tlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRldGFpbHNMaXN0LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIGRldGFpbHNMaXN0O1xufVxuIiwiaW1wb3J0IHsgY2hlY2tib3hDb250YWluZXIgfSBmcm9tIFwiLi9jaGVja2JveC1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBkZXRhaWxzQ29udGFpbmVyIH0gZnJvbSBcIi4vZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgIHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQgPSBgdGFzay0ke3Rhc2suaWR9YDtcbiAgICB0YXNrQ29udGFpbmVyLmlkID0gYHRhc2stJHt0YXNrLmlkfWA7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKHRhc2spKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcih0YXNrKSk7XG5cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBzaWRlTmF2IH0gZnJvbSBcIi4vdmlldy9zaWRlLW5hdi9zaWRlLW5hdlwiO1xuaW1wb3J0IHsgcG9wdWxhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZVwiO1xuXG5pbXBvcnQgeyBncm91cENvbnRhaW5lciB9IGZyb20gXCIuL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZ3JvdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBhZGRDb250YWluZXIgfSBmcm9tIFwiLi92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBkZWxldGVDb250YWluZXIgfSBmcm9tIFwiLi92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9kZWxldGUtY29udGFpbmVyXCI7XG5cbnNpZGVOYXYoKTtcbnBvcHVsYXRlTG9jYWxTdG9yYWdlKCk7XG5cbmdyb3VwQ29udGFpbmVyKCk7XG5hZGRDb250YWluZXIoKTtcbmRlbGV0ZUNvbnRhaW5lcigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==