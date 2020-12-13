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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/helper/ajaxRequest.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helper/ajaxRequest.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ajaxRequest(method, url, callback) {\n\tlet content = new XMLHttpRequest();\n\tcontent.open(method, url, true);\n\tcontent.send();\n\tcontent.onreadystatechange = function () {\n\t\tif (content.readyState === 4 && content.readyState) {\n\t\t\tcallback(content.response);\n\t\t}\n\t};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ajaxRequest);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/ajaxRequest.js?");

/***/ }),

/***/ "./src/assets/js/helper/find.js":
/*!**************************************!*\
  !*** ./src/assets/js/helper/find.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction find(term) {\n\treturn document.querySelectorAll(term);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/find.js?");

/***/ }),

/***/ "./src/assets/js/helper/returnSearchParam.js":
/*!***************************************************!*\
  !*** ./src/assets/js/helper/returnSearchParam.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction returnSearchParam(paramToSearchFor) {\n\tlet queryString = window.location.search;\n\tlet urlParams = new URLSearchParams(queryString);\n\n\treturn urlParams.get(paramToSearchFor);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (returnSearchParam);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/returnSearchParam.js?");

/***/ }),

/***/ "./src/assets/js/helper/toggleClass.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helper/toggleClass.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction toggleClass(elements, className) {\n\telements.forEach((element) => {\n\t\tif (element.classList.contains(className)) {\n\t\t\telement.classList.remove(className);\n\t\t} else {\n\t\t\telement.classList.add(className);\n\t\t}\n\t});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleClass);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/toggleClass.js?");

/***/ }),

/***/ "./src/assets/js/site.js":
/*!*******************************!*\
  !*** ./src/assets/js/site.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/find */ \"./src/assets/js/helper/find.js\");\n/* harmony import */ var _helper_toggleClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/toggleClass */ \"./src/assets/js/helper/toggleClass.js\");\n/* harmony import */ var _helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/ajaxRequest */ \"./src/assets/js/helper/ajaxRequest.js\");\n/* harmony import */ var _helper_returnSearchParam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/returnSearchParam */ \"./src/assets/js/helper/returnSearchParam.js\");\n// ###########\n// # imports #\n// ###########\n\n\n\n\n\n\n// ###########\n// # program #\n// ###########\n\n// load content into the ui\nObject(_helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n\t\"GET\",\n\t\"middleware.php?return=content&channel=\" + Object(_helper_returnSearchParam__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"channel\"),\n\tinjectContent\n);\nfunction injectContent(response) {\n\tdocument.getElementById(\"content\").innerHTML = response;\n\tObject(_helper_toggleClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_helper_find__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"#unread-items\"), \"js-hidden\");\n}\n\n// load channels into UI\nObject(_helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"GET\", \"middleware.php?return=channels\", injectChannels);\nfunction injectChannels(response) {\n\tdocument.getElementById(\"channels\").innerHTML = response;\n}\n\n// toggle overlays\nObject(_helper_find__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".js-overlay-toggle\").forEach((element) => {\n\telement.addEventListener(\n\t\t\"click\",\n\t\t() => {\n\t\t\tObject(_helper_toggleClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_helper_find__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element.dataset.target), \"js-hidden\");\n\t\t},\n\t\ttrue\n\t);\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/site.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/site.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/assets/js/site.js */\"./src/assets/js/site.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/site.js?");

/***/ })

/******/ });