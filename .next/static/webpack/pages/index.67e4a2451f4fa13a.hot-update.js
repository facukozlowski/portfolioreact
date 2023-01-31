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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children , title , footer =true , dark =false  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouterChange = (url)=>{\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routerChangeStart\", handleRouterChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routerChangeStart\", handleRouterChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            \"bg-dark\": dark,\n            \"bg-white\": !dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"text-center\", {\n                            \"text-white\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-white text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Facundo Kozlowski Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2020- \",\n                                new Date().getUTCFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Todos los derechos reservados.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Facu\\\\Desktop\\\\desarrollo\\\\components\\\\Layout.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ007QUFDSjtBQUNFO0FBRW5DLE1BQU1LLFNBQVMsU0FBc0Q7UUFBckQsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFFBQVMsSUFBSSxHQUFFQyxNQUFPLEtBQUssR0FBRTs7SUFFNUQsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBRWhCLE1BQU1VLHFCQUFxQkMsQ0FBQUEsTUFBTztZQUM5QkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaVCxzREFBZTtRQUNuQjtRQUVHTyxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUJOO1FBRXRDRCxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUIsSUFBTWQscURBQWM7UUFFNUQsT0FBTyxJQUFNO1lBQ1pPLE9BQU9NLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLHFCQUFxQlI7UUFDeEM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBV2pCLGlEQUFVQSxDQUFDO1lBQUMsV0FBV0s7WUFBTSxZQUFXLENBQUNBO1FBQUk7OzBCQUM3RCw4REFBQ1QsK0NBQU1BOzs7OzswQkFFUCw4REFBQ3NCO2dCQUFLRCxXQUFVOztvQkFFZmQsdUJBQ0csOERBQUNnQjt3QkFBR0YsV0FBV2pCLGlEQUFVQSxDQUFDLGVBQWM7NEJBQUMsY0FBY0s7d0JBQUk7a0NBQ3RERjs7Ozs7O29CQUtKRDs7Ozs7OztZQUlERSx3QkFDSSw4REFBQ0E7Z0JBQU9hLFdBQVU7MEJBQ3RCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTtnQ0FBTyxJQUFJQyxPQUFPQyxjQUFjOzs7Ozs7O3NDQUNuQyw4REFBQ0Y7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25CO0dBakRNbkI7O1FBRWFILGtEQUFTQTs7O0tBRnRCRztBQW1ETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZXJDaGFuZ2UgPSB1cmwgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICBuUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVyQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZXJDaGFuZ2UpXHJcblxyXG4gICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IG5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlckNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVyQ2hhbmdlKVxyXG4gICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeydiZy1kYXJrJzogZGFyaywgJ2JnLXdoaXRlJzohZGFya30pfT5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGV4dC1jZW50ZXInLHsndGV4dC13aGl0ZSc6IGRhcmt9KX0+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvb3RlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0nYmctZGFyayB0ZXh0LXdoaXRlIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBwLTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxPiZjb3B5OyBGYWN1bmRvIEtvemxvd3NraSBQb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+MjAyMC0ge25ldyBEYXRlKCkuZ2V0VVRDRnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Ub2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvcy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiblByb2dyZXNzIiwiY2xhc3NOYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJkYXJrIiwicm91dGVyIiwiaGFuZGxlUm91dGVyQ2hhbmdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwicCIsIkRhdGUiLCJnZXRVVENGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});