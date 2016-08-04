(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WoodenLadder"] = factory();
	else
		root["WoodenLadder"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (http://piecioshka.pl/)
	 * @name wooden-ladder
	 * @description Invokes 'fn1' until 'limit' is reached after that call 'fn2'
	 * @version 1.1.0
	 * @license MIT
	 * @example
	 * let WoodenLadder = require('wooden-ladder');
	 *
	 * let fn1 = () => console.log(1);
	 * let fn2 = () => console.log(2);
	 * let lad = new WoodenLadder(3, fn1, fn2);
	 *
	 * lad.climb(); // fired "fn1"
	 * lad.climb(); // fired "fn1"
	 * lad.climb(); // fired "fn1"
	 *
	 * lad.climb(); // fired "fn2"
	 * lad.climb(); // fired "fn2"
	 * lad.climb(); // fired "fn2"
	 * ...
	 * lad.climb(); // fired "fn2"
	 */
	
	'use strict';
	
	function WoodenLadder(limit, fn1, fn2) {
	    this.step = 0;
	    this.limit = limit;
	    this.fn1 = fn1;
	    this.fn2 = fn2;
	}
	
	WoodenLadder.prototype = {
	    climb: function () {
	        if (this.step < this.limit) {
	            this.step++;
	
	            this.fn1();
	        } else {
	            this.fn2();
	        }
	    },
	
	    reset: function () {
	        this.step = 0;
	    }
	};
	
	module.exports = WoodenLadder;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=wooden-ladder.js.map