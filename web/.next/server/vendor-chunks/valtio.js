"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/valtio";
exports.ids = ["vendor-chunks/valtio"];
exports.modules = {

/***/ "(ssr)/./node_modules/valtio/esm/vanilla.mjs":
/*!*********************************************!*\
  !*** ./node_modules/valtio/esm/vanilla.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVersion: () => (/* binding */ getVersion),\n/* harmony export */   proxy: () => (/* binding */ proxy),\n/* harmony export */   ref: () => (/* binding */ ref),\n/* harmony export */   snapshot: () => (/* binding */ snapshot),\n/* harmony export */   subscribe: () => (/* binding */ subscribe),\n/* harmony export */   unstable_buildProxyFunction: () => (/* binding */ unstable_buildProxyFunction)\n/* harmony export */ });\n/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-compare */ \"(ssr)/./node_modules/proxy-compare/dist/index.modern.js\");\n\n\nconst isObject = (x) => typeof x === \"object\" && x !== null;\nconst proxyStateMap = /* @__PURE__ */ new WeakMap();\nconst refSet = /* @__PURE__ */ new WeakSet();\nconst buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {\n  switch (promise.status) {\n    case \"fulfilled\":\n      return promise.value;\n    case \"rejected\":\n      throw promise.reason;\n    default:\n      throw promise;\n  }\n}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {\n  const cache = snapCache.get(target);\n  if ((cache == null ? void 0 : cache[0]) === version) {\n    return cache[1];\n  }\n  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));\n  (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(snap, true);\n  snapCache.set(target, [version, snap]);\n  Reflect.ownKeys(target).forEach((key) => {\n    if (Object.getOwnPropertyDescriptor(snap, key)) {\n      return;\n    }\n    const value = Reflect.get(target, key);\n    const desc = {\n      value,\n      enumerable: true,\n      // This is intentional to avoid copying with proxy-compare.\n      // It's still non-writable, so it avoids assigning a value.\n      configurable: true\n    };\n    if (refSet.has(value)) {\n      (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(value, false);\n    } else if (value instanceof Promise) {\n      delete desc.value;\n      desc.get = () => handlePromise(value);\n    } else if (proxyStateMap.has(value)) {\n      const [target2, ensureVersion] = proxyStateMap.get(\n        value\n      );\n      desc.value = createSnapshot(\n        target2,\n        ensureVersion(),\n        handlePromise\n      );\n    }\n    Object.defineProperty(snap, key, desc);\n  });\n  return Object.preventExtensions(snap);\n}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {\n  if (!isObject(initialObject)) {\n    throw new Error(\"object required\");\n  }\n  const found = proxyCache.get(initialObject);\n  if (found) {\n    return found;\n  }\n  let version = versionHolder[0];\n  const listeners = /* @__PURE__ */ new Set();\n  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {\n    if (version !== nextVersion) {\n      version = nextVersion;\n      listeners.forEach((listener) => listener(op, nextVersion));\n    }\n  };\n  let checkVersion = versionHolder[1];\n  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {\n    if (checkVersion !== nextCheckVersion && !listeners.size) {\n      checkVersion = nextCheckVersion;\n      propProxyStates.forEach(([propProxyState]) => {\n        const propVersion = propProxyState[1](nextCheckVersion);\n        if (propVersion > version) {\n          version = propVersion;\n        }\n      });\n    }\n    return version;\n  };\n  const createPropListener = (prop) => (op, nextVersion) => {\n    const newOp = [...op];\n    newOp[1] = [prop, ...newOp[1]];\n    notifyUpdate(newOp, nextVersion);\n  };\n  const propProxyStates = /* @__PURE__ */ new Map();\n  const addPropListener = (prop, propProxyState) => {\n    if (( false ? 0 : void 0) !== \"production\" && propProxyStates.has(prop)) {\n      throw new Error(\"prop listener already exists\");\n    }\n    if (listeners.size) {\n      const remove = propProxyState[3](createPropListener(prop));\n      propProxyStates.set(prop, [propProxyState, remove]);\n    } else {\n      propProxyStates.set(prop, [propProxyState]);\n    }\n  };\n  const removePropListener = (prop) => {\n    var _a;\n    const entry = propProxyStates.get(prop);\n    if (entry) {\n      propProxyStates.delete(prop);\n      (_a = entry[1]) == null ? void 0 : _a.call(entry);\n    }\n  };\n  const addListener = (listener) => {\n    listeners.add(listener);\n    if (listeners.size === 1) {\n      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {\n        if (( false ? 0 : void 0) !== \"production\" && prevRemove) {\n          throw new Error(\"remove already exists\");\n        }\n        const remove = propProxyState[3](createPropListener(prop));\n        propProxyStates.set(prop, [propProxyState, remove]);\n      });\n    }\n    const removeListener = () => {\n      listeners.delete(listener);\n      if (listeners.size === 0) {\n        propProxyStates.forEach(([propProxyState, remove], prop) => {\n          if (remove) {\n            remove();\n            propProxyStates.set(prop, [propProxyState]);\n          }\n        });\n      }\n    };\n    return removeListener;\n  };\n  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));\n  const handler = {\n    deleteProperty(target, prop) {\n      const prevValue = Reflect.get(target, prop);\n      removePropListener(prop);\n      const deleted = Reflect.deleteProperty(target, prop);\n      if (deleted) {\n        notifyUpdate([\"delete\", [prop], prevValue]);\n      }\n      return deleted;\n    },\n    set(target, prop, value, receiver) {\n      const hasPrevValue = Reflect.has(target, prop);\n      const prevValue = Reflect.get(target, prop, receiver);\n      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {\n        return true;\n      }\n      removePropListener(prop);\n      if (isObject(value)) {\n        value = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.getUntracked)(value) || value;\n      }\n      let nextValue = value;\n      if (value instanceof Promise) {\n        value.then((v) => {\n          value.status = \"fulfilled\";\n          value.value = v;\n          notifyUpdate([\"resolve\", [prop], v]);\n        }).catch((e) => {\n          value.status = \"rejected\";\n          value.reason = e;\n          notifyUpdate([\"reject\", [prop], e]);\n        });\n      } else {\n        if (!proxyStateMap.has(value) && canProxy(value)) {\n          nextValue = proxyFunction(value);\n        }\n        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);\n        if (childProxyState) {\n          addPropListener(prop, childProxyState);\n        }\n      }\n      Reflect.set(target, prop, nextValue, receiver);\n      notifyUpdate([\"set\", [prop], value, prevValue]);\n      return true;\n    }\n  };\n  const proxyObject = newProxy(baseObject, handler);\n  proxyCache.set(initialObject, proxyObject);\n  const proxyState = [\n    baseObject,\n    ensureVersion,\n    createSnapshot,\n    addListener\n  ];\n  proxyStateMap.set(proxyObject, proxyState);\n  Reflect.ownKeys(initialObject).forEach((key) => {\n    const desc = Object.getOwnPropertyDescriptor(\n      initialObject,\n      key\n    );\n    if (\"value\" in desc) {\n      proxyObject[key] = initialObject[key];\n      delete desc.value;\n      delete desc.writable;\n    }\n    Object.defineProperty(baseObject, key, desc);\n  });\n  return proxyObject;\n}) => [\n  // public functions\n  proxyFunction,\n  // shared state\n  proxyStateMap,\n  refSet,\n  // internal things\n  objectIs,\n  newProxy,\n  canProxy,\n  defaultHandlePromise,\n  snapCache,\n  createSnapshot,\n  proxyCache,\n  versionHolder\n];\nconst [defaultProxyFunction] = buildProxyFunction();\nfunction proxy(initialObject = {}) {\n  return defaultProxyFunction(initialObject);\n}\nfunction getVersion(proxyObject) {\n  const proxyState = proxyStateMap.get(proxyObject);\n  return proxyState == null ? void 0 : proxyState[1]();\n}\nfunction subscribe(proxyObject, callback, notifyInSync) {\n  const proxyState = proxyStateMap.get(proxyObject);\n  if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n    console.warn(\"Please use proxy object\");\n  }\n  let promise;\n  const ops = [];\n  const addListener = proxyState[3];\n  let isListenerActive = false;\n  const listener = (op) => {\n    ops.push(op);\n    if (notifyInSync) {\n      callback(ops.splice(0));\n      return;\n    }\n    if (!promise) {\n      promise = Promise.resolve().then(() => {\n        promise = void 0;\n        if (isListenerActive) {\n          callback(ops.splice(0));\n        }\n      });\n    }\n  };\n  const removeListener = addListener(listener);\n  isListenerActive = true;\n  return () => {\n    isListenerActive = false;\n    removeListener();\n  };\n}\nfunction snapshot(proxyObject, handlePromise) {\n  const proxyState = proxyStateMap.get(proxyObject);\n  if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n    console.warn(\"Please use proxy object\");\n  }\n  const [target, ensureVersion, createSnapshot] = proxyState;\n  return createSnapshot(target, ensureVersion(), handlePromise);\n}\nfunction ref(obj) {\n  refSet.add(obj);\n  return obj;\n}\nconst unstable_buildProxyFunction = buildProxyFunction;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS92YW5pbGxhLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBEOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBVztBQUNqQixNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQWUsR0FBRyxDQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBZSxHQUFHLENBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFlLEdBQUcsQ0FBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVpbHgvLi9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS92YW5pbGxhLm1qcz8wNDNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcmtUb1RyYWNrLCBnZXRVbnRyYWNrZWQgfSBmcm9tICdwcm94eS1jb21wYXJlJztcblxuY29uc3QgaXNPYmplY3QgPSAoeCkgPT4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgeCAhPT0gbnVsbDtcbmNvbnN0IHByb3h5U3RhdGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZlNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuY29uc3QgYnVpbGRQcm94eUZ1bmN0aW9uID0gKG9iamVjdElzID0gT2JqZWN0LmlzLCBuZXdQcm94eSA9ICh0YXJnZXQsIGhhbmRsZXIpID0+IG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpLCBjYW5Qcm94eSA9ICh4KSA9PiBpc09iamVjdCh4KSAmJiAhcmVmU2V0Lmhhcyh4KSAmJiAoQXJyYXkuaXNBcnJheSh4KSB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiB4KSkgJiYgISh4IGluc3RhbmNlb2YgV2Vha01hcCkgJiYgISh4IGluc3RhbmNlb2YgV2Vha1NldCkgJiYgISh4IGluc3RhbmNlb2YgRXJyb3IpICYmICEoeCBpbnN0YW5jZW9mIE51bWJlcikgJiYgISh4IGluc3RhbmNlb2YgRGF0ZSkgJiYgISh4IGluc3RhbmNlb2YgU3RyaW5nKSAmJiAhKHggaW5zdGFuY2VvZiBSZWdFeHApICYmICEoeCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSwgZGVmYXVsdEhhbmRsZVByb21pc2UgPSAocHJvbWlzZSkgPT4ge1xuICBzd2l0Y2ggKHByb21pc2Uuc3RhdHVzKSB7XG4gICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgcmV0dXJuIHByb21pc2UudmFsdWU7XG4gICAgY2FzZSBcInJlamVjdGVkXCI6XG4gICAgICB0aHJvdyBwcm9taXNlLnJlYXNvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxufSwgc25hcENhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIGNyZWF0ZVNuYXBzaG90ID0gKHRhcmdldCwgdmVyc2lvbiwgaGFuZGxlUHJvbWlzZSA9IGRlZmF1bHRIYW5kbGVQcm9taXNlKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gc25hcENhY2hlLmdldCh0YXJnZXQpO1xuICBpZiAoKGNhY2hlID09IG51bGwgPyB2b2lkIDAgOiBjYWNoZVswXSkgPT09IHZlcnNpb24pIHtcbiAgICByZXR1cm4gY2FjaGVbMV07XG4gIH1cbiAgY29uc3Qgc25hcCA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IFtdIDogT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSk7XG4gIG1hcmtUb1RyYWNrKHNuYXAsIHRydWUpO1xuICBzbmFwQ2FjaGUuc2V0KHRhcmdldCwgW3ZlcnNpb24sIHNuYXBdKTtcbiAgUmVmbGVjdC5vd25LZXlzKHRhcmdldCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc25hcCwga2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5KTtcbiAgICBjb25zdCBkZXNjID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbCB0byBhdm9pZCBjb3B5aW5nIHdpdGggcHJveHktY29tcGFyZS5cbiAgICAgIC8vIEl0J3Mgc3RpbGwgbm9uLXdyaXRhYmxlLCBzbyBpdCBhdm9pZHMgYXNzaWduaW5nIGEgdmFsdWUuXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9O1xuICAgIGlmIChyZWZTZXQuaGFzKHZhbHVlKSkge1xuICAgICAgbWFya1RvVHJhY2sodmFsdWUsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgICBkZXNjLmdldCA9ICgpID0+IGhhbmRsZVByb21pc2UodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAocHJveHlTdGF0ZU1hcC5oYXModmFsdWUpKSB7XG4gICAgICBjb25zdCBbdGFyZ2V0MiwgZW5zdXJlVmVyc2lvbl0gPSBwcm94eVN0YXRlTWFwLmdldChcbiAgICAgICAgdmFsdWVcbiAgICAgICk7XG4gICAgICBkZXNjLnZhbHVlID0gY3JlYXRlU25hcHNob3QoXG4gICAgICAgIHRhcmdldDIsXG4gICAgICAgIGVuc3VyZVZlcnNpb24oKSxcbiAgICAgICAgaGFuZGxlUHJvbWlzZVxuICAgICAgKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNuYXAsIGtleSwgZGVzYyk7XG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHNuYXApO1xufSwgcHJveHlDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCB2ZXJzaW9uSG9sZGVyID0gWzEsIDFdLCBwcm94eUZ1bmN0aW9uID0gKGluaXRpYWxPYmplY3QpID0+IHtcbiAgaWYgKCFpc09iamVjdChpbml0aWFsT2JqZWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm9iamVjdCByZXF1aXJlZFwiKTtcbiAgfVxuICBjb25zdCBmb3VuZCA9IHByb3h5Q2FjaGUuZ2V0KGluaXRpYWxPYmplY3QpO1xuICBpZiAoZm91bmQpIHtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgbGV0IHZlcnNpb24gPSB2ZXJzaW9uSG9sZGVyWzBdO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBub3RpZnlVcGRhdGUgPSAob3AsIG5leHRWZXJzaW9uID0gKyt2ZXJzaW9uSG9sZGVyWzBdKSA9PiB7XG4gICAgaWYgKHZlcnNpb24gIT09IG5leHRWZXJzaW9uKSB7XG4gICAgICB2ZXJzaW9uID0gbmV4dFZlcnNpb247XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKG9wLCBuZXh0VmVyc2lvbikpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGNoZWNrVmVyc2lvbiA9IHZlcnNpb25Ib2xkZXJbMV07XG4gIGNvbnN0IGVuc3VyZVZlcnNpb24gPSAobmV4dENoZWNrVmVyc2lvbiA9ICsrdmVyc2lvbkhvbGRlclsxXSkgPT4ge1xuICAgIGlmIChjaGVja1ZlcnNpb24gIT09IG5leHRDaGVja1ZlcnNpb24gJiYgIWxpc3RlbmVycy5zaXplKSB7XG4gICAgICBjaGVja1ZlcnNpb24gPSBuZXh0Q2hlY2tWZXJzaW9uO1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmZvckVhY2goKFtwcm9wUHJveHlTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvcFZlcnNpb24gPSBwcm9wUHJveHlTdGF0ZVsxXShuZXh0Q2hlY2tWZXJzaW9uKTtcbiAgICAgICAgaWYgKHByb3BWZXJzaW9uID4gdmVyc2lvbikge1xuICAgICAgICAgIHZlcnNpb24gPSBwcm9wVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9O1xuICBjb25zdCBjcmVhdGVQcm9wTGlzdGVuZXIgPSAocHJvcCkgPT4gKG9wLCBuZXh0VmVyc2lvbikgPT4ge1xuICAgIGNvbnN0IG5ld09wID0gWy4uLm9wXTtcbiAgICBuZXdPcFsxXSA9IFtwcm9wLCAuLi5uZXdPcFsxXV07XG4gICAgbm90aWZ5VXBkYXRlKG5ld09wLCBuZXh0VmVyc2lvbik7XG4gIH07XG4gIGNvbnN0IHByb3BQcm94eVN0YXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IGFkZFByb3BMaXN0ZW5lciA9IChwcm9wLCBwcm9wUHJveHlTdGF0ZSkgPT4ge1xuICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9wUHJveHlTdGF0ZXMuaGFzKHByb3ApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9wIGxpc3RlbmVyIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgIH1cbiAgICBpZiAobGlzdGVuZXJzLnNpemUpIHtcbiAgICAgIGNvbnN0IHJlbW92ZSA9IHByb3BQcm94eVN0YXRlWzNdKGNyZWF0ZVByb3BMaXN0ZW5lcihwcm9wKSk7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZSwgcmVtb3ZlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVQcm9wTGlzdGVuZXIgPSAocHJvcCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBlbnRyeSA9IHByb3BQcm94eVN0YXRlcy5nZXQocHJvcCk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuZGVsZXRlKHByb3ApO1xuICAgICAgKF9hID0gZW50cnlbMV0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKGVudHJ5KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZExpc3RlbmVyID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgaWYgKGxpc3RlbmVycy5zaXplID09PSAxKSB7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuZm9yRWFjaCgoW3Byb3BQcm94eVN0YXRlLCBwcmV2UmVtb3ZlXSwgcHJvcCkgPT4ge1xuICAgICAgICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJldlJlbW92ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlbW92ZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1vdmUgPSBwcm9wUHJveHlTdGF0ZVszXShjcmVhdGVQcm9wTGlzdGVuZXIocHJvcCkpO1xuICAgICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZSwgcmVtb3ZlXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBwcm9wUHJveHlTdGF0ZXMuZm9yRWFjaCgoW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gcmVtb3ZlTGlzdGVuZXI7XG4gIH07XG4gIGNvbnN0IGJhc2VPYmplY3QgPSBBcnJheS5pc0FycmF5KGluaXRpYWxPYmplY3QpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihpbml0aWFsT2JqZWN0KSk7XG4gIGNvbnN0IGhhbmRsZXIgPSB7XG4gICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB7XG4gICAgICBjb25zdCBwcmV2VmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3ApO1xuICAgICAgcmVtb3ZlUHJvcExpc3RlbmVyKHByb3ApO1xuICAgICAgY29uc3QgZGVsZXRlZCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vdGlmeVVwZGF0ZShbXCJkZWxldGVcIiwgW3Byb3BdLCBwcmV2VmFsdWVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWxldGVkO1xuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICBjb25zdCBoYXNQcmV2VmFsdWUgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgICAgY29uc3QgcHJldlZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgICBpZiAoaGFzUHJldlZhbHVlICYmIChvYmplY3RJcyhwcmV2VmFsdWUsIHZhbHVlKSB8fCBwcm94eUNhY2hlLmhhcyh2YWx1ZSkgJiYgb2JqZWN0SXMocHJldlZhbHVlLCBwcm94eUNhY2hlLmdldCh2YWx1ZSkpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZVByb3BMaXN0ZW5lcihwcm9wKTtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRVbnRyYWNrZWQodmFsdWUpIHx8IHZhbHVlO1xuICAgICAgfVxuICAgICAgbGV0IG5leHRWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YWx1ZS50aGVuKCh2KSA9PiB7XG4gICAgICAgICAgdmFsdWUuc3RhdHVzID0gXCJmdWxmaWxsZWRcIjtcbiAgICAgICAgICB2YWx1ZS52YWx1ZSA9IHY7XG4gICAgICAgICAgbm90aWZ5VXBkYXRlKFtcInJlc29sdmVcIiwgW3Byb3BdLCB2XSk7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgdmFsdWUuc3RhdHVzID0gXCJyZWplY3RlZFwiO1xuICAgICAgICAgIHZhbHVlLnJlYXNvbiA9IGU7XG4gICAgICAgICAgbm90aWZ5VXBkYXRlKFtcInJlamVjdFwiLCBbcHJvcF0sIGVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXByb3h5U3RhdGVNYXAuaGFzKHZhbHVlKSAmJiBjYW5Qcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXh0VmFsdWUgPSBwcm94eUZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZFByb3h5U3RhdGUgPSAhcmVmU2V0LmhhcyhuZXh0VmFsdWUpICYmIHByb3h5U3RhdGVNYXAuZ2V0KG5leHRWYWx1ZSk7XG4gICAgICAgIGlmIChjaGlsZFByb3h5U3RhdGUpIHtcbiAgICAgICAgICBhZGRQcm9wTGlzdGVuZXIocHJvcCwgY2hpbGRQcm94eVN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wLCBuZXh0VmFsdWUsIHJlY2VpdmVyKTtcbiAgICAgIG5vdGlmeVVwZGF0ZShbXCJzZXRcIiwgW3Byb3BdLCB2YWx1ZSwgcHJldlZhbHVlXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb3h5T2JqZWN0ID0gbmV3UHJveHkoYmFzZU9iamVjdCwgaGFuZGxlcik7XG4gIHByb3h5Q2FjaGUuc2V0KGluaXRpYWxPYmplY3QsIHByb3h5T2JqZWN0KTtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IFtcbiAgICBiYXNlT2JqZWN0LFxuICAgIGVuc3VyZVZlcnNpb24sXG4gICAgY3JlYXRlU25hcHNob3QsXG4gICAgYWRkTGlzdGVuZXJcbiAgXTtcbiAgcHJveHlTdGF0ZU1hcC5zZXQocHJveHlPYmplY3QsIHByb3h5U3RhdGUpO1xuICBSZWZsZWN0Lm93bktleXMoaW5pdGlhbE9iamVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICBpbml0aWFsT2JqZWN0LFxuICAgICAga2V5XG4gICAgKTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICAgIHByb3h5T2JqZWN0W2tleV0gPSBpbml0aWFsT2JqZWN0W2tleV07XG4gICAgICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgICAgIGRlbGV0ZSBkZXNjLndyaXRhYmxlO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYmFzZU9iamVjdCwga2V5LCBkZXNjKTtcbiAgfSk7XG4gIHJldHVybiBwcm94eU9iamVjdDtcbn0pID0+IFtcbiAgLy8gcHVibGljIGZ1bmN0aW9uc1xuICBwcm94eUZ1bmN0aW9uLFxuICAvLyBzaGFyZWQgc3RhdGVcbiAgcHJveHlTdGF0ZU1hcCxcbiAgcmVmU2V0LFxuICAvLyBpbnRlcm5hbCB0aGluZ3NcbiAgb2JqZWN0SXMsXG4gIG5ld1Byb3h5LFxuICBjYW5Qcm94eSxcbiAgZGVmYXVsdEhhbmRsZVByb21pc2UsXG4gIHNuYXBDYWNoZSxcbiAgY3JlYXRlU25hcHNob3QsXG4gIHByb3h5Q2FjaGUsXG4gIHZlcnNpb25Ib2xkZXJcbl07XG5jb25zdCBbZGVmYXVsdFByb3h5RnVuY3Rpb25dID0gYnVpbGRQcm94eUZ1bmN0aW9uKCk7XG5mdW5jdGlvbiBwcm94eShpbml0aWFsT2JqZWN0ID0ge30pIHtcbiAgcmV0dXJuIGRlZmF1bHRQcm94eUZ1bmN0aW9uKGluaXRpYWxPYmplY3QpO1xufVxuZnVuY3Rpb24gZ2V0VmVyc2lvbihwcm94eU9iamVjdCkge1xuICBjb25zdCBwcm94eVN0YXRlID0gcHJveHlTdGF0ZU1hcC5nZXQocHJveHlPYmplY3QpO1xuICByZXR1cm4gcHJveHlTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogcHJveHlTdGF0ZVsxXSgpO1xufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHByb3h5T2JqZWN0LCBjYWxsYmFjaywgbm90aWZ5SW5TeW5jKSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcHJveHlTdGF0ZSkge1xuICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSB1c2UgcHJveHkgb2JqZWN0XCIpO1xuICB9XG4gIGxldCBwcm9taXNlO1xuICBjb25zdCBvcHMgPSBbXTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSBwcm94eVN0YXRlWzNdO1xuICBsZXQgaXNMaXN0ZW5lckFjdGl2ZSA9IGZhbHNlO1xuICBjb25zdCBsaXN0ZW5lciA9IChvcCkgPT4ge1xuICAgIG9wcy5wdXNoKG9wKTtcbiAgICBpZiAobm90aWZ5SW5TeW5jKSB7XG4gICAgICBjYWxsYmFjayhvcHMuc3BsaWNlKDApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpc0xpc3RlbmVyQWN0aXZlKSB7XG4gICAgICAgICAgY2FsbGJhY2sob3BzLnNwbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIGlzTGlzdGVuZXJBY3RpdmUgPSB0cnVlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlzTGlzdGVuZXJBY3RpdmUgPSBmYWxzZTtcbiAgICByZW1vdmVMaXN0ZW5lcigpO1xuICB9O1xufVxuZnVuY3Rpb24gc25hcHNob3QocHJveHlPYmplY3QsIGhhbmRsZVByb21pc2UpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmICFwcm94eVN0YXRlKSB7XG4gICAgY29uc29sZS53YXJuKFwiUGxlYXNlIHVzZSBwcm94eSBvYmplY3RcIik7XG4gIH1cbiAgY29uc3QgW3RhcmdldCwgZW5zdXJlVmVyc2lvbiwgY3JlYXRlU25hcHNob3RdID0gcHJveHlTdGF0ZTtcbiAgcmV0dXJuIGNyZWF0ZVNuYXBzaG90KHRhcmdldCwgZW5zdXJlVmVyc2lvbigpLCBoYW5kbGVQcm9taXNlKTtcbn1cbmZ1bmN0aW9uIHJlZihvYmopIHtcbiAgcmVmU2V0LmFkZChvYmopO1xuICByZXR1cm4gb2JqO1xufVxuY29uc3QgdW5zdGFibGVfYnVpbGRQcm94eUZ1bmN0aW9uID0gYnVpbGRQcm94eUZ1bmN0aW9uO1xuXG5leHBvcnQgeyBnZXRWZXJzaW9uLCBwcm94eSwgcmVmLCBzbmFwc2hvdCwgc3Vic2NyaWJlLCB1bnN0YWJsZV9idWlsZFByb3h5RnVuY3Rpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/valtio/esm/vanilla.mjs\n");

/***/ })

};
;