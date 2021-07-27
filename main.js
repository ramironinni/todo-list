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
    const id = lastId + 1;

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

/***/ "./src/view/task-add-container-modal/events/show-create-new-task.js":
/*!**************************************************************************!*\
  !*** ./src/view/task-add-container-modal/events/show-create-new-task.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCreateNewTask": () => (/* binding */ showCreateNewTask)
/* harmony export */ });
function showCreateNewTask(e, edit) {
    const addContainer = document.querySelector(".task-add-modal-container");

    addContainer.classList.add("task-add-modal-container-active");

    if (typeof edit != "undefined") {
        const h2 = document.querySelector(".task-add-title");
        h2.innerText = "Edit task";

        const title = document.querySelector(".task-add-name");

        const description = document.querySelector(".task-add-name");
        const due = document.querySelector(".task-add-modal-container");
        // const priority = document.querySelector(".task-add-modal-container");
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

    function createItemContainer(subtaskTitle, subtaskChecked) {
        const itemContainer = document.createElement("label");
        itemContainer.classList.add("task-details-item-container");

        const checkbox = (() => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = subtaskChecked;
            checkbox.classList.add("task-details-item-checkbox");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RiL2NyZWF0ZS9hZGQtdGFzay10by1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvZGVmYXVsdC1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3Byb2Nlc3MtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvZGVsZXRlL2RlbGV0ZS10YXNrLWZyb20tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbGFzdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi91cGRhdGUvdXBkYXRlLXN1YnRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvdXBkYXRlL3VwZGF0ZS10YXNrLWNoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL2Nsb3NlLXNpZGUtbmF2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3NpZGUtbmF2L2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL3Nob3ctc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2FkZC10b3AuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9ldmVudHMvY2xvc2UtY3JlYXRlLW5ldy10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvYWRkLXRvcC9jbG9zZS1idXR0b24vaWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9kdWUvZHVlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9uYW1lL25hbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3ByaW9yaXR5L3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJtaXQvc3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJ0YXNrcy9hZGQvYWRkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvZm9ybS9zdWJ0YXNrcy9saXN0L2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3N1YnRhc2tzL3N1YnRhc2tzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvZXZlbnRzL3Nob3ctY3JlYXRlLW5ldy10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvdGFzay1hZGQtc3VidGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZGVsZXRlLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL2Nsb3NlLWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL3Rhc2stcHJvY2Vzcy1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL2V2ZW50cy90YXNrLXNob3ctZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9hbnN3ZXJzLWNvbnRhaW5lci9hbnN3ZXJzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvbW9kYWwvYW5zd2Vycy1jb250YWluZXIvbm8tYnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9hbnN3ZXJzLWNvbnRhaW5lci95ZXMtYnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9jbG9zZS1idG4vY2xvc2UtYnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvbW9kYWwvcXVlc3Rpb24vcXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvYWRkLXRvLWdyb3VwLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2V2ZW50cy90YXNrLXNob3ctZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9ldmVudHMvdGFzay10b2dnbGUtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9ncm91cC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9jaGVja2JveC1jb250YWluZXIvZXZlbnRzL3RvZ2dsZS10YXNrLWNoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1jb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtZHVlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9ldmVudHMvdG9nZ2xlLXN1YnRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyw0QkFBNEIsOEJBQThCLHVDQUF1Qyx5Q0FBeUMsR0FBRyw0QkFBNEIsNkJBQTZCLEdBQUcsVUFBVSx3QkFBd0IsNkNBQTZDLCtCQUErQiwwQkFBMEIsV0FBVyxVQUFVLGdCQUFnQixtREFBbUQsd0JBQXdCLEdBQUcsbURBQW1ELHdCQUF3Qix3QkFBd0IsbUNBQW1DLDhCQUE4QixXQUFXLHFCQUFxQiwyQkFBMkIsR0FBRyxZQUFZLG1CQUFtQixpQkFBaUIsc0JBQXNCLG9D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QVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFdB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QUFFNUY7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEU7QUFDSDs7QUFFbEU7QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQsK0JBQStCLFFBQVE7O0FBRXZDLDhCQUE4Qix5RkFBaUI7O0FBRS9DLDhCQUE4QixzRkFBZ0I7O0FBRTlDO0FBQ0E7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRThCO0FBQ3VCOztBQUVHO0FBQ0E7QUFDUzs7QUFFdEYsZ0VBQU87QUFDUCx1RkFBb0I7O0FBRXBCLDBGQUFjO0FBQ2QsMEZBQVk7QUFDWixtR0FBZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI4NzZiZTtcXG4gICAgLS1jb2xvci1wcmlvcml0eS0xOiAjY2EyYzJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTI6ICNjYTgwMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMzogIzNmNmRjMjtcXG4gICAgLS1jb2xvci1wcmlvcml0eS00OiAjNzAyY2NhO1xcbiAgICAtLWNvbG9yLWdyZXk6ICM3YTdhN2E7XFxuICAgIC0tY29sb3Itc2hhZG93OiAjYTVhNWE1O1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeTogI2U2ZTZlNjtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnRvcC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0LWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b3AtbmF2LWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwOyAqL1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtLWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRkLXRhc2stZmxvYXRpbmctYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEuM3JlbTtcXG4gICAgcmlnaHQ6IDEuM3JlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzI1MjUyNTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1hY3RpdmUge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAzcHggIzI1MjUyNThhO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2lkZS1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbTpob3ZlcixcXG4uc2lkZS1uYXYtaXRlbS1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxufVxcblxcbi50YXNrcy1ncm91cC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS00IHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLXNob3ctZGV0YWlscy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC41cmVtIHZhcigtLWNvbG9yLXNoYWRvdyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0bixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4sXFxuLnRhc2stYWRkLWNsb3NlLWJ0biBzcGFuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXIsXFxuLnRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDViO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSxcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwsXFxuLnRhc2stZGVsZXRlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzVjNWM1YztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0zMDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbSAzcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDAgMCAxLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1kZXNjcmlwdGlvbixcXG4udGFzay1hZGQtbmFtZSxcXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0LFxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1uYW1lLXZhbGlkYXRpb24tZmFsc2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stYWRkLW5hbWUtdmFsaWRhdGlvbi1mYWxzZTo6cGxhY2Vob2xkZXIge1xcbiAgICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU5NGI4O1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMDAwO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWR1ZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcblxcbi8qIFxcbi50YXNrLWFkZC1kdWUtdGV4dCB7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufSAqL1xcblxcbi50YXNrLWFkZC1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi5wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjMDAwO1xcbn1cXG5cXG4udGFzay1hZGQtc3VibWl0LWJ0bixcXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0FBQ3RDOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07SUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixXQUFXLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTtJQUNJLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7O0FBRUE7Ozs7O0lBS0ksaUJB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YTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMyODc2YmU7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMTogI2NhMmMyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS0yOiAjY2E4MDJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTM6ICMzZjZkYzI7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktNDogIzcwMmNjYTtcXG4gICAgLS1jb2xvci1ncmV5OiAjN2E3YTdhO1xcbiAgICAtLWNvbG9yLXNoYWRvdzogI2E1YTVhNTtcXG4gICAgLS1jb2xvci1lbGVtZW50LXByaW1hcnk6ICNlMWUxZTE7XFxuICAgIC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnk6ICNlNmU2ZTY7XFxufVxcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gICAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwOyAvKiAxICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbn1cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi50b3AtbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi50b3AtbmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b3AtbmF2LWl0ZW0ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtOmZpcnN0LW9mLXR5cGUge1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMDsgKi9cXG59XFxuXFxuLnRvcC1uYXYtaXRlbS1idG4ge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFkZC10YXNrLWZsb2F0aW5nLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxLjNyZW07XFxuICAgIHJpZ2h0OiAxLjNyZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMyNTI1MjU7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggM3B4ICMyNTI1MjU4YTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNpZGUtbmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0tbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW06aG92ZXIsXFxuLnNpZGUtbmF2LWl0ZW0tYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhZG93KTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1saXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1saXN0LWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1saXN0LWJ0bi1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20taXRlbSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbn1cXG5cXG4udGFza3MtZ3JvdXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMSB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTIge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktNCB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1zaG93LWRldGFpbHMtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuNXJlbSB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLWNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250cm9sbGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZWRpdC1idG4sXFxuLnRhc2stZGV0YWlscy1kZWxldGUtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0biBzcGFuLFxcbi50YXNrLWFkZC1jbG9zZS1idG4gc3BhbixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1saXN0IHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzI1MjUyNTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZHVlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWRldGFpbHMtZHVlLWljb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwtY29udGFpbmVyLFxcbi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1YjtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmUsXFxuLnRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLFxcbi50YXNrLWRlbGV0ZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtICM1YzVjNWM7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLnRhc2stZGVsZXRlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW0gM3JlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWFuc3dlcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jbG9zZS1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWFuc3dlci1idG4ge1xcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMS41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZGVzY3JpcHRpb24sXFxuLnRhc2stYWRkLW5hbWUsXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCxcXG4udGFzay1hZGQtZHVlLWRhdGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtbmFtZS12YWxpZGF0aW9uLWZhbHNlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWFkZC1uYW1lLXZhbGlkYXRpb24tZmFsc2U6OnBsYWNlaG9sZGVyIHtcXG4gICAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFza3MtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlOTRiODtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzAwMDtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG4vKiBcXG4udGFzay1hZGQtZHVlLXRleHQge1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn0gKi9cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnByaW9yaXR5LTIge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4ucHJpb3JpdHktMyB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi5wcmlvcml0eS00IHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gIzAwMDtcXG59XFxuXFxuLnRhc2stYWRkLXN1Ym1pdC1idG4sXFxuLnRhc2stZGVsZXRlLWFuc3dlci1idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlTGlzdCB9IGZyb20gXCIuLi9yZWFkL2dldC1sb2NhbC1zdG9yYWdlLWxpc3RcIjtcbmltcG9ydCB7IHNhdmVJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3NhdmUtaW4tbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1RvTG9jYWxTdG9yYWdlKHRhc2spIHtcbiAgICBjb25zdCBsaXN0ID0gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpO1xuXG4gICAgbGlzdC5wdXNoKHRhc2spO1xuXG4gICAgc2F2ZUluTG9jYWxTdG9yYWdlKGxpc3QpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIkJ1eSBwaXp6YSBpbmdyZWRpZW50c1wiLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGVubnkgZG9lc24ndCBsaWtlIGFuY2hvdmllcyFcIixcbiAgICAgICAgc3VidGFza3M6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiQ2hlZXNlXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlRvbWF0b1wiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIk9saXZlc1wiLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgICBdLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjEtMDctMjNcIixcbiAgICAgICAgcHJpb3JpdHk6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogXCJEbyBsYXVuZHJ5XCIsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgc3VidGFza3M6IFtdLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjEtMDctMjNcIixcbiAgICAgICAgcHJpb3JpdHk6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogXCJGaW5pc2ggcHJvamVjdFwiLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRG9uJ3QgZm9yZ2V0IHRvIHVzZSBQb21vZG9ybyBUaW1lclwiLFxuICAgICAgICBzdWJ0YXNrczogW1xuICAgICAgICAgICAgeyB0aXRsZTogXCJBZGQgZmFuY3kgYW5pbWF0aW9uc1wiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlJldmlldyBTT0xJRCBwcmluY2lwbGVzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkZpeCBidWdzXCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIxLTA3LTIzXCIsXG4gICAgICAgIHByaW9yaXR5OiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgdGl0bGU6IFwiTWFrZSBicmVhZFwiLFxuICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2Ugb2xpdmUgb2lsP1wiLFxuICAgICAgICBzdWJ0YXNrczogW1xuICAgICAgICAgICAgeyB0aXRsZTogXCJCdXkgeWVhc3RcIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJUcnkgbmV3IHJlY2lwZVwiLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgICBdLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjEtMDctMjhcIixcbiAgICAgICAgcHJpb3JpdHk6IDIsXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBkZWZhdWx0TGlzdCB9IGZyb20gXCIuL2RlZmF1bHQtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYWx0TGlzdEpTT04gPSBKU09OLnN0cmluZ2lmeShkZWZhdWx0TGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIGRlZmFsdExpc3RKU09OKTtcbn1cbiIsImltcG9ydCB7IGdldExhc3RJZCB9IGZyb20gXCIuLi9yZWFkL2dldC1sYXN0LWlkXCI7XG5pbXBvcnQgeyBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9hZGQtdGFzay10by1sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi4vLi4vdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvY2xvc2UtYnV0dG9uL2V2ZW50cy9jbG9zZS1jcmVhdGUtbmV3LXRhc2tcIjtcbmltcG9ydCB7IGFkZFRvR3JvdXBDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9hZGQtdG8tZ3JvdXAtY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRm9ybShcbiAgICBlLFxuICAgIHRhc2tOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHN1YnRhc2tzQ29udGFpbmVyLFxuICAgIGR1ZSxcbiAgICBwcmlvcml0eVxuKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbGFzdElkID0gZ2V0TGFzdElkKCk7XG4gICAgY29uc3QgaWQgPSBsYXN0SWQgKyAxO1xuXG4gICAgY29uc3QgdGl0bGUgPSB0YXNrTmFtZS52YWx1ZTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGFza05hbWUucGxhY2Vob2xkZXIgPSBcIllvdSBtdXN0IGVudGVyIGEgbmFtZVwiO1xuICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbmFtZS12YWxpZGF0aW9uLWZhbHNlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnRhc2tzID0gc3VidGFza3NDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXM7XG4gICAgY29uc3Qgc3VidGFza3NQcm9jZXNzZWQgPSBbXTtcbiAgICBzdWJ0YXNrcy5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICAgIGlmIChzdWJ0YXNrLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJ0YXNrUHJvY2Vzc2VkID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdWJ0YXNrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnRhc2tzUHJvY2Vzc2VkLnB1c2goc3VidGFza1Byb2Nlc3NlZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkdWUuY2hpbGROb2Rlc1swXS52YWx1ZTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGV2ZWxzID0gcHJpb3JpdHkuY2hpbGROb2RlcztcblxuICAgIGxldCBwcmlvcml0eUxldmVsUHJvY2Vzc2VkO1xuICAgIHByaW9yaXR5TGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSBsZXZlbC5jaGlsZE5vZGVzWzBdLmNoZWNrZWQ7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxldmVsID0gbGV2ZWwuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3RbMV07XG4gICAgICAgICAgICBwcmlvcml0eUxldmVsUHJvY2Vzc2VkID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGV2ZWxbcHJpb3JpdHlMZXZlbC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICBzdWJ0YXNrczogc3VidGFza3NQcm9jZXNzZWQsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eUxldmVsUHJvY2Vzc2VkLFxuICAgIH07XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgY2xvc2VDcmVhdGVOZXdUYXNrKCk7XG4gICAgICAgIGFkZFRvR3JvdXBDb250YWluZXIobmV3VGFzayk7XG4gICAgICAgIGFkZFRhc2tUb0xvY2FsU3RvcmFnZShuZXdUYXNrKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZUluTG9jYWxTdG9yYWdlKGxpc3QpIHtcbiAgICBjb25zdCBsaXN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KGxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBsaXN0SlNPTik7XG59XG4iLCJpbXBvcnQgeyBzYXZlSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlTGlzdCB9IGZyb20gXCIuLi9yZWFkL2dldC1sb2NhbC1zdG9yYWdlLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKHRhc2tJZCkge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG4gICAgdGFza0lkID0gTnVtYmVyKHRhc2tJZCk7XG5cbiAgICBjb25zdCB0b0RlbGV0ZUlkZXggPSBsaXN0LmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIGxpc3Quc3BsaWNlKHRvRGVsZXRlSWRleCwgMSk7XG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCk7XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4vZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdElkKCkge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG5cbiAgICBjb25zdCBsYXN0SWQgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0uaWQ7XG5cbiAgICByZXR1cm4gbGFzdElkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZUxpc3QoKSB7XG4gICAgY29uc3Qgc3RvcmVkTGlzdEpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIik7XG4gICAgY29uc3Qgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2Uoc3RvcmVkTGlzdEpTT04pO1xuICAgIHJldHVybiBzdG9yZWRMaXN0O1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlTGlzdCB9IGZyb20gXCIuLi9yZWFkL2dldC1sb2NhbC1zdG9yYWdlLWxpc3RcIjtcbmltcG9ydCB7IHNhdmVJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9jcmVhdGUvc2F2ZS1pbi1sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGVTdWJ0YXNrQ2hlY2tlZCh0YXNrSWQpIHtcbiAgICB0YXNrSWQgPSBOdW1iZXIodGFza0lkW3Rhc2tJZC5sZW5ndGggLSAxXSk7XG5cbiAgICBjb25zdCBsaXN0ID0gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpO1xuXG4gICAgY29uc3QgdGFza1RvVXBkYXRlSW5kZXggPSBsaXN0LmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIGxpc3RbdGFza1RvVXBkYXRlSW5kZXhdLmNoZWNrZWQgPSAhbGlzdFt0YXNrVG9VcGRhdGVJbmRleF0uY2hlY2tlZDtcblxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZShsaXN0KTtcbn1cbiIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi4vcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5pbXBvcnQgeyBzYXZlSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxTdG9yYWdlVXBkYXRlVGFza0NoZWNrZWQodGFza0lkKSB7XG4gICAgdGFza0lkID0gTnVtYmVyKHRhc2tJZFt0YXNrSWQubGVuZ3RoIC0gMV0pO1xuXG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGNvbnN0IHRhc2tUb1VwZGF0ZUluZGV4ID0gbGlzdC5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICBsaXN0W3Rhc2tUb1VwZGF0ZUluZGV4XS5jaGVja2VkID0gIWxpc3RbdGFza1RvVXBkYXRlSW5kZXhdLmNoZWNrZWQ7XG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNpZGVOYXZDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXYtY2xvc2UtYnRuXCIpO1xuXG4gICAgc2lkZU5hdkNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVNpZGVOYXYpO1xuXG4gICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXZcIik7XG5cbiAgICBmdW5jdGlvbiBjbG9zZVNpZGVOYXYoKSB7XG4gICAgICAgIHNpZGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcInNpZGUtbmF2LWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzaG93U2lkZU5hdiB9IGZyb20gXCIuL3Nob3ctc2lkZS1uYXZcIjtcbmltcG9ydCB7IGNsb3NlU2lkZU5hdiB9IGZyb20gXCIuL2Nsb3NlLXNpZGUtbmF2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgc2hvd1NpZGVOYXYoKTtcbiAgICBjbG9zZVNpZGVOYXYoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZU5hdigpIHtcbiAgICBjb25zdCBzaWRlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hdi1idG5cIik7XG5cbiAgICBzaWRlTmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93KTtcblxuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwic2lkZS1uYXYtYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVOYXYoKSB7XG4gICAgZXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyBhZGRNb2RhbCB9IGZyb20gXCIuL2FkZC1tb2RhbC9hZGQtbW9kYWxcIjtcbmltcG9ydCB7IHNob3dDcmVhdGVOZXdUYXNrIH0gZnJvbSBcIi4vZXZlbnRzL3Nob3ctY3JlYXRlLW5ldy10YXNrXCI7XG5pbXBvcnQgeyBhZGRTdWJ0YXNrIH0gZnJvbSBcIi4vZXZlbnRzL3Rhc2stYWRkLXN1YnRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRNb2RhbCgpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBhZGRDb250YWluZXIpIHtcbiAgICAgICAgICAgIGFkZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRDb250YWluZXIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZmxvYXRpbmctYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDcmVhdGVOZXdUYXNrKTtcblxuICAgIGFkZFN1YnRhc2soKTtcbn1cbiIsImltcG9ydCB7IGFkZFRvcCB9IGZyb20gXCIuL2FkZC10b3AvYWRkLXRvcFwiO1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm0vZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWwoKSB7XG4gICAgY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbFwiKTtcbiAgICBhZGRNb2RhbC5hcHBlbmRDaGlsZChhZGRUb3AoKSk7XG4gICAgYWRkTW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSgpKTtcbiAgICByZXR1cm4gYWRkTW9kYWw7XG59XG4iLCJpbXBvcnQgeyBjbG9zZUJ1dHRvbiB9IGZyb20gXCIuL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b25cIjtcbmltcG9ydCB7IHRpdGxlIH0gZnJvbSBcIi4vdGl0bGUvdGl0bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvcCgpIHtcbiAgICBjb25zdCBhZGRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvcC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdG9wXCIpO1xuICAgIGFkZFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbigpKTtcbiAgICBhZGRUb3AuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgcmV0dXJuIGFkZFRvcDtcbn1cbiIsImltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9ldmVudHMvY2xvc2UtY3JlYXRlLW5ldy10YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWNsb3NlLWJ0blwiKTtcbiAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKCkpO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQ3JlYXRlTmV3VGFzayk7XG5cbiAgICByZXR1cm4gY2xvc2VCdXR0b247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VDcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tBZGRNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcblxuICAgIHRhc2tBZGRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpY29uKCkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcbiAgICByZXR1cm4gaWNvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0aXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJOZXcgdGFza1wiO1xuICAgIHJldHVybiB0aXRsZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCI7XG4gICAgZGVzY3JpcHRpb24ubmFtZSA9IFwibmV3LXRhc2stZGVzY3JpcHRpb25cIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVlKCkge1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtZHVlLWRhdGVcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGlucHV0Lm5hbWUgPSBcIm5ldy10YXNrLWR1ZS1kYXRlXCI7XG5cbiAgICBkdWUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGR1ZTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5hbWUgfSBmcm9tIFwiLi9uYW1lL25hbWVcIjtcbmltcG9ydCB7IGNyZWF0ZURlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZGVzY3JpcHRpb24vZGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZVN1YnRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vc3VidGFza3Mvc3VidGFza3MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVEdWUgfSBmcm9tIFwiLi9kdWUvZHVlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5L3ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzdWJtaXQgfSBmcm9tIFwiLi9zdWJtaXQvc3VibWl0XCI7XG5pbXBvcnQgeyBwcm9jZXNzRm9ybSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYi9jcmVhdGUvcHJvY2Vzcy1mb3JtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1mb3JtXCIpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBjcmVhdGVOYW1lKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGNyZWF0ZVN1YnRhc2tzQ29udGFpbmVyKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJ0YXNrc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkdWUgPSBjcmVhdGVEdWUoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZVByaW9yaXR5KCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCgpKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBwcm9jZXNzRm9ybShlLCB0YXNrTmFtZSwgZGVzY3JpcHRpb24sIHN1YnRhc2tzQ29udGFpbmVyLCBkdWUsIHByaW9yaXR5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1uYW1lXCIpO1xuICAgIG5hbWUucGxhY2Vob2xkZXIgPSBcIlRhc2tcIjtcbiAgICBuYW1lLm5hbWUgPSBcIm5ldy10YXNrLW5hbWVcIjtcbiAgICByZXR1cm4gbmFtZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eSgpIHtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGxldmVscyA9IFsxLCAyLCAzLCA0XTtcblxuICAgIGxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgaW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXNlbGVjdG9yXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7bGV2ZWx9YCk7XG5cbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJpb3JpdHk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VibWl0LWJ0blwiKTtcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gXCJBZGRcIjtcblxuICAgIHJldHVybiBzdWJtaXQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkKCkge1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyXCIpO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJhZGRcIjtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBhZGQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiBhZGQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrcy1saXN0XCIpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiU3VidGFzayAob3B0aW9uYWwpXCI7XG4gICAgaW5wdXQubmFtZSA9IFwibmV3LXN1YnRhc2stbmFtZS0xXCI7XG5cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIHJldHVybiBsaXN0O1xufVxuIiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4vYWRkL2FkZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VidGFza3NDb250YWluZXIoKSB7XG4gICAgY29uc3Qgc3VidGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1YnRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrcy1jb250YWluZXJcIik7XG5cbiAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KCkpO1xuICAgIHN1YnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZCgpKTtcbiAgICByZXR1cm4gc3VidGFza3NDb250YWluZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZU5ld1Rhc2soZSwgZWRpdCkge1xuICAgIGNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCIpO1xuXG4gICAgYWRkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBlZGl0ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLXRpdGxlXCIpO1xuICAgICAgICBoMi5pbm5lclRleHQgPSBcIkVkaXQgdGFza1wiO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1uYW1lXCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1uYW1lXCIpO1xuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgICAgLy8gY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkU3VidGFzaygpIHtcbiAgICBjb25zdCBhZGRTdWJ0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlclwiXG4gICAgKTtcbiAgICBhZGRTdWJ0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGQpO1xuXG4gICAgY29uc3Qgc3VidGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgbGV0IHN1YnRhc2tDb3VudGVyID0gMjtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgICAgaWYgKHN1YnRhc2tDb3VudGVyIDwgNSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U3VidGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1N1YnRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1N1YnRhc2sucGxhY2Vob2xkZXIgPSBcIlN1YnRhc2sgKG9wdGlvbmFsKVwiO1xuICAgICAgICAgICAgbmV3U3VidGFzay5uYW1lID0gYG5ldy1zdWJ0YXNrLW5hbWUtJHtzdWJ0YXNrQ291bnRlcn1gO1xuICAgICAgICAgICAgc3VidGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U3VidGFzayk7XG4gICAgICAgICAgICBzdWJ0YXNrQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbW9kYWwgfSBmcm9tIFwiLi9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29udGFpbmVyKHRhc2tJZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgLy8gZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuXG4gICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKCkpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRGVsZXRlKCkge1xuICAgIGNvbnN0IGRlbGV0ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbn1cbiIsImltcG9ydCB7IHRhc2tTaG93RGVsZXRlIH0gZnJvbSBcIi4vdGFzay1zaG93LWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIHRhc2tTaG93RGVsZXRlKCk7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9kYi9kZWxldGUvZGVsZXRlLXRhc2stZnJvbS1sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrUHJvY2Vzc0RlbGV0ZShlKSB7XG4gICAgLy8gZnVuY3Rpb24gZmluZFBhcmVudChzb3VyY2UsIGZpbHRlcikge1xuICAgIC8vICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vICAgICB3aGlsZSAoc291cmNlICE9IHJvb3QpIHtcbiAgICAvLyAgICAgICAgIGlmIChmaWx0ZXIoc291cmNlKSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBzb3VyY2UgPSBzb3VyY2UucGFyZW50Tm9kZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHRhc2tJZCA9IGZpbmRQYXJlbnQoZS50YXJnZXQsIChlbGVtKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBlbGVtLmRhdGFzZXQudGFza0lkO1xuICAgIC8vIH0pLmRhdGFzZXQudGFza0lkO1xuXG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5kZWxldGU7XG5cbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke3Rhc2tJZH1gKTtcbiAgICB0YXNrVG9EZWxldGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrVG9EZWxldGUpO1xuXG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFza0lkKTtcbn1cbiIsIi8vIGltcG9ydCB7IHRhc2tQcm9jZXNzRGVsZXRlIH0gZnJvbSBcIi4vdGFzay1wcm9jZXNzLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza1Nob3dEZWxldGUoZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICBkZWxldGVCb3guZGF0YXNldC5kZWxldGUgPSBlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZTtcblxuICAgIC8vIGNvbnN0IGRlbGV0ZVRydWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS10cnVlXCIpO1xuICAgIC8vIGRlbGV0ZVRydWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgdGFza1Byb2Nlc3NEZWxldGUoZSk7XG4gICAgLy8gICAgIHRhc2tDbG9zZURlbGV0ZSgpO1xuICAgIC8vIC8vIH0pO1xuXG4gICAgLy8gLy8gY29uc3QgZGVsZXRlRmFsc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1mYWxzZVwiKTtcbiAgICAvLyAvLyBkZWxldGVGYWxzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0Nsb3NlRGVsZXRlKTtcblxuICAgIC8vIGNvbnN0IGRlbGV0ZUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1jbG9zZS1idG5cIik7XG4gICAgLy8gZGVsZXRlQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDbG9zZURlbGV0ZSk7XG5cbiAgICAvLyBmdW5jdGlvbiB0YXNrQ2xvc2VEZWxldGUoKSB7XG4gICAgLy8gICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICAvLyB9XG59XG4iLCJpbXBvcnQgeyB5ZXNCdG4gfSBmcm9tIFwiLi95ZXMtYnRuXCI7XG5pbXBvcnQgeyBub0J0biB9IGZyb20gXCIuL25vLWJ0blwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5zd2Vyc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lclwiKTtcblxuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVzQnRuKCkpO1xuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9CdG4oKSk7XG5cbiAgICByZXR1cm4gYW5zd2Vyc0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IGNsb3NlRGVsZXRlIH0gZnJvbSBcIi4uLy4uL2V2ZW50cy9jbG9zZS1kZWxldGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vQnRuKCkge1xuICAgIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub0J0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYW5zd2VyLWJ0blwiKTtcbiAgICBub0J0bi5pZCA9IFwiZGVsZXRlLWZhbHNlXCI7XG4gICAgbm9CdG4uaW5uZXJUZXh0ID0gXCJOb1wiO1xuICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURlbGV0ZSk7XG5cbiAgICByZXR1cm4gbm9CdG47XG59XG4iLCJpbXBvcnQgeyB0YXNrUHJvY2Vzc0RlbGV0ZSB9IGZyb20gXCIuLi8uLi9ldmVudHMvdGFzay1wcm9jZXNzLWRlbGV0ZVwiO1xuaW1wb3J0IHsgY2xvc2VEZWxldGUgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2Nsb3NlLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geWVzQnRuKCkge1xuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXItYnRuXCIpO1xuICAgIHllc0J0bi5pZCA9IFwiZGVsZXRlLXRydWVcIjtcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXNcIjtcblxuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgdGFza1Byb2Nlc3NEZWxldGUoZSk7XG4gICAgICAgIGNsb3NlRGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geWVzQnRuO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VEZWxldGUgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2Nsb3NlLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VCdG4oKSB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1jbG9zZS1idG5cIik7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgaWNvbi5pbm5lclRleHQgPSBcImNsb3NlXCI7XG5cbiAgICBjbG9zZUJ0bi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEZWxldGUpO1xuXG4gICAgcmV0dXJuIGNsb3NlQnRuO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VCdG4gfSBmcm9tIFwiLi9jbG9zZS1idG4vY2xvc2UtYnRuXCI7XG5pbXBvcnQgeyBxdWVzdGlvbiB9IGZyb20gXCIuL3F1ZXN0aW9uL3F1ZXN0aW9uXCI7XG5pbXBvcnQgeyBhbnN3ZXJzQ29udGFpbmVyIH0gZnJvbSBcIi4vYW5zd2Vycy1jb250YWluZXIvYW5zd2Vycy1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtbW9kYWxcIik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bigpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbigpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChhbnN3ZXJzQ29udGFpbmVyKCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHF1ZXN0aW9uKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBxdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtcXVlc3Rpb25cIik7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gXCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xufVxuIiwiaW1wb3J0IHsgdGFza0NvbnRhaW5lciB9IGZyb20gXCIuL3Rhc2stY29udGFpbmVyL3Rhc2stY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0dyb3VwQ29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCB0YXNrc0dyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFza3MtZ3JvdXAtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgdGFza3NHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKHRhc2spKTtcbn1cbiIsImltcG9ydCB7IHRhc2tUb2dnbGVEZXRhaWxzIH0gZnJvbSBcIi4vdGFzay10b2dnbGUtZGV0YWlsc1wiO1xuaW1wb3J0IHsgdGFza1Nob3dFZGl0RGV0YWlscyB9IGZyb20gXCIuL3Rhc2stc2hvdy1lZGl0XCI7XG5pbXBvcnQgeyB0YXNrU2hvd0RlbGV0ZSB9IGZyb20gXCIuLi8uLi90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL3Rhc2stc2hvdy1kZWxldGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cygpIHtcbiAgICBjb25zdCB0YXNrc0dyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFza3MtZ3JvdXAtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgdGFza3NHcm91cENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0KSB7XG4gICAgICAgICAgICBjYXNlIFwidGFzay1zaG93LWRldGFpbHMtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1RvZ2dsZURldGFpbHMoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFzay1kZXRhaWxzLWVkaXQtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1Nob3dFZGl0RGV0YWlscyhlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLWRldGFpbHMtZGVsZXRlLWJ0blwiOlxuICAgICAgICAgICAgICAgIHRhc2tTaG93RGVsZXRlKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2hvd0NyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi4vLi4vdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2V2ZW50cy9zaG93LWNyZWF0ZS1uZXctdGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza1Nob3dFZGl0RGV0YWlscyhlKSB7XG4gICAgY29uc3QgZWRpdCA9IHRydWU7XG4gICAgc2hvd0NyZWF0ZU5ld1Rhc2soZSwgZWRpdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGFza1RvZ2dsZURldGFpbHMoZSkge1xuICAgIHRvZ2dsZURldGFpbHMoZSk7XG4gICAgdG9nZ2xlQnRuSWNvbihlKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURldGFpbHMoZSkge1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0NvbnRhaW5lciA9XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGFza0RldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInRhc2stZGV0YWlscy1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJ0bkljb24oZSkge1xuICAgICAgICBjb25zdCB0YXNrU2hvd0RldGFpbHNCdG4gPSBlLnRhcmdldC5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRhc2tTaG93RGV0YWlsc0J0bi5pbm5lclRleHQgPVxuICAgICAgICAgICAgdGFza1Nob3dEZXRhaWxzQnRuLmlubmVyVGV4dCA9PT0gXCJleHBhbmRfbW9yZVwiXG4gICAgICAgICAgICAgICAgPyBcImV4cGFuZF9sZXNzXCJcbiAgICAgICAgICAgICAgICA6IFwiZXhwYW5kX21vcmVcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhZGRUb0dyb3VwQ29udGFpbmVyIH0gZnJvbSBcIi4vYWRkLXRvLWdyb3VwLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlTGlzdCB9IGZyb20gXCIuLi8uLi9kYi9yZWFkL2dldC1sb2NhbC1zdG9yYWdlLWxpc3RcIjtcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHN0b3JlZExpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG5cbiAgICBzdG9yZWRMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYWRkVG9Hcm91cENvbnRhaW5lcih0YXNrKTtcbiAgICB9KTtcblxuICAgIGV2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgdG9nZ2xlVGFza0NoZWNrZWQgfSBmcm9tIFwiLi9ldmVudHMvdG9nZ2xlLXRhc2stY2hlY2tlZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tib3hDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZVRhc2tDaGVja2VkKTtcblxuICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNoZWNrbWFyayA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2ttYXJrXCIpO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChgdGFzay1jaGVja21hcmstcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuICAgICAgICByZXR1cm4gY2hlY2ttYXJrO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHNob3dEZXRhaWxzQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvd0RldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIik7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLXNob3ctZGV0YWlscy1idG5cIjtcbiAgICAgICAgc2hvd0RldGFpbHNCdG4uaW5uZXJUZXh0ID0gXCJleHBhbmRfbW9yZVwiO1xuICAgICAgICByZXR1cm4gc2hvd0RldGFpbHNCdG47XG4gICAgfSkoKTtcblxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93RGV0YWlsc0J0bik7XG5cbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG59XG4iLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VVcGRhdGVUYXNrQ2hlY2tlZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYi91cGRhdGUvdXBkYXRlLXRhc2stY2hlY2tlZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGFza0NoZWNrZWQoZSkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcbiAgICBsb2NhbFN0b3JhZ2VVcGRhdGVUYXNrQ2hlY2tlZCh0YXNrSWQpO1xufVxuIiwiaW1wb3J0IHsgZGV0YWlsc0NvbnRyb2xsZXJzIH0gZnJvbSBcIi4vZGV0YWlscy1jb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgZGV0YWlsc0Rlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZGV0YWlscy1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IHsgZGV0YWlsc0R1ZSB9IGZyb20gXCIuL2RldGFpbHMtZHVlXCI7XG5pbXBvcnQgeyBkZXRhaWxzTGlzdCB9IGZyb20gXCIuL2RldGFpbHMtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0YWlsc0NvbnRhaW5lcih0YXNrKSB7XG4gICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLWRldGFpbHMtY29udGFpbmVyXCI7XG5cbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDb250cm9sbGVycyh0YXNrKSk7XG5cbiAgICBpZiAodGFzay5kZXNjcmlwdGlvbikge1xuICAgICAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNEZXNjcmlwdGlvbih0YXNrKSk7XG4gICAgfVxuICAgIGlmICh0YXNrLnN1YnRhc2tzKSB7XG4gICAgICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0xpc3QodGFzaykpO1xuICAgIH1cbiAgICBpZiAodGFzay5kdWVEYXRlKSB7XG4gICAgICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0R1ZSh0YXNrKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRldGFpbHNDb250YWluZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0NvbnRyb2xsZXJzKHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzQ29udHJvbGxlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNDb250cm9sbGVycy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzXCIpO1xuXG4gICAgY29uc3QgZGV0YWlsc0VkaXRCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRldGFpbHNFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIik7XG4gICAgICAgIHJldHVybiBkZXRhaWxzRWRpdEJ0bjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZGV0YWlsc0VkaXRJY29uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0VkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1kZXRhaWxzLWVkaXQtYnRuXCI7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgICAgIGRldGFpbHNFZGl0SWNvbi5pbm5lclRleHQgPSBcImVkaXRcIjtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNFZGl0SWNvbjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZGV0YWlsc0RlbGV0ZUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZXRhaWxzRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNEZWxldGVCdG47XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRldGFpbHNEZWxldGVJY29uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5kYXRhc2V0LnRhcmdldCA9IFwidGFzay1kZXRhaWxzLWRlbGV0ZS1idG5cIjtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUljb24uZGF0YXNldC5kZWxldGUgPSBgJHt0YXNrLmlkfWA7XG4gICAgICAgIGRldGFpbHNEZWxldGVJY29uLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG4gICAgICAgIHJldHVybiBkZXRhaWxzRGVsZXRlSWNvbjtcbiAgICB9KSgpO1xuXG4gICAgZGV0YWlsc0VkaXRCdG4uYXBwZW5kQ2hpbGQoZGV0YWlsc0VkaXRJY29uKTtcbiAgICBkZXRhaWxzQ29udHJvbGxlcnMuYXBwZW5kQ2hpbGQoZGV0YWlsc0VkaXRCdG4pO1xuICAgIGRldGFpbHNEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGV0YWlsc0RlbGV0ZUljb24pO1xuICAgIGRldGFpbHNDb250cm9sbGVycy5hcHBlbmRDaGlsZChkZXRhaWxzRGVsZXRlQnRuKTtcblxuICAgIHJldHVybiBkZXRhaWxzQ29udHJvbGxlcnM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0Rlc2NyaXB0aW9uKHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXRhaWxzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXRhaWxzRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiBkZXRhaWxzRGVzY3JpcHRpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0R1ZSh0YXNrKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kdWUtaWNvblwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwidG9kYXlcIjtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kdWUtZGF0ZVwiKTtcbiAgICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgdG9nZ2xlU3VidGFza0NoZWNrZWQgfSBmcm9tIFwiLi9ldmVudHMvdG9nZ2xlLXN1YnRhc2stY2hlY2tlZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0YWlsc0xpc3QodGFzaykge1xuICAgIGNvbnN0IGRldGFpbHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWxpc3RcIik7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ29udGFpbmVyKHN1YnRhc2tUaXRsZSwgc3VidGFza0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdWJ0YXNrQ2hlY2tlZDtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlU3VidGFza0NoZWNrZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrbWFyaztcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1pdGVtLXRleHRcIik7XG4gICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IHN1YnRhc2tUaXRsZTtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1Db250YWluZXI7XG4gICAgfVxuXG4gICAgKGZ1bmN0aW9uIHByaW50U3VidGFza0VsZW1lbnRzKCkge1xuICAgICAgICB0YXNrLnN1YnRhc2tzLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBjcmVhdGVJdGVtQ29udGFpbmVyKFxuICAgICAgICAgICAgICAgIHN1YnRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgc3VidGFzay5jaGVja2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGV0YWlsc0xpc3QuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gZGV0YWlsc0xpc3Q7XG59XG4iLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VVcGRhdGVTdWJ0YXNrQ2hlY2tlZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYi91cGRhdGUvdXBkYXRlLXN1YnRhc2stY2hlY2tlZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3VidGFza0NoZWNrZWQoZSkge1xuICAgIGNvbnNvbGUuZGlyKGUudGFyZ2V0KTtcbiAgICAvLyBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgLy8gbG9jYWxTdG9yYWdlVXBkYXRlU3VidGFza0NoZWNrZWQodGFza0lkKTtcbn1cbiIsImltcG9ydCB7IGNoZWNrYm94Q29udGFpbmVyIH0gZnJvbSBcIi4vY2hlY2tib3gtY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgZGV0YWlsc0NvbnRhaW5lciB9IGZyb20gXCIuL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrQ29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkID0gYHRhc2stJHt0YXNrLmlkfWA7XG4gICAgdGFza0NvbnRhaW5lci5pZCA9IGB0YXNrLSR7dGFzay5pZH1gO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcih0YXNrKSk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDb250YWluZXIodGFzaykpO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgc2lkZU5hdiB9IGZyb20gXCIuL3ZpZXcvc2lkZS1uYXYvc2lkZS1uYXZcIjtcbmltcG9ydCB7IHBvcHVsYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vZGIvY3JlYXRlL3BvcHVsYXRlLWxvY2FsLXN0b3JhZ2VcIjtcblxuaW1wb3J0IHsgZ3JvdXBDb250YWluZXIgfSBmcm9tIFwiLi92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2dyb3VwLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgYWRkQ29udGFpbmVyIH0gZnJvbSBcIi4vdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgZGVsZXRlQ29udGFpbmVyIH0gZnJvbSBcIi4vdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZGVsZXRlLWNvbnRhaW5lclwiO1xuXG5zaWRlTmF2KCk7XG5wb3B1bGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG5ncm91cENvbnRhaW5lcigpO1xuYWRkQ29udGFpbmVyKCk7XG5kZWxldGVDb250YWluZXIoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=