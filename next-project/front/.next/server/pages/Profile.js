"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Profile";
exports.ids = ["pages/Profile"];
exports.modules = {

/***/ "./pages/Profile.js":
/*!**************************!*\
  !*** ./pages/Profile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Light = ({ room , on , toggle  })=>{\n    console.log({\n        room,\n        on\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggle,\n        children: [\n            room,\n            \" \",\n            on ? \"\\uD83D\\uDCA1\" : \"\\u2B1B\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\nconst Profile = ()=>{\n    const { 0: masterOn , 1: setMasterOn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: kitchenOn , 1: setKitchenOn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: bathOn , 1: setBathOn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMaster = ()=>setMasterOn(!masterOn)\n    ;\n    const toggleKitchen = ()=>setKitchenOn(!kitchenOn)\n    ;\n    const toggleBath = ()=>setBathOn(!bathOn)\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"\\uD504\\uB85C\\uD544\"\n                }, void 0, false, {\n                    fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                room: \"\\uCE68\\uC2E4\",\n                on: masterOn,\n                toggle: toggleMaster\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                room: \"\\uC8FC\\uBC29\",\n                on: kitchenOn,\n                toggle: toggleKitchen\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                room: \"\\uC695\\uC2E4\",\n                on: bathOn,\n                toggle: toggleBath\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"\\uB0B4 \\uD504\\uB85C\\uD544\"\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/pages/Profile.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFxRDtBQUN4QjtBQUU3QixNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUVDLEVBQUUsR0FBRUMsTUFBTSxHQUFFLEdBQUs7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQUVKLElBQUk7UUFBRUMsRUFBRTtLQUFFLENBQUMsQ0FBQztJQUUxQixxQkFDRSw4REFBQ0ksUUFBTTtRQUFDQyxPQUFPLEVBQUVKLE1BQU07O1lBQ3BCRixJQUFJO1lBQUMsR0FBQztZQUFDQyxFQUFFLEdBQUcsY0FBRyxHQUFNLFFBQUc7Ozs7OztpQkFDYixDQUNkO0NBQ0g7QUFFRCxNQUFNTSxPQUFPLEdBQUcsSUFBTTtJQUNwQixNQUFNLEVBZFIsR0FjU0MsUUFBUSxHQWRqQixHQWNtQkMsV0FBVyxNQUFJYiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLEVBZlIsR0FlU2MsU0FBUyxHQWZsQixHQWVvQkMsWUFBWSxNQUFJZiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUNqRCxNQUFNLEVBaEJSLEdBZ0JTZ0IsTUFBTSxHQWhCZixHQWdCaUJDLFNBQVMsTUFBSWpCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRTNDLE1BQU1rQixZQUFZLEdBQUcsSUFBTUwsV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztJQUFDO0lBQ2xELE1BQU1PLGFBQWEsR0FBRyxJQUFNSixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO0lBQUM7SUFDckQsTUFBTU0sVUFBVSxHQUFHLElBQU1ILFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7SUFBQztJQUU1QyxxQkFDRSw4REFBQ0ssS0FBRzs7MEJBQ0YsOERBQUNuQixrREFBSTswQkFDSCw0RUFBQ29CLE9BQUs7OEJBQUMsb0JBQUc7Ozs7OzZCQUFjOzs7Ozt5QkFDYjswQkFDYiw4REFBQ25CLEtBQUs7Z0JBQUNDLElBQUksRUFBQyxjQUFJO2dCQUFLQyxFQUFFLEVBQUVPLFFBQVE7Z0JBQUVOLE1BQU0sRUFBRVksWUFBWTs7Ozs7eUJBQUk7MEJBQ3ZELDhEQUFIZixLQUFLO2dCQUFDQyxJQUFJLEVBQUMsY0FBSTtnQkFBS0MsRUFBRSxFQUFFUyxTQUFTO2dCQUFFUixNQUFNLEVBQUVhLGFBQWE7Ozs7O3lCQUFJOzBCQUN6RCw4REFBSGhCLEtBQUs7Z0JBQUNDLElBQUksRUFBQyxjQUFJO2dCQUFLQyxFQUFFLEVBQUVXLE1BQU07Z0JBQUVWLE1BQU0sRUFBRWMsVUFBVTs7Ozs7eUJBQUk7MEJBQ25ELDhEQUFIQyxLQUFHOzBCQUFDLDJCQUFLOzs7Ozt5QkFBTTs7Ozs7O2lCQUNaLENBQ047Q0FDSDtBQUVELGlFQUFlVixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0LXJlZHV4Ly4vcGFnZXMvUHJvZmlsZS5qcz9iMjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgTGlnaHQgPSAoeyByb29tLCBvbiwgdG9nZ2xlIH0pID0+IHtcbiAgY29uc29sZS5sb2coeyByb29tLCBvbiB9KTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlfT5cbiAgICAgIHtyb29tfSB7b24gPyBcIvCfkqFcIiA6IFwi4qybXCJ9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBbbWFzdGVyT24sIHNldE1hc3Rlck9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2tpdGNoZW5Pbiwgc2V0S2l0Y2hlbk9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhdGhPbiwgc2V0QmF0aE9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNYXN0ZXIgPSAoKSA9PiBzZXRNYXN0ZXJPbighbWFzdGVyT24pO1xuICBjb25zdCB0b2dnbGVLaXRjaGVuID0gKCkgPT4gc2V0S2l0Y2hlbk9uKCFraXRjaGVuT24pO1xuICBjb25zdCB0b2dnbGVCYXRoID0gKCkgPT4gc2V0QmF0aE9uKCFiYXRoT24pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+7ZSE66Gc7ZWEPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMaWdodCByb29tPVwi7Lmo7IukXCIgb249e21hc3Rlck9ufSB0b2dnbGU9e3RvZ2dsZU1hc3Rlcn0gLz5cbiAgICAgIDxMaWdodCByb29tPVwi7KO867CpXCIgb249e2tpdGNoZW5Pbn0gdG9nZ2xlPXt0b2dnbGVLaXRjaGVufSAvPlxuICAgICAgPExpZ2h0IHJvb209XCLsmpXsi6RcIiBvbj17YmF0aE9ufSB0b2dnbGU9e3RvZ2dsZUJhdGh9IC8+XG4gICAgICA8ZGl2PuuCtCDtlITroZztlYQ8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiSGVhZCIsIkxpZ2h0Iiwicm9vbSIsIm9uIiwidG9nZ2xlIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJQcm9maWxlIiwibWFzdGVyT24iLCJzZXRNYXN0ZXJPbiIsImtpdGNoZW5PbiIsInNldEtpdGNoZW5PbiIsImJhdGhPbiIsInNldEJhdGhPbiIsInRvZ2dsZU1hc3RlciIsInRvZ2dsZUtpdGNoZW4iLCJ0b2dnbGVCYXRoIiwiZGl2IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Profile.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Profile.js"));
module.exports = __webpack_exports__;

})();