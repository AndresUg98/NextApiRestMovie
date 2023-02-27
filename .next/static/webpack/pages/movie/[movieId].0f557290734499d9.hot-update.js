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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Banner\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner.module.scss */ \"./components/Banner/banner.module.scss\");\n/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Assets_Icons_score_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/Icons/score.svg */ \"./components/Assets/Icons/score.svg\");\nvar _this = undefined;\n\n\n\n\n\nvar Banner = function(param) {\n    var img = param.img, title = param.title, text = param.text, rating = param.rating, categories = param.categories;\n    console.log(categories.map(function(categorie) {\n        return categorie.name;\n    }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieImg),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: img,\n                    layout: \"fill\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieTitle),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().genere),\n                        children: categories.map(function(categorie) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"categorie.name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 42\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rate),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _Assets_Icons_score_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: rating\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movieSinopsis),\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Oscar\\\\Documents\\\\Platzi\\\\NextApiRestMovie\\\\components\\\\Banner\\\\Banner.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Banner;\n\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci9CYW5uZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNXO0FBQ0k7QUFFOUMsSUFBTUksTUFBTSxHQUFHLGdCQUE2QztRQUExQ0MsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTtJQUNwREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLFNBQVM7ZUFBSUEsU0FBUyxDQUFDQyxJQUFJO0tBQUMsQ0FBQyxDQUFDLENBQUM7SUFJM0QscUJBQ0UsOERBQUNDLFNBQU87OzBCQUNOLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVmLHFFQUFlOzBCQUM3Qiw0RUFBQ0QsbURBQUs7b0JBQUNrQixHQUFHLEVBQUVkLEdBQUc7b0JBQUVlLE1BQU0sRUFBQyxNQUFNOzs7Ozt5QkFBRzs7Ozs7cUJBQzdCOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUVmLHNFQUFnQjs7a0NBQzlCLDhEQUFDb0IsSUFBRTt3QkFBQ0wsU0FBUyxFQUFFZix1RUFBaUI7a0NBQUdJLEtBQUs7Ozs7OzZCQUFNO2tDQUM5Qyw4REFBQ1UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFZixtRUFBYTtrQ0FHekJPLFVBQVUsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLFNBQVM7aURBQUksOERBQUNZLEdBQUM7MENBQUMsZ0JBQWM7Ozs7O3FDQUFJO3lCQUFFLENBQUM7Ozs7OzZCQUduRDtrQ0FDTiw4REFBQ1QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFZixpRUFBVzs7MENBQ3pCLDhEQUFDRCxtREFBSztnQ0FBQ2tCLEdBQUcsRUFBRWhCLCtEQUFLOzs7OztxQ0FBSTswQ0FFckIsOERBQUNzQixHQUFDOzBDQUFFakIsTUFBTTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDWDtrQ0FDTiw4REFBQ2lCLEdBQUM7d0JBQUNSLFNBQVMsRUFBRWYsMEVBQW9CO2tDQUFHSyxJQUFJOzs7Ozs2QkFBSzs7Ozs7O3FCQUMxQzs7Ozs7O2FBQ0UsQ0FDVjtBQUNKLENBQUM7QUE1QktILEtBQUFBLE1BQU07QUE4Qk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzeD83ZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYmFubmVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBzY29yZSBmcm9tIFwiLi4vQXNzZXRzL0ljb25zL3Njb3JlLnN2Z1wiO1xyXG5cclxuY29uc3QgQmFubmVyID0gKHsgaW1nLCB0aXRsZSwgdGV4dCwgcmF0aW5nLCBjYXRlZ29yaWVzfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMubWFwKChjYXRlZ29yaWUpPT4oY2F0ZWdvcmllLm5hbWUpKSk7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVJbWd9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gbGF5b3V0PVwiZmlsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllSW5mb30+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllVGl0bGV9Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2VuZXJlfT5cclxuICAgICAgICAgIHsvKiA8cD57Y2F0ZWdvcmllc308L3A+ICovfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmllKT0+KDxwPmNhdGVnb3JpZS5uYW1lPC9wPiApKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17c2NvcmV9IC8+XHJcbiAgICAgICAgICB7LyogPGltZyBzcmM9XCIuL2Fzc2V0cy9zY29yZS5zdmdcIiBhbHQ9XCJcIj4gKi99XHJcbiAgICAgICAgICA8cD57cmF0aW5nfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZVNpbm9wc2lzfT57dGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBCYW5uZXIgfTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJzdHlsZXMiLCJzY29yZSIsIkJhbm5lciIsImltZyIsInRpdGxlIiwidGV4dCIsInJhdGluZyIsImNhdGVnb3JpZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY2F0ZWdvcmllIiwibmFtZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtb3ZpZUltZyIsInNyYyIsImxheW91dCIsIm1vdmllSW5mbyIsImgzIiwibW92aWVUaXRsZSIsImdlbmVyZSIsInAiLCJyYXRlIiwibW92aWVTaW5vcHNpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner/Banner.jsx\n"));

/***/ })

});