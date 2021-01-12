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
eval("__webpack_require__.r(__webpack_exports__);\nfunction ajaxRequest(method, url, callback) {\n\tlet content = new XMLHttpRequest();\n\tcontent.open(method, url, true);\n\tcontent.send();\n\tcontent.onreadystatechange = function () {\n\t\tif (content.readyState === 4 && content.readyState) {\n\t\t\tif (callback) {\n\t\t\t\tcallback(content.response);\n\t\t\t} else {\n\t\t\t\treturn content.response;\n\t\t\t}\n\t\t}\n\t};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ajaxRequest);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/ajaxRequest.js?");

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

/***/ "./src/assets/js/helper/reload.js":
/*!****************************************!*\
  !*** ./src/assets/js/helper/reload.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction reload() {\n\twindow.location.reload();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reload);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/reload.js?");

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

/***/ "./src/assets/js/helper/scrollToTarget.js":
/*!************************************************!*\
  !*** ./src/assets/js/helper/scrollToTarget.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction scrollToTarget(element, offsetX = 0, offsetY = 0, callback) {\n\tlet scrollPositionY = element ? element.offsetTop - offsetY : 0;\n\tlet scrollPositionX = offsetX;\n\n\twindow.scrollTo({\n\t\tleft: scrollPositionX,\n\t\ttop: scrollPositionY,\n\t});\n\n\tif (callback) {\n\t\tcallback();\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollToTarget);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/scrollToTarget.js?");

/***/ }),

/***/ "./src/assets/js/helper/scrollToTop.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helper/scrollToTop.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction scrollToTop() {\n\twindow.scrollTo({\n\t\tleft: 0,\n\t\ttop: 0,\n\t\tbehavior: \"smooth\",\n\t});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollToTop);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/scrollToTop.js?");

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

/***/ "./src/assets/js/helper/togglePageScroll.js":
/*!**************************************************!*\
  !*** ./src/assets/js/helper/togglePageScroll.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// ###########\n// # imports #\n// ###########\n\n// ###########\n// # program #\n// ###########\nfunction togglePageScroll() {\n\tif (window.isScrollable) {\n\t\twindow.scrollPosition = window.pageYOffset;\n\t\tdocument.body.style.cssText = `overflow: hidden; position: fixed; top: -${window.scrollPosition}px`;\n\t\twindow.isScrollable = false;\n\t} else {\n\t\tdocument.body.style.cssText = null;\n\t\twindow.scrollTo(0, scrollPosition);\n\t\twindow.isScrollable = true;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (togglePageScroll);\n\n\n//# sourceURL=webpack:///./src/assets/js/helper/togglePageScroll.js?");

/***/ }),

/***/ "./src/assets/js/site.js":
/*!*******************************!*\
  !*** ./src/assets/js/site.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/ajaxRequest */ \"./src/assets/js/helper/ajaxRequest.js\");\n/* harmony import */ var _helper_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/find */ \"./src/assets/js/helper/find.js\");\n/* harmony import */ var _helper_reload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/reload */ \"./src/assets/js/helper/reload.js\");\n/* harmony import */ var _helper_returnSearchParam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/returnSearchParam */ \"./src/assets/js/helper/returnSearchParam.js\");\n/* harmony import */ var _helper_scrollToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/scrollToTop */ \"./src/assets/js/helper/scrollToTop.js\");\n/* harmony import */ var _helper_toggleClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/toggleClass */ \"./src/assets/js/helper/toggleClass.js\");\n/* harmony import */ var _helper_togglePageScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper/togglePageScroll */ \"./src/assets/js/helper/togglePageScroll.js\");\n/* harmony import */ var _tools_setupTimeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/setupTimeline */ \"./src/assets/js/tools/setupTimeline.js\");\n// ###########\n// # imports #\n// ###########\n\n\n\n\n\n\n\n\n\n\n\n// ###########\n// # program #\n// ###########\n\n// ---- initial states\nwindow.isScrollable = true;\nwindow.maxTextLength = Object(_helper_returnSearchParam__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"maxtextlength\")\n\t? Object(_helper_returnSearchParam__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"maxtextlength\")\n\t: 400;\nwindow.headerHeight = document.querySelector(\n\t\".application-header\"\n).clientHeight;\n\n// check for current channel. If none is set, get the initial one from middleware\nwindow.currentChannel = Object(_helper_returnSearchParam__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"channel\");\nif (!currentChannel) {\n\tObject(_helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n\t\t\"GET\",\n\t\t\"middleware.php?return=defaultChannel\",\n\t\tupdateCurrentChannel\n\t);\n\n\tfunction updateCurrentChannel(response) {\n\t\twindow.currentChannel = response;\n\t}\n}\nconsole.log(currentChannel);\n\n// get latest unreadItem from saved timestamp\nwindow.lastReadTimestamps = localStorage.getItem(\"lastReadItems\");\nif (!lastReadTimestamps) {\n\tlastReadTimestamps = 0;\n}\n\n// ---- load content and setupTimeline with response\nObject(_helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n\t\"GET\",\n\t\"middleware.php?return=content&channel=\" +\n\t\tcurrentChannel +\n\t\t\"&timestamp=\" +\n\t\tlastReadTimestamps +\n\t\t\"&maxtextlength=\" +\n\t\tmaxTextLength,\n\t_tools_setupTimeline__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n);\n\n// ---- load channels into UI-Element\nObject(_helper_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"GET\", \"middleware.php?return=channels\", injectChannels);\nfunction injectChannels(response) {\n\tdocument.getElementById(\"channels\").innerHTML = response;\n}\n\n// toggle overlays\nObject(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".js-overlay-toggle\").forEach((element) => {\n\telement.addEventListener(\n\t\t\"click\",\n\t\t() => {\n\t\t\tObject(_helper_toggleClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element.dataset.target), \"js-hidden\");\n\t\t\tObject(_helper_togglePageScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n\t\t\t\tdocument.querySelector(\"body\"),\n\t\t\t\tdocument.querySelector(\"#application-content\")\n\t\t\t);\n\t\t\tevent.preventDefault();\n\t\t},\n\t\ttrue\n\t);\n});\n\n// ---- reload\nObject(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".js-reload\").forEach((element) => {\n\telement.addEventListener(\"click\", _helper_reload__WEBPACK_IMPORTED_MODULE_2__[\"default\"], true);\n});\n\n// ---- scroll to top\nObject(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".js-scroll-top\").forEach((element) => {\n\telement.addEventListener(\n\t\t\"click\",\n\t\t() => {\n\t\t\tObject(_helper_scrollToTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\t\t},\n\t\ttrue\n\t);\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/site.js?");

/***/ }),

/***/ "./src/assets/js/tools/setupTimeline.js":
/*!**********************************************!*\
  !*** ./src/assets/js/tools/setupTimeline.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_scrollToTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/scrollToTarget */ \"./src/assets/js/helper/scrollToTarget.js\");\n/* harmony import */ var _helper_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/find */ \"./src/assets/js/helper/find.js\");\n/* harmony import */ var _helper_toggleClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/toggleClass */ \"./src/assets/js/helper/toggleClass.js\");\n/* harmony import */ var _tools_updateTimestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/updateTimestamp */ \"./src/assets/js/tools/updateTimestamp.js\");\n// ###########\n// # imports #\n// ###########\n\n\n\n\n\n\n// ###########\n// # program #\n// ###########\n\nfunction setupTimeline(response) {\n\t// place response\n\tdocument.getElementById(\"application-content\").innerHTML = response;\n\n\t// get unreadItem-element and it's count\n\twindow.unreadItemsCount = document.getElementById(\n\t\t\"unread-items\"\n\t).dataset.unreaditems;\n\twindow.unreadItemsElementCount = document.getElementById(\n\t\t\"unread-items__count\"\n\t);\n\n\t// now get amount of feeditems and calculate latest item to se it as scroll-anchor\n\tlet allFeedItems = Object(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".timeline__item\");\n\tlet latestItem = allFeedItems[unreadItemsCount - 1];\n\n\t// toggle ui-elements\n\tif (window.unreadItemsCount > 0) {\n\t\tObject(_helper_toggleClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"#unread-items\"), \"js-hidden\");\n\t}\n\tObject(_helper_toggleClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_helper_find__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"#application-loading\"), \"js-hidden\");\n\n\t// scroll to target\n\tObject(_helper_scrollToTarget__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(latestItem, 0, 52, () => {\n\t\tObject(_tools_updateTimestamp__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(allFeedItems);\n\t});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setupTimeline);\n\n\n//# sourceURL=webpack:///./src/assets/js/tools/setupTimeline.js?");

/***/ }),

/***/ "./src/assets/js/tools/updateTimestamp.js":
/*!************************************************!*\
  !*** ./src/assets/js/tools/updateTimestamp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/find */ \"./src/assets/js/helper/find.js\");\n/* harmony import */ var _helper_toggleClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/toggleClass */ \"./src/assets/js/helper/toggleClass.js\");\n// ###########\n// # imports #\n// ###########\n\n\n\n\n// ###########\n// # program #\n// ###########\n\n// remembering the timestamp, when the item comes into view\nfunction updateTimestamp(elements) {\n\tlet config = {\n\t\troot: null,\n\t\trootMargin: \"0px\",\n\t\tthreshold: 1,\n\t};\n\n\tlet observer = new IntersectionObserver(onChange, config);\n\telements.forEach((element) => observer.observe(element));\n}\n\nfunction hideBadge() {\n\tObject(_helper_toggleClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_helper_find__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"#unread-items\"), \"js-hidden\");\n}\n\nfunction onChange(changes, observer) {\n\tchanges.forEach((change) => {\n\t\tif (change.intersectionRatio > 0) {\n\t\t\tlet lastSavedTimestamp = localStorage.getItem(\"lastReadItems\");\n\t\t\tlet itemTimestamp = change.target.dataset.timestamp;\n\t\t\tlet remainingItemsCount = change.target.dataset.count;\n\t\t\tif (lastSavedTimestamp < itemTimestamp) {\n\t\t\t\tlocalStorage.setItem(\"lastReadItems\", itemTimestamp);\n\t\t\t\tif (remainingItemsCount > 0) {\n\t\t\t\t\tunreadItemsElementCount.innerHTML = remainingItemsCount;\n\t\t\t\t} else {\n\t\t\t\t\thideBadge();\n\t\t\t\t}\n\t\t\t}\n\t\t\tchange.target.classList.add(\"timeline__item--read\");\n\t\t\tobserver.unobserve(change.target);\n\t\t}\n\t});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateTimestamp);\n\n\n//# sourceURL=webpack:///./src/assets/js/tools/updateTimestamp.js?");

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