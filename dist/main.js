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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-primary: #2876be;\n    --color-priority-one: #ca2c2c;\n    --color-priority-two: #ca802c;\n    --color-priority-three: #3f6dc2;\n    --color-priority-four: #702cca;\n    --color-grey: #7a7a7a;\n    --color-shadow: #a5a5a5;\n    --color-element-primary: #e1e1e1;\n    --color-element-secondary: #e6e6e6;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\ninput {\n    border: none;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: var(--color-primary);\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: var(--color-primary);\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 4;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: var(--color-element-secondary);\n    color: #252525;\n    box-shadow: none;\n}\n\n.side-nav-active {\n    width: 10rem;\n    box-shadow: 0px 0px 17px 3px #2525258a;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item.active {\n    background-color: #e2e2e2;\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-one {\n    border: 0.13rem solid var(--color-priority-one);\n}\n\n.task-checkmark.task-checkmark-priority-two {\n    border: 0.13rem solid var(--color-priority-two);\n}\n\n.task-checkmark.task-checkmark-priority-three {\n    border: 0.13rem solid var(--color-priority-three);\n}\n\n.task-checkmark.task-checkmark-priority-four {\n    border: 0.13rem solid var(--color-priority-four);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n    width: 100%;\n    max-height: 0;\n    padding: 0 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-secondary);\n    box-shadow: 0.2rem 0.2rem 0.5rem var(--color-shadow);\n    transition: 0.5s ease-out;\n}\n\n.task-details-container-active {\n    max-height: fit-content;\n    padding: 1.5rem 1rem;\n}\n\n.task-details-description {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-controllers {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 1rem;\n}\n\n.task-details-edit-btn,\n.task-details-delete-btn {\n    margin-left: 0.5rem;\n}\n\n.task-details-edit-btn span,\n.task-add-close-btn span,\n.task-details-delete-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-details-due-container {\n    display: flex;\n}\n\n.task-details-due-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.task-add-modal-container {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 5rem;\n    /* justify-content: center;\n    align-items: center; */\n    background-color: #0000005b;\n}\n\n.task-add-modal-container-active {\n    /* display: flex; */\n    display: block;\n}\n\n.task-add-modal {\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    height: fit-content;\n    margin: auto;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n    box-shadow: 0 0 1rem #5c5c5c;\n    animation-name: animatetop;\n    animation-duration: 0.6s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n.task-add-title {\n    font-size: 1rem;\n    margin: 0 0 1.5rem;\n}\n\n.task-add-description,\n.task-add-name,\n.task-add-subtask-item-input,\n.task-add-due-date {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-subtasks-container {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.task-add-subtask-item-container {\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-add-subtask-item-input {\n    margin-bottom: 0.1rem;\n}\n\n.task-add-subtask-add-another {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    padding: 0.1rem;\n    border-radius: 2rem;\n    color: #fff;\n    background-color: #6e94b8;\n    box-shadow: 0.1rem 0.1rem 0.5rem #000;\n    font-size: 0.5rem;\n}\n\n.task-add-subtask-add-another span {\n    font-size: 1rem;\n}\n\n.task-add-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-add-due-date {\n    margin-bottom: 0.3rem;\n}\n\n/* \n.task-add-due-text {\n    margin: 0.5rem 0;\n} */\n\n.task-add-priority-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1rem 0;\n}\n\n.task-add-priority-item-container {\n    position: relative;\n    width: 20%;\n}\n\n.task-add-priority-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.priority-selector {\n    height: 1rem;\n    border-radius: 0.3rem;\n    display: block;\n}\n\n.priority-one {\n    border: 0.15rem solid var(--color-priority-one);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-one {\n    background-color: var(--color-priority-one);\n}\n\n.priority-two {\n    border: 0.15rem solid var(--color-priority-two);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-two {\n    background-color: var(--color-priority-two);\n}\n\n.priority-three {\n    border: 0.15rem solid var(--color-priority-three);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-three {\n    background-color: var(--color-priority-three);\n}\n\n.priority-four {\n    border: 0.15rem solid var(--color-priority-four);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-four {\n    background-color: var(--color-priority-four);\n}\n.task-add-priority-item-checkbox:checked ~ .priority-selector {\n    box-shadow: 0 0 0.4rem #000;\n}\n\n.task-add-submit-btn {\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: var(--color-primary);\n    color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-primary: #2876be;\n    --color-priority-one: #ca2c2c;\n    --color-priority-two: #ca802c;\n    --color-priority-three: #3f6dc2;\n    --color-priority-four: #702cca;\n    --color-grey: #7a7a7a;\n    --color-shadow: #a5a5a5;\n    --color-element-primary: #e1e1e1;\n    --color-element-secondary: #e6e6e6;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\ninput {\n    border: none;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: var(--color-primary);\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: var(--color-primary);\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 4;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: var(--color-element-secondary);\n    color: #252525;\n    box-shadow: none;\n}\n\n.side-nav-active {\n    width: 10rem;\n    box-shadow: 0px 0px 17px 3px #2525258a;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item.active {\n    background-color: #e2e2e2;\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-one {\n    border: 0.13rem solid var(--color-priority-one);\n}\n\n.task-checkmark.task-checkmark-priority-two {\n    border: 0.13rem solid var(--color-priority-two);\n}\n\n.task-checkmark.task-checkmark-priority-three {\n    border: 0.13rem solid var(--color-priority-three);\n}\n\n.task-checkmark.task-checkmark-priority-four {\n    border: 0.13rem solid var(--color-priority-four);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n    width: 100%;\n    max-height: 0;\n    padding: 0 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-secondary);\n    box-shadow: 0.2rem 0.2rem 0.5rem var(--color-shadow);\n    transition: 0.5s ease-out;\n}\n\n.task-details-container-active {\n    max-height: fit-content;\n    padding: 1.5rem 1rem;\n}\n\n.task-details-description {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-close-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-controllers {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 1rem;\n}\n\n.task-details-edit-btn,\n.task-details-delete-btn {\n    margin-left: 0.5rem;\n}\n\n.task-details-edit-btn span,\n.task-add-close-btn span,\n.task-details-delete-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: var(--color-grey);\n    border-color: var(--color-grey);\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: var(--color-grey);\n    text-decoration: line-through;\n}\n\n.task-details-due-container {\n    display: flex;\n}\n\n.task-details-due-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.task-add-modal-container {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 5rem;\n    /* justify-content: center;\n    align-items: center; */\n    background-color: #0000005b;\n}\n\n.task-add-modal-container-active {\n    /* display: flex; */\n    display: block;\n}\n\n.task-add-modal {\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    height: fit-content;\n    margin: auto;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--color-element-primary);\n    box-shadow: 0 0 1rem #5c5c5c;\n    animation-name: animatetop;\n    animation-duration: 0.6s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n.task-add-title {\n    font-size: 1rem;\n    margin: 0 0 1.5rem;\n}\n\n.task-add-description,\n.task-add-name,\n.task-add-subtask-item-input,\n.task-add-due-date {\n    width: 100%;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-add-subtasks-container {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.task-add-subtask-item-container {\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-add-subtask-item-input {\n    margin-bottom: 0.1rem;\n}\n\n.task-add-subtask-add-another {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    padding: 0.1rem;\n    border-radius: 2rem;\n    color: #fff;\n    background-color: #6e94b8;\n    box-shadow: 0.1rem 0.1rem 0.5rem #000;\n    font-size: 0.5rem;\n}\n\n.task-add-subtask-add-another span {\n    font-size: 1rem;\n}\n\n.task-add-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-add-due-date {\n    margin-bottom: 0.3rem;\n}\n\n/* \n.task-add-due-text {\n    margin: 0.5rem 0;\n} */\n\n.task-add-priority-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1rem 0;\n}\n\n.task-add-priority-item-container {\n    position: relative;\n    width: 20%;\n}\n\n.task-add-priority-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.priority-selector {\n    height: 1rem;\n    border-radius: 0.3rem;\n    display: block;\n}\n\n.priority-one {\n    border: 0.15rem solid var(--color-priority-one);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-one {\n    background-color: var(--color-priority-one);\n}\n\n.priority-two {\n    border: 0.15rem solid var(--color-priority-two);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-two {\n    background-color: var(--color-priority-two);\n}\n\n.priority-three {\n    border: 0.15rem solid var(--color-priority-three);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-three {\n    background-color: var(--color-priority-three);\n}\n\n.priority-four {\n    border: 0.15rem solid var(--color-priority-four);\n}\n\n.task-add-priority-item-checkbox:checked ~ .priority-four {\n    background-color: var(--color-priority-four);\n}\n.task-add-priority-item-checkbox:checked ~ .priority-selector {\n    box-shadow: 0 0 0.4rem #000;\n}\n\n.task-add-submit-btn {\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: var(--color-primary);\n    color: #fff;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/UI/event-handlers/event-handlers.js":
/*!*************************************************!*\
  !*** ./src/UI/event-handlers/event-handlers.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventHandlers": () => (/* binding */ eventHandlers)
/* harmony export */ });
/* harmony import */ var _events_task_task_toggle_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/task/task-toggle-details */ "./src/UI/event-handlers/events/task/task-toggle-details.js");
/* harmony import */ var _events_task_task_show_edit_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/task/task-show-edit-details */ "./src/UI/event-handlers/events/task/task-show-edit-details.js");
/* harmony import */ var _events_task_new_close_create_new_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/task-new/close-create-new-task */ "./src/UI/event-handlers/events/task-new/close-create-new-task.js");
/* harmony import */ var _events_task_new_show_create_new_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/task-new/show-create-new-task */ "./src/UI/event-handlers/events/task-new/show-create-new-task.js");
/* harmony import */ var _events_side_nav_show_side_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/side-nav/show-side-nav */ "./src/UI/event-handlers/events/side-nav/show-side-nav.js");
/* harmony import */ var _events_side_nav_close_side_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/side-nav/close-side-nav */ "./src/UI/event-handlers/events/side-nav/close-side-nav.js");
/* harmony import */ var _events_task_new_task_add_subtask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/task-new/task-add-subtask */ "./src/UI/event-handlers/events/task-new/task-add-subtask.js");








function eventHandlers() {
    (0,_events_task_task_toggle_details__WEBPACK_IMPORTED_MODULE_0__.taskToggleDetails)();
    (0,_events_task_task_show_edit_details__WEBPACK_IMPORTED_MODULE_1__.showEditDetails)();
    (0,_events_task_new_close_create_new_task__WEBPACK_IMPORTED_MODULE_2__.closeCreateNewTask)();
    (0,_events_task_new_show_create_new_task__WEBPACK_IMPORTED_MODULE_3__.showCreateNewTask)();
    (0,_events_side_nav_show_side_nav__WEBPACK_IMPORTED_MODULE_4__.showSideNav)();
    (0,_events_side_nav_close_side_nav__WEBPACK_IMPORTED_MODULE_5__.closeSideNav)();
    (0,_events_task_new_task_add_subtask__WEBPACK_IMPORTED_MODULE_6__.addSubtask)();
}


/***/ }),

/***/ "./src/UI/event-handlers/events/side-nav/close-side-nav.js":
/*!*****************************************************************!*\
  !*** ./src/UI/event-handlers/events/side-nav/close-side-nav.js ***!
  \*****************************************************************/
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

/***/ "./src/UI/event-handlers/events/side-nav/show-side-nav.js":
/*!****************************************************************!*\
  !*** ./src/UI/event-handlers/events/side-nav/show-side-nav.js ***!
  \****************************************************************/
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

/***/ "./src/UI/event-handlers/events/task-new/close-create-new-task.js":
/*!************************************************************************!*\
  !*** ./src/UI/event-handlers/events/task-new/close-create-new-task.js ***!
  \************************************************************************/
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

/***/ "./src/UI/event-handlers/events/task-new/show-create-new-task.js":
/*!***********************************************************************!*\
  !*** ./src/UI/event-handlers/events/task-new/show-create-new-task.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCreateNewTask": () => (/* binding */ showCreateNewTask)
/* harmony export */ });
function showCreateNewTask() {
    const addTaskForm = document.querySelector(".task-add-form");
    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    const addTaskBtn = document.querySelector(".add-task-floating-btn");

    addTaskBtn.addEventListener("click", show);

    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    function show() {
        taskAddModalContainer.classList.add("task-add-modal-container-active");
    }
}


/***/ }),

/***/ "./src/UI/event-handlers/events/task-new/task-add-subtask.js":
/*!*******************************************************************!*\
  !*** ./src/UI/event-handlers/events/task-new/task-add-subtask.js ***!
  \*******************************************************************/
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
            // newSubtask.name = `new-subtask-name-${subtaskCounter}`;
            subtaskCounter++;
            newSubtask.name = "subtask";
            subtasksContainer.appendChild(newSubtask);
        }
    }
}


/***/ }),

/***/ "./src/UI/event-handlers/events/task/task-show-edit-details.js":
/*!*********************************************************************!*\
  !*** ./src/UI/event-handlers/events/task/task-show-edit-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showEditDetails": () => (/* binding */ showEditDetails)
/* harmony export */ });
function showEditDetails() {
    const taskEditDetailsBtn = document.querySelector(".task-details-edit-btn");
    taskEditDetailsBtn.addEventListener("click", show);

    const taskAddModalContainer = document.querySelector(
        ".task-add-modal-container"
    );

    function show() {
        taskAddModalContainer.classList.add("task-add-modal-container-active");
    }
}


/***/ }),

/***/ "./src/UI/event-handlers/events/task/task-toggle-details.js":
/*!******************************************************************!*\
  !*** ./src/UI/event-handlers/events/task/task-toggle-details.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskToggleDetails": () => (/* binding */ taskToggleDetails)
/* harmony export */ });
function taskToggleDetails() {
    const taskContainer = document.querySelector(".task-container");
    const taskShowDetailsBtn = document.querySelector(".task-show-details-btn");
    const taskDetailsContainer = document.querySelector(
        ".task-details-container"
    );

    // taskShowDetailsBtn.addEventListener("click", toggleDetails);
    taskContainer.addEventListener("click", toggle);

    function toggle(e) {
        if (e.target === taskShowDetailsBtn) {
            toggleDetails();
            toggleBtnIcon();
        }
    }

    function toggleDetails() {
        taskDetailsContainer.classList.toggle("task-details-container-active");
    }

    function toggleBtnIcon() {
        taskShowDetailsBtn.innerText =
            taskShowDetailsBtn.innerText === "expand_more"
                ? "expand_less"
                : "expand_more";
    }
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
/* harmony import */ var _UI_event_handlers_event_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/event-handlers/event-handlers */ "./src/UI/event-handlers/event-handlers.js");



(0,_UI_event_handlers_event_handlers__WEBPACK_IMPORTED_MODULE_1__.eventHandlers)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJL2V2ZW50LWhhbmRsZXJzL2V2ZW50LWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS9ldmVudC1oYW5kbGVycy9ldmVudHMvc2lkZS1uYXYvY2xvc2Utc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJL2V2ZW50LWhhbmRsZXJzL2V2ZW50cy9zaWRlLW5hdi9zaG93LXNpZGUtbmF2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS9ldmVudC1oYW5kbGVycy9ldmVudHMvdGFzay1uZXcvY2xvc2UtY3JlYXRlLW5ldy10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS9ldmVudC1oYW5kbGVycy9ldmVudHMvdGFzay1uZXcvc2hvdy1jcmVhdGUtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJL2V2ZW50LWhhbmRsZXJzL2V2ZW50cy90YXNrLW5ldy90YXNrLWFkZC1zdWJ0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS9ldmVudC1oYW5kbGVycy9ldmVudHMvdGFzay90YXNrLXNob3ctZWRpdC1kZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS9ldmVudC1oYW5kbGVycy9ldmVudHMvdGFzay90YXNrLXRvZ2dsZS1kZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7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TyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsZ0NBQWdDLCtCQUErQixvQ0FBb0Msb0NBQW9DLHNDQUFzQyxxQ0FBcUMsNEJBQTRCLDhCQUE4Qix1Q0FBdUMseUNBQXlDLEdBQUcsNEJBQTRCLDZCQUE2QixHQUFHLFVBQVUsd0JBQXdCLDZDQUE2QywrQkFBK0IsMEJBQTBCLFdBQVcsVUFBVSxnQkFBZ0IsbURBQW1ELHdCQUF3QixHQUFHLG1EQUFtRCx3QkFBd0Isd0JBQXdCLG1DQUFtQyw4QkFBOEIsV0FBVyxxQkFBcUIsMkJBQTJCLEdBQUcsWUFBWSxtQkFBbUIsaUJBQWlCLHNCQUFzQixvQ0FBb0MsR0FBRyxXQUFXLG1CQUFtQixHQUFHLHFCQUFxQixzQ0FBc0MseUJBQXlCLEdBQUcsY0FBYyw2Q0FBNkMsR0FBRyxtQkFBbUIsb0JBQW9CLHNCQUFzQixxQ0FBcUMsZ0JBQWdCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IsR0FBRyxtQkFBbUIsdUJBQXVCLHVCQUF1QixHQUFHLGlDQUFpQyx3QkFBd0IsTUFBTSx1QkFBdUIsa0JBQWtCLEdBQUcsNEJBQTRCLHlCQUF5QixxQkFBcUIsb0JBQW9CLGlCQUFpQixvQkFBb0IsMEJBQTBCLHNCQUFzQiw2Q0FBNkMsK0NBQStDLEdBQUcsZUFBZSxzQkFBc0IsaUJBQWlCLGFBQWEsY0FBYyxvQkFBb0IsOEJBQThCLG1CQUFtQixlQUFlLHlCQUF5Qix1QkFBdUIsdURBQXVELHFCQUFxQix1QkFBdUIsR0FBRyxzQkFBc0IsbUJBQW1CLDZDQUE2QyxHQUFHLG9CQUFvQixvQkFBb0Isc0JBQXNCLDZCQUE2Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQixHQUFHLG9CQUFvQixpQkFBaUIsc0JBQXNCLDRCQUE0QixzQkFBc0IsdUJBQXVCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIscUJBQXFCLDRCQUE0QixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxrREFBa0QsZ0NBQWdDLEdBQUcsMkJBQTJCLHVCQUF1QixpQkFBaUIsR0FBRywrQkFBK0Isc0JBQXNCLEdBQUcsb0NBQW9DLDJCQUEyQixHQUFHLDJCQUEyQix5QkFBeUIsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxRQUFRLHlCQUF5QixHQUFHLDRCQUE0QixrQkFBa0IsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIseUJBQXlCLGtCQUFrQixvQkFBb0IsNEJBQTRCLHFEQUFxRCxHQUFHLG9CQUFvQix5QkFBeUIsZUFBZSxvQkFBb0IsR0FBRyxxQkFBcUIscUJBQXFCLGtCQUFrQixtQkFBbUIsMkJBQTJCLDBCQUEwQixvQ0FBb0MsR0FBRyxpREFBaUQsc0RBQXNELEdBQUcsaURBQWlELHNEQUFzRCxHQUFHLG1EQUFtRCx3REFBd0QsR0FBRyxrREFBa0QsdURBQXVELEdBQUcsOENBQThDLDBDQUEwQyxzQ0FBc0MsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsMENBQTBDLCtCQUErQixvQ0FBb0MsR0FBRyw0QkFBNEIseUJBQXlCLGtCQUFrQixHQUFHLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixrQkFBa0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsdURBQXVELDJEQUEyRCxnQ0FBZ0MsR0FBRyxvQ0FBb0MsOEJBQThCLDJCQUEyQixHQUFHLCtCQUErQixrQkFBa0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixHQUFHLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLCtCQUErQixvQkFBb0IsZ0NBQWdDLDBCQUEwQixHQUFHLHVEQUF1RCwwQkFBMEIsR0FBRyw0RkFBNEYsc0JBQXNCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGtDQUFrQyxvQkFBb0IseUJBQXlCLDRCQUE0QixHQUFHLGtDQUFrQyxxQkFBcUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsMEJBQTBCLG1DQUFtQyxHQUFHLGlDQUFpQyx5QkFBeUIsb0JBQW9CLEdBQUcsd0VBQXdFLDBDQUEwQyxzQ0FBc0MsR0FBRyxtRUFBbUUsK0JBQStCLG9DQUFvQyxHQUFHLGlDQUFpQyxvQkFBb0IsR0FBRyw0QkFBNEIsc0JBQXNCLDJCQUEyQixHQUFHLCtCQUErQixzQkFBc0IsaUJBQWlCLGFBQWEsY0FBYyxvQkFBb0IsbUJBQW1CLG9CQUFvQix3QkFBd0IsaUNBQWlDLDBCQUEwQixxQ0FBcUMsR0FBRyxzQ0FBc0MsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsaUJBQWlCLGlCQUFpQiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw0QkFBNEIscURBQXFELG1DQUFtQyxpQ0FBaUMsK0JBQStCLEdBQUcsMkJBQTJCLFlBQVksc0JBQXNCLHFCQUFxQixPQUFPLFVBQVUsaUJBQWlCLHFCQUFxQixPQUFPLEdBQUcscUJBQXFCLHNCQUFzQix5QkFBeUIsR0FBRyxnR0FBZ0csa0JBQWtCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDZCQUE2QiwwQkFBMEIsR0FBRyxrQ0FBa0MseUJBQXlCLDBCQUEwQixHQUFHLHNDQUFzQyx5QkFBeUIsNEJBQTRCLEdBQUcsa0NBQWtDLDRCQUE0QixHQUFHLG1DQUFtQyx5QkFBeUIsZUFBZSxnQkFBZ0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsa0JBQWtCLGdDQUFnQyw0Q0FBNEMsd0JBQXdCLEdBQUcsd0NBQXdDLHNCQUFzQixHQUFHLGtDQUFrQyxvQkFBb0IsNkJBQTZCLHFCQUFxQixHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcscUNBQXFDLG9CQUFvQixvQ0FBb0MscUJBQXFCLEdBQUcsdUNBQXVDLHlCQUF5QixpQkFBaUIsR0FBRyxzQ0FBc0MseUJBQXlCLG9CQUFvQixHQUFHLHdCQUF3QixtQkFBbUIsNEJBQTRCLHFCQUFxQixHQUFHLG1CQUFtQixzREFBc0QsR0FBRyw4REFBOEQsa0RBQWtELEdBQUcsbUJBQW1CLHNEQUFzRCxHQUFHLDhEQUE4RCxrREFBa0QsR0FBRyxxQkFBcUIsd0RBQXdELEdBQUcsZ0VBQWdFLG9EQUFvRCxHQUFHLG9CQUFvQix1REFBdUQsR0FBRywrREFBK0QsbURBQW1ELEdBQUcsaUVBQWlFLGtDQUFrQyxHQUFHLDBCQUEwQixrQkFBa0Isc0JBQXNCLDBCQUEwQiw2Q0FBNkMsa0JBQWtCLEdBQUcscUJBQXFCO0FBQ2o1dEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDhGQUE4Rix3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUVuZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7Ozs7QUFJbkc7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTs7QUFFcEMsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRDs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0U7QUFDQztBQUNNO0FBQ0Y7QUFDYjtBQUNFO0FBQ0E7O0FBRXpEO0FBQ1AsSUFBSSxtRkFBaUI7QUFDckIsSUFBSSxvRkFBZTtBQUNuQixJQUFJLDBGQUFrQjtBQUN0QixJQUFJLHdGQUFpQjtBQUNyQixJQUFJLDJFQUFXO0FBQ2YsSUFBSSw2RUFBWTtBQUNoQixJQUFJLDZFQUFVO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUNyQk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZUFBZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzhDOztBQUVuRSxnRkFBYSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI4NzZiZTtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1vbmU6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktdHdvOiAjY2E4MDJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LXRocmVlOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LWZvdXI6ICM3MDJjY2E7XFxuICAgIC0tY29sb3ItZ3JleTogIzdhN2E3YTtcXG4gICAgLS1jb2xvci1zaGFkb3c6ICNhNWE1YTU7XFxuICAgIC0tY29sb3ItZWxlbWVudC1wcmltYXJ5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IDNweCAjMjUyNTI1OGE7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS1vbmUge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktb25lKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LXR3byB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10d28pO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktdGhyZWUge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktdGhyZWUpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktZm91ciB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1zaG93LWRldGFpbHMtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuNXJlbSB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0bixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4sXFxuLnRhc2stYWRkLWNsb3NlLWJ0biBzcGFuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1YjtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzVjNWM1YztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0zMDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udGFzay1hZGQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWRlc2NyaXB0aW9uLFxcbi50YXNrLWFkZC1uYW1lLFxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQsXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTk0Yjg7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLyogXFxuLnRhc2stYWRkLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59ICovXFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJpb3JpdHktb25lIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LW9uZSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktb25lKTtcXG59XFxuXFxuLnByaW9yaXR5LXR3byB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10d28pO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LXR3byk7XFxufVxcblxcbi5wcmlvcml0eS10aHJlZSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10aHJlZSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktdGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS10aHJlZSk7XFxufVxcblxcbi5wcmlvcml0eS1mb3VyIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LWZvdXIpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LWZvdXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG59XFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gIzAwMDtcXG59XFxuXFxuLnRhc2stYWRkLXN1Ym1pdC1idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCLEVBQUUsTUFBTTtJQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0lBQ3RDLGdCQUFnQixFQUFFLE1BQU07SUFDeEIsV0FBVyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7SUFDSSxTQUFTLEVBQUUsTUFBTTtJQUNqQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0FBQ3JCOztBQUVBOzs7OztJQUtJLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE1BQU07SUFDakIsb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVB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SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI4NzZiZTtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1vbmU6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktdHdvOiAjY2E4MDJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LXRocmVlOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LWZvdXI6ICM3MDJjY2E7XFxuICAgIC0tY29sb3ItZ3JleTogIzdhN2E3YTtcXG4gICAgLS1jb2xvci1zaGFkb3c6ICNhNWE1YTU7XFxuICAgIC0tY29sb3ItZWxlbWVudC1wcmltYXJ5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWVsZW1lbnQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuNXJlbSAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IDNweCAjMjUyNTI1OGE7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbGVtZW50LXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS1vbmUge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktb25lKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LXR3byB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10d28pO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktdGhyZWUge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktdGhyZWUpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktZm91ciB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1zaG93LWRldGFpbHMtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuNXJlbSB2YXIoLS1jb2xvci1zaGFkb3cpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1hZGQtY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWNvbnRyb2xsZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0bixcXG4udGFzay1kZXRhaWxzLWRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4sXFxuLnRhc2stYWRkLWNsb3NlLWJ0biBzcGFuLFxcbi50YXNrLWRldGFpbHMtZGVsZXRlLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrLWFkZC1tb2RhbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1YjtcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lci1hY3RpdmUge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stYWRkLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWxlbWVudC1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzVjNWM1YztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0zMDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udGFzay1hZGQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWRlc2NyaXB0aW9uLFxcbi50YXNrLWFkZC1uYW1lLFxcbi50YXNrLWFkZC1zdWJ0YXNrLWl0ZW0taW5wdXQsXFxuLnRhc2stYWRkLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2staXRlbS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLXN1YnRhc2stYWRkLWFub3RoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTk0Yjg7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1hZGQtc3VidGFzay1hZGQtYW5vdGhlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWFkZC1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLyogXFxuLnRhc2stYWRkLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59ICovXFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJpb3JpdHktb25lIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LW9uZSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktb25lKTtcXG59XFxuXFxuLnByaW9yaXR5LXR3byB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10d28pO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LXR3byk7XFxufVxcblxcbi5wcmlvcml0eS10aHJlZSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10aHJlZSk7XFxufVxcblxcbi50YXNrLWFkZC1wcmlvcml0eS1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAucHJpb3JpdHktdGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS10aHJlZSk7XFxufVxcblxcbi5wcmlvcml0eS1mb3VyIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LWZvdXIpO1xcbn1cXG5cXG4udGFzay1hZGQtcHJpb3JpdHktaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnByaW9yaXR5LWZvdXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG59XFxuLnRhc2stYWRkLXByaW9yaXR5LWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gIzAwMDtcXG59XFxuXFxuLnRhc2stYWRkLXN1Ym1pdC1idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza1RvZ2dsZURldGFpbHMgfSBmcm9tIFwiLi9ldmVudHMvdGFzay90YXNrLXRvZ2dsZS1kZXRhaWxzXCI7XG5pbXBvcnQgeyBzaG93RWRpdERldGFpbHMgfSBmcm9tIFwiLi9ldmVudHMvdGFzay90YXNrLXNob3ctZWRpdC1kZXRhaWxzXCI7XG5pbXBvcnQgeyBjbG9zZUNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9ldmVudHMvdGFzay1uZXcvY2xvc2UtY3JlYXRlLW5ldy10YXNrXCI7XG5pbXBvcnQgeyBzaG93Q3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL2V2ZW50cy90YXNrLW5ldy9zaG93LWNyZWF0ZS1uZXctdGFza1wiO1xuaW1wb3J0IHsgc2hvd1NpZGVOYXYgfSBmcm9tIFwiLi9ldmVudHMvc2lkZS1uYXYvc2hvdy1zaWRlLW5hdlwiO1xuaW1wb3J0IHsgY2xvc2VTaWRlTmF2IH0gZnJvbSBcIi4vZXZlbnRzL3NpZGUtbmF2L2Nsb3NlLXNpZGUtbmF2XCI7XG5pbXBvcnQgeyBhZGRTdWJ0YXNrIH0gZnJvbSBcIi4vZXZlbnRzL3Rhc2stbmV3L3Rhc2stYWRkLXN1YnRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50SGFuZGxlcnMoKSB7XG4gICAgdGFza1RvZ2dsZURldGFpbHMoKTtcbiAgICBzaG93RWRpdERldGFpbHMoKTtcbiAgICBjbG9zZUNyZWF0ZU5ld1Rhc2soKTtcbiAgICBzaG93Q3JlYXRlTmV3VGFzaygpO1xuICAgIHNob3dTaWRlTmF2KCk7XG4gICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgYWRkU3VidGFzaygpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU2lkZU5hdigpIHtcbiAgICBjb25zdCBzaWRlTmF2Q2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2LWNsb3NlLWJ0blwiKTtcblxuICAgIHNpZGVOYXZDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VTaWRlTmF2KTtcblxuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xuICAgICAgICBzaWRlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlLW5hdi1hY3RpdmVcIik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNpZGVOYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2LWJ0blwiKTtcblxuICAgIHNpZGVOYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3cpO1xuXG4gICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1uYXZcIik7XG5cbiAgICBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoXCJzaWRlLW5hdi1hY3RpdmVcIik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ3JlYXRlTmV3VGFzaygpIHtcbiAgICBjb25zdCBhZGRUYXNrQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWNsb3NlLWJ0blwiKTtcbiAgICBhZGRUYXNrQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGNvbnN0IHRhc2tBZGRNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICB0YXNrQWRkTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgIFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRhc2tBZGRNb2RhbENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGFza0FkZE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICAgICAgXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlTmV3VGFzaygpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtZm9ybVwiKTtcbiAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZsb2F0aW5nLWJ0blwiKTtcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3cpO1xuXG4gICAgY29uc3QgdGFza0FkZE1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFzay1hZGQtbW9kYWwtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgdGFza0FkZE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZC1tb2RhbC1jb250YWluZXItYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0YXNrKCkge1xuICAgIGNvbnN0IGFkZFN1YnRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWFkZC1zdWJ0YXNrLWFkZC1hbm90aGVyXCJcbiAgICApO1xuICAgIGFkZFN1YnRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZCk7XG5cbiAgICBjb25zdCBzdWJ0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLXN1YnRhc2staXRlbS1jb250YWluZXJcIlxuICAgICk7XG5cbiAgICBsZXQgc3VidGFza0NvdW50ZXIgPSAyO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICBpZiAoc3VidGFza0NvdW50ZXIgPCA1KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdWJ0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtc3VidGFzay1pdGVtLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3U3VidGFzay5wbGFjZWhvbGRlciA9IFwiU3VidGFzayAob3B0aW9uYWwpXCI7XG4gICAgICAgICAgICAvLyBuZXdTdWJ0YXNrLm5hbWUgPSBgbmV3LXN1YnRhc2stbmFtZS0ke3N1YnRhc2tDb3VudGVyfWA7XG4gICAgICAgICAgICBzdWJ0YXNrQ291bnRlcisrO1xuICAgICAgICAgICAgbmV3U3VidGFzay5uYW1lID0gXCJzdWJ0YXNrXCI7XG4gICAgICAgICAgICBzdWJ0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdTdWJ0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93RWRpdERldGFpbHMoKSB7XG4gICAgY29uc3QgdGFza0VkaXREZXRhaWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHMtZWRpdC1idG5cIik7XG4gICAgdGFza0VkaXREZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93KTtcblxuICAgIGNvbnN0IHRhc2tBZGRNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnRhc2stYWRkLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHRhc2tBZGRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGQtbW9kYWwtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGFza1RvZ2dsZURldGFpbHMoKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza1Nob3dEZXRhaWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXNob3ctZGV0YWlscy1idG5cIik7XG4gICAgY29uc3QgdGFza0RldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi50YXNrLWRldGFpbHMtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgLy8gdGFza1Nob3dEZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEZXRhaWxzKTtcbiAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGUpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0YXNrU2hvd0RldGFpbHNCdG4pIHtcbiAgICAgICAgICAgIHRvZ2dsZURldGFpbHMoKTtcbiAgICAgICAgICAgIHRvZ2dsZUJ0bkljb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgICAgIHRhc2tEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWRldGFpbHMtY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCdG5JY29uKCkge1xuICAgICAgICB0YXNrU2hvd0RldGFpbHNCdG4uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIHRhc2tTaG93RGV0YWlsc0J0bi5pbm5lclRleHQgPT09IFwiZXhwYW5kX21vcmVcIlxuICAgICAgICAgICAgICAgID8gXCJleHBhbmRfbGVzc1wiXG4gICAgICAgICAgICAgICAgOiBcImV4cGFuZF9tb3JlXCI7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBldmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vVUkvZXZlbnQtaGFuZGxlcnMvZXZlbnQtaGFuZGxlcnNcIjtcblxuZXZlbnRIYW5kbGVycygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==