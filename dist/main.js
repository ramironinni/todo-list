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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-primary: #2876be;\n    --color-priority-1: #ca2c2c;\n    --color-priority-2: #ca802c;\n    --color-priority-3: #3f6dc2;\n    --color-priority-4: #702cca;\n    --color-grey: #7a7a7a;\n    --color-shadow: #a5a5a5;\n    --color-element-primary: #e1e1e1;\n    --color-element-secondary: #e6e6e6;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\ninput {\n    border: none;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: var(--color-primary);\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: var(--color-primary);\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 4;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: var(--color-element-secondary);\n    color: #252525;\n    box-shadow: none;\n    opacity: 0;\n}\n\n.side-nav-active {\n    width: 10rem;\n    box-shadow: 0px 0px 17px 3px #2525258a;\n    opacity: 1;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item-active {\n    background-color: var(--color-shadow);\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 0.5rem;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-1 {\n    border: 0.13rem solid var(--color-priority-1);\n}\n\n.task-checkmark.task-checkmark-priority-2 {\n    border: 0.13rem solid var(--color-priority-2);\n}\n\n.task-checkmark.task-checkmark-priority-3 {\n    border: 0.13rem solid var(--color-priority-3);\n}\n\n.task-checkmark.task-checkmark-priority-4 {\n    border: 0.13rem solid var(--color-priority-4);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n    width: 100%;\n    max-height: 0;\n    padding: 0 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-secondary);\n    box-shadow: 0.2rem 0.2rem 0.5rem var(--color-shadow);\n    opacity: 0;\n    transition: 0.5s ease-out;\n}\n\n.task-details-container-active {\n    max-height: fit-content;\n    padding: 1.5rem 1rem;\n    margin-bottom: 1rem;\n    opacity: 1;\n}\n\n.task-details-description {\n    width: 100%;\n    margin: 1rem 0;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-controllers {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.task-details-edit-btn,\n.task-details-delete-btn {\n    margin-left: 0.5rem;\n}\n\n.task-details-edit-btn span,\n.task-add-close-btn span,\n.task-details-delete-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-details-due-container {\n    display: flex;\n}\n\n.task-details-due-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.task-add-modal-container,\n.task-delete-modal-container {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 5rem;\n    /* justify-content: center;\n    align-items: center; */\n    background-color: #0000005b;\n}\n\n.task-add-modal-container-active,\n.task-delete-modal-container-active {\n    /* display: flex; */\n    display: block;\n}\n\n.task-add-modal,\n.task-delete-modal {\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    height: fit-content;\n    margin: auto;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n    box-shadow: 0 0 1rem #5c5c5c;\n    animation-name: animatetop;\n    animation-duration: 0.6s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n.task-delete-modal {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 4rem 2rem 3rem;\n}\n\n.task-delete-answers-container {\n    display: flex;\n    justify-content: center;\n}\n\n.task-delete-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-delete-close-btn span {\n    font-size: 1rem;\n}\n\n.task-delete-answer-btn {\n    margin: 1rem 0.5rem 0;\n}\n\n.task-add-title {\n    font-size: 1rem;\n    margin: 0 0 1.5rem;\n}\n\n.task-add-description,\n.task-add-name,\n.task-add-subtask-item-input,\n.task-add-due-date {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-name-validation-false {\n    box-shadow: 0 0 1rem var(--color-priority-1);\n}\n\n.task-add-name-validation-false::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: var(--color-priority-1);\n    opacity: 1; /* Firefox */\n}\n\n.task-add-subtasks-container {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.task-add-subtask-item-container {\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-add-subtask-item-input {\n    margin-bottom: 0.1rem;\n}\n\n.task-add-subtask-add-another {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    padding: 0.1rem;\n    border-radius: 2rem;\n    color: #fff;\n    background-color: #6e94b8;\n    box-shadow: 0.1rem 0.1rem 0.5rem #000;\n    font-size: 0.5rem;\n}\n\n.task-add-subtask-add-another span {\n    font-size: 1rem;\n}\n\n.task-add-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-add-due-date {\n    margin-bottom: 0.3rem;\n}\n\n/* \n.task-add-due-text {\n    margin: 0.5rem 0;\n} */\n\n.task-add-priority-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1rem 0;\n}\n\n.task-add-priority-item-container {\n    position: relative;\n    width: 20%;\n}\n\n.task-add-priority-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.priority-selector {\n    height: 1rem;\n    border-radius: 0.3rem;\n    display: block;\n}\n\n.priority-1 {\n    border: 0.15rem solid var(--color-priority-1);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-1 {\n    background-color: var(--color-priority-1);\n}\n\n.priority-2 {\n    border: 0.15rem solid var(--color-priority-2);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-2 {\n    background-color: var(--color-priority-2);\n}\n\n.priority-3 {\n    border: 0.15rem solid var(--color-priority-3);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-3 {\n    background-color: var(--color-priority-3);\n}\n\n.priority-4 {\n    border: 0.15rem solid var(--color-priority-4);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-4 {\n    background-color: var(--color-priority-4);\n}\n.task-add-priority-item-checkbox:checked ~ .priority-selector {\n    box-shadow: 0 0 0.4rem #000;\n}\n\n.task-add-submit-btn,\n.task-delete-answer-btn {\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: var(--color-primary);\n    color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-primary: #2876be;\n    --color-priority-1: #ca2c2c;\n    --color-priority-2: #ca802c;\n    --color-priority-3: #3f6dc2;\n    --color-priority-4: #702cca;\n    --color-grey: #7a7a7a;\n    --color-shadow: #a5a5a5;\n    --color-element-primary: #e1e1e1;\n    --color-element-secondary: #e6e6e6;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\ninput {\n    border: none;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: var(--color-primary);\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: var(--color-primary);\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 4;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: var(--color-element-secondary);\n    color: #252525;\n    box-shadow: none;\n    opacity: 0;\n}\n\n.side-nav-active {\n    width: 10rem;\n    box-shadow: 0px 0px 17px 3px #2525258a;\n    opacity: 1;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item-active {\n    background-color: var(--color-shadow);\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 0.5rem;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-1 {\n    border: 0.13rem solid var(--color-priority-1);\n}\n\n.task-checkmark.task-checkmark-priority-2 {\n    border: 0.13rem solid var(--color-priority-2);\n}\n\n.task-checkmark.task-checkmark-priority-3 {\n    border: 0.13rem solid var(--color-priority-3);\n}\n\n.task-checkmark.task-checkmark-priority-4 {\n    border: 0.13rem solid var(--color-priority-4);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n    width: 100%;\n    max-height: 0;\n    padding: 0 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-secondary);\n    box-shadow: 0.2rem 0.2rem 0.5rem var(--color-shadow);\n    opacity: 0;\n    transition: 0.5s ease-out;\n}\n\n.task-details-container-active {\n    max-height: fit-content;\n    padding: 1.5rem 1rem;\n    margin-bottom: 1rem;\n    opacity: 1;\n}\n\n.task-details-description {\n    width: 100%;\n    margin: 1rem 0;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-controllers {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.task-details-edit-btn,\n.task-details-delete-btn {\n    margin-left: 0.5rem;\n}\n\n.task-details-edit-btn span,\n.task-add-close-btn span,\n.task-details-delete-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-details-due-container {\n    display: flex;\n}\n\n.task-details-due-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.task-add-modal-container,\n.task-delete-modal-container {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 5rem;\n    /* justify-content: center;\n    align-items: center; */\n    background-color: #0000005b;\n}\n\n.task-add-modal-container-active,\n.task-delete-modal-container-active {\n    /* display: flex; */\n    display: block;\n}\n\n.task-add-modal,\n.task-delete-modal {\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    height: fit-content;\n    margin: auto;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n    box-shadow: 0 0 1rem #5c5c5c;\n    animation-name: animatetop;\n    animation-duration: 0.6s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n.task-delete-modal {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 4rem 2rem 3rem;\n}\n\n.task-delete-answers-container {\n    display: flex;\n    justify-content: center;\n}\n\n.task-delete-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-delete-close-btn span {\n    font-size: 1rem;\n}\n\n.task-delete-answer-btn {\n    margin: 1rem 0.5rem 0;\n}\n\n.task-add-title {\n    font-size: 1rem;\n    margin: 0 0 1.5rem;\n}\n\n.task-add-description,\n.task-add-name,\n.task-add-subtask-item-input,\n.task-add-due-date {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-name-validation-false {\n    box-shadow: 0 0 1rem var(--color-priority-1);\n}\n\n.task-add-name-validation-false::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: var(--color-priority-1);\n    opacity: 1; /* Firefox */\n}\n\n.task-add-subtasks-container {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.task-add-subtask-item-container {\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-add-subtask-item-input {\n    margin-bottom: 0.1rem;\n}\n\n.task-add-subtask-add-another {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    padding: 0.1rem;\n    border-radius: 2rem;\n    color: #fff;\n    background-color: #6e94b8;\n    box-shadow: 0.1rem 0.1rem 0.5rem #000;\n    font-size: 0.5rem;\n}\n\n.task-add-subtask-add-another span {\n    font-size: 1rem;\n}\n\n.task-add-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-add-due-date {\n    margin-bottom: 0.3rem;\n}\n\n/* \n.task-add-due-text {\n    margin: 0.5rem 0;\n} */\n\n.task-add-priority-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1rem 0;\n}\n\n.task-add-priority-item-container {\n    position: relative;\n    width: 20%;\n}\n\n.task-add-priority-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.priority-selector {\n    height: 1rem;\n    border-radius: 0.3rem;\n    display: block;\n}\n\n.priority-1 {\n    border: 0.15rem solid var(--color-priority-1);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-1 {\n    background-color: var(--color-priority-1);\n}\n\n.priority-2 {\n    border: 0.15rem solid var(--color-priority-2);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-2 {\n    background-color: var(--color-priority-2);\n}\n\n.priority-3 {\n    border: 0.15rem solid var(--color-priority-3);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-3 {\n    background-color: var(--color-priority-3);\n}\n\n.priority-4 {\n    border: 0.15rem solid var(--color-priority-4);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-4 {\n    background-color: var(--color-priority-4);\n}\n.task-add-priority-item-checkbox:checked ~ .priority-selector {\n    box-shadow: 0 0 0.4rem #000;\n}\n\n.task-add-submit-btn,\n.task-delete-answer-btn {\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: var(--color-primary);\n    color: #fff;\n}\n"],"sourceRoot":""}]);
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
            { id: 1, title: "Cheese", checked: false },
            { id: 2, title: "Tomato", checked: true },
            { id: 3, title: "Olives", checked: false },
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
            { id: 1, title: "Add fancy animations", checked: true },
            { id: 2, title: "Review SOLID principles", checked: false },
            { id: 3, title: "Fix bugs", checked: true },
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
            { id: 1, title: "Buy yeast", checked: true },
            { id: 2, title: "Try new recipe", checked: false },
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

/***/ "./src/db/create/process-form.js":
/*!***************************************!*\
  !*** ./src/db/create/process-form.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processForm": () => (/* binding */ processForm)
/* harmony export */ });
/* harmony import */ var _read_get_last_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../read/get-last-id */ "./src/db/read/get-last-id.js");
/* harmony import */ var _add_task_to_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-task-to-local-storage */ "./src/db/create/add-task-to-local-storage.js");
/* harmony import */ var _view_task_add_container_modal_add_modal_add_top_close_button_events_close_create_new_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/task-add-container-modal/add-modal/add-top/close-button/events/close-create-new-task */ "./src/view/task-add-container-modal/add-modal/add-top/close-button/events/close-create-new-task.js");
/* harmony import */ var _view_task_group_container_add_to_group_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view/task-group-container/add-to-group-container */ "./src/view/task-group-container/add-to-group-container.js");





function processForm(
    e,
    taskName,
    description,
    subtasksContainer,
    due,
    priority
) {
    e.preventDefault();

    const lastId = (0,_read_get_last_id__WEBPACK_IMPORTED_MODULE_0__.getLastId)();
    let id = lastId + 1;

    if (e.target.dataset.process === "edit") {
        id = e.target.dataset.editedTask;
    }

    const title = taskName.value;

    if (!title) {
        taskName.placeholder = "You must enter a name";
        taskName.classList.add("task-add-name-validation-false");
    }

    const subtasks = subtasksContainer.childNodes[0].childNodes[0].childNodes;
    const subtasksProcessed = [];
    subtasks.forEach((subtask) => {
        if (subtask.value) {
            const subtaskProcessed = {
                id: subtask.dataset.subtaskId,
                title: subtask.value,
                checked: false,
            };
            subtasksProcessed.push(subtaskProcessed);
        }
    });

    const dueDate = due.childNodes[0].value;

    const priorityLevels = priority.childNodes;

    let priorityLevelProcessed;
    priorityLevels.forEach((level) => {
        const checked = level.childNodes[0].checked;
        if (checked) {
            const priorityLevel = level.childNodes[1].classList[1];
            priorityLevelProcessed = Number(
                priorityLevel[priorityLevel.length - 1]
            );
        }
    });

    const newTask = {
        id,
        title,
        checked: false,
        description: description.value,
        subtasks: subtasksProcessed,
        dueDate,
        priority: priorityLevelProcessed,
    };

    if (title) {
        (0,_view_task_add_container_modal_add_modal_add_top_close_button_events_close_create_new_task__WEBPACK_IMPORTED_MODULE_2__.closeCreateNewTask)();
        (0,_view_task_group_container_add_to_group_container__WEBPACK_IMPORTED_MODULE_3__.addToGroupContainer)(newTask);
        (0,_add_task_to_local_storage__WEBPACK_IMPORTED_MODULE_1__.addTaskToLocalStorage)(newTask);
    }

    e.target.reset();
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

/***/ "./src/db/read/get-task-by-id.js":
/*!***************************************!*\
  !*** ./src/db/read/get-task-by-id.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTaskById": () => (/* binding */ getTaskById)
/* harmony export */ });
/* harmony import */ var _get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-storage-list */ "./src/db/read/get-local-storage-list.js");


function getTaskById(taskId) {
    const list = (0,_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageList)();

    const foundTask = list.find((task) => task.id === Number(taskId));

    return foundTask;
}


/***/ }),

/***/ "./src/db/update/update-subtask-checked.js":
/*!*************************************************!*\
  !*** ./src/db/update/update-subtask-checked.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageUpdateSubtaskChecked": () => (/* binding */ localStorageUpdateSubtaskChecked)
/* harmony export */ });
/* harmony import */ var _read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../read/get-local-storage-list */ "./src/db/read/get-local-storage-list.js");
/* harmony import */ var _create_save_in_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/save-in-local-storage */ "./src/db/create/save-in-local-storage.js");



function localStorageUpdateSubtaskChecked(taskId) {
    taskId = Number(taskId[taskId.length - 1]);

    const list = (0,_read_get_local_storage_list__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageList)();

    const taskToUpdateIndex = list.findIndex((task) => task.id === taskId);

    list[taskToUpdateIndex].checked = !list[taskToUpdateIndex].checked;

    (0,_create_save_in_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveInLocalStorage)(list);
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
/* harmony import */ var _events_show_create_new_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/show-create-new-task */ "./src/view/task-add-container-modal/events/show-create-new-task.js");
/* harmony import */ var _events_task_add_subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/task-add-subtask */ "./src/view/task-add-container-modal/events/task-add-subtask.js");




function addContainer() {
    const addContainer = document.createElement("div");
    addContainer.classList.add("task-add-modal-container");
    addContainer.appendChild((0,_add_modal_add_modal__WEBPACK_IMPORTED_MODULE_0__.addModal)());

    window.addEventListener("click", (e) => {
        if (e.target === addContainer) {
            addContainer.classList.remove("task-add-modal-container-active");
        }
    });

    document.body.appendChild(addContainer);

    const addTaskBtn = document.querySelector(".add-task-floating-btn");
    addTaskBtn.addEventListener("click", _events_show_create_new_task__WEBPACK_IMPORTED_MODULE_1__.showCreateNewTask);

    (0,_events_task_add_subtask__WEBPACK_IMPORTED_MODULE_2__.addSubtask)();
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
/* harmony import */ var _events_close_create_new_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/close-create-new-task */ "./src/view/task-add-container-modal/add-modal/add-top/close-button/events/close-create-new-task.js");



function closeButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("task-add-close-btn");
    closeButton.appendChild((0,_icon__WEBPACK_IMPORTED_MODULE_0__.icon)());

    closeButton.addEventListener("click", _events_close_create_new_task__WEBPACK_IMPORTED_MODULE_1__.closeCreateNewTask);

    return closeButton;
}


/***/ }),

/***/ "./src/view/task-add-container-modal/add-modal/add-top/close-button/events/close-create-new-task.js":
/*!**********************************************************************************************************!*\
  !*** ./src/view/task-add-container-modal/add-modal/add-top/close-button/events/close-create-new-task.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeCreateNewTask": () => (/* binding */ closeCreateNewTask)
/* harmony export */ });
function closeCreateNewTask() {
    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    taskAddModalContainer.classList.remove("task-add-modal-container-active");
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
/* harmony import */ var _db_create_process_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../db/create/process-form */ "./src/db/create/process-form.js");








function form() {
    const form = document.createElement("form");
    form.classList.add("task-add-form");
    form.dataset.process = "create";

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
        (0,_db_create_process_form__WEBPACK_IMPORTED_MODULE_6__.processForm)(e, taskName, description, subtasksContainer, due, priority);
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
    input.dataset.subtaskId = "1";

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

/***/ "./src/view/task-add-container-modal/events/process-edit-task.js":
/*!***********************************************************************!*\
  !*** ./src/view/task-add-container-modal/events/process-edit-task.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processEditTask": () => (/* binding */ processEditTask)
/* harmony export */ });
/* harmony import */ var _db_read_get_task_by_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/read/get-task-by-id */ "./src/db/read/get-task-by-id.js");


function processEditTask(e) {
    const form = document.querySelector(".task-add-form");
    form.dataset.process = "edit";

    const submitButton = document.querySelector(".task-add-submit-btn");
    submitButton.innerText = "Edit";

    const taskId = e.target.dataset.taskId;
    form.dataset.editedTask = taskId;

    const task = (0,_db_read_get_task_by_id__WEBPACK_IMPORTED_MODULE_0__.getTaskById)(taskId);

    const h2 = document.querySelector(".task-add-title");
    h2.innerText = "Edit task";

    const title = document.querySelector(".task-add-name");
    title.value = task.title;

    if (task.description) {
        const description = document.querySelector(".task-add-description");
        description.value = task.description;
    }

    if (task.subtasks.length) {
        const subtasksLastIndex = task.subtasks.length - 1; // 3

        const subtaskInput = document.querySelector(
            ".task-add-subtask-item-input"
        );

        const container = document.querySelector(
            ".task-add-subtask-item-container"
        );

        subtaskInput.value = task.subtasks[0].title; // id 1

        for (let i = 0; i < subtasksLastIndex; i++) {
            const extraTask = subtaskInput.cloneNode();
            extraTask.dataset.subtaskId =
                Number(subtaskInput.dataset.subtaskId) + i + 1; // 1 + 0 + 1 = 2
            extraTask.value = task.subtasks[i + 1].title;
            container.insertAdjacentElement("beforeend", extraTask);
        }
    }

    const due = document.querySelector(".task-add-due-date");
    due.value = task.dueDate;

    // const priority = document.querySelector(".task-checkmark");
    const priorityLevel = task.priority;

    const span = document.querySelector(`.priority-${priorityLevel}`);
    span.previousSibling.checked = true;
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
/* harmony import */ var _process_edit_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-edit-task */ "./src/view/task-add-container-modal/events/process-edit-task.js");


function showCreateNewTask(e, edit) {
    const addContainer = document.querySelector(".task-add-modal-container");

    addContainer.classList.add("task-add-modal-container-active");

    if (typeof edit != "undefined") {
        (0,_process_edit_task__WEBPACK_IMPORTED_MODULE_0__.processEditTask)(e);
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
            newSubtask.dataset.subtaskId = subtaskCounter;
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
/* harmony import */ var _task_add_container_modal_events_show_create_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task-add-container-modal/events/show-create-new-task */ "./src/view/task-add-container-modal/events/show-create-new-task.js");


function taskShowEditDetails(e) {
    const edit = true;
    (0,_task_add_container_modal_events_show_create_new_task__WEBPACK_IMPORTED_MODULE_0__.showCreateNewTask)(e, edit);
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
        checkmark.dataset.priority = task.priority;
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
/* harmony import */ var _details_due__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-due */ "./src/view/task-group-container/task-container/details-container/details-due.js");
/* harmony import */ var _details_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-list */ "./src/view/task-group-container/task-container/details-container/details-list.js");





function detailsContainer(task) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("task-details-container");
    detailsContainer.dataset.target = "task-details-container";

    detailsContainer.appendChild((0,_details_controllers__WEBPACK_IMPORTED_MODULE_0__.detailsControllers)(task));

    if (task.description) {
        detailsContainer.appendChild((0,_details_description__WEBPACK_IMPORTED_MODULE_1__.detailsDescription)(task));
    }
    if (task.subtasks) {
        detailsContainer.appendChild((0,_details_list__WEBPACK_IMPORTED_MODULE_3__.detailsList)(task));
    }
    if (task.dueDate) {
        detailsContainer.appendChild((0,_details_due__WEBPACK_IMPORTED_MODULE_2__.detailsDue)(task));
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
        detailsEditIcon.dataset.taskId = task.id;
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

/***/ "./src/view/task-group-container/task-container/details-container/details-due.js":
/*!***************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/details-container/details-due.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsDue": () => (/* binding */ detailsDue)
/* harmony export */ });
function detailsDue(task) {
    const container = document.createElement("div");
    container.classList.add("task-details-due-container");

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.classList.add("task-details-due-icon");
    icon.innerText = "today";

    const date = document.createElement("div");
    date.classList.add("task-details-due-date");
    date.innerText = task.dueDate;

    container.appendChild(icon);
    container.appendChild(date);

    return container;
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
/* harmony import */ var _events_toggle_subtask_checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/toggle-subtask-checked */ "./src/view/task-group-container/task-container/details-container/events/toggle-subtask-checked.js");


function detailsList(task) {
    const detailsList = document.createElement("div");
    detailsList.classList.add("task-details-list");

    function createItemContainer(subtaskId, subtaskTitle, subtaskChecked) {
        const itemContainer = document.createElement("label");
        itemContainer.classList.add("task-details-item-container");

        const checkbox = (() => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = subtaskChecked;
            checkbox.classList.add("task-details-item-checkbox");
            checkbox.dataset.subtaskId = subtaskId;
            checkbox.addEventListener("change", _events_toggle_subtask_checked__WEBPACK_IMPORTED_MODULE_0__.toggleSubtaskChecked);
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
                subtask.id,
                subtask.title,
                subtask.checked
            );
            detailsList.appendChild(itemContainer);
        });
    })();

    return detailsList;
}


/***/ }),

/***/ "./src/view/task-group-container/task-container/details-container/events/toggle-subtask-checked.js":
/*!*********************************************************************************************************!*\
  !*** ./src/view/task-group-container/task-container/details-container/events/toggle-subtask-checked.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleSubtaskChecked": () => (/* binding */ toggleSubtaskChecked)
/* harmony export */ });
/* harmony import */ var _db_update_update_subtask_checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../db/update/update-subtask-checked */ "./src/db/update/update-subtask-checked.js");


function toggleSubtaskChecked(e) {
    console.dir(e.target);
    // const taskId = e.target.parentNode.parentNode.id;
    // localStorageUpdateSubtaskChecked(taskId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RiL2NyZWF0ZS9hZGQtdGFzay10by1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvZGVmYXVsdC1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3Byb2Nlc3MtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvZGVsZXRlL2RlbGV0ZS10YXNrLWZyb20tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbGFzdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9yZWFkL2dldC10YXNrLWJ5LWlkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi91cGRhdGUvdXBkYXRlLXN1YnRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvdXBkYXRlL3VwZGF0ZS10YXNrLWNoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL2Nsb3NlLXNpZGUtbmF2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3NpZGUtbmF2L2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL3Nob3ctc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2FkZC10b3AuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9ldmVudHMvY2xvc2UtY3JlYXRlLW5ldy10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvYWRkLXRvcC9jbG9zZS1idXR0b24vaWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9kdWUvZHVlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9uYW1lL25hbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3ByaW9yaXR5L3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJtaXQvc3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJ0YXNrcy9hZGQvYWRkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJ0YXNrcy9saXN0L2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3N1YnRhc2tzL3N1YnRhc2tzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvZXZlbnRzL3Byb2Nlc3MtZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvc2hvdy1jcmVhdGUtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2V2ZW50cy90YXNrLWFkZC1zdWJ0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9kZWxldGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvY2xvc2UtZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvdGFzay1wcm9jZXNzLWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL3Rhc2stc2hvdy1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Fuc3dlcnMtY29udGFpbmVyL2Fuc3dlcnMtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9hbnN3ZXJzLWNvbnRhaW5lci9uby1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Fuc3dlcnMtY29udGFpbmVyL3llcy1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Nsb3NlLWJ0bi9jbG9zZS1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9hZGQtdG8tZ3JvdXAtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZXZlbnRzL3Rhc2stc2hvdy1lZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2V2ZW50cy90YXNrLXRvZ2dsZS1kZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2dyb3VwLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9jaGVja2JveC1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lci9ldmVudHMvdG9nZ2xlLXRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1kdWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2V2ZW50cy90b2dnbGUtc3VidGFzay1jaGVja2VkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL3Rhc2stY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCwrQkFBK0Isa0NBQWtDLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLDRCQUE0Qiw4QkFBOEIsdUNBQXVDLHlDQUF5QyxHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyxVQUFVLHdCQUF3Qiw2Q0FB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QU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLHFCQUFxQixPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGdDQUFnQywrQkFBK0Isa0NBQWtDLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLDRCQUE0Qiw4QkFBOEIsdUNBQXVDLHlDQUF5QyxHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyxVQUFVLHdCQUF3Qiw2Q0FBNkMsK0JBQStCLDBCQUEwQixXQUFXLFVBQVUsZ0JBQWdCLG1EQUFtRCx3QkFBd0IsR0FBRyxtREFBbUQsd0JBQXdCLHdCQUF3QixtQ0FBbUMsOEJBQThCLFdBQVcscUJBQXFCLDJCQUEyQixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQixzQkFBc0Isb0NBQW9DLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyxxQkFBcUIsc0NBQXNDLHlCQUF5QixHQUFHLGNBQWMsNkNBQTZDLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0IscUNBQXFDLGdCQUFnQix3QkFBd0IsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyxpQ0FBaUMsd0JBQXdCLE1BQU0sdUJBQXVCLGtCQUFrQixHQUFHLDRCQUE0Qix5QkFBeUIscUJBQXFCLG9CQUFvQixpQkFBaUIsb0JBQW9CLDBCQUEwQixzQkFBc0IsNkNBQTZDLCtDQUErQyxHQUFHLGVBQWUsc0JBQXNCLGlCQUFpQixhQUFhLGNBQWMsb0JBQW9CLDhCQUE4QixtQkFBbUIsZUFBZSx5QkFBeUIsdUJBQXVCLHVEQUF1RCxxQkFBcUIsdUJBQXVCLGlCQUFpQixHQUFHLHNCQUFzQixtQkFBbUIsNkNBQTZDLGlCQUFpQixHQUFHLG9CQUFvQixvQkFBb0Isc0JBQXNCLDZCQUE2Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQixHQUFHLG9CQUFvQixpQkFBaUIsc0JBQXNCLDRCQUE0QixzQkFBc0IsdUJBQXVCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIscUJBQXFCLDRCQUE0QixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxrREFBa0QsNENBQTRDLEdBQUcsMkJBQTJCLHVCQUF1QixpQkFBaUIsR0FBRywrQkFBK0Isc0JBQXNCLEdBQUcsb0NBQW9DLDJCQUEyQixHQUFHLDJCQUEyQix5QkFBeUIsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxRQUFRLHlCQUF5QixHQUFHLDRCQUE0QixrQkFBa0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QixHQUFHLDhCQUE4QixvQkFBb0IsMEJBQTBCLHlCQUF5QixrQkFBa0Isb0JBQW9CLDRCQUE0QixxREFBcUQsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsb0JBQW9CLEdBQUcscUJBQXFCLHFCQUFxQixrQkFBa0IsbUJBQW1CLDJCQUEyQiwwQkFBMEIsb0NBQW9DLEdBQUcsK0NBQStDLG9EQUFvRCxHQUFHLCtDQUErQyxvREFBb0QsR0FBRywrQ0FBK0Msb0RBQW9ELEdBQUcsK0NBQStDLG9EQUFvRCxHQUFHLDhDQUE4QywwQ0FBMEMsc0NBQXNDLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLDBDQUEwQywrQkFBK0Isb0NBQW9DLEdBQUcsNEJBQTRCLHlCQUF5QixrQkFBa0IsR0FBRyw2QkFBNkIseUJBQXlCLGlCQUFpQix1QkFBdUIsa0JBQWtCLG9CQUFvQixzQkFBc0IsNEJBQTRCLHVEQUF1RCwyREFBMkQsaUJBQWlCLGdDQUFnQyxHQUFHLG9DQUFvQyw4QkFBOEIsMkJBQTJCLDBCQUEwQixpQkFBaUIsR0FBRywrQkFBK0Isa0JBQWtCLHFCQUFxQixzQkFBc0IsMEJBQTBCLDZCQUE2QiwwQkFBMEIsR0FBRyx5QkFBeUIseUJBQXlCLGdCQUFnQixrQkFBa0IsR0FBRywrQkFBK0Isb0JBQW9CLGdDQUFnQyxHQUFHLHVEQUF1RCwwQkFBMEIsR0FBRyw0RkFBNEYsc0JBQXNCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGtDQUFrQyxvQkFBb0IseUJBQXlCLDRCQUE0QixHQUFHLGtDQUFrQyxxQkFBcUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsMEJBQTBCLG1DQUFtQyxHQUFHLGlDQUFpQyx5QkFBeUIsb0JBQW9CLEdBQUcsd0VBQXdFLDBDQUEwQyxzQ0FBc0MsR0FBRyxtRUFBbUUsK0JBQStCLG9DQUFvQyxHQUFHLGlDQUFpQyxvQkFBb0IsR0FBRyw0QkFBNEIsc0JBQXNCLDJCQUEyQixHQUFHLDhEQUE4RCxzQkFBc0IsaUJBQWlCLGFBQWEsY0FBYyxvQkFBb0IsbUJBQW1CLG9CQUFvQix3QkFBd0IsaUNBQWlDLDBCQUEwQixxQ0FBcUMsR0FBRyw0RUFBNEUsdUJBQXVCLHdCQUF3QixHQUFHLDBDQUEwQyx5QkFBeUIsaUJBQWlCLGlCQUFpQiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw0QkFBNEIscURBQXFELG1DQUFtQyxpQ0FBaUMsK0JBQStCLEdBQUcsMkJBQTJCLFlBQVksc0JBQXNCLHFCQUFxQixPQUFPLFVBQVUsaUJBQWlCLHFCQUFxQixPQUFPLEdBQUcsd0JBQXdCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDRCQUE0QixxQ0FBcUMsc0JBQXNCLDhCQUE4QixHQUFHLG9DQUFvQyxvQkFBb0IsOEJBQThCLEdBQUcsNEJBQTRCLHlCQUF5QixnQkFBZ0Isa0JBQWtCLEdBQUcsaUNBQWlDLHNCQUFzQixHQUFHLDZCQUE2Qiw0QkFBNEIsR0FBRyxxQkFBcUIsc0JBQXNCLHlCQUF5QixHQUFHLGdHQUFnRyxrQkFBa0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixHQUFHLHFDQUFxQyxtREFBbUQsR0FBRyxrREFBa0QscUZBQXFGLGlCQUFpQixpQkFBaUIsa0NBQWtDLHlCQUF5QiwwQkFBMEIsR0FBRyxzQ0FBc0MseUJBQXlCLDRCQUE0QixHQUFHLGtDQUFrQyw0QkFBNEIsR0FBRyxtQ0FBbUMseUJBQXlCLGVBQWUsZ0JBQWdCLG9CQUFvQixzQkFBc0IsMEJBQTBCLGtCQUFrQixnQ0FBZ0MsNENBQTRDLHdCQUF3QixHQUFHLHdDQUF3QyxzQkFBc0IsR0FBRyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHFDQUFxQyxvQkFBb0Isb0NBQW9DLHFCQUFxQixHQUFHLHVDQUF1Qyx5QkFBeUIsaUJBQWlCLEdBQUcsc0NBQXNDLHlCQUF5QixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLDRCQUE0QixxQkFBcUIsR0FBRyxpQkFBaUIsb0RBQW9ELEdBQUcsNERBQTRELGdEQUFnRCxHQUFHLGlCQUFpQixvREFBb0QsR0FBRyw0REFBNEQsZ0RBQWdELEdBQUcsaUJBQWlCLG9EQUFvRCxHQUFHLDREQUE0RCxnREFBZ0QsR0FBRyxpQkFBaUIsb0RBQW9ELEdBQUcsNERBQTRELGdEQUFnRCxHQUFHLGlFQUFpRSxrQ0FBa0MsR0FBRyxvREFBb0Qsa0JBQWtCLHNCQUFzQiwwQkFBMEIsNkNBQTZDLGtCQUFrQixHQUFHLHFCQUFxQjtBQUNyaXlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HOzs7O0FBSW5HOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7O0FBRXBDLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxRTtBQUNSOztBQUV0RDtBQUNQLGlCQUFpQixpRkFBbUI7O0FBRXBDOztBQUVBLElBQUksMEVBQWtCO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUNBQXlDO0FBQ3RELGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEseUNBQXlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0RBQXNEO0FBQ25FLGFBQWEsMERBQTBEO0FBQ3ZFLGFBQWEsMENBQTBDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJDQUEyQztBQUN4RCxhQUFhLGlEQUFpRDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRDZDOztBQUV0QztBQUNQO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsc0RBQVc7QUFDckQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnRDtBQUNvQjtBQUNpRTtBQUN4Qzs7QUFFdEY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0REFBUztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDhJQUFrQjtBQUMxQixRQUFRLHNHQUFtQjtBQUMzQixRQUFRLGlGQUFxQjtBQUM3Qjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHFFO0FBQ0E7O0FBRTlEO0FBQ1AsaUJBQWlCLGlGQUFtQjtBQUNwQzs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJLGlGQUFrQjtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1orRDs7QUFFeEQ7QUFDUCxpQkFBaUIsNEVBQW1COztBQUVwQzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSitEOztBQUV4RDtBQUNQLGlCQUFpQiw0RUFBbUI7O0FBRXBDOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnFFO0FBQ0E7O0FBRTlEO0FBQ1A7O0FBRUEsaUJBQWlCLGlGQUFtQjs7QUFFcEM7O0FBRUE7O0FBRUEsSUFBSSxpRkFBa0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFFO0FBQ0E7O0FBRTlEO0FBQ1A7O0FBRUEsaUJBQWlCLGlGQUFtQjs7QUFFcEM7O0FBRUE7O0FBRUEsSUFBSSxpRkFBa0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjhDO0FBQ0U7O0FBRXpDO0FBQ1AsSUFBSSwyREFBVztBQUNmLElBQUksNkRBQVk7QUFDaEI7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWeUM7O0FBRWxDO0FBQ1AsSUFBSSxzREFBTTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaUQ7QUFDaUI7QUFDWDs7QUFFaEQ7QUFDUDtBQUNBO0FBQ0EsNkJBQTZCLDhEQUFROztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSx5Q0FBeUMsMkVBQWlCOztBQUUxRCxJQUFJLG9FQUFVO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckIyQztBQUNSOztBQUU1QjtBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQU07QUFDL0IseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDBEO0FBQ3BCOztBQUUvQjtBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQVc7QUFDbEMsdUJBQXVCLG1EQUFLO0FBQzVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDhCO0FBQ3NDOztBQUU3RDtBQUNQO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQUk7O0FBRWhDLDBDQUEwQyw2RUFBa0I7O0FBRTVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeUM7QUFDcUI7QUFDVTtBQUNsQztBQUNlO0FBQ1o7QUFDd0I7O0FBRTFEO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixzREFBVTtBQUMvQjs7QUFFQSx3QkFBd0IsMkVBQWlCO0FBQ3pDOztBQUVBLDhCQUE4QixxRkFBdUI7QUFDckQ7O0FBRUEsZ0JBQWdCLG1EQUFTO0FBQ3pCOztBQUVBLHFCQUFxQixrRUFBYztBQUNuQzs7QUFFQSxxQkFBcUIsc0RBQU07O0FBRTNCO0FBQ0EsUUFBUSxvRUFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25DTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUE87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCbUM7QUFDSDs7QUFFekI7QUFDUDtBQUNBOztBQUVBLGtDQUFrQyxnREFBSTtBQUN0QyxrQ0FBa0MsNkNBQUc7O0FBRXJDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEQ7O0FBRXZEO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG9FQUFXOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRCx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHNEOztBQUUvQztBQUNQOztBQUVBOztBQUVBO0FBQ0EsUUFBUSxtRUFBZTtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCc0M7QUFDRzs7QUFFbEM7QUFDUDtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG1EQUFLOztBQUVyQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hvRDs7QUFFN0M7QUFDUCxJQUFJLGlFQUFjO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7O0FDSitGOztBQUV4RjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQSx5REFBeUQsT0FBTztBQUNoRTs7QUFFQSxJQUFJLHFHQUEwQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLFdBQVcsb0JBQW9COztBQUV4QjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCbUM7QUFDRjs7QUFFMUI7QUFDUDtBQUNBOztBQUVBLGlDQUFpQyxnREFBTTtBQUN2QyxpQ0FBaUMsOENBQUs7O0FBRXRDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYd0Q7O0FBRWpEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkRBQVc7O0FBRS9DO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnFFO0FBQ2I7O0FBRWpEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDhFQUFpQjtBQUN6QixRQUFRLGlFQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3RDs7QUFFakQ7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyw2REFBVzs7QUFFbEQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGlEO0FBQ0Y7QUFDMEI7O0FBRWxFO0FBQ1A7QUFDQTs7QUFFQSxzQkFBc0IsOERBQVE7QUFDOUIsc0JBQXNCLDREQUFRO0FBQzlCLHNCQUFzQixzRkFBZ0I7O0FBRXRDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7O0FBRXpEO0FBQ1A7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw2RUFBYTtBQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjBEO0FBQ0g7QUFDb0M7O0FBRXBGO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVFQUFpQjtBQUNqQztBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFtQjtBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLG9HQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekIrRjs7QUFFeEY7QUFDUDtBQUNBLElBQUksd0dBQWlCO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7QUNMTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQitEO0FBQ1k7QUFDbEM7O0FBRWxDO0FBQ1AsdUJBQXVCLG9GQUFtQjs7QUFFMUM7QUFDQSxRQUFRLDRFQUFtQjtBQUMzQixLQUFLOztBQUVMLElBQUksc0RBQU07QUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQ1ppRTs7QUFFMUQ7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMEVBQWlCOztBQUU3RDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzZGOztBQUV0RjtBQUNQO0FBQ0EsSUFBSSw2RkFBNkI7QUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMMkQ7QUFDQTtBQUNoQjtBQUNFOztBQUV0QztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsd0VBQWtCOztBQUVuRDtBQUNBLHFDQUFxQyx3RUFBa0I7QUFDdkQ7QUFDQTtBQUNBLHFDQUFxQywwREFBVztBQUNoRDtBQUNBO0FBQ0EscUNBQXFDLHdEQUFVO0FBQy9DOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnVFOztBQUVoRTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnRkFBb0I7QUFDcEU7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEbUc7O0FBRTVGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRFO0FBQ0g7O0FBRWxFO0FBQ1A7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25ELCtCQUErQixRQUFROztBQUV2Qyw4QkFBOEIseUZBQWlCOztBQUUvQyw4QkFBOEIsc0ZBQWdCOztBQUU5QztBQUNBOzs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCOztBQUU4QjtBQUN1Qjs7QUFFRztBQUNBO0FBQ1M7O0FBRXRGLGdFQUFPO0FBQ1AsdUZBQW9COztBQUVwQiwwRkFBYztBQUNkLDBGQUFZO0FBQ1osbUdBQWUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMyODc2YmU7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMTogI2NhMmMyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS0yOiAjY2E4MDJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTM6ICMzZjZkYzI7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktNDogIzcwMmNjYTtcXG4gICAgLS1jb2xvci1ncmV5OiAjN2E3YTdhO1xcbiAgICAtLWNvbG9yLXNoYWRvdzogI2E1YTVhNTtcXG4gICAgLS1jb2xvci1lbGVtZW50LXByaW1hcnk6ICNlMWUxZTE7XFxuICAgIC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnk6ICNlNmU2ZTY7XFxufVxcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gICAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwOyAvKiAxICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbn1cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi50b3AtbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi50b3AtbmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b3AtbmF2LWl0ZW0ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtOmZpcnN0LW9mLXR5cGUge1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMDsgKi9cXG59XFxuXFxuLnRvcC1uYXYtaXRlbS1idG4ge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFkZC10YXNrLWZsb2F0aW5nLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxLjNyZW07XFxuICAgIHJpZ2h0OiAxLjNyZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMyNTI1MjU7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggM3B4ICMyNTI1MjU4YTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNpZGUtbmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0tbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW06aG92ZXIsXFxuLnNpZGUtbmF2LWl0ZW0tYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhZG93KTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1saXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1saXN0LWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1saXN0LWJ0bi1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20taXRlbSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbn1cXG5cXG4udGFza3MtZ3JvdXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMSB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTIge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktNCB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1zaG93LWRldGFpbHMtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuNXJlbSB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLWNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250cm9sbGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZWRpdC1idG4sXFxuLnRhc2stZGV0YWlscy1kZWxldGUtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0biBzcGFuLFxcbi50YXNrLWFkZC1jbG9zZS1idG4gc3BhbixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1saXN0IHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzI1MjUyNTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZHVlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZHVlLWljb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwtY29udGFpbmVyLFxcbi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1YjtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmUsXFxuLnRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLFxcbi50YXNrLWRlbGV0ZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtICM1YzVjNWM7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLnRhc2stZGVsZXRlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW0gM3JlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWFuc3dlcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jbG9zZS1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWFuc3dlci1idG4ge1xcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMS41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZGVzY3JpcHRpb24sXFxuLnRhc2stYWRkLW5hbWUsXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCxcXG4udGFzay1hZGQtZHVlLWRhdGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtbmFtZS12YWxpZGF0aW9uLWZhbHNlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWFkZC1uYW1lLXZhbGlkYXRpb24tZmFsc2U6OnBsYWNlaG9sZGVyIHtcXG4gICAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFza3MtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlOTRiODtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzAwMDtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG4vKiBcXG4udGFzay1hZGQtZHVlLXRleHQge1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn0gKi9cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnByaW9yaXR5LTIge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4ucHJpb3JpdHktMyB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi5wcmlvcml0eS00IHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gIzAwMDtcXG59XFxuXFxuLnRhc2stYWRkLXN1Ym1pdC1idG4sXFxuLnRhc2stZGVsZXRlLWFuc3dlci1idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCLEVBQUUsTUFBTTtJQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0lBQ3RDLGdCQUFnQixFQUFFLE1BQU07SUFDeEIsV0FBVyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7SUFDSSxTQUFTLEVBQUUsTUFBTTtJQUNqQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0FBQ3JCOztBQUVBOzs7OztJQUtJLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE1BQU07SUFDakIsb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdC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b290IHtcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMjg3NmJlO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTE6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMjogI2NhODAyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS0zOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTQ6ICM3MDJjY2E7XFxuICAgIC0tY29sb3ItZ3JleTogIzdhN2E3YTtcXG4gICAgLS1jb2xvci1zaGFkb3c6ICNhNWE1YTU7XFxuICAgIC0tY29sb3ItZWxlbWVudC1wcmltYXJ5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IDNweCAjMjUyNTI1OGE7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYWRvdyk7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgIzI1MjUyNTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMyB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stc2hvdy1kZXRhaWxzLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjVyZW0gdmFyKC0tY29sb3Itc2hhZG93KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXItYWN0aXZlIHtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udHJvbGxlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtZWRpdC1idG4gc3BhbixcXG4udGFzay1hZGQtY2xvc2UtYnRuIHNwYW4sXFxuLnRhc2stZGV0YWlscy1kZWxldGUtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lcixcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNWI7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlLFxcbi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbCxcXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAjNWM1YzVjO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi50YXNrLWRlbGV0ZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogNHJlbSAycmVtIDNyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWRlc2NyaXB0aW9uLFxcbi50YXNrLWFkZC1uYW1lLFxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQsXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLW5hbWUtdmFsaWRhdGlvbi1mYWxzZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1hZGQtbmFtZS12YWxpZGF0aW9uLWZhbHNlOjpwbGFjZWhvbGRlciB7XFxuICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTk0Yjg7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLyogXFxuLnRhc2stYWRkLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59ICovXFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi5wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4ucHJpb3JpdHktNCB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC40cmVtICMwMDA7XFxufVxcblxcbi50YXNrLWFkZC1zdWJtaXQtYnRuLFxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5pbXBvcnQgeyBzYXZlSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zYXZlLWluLWxvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb0xvY2FsU3RvcmFnZSh0YXNrKSB7XG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGxpc3QucHVzaCh0YXNrKTtcblxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZShsaXN0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0TGlzdCA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJCdXkgcGl6emEgaW5ncmVkaWVudHNcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxlbm55IGRvZXNuJ3QgbGlrZSBhbmNob3ZpZXMhXCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXG4gICAgICAgICAgICB7IGlkOiAxLCB0aXRsZTogXCJDaGVlc2VcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIlRvbWF0b1wiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCB0aXRsZTogXCJPbGl2ZXNcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIxLTA3LTIzXCIsXG4gICAgICAgIHByaW9yaXR5OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwiRG8gbGF1bmRyeVwiLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXSxcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIxLTA3LTIzXCIsXG4gICAgICAgIHByaW9yaXR5OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6IFwiRmluaXNoIHByb2plY3RcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvbid0IGZvcmdldCB0byB1c2UgUG9tb2Rvcm8gVGltZXJcIixcbiAgICAgICAgc3VidGFza3M6IFtcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIkFkZCBmYW5jeSBhbmltYXRpb25zXCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIlJldmlldyBTT0xJRCBwcmluY2lwbGVzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCB0aXRsZTogXCJGaXggYnVnc1wiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yM1wiLFxuICAgICAgICBwcmlvcml0eTogMyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIk1ha2UgYnJlYWRcIixcbiAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlIG9saXZlIG9pbD9cIixcbiAgICAgICAgc3VidGFza3M6IFtcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIkJ1eSB5ZWFzdFwiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogXCJUcnkgbmV3IHJlY2lwZVwiLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgICBdLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjEtMDctMjhcIixcbiAgICAgICAgcHJpb3JpdHk6IDIsXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBkZWZhdWx0TGlzdCB9IGZyb20gXCIuL2RlZmF1bHQtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYWx0TGlzdEpTT04gPSBKU09OLnN0cmluZ2lmeShkZWZhdWx0TGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIGRlZmFsdExpc3RKU09OKTtcbn1cbiIsImltcG9ydCB7IGdldExhc3RJZCB9IGZyb20gXCIuLi9yZWFkL2dldC1sYXN0LWlkXCI7XG5pbXBvcnQgeyBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9hZGQtdGFzay10by1sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi4vLi4vdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvY2xvc2UtYnV0dG9uL2V2ZW50cy9jbG9zZS1jcmVhdGUtbmV3LXRhc2tcIjtcbmltcG9ydCB7IGFkZFRvR3JvdXBDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9hZGQtdG8tZ3JvdXAtY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRm9ybShcbiAgICBlLFxuICAgIHRhc2tOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHN1YnRhc2tzQ29udGFpbmVyLFxuICAgIGR1ZSxcbiAgICBwcmlvcml0eVxuKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbGFzdElkID0gZ2V0TGFzdElkKCk7XG4gICAgbGV0IGlkID0gbGFzdElkICsgMTtcblxuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnByb2Nlc3MgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIGlkID0gZS50YXJnZXQuZGF0YXNldC5lZGl0ZWRUYXNrO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gdGFza05hbWUudmFsdWU7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRhc2tOYW1lLnBsYWNlaG9sZGVyID0gXCJZb3UgbXVzdCBlbnRlciBhIG5hbWVcIjtcbiAgICAgICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLW5hbWUtdmFsaWRhdGlvbi1mYWxzZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJ0YXNrcyA9IHN1YnRhc2tzQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IHN1YnRhc2tzUHJvY2Vzc2VkID0gW107XG4gICAgc3VidGFza3MuZm9yRWFjaCgoc3VidGFzaykgPT4ge1xuICAgICAgICBpZiAoc3VidGFzay52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3VidGFza1Byb2Nlc3NlZCA9IHtcbiAgICAgICAgICAgICAgICBpZDogc3VidGFzay5kYXRhc2V0LnN1YnRhc2tJZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogc3VidGFzay52YWx1ZSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdWJ0YXNrc1Byb2Nlc3NlZC5wdXNoKHN1YnRhc2tQcm9jZXNzZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZHVlLmNoaWxkTm9kZXNbMF0udmFsdWU7XG5cbiAgICBjb25zdCBwcmlvcml0eUxldmVscyA9IHByaW9yaXR5LmNoaWxkTm9kZXM7XG5cbiAgICBsZXQgcHJpb3JpdHlMZXZlbFByb2Nlc3NlZDtcbiAgICBwcmlvcml0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gbGV2ZWwuY2hpbGROb2Rlc1swXS5jaGVja2VkO1xuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IGxldmVsLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzFdO1xuICAgICAgICAgICAgcHJpb3JpdHlMZXZlbFByb2Nlc3NlZCA9IE51bWJlcihcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxldmVsW3ByaW9yaXR5TGV2ZWwubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgc3VidGFza3M6IHN1YnRhc2tzUHJvY2Vzc2VkLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlMZXZlbFByb2Nlc3NlZCxcbiAgICB9O1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGNsb3NlQ3JlYXRlTmV3VGFzaygpO1xuICAgICAgICBhZGRUb0dyb3VwQ29udGFpbmVyKG5ld1Rhc2spO1xuICAgICAgICBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UobmV3VGFzayk7XG4gICAgfVxuXG4gICAgZS50YXJnZXQucmVzZXQoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCkge1xuICAgIGNvbnN0IGxpc3RKU09OID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIGxpc3RKU09OKTtcbn1cbiIsImltcG9ydCB7IHNhdmVJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9jcmVhdGUvc2F2ZS1pbi1sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFza0lkKSB7XG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcbiAgICB0YXNrSWQgPSBOdW1iZXIodGFza0lkKTtcblxuICAgIGNvbnN0IHRvRGVsZXRlSWRleCA9IGxpc3QuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgbGlzdC5zcGxpY2UodG9EZWxldGVJZGV4LCAxKTtcblxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZShsaXN0KTtcbn1cbiIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0SWQoKSB7XG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGNvbnN0IGxhc3RJZCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXS5pZDtcblxuICAgIHJldHVybiBsYXN0SWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpIHtcbiAgICBjb25zdCBzdG9yZWRMaXN0SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKTtcbiAgICBjb25zdCBzdG9yZWRMaXN0ID0gSlNPTi5wYXJzZShzdG9yZWRMaXN0SlNPTik7XG4gICAgcmV0dXJuIHN0b3JlZExpc3Q7XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4vZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0J5SWQodGFza0lkKSB7XG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGNvbnN0IGZvdW5kVGFzayA9IGxpc3QuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gTnVtYmVyKHRhc2tJZCkpO1xuXG4gICAgcmV0dXJuIGZvdW5kVGFzaztcbn1cbiIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5pbXBvcnQgeyBzYXZlSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxTdG9yYWdlVXBkYXRlU3VidGFza0NoZWNrZWQodGFza0lkKSB7XG4gICAgdGFza0lkID0gTnVtYmVyKHRhc2tJZFt0YXNrSWQubGVuZ3RoIC0gMV0pO1xuXG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGNvbnN0IHRhc2tUb1VwZGF0ZUluZGV4ID0gbGlzdC5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICBsaXN0W3Rhc2tUb1VwZGF0ZUluZGV4XS5jaGVja2VkID0gIWxpc3RbdGFza1RvVXBkYXRlSW5kZXhdLmNoZWNrZWQ7XG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCk7XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NyZWF0ZS9zYXZlLWluLWxvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVVwZGF0ZVRhc2tDaGVja2VkKHRhc2tJZCkge1xuICAgIHRhc2tJZCA9IE51bWJlcih0YXNrSWRbdGFza0lkLmxlbmd0aCAtIDFdKTtcblxuICAgIGNvbnN0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG5cbiAgICBjb25zdCB0YXNrVG9VcGRhdGVJbmRleCA9IGxpc3QuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgbGlzdFt0YXNrVG9VcGRhdGVJbmRleF0uY2hlY2tlZCA9ICFsaXN0W3Rhc2tUb1VwZGF0ZUluZGV4XS5jaGVja2VkO1xuXG4gICAgc2F2ZUluTG9jYWxTdG9yYWdlKGxpc3QpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU2lkZU5hdigpIHtcbiAgICBjb25zdCBzaWRlTmF2Q2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2LWNsb3NlLWJ0blwiKTtcblxuICAgIHNpZGVOYXZDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VTaWRlTmF2KTtcblxuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xuICAgICAgICBzaWRlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlLW5hdi1hY3RpdmVcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2hvd1NpZGVOYXYgfSBmcm9tIFwiLi9zaG93LXNpZGUtbmF2XCI7XG5pbXBvcnQgeyBjbG9zZVNpZGVOYXYgfSBmcm9tIFwiLi9jbG9zZS1zaWRlLW5hdlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIHNob3dTaWRlTmF2KCk7XG4gICAgY2xvc2VTaWRlTmF2KCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVOYXYoKSB7XG4gICAgY29uc3Qgc2lkZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXYtYnRuXCIpO1xuXG4gICAgc2lkZU5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvdyk7XG5cbiAgICBjb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hdlwiKTtcblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHNpZGVOYXYuY2xhc3NMaXN0LmFkZChcInNpZGUtbmF2LWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWRlTmF2KCkge1xuICAgIGV2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgYWRkTW9kYWwgfSBmcm9tIFwiLi9hZGQtbW9kYWwvYWRkLW1vZGFsXCI7XG5pbXBvcnQgeyBzaG93Q3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL2V2ZW50cy9zaG93LWNyZWF0ZS1uZXctdGFza1wiO1xuaW1wb3J0IHsgYWRkU3VidGFzayB9IGZyb20gXCIuL2V2ZW50cy90YXNrLWFkZC1zdWJ0YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb250YWluZXIoKSB7XG4gICAgY29uc3QgYWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICBhZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gYWRkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZsb2F0aW5nLWJ0blwiKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q3JlYXRlTmV3VGFzayk7XG5cbiAgICBhZGRTdWJ0YXNrKCk7XG59XG4iLCJpbXBvcnQgeyBhZGRUb3AgfSBmcm9tIFwiLi9hZGQtdG9wL2FkZC10b3BcIjtcbmltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi9mb3JtL2Zvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGFsKCkge1xuICAgIGNvbnN0IGFkZE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRNb2RhbC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWxcIik7XG4gICAgYWRkTW9kYWwuYXBwZW5kQ2hpbGQoYWRkVG9wKCkpO1xuICAgIGFkZE1vZGFsLmFwcGVuZENoaWxkKGZvcm0oKSk7XG4gICAgcmV0dXJuIGFkZE1vZGFsO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VCdXR0b24gfSBmcm9tIFwiLi9jbG9zZS1idXR0b24vY2xvc2UtYnV0dG9uXCI7XG5pbXBvcnQgeyB0aXRsZSB9IGZyb20gXCIuL3RpdGxlL3RpdGxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb3AoKSB7XG4gICAgY29uc3QgYWRkVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUb3AuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXRvcFwiKTtcbiAgICBhZGRUb3AuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24oKSk7XG4gICAgYWRkVG9wLmFwcGVuZENoaWxkKHRpdGxlKCkpO1xuICAgIHJldHVybiBhZGRUb3A7XG59XG4iLCJpbXBvcnQgeyBpY29uIH0gZnJvbSBcIi4vaWNvblwiO1xuaW1wb3J0IHsgY2xvc2VDcmVhdGVOZXdUYXNrIH0gZnJvbSBcIi4vZXZlbnRzL2Nsb3NlLWNyZWF0ZS1uZXctdGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1jbG9zZS1idG5cIik7XG4gICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoaWNvbigpKTtcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUNyZWF0ZU5ld1Rhc2spO1xuXG4gICAgcmV0dXJuIGNsb3NlQnV0dG9uO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ3JlYXRlTmV3VGFzaygpIHtcbiAgICBjb25zdCB0YXNrQWRkTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1tb2RhbC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrQWRkTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgaWNvbi5pbm5lclRleHQgPSBcImNsb3NlXCI7XG4gICAgcmV0dXJuIGljb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXRpdGxlXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTmV3IHRhc2tcIjtcbiAgICByZXR1cm4gdGl0bGU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiO1xuICAgIGRlc2NyaXB0aW9uLm5hbWUgPSBcIm5ldy10YXNrLWRlc2NyaXB0aW9uXCI7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1ZSgpIHtcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWR1ZS1kYXRlXCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBpbnB1dC5uYW1lID0gXCJuZXctdGFzay1kdWUtZGF0ZVwiO1xuXG4gICAgZHVlLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiBkdWU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVOYW1lIH0gZnJvbSBcIi4vbmFtZS9uYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVEZXNjcmlwdGlvbiB9IGZyb20gXCIuL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVTdWJ0YXNrc0NvbnRhaW5lciB9IGZyb20gXCIuL3N1YnRhc2tzL3N1YnRhc2tzLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgY3JlYXRlRHVlIH0gZnJvbSBcIi4vZHVlL2R1ZVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJpb3JpdHkgfSBmcm9tIFwiLi9wcmlvcml0eS9wcmlvcml0eVwiO1xuaW1wb3J0IHsgc3VibWl0IH0gZnJvbSBcIi4vc3VibWl0L3N1Ym1pdFwiO1xuaW1wb3J0IHsgcHJvY2Vzc0Zvcm0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGIvY3JlYXRlL3Byb2Nlc3MtZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtZm9ybVwiKTtcbiAgICBmb3JtLmRhdGFzZXQucHJvY2VzcyA9IFwiY3JlYXRlXCI7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGNyZWF0ZU5hbWUoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHN1YnRhc2tzQ29udGFpbmVyID0gY3JlYXRlU3VidGFza3NDb250YWluZXIoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1YnRhc2tzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGR1ZSA9IGNyZWF0ZUR1ZSgpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlUHJpb3JpdHkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KCkpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIHByb2Nlc3NGb3JtKGUsIHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgc3VidGFza3NDb250YWluZXIsIGR1ZSwgcHJpb3JpdHkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLW5hbWVcIik7XG4gICAgbmFtZS5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xuICAgIG5hbWUubmFtZSA9IFwibmV3LXRhc2stbmFtZVwiO1xuICAgIHJldHVybiBuYW1lO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5KCkge1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtcHJpb3JpdHktY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gWzEsIDIsIDMsIDRdO1xuXG4gICAgbGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtcHJpb3JpdHktaXRlbS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94XCIpO1xuICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICBpbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktc2VsZWN0b3JcIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtsZXZlbH1gKTtcblxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmlvcml0eTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJtaXQtYnRuXCIpO1xuICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcIkFkZFwiO1xuXG4gICAgcmV0dXJuIHN1Ym1pdDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGQoKSB7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXItY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXJcIik7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBcImFkZFwiO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGFkZC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGFkZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2tzLWxpc3RcIik7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJTdWJ0YXNrIChvcHRpb25hbClcIjtcbiAgICBpbnB1dC5kYXRhc2V0LnN1YnRhc2tJZCA9IFwiMVwiO1xuXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cbiIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi9saXN0L2xpc3RcIjtcbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuL2FkZC9hZGRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1YnRhc2tzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHN1YnRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJ0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgc3VidGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCgpKTtcbiAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGQoKSk7XG5cbiAgICByZXR1cm4gc3VidGFza3NDb250YWluZXI7XG59XG4iLCJpbXBvcnQgeyBnZXRUYXNrQnlJZCB9IGZyb20gXCIuLi8uLi8uLi9kYi9yZWFkL2dldC10YXNrLWJ5LWlkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWRpdFRhc2soZSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWZvcm1cIik7XG4gICAgZm9ybS5kYXRhc2V0LnByb2Nlc3MgPSBcImVkaXRcIjtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtc3VibWl0LWJ0blwiKTtcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XG5cbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBmb3JtLmRhdGFzZXQuZWRpdGVkVGFzayA9IHRhc2tJZDtcblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrQnlJZCh0YXNrSWQpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLXRpdGxlXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiRWRpdCB0YXNrXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtbmFtZVwiKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG5cbiAgICBpZiAodGFzay5kZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGFzay5zdWJ0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc3VidGFza3NMYXN0SW5kZXggPSB0YXNrLnN1YnRhc2tzLmxlbmd0aCAtIDE7IC8vIDNcblxuICAgICAgICBjb25zdCBzdWJ0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIudGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIudGFzay1hZGQtc3VidGFzay1pdGVtLWNvbnRhaW5lclwiXG4gICAgICAgICk7XG5cbiAgICAgICAgc3VidGFza0lucHV0LnZhbHVlID0gdGFzay5zdWJ0YXNrc1swXS50aXRsZTsgLy8gaWQgMVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VidGFza3NMYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXh0cmFUYXNrID0gc3VidGFza0lucHV0LmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgZXh0cmFUYXNrLmRhdGFzZXQuc3VidGFza0lkID1cbiAgICAgICAgICAgICAgICBOdW1iZXIoc3VidGFza0lucHV0LmRhdGFzZXQuc3VidGFza0lkKSArIGkgKyAxOyAvLyAxICsgMCArIDEgPSAyXG4gICAgICAgICAgICBleHRyYVRhc2sudmFsdWUgPSB0YXNrLnN1YnRhc2tzW2kgKyAxXS50aXRsZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZXh0cmFUYXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtZHVlLWRhdGVcIik7XG4gICAgZHVlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuXG4gICAgLy8gY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2hlY2ttYXJrXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YCk7XG4gICAgc3Bhbi5wcmV2aW91c1NpYmxpbmcuY2hlY2tlZCA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBwcm9jZXNzRWRpdFRhc2sgfSBmcm9tIFwiLi9wcm9jZXNzLWVkaXQtdGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZU5ld1Rhc2soZSwgZWRpdCkge1xuICAgIGNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCIpO1xuXG4gICAgYWRkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBlZGl0ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcHJvY2Vzc0VkaXRUYXNrKGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0YXNrKCkge1xuICAgIGNvbnN0IGFkZFN1YnRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyXCJcbiAgICApO1xuICAgIGFkZFN1YnRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZCk7XG5cbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICBsZXQgc3VidGFza0NvdW50ZXIgPSAyO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICBpZiAoc3VidGFza0NvdW50ZXIgPCA1KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdWJ0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5wbGFjZWhvbGRlciA9IFwiU3VidGFzayAob3B0aW9uYWwpXCI7XG4gICAgICAgICAgICBuZXdTdWJ0YXNrLmRhdGFzZXQuc3VidGFza0lkID0gc3VidGFza0NvdW50ZXI7XG4gICAgICAgICAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdTdWJ0YXNrKTtcbiAgICAgICAgICAgIHN1YnRhc2tDb3VudGVyKys7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb250YWluZXIodGFza0lkKSB7XG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAvLyBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG5cbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwoKSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZUNvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VEZWxldGUoKSB7XG4gICAgY29uc3QgZGVsZXRlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgZGVsZXRlQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xufVxuIiwiaW1wb3J0IHsgdGFza1Nob3dEZWxldGUgfSBmcm9tIFwiLi90YXNrLXNob3ctZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgdGFza1Nob3dEZWxldGUoKTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uLy4uL2RiL2RlbGV0ZS9kZWxldGUtdGFzay1mcm9tLWxvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tQcm9jZXNzRGVsZXRlKGUpIHtcbiAgICAvLyBmdW5jdGlvbiBmaW5kUGFyZW50KHNvdXJjZSwgZmlsdGVyKSB7XG4gICAgLy8gICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gICAgIHdoaWxlIChzb3VyY2UgIT0gcm9vdCkge1xuICAgIC8vICAgICAgICAgaWYgKGZpbHRlcihzb3VyY2UpKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHNvdXJjZSA9IHNvdXJjZS5wYXJlbnROb2RlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdGFza0lkID0gZmluZFBhcmVudChlLnRhcmdldCwgKGVsZW0pID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGVsZW0uZGF0YXNldC50YXNrSWQ7XG4gICAgLy8gfSkuZGF0YXNldC50YXNrSWQ7XG5cbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmRlbGV0ZTtcblxuICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7dGFza0lkfWApO1xuICAgIHRhc2tUb0RlbGV0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG5cbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0YXNrSWQpO1xufVxuIiwiLy8gaW1wb3J0IHsgdGFza1Byb2Nlc3NEZWxldGUgfSBmcm9tIFwiLi90YXNrLXByb2Nlc3MtZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrU2hvd0RlbGV0ZShlKSB7XG4gICAgY29uc3QgZGVsZXRlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgZGVsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIGRlbGV0ZUJveC5kYXRhc2V0LmRlbGV0ZSA9IGUudGFyZ2V0LmRhdGFzZXQuZGVsZXRlO1xuXG4gICAgLy8gY29uc3QgZGVsZXRlVHJ1ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLXRydWVcIik7XG4gICAgLy8gZGVsZXRlVHJ1ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICB0YXNrUHJvY2Vzc0RlbGV0ZShlKTtcbiAgICAvLyAgICAgdGFza0Nsb3NlRGVsZXRlKCk7XG4gICAgLy8gLy8gfSk7XG5cbiAgICAvLyAvLyBjb25zdCBkZWxldGVGYWxzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWZhbHNlXCIpO1xuICAgIC8vIC8vIGRlbGV0ZUZhbHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ2xvc2VEZWxldGUpO1xuXG4gICAgLy8gY29uc3QgZGVsZXRlQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlLWNsb3NlLWJ0blwiKTtcbiAgICAvLyBkZWxldGVDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0Nsb3NlRGVsZXRlKTtcblxuICAgIC8vIGZ1bmN0aW9uIHRhc2tDbG9zZURlbGV0ZSgpIHtcbiAgICAvLyAgICAgZGVsZXRlQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIC8vIH1cbn1cbiIsImltcG9ydCB7IHllc0J0biB9IGZyb20gXCIuL3llcy1idG5cIjtcbmltcG9ydCB7IG5vQnRuIH0gZnJvbSBcIi4vbm8tYnRuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbnN3ZXJzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuc3dlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWFuc3dlcnMtY29udGFpbmVyXCIpO1xuXG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4oKSk7XG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub0J0bigpKTtcblxuICAgIHJldHVybiBhbnN3ZXJzQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VEZWxldGUgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2Nsb3NlLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9CdG4oKSB7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXItYnRuXCIpO1xuICAgIG5vQnRuLmlkID0gXCJkZWxldGUtZmFsc2VcIjtcbiAgICBub0J0bi5pbm5lclRleHQgPSBcIk5vXCI7XG4gICAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGVsZXRlKTtcblxuICAgIHJldHVybiBub0J0bjtcbn1cbiIsImltcG9ydCB7IHRhc2tQcm9jZXNzRGVsZXRlIH0gZnJvbSBcIi4uLy4uL2V2ZW50cy90YXNrLXByb2Nlc3MtZGVsZXRlXCI7XG5pbXBvcnQgeyBjbG9zZURlbGV0ZSB9IGZyb20gXCIuLi8uLi9ldmVudHMvY2xvc2UtZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXNCdG4oKSB7XG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWFuc3dlci1idG5cIik7XG4gICAgeWVzQnRuLmlkID0gXCJkZWxldGUtdHJ1ZVwiO1xuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllc1wiO1xuXG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrUHJvY2Vzc0RlbGV0ZShlKTtcbiAgICAgICAgY2xvc2VEZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB5ZXNCdG47XG59XG4iLCJpbXBvcnQgeyBjbG9zZURlbGV0ZSB9IGZyb20gXCIuLi8uLi9ldmVudHMvY2xvc2UtZGVsZXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ0bigpIHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWNsb3NlLWJ0blwiKTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcblxuICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURlbGV0ZSk7XG5cbiAgICByZXR1cm4gY2xvc2VCdG47XG59XG4iLCJpbXBvcnQgeyBjbG9zZUJ0biB9IGZyb20gXCIuL2Nsb3NlLWJ0bi9jbG9zZS1idG5cIjtcbmltcG9ydCB7IHF1ZXN0aW9uIH0gZnJvbSBcIi4vcXVlc3Rpb24vcXVlc3Rpb25cIjtcbmltcG9ydCB7IGFuc3dlcnNDb250YWluZXIgfSBmcm9tIFwiLi9hbnN3ZXJzLWNvbnRhaW5lci9hbnN3ZXJzLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHF1ZXN0aW9uKCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGFuc3dlcnNDb250YWluZXIoKSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcXVlc3Rpb24oKSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1xdWVzdGlvblwiKTtcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPSBcIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCI7XG5cbiAgICByZXR1cm4gcXVlc3Rpb247XG59XG4iLCJpbXBvcnQgeyB0YXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFzay1jb250YWluZXIvdGFzay1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvR3JvdXBDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IHRhc2tzR3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrcy1ncm91cC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrc0dyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIodGFzaykpO1xufVxuIiwiaW1wb3J0IHsgdGFza1RvZ2dsZURldGFpbHMgfSBmcm9tIFwiLi90YXNrLXRvZ2dsZS1kZXRhaWxzXCI7XG5pbXBvcnQgeyB0YXNrU2hvd0VkaXREZXRhaWxzIH0gZnJvbSBcIi4vdGFzay1zaG93LWVkaXRcIjtcbmltcG9ydCB7IHRhc2tTaG93RGVsZXRlIH0gZnJvbSBcIi4uLy4uL3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvdGFzay1zaG93LWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIGNvbnN0IHRhc2tzR3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrcy1ncm91cC1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICB0YXNrc0dyb3VwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgc3dpdGNoICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIjpcbiAgICAgICAgICAgICAgICB0YXNrVG9nZ2xlRGV0YWlscyhlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIjpcbiAgICAgICAgICAgICAgICB0YXNrU2hvd0VkaXREZXRhaWxzKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRhc2stZGV0YWlscy1kZWxldGUtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1Nob3dEZWxldGUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzaG93Q3JlYXRlTmV3VGFzayB9IGZyb20gXCIuLi8uLi90YXNrLWFkZC1jb250YWluZXItbW9kYWwvZXZlbnRzL3Nob3ctY3JlYXRlLW5ldy10YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrU2hvd0VkaXREZXRhaWxzKGUpIHtcbiAgICBjb25zdCBlZGl0ID0gdHJ1ZTtcbiAgICBzaG93Q3JlYXRlTmV3VGFzayhlLCBlZGl0KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0YXNrVG9nZ2xlRGV0YWlscyhlKSB7XG4gICAgdG9nZ2xlRGV0YWlscyhlKTtcbiAgICB0b2dnbGVCdG5JY29uKGUpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzQ29udGFpbmVyID1cbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB0YXNrRGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1kZXRhaWxzLWNvbnRhaW5lci1hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQnRuSWNvbihlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tTaG93RGV0YWlsc0J0biA9IGUudGFyZ2V0LnBhcmVudE5vZGUubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGFza1Nob3dEZXRhaWxzQnRuLmlubmVyVGV4dCA9XG4gICAgICAgICAgICB0YXNrU2hvd0RldGFpbHNCdG4uaW5uZXJUZXh0ID09PSBcImV4cGFuZF9tb3JlXCJcbiAgICAgICAgICAgICAgICA/IFwiZXhwYW5kX2xlc3NcIlxuICAgICAgICAgICAgICAgIDogXCJleHBhbmRfbW9yZVwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGFkZFRvR3JvdXBDb250YWluZXIgfSBmcm9tIFwiLi9hZGQtdG8tZ3JvdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uLy4uL2RiL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBDb250YWluZXIoKSB7XG4gICAgY29uc3Qgc3RvcmVkTGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIHN0b3JlZExpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBhZGRUb0dyb3VwQ29udGFpbmVyKHRhc2spO1xuICAgIH0pO1xuXG4gICAgZXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyB0b2dnbGVUYXNrQ2hlY2tlZCB9IGZyb20gXCIuL2V2ZW50cy90b2dnbGUtdGFzay1jaGVja2VkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveENvbnRhaW5lcih0YXNrKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3gtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlVGFza0NoZWNrZWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY2hlY2ttYXJrID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja21hcmtcIik7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKGB0YXNrLWNoZWNrbWFyay1wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgICAgIGNoZWNrbWFyay5kYXRhc2V0LnByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgcmV0dXJuIGNoZWNrbWFyaztcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzaG93RGV0YWlsc0J0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3dEZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2hvd0RldGFpbHNCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1zaG93LWRldGFpbHMtYnRuXCIpO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1zaG93LWRldGFpbHMtYnRuXCI7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmlubmVyVGV4dCA9IFwiZXhwYW5kX21vcmVcIjtcbiAgICAgICAgcmV0dXJuIHNob3dEZXRhaWxzQnRuO1xuICAgIH0pKCk7XG5cbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd0RldGFpbHNCdG4pO1xuXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlVXBkYXRlVGFza0NoZWNrZWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vZGIvdXBkYXRlL3VwZGF0ZS10YXNrLWNoZWNrZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhc2tDaGVja2VkKGUpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgbG9jYWxTdG9yYWdlVXBkYXRlVGFza0NoZWNrZWQodGFza0lkKTtcbn1cbiIsImltcG9ydCB7IGRldGFpbHNDb250cm9sbGVycyB9IGZyb20gXCIuL2RldGFpbHMtY29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGRldGFpbHNEZXNjcmlwdGlvbiB9IGZyb20gXCIuL2RldGFpbHMtZGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IGRldGFpbHNEdWUgfSBmcm9tIFwiLi9kZXRhaWxzLWR1ZVwiO1xuaW1wb3J0IHsgZGV0YWlsc0xpc3QgfSBmcm9tIFwiLi9kZXRhaWxzLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1jb250YWluZXJcIik7XG4gICAgZGV0YWlsc0NvbnRhaW5lci5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1kZXRhaWxzLWNvbnRhaW5lclwiO1xuXG4gICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ29udHJvbGxlcnModGFzaykpO1xuXG4gICAgaWYgKHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzRGVzY3JpcHRpb24odGFzaykpO1xuICAgIH1cbiAgICBpZiAodGFzay5zdWJ0YXNrcykge1xuICAgICAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNMaXN0KHRhc2spKTtcbiAgICB9XG4gICAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgICAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNEdWUodGFzaykpO1xuICAgIH1cblxuICAgIHJldHVybiBkZXRhaWxzQ29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNDb250cm9sbGVycyh0YXNrKSB7XG4gICAgY29uc3QgZGV0YWlsc0NvbnRyb2xsZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzQ29udHJvbGxlcnMuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1jb250cm9sbGVyc1wiKTtcblxuICAgIGNvbnN0IGRldGFpbHNFZGl0QnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZXRhaWxzRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWVkaXQtYnRuXCIpO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0VkaXRCdG47XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRldGFpbHNFZGl0SWNvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkZXRhaWxzRWRpdEljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICBkZXRhaWxzRWRpdEljb24uZGF0YXNldC50YXJnZXQgPSBcInRhc2stZGV0YWlscy1lZGl0LWJ0blwiO1xuICAgICAgICBkZXRhaWxzRWRpdEljb24uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgICAgICBkZXRhaWxzRWRpdEljb24uaW5uZXJUZXh0ID0gXCJlZGl0XCI7XG4gICAgICAgIHJldHVybiBkZXRhaWxzRWRpdEljb247XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRldGFpbHNEZWxldGVCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWRlbGV0ZS1idG5cIik7XG4gICAgICAgIHJldHVybiBkZXRhaWxzRGVsZXRlQnRuO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkZXRhaWxzRGVsZXRlSWNvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRldGFpbHNEZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUljb24uZGF0YXNldC50YXJnZXQgPSBcInRhc2stZGV0YWlscy1kZWxldGUtYnRuXCI7XG4gICAgICAgIGRldGFpbHNEZWxldGVJY29uLmRhdGFzZXQuZGVsZXRlID0gYCR7dGFzay5pZH1gO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5pbm5lclRleHQgPSBcImRlbGV0ZVwiO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0RlbGV0ZUljb247XG4gICAgfSkoKTtcblxuICAgIGRldGFpbHNFZGl0QnRuLmFwcGVuZENoaWxkKGRldGFpbHNFZGl0SWNvbik7XG4gICAgZGV0YWlsc0NvbnRyb2xsZXJzLmFwcGVuZENoaWxkKGRldGFpbHNFZGl0QnRuKTtcbiAgICBkZXRhaWxzRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRldGFpbHNEZWxldGVJY29uKTtcbiAgICBkZXRhaWxzQ29udHJvbGxlcnMuYXBwZW5kQ2hpbGQoZGV0YWlsc0RlbGV0ZUJ0bik7XG5cbiAgICByZXR1cm4gZGV0YWlsc0NvbnRyb2xsZXJzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNEZXNjcmlwdGlvbih0YXNrKSB7XG4gICAgY29uc3QgZGV0YWlsc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGV0YWlsc0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZGVzY3JpcHRpb25cIik7XG4gICAgZGV0YWlsc0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4gZGV0YWlsc0Rlc2NyaXB0aW9uO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNEdWUodGFzaykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZHVlLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZHVlLWljb25cIik7XG4gICAgaWNvbi5pbm5lclRleHQgPSBcInRvZGF5XCI7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZHVlLWRhdGVcIik7XG4gICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IHRvZ2dsZVN1YnRhc2tDaGVja2VkIH0gZnJvbSBcIi4vZXZlbnRzL3RvZ2dsZS1zdWJ0YXNrLWNoZWNrZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGFpbHNMaXN0KHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1saXN0XCIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbUNvbnRhaW5lcihzdWJ0YXNrSWQsIHN1YnRhc2tUaXRsZSwgc3VidGFza0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdWJ0YXNrQ2hlY2tlZDtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmRhdGFzZXQuc3VidGFza0lkID0gc3VidGFza0lkO1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2dnbGVTdWJ0YXNrQ2hlY2tlZCk7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmtcIik7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2ttYXJrO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tdGV4dFwiKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gc3VidGFza1RpdGxlO1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gcHJpbnRTdWJ0YXNrRWxlbWVudHMoKSB7XG4gICAgICAgIHRhc2suc3VidGFza3MuZm9yRWFjaCgoc3VidGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1Db250YWluZXIoXG4gICAgICAgICAgICAgICAgc3VidGFzay5pZCxcbiAgICAgICAgICAgICAgICBzdWJ0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgIHN1YnRhc2suY2hlY2tlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRldGFpbHNMaXN0LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIGRldGFpbHNMaXN0O1xufVxuIiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlVXBkYXRlU3VidGFza0NoZWNrZWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vZGIvdXBkYXRlL3VwZGF0ZS1zdWJ0YXNrLWNoZWNrZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVN1YnRhc2tDaGVja2VkKGUpIHtcbiAgICBjb25zb2xlLmRpcihlLnRhcmdldCk7XG4gICAgLy8gY29uc3QgdGFza0lkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZVN1YnRhc2tDaGVja2VkKHRhc2tJZCk7XG59XG4iLCJpbXBvcnQgeyBjaGVja2JveENvbnRhaW5lciB9IGZyb20gXCIuL2NoZWNrYm94LWNvbnRhaW5lci9jaGVja2JveC1jb250YWluZXJcIjtcbmltcG9ydCB7IGRldGFpbHNDb250YWluZXIgfSBmcm9tIFwiLi9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0NvbnRhaW5lcih0YXNrKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgdGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCA9IGB0YXNrLSR7dGFzay5pZH1gO1xuICAgIHRhc2tDb250YWluZXIuaWQgPSBgdGFzay0ke3Rhc2suaWR9YDtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIodGFzaykpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ29udGFpbmVyKHRhc2spKTtcblxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7IHNpZGVOYXYgfSBmcm9tIFwiLi92aWV3L3NpZGUtbmF2L3NpZGUtbmF2XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2RiL2NyZWF0ZS9wb3B1bGF0ZS1sb2NhbC1zdG9yYWdlXCI7XG5cbmltcG9ydCB7IGdyb3VwQ29udGFpbmVyIH0gZnJvbSBcIi4vdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9ncm91cC1jb250YWluZXJcIjtcbmltcG9ydCB7IGFkZENvbnRhaW5lciB9IGZyb20gXCIuL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1jb250YWluZXJcIjtcbmltcG9ydCB7IGRlbGV0ZUNvbnRhaW5lciB9IGZyb20gXCIuL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL2RlbGV0ZS1jb250YWluZXJcIjtcblxuc2lkZU5hdigpO1xucG9wdWxhdGVMb2NhbFN0b3JhZ2UoKTtcblxuZ3JvdXBDb250YWluZXIoKTtcbmFkZENvbnRhaW5lcigpO1xuZGVsZXRlQ29udGFpbmVyKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9