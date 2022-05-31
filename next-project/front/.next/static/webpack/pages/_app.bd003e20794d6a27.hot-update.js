"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var _sagas_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas/index */ \"./sagas/index.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n// import thunkMiddleware from \"redux-thunk\";\nvar loggerMiddleware = function(param) {\n    var dispatch = param.dispatch, getState = param.getState;\n    return function(next) {\n        return function(action) {\n            // 액션을 실행하기 전에 콘솔로그를 한번 찍어주는 간단한 미들웨어.\n            console.log(action, \"\\uBBF8\\uB4E4\\uC6E8\\uC5B4\");\n            return next(action);\n        };\n    };\n};\nvar configureStores = function() {\n    var sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var middlewares = [\n        sagaMiddleware,\n        loggerMiddleware\n    ]; // 여기다 saga나 thunk를 넣는다.\n    // 그럼 싸가랑 떵크가 뭐지??\n    var enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)(redux__WEBPACK_IMPORTED_MODULE_6__.applyMiddleware.apply(void 0, _toConsumableArray(middlewares)));\n    var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({\n        reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        enhancer: enhancer\n    });\n    sagaMiddleware.run(_sagas_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    return store;\n};\nvar wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(configureStores, {\n    debug: \"development\" === \"development\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFDQztBQUNqQjtBQUNlO0FBQ2M7QUFDakI7QUFFUjtBQUN0Qyw2Q0FBNkM7QUFFN0MsSUFBTVMsZ0JBQWdCLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtXQUFPLFNBQUNDLElBQUk7ZUFBSyxTQUFDQyxNQUFNLEVBQUs7WUFDekU7WUFDc0RDLE9BQS9DLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxFQUFFLDBCQUFNLENBQVMsQ0FBQztZQUU1QixPQUFERCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO0tBQUE7Q0FBQTtBQUVELElBQU1HLGVBQWUsR0FBRyxXQUFNO0lBQzVCLElBQU1DLGNBQWMsR0FBR1Ysc0RBQW9CLEVBQUU7SUFDN0MsSUFBTVcsV0FBVyxHQUFHO1FBQUNELGNBQWM7UUFBRVIsZ0JBQWdCO0tBQUMsRUFBRTtJQUN4QztJQUVoQixJQUFNVSxRQUFRLEdBQ1pDLE1BQXFDLEdBQ2pDZixDQUF3QyxHQUN4Q0MsNkVBQW1CLENBQUNGLHdEQUErQixDQUEvQkEsS0FBQUEsQ0FBZSxFQUFDLG1CQUFHYyxXQUFXLENBQVhBLENBQVksQ0FBQztJQUUxRCxJQUFNRyxLQUFLLEdBQUdwQixnRUFBYyxDQUFDO1FBQUVFLE9BQU8sRUFBUEEsaURBQU87UUFBRWdCLFFBQVEsRUFBUkEsUUFBUTtLQUFFLENBQUM7SUFFbkRGLGNBQWMsQ0FBQ0ssR0FBRyxDQUFDZCxvREFBUSxDQUFDLENBQUM7SUFFN0IsT0FBT2EsS0FBSyxDQUFDO0NBQ2Q7QUFFRCxJQUFNRSxPQUFPLEdBQUdyQixpRUFBYSxDQUFDYyxlQUFlLEVBQUU7SUFDN0NRLEtBQUssRUFBRUosYUFwQ0ksS0FvQ3FCLGFBQWE7Q0FDOUMsQ0FBQztBQUVGLCtEQUFlRyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanM/ZjIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcblxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhcy9pbmRleFwiO1xuLy8gaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAvLyDslaHshZjsnYQg7Iuk7ZaJ7ZWY6riwIOyghOyXkCDsvZjshpTroZzqt7jrpbwg7ZWc67KIIOywjeyWtOyjvOuKlCDqsITri6jtlZwg66+465Ok7Juo7Ja0LlxuICBjb25zb2xlLmxvZyhhY3Rpb24sIFwi66+465Ok7Juo7Ja0XCIpO1xuXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XG59O1xuXG5jb25zdCBjb25maWd1cmVTdG9yZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdOyAvLyDsl6zquLDri6Qgc2FnYeuCmCB0aHVua+ulvCDrhKPripTri6QuXG4gIC8vIOq3uOufvCDsi7jqsIDrnpEg65a17YGs6rCAIOutkOyngD8/XG5cbiAgY29uc3QgZW5oYW5jZXIgPVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7IHJlZHVjZXIsIGVuaGFuY2VyIH0pO1xuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmVzLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJyZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJvb3RTYWdhIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlcyIsInNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsInByb2Nlc3MiLCJzdG9yZSIsInJ1biIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ })

});