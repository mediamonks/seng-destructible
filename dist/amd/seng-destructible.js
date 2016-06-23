define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Destructible_1 = __webpack_require__(2);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Destructible_1.default;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Destructible = (function () {
	    function Destructible() {
	        this._isDestructed = false;
	    }
	    /**
	     * After {@link destruct} has been called, this method returns true.
	     * Use this method to determine whether destruct() should be run again.
	     */
	    Destructible.prototype.isDestructed = function () {
	        return this._isDestructed;
	    };
	    /**
	     * Destruct this class.
	     */
	    Destructible.prototype.destruct = function () {
	        this._isDestructed = true;
	    };
	    return Destructible;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Destructible;


/***/ }
/******/ ])});;