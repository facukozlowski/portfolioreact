"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\nconst PostCard = (param)=>/*#__PURE__*/ {\n    let { post  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card bg-dark\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        className: \"card-image-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n                        lineNumber: 8,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n                                lineNumber: 10,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n                                lineNumber: 11,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\nconst Blog = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My blog\",\n        dark: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\pages\\\\blog.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNQO0FBRWxDLE1BQU1FLFdBQVcsdUJBQ2I7UUFEYyxFQUFDQyxLQUFJLEVBQUM7V0FDcEIsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0M7d0JBQUlDLEtBQUtKLEtBQUtLLFFBQVE7d0JBQUVILFdBQVU7Ozs7OztrQ0FDL0IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQUlOLEtBQUtPLEtBQUs7Ozs7OzswQ0FDZiw4REFBQ0M7MENBQUdSLEtBQUtTLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0FYSFY7QUFjTixNQUFNVyxPQUFPLGtCQUNULDhEQUFDYiwwREFBTUE7UUFBQ2MsUUFBUSxLQUFLO1FBQUVKLE9BQU07UUFBVUssSUFBSTtrQkFFdkMsNEVBQUNYO1lBQUlDLFdBQVU7c0JBRVBKLCtDQUFTLENBQUMsQ0FBQ0UsTUFBTWMsa0JBQ2IsOERBQUNmO29CQUFTQyxNQUFNQTttQkFBV2M7Ozs7Ozs7Ozs7Ozs7OztNQU56Q0o7QUFnQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IHBvc3RzIH0gZnJvbSAnLi4vcHJvZmlsZSdcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBiZy1kYXJrJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93Jz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2VVUkx9IGNsYXNzTmFtZT0nY2FyZC1pbWFnZS10b3AnLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiAoXHJcbiAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IHRpdGxlPVwiTXkgYmxvZ1wiIGRhcms+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtpfSAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwb3N0cyIsIlBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVVJMIiwiaDEiLCJ0aXRsZSIsInAiLCJjb250ZW50IiwiQmxvZyIsImZvb3RlciIsImRhcmsiLCJtYXAiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});