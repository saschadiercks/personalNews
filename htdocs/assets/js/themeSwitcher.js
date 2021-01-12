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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/themeSwitcher.js":
/*!****************************************!*\
  !*** ./src/assets/js/themeSwitcher.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ###########\n// # imports #\n// ###########\n\n// ###########\n// # program #\n// ###########\n// the first theme in the array is the default theme\nlet availableThemes = [\"auto\", \"dark\", \"light\"];\nlet applyThemeClassTo = document.querySelector(\"html\");\nlet availableThemesCount = availableThemes.length;\n\n// ---- run this immediately\n// we're reading the theme from localstorage and place it as a data-attribute now\n// this way, we can easily control the css without affecting other classes\nlet currentTheme = getCurrentTheme();\nlet currentThemeNo = availableThemes.indexOf(currentTheme);\n\n// check if the theme is available, otherwise set default theme\nif (currentThemeNo === -1) {\n\tcurrentTheme = availableThemes[0];\n\tcurrentThemeNo = 0;\n}\n\n// now apply the theme\napplyThemeClassTo.dataset.theme = currentTheme;\n\n// ---- run this after html is loaded\ndocument.addEventListener(\"DOMContentLoaded\", domReady, true);\n\n// ---- functions\nfunction domReady() {\n\tdocument\n\t\t.querySelector(\"#js-themeswitch\")\n\t\t.addEventListener(\"click\", toggleTheme, true);\n}\n\nfunction getCurrentTheme() {\n\tlet currentTheme = localStorage.getItem(\"theme\")\n\t\t? localStorage.getItem(\"theme\")\n\t\t: availableThemes[0];\n\treturn currentTheme;\n}\n\nfunction toggleTheme() {\n\tcurrentThemeNo++;\n\tif (currentThemeNo > availableThemesCount - 1) {\n\t\tcurrentThemeNo = 0;\n\t}\n\n\tapplyThemeClassTo.dataset.theme = availableThemes[currentThemeNo];\n\tlocalStorage.setItem(\"theme\", availableThemes[currentThemeNo]);\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/themeSwitcher.js?");

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/assets/js/themeSwitcher.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/assets/js/themeSwitcher.js */\"./src/assets/js/themeSwitcher.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/themeSwitcher.js?");

/***/ })

/******/ });