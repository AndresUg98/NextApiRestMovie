"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[movieId]",{

/***/ "./components/Banner/Banner.jsx":
/*!**************************************!*\
  !*** ./components/Banner/Banner.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Banner\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner.module.scss */ \"./components/Banner/banner.module.scss\");\n/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Assets_Icons_score_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/Icons/score.svg */ \"./components/Assets/Icons/score.svg\");\nvar _this = undefined;\n\n\n\n\n\nvar Banner = function(param) {\n    var img = param.img, title = param.title, text = param.text, rating = param.rating, categories = param.categories;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieImg),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: img,\n                    layout: \"fill\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieTitle),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().genere),\n                        children: categories.map(function(categorie) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: categorie.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 42\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rate),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _Assets_Icons_score_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: rating\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieSinopsis),\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Banner;\n\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci9CYW5uZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNXO0FBQ0k7QUFFOUMsSUFBTUksTUFBTSxHQUFHLGdCQUE2QztRQUExQ0MsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTtJQUtwRCxxQkFDRSw4REFBQ0MsU0FBTzs7MEJBQ04sOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVYscUVBQWU7MEJBQzdCLDRFQUFDRCxtREFBSztvQkFBQ2EsR0FBRyxFQUFFVCxHQUFHO29CQUFFVSxNQUFNLEVBQUMsTUFBTTs7Ozs7eUJBQUc7Ozs7O3FCQUM3QjswQkFDTiw4REFBQ0osS0FBRztnQkFBQ0MsU0FBUyxFQUFFVixzRUFBZ0I7O2tDQUM5Qiw4REFBQ2UsSUFBRTt3QkFBQ0wsU0FBUyxFQUFFVix1RUFBaUI7a0NBQUdJLEtBQUs7Ozs7OzZCQUFNO2tDQUM5Qyw4REFBQ0ssS0FBRzt3QkFBQ0MsU0FBUyxFQUFFVixtRUFBYTtrQ0FHekJPLFVBQVUsQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLFNBQVM7aURBQUksOERBQUNDLEdBQUM7MENBQUVELFNBQVMsQ0FBQ0UsSUFBSTs7Ozs7cUNBQUs7eUJBQUUsQ0FBQzs7Ozs7NkJBR3JEO2tDQUNOLDhEQUFDWixLQUFHO3dCQUFDQyxTQUFTLEVBQUVWLGlFQUFXOzswQ0FDekIsOERBQUNELG1EQUFLO2dDQUFDYSxHQUFHLEVBQUVYLCtEQUFLOzs7OztxQ0FBSTswQ0FFckIsOERBQUNtQixHQUFDOzBDQUFFZCxNQUFNOzs7OztxQ0FBSzs7Ozs7OzZCQUNYO2tDQUNOLDhEQUFDYyxHQUFDO3dCQUFDVixTQUFTLEVBQUVWLDBFQUFvQjtrQ0FBR0ssSUFBSTs7Ozs7NkJBQUs7Ozs7OztxQkFDMUM7Ozs7OzthQUNFLENBQ1Y7QUFDSixDQUFDO0FBNUJLSCxLQUFBQSxNQUFNO0FBOEJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyL0Jhbm5lci5qc3g/N2UxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Jhbm5lci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgc2NvcmUgZnJvbSBcIi4uL0Fzc2V0cy9JY29ucy9zY29yZS5zdmdcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICh7IGltZywgdGl0bGUsIHRleHQsIHJhdGluZywgY2F0ZWdvcmllc30pID0+IHtcclxuICBcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZUltZ30+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW1nfSBsYXlvdXQ9XCJmaWxsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVJbmZvfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVUaXRsZX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5lcmV9PlxyXG4gICAgICAgICAgey8qIDxwPntjYXRlZ29yaWVzfTwvcD4gKi99XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yaWUpPT4oPHA+e2NhdGVnb3JpZS5uYW1lfTwvcD4gKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3Njb3JlfSAvPlxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi9hc3NldHMvc2NvcmUuc3ZnXCIgYWx0PVwiXCI+ICovfVxyXG4gICAgICAgICAgPHA+e3JhdGluZ308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVTaW5vcHNpc30+e3RleHR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgQmFubmVyIH07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwic3R5bGVzIiwic2NvcmUiLCJCYW5uZXIiLCJpbWciLCJ0aXRsZSIsInRleHQiLCJyYXRpbmciLCJjYXRlZ29yaWVzIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1vdmllSW1nIiwic3JjIiwibGF5b3V0IiwibW92aWVJbmZvIiwiaDMiLCJtb3ZpZVRpdGxlIiwiZ2VuZXJlIiwibWFwIiwiY2F0ZWdvcmllIiwicCIsIm5hbWUiLCJyYXRlIiwibW92aWVTaW5vcHNpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner/Banner.jsx\n"));

/***/ })

});