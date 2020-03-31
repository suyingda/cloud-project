/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\r\nclass virtualDom {\r\n    constructor(tagName, attrs, children) {\r\n        this.tagName = tagName;\r\n        this.attrs = attrs;\r\n        this.children = children || [];\r\n    }\r\n    render() {\r\n        // 创建一个真实的dom节点\r\n        let element = document.createElement(this.tagName);\r\n        // 给真实的dom节点增加属性\r\n        for (let attrs in this.attrs) {\r\n            utils.setAttri(element, attrs, this.attrs[attrs])\r\n        }\r\n        this.children.forEach(child => {\r\n            let newCreateNode;\r\n            if (typeof child === 'object') {\r\n                newCreateNode = child.render();  //调用render() 方法 生成遍历到的节点 承前启后的方法（深度遍历优先）\r\n            } else {\r\n                newCreateNode = document.createTextNode(child);  //创建一个文本节点\r\n            }\r\n            element.appendChild(newCreateNode)\r\n        });\r\n        return element;\r\n    }\r\n}\r\nfunction createElement(tagName, attrs, children) {\r\n    return new virtualDom(tagName, attrs, children)\r\n}\r\nmodule.exports = { createElement }\r\n\n\n//# sourceURL=webpack:///./src/Element.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst INSERT = 'INSERT';\r\nconst REMOVE = 'REMOVE';\r\n\r\nlet { createElement } = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\r\n\r\n// let oldChildren = createElement('ul', { 'class': 'list' }, [\r\n//     createElement('li', { 'class': 'item', key: 1 }, ['1']),\r\n//     createElement('li', { 'class': 'item', key: 2 }, ['2']),\r\n//     createElement('li', { 'class': 'item', key: 3 }, ['3'])\r\n// ])\r\nlet oldChildren = [\r\n    createElement('li', { 'class': 'item', key: \"a\" }, ['a']),\r\n    createElement('li', { 'class': 'item', key: \"b\" }, ['b']),\r\n    createElement('li', { 'class': 'item', key: \"c\" }, ['c']),\r\n    createElement('li', { 'class': 'item', key: \"d\" }, ['d']),\r\n]\r\nlet newChildren = [\r\n    createElement('li', { 'class': 'item', key: \"d\" }, ['d']),\r\n    createElement('li', { 'class': 'item', key: \"b\" }, ['b']),\r\n    createElement('li', { 'class': 'item', key: \"c\" }, ['c']),\r\n    createElement('li', { 'class': 'item', key: \"a\" }, ['a']),\r\n]\r\n\r\nlet ul = document.createElement('ul');\r\noldChildren.forEach((item) => ul.appendChild(item.render()));\r\ndocument.body.appendChild(ul);\r\nlet patches = []\r\nfunction diff(oldChildren, newChildren) {\r\n    let newChildrenKey = newChildren.map((item) => item.attrs.key);\r\n    //frist\r\n    oldChildren.forEach((item, index) => {\r\n        if (!newChildrenKey.includes(item.attrs.key)) {\r\n            remove(REMOVE, item.attrs.key, index);\r\n            oldChildren.splice(index, 1)\r\n        }\r\n    })\r\n\r\n    //second\r\n    let oldChildrenIndex = 0;\r\n    let newChildrenIndex = 0;\r\n    while (newChildrenIndex < newChildren.length) {\r\n        let newKey = (newChildren[newChildrenIndex] || {}).attrs && (newChildren[newChildrenIndex] || {}).attrs.key;\r\n        let oldkey = (oldChildren[oldChildrenIndex] || {}).attrs && (oldChildren[oldChildrenIndex] || {}).attrs.key;\r\n        if (newKey !== oldkey) {\r\n            insert(INSERT, newKey, newChildrenIndex, newChildren[newChildrenIndex])\r\n            newChildrenIndex++\r\n        } else if (!oldkey) {\r\n            insert(INSERT, newKey, newChildrenIndex, newChildren[newChildrenIndex])\r\n            newChildrenIndex++\r\n        } else {\r\n            oldChildrenIndex++\r\n            newChildrenIndex++\r\n        }\r\n\r\n    }\r\n    //three\r\n    while (oldChildrenIndex++ < oldChildren.length) {\r\n\r\n        remove(REMOVE, '', newChildrenIndex)\r\n    }\r\n    function remove(types, key, index) {\r\n        patches.push({ types, key, index })\r\n    }\r\n    function insert(types, key, index, node) {\r\n        patches.push({ types, key, index, node })\r\n    }\r\n    return patches\r\n}\r\nlet patch = diff(oldChildren, newChildren)\r\nconsole.log(patch)\r\n\r\npatch.forEach((item) => {\r\n    switch (item.types) {\r\n        case REMOVE:\r\n            let re = ul.childNodes[item.index]\r\n            ul.removeChild(re);\r\n            break;\r\n        case INSERT:\r\n            let rse = ul.childNodes[item.index]\r\n            if (rse) {\r\n                ul.insertBefore(item.node.render(), rse);\r\n            } else {\r\n                ul.appendChild(item.node.render())\r\n            }\r\n            break;\r\n        default:\r\n            throw new Error('没有补丁')\r\n            break;\r\n    }\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let utils = {\r\n    setAttri(element, attrs, value) {\r\n        switch (attrs) {\r\n            case 'style':\r\n                element.style.cssText = value;\r\n                break;\r\n            case 'value':\r\n                let tagName = element.tagName.toLowerCase();\r\n                if (tagName == 'input' || tagName == 'textarea') {\r\n                    element.value = value;\r\n                } else {\r\n                    element.setAttribute(attrs, value)\r\n                }\r\n\r\n                break;\r\n            default:\r\n                element.setAttribute(attrs, value);\r\n                break;\r\n        }\r\n        // element.setAttribute(attrs, value)\r\n    }\r\n}\r\nmodule.exports = utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });