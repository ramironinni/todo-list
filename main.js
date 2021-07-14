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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-priority-one: #ca2c2c;\n    --color-priority-two: #ca802c;\n    --color-priority-three: #3f6dc2;\n    --color-priority-four: #702cca;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: #2876be;\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: #2876be;\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    /* width: 10rem; */\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: #f0f0f0;\n    color: #252525;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item.active {\n    background-color: #e2e2e2;\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: #e7e7e7;\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-one {\n    border: 0.13rem solid var(--color-priority-one);\n}\n\n.task-checkmark.task-checkmark-priority-two {\n    border: 0.13rem solid var(--color-priority-two);\n}\n\n.task-checkmark.task-checkmark-priority-three {\n    border: 0.13rem solid var(--color-priority-three);\n}\n\n.task-checkmark.task-checkmark-priority-four {\n    border: 0.13rem solid var(--color-priority-four);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: #7a7a7a;\n    border-color: #7a7a7a;\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: #7a7a7a;\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    width: 100%;\n    padding: 3rem 1rem 1rem;\n    border-radius: 0.5rem;\n    background-color: #f0f0f0;\n    box-shadow: 0.2rem 0.2rem 0.5rem #a5a5a5;\n}\n\n.task-details-description {\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-details-edit-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-edit-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: #7a7a7a;\n    border-color: #7a7a7a;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: #7a7a7a;\n    text-decoration: line-through;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-details-due-text {\n    margin: 0.5rem 0;\n}\n\n.task-details-priority-container {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 1rem;\n}\n\n.priority-selector {\n    width: 20%;\n    height: 1rem;\n    border-radius: 0.3rem;\n}\n\n.priority-one {\n    border: 0.15rem solid var(--color-priority-one);\n}\n\n.priority-one.active {\n    background-color: var(--color-priority-one);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n\n.priority-two {\n    border: 0.15rem solid var(--color-priority-two);\n}\n\n.priority-two.active {\n    background-color: var(--color-priority-two);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n\n.priority-three {\n    border: 0.15rem solid var(--color-priority-three);\n}\n\n.priority-three.active {\n    background-color: var(--color-priority-three);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n\n.priority-four {\n    border: 0.15rem solid var(--color-priority-four);\n}\n.priority-four.active {\n    background-color: var(--color-priority-four);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-priority-one: #ca2c2c;\n    --color-priority-two: #ca802c;\n    --color-priority-three: #3f6dc2;\n    --color-priority-four: #702cca;\n}\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n}\n\nbody {\n    margin: 0; /* 1 */\n    font-family: \"Raleway\", sans-serif;\n    font-size: 0.8rem;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton {\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\n.material-icons {\n    font-family: \"Material Icons\";\n    font-size: inherit;\n}\n\n.top-nav {\n    background-color: #2876be;\n}\n\n.top-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0.5rem 0;\n}\n\n.top-nav-list-group {\n    display: flex;\n}\n\n.top-nav-item {\n    margin: 0 0.5rem;\n    list-style: none;\n}\n\n.top-nav-item:first-of-type {\n    /* margin-left: 0; */\n}\n\n.top-nav-item-btn {\n    color: #fff;\n}\n\n.add-task-floating-btn {\n    position: absolute;\n    bottom: 1.3rem;\n    right: 1.3rem;\n    z-index: 1;\n    display: flex;\n    border-radius: 2rem;\n    padding: 0.3rem;\n    background-color: #2876be;\n    box-shadow: 0.1rem 0.1rem 0.5rem #252525;\n}\n\n.side-nav {\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    /* width: 10rem; */\n    width: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    background-color: #f0f0f0;\n    color: #252525;\n}\n\n.side-nav-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-content: center;\n    width: 100%;\n    padding: 0;\n}\n\n.side-nav-item {\n    width: 80%;\n    padding: 0.3rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    list-style: none;\n}\n\n.side-nav-item-link {\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none;\n}\n\n.side-nav-item-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-item:hover,\n.side-nav-item.active {\n    background-color: #e2e2e2;\n}\n\n.side-nav-custom-list {\n    margin-top: 1rem;\n    padding: 0;\n}\n\n.side-nav-custom-list-btn {\n    cursor: pointer;\n}\n\n.side-nav-custom-list-btn-icon {\n    margin-right: 0.3rem;\n}\n\n.side-nav-custom-item {\n    margin-top: 0.5rem;\n    list-style: none;\n}\n\nmain {\n    padding: 2rem;\n}\n\nh1 {\n    margin: 0 0 1rem 0;\n}\n\n.tasks-group-container {\n    width: 100%;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-checkbox-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: #e7e7e7;\n}\n\n.task-checkbox {\n    position: absolute;\n    right: 0;\n    display: none;\n}\n\n.task-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.13rem solid #252525;\n}\n\n.task-checkmark.task-checkmark-priority-one {\n    border: 0.13rem solid var(--color-priority-one);\n}\n\n.task-checkmark.task-checkmark-priority-two {\n    border: 0.13rem solid var(--color-priority-two);\n}\n\n.task-checkmark.task-checkmark-priority-three {\n    border: 0.13rem solid var(--color-priority-three);\n}\n\n.task-checkmark.task-checkmark-priority-four {\n    border: 0.13rem solid var(--color-priority-four);\n}\n\n.task-checkbox:checked ~ .task-checkmark {\n    background-color: #7a7a7a;\n    border-color: #7a7a7a;\n}\n\n.task-title {\n    display: block;\n}\n\n.task-checkbox:checked ~ .task-title {\n    color: #7a7a7a;\n    text-decoration: line-through;\n}\n\n.task-show-details-btn {\n    position: absolute;\n    right: 1rem;\n}\n\n.task-details-container {\n    position: relative;\n    z-index: 2;\n    width: 100%;\n    padding: 3rem 1rem 1rem;\n    border-radius: 0.5rem;\n    background-color: #f0f0f0;\n    box-shadow: 0.2rem 0.2rem 0.5rem #a5a5a5;\n}\n\n.task-details-description {\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: #fff;\n    font-style: oblique;\n}\n\n.task-details-edit-btn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n\n.task-details-edit-btn span {\n    font-size: 1rem;\n}\n\n.task-details-list {\n    margin: 1rem 0;\n}\n\n.task-details-item-container {\n    display: flex;\n    position: relative;\n    margin-bottom: 0.5rem;\n}\n\n.task-details-item-checkmark {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n    border-radius: 1rem;\n    border: 0.1rem solid #252525;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-checkmark {\n    background-color: #7a7a7a;\n    border-color: #7a7a7a;\n}\n\n.task-details-item-checkbox:checked ~ .task-details-item-text {\n    color: #7a7a7a;\n    text-decoration: line-through;\n}\n\n.task-details-item-checkbox {\n    position: absolute;\n    display: none;\n}\n\n.task-details-due-date-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n\n.task-details-due-text {\n    margin: 0.5rem 0;\n}\n\n.task-details-priority-container {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 1rem;\n}\n\n.priority-selector {\n    width: 20%;\n    height: 1rem;\n    border-radius: 0.3rem;\n}\n\n.priority-one {\n    border: 0.15rem solid var(--color-priority-one);\n}\n\n.priority-one.active {\n    background-color: var(--color-priority-one);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n\n.priority-two {\n    border: 0.15rem solid var(--color-priority-two);\n}\n\n.priority-two.active {\n    background-color: var(--color-priority-two);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n\n.priority-three {\n    border: 0.15rem solid var(--color-priority-three);\n}\n\n.priority-three.active {\n    background-color: var(--color-priority-three);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n\n.priority-four {\n    border: 0.15rem solid var(--color-priority-four);\n}\n.priority-four.active {\n    background-color: var(--color-priority-four);\n    box-shadow: 0 0 0.4rem #a5a5a5;\n}\n"],"sourceRoot":""}]);
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


console.log("hello!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9DQUFvQyxvQ0FBb0Msc0NBQXNDLHFDQUFxQyxHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyxVQUFVLHdCQUF3Qiw2Q0FBNkMsK0JBQStCLDBCQUEwQixXQUFXLFVBQVUsZ0JBQWdCLG1EQUFtRCx3QkFBd0IsR0FBRyxtREFBbUQsd0JBQXdCLHdCQUF3QixtQ0FBbUMsOEJBQThCLFdBQVcscUJBQXFCLDJCQUEyQixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQixzQkFBc0Isb0NBQW9DLEdBQUcscUJBQXFCLHNDQUFzQyx5QkFBeUIsR0FBRyxjQUFjLGdDQUFnQyxHQUFHLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFDQUFxQyxnQkFBZ0Isd0JBQXdCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLG1CQUFtQix1QkFBdUIsdUJBQXVCLEdBQUcsaUNBQWlDLHdCQUF3QixNQUFNLHVCQUF1QixrQkFBa0IsR0FBRyw0QkFBNEIseUJBQXlCLHFCQUFxQixvQkFBb0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLGdDQUFnQywrQ0FBK0MsR0FBRyxlQUFlLHNCQUFzQixpQkFBaUIsYUFBYSxjQUFjLG9CQUFvQiw4QkFBOEIsbUJBQW1CLHNCQUFzQixrQkFBa0IseUJBQXlCLHVCQUF1QixnQ0FBZ0MscUJBQXFCLEdBQUcsb0JBQW9CLG9CQUFvQixzQkFBc0IsNkJB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QVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFB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QjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05xQjs7QUFFckIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LW9uZTogI2NhMmMyYztcXG4gICAgLS1jb2xvci1wcmlvcml0eS10d286ICNjYTgwMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktdGhyZWU6ICMzZjZkYzI7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktZm91cjogIzcwMmNjYTtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4udG9wLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc2YmU7XFxufVxcblxcbi50b3AtbmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLnRvcC1uYXYtbGlzdC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b3AtbmF2LWl0ZW0ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtOmZpcnN0LW9mLXR5cGUge1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMDsgKi9cXG59XFxuXFxuLnRvcC1uYXYtaXRlbS1idG4ge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFkZC10YXNrLWZsb2F0aW5nLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxLjNyZW07XFxuICAgIHJpZ2h0OiAxLjNyZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NzZiZTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gIzI1MjUyNTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIHdpZHRoOiAxMHJlbTsgKi9cXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxufVxcblxcbi5zaWRlLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxufVxcblxcbi5zaWRlLW5hdi1pdGVtOmhvdmVyLFxcbi5zaWRlLW5hdi1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdi1jdXN0b20tbGlzdC1idG4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG59XFxuXFxuLnRhc2tzLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS1vbmUge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktb25lKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LXR3byB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10d28pO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktdGhyZWUge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktdGhyZWUpO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktZm91ciB7XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTdhN2E7XFxuICAgIGJvcmRlci1jb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6ICM3YTdhN2E7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1zaG93LWRldGFpbHMtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuNXJlbSAjYTVhNWE1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWVkaXQtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMyNTI1MjU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTdhN2E7XFxuICAgIGJvcmRlci1jb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1kZXRhaWxzLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjN2E3YTdhO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWR1ZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktb25lIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LW9uZSk7XFxufVxcblxcbi5wcmlvcml0eS1vbmUuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktb25lKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjYTVhNWE1O1xcbn1cXG5cXG4ucHJpb3JpdHktdHdvIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LXR3byk7XFxufVxcblxcbi5wcmlvcml0eS10d28uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktdHdvKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjYTVhNWE1O1xcbn1cXG5cXG4ucHJpb3JpdHktdGhyZWUge1xcbiAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktdGhyZWUpO1xcbn1cXG5cXG4ucHJpb3JpdHktdGhyZWUuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktdGhyZWUpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC40cmVtICNhNWE1YTU7XFxufVxcblxcbi5wcmlvcml0eS1mb3VyIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LWZvdXIpO1xcbn1cXG4ucHJpb3JpdHktZm91ci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjYTVhNWE1O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07SUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixXQUFXLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTtJQUNJLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7O0FBRUE7Ozs7O0lBS0ksaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtJQUNqQixvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLGVBQWUsRUFBRSxNQUFNO0FBQzNCOztBQUVBOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1vbmU6ICNjYTJjMmM7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktdHdvOiAjY2E4MDJjO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LXRocmVlOiAjM2Y2ZGMyO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LWZvdXI6ICM3MDJjY2E7XFxufVxcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gICAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwOyAvKiAxICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbn1cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnRvcC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NmJlO1xcbn1cXG5cXG4udG9wLW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi50b3AtbmF2LWxpc3QtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wLW5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvcC1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDA7ICovXFxufVxcblxcbi50b3AtbmF2LWl0ZW0tYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtdGFzay1mbG9hdGluZy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4zcmVtO1xcbiAgICByaWdodDogMS4zcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc2YmU7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtICMyNTI1MjU7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiB3aWR0aDogMTByZW07ICovXFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGNvbG9yOiAjMjUyNTI1O1xcbn1cXG5cXG4uc2lkZS1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2LWl0ZW0taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYtaXRlbTpob3ZlcixcXG4uc2lkZS1uYXYtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYtY3VzdG9tLWxpc3QtYnRuLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtbmF2LWN1c3RvbS1pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxufVxcblxcbi50YXNrcy1ncm91cC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogMC4xM3JlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1jaGVja21hcmsudGFzay1jaGVja21hcmstcHJpb3JpdHktb25lIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LW9uZSk7XFxufVxcblxcbi50YXNrLWNoZWNrbWFyay50YXNrLWNoZWNrbWFyay1wcmlvcml0eS10d28ge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktdHdvKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LXRocmVlIHtcXG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LXRocmVlKTtcXG59XFxuXFxuLnRhc2stY2hlY2ttYXJrLnRhc2stY2hlY2ttYXJrLXByaW9yaXR5LWZvdXIge1xcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpb3JpdHktZm91cik7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3YTdhO1xcbiAgICBib3JkZXItY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQgfiAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiAjN2E3YTdhO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stc2hvdy1kZXRhaWxzLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogM3JlbSAxcmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjVyZW0gI2E1YTVhNTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1lZGl0LWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2ttYXJrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMjUyNTI1O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWl0ZW0tY2hlY2tib3g6Y2hlY2tlZCB+IC50YXNrLWRldGFpbHMtaXRlbS1jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3YTdhO1xcbiAgICBib3JkZXItY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveDpjaGVja2VkIH4gLnRhc2stZGV0YWlscy1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogIzdhN2E3YTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaXRlbS1jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1kdWUtdGV4dCB7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi50YXNrLWRldGFpbHMtcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktc2VsZWN0b3Ige1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnByaW9yaXR5LW9uZSB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS1vbmUpO1xcbn1cXG5cXG4ucHJpb3JpdHktb25lLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LW9uZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gI2E1YTVhNTtcXG59XFxuXFxuLnByaW9yaXR5LXR3byB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS10d28pO1xcbn1cXG5cXG4ucHJpb3JpdHktdHdvLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LXR3byk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gI2E1YTVhNTtcXG59XFxuXFxuLnByaW9yaXR5LXRocmVlIHtcXG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW9yaXR5LXRocmVlKTtcXG59XFxuXFxuLnByaW9yaXR5LXRocmVlLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LXRocmVlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNHJlbSAjYTVhNWE1O1xcbn1cXG5cXG4ucHJpb3JpdHktZm91ciB7XFxuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmlvcml0eS1mb3VyKTtcXG59XFxuLnByaW9yaXR5LWZvdXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktZm91cik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gI2E1YTVhNTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc29sZS5sb2coXCJoZWxsbyFcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9