/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/note.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/note.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --noteBorderColor: rgba(165, 42, 42, 0.426);
    --noteColor: rgb(252, 254, 177);
    --newProjectDivColor: rgb(244, 248, 252);
}

.simpleNoteDiv {
    position: relative;
    top: 10vh;
    left:10vw;
    background-color: var(--noteColor);
    border: 1px solid var(--noteBorderColor);
    width: 25vw;
    height: 50vh;
    border-radius: 5%;
    padding: 2%;
}

.simpleNoteForm {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    background-color: var(--noteColor);
    height: 45vh;
}

.simpleNoteText {
    background-color: var(--noteColor);;
    height: 4vh;
    border: 0px;
    border-bottom: 1px solid var(--noteBorderColor);
    font-size: larger;
}

.simpleNoteDescription {
    background-color: var(--noteColor);
    width: 90%;
}

.submitBtn,
.simpleNoteClearBtn {
    background-color: var(--noteColor);
    border: 1px solid var(--noteBorderColor);
    height:3vh;
    font-size: large;
    width: fit-content;
}


.submitBtn:hover,
.simpleNoteClearBtn:hover {
    font-weight:bold;
}

.noteViewDiv {
    background-color: var(--newProjectDivColor);
    padding: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.noteViewDeleteBtn {
    width: fit-content;
    font-size: large;
    height: 3vh;
}

`, "",{"version":3,"sources":["webpack://./src/note.css"],"names":[],"mappings":"AAAA;IACI,2CAA2C;IAC3C,+BAA+B;IAC/B,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,kCAAkC;IAClC,wCAAwC;IACxC,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;IACX,+CAA+C;IAC/C,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,UAAU;AACd;;AAEA;;IAEI,kCAAkC;IAClC,wCAAwC;IACxC,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,2CAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;AACf","sourcesContent":[":root {\n    --noteBorderColor: rgba(165, 42, 42, 0.426);\n    --noteColor: rgb(252, 254, 177);\n    --newProjectDivColor: rgb(244, 248, 252);\n}\n\n.simpleNoteDiv {\n    position: relative;\n    top: 10vh;\n    left:10vw;\n    background-color: var(--noteColor);\n    border: 1px solid var(--noteBorderColor);\n    width: 25vw;\n    height: 50vh;\n    border-radius: 5%;\n    padding: 2%;\n}\n\n.simpleNoteForm {\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n    background-color: var(--noteColor);\n    height: 45vh;\n}\n\n.simpleNoteText {\n    background-color: var(--noteColor);;\n    height: 4vh;\n    border: 0px;\n    border-bottom: 1px solid var(--noteBorderColor);\n    font-size: larger;\n}\n\n.simpleNoteDescription {\n    background-color: var(--noteColor);\n    width: 90%;\n}\n\n.submitBtn,\n.simpleNoteClearBtn {\n    background-color: var(--noteColor);\n    border: 1px solid var(--noteBorderColor);\n    height:3vh;\n    font-size: large;\n    width: fit-content;\n}\n\n\n.submitBtn:hover,\n.simpleNoteClearBtn:hover {\n    font-weight:bold;\n}\n\n.noteViewDiv {\n    background-color: var(--newProjectDivColor);\n    padding: 5vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.noteViewDeleteBtn {\n    width: fit-content;\n    font-size: large;\n    height: 3vh;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/project.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/project.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --newProjectDivColor: rgb(244, 248, 252);
    --newProjectFormColor: white;
}

.newProjectDiv {
    position: absolute;
    top: 20vh;
    left: 30vw;
    width: 35vw;
    height: auto;
    background-color: var(--newProjectDivColor);
    padding: 5vh;
    border-radius: 5%;
    border: 1px solid lightgray;
}

.newProjectForm {
    background-color: var(--newProjectFormColor);
    padding: 3vh;  
    border-radius: 5%;
    border: 1px solid lightgray;
}

.containDiv {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    justify-content: center;
    align-items: center;
}

.projectName {
    background-color: var(--newProjectFormColor);
    height: 2.5vh;
    width:90%;
}

.projectDescription {
    background-color: var(--newProjectFormColor);
    height: 12vh;
    width:90%;
}

.dueDateDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-size: large;
}

.dueDateDiv > label {
    width:50%;
    margin-right: 1vw;
}

.dueDateDiv > input {
    border: 0px;
    background-color: var(--newProjectFormColor);
}

.submitBtn,
.clearBtn {
    width:30%;
    height: 3vh;
}

.projectViewDiv {
    background-color: var(--newProjectDivColor);
    padding: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vh;
}

.todosViewDiv {
    background-color: var(--newProjectDivColor);
}

.dueDateViewDiv {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 1vw;
}

.addToDoBtn,
.updateProjectBtn {
    width: 15%;
}`, "",{"version":3,"sources":["webpack://./src/project.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,SAAS;AACb;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,4CAA4C;AAChD;;AAEA;;IAEI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,2CAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;;IAEI,UAAU;AACd","sourcesContent":[":root {\n    --newProjectDivColor: rgb(244, 248, 252);\n    --newProjectFormColor: white;\n}\n\n.newProjectDiv {\n    position: absolute;\n    top: 20vh;\n    left: 30vw;\n    width: 35vw;\n    height: auto;\n    background-color: var(--newProjectDivColor);\n    padding: 5vh;\n    border-radius: 5%;\n    border: 1px solid lightgray;\n}\n\n.newProjectForm {\n    background-color: var(--newProjectFormColor);\n    padding: 3vh;  \n    border-radius: 5%;\n    border: 1px solid lightgray;\n}\n\n.containDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n    justify-content: center;\n    align-items: center;\n}\n\n.projectName {\n    background-color: var(--newProjectFormColor);\n    height: 2.5vh;\n    width:90%;\n}\n\n.projectDescription {\n    background-color: var(--newProjectFormColor);\n    height: 12vh;\n    width:90%;\n}\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-weight: 400;\n    font-size: large;\n}\n\n.dueDateDiv > label {\n    width:50%;\n    margin-right: 1vw;\n}\n\n.dueDateDiv > input {\n    border: 0px;\n    background-color: var(--newProjectFormColor);\n}\n\n.submitBtn,\n.clearBtn {\n    width:30%;\n    height: 3vh;\n}\n\n.projectViewDiv {\n    background-color: var(--newProjectDivColor);\n    padding: 5vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1vh;\n}\n\n.todosViewDiv {\n    background-color: var(--newProjectDivColor);\n}\n\n.dueDateViewDiv {\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    align-items: center;\n    gap: 1vw;\n}\n\n.addToDoBtn,\n.updateProjectBtn {\n    width: 15%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body > div {
    display: flex;
}

.sidebar {
    width: 25%;
    height: 100vh;
    background-color: rgb(244, 248, 252);
    border-right: 1.5px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
}

.sidebar > button {
    margin-bottom: 3vh;
    background-color: rgb(244, 248, 252);
    font-weight: 400;
    font-size:large;
    border: 0px;
    width: 65%;
    height: 5%;
    border-radius: 30%;
}

.sidebar > button:hover {
    font-weight: 800;
}

.mainboard
.myProjects {
    margin-top: 6vh;
    border-top: 1.5px solid lightgray;
}

.myProjects > h1 {
    font-size: large;
    font-weight: 300;
}

.myProjects > ul > li {
    font-size: large;
    font-weight: 100;
}
.mainboard {
    width: 75%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,oCAAoC;IACpC,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,UAAU;IACV,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,UAAU;AACd","sourcesContent":["body > div {\n    display: flex;\n}\n\n.sidebar {\n    width: 25%;\n    height: 100vh;\n    background-color: rgb(244, 248, 252);\n    border-right: 1.5px solid lightgray;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 15vh;\n}\n\n.sidebar > button {\n    margin-bottom: 3vh;\n    background-color: rgb(244, 248, 252);\n    font-weight: 400;\n    font-size:large;\n    border: 0px;\n    width: 65%;\n    height: 5%;\n    border-radius: 30%;\n}\n\n.sidebar > button:hover {\n    font-weight: 800;\n}\n\n.mainboard\n.myProjects {\n    margin-top: 6vh;\n    border-top: 1.5px solid lightgray;\n}\n\n.myProjects > h1 {\n    font-size: large;\n    font-weight: 300;\n}\n\n.myProjects > ul > li {\n    font-size: large;\n    font-weight: 100;\n}\n.mainboard {\n    width: 75%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.toDoFormDiv {
    margin-top: 4vh;
    margin: auto;
    width: 35vw;
    height: auto;
    background-color: var(--newProjectDivColor);
    padding: 5vh;
    border-radius: 5%;
    border: 1px solid lightgray; 
}

.toDoForm {
    background-color: var(--newProjectFormColor);
    padding: 3vh;  
    border-radius: 5%;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items:normal;
    gap:1vh;
}

.simpleNoteTitleDiv {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    align-items: flex-start;
}

.simpleNoteTitleDiv > input {
    flex-grow: 1;
}

.formDescriptionDiv > textarea {
    width: 100%;
}

.dueDateDiv {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 1vw;
}

.dueDateDiv > label {
    width:50%;
    margin-right: 1vw;
}

.notesDiv > textarea {
    width: 100%;
}

.toDosubmitBtnDiv,
.toDoclearBtnDiv {
    display: flex;
    justify-content: center;
    align-items: center;
}

.toDosubmitBtn,
.toDoclearBtn {
    width: 25%;
    background-color: lightgray;
    margin: auto;
}

`, "",{"version":3,"sources":["webpack://./src/todo.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,UAAU;IACV,2BAA2B;IAC3B,YAAY;AAChB","sourcesContent":[".toDoFormDiv {\n    margin-top: 4vh;\n    margin: auto;\n    width: 35vw;\n    height: auto;\n    background-color: var(--newProjectDivColor);\n    padding: 5vh;\n    border-radius: 5%;\n    border: 1px solid lightgray; \n}\n\n.toDoForm {\n    background-color: var(--newProjectFormColor);\n    padding: 3vh;  \n    border-radius: 5%;\n    border: 1px solid lightgray;\n    display: flex;\n    flex-direction: column;\n    align-items:normal;\n    gap:1vh;\n}\n\n.simpleNoteTitleDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 1vw;\n    align-items: flex-start;\n}\n\n.simpleNoteTitleDiv > input {\n    flex-grow: 1;\n}\n\n.formDescriptionDiv > textarea {\n    width: 100%;\n}\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    align-items: center;\n    gap: 1vw;\n}\n\n.dueDateDiv > label {\n    width:50%;\n    margin-right: 1vw;\n}\n\n.notesDiv > textarea {\n    width: 100%;\n}\n\n.toDosubmitBtnDiv,\n.toDoclearBtnDiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.toDosubmitBtn,\n.toDoclearBtn {\n    width: 25%;\n    background-color: lightgray;\n    margin: auto;\n}\n\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/note.css":
/*!**********************!*\
  !*** ./src/note.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./note.css */ "./node_modules/css-loader/dist/cjs.js!./src/note.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/project.css":
/*!*************************!*\
  !*** ./src/project.css ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./project.css */ "./node_modules/css-loader/dist/cjs.js!./src/project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todo.css":
/*!**********************!*\
  !*** ./src/todo.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNote: () => (/* binding */ createNote),
/* harmony export */   createSimpleNotesList: () => (/* binding */ createSimpleNotesList)
/* harmony export */ });
const mainboard = document.querySelector(".mainboard");
const myProjects = document.querySelector('.myProjects');
const myNotesHeader = document.createElement('h1');
const myNotesList = document.createElement('ul');
const simpleNoteDiv = document.createElement('div');
const simpleNoteForm = document.createElement('form');
const simpleNoteText = document.createElement('input');
const simpleNoteDescription = document.createElement('textarea');
const submitBtn = document.createElement('button');
const simpleNoteClearBtn = document.createElement('button');

/*class simpleNote {
    constructor(title, chkbxArr) {
        this.title = title;
        this.chkbxArr = chkbxArr;
    }
}*/

const mySimpleNotes ={};

function createNote() {
    mainboard.appendChild(simpleNoteDiv);
    simpleNoteDiv.appendChild(simpleNoteForm);
    simpleNoteForm.appendChild(simpleNoteText);
    simpleNoteForm.appendChild(simpleNoteDescription);
    simpleNoteForm.appendChild(submitBtn);
    simpleNoteForm.appendChild(simpleNoteClearBtn);
    simpleNoteDiv.classList.add('simpleNoteDiv');
    simpleNoteForm.classList.add('simpleNoteForm');
    simpleNoteText.classList.add('simpleNoteText');
    simpleNoteText.name = "simpleNoteText";//name
    simpleNoteText.type = 'text';
    simpleNoteDescription.name = 'simpleNoteDescription';//name
    simpleNoteDescription.classList.add = 'simpleNoteDescription';
    simpleNoteDescription.rows = 22;
    simpleNoteText.placeholder = "Enter note title";
    simpleNoteDescription.placeholder = "Enter your notes";
    simpleNoteForm.appendChild(submitBtn);
    submitBtn.classList.add('submitBtn');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Save'; 
    simpleNoteClearBtn.classList.add('simpleNoteClearBtn');
    simpleNoteClearBtn.innerText = "Clear";
    simpleNoteClearBtn.type = 'reset';
    simpleNoteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nextNote = new FormData(simpleNoteForm);
        let newNote = {};
        if (nextNote.get('simpleNoteText') != '') {
        nextNote.forEach((value,key) =>{
            newNote[key] = value;
        });
        mySimpleNotes[simpleNoteText.value] = newNote;
        console.log(mySimpleNotes);
        simpleNoteDiv.innerHTML = '';
        simpleNoteDiv.remove();
        } else {
            alert('Enter a title for your note');
            } 
        });
    
    /*clearBtn.addEventListener('click', function(event) {
        event.preventDefault();
        delete mySimpleNotes[simpleNoteText.value];
    });*/
}

function createSimpleNotesList() {
    myProjects.innerHTML = '';
    myProjects.appendChild(myNotesHeader);
    myNotesHeader.classList.add('myNotesHeader');
    myNotesHeader.innerHTML = 'My Notes';
    myProjects.appendChild(myNotesList);
    myNotesList.classList.add('myNotesList');
    myNotesList.innerHTML = '';
    for (let value of Object.keys(mySimpleNotes)) {
        const lstItem = document.createElement('li');
        myNotesList.appendChild(lstItem);
        lstItem.innerHTML = value;    
        lstItem.classList.add('lstItem');
    }
}

myNotesList.addEventListener('click', function(event) { //event delegation
    if (event.target && event.target.matches("li.lstItem")) {
        createNoteView(event);
    }
});

function createNoteView(event) {
    mainboard.innerHTML = '';
    const noteViewDiv = document.createElement('div');
    noteViewDiv.classList.add('noteViewDiv');
    mainboard.appendChild(noteViewDiv);
    const noteViewHeader = document.createElement('h1');
    const noteViewText = document.createElement('p');
    const noteViewDeleteBtn = document.createElement('button');
    noteViewHeader.classList.add("noteViewHeader");
    noteViewText.classList.add('noteViewText');
    noteViewDeleteBtn.classList.add('noteViewDeleteBtn');
    noteViewDeleteBtn.innerHTML = "Delete Note";
    noteViewDiv.appendChild(noteViewHeader);
    noteViewDiv.appendChild(noteViewText);
    noteViewDiv.appendChild(noteViewDeleteBtn);
    noteViewHeader.innerHTML = event.target.innerHTML;
    noteViewText.innerHTML = mySimpleNotes[event.target.innerHTML].simpleNoteDescription;
    noteViewDeleteBtn.addEventListener('click', function() {
        delete mySimpleNotes[event.target.innerHTML];
    });
}


    /*const projectParagr = document.createElement('p');
    projectParagr.classList.add('projectParagr');
    projectViewDiv.appendChild(projectParagr);
    projectParagr.innerText = allInstances[event.target.innerHTML].projectDescription;
}*/

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createProjectsLst: () => (/* binding */ createProjectsLst),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject)
/* harmony export */ });
class Project {
    constructor(projectName, projectDescription, projectDueDate) {
        if (Project.exists(projectName)) {
            alert('A project with name: ${projectName} already exists');
            throw new Error('A project with name: ${projectName} already exists');
        }
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectDueDate = projectDueDate;
        this.todos = [];
    }

    static existingNames = new Set();

    static exists(projectName) {
        return Project.existingNames.has(projectName);
    }

    registerName() {
        Project.existingNames.add(this.projectName);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeToDo() {
        const newToDo = this.todos.filter((obj) => obj.removeItem != true);
        this.todos = newToDo;
    }
}

const mainboard = document.querySelector(".mainboard");
const myProjects = document.querySelector('.myProjects');
const newProjectDiv = document.createElement('div');
const newProjectForm = document.createElement('form');
const containDiv = document.createElement('div');
const projectName = document.createElement('input');
const projectDescription = document.createElement('textarea');
const dueDateDiv = document.createElement('div');
const dueDateLabel = document.createElement('label');
const dueDateInput = document.createElement('input');
const submitBtn = document.createElement('button');
const clearBtn = document.createElement('button');
const myProjectsHeader = document.createElement('h1');
const deleteProjectDiv = document.createElement('div');
const deleteProjectHeader = document.createElement('h1');
const deleteProjectList = document.createElement('select');


function createProject() {
    mainboard.innerHTML = "";
    mainboard.appendChild(newProjectDiv);
    newProjectDiv.appendChild(newProjectForm);
    newProjectForm.appendChild(containDiv);
    containDiv.appendChild(projectName);
    projectName.setAttribute('name', 'projectName'); //name
    containDiv.appendChild(projectDescription);
    dueDateDiv.classList.add('dueDateDiv');
    containDiv.appendChild(dueDateDiv);
    dueDateLabel.innerHTML = "Due Date:";
    dueDateDiv.appendChild(dueDateLabel);
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate'; //name
    dueDateDiv.appendChild(dueDateInput);
    containDiv.appendChild(submitBtn);
    containDiv.appendChild(clearBtn);
    newProjectDiv.classList.add('newProjectDiv');
    newProjectForm.classList.add('newProjectForm');
    containDiv.classList.add('containDiv');
    projectName.classList.add('projectName');
    projectName.placeholder = "Enter project name";
    projectDescription.classList.add('projectDescription');
    projectDescription.setAttribute('name', 'projectDescription'); //name
    projectDescription.placeholder = "Enter project description";
    submitBtn.classList.add('submitBtn');
    clearBtn.classList.add('clearBtn');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = "Save";
    clearBtn.innerHTML = 'Clear'
    newProjectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nextProject = new FormData(newProjectForm);
        /*let newProject = new Project(nextProject.get('projectName'), 
            nextProject.get('projectDescription'), 
            nextProject.get('dueDate'));
        newProject.registerName();
        console.log(newProject.projectName, newProject.projectDueDate);*/
        const projName = nextProject.get('projectName');
        console.log(projName);
        const projData = JSON.parse(localStorage.getItem('projInfo')) || {} ;
        projData[projName] = {'projectName': '', 'projectDescription': '', 'projectDueDate': '', 'todos': ''};
        projData[projName]['projectName'] = nextProject.get('projectName');
        projData[projName]['projectDescription'] = nextProject.get('projectDescription');
        projData[projName]['projectDueDate'] = nextProject.get('dueDate');
        projData[projName]['todos'] = [];
        localStorage.setItem('projInfo', JSON.stringify(projData));
        alert('Project Saved');
        mainboard.innerHTML = '';
    });
}

clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    mainboard.innerHTML = '';
});


function createProjectsLst() {
    myProjects.innerHTML = '';
    myProjects.appendChild(myProjectsHeader);
    myProjectsHeader.classList.add('myProjectsHeader');
    myProjectsHeader.innerHTML = "My Projects";
    const myProjectsList = document.createElement('ul');
    myProjects.appendChild(myProjectsList);
    myProjectsList.classList.add('myProjectList');
    const projData = JSON.parse(localStorage.getItem('projInfo')) || {};
    const arr = Object.keys(projData);
    for (let i = 0; i < arr.length; i++ ) {
        const lstItem = document.createElement('li');
        myProjectsList.appendChild(lstItem);
        lstItem.innerHTML = arr[i];    
        lstItem.classList.add('lstItem');
    }
    myProjectsList.addEventListener('click', function(event) { //event delegation
        if (event.target && event.target.matches("li.lstItem")) {
            createProjectView(event);
        }
    });
}

function createProjectView(event) {
    mainboard.innerHTML = '';
    const projData = JSON.parse(localStorage.getItem('projInfo')) || {};
    const projectViewDiv = document.createElement('div');
    projectViewDiv.classList.add('projectViewDiv');
    mainboard.appendChild(projectViewDiv);
    const projectHeader = document.createElement('h1');
    projectHeader.classList.add("projectHeader");
    projectViewDiv.appendChild(projectHeader);
    projectHeader.innerHTML = event.target.innerHTML;
    const projectParagr = document.createElement('p');
    projectParagr.classList.add('projectParagr');
    projectViewDiv.appendChild(projectParagr);
    console.log(projData[event.target.innerHTML]);
    projectParagr.innerText = projData[event.target.innerHTML].projectDescription;
    const dueDateViewDiv = document.createElement('div');
    dueDateViewDiv.classList.add('dueDateViewDiv');
    projectViewDiv.appendChild(dueDateViewDiv);
    const dueDateViewLabel = document.createElement('label');
    dueDateViewLabel.innerHTML = "Due Date:";
    dueDateViewDiv.appendChild(dueDateViewLabel);
    const dueDateViewParagr = document.createElement('p');
    dueDateViewParagr.classList.add('dueDateViewParagr');
    dueDateViewDiv.appendChild(dueDateViewParagr);
    dueDateViewParagr.innerText = projData[event.target.innerHTML].projectDueDate;
    const addToDoBtn = document.createElement('button');
    addToDoBtn.classList.add('addToDoBtn');
    projectViewDiv.appendChild(addToDoBtn);
    addToDoBtn.innerHTML = 'Add new ToDo';
    const updateProjectBtn = document.createElement('button');
    updateProjectBtn.classList.add('updateProjectBtn');
    projectViewDiv.appendChild(updateProjectBtn);
    updateProjectBtn.innerHTML = 'Update Project';
    if (projData[event.target.innerHTML].todos.length > 0) {
        createTodosViewDiv(event.target.innerHTML);
    } 
    addToDoBtn.addEventListener('click', function() {
        toDoFormDiv.innerHTML = '';
        createNewToDoForm(event.target.innerHTML);
    });
    updateProjectBtn.addEventListener('click', function() {
        mainboard.innerHTML = '';
        updateProject(event.target.innerHTML);
    });
}

function deleteProject() {
    mainboard.innerHTML = "";
    mainboard.appendChild(deleteProjectDiv);
    deleteProjectDiv.classList.add('deleteProjectDiv');
    deleteProjectHeader.classList.add('deleteProjectHeader');
    deleteProjectDiv.appendChild(deleteProjectHeader);
    deleteProjectHeader.innerHTML = 'Choose project to delete:';
    deleteProjectDiv.appendChild(deleteProjectList);
    deleteProjectList.classList.add('deleteProjectList');
    while (deleteProjectList.length > 0) {
        deleteProjectList.remove(deleteProjectList.length - 1);
    }
    const projData = JSON.parse(localStorage.getItem('projInfo')) || {};
    const arr = Object.keys(projData);
    arr.unshift('Select Project');
    for (let i = 0; i < arr.length; i++) {
        const deleteProjectSelection = document.createElement('option');
        deleteProjectList.appendChild(deleteProjectSelection);
        deleteProjectSelection.innerHTML = arr[i];
        deleteProjectSelection.value = arr[i];
    }
    deleteProjectList.addEventListener('change', function(event) {
        const projData = JSON.parse(localStorage.getItem('projInfo')) || {};
        delete projData[event.target.value];
        localStorage.setItem('projInfo', JSON.stringify(projData));
    });
}

function updateProject(rootPr) {
    //use the same layout as create project
    //use data from localStorage
}

const toDoFormDiv = document.createElement('div');

function createNewToDoForm(rootPr) {
    const toDoForm = document.createElement('form');
    const simpleNoteTitleDiv = document.createElement('div');
    const formTitleLabel = document.createElement('label');
    const formTitleInput = document.createElement('input');
    const formDescriptionDiv = document.createElement('div');
    const formDescriptionTextArea = document.createElement('textarea');
    mainboard.appendChild(toDoFormDiv);
    toDoFormDiv.classList.add('toDoFormDiv');
    toDoFormDiv.appendChild(toDoForm);
    toDoForm.classList.add('toDoForm');
    toDoForm.appendChild(simpleNoteTitleDiv);
    simpleNoteTitleDiv.classList.add('simpleNoteTitleDiv');
    simpleNoteTitleDiv.appendChild(formTitleLabel);
    formTitleLabel.innerHTML = "Title:";
    simpleNoteTitleDiv.appendChild(formTitleInput);
    formTitleInput.type = 'text';
    formTitleInput.name = 'title'; //name
    toDoForm.appendChild(formDescriptionDiv);
    formDescriptionDiv.classList.add('formDescriptionDiv');
    formDescriptionDiv.appendChild(formDescriptionTextArea);
    formDescriptionTextArea.setAttribute('name', 'description'); //name
    formDescriptionTextArea.setAttribute('rows', '5');
    formDescriptionTextArea.placeholder = 'Enter description';
    const dueDateDiv = document.createElement('div');
    toDoForm.appendChild(dueDateDiv);
    dueDateDiv.classList.add('dueDateDiv');
    const dueDateLabel = document.createElement('label');
    dueDateDiv.appendChild(dueDateLabel);
    dueDateLabel.innerHTML = "Due Date:";
    const dueDateInput = document.createElement('input');
    dueDateDiv.appendChild(dueDateInput);
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate'; //name
    const notesDiv = document.createElement('div');
    toDoForm.appendChild(notesDiv);
    notesDiv.classList.add('notesDiv');
    const notesTextArea = document.createElement('textarea');
    notesDiv.appendChild(notesTextArea);
    notesTextArea.setAttribute('name', 'notes'); //name
    notesTextArea.setAttribute('rows', '3');
    notesTextArea.placeholder = 'Enter notes';
    //priority Div:
    const priorityDiv = document.createElement('div');
    toDoForm.appendChild(priorityDiv);
    priorityDiv.classList.add('priorityDiv');
    const priorityLabel = document.createElement('label');
    priorityDiv.appendChild(priorityLabel);
    priorityLabel.innerHTML = "Priority:";
    const prioritySelect = document.createElement('select');
    priorityDiv.appendChild(prioritySelect);
    prioritySelect.setAttribute('name', 'priority'); //name
    const option1 = document.createElement('option');
    prioritySelect.appendChild(option1);
    option1.setAttribute('value', 'low');
    option1.innerHTML = 'Low';
    const option2 = document.createElement('option');
    prioritySelect.appendChild(option2);
    option2.setAttribute('value', 'medium');
    option2.innerHTML = 'Medium';
    const option3 = document.createElement('option');
    prioritySelect.appendChild(option3);
    option3.setAttribute('value', 'high');
    option3.innerHTML = 'High';
    const toDosubmitBtn = document.createElement('button');
    toDoForm.appendChild(toDosubmitBtn);
    toDosubmitBtn.classList.add('toDosubmitBtn');
    toDosubmitBtn.type = 'submit';
    toDosubmitBtn.innerHTML = "Save";
    const toDoclearBtnDiv = document.createElement('div');
    toDoForm.appendChild(toDoclearBtnDiv);
    toDoclearBtnDiv.classList.add('toDoclearBtnDiv');
    const toDoclearBtn = document.createElement('button');
    toDoclearBtnDiv.appendChild(toDoclearBtn);
    toDoclearBtn.classList.add('toDoclearBtn');
    toDoclearBtn.type = 'button';
    toDoclearBtn.innerHTML = 'Clear';
    toDoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(rootPr);
        let nextToDo = new FormData(toDoForm);
        let newToDo = {
            title:nextToDo.get('title'), 
            description: nextToDo.get('description'), 
            dueDate: nextToDo.get('dueDate'), 
            notes: nextToDo.get('notes'),
            priority: nextToDo.get('priority')
        }
        const projData = JSON.parse(localStorage.getItem('projInfo')) || {};
        projData[rootPr].todos.push(newToDo);
        localStorage.setItem('projInfo', JSON.stringify(projData));
        console.log(projData);
        toDoFormDiv.remove();
    });
}

const todosViewDiv = document.createElement('div');
function createTodosViewDiv(rootPr) {
    todosViewDiv.innerHTML = '';
    mainboard.appendChild(todosViewDiv);
    todosViewDiv.classList.add('todosViewDiv');
    const todosViewHeader = document.createElement('h2');
    todosViewHeader.classList.add('todosViewHeader');
    todosViewHeader.innerHTML = "Saved \"todos\" for this project:";
    todosViewDiv.appendChild(todosViewHeader);
    const projData = JSON.parse(localStorage.getItem('projInfo')) || {};
    console.log(projData[rootPr].todos.length);
    const todosViewList = document.createElement('ul');
    todosViewDiv.appendChild(todosViewList);
    for (let i = 0; i < projData[rootPr].todos.length; i++) {
        const lstTodoItem = document.createElement('li');
        todosViewList.appendChild(lstTodoItem);
        lstTodoItem.classList.add('lstTodoItem');
        lstTodoItem.innerHTML = `${projData[rootPr].todos[i].title}, due date: ${projData[rootPr].todos[i].dueDate}`;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _note_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.css */ "./src/note.css");
/* harmony import */ var _project_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.css */ "./src/project.css");
/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.css */ "./src/todo.css");
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note.js */ "./src/note.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.js */ "./src/project.js");









const simpleNoteButton = document.getElementById('simpleNoteBtn');
const newProjectBtn = document.getElementById('newProjectBtn');
const deleteProjectBtn = document.getElementById('deleteProjectBtn');
const viewProjectsBtn = document.getElementById('viewProjectsBtn')

simpleNoteButton.addEventListener('click', function() {
    ;(0,_note_js__WEBPACK_IMPORTED_MODULE_4__.createNote)();
});

newProjectBtn.addEventListener('click', function() {
    (0,_project_js__WEBPACK_IMPORTED_MODULE_5__.createProject)();
});

viewProjectsBtn.addEventListener('click', function() {
    (0,_project_js__WEBPACK_IMPORTED_MODULE_5__.createProjectsLst)();
});

viewNotesBtn.addEventListener('click', function() {
    (0,_note_js__WEBPACK_IMPORTED_MODULE_4__.createSimpleNotesList)();
});

deleteProjectBtn.addEventListener('click', function() {
    (0,_project_js__WEBPACK_IMPORTED_MODULE_5__.deleteProject)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdDQUFnQyxjQUFjLGtDQUFrQztBQUNuSDtBQUNBOzs7Ozs7Ozs7OztVQ3ZVQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRDtBQUNHO0FBQ0g7O0FBRXdDO0FBQ2lCOzs7QUFHN0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBLElBQUksMERBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLElBQUksOERBQWlCO0FBQ3JCLENBQUM7O0FBRUQ7QUFDQSxJQUFJLCtEQUFxQjtBQUN6QixDQUFDOztBQUVEO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ub3RlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbm90ZS5jc3M/ODEwZiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuY3NzPzFhMzMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uY3NzPzNmODMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW5vdGVCb3JkZXJDb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC40MjYpO1xuICAgIC0tbm90ZUNvbG9yOiByZ2IoMjUyLCAyNTQsIDE3Nyk7XG4gICAgLS1uZXdQcm9qZWN0RGl2Q29sb3I6IHJnYigyNDQsIDI0OCwgMjUyKTtcbn1cblxuLnNpbXBsZU5vdGVEaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwdmg7XG4gICAgbGVmdDoxMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVDb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbm90ZUJvcmRlckNvbG9yKTtcbiAgICB3aWR0aDogMjV2dztcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgcGFkZGluZzogMiU7XG59XG5cbi5zaW1wbGVOb3RlRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVDb2xvcik7XG4gICAgaGVpZ2h0OiA0NXZoO1xufVxuXG4uc2ltcGxlTm90ZVRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVDb2xvcik7O1xuICAgIGhlaWdodDogNHZoO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ub3RlQm9yZGVyQ29sb3IpO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uc2ltcGxlTm90ZURlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RlQ29sb3IpO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5zdWJtaXRCdG4sXG4uc2ltcGxlTm90ZUNsZWFyQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RlQ29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5vdGVCb3JkZXJDb2xvcik7XG4gICAgaGVpZ2h0OjN2aDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuXG4uc3VibWl0QnRuOmhvdmVyLFxuLnNpbXBsZU5vdGVDbGVhckJ0bjpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLm5vdGVWaWV3RGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXdQcm9qZWN0RGl2Q29sb3IpO1xuICAgIHBhZGRpbmc6IDV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub3RlVmlld0RlbGV0ZUJ0biB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgaGVpZ2h0OiAzdmg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25vdGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkNBQTJDO0lBQzNDLCtCQUErQjtJQUMvQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsK0NBQStDO0lBQy9DLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ub3RlQm9yZGVyQ29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuNDI2KTtcXG4gICAgLS1ub3RlQ29sb3I6IHJnYigyNTIsIDI1NCwgMTc3KTtcXG4gICAgLS1uZXdQcm9qZWN0RGl2Q29sb3I6IHJnYigyNDQsIDI0OCwgMjUyKTtcXG59XFxuXFxuLnNpbXBsZU5vdGVEaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTB2aDtcXG4gICAgbGVmdDoxMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RlQ29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ub3RlQm9yZGVyQ29sb3IpO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbi5zaW1wbGVOb3RlRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RlQ29sb3IpO1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxufVxcblxcbi5zaW1wbGVOb3RlVGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVDb2xvcik7O1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ub3RlQm9yZGVyQ29sb3IpO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLnNpbXBsZU5vdGVEZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVDb2xvcik7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdWJtaXRCdG4sXFxuLnNpbXBsZU5vdGVDbGVhckJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVDb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5vdGVCb3JkZXJDb2xvcik7XFxuICAgIGhlaWdodDozdmg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuXFxuLnN1Ym1pdEJ0bjpob3ZlcixcXG4uc2ltcGxlTm90ZUNsZWFyQnRuOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG59XFxuXFxuLm5vdGVWaWV3RGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdERpdkNvbG9yKTtcXG4gICAgcGFkZGluZzogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVWaWV3RGVsZXRlQnRuIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1uZXdQcm9qZWN0RGl2Q29sb3I6IHJnYigyNDQsIDI0OCwgMjUyKTtcbiAgICAtLW5ld1Byb2plY3RGb3JtQ29sb3I6IHdoaXRlO1xufVxuXG4ubmV3UHJvamVjdERpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjB2aDtcbiAgICBsZWZ0OiAzMHZ3O1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXdQcm9qZWN0RGl2Q29sb3IpO1xuICAgIHBhZGRpbmc6IDV2aDtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5uZXdQcm9qZWN0Rm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdEZvcm1Db2xvcik7XG4gICAgcGFkZGluZzogM3ZoOyAgXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uY29udGFpbkRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0TmFtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdEZvcm1Db2xvcik7XG4gICAgaGVpZ2h0OiAyLjV2aDtcbiAgICB3aWR0aDo5MCU7XG59XG5cbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3RGb3JtQ29sb3IpO1xuICAgIGhlaWdodDogMTJ2aDtcbiAgICB3aWR0aDo5MCU7XG59XG5cbi5kdWVEYXRlRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmR1ZURhdGVEaXYgPiBsYWJlbCB7XG4gICAgd2lkdGg6NTAlO1xuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xufVxuXG4uZHVlRGF0ZURpdiA+IGlucHV0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXdQcm9qZWN0Rm9ybUNvbG9yKTtcbn1cblxuLnN1Ym1pdEJ0bixcbi5jbGVhckJ0biB7XG4gICAgd2lkdGg6MzAlO1xuICAgIGhlaWdodDogM3ZoO1xufVxuXG4ucHJvamVjdFZpZXdEaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3REaXZDb2xvcik7XG4gICAgcGFkZGluZzogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDF2aDtcbn1cblxuLnRvZG9zVmlld0RpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdERpdkNvbG9yKTtcbn1cblxuLmR1ZURhdGVWaWV3RGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxdnc7XG59XG5cbi5hZGRUb0RvQnRuLFxuLnVwZGF0ZVByb2plY3RCdG4ge1xuICAgIHdpZHRoOiAxNSU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBOztJQUVJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbmV3UHJvamVjdERpdkNvbG9yOiByZ2IoMjQ0LCAyNDgsIDI1Mik7XFxuICAgIC0tbmV3UHJvamVjdEZvcm1Db2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXdQcm9qZWN0RGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwdmg7XFxuICAgIGxlZnQ6IDMwdnc7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3REaXZDb2xvcik7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLm5ld1Byb2plY3RGb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdEZvcm1Db2xvcik7XFxuICAgIHBhZGRpbmc6IDN2aDsgIFxcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4uY29udGFpbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdEZvcm1Db2xvcik7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIHdpZHRoOjkwJTtcXG59XFxuXFxuLnByb2plY3REZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3RGb3JtQ29sb3IpO1xcbiAgICBoZWlnaHQ6IDEydmg7XFxuICAgIHdpZHRoOjkwJTtcXG59XFxuXFxuLmR1ZURhdGVEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5kdWVEYXRlRGl2ID4gbGFiZWwge1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbn1cXG5cXG4uZHVlRGF0ZURpdiA+IGlucHV0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3RGb3JtQ29sb3IpO1xcbn1cXG5cXG4uc3VibWl0QnRuLFxcbi5jbGVhckJ0biB7XFxuICAgIHdpZHRoOjMwJTtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcblxcbi5wcm9qZWN0Vmlld0RpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3REaXZDb2xvcik7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXZoO1xcbn1cXG5cXG4udG9kb3NWaWV3RGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdERpdkNvbG9yKTtcXG59XFxuXFxuLmR1ZURhdGVWaWV3RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDF2dztcXG59XFxuXFxuLmFkZFRvRG9CdG4sXFxuLnVwZGF0ZVByb2plY3RCdG4ge1xcbiAgICB3aWR0aDogMTUlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ4LCAyNTIpO1xuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXZoO1xufVxuXG4uc2lkZWJhciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0OCwgMjUyKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTpsYXJnZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICB3aWR0aDogNjUlO1xuICAgIGhlaWdodDogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xufVxuXG4uc2lkZWJhciA+IGJ1dHRvbjpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm1haW5ib2FyZFxuLm15UHJvamVjdHMge1xuICAgIG1hcmdpbi10b3A6IDZ2aDtcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5teVByb2plY3RzID4gaDEge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm15UHJvamVjdHMgPiB1bCA+IGxpIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4ubWFpbmJvYXJkIHtcbiAgICB3aWR0aDogNzUlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0OCwgMjUyKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxNXZoO1xcbn1cXG5cXG4uc2lkZWJhciA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ4LCAyNTIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6bGFyZ2U7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcblxcbi5zaWRlYmFyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm1haW5ib2FyZFxcbi5teVByb2plY3RzIHtcXG4gICAgbWFyZ2luLXRvcDogNnZoO1xcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5teVByb2plY3RzID4gaDEge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubXlQcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4ubWFpbmJvYXJkIHtcXG4gICAgd2lkdGg6IDc1JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudG9Eb0Zvcm1EaXYge1xuICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDM1dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3REaXZDb2xvcik7XG4gICAgcGFkZGluZzogNXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgXG59XG5cbi50b0RvRm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3UHJvamVjdEZvcm1Db2xvcik7XG4gICAgcGFkZGluZzogM3ZoOyAgXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczpub3JtYWw7XG4gICAgZ2FwOjF2aDtcbn1cblxuLnNpbXBsZU5vdGVUaXRsZURpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMXZ3O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uc2ltcGxlTm90ZVRpdGxlRGl2ID4gaW5wdXQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvcm1EZXNjcmlwdGlvbkRpdiA+IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmR1ZURhdGVEaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDF2dztcbn1cblxuLmR1ZURhdGVEaXYgPiBsYWJlbCB7XG4gICAgd2lkdGg6NTAlO1xuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xufVxuXG4ubm90ZXNEaXYgPiB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50b0Rvc3VibWl0QnRuRGl2LFxuLnRvRG9jbGVhckJ0bkRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9Eb3N1Ym1pdEJ0bixcbi50b0RvY2xlYXJCdG4ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvRG9Gb3JtRGl2IHtcXG4gICAgbWFyZ2luLXRvcDogNHZoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3REaXZDb2xvcik7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgXFxufVxcblxcbi50b0RvRm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld1Byb2plY3RGb3JtQ29sb3IpO1xcbiAgICBwYWRkaW5nOiAzdmg7ICBcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6bm9ybWFsO1xcbiAgICBnYXA6MXZoO1xcbn1cXG5cXG4uc2ltcGxlTm90ZVRpdGxlRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2ltcGxlTm90ZVRpdGxlRGl2ID4gaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5mb3JtRGVzY3JpcHRpb25EaXYgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZHVlRGF0ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxdnc7XFxufVxcblxcbi5kdWVEYXRlRGl2ID4gbGFiZWwge1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbn1cXG5cXG4ubm90ZXNEaXYgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9Eb3N1Ym1pdEJ0bkRpdixcXG4udG9Eb2NsZWFyQnRuRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b0Rvc3VibWl0QnRuLFxcbi50b0RvY2xlYXJCdG4ge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm90ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3RlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtYWluYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5ib2FyZFwiKTtcbmNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlQcm9qZWN0cycpO1xuY29uc3QgbXlOb3Rlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBteU5vdGVzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5jb25zdCBzaW1wbGVOb3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaW1wbGVOb3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNvbnN0IHNpbXBsZU5vdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IHNpbXBsZU5vdGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHNpbXBsZU5vdGVDbGVhckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4vKmNsYXNzIHNpbXBsZU5vdGUge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjaGtieEFycikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuY2hrYnhBcnIgPSBjaGtieEFycjtcbiAgICB9XG59Ki9cblxuY29uc3QgbXlTaW1wbGVOb3RlcyA9e307XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xuICAgIG1haW5ib2FyZC5hcHBlbmRDaGlsZChzaW1wbGVOb3RlRGl2KTtcbiAgICBzaW1wbGVOb3RlRGl2LmFwcGVuZENoaWxkKHNpbXBsZU5vdGVGb3JtKTtcbiAgICBzaW1wbGVOb3RlRm9ybS5hcHBlbmRDaGlsZChzaW1wbGVOb3RlVGV4dCk7XG4gICAgc2ltcGxlTm90ZUZvcm0uYXBwZW5kQ2hpbGQoc2ltcGxlTm90ZURlc2NyaXB0aW9uKTtcbiAgICBzaW1wbGVOb3RlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHNpbXBsZU5vdGVGb3JtLmFwcGVuZENoaWxkKHNpbXBsZU5vdGVDbGVhckJ0bik7XG4gICAgc2ltcGxlTm90ZURpdi5jbGFzc0xpc3QuYWRkKCdzaW1wbGVOb3RlRGl2Jyk7XG4gICAgc2ltcGxlTm90ZUZvcm0uY2xhc3NMaXN0LmFkZCgnc2ltcGxlTm90ZUZvcm0nKTtcbiAgICBzaW1wbGVOb3RlVGV4dC5jbGFzc0xpc3QuYWRkKCdzaW1wbGVOb3RlVGV4dCcpO1xuICAgIHNpbXBsZU5vdGVUZXh0Lm5hbWUgPSBcInNpbXBsZU5vdGVUZXh0XCI7Ly9uYW1lXG4gICAgc2ltcGxlTm90ZVRleHQudHlwZSA9ICd0ZXh0JztcbiAgICBzaW1wbGVOb3RlRGVzY3JpcHRpb24ubmFtZSA9ICdzaW1wbGVOb3RlRGVzY3JpcHRpb24nOy8vbmFtZVxuICAgIHNpbXBsZU5vdGVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkID0gJ3NpbXBsZU5vdGVEZXNjcmlwdGlvbic7XG4gICAgc2ltcGxlTm90ZURlc2NyaXB0aW9uLnJvd3MgPSAyMjtcbiAgICBzaW1wbGVOb3RlVGV4dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgbm90ZSB0aXRsZVwiO1xuICAgIHNpbXBsZU5vdGVEZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBub3Rlc1wiO1xuICAgIHNpbXBsZU5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ0bicpO1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTYXZlJzsgXG4gICAgc2ltcGxlTm90ZUNsZWFyQnRuLmNsYXNzTGlzdC5hZGQoJ3NpbXBsZU5vdGVDbGVhckJ0bicpO1xuICAgIHNpbXBsZU5vdGVDbGVhckJ0bi5pbm5lclRleHQgPSBcIkNsZWFyXCI7XG4gICAgc2ltcGxlTm90ZUNsZWFyQnRuLnR5cGUgPSAncmVzZXQnO1xuICAgIHNpbXBsZU5vdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuZXh0Tm90ZSA9IG5ldyBGb3JtRGF0YShzaW1wbGVOb3RlRm9ybSk7XG4gICAgICAgIGxldCBuZXdOb3RlID0ge307XG4gICAgICAgIGlmIChuZXh0Tm90ZS5nZXQoJ3NpbXBsZU5vdGVUZXh0JykgIT0gJycpIHtcbiAgICAgICAgbmV4dE5vdGUuZm9yRWFjaCgodmFsdWUsa2V5KSA9PntcbiAgICAgICAgICAgIG5ld05vdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgbXlTaW1wbGVOb3Rlc1tzaW1wbGVOb3RlVGV4dC52YWx1ZV0gPSBuZXdOb3RlO1xuICAgICAgICBjb25zb2xlLmxvZyhteVNpbXBsZU5vdGVzKTtcbiAgICAgICAgc2ltcGxlTm90ZURpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2ltcGxlTm90ZURpdi5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdFbnRlciBhIHRpdGxlIGZvciB5b3VyIG5vdGUnKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuICAgIFxuICAgIC8qY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGUgbXlTaW1wbGVOb3Rlc1tzaW1wbGVOb3RlVGV4dC52YWx1ZV07XG4gICAgfSk7Ki9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbXBsZU5vdGVzTGlzdCgpIHtcbiAgICBteVByb2plY3RzLmlubmVySFRNTCA9ICcnO1xuICAgIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlOb3Rlc0hlYWRlcik7XG4gICAgbXlOb3Rlc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdteU5vdGVzSGVhZGVyJyk7XG4gICAgbXlOb3Rlc0hlYWRlci5pbm5lckhUTUwgPSAnTXkgTm90ZXMnO1xuICAgIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlOb3Rlc0xpc3QpO1xuICAgIG15Tm90ZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ215Tm90ZXNMaXN0Jyk7XG4gICAgbXlOb3Rlc0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LmtleXMobXlTaW1wbGVOb3RlcykpIHtcbiAgICAgICAgY29uc3QgbHN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG15Tm90ZXNMaXN0LmFwcGVuZENoaWxkKGxzdEl0ZW0pO1xuICAgICAgICBsc3RJdGVtLmlubmVySFRNTCA9IHZhbHVlOyAgICBcbiAgICAgICAgbHN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsc3RJdGVtJyk7XG4gICAgfVxufVxuXG5teU5vdGVzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7IC8vZXZlbnQgZGVsZWdhdGlvblxuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJsaS5sc3RJdGVtXCIpKSB7XG4gICAgICAgIGNyZWF0ZU5vdGVWaWV3KGV2ZW50KTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTm90ZVZpZXcoZXZlbnQpIHtcbiAgICBtYWluYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgbm90ZVZpZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlVmlld0Rpdi5jbGFzc0xpc3QuYWRkKCdub3RlVmlld0RpdicpO1xuICAgIG1haW5ib2FyZC5hcHBlbmRDaGlsZChub3RlVmlld0Rpdik7XG4gICAgY29uc3Qgbm90ZVZpZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG5vdGVWaWV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBub3RlVmlld0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5vdGVWaWV3SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJub3RlVmlld0hlYWRlclwiKTtcbiAgICBub3RlVmlld1RleHQuY2xhc3NMaXN0LmFkZCgnbm90ZVZpZXdUZXh0Jyk7XG4gICAgbm90ZVZpZXdEZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnbm90ZVZpZXdEZWxldGVCdG4nKTtcbiAgICBub3RlVmlld0RlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZSBOb3RlXCI7XG4gICAgbm90ZVZpZXdEaXYuYXBwZW5kQ2hpbGQobm90ZVZpZXdIZWFkZXIpO1xuICAgIG5vdGVWaWV3RGl2LmFwcGVuZENoaWxkKG5vdGVWaWV3VGV4dCk7XG4gICAgbm90ZVZpZXdEaXYuYXBwZW5kQ2hpbGQobm90ZVZpZXdEZWxldGVCdG4pO1xuICAgIG5vdGVWaWV3SGVhZGVyLmlubmVySFRNTCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAgbm90ZVZpZXdUZXh0LmlubmVySFRNTCA9IG15U2ltcGxlTm90ZXNbZXZlbnQudGFyZ2V0LmlubmVySFRNTF0uc2ltcGxlTm90ZURlc2NyaXB0aW9uO1xuICAgIG5vdGVWaWV3RGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRlbGV0ZSBteVNpbXBsZU5vdGVzW2V2ZW50LnRhcmdldC5pbm5lckhUTUxdO1xuICAgIH0pO1xufVxuXG5cbiAgICAvKmNvbnN0IHByb2plY3RQYXJhZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFBhcmFnci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0UGFyYWdyJyk7XG4gICAgcHJvamVjdFZpZXdEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFBhcmFncik7XG4gICAgcHJvamVjdFBhcmFnci5pbm5lclRleHQgPSBhbGxJbnN0YW5jZXNbZXZlbnQudGFyZ2V0LmlubmVySFRNTF0ucHJvamVjdERlc2NyaXB0aW9uO1xufSovIiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgcHJvamVjdER1ZURhdGUpIHtcbiAgICAgICAgaWYgKFByb2plY3QuZXhpc3RzKHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0EgcHJvamVjdCB3aXRoIG5hbWU6ICR7cHJvamVjdE5hbWV9IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcHJvamVjdCB3aXRoIG5hbWU6ICR7cHJvamVjdE5hbWV9IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9qZWN0RHVlRGF0ZSA9IHByb2plY3REdWVEYXRlO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgc3RhdGljIGV4aXN0aW5nTmFtZXMgPSBuZXcgU2V0KCk7XG5cbiAgICBzdGF0aWMgZXhpc3RzKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBQcm9qZWN0LmV4aXN0aW5nTmFtZXMuaGFzKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck5hbWUoKSB7XG4gICAgICAgIFByb2plY3QuZXhpc3RpbmdOYW1lcy5hZGQodGhpcy5wcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvKCkge1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gdGhpcy50b2Rvcy5maWx0ZXIoKG9iaikgPT4gb2JqLnJlbW92ZUl0ZW0gIT0gdHJ1ZSk7XG4gICAgICAgIHRoaXMudG9kb3MgPSBuZXdUb0RvO1xuICAgIH1cbn1cblxuY29uc3QgbWFpbmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluYm9hcmRcIik7XG5jb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15UHJvamVjdHMnKTtcbmNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY29uc3QgY29udGFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbmNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgbXlQcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBkZWxldGVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBkZWxldGVQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IGRlbGV0ZVByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgbWFpbmJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbmJvYXJkLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGNvbnRhaW5EaXYpO1xuICAgIGNvbnRhaW5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0TmFtZScpOyAvL25hbWVcbiAgICBjb250YWluRGl2LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlRGl2Jyk7XG4gICAgY29udGFpbkRpdi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7IC8vbmFtZVxuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICBjb250YWluRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgY29udGFpbkRpdi5hcHBlbmRDaGlsZChjbGVhckJ0bik7XG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0RGl2Jyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEZvcm0nKTtcbiAgICBjb250YWluRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5EaXYnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgIHByb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IG5hbWVcIjtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uJyk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0RGVzY3JpcHRpb24nKTsgLy9uYW1lXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IGRlc2NyaXB0aW9uXCI7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ0bicpO1xuICAgIGNsZWFyQnRuLmNsYXNzTGlzdC5hZGQoJ2NsZWFyQnRuJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gXCJTYXZlXCI7XG4gICAgY2xlYXJCdG4uaW5uZXJIVE1MID0gJ0NsZWFyJ1xuICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuZXh0UHJvamVjdCA9IG5ldyBGb3JtRGF0YShuZXdQcm9qZWN0Rm9ybSk7XG4gICAgICAgIC8qbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXh0UHJvamVjdC5nZXQoJ3Byb2plY3ROYW1lJyksIFxuICAgICAgICAgICAgbmV4dFByb2plY3QuZ2V0KCdwcm9qZWN0RGVzY3JpcHRpb24nKSwgXG4gICAgICAgICAgICBuZXh0UHJvamVjdC5nZXQoJ2R1ZURhdGUnKSk7XG4gICAgICAgIG5ld1Byb2plY3QucmVnaXN0ZXJOYW1lKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QucHJvamVjdE5hbWUsIG5ld1Byb2plY3QucHJvamVjdER1ZURhdGUpOyovXG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gbmV4dFByb2plY3QuZ2V0KCdwcm9qZWN0TmFtZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qTmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvakluZm8nKSkgfHwge30gO1xuICAgICAgICBwcm9qRGF0YVtwcm9qTmFtZV0gPSB7J3Byb2plY3ROYW1lJzogJycsICdwcm9qZWN0RGVzY3JpcHRpb24nOiAnJywgJ3Byb2plY3REdWVEYXRlJzogJycsICd0b2Rvcyc6ICcnfTtcbiAgICAgICAgcHJvakRhdGFbcHJvak5hbWVdWydwcm9qZWN0TmFtZSddID0gbmV4dFByb2plY3QuZ2V0KCdwcm9qZWN0TmFtZScpO1xuICAgICAgICBwcm9qRGF0YVtwcm9qTmFtZV1bJ3Byb2plY3REZXNjcmlwdGlvbiddID0gbmV4dFByb2plY3QuZ2V0KCdwcm9qZWN0RGVzY3JpcHRpb24nKTtcbiAgICAgICAgcHJvakRhdGFbcHJvak5hbWVdWydwcm9qZWN0RHVlRGF0ZSddID0gbmV4dFByb2plY3QuZ2V0KCdkdWVEYXRlJyk7XG4gICAgICAgIHByb2pEYXRhW3Byb2pOYW1lXVsndG9kb3MnXSA9IFtdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvakluZm8nLCBKU09OLnN0cmluZ2lmeShwcm9qRGF0YSkpO1xuICAgICAgICBhbGVydCgnUHJvamVjdCBTYXZlZCcpO1xuICAgICAgICBtYWluYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgfSk7XG59XG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1haW5ib2FyZC5pbm5lckhUTUwgPSAnJztcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0xzdCgpIHtcbiAgICBteVByb2plY3RzLmlubmVySFRNTCA9ICcnO1xuICAgIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlQcm9qZWN0c0hlYWRlcik7XG4gICAgbXlQcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdteVByb2plY3RzSGVhZGVyJyk7XG4gICAgbXlQcm9qZWN0c0hlYWRlci5pbm5lckhUTUwgPSBcIk15IFByb2plY3RzXCI7XG4gICAgY29uc3QgbXlQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlQcm9qZWN0c0xpc3QpO1xuICAgIG15UHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ215UHJvamVjdExpc3QnKTtcbiAgICBjb25zdCBwcm9qRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pJbmZvJykpIHx8IHt9O1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKHByb2pEYXRhKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgY29uc3QgbHN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG15UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGxzdEl0ZW0pO1xuICAgICAgICBsc3RJdGVtLmlubmVySFRNTCA9IGFycltpXTsgICAgXG4gICAgICAgIGxzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbHN0SXRlbScpO1xuICAgIH1cbiAgICBteVByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7IC8vZXZlbnQgZGVsZWdhdGlvblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5tYXRjaGVzKFwibGkubHN0SXRlbVwiKSkge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdFZpZXcoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RWaWV3KGV2ZW50KSB7XG4gICAgbWFpbmJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvakluZm8nKSkgfHwge307XG4gICAgY29uc3QgcHJvamVjdFZpZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Vmlld0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Vmlld0RpdicpO1xuICAgIG1haW5ib2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Vmlld0Rpdik7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlclwiKTtcbiAgICBwcm9qZWN0Vmlld0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAgY29uc3QgcHJvamVjdFBhcmFnciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0UGFyYWdyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYXJhZ3InKTtcbiAgICBwcm9qZWN0Vmlld0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0UGFyYWdyKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qRGF0YVtldmVudC50YXJnZXQuaW5uZXJIVE1MXSk7XG4gICAgcHJvamVjdFBhcmFnci5pbm5lclRleHQgPSBwcm9qRGF0YVtldmVudC50YXJnZXQuaW5uZXJIVE1MXS5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgY29uc3QgZHVlRGF0ZVZpZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlVmlld0Rpdi5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlVmlld0RpdicpO1xuICAgIHByb2plY3RWaWV3RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVWaWV3RGl2KTtcbiAgICBjb25zdCBkdWVEYXRlVmlld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlVmlld0xhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGU6XCI7XG4gICAgZHVlRGF0ZVZpZXdEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVZpZXdMYWJlbCk7XG4gICAgY29uc3QgZHVlRGF0ZVZpZXdQYXJhZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZVZpZXdQYXJhZ3IuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZVZpZXdQYXJhZ3InKTtcbiAgICBkdWVEYXRlVmlld0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlVmlld1BhcmFncik7XG4gICAgZHVlRGF0ZVZpZXdQYXJhZ3IuaW5uZXJUZXh0ID0gcHJvakRhdGFbZXZlbnQudGFyZ2V0LmlubmVySFRNTF0ucHJvamVjdER1ZURhdGU7XG4gICAgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkVG9Eb0J0bicpO1xuICAgIHByb2plY3RWaWV3RGl2LmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pO1xuICAgIGFkZFRvRG9CdG4uaW5uZXJIVE1MID0gJ0FkZCBuZXcgVG9Ebyc7XG4gICAgY29uc3QgdXBkYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHVwZGF0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgndXBkYXRlUHJvamVjdEJ0bicpO1xuICAgIHByb2plY3RWaWV3RGl2LmFwcGVuZENoaWxkKHVwZGF0ZVByb2plY3RCdG4pO1xuICAgIHVwZGF0ZVByb2plY3RCdG4uaW5uZXJIVE1MID0gJ1VwZGF0ZSBQcm9qZWN0JztcbiAgICBpZiAocHJvakRhdGFbZXZlbnQudGFyZ2V0LmlubmVySFRNTF0udG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjcmVhdGVUb2Rvc1ZpZXdEaXYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCk7XG4gICAgfSBcbiAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvRG9Gb3JtRGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjcmVhdGVOZXdUb0RvRm9ybShldmVudC50YXJnZXQuaW5uZXJIVE1MKTtcbiAgICB9KTtcbiAgICB1cGRhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1haW5ib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdXBkYXRlUHJvamVjdChldmVudC50YXJnZXQuaW5uZXJIVE1MKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgbWFpbmJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbmJvYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3REaXYpO1xuICAgIGRlbGV0ZVByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdERpdicpO1xuICAgIGRlbGV0ZVByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEhlYWRlcicpO1xuICAgIGRlbGV0ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEhlYWRlcik7XG4gICAgZGVsZXRlUHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSAnQ2hvb3NlIHByb2plY3QgdG8gZGVsZXRlOic7XG4gICAgZGVsZXRlUHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0TGlzdCk7XG4gICAgZGVsZXRlUHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdExpc3QnKTtcbiAgICB3aGlsZSAoZGVsZXRlUHJvamVjdExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBkZWxldGVQcm9qZWN0TGlzdC5yZW1vdmUoZGVsZXRlUHJvamVjdExpc3QubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGNvbnN0IHByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvakluZm8nKSkgfHwge307XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMocHJvakRhdGEpO1xuICAgIGFyci51bnNoaWZ0KCdTZWxlY3QgUHJvamVjdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdFNlbGVjdGlvbik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RTZWxlY3Rpb24uaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgICAgICBkZWxldGVQcm9qZWN0U2VsZWN0aW9uLnZhbHVlID0gYXJyW2ldO1xuICAgIH1cbiAgICBkZWxldGVQcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCBwcm9qRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pJbmZvJykpIHx8IHt9O1xuICAgICAgICBkZWxldGUgcHJvakRhdGFbZXZlbnQudGFyZ2V0LnZhbHVlXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pJbmZvJywgSlNPTi5zdHJpbmdpZnkocHJvakRhdGEpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChyb290UHIpIHtcbiAgICAvL3VzZSB0aGUgc2FtZSBsYXlvdXQgYXMgY3JlYXRlIHByb2plY3RcbiAgICAvL3VzZSBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG59XG5cbmNvbnN0IHRvRG9Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG9Gb3JtKHJvb3RQcikge1xuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHNpbXBsZU5vdGVUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm1UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBmb3JtVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZm9ybURlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybURlc2NyaXB0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG1haW5ib2FyZC5hcHBlbmRDaGlsZCh0b0RvRm9ybURpdik7XG4gICAgdG9Eb0Zvcm1EaXYuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm1EaXYnKTtcbiAgICB0b0RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG4gICAgdG9Eb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzaW1wbGVOb3RlVGl0bGVEaXYpO1xuICAgIHNpbXBsZU5vdGVUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdzaW1wbGVOb3RlVGl0bGVEaXYnKTtcbiAgICBzaW1wbGVOb3RlVGl0bGVEaXYuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlTGFiZWwpO1xuICAgIGZvcm1UaXRsZUxhYmVsLmlubmVySFRNTCA9IFwiVGl0bGU6XCI7XG4gICAgc2ltcGxlTm90ZVRpdGxlRGl2LmFwcGVuZENoaWxkKGZvcm1UaXRsZUlucHV0KTtcbiAgICBmb3JtVGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGZvcm1UaXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnOyAvL25hbWVcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRGVzY3JpcHRpb25EaXYpO1xuICAgIGZvcm1EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGVzY3JpcHRpb25EaXYnKTtcbiAgICBmb3JtRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZm9ybURlc2NyaXB0aW9uVGV4dEFyZWEpO1xuICAgIGZvcm1EZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpOyAvL25hbWVcbiAgICBmb3JtRGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNScpO1xuICAgIGZvcm1EZXNjcmlwdGlvblRleHRBcmVhLnBsYWNlaG9sZGVyID0gJ0VudGVyIGRlc2NyaXB0aW9uJztcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlRGl2Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGU6XCI7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7IC8vbmFtZVxuICAgIGNvbnN0IG5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNEaXYpO1xuICAgIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVzRGl2Jyk7XG4gICAgY29uc3Qgbm90ZXNUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbm90ZXNEaXYuYXBwZW5kQ2hpbGQobm90ZXNUZXh0QXJlYSk7XG4gICAgbm90ZXNUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbm90ZXMnKTsgLy9uYW1lXG4gICAgbm90ZXNUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMycpO1xuICAgIG5vdGVzVGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnRW50ZXIgbm90ZXMnO1xuICAgIC8vcHJpb3JpdHkgRGl2OlxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5RGl2Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OlwiO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpOyAvL25hbWVcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgIG9wdGlvbjEuaW5uZXJIVE1MID0gJ0xvdyc7XG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgIG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICBvcHRpb24yLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24zKTtcbiAgICBvcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgIG9wdGlvbjMuaW5uZXJIVE1MID0gJ0hpZ2gnO1xuICAgIGNvbnN0IHRvRG9zdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc3VibWl0QnRuKTtcbiAgICB0b0Rvc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvRG9zdWJtaXRCdG4nKTtcbiAgICB0b0Rvc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICB0b0Rvc3VibWl0QnRuLmlubmVySFRNTCA9IFwiU2F2ZVwiO1xuICAgIGNvbnN0IHRvRG9jbGVhckJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9jbGVhckJ0bkRpdik7XG4gICAgdG9Eb2NsZWFyQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9jbGVhckJ0bkRpdicpO1xuICAgIGNvbnN0IHRvRG9jbGVhckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvRG9jbGVhckJ0bkRpdi5hcHBlbmRDaGlsZCh0b0RvY2xlYXJCdG4pO1xuICAgIHRvRG9jbGVhckJ0bi5jbGFzc0xpc3QuYWRkKCd0b0RvY2xlYXJCdG4nKTtcbiAgICB0b0RvY2xlYXJCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIHRvRG9jbGVhckJ0bi5pbm5lckhUTUwgPSAnQ2xlYXInO1xuICAgIHRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3RQcik7XG4gICAgICAgIGxldCBuZXh0VG9EbyA9IG5ldyBGb3JtRGF0YSh0b0RvRm9ybSk7XG4gICAgICAgIGxldCBuZXdUb0RvID0ge1xuICAgICAgICAgICAgdGl0bGU6bmV4dFRvRG8uZ2V0KCd0aXRsZScpLCBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXh0VG9Eby5nZXQoJ2Rlc2NyaXB0aW9uJyksIFxuICAgICAgICAgICAgZHVlRGF0ZTogbmV4dFRvRG8uZ2V0KCdkdWVEYXRlJyksIFxuICAgICAgICAgICAgbm90ZXM6IG5leHRUb0RvLmdldCgnbm90ZXMnKSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBuZXh0VG9Eby5nZXQoJ3ByaW9yaXR5JylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9qRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pJbmZvJykpIHx8IHt9O1xuICAgICAgICBwcm9qRGF0YVtyb290UHJdLnRvZG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qSW5mbycsIEpTT04uc3RyaW5naWZ5KHByb2pEYXRhKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2pEYXRhKTtcbiAgICAgICAgdG9Eb0Zvcm1EaXYucmVtb3ZlKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHRvZG9zVmlld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZnVuY3Rpb24gY3JlYXRlVG9kb3NWaWV3RGl2KHJvb3RQcikge1xuICAgIHRvZG9zVmlld0Rpdi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluYm9hcmQuYXBwZW5kQ2hpbGQodG9kb3NWaWV3RGl2KTtcbiAgICB0b2Rvc1ZpZXdEaXYuY2xhc3NMaXN0LmFkZCgndG9kb3NWaWV3RGl2Jyk7XG4gICAgY29uc3QgdG9kb3NWaWV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0b2Rvc1ZpZXdIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb3NWaWV3SGVhZGVyJyk7XG4gICAgdG9kb3NWaWV3SGVhZGVyLmlubmVySFRNTCA9IFwiU2F2ZWQgXFxcInRvZG9zXFxcIiBmb3IgdGhpcyBwcm9qZWN0OlwiO1xuICAgIHRvZG9zVmlld0Rpdi5hcHBlbmRDaGlsZCh0b2Rvc1ZpZXdIZWFkZXIpO1xuICAgIGNvbnN0IHByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvakluZm8nKSkgfHwge307XG4gICAgY29uc29sZS5sb2cocHJvakRhdGFbcm9vdFByXS50b2Rvcy5sZW5ndGgpO1xuICAgIGNvbnN0IHRvZG9zVmlld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvZG9zVmlld0Rpdi5hcHBlbmRDaGlsZCh0b2Rvc1ZpZXdMaXN0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2pEYXRhW3Jvb3RQcl0udG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbHN0VG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0b2Rvc1ZpZXdMaXN0LmFwcGVuZENoaWxkKGxzdFRvZG9JdGVtKTtcbiAgICAgICAgbHN0VG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnbHN0VG9kb0l0ZW0nKTtcbiAgICAgICAgbHN0VG9kb0l0ZW0uaW5uZXJIVE1MID0gYCR7cHJvakRhdGFbcm9vdFByXS50b2Rvc1tpXS50aXRsZX0sIGR1ZSBkYXRlOiAke3Byb2pEYXRhW3Jvb3RQcl0udG9kb3NbaV0uZHVlRGF0ZX1gO1xuICAgIH1cbn1cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbm90ZS5jc3NcIjtcbmltcG9ydCBcIi4vcHJvamVjdC5jc3NcIjtcbmltcG9ydCBcIi4vdG9kby5jc3NcIjtcblxuaW1wb3J0IHtjcmVhdGVOb3RlLCBjcmVhdGVTaW1wbGVOb3Rlc0xpc3R9IGZyb20gXCIuL25vdGUuanNcIjtcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCwgY3JlYXRlUHJvamVjdHNMc3QsIGRlbGV0ZVByb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuXG5jb25zdCBzaW1wbGVOb3RlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbXBsZU5vdGVCdG4nKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEJ0bicpO1xuY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVQcm9qZWN0QnRuJyk7XG5jb25zdCB2aWV3UHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1Byb2plY3RzQnRuJylcblxuc2ltcGxlTm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNyZWF0ZU5vdGUoKTtcbn0pO1xuXG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY3JlYXRlUHJvamVjdCgpO1xufSk7XG5cbnZpZXdQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNyZWF0ZVByb2plY3RzTHN0KCk7XG59KTtcblxudmlld05vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY3JlYXRlU2ltcGxlTm90ZXNMaXN0KCk7XG59KTtcblxuZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZVByb2plY3QoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9