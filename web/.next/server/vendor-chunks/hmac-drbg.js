"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hmac-drbg";
exports.ids = ["vendor-chunks/hmac-drbg"];
exports.modules = {

/***/ "(ssr)/./node_modules/hmac-drbg/lib/hmac-drbg.js":
/*!*************************************************!*\
  !*** ./node_modules/hmac-drbg/lib/hmac-drbg.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hash = __webpack_require__(/*! hash.js */ \"(ssr)/./node_modules/hash.js/lib/hash.js\");\nvar utils = __webpack_require__(/*! minimalistic-crypto-utils */ \"(ssr)/./node_modules/minimalistic-crypto-utils/lib/utils.js\");\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"(ssr)/./node_modules/minimalistic-assert/index.js\");\n\nfunction HmacDRBG(options) {\n  if (!(this instanceof HmacDRBG))\n    return new HmacDRBG(options);\n  this.hash = options.hash;\n  this.predResist = !!options.predResist;\n\n  this.outLen = this.hash.outSize;\n  this.minEntropy = options.minEntropy || this.hash.hmacStrength;\n\n  this._reseed = null;\n  this.reseedInterval = null;\n  this.K = null;\n  this.V = null;\n\n  var entropy = utils.toArray(options.entropy, options.entropyEnc || 'hex');\n  var nonce = utils.toArray(options.nonce, options.nonceEnc || 'hex');\n  var pers = utils.toArray(options.pers, options.persEnc || 'hex');\n  assert(entropy.length >= (this.minEntropy / 8),\n         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');\n  this._init(entropy, nonce, pers);\n}\nmodule.exports = HmacDRBG;\n\nHmacDRBG.prototype._init = function init(entropy, nonce, pers) {\n  var seed = entropy.concat(nonce).concat(pers);\n\n  this.K = new Array(this.outLen / 8);\n  this.V = new Array(this.outLen / 8);\n  for (var i = 0; i < this.V.length; i++) {\n    this.K[i] = 0x00;\n    this.V[i] = 0x01;\n  }\n\n  this._update(seed);\n  this._reseed = 1;\n  this.reseedInterval = 0x1000000000000;  // 2^48\n};\n\nHmacDRBG.prototype._hmac = function hmac() {\n  return new hash.hmac(this.hash, this.K);\n};\n\nHmacDRBG.prototype._update = function update(seed) {\n  var kmac = this._hmac()\n                 .update(this.V)\n                 .update([ 0x00 ]);\n  if (seed)\n    kmac = kmac.update(seed);\n  this.K = kmac.digest();\n  this.V = this._hmac().update(this.V).digest();\n  if (!seed)\n    return;\n\n  this.K = this._hmac()\n               .update(this.V)\n               .update([ 0x01 ])\n               .update(seed)\n               .digest();\n  this.V = this._hmac().update(this.V).digest();\n};\n\nHmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {\n  // Optional entropy enc\n  if (typeof entropyEnc !== 'string') {\n    addEnc = add;\n    add = entropyEnc;\n    entropyEnc = null;\n  }\n\n  entropy = utils.toArray(entropy, entropyEnc);\n  add = utils.toArray(add, addEnc);\n\n  assert(entropy.length >= (this.minEntropy / 8),\n         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');\n\n  this._update(entropy.concat(add || []));\n  this._reseed = 1;\n};\n\nHmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {\n  if (this._reseed > this.reseedInterval)\n    throw new Error('Reseed is required');\n\n  // Optional encoding\n  if (typeof enc !== 'string') {\n    addEnc = add;\n    add = enc;\n    enc = null;\n  }\n\n  // Optional additional data\n  if (add) {\n    add = utils.toArray(add, addEnc || 'hex');\n    this._update(add);\n  }\n\n  var temp = [];\n  while (temp.length < len) {\n    this.V = this._hmac().update(this.V).digest();\n    temp = temp.concat(this.V);\n  }\n\n  var res = temp.slice(0, len);\n  this._update(add);\n  this._reseed++;\n  return utils.encode(res, enc);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaG1hYy1kcmJnL2xpYi9obWFjLWRyYmcuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLHlEQUFTO0FBQzVCLFlBQVksbUJBQU8sQ0FBQyw4RkFBMkI7QUFDL0MsYUFBYSxtQkFBTyxDQUFDLDhFQUFxQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVpbHgvLi9ub2RlX21vZHVsZXMvaG1hYy1kcmJnL2xpYi9obWFjLWRyYmcuanM/NTg0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNoID0gcmVxdWlyZSgnaGFzaC5qcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnbWluaW1hbGlzdGljLWNyeXB0by11dGlscycpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoJ21pbmltYWxpc3RpYy1hc3NlcnQnKTtcblxuZnVuY3Rpb24gSG1hY0RSQkcob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSG1hY0RSQkcpKVxuICAgIHJldHVybiBuZXcgSG1hY0RSQkcob3B0aW9ucyk7XG4gIHRoaXMuaGFzaCA9IG9wdGlvbnMuaGFzaDtcbiAgdGhpcy5wcmVkUmVzaXN0ID0gISFvcHRpb25zLnByZWRSZXNpc3Q7XG5cbiAgdGhpcy5vdXRMZW4gPSB0aGlzLmhhc2gub3V0U2l6ZTtcbiAgdGhpcy5taW5FbnRyb3B5ID0gb3B0aW9ucy5taW5FbnRyb3B5IHx8IHRoaXMuaGFzaC5obWFjU3RyZW5ndGg7XG5cbiAgdGhpcy5fcmVzZWVkID0gbnVsbDtcbiAgdGhpcy5yZXNlZWRJbnRlcnZhbCA9IG51bGw7XG4gIHRoaXMuSyA9IG51bGw7XG4gIHRoaXMuViA9IG51bGw7XG5cbiAgdmFyIGVudHJvcHkgPSB1dGlscy50b0FycmF5KG9wdGlvbnMuZW50cm9weSwgb3B0aW9ucy5lbnRyb3B5RW5jIHx8ICdoZXgnKTtcbiAgdmFyIG5vbmNlID0gdXRpbHMudG9BcnJheShvcHRpb25zLm5vbmNlLCBvcHRpb25zLm5vbmNlRW5jIHx8ICdoZXgnKTtcbiAgdmFyIHBlcnMgPSB1dGlscy50b0FycmF5KG9wdGlvbnMucGVycywgb3B0aW9ucy5wZXJzRW5jIHx8ICdoZXgnKTtcbiAgYXNzZXJ0KGVudHJvcHkubGVuZ3RoID49ICh0aGlzLm1pbkVudHJvcHkgLyA4KSxcbiAgICAgICAgICdOb3QgZW5vdWdoIGVudHJvcHkuIE1pbmltdW0gaXM6ICcgKyB0aGlzLm1pbkVudHJvcHkgKyAnIGJpdHMnKTtcbiAgdGhpcy5faW5pdChlbnRyb3B5LCBub25jZSwgcGVycyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEhtYWNEUkJHO1xuXG5IbWFjRFJCRy5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiBpbml0KGVudHJvcHksIG5vbmNlLCBwZXJzKSB7XG4gIHZhciBzZWVkID0gZW50cm9weS5jb25jYXQobm9uY2UpLmNvbmNhdChwZXJzKTtcblxuICB0aGlzLksgPSBuZXcgQXJyYXkodGhpcy5vdXRMZW4gLyA4KTtcbiAgdGhpcy5WID0gbmV3IEFycmF5KHRoaXMub3V0TGVuIC8gOCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5WLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5LW2ldID0gMHgwMDtcbiAgICB0aGlzLlZbaV0gPSAweDAxO1xuICB9XG5cbiAgdGhpcy5fdXBkYXRlKHNlZWQpO1xuICB0aGlzLl9yZXNlZWQgPSAxO1xuICB0aGlzLnJlc2VlZEludGVydmFsID0gMHgxMDAwMDAwMDAwMDAwOyAgLy8gMl40OFxufTtcblxuSG1hY0RSQkcucHJvdG90eXBlLl9obWFjID0gZnVuY3Rpb24gaG1hYygpIHtcbiAgcmV0dXJuIG5ldyBoYXNoLmhtYWModGhpcy5oYXNoLCB0aGlzLkspO1xufTtcblxuSG1hY0RSQkcucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoc2VlZCkge1xuICB2YXIga21hYyA9IHRoaXMuX2htYWMoKVxuICAgICAgICAgICAgICAgICAudXBkYXRlKHRoaXMuVilcbiAgICAgICAgICAgICAgICAgLnVwZGF0ZShbIDB4MDAgXSk7XG4gIGlmIChzZWVkKVxuICAgIGttYWMgPSBrbWFjLnVwZGF0ZShzZWVkKTtcbiAgdGhpcy5LID0ga21hYy5kaWdlc3QoKTtcbiAgdGhpcy5WID0gdGhpcy5faG1hYygpLnVwZGF0ZSh0aGlzLlYpLmRpZ2VzdCgpO1xuICBpZiAoIXNlZWQpXG4gICAgcmV0dXJuO1xuXG4gIHRoaXMuSyA9IHRoaXMuX2htYWMoKVxuICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLlYpXG4gICAgICAgICAgICAgICAudXBkYXRlKFsgMHgwMSBdKVxuICAgICAgICAgICAgICAgLnVwZGF0ZShzZWVkKVxuICAgICAgICAgICAgICAgLmRpZ2VzdCgpO1xuICB0aGlzLlYgPSB0aGlzLl9obWFjKCkudXBkYXRlKHRoaXMuVikuZGlnZXN0KCk7XG59O1xuXG5IbWFjRFJCRy5wcm90b3R5cGUucmVzZWVkID0gZnVuY3Rpb24gcmVzZWVkKGVudHJvcHksIGVudHJvcHlFbmMsIGFkZCwgYWRkRW5jKSB7XG4gIC8vIE9wdGlvbmFsIGVudHJvcHkgZW5jXG4gIGlmICh0eXBlb2YgZW50cm9weUVuYyAhPT0gJ3N0cmluZycpIHtcbiAgICBhZGRFbmMgPSBhZGQ7XG4gICAgYWRkID0gZW50cm9weUVuYztcbiAgICBlbnRyb3B5RW5jID0gbnVsbDtcbiAgfVxuXG4gIGVudHJvcHkgPSB1dGlscy50b0FycmF5KGVudHJvcHksIGVudHJvcHlFbmMpO1xuICBhZGQgPSB1dGlscy50b0FycmF5KGFkZCwgYWRkRW5jKTtcblxuICBhc3NlcnQoZW50cm9weS5sZW5ndGggPj0gKHRoaXMubWluRW50cm9weSAvIDgpLFxuICAgICAgICAgJ05vdCBlbm91Z2ggZW50cm9weS4gTWluaW11bSBpczogJyArIHRoaXMubWluRW50cm9weSArICcgYml0cycpO1xuXG4gIHRoaXMuX3VwZGF0ZShlbnRyb3B5LmNvbmNhdChhZGQgfHwgW10pKTtcbiAgdGhpcy5fcmVzZWVkID0gMTtcbn07XG5cbkhtYWNEUkJHLnByb3RvdHlwZS5nZW5lcmF0ZSA9IGZ1bmN0aW9uIGdlbmVyYXRlKGxlbiwgZW5jLCBhZGQsIGFkZEVuYykge1xuICBpZiAodGhpcy5fcmVzZWVkID4gdGhpcy5yZXNlZWRJbnRlcnZhbClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc2VlZCBpcyByZXF1aXJlZCcpO1xuXG4gIC8vIE9wdGlvbmFsIGVuY29kaW5nXG4gIGlmICh0eXBlb2YgZW5jICE9PSAnc3RyaW5nJykge1xuICAgIGFkZEVuYyA9IGFkZDtcbiAgICBhZGQgPSBlbmM7XG4gICAgZW5jID0gbnVsbDtcbiAgfVxuXG4gIC8vIE9wdGlvbmFsIGFkZGl0aW9uYWwgZGF0YVxuICBpZiAoYWRkKSB7XG4gICAgYWRkID0gdXRpbHMudG9BcnJheShhZGQsIGFkZEVuYyB8fCAnaGV4Jyk7XG4gICAgdGhpcy5fdXBkYXRlKGFkZCk7XG4gIH1cblxuICB2YXIgdGVtcCA9IFtdO1xuICB3aGlsZSAodGVtcC5sZW5ndGggPCBsZW4pIHtcbiAgICB0aGlzLlYgPSB0aGlzLl9obWFjKCkudXBkYXRlKHRoaXMuVikuZGlnZXN0KCk7XG4gICAgdGVtcCA9IHRlbXAuY29uY2F0KHRoaXMuVik7XG4gIH1cblxuICB2YXIgcmVzID0gdGVtcC5zbGljZSgwLCBsZW4pO1xuICB0aGlzLl91cGRhdGUoYWRkKTtcbiAgdGhpcy5fcmVzZWVkKys7XG4gIHJldHVybiB1dGlscy5lbmNvZGUocmVzLCBlbmMpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hmac-drbg/lib/hmac-drbg.js\n");

/***/ })

};
;