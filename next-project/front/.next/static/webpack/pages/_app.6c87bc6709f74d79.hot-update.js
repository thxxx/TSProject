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

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _marked = _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLogOut);\nvar _marked1 = _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLogIn);\nvar _marked2 = _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(logOut);\nvar _marked3 = _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(logIn);\n\n\nfunction logInAPI(data) {\n    return axios.post(\"/api/login\", data);\n}\nfunction logIn(action) {\n    return _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function logIn$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.prev = 0;\n                console.log(\"\\uC0AC\\uAC00 start\");\n                _ctx.next = 4;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);\n            case 4:\n                _ctx.next = 6;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n                    type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,\n                    data: action.data\n                });\n            case 6:\n                _ctx.next = 12;\n                break;\n            case 8:\n                _ctx.prev = 8;\n                _ctx.t0 = _ctx[\"catch\"](0);\n                _ctx.next = 12;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n                    type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,\n                    data: action.data\n                });\n            case 12:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked3, null, [\n        [\n            0,\n            8\n        ]\n    ]);\n}\nfunction logOutAPI(data) {\n    return axios.post(\"/api/login\", data);\n}\nfunction logOut(action) {\n    return _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function logOut$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                console.log(\"\\uC0AC\\uAC00 start\");\n                _ctx.prev = 1;\n                _ctx.next = 4;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);\n            case 4:\n                _ctx.next = 6;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n                    type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS,\n                    data: action.data\n                });\n            case 6:\n                _ctx.next = 12;\n                break;\n            case 8:\n                _ctx.prev = 8;\n                _ctx.t0 = _ctx[\"catch\"](1);\n                _ctx.next = 12;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n                    type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,\n                    data: action.data\n                });\n            case 12:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked2, null, [\n        [\n            1,\n            8\n        ]\n    ]);\n}\nfunction watchLogIn() {\n    return _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLogIn$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                console.log(\"\\uCCB4\\uD06C\\uCCB4\\uD06C\\uB294 \\uB418\\uB098?\");\n                _ctx.next = 3;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.take)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked1);\n} // 이벤트리스너 처럼 LOG_IN이 들어오면 뒤의 함수를 실행하도록.\nfunction watchLogOut() {\n    return _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLogOut$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.take)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked);\n} // 이벤트리스너 처럼 LOG_IN이 들어오면 뒤의 함수를 실행하도록.\nfunction userSaga() {\n    return _Users_gimhojin_Desktop_JS_TS_next_project_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function userSaga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                console.log(\"\\uCCB4\\uD06C\\uCCB4\\uD06C\\uB294 \\uB418\\uB098?1111\");\n                _ctx.next = 3;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([\n                    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogIn),\n                    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogOut)\n                ]);\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, userSaga);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7MEtBcUVVQSxXQUFXOzJLQUxYQyxVQUFVOzJLQWxCVkMsTUFBTTsyS0FyQk5DLEtBQUs7QUFmYTtBQVNGO0FBRTFCLFNBQVNnQixRQUFRLENBQUNDLElBQUksRUFBRTtJQUN0QixPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQyxZQUFZLEVBQUVGLElBQUksQ0FBQyxDQUFDO0NBQ3ZDO0FBRUQsU0FBVWpCLEtBQUssQ0FBQ29CLE1BQU0sRUFBRTtnTEFBZHBCLE1BQUs7Ozs7Z0JBR1hxQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBYyxDQUFDLENBQUM7O3VCQUV0QmIseURBQUssQ0FBQyxJQUFJLENBQUM7Ozt1QkFDWEYsdURBQUcsQ0FBQztvQkFDUmdCLElBQUksRUFBRVosMERBQWM7b0JBQ3BCTSxJQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFBSTtpQkFDbEIsQ0FBQzs7Ozs7Ozs7dUJBRUlWLHVEQUFHLENBQUM7b0JBQ1JnQixJQUFJLEVBQUVYLDBEQUFjO29CQUNwQkssSUFBSSxFQUFFRyxNQUFNLENBQUNILElBQUk7aUJBQ2xCLENBQUM7Ozs7Ozs7Ozs7O0NBRUw7QUFDRCxTQUFTTyxTQUFTLENBQUNQLElBQUksRUFBRTtJQUN2QixPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQyxZQUFZLEVBQUVGLElBQUksQ0FBQyxDQUFDO0NBQ3ZDO0FBRUQsU0FBVWxCLE1BQU0sQ0FBQ3FCLE1BQU0sRUFBRTtnTEFBZnJCLE9BQU07OztnQkFDZHNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFjLENBQUMsQ0FBQzs7O3VCQUlwQmIseURBQUssQ0FBQyxJQUFJLENBQUM7Ozt1QkFDWEYsdURBQUcsQ0FBQztvQkFDUmdCLElBQUksRUFBRVQsMkRBQWU7b0JBQ3JCRyxJQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFBSTtpQkFDbEIsQ0FBQzs7Ozs7Ozs7dUJBRUlWLHVEQUFHLENBQUM7b0JBQ1JnQixJQUFJLEVBQUVSLDJEQUFlO29CQUNyQkUsSUFBSSxFQUFFRyxNQUFNLENBQUNILElBQUk7aUJBQ2xCLENBQUM7Ozs7Ozs7Ozs7O0NBRUw7QUFFRCxTQUFVbkIsVUFBVSxHQUFHO2dMQUFiQSxXQUFVOzs7Z0JBQ2xCdUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsOENBQXlCLENBQUMsQ0FBQzs7dUJBQ2pDbEIsd0RBQUksQ0FBQ00sMERBQWMsRUFBRVYsS0FBSyxDQUFDOzs7Ozs7Q0FDbEMsQ0FBQztBQUVGLFNBQVVILFdBQVcsR0FBRztnTEFBZEEsWUFBVzs7Ozt1QkFDYk8sd0RBQUksQ0FBQ1MsMkRBQWUsRUFBRWQsTUFBTSxDQUFDOzs7Ozs7Q0FDcEMsQ0FBQztBQUVhLFNBQVUwQixRQUFRLEdBQUc7Z0xBQVhBLFNBQVE7OztnQkFDL0JKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtEQUFlLENBQUMsQ0FBQzs7dUJBQ3ZCcEIsdURBQUcsQ0FBQztvQkFBQ0Msd0RBQUksQ0FBQ0wsVUFBVSxDQUFDO29CQUFFSyx3REFBSSxDQUFDTixXQUFXLENBQUM7aUJBQUMsQ0FBQzs7Ozs7T0FGekI0QixRQUFRO0NBR2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3VzZXIuanM/YzIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjYWxsLFxuICBhbGwsXG4gIGZvcmssXG4gIHRha2UsXG4gIHRha2VMYXRlc3QsXG4gIHRha2VFdmVyeSxcbiAgcHV0LFxuICB0aHJvdHRsZSxcbiAgZGVsYXksXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHtcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIExPR19PVVRfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgLy8g7Jes6riw7JeQIOyekOuPmeycvOuhnCDrp6TqsJzrs4DsiJjroZwgYWN0aW9u7J20IOyghOuLrOuQnOuLpC5cbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcIuyCrOqwgCBzdGFydFwiKTtcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKFwi7IKs6rCAIHN0YXJ0XCIpO1xuICAvLyDsl6zquLDsl5Ag7J6Q64+Z7Jy866GcIOunpOqwnOuzgOyImOuhnCBhY3Rpb27snbQg7KCE64us65Cc64ukLlxuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcbiAgY29uc29sZS5sb2coXCLssrTtgazssrTtgazripQg65CY64KYP1wiKTtcbiAgeWllbGQgdGFrZShMT0dfSU5fUkVRVUVTVCwgbG9nSW4pOyAvLyBMT0dfSU5fUkVRVUVTVCDsnbTrnbzripQg7JWh7IWY7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOuguOuLpOqwgCBsb2dJbuydhCDsi6TtlontlZjqsqDri6QuXG59IC8vIOydtOuypO2KuOumrOyKpOuEiCDsspjrn7wgTE9HX0lO7J20IOuTpOyWtOyYpOuptCDrkqTsnZgg7ZWo7IiY66W8IOyLpO2Wie2VmOuPhOuhnS5cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICB5aWVsZCB0YWtlKExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTsgLy8gTE9HX0lOX1JFUVVFU1Qg7J20652864qUIOyVoeyFmOydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TroLjri6TqsIAgbG9nSW7snYQg7Iuk7ZaJ7ZWY6rKg64ukLlxufSAvLyDsnbTrsqTtirjrpqzsiqTrhIgg7LKY65+8IExPR19JTuydtCDrk6TslrTsmKTrqbQg65Kk7J2YIO2VqOyImOulvCDsi6TtlontlZjrj4TroZ0uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgY29uc29sZS5sb2coXCLssrTtgazssrTtgazripQg65CY64KYPzExMTFcIik7XG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ0luKSwgZm9yayh3YXRjaExvZ091dCldKTtcbn1cbiJdLCJuYW1lcyI6WyJ3YXRjaExvZ091dCIsIndhdGNoTG9nSW4iLCJsb2dPdXQiLCJsb2dJbiIsImNhbGwiLCJhbGwiLCJmb3JrIiwidGFrZSIsInRha2VMYXRlc3QiLCJ0YWtlRXZlcnkiLCJwdXQiLCJ0aHJvdHRsZSIsImRlbGF5IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJsb2dPdXRBUEkiLCJ1c2VyU2FnYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var _sagas_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas/index */ \"./sagas/index.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n// import thunkMiddleware from \"redux-thunk\";\nvar loggerMiddleware = function(param) {\n    var dispatch = param.dispatch, getState = param.getState;\n    return function(next) {\n        return function(action) {\n            // 액션을 실행하기 전에 콘솔로그를 한번 찍어주는 간단한 미들웨어.\n            console.log(action, \"\\uBBF8\\uB4E4\\uC6E8\\uC5B4\");\n            return next(action);\n        };\n    };\n};\nvar configureStores = function() {\n    var sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var middlewares = [\n        sagaMiddleware,\n        loggerMiddleware\n    ]; // 여기다 saga나 thunk를 넣는다.\n    // 그럼 싸가랑 떵크가 뭐지??\n    var enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)(redux__WEBPACK_IMPORTED_MODULE_6__.applyMiddleware.apply(void 0, _toConsumableArray(middlewares)));\n    var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({\n        reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        middleware: _toConsumableArray(middlewares),\n        enhancer: enhancer\n    });\n    store.sagaTask = sagaMiddleware.run(_sagas_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    return store;\n};\nvar wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(configureStores, {\n    debug: \"development\" === \"development\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFDQztBQUNqQjtBQUNlO0FBQ2M7QUFDakI7QUFFUjtBQUN0Qyw2Q0FBNkM7QUFFN0MsSUFBTVMsZ0JBQWdCLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtXQUFPLFNBQUNDLElBQUk7ZUFBSyxTQUFDQyxNQUFNLEVBQUs7WUFDekU7WUFDc0RDLE9BQS9DLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxFQUFFLDBCQUFNLENBQVMsQ0FBQztZQUU1QixPQUFERCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO0tBQUE7Q0FBQTtBQUVELElBQU1HLGVBQWUsR0FBRyxXQUFNO0lBQzVCLElBQU1DLGNBQWMsR0FBR1Ysc0RBQW9CLEVBQUU7SUFDN0MsSUFBTVcsV0FBVyxHQUFHO1FBQUNELGNBQWM7UUFBRVIsZ0JBQWdCO0tBQUMsRUFBRTtJQUN4QztJQUVoQixJQUFNVSxRQUFRLEdBQ1pDLE1BQXFDLEdBQ2pDZixDQUF3QyxHQUN4Q0MsNkVBQW1CLENBQUNGLHdEQUErQixDQUEvQkEsS0FBQUEsQ0FBZSxFQUFDLG1CQUFHYyxXQUFXLENBQVhBLENBQVksQ0FBQztJQUUxRCxJQUFNRyxLQUFLLEdBQUdwQixnRUFBYyxDQUFDO1FBQzNCRSxPQUFPLEVBQVBBLGlEQUFPO1FBQ1BtQixVQUFVLEVBQUcsbUJBQUdKLFdBQVcsQ0FBWEE7UUFDaEJDLFFBQVEsRUFBUkEsUUFBUTtLQUNULENBQUM7SUFFRkUsS0FBSyxDQUFDRSxRQUFRLEdBQUdOLGNBQWMsQ0FBQ08sR0FBRyxDQUFDaEIsb0RBQVEsQ0FBQyxDQUFDO0lBRTlDLE9BQU9hLEtBQUssQ0FBQztDQUNkO0FBRUQsSUFBTUksT0FBTyxHQUFHdkIsaUVBQWEsQ0FBQ2MsZUFBZSxFQUFFO0lBQzdDVSxLQUFLLEVBQUVOLGFBeENJLEtBd0NxQixhQUFhO0NBQzlDLENBQUM7QUFFRiwrREFBZUssT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzP2YyMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5cbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXMvaW5kZXhcIjtcbi8vIGltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgLy8g7JWh7IWY7J2EIOyLpO2Wie2VmOq4sCDsoITsl5Ag7L2Y7IaU66Gc6re466W8IO2VnOuyiCDssI3slrTso7zripQg6rCE64uo7ZWcIOuvuOuTpOybqOyWtC5cbiAgY29uc29sZS5sb2coYWN0aW9uLCBcIuuvuOuTpOybqOyWtFwiKTtcblxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xufTtcblxuY29uc3QgY29uZmlndXJlU3RvcmVzID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTsgLy8g7Jes6riw64ukIHNhZ2HrgpggdGh1bmvrpbwg64Sj64qU64ukLlxuICAvLyDqt7jrn7wg7Iu46rCA656RIOuWte2BrOqwgCDrrZDsp4A/P1xuXG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXIsXG4gICAgbWlkZGxld2FyZTogWy4uLm1pZGRsZXdhcmVzXSxcbiAgICBlbmhhbmNlcixcbiAgfSk7XG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3Jlcywge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJyb290U2FnYSIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZXMiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJwcm9jZXNzIiwic3RvcmUiLCJtaWRkbGV3YXJlIiwic2FnYVRhc2siLCJydW4iLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ })

});