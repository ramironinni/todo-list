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

    window.addEventListener("click", (e) => {
        if (e.target === addContainer) {
            addContainer.classList.remove("task-add-modal-container-active");
        }
    });

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
/* harmony import */ var _task_add_subtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-add-subtask */ "./src/view/task-add-container-modal/events/task-add-subtask.js");



function events() {
    (0,_show_create_new_task__WEBPACK_IMPORTED_MODULE_0__.showCreateNewTask)();
    (0,_task_add_subtask__WEBPACK_IMPORTED_MODULE_1__.addSubtask)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RiL2NyZWF0ZS9hZGQtdGFzay10by1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvZGVmYXVsdC1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3Byb2Nlc3MtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvY3JlYXRlL3NhdmUtaW4tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvZGVsZXRlL2RlbGV0ZS10YXNrLWZyb20tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbGFzdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIvcmVhZC9nZXQtbG9jYWwtc3RvcmFnZS1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYi91cGRhdGUvdXBkYXRlLXRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zaWRlLW5hdi9ldmVudHMvY2xvc2Utc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2lkZS1uYXYvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zaWRlLW5hdi9ldmVudHMvc2hvdy1zaWRlLW5hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zaWRlLW5hdi9zaWRlLW5hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvYWRkLXRvcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvY2xvc2UtYnV0dG9uL2Nsb3NlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2FkZC10b3AvY2xvc2UtYnV0dG9uL2V2ZW50cy9jbG9zZS1jcmVhdGUtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9hZGQtdG9wL2Nsb3NlLWJ1dHRvbi9pY29uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvYWRkLXRvcC90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL2R1ZS9kdWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL25hbWUvbmFtZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vcHJpb3JpdHkvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3N1Ym1pdC9zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3N1YnRhc2tzL2FkZC9hZGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2FkZC1tb2RhbC9mb3JtL3N1YnRhc2tzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWFkZC1jb250YWluZXItbW9kYWwvYWRkLW1vZGFsL2Zvcm0vc3VidGFza3Mvc3VidGFza3MtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvc2hvdy1jcmVhdGUtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1hZGQtY29udGFpbmVyLW1vZGFsL2V2ZW50cy90YXNrLWFkZC1zdWJ0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9kZWxldGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvY2xvc2UtZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9ldmVudHMvdGFzay1wcm9jZXNzLWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL3Rhc2stc2hvdy1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Fuc3dlcnMtY29udGFpbmVyL2Fuc3dlcnMtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9hbnN3ZXJzLWNvbnRhaW5lci9uby1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Fuc3dlcnMtY29udGFpbmVyL3llcy1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL2Nsb3NlLWJ0bi9jbG9zZS1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1kZWxldGUtY29udGFpbmVyLW1vZGFsL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9tb2RhbC9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci9hZGQtdG8tZ3JvdXAtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZXZlbnRzL3Rhc2stc2hvdy1lZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2V2ZW50cy90YXNrLXRvZ2dsZS1kZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2dyb3VwLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9jaGVja2JveC1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2NoZWNrYm94LWNvbnRhaW5lci9ldmVudHMvdG9nZ2xlLXRhc2stY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrLWdyb3VwLWNvbnRhaW5lci90YXNrLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRhaW5lci9kZXRhaWxzLWNvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL2RldGFpbHMtY29udGFpbmVyL2RldGFpbHMtZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1kdWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvdGFzay1jb250YWluZXIvZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL3Rhc2stY29udGFpbmVyL3Rhc2stY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCwrQkFBK0Isa0NBQWtDLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLDRCQUE0Qiw4QkFBOEIsdUNBQXVDLHlDQUF5QyxHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyxVQUFVLHdCQUF3Qiw2Q0FBNkMsK0JBQStCLDBCQUEwQixXQUFXLFVBQVUsZ0JBQWdCLG1EQUFtRCx3QkFBd0IsR0FBRyxtREFBbUQsd0JBQXdCLHdCQUF3QixtQ0FBbUMsOEJBQThCLFdBQVcscUJBQXFCLDJCQUEyQixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQixzQkFBc0Isb0NBQW9DLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyxxQkFBcUIsc0NBQXNDLHlCQUF5QixHQUFHLGNBQWMsNkNBQTZDLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0IscUNBQXFDLGdCQUFnQix3QkFBd0IsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyxpQ0FBaUMsd0JBQXdCLE1BQU0sdUJBQXVCLGtCQUFrQixHQUFHLDRCQUE0Qix5QkFBeUIscUJBQXFCLG9CQUFvQixpQkFBaUIsb0JBQW9CLDBCQUEwQixzQkFBc0IsNkNBQTZDLCtDQUErQyxHQUFHLGVBQWUsc0JBQXNCLGlCQUFpQixhQUFhLGNBQWMsb0JBQW9CLDhCQUE4QixtQkFBbUIsZUFBZSx5QkFBeUIsdUJBQXVCLHVEQUF1RCxxQkFBcUIsdUJBQXVCLGlCQUFpQixHQUFHLHNCQUFzQixtQkFBbUIsNkNBQTZDLGlCQUFpQixHQUFHLG9CQUFvQixvQkFBb0Isc0JBQXNCLDZCQUE2Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQixHQUFHLG9CQUFvQixpQkFBaUIsc0JBQXNCLDRCQUE0QixzQkFBc0IsdUJBQXVCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIscUJBQXFCLDRCQUE0QixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxrREFBa0QsNENBQTRDLEdBQUcsMkJBQTJCLHVCQUF1QixpQkFBaUIsR0FBRywrQkFBK0Isc0JBQXNCLEdBQUcsb0NBQW9DLDJCQUEyQixHQUFHLDJCQUEyQix5QkFBeUIsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxRQUFRLHlCQUF5QixHQUFHLDRCQUE0QixrQkFBa0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QixHQUFHLDhCQUE4QixvQkFBb0IsMEJBQTBCLHlCQUF5QixrQkFBa0Isb0JBQW9CLDRCQUE0QixxREFBcUQsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsb0JBQW9CLEdBQUcscUJBQXFCLHFCQUFxQixrQkFBa0IsbUJBQW1CLDJCQUEyQiwwQkFBMEIsb0NBQW9DLEdBQUcsK0NBQStDLG9EQUFvRCxHQUFHLCtDQUErQyxvREFBb0QsR0FBRywrQ0FBK0Msb0RBQW9ELEdBQUcsK0NBQStDLG9EQUFvRCxHQUFHLDhDQUE4QywwQ0FBMEMsc0NBQXNDLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLDBDQUEwQywrQkFBK0Isb0NBQW9DLEdBQUcsNEJBQTRCLHlCQUF5QixrQkFBa0IsR0FBRyw2QkFBNkIseUJBQXlCLGlCQUFpQix1QkFBdUIsa0JBQWtCLG9CQUFvQixzQkFBc0IsNEJBQTRCLHVEQUF1RCwyREFBMkQsaUJBQWlCLGdDQUFnQyxHQUFHLG9DQUFvQyw4QkFBOEIsMkJBQTJCLDBCQUEwQixpQkFBaUIsR0FBRywrQkFBK0Isa0JBQWtCLHFCQUFxQixzQkFBc0IsMEJBQTBCLDZCQUE2QiwwQkFBMEIsR0FBRyx5QkFBeUIseUJBQXlCLGdCQUFnQixrQkFBa0IsR0FBRywrQkFBK0Isb0JBQW9CLGdDQUFnQyxHQUFHLHVEQUF1RCwwQkFBMEIsR0FBRyw0RkFBNEYsc0JBQXNCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGtDQUFrQyxvQkFBb0IseUJBQXlCLDRCQUE0QixHQUFHLGtDQUFrQyxxQkFBcUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsMEJBQTBCLG1DQUFtQyxHQUFHLGlDQUFpQyx5QkFBeUIsb0JBQW9CLEdBQUcsd0VBQXdFLDBDQUEwQyxzQ0FBc0MsR0FBRyxtRUFBbUUsK0JBQStCLG9DQUFvQyxHQUFHLGlDQUFpQyxvQkFBb0IsR0FBRyw0QkFBNEIsc0JBQXNCLDJCQUEyQixHQUFHLDhEQUE4RCxzQkFBc0IsaUJBQWlCLGFBQWEsY0FBYyxvQkFBb0IsbUJBQW1CLG9CQUFvQix3QkFBd0IsaUNBQWlDLDBCQUEwQixxQ0FBcUMsR0FBRyw0RUFBNEUsdUJBQXVCLHdCQUF3QixHQUFHLDBDQUEwQyx5QkFBeUIsaUJBQWlCLGlCQUFpQiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw0QkFBNEIscURBQXFELG1DQUFtQyxpQ0FBaUMsK0JBQStCLEdBQUcsMkJBQTJCLFlBQVksc0JBQXNCLHFCQUFxQixPQUFPLFVBQVUsaUJBQWlCLHFCQUFxQixPQUFPLEdBQUcsd0JBQXdCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDRCQUE0QixxQ0FBcUMsc0JBQXNCLDhCQUE4QixHQUFHLG9DQUFvQyxvQkFBb0IsOEJBQThCLEdBQUcsNEJBQTRCLHlCQUF5QixnQkFBZ0Isa0JBQWtCLEdBQUcsaUNBQWlDLHNCQUFzQixHQUFHLDZCQUE2Qiw0QkFBNEIsR0FBRyxxQkFBcUIsc0JBQXNCLHlCQUF5QixHQUFHLGdHQUFnRyxrQkFBa0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixHQUFHLHFDQUFxQyxtREFBbUQsR0FBRyxrREFBa0QscUZBQXFGLGlCQUFpQixpQkFBaUIsa0NBQWtDLHlCQUF5QiwwQkFBMEIsR0FBRyxzQ0FBc0MseUJBQXlCLDRCQUE0QixHQUFHLGtDQUFrQyw0QkFBNEIsR0FBRyxtQ0FBbUMseUJBQXlCLGVBQWUsZ0JBQWdCLG9CQUFvQixzQkFBc0IsMEJBQTBCLGtCQUFrQixnQ0FBZ0MsNENBQTRDLHdCQUF3QixHQUFHLHdDQUF3QyxzQkFBc0IsR0FBRyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHFDQUFxQyxvQkFBb0Isb0NBQW9DLHFCQUFxQixHQUFHLHVDQUF1Qyx5QkFBeUIsaUJBQWlCLEdBQUcsc0NBQXNDLHlCQUF5QixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLDRCQUE0QixxQkFBcUIsR0FBRyxpQkFBaUIsb0RBQW9ELEdBQUcsNERBQTRELGdEQUFnRCxHQUFHLGlCQUFpQixvREFBb0QsR0FBRyw0REFBNEQsZ0RBQWdELEdBQUcsaUJBQWlCLG9EQUFvRCxHQUFHLDREQUE0RCxnREFBZ0QsR0FBRyxpQkFBaUIsb0RBQW9ELEdBQUcsNERBQTRELGdEQUFnRCxHQUFHLGlFQUFpRSxrQ0FBa0MsR0FBRyxvREFBb0Qsa0JBQWtCLHNCQUFzQiwwQkFBMEIsNkNBQTZDLGtCQUFrQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixxQkFBcUIsT0FBTyxLQUFLLG9CQUFvQixhQUFhLGFBQWEsT0FBTyxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLHFCQUFxQixPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFL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O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjs7QUFFOEI7QUFDdUI7O0FBRUc7QUFDQTtBQUNTOztBQUV0RixnRUFBTztBQUNQLHVGQUFvQjs7QUFFcEIsMEZBQWM7QUFDZCwwRkFBWTtBQUNaLG1HQUFlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMjg3NmJlO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTE6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMjogI2NhODAyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS0zOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTQ6ICM3MDJjY2E7XFxuICAgIC0tY29sb3ItZ3JleTogIzdhN2E3YTtcXG4gICAgLS1jb2xvci1zaGFkb3c6ICNhNWE1YTU7XFxuICAgIC0tY29sb3ItZWxlbWVudC1wcmltYXJ5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IDNweCAjMjUyNTI1OGE7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYWRvdyk7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgIzI1MjUyNTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMyB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stc2hvdy1kZXRhaWxzLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjVyZW0gdmFyKC0tY29sb3Itc2hhZG93KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXItYWN0aXZlIHtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udHJvbGxlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtZWRpdC1idG4gc3BhbixcXG4udGFzay1hZGQtY2xvc2UtYnRuIHNwYW4sXFxuLnRhc2stZGV0YWlscy1kZWxldGUtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lcixcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNWI7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlLFxcbi50YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbCxcXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAjNWM1YzVjO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi50YXNrLWRlbGV0ZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogNHJlbSAycmVtIDNyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtY2xvc2UtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWRlc2NyaXB0aW9uLFxcbi50YXNrLWFkZC1uYW1lLFxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQsXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLW5hbWUtdmFsaWRhdGlvbi1mYWxzZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1hZGQtbmFtZS12YWxpZGF0aW9uLWZhbHNlOjpwbGFjZWhvbGRlciB7XFxuICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTk0Yjg7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLyogXFxuLnRhc2stYWRkLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59ICovXFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi5wcmlvcml0eS0yIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTIpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4ucHJpb3JpdHktNCB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS00KTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC40cmVtICMwMDA7XFxufVxcblxcbi50YXNrLWFkZC1zdWJtaXQtYnRuLFxcbi50YXNrLWRlbGV0ZS1hbnN3ZXItYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQ0FBa0M7QUFDdEM7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQixFQUFFLE1BQU07SUFDekIsOEJBQThCLEVBQUUsTUFBTTtJQUN0QyxnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCLFdBQVcsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUyxFQUFFLE1BQU07SUFDakIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07QUFDM0I7O0FBRUE7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFB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RUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI4NzZiZTtcXG4gICAgLS1jb2xvci1wcmlvcml0eS0xOiAjY2EyYzJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LTI6ICNjYTgwMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktMzogIzNmNmRjMjtcXG4gICAgLS1jb2xvci1wcmlvcml0eS00OiAjNzAyY2NhO1xcbiAgICAtLWNvbG9yLWdyZXk6ICM3YTdhN2E7XFxuICAgIC0tY29sb3Itc2hhZG93OiAjYTVhNWE1O1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtcHJpbWFyeTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeTogI2U2ZTZlNjtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnRvcC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0LWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b3AtbmF2LWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwOyAqL1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtLWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRkLXRhc2stZmxvYXRpbmctYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEuM3JlbTtcXG4gICAgcmlnaHQ6IDEuM3JlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzI1MjUyNTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1hY3RpdmUge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAzcHggIzI1MjUyNThhO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2lkZS1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbTpob3ZlcixcXG4uc2lkZS1uYXYtaXRlbS1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxufVxcblxcbi50YXNrcy1ncm91cC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LTMge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMyk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS00IHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLXNob3ctZGV0YWlscy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXNlY29uZGFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC41cmVtIHZhcigtLWNvbG9yLXNoYWRvdyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0bixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4sXFxuLnRhc2stYWRkLWNsb3NlLWJ0biBzcGFuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXIsXFxuLnRhc2stZGVsZXRlLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDViO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSxcXG4udGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1hZGQtbW9kYWwsXFxuLnRhc2stZGVsZXRlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzVjNWM1YztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0zMDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udGFzay1kZWxldGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbSAzcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNsb3NlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDAgMCAxLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1kZXNjcmlwdGlvbixcXG4udGFzay1hZGQtbmFtZSxcXG4udGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0LFxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi50YXNrLWFkZC1uYW1lLXZhbGlkYXRpb24tZmFsc2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSB2YXIoLS1jb2xvci1wcmlvcml0eS0xKTtcXG59XFxuXFxuLnRhc2stYWRkLW5hbWUtdmFsaWRhdGlvbi1mYWxzZTo6cGxhY2Vob2xkZXIge1xcbiAgICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxufVxcblxcbi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU5NGI4O1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMDAwO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWR1ZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcblxcbi8qIFxcbi50YXNrLWFkZC1kdWUtdGV4dCB7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufSAqL1xcblxcbi50YXNrLWFkZC1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktMSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTEpO1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS0yKTtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktMik7XFxufVxcblxcbi5wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LTMpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS0zKTtcXG59XFxuXFxuLnByaW9yaXR5LTQge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktNCk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LTQpO1xcbn1cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjMDAwO1xcbn1cXG5cXG4udGFzay1hZGQtc3VibWl0LWJ0bixcXG4udGFzay1kZWxldGUtYW5zd2VyLWJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc2F2ZS1pbi1sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UodGFzaykge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG5cbiAgICBsaXN0LnB1c2godGFzayk7XG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCk7XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdExpc3QgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiQnV5IHBpenphIGluZ3JlZGllbnRzXCIsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMZW5ueSBkb2Vzbid0IGxpa2UgYW5jaG92aWVzIVwiLFxuICAgICAgICBzdWJ0YXNrczogW1xuICAgICAgICAgICAgeyB0aXRsZTogXCJDaGVlc2VcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVG9tYXRvXCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiT2xpdmVzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yM1wiLFxuICAgICAgICBwcmlvcml0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIkRvIGxhdW5kcnlcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBzdWJ0YXNrczogW10sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yM1wiLFxuICAgICAgICBwcmlvcml0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIkZpbmlzaCBwcm9qZWN0XCIsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb24ndCBmb3JnZXQgdG8gdXNlIFBvbW9kb3JvIFRpbWVyXCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkFkZCBmYW5jeSBhbmltYXRpb25zXCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiUmV2aWV3IFNPTElEIHByaW5jaXBsZXNcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRml4IGJ1Z3NcIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjEtMDctMjNcIixcbiAgICAgICAgcHJpb3JpdHk6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogXCJNYWtlIGJyZWFkXCIsXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZSBvbGl2ZSBvaWw/XCIsXG4gICAgICAgIHN1YnRhc2tzOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkJ1eSB5ZWFzdFwiLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlRyeSBuZXcgcmVjaXBlXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNy0yOFwiLFxuICAgICAgICBwcmlvcml0eTogMixcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGRlZmF1bHRMaXN0IH0gZnJvbSBcIi4vZGVmYXVsdC1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0XCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhbHRMaXN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgZGVmYWx0TGlzdEpTT04pO1xufVxuIiwiaW1wb3J0IHsgZ2V0TGFzdElkIH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxhc3QtaWRcIjtcbmltcG9ydCB7IGFkZFRhc2tUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2FkZC10YXNrLXRvLWxvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGNsb3NlQ3JlYXRlTmV3VGFzayB9IGZyb20gXCIuLi8uLi92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtbW9kYWwvYWRkLXRvcC9jbG9zZS1idXR0b24vZXZlbnRzL2Nsb3NlLWNyZWF0ZS1uZXctdGFza1wiO1xuaW1wb3J0IHsgYWRkVG9Hcm91cENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi92aWV3L3Rhc2stZ3JvdXAtY29udGFpbmVyL2FkZC10by1ncm91cC1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGb3JtKFxuICAgIGUsXG4gICAgdGFza05hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgc3VidGFza3NDb250YWluZXIsXG4gICAgZHVlLFxuICAgIHByaW9yaXR5XG4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBsYXN0SWQgPSBnZXRMYXN0SWQoKTtcbiAgICBjb25zdCBpZCA9IGxhc3RJZCArIDE7XG5cbiAgICBjb25zdCB0aXRsZSA9IHRhc2tOYW1lLnZhbHVlO1xuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0YXNrTmFtZS5wbGFjZWhvbGRlciA9IFwiWW91IG11c3QgZW50ZXIgYSBuYW1lXCI7XG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1uYW1lLXZhbGlkYXRpb24tZmFsc2VcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VidGFza3MgPSBzdWJ0YXNrc0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2RlcztcbiAgICBjb25zdCBzdWJ0YXNrc1Byb2Nlc3NlZCA9IFtdO1xuICAgIHN1YnRhc2tzLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgICAgaWYgKHN1YnRhc2sudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRhc2tQcm9jZXNzZWQgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHN1YnRhc2sudmFsdWUsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3VidGFza3NQcm9jZXNzZWQucHVzaChzdWJ0YXNrUHJvY2Vzc2VkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZS5jaGlsZE5vZGVzWzBdLnZhbHVlO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMZXZlbHMgPSBwcmlvcml0eS5jaGlsZE5vZGVzO1xuXG4gICAgbGV0IHByaW9yaXR5TGV2ZWxQcm9jZXNzZWQ7XG4gICAgcHJpb3JpdHlMZXZlbHMuZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGxldmVsLmNoaWxkTm9kZXNbMF0uY2hlY2tlZDtcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBsZXZlbC5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFsxXTtcbiAgICAgICAgICAgIHByaW9yaXR5TGV2ZWxQcm9jZXNzZWQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMZXZlbFtwcmlvcml0eUxldmVsLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIHN1YnRhc2tzOiBzdWJ0YXNrc1Byb2Nlc3NlZCxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5TGV2ZWxQcm9jZXNzZWQsXG4gICAgfTtcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgICBjbG9zZUNyZWF0ZU5ld1Rhc2soKTtcbiAgICAgICAgYWRkVG9Hcm91cENvbnRhaW5lcihuZXdUYXNrKTtcbiAgICAgICAgYWRkVGFza1RvTG9jYWxTdG9yYWdlKG5ld1Rhc2spO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlSW5Mb2NhbFN0b3JhZ2UobGlzdCkge1xuICAgIGNvbnN0IGxpc3RKU09OID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIGxpc3RKU09OKTtcbn1cbiIsImltcG9ydCB7IHNhdmVJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9jcmVhdGUvc2F2ZS1pbi1sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFza0lkKSB7XG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcbiAgICB0YXNrSWQgPSBOdW1iZXIodGFza0lkKTtcblxuICAgIGNvbnN0IHRvRGVsZXRlSWRleCA9IGxpc3QuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgbGlzdC5zcGxpY2UodG9EZWxldGVJZGV4LCAxKTtcblxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZShsaXN0KTtcbn1cbiIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZUxpc3QgfSBmcm9tIFwiLi9nZXQtbG9jYWwtc3RvcmFnZS1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0SWQoKSB7XG4gICAgY29uc3QgbGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIGNvbnN0IGxhc3RJZCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXS5pZDtcblxuICAgIHJldHVybiBsYXN0SWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlTGlzdCgpIHtcbiAgICBjb25zdCBzdG9yZWRMaXN0SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKTtcbiAgICBjb25zdCBzdG9yZWRMaXN0ID0gSlNPTi5wYXJzZShzdG9yZWRMaXN0SlNPTik7XG4gICAgcmV0dXJuIHN0b3JlZExpc3Q7XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NyZWF0ZS9zYXZlLWluLWxvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVVwZGF0ZVRhc2tDaGVja2VkKHRhc2tJZCkge1xuICAgIHRhc2tJZCA9IE51bWJlcih0YXNrSWRbdGFza0lkLmxlbmd0aCAtIDFdKTtcblxuICAgIGNvbnN0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2VMaXN0KCk7XG5cbiAgICBjb25zdCB0YXNrVG9VcGRhdGVJbmRleCA9IGxpc3QuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgbGlzdFt0YXNrVG9VcGRhdGVJbmRleF0uY2hlY2tlZCA9ICFsaXN0W3Rhc2tUb1VwZGF0ZUluZGV4XS5jaGVja2VkO1xuXG4gICAgc2F2ZUluTG9jYWxTdG9yYWdlKGxpc3QpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU2lkZU5hdigpIHtcbiAgICBjb25zdCBzaWRlTmF2Q2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2LWNsb3NlLWJ0blwiKTtcblxuICAgIHNpZGVOYXZDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VTaWRlTmF2KTtcblxuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xuICAgICAgICBzaWRlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlLW5hdi1hY3RpdmVcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2hvd1NpZGVOYXYgfSBmcm9tIFwiLi9zaG93LXNpZGUtbmF2XCI7XG5pbXBvcnQgeyBjbG9zZVNpZGVOYXYgfSBmcm9tIFwiLi9jbG9zZS1zaWRlLW5hdlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIHNob3dTaWRlTmF2KCk7XG4gICAgY2xvc2VTaWRlTmF2KCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVOYXYoKSB7XG4gICAgY29uc3Qgc2lkZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXYtYnRuXCIpO1xuXG4gICAgc2lkZU5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvdyk7XG5cbiAgICBjb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hdlwiKTtcblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHNpZGVOYXYuY2xhc3NMaXN0LmFkZChcInNpZGUtbmF2LWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWRlTmF2KCkge1xuICAgIGV2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgYWRkTW9kYWwgfSBmcm9tIFwiLi9hZGQtbW9kYWwvYWRkLW1vZGFsXCI7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb250YWluZXIoKSB7XG4gICAgY29uc3QgYWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICBhZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gYWRkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQ29udGFpbmVyKTtcbiAgICBldmVudHMoKTtcbn1cbiIsImltcG9ydCB7IGFkZFRvcCB9IGZyb20gXCIuL2FkZC10b3AvYWRkLXRvcFwiO1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm0vZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWwoKSB7XG4gICAgY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbFwiKTtcbiAgICBhZGRNb2RhbC5hcHBlbmRDaGlsZChhZGRUb3AoKSk7XG4gICAgYWRkTW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSgpKTtcbiAgICByZXR1cm4gYWRkTW9kYWw7XG59XG4iLCJpbXBvcnQgeyBjbG9zZUJ1dHRvbiB9IGZyb20gXCIuL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b25cIjtcbmltcG9ydCB7IHRpdGxlIH0gZnJvbSBcIi4vdGl0bGUvdGl0bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvcCgpIHtcbiAgICBjb25zdCBhZGRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvcC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdG9wXCIpO1xuICAgIGFkZFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbigpKTtcbiAgICBhZGRUb3AuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgcmV0dXJuIGFkZFRvcDtcbn1cbiIsImltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9ldmVudHMvY2xvc2UtY3JlYXRlLW5ldy10YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWNsb3NlLWJ0blwiKTtcbiAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKCkpO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQ3JlYXRlTmV3VGFzayk7XG5cbiAgICByZXR1cm4gY2xvc2VCdXR0b247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VDcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tBZGRNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcblxuICAgIHRhc2tBZGRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpY29uKCkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IFwiY2xvc2VcIjtcbiAgICByZXR1cm4gaWNvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0aXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJOZXcgdGFza1wiO1xuICAgIHJldHVybiB0aXRsZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCI7XG4gICAgZGVzY3JpcHRpb24ubmFtZSA9IFwibmV3LXRhc2stZGVzY3JpcHRpb25cIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVlKCkge1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtZHVlLWRhdGVcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGlucHV0Lm5hbWUgPSBcIm5ldy10YXNrLWR1ZS1kYXRlXCI7XG5cbiAgICBkdWUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGR1ZTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5hbWUgfSBmcm9tIFwiLi9uYW1lL25hbWVcIjtcbmltcG9ydCB7IGNyZWF0ZURlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZGVzY3JpcHRpb24vZGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZVN1YnRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vc3VidGFza3Mvc3VidGFza3MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVEdWUgfSBmcm9tIFwiLi9kdWUvZHVlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5L3ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzdWJtaXQgfSBmcm9tIFwiLi9zdWJtaXQvc3VibWl0XCI7XG5pbXBvcnQgeyBwcm9jZXNzRm9ybSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYi9jcmVhdGUvcHJvY2Vzcy1mb3JtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1mb3JtXCIpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBjcmVhdGVOYW1lKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGNyZWF0ZVN1YnRhc2tzQ29udGFpbmVyKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJ0YXNrc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkdWUgPSBjcmVhdGVEdWUoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZVByaW9yaXR5KCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCgpKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBwcm9jZXNzRm9ybShlLCB0YXNrTmFtZSwgZGVzY3JpcHRpb24sIHN1YnRhc2tzQ29udGFpbmVyLCBkdWUsIHByaW9yaXR5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1uYW1lXCIpO1xuICAgIG5hbWUucGxhY2Vob2xkZXIgPSBcIlRhc2tcIjtcbiAgICBuYW1lLm5hbWUgPSBcIm5ldy10YXNrLW5hbWVcIjtcbiAgICByZXR1cm4gbmFtZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eSgpIHtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGxldmVscyA9IFsxLCAyLCAzLCA0XTtcblxuICAgIGxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgaW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXNlbGVjdG9yXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7bGV2ZWx9YCk7XG5cbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJpb3JpdHk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VibWl0LWJ0blwiKTtcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gXCJBZGRcIjtcblxuICAgIHJldHVybiBzdWJtaXQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkKCkge1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyXCIpO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJhZGRcIjtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBhZGQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiBhZGQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrcy1saXN0XCIpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiU3VidGFzayAob3B0aW9uYWwpXCI7XG4gICAgaW5wdXQubmFtZSA9IFwibmV3LXN1YnRhc2stbmFtZS0xXCI7XG5cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIHJldHVybiBsaXN0O1xufVxuIiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4vYWRkL2FkZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VidGFza3NDb250YWluZXIoKSB7XG4gICAgY29uc3Qgc3VidGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1YnRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1zdWJ0YXNrcy1jb250YWluZXJcIik7XG5cbiAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KCkpO1xuICAgIHN1YnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZCgpKTtcbiAgICByZXR1cm4gc3VidGFza3NDb250YWluZXI7XG59XG4iLCJpbXBvcnQgeyBzaG93Q3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL3Nob3ctY3JlYXRlLW5ldy10YXNrXCI7XG5pbXBvcnQgeyBhZGRTdWJ0YXNrIH0gZnJvbSBcIi4vdGFzay1hZGQtc3VidGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIHNob3dDcmVhdGVOZXdUYXNrKCk7XG4gICAgYWRkU3VidGFzaygpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dDcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZsb2F0aW5nLWJ0blwiKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93KTtcblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIGNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi50YXNrLWFkZC1tb2RhbC1jb250YWluZXJcIlxuICAgICAgICApO1xuXG4gICAgICAgIGFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkU3VidGFzaygpIHtcbiAgICBjb25zdCBhZGRTdWJ0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlclwiXG4gICAgKTtcbiAgICBhZGRTdWJ0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGQpO1xuXG4gICAgY29uc3Qgc3VidGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0tY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgbGV0IHN1YnRhc2tDb3VudGVyID0gMjtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgICAgaWYgKHN1YnRhc2tDb3VudGVyIDwgNSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U3VidGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1N1YnRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1N1YnRhc2sucGxhY2Vob2xkZXIgPSBcIlN1YnRhc2sgKG9wdGlvbmFsKVwiO1xuICAgICAgICAgICAgbmV3U3VidGFzay5uYW1lID0gYG5ldy1zdWJ0YXNrLW5hbWUtJHtzdWJ0YXNrQ291bnRlcn1gO1xuICAgICAgICAgICAgc3VidGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U3VidGFzayk7XG4gICAgICAgICAgICBzdWJ0YXNrQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbW9kYWwgfSBmcm9tIFwiLi9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29udGFpbmVyKHRhc2tJZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgLy8gZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuXG4gICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKCkpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRGVsZXRlKCkge1xuICAgIGNvbnN0IGRlbGV0ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbn1cbiIsImltcG9ydCB7IHRhc2tTaG93RGVsZXRlIH0gZnJvbSBcIi4vdGFzay1zaG93LWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIHRhc2tTaG93RGVsZXRlKCk7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9kYi9kZWxldGUvZGVsZXRlLXRhc2stZnJvbS1sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrUHJvY2Vzc0RlbGV0ZShlKSB7XG4gICAgLy8gZnVuY3Rpb24gZmluZFBhcmVudChzb3VyY2UsIGZpbHRlcikge1xuICAgIC8vICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vICAgICB3aGlsZSAoc291cmNlICE9IHJvb3QpIHtcbiAgICAvLyAgICAgICAgIGlmIChmaWx0ZXIoc291cmNlKSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBzb3VyY2UgPSBzb3VyY2UucGFyZW50Tm9kZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHRhc2tJZCA9IGZpbmRQYXJlbnQoZS50YXJnZXQsIChlbGVtKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBlbGVtLmRhdGFzZXQudGFza0lkO1xuICAgIC8vIH0pLmRhdGFzZXQudGFza0lkO1xuXG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5kZWxldGU7XG5cbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke3Rhc2tJZH1gKTtcbiAgICB0YXNrVG9EZWxldGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrVG9EZWxldGUpO1xuXG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFza0lkKTtcbn1cbiIsIi8vIGltcG9ydCB7IHRhc2tQcm9jZXNzRGVsZXRlIH0gZnJvbSBcIi4vdGFzay1wcm9jZXNzLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza1Nob3dEZWxldGUoZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICBkZWxldGVCb3guZGF0YXNldC5kZWxldGUgPSBlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZTtcblxuICAgIC8vIGNvbnN0IGRlbGV0ZVRydWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS10cnVlXCIpO1xuICAgIC8vIGRlbGV0ZVRydWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgdGFza1Byb2Nlc3NEZWxldGUoZSk7XG4gICAgLy8gICAgIHRhc2tDbG9zZURlbGV0ZSgpO1xuICAgIC8vIC8vIH0pO1xuXG4gICAgLy8gLy8gY29uc3QgZGVsZXRlRmFsc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1mYWxzZVwiKTtcbiAgICAvLyAvLyBkZWxldGVGYWxzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0Nsb3NlRGVsZXRlKTtcblxuICAgIC8vIGNvbnN0IGRlbGV0ZUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZS1jbG9zZS1idG5cIik7XG4gICAgLy8gZGVsZXRlQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDbG9zZURlbGV0ZSk7XG5cbiAgICAvLyBmdW5jdGlvbiB0YXNrQ2xvc2VEZWxldGUoKSB7XG4gICAgLy8gICAgIGRlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZWxldGUtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICAvLyB9XG59XG4iLCJpbXBvcnQgeyB5ZXNCdG4gfSBmcm9tIFwiLi95ZXMtYnRuXCI7XG5pbXBvcnQgeyBub0J0biB9IGZyb20gXCIuL25vLWJ0blwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5zd2Vyc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXJzLWNvbnRhaW5lclwiKTtcblxuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVzQnRuKCkpO1xuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9CdG4oKSk7XG5cbiAgICByZXR1cm4gYW5zd2Vyc0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IGNsb3NlRGVsZXRlIH0gZnJvbSBcIi4uLy4uL2V2ZW50cy9jbG9zZS1kZWxldGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vQnRuKCkge1xuICAgIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub0J0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYW5zd2VyLWJ0blwiKTtcbiAgICBub0J0bi5pZCA9IFwiZGVsZXRlLWZhbHNlXCI7XG4gICAgbm9CdG4uaW5uZXJUZXh0ID0gXCJOb1wiO1xuICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURlbGV0ZSk7XG5cbiAgICByZXR1cm4gbm9CdG47XG59XG4iLCJpbXBvcnQgeyB0YXNrUHJvY2Vzc0RlbGV0ZSB9IGZyb20gXCIuLi8uLi9ldmVudHMvdGFzay1wcm9jZXNzLWRlbGV0ZVwiO1xuaW1wb3J0IHsgY2xvc2VEZWxldGUgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2Nsb3NlLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geWVzQnRuKCkge1xuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1hbnN3ZXItYnRuXCIpO1xuICAgIHllc0J0bi5pZCA9IFwiZGVsZXRlLXRydWVcIjtcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXNcIjtcblxuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgdGFza1Byb2Nlc3NEZWxldGUoZSk7XG4gICAgICAgIGNsb3NlRGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geWVzQnRuO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VEZWxldGUgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2Nsb3NlLWRlbGV0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VCdG4oKSB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1jbG9zZS1idG5cIik7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgaWNvbi5pbm5lclRleHQgPSBcImNsb3NlXCI7XG5cbiAgICBjbG9zZUJ0bi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEZWxldGUpO1xuXG4gICAgcmV0dXJuIGNsb3NlQnRuO1xufVxuIiwiaW1wb3J0IHsgY2xvc2VCdG4gfSBmcm9tIFwiLi9jbG9zZS1idG4vY2xvc2UtYnRuXCI7XG5pbXBvcnQgeyBxdWVzdGlvbiB9IGZyb20gXCIuL3F1ZXN0aW9uL3F1ZXN0aW9uXCI7XG5pbXBvcnQgeyBhbnN3ZXJzQ29udGFpbmVyIH0gZnJvbSBcIi4vYW5zd2Vycy1jb250YWluZXIvYW5zd2Vycy1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtbW9kYWxcIik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bigpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbigpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChhbnN3ZXJzQ29udGFpbmVyKCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHF1ZXN0aW9uKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBxdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtcXVlc3Rpb25cIik7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gXCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xufVxuIiwiaW1wb3J0IHsgdGFza0NvbnRhaW5lciB9IGZyb20gXCIuL3Rhc2stY29udGFpbmVyL3Rhc2stY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0dyb3VwQ29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCB0YXNrc0dyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFza3MtZ3JvdXAtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgdGFza3NHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKHRhc2spKTtcbn1cbiIsImltcG9ydCB7IHRhc2tUb2dnbGVEZXRhaWxzIH0gZnJvbSBcIi4vdGFzay10b2dnbGUtZGV0YWlsc1wiO1xuaW1wb3J0IHsgdGFza1Nob3dFZGl0RGV0YWlscyB9IGZyb20gXCIuL3Rhc2stc2hvdy1lZGl0XCI7XG5pbXBvcnQgeyB0YXNrU2hvd0RlbGV0ZSB9IGZyb20gXCIuLi8uLi90YXNrLWRlbGV0ZS1jb250YWluZXItbW9kYWwvZXZlbnRzL3Rhc2stc2hvdy1kZWxldGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cygpIHtcbiAgICBjb25zdCB0YXNrc0dyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFza3MtZ3JvdXAtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgdGFza3NHcm91cENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0KSB7XG4gICAgICAgICAgICBjYXNlIFwidGFzay1zaG93LWRldGFpbHMtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1RvZ2dsZURldGFpbHMoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFzay1kZXRhaWxzLWVkaXQtYnRuXCI6XG4gICAgICAgICAgICAgICAgdGFza1Nob3dFZGl0RGV0YWlscyhlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrLWRldGFpbHMtZGVsZXRlLWJ0blwiOlxuICAgICAgICAgICAgICAgIHRhc2tTaG93RGVsZXRlKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRhc2tTaG93RWRpdERldGFpbHMoZSkge1xuICAgIGNvbnN0IHRhc2tBZGRNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcblxuICAgIHRhc2tBZGRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0YXNrVG9nZ2xlRGV0YWlscyhlKSB7XG4gICAgdG9nZ2xlRGV0YWlscyhlKTtcbiAgICB0b2dnbGVCdG5JY29uKGUpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzQ29udGFpbmVyID1cbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB0YXNrRGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1kZXRhaWxzLWNvbnRhaW5lci1hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQnRuSWNvbihlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tTaG93RGV0YWlsc0J0biA9IGUudGFyZ2V0LnBhcmVudE5vZGUubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGFza1Nob3dEZXRhaWxzQnRuLmlubmVyVGV4dCA9XG4gICAgICAgICAgICB0YXNrU2hvd0RldGFpbHNCdG4uaW5uZXJUZXh0ID09PSBcImV4cGFuZF9tb3JlXCJcbiAgICAgICAgICAgICAgICA/IFwiZXhwYW5kX2xlc3NcIlxuICAgICAgICAgICAgICAgIDogXCJleHBhbmRfbW9yZVwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGFkZFRvR3JvdXBDb250YWluZXIgfSBmcm9tIFwiLi9hZGQtdG8tZ3JvdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2VMaXN0IH0gZnJvbSBcIi4uLy4uL2RiL3JlYWQvZ2V0LWxvY2FsLXN0b3JhZ2UtbGlzdFwiO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzL2V2ZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBDb250YWluZXIoKSB7XG4gICAgY29uc3Qgc3RvcmVkTGlzdCA9IGdldExvY2FsU3RvcmFnZUxpc3QoKTtcblxuICAgIHN0b3JlZExpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBhZGRUb0dyb3VwQ29udGFpbmVyKHRhc2spO1xuICAgIH0pO1xuXG4gICAgZXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyB0b2dnbGVUYXNrQ2hlY2tlZCB9IGZyb20gXCIuL2V2ZW50cy90b2dnbGUtdGFzay1jaGVja2VkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveENvbnRhaW5lcih0YXNrKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3gtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlVGFza0NoZWNrZWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY2hlY2ttYXJrID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja21hcmtcIik7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKGB0YXNrLWNoZWNrbWFyay1wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgICAgIHJldHVybiBjaGVja21hcms7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hvd0RldGFpbHNCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzaG93RGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNob3dEZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgc2hvd0RldGFpbHNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stc2hvdy1kZXRhaWxzLWJ0blwiKTtcbiAgICAgICAgc2hvd0RldGFpbHNCdG4uZGF0YXNldC50YXJnZXQgPSBcInRhc2stc2hvdy1kZXRhaWxzLWJ0blwiO1xuICAgICAgICBzaG93RGV0YWlsc0J0bi5pbm5lclRleHQgPSBcImV4cGFuZF9tb3JlXCI7XG4gICAgICAgIHJldHVybiBzaG93RGV0YWlsc0J0bjtcbiAgICB9KSgpO1xuXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dEZXRhaWxzQnRuKTtcblxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IGxvY2FsU3RvcmFnZVVwZGF0ZVRhc2tDaGVja2VkIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RiL3VwZGF0ZS91cGRhdGUtdGFzay1jaGVja2VkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYXNrQ2hlY2tlZChlKSB7XG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgIGxvY2FsU3RvcmFnZVVwZGF0ZVRhc2tDaGVja2VkKHRhc2tJZCk7XG59XG4iLCJpbXBvcnQgeyBkZXRhaWxzQ29udHJvbGxlcnMgfSBmcm9tIFwiLi9kZXRhaWxzLWNvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBkZXRhaWxzRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9kZXRhaWxzLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBkZXRhaWxzRHVlIH0gZnJvbSBcIi4vZGV0YWlscy1kdWVcIjtcbmltcG9ydCB7IGRldGFpbHNMaXN0IH0gZnJvbSBcIi4vZGV0YWlscy1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRhaWxzQ29udGFpbmVyKHRhc2spIHtcbiAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtY29udGFpbmVyXCIpO1xuICAgIGRldGFpbHNDb250YWluZXIuZGF0YXNldC50YXJnZXQgPSBcInRhc2stZGV0YWlscy1jb250YWluZXJcIjtcblxuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRyb2xsZXJzKHRhc2spKTtcblxuICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rlc2NyaXB0aW9uKHRhc2spKTtcbiAgICB9XG4gICAgaWYgKHRhc2suc3VidGFza3MpIHtcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzTGlzdCh0YXNrKSk7XG4gICAgfVxuICAgIGlmICh0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzRHVlKHRhc2spKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGV0YWlsc0NvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRhaWxzQ29udHJvbGxlcnModGFzaykge1xuICAgIGNvbnN0IGRldGFpbHNDb250cm9sbGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0NvbnRyb2xsZXJzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtY29udHJvbGxlcnNcIik7XG5cbiAgICBjb25zdCBkZXRhaWxzRWRpdEJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGV0YWlsc0VkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1lZGl0LWJ0blwiKTtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNFZGl0QnRuO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkZXRhaWxzRWRpdEljb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGV0YWlsc0VkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgICAgZGV0YWlsc0VkaXRJY29uLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLWRldGFpbHMtZWRpdC1idG5cIjtcbiAgICAgICAgZGV0YWlsc0VkaXRJY29uLmlubmVyVGV4dCA9IFwiZWRpdFwiO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0VkaXRJY29uO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkZXRhaWxzRGVsZXRlQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRldGFpbHNEZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1kZWxldGUtYnRuXCIpO1xuICAgICAgICByZXR1cm4gZGV0YWlsc0RlbGV0ZUJ0bjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZGV0YWlsc0RlbGV0ZUljb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgICAgIGRldGFpbHNEZWxldGVJY29uLmRhdGFzZXQudGFyZ2V0ID0gXCJ0YXNrLWRldGFpbHMtZGVsZXRlLWJ0blwiO1xuICAgICAgICBkZXRhaWxzRGVsZXRlSWNvbi5kYXRhc2V0LmRlbGV0ZSA9IGAke3Rhc2suaWR9YDtcbiAgICAgICAgZGV0YWlsc0RlbGV0ZUljb24uaW5uZXJUZXh0ID0gXCJkZWxldGVcIjtcbiAgICAgICAgcmV0dXJuIGRldGFpbHNEZWxldGVJY29uO1xuICAgIH0pKCk7XG5cbiAgICBkZXRhaWxzRWRpdEJ0bi5hcHBlbmRDaGlsZChkZXRhaWxzRWRpdEljb24pO1xuICAgIGRldGFpbHNDb250cm9sbGVycy5hcHBlbmRDaGlsZChkZXRhaWxzRWRpdEJ0bik7XG4gICAgZGV0YWlsc0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZXRhaWxzRGVsZXRlSWNvbik7XG4gICAgZGV0YWlsc0NvbnRyb2xsZXJzLmFwcGVuZENoaWxkKGRldGFpbHNEZWxldGVCdG4pO1xuXG4gICAgcmV0dXJuIGRldGFpbHNDb250cm9sbGVycztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRhaWxzRGVzY3JpcHRpb24odGFzaykge1xuICAgIGNvbnN0IGRldGFpbHNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRldGFpbHNEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRldGFpbHNEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIGRldGFpbHNEZXNjcmlwdGlvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRhaWxzRHVlKHRhc2spIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWR1ZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWR1ZS1pY29uXCIpO1xuICAgIGljb24uaW5uZXJUZXh0ID0gXCJ0b2RheVwiO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWR1ZS1kYXRlXCIpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0YWlsc0xpc3QodGFzaykge1xuICAgIGNvbnN0IGRldGFpbHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWxpc3RcIik7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ29udGFpbmVyKHN1YnRhc2tUaXRsZSwgc3VidGFza0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdWJ0YXNrQ2hlY2tlZDtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjaGVja21hcmsgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFya1wiKTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja21hcms7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHMtaXRlbS10ZXh0XCIpO1xuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSBzdWJ0YXNrVGl0bGU7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xuICAgIH1cblxuICAgIChmdW5jdGlvbiBwcmludFN1YnRhc2tFbGVtZW50cygpIHtcbiAgICAgICAgdGFzay5zdWJ0YXNrcy5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gY3JlYXRlSXRlbUNvbnRhaW5lcihcbiAgICAgICAgICAgICAgICBzdWJ0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgIHN1YnRhc2suY2hlY2tlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRldGFpbHNMaXN0LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIGRldGFpbHNMaXN0O1xufVxuIiwiaW1wb3J0IHsgY2hlY2tib3hDb250YWluZXIgfSBmcm9tIFwiLi9jaGVja2JveC1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBkZXRhaWxzQ29udGFpbmVyIH0gZnJvbSBcIi4vZGV0YWlscy1jb250YWluZXIvZGV0YWlscy1jb250YWluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tDb250YWluZXIodGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgIHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQgPSBgdGFzay0ke3Rhc2suaWR9YDtcbiAgICB0YXNrQ29udGFpbmVyLmlkID0gYHRhc2stJHt0YXNrLmlkfWA7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKHRhc2spKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcih0YXNrKSk7XG5cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBzaWRlTmF2IH0gZnJvbSBcIi4vdmlldy9zaWRlLW5hdi9zaWRlLW5hdlwiO1xuaW1wb3J0IHsgcG9wdWxhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9kYi9jcmVhdGUvcG9wdWxhdGUtbG9jYWwtc3RvcmFnZVwiO1xuXG5pbXBvcnQgeyBncm91cENvbnRhaW5lciB9IGZyb20gXCIuL3ZpZXcvdGFzay1ncm91cC1jb250YWluZXIvZ3JvdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBhZGRDb250YWluZXIgfSBmcm9tIFwiLi92aWV3L3Rhc2stYWRkLWNvbnRhaW5lci1tb2RhbC9hZGQtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBkZWxldGVDb250YWluZXIgfSBmcm9tIFwiLi92aWV3L3Rhc2stZGVsZXRlLWNvbnRhaW5lci1tb2RhbC9kZWxldGUtY29udGFpbmVyXCI7XG5cbnNpZGVOYXYoKTtcbnBvcHVsYXRlTG9jYWxTdG9yYWdlKCk7XG5cbmdyb3VwQ29udGFpbmVyKCk7XG5hZGRDb250YWluZXIoKTtcbmRlbGV0ZUNvbnRhaW5lcigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==