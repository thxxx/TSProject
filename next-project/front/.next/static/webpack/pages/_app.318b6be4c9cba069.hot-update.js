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

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: \"\\uC81C\\uB85C\\uCD08\"\n            },\n            content: \" \\uCCAB \\uBC88\\uC9F8 \\uAC8C\\uC2DC\\uAE00 #\\uD574\\uC2DC\\uD0DC\\uADF8 #\\uCFE0\\uCFE0\",\n            Images: [\n                {\n                    src: \"https://imgnews.pstatic.net/image/076/2022/05/25/2022052601002069400139271_20220525161103688.jpg?type=w647\"\n                },\n                {\n                    src: \"https://imgnews.pstatic.net/image/421/2022/05/25/0006116775_001_20220525152301703.jpg?type=w647\"\n                },\n                {\n                    src: \"https://imgnews.pstatic.net/image/421/2022/05/25/0006116775_002_20220525152301876.jpg?type=w647\"\n                }, \n            ],\n            Comments: [\n                {\n                    User: {\n                        nickname: \"nero\"\n                    },\n                    content: \"\\uCF58\\uD14C\\uC758 \\uBC31\\uC4F0\\uB9AC\\uC804\\uC220\"\n                },\n                {\n                    User: {\n                        nickname: \"SON7\"\n                    },\n                    content: \"\\uC190\\uD765\\uBBFC \\uADC0\\uAD6D\"\n                },\n                {\n                    User: {\n                        nickname: \"\\u3134NOS\"\n                    },\n                    content: \"23\\uACE8 \\uC744 \\uB123\\uC5C8\\uC2B5 \\uB2C8\\uB2E4!!\"\n                }, \n            ]\n        }, \n    ],\n    imagPaths: [],\n    postAdded: false\n};\nvar ADD_POST = \"ADD_POST\";\nvar addPost = {\n    type: ADD_POST\n};\nvar dummyPost = {\n    id: 2,\n    content: \"\\uB354\\uBBF8\\uB370\\uC774\\uD130\\uC785\\uB2C8\\uB2E4.\",\n    User: {\n        id: 1,\n        nickname: \"\\uAE40\\uD638\\uC9C4\"\n    },\n    Images: [],\n    Comments: []\n};\nvar reducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST:\n            return _objectSpread({}, state, {\n                mainPosts: [\n                    dummyPost\n                ].concat(_toConsumableArray(state.mainPosts)),\n                postAdded: true\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0lBQzFCQyxTQUFTLEVBQUU7UUFDVDtZQUNFQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxJQUFJLEVBQUU7Z0JBQ0pELEVBQUUsRUFBRSxDQUFDO2dCQUNMRSxRQUFRLEVBQUUsb0JBQUs7YUFDVjtZQUNQQyxPQUFPLEVBQUUsaUZBQXFCO1lBQ05DLE1BQWxCLEVBQUU7Z0JBQ047b0JBQ0VDLEdBQUcsRUFDRCw0R0FBNEc7aUJBQy9HO2dCQUNEO29CQUNFQSxHQUFHLEVBQ0QsaUdBQWlHO2lCQUNwRztnQkFDRDtvQkFDRUEsR0FBRyxFQUNELGlHQUFpRztpQkFDcEc7YUFDRjtZQUNEQyxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0VMLElBQUksRUFBRTt3QkFDSkMsUUFBUSxFQUFFLE1BQU07cUJBQ2pCO29CQUNEQyxPQUFPLEVBQUUsbURBQVc7aUJBQ0w7Z0JBQ2pCO29CQUNFRixJQUFJLEVBQUU7d0JBQ0pDLFFBQVEsRUFBRSxNQUFNO3FCQUNqQjtvQkFDREMsT0FBTyxFQUFFLGlDQUFRO2lCQUNSO2dCQUNYO29CQUNFRixJQUFJLEVBQUU7d0JBQ0pDLFFBQVEsRUFBRSxXQUFNO3FCQUNmO29CQUNIQyxPQUFPLEVBQUUsbURBQWdCO2lCQUNaO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNESSxTQUFTLEVBQUUsRUFBRTtJQUNiQyxTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBRUYsSUFBTUMsUUFBUSxHQUFHLFVBQVU7QUFFcEIsSUFBTUMsT0FBTyxHQUFHO0lBQ3JCQyxJQUFJLEVBQUVGLFFBQVE7Q0FDZixDQUFDO0FBRUYsSUFBTUcsU0FBUyxHQUFHO0lBQ2hCWixFQUFFLEVBQUUsQ0FBQztJQUNMRyxPQUFPLEVBQUUsbURBQVc7SUFDSkYsSUFBWixFQUFFO1FBQ0pELEVBQUUsRUFBRSxDQUFDO1FBQ0xFLFFBQVEsRUFBRSxvQkFBSztLQUNoQjtJQUNERSxNQUFNLEVBQUUsRUFBRTtJQUNWRSxRQUFRLEVBQUUsRUFBRTtDQUNiO0FBRUQsSUFBTU8sT0FBTyxHQUFHLFdBQWtDO1FBQWpDQyxLQUFLLG9FQUFHaEIsWUFBWSxFQUFFaUIsTUFBTTtJQUMzQyxPQUFRQSxNQUFNLENBQUNKLElBQUk7UUFDakIsS0FBS0YsUUFBUTtZQUNYLE9BQU8sa0JBQ0ZLLEtBQUs7Z0JBQ1JmLFNBQVMsRUFBRTtvQkFBQ2EsU0FBUztpQkFBcUIsQ0FBL0IsTUFBK0IsQ0FBbkIsbUJBQUdFLEtBQUssQ0FBQ2YsU0FBUyxDQUFmZSxDQUFnQjtnQkFDMUNOLFNBQVMsRUFBRSxJQUFJO2NBQ2hCLENBQUM7UUFDSjtZQUNFLE9BQU9NLEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRUQsK0RBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIiDssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsv6Dsv6BcIixcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOlxuICAgICAgICAgICAgXCJodHRwczovL2ltZ25ld3MucHN0YXRpYy5uZXQvaW1hZ2UvMDc2LzIwMjIvMDUvMjUvMjAyMjA1MjYwMTAwMjA2OTQwMDEzOTI3MV8yMDIyMDUyNTE2MTEwMzY4OC5qcGc/dHlwZT13NjQ3XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICBcImh0dHBzOi8vaW1nbmV3cy5wc3RhdGljLm5ldC9pbWFnZS80MjEvMjAyMi8wNS8yNS8wMDA2MTE2Nzc1XzAwMV8yMDIyMDUyNTE1MjMwMTcwMy5qcGc/dHlwZT13NjQ3XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICBcImh0dHBzOi8vaW1nbmV3cy5wc3RhdGljLm5ldC9pbWFnZS80MjEvMjAyMi8wNS8yNS8wMDA2MTE2Nzc1XzAwMl8yMDIyMDUyNTE1MjMwMTg3Ni5qcGc/dHlwZT13NjQ3XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7L2Y7YWM7J2YIOuwseyTsOumrOyghOyIoFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6IFwiU09ON1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogXCLshpDtnaXrr7wg6reA6rWtXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCLjhLROT1NcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwiMjPqs6gg7J2EIOuEo+yXiOyKtSDri4jri6QhIVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBpbWFnUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlOiBBRERfUE9TVCxcbn07XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6IFwi642U66+4642w7J207YSw7J6F64uI64ukLlwiLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi6rmA7Zi47KeEXCIsXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnRzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

});