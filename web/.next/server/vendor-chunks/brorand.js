/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/brorand";
exports.ids = ["vendor-chunks/brorand"];
exports.modules = {

/***/ "(ssr)/./node_modules/brorand/index.js":
/*!***************************************!*\
  !*** ./node_modules/brorand/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var r;\n\nmodule.exports = function rand(len) {\n  if (!r)\n    r = new Rand(null);\n\n  return r.generate(len);\n};\n\nfunction Rand(rand) {\n  this.rand = rand;\n}\nmodule.exports.Rand = Rand;\n\nRand.prototype.generate = function generate(len) {\n  return this._rand(len);\n};\n\n// Emulate crypto API using randy\nRand.prototype._rand = function _rand(n) {\n  if (this.rand.getBytes)\n    return this.rand.getBytes(n);\n\n  var res = new Uint8Array(n);\n  for (var i = 0; i < res.length; i++)\n    res[i] = this.rand.getByte();\n  return res;\n};\n\nif (typeof self === 'object') {\n  if (self.crypto && self.crypto.getRandomValues) {\n    // Modern browsers\n    Rand.prototype._rand = function _rand(n) {\n      var arr = new Uint8Array(n);\n      self.crypto.getRandomValues(arr);\n      return arr;\n    };\n  } else if (self.msCrypto && self.msCrypto.getRandomValues) {\n    // IE\n    Rand.prototype._rand = function _rand(n) {\n      var arr = new Uint8Array(n);\n      self.msCrypto.getRandomValues(arr);\n      return arr;\n    };\n\n  // Safari's WebWorkers do not have `crypto`\n  } else if (typeof window === 'object') {\n    // Old junk\n    Rand.prototype._rand = function() {\n      throw new Error('Not implemented yet');\n    };\n  }\n} else {\n  // Node.js or Web worker with no crypto support\n  try {\n    var crypto = __webpack_require__(/*! crypto */ \"crypto\");\n    if (typeof crypto.randomBytes !== 'function')\n      throw new Error('Not supported');\n\n    Rand.prototype._rand = function _rand(n) {\n      return crypto.randomBytes(n);\n    };\n  } catch (e) {\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvcmFuZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLHNCQUFRO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWlseC8uL25vZGVfbW9kdWxlcy9icm9yYW5kL2luZGV4LmpzP2IzY2EiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmFuZChsZW4pIHtcbiAgaWYgKCFyKVxuICAgIHIgPSBuZXcgUmFuZChudWxsKTtcblxuICByZXR1cm4gci5nZW5lcmF0ZShsZW4pO1xufTtcblxuZnVuY3Rpb24gUmFuZChyYW5kKSB7XG4gIHRoaXMucmFuZCA9IHJhbmQ7XG59XG5tb2R1bGUuZXhwb3J0cy5SYW5kID0gUmFuZDtcblxuUmFuZC5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiBnZW5lcmF0ZShsZW4pIHtcbiAgcmV0dXJuIHRoaXMuX3JhbmQobGVuKTtcbn07XG5cbi8vIEVtdWxhdGUgY3J5cHRvIEFQSSB1c2luZyByYW5keVxuUmFuZC5wcm90b3R5cGUuX3JhbmQgPSBmdW5jdGlvbiBfcmFuZChuKSB7XG4gIGlmICh0aGlzLnJhbmQuZ2V0Qnl0ZXMpXG4gICAgcmV0dXJuIHRoaXMucmFuZC5nZXRCeXRlcyhuKTtcblxuICB2YXIgcmVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKVxuICAgIHJlc1tpXSA9IHRoaXMucmFuZC5nZXRCeXRlKCk7XG4gIHJldHVybiByZXM7XG59O1xuXG5pZiAodHlwZW9mIHNlbGYgPT09ICdvYmplY3QnKSB7XG4gIGlmIChzZWxmLmNyeXB0byAmJiBzZWxmLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBNb2Rlcm4gYnJvd3NlcnNcbiAgICBSYW5kLnByb3RvdHlwZS5fcmFuZCA9IGZ1bmN0aW9uIF9yYW5kKG4pIHtcbiAgICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgIHNlbGYuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHNlbGYubXNDcnlwdG8gJiYgc2VsZi5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBJRVxuICAgIFJhbmQucHJvdG90eXBlLl9yYW5kID0gZnVuY3Rpb24gX3JhbmQobikge1xuICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgICAgc2VsZi5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuICAvLyBTYWZhcmkncyBXZWJXb3JrZXJzIGRvIG5vdCBoYXZlIGBjcnlwdG9gXG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBPbGQganVua1xuICAgIFJhbmQucHJvdG90eXBlLl9yYW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcbiAgICB9O1xuICB9XG59IGVsc2Uge1xuICAvLyBOb2RlLmpzIG9yIFdlYiB3b3JrZXIgd2l0aCBubyBjcnlwdG8gc3VwcG9ydFxuICB0cnkge1xuICAgIHZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICBpZiAodHlwZW9mIGNyeXB0by5yYW5kb21CeXRlcyAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHN1cHBvcnRlZCcpO1xuXG4gICAgUmFuZC5wcm90b3R5cGUuX3JhbmQgPSBmdW5jdGlvbiBfcmFuZChuKSB7XG4gICAgICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKG4pO1xuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/brorand/index.js\n");

/***/ })

};
;