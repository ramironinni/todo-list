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

/***/ "./src/view/task/add-container/add-container.js":
/*!******************************************************!*\
  !*** ./src/view/task/add-container/add-container.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addContainer": () => (/* binding */ addContainer)
/* harmony export */ });
/* harmony import */ var _add_modal_add_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-modal/add-modal */ "./src/view/task/add-container/add-modal/add-modal.js");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/events */ "./src/view/task/add-container/events/events.js");



function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild((0,_add_modal_add_modal__WEBPACK_IMPORTED_MODULE_0__.addModal)());

    document.body.appendChild(addContainer);
    (0,_events_events__WEBPACK_IMPORTED_MODULE_1__.events)();
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/add-modal.js":
/*!************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/add-modal.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addModal": () => (/* binding */ addModal)
/* harmony export */ });
/* harmony import */ var _add_top_add_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-top/add-top */ "./src/view/task/add-container/add-modal/add-top/add-top.js");
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form */ "./src/view/task/add-container/add-modal/form/form.js");



function addModal() {
    const addModal = document.createElement("div");
    addModal.classList.add("task-add-modal");
    addModal.appendChild((0,_add_top_add_top__WEBPACK_IMPORTED_MODULE_0__.addTop)());
    addModal.appendChild((0,_form_form__WEBPACK_IMPORTED_MODULE_1__.form)());
    return addModal;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/add-top/add-top.js":
/*!******************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/add-top/add-top.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTop": () => (/* binding */ addTop)
/* harmony export */ });
/* harmony import */ var _close_button_close_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-button/close-button */ "./src/view/task/add-container/add-modal/add-top/close-button/close-button.js");
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title/title */ "./src/view/task/add-container/add-modal/add-top/title/title.js");



function addTop() {
    const addTop = document.createElement("div");
    addTop.classList.add("task-add-top");
    addTop.appendChild((0,_close_button_close_button__WEBPACK_IMPORTED_MODULE_0__.closeButton)());
    addTop.appendChild((0,_title_title__WEBPACK_IMPORTED_MODULE_1__.title)());
    return addTop;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/add-top/close-button/close-button.js":
/*!************************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/add-top/close-button/close-button.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeButton": () => (/* binding */ closeButton)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/view/task/add-container/add-modal/add-top/close-button/icon.js");


function closeButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("task-add-close-btn");
    closeButton.appendChild((0,_icon__WEBPACK_IMPORTED_MODULE_0__.icon)());
    return closeButton;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/add-top/close-button/icon.js":
/*!****************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/add-top/close-button/icon.js ***!
  \****************************************************************************/
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

/***/ "./src/view/task/add-container/add-modal/add-top/title/title.js":
/*!**********************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/add-top/title/title.js ***!
  \**********************************************************************/
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

/***/ "./src/view/task/add-container/add-modal/form/description/description.js":
/*!*******************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/description/description.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "description": () => (/* binding */ description)
/* harmony export */ });
function description() {
    const description = document.createElement("input");
    description.type = "text";
    description.classList.add("task-add-description");
    description.placeholder = "Description (optional)";
    description.name = "new-task-description";
    return description;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/form/due/due.js":
/*!***************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/due/due.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "due": () => (/* binding */ due)
/* harmony export */ });
function due() {
    const due = document.createElement("div");

    const input = document.createElement("input");
    input.classList.add("task-add-due-date");
    input.type = "date";
    input.name = "new-task-due-date";

    due.appendChild(input);

    return due;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/form/form.js":
/*!************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/form.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _name_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name/name */ "./src/view/task/add-container/add-modal/form/name/name.js");
/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description/description */ "./src/view/task/add-container/add-modal/form/description/description.js");
/* harmony import */ var _subtasks_subtasks_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtasks/subtasks-container */ "./src/view/task/add-container/add-modal/form/subtasks/subtasks-container.js");
/* harmony import */ var _due_due__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./due/due */ "./src/view/task/add-container/add-modal/form/due/due.js");
/* harmony import */ var _priority_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priority/priority */ "./src/view/task/add-container/add-modal/form/priority/priority.js");
/* harmony import */ var _submit_submit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit/submit */ "./src/view/task/add-container/add-modal/form/submit/submit.js");







function form() {
    const form = document.createElement("form");
    form.classList.add("task-add-form");
    form.appendChild((0,_name_name__WEBPACK_IMPORTED_MODULE_0__.name)());
    form.appendChild((0,_description_description__WEBPACK_IMPORTED_MODULE_1__.description)());
    form.appendChild((0,_subtasks_subtasks_container__WEBPACK_IMPORTED_MODULE_2__.subtasksContainer)());
    form.appendChild((0,_due_due__WEBPACK_IMPORTED_MODULE_3__.due)());
    form.appendChild((0,_priority_priority__WEBPACK_IMPORTED_MODULE_4__.priority)());
    form.appendChild((0,_submit_submit__WEBPACK_IMPORTED_MODULE_5__.submit)());

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    function showForm() {
        form.classList.add("task-add-modal-container-active");
    }

    return form;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/form/name/name.js":
/*!*****************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/name/name.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
function name() {
    const name = document.createElement("input");
    name.type = "text";
    name.classList.add("task-add-name");
    name.placeholder = "Task";
    name.name = "new-task-name";
    return name;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/form/priority/priority.js":
/*!*************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/priority/priority.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "priority": () => (/* binding */ priority)
/* harmony export */ });
function priority() {
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

/***/ "./src/view/task/add-container/add-modal/form/submit/submit.js":
/*!*********************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/submit/submit.js ***!
  \*********************************************************************/
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

/***/ "./src/view/task/add-container/add-modal/form/subtasks/add/add.js":
/*!************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/subtasks/add/add.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add)
/* harmony export */ });
function add() {
    const add = document.createElement("div");
    add.classList.add("task-add-subtask-add-another-container");

    const button = document.createElement("button");
    button.classList.add("task-add-subtask-add-another");

    const span = document.createElement("span");
    span.classList.add("material-icons-outlined");
    span.innerText = "add";

    button.appendChild(span);
    add.appendChild(button);

    return add;
}


/***/ }),

/***/ "./src/view/task/add-container/add-modal/form/subtasks/list/list.js":
/*!**************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/subtasks/list/list.js ***!
  \**************************************************************************/
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

/***/ "./src/view/task/add-container/add-modal/form/subtasks/subtasks-container.js":
/*!***********************************************************************************!*\
  !*** ./src/view/task/add-container/add-modal/form/subtasks/subtasks-container.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subtasksContainer": () => (/* binding */ subtasksContainer)
/* harmony export */ });
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list */ "./src/view/task/add-container/add-modal/form/subtasks/list/list.js");
/* harmony import */ var _add_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add */ "./src/view/task/add-container/add-modal/form/subtasks/add/add.js");



function subtasksContainer() {
    const subtasksContainer = document.createElement("div");
    subtasksContainer.classList.add("task-add-subtasks-container");
    subtasksContainer.appendChild((0,_list_list__WEBPACK_IMPORTED_MODULE_0__.list)());
    subtasksContainer.appendChild((0,_add_add__WEBPACK_IMPORTED_MODULE_1__.add)());
    return subtasksContainer;
}


/***/ }),

/***/ "./src/view/task/add-container/events/close-create-new-task.js":
/*!*********************************************************************!*\
  !*** ./src/view/task/add-container/events/close-create-new-task.js ***!
  \*********************************************************************/
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

/***/ "./src/view/task/add-container/events/events.js":
/*!******************************************************!*\
  !*** ./src/view/task/add-container/events/events.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _show_create_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-create-new-task */ "./src/view/task/add-container/events/show-create-new-task.js");
/* harmony import */ var _close_create_new_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-create-new-task */ "./src/view/task/add-container/events/close-create-new-task.js");
/* harmony import */ var _task_add_subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-add-subtask */ "./src/view/task/add-container/events/task-add-subtask.js");




function events() {
    (0,_show_create_new_task__WEBPACK_IMPORTED_MODULE_0__.showCreateNewTask)();
    (0,_close_create_new_task__WEBPACK_IMPORTED_MODULE_1__.closeCreateNewTask)();
    (0,_task_add_subtask__WEBPACK_IMPORTED_MODULE_2__.addSubtask)();
}


/***/ }),

/***/ "./src/view/task/add-container/events/show-create-new-task.js":
/*!********************************************************************!*\
  !*** ./src/view/task/add-container/events/show-create-new-task.js ***!
  \********************************************************************/
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

/***/ "./src/view/task/add-container/events/task-add-subtask.js":
/*!****************************************************************!*\
  !*** ./src/view/task/add-container/events/task-add-subtask.js ***!
  \****************************************************************/
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

/***/ "./src/view/task/delete-container/delete-container.js":
/*!************************************************************!*\
  !*** ./src/view/task/delete-container/delete-container.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteContainer": () => (/* binding */ deleteContainer)
/* harmony export */ });
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal */ "./src/view/task/delete-container/modal/modal.js");


function deleteContainer(taskId) {
    const deleteContainer = document.createElement("div");
    deleteContainer.classList.add("task-delete-modal-container");
    // deleteContainer.classList.add("task-delete-modal-container-active");

    deleteContainer.appendChild((0,_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal)());

    document.body.appendChild(deleteContainer);
}


/***/ }),

/***/ "./src/view/task/delete-container/modal/answers-container/answers-container.js":
/*!*************************************************************************************!*\
  !*** ./src/view/task/delete-container/modal/answers-container/answers-container.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answersContainer": () => (/* binding */ answersContainer)
/* harmony export */ });
/* harmony import */ var _yes_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yes-btn */ "./src/view/task/delete-container/modal/answers-container/yes-btn.js");
/* harmony import */ var _no_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-btn */ "./src/view/task/delete-container/modal/answers-container/no-btn.js");



function answersContainer() {
    const answersContainer = document.createElement("div");
    answersContainer.classList.add("task-delete-answers-container");

    answersContainer.appendChild((0,_yes_btn__WEBPACK_IMPORTED_MODULE_0__.yesBtn)());
    answersContainer.appendChild((0,_no_btn__WEBPACK_IMPORTED_MODULE_1__.noBtn)());

    return answersContainer;
}


/***/ }),

/***/ "./src/view/task/delete-container/modal/answers-container/no-btn.js":
/*!**************************************************************************!*\
  !*** ./src/view/task/delete-container/modal/answers-container/no-btn.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noBtn": () => (/* binding */ noBtn)
/* harmony export */ });
function noBtn() {
    const noBtn = document.createElement("button");
    noBtn.classList.add("task-delete-answer-btn");
    noBtn.id = "delete-false";
    noBtn.innerText = "No";

    return noBtn;
}


/***/ }),

/***/ "./src/view/task/delete-container/modal/answers-container/yes-btn.js":
/*!***************************************************************************!*\
  !*** ./src/view/task/delete-container/modal/answers-container/yes-btn.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yesBtn": () => (/* binding */ yesBtn)
/* harmony export */ });
function yesBtn() {
    const yesBtn = document.createElement("button");
    yesBtn.classList.add("task-delete-answer-btn");
    yesBtn.id = "delete-true";
    yesBtn.innerText = "Yes";

    return yesBtn;
}


/***/ }),

/***/ "./src/view/task/delete-container/modal/close-btn/close-btn.js":
/*!*********************************************************************!*\
  !*** ./src/view/task/delete-container/modal/close-btn/close-btn.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeBtn": () => (/* binding */ closeBtn)
/* harmony export */ });
function closeBtn() {
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("task-delete-close-btn");

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.innerText = "close";

    closeBtn.appendChild(icon);

    return closeBtn;
}


/***/ }),

/***/ "./src/view/task/delete-container/modal/modal.js":
/*!*******************************************************!*\
  !*** ./src/view/task/delete-container/modal/modal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _close_btn_close_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-btn/close-btn */ "./src/view/task/delete-container/modal/close-btn/close-btn.js");
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question/question */ "./src/view/task/delete-container/modal/question/question.js");
/* harmony import */ var _answers_container_answers_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answers-container/answers-container */ "./src/view/task/delete-container/modal/answers-container/answers-container.js");




function modal() {
    const modal = document.createElement("div");
    modal.classList.add("task-delete-modal");

    modal.appendChild((0,_close_btn_close_btn__WEBPACK_IMPORTED_MODULE_0__.closeBtn)());
    modal.appendChild((0,_question_question__WEBPACK_IMPORTED_MODULE_1__.question)());
    modal.appendChild((0,_answers_container_answers_container__WEBPACK_IMPORTED_MODULE_2__.answersContainer)());

    return modal;
}


/***/ }),

/***/ "./src/view/task/delete-container/modal/question/question.js":
/*!*******************************************************************!*\
  !*** ./src/view/task/delete-container/modal/question/question.js ***!
  \*******************************************************************/
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

/***/ "./src/view/task/events/controllers.js":
/*!*********************************************!*\
  !*** ./src/view/task/events/controllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controllers": () => (/* binding */ controllers)
/* harmony export */ });
/* harmony import */ var _task_toggle_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-toggle-details */ "./src/view/task/events/task-toggle-details.js");
/* harmony import */ var _task_show_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-show-edit */ "./src/view/task/events/task-show-edit.js");
/* harmony import */ var _delete_task_show_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/task-show-delete */ "./src/view/task/events/delete/task-show-delete.js");




function controllers() {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.addEventListener("click", controller);

    function controller(e) {
        const target = e.target.dataset.target;
        switch (target) {
            case "task-show-details-btn":
                (0,_task_toggle_details__WEBPACK_IMPORTED_MODULE_0__.taskToggleDetails)(e);
                break;
            case "task-details-edit-btn":
                (0,_task_show_edit__WEBPACK_IMPORTED_MODULE_1__.taskShowEditDetails)(e);
                break;
            case "task-details-delete-btn":
                (0,_delete_task_show_delete__WEBPACK_IMPORTED_MODULE_2__.taskShowDelete)(e);
                break;
        }
    }
}


/***/ }),

/***/ "./src/view/task/events/delete/task-process-delete.js":
/*!************************************************************!*\
  !*** ./src/view/task/events/delete/task-process-delete.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskProcessDelete": () => (/* binding */ taskProcessDelete)
/* harmony export */ });
function taskProcessDelete(e) {
    function findParent(source, filter) {
        const root = document.documentElement;
        while (source != root) {
            if (filter(source)) {
                return source;
            }
            source = source.parentNode;
        }
    }

    const taskId = findParent(e.target, (elem) => {
        return elem.dataset.taskId;
    }).dataset.taskId;

    const taskToDelete = document.getElementById(taskId);
    taskToDelete.parentNode.removeChild(taskToDelete);
}


/***/ }),

/***/ "./src/view/task/events/delete/task-show-delete.js":
/*!*********************************************************!*\
  !*** ./src/view/task/events/delete/task-show-delete.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskShowDelete": () => (/* binding */ taskShowDelete)
/* harmony export */ });
/* harmony import */ var _task_process_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-process-delete */ "./src/view/task/events/delete/task-process-delete.js");


function taskShowDelete(e) {
    const deleteBox = document.querySelector(".task-delete-modal-container");
    deleteBox.classList.add("task-delete-modal-container-active");

    const deleteTrueBtn = document.getElementById("delete-true");
    deleteTrueBtn.addEventListener("click", () => {
        (0,_task_process_delete__WEBPACK_IMPORTED_MODULE_0__.taskProcessDelete)(e);
        taskCloseDelete();
    });

    const deleteFalseBtn = document.getElementById("delete-false");
    deleteFalseBtn.addEventListener("click", taskCloseDelete);

    const deleteCloseBtn = document.querySelector(".task-delete-close-btn");
    deleteCloseBtn.addEventListener("click", taskCloseDelete);

    function taskCloseDelete() {
        deleteBox.classList.remove("task-delete-modal-container-active");
    }
}


/***/ }),

/***/ "./src/view/task/events/events.js":
/*!****************************************!*\
  !*** ./src/view/task/events/events.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ "./src/view/task/events/controllers.js");


function events() {
    (0,_controllers__WEBPACK_IMPORTED_MODULE_0__.controllers)();
}


/***/ }),

/***/ "./src/view/task/events/task-show-edit.js":
/*!************************************************!*\
  !*** ./src/view/task/events/task-show-edit.js ***!
  \************************************************/
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

/***/ "./src/view/task/events/task-toggle-details.js":
/*!*****************************************************!*\
  !*** ./src/view/task/events/task-toggle-details.js ***!
  \*****************************************************/
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

/***/ "./src/view/task/group-container/add-to-group-container.js":
/*!*****************************************************************!*\
  !*** ./src/view/task/group-container/add-to-group-container.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToGroupContainer": () => (/* binding */ addToGroupContainer)
/* harmony export */ });
/* harmony import */ var _task_container_task_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-container/task-container */ "./src/view/task/group-container/task-container/task-container.js");


function addToGroupContainer(task) {
    const tasksGroupContainer = document.querySelector(
        ".tasks-group-container"
    );

    tasksGroupContainer.appendChild((0,_task_container_task_container__WEBPACK_IMPORTED_MODULE_0__.taskContainer)(task));
}


/***/ }),

/***/ "./src/view/task/group-container/group-container.js":
/*!**********************************************************!*\
  !*** ./src/view/task/group-container/group-container.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupContainer": () => (/* binding */ groupContainer)
/* harmony export */ });
/* harmony import */ var _add_to_group_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-group-container */ "./src/view/task/group-container/add-to-group-container.js");
/* harmony import */ var _db_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/read/get-local-storage-list */ "./src/db/read/get-local-storage-list.js");



function groupContainer() {
    const storedList = (0,_db_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageList)();

    storedList.forEach((task) => {
        (0,_add_to_group_container__WEBPACK_IMPORTED_MODULE_0__.addToGroupContainer)(task);
    });
}


/***/ }),

/***/ "./src/view/task/group-container/task-container/checkbox-container/checkbox-container.js":
/*!***********************************************************************************************!*\
  !*** ./src/view/task/group-container/task-container/checkbox-container/checkbox-container.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxContainer": () => (/* binding */ checkboxContainer)
/* harmony export */ });
function checkboxContainer(task) {
    const checkboxContainer = document.createElement("label");
    checkboxContainer.classList.add("task-checkbox-container");

    const checkbox = (() => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.checked;
        checkbox.classList.add("task-checkbox");
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

/***/ "./src/view/task/group-container/task-container/details-container/details-container.js":
/*!*********************************************************************************************!*\
  !*** ./src/view/task/group-container/task-container/details-container/details-container.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsContainer": () => (/* binding */ detailsContainer)
/* harmony export */ });
/* harmony import */ var _details_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-controllers */ "./src/view/task/group-container/task-container/details-container/details-controllers.js");
/* harmony import */ var _details_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-description */ "./src/view/task/group-container/task-container/details-container/details-description.js");
/* harmony import */ var _details_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-list */ "./src/view/task/group-container/task-container/details-container/details-list.js");




function detailsContainer(task) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("task-details-container");
    detailsContainer.dataset.target = "task-details-container";

    detailsContainer.appendChild((0,_details_controllers__WEBPACK_IMPORTED_MODULE_0__.detailsControllers)());

    if (task.description) {
        detailsContainer.appendChild((0,_details_description__WEBPACK_IMPORTED_MODULE_1__.detailsDescription)(task));
    }
    if (task.description) {
        detailsContainer.appendChild((0,_details_list__WEBPACK_IMPORTED_MODULE_2__.detailsList)(task));
    }

    return detailsContainer;
}


/***/ }),

/***/ "./src/view/task/group-container/task-container/details-container/details-controllers.js":
/*!***********************************************************************************************!*\
  !*** ./src/view/task/group-container/task-container/details-container/details-controllers.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsControllers": () => (/* binding */ detailsControllers)
/* harmony export */ });
function detailsControllers() {
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

/***/ "./src/view/task/group-container/task-container/details-container/details-description.js":
/*!***********************************************************************************************!*\
  !*** ./src/view/task/group-container/task-container/details-container/details-description.js ***!
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

/***/ "./src/view/task/group-container/task-container/details-container/details-list.js":
/*!****************************************************************************************!*\
  !*** ./src/view/task/group-container/task-container/details-container/details-list.js ***!
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

/***/ "./src/view/task/group-container/task-container/task-container.js":
/*!************************************************************************!*\
  !*** ./src/view/task/group-container/task-container/task-container.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskContainer": () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _checkbox_container_checkbox_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-container/checkbox-container */ "./src/view/task/group-container/task-container/checkbox-container/checkbox-container.js");
/* harmony import */ var _details_container_details_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-container/details-container */ "./src/view/task/group-container/task-container/details-container/details-container.js");



function taskContainer(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.dataset.taskId = `task-${task.id}`;
    taskContainer.id = `task-${task.id}`;

    taskContainer.appendChild((0,_checkbox_container_checkbox_container__WEBPACK_IMPORTED_MODULE_0__.checkboxContainer)(task));

    taskContainer.appendChild((0,_details_container_details_container__WEBPACK_IMPORTED_MODULE_1__.detailsContainer)(task));

    return taskContainer;
}


/***/ }),

/***/ "./src/view/task/task.js":
/*!*******************************!*\
  !*** ./src/view/task/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _group_container_group_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-container/group-container */ "./src/view/task/group-container/group-container.js");
/* harmony import */ var _add_container_add_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-container/add-container */ "./src/view/task/add-container/add-container.js");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/events */ "./src/view/task/events/events.js");
/* harmony import */ var _delete_container_delete_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-container/delete-container */ "./src/view/task/delete-container/delete-container.js");





function task() {
    (0,_group_container_group_container__WEBPACK_IMPORTED_MODULE_0__.groupContainer)();
    (0,_add_container_add_container__WEBPACK_IMPORTED_MODULE_1__.addContainer)();
    (0,_events_events__WEBPACK_IMPORTED_MODULE_2__.events)();
    (0,_delete_container_delete_container__WEBPACK_IMPORTED_MODULE_3__.deleteContainer)();
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
/* harmony import */ var _view_task_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/task/task */ "./src/view/task/task.js");
/* harmony import */ var _db_create_populate_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db/create/populate-local-storage */ "./src/db/create/populate-local-storage.js");






(0,_view_side_nav_side_nav__WEBPACK_IMPORTED_MODULE_1__.sideNav)();
(0,_db_create_populate_local_storage__WEBPACK_IMPORTED_MODULE_3__.populateLocalStorage)();
(0,_view_task_task__WEBPACK_IMPORTED_MODULE_2__.task)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RiL2NyZWF0ZS9kZWZhdWx0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RiL2NyZWF0ZS9wb3B1bGF0ZS1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9yZWFkL2dldC1sb2NhbC1zdG9yYWdlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL2Nsb3NlLXNpZGUtbmF2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3NpZGUtbmF2L2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL3Nob3ctc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9hZGQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9hZGQtdG9wL2FkZC10b3AuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9pY29uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svYWRkLWNvbnRhaW5lci9hZGQtbW9kYWwvYWRkLXRvcC90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2FkZC1jb250YWluZXIvYWRkLW1vZGFsL2Zvcm0vZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9mb3JtL2R1ZS9kdWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9mb3JtL25hbWUvbmFtZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2FkZC1jb250YWluZXIvYWRkLW1vZGFsL2Zvcm0vcHJpb3JpdHkvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9mb3JtL3N1Ym1pdC9zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9mb3JtL3N1YnRhc2tzL2FkZC9hZGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2FkZC1tb2RhbC9mb3JtL3N1YnRhc2tzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2FkZC1jb250YWluZXIvYWRkLW1vZGFsL2Zvcm0vc3VidGFza3Mvc3VidGFza3MtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svYWRkLWNvbnRhaW5lci9ldmVudHMvY2xvc2UtY3JlYXRlLW5ldy10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svYWRkLWNvbnRhaW5lci9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svYWRkLWNvbnRhaW5lci9ldmVudHMvc2hvdy1jcmVhdGUtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9hZGQtY29udGFpbmVyL2V2ZW50cy90YXNrLWFkZC1zdWJ0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZGVsZXRlLWNvbnRhaW5lci9kZWxldGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZGVsZXRlLWNvbnRhaW5lci9tb2RhbC9hbnN3ZXJzLWNvbnRhaW5lci9hbnN3ZXJzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2RlbGV0ZS1jb250YWluZXIvbW9kYWwvYW5zd2Vycy1jb250YWluZXIvbm8tYnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZGVsZXRlLWNvbnRhaW5lci9tb2RhbC9hbnN3ZXJzLWNvbnRhaW5lci95ZXMtYnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZGVsZXRlLWNvbnRhaW5lci9tb2RhbC9jbG9zZS1idG4vY2xvc2UtYnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZGVsZXRlLWNvbnRhaW5lci9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2RlbGV0ZS1jb250YWluZXIvbW9kYWwvcXVlc3Rpb24vcXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ldmVudHMvY29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ldmVudHMvZGVsZXRlL3Rhc2stcHJvY2Vzcy1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ldmVudHMvZGVsZXRlL3Rhc2stc2hvdy1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZXZlbnRzL3Rhc2stc2hvdy1lZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZXZlbnRzL3Rhc2stdG9nZ2xlLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ncm91cC1jb250YWluZXIvYWRkLXRvLWdyb3VwLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2dyb3VwLWNvbnRhaW5lci9ncm91cC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2dyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrL2dyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay9ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL3Rhc2stY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2svdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyw0QkFBNEIsOEJBQThCLHVDQUF1Qyx5Q0FBeUMsR0FBRyw0QkFBNEIsNkJBQTZCLEdBQUcsVUFBVSx3QkFBd0IsNkNBQTZDLCtCQUErQiwwQkFBMEIsV0FBVyxVQUFVLGdCQUFnQixtREFBbUQsd0JBQXdCLEdBQUcsbURBQW1ELHdCQUF3Qix3QkFBd0IsbUNBQW1DLDhCQUE4QixXQUFXLHFCQUFxQiwyQkFBMkIsR0FBRyxZQUFZLG1CQUFtQixpQkFBaUIsc0JBQXNCLG9DQUFvQyxHQUFHLFdBQVcsbUJBQW1CLEdBQUcscUJBQXFCLHNDQUFzQyx5QkFBeUIsR0FBRyxjQUFjLDZDQUE2QyxHQUFHLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFDQUFxQyxnQkFBZ0Isd0JBQXdCLEdBQUcseUJB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Qix1QkFBdUIscUJBQXFCLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZ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QUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0M0RTtBQUNIOztBQUVsRTtBQUNQO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRCwrQkFBK0IsUUFBUTs7QUFFdkMsOEJBQThCLHlGQUFpQjs7QUFFL0MsOEJBQThCLHNGQUFnQjs7QUFFOUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RtRTtBQUNOO0FBQ3BCO0FBQzZCOztBQUUvRDtBQUNQLElBQUksZ0ZBQWM7QUFDbEIsSUFBSSwwRUFBWTtBQUNoQixJQUFJLHNEQUFNO0FBQ1YsSUFBSSxtRkFBZTtBQUNuQjs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRThCO0FBQ1g7QUFDa0M7O0FBRTFFLGdFQUFPO0FBQ1AsdUZBQW9CO0FBQ3BCLHFEQUFJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMjg3NmJlO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTE6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMjogI2NhODAyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS0zOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTQ6ICM3MDJjY2E7XFxuICAgIC0tY29sb3ItZ3JleTogIzdhN2E3YTtcXG4gICAgLS1jb2xvci1zaGFkb3c6ICNhNWE1YTU7XFxuICAgIC0tY29sb3ItZWxlbWVudC1wcmltYXJ5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IDNweCAjMjUyNTI1OGE7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYWRvdyk7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgIzI1MjUyNTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMyB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stc2hvdy1kZXRhaWxzLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjVyZW0gdmFyKC0tY29sb3Itc2hhZG93KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXItYWN0aXZlIHtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udHJvbGxlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtZWRpdC1idG4gc3BhbixcXG4udGFzay1hZGQtY2xvc2UtYnRuIHNwYW4sXFxuLnRhc2stZGV0YWlscy1kZWxldGUtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lcixcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNWI7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlLFxcbi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbCxcXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAjNWM1YzVjO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi50YXNrLWRlbGV0ZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogNHJlbSAycmVtIDNyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWRlc2NyaXB0aW9uLFxcbi50YXNrLWFkZC1uYW1lLFxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQsXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTk0Yjg7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLyogXFxuLnRhc2stYWRkLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59ICovXFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi5wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4ucHJpb3JpdHktNCB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC40cmVtICMwMDA7XFxufVxcblxcbi50YXNrLWFkZC1zdWJtaXQtYnRuLFxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQ0FBa0M7QUFDdEM7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQixFQUFFLE1BQU07SUFDekIsOEJBQThCLEVBQUUsTUFBTTtJQUN0QyxnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCLFdBQVcsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUyxFQUFFLE1BQU07SUFDakIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxN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Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMjg3NmJlO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTE6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMjogI2NhODAyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS0zOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTQ6ICM3MDJjY2E7XFxuICAgIC0tY29sb3ItZ3JleTogIzdhN2E3YTtcXG4gICAgLS1jb2xvci1zaGFkb3c6ICNhNWE1YTU7XFxuICAgIC0tY29sb3ItZWxlbWVudC1wcmltYXJ5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IDNweCAjMjUyNTI1OGE7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYWRvdyk7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgIzI1MjUyNTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMyB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stc2hvdy1kZXRhaWxzLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjVyZW0gdmFyKC0tY29sb3Itc2hhZG93KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXItYWN0aXZlIHtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udHJvbGxlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtZWRpdC1idG4gc3BhbixcXG4udGFzay1hZGQtY2xvc2UtYnRuIHNwYW4sXFxuLnRhc2stZGV0YWlscy1kZWxldGUtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lcixcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNWI7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlLFxcbi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbCxcXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAjNWM1YzVjO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi50YXNrLWRlbGV0ZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogNHJlbSAycmVtIDNyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWRlc2NyaXB0aW9uLFxcbi50YXNrLWFkZC1uYW1lLFxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQsXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTk0Yjg7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLyogXFxuLnRhc2stYWRkLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59ICovXFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi5wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4ucHJpb3JpdHktNCB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC40cmVtICMwMDA7XFxufVxcblxcbi50YXNrLWFkZC1zdWJtaXQtYnRuLFxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBkZWZhdWx0TGlzdCA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJCdXkgcGl6emEgaW5ncmVkaWVudHNcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxlbm55IGRvZXNuJ3QgbGlrZSBhbmNob3ZpZXMhXCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkNoZWVzZVwiLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJUb21hdG9cIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJPbGl2ZXNcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIxLTA3LTIzXCIsXG4gICAgICAgIHByaW9yaXR5OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwiRG8gbGF1bmRyeVwiLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXSxcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIxLTA3LTIzXCIsXG4gICAgICAgIHByaW9yaXR5OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6IFwiRmluaXNoIHByb2plY3RcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvbid0IGZvcmdldCB0byB1c2UgUG9tb2Rvcm8gVGltZXJcIixcbiAgICAgICAgc3VidGFza3M6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiQWRkIGZhbmN5IGFuaW1hdGlvbnNcIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJSZXZpZXcgU09MSUQgcHJpbmNpcGxlc1wiLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJGaXggYnVnc1wiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yM1wiLFxuICAgICAgICBwcmlvcml0eTogMyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIk1ha2UgYnJlYWRcIixcbiAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlIG9saXZlIG9pbD9cIixcbiAgICAgICAgc3VidGFza3M6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiQnV5IHllYXN0XCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVHJ5IG5ldyByZWNpcGVcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIxLTA3LTI4XCIsXG4gICAgICAgIHByaW9yaXR5OiAyLFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExpc3QgfSBmcm9tIFwiLi9kZWZhdWx0LWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmFsdExpc3RKU09OID0gSlNPTi5zdHJpbmdpZnkoZGVmYXVsdExpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBkZWZhbHRMaXN0SlNPTik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpIHtcbiAgICBjb25zdCBzdG9yZWRMaXN0SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKTtcbiAgICBjb25zdCBzdG9yZWRMaXN0ID0gSlNPTi5wYXJzZShzdG9yZWRMaXN0SlNPTik7XG4gICAgcmV0dXJuIHN0b3JlZExpc3Q7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNpZGVOYXZDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXYtY2xvc2UtYnRuXCIpO1xuXG4gICAgc2lkZU5hdkNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVNpZGVOYXYpO1xuXG4gICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXZcIik7XG5cbiAgICBmdW5jdGlvbiBjbG9zZVNpZGVOYXYoKSB7XG4gICAgICAgIHNpZGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcInNpZGUtbmF2LWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzaG93U2lkZU5hdiB9IGZyb20gXCIuL3Nob3ctc2lkZS1uYXZcIjtcbmltcG9ydCB7IGNsb3NlU2lkZU5hdiB9IGZyb20gXCIuL2Nsb3NlLXNpZGUtbmF2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgc2hvd1NpZGVOYXYoKTtcbiAgICBjbG9zZVNpZGVOYXYoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZU5hdigpIHtcbiAgICBjb25zdCBzaWRlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hdi1idG5cIik7XG5cbiAgICBzaWRlTmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93KTtcblxuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwic2lkZS1uYXYtYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVOYXYoKSB7XG4gICAgZXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyBhZGRNb2RhbCB9IGZyb20gXCIuL2FkZC1tb2RhbC9hZGQtbW9kYWxcIjtcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRNb2RhbCgpKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQ29udGFpbmVyKTtcbiAgICBldmVudHMoKTtcbn1cbiIsImltcG9ydCB7IGFkZFRvcCB9IGZyb20gXCIuL2FkZC10b3AvYWRkLXRvcFwiO1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm0vZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWwoKSB7XG4gICAgY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbFwiKTtcbiAgICBhZGRNb2RhbC5hcHBlbmRDaGlsZChhZGRUb3AoKSk7XG4gICAgYWRkTW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSgpKTtcbiAgICByZXR1cm4gYWRkTW9kYWw7XG59XG4iLCJpbXBvcnQgeyBjbG9zZUJ1dHRvbiB9IGZyb20gXCIuL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b25cIjtcbmltcG9ydCB7IHRpdGxlIH0gZnJvbSBcIi4vdGl0bGUvdGl0bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvcCgpIHtcbiAgICBjb25zdCBhZGRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvcC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdG9wXCIpO1xuICAgIGFkZFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbigpKTtcbiAgICBhZGRUb3AuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgcmV0dXJuIGFkZFRvcDtcbn1cbiIsImltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWNsb3NlLWJ0blwiKTtcbiAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKCkpO1xuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpY29uKCkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcbiAgICByZXR1cm4gaWNvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0aXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJOZXcgdGFza1wiO1xuICAgIHJldHVybiB0aXRsZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCI7XG4gICAgZGVzY3JpcHRpb24ubmFtZSA9IFwibmV3LXRhc2stZGVzY3JpcHRpb25cIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZHVlKCkge1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtZHVlLWRhdGVcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGlucHV0Lm5hbWUgPSBcIm5ldy10YXNrLWR1ZS1kYXRlXCI7XG5cbiAgICBkdWUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGR1ZTtcbn1cbiIsImltcG9ydCB7IG5hbWUgfSBmcm9tIFwiLi9uYW1lL25hbWVcIjtcbmltcG9ydCB7IGRlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZGVzY3JpcHRpb24vZGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IHN1YnRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vc3VidGFza3Mvc3VidGFza3MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBkdWUgfSBmcm9tIFwiLi9kdWUvZHVlXCI7XG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5L3ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzdWJtaXQgfSBmcm9tIFwiLi9zdWJtaXQvc3VibWl0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1mb3JtXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSgpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VidGFza3NDb250YWluZXIoKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWUoKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSgpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCgpKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBuYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbmFtZVwiKTtcbiAgICBuYW1lLnBsYWNlaG9sZGVyID0gXCJUYXNrXCI7XG4gICAgbmFtZS5uYW1lID0gXCJuZXctdGFzay1uYW1lXCI7XG4gICAgcmV0dXJuIG5hbWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcHJpb3JpdHkoKSB7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1wcmlvcml0eS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBsZXZlbHMgPSBbMSwgMiwgMywgNF07XG5cbiAgICBsZXZlbHMuZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3hcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1zZWxlY3RvclwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke2xldmVsfWApO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByaW9yaXR5O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0LmlubmVyVGV4dCA9IFwiQWRkXCI7XG5cbiAgICByZXR1cm4gc3VibWl0O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlci1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlclwiKTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IFwiYWRkXCI7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgYWRkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gYWRkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFza3MtbGlzdFwiKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlN1YnRhc2sgKG9wdGlvbmFsKVwiO1xuICAgIGlucHV0Lm5hbWUgPSBcIm5ldy1zdWJ0YXNrLW5hbWUtMVwiO1xuXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cbiIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi9saXN0L2xpc3RcIjtcbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuL2FkZC9hZGRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRhc2tzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHN1YnRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJ0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFza3MtY29udGFpbmVyXCIpO1xuICAgIHN1YnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QoKSk7XG4gICAgc3VidGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkKCkpO1xuICAgIHJldHVybiBzdWJ0YXNrc0NvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbG9zZUNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza0Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1jbG9zZS1idG5cIik7XG4gICAgYWRkVGFza0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG5cbiAgICBjb25zdCB0YXNrQWRkTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1tb2RhbC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgdGFza0FkZE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICBcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0YXNrQWRkTW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRhc2tBZGRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgICAgIFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBzaG93Q3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL3Nob3ctY3JlYXRlLW5ldy10YXNrXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9jbG9zZS1jcmVhdGUtbmV3LXRhc2tcIjtcbmltcG9ydCB7IGFkZFN1YnRhc2sgfSBmcm9tIFwiLi90YXNrLWFkZC1zdWJ0YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgc2hvd0NyZWF0ZU5ld1Rhc2soKTtcbiAgICBjbG9zZUNyZWF0ZU5ld1Rhc2soKTtcbiAgICBhZGRTdWJ0YXNrKCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZU5ld1Rhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZmxvYXRpbmctYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3cpO1xuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgY29uc3QgYWRkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0YXNrKCkge1xuICAgIGNvbnN0IGFkZFN1YnRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyXCJcbiAgICApO1xuICAgIGFkZFN1YnRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZCk7XG5cbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICBsZXQgc3VidGFza0NvdW50ZXIgPSAyO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICBpZiAoc3VidGFza0NvdW50ZXIgPCA1KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdWJ0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5wbGFjZWhvbGRlciA9IFwiU3VidGFzayAob3B0aW9uYWwpXCI7XG4gICAgICAgICAgICBuZXdTdWJ0YXNrLm5hbWUgPSBgbmV3LXN1YnRhc2stbmFtZS0ke3N1YnRhc2tDb3VudGVyfWA7XG4gICAgICAgICAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdTdWJ0YXNrKTtcbiAgICAgICAgICAgIHN1YnRhc2tDb3VudGVyKys7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb250YWluZXIodGFza0lkKSB7XG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAvLyBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG5cbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwoKSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZUNvbnRhaW5lcik7XG59XG4iLCJpbXBvcnQgeyB5ZXNCdG4gfSBmcm9tIFwiLi95ZXMtYnRuXCI7XG5pbXBvcnQgeyBub0J0biB9IGZyb20gXCIuL25vLWJ0blwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5zd2Vyc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lclwiKTtcblxuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVzQnRuKCkpO1xuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9CdG4oKSk7XG5cbiAgICByZXR1cm4gYW5zd2Vyc0NvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub0J0bigpIHtcbiAgICBjb25zdCBub0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbm9CdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWFuc3dlci1idG5cIik7XG4gICAgbm9CdG4uaWQgPSBcImRlbGV0ZS1mYWxzZVwiO1xuICAgIG5vQnRuLmlubmVyVGV4dCA9IFwiTm9cIjtcblxuICAgIHJldHVybiBub0J0bjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB5ZXNCdG4oKSB7XG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWFuc3dlci1idG5cIik7XG4gICAgeWVzQnRuLmlkID0gXCJkZWxldGUtdHJ1ZVwiO1xuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllc1wiO1xuXG4gICAgcmV0dXJuIHllc0J0bjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ0bigpIHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWNsb3NlLWJ0blwiKTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcblxuICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgcmV0dXJuIGNsb3NlQnRuO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VCdG4gfSBmcm9tIFwiLi9jbG9zZS1idG4vY2xvc2UtYnRuXCI7XG5pbXBvcnQgeyBxdWVzdGlvbiB9IGZyb20gXCIuL3F1ZXN0aW9uL3F1ZXN0aW9uXCI7XG5pbXBvcnQgeyBhbnN3ZXJzQ29udGFpbmVyIH0gZnJvbSBcIi4vYW5zd2Vycy1jb250YWluZXIvYW5zd2Vycy1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtbW9kYWxcIik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bigpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbigpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChhbnN3ZXJzQ29udGFpbmVyKCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHF1ZXN0aW9uKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBxdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtcXVlc3Rpb25cIik7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gXCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xufVxuIiwiaW1wb3J0IHsgdGFza1RvZ2dsZURldGFpbHMgfSBmcm9tIFwiLi90YXNrLXRvZ2dsZS1kZXRhaWxzXCI7XG5pbXBvcnQgeyB0YXNrU2hvd0VkaXREZXRhaWxzIH0gZnJvbSBcIi4vdGFzay1zaG93LWVkaXRcIjtcbmltcG9ydCB7IHRhc2tTaG93RGVsZXRlIH0gZnJvbSBcIi4vZGVsZXRlL3Rhc2stc2hvdy1kZWxldGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tzR3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrcy1ncm91cC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrc0dyb3VwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250cm9sbGVyKTtcblxuICAgIGZ1bmN0aW9uIGNvbnRyb2xsZXIoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgc3dpdGNoICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIjpcbiAgICAgICAgICAgICAgICB0YXNrVG9nZ2xlRGV0YWlscyhlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIjpcbiAgICAgICAgICAgICAgICB0YXNrU2hvd0VkaXREZXRhaWxzKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRhc2stZGV0YWlscy1kZWxldGUtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1Nob3dEZWxldGUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGFza1Byb2Nlc3NEZWxldGUoZSkge1xuICAgIGZ1bmN0aW9uIGZpbmRQYXJlbnQoc291cmNlLCBmaWx0ZXIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHNvdXJjZSAhPSByb290KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc291cmNlID0gc291cmNlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0YXNrSWQgPSBmaW5kUGFyZW50KGUudGFyZ2V0LCAoZWxlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZWxlbS5kYXRhc2V0LnRhc2tJZDtcbiAgICB9KS5kYXRhc2V0LnRhc2tJZDtcblxuICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJZCk7XG4gICAgdGFza1RvRGVsZXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFza1RvRGVsZXRlKTtcbn1cbiIsImltcG9ydCB7IHRhc2tQcm9jZXNzRGVsZXRlIH0gZnJvbSBcIi4vdGFzay1wcm9jZXNzLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza1Nob3dEZWxldGUoZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRydWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS10cnVlXCIpO1xuICAgIGRlbGV0ZVRydWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza1Byb2Nlc3NEZWxldGUoZSk7XG4gICAgICAgIHRhc2tDbG9zZURlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlRmFsc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1mYWxzZVwiKTtcbiAgICBkZWxldGVGYWxzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0Nsb3NlRGVsZXRlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1jbG9zZS1idG5cIik7XG4gICAgZGVsZXRlQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDbG9zZURlbGV0ZSk7XG5cbiAgICBmdW5jdGlvbiB0YXNrQ2xvc2VEZWxldGUoKSB7XG4gICAgICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb250cm9sbGVycyB9IGZyb20gXCIuL2NvbnRyb2xsZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgY29udHJvbGxlcnMoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0YXNrU2hvd0VkaXREZXRhaWxzKGUpIHtcbiAgICBjb25zdCB0YXNrQWRkTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1tb2RhbC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrQWRkTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGFza1RvZ2dsZURldGFpbHMoZSkge1xuICAgIHRvZ2dsZURldGFpbHMoZSk7XG4gICAgdG9nZ2xlQnRuSWNvbihlKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURldGFpbHMoZSkge1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0NvbnRhaW5lciA9XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGFza0RldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInRhc2stZGV0YWlscy1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJ0bkljb24oZSkge1xuICAgICAgICBjb25zdCB0YXNrU2hvd0RldGFpbHNCdG4gPSBlLnRhcmdldC5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRhc2tTaG93RGV0YWlsc0J0bi5pbm5lclRleHQgPVxuICAgICAgICAgICAgdGFza1Nob3dEZXRhaWxzQnRuLmlubmVyVGV4dCA9PT0gXCJleHBhbmRfbW9yZVwiXG4gICAgICAgICAgICAgICAgPyBcImV4cGFuZF9sZXNzXCJcbiAgICAgICAgICAgICAgICA6IFwiZXhwYW5kX21vcmVcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyB0YXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFzay1jb250YWluZXIvdGFzay1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvR3JvdXBDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IHRhc2tzR3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrcy1ncm91cC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrc0dyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIodGFzaykpO1xufVxuIiwiaW1wb3J0IHsgYWRkVG9Hcm91cENvbnRhaW5lciB9IGZyb20gXCIuL2FkZC10by1ncm91cC1jb250YWluZXJcIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vZGIvcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBzdG9yZWRMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpO1xuXG4gICAgc3RvcmVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGFkZFRvR3JvdXBDb250YWluZXIodGFzayk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2hlY2tib3hDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xuICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNoZWNrbWFyayA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2ttYXJrXCIpO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChgdGFzay1jaGVja21hcmstcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuICAgICAgICByZXR1cm4gY2hlY2ttYXJrO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHNob3dEZXRhaWxzQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvd0RldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIik7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIjtcbiAgICAgICAgc2hvd0RldGFpbHNCdG4uaW5uZXJUZXh0ID0gXCJleHBhbmRfbW9yZVwiO1xuICAgICAgICByZXR1cm4gc2hvd0RldGFpbHNCdG47XG4gICAgfSkoKTtcblxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93RGV0YWlsc0J0bik7XG5cbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG59XG4iLCJpbXBvcnQgeyBkZXRhaWxzQ29udHJvbGxlcnMgfSBmcm9tIFwiLi9kZXRhaWxzLWNvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBkZXRhaWxzRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9kZXRhaWxzLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBkZXRhaWxzTGlzdCB9IGZyb20gXCIuL2RldGFpbHMtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0YWlsc0NvbnRhaW5lcih0YXNrKSB7XG4gICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLWRldGFpbHMtY29udGFpbmVyXCI7XG5cbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDb250cm9sbGVycygpKTtcblxuICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rlc2NyaXB0aW9uKHRhc2spKTtcbiAgICB9XG4gICAgaWYgKHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzTGlzdCh0YXNrKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRldGFpbHNDb250YWluZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0NvbnRyb2xsZXJzKCkge1xuICAgIGNvbnN0IGRldGFpbHNDb250cm9sbGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0NvbnRyb2xsZXJzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtY29udHJvbGxlcnNcIik7XG5cbiAgICBjb25zdCBkZXRhaWxzRWRpdEJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGV0YWlsc0VkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1lZGl0LWJ0blwiKTtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNFZGl0QnRuO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkZXRhaWxzRWRpdEljb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGV0YWlsc0VkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgZGV0YWlsc0VkaXRJY29uLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIjtcbiAgICAgICAgZGV0YWlsc0VkaXRJY29uLmlubmVyVGV4dCA9IFwiZWRpdFwiO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0VkaXRJY29uO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkZXRhaWxzRGVsZXRlQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRldGFpbHNEZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kZWxldGUtYnRuXCIpO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0RlbGV0ZUJ0bjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZGV0YWlsc0RlbGV0ZUljb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIGRldGFpbHNEZWxldGVJY29uLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLWRldGFpbHMtZGVsZXRlLWJ0blwiO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5pbm5lclRleHQgPSBcImRlbGV0ZVwiO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0RlbGV0ZUljb247XG4gICAgfSkoKTtcblxuICAgIGRldGFpbHNFZGl0QnRuLmFwcGVuZENoaWxkKGRldGFpbHNFZGl0SWNvbik7XG4gICAgZGV0YWlsc0NvbnRyb2xsZXJzLmFwcGVuZENoaWxkKGRldGFpbHNFZGl0QnRuKTtcbiAgICBkZXRhaWxzRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRldGFpbHNEZWxldGVJY29uKTtcbiAgICBkZXRhaWxzQ29udHJvbGxlcnMuYXBwZW5kQ2hpbGQoZGV0YWlsc0RlbGV0ZUJ0bik7XG5cbiAgICByZXR1cm4gZGV0YWlsc0NvbnRyb2xsZXJzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNEZXNjcmlwdGlvbih0YXNrKSB7XG4gICAgY29uc3QgZGV0YWlsc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGV0YWlsc0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZGVzY3JpcHRpb25cIik7XG4gICAgZGV0YWlsc0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4gZGV0YWlsc0Rlc2NyaXB0aW9uO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNMaXN0KHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1saXN0XCIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbUNvbnRhaW5lcihzdWJ0YXNrVGl0bGUsIHN1YnRhc2tDaGVja2VkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gc3VidGFza0NoZWNrZWQ7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3hcIik7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmtcIik7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2ttYXJrO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tdGV4dFwiKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gc3VidGFza1RpdGxlO1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gcHJpbnRTdWJ0YXNrRWxlbWVudHMoKSB7XG4gICAgICAgIHRhc2suc3VidGFza3MuZm9yRWFjaCgoc3VidGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1Db250YWluZXIoXG4gICAgICAgICAgICAgICAgc3VidGFzay50aXRsZSxcbiAgICAgICAgICAgICAgICBzdWJ0YXNrLmNoZWNrZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZXRhaWxzTGlzdC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBkZXRhaWxzTGlzdDtcbn1cbiIsImltcG9ydCB7IGNoZWNrYm94Q29udGFpbmVyIH0gZnJvbSBcIi4vY2hlY2tib3gtY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgZGV0YWlsc0NvbnRhaW5lciB9IGZyb20gXCIuL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrQ29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkID0gYHRhc2stJHt0YXNrLmlkfWA7XG4gICAgdGFza0NvbnRhaW5lci5pZCA9IGB0YXNrLSR7dGFzay5pZH1gO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcih0YXNrKSk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDb250YWluZXIodGFzaykpO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG4iLCJpbXBvcnQgeyBncm91cENvbnRhaW5lciB9IGZyb20gXCIuL2dyb3VwLWNvbnRhaW5lci9ncm91cC1jb250YWluZXJcIjtcbmltcG9ydCB7IGFkZENvbnRhaW5lciB9IGZyb20gXCIuL2FkZC1jb250YWluZXIvYWRkLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50c1wiO1xuaW1wb3J0IHsgZGVsZXRlQ29udGFpbmVyIH0gZnJvbSBcIi4vZGVsZXRlLWNvbnRhaW5lci9kZWxldGUtY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrKCkge1xuICAgIGdyb3VwQ29udGFpbmVyKCk7XG4gICAgYWRkQ29udGFpbmVyKCk7XG4gICAgZXZlbnRzKCk7XG4gICAgZGVsZXRlQ29udGFpbmVyKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgc2lkZU5hdiB9IGZyb20gXCIuL3ZpZXcvc2lkZS1uYXYvc2lkZS1uYXZcIjtcbmltcG9ydCB7IHRhc2sgfSBmcm9tIFwiLi92aWV3L3Rhc2svdGFza1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZVwiO1xuXG5zaWRlTmF2KCk7XG5wb3B1bGF0ZUxvY2FsU3RvcmFnZSgpO1xudGFzaygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==