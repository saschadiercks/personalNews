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

/***/ "./src/assets/js/site.js":
/*!*******************************!*\
  !*** ./src/assets/js/site.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// is the DOM ready for manipulation?\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\t// ---- variables ----\n\tvar themeLight = \"light\";\n\tvar themeDark = \"dark\";\n\tvar elementToToggleOnLoad = \"application-loading\";\n\tvar effectClassApplyTo = document.getElementsByTagName(\"body\")[0];\n\tvar feedItem = \"#feed-items li\";\n\n\t// helper: change classes\n\tfunction addClass(element, className) {\n\t\telement.classList.add(className);\n\t}\n\tfunction removeClass(element, className) {\n\t\telement.classList.remove(className);\n\t}\n\n\t// helper: scroll to desired position\n\tfunction scrollToTarget(x, y) {\n\t\twindow.scrollTo(x, y);\n\t}\n\n\t// helper: get Attribute from Element\n\tfunction getAtrributeFromElement(selector, attribute) {\n\t\tvar attributeValue = document\n\t\t\t.querySelector(selector)\n\t\t\t.getAttribute(attribute);\n\t\treturn attributeValue;\n\t}\n\n\t// add JS to body-tag to allow CSS-Manipulation if JS is available\n\tfunction setJs() {\n\t\tvar body = document.getElementsByTagName(\"body\")[0];\n\t\taddClass(body, \"js\");\n\t}\n\n\t// ---- global functions ----\n\n\t// Overlay-Handling\n\tfunction handleOverlayTriggers(elementClassName) {\n\t\tvar elements = document.getElementsByClassName(elementClassName);\n\t\tfor (i = 0; i < elements.length; i++) {\n\t\t\telements[i].onclick = function (event) {\n\t\t\t\tvar target = this.getAttribute(\"data-target\");\n\t\t\t\ttoggleOverlay(target, event);\n\t\t\t};\n\t\t}\n\t}\n\tfunction toggleOverlay(elementId, event) {\n\t\tvar targetElement = document.getElementById(elementId);\n\t\tvar fixElementId = \"content\";\n\t\tif (targetElement.classList.contains(\"js-visible\")) {\n\t\t\taddClass(targetElement, \"js-hidden\");\n\t\t\tremoveClass(targetElement, \"js-visible\");\n\t\t\tremoveClass(effectClassApplyTo, \"js-fx\");\n\t\t} else {\n\t\t\tremoveClass(targetElement, \"js-hidden\");\n\t\t\taddClass(targetElement, \"js-visible\");\n\t\t\taddClass(effectClassApplyTo, \"js-fx\");\n\t\t}\n\t\tfixElement(\"content\");\n\t\tevent.preventDefault();\n\t}\n\n\t// make element sticky (via position in css)\n\tfunction stickyElement(stickyId, compensateId, compensateProperty) {\n\t\tstickyElement = document.getElementById(stickyId);\n\t\tstickyElement.classList.add(\"sticky\");\n\t\tstickyHeight = stickyElement.clientHeight + \"px\";\n\n\t\t//add Element-Height as defined property to desired element\n\t\tdocument\n\t\t\t.getElementById(compensateId)\n\t\t\t.style.setProperty(compensateProperty, stickyHeight);\n\t}\n\n\t// place Element in relation to sticky element\n\tfunction placeOverlay(elementId) {\n\t\toverlayElement = document.getElementById(elementId);\n\t\toverlayElement.style.top = stickyHeight;\n\t}\n\n\t// ---- theme-switching ----\n\t// check if localStorage is filled and set body-class with it. This is useful, if the site runs as app\n\tvar savedLocalStorageTheme = localStorage.getItem(\"theme\");\n\tvar applyThemeClassTo = document.getElementsByTagName(\"html\")[0];\n\tif (savedLocalStorageTheme !== null) {\n\t\tremoveClass(applyThemeClassTo, themeLight);\n\t\tremoveClass(applyThemeClassTo, themeDark);\n\t\taddClass(applyThemeClassTo, savedLocalStorageTheme);\n\t\tif (savedLocalStorageTheme === themeLight) {\n\t\t\tdocument.getElementById(\"theme-switcher\").checked = false;\n\t\t}\n\t\tif (savedLocalStorageTheme === themeDark) {\n\t\t\tdocument.getElementById(\"theme-switcher\").checked = true;\n\t\t}\n\t}\n\n\t// switch theme by adding and removing classes to body\n\tfunction themeSwitch(elementId) {\n\t\tvar renderFile = \"themeswitch.php?theme=\";\n\t\tvar applyThemeClassTo = document.getElementsByTagName(\"html\")[0];\n\n\t\tswitchingElement = document.getElementById(elementId);\n\t\tswitchingElement.onclick = function () {\n\t\t\txmlhttp = new XMLHttpRequest();\n\t\t\tif (this.checked) {\n\t\t\t\taddClass(applyThemeClassTo, themeDark);\n\t\t\t\tremoveClass(applyThemeClassTo, themeLight);\n\t\t\t\txmlhttp.open(\"GET\", renderFile + themeDark, true);\n\t\t\t\txmlhttp.send();\n\t\t\t\tlocalStorage.setItem(\"theme\", themeDark);\n\t\t\t\tconsole.log(\"localStorage Theme is: \" + themeDark);\n\t\t\t} else {\n\t\t\t\taddClass(applyThemeClassTo, themeLight);\n\t\t\t\tremoveClass(applyThemeClassTo, themeDark);\n\t\t\t\txmlhttp.open(\"GET\", \"themeswitch.php?theme=\" + themeLight, true);\n\t\t\t\txmlhttp.send();\n\t\t\t\tlocalStorage.setItem(\"theme\", themeLight);\n\t\t\t\tconsole.log(\"localStorage Theme is: \" + themeLight);\n\t\t\t}\n\t\t};\n\t}\n\n\t// ---- Loading Feeds (via Ajax) ----\n\t// add listener\n\tfunction channelSwitch(elementId) {\n\t\telementContainer = document.getElementById(elementId);\n\t\telementContainer.addEventListener(\"click\", switchChannel, false);\n\t}\n\n\t// prepare loading after click\n\tfunction switchChannel(e) {\n\t\tif (e.target !== e.currentTarget) {\n\t\t\tchannelLink = e.target.getAttribute(\"href\");\n\t\t\tremoveClass(effectClassApplyTo, \"js-fx\");\n\t\t\tajaxRequest(channelLink);\n\t\t\te.preventDefault();\n\t\t}\n\t\te.stopPropagation();\n\t}\n\n\t// loading the content\n\tfunction ajaxRequest(channelLink) {\n\t\t// if this function is called with no parameter, we're checking the localStorage,\n\t\t// if one is present we use this (useful for initial load)\n\t\tif (channelLink === \"\") {\n\t\t\tvar savedLocalStorageChannel = localStorage.getItem(\"channel\");\n\t\t\tif (savedLocalStorageChannel !== null) {\n\t\t\t\tvar channelLink = savedLocalStorageChannel;\n\t\t\t}\n\t\t}\n\n\t\t// requesting the content\n\t\tdocument\n\t\t\t.getElementById(elementToToggleOnLoad)\n\t\t\t.classList.remove(\"js-hidden\");\n\t\trenderFile = \"render-feeds.php\";\n\t\txmlhttp = new XMLHttpRequest();\n\t\txmlhttp.open(\"GET\", renderFile + channelLink, true);\n\t\txmlhttp.send();\n\n\t\toverlayContainer = document.getElementById(\"application-overlay\");\n\t\taddClass(overlayContainer, \"js-hidden\");\n\t\tfixElement(\"content\");\n\n\t\t// output if call is succesful\n\t\txmlhttp.onreadystatechange = function () {\n\t\t\tif (xmlhttp.readyState === 4 && xmlhttp.readyState) {\n\t\t\t\t// add content\n\t\t\t\toutputContainer = document.getElementById(\"content\");\n\t\t\t\toutputContainer.innerHTML = xmlhttp.response;\n\n\t\t\t\t// reset scrollpostion and remove loader & menu\n\t\t\t\tscrollToTarget(0, 0);\n\t\t\t\tdocument\n\t\t\t\t\t.getElementById(\"application-overlay\")\n\t\t\t\t\t.classList.remove(\"js-visible\");\n\t\t\t\tdocument\n\t\t\t\t\t.getElementById(elementToToggleOnLoad)\n\t\t\t\t\t.classList.add(\"js-hidden\");\n\t\t\t\tremoveClass(elementToFix, \"js-fixed\");\n\n\t\t\t\t// set current channel and get last clicked Item from storage & latest Item in Feed\n\t\t\t\tlocalStorage.setItem(\"channel\", channelLink);\n\t\t\t\tlastItemTs = localStorage.getItem(\"lastItemTs\");\n\t\t\t\twindow.latestItemTs = getAtrributeFromElement(feedItem, \"data-ts\");\n\n\t\t\t\t// give browser time and handle feed-timeline afterwards\n\t\t\t\tsetTimeout(stepsAfterLoad(), 100);\n\t\t\t\tfunction stepsAfterLoad() {\n\t\t\t\t\tlistenerClickFeedItem(feedItem); // add Event-Listener and get oldest Item-Timestamp from Timeline\n\t\t\t\t\tif (lastItemTs) {\n\t\t\t\t\t\tif (document.querySelector(\"#ts-\" + lastItemTs) === null) {\n\t\t\t\t\t\t\tsetUnreadItemCount(\"Not found\");\n\t\t\t\t\t\t\tlocalStorage.setItem(\"lastItemTs\", latestItemTs);\n\t\t\t\t\t\t} else if (lastItemTs < oldestItemInTimeline) {\n\t\t\t\t\t\t\tsetUnreadItemCount(\n\t\t\t\t\t\t\t\t\"(\" +\n\t\t\t\t\t\t\t\t\tgetAtrributeFromElement(\n\t\t\t\t\t\t\t\t\t\t\"#ts-\" + oldestItemInTimeline,\n\t\t\t\t\t\t\t\t\t\t\"data-count\"\n\t\t\t\t\t\t\t\t\t) +\n\t\t\t\t\t\t\t\t\t\")\"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tscrollIntoView(\"#ts-\" + oldestItemInTimeline);\n\t\t\t\t\t\t} else if (latestItemTs > lastItemTs) {\n\t\t\t\t\t\t\tsetUnreadItemCount(\n\t\t\t\t\t\t\t\tgetAtrributeFromElement(\"#ts-\" + lastItemTs, \"data-count\")\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tscrollIntoView(\"#ts-\" + lastItemTs);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tsetUnreadItemCount(\"Welcome\");\n\t\t\t\t\t\tlocalStorage.setItem(\"lastItemTs\", latestItemTs);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n\n\t// ---- scroll to element\n\tfunction scrollIntoView(target) {\n\t\tvar scrollPositionY = document.querySelector(target).offsetTop;\n\t\tvar stickyOffset = document.getElementById(\"application-header\")\n\t\t\t.clientHeight;\n\t\tscrollToTarget(0, scrollPositionY - stickyOffset);\n\t}\n\n\t// ---- handle scrolldepth\n\twindow.addEventListener(\"scroll\", function (event) {\n\t\tscrollDepth = window.pageYOffset;\n\t\tif (scrollDepth <= 0) {\n\t\t\tsetUnreadItemCount();\n\t\t\tlocalStorage.setItem(\"lastItemTs\", latestItemTs);\n\t\t}\n\t});\n\tfunction listenerClickFeedItem(selector) {\n\t\tvar elements = document.querySelectorAll(selector);\n\t\tfor (i = 0; i < elements.length; i++) {\n\t\t\telements[i].onclick = function (event) {\n\t\t\t\tlocalStorage.setItem(\"offsetTop\", window.pageYOffset);\n\t\t\t\tlocalStorage.setItem(\"lastItemTs\", this.getAttribute(\"data-ts\"));\n\t\t\t};\n\n\t\t\t// save last Item in timeline for later\n\t\t\tif (i == elements.length - 1) {\n\t\t\t\twindow.oldestItemInTimeline = elements[i].getAttribute(\"data-ts\");\n\t\t\t}\n\t\t}\n\t}\n\n\t// ---- handle unreadItem badge\n\tfunction setUnreadItemCount(value) {\n\t\tbadge = \"#unread-items\";\n\t\tbadgeValue = \"#unread-items__count\";\n\t\tif (value > 0 || typeof value == \"string\") {\n\t\t\tdocument.querySelector(badge).classList.remove(\"js-hidden\");\n\t\t\tdocument.querySelector(badge).classList.add(\"js-show\");\n\t\t\tdocument.querySelector(badgeValue).innerText = value;\n\t\t} else {\n\t\t\tdocument.querySelector(badge).classList.remove(\"js-show\");\n\t\t\tdocument.querySelector(badge).classList.add(\"js-hide\");\n\t\t}\n\t}\n\n\t// ---- fix element to current position\n\tfunction fixElement(elementId) {\n\t\telementToFix = document.getElementById(elementId);\n\t\tscrollY = window.pageYOffset;\n\n\t\tif (elementToFix.classList.contains(\"js-fixed\")) {\n\t\t\tremoveClass(elementToFix, \"js-fixed\");\n\t\t\telementToFix.style.top = \"\";\n\t\t\tscrollToTarget(0, scrollYMem);\n\t\t} else {\n\t\t\taddClass(elementToFix, \"js-fixed\");\n\t\t\telementToFix.style.top = \"-\" + scrollY + \"px\";\n\t\t\tscrollYMem = scrollY;\n\t\t}\n\t}\n\n\t// ---- initialize ----\n\t// set Js on body if JS is available\n\tsetJs();\n\n\t// initial load of content\n\tajaxRequest(\"\");\n\n\t//sticky header (item(id) to fix, item(id) with property to compensate fix)\n\tstickyElement(\"application-header\", \"content\", \"margin-top\");\n\n\t// theme switcher\n\tthemeSwitch(\"theme-switcher\");\n\n\t// Overlays\n\thandleOverlayTriggers(\"js-overlay-toggle\");\n\n\t// place overlay\n\tplaceOverlay(\"application-overlay\");\n\n\t// switch channels\n\tchannelSwitch(\"channels\");\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/site.js?");

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