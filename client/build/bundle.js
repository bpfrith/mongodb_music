/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var EntriesDataRequester = __webpack_require__(2);

var UI = function() {
  var entriesDataRequester = new EntriesDataRequester();
  entries.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {

  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(entries) {
    // var container = document.getElementById('entries');
    var container = document.querySelector('#entires');
    entries.forEach(function(entry){
      var li = document.createElement('li');
      this.appendText(li, entry.artist, 'Artist: ');
      this.appendText(li, entry.album, 'Album: ');
    
      container.appendChild(li);
    }.bind(this));
  },
}

module.exports = UI;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Entries = function(options){
  this.artist = options.name;
  this.album = options.album;
}

module.exports = Entries;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Entries = __webpack_require__(1);

var EntriesDataRequester = function(){

};

EntriesDataRequester.prototype = {
  makeGetRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  all: function(callback){
    var url = 'http://localhost:3000/api/entries';
    this.makeGetRequest(url, function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var result = JSON.parse(jsonString);

      callback(result);
    })
  }
}

module.exports = EntriesDataRequester;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(0);

var app = function() {
  new UI();
}

window.onload = app;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map