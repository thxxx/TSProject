"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Main/PostImages.js":
/*!***************************************!*\
  !*** ./components/Main/PostImages.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useToggle */ \"./components/hooks/useToggle.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar PostImages = function(param) {\n    var images = param.images;\n    _s();\n    var ref = _slicedToArray((0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), 2), imageZoom = ref[0], handleImageZoom = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: images[0].src,\n                onClick: handleImageZoom\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/components/Main/PostImages.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            images[1] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: images[1].src,\n                onClick: handleImageZoom\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/components/Main/PostImages.js\",\n                lineNumber: 12,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gimhojin/Desktop/JS/TS/next-project/front/components/Main/PostImages.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(PostImages, \"mU/9BWzYvoWto7wNAQg1+fCPgaE=\", false, function() {\n    return [\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = PostImages;\nPostImages.PropTypes = {\n    images: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vUG9zdEltYWdlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFDUTtBQUNOOztBQUVyQyxJQUFNSyxVQUFVLEdBQUcsZ0JBQWdCO1FBQWJDLE1BQU0sU0FBTkEsTUFBTTs7SUFDMUIsSUFBcUNILEdBQVcsa0JBQVhBLDREQUFTLEVBQUUsTUFBekNJLFNBQVMsR0FBcUJKLEdBQVcsR0FBaEMsRUFBRUssZUFBZSxHQUFJTCxHQUFXLEdBQWY7SUFFakMscUJBQ0UsOERBQUNNLEtBQUc7OzBCQUNGLDhEQUFDQyxLQUFHO2dCQUFDQyxHQUFHLEVBQUVMLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssR0FBRztnQkFBRUMsT0FBTyxFQUFFSixlQUFlOzs7OztxQkFBSTtZQUNwREYsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQkFBSSw4REFBQ0ksS0FBRztnQkFBQ0MsR0FBRyxFQUFFTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNLLEdBQUc7Z0JBQUVDLE9BQU8sRUFBRUosZUFBZTs7Ozs7cUJBQUk7Ozs7OzthQUMvRCxDQUNOO0NBQ0g7R0FUS0gsVUFBVTs7UUFDdUJGLHdEQUFTOzs7QUFEMUNFLEtBQUFBLFVBQVU7QUFXaEJBLFVBQVUsQ0FBQ0gsU0FBUyxHQUFHO0lBQ3JCSSxNQUFNLEVBQUVKLHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQyxDQUFDYSxVQUFVO0NBQ3ZELENBQUM7QUFFRiwrREFBZVYsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbi9Qb3N0SW1hZ2VzLmpzPzRiNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3QgW2ltYWdlWm9vbSwgaGFuZGxlSW1hZ2Vab29tXSA9IHVzZVRvZ2dsZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtoYW5kbGVJbWFnZVpvb219IC8+XG4gICAgICB7aW1hZ2VzWzFdICYmIDxpbWcgc3JjPXtpbWFnZXNbMV0uc3JjfSBvbkNsaWNrPXtoYW5kbGVJbWFnZVpvb219IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdEltYWdlcy5Qcm9wVHlwZXMgPSB7XG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsIlByb3BUeXBlcyIsInVzZVRvZ2dsZSIsInN0eWxlZCIsIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJpbWFnZVpvb20iLCJoYW5kbGVJbWFnZVpvb20iLCJkaXYiLCJpbWciLCJzcmMiLCJvbkNsaWNrIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main/PostImages.js\n");

/***/ })

});