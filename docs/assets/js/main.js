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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/grid */ "./src/js/modules/grid.js");

Object(_modules_grid__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/js/modules/grid.js":
/*!********************************!*\
  !*** ./src/js/modules/grid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constructor; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function constructor() {
  var CurrentColValue = col.value;
  showColElement(CurrentColValue);
  col.addEventListener("change", function (e) {
    CurrentColValue = e.target.value;
    showColElement(CurrentColValue);
  });
  test();
}
var col = document.getElementById("col");

var showColElement = function showColElement(array) {
  row.innerHTML = "";
  var rowArray = range(Number(array));
  rowArray.forEach(function (value, index, array) {
    var colElement = document.createElement("li");
    colElement.innerText = index + 1;
    colElement.setAttribute("class", "col _col".concat(index + 1));
    row.appendChild(colElement);
  });
};

var rowgap = document.getElementById("rowgap");
var columngap = document.getElementById("columngap");
var row = document.getElementById("row");
var css = document.getElementById("css");
var html = document.getElementById("html");
var styleElement = document.getElementById("style");

var test = function test() {
  styleElement.innerHTML = ".row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.col {\n  width: ".concat(1 / 3 * 100, "%\n}\n");
  css.innerHTML = styleElement.innerHTML;
  html.innerHTML = escapeHtml(row.innerHTML);
};

var range = function range(size) {
  return _toConsumableArray(Array(size).keys());
};

var escapeHtml = function escapeHtml(innerHTML) {
  innerHTML = innerHTML.replace(/></g, ">\n<");
  innerHTML = innerHTML.replace(/&/g, "&amp;");
  innerHTML = innerHTML.replace(/</g, "&lt;");
  innerHTML = innerHTML.replace(/>/g, "&gt;");
  innerHTML = innerHTML.replace(/"/g, "&quot;");
  innerHTML = innerHTML.replace(/'/g, "&#39;");
  return innerHTML;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hisyou/github/grid-generator/src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! /Users/hisyou/github/grid-generator/src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzgzZWUiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJDdXJyZW50Q29sVmFsdWUiLCJjb2wiLCJ2YWx1ZSIsInNob3dDb2xFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ0ZXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFycmF5Iiwicm93IiwiaW5uZXJIVE1MIiwicm93QXJyYXkiLCJyYW5nZSIsIk51bWJlciIsImZvckVhY2giLCJpbmRleCIsImNvbEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJyb3dnYXAiLCJjb2x1bW5nYXAiLCJjc3MiLCJodG1sIiwic3R5bGVFbGVtZW50IiwiZXNjYXBlSHRtbCIsInNpemUiLCJBcnJheSIsImtleXMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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WjtBQUNBcEIsV0FBUyxHQUFHQSxTQUFTLENBQUNvQixPQUFWLENBQWtCLElBQWxCLEVBQXdCLE9BQXhCLENBQVo7QUFDQSxTQUFPcEIsU0FBUDtBQUNELENBUkQsQzs7Ozs7Ozs7Ozs7QUM5Q0EseUMiLCJmaWxlIjoiL2RvY3MvYXNzZXRzL2pzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGNvbnN0cnVjdG9yIGZyb20gXCIuL21vZHVsZXMvZ3JpZFwiO1xuY29uc3RydWN0b3IoKTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7XG4gIGxldCBDdXJyZW50Q29sVmFsdWUgPSBjb2wudmFsdWU7XG4gIHNob3dDb2xFbGVtZW50KEN1cnJlbnRDb2xWYWx1ZSk7XG4gIGNvbC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoZSkgPT4ge1xuICAgIEN1cnJlbnRDb2xWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2hvd0NvbEVsZW1lbnQoQ3VycmVudENvbFZhbHVlKTtcbiAgfSk7XG4gIHRlc3QoKVxufVxuXG5cbmNvbnN0IGNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb2xgKTtcbmNvbnN0IHNob3dDb2xFbGVtZW50ID0gKGFycmF5KSA9PiB7XG4gICAgcm93LmlubmVySFRNTCA9IGBgO1xuICAgIGNvbnN0IHJvd0FycmF5ID0gcmFuZ2UoTnVtYmVyKGFycmF5KSk7XG4gICAgcm93QXJyYXkuZm9yRWFjaCgodmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgY29uc3QgY29sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGxpYCk7XG4gICAgICBjb2xFbGVtZW50LmlubmVyVGV4dCA9IGluZGV4ICsgMTtcbiAgICAgIGNvbEVsZW1lbnQuc2V0QXR0cmlidXRlKGBjbGFzc2AsIGBjb2wgX2NvbCR7aW5kZXggKyAxfWApO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNvbEVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5cbmNvbnN0IHJvd2dhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3dnYXBgKTtcbmNvbnN0IGNvbHVtbmdhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb2x1bW5nYXBgKTtcbmNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3dgKTtcbmNvbnN0IGNzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjc3NgKTtcbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaHRtbGApO1xuXG5jb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3R5bGVgKTtcbmNvbnN0IHRlc3QgPSAoKSA9PiB7XG4gIHN0eWxlRWxlbWVudC5pbm5lckhUTUwgPVxuYC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2wge1xuICB3aWR0aDogJHsoMS8zKSoxMDB9JVxufVxuYDtcbiAgY3NzLmlubmVySFRNTCA9IHN0eWxlRWxlbWVudC5pbm5lckhUTUw7XG4gIGh0bWwuaW5uZXJIVE1MID0gZXNjYXBlSHRtbChyb3cuaW5uZXJIVE1MKTtcbn1cbmNvbnN0IHJhbmdlID0gc2l6ZSA9PiBbLi4uQXJyYXkoc2l6ZSkua2V5cygpXTtcbmNvbnN0IGVzY2FwZUh0bWwgPSAoaW5uZXJIVE1MKSA9PiB7XG4gIGlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKC8+PC9nLCBgPlxcbjxgKTtcbiAgaW5uZXJIVE1MID0gaW5uZXJIVE1MLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKTtcbiAgaW5uZXJIVE1MID0gaW5uZXJIVE1MLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xuICBpbm5lckhUTUwgPSBpbm5lckhUTUwucmVwbGFjZSgvPi9nLCBcIiZndDtcIik7XG4gIGlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKTtcbiAgaW5uZXJIVE1MID0gaW5uZXJIVE1MLnJlcGxhY2UoLycvZywgXCImIzM5O1wiKTtcbiAgcmV0dXJuIGlubmVySFRNTDtcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=