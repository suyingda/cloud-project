webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nexports.__esModule = true;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\r\nvar Classify = __importStar(__webpack_require__(/*! ./tsProject/ECMAScript */ \"./src/tsProject/ECMAScript.ts\"));\r\nvar App_1 = __webpack_require__(/*! ./page/App */ \"./src/page/App.tsx\");\r\n// const url = Deno.args[0];\r\n// const res = await fetch(url);\r\n// const body = new Uint8Array(await res.arrayBuffer());\r\n// await Deno.stdout.write(body);\r\nClassify();\r\nReactDOM.render(React.createElement(React.Fragment, null,\r\n    React.createElement(App_1.App, null)), document.getElementById(\"root\"));\r\n// example. yarn add @types/webpack.env -D\r\nvar Module_ = module;\r\n// const Module_ = module;\r\nif (Module_.hot) {\r\n    Module_.hot.accept();\r\n    console.log('进入');\r\n    /*Module_.hot.accept('./page/App', function () {\r\n        console.log('更新了');\r\n        // AppComponent(App(require(\"../router/router\")));\r\n    })*/\r\n}\r\nelse {\r\n    console.log('未更新');\r\n}\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/tsProject/ECMAScript.ts":
/*!*************************************!*\
  !*** ./src/tsProject/ECMAScript.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nfunction ECMAVersion() {\r\n    console.log('testtesttesttest');\r\n}\r\n// class Classify {\r\n//     constructor() {\r\n//         this.x = 100;\r\n//         this.y = 99;\r\n//     }\r\n// }\r\nexports[\"default\"] = ECMAVersion;\r\n\n\n//# sourceURL=webpack:///./src/tsProject/ECMAScript.ts?");

/***/ })

})