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
  var CurrentRowGapValue = rowgap.value;
  var CurrentColumnGapValue = columngap.value;
  col.addEventListener("change", function (e) {
    CurrentColValue = e.currentTarget.value;
    test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
    return CurrentColValue;
  });
  rowgap.addEventListener("change", function (e) {
    CurrentRowGapValue = e.currentTarget.value;
    test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
    return CurrentRowGapValue;
  });
  columngap.addEventListener("change", function (e) {
    CurrentColumnGapValue = e.currentTarget.value;
    test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
    return CurrentColumnGapValue;
  });
  test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
}
var col = document.getElementById("col");
var rowgap = document.getElementById("rowgap");
var columngap = document.getElementById("columngap");
var row = document.getElementById("row");
var css = document.getElementById("css");
var styleElement = document.getElementById("style");

var test = function test(col, rowGap, columnGap) {
  styleElement.innerHTML = ".row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -".concat(Number(rowGap), "px;\n  margin-left: -").concat(Number(columnGap), "px;\n}\n\n.col {\n  margin-top: ").concat(Number(rowGap), "px;\n  margin-left: ").concat(Number(columnGap), "px;\n  width: calc(").concat(1 / Number(col) * 100, "% - ").concat(Number(columnGap), "px);\n}\n");
  css.innerHTML = PR.prettyPrintOne(styleElement.innerHTML);
};

var range = function range(size) {
  return _toConsumableArray(Array(size).keys());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzgzZWUiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJDdXJyZW50Q29sVmFsdWUiLCJjb2wiLCJ2YWx1ZSIsIkN1cnJlbnRSb3dHYXBWYWx1ZSIsInJvd2dhcCIsIkN1cnJlbnRDb2x1bW5HYXBWYWx1ZSIsImNvbHVtbmdhcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInRlc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm93IiwiY3NzIiwic3R5bGVFbGVtZW50Iiwicm93R2FwIiwiY29sdW1uR2FwIiwiaW5uZXJIVE1MIiwiTnVtYmVyIiwiUFIiLCJwcmV0dHlQcmludE9uZSIsInJhbmdlIiwic2l6ZSIsIkFycmF5Iiwia2V5cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQUEsNkRBQVcsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RJLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsTUFBSUMsZUFBZSxHQUFHQyxHQUFHLENBQUNDLEtBQTFCO0FBQ0EsTUFBSUMsa0JBQWtCLEdBQUdDLE1BQU0sQ0FBQ0YsS0FBaEM7QUFDQSxNQUFJRyxxQkFBcUIsR0FBR0MsU0FBUyxDQUFDSixLQUF0QztBQUNBRCxLQUFHLENBQUNNLGdCQUFKLFdBQStCLFVBQUFDLENBQUMsRUFBSTtBQUNsQ1IsbUJBQWUsR0FBR1EsQ0FBQyxDQUFDQyxhQUFGLENBQWdCUCxLQUFsQztBQUNBUSxRQUFJLENBQUNWLGVBQUQsRUFBa0JHLGtCQUFsQixFQUFzQ0UscUJBQXRDLENBQUo7QUFDQSxXQUFPTCxlQUFQO0FBQ0QsR0FKRDtBQUtBSSxRQUFNLENBQUNHLGdCQUFQLFdBQWtDLFVBQUFDLENBQUMsRUFBSTtBQUNyQ0wsc0JBQWtCLEdBQUdLLENBQUMsQ0FBQ0MsYUFBRixDQUFnQlAsS0FBckM7QUFDQVEsUUFBSSxDQUFDVixlQUFELEVBQWtCRyxrQkFBbEIsRUFBc0NFLHFCQUF0QyxDQUFKO0FBQ0EsV0FBT0Ysa0JBQVA7QUFDRCxHQUpEO0FBS0FHLFdBQVMsQ0FBQ0MsZ0JBQVYsV0FBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hDSCx5QkFBcUIsR0FBR0csQ0FBQyxDQUFDQyxhQUFGLENBQWdCUCxLQUF4QztBQUNBUSxRQUFJLENBQUNWLGVBQUQsRUFBa0JHLGtCQUFsQixFQUFzQ0UscUJBQXRDLENBQUo7QUFDQSxXQUFPQSxxQkFBUDtBQUNELEdBSkQ7QUFLQUssTUFBSSxDQUFDVixlQUFELEVBQWtCRyxrQkFBbEIsRUFBc0NFLHFCQUF0QyxDQUFKO0FBQ0Q7QUFFRCxJQUFNSixHQUFHLEdBQUdVLFFBQVEsQ0FBQ0MsY0FBVCxPQUFaO0FBQ0EsSUFBTVIsTUFBTSxHQUFHTyxRQUFRLENBQUNDLGNBQVQsVUFBZjtBQUNBLElBQU1OLFNBQVMsR0FBR0ssUUFBUSxDQUFDQyxjQUFULGFBQWxCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNDLGNBQVQsT0FBWjtBQUNBLElBQU1FLEdBQUcsR0FBR0gsUUFBUSxDQUFDQyxjQUFULE9BQVo7QUFFQSxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxTQUFyQjs7QUFDQSxJQUFNRixJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDVCxHQUFELEVBQU1lLE1BQU4sRUFBY0MsU0FBZCxFQUE0QjtBQUN2Q0YsY0FBWSxDQUFDRyxTQUFiLDBFQUdlQyxNQUFNLENBQUNILE1BQUQsQ0FIckIsa0NBSWdCRyxNQUFNLENBQUNGLFNBQUQsQ0FKdEIsNkNBUWNFLE1BQU0sQ0FBQ0gsTUFBRCxDQVJwQixpQ0FTZUcsTUFBTSxDQUFDRixTQUFELENBVHJCLGdDQVVlLElBQUlFLE1BQU0sQ0FBQ2xCLEdBQUQsQ0FBWCxHQUFvQixHQVZsQyxpQkFVNENrQixNQUFNLENBQUNGLFNBQUQsQ0FWbEQ7QUFhQUgsS0FBRyxDQUFDSSxTQUFKLEdBQWdCRSxFQUFFLENBQUNDLGNBQUgsQ0FBa0JOLFlBQVksQ0FBQ0csU0FBL0IsQ0FBaEI7QUFDRCxDQWZEOztBQWdCQSxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxJQUFJO0FBQUEsNEJBQVFDLEtBQUssQ0FBQ0QsSUFBRCxDQUFMLENBQVlFLElBQVosRUFBUjtBQUFBLENBQWxCLEM7Ozs7Ozs7Ozs7O0FDN0NBLHlDIiwiZmlsZSI6Ii9kb2NzL2Fzc2V0cy9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBjb25zdHJ1Y3RvciBmcm9tIFwiLi9tb2R1bGVzL2dyaWRcIjtcbmNvbnN0cnVjdG9yKCk7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge1xuICBsZXQgQ3VycmVudENvbFZhbHVlID0gY29sLnZhbHVlO1xuICBsZXQgQ3VycmVudFJvd0dhcFZhbHVlID0gcm93Z2FwLnZhbHVlO1xuICBsZXQgQ3VycmVudENvbHVtbkdhcFZhbHVlID0gY29sdW1uZ2FwLnZhbHVlO1xuICBjb2wuYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgZSA9PiB7XG4gICAgQ3VycmVudENvbFZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIHRlc3QoQ3VycmVudENvbFZhbHVlLCBDdXJyZW50Um93R2FwVmFsdWUsIEN1cnJlbnRDb2x1bW5HYXBWYWx1ZSk7XG4gICAgcmV0dXJuIEN1cnJlbnRDb2xWYWx1ZTtcbiAgfSk7XG4gIHJvd2dhcC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCBlID0+IHtcbiAgICBDdXJyZW50Um93R2FwVmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgdGVzdChDdXJyZW50Q29sVmFsdWUsIEN1cnJlbnRSb3dHYXBWYWx1ZSwgQ3VycmVudENvbHVtbkdhcFZhbHVlKTtcbiAgICByZXR1cm4gQ3VycmVudFJvd0dhcFZhbHVlO1xuICB9KTtcbiAgY29sdW1uZ2FwLmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsIGUgPT4ge1xuICAgIEN1cnJlbnRDb2x1bW5HYXBWYWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICB0ZXN0KEN1cnJlbnRDb2xWYWx1ZSwgQ3VycmVudFJvd0dhcFZhbHVlLCBDdXJyZW50Q29sdW1uR2FwVmFsdWUpO1xuICAgIHJldHVybiBDdXJyZW50Q29sdW1uR2FwVmFsdWU7XG4gIH0pO1xuICB0ZXN0KEN1cnJlbnRDb2xWYWx1ZSwgQ3VycmVudFJvd0dhcFZhbHVlLCBDdXJyZW50Q29sdW1uR2FwVmFsdWUpO1xufVxuXG5jb25zdCBjb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29sYCk7XG5jb25zdCByb3dnYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93Z2FwYCk7XG5jb25zdCBjb2x1bW5nYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29sdW1uZ2FwYCk7XG5jb25zdCByb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93YCk7XG5jb25zdCBjc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3NzYCk7XG5cbmNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdHlsZWApO1xuY29uc3QgdGVzdCA9IChjb2wsIHJvd0dhcCwgY29sdW1uR2FwKSA9PiB7XG4gIHN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogLSR7TnVtYmVyKHJvd0dhcCl9cHg7XG4gIG1hcmdpbi1sZWZ0OiAtJHtOdW1iZXIoY29sdW1uR2FwKX1weDtcbn1cblxuLmNvbCB7XG4gIG1hcmdpbi10b3A6ICR7TnVtYmVyKHJvd0dhcCl9cHg7XG4gIG1hcmdpbi1sZWZ0OiAke051bWJlcihjb2x1bW5HYXApfXB4O1xuICB3aWR0aDogY2FsYygkeygxIC8gTnVtYmVyKGNvbCkpICogMTAwfSUgLSAke051bWJlcihjb2x1bW5HYXApfXB4KTtcbn1cbmA7XG4gIGNzcy5pbm5lckhUTUwgPSBQUi5wcmV0dHlQcmludE9uZShzdHlsZUVsZW1lbnQuaW5uZXJIVE1MKTtcbn07XG5jb25zdCByYW5nZSA9IHNpemUgPT4gWy4uLkFycmF5KHNpemUpLmtleXMoKV07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=