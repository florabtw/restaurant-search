module.exports =
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
/******/ 	__webpack_require__.p = "/restaurant-search/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/K2":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__("FwQQ");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;

/***/ }),

/***/ "+9qO":
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__("4N03");

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap();

module.exports = metaMap;

/***/ }),

/***/ "+Sye":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchresults":"searchresults__3EbDw"};

/***/ }),

/***/ "+UAC":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("VcL+"),
    baseKeysIn = __webpack_require__("9FAS"),
    isArrayLike = __webpack_require__("LN6c");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "+ZRW":
/***/ (function(module, exports, __webpack_require__) {

try {
  var util = __webpack_require__("Bcfi");
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = __webpack_require__("4Bm0");
}

/***/ }),

/***/ "+bWy":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("yEjJ");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "+d9A":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("5Cyz");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

module.exports = toInteger;

/***/ }),

/***/ "/Ck5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDropdownValue;
var _address = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 14 20\"><path d=\"M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C5.62 9.5 4.5 8.38 4.5 7S5.62 4.5 7 4.5 9.5 5.62 9.5 7 8.38 9.5 7 9.5z\"/></svg>\n";

var _address2 = _interopRequireDefault(_address);

var _city = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 18 19\"><path d=\"M12 9V3L9 0 6 3v2H0v14h18V9h-6zm-8 8H2v-2h2v2zm0-4H2v-2h2v2zm0-4H2V7h2v2zm6 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V7h2v2zm0-4H8V3h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z\"/></svg>\n";

var _city2 = _interopRequireDefault(_city);

var _country = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n  <path d=\"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM9 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L7 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H6V8h2c.55 0 1-.45 1-1V5h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/>\n</svg>\n";

var _country2 = _interopRequireDefault(_country);

var _bus = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 54.9 50.5\"><path d=\"M9.6 12.7H8.5c-2.3 0-4.1 1.9-4.1 4.1v1.1c0 2.2 1.8 4 4 4.1v21.7h-.7c-1.3 0-2.3 1-2.3 2.3h7.1c0-1.3-1-2.3-2.3-2.3h-.5V22.1c2.2-.1 4-1.9 4-4.1v-1.1c0-2.3-1.8-4.2-4.1-4.2zM46 7.6h-7.5c0-1.8-1.5-3.3-3.3-3.3h-3.6c-1.8 0-3.3 1.5-3.3 3.3H21c-2.5 0-4.6 2-4.6 4.6v26.3c0 1.7 1.3 3.1 3 3.1h.8v1.6c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3-1.4 3-3.1v-1.6h14.3v1.6c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1.6h.8c1.7 0 3.1-1.4 3.1-3.1V12.2c-.2-2.5-2.2-4.6-4.7-4.6zm-27.4 4.6c0-1.3 1.1-2.4 2.4-2.4h25c1.3 0 2.4 1.1 2.4 2.4v.3c0 1.3-1.1 2.4-2.4 2.4H21c-1.3 0-2.4-1.1-2.4-2.4v-.3zM21 38c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7zm0-10.1c-1.3 0-2.4-1.1-2.4-2.4v-6.6c0-1.3 1.1-2.4 2.4-2.4h25c1.3 0 2.4 1.1 2.4 2.4v6.6c0 1.3-1.1 2.4-2.4 2.4H21zm24.8 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7z\"/></svg>\n";

var _bus2 = _interopRequireDefault(_bus);

var _train = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 15 20\">\n  <path d=\"M13.105 20l-2.366-3.354H4.26L1.907 20H0l3.297-4.787c-1.1-.177-2.196-1.287-2.194-2.642V2.68C1.1 1.28 2.317-.002 3.973 0h7.065c1.647-.002 2.863 1.28 2.86 2.676v9.895c.003 1.36-1.094 2.47-2.194 2.647L15 20h-1.895zM6.11 2h2.78c.264 0 .472-.123.472-.27v-.46c0-.147-.22-.268-.472-.27H6.11c-.252.002-.47.123-.47.27v.46c0 .146.206.27.47.27zm6.26 3.952V4.175c-.004-.74-.5-1.387-1.436-1.388H4.066c-.936 0-1.43.648-1.436 1.388v1.777c-.002.86.644 1.384 1.436 1.388h6.868c.793-.004 1.44-.528 1.436-1.388zm-8.465 5.386c-.69-.003-1.254.54-1.252 1.21-.002.673.56 1.217 1.252 1.222.697-.006 1.26-.55 1.262-1.22-.002-.672-.565-1.215-1.262-1.212zm8.42 1.21c-.005-.67-.567-1.213-1.265-1.21-.69-.003-1.253.54-1.25 1.21-.003.673.56 1.217 1.25 1.222.698-.006 1.26-.55 1.264-1.22z\"/>\n</svg>\n";

var _train2 = _interopRequireDefault(_train);

var _townhall = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M12 .6L2.5 6.9h18.9L12 .6zM3.8 8.2c-.7 0-1.3.6-1.3 1.3v8.8L.3 22.1c-.2.3-.3.5-.3.6 0 .6.8.6 1.3.6h21.5c.4 0 1.3 0 1.3-.6 0-.2-.1-.3-.3-.6l-2.2-3.8V9.5c0-.7-.6-1.3-1.3-1.3H3.8zm2.5 2.5c.7 0 1.1.6 1.3 1.3v7.6H5.1V12c0-.7.5-1.3 1.2-1.3zm5.7 0c.7 0 1.3.6 1.3 1.3v7.6h-2.5V12c-.1-.7.5-1.3 1.2-1.3zm5.7 0c.7 0 1.3.6 1.3 1.3v7.6h-2.5V12c-.1-.7.5-1.3 1.2-1.3z\"/></svg>\n";

var _townhall2 = _interopRequireDefault(_townhall);

var _plane = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M22.9 1.1s1.3.3-4.3 6.5l.7 3.8.2-.2c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-1.2 1.2.3 1.7.1-.1c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-1.1 1.1c.2 1.9.3 3.6.1 4.5 0 0-1.2 1.2-1.8.5 0 0-2.3-7.7-3.8-11.1-5.9 6-6.4 5.6-6.4 5.6s1.2 3.8-.2 5.2l-2.3-4.3h.1l-4.3-2.3c1.3-1.3 5.2-.2 5.2-.2s-.5-.4 5.6-6.3C8.9 7.7 1.2 5.5 1.2 5.5c-.7-.7.5-1.8.5-1.8.9-.2 2.6-.1 4.5.1l1.1-1.1c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l1.7.3 1.2-1.2c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-.2.2 3.8.7c6.2-5.5 6.5-4.2 6.5-4.2z\"/></svg>\n";

var _plane2 = _interopRequireDefault(_plane);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var icons = {
  address: _address2.default,
  city: _city2.default,
  country: _country2.default,
  busStop: _bus2.default,
  trainStation: _train2.default,
  townhall: _townhall2.default,
  airport: _plane2.default
};

function formatDropdownValue(_ref) {
  var type = _ref.type,
      highlight = _ref.highlight;
  var name = highlight.name,
      administrative = highlight.administrative,
      city = highlight.city,
      country = highlight.country;

  var out = ('<span class="ap-suggestion-icon">' + icons[type].trim() + '</span>\n<span class="ap-name">' + name + '</span>\n<span class="ap-address">\n  ' + [city, administrative, country].filter(function (token) {
    return token !== undefined;
  }).join(', ') + '</span>').replace(/\s*\n\s*/g, ' ');

  return out;
}

/***/ }),

/***/ "/NGI":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("BblM"),
    baseIteratee = __webpack_require__("lW7l"),
    baseMap = __webpack_require__("wrrS"),
    baseSortBy = __webpack_require__("urtK"),
    baseUnary = __webpack_require__("PnXa"),
    compareMultiple = __webpack_require__("X7Fw"),
    identity = __webpack_require__("Jpv1");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function (value, key, collection) {
    var criteria = arrayMap(iteratees, function (iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function (object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;

/***/ }),

/***/ "/f3m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = createPlacesClient;

var buildSearchMethod = __webpack_require__("Yu17");

function createPlacesClient(algoliasearch) {
  return function places(appID, apiKey, opts) {
    var cloneDeep = __webpack_require__("S7SM");

    opts = opts && cloneDeep(opts) || {};
    opts.hosts = opts.hosts || ['places-dsn.algolia.net', 'places-1.algolianet.com', 'places-2.algolianet.com', 'places-3.algolianet.com'];

    // allow initPlaces() no arguments => community rate limited
    if (arguments.length === 0 || typeof appID === 'object' || appID === undefined) {
      appID = '';
      apiKey = '';
      opts._allowEmptyCredentials = true;
    }

    var client = algoliasearch(appID, apiKey, opts);
    var index = client.initIndex('places');
    index.search = buildSearchMethod('query', '/1/places/query');
    index.getObject = function (objectID, callback) {
      return this.as._jsonRequest({
        method: 'GET',
        url: '/1/places/' + encodeURIComponent(objectID),
        hostType: 'read',
        callback: callback
      });
    };
    return index;
  };
}

/***/ }),

/***/ "/s7W":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("49I8"),
    arrayEach = __webpack_require__("7D78"),
    assignValue = __webpack_require__("p/s9"),
    baseAssign = __webpack_require__("eFjB"),
    baseAssignIn = __webpack_require__("q2Io"),
    cloneBuffer = __webpack_require__("s4SJ"),
    copyArray = __webpack_require__("Mkgn"),
    copySymbols = __webpack_require__("az4F"),
    copySymbolsIn = __webpack_require__("K7uZ"),
    getAllKeys = __webpack_require__("uf6I"),
    getAllKeysIn = __webpack_require__("l/4E"),
    getTag = __webpack_require__("tQCT"),
    initCloneArray = __webpack_require__("f7dW"),
    initCloneByTag = __webpack_require__("mAMs"),
    initCloneObject = __webpack_require__("qE2F"),
    isArray = __webpack_require__("p/0c"),
    isBuffer = __webpack_require__("iyC2"),
    isObject = __webpack_require__("u9vI"),
    keys = __webpack_require__("HI10");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ "/zmF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = [__webpack_require__("MhNG"), __webpack_require__("7EWu"), __webpack_require__("WwU5"), __webpack_require__("StMk"), __webpack_require__("9bTM")];
var draining;
var currentQueue;
var queueIndex = -1;
var queue = [];
var scheduled = false;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    nextTick();
  }
}

//named nextTick for less confusing stack traces
function nextTick() {
  if (draining) {
    return;
  }
  scheduled = false;
  draining = true;
  var len = queue.length;
  var timeout = setTimeout(cleanUpNextTick);
  while (len) {
    currentQueue = queue;
    queue = [];
    while (currentQueue && ++queueIndex < len) {
      currentQueue[queueIndex].run();
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  queueIndex = -1;
  draining = false;
  clearTimeout(timeout);
}
var scheduleDrain;
var i = -1;
var len = types.length;
while (++i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(nextTick);
    break;
  }
}
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  var fun = this.fun;
  var array = this.array;
  switch (array.length) {
    case 0:
      return fun();
    case 1:
      return fun(array[0]);
    case 2:
      return fun(array[0], array[1]);
    case 3:
      return fun(array[0], array[1], array[2]);
    default:
      return fun.apply(null, array);
  }
};
module.exports = immediate;
function immediate(task) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(task, args));
  if (!scheduled && !draining) {
    scheduled = true;
    scheduleDrain();
  }
}

/***/ }),

/***/ "0FvR":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("5cZt");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;

/***/ }),

/***/ "0Gi7":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("wppe"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

/***/ }),

/***/ "0J1o":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("4/4o");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),

/***/ "0a/Y":
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__("jf/K"),
    createBind = __webpack_require__("aP6i"),
    createCurry = __webpack_require__("2kCk"),
    createHybrid = __webpack_require__("yTXS"),
    createPartial = __webpack_require__("8kob"),
    getData = __webpack_require__("bSg1"),
    mergeData = __webpack_require__("6V8m"),
    setData = __webpack_require__("n4Xl"),
    setWrapToString = __webpack_require__("jsYr"),
    toInteger = __webpack_require__("+d9A");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;

/***/ }),

/***/ "10un":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1RxS":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("FTXF");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "1qpN":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("q3B8");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "27jl":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("z7ms");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

/***/ }),

/***/ "27o/":
/***/ (function(module, exports) {

var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) {
        css = css.substr(1, css.length);
    }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css;
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

/***/ }),

/***/ "2Axb":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("EiMJ");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "2L2L":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    isLength = __webpack_require__("GmNU"),
    isObjectLike = __webpack_require__("OuyB");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "2NNl":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "2Tdb":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("d05+"),
    eq = __webpack_require__("LIpy");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "2ibm":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("p/0c"),
    isSymbol = __webpack_require__("bgO7");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "2kCk":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("a+zQ"),
    createCtor = __webpack_require__("DrEq"),
    createHybrid = __webpack_require__("yTXS"),
    createRecurry = __webpack_require__("m+0x"),
    getHolder = __webpack_require__("coim"),
    replaceHolders = __webpack_require__("bU1I"),
    root = __webpack_require__("MIhM");

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;

/***/ }),

/***/ "2ldF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attrsKey = 'aaAttrs';

var _ = __webpack_require__("udZ4");
var DOM = __webpack_require__("BiYY");
var EventBus = __webpack_require__("V5xs");
var Input = __webpack_require__("6MVR");
var Dropdown = __webpack_require__("AQ5J");
var html = __webpack_require__("p0NR");
var css = __webpack_require__("nDR6");

// constructor
// -----------

// THOUGHT: what if datasets could dynamically be added/removed?
function Typeahead(o) {
  var $menu;
  var $hint;

  o = o || {};

  if (!o.input) {
    _.error('missing input');
  }

  this.isActivated = false;
  this.debug = !!o.debug;
  this.autoselect = !!o.autoselect;
  this.autoselectOnBlur = !!o.autoselectOnBlur;
  this.openOnFocus = !!o.openOnFocus;
  this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
  this.autoWidth = o.autoWidth === undefined ? true : !!o.autoWidth;

  o.hint = !!o.hint;

  if (o.hint && o.appendTo) {
    throw new Error('[autocomplete.js] hint and appendTo options can\'t be used at the same time');
  }

  this.css = o.css = _.mixin({}, css, o.appendTo ? css.appendTo : {});
  this.cssClasses = o.cssClasses = _.mixin({}, css.defaultClasses, o.cssClasses || {});
  this.cssClasses.prefix = o.cssClasses.formattedPrefix = _.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
  this.listboxId = o.listboxId = [this.cssClasses.root, 'listbox', _.getUniqueId()].join('-');

  var domElts = buildDom(o);

  this.$node = domElts.wrapper;
  var $input = this.$input = domElts.input;
  $menu = domElts.menu;
  $hint = domElts.hint;

  if (o.dropdownMenuContainer) {
    DOM.element(o.dropdownMenuContainer).css('position', 'relative') // ensure the container has a relative position
    .append($menu.css('top', '0')); // override the top: 100%
  }

  // #705: if there's scrollable overflow, ie doesn't support
  // blur cancellations when the scrollbar is clicked
  //
  // #351: preventDefault won't cancel blurs in ie <= 8
  $input.on('blur.aa', function ($e) {
    var active = document.activeElement;
    if (_.isMsie() && ($menu[0] === active || $menu[0].contains(active))) {
      $e.preventDefault();
      // stop immediate in order to prevent Input#_onBlur from
      // getting exectued
      $e.stopImmediatePropagation();
      _.defer(function () {
        $input.focus();
      });
    }
  });

  // #351: prevents input blur due to clicks within dropdown menu
  $menu.on('mousedown.aa', function ($e) {
    $e.preventDefault();
  });

  this.eventBus = o.eventBus || new EventBus({ el: $input });

  this.dropdown = new Typeahead.Dropdown({
    appendTo: o.appendTo,
    wrapper: this.$node,
    menu: $menu,
    datasets: o.datasets,
    templates: o.templates,
    cssClasses: o.cssClasses,
    minLength: this.minLength
  }).onSync('suggestionClicked', this._onSuggestionClicked, this).onSync('cursorMoved', this._onCursorMoved, this).onSync('cursorRemoved', this._onCursorRemoved, this).onSync('opened', this._onOpened, this).onSync('closed', this._onClosed, this).onSync('shown', this._onShown, this).onSync('empty', this._onEmpty, this).onSync('redrawn', this._onRedrawn, this).onAsync('datasetRendered', this._onDatasetRendered, this);

  this.input = new Typeahead.Input({ input: $input, hint: $hint }).onSync('focused', this._onFocused, this).onSync('blurred', this._onBlurred, this).onSync('enterKeyed', this._onEnterKeyed, this).onSync('tabKeyed', this._onTabKeyed, this).onSync('escKeyed', this._onEscKeyed, this).onSync('upKeyed', this._onUpKeyed, this).onSync('downKeyed', this._onDownKeyed, this).onSync('leftKeyed', this._onLeftKeyed, this).onSync('rightKeyed', this._onRightKeyed, this).onSync('queryChanged', this._onQueryChanged, this).onSync('whitespaceChanged', this._onWhitespaceChanged, this);

  this._bindKeyboardShortcuts(o);

  this._setLanguageDirection();
}

// instance methods
// ----------------

_.mixin(Typeahead.prototype, {
  // ### private

  _bindKeyboardShortcuts: function _bindKeyboardShortcuts(options) {
    if (!options.keyboardShortcuts) {
      return;
    }
    var $input = this.$input;
    var keyboardShortcuts = [];
    _.each(options.keyboardShortcuts, function (key) {
      if (typeof key === 'string') {
        key = key.toUpperCase().charCodeAt(0);
      }
      keyboardShortcuts.push(key);
    });
    DOM.element(document).keydown(function (event) {
      var elt = event.target || event.srcElement;
      var tagName = elt.tagName;
      if (elt.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
        // already in an input
        return;
      }

      var which = event.which || event.keyCode;
      if (keyboardShortcuts.indexOf(which) === -1) {
        // not the right shortcut
        return;
      }

      $input.focus();
      event.stopPropagation();
      event.preventDefault();
    });
  },

  _onSuggestionClicked: function onSuggestionClicked(type, $el) {
    var datum;

    if (datum = this.dropdown.getDatumForSuggestion($el)) {
      this._select(datum);
    }
  },

  _onCursorMoved: function onCursorMoved(event, updateInput) {
    var datum = this.dropdown.getDatumForCursor();
    var currentCursorId = this.dropdown.getCurrentCursor().attr('id');
    this.input.setActiveDescendant(currentCursorId);

    if (datum) {
      if (updateInput) {
        this.input.setInputValue(datum.value, true);
      }

      this.eventBus.trigger('cursorchanged', datum.raw, datum.datasetName);
    }
  },

  _onCursorRemoved: function onCursorRemoved() {
    this.input.resetInputValue();
    this._updateHint();
    this.eventBus.trigger('cursorremoved');
  },

  _onDatasetRendered: function onDatasetRendered() {
    this._updateHint();

    this.eventBus.trigger('updated');
  },

  _onOpened: function onOpened() {
    this._updateHint();
    this.input.expand();

    this.eventBus.trigger('opened');
  },

  _onEmpty: function onEmpty() {
    this.eventBus.trigger('empty');
  },

  _onRedrawn: function onRedrawn() {
    this.$node.css('top', 0 + 'px');
    this.$node.css('left', 0 + 'px');

    var inputRect = this.$input[0].getBoundingClientRect();

    if (this.autoWidth) {
      this.$node.css('width', inputRect.width + 'px');
    }

    var wrapperRect = this.$node[0].getBoundingClientRect();

    var top = inputRect.bottom - wrapperRect.top;
    this.$node.css('top', top + 'px');
    var left = inputRect.left - wrapperRect.left;
    this.$node.css('left', left + 'px');

    this.eventBus.trigger('redrawn');
  },

  _onShown: function onShown() {
    this.eventBus.trigger('shown');
    if (this.autoselect) {
      this.dropdown.cursorTopSuggestion();
    }
  },

  _onClosed: function onClosed() {
    this.input.clearHint();
    this.input.removeActiveDescendant();
    this.input.collapse();

    this.eventBus.trigger('closed');
  },

  _onFocused: function onFocused() {
    this.isActivated = true;

    if (this.openOnFocus) {
      var query = this.input.getQuery();
      if (query.length >= this.minLength) {
        this.dropdown.update(query);
      } else {
        this.dropdown.empty();
      }

      this.dropdown.open();
    }
  },

  _onBlurred: function onBlurred() {
    var cursorDatum;
    var topSuggestionDatum;

    cursorDatum = this.dropdown.getDatumForCursor();
    topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();

    if (!this.debug) {
      if (this.autoselectOnBlur && cursorDatum) {
        this._select(cursorDatum);
      } else if (this.autoselectOnBlur && topSuggestionDatum) {
        this._select(topSuggestionDatum);
      } else {
        this.isActivated = false;
        this.dropdown.empty();
        this.dropdown.close();
      }
    }
  },

  _onEnterKeyed: function onEnterKeyed(type, $e) {
    var cursorDatum;
    var topSuggestionDatum;

    cursorDatum = this.dropdown.getDatumForCursor();
    topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();

    if (cursorDatum) {
      this._select(cursorDatum);
      $e.preventDefault();
    } else if (this.autoselect && topSuggestionDatum) {
      this._select(topSuggestionDatum);
      $e.preventDefault();
    }
  },

  _onTabKeyed: function onTabKeyed(type, $e) {
    var datum;

    if (datum = this.dropdown.getDatumForCursor()) {
      this._select(datum);
      $e.preventDefault();
    } else {
      this._autocomplete(true);
    }
  },

  _onEscKeyed: function onEscKeyed() {
    this.dropdown.close();
    this.input.resetInputValue();
  },

  _onUpKeyed: function onUpKeyed() {
    var query = this.input.getQuery();

    if (this.dropdown.isEmpty && query.length >= this.minLength) {
      this.dropdown.update(query);
    } else {
      this.dropdown.moveCursorUp();
    }

    this.dropdown.open();
  },

  _onDownKeyed: function onDownKeyed() {
    var query = this.input.getQuery();

    if (this.dropdown.isEmpty && query.length >= this.minLength) {
      this.dropdown.update(query);
    } else {
      this.dropdown.moveCursorDown();
    }

    this.dropdown.open();
  },

  _onLeftKeyed: function onLeftKeyed() {
    if (this.dir === 'rtl') {
      this._autocomplete();
    }
  },

  _onRightKeyed: function onRightKeyed() {
    if (this.dir === 'ltr') {
      this._autocomplete();
    }
  },

  _onQueryChanged: function onQueryChanged(e, query) {
    this.input.clearHintIfInvalid();

    if (query.length >= this.minLength) {
      this.dropdown.update(query);
    } else {
      this.dropdown.empty();
    }

    this.dropdown.open();
    this._setLanguageDirection();
  },

  _onWhitespaceChanged: function onWhitespaceChanged() {
    this._updateHint();
    this.dropdown.open();
  },

  _setLanguageDirection: function setLanguageDirection() {
    var dir = this.input.getLanguageDirection();

    if (this.dir !== dir) {
      this.dir = dir;
      this.$node.css('direction', dir);
      this.dropdown.setLanguageDirection(dir);
    }
  },

  _updateHint: function updateHint() {
    var datum;
    var val;
    var query;
    var escapedQuery;
    var frontMatchRegEx;
    var match;

    datum = this.dropdown.getDatumForTopSuggestion();

    if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
      val = this.input.getInputValue();
      query = Input.normalizeQuery(val);
      escapedQuery = _.escapeRegExChars(query);

      // match input value, then capture trailing text
      frontMatchRegEx = new RegExp('^(?:' + escapedQuery + ')(.+$)', 'i');
      match = frontMatchRegEx.exec(datum.value);

      // clear hint if there's no trailing text
      if (match) {
        this.input.setHint(val + match[1]);
      } else {
        this.input.clearHint();
      }
    } else {
      this.input.clearHint();
    }
  },

  _autocomplete: function autocomplete(laxCursor) {
    var hint;
    var query;
    var isCursorAtEnd;
    var datum;

    hint = this.input.getHint();
    query = this.input.getQuery();
    isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();

    if (hint && query !== hint && isCursorAtEnd) {
      datum = this.dropdown.getDatumForTopSuggestion();
      if (datum) {
        this.input.setInputValue(datum.value);
      }

      this.eventBus.trigger('autocompleted', datum.raw, datum.datasetName);
    }
  },

  _select: function select(datum) {
    if (typeof datum.value !== 'undefined') {
      this.input.setQuery(datum.value);
    }
    this.input.setInputValue(datum.value, true);

    this._setLanguageDirection();

    var event = this.eventBus.trigger('selected', datum.raw, datum.datasetName);
    if (event.isDefaultPrevented() === false) {
      this.dropdown.close();

      // #118: allow click event to bubble up to the body before removing
      // the suggestions otherwise we break event delegation
      _.defer(_.bind(this.dropdown.empty, this.dropdown));
    }
  },

  // ### public

  open: function open() {
    // if the menu is not activated yet, we need to update
    // the underlying dropdown menu to trigger the search
    // otherwise we're not gonna see anything
    if (!this.isActivated) {
      var query = this.input.getInputValue();
      if (query.length >= this.minLength) {
        this.dropdown.update(query);
      } else {
        this.dropdown.empty();
      }
    }
    this.dropdown.open();
  },

  close: function close() {
    this.dropdown.close();
  },

  setVal: function setVal(val) {
    // expect val to be a string, so be safe, and coerce
    val = _.toStr(val);

    if (this.isActivated) {
      this.input.setInputValue(val);
    } else {
      this.input.setQuery(val);
      this.input.setInputValue(val, true);
    }

    this._setLanguageDirection();
  },

  getVal: function getVal() {
    return this.input.getQuery();
  },

  destroy: function destroy() {
    this.input.destroy();
    this.dropdown.destroy();

    destroyDomStructure(this.$node, this.cssClasses);

    this.$node = null;
  },

  getWrapper: function getWrapper() {
    return this.dropdown.$container[0];
  }
});

function buildDom(options) {
  var $input;
  var $wrapper;
  var $dropdown;
  var $hint;

  $input = DOM.element(options.input);
  $wrapper = DOM.element(html.wrapper.replace('%ROOT%', options.cssClasses.root)).css(options.css.wrapper);

  // override the display property with the table-cell value
  // if the parent element is a table and the original input was a block
  //  -> https://github.com/algolia/autocomplete.js/issues/16
  if (!options.appendTo && $input.css('display') === 'block' && $input.parent().css('display') === 'table') {
    $wrapper.css('display', 'table-cell');
  }
  var dropdownHtml = html.dropdown.replace('%PREFIX%', options.cssClasses.prefix).replace('%DROPDOWN_MENU%', options.cssClasses.dropdownMenu);
  $dropdown = DOM.element(dropdownHtml).css(options.css.dropdown).attr({
    role: 'listbox',
    id: options.listboxId
  });
  if (options.templates && options.templates.dropdownMenu) {
    $dropdown.html(_.templatify(options.templates.dropdownMenu)());
  }
  $hint = $input.clone().css(options.css.hint).css(getBackgroundStyles($input));

  $hint.val('').addClass(_.className(options.cssClasses.prefix, options.cssClasses.hint, true)).removeAttr('id name placeholder required').prop('readonly', true).attr({
    'aria-hidden': 'true',
    autocomplete: 'off',
    spellcheck: 'false',
    tabindex: -1
  });
  if ($hint.removeData) {
    $hint.removeData();
  }

  // store the original values of the attrs that get modified
  // so modifications can be reverted on destroy
  $input.data(attrsKey, {
    'aria-autocomplete': $input.attr('aria-autocomplete'),
    'aria-expanded': $input.attr('aria-expanded'),
    'aria-owns': $input.attr('aria-owns'),
    autocomplete: $input.attr('autocomplete'),
    dir: $input.attr('dir'),
    role: $input.attr('role'),
    spellcheck: $input.attr('spellcheck'),
    style: $input.attr('style'),
    type: $input.attr('type')
  });

  $input.addClass(_.className(options.cssClasses.prefix, options.cssClasses.input, true)).attr({
    autocomplete: 'off',
    spellcheck: false,

    // Accessibility features
    // Give the field a presentation of a "select".
    // Combobox is the combined presentation of a single line textfield
    // with a listbox popup.
    // https://www.w3.org/WAI/PF/aria/roles#combobox
    role: 'combobox',
    // Let the screen reader know the field has an autocomplete
    // feature to it.
    'aria-autocomplete': options.datasets && options.datasets[0] && options.datasets[0].displayKey ? 'both' : 'list',
    // Indicates whether the dropdown it controls is currently expanded or collapsed
    'aria-expanded': 'false',
    // If a placeholder is set, label this field with itself, which in this case,
    // is an explicit pointer to use the placeholder attribute value.
    'aria-labelledby': $input.attr('placeholder') ? $input.attr('id') : null,
    // Explicitly point to the listbox,
    // which is a list of suggestions (aka options)
    'aria-owns': options.listboxId
  }).css(options.hint ? options.css.input : options.css.inputWithNoHint);

  // ie7 does not like it when dir is set to auto
  try {
    if (!$input.attr('dir')) {
      $input.attr('dir', 'auto');
    }
  } catch (e) {
    // ignore
  }

  $wrapper = options.appendTo ? $wrapper.appendTo(DOM.element(options.appendTo).eq(0)).eq(0) : $input.wrap($wrapper).parent();

  $wrapper.prepend(options.hint ? $hint : null).append($dropdown);

  return {
    wrapper: $wrapper,
    input: $input,
    hint: $hint,
    menu: $dropdown
  };
}

function getBackgroundStyles($el) {
  return {
    backgroundAttachment: $el.css('background-attachment'),
    backgroundClip: $el.css('background-clip'),
    backgroundColor: $el.css('background-color'),
    backgroundImage: $el.css('background-image'),
    backgroundOrigin: $el.css('background-origin'),
    backgroundPosition: $el.css('background-position'),
    backgroundRepeat: $el.css('background-repeat'),
    backgroundSize: $el.css('background-size')
  };
}

function destroyDomStructure($node, cssClasses) {
  var $input = $node.find(_.className(cssClasses.prefix, cssClasses.input));

  // need to remove attrs that weren't previously defined and
  // revert attrs that originally had a value
  _.each($input.data(attrsKey), function (val, key) {
    if (val === undefined) {
      $input.removeAttr(key);
    } else {
      $input.attr(key, val);
    }
  });

  $input.detach().removeClass(_.className(cssClasses.prefix, cssClasses.input, true)).insertAfter($node);
  if ($input.removeData) {
    $input.removeData(attrsKey);
  }

  $node.remove();
}

Typeahead.Dropdown = Dropdown;
Typeahead.Input = Input;
Typeahead.sources = __webpack_require__("ruT8");

module.exports = Typeahead;

/***/ }),

/***/ "38Wu":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__("fy20");
var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer(arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length);
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number');
  }
  return Buffer(arg, encodingOrOffset, length);
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf;
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return Buffer(size);
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return buffer.SlowBuffer(size);
};

/***/ }),

/***/ "3Q8v":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("Gsi0"),
    hasPath = __webpack_require__("E1jM");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),

/***/ "3euO":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("ga8q"),
    baseLodash = __webpack_require__("YaGB");

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;

/***/ }),

/***/ "3m7z":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("BblM"),
    baseIntersection = __webpack_require__("5gsL"),
    baseRest = __webpack_require__("f4Fl"),
    castArrayLikeObject = __webpack_require__("+/K2");

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function (arrays) {
    var mapped = arrayMap(arrays, castArrayLikeObject);
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
});

module.exports = intersection;

/***/ }),

/***/ "3tMo":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}

module.exports = baseSum;

/***/ }),

/***/ "3til":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("pK4Y"),
    isObjectLike = __webpack_require__("OuyB");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),

/***/ "3w4y":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("wppe"),
    arrayMap = __webpack_require__("BblM"),
    isArray = __webpack_require__("p/0c"),
    isSymbol = __webpack_require__("bgO7");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "4/4o":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "41+b":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ "49I8":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xk23"),
    stackClear = __webpack_require__("4y4D"),
    stackDelete = __webpack_require__("TpjK"),
    stackGet = __webpack_require__("skbs"),
    stackHas = __webpack_require__("9ocJ"),
    stackSet = __webpack_require__("fwYF");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),

/***/ "4Bm0":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "4N03":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),

/***/ "4hKF":
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__("+ZRW");
var IndexCore = __webpack_require__("ig01");
var deprecate = __webpack_require__("F888");
var deprecatedMessage = __webpack_require__("8OXg");
var exitPromise = __webpack_require__("nb0e");
var errors = __webpack_require__("QKhG");

var deprecateForwardToSlaves = deprecate(function () {}, deprecatedMessage('forwardToSlaves', 'forwardToReplicas'));

module.exports = Index;

function Index() {
  IndexCore.apply(this, arguments);
}

inherits(Index, IndexCore);

/*
* Add an object in this index
*
* @param content contains the javascript object to add inside the index
* @param objectID (optional) an objectID you want to attribute to this object
* (if the attribute already exist the old object will be overwrite)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
Index.prototype.addObject = function (content, objectID, callback) {
  var indexObj = this;

  if (arguments.length === 1 || typeof objectID === 'function') {
    callback = objectID;
    objectID = undefined;
  }

  return this.as._jsonRequest({
    method: objectID !== undefined ? 'PUT' : // update or create
    'POST', // create (API generates an objectID)
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + ( // create
    objectID !== undefined ? '/' + encodeURIComponent(objectID) : ''), // update or create
    body: content,
    hostType: 'write',
    callback: callback
  });
};

/*
* Add several objects
*
* @param objects contains an array of objects to add
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
Index.prototype.addObjects = function (objects, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: index.addObjects(arrayOfObjects[, callback])';

  if (!isArray(objects)) {
    throw new Error(usage);
  }

  var indexObj = this;
  var postObj = {
    requests: []
  };
  for (var i = 0; i < objects.length; ++i) {
    var request = {
      action: 'addObject',
      body: objects[i]
    };
    postObj.requests.push(request);
  }
  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/*
* Update partially an object (only update attributes passed in argument)
*
* @param partialObject contains the javascript attributes to override, the
*  object must contains an objectID attribute
* @param createIfNotExists (optional) if false, avoid an automatic creation of the object
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
Index.prototype.partialUpdateObject = function (partialObject, createIfNotExists, callback) {
  if (arguments.length === 1 || typeof createIfNotExists === 'function') {
    callback = createIfNotExists;
    createIfNotExists = undefined;
  }

  var indexObj = this;
  var url = '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(partialObject.objectID) + '/partial';
  if (createIfNotExists === false) {
    url += '?createIfNotExists=false';
  }

  return this.as._jsonRequest({
    method: 'POST',
    url: url,
    body: partialObject,
    hostType: 'write',
    callback: callback
  });
};

/*
* Partially Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
Index.prototype.partialUpdateObjects = function (objects, createIfNotExists, callback) {
  if (arguments.length === 1 || typeof createIfNotExists === 'function') {
    callback = createIfNotExists;
    createIfNotExists = true;
  }

  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: index.partialUpdateObjects(arrayOfObjects[, callback])';

  if (!isArray(objects)) {
    throw new Error(usage);
  }

  var indexObj = this;
  var postObj = {
    requests: []
  };
  for (var i = 0; i < objects.length; ++i) {
    var request = {
      action: createIfNotExists === true ? 'partialUpdateObject' : 'partialUpdateObjectNoCreate',
      objectID: objects[i].objectID,
      body: objects[i]
    };
    postObj.requests.push(request);
  }
  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/*
* Override the content of object
*
* @param object contains the javascript object to save, the object must contains an objectID attribute
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
Index.prototype.saveObject = function (object, callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'PUT',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(object.objectID),
    body: object,
    hostType: 'write',
    callback: callback
  });
};

/*
* Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
Index.prototype.saveObjects = function (objects, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: index.saveObjects(arrayOfObjects[, callback])';

  if (!isArray(objects)) {
    throw new Error(usage);
  }

  var indexObj = this;
  var postObj = {
    requests: []
  };
  for (var i = 0; i < objects.length; ++i) {
    var request = {
      action: 'updateObject',
      objectID: objects[i].objectID,
      body: objects[i]
    };
    postObj.requests.push(request);
  }
  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/*
* Delete an object from the index
*
* @param objectID the unique identifier of object to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
Index.prototype.deleteObject = function (objectID, callback) {
  if (typeof objectID === 'function' || typeof objectID !== 'string' && typeof objectID !== 'number') {
    var err = new errors.AlgoliaSearchError('Cannot delete an object without an objectID');
    callback = objectID;
    if (typeof callback === 'function') {
      return callback(err);
    }

    return this.as._promise.reject(err);
  }

  var indexObj = this;
  return this.as._jsonRequest({
    method: 'DELETE',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(objectID),
    hostType: 'write',
    callback: callback
  });
};

/*
* Delete several objects from an index
*
* @param objectIDs contains an array of objectID to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
Index.prototype.deleteObjects = function (objectIDs, callback) {
  var isArray = __webpack_require__("YuqC");
  var map = __webpack_require__("BDy2");

  var usage = 'Usage: index.deleteObjects(arrayOfObjectIDs[, callback])';

  if (!isArray(objectIDs)) {
    throw new Error(usage);
  }

  var indexObj = this;
  var postObj = {
    requests: map(objectIDs, function prepareRequest(objectID) {
      return {
        action: 'deleteObject',
        objectID: objectID,
        body: {
          objectID: objectID
        }
      };
    })
  };

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/*
* Delete all objects matching a query
*
* @param query the query string
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
* @deprecated see index.deleteBy
*/
Index.prototype.deleteByQuery = deprecate(function (query, params, callback) {
  var clone = __webpack_require__("S7SM");
  var map = __webpack_require__("BDy2");

  var indexObj = this;
  var client = indexObj.as;

  if (arguments.length === 1 || typeof params === 'function') {
    callback = params;
    params = {};
  } else {
    params = clone(params);
  }

  params.attributesToRetrieve = 'objectID';
  params.hitsPerPage = 1000;
  params.distinct = false;

  // when deleting, we should never use cache to get the
  // search results
  this.clearCache();

  // there's a problem in how we use the promise chain,
  // see how waitTask is done
  var promise = this.search(query, params).then(stopOrDelete);

  function stopOrDelete(searchContent) {
    // stop here
    if (searchContent.nbHits === 0) {
      // return indexObj.as._request.resolve();
      return searchContent;
    }

    // continue and do a recursive call
    var objectIDs = map(searchContent.hits, function getObjectID(object) {
      return object.objectID;
    });

    return indexObj.deleteObjects(objectIDs).then(waitTask).then(doDeleteByQuery);
  }

  function waitTask(deleteObjectsContent) {
    return indexObj.waitTask(deleteObjectsContent.taskID);
  }

  function doDeleteByQuery() {
    return indexObj.deleteByQuery(query, params);
  }

  if (!callback) {
    return promise;
  }

  promise.then(success, failure);

  function success() {
    exitPromise(function exit() {
      callback(null);
    }, client._setTimeout || setTimeout);
  }

  function failure(err) {
    exitPromise(function exit() {
      callback(err);
    }, client._setTimeout || setTimeout);
  }
}, deprecatedMessage('index.deleteByQuery()', 'index.deleteBy()'));

/**
* Delete all objects matching a query
*
* the query parameters that can be used are:
* - filters (numeric, facet, tag)
* - geo
*
* you can not send an empty query or filters
*
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
*/
Index.prototype.deleteBy = function (params, callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/deleteByQuery',
    body: { params: indexObj.as._getSearchParams(params, '') },
    hostType: 'write',
    callback: callback
  });
};

/*
* Browse all content from an index using events. Basically this will do
* .browse() -> .browseFrom -> .browseFrom -> .. until all the results are returned
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @return {EventEmitter}
* @example
* var browser = index.browseAll('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* });
*
* browser.on('result', function resultCallback(content) {
*   console.log(content.hits);
* });
*
* // if any error occurs, you get it
* browser.on('error', function(err) {
*   throw err;
* });
*
* // when you have browsed the whole index, you get this event
* browser.on('end', function() {
*   console.log('finished');
* });
*
* // at any point if you want to stop the browsing process, you can stop it manually
* // otherwise it will go on and on
* browser.stop();
*
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/
Index.prototype.browseAll = function (query, queryParameters) {
  if (typeof query === 'object') {
    queryParameters = query;
    query = undefined;
  }

  var merge = __webpack_require__("MuiK");

  var IndexBrowser = __webpack_require__("704E");

  var browser = new IndexBrowser();
  var client = this.as;
  var index = this;
  var params = client._getSearchParams(merge({}, queryParameters || {}, {
    query: query
  }), '');

  // start browsing
  browseLoop();

  function browseLoop(cursor) {
    if (browser._stopped) {
      return;
    }

    var body;

    if (cursor !== undefined) {
      body = {
        cursor: cursor
      };
    } else {
      body = {
        params: params
      };
    }

    client._jsonRequest({
      method: 'POST',
      url: '/1/indexes/' + encodeURIComponent(index.indexName) + '/browse',
      hostType: 'read',
      body: body,
      callback: browseCallback
    });
  }

  function browseCallback(err, content) {
    if (browser._stopped) {
      return;
    }

    if (err) {
      browser._error(err);
      return;
    }

    browser._result(content);

    // no cursor means we are finished browsing
    if (content.cursor === undefined) {
      browser._end();
      return;
    }

    browseLoop(content.cursor);
  }

  return browser;
};

/*
* Get a Typeahead.js adapter
* @param searchParams contains an object with query parameters (see search for details)
*/
Index.prototype.ttAdapter = deprecate(function (params) {
  var self = this;
  return function ttAdapter(query, syncCb, asyncCb) {
    var cb;

    if (typeof asyncCb === 'function') {
      // typeahead 0.11
      cb = asyncCb;
    } else {
      // pre typeahead 0.11
      cb = syncCb;
    }

    self.search(query, params, function searchDone(err, content) {
      if (err) {
        cb(err);
        return;
      }

      cb(content.hits);
    });
  };
}, 'ttAdapter is not necessary anymore and will be removed in the next version,\n' + 'have a look at autocomplete.js (https://github.com/algolia/autocomplete.js)');

/*
* Wait the publication of a task on the server.
* All server task are asynchronous and you can check with this method that the task is published.
*
* @param taskID the id of the task returned by server
* @param callback the result callback with with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains the list of results
*/
Index.prototype.waitTask = function (taskID, callback) {
  // wait minimum 100ms before retrying
  var baseDelay = 100;
  // wait maximum 5s before retrying
  var maxDelay = 5000;
  var loop = 0;

  // waitTask() must be handled differently from other methods,
  // it's a recursive method using a timeout
  var indexObj = this;
  var client = indexObj.as;

  var promise = retryLoop();

  function retryLoop() {
    return client._jsonRequest({
      method: 'GET',
      hostType: 'read',
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/task/' + taskID
    }).then(function success(content) {
      loop++;
      var delay = baseDelay * loop * loop;
      if (delay > maxDelay) {
        delay = maxDelay;
      }

      if (content.status !== 'published') {
        return client._promise.delay(delay).then(retryLoop);
      }

      return content;
    });
  }

  if (!callback) {
    return promise;
  }

  promise.then(successCb, failureCb);

  function successCb(content) {
    exitPromise(function exit() {
      callback(null, content);
    }, client._setTimeout || setTimeout);
  }

  function failureCb(err) {
    exitPromise(function exit() {
      callback(err);
    }, client._setTimeout || setTimeout);
  }
};

/*
* This function deletes the index content. Settings and index specific API keys are kept untouched.
*
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occured
*/
Index.prototype.clearIndex = function (callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/clear',
    hostType: 'write',
    callback: callback
  });
};

/*
* Get settings of this index
*
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occured
*/
Index.prototype.getSettings = function (callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'GET',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/settings?getVersion=2',
    hostType: 'read',
    callback: callback
  });
};

Index.prototype.searchSynonyms = function (params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  } else if (params === undefined) {
    params = {};
  }

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/synonyms/search',
    body: params,
    hostType: 'read',
    callback: callback
  });
};

function exportData(method, _hitsPerPage, callback) {
  function search(page, _previous) {
    var options = {
      page: page || 0,
      hitsPerPage: _hitsPerPage || 100
    };
    var previous = _previous || [];

    return method(options).then(function (result) {
      var hits = result.hits;
      var nbHits = result.nbHits;
      var current = hits.map(function (s) {
        delete s._highlightResult;
        return s;
      });
      var synonyms = previous.concat(current);
      if (synonyms.length < nbHits) {
        return search(options.page + 1, synonyms);
      }
      return synonyms;
    });
  }
  return search().then(function (data) {
    if (typeof callback === 'function') {
      callback(data);
    }
    return data;
  });
}

/**
 * Retrieve all the synonyms in an index
 * @param [number=100] hitsPerPage The amount of synonyms to retrieve per batch
 * @param [function] callback will be called after all synonyms are retrieved
 */
Index.prototype.exportSynonyms = function (hitsPerPage, callback) {
  return exportData(this.searchSynonyms, hitsPerPage, callback);
};

Index.prototype.saveSynonym = function (synonym, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
  var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'PUT',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/synonyms/' + encodeURIComponent(synonym.objectID) + '?forwardToReplicas=' + forwardToReplicas,
    body: synonym,
    hostType: 'write',
    callback: callback
  });
};

Index.prototype.getSynonym = function (objectID, callback) {
  return this.as._jsonRequest({
    method: 'GET',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/synonyms/' + encodeURIComponent(objectID),
    hostType: 'read',
    callback: callback
  });
};

Index.prototype.deleteSynonym = function (objectID, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
  var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'DELETE',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/synonyms/' + encodeURIComponent(objectID) + '?forwardToReplicas=' + forwardToReplicas,
    hostType: 'write',
    callback: callback
  });
};

Index.prototype.clearSynonyms = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
  var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/synonyms/clear' + '?forwardToReplicas=' + forwardToReplicas,
    hostType: 'write',
    callback: callback
  });
};

Index.prototype.batchSynonyms = function (synonyms, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
  var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/synonyms/batch' + '?forwardToReplicas=' + forwardToReplicas + '&replaceExistingSynonyms=' + (opts.replaceExistingSynonyms ? 'true' : 'false'),
    hostType: 'write',
    body: synonyms,
    callback: callback
  });
};

Index.prototype.searchRules = function (params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  } else if (params === undefined) {
    params = {};
  }

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/rules/search',
    body: params,
    hostType: 'read',
    callback: callback
  });
};
/**
 * Retrieve all the query rules in an index
 * @param [number=100] hitsPerPage The amount of query rules to retrieve per batch
 * @param [function] callback will be called after all query rules are retrieved
 */
Index.prototype.exportRules = function (hitsPerPage, callback) {
  return exportData(this.searchRules, hitsPerPage, callback);
};

Index.prototype.saveRule = function (rule, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  var forwardToReplicas = opts.forwardToReplicas === true ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'PUT',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/rules/' + encodeURIComponent(rule.objectID) + '?forwardToReplicas=' + forwardToReplicas,
    body: rule,
    hostType: 'write',
    callback: callback
  });
};

Index.prototype.getRule = function (objectID, callback) {
  return this.as._jsonRequest({
    method: 'GET',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/rules/' + encodeURIComponent(objectID),
    hostType: 'read',
    callback: callback
  });
};

Index.prototype.deleteRule = function (objectID, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  var forwardToReplicas = opts.forwardToReplicas === true ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'DELETE',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/rules/' + encodeURIComponent(objectID) + '?forwardToReplicas=' + forwardToReplicas,
    hostType: 'write',
    callback: callback
  });
};

Index.prototype.clearRules = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  var forwardToReplicas = opts.forwardToReplicas === true ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/rules/clear' + '?forwardToReplicas=' + forwardToReplicas,
    hostType: 'write',
    callback: callback
  });
};

Index.prototype.batchRules = function (rules, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  var forwardToReplicas = opts.forwardToReplicas === true ? 'true' : 'false';

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/rules/batch' + '?forwardToReplicas=' + forwardToReplicas + '&clearExistingRules=' + (opts.clearExistingRules === true ? 'true' : 'false'),
    hostType: 'write',
    body: rules,
    callback: callback
  });
};

/*
* Set settings for this index
*
* @param settigns the settings object that can contains :
* - minWordSizefor1Typo: (integer) the minimum number of characters to accept one typo (default = 3).
* - minWordSizefor2Typos: (integer) the minimum number of characters to accept two typos (default = 7).
* - hitsPerPage: (integer) the number of hits per page (default = 10).
* - attributesToRetrieve: (array of strings) default list of attributes to retrieve in objects.
*   If set to null, all attributes are retrieved.
* - attributesToHighlight: (array of strings) default list of attributes to highlight.
*   If set to null, all indexed attributes are highlighted.
* - attributesToSnippet**: (array of strings) default list of attributes to snippet alongside the number
* of words to return (syntax is attributeName:nbWords).
*   By default no snippet is computed. If set to null, no snippet is computed.
* - attributesToIndex: (array of strings) the list of fields you want to index.
*   If set to null, all textual and numerical attributes of your objects are indexed,
*   but you should update it to get optimal results.
*   This parameter has two important uses:
*     - Limit the attributes to index: For example if you store a binary image in base64,
*     you want to store it and be able to
*       retrieve it but you don't want to search in the base64 string.
*     - Control part of the ranking*: (see the ranking parameter for full explanation)
*     Matches in attributes at the beginning of
*       the list will be considered more important than matches in attributes further down the list.
*       In one attribute, matching text at the beginning of the attribute will be
*       considered more important than text after, you can disable
*       this behavior if you add your attribute inside `unordered(AttributeName)`,
*       for example attributesToIndex: ["title", "unordered(text)"].
* - attributesForFaceting: (array of strings) The list of fields you want to use for faceting.
*   All strings in the attribute selected for faceting are extracted and added as a facet.
*   If set to null, no attribute is used for faceting.
* - attributeForDistinct: (string) The attribute name used for the Distinct feature.
* This feature is similar to the SQL "distinct" keyword: when enabled
*   in query with the distinct=1 parameter, all hits containing a duplicate
*   value for this attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best one is kept and others are removed.
* - ranking: (array of strings) controls the way results are sorted.
*   We have six available criteria:
*    - typo: sort according to number of typos,
*    - geo: sort according to decreassing distance when performing a geo-location based search,
*    - proximity: sort according to the proximity of query words in hits,
*    - attribute: sort according to the order of attributes defined by attributesToIndex,
*    - exact:
*        - if the user query contains one word: sort objects having an attribute
*        that is exactly the query word before others.
*          For example if you search for the "V" TV show, you want to find it
*          with the "V" query and avoid to have all popular TV
*          show starting by the v letter before it.
*        - if the user query contains multiple words: sort according to the
*        number of words that matched exactly (and not as a prefix).
*    - custom: sort according to a user defined formula set in **customRanking** attribute.
*   The standard order is ["typo", "geo", "proximity", "attribute", "exact", "custom"]
* - customRanking: (array of strings) lets you specify part of the ranking.
*   The syntax of this condition is an array of strings containing attributes
*   prefixed by asc (ascending order) or desc (descending order) operator.
*   For example `"customRanking" => ["desc(population)", "asc(name)"]`
* - queryType: Select how the query words are interpreted, it can be one of the following value:
*   - prefixAll: all query words are interpreted as prefixes,
*   - prefixLast: only the last word is interpreted as a prefix (default behavior),
*   - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - highlightPreTag: (string) Specify the string that is inserted before
* the highlighted parts in the query result (default to "<em>").
* - highlightPostTag: (string) Specify the string that is inserted after
* the highlighted parts in the query result (default to "</em>").
* - optionalWords: (array of strings) Specify a list of words that should
* be considered as optional when found in the query.
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer or the error message if a failure occured
*/
Index.prototype.setSettings = function (settings, opts, callback) {
  if (arguments.length === 1 || typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
  var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false';

  var indexObj = this;
  return this.as._jsonRequest({
    method: 'PUT',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/settings?forwardToReplicas=' + forwardToReplicas,
    hostType: 'write',
    body: settings,
    callback: callback
  });
};

/*
 @deprecated see index.listApiKeys
 */
Index.prototype.listUserKeys = deprecate(function (callback) {
  return this.listApiKeys(callback);
}, deprecatedMessage('index.listUserKeys()', 'index.listApiKeys()'));

/*
* List all existing API keys to this index
*
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with API keys belonging to the index
*/
Index.prototype.listApiKeys = function (callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'GET',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys',
    hostType: 'read',
    callback: callback
  });
};

/*
 @deprecated see index.getApiKey
 */
Index.prototype.getUserKeyACL = deprecate(function (key, callback) {
  return this.getApiKey(key, callback);
}, deprecatedMessage('index.getUserKeyACL()', 'index.getApiKey()'));

/*
* Get an API key from this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the right API key
*/
Index.prototype.getApiKey = function (key, callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'GET',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys/' + key,
    hostType: 'read',
    callback: callback
  });
};

/*
 @deprecated see index.deleteApiKey
 */
Index.prototype.deleteUserKey = deprecate(function (key, callback) {
  return this.deleteApiKey(key, callback);
}, deprecatedMessage('index.deleteUserKey()', 'index.deleteApiKey()'));

/*
* Delete an existing API key associated to this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the deletion date
*/
Index.prototype.deleteApiKey = function (key, callback) {
  var indexObj = this;
  return this.as._jsonRequest({
    method: 'DELETE',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys/' + key,
    hostType: 'write',
    callback: callback
  });
};

/*
 @deprecated see index.addApiKey
 */
Index.prototype.addUserKey = deprecate(function (acls, params, callback) {
  return this.addApiKey(acls, params, callback);
}, deprecatedMessage('index.addUserKey()', 'index.addApiKey()'));

/*
* Add a new API key to this index
*
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the added API key
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.addUserKey(['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#AddIndexKey|Algolia REST API Documentation}
*/
Index.prototype.addApiKey = function (acls, params, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: index.addApiKey(arrayOfAcls[, params, callback])';

  if (!isArray(acls)) {
    throw new Error(usage);
  }

  if (arguments.length === 1 || typeof params === 'function') {
    callback = params;
    params = null;
  }

  var postObj = {
    acl: acls
  };

  if (params) {
    postObj.validity = params.validity;
    postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
    postObj.maxHitsPerQuery = params.maxHitsPerQuery;
    postObj.description = params.description;

    if (params.queryParameters) {
      postObj.queryParameters = this.as._getSearchParams(params.queryParameters, '');
    }

    postObj.referers = params.referers;
  }

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/keys',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/**
* @deprecated use index.addApiKey()
*/
Index.prototype.addUserKeyWithValidity = deprecate(function deprecatedAddUserKeyWithValidity(acls, params, callback) {
  return this.addApiKey(acls, params, callback);
}, deprecatedMessage('index.addUserKeyWithValidity()', 'index.addApiKey()'));

/*
 @deprecated see index.updateApiKey
 */
Index.prototype.updateUserKey = deprecate(function (key, acls, params, callback) {
  return this.updateApiKey(key, acls, params, callback);
}, deprecatedMessage('index.updateUserKey()', 'index.updateApiKey()'));

/**
* Update an existing API key of this index
* @param {string} key - The key to update
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with user keys list
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.updateApiKey('APIKEY', ['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
*/
Index.prototype.updateApiKey = function (key, acls, params, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])';

  if (!isArray(acls)) {
    throw new Error(usage);
  }

  if (arguments.length === 2 || typeof params === 'function') {
    callback = params;
    params = null;
  }

  var putObj = {
    acl: acls
  };

  if (params) {
    putObj.validity = params.validity;
    putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
    putObj.maxHitsPerQuery = params.maxHitsPerQuery;
    putObj.description = params.description;

    if (params.queryParameters) {
      putObj.queryParameters = this.as._getSearchParams(params.queryParameters, '');
    }

    putObj.referers = params.referers;
  }

  return this.as._jsonRequest({
    method: 'PUT',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/keys/' + key,
    body: putObj,
    hostType: 'write',
    callback: callback
  });
};

/***/ }),

/***/ "4izX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = AlgoliaSearch;

var Index = __webpack_require__("4hKF");
var deprecate = __webpack_require__("F888");
var deprecatedMessage = __webpack_require__("8OXg");
var AlgoliaSearchCore = __webpack_require__("daUR");
var inherits = __webpack_require__("+ZRW");
var errors = __webpack_require__("QKhG");

function AlgoliaSearch() {
  AlgoliaSearchCore.apply(this, arguments);
}

inherits(AlgoliaSearch, AlgoliaSearchCore);

/*
 * Delete an index
 *
 * @param indexName the name of index to delete
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */
AlgoliaSearch.prototype.deleteIndex = function (indexName, callback) {
  return this._jsonRequest({
    method: 'DELETE',
    url: '/1/indexes/' + encodeURIComponent(indexName),
    hostType: 'write',
    callback: callback
  });
};

/**
 * Move an existing index.
 * @param srcIndexName the name of index to copy.
 * @param dstIndexName the new index name that will contains a copy of
 * srcIndexName (destination will be overriten if it already exist).
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */
AlgoliaSearch.prototype.moveIndex = function (srcIndexName, dstIndexName, callback) {
  var postObj = {
    operation: 'move', destination: dstIndexName
  };
  return this._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(srcIndexName) + '/operation',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/**
 * Copy an existing index.
 * @param srcIndexName the name of index to copy.
 * @param dstIndexName the new index name that will contains a copy
 * of srcIndexName (destination will be overriten if it already exist).
 * @param scope an array of scopes to copy: ['settings', 'synonyms', 'rules']
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */
AlgoliaSearch.prototype.copyIndex = function (srcIndexName, dstIndexName, scopeOrCallback, _callback) {
  var postObj = {
    operation: 'copy',
    destination: dstIndexName
  };
  var callback = _callback;
  if (typeof scopeOrCallback === 'function') {
    // oops, old behaviour of third argument being a function
    callback = scopeOrCallback;
  } else if (Array.isArray(scopeOrCallback) && scopeOrCallback.length > 0) {
    postObj.scope = scopeOrCallback;
  } else if (typeof scopeOrCallback !== 'undefined') {
    throw new Error('the scope given to `copyIndex` was not an array with settings, synonyms or rules');
  }
  return this._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(srcIndexName) + '/operation',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/**
 * Return last log entries.
 * @param offset Specify the first entry to retrieve (0-based, 0 is the most recent log entry).
 * @param length Specify the maximum number of entries to retrieve starting
 * at offset. Maximum allowed value: 1000.
 * @param type Specify the maximum number of entries to retrieve starting
 * at offset. Maximum allowed value: 1000.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */
AlgoliaSearch.prototype.getLogs = function (offset, length, callback) {
  var clone = __webpack_require__("S7SM");
  var params = {};
  if (typeof offset === 'object') {
    // getLogs(params)
    params = clone(offset);
    callback = length;
  } else if (arguments.length === 0 || typeof offset === 'function') {
    // getLogs([cb])
    callback = offset;
  } else if (arguments.length === 1 || typeof length === 'function') {
    // getLogs(1, [cb)]
    callback = length;
    params.offset = offset;
  } else {
    // getLogs(1, 2, [cb])
    params.offset = offset;
    params.length = length;
  }

  if (params.offset === undefined) params.offset = 0;
  if (params.length === undefined) params.length = 10;

  return this._jsonRequest({
    method: 'GET',
    url: '/1/logs?' + this._getSearchParams(params, ''),
    hostType: 'read',
    callback: callback
  });
};

/*
 * List all existing indexes (paginated)
 *
 * @param page The page to retrieve, starting at 0.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with index list
 */
AlgoliaSearch.prototype.listIndexes = function (page, callback) {
  var params = '';

  if (page === undefined || typeof page === 'function') {
    callback = page;
  } else {
    params = '?page=' + page;
  }

  return this._jsonRequest({
    method: 'GET',
    url: '/1/indexes' + params,
    hostType: 'read',
    callback: callback
  });
};

/*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */
AlgoliaSearch.prototype.initIndex = function (indexName) {
  return new Index(this, indexName);
};

/*
 * @deprecated use client.listApiKeys
 */
AlgoliaSearch.prototype.listUserKeys = deprecate(function (callback) {
  return this.listApiKeys(callback);
}, deprecatedMessage('client.listUserKeys()', 'client.listApiKeys()'));

/*
 * List all existing api keys with their associated ACLs
 *
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with api keys list
 */
AlgoliaSearch.prototype.listApiKeys = function (callback) {
  return this._jsonRequest({
    method: 'GET',
    url: '/1/keys',
    hostType: 'read',
    callback: callback
  });
};

/*
 * @deprecated see client.getApiKey
 */
AlgoliaSearch.prototype.getUserKeyACL = deprecate(function (key, callback) {
  return this.getApiKey(key, callback);
}, deprecatedMessage('client.getUserKeyACL()', 'client.getApiKey()'));

/*
 * Get an API key
 *
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the right API key
 */
AlgoliaSearch.prototype.getApiKey = function (key, callback) {
  return this._jsonRequest({
    method: 'GET',
    url: '/1/keys/' + key,
    hostType: 'read',
    callback: callback
  });
};

/*
 * @deprecated see client.deleteApiKey
 */
AlgoliaSearch.prototype.deleteUserKey = deprecate(function (key, callback) {
  return this.deleteApiKey(key, callback);
}, deprecatedMessage('client.deleteUserKey()', 'client.deleteApiKey()'));

/*
 * Delete an existing API key
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the date of deletion
 */
AlgoliaSearch.prototype.deleteApiKey = function (key, callback) {
  return this._jsonRequest({
    method: 'DELETE',
    url: '/1/keys/' + key,
    hostType: 'write',
    callback: callback
  });
};

/*
 @deprecated see client.addApiKey
 */
AlgoliaSearch.prototype.addUserKey = deprecate(function (acls, params, callback) {
  return this.addApiKey(acls, params, callback);
}, deprecatedMessage('client.addUserKey()', 'client.addApiKey()'));

/*
 * Add a new global API key
 *
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the added API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.addUserKey(['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#AddKey|Algolia REST API Documentation}
 */
AlgoliaSearch.prototype.addApiKey = function (acls, params, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: client.addApiKey(arrayOfAcls[, params, callback])';

  if (!isArray(acls)) {
    throw new Error(usage);
  }

  if (arguments.length === 1 || typeof params === 'function') {
    callback = params;
    params = null;
  }

  var postObj = {
    acl: acls
  };

  if (params) {
    postObj.validity = params.validity;
    postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
    postObj.maxHitsPerQuery = params.maxHitsPerQuery;
    postObj.indexes = params.indexes;
    postObj.description = params.description;

    if (params.queryParameters) {
      postObj.queryParameters = this._getSearchParams(params.queryParameters, '');
    }

    postObj.referers = params.referers;
  }

  return this._jsonRequest({
    method: 'POST',
    url: '/1/keys',
    body: postObj,
    hostType: 'write',
    callback: callback
  });
};

/**
 * @deprecated Please use client.addApiKey()
 */
AlgoliaSearch.prototype.addUserKeyWithValidity = deprecate(function (acls, params, callback) {
  return this.addApiKey(acls, params, callback);
}, deprecatedMessage('client.addUserKeyWithValidity()', 'client.addApiKey()'));

/**
 * @deprecated Please use client.updateApiKey()
 */
AlgoliaSearch.prototype.updateUserKey = deprecate(function (key, acls, params, callback) {
  return this.updateApiKey(key, acls, params, callback);
}, deprecatedMessage('client.updateUserKey()', 'client.updateApiKey()'));

/**
 * Update an existing API key
 * @param {string} key - The key to update
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the modified API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.updateApiKey('APIKEY', ['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
 */
AlgoliaSearch.prototype.updateApiKey = function (key, acls, params, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])';

  if (!isArray(acls)) {
    throw new Error(usage);
  }

  if (arguments.length === 2 || typeof params === 'function') {
    callback = params;
    params = null;
  }

  var putObj = {
    acl: acls
  };

  if (params) {
    putObj.validity = params.validity;
    putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
    putObj.maxHitsPerQuery = params.maxHitsPerQuery;
    putObj.indexes = params.indexes;
    putObj.description = params.description;

    if (params.queryParameters) {
      putObj.queryParameters = this._getSearchParams(params.queryParameters, '');
    }

    putObj.referers = params.referers;
  }

  return this._jsonRequest({
    method: 'PUT',
    url: '/1/keys/' + key,
    body: putObj,
    hostType: 'write',
    callback: callback
  });
};

/**
 * Initialize a new batch of search queries
 * @deprecated use client.search()
 */
AlgoliaSearch.prototype.startQueriesBatch = deprecate(function startQueriesBatchDeprecated() {
  this._batch = [];
}, deprecatedMessage('client.startQueriesBatch()', 'client.search()'));

/**
 * Add a search query in the batch
 * @deprecated use client.search()
 */
AlgoliaSearch.prototype.addQueryInBatch = deprecate(function addQueryInBatchDeprecated(indexName, query, args) {
  this._batch.push({
    indexName: indexName,
    query: query,
    params: args
  });
}, deprecatedMessage('client.addQueryInBatch()', 'client.search()'));

/**
 * Launch the batch of queries using XMLHttpRequest.
 * @deprecated use client.search()
 */
AlgoliaSearch.prototype.sendQueriesBatch = deprecate(function sendQueriesBatchDeprecated(callback) {
  return this.search(this._batch, callback);
}, deprecatedMessage('client.sendQueriesBatch()', 'client.search()'));

/**
 * Perform write operations accross multiple indexes.
 *
 * To reduce the amount of time spent on network round trips,
 * you can create, update, or delete several objects in one call,
 * using the batch endpoint (all operations are done in the given order).
 *
 * Available actions:
 *   - addObject
 *   - updateObject
 *   - partialUpdateObject
 *   - partialUpdateObjectNoCreate
 *   - deleteObject
 *
 * https://www.algolia.com/doc/rest_api#Indexes
 * @param  {Object[]} operations An array of operations to perform
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.batch([{
 *   action: 'addObject',
 *   indexName: 'clients',
 *   body: {
 *     name: 'Bill'
 *   }
 * }, {
 *   action: 'udpateObject',
 *   indexName: 'fruits',
 *   body: {
 *     objectID: '29138',
 *     name: 'banana'
 *   }
 * }], cb)
 */
AlgoliaSearch.prototype.batch = function (operations, callback) {
  var isArray = __webpack_require__("YuqC");
  var usage = 'Usage: client.batch(operations[, callback])';

  if (!isArray(operations)) {
    throw new Error(usage);
  }

  return this._jsonRequest({
    method: 'POST',
    url: '/1/indexes/*/batch',
    body: {
      requests: operations
    },
    hostType: 'write',
    callback: callback
  });
};

/**
 * Assign or Move a userID to a cluster
 *
 * @param {string} data.userID The userID to assign to a new cluster
 * @param {string} data.cluster The cluster to assign the user to
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.assignUserID({ cluster: 'c1-test', userID: 'some-user' });
 */
AlgoliaSearch.prototype.assignUserID = function (data, callback) {
  if (!data.userID || !data.cluster) {
    throw new errors.AlgoliaSearchError('You have to provide both a userID and cluster', data);
  }
  return this._jsonRequest({
    method: 'POST',
    url: '/1/clusters/mapping',
    hostType: 'write',
    body: { cluster: data.cluster },
    callback: callback,
    headers: {
      'X-Algolia-User-ID': data.userID
    }
  });
};

/**
 * Get the top userIDs
 *
 * (the callback is the second argument)
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getTopUserID();
 */
AlgoliaSearch.prototype.getTopUserID = function (callback) {
  return this._jsonRequest({
    method: 'GET',
    url: '/1/clusters/mapping/top',
    hostType: 'read',
    callback: callback
  });
};

/**
 * Get userID
 *
 * @param {string} data.userID The userID to get info about
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getUserID({ userID: 'some-user' });
 */
AlgoliaSearch.prototype.getUserID = function (data, callback) {
  if (!data.userID) {
    throw new errors.AlgoliaSearchError('You have to provide a userID', { debugData: data });
  }
  return this._jsonRequest({
    method: 'GET',
    url: '/1/clusters/mapping/' + data.userID,
    hostType: 'read',
    callback: callback
  });
};

/**
 * List all the clusters
 *
 * (the callback is the second argument)
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.listClusters();
 */
AlgoliaSearch.prototype.listClusters = function (callback) {
  return this._jsonRequest({
    method: 'GET',
    url: '/1/clusters',
    hostType: 'read',
    callback: callback
  });
};

/**
 * List the userIDs
 *
 * (the callback is the second argument)
 *
 * @param {string} data.hitsPerPage How many hits on every page
 * @param {string} data.page The page to retrieve
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.listClusters();
 * client.listClusters({ page: 3, hitsPerPage: 30});
 */
AlgoliaSearch.prototype.listUserIDs = function (data, callback) {
  return this._jsonRequest({
    method: 'GET',
    url: '/1/clusters/mapping',
    body: data,
    hostType: 'read',
    callback: callback
  });
};

/**
 * Remove an userID
 *
 * @param {string} data.userID The userID to assign to a new cluster
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.removeUserID({ userID: 'some-user' });
 */
AlgoliaSearch.prototype.removeUserID = function (data, callback) {
  if (!data.userID) {
    throw new errors.AlgoliaSearchError('You have to provide a userID', { debugData: data });
  }
  return this._jsonRequest({
    method: 'DELETE',
    url: '/1/clusters/mapping',
    hostType: 'write',
    callback: callback,
    headers: {
      'X-Algolia-User-ID': data.userID
    }
  });
};

/**
 * Search for userIDs
 *
 * @param {string} data.cluster The cluster to target
 * @param {string} data.query The query to execute
 * @param {string} data.hitsPerPage How many hits on every page
 * @param {string} data.page The page to retrieve
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.searchUserIDs({ cluster: 'c1-test', query: 'some-user' });
 * client.searchUserIDs({
 *   cluster: "c1-test",
 *   query: "some-user",
 *   page: 3,
 *   hitsPerPage: 2
 * });
 */
AlgoliaSearch.prototype.searchUserIDs = function (data, callback) {
  return this._jsonRequest({
    method: 'POST',
    url: '/1/clusters/mapping/search',
    body: data,
    hostType: 'read',
    callback: callback
  });
};

// environment specific methods
AlgoliaSearch.prototype.destroy = notImplemented;
AlgoliaSearch.prototype.enableRateLimitForward = notImplemented;
AlgoliaSearch.prototype.disableRateLimitForward = notImplemented;
AlgoliaSearch.prototype.useSecuredAPIKey = notImplemented;
AlgoliaSearch.prototype.disableSecuredAPIKey = notImplemented;
AlgoliaSearch.prototype.generateSecuredApiKey = notImplemented;

function notImplemented() {
  var message = 'Not implemented in this environment.\n' + 'If you feel this is a mistake, write to support@algolia.com';

  throw new errors.AlgoliaSearchError(message);
}

/***/ }),

/***/ "4w6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatInputValue = __webpack_require__("F4ko");

var _formatInputValue2 = _interopRequireDefault(_formatInputValue);

var _formatDropdownValue = __webpack_require__("/Ck5");

var _formatDropdownValue2 = _interopRequireDefault(_formatDropdownValue);

var _algolia = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" baseProfile=\"basic\" viewBox=\"0 0 1366 362\">\n  <linearGradient id=\"SVGID_1_\" x1=\"428.2578\" x2=\"434.1453\" y1=\"404.1504\" y2=\"409.8504\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(94.045 0 0 -94.072 -40381.527 38479.52)\">\n    <stop offset=\"0\" stop-color=\"#00AEFF\"/>\n    <stop offset=\"1\" stop-color=\"#3369E7\"/>\n  </linearGradient>\n  <path d=\"M61.8 15.4h242.8c23.9 0 43.4 19.4 43.4 43.4v242.9c0 23.9-19.4 43.4-43.4 43.4H61.8c-23.9 0-43.4-19.4-43.4-43.4v-243c0-23.9 19.4-43.3 43.4-43.3z\" fill=\"url(#SVGID_1_)\"/>\n  <path d=\"M187 98.7c-51.4 0-93.1 41.7-93.1 93.2S135.6 285 187 285s93.1-41.7 93.1-93.2-41.6-93.1-93.1-93.1zm0 158.8c-36.2 0-65.6-29.4-65.6-65.6s29.4-65.6 65.6-65.6 65.6 29.4 65.6 65.6-29.3 65.6-65.6 65.6zm0-117.8v48.9c0 1.4 1.5 2.4 2.8 1.7l43.4-22.5c1-.5 1.3-1.7.8-2.7-9-15.8-25.7-26.6-45-27.3-1 0-2 .8-2 1.9zm-60.8-35.9l-5.7-5.7c-5.6-5.6-14.6-5.6-20.2 0l-6.8 6.8c-5.6 5.6-5.6 14.6 0 20.2l5.6 5.6c.9.9 2.2.7 3-.2 3.3-4.5 6.9-8.8 10.9-12.8 4.1-4.1 8.3-7.7 12.9-11 1-.6 1.1-2 .3-2.9zM217.5 89V77.7c0-7.9-6.4-14.3-14.3-14.3h-33.3c-7.9 0-14.3 6.4-14.3 14.3v11.6c0 1.3 1.2 2.2 2.5 1.9 9.3-2.7 19.1-4.1 29-4.1 9.5 0 18.9 1.3 28 3.8 1.2.3 2.4-.6 2.4-1.9z\" fill=\"#FFFFFF\"/>\n  <path d=\"M842.5 267.6c0 26.7-6.8 46.2-20.5 58.6-13.7 12.4-34.6 18.6-62.8 18.6-10.3 0-31.7-2-48.8-5.8l6.3-31c14.3 3 33.2 3.8 43.1 3.8 15.7 0 26.9-3.2 33.6-9.6s10-15.9 10-28.5v-6.4c-3.9 1.9-9 3.8-15.3 5.8-6.3 1.9-13.6 2.9-21.8 2.9-10.8 0-20.6-1.7-29.5-5.1-8.9-3.4-16.6-8.4-22.9-15-6.3-6.6-11.3-14.9-14.8-24.8s-5.3-27.6-5.3-40.6c0-12.2 1.9-27.5 5.6-37.7 3.8-10.2 9.2-19 16.5-26.3 7.2-7.3 16-12.9 26.3-17s22.4-6.7 35.5-6.7c12.7 0 24.4 1.6 35.8 3.5 11.4 1.9 21.1 3.9 29 6.1v155.2zm-108.7-77.2c0 16.4 3.6 34.6 10.8 42.2 7.2 7.6 16.5 11.4 27.9 11.4 6.2 0 12.1-.9 17.6-2.6 5.5-1.7 9.9-3.7 13.4-6.1v-97.1c-2.8-.6-14.5-3-25.8-3.3-14.2-.4-25 5.4-32.6 14.7-7.5 9.3-11.3 25.6-11.3 40.8zm294.3 0c0 13.2-1.9 23.2-5.8 34.1s-9.4 20.2-16.5 27.9c-7.1 7.7-15.6 13.7-25.6 17.9s-25.4 6.6-33.1 6.6c-7.7-.1-23-2.3-32.9-6.6-9.9-4.3-18.4-10.2-25.5-17.9-7.1-7.7-12.6-17-16.6-27.9s-6-20.9-6-34.1c0-13.2 1.8-25.9 5.8-36.7 4-10.8 9.6-20 16.8-27.7s15.8-13.6 25.6-17.8c9.9-4.2 20.8-6.2 32.6-6.2s22.7 2.1 32.7 6.2c10 4.2 18.6 10.1 25.6 17.8 7.1 7.7 12.6 16.9 16.6 27.7 4.2 10.8 6.3 23.5 6.3 36.7zm-40 .1c0-16.9-3.7-31-10.9-40.8-7.2-9.9-17.3-14.8-30.2-14.8-12.9 0-23 4.9-30.2 14.8-7.2 9.9-10.7 23.9-10.7 40.8 0 17.1 3.6 28.6 10.8 38.5 7.2 10 17.3 14.9 30.2 14.9 12.9 0 23-5 30.2-14.9 7.2-10 10.8-21.4 10.8-38.5zm127.1 86.4c-64.1.3-64.1-51.8-64.1-60.1L1051 32l39.1-6.2v183.6c0 4.7 0 34.5 25.1 34.6v32.9zm68.9 0h-39.3V108.1l39.3-6.2v175zm-19.7-193.5c13.1 0 23.8-10.6 23.8-23.7S1177.6 36 1164.4 36s-23.8 10.6-23.8 23.7 10.7 23.7 23.8 23.7zm117.4 18.6c12.9 0 23.8 1.6 32.6 4.8 8.8 3.2 15.9 7.7 21.1 13.4s8.9 13.5 11.1 21.7c2.3 8.2 3.4 17.2 3.4 27.1v100.6c-6 1.3-15.1 2.8-27.3 4.6s-25.9 2.7-41.1 2.7c-10.1 0-19.4-1-27.7-2.9-8.4-1.9-15.5-5-21.5-9.3-5.9-4.3-10.5-9.8-13.9-16.6-3.3-6.8-5-16.4-5-26.4 0-9.6 1.9-15.7 5.6-22.3 3.8-6.6 8.9-12 15.3-16.2 6.5-4.2 13.9-7.2 22.4-9s17.4-2.7 26.6-2.7c4.3 0 8.8.3 13.6.8s9.8 1.4 15.2 2.7v-6.4c0-4.5-.5-8.8-1.6-12.8-1.1-4.1-3-7.6-5.6-10.7-2.7-3.1-6.2-5.5-10.6-7.2s-10-3-16.7-3c-9 0-17.2 1.1-24.7 2.4-7.5 1.3-13.7 2.8-18.4 4.5l-4.7-32.1c4.9-1.7 12.2-3.4 21.6-5.1s19.5-2.6 30.3-2.6zm3.3 141.9c12 0 20.9-.7 27.1-1.9v-39.8c-2.2-.6-5.3-1.3-9.4-1.9-4.1-.6-8.6-1-13.6-1-4.3 0-8.7.3-13.1 1-4.4.6-8.4 1.8-11.9 3.5s-6.4 4.1-8.5 7.2c-2.2 3.1-3.2 4.9-3.2 9.6 0 9.2 3.2 14.5 9 18 5.9 3.6 13.7 5.3 23.6 5.3zM512.9 103c12.9 0 23.8 1.6 32.6 4.8 8.8 3.2 15.9 7.7 21.1 13.4 5.3 5.8 8.9 13.5 11.1 21.7 2.3 8.2 3.4 17.2 3.4 27.1v100.6c-6 1.3-15.1 2.8-27.3 4.6-12.2 1.8-25.9 2.7-41.1 2.7-10.1 0-19.4-1-27.7-2.9-8.4-1.9-15.5-5-21.5-9.3-5.9-4.3-10.5-9.8-13.9-16.6-3.3-6.8-5-16.4-5-26.4 0-9.6 1.9-15.7 5.6-22.3 3.8-6.6 8.9-12 15.3-16.2 6.5-4.2 13.9-7.2 22.4-9s17.4-2.7 26.6-2.7c4.3 0 8.8.3 13.6.8 4.7.5 9.8 1.4 15.2 2.7v-6.4c0-4.5-.5-8.8-1.6-12.8-1.1-4.1-3-7.6-5.6-10.7-2.7-3.1-6.2-5.5-10.6-7.2-4.4-1.7-10-3-16.7-3-9 0-17.2 1.1-24.7 2.4-7.5 1.3-13.7 2.8-18.4 4.5l-4.7-32.1c4.9-1.7 12.2-3.4 21.6-5.1 9.4-1.8 19.5-2.6 30.3-2.6zm3.4 142c12 0 20.9-.7 27.1-1.9v-39.8c-2.2-.6-5.3-1.3-9.4-1.9-4.1-.6-8.6-1-13.6-1-4.3 0-8.7.3-13.1 1-4.4.6-8.4 1.8-11.9 3.5s-6.4 4.1-8.5 7.2c-2.2 3.1-3.2 4.9-3.2 9.6 0 9.2 3.2 14.5 9 18s13.7 5.3 23.6 5.3zm158.5 31.9c-64.1.3-64.1-51.8-64.1-60.1L610.6 32l39.1-6.2v183.6c0 4.7 0 34.5 25.1 34.6v32.9z\" fill=\"#182359\"/></svg>";

var _algolia2 = _interopRequireDefault(_algolia);

var _osm = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\">\n  <path fill=\"#797979\" fill-rule=\"evenodd\" d=\"M6.577.5L5.304.005 2.627 1.02 0 0l.992 2.767-.986 2.685.998 2.76-1 2.717.613.22 3.39-3.45.563.06.726-.69s-.717-.92-.91-1.86c.193-.146.184-.14.355-.285C4.1 1.93 6.58.5 6.58.5zm-4.17 11.354l.22.12 2.68-1.05 2.62 1.04 2.644-1.03 1.02-2.717-.33-.944s-1.13 1.26-3.44.878c-.174.29-.25.37-.25.37s-1.11-.31-1.683-.89c-.573.58-.795.71-.795.71l.08.634-2.76 2.89zm6.26-4.395c1.817 0 3.29-1.53 3.29-3.4 0-1.88-1.473-3.4-3.29-3.4s-3.29 1.52-3.29 3.4c0 1.87 1.473 3.4 3.29 3.4z\"/>\n</svg>\n";

var _osm2 = _interopRequireDefault(_osm);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  footer: '<div class="ap-footer">\n  Built by <a href="https://www.algolia.com/places" title="Search by Algolia" class="ap-footer-algolia">' + _algolia2.default.trim() + '</a>\n  using <a href="https://community.algolia.com/places/documentation.html#license" class="ap-footer-osm" title="Algolia Places data \xA9 OpenStreetMap contributors">' + _osm2.default.trim() + ' <span>data</span></a>\n  </div>',
  value: _formatInputValue2.default,
  suggestion: _formatDropdownValue2.default
};

/***/ }),

/***/ "4y4D":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xk23");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "5CkJ":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    isArray = __webpack_require__("p/0c"),
    isObjectLike = __webpack_require__("OuyB");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}

module.exports = isString;

/***/ }),

/***/ "5Cyz":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("iS0Z");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

/***/ }),

/***/ "5E5G":
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "5Kr2":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("Chbn");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}

module.exports = castSlice;

/***/ }),

/***/ "5U5Y":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("yeiR");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "5cOW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__("Bcfi");
var events = __webpack_require__("FpCL");

/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */
function DerivedHelper(mainHelper, fn) {
  this.main = mainHelper;
  this.fn = fn;
  this.lastResults = null;
}

util.inherits(DerivedHelper, events.EventEmitter);

/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */
DerivedHelper.prototype.detach = function () {
  this.removeAllListeners();
  this.main.detachDerivedHelper(this);
};

DerivedHelper.prototype.getModifiedState = function (parameters) {
  return this.fn(parameters);
};

module.exports = DerivedHelper;

/***/ }),

/***/ "5cZt":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("srRO"),
    isFlattenable = __webpack_require__("0Gi7");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

/***/ }),

/***/ "5gsL":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("thFQ"),
    arrayIncludes = __webpack_require__("mBEK"),
    arrayIncludesWith = __webpack_require__("hjtK"),
    arrayMap = __webpack_require__("BblM"),
    baseUnary = __webpack_require__("PnXa"),
    cacheHas = __webpack_require__("qxaq");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;

/***/ }),

/***/ "6IAg":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "6MVR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var specialKeyCodeMap;

specialKeyCodeMap = {
  9: 'tab',
  27: 'esc',
  37: 'left',
  39: 'right',
  13: 'enter',
  38: 'up',
  40: 'down'
};

var _ = __webpack_require__("udZ4");
var DOM = __webpack_require__("BiYY");
var EventEmitter = __webpack_require__("VcxC");

// constructor
// -----------

function Input(o) {
  var that = this;
  var onBlur;
  var onFocus;
  var onKeydown;
  var onInput;

  o = o || {};

  if (!o.input) {
    _.error('input is missing');
  }

  // bound functions
  onBlur = _.bind(this._onBlur, this);
  onFocus = _.bind(this._onFocus, this);
  onKeydown = _.bind(this._onKeydown, this);
  onInput = _.bind(this._onInput, this);

  this.$hint = DOM.element(o.hint);
  this.$input = DOM.element(o.input).on('blur.aa', onBlur).on('focus.aa', onFocus).on('keydown.aa', onKeydown);

  // if no hint, noop all the hint related functions
  if (this.$hint.length === 0) {
    this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
  }

  // ie7 and ie8 don't support the input event
  // ie9 doesn't fire the input event when characters are removed
  // not sure if ie10 is compatible
  if (!_.isMsie()) {
    this.$input.on('input.aa', onInput);
  } else {
    this.$input.on('keydown.aa keypress.aa cut.aa paste.aa', function ($e) {
      // if a special key triggered this, ignore it
      if (specialKeyCodeMap[$e.which || $e.keyCode]) {
        return;
      }

      // give the browser a chance to update the value of the input
      // before checking to see if the query changed
      _.defer(_.bind(that._onInput, that, $e));
    });
  }

  // the query defaults to whatever the value of the input is
  // on initialization, it'll most likely be an empty string
  this.query = this.$input.val();

  // helps with calculating the width of the input's value
  this.$overflowHelper = buildOverflowHelper(this.$input);
}

// static methods
// --------------

Input.normalizeQuery = function (str) {
  // strips leading whitespace and condenses all whitespace
  return (str || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' ');
};

// instance methods
// ----------------

_.mixin(Input.prototype, EventEmitter, {

  // ### private

  _onBlur: function onBlur() {
    this.resetInputValue();
    this.$input.removeAttr('aria-activedescendant');
    this.trigger('blurred');
  },

  _onFocus: function onFocus() {
    this.trigger('focused');
  },

  _onKeydown: function onKeydown($e) {
    // which is normalized and consistent (but not for ie)
    var keyName = specialKeyCodeMap[$e.which || $e.keyCode];

    this._managePreventDefault(keyName, $e);
    if (keyName && this._shouldTrigger(keyName, $e)) {
      this.trigger(keyName + 'Keyed', $e);
    }
  },

  _onInput: function onInput() {
    this._checkInputValue();
  },

  _managePreventDefault: function managePreventDefault(keyName, $e) {
    var preventDefault;
    var hintValue;
    var inputValue;

    switch (keyName) {
      case 'tab':
        hintValue = this.getHint();
        inputValue = this.getInputValue();

        preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
        break;

      case 'up':
      case 'down':
        preventDefault = !withModifier($e);
        break;

      default:
        preventDefault = false;
    }

    if (preventDefault) {
      $e.preventDefault();
    }
  },

  _shouldTrigger: function shouldTrigger(keyName, $e) {
    var trigger;

    switch (keyName) {
      case 'tab':
        trigger = !withModifier($e);
        break;

      default:
        trigger = true;
    }

    return trigger;
  },

  _checkInputValue: function checkInputValue() {
    var inputValue;
    var areEquivalent;
    var hasDifferentWhitespace;

    inputValue = this.getInputValue();
    areEquivalent = areQueriesEquivalent(inputValue, this.query);
    hasDifferentWhitespace = areEquivalent && this.query ? this.query.length !== inputValue.length : false;

    this.query = inputValue;

    if (!areEquivalent) {
      this.trigger('queryChanged', this.query);
    } else if (hasDifferentWhitespace) {
      this.trigger('whitespaceChanged', this.query);
    }
  },

  // ### public

  focus: function focus() {
    this.$input.focus();
  },

  blur: function blur() {
    this.$input.blur();
  },

  getQuery: function getQuery() {
    return this.query;
  },

  setQuery: function setQuery(query) {
    this.query = query;
  },

  getInputValue: function getInputValue() {
    return this.$input.val();
  },

  setInputValue: function setInputValue(value, silent) {
    if (typeof value === 'undefined') {
      value = this.query;
    }
    this.$input.val(value);

    // silent prevents any additional events from being triggered
    if (silent) {
      this.clearHint();
    } else {
      this._checkInputValue();
    }
  },

  expand: function expand() {
    this.$input.attr('aria-expanded', 'true');
  },

  collapse: function collapse() {
    this.$input.attr('aria-expanded', 'false');
  },

  setActiveDescendant: function setActiveDescendant(activedescendantId) {
    this.$input.attr('aria-activedescendant', activedescendantId);
  },

  removeActiveDescendant: function removeActiveDescendant() {
    this.$input.removeAttr('aria-activedescendant');
  },

  resetInputValue: function resetInputValue() {
    this.setInputValue(this.query, true);
  },

  getHint: function getHint() {
    return this.$hint.val();
  },

  setHint: function setHint(value) {
    this.$hint.val(value);
  },

  clearHint: function clearHint() {
    this.setHint('');
  },

  clearHintIfInvalid: function clearHintIfInvalid() {
    var val;
    var hint;
    var valIsPrefixOfHint;
    var isValid;

    val = this.getInputValue();
    hint = this.getHint();
    valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
    isValid = val !== '' && valIsPrefixOfHint && !this.hasOverflow();

    if (!isValid) {
      this.clearHint();
    }
  },

  getLanguageDirection: function getLanguageDirection() {
    return (this.$input.css('direction') || 'ltr').toLowerCase();
  },

  hasOverflow: function hasOverflow() {
    // 2 is arbitrary, just picking a small number to handle edge cases
    var constraint = this.$input.width() - 2;

    this.$overflowHelper.text(this.getInputValue());

    return this.$overflowHelper.width() >= constraint;
  },

  isCursorAtEnd: function isCursorAtEnd() {
    var valueLength;
    var selectionStart;
    var range;

    valueLength = this.$input.val().length;
    selectionStart = this.$input[0].selectionStart;

    if (_.isNumber(selectionStart)) {
      return selectionStart === valueLength;
    } else if (document.selection) {
      // NOTE: this won't work unless the input has focus, the good news
      // is this code should only get called when the input has focus
      range = document.selection.createRange();
      range.moveStart('character', -valueLength);

      return valueLength === range.text.length;
    }

    return true;
  },

  destroy: function destroy() {
    this.$hint.off('.aa');
    this.$input.off('.aa');

    this.$hint = this.$input = this.$overflowHelper = null;
  }
});

// helper functions
// ----------------

function buildOverflowHelper($input) {
  return DOM.element('<pre aria-hidden="true"></pre>').css({
    // position helper off-screen
    position: 'absolute',
    visibility: 'hidden',
    // avoid line breaks and whitespace collapsing
    whiteSpace: 'pre',
    // use same font css as input to calculate accurate width
    fontFamily: $input.css('font-family'),
    fontSize: $input.css('font-size'),
    fontStyle: $input.css('font-style'),
    fontVariant: $input.css('font-variant'),
    fontWeight: $input.css('font-weight'),
    wordSpacing: $input.css('word-spacing'),
    letterSpacing: $input.css('letter-spacing'),
    textIndent: $input.css('text-indent'),
    textRendering: $input.css('text-rendering'),
    textTransform: $input.css('text-transform')
  }).insertAfter($input);
}

function areQueriesEquivalent(a, b) {
  return Input.normalizeQuery(a) === Input.normalizeQuery(b);
}

function withModifier($e) {
  return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
}

module.exports = Input;

/***/ }),

/***/ "6O7z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '3.24.9';

/***/ }),

/***/ "6V8m":
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__("GRkX"),
    composeArgsRight = __webpack_require__("GdxW"),
    replaceHolders = __webpack_require__("bU1I");

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;

/***/ }),

/***/ "6q/8":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("srRO"),
    getPrototype = __webpack_require__("CXf5"),
    getSymbols = __webpack_require__("EvLK"),
    stubArray = __webpack_require__("7Mmb");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;

/***/ }),

/***/ "6ykg":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("49I8"),
    equalArrays = __webpack_require__("pkMv"),
    equalByTag = __webpack_require__("oaAh"),
    equalObjects = __webpack_require__("mFpP"),
    getTag = __webpack_require__("tQCT"),
    isArray = __webpack_require__("p/0c"),
    isBuffer = __webpack_require__("iyC2"),
    isTypedArray = __webpack_require__("kwIb");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ "704E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This is the object returned by the `index.browseAll()` method

module.exports = IndexBrowser;

var inherits = __webpack_require__("+ZRW");
var EventEmitter = __webpack_require__("FpCL").EventEmitter;

function IndexBrowser() {}

inherits(IndexBrowser, EventEmitter);

IndexBrowser.prototype.stop = function () {
  this._stopped = true;
  this._clean();
};

IndexBrowser.prototype._end = function () {
  this.emit('end');
  this._clean();
};

IndexBrowser.prototype._error = function (err) {
  this.emit('error', err);
  this._clean();
};

IndexBrowser.prototype._result = function (content) {
  this.emit('result', content);
};

IndexBrowser.prototype._clean = function () {
  this.removeAllListeners('stop');
  this.removeAllListeners('end');
  this.removeAllListeners('error');
  this.removeAllListeners('result');
};

/***/ }),

/***/ "71Gl":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("LN6c");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

/***/ }),

/***/ "7BjG":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ "7D78":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ "7EWu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = called = ++called % 2;
  };
};

/***/ }),

/***/ "7Mmb":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "85ue":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("ZC1a");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "8NLT":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__("jcLW");
} else {
  module.exports = __webpack_require__("9WM/");
}

/***/ }),

/***/ "8OXg":
/***/ (function(module, exports) {

module.exports = function deprecatedMessage(previousUsage, newUsage) {
  var githubAnchorLink = previousUsage.toLowerCase().replace(/[\.\(\)]/g, '');

  return 'algoliasearch: `' + previousUsage + '` was replaced by `' + newUsage + '`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#' + githubAnchorLink;
};

/***/ }),

/***/ "8kob":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("a+zQ"),
    createCtor = __webpack_require__("DrEq"),
    root = __webpack_require__("MIhM");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== root && this instanceof wrapper ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;

/***/ }),

/***/ "8q90":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function omit(obj, test) {
  var keys = __webpack_require__("ywQn");
  var foreach = __webpack_require__("Sh+V");

  var filtered = {};

  foreach(keys(obj), function doFilter(keyName) {
    if (test(keyName) !== true) {
      filtered[keyName] = obj[keyName];
    }
  });

  return filtered;
};

/***/ }),

/***/ "8uUO":
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

/***/ }),

/***/ "92s5":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("dtkN"),
    keysIn = __webpack_require__("+UAC");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "9FAS":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("u9vI"),
    isPrototype = __webpack_require__("nhsl"),
    nativeKeysIn = __webpack_require__("uy4o");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "9WM/":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__("Axko");
var util = __webpack_require__("Bcfi");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("y5CM");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
    return str.trim();
  }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \x1B[3' + c + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\x1B[3' + c + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__("vHs2");
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__("QPpz");
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),

/***/ "9bTM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};

/***/ }),

/***/ "9ocJ":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "A+gr":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "A8RV":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("3w4y");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "ACee":
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;

/***/ }),

/***/ "AOeR":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("Ro2m"),
    isArrayLike = __webpack_require__("LN6c"),
    isString = __webpack_require__("5CkJ"),
    toInteger = __webpack_require__("+d9A"),
    values = __webpack_require__("AwGC");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}

module.exports = includes;

/***/ }),

/***/ "AQ5J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__("udZ4");
var DOM = __webpack_require__("BiYY");
var EventEmitter = __webpack_require__("VcxC");
var Dataset = __webpack_require__("zZIM");
var css = __webpack_require__("nDR6");

// constructor
// -----------

function Dropdown(o) {
  var that = this;
  var onSuggestionClick;
  var onSuggestionMouseEnter;
  var onSuggestionMouseLeave;

  o = o || {};

  if (!o.menu) {
    _.error('menu is required');
  }

  if (!_.isArray(o.datasets) && !_.isObject(o.datasets)) {
    _.error('1 or more datasets required');
  }
  if (!o.datasets) {
    _.error('datasets is required');
  }

  this.isOpen = false;
  this.isEmpty = true;
  this.minLength = o.minLength || 0;
  this.templates = {};
  this.appendTo = o.appendTo || false;
  this.css = _.mixin({}, css, o.appendTo ? css.appendTo : {});
  this.cssClasses = o.cssClasses = _.mixin({}, css.defaultClasses, o.cssClasses || {});
  this.cssClasses.prefix = o.cssClasses.formattedPrefix || _.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);

  // bound functions
  onSuggestionClick = _.bind(this._onSuggestionClick, this);
  onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
  onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);

  var cssClass = _.className(this.cssClasses.prefix, this.cssClasses.suggestion);
  this.$menu = DOM.element(o.menu).on('mouseenter.aa', cssClass, onSuggestionMouseEnter).on('mouseleave.aa', cssClass, onSuggestionMouseLeave).on('click.aa', cssClass, onSuggestionClick);

  this.$container = o.appendTo ? o.wrapper : this.$menu;

  if (o.templates && o.templates.header) {
    this.templates.header = _.templatify(o.templates.header);
    this.$menu.prepend(this.templates.header());
  }

  if (o.templates && o.templates.empty) {
    this.templates.empty = _.templatify(o.templates.empty);
    this.$empty = DOM.element('<div class="' + _.className(this.cssClasses.prefix, this.cssClasses.empty, true) + '">' + '</div>');
    this.$menu.append(this.$empty);
    this.$empty.hide();
  }

  this.datasets = _.map(o.datasets, function (oDataset) {
    return initializeDataset(that.$menu, oDataset, o.cssClasses);
  });
  _.each(this.datasets, function (dataset) {
    var root = dataset.getRoot();
    if (root && root.parent().length === 0) {
      that.$menu.append(root);
    }
    dataset.onSync('rendered', that._onRendered, that);
  });

  if (o.templates && o.templates.footer) {
    this.templates.footer = _.templatify(o.templates.footer);
    this.$menu.append(this.templates.footer());
  }

  var self = this;
  DOM.element(window).resize(function () {
    self._redraw();
  });
}

// instance methods
// ----------------

_.mixin(Dropdown.prototype, EventEmitter, {

  // ### private

  _onSuggestionClick: function onSuggestionClick($e) {
    this.trigger('suggestionClicked', DOM.element($e.currentTarget));
  },

  _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
    var elt = DOM.element($e.currentTarget);
    if (elt.hasClass(_.className(this.cssClasses.prefix, this.cssClasses.cursor, true))) {
      // we're already on the cursor
      // => we're probably entering it again after leaving it for a nested div
      return;
    }
    this._removeCursor();

    // Fixes iOS double tap behaviour, by modifying the DOM right before the
    // native href clicks happens, iOS will requires another tap to follow
    // a suggestion that has an <a href> element inside
    // https://www.google.com/search?q=ios+double+tap+bug+href
    var suggestion = this;
    setTimeout(function () {
      // this exact line, when inside the main loop, will trigger a double tap bug
      // on iOS devices
      suggestion._setCursor(elt, false);
    }, 0);
  },

  _onSuggestionMouseLeave: function onSuggestionMouseLeave($e) {
    // $e.relatedTarget is the `EventTarget` the pointing device entered to
    if ($e.relatedTarget) {
      var elt = DOM.element($e.relatedTarget);
      if (elt.closest('.' + _.className(this.cssClasses.prefix, this.cssClasses.cursor, true)).length > 0) {
        // our father is a cursor
        // => it means we're just leaving the suggestion for a nested div
        return;
      }
    }
    this._removeCursor();
    this.trigger('cursorRemoved');
  },

  _onRendered: function onRendered(e, query) {
    this.isEmpty = _.every(this.datasets, isDatasetEmpty);

    if (this.isEmpty) {
      if (query.length >= this.minLength) {
        this.trigger('empty');
      }

      if (this.$empty) {
        if (query.length < this.minLength) {
          this._hide();
        } else {
          var html = this.templates.empty({
            query: this.datasets[0] && this.datasets[0].query
          });
          this.$empty.html(html);
          this.$empty.show();
          this._show();
        }
      } else if (_.any(this.datasets, hasEmptyTemplate)) {
        if (query.length < this.minLength) {
          this._hide();
        } else {
          this._show();
        }
      } else {
        this._hide();
      }
    } else if (this.isOpen) {
      if (this.$empty) {
        this.$empty.empty();
        this.$empty.hide();
      }

      if (query.length >= this.minLength) {
        this._show();
      } else {
        this._hide();
      }
    }

    this.trigger('datasetRendered');

    function isDatasetEmpty(dataset) {
      return dataset.isEmpty();
    }

    function hasEmptyTemplate(dataset) {
      return dataset.templates && dataset.templates.empty;
    }
  },

  _hide: function _hide() {
    this.$container.hide();
  },

  _show: function _show() {
    // can't use jQuery#show because $menu is a span element we want
    // display: block; not dislay: inline;
    this.$container.css('display', 'block');

    this._redraw();

    this.trigger('shown');
  },

  _redraw: function redraw() {
    if (!this.isOpen || !this.appendTo) return;

    this.trigger('redrawn');
  },

  _getSuggestions: function getSuggestions() {
    return this.$menu.find(_.className(this.cssClasses.prefix, this.cssClasses.suggestion));
  },

  _getCursor: function getCursor() {
    return this.$menu.find(_.className(this.cssClasses.prefix, this.cssClasses.cursor)).first();
  },

  _setCursor: function setCursor($el, updateInput) {
    $el.first().addClass(_.className(this.cssClasses.prefix, this.cssClasses.cursor, true)).attr('aria-selected', 'true');
    this.trigger('cursorMoved', updateInput);
  },

  _removeCursor: function removeCursor() {
    this._getCursor().removeClass(_.className(this.cssClasses.prefix, this.cssClasses.cursor, true)).removeAttr('aria-selected');
  },

  _moveCursor: function moveCursor(increment) {
    var $suggestions;
    var $oldCursor;
    var newCursorIndex;
    var $newCursor;

    if (!this.isOpen) {
      return;
    }

    $oldCursor = this._getCursor();
    $suggestions = this._getSuggestions();

    this._removeCursor();

    // shifting before and after modulo to deal with -1 index
    newCursorIndex = $suggestions.index($oldCursor) + increment;
    newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;

    if (newCursorIndex === -1) {
      this.trigger('cursorRemoved');

      return;
    } else if (newCursorIndex < -1) {
      newCursorIndex = $suggestions.length - 1;
    }

    this._setCursor($newCursor = $suggestions.eq(newCursorIndex), true);

    // in the case of scrollable overflow
    // make sure the cursor is visible in the menu
    this._ensureVisible($newCursor);
  },

  _ensureVisible: function ensureVisible($el) {
    var elTop;
    var elBottom;
    var menuScrollTop;
    var menuHeight;

    elTop = $el.position().top;
    elBottom = elTop + $el.height() + parseInt($el.css('margin-top'), 10) + parseInt($el.css('margin-bottom'), 10);
    menuScrollTop = this.$menu.scrollTop();
    menuHeight = this.$menu.height() + parseInt(this.$menu.css('paddingTop'), 10) + parseInt(this.$menu.css('paddingBottom'), 10);

    if (elTop < 0) {
      this.$menu.scrollTop(menuScrollTop + elTop);
    } else if (menuHeight < elBottom) {
      this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
    }
  },

  // ### public

  close: function close() {
    if (this.isOpen) {
      this.isOpen = false;

      this._removeCursor();
      this._hide();

      this.trigger('closed');
    }
  },

  open: function open() {
    if (!this.isOpen) {
      this.isOpen = true;

      if (!this.isEmpty) {
        this._show();
      }

      this.trigger('opened');
    }
  },

  setLanguageDirection: function setLanguageDirection(dir) {
    this.$menu.css(dir === 'ltr' ? this.css.ltr : this.css.rtl);
  },

  moveCursorUp: function moveCursorUp() {
    this._moveCursor(-1);
  },

  moveCursorDown: function moveCursorDown() {
    this._moveCursor(+1);
  },

  getDatumForSuggestion: function getDatumForSuggestion($el) {
    var datum = null;

    if ($el.length) {
      datum = {
        raw: Dataset.extractDatum($el),
        value: Dataset.extractValue($el),
        datasetName: Dataset.extractDatasetName($el)
      };
    }

    return datum;
  },

  getCurrentCursor: function getCurrentCursor() {
    return this._getCursor().first();
  },

  getDatumForCursor: function getDatumForCursor() {
    return this.getDatumForSuggestion(this._getCursor().first());
  },

  getDatumForTopSuggestion: function getDatumForTopSuggestion() {
    return this.getDatumForSuggestion(this._getSuggestions().first());
  },

  cursorTopSuggestion: function cursorTopSuggestion() {
    this._setCursor(this._getSuggestions().first(), false);
  },

  update: function update(query) {
    _.each(this.datasets, updateDataset);

    function updateDataset(dataset) {
      dataset.update(query);
    }
  },

  empty: function empty() {
    _.each(this.datasets, clearDataset);
    this.isEmpty = true;

    function clearDataset(dataset) {
      dataset.clear();
    }
  },

  isVisible: function isVisible() {
    return this.isOpen && !this.isEmpty;
  },

  destroy: function destroy() {
    this.$menu.off('.aa');

    this.$menu = null;

    _.each(this.datasets, destroyDataset);

    function destroyDataset(dataset) {
      dataset.destroy();
    }
  }
});

// helper functions
// ----------------
Dropdown.Dataset = Dataset;

function initializeDataset($menu, oDataset, cssClasses) {
  return new Dropdown.Dataset(_.mixin({ $menu: $menu, cssClasses: cssClasses }, oDataset));
}

module.exports = Dropdown;

/***/ }),

/***/ "Aa6+":
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__("l0ul"),
    baseToString = __webpack_require__("3w4y"),
    toInteger = __webpack_require__("+d9A"),
    toString = __webpack_require__("A8RV");

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = toString(string);
  position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);

  target = baseToString(target);
  return string.slice(position, position + target.length) == target;
}

module.exports = startsWith;

/***/ }),

/***/ "Ag0p":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("FTXF");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "AwGC":
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__("R9d0"),
    keys = __webpack_require__("HI10");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;

/***/ }),

/***/ "Axko":
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "B/Nj":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("nhsl"),
    nativeKeys = __webpack_require__("0J1o");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "BBRi":
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__("B/Nj"),
    getTag = __webpack_require__("tQCT"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c"),
    isArrayLike = __webpack_require__("LN6c"),
    isBuffer = __webpack_require__("iyC2"),
    isPrototype = __webpack_require__("nhsl"),
    isTypedArray = __webpack_require__("kwIb");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;

/***/ }),

/***/ "BDy2":
/***/ (function(module, exports, __webpack_require__) {

var foreach = __webpack_require__("Sh+V");

module.exports = function map(arr, fn) {
  var newArr = [];
  foreach(arr, function (item, itemIndex) {
    newArr.push(fn(item, itemIndex, arr));
  });
  return newArr;
};

/***/ }),

/***/ "BblM":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "Bcfi":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "BiYY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  element: null
};

/***/ }),

/***/ "Bixt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__("cTKO");
var compact = __webpack_require__("PYh1");
var indexOf = __webpack_require__("YCGE");
var findIndex = __webpack_require__("cKQ/");
var get = __webpack_require__("5U5Y");

var sumBy = __webpack_require__("mqk9");
var find = __webpack_require__("y1nO");
var includes = __webpack_require__("AOeR");
var map = __webpack_require__("vGW8");
var orderBy = __webpack_require__("CiGM");

var defaults = __webpack_require__("mpS4");
var merge = __webpack_require__("yubd");

var isArray = __webpack_require__("p/0c");
var isFunction = __webpack_require__("dRuq");

var partial = __webpack_require__("tOd9");
var partialRight = __webpack_require__("mJWJ");

var formatSort = __webpack_require__("ymsk");

var generateHierarchicalTree = __webpack_require__("zbTb");

/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */

/**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */

/**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */

/**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */

function getIndices(obj) {
  var indices = {};

  forEach(obj, function (val, idx) {
    indices[val] = idx;
  });

  return indices;
}

function assignFacetStats(dest, facetStats, key) {
  if (facetStats && facetStats[key]) {
    dest.stats = facetStats[key];
  }
}

function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
  return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
    return includes(hierarchicalFacet.attributes, hierarchicalAttributeName);
  });
}

/*eslint-disable */
/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/
/*eslint-enable */
function SearchResults(state, results) {
  var mainSubResponse = results[0];

  this._rawResults = results;

  /**
   * query used to generate the results
   * @member {string}
   */
  this.query = mainSubResponse.query;
  /**
   * The query as parsed by the engine given all the rules.
   * @member {string}
   */
  this.parsedQuery = mainSubResponse.parsedQuery;
  /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @member {object[]}
   */
  this.hits = mainSubResponse.hits;
  /**
   * index where the results come from
   * @member {string}
   */
  this.index = mainSubResponse.index;
  /**
   * number of hits per page requested
   * @member {number}
   */
  this.hitsPerPage = mainSubResponse.hitsPerPage;
  /**
   * total number of hits of this query on the index
   * @member {number}
   */
  this.nbHits = mainSubResponse.nbHits;
  /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @member {number}
   */
  this.nbPages = mainSubResponse.nbPages;
  /**
   * current page
   * @member {number}
   */
  this.page = mainSubResponse.page;
  /**
   * sum of the processing time of all the queries
   * @member {number}
   */
  this.processingTimeMS = sumBy(results, 'processingTimeMS');
  /**
   * The position if the position was guessed by IP.
   * @member {string}
   * @example "48.8637,2.3615",
   */
  this.aroundLatLng = mainSubResponse.aroundLatLng;
  /**
   * The radius computed by Algolia.
   * @member {string}
   * @example "126792922",
   */
  this.automaticRadius = mainSubResponse.automaticRadius;
  /**
   * String identifying the server used to serve this request.
   * @member {string}
   * @example "c7-use-2.algolia.net",
   */
  this.serverUsed = mainSubResponse.serverUsed;
  /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @member {boolean}
   */
  this.timeoutCounts = mainSubResponse.timeoutCounts;
  /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @member {boolean}
   */
  this.timeoutHits = mainSubResponse.timeoutHits;

  /**
   * True if the counts of the facets is exhaustive
   * @member {boolean}
   */
  this.exhaustiveFacetsCount = mainSubResponse.exhaustiveFacetsCount;

  /**
   * True if the number of hits is exhaustive
   * @member {boolean}
   */
  this.exhaustiveNbHits = mainSubResponse.exhaustiveNbHits;

  /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @member {object[]}
   */
  this.userData = mainSubResponse.userData;

  /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */
  this.disjunctiveFacets = [];
  /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */
  this.hierarchicalFacets = map(state.hierarchicalFacets, function initFutureTree() {
    return [];
  });
  /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */
  this.facets = [];

  var disjunctiveFacets = state.getRefinedDisjunctiveFacets();

  var facetsIndices = getIndices(state.facets);
  var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
  var nextDisjunctiveResult = 1;

  var self = this;
  // Since we send request only for disjunctive facets that have been refined,
  // we get the facets informations from the first, general, response.
  forEach(mainSubResponse.facets, function (facetValueObject, facetKey) {
    var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);

    if (hierarchicalFacet) {
      // Place the hierarchicalFacet data at the correct index depending on
      // the attributes order that was defined at the helper initialization
      var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
      var idxAttributeName = findIndex(state.hierarchicalFacets, { name: hierarchicalFacet.name });
      self.hierarchicalFacets[idxAttributeName][facetIndex] = {
        attribute: facetKey,
        data: facetValueObject,
        exhaustive: mainSubResponse.exhaustiveFacetsCount
      };
    } else {
      var isFacetDisjunctive = indexOf(state.disjunctiveFacets, facetKey) !== -1;
      var isFacetConjunctive = indexOf(state.facets, facetKey) !== -1;
      var position;

      if (isFacetDisjunctive) {
        position = disjunctiveFacetsIndices[facetKey];
        self.disjunctiveFacets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
      }
      if (isFacetConjunctive) {
        position = facetsIndices[facetKey];
        self.facets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
      }
    }
  });

  // Make sure we do not keep holes within the hierarchical facets
  this.hierarchicalFacets = compact(this.hierarchicalFacets);

  // aggregate the refined disjunctive facets
  forEach(disjunctiveFacets, function (disjunctiveFacet) {
    var result = results[nextDisjunctiveResult];
    var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);

    // There should be only item in facets.
    forEach(result.facets, function (facetResults, dfacet) {
      var position;

      if (hierarchicalFacet) {
        position = findIndex(state.hierarchicalFacets, { name: hierarchicalFacet.name });
        var attributeIndex = findIndex(self.hierarchicalFacets[position], { attribute: dfacet });

        // previous refinements and no results so not able to find it
        if (attributeIndex === -1) {
          return;
        }

        self.hierarchicalFacets[position][attributeIndex].data = merge({}, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
      } else {
        position = disjunctiveFacetsIndices[dfacet];

        var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};

        self.disjunctiveFacets[position] = {
          name: dfacet,
          data: defaults({}, facetResults, dataFromMainRequest),
          exhaustive: result.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);

        if (state.disjunctiveFacetsRefinements[dfacet]) {
          forEach(state.disjunctiveFacetsRefinements[dfacet], function (refinementValue) {
            // add the disjunctive refinements if it is no more retrieved
            if (!self.disjunctiveFacets[position].data[refinementValue] && indexOf(state.disjunctiveFacetsRefinements[dfacet], refinementValue) > -1) {
              self.disjunctiveFacets[position].data[refinementValue] = 0;
            }
          });
        }
      }
    });
    nextDisjunctiveResult++;
  });

  // if we have some root level values for hierarchical facets, merge them
  forEach(state.getRefinedHierarchicalFacets(), function (refinedFacet) {
    var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
    // if we are already at a root refinement (or no refinement at all), there is no
    // root level values request
    if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
      return;
    }

    var result = results[nextDisjunctiveResult];

    forEach(result.facets, function (facetResults, dfacet) {
      var position = findIndex(state.hierarchicalFacets, { name: hierarchicalFacet.name });
      var attributeIndex = findIndex(self.hierarchicalFacets[position], { attribute: dfacet });

      // previous refinements and no results so not able to find it
      if (attributeIndex === -1) {
        return;
      }

      // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
      // then the disjunctive values will be `beers` (count: 100),
      // but we do not want to display
      //   | beers (100)
      //     > IPA (5)
      // We want
      //   | beers (5)
      //     > IPA (5)
      var defaultData = {};

      if (currentRefinement.length > 0) {
        var root = currentRefinement[0].split(separator)[0];
        defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
      }

      self.hierarchicalFacets[position][attributeIndex].data = defaults(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
    });

    nextDisjunctiveResult++;
  });

  // add the excludes
  forEach(state.facetsExcludes, function (excludes, facetName) {
    var position = facetsIndices[facetName];

    self.facets[position] = {
      name: facetName,
      data: mainSubResponse.facets[facetName],
      exhaustive: mainSubResponse.exhaustiveFacetsCount
    };
    forEach(excludes, function (facetValue) {
      self.facets[position] = self.facets[position] || { name: facetName };
      self.facets[position].data = self.facets[position].data || {};
      self.facets[position].data[facetValue] = 0;
    });
  });

  this.hierarchicalFacets = map(this.hierarchicalFacets, generateHierarchicalTree(state));

  this.facets = compact(this.facets);
  this.disjunctiveFacets = compact(this.disjunctiveFacets);

  this._state = state;
}

/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */
SearchResults.prototype.getFacetByName = function (name) {
  var predicate = { name: name };

  return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
};

/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */
function extractNormalizedFacetValues(results, attribute) {
  var predicate = { name: attribute };
  if (results._state.isConjunctiveFacet(attribute)) {
    var facet = find(results.facets, predicate);
    if (!facet) return [];

    return map(facet.data, function (v, k) {
      return {
        name: k,
        count: v,
        isRefined: results._state.isFacetRefined(attribute, k),
        isExcluded: results._state.isExcludeRefined(attribute, k)
      };
    });
  } else if (results._state.isDisjunctiveFacet(attribute)) {
    var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
    if (!disjunctiveFacet) return [];

    return map(disjunctiveFacet.data, function (v, k) {
      return {
        name: k,
        count: v,
        isRefined: results._state.isDisjunctiveFacetRefined(attribute, k)
      };
    });
  } else if (results._state.isHierarchicalFacet(attribute)) {
    return find(results.hierarchicalFacets, predicate);
  }
}

/**
 * Sort nodes of a hierarchical facet results
 * @private
 * @param {HierarchicalFacet} node node to upon which we want to apply the sort
 */
function recSort(sortFn, node) {
  if (!node.data || node.data.length === 0) {
    return node;
  }
  var children = map(node.data, partial(recSort, sortFn));
  var sortedChildren = sortFn(children);
  var newNode = merge({}, node, { data: sortedChildren });
  return newNode;
}

SearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

function vanillaSortFn(order, data) {
  return data.sort(order);
}

/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('results', function(content){
 *   //get values ordered only by name ascending using the string predicate
 *   content.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   content.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */
SearchResults.prototype.getFacetValues = function (attribute, opts) {
  var facetValues = extractNormalizedFacetValues(this, attribute);
  if (!facetValues) throw new Error(attribute + ' is not a retrieved facet.');

  var options = defaults({}, opts, { sortBy: SearchResults.DEFAULT_SORT });

  if (isArray(options.sortBy)) {
    var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
    if (isArray(facetValues)) {
      return orderBy(facetValues, order[0], order[1]);
    }
    // If facetValues is not an array, it's an object thus a hierarchical facet object
    return recSort(partialRight(orderBy, order[0], order[1]), facetValues);
  } else if (isFunction(options.sortBy)) {
    if (isArray(facetValues)) {
      return facetValues.sort(options.sortBy);
    }
    // If facetValues is not an array, it's an object thus a hierarchical facet object
    return recSort(partial(vanillaSortFn, options.sortBy), facetValues);
  }
  throw new Error('options.sortBy is optional but if defined it must be ' + 'either an array of string (predicates) or a sorting function');
};

/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */
SearchResults.prototype.getFacetStats = function (attribute) {
  if (this._state.isConjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.facets, attribute);
  } else if (this._state.isDisjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
  }

  throw new Error(attribute + ' is not present in `facets` or `disjunctiveFacets`');
};

function getFacetStatsIfAvailable(facetList, facetName) {
  var data = find(facetList, { name: facetName });
  return data && data.stats;
}

/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhausistivity for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * @return {Array.<Refinement>} all the refinements
 */
SearchResults.prototype.getRefinements = function () {
  var state = this._state;
  var results = this;
  var res = [];

  forEach(state.facetsRefinements, function (refinements, attributeName) {
    forEach(refinements, function (name) {
      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
    });
  });

  forEach(state.facetsExcludes, function (refinements, attributeName) {
    forEach(refinements, function (name) {
      res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
    });
  });

  forEach(state.disjunctiveFacetsRefinements, function (refinements, attributeName) {
    forEach(refinements, function (name) {
      res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
    });
  });

  forEach(state.hierarchicalFacetsRefinements, function (refinements, attributeName) {
    forEach(refinements, function (name) {
      res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
    });
  });

  forEach(state.numericRefinements, function (operators, attributeName) {
    forEach(operators, function (values, operator) {
      forEach(values, function (value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: value,
          numericValue: value,
          operator: operator
        });
      });
    });
  });

  forEach(state.tagRefinements, function (name) {
    res.push({ type: 'tag', attributeName: '_tags', name: name });
  });

  return res;
};

function getRefinement(state, type, attributeName, name, resultsFacets) {
  var facet = find(resultsFacets, { name: attributeName });
  var count = get(facet, 'data[' + name + ']');
  var exhaustive = get(facet, 'exhaustive');
  return {
    type: type,
    attributeName: attributeName,
    name: name,
    count: count || 0,
    exhaustive: exhaustive || false
  };
}

function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
  var facet = find(resultsFacets, { name: attributeName });
  var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
  var splitted = name.split(facetDeclaration.separator);
  var configuredName = splitted[splitted.length - 1];
  for (var i = 0; facet !== undefined && i < splitted.length; ++i) {
    facet = find(facet.data, { name: splitted[i] });
  }
  var count = get(facet, 'count');
  var exhaustive = get(facet, 'exhaustive');
  return {
    type: 'hierarchical',
    attributeName: attributeName,
    name: configuredName,
    count: count || 0,
    exhaustive: exhaustive || false
  };
}

module.exports = SearchResults;

/***/ }),

/***/ "BtVy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__("udZ4");
var version = __webpack_require__("cNwM");
var parseAlgoliaClientVersion = __webpack_require__("n3ha");

module.exports = function popularIn(index, params, details, options) {
  var algoliaVersion = parseAlgoliaClientVersion(index.as._ua);
  if (algoliaVersion && algoliaVersion[0] >= 3 && algoliaVersion[1] > 20) {
    params = params || {};
    params.additionalUA = 'autocomplete.js ' + version;
  }
  if (!details.source) {
    return _.error("Missing 'source' key");
  }
  var source = _.isFunction(details.source) ? details.source : function (hit) {
    return hit[details.source];
  };

  if (!details.index) {
    return _.error("Missing 'index' key");
  }
  var detailsIndex = details.index;

  options = options || {};

  return sourceFn;

  function sourceFn(query, cb) {
    index.search(query, params, function (error, content) {
      if (error) {
        _.error(error.message);
        return;
      }

      if (content.hits.length > 0) {
        var first = content.hits[0];

        var detailsParams = _.mixin({ hitsPerPage: 0 }, details);
        delete detailsParams.source; // not a query parameter
        delete detailsParams.index; // not a query parameter

        var detailsAlgoliaVersion = parseAlgoliaClientVersion(detailsIndex.as._ua);
        if (detailsAlgoliaVersion && detailsAlgoliaVersion[0] >= 3 && detailsAlgoliaVersion[1] > 20) {
          params.additionalUA = 'autocomplete.js ' + version;
        }

        detailsIndex.search(source(first), detailsParams, function (error2, content2) {
          if (error2) {
            _.error(error2.message);
            return;
          }

          var suggestions = [];

          // add the 'all department' entry before others
          if (options.includeAll) {
            var label = options.allTitle || 'All departments';
            suggestions.push(_.mixin({
              facet: { value: label, count: content2.nbHits }
            }, _.cloneDeep(first)));
          }

          // enrich the first hit iterating over the facets
          _.each(content2.facets, function (values, facet) {
            _.each(values, function (count, value) {
              suggestions.push(_.mixin({
                facet: { facet: facet, value: value, count: count }
              }, _.cloneDeep(first)));
            });
          });

          // append all other hits
          for (var i = 1; i < content.hits.length; ++i) {
            suggestions.push(content.hits[i]);
          }

          cb(suggestions, content);
        });

        return;
      }

      cb([]);
    });
  }
};

/***/ }),

/***/ "C8N4":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("1RxS"),
    hashDelete = __webpack_require__("qBl2"),
    hashGet = __webpack_require__("hClK"),
    hashHas = __webpack_require__("YIaf"),
    hashSet = __webpack_require__("Ag0p");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),

/***/ "CTp0":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("xqjy");

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function (value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;

/***/ }),

/***/ "CXf5":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("4/4o");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

/***/ }),

/***/ "Chbn":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

/***/ }),

/***/ "CiGM":
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__("/NGI"),
    isArray = __webpack_require__("p/0c");

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;

/***/ }),

/***/ "D2K8":
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__("ES04");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;

/***/ }),

/***/ "DrEq":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("ga8q"),
    isObject = __webpack_require__("u9vI");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function () {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;

/***/ }),

/***/ "Dx1J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = createAutocompleteSource;

var _formatHit = __webpack_require__("TZ9N");

var _formatHit2 = _interopRequireDefault(_formatHit);

var _version = __webpack_require__("HfM8");

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function createAutocompleteSource(_ref) {
  var algoliasearch = _ref.algoliasearch,
      clientOptions = _ref.clientOptions,
      apiKey = _ref.apiKey,
      appId = _ref.appId,
      hitsPerPage = _ref.hitsPerPage,
      aroundLatLng = _ref.aroundLatLng,
      aroundRadius = _ref.aroundRadius,
      aroundLatLngViaIP = _ref.aroundLatLngViaIP,
      insideBoundingBox = _ref.insideBoundingBox,
      insidePolygon = _ref.insidePolygon,
      countries = _ref.countries,
      formatInputValue = _ref.formatInputValue,
      _ref$computeQueryPara = _ref.computeQueryParams,
      computeQueryParams = _ref$computeQueryPara === undefined ? function (params) {
    return params;
  } : _ref$computeQueryPara,
      _ref$useDeviceLocatio = _ref.useDeviceLocation,
      useDeviceLocation = _ref$useDeviceLocatio === undefined ? false : _ref$useDeviceLocatio,
      _ref$language = _ref.language,
      language = _ref$language === undefined ? navigator.language.split('-')[0] : _ref$language,
      _ref$onHits = _ref.onHits,
      onHits = _ref$onHits === undefined ? function () {} : _ref$onHits,
      _ref$onError = _ref.onError,
      onError = _ref$onError === undefined ? function (e) {
    throw e;
  } : _ref$onError,
      onRateLimitReached = _ref.onRateLimitReached,
      type = _ref.type;

  var placesClient = algoliasearch.initPlaces(appId, apiKey, clientOptions);
  placesClient.as.addAlgoliaAgent('Algolia Places ' + _version2.default);

  var defaultQueryParams = {
    countries: countries,
    hitsPerPage: hitsPerPage || 5,
    language: language,
    type: type
  };

  if (Array.isArray(defaultQueryParams.countries)) {
    defaultQueryParams.countries = defaultQueryParams.countries.map(function (country) {
      return country.toLowerCase();
    });
  }

  if (typeof defaultQueryParams.language === 'string') {
    defaultQueryParams.language = defaultQueryParams.language.toLowerCase();
  }

  if (aroundLatLng) {
    defaultQueryParams.aroundLatLng = aroundLatLng;
  } else if (aroundLatLngViaIP !== undefined) {
    defaultQueryParams.aroundLatLngViaIP = aroundLatLngViaIP;
  }

  if (aroundRadius) {
    defaultQueryParams.aroundRadius = aroundRadius;
  }

  if (insideBoundingBox) {
    defaultQueryParams.insideBoundingBox = insideBoundingBox;
  }

  if (insidePolygon) {
    defaultQueryParams.insidePolygon = insidePolygon;
  }

  var userCoords = void 0;
  if (useDeviceLocation) {
    navigator.geolocation.watchPosition(function (_ref2) {
      var coords = _ref2.coords;

      userCoords = coords.latitude + ',' + coords.longitude;
    });
  }

  return function (query, cb) {
    var _extends2;

    return placesClient.search(computeQueryParams(_extends({}, defaultQueryParams, (_extends2 = {}, _defineProperty(_extends2, userCoords ? 'aroundLatLng' : undefined, userCoords), _defineProperty(_extends2, 'query', query), _extends2)))).then(function (content) {
      var hits = content.hits.map(function (hit, hitIndex) {
        return (0, _formatHit2.default)({
          formatInputValue: formatInputValue,
          hit: hit,
          hitIndex: hitIndex,
          query: query,
          rawAnswer: content
        });
      });

      onHits({
        hits: hits,
        query: query,
        rawAnswer: content
      });

      return hits;
    }).then(cb).catch(function (e) {
      if (e.statusCode === 429) {
        onRateLimitReached();
        return;
      }

      onError(e);
    });
  };
}

/***/ }),

/***/ "E1jM":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("Tnr5"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c"),
    isIndex = __webpack_require__("A+gr"),
    isLength = __webpack_require__("GmNU"),
    toKey = __webpack_require__("RQ0L");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),

/***/ "E2Rm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AlgoliaSearchHelper = __webpack_require__("IS+V");

var SearchParameters = __webpack_require__("c9TW");
var SearchResults = __webpack_require__("Bixt");

/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(result) {
 *   console.log(result);
 * });
 * helper.toggleRefine('Movies & TV Shows')
 *       .toggleRefine('Free shipping')
 *       .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */
function algoliasearchHelper(client, index, opts) {
  return new AlgoliaSearchHelper(client, index, opts);
}

/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */
algoliasearchHelper.version = __webpack_require__("THd/");

/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */
algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;

/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */
algoliasearchHelper.SearchParameters = SearchParameters;

/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */
algoliasearchHelper.SearchResults = SearchResults;

/**
 * URL tools to generate query string and parse them from/into
 * SearchParameters
 * @member module:algoliasearchHelper.url
 * @type {object} {@link url}
 *
 */
algoliasearchHelper.url = __webpack_require__("dJdD");

module.exports = algoliasearchHelper;

/***/ }),

/***/ "E5qx":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("u9vI");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

/***/ }),

/***/ "EPjK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright(c) node-modules and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */



/**
 * Module dependencies.
 */

var util = __webpack_require__("Bcfi");
var debug;
var node10 = process.version.indexOf('v0.10.') === 0;

if (node10) {
  debug = function debug() {
    if (process.env.NODE_DEBUG && /agentkeepalive/.test(process.env.NODE_DEBUG)) {
      console.log.apply(console.log, arguments);
    }
  };
} else {
  debug = util.debuglog('agentkeepalive');
}

exports.debug = debug;
exports.isNode10 = node10;
exports.inherits = util.inherits;

/***/ }),

/***/ "ES04":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    getPrototype = __webpack_require__("CXf5"),
    isObjectLike = __webpack_require__("OuyB");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "EiMJ":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("wtMJ");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

/***/ }),

/***/ "EvLK":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("uvMU"),
    stubArray = __webpack_require__("7Mmb");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),

/***/ "Ewuv":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("yEjJ");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "F43H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  multiContainers: "Algolia Places: 'container' must point to a single <input> element.\nExample: instantiate the library twice if you want to bind two <inputs>.\n\nSee https://community.algolia.com/places/documentation.html#api-options-container",
  badContainer: "Algolia Places: 'container' must point to an <input> element.\n\nSee https://community.algolia.com/places/documentation.html#api-options-container",
  rateLimitReached: "Algolia Places: Current rate limit reached.\n\nSign up for a free 100,000 queries/month account at\nhttps://www.algolia.com/users/sign_up/places.\n\nOr upgrade your 100,000 queries/month plan by contacting us at\nhttps://community.algolia.com/places/contact.html."
};

/***/ }),

/***/ "F4ko":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatInputValue;
function formatInputValue(_ref) {
  var administrative = _ref.administrative,
      city = _ref.city,
      country = _ref.country,
      name = _ref.name,
      type = _ref.type;

  var out = ('' + name + (type !== 'country' && country !== undefined ? ',' : '') + '\n ' + (city ? city + ',' : '') + '\n ' + (administrative ? administrative + ',' : '') + '\n ' + (country ? country : '')).replace(/\s*\n\s*/g, ' ').trim();
  return out;
}

/***/ }),

/***/ "F888":
/***/ (function(module, exports) {

module.exports = function deprecate(fn, message) {
  var warned = false;

  function deprecated() {
    if (!warned) {
      /* eslint no-console:0 */
      console.warn(message);
      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

/***/ }),

/***/ "FTXF":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),

/***/ "FhVQ":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

/***/ }),

/***/ "FnLS":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("uvMU"),
    baseFilter = __webpack_require__("27jl"),
    baseIteratee = __webpack_require__("lW7l"),
    isArray = __webpack_require__("p/0c");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;

/***/ }),

/***/ "FpCL":
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "FwQQ":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("LN6c"),
    isObjectLike = __webpack_require__("OuyB");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "G3gK":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("ZC1a");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "GRkX":
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;

/***/ }),

/***/ "GdxW":
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;

/***/ }),

/***/ "GgRv":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("3w4y"),
    castSlice = __webpack_require__("5Kr2"),
    charsEndIndex = __webpack_require__("a8Tx"),
    charsStartIndex = __webpack_require__("of1r"),
    stringToArray = __webpack_require__("smkV"),
    toString = __webpack_require__("A8RV");

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;

/***/ }),

/***/ "GmNU":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "GpBR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AlgoliaSearchCore = __webpack_require__("daUR");
var createAlgoliasearch = __webpack_require__("wrxj");

module.exports = createAlgoliasearch(AlgoliaSearchCore, '(lite) ');

/***/ }),

/***/ "Gsi0":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),

/***/ "HHEV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}();

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (c === 0x2D // -
        || c === 0x2E // .
        || c === 0x5F // _
        || c === 0x7E // ~
        || c >= 0x30 && c <= 0x39 // 0-9
        || c >= 0x41 && c <= 0x5A // a-z
        || c >= 0x61 && c <= 0x7A // A-Z
        ) {
                out += string.charAt(i);
                continue;
            }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }

        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

/***/ }),

/***/ "HI10":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("VcL+"),
    baseKeys = __webpack_require__("B/Nj"),
    isArrayLike = __webpack_require__("LN6c");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "HIUO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This is the Node.JS entry point

module.exports = algoliasearch;

var debug = __webpack_require__("8NLT")('algoliasearch:nodejs');
var crypto = __webpack_require__("Wum3");
var zlib = __webpack_require__("epkN");

var inherits = __webpack_require__("+ZRW");
var Promise = global.Promise || __webpack_require__("Zt7E").Promise;
var semver = __webpack_require__("y4rL");
var isNotSupported = semver.satisfies(process.version, '<0.10');
var isNode010 = semver.satisfies(process.version, '=0.10');
var places = __webpack_require__("/f3m");

var AlgoliaSearchServer = __webpack_require__("NtBv");
var errors = __webpack_require__("QKhG");

// does not work on node <= 0.8
if (isNotSupported) {
  throw new errors.AlgoliaSearchError('Node.js version ' + process.version + ' is not supported');
}

if (false) {
  require('debug').enable('algoliasearch*');
}

debug('loaded the Node.js client');

function algoliasearch(applicationID, apiKey, opts) {
  var cloneDeep = __webpack_require__("S7SM");
  var reduce = __webpack_require__("dD6k");

  if (!opts) {
    opts = {};
  }

  var httpAgent = opts.httpAgent;

  opts = cloneDeep(reduce(opts, allButHttpAgent, {}));

  // as an httpAgent is an object with methods etc, we take a reference to
  // it rather than cloning it like other values
  function allButHttpAgent(filteredOpts, val, keyName) {
    if (keyName !== 'httpAgent') {
      filteredOpts[keyName] = val;
    }

    return filteredOpts;
  }

  opts.httpAgent = httpAgent;

  opts.timeouts = opts.timeouts || {
    connect: 2 * 1000,
    read: 5 * 1000,
    write: 30 * 1000
  };

  if (opts.protocol === undefined) {
    opts.protocol = 'https:';
  }

  opts._ua = opts._ua || algoliasearch.ua;
  opts._useCache = false;

  return new AlgoliaSearchNodeJS(applicationID, apiKey, opts);
}

algoliasearch.version = __webpack_require__("6O7z");
algoliasearch.ua = 'Algolia for Node.js ' + algoliasearch.version;
algoliasearch.initPlaces = places(algoliasearch);

function AlgoliaSearchNodeJS(applicationID, apiKey, opts) {
  var getAgent = __webpack_require__("ccDS");

  // call AlgoliaSearchServer constructor
  AlgoliaSearchServer.apply(this, arguments);

  this._Agent = opts.httpAgent || getAgent(opts.protocol);
}

inherits(AlgoliaSearchNodeJS, AlgoliaSearchServer);

AlgoliaSearchNodeJS.prototype._request = function request(rawUrl, opts) {
  var http = __webpack_require__("gHkb");
  var https = __webpack_require__("XgVs");
  var url = __webpack_require__("Vy1O");

  var client = this;

  return new Promise(function doReq(resolve, reject) {
    opts.debug('url: %s, method: %s, timeouts: %j', rawUrl, opts.method, opts.timeouts);

    var body = opts.body;

    var parsedUrl = url.parse(rawUrl);
    var requestOptions = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      method: opts.method,
      path: parsedUrl.path,
      agent: client._Agent
    };

    var timedOut = false;
    var timeoutId;
    var req;

    if (parsedUrl.protocol === 'https:') {
      // we do not rely on any "smart" port computing by either node.js
      // or a custom http agent, because:
      // https://github.com/TooTallNate/node-https-proxy-agent/issues/7#issuecomment-119539690
      if (requestOptions.port === null) {
        requestOptions.port = 443;
      }
      req = https.request(requestOptions);
    } else {
      // same reason to set the port as `https:`
      if (requestOptions.port === null) {
        requestOptions.port = 80;
      }
      req = http.request(requestOptions);
    }

    req.setHeader('connection', 'keep-alive');
    req.setHeader('accept', 'application/json');

    Object.keys(opts.headers).forEach(function setRequestHeader(headerName) {
      req.setHeader(headerName, opts.headers[headerName]);
    });

    req.setHeader('accept-encoding', 'gzip,deflate');

    // we do not use req.setTimeout because it's either an inactivity timeout
    // or a global timeout given the nodejs version
    timeoutId = setTimeout(timeout, opts.timeouts.connect);

    req.once('error', error);
    req.once('response', response);
    if (body) {
      req.setHeader('content-type', 'application/json');
      req.setHeader('content-length', Buffer.byteLength(body, 'utf8'));
      req.write(body);
    } else if (req.method === 'DELETE') {
      // Node.js was setting transfer-encoding: chunked on all DELETE requests
      // which is not good since there's no body to be sent, resulting in nginx
      // sending 400 on socket reuse (waiting for previous socket data)
      // https://github.com/nodejs/node-v0.x-archive/issues/6164
      // https://github.com/nodejs/node-v0.x-archive/commit/aef0960
      req.setHeader('content-length', 0);
    }

    req.end();

    function response(res) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(onCompleteTimeout, opts.timeouts.complete);
      var chunks = [];
      var originalRes = res;

      // save headers and statusCode BEFORE treating the response as zlib, otherwise
      // we lose them
      var headers = res.headers;
      var statusCode = res.statusCode;

      // Algolia answers should be gzip when asked for it,
      // but a proxy might uncompress Algolia response
      // So we handle both compressed and uncompressed
      if (headers['content-encoding'] === 'gzip' || headers['content-encoding'] === 'deflate') {
        res = res.pipe(zlib.createUnzip());
      }

      res.on('data', onData).once('end', onEnd);

      function onData(chunk) {
        chunks.push(chunk);
      }

      function onEnd() {
        clearTimeout(timeoutId);

        var data = Buffer.concat(chunks).toString();
        var out;

        try {
          out = {
            body: JSON.parse(data),
            statusCode: statusCode,
            headers: headers
          };
        } catch (e) {
          out = new errors.UnparsableJSON({
            more: data
          });
        }

        if (out instanceof errors.UnparsableJSON) {
          reject(out);
        } else {
          resolve(out);
        }
      }

      function onCompleteTimeout() {
        res.removeListener('data', onData);
        res.removeListener('end', onEnd);
        originalRes.destroy();
        timeout();
      }
    }

    function error(err) {
      opts.debug('error: %j  - %s', err, rawUrl);

      if (timedOut) {
        opts.debug('request had already timedout');
        return;
      }

      abort();
      clearTimeout(timeoutId);
      reject(new errors.Network(err.message, err));
    }

    function timeout() {
      timedOut = true;
      opts.debug('timeout %s', rawUrl);
      abort();
      reject(new errors.RequestTimeout());
    }

    function abort() {
      if (isNode010 && req.socket && req.socket.socket) {
        req.socket.socket.destroy();
      }

      req.removeListener('response', response);
      req.abort();
    }
  });
};

AlgoliaSearchNodeJS.prototype._promise = {
  reject: function reject(val) {
    return Promise.reject(val);
  },
  resolve: function resolve(val) {
    return Promise.resolve(val);
  },
  delay: function delayPromise(ms) {
    return new Promise(function resolveOnTimeout(resolve /* , reject */) {
      setTimeout(resolve, ms);
    });
  }
};

AlgoliaSearchNodeJS.prototype.destroy = function destroy() {
  if (typeof this._Agent.destroy === 'function') {
    this._Agent.destroy();
  }
};

/*
 * Generate a secured and public API Key from an apiKey and queryParameters
 * optional user token identifying the current user
 *
 * @param apiKey - The api key to encode as secure
 * @param {Object} [queryParameters] - Any search query parameter
 */
AlgoliaSearchNodeJS.prototype.generateSecuredApiKey = function generateSecuredApiKey(privateApiKey, queryParametersOrTagFilters, userToken) {
  var searchParams;

  if (Array.isArray(queryParametersOrTagFilters)) {
    // generateSecuredApiKey(apiKey, ['user_42'], userToken);

    searchParams = {
      tagFilters: queryParametersOrTagFilters
    };

    if (userToken) {
      searchParams.userToken = userToken;
    }

    searchParams = this._getSearchParams(searchParams, '');
  } else if (typeof queryParametersOrTagFilters === 'string') {
    if (queryParametersOrTagFilters.indexOf('=') === -1) {
      // generateSecuredApiKey(apiKey, 'user_42', userToken);
      searchParams = 'tagFilters=' + queryParametersOrTagFilters;
    } else {
      // generateSecuredApiKey(apiKey, 'tagFilters=user_42', userToken);
      searchParams = queryParametersOrTagFilters;
    }

    if (userToken) {
      searchParams += '&userToken=' + encodeURIComponent(userToken);
    }
  } else {
    searchParams = this._getSearchParams(queryParametersOrTagFilters, '');
  }

  var securedKey = crypto.createHmac('sha256', privateApiKey).update(searchParams).digest('hex');

  return new Buffer(securedKey + searchParams).toString('base64');
};

/***/ }),

/***/ "HfM8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '1.4.18';

/***/ }),

/***/ "HylV":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("Tnr5"),
    last = __webpack_require__("8uUO"),
    parent = __webpack_require__("t9LI"),
    toKey = __webpack_require__("RQ0L");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;

/***/ }),

/***/ "ICJj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchstatus":"searchstatus__3MfHO"};

/***/ }),

/***/ "IS+V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchParameters = __webpack_require__("c9TW");
var SearchResults = __webpack_require__("Bixt");
var DerivedHelper = __webpack_require__("5cOW");
var requestBuilder = __webpack_require__("KGpJ");

var util = __webpack_require__("Bcfi");
var events = __webpack_require__("FpCL");

var flatten = __webpack_require__("0FvR");
var forEach = __webpack_require__("cTKO");
var isEmpty = __webpack_require__("BBRi");
var map = __webpack_require__("vGW8");

var url = __webpack_require__("dJdD");
var version = __webpack_require__("THd/");

/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {SearchParameters} state the current parameters with the latest changes applied
 * @property {SearchResults} lastResults the previous results received from Algolia. `null` before
 * the first request
 * @example
 * helper.on('change', function(state, lastResults) {
 *   console.log('The parameters have changed');
 * });
 */

/**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {SearchParameters} state the parameters used for this search
 * @property {SearchResults} lastResults the results from the previous search. `null` if
 * it is the first search.
 * @example
 * helper.on('search', function(state, lastResults) {
 *   console.log('Search sent');
 * });
 */

/**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {SearchParameters} state the parameters used for this search
 * it is the first search.
 * @property {string} facet the facet searched into
 * @property {string} query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(state, facet, query) {
 *   console.log('searchForFacetValues sent');
 * });
 */

/**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {SearchParameters} state the parameters used for this search
 * it is the first search.
 * @example
 * helper.on('searchOnce', function(state) {
 *   console.log('searchOnce sent');
 * });
 */

/**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {SearchResults} results the results received from Algolia
 * @property {SearchParameters} state the parameters used to query Algolia. Those might
 * be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(results, state) {
 *   console.log('Search results received');
 * });
 */

/**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {Error} error the error returned by the Algolia.
 * @example
 * helper.on('error', function(error) {
 *   console.log('Houston we got a problem.');
 * });
 */

/**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */

/**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */
function AlgoliaSearchHelper(client, index, options) {
  if (!client.addAlgoliaAgent) console.log('Please upgrade to the newest version of the JS Client.'); // eslint-disable-line
  else if (!doesClientAgentContainsHelper(client)) client.addAlgoliaAgent('JS Helper ' + version);

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters.make(opts);
  this.lastResults = null;
  this._queryId = 0;
  this._lastQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
}

util.inherits(AlgoliaSearchHelper, events.EventEmitter);

/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.search = function () {
  this._search();
  return this;
};

/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */
AlgoliaSearchHelper.prototype.getQuery = function () {
  var state = this.state;
  return requestBuilder._getHitsSearchParams(state);
};

/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */
AlgoliaSearchHelper.prototype.searchOnce = function (options, cb) {
  var tempState = !options ? this.state : this.state.setQueryParameters(options);
  var queries = requestBuilder._getQueries(tempState.index, tempState);
  var self = this;

  this._currentNbQueries++;

  this.emit('searchOnce', tempState);

  if (cb) {
    return this.client.search(queries, function (err, content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      if (err) cb(err, null, tempState);else cb(err, new SearchResults(tempState, content.results), tempState);
    });
  }

  return this.client.search(queries).then(function (content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    return {
      content: new SearchResults(tempState, content.results),
      state: tempState,
      _originalResponse: content
    };
  }, function (e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};

/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */

/**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */

/**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */
AlgoliaSearchHelper.prototype.searchForFacetValues = function (facet, query, maxFacetHits, userState) {
  var state = this.state.setQueryParameters(userState || {});
  var index = this.client.initIndex(state.index);
  var isDisjunctive = state.isDisjunctiveFacet(facet);
  var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);

  this._currentNbQueries++;
  var self = this;

  this.emit('searchForFacetValues', state, facet, query);
  return index.searchForFacetValues(algoliaQuery).then(function addIsRefined(content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    content.facetHits = forEach(content.facetHits, function (f) {
      f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.value) : state.isFacetRefined(facet, f.value);
    });

    return content;
  }, function (e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};

/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setQuery = function (q) {
  this._change(this.state.setPage(0).setQuery(q));
  return this;
};

/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */
AlgoliaSearchHelper.prototype.clearRefinements = function (name) {
  this._change(this.state.setPage(0).clearRefinements(name));
  return this;
};

/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.clearTags = function () {
  this._change(this.state.setPage(0).clearTags());
  return this;
};

/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function (facet, value) {
  this._change(this.state.setPage(0).addDisjunctiveFacetRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function () {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */
AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function (facet, value) {
  this._change(this.state.setPage(0).addHierarchicalFacetRefinement(facet, value));
  return this;
};

/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addNumericRefinement = function (attribute, operator, value) {
  this._change(this.state.setPage(0).addNumericRefinement(attribute, operator, value));
  return this;
};

/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetRefinement = function (facet, value) {
  this._change(this.state.setPage(0).addFacetRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addRefine = function () {
  return this.addFacetRefinement.apply(this, arguments);
};

/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetExclusion = function (facet, value) {
  this._change(this.state.setPage(0).addExcludeRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */
AlgoliaSearchHelper.prototype.addExclude = function () {
  return this.addFacetExclusion.apply(this, arguments);
};

/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTag = function (tag) {
  this._change(this.state.setPage(0).addTagRefinement(tag));
  return this;
};

/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeNumericRefinement = function (attribute, operator, value) {
  this._change(this.state.setPage(0).removeNumericRefinement(attribute, operator, value));
  return this;
};

/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function (facet, value) {
  this._change(this.state.setPage(0).removeDisjunctiveFacetRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function () {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function (facet) {
  this._change(this.state.setPage(0).removeHierarchicalFacetRefinement(facet));

  return this;
};

/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetRefinement = function (facet, value) {
  this._change(this.state.setPage(0).removeFacetRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeRefine = function () {
  return this.removeFacetRefinement.apply(this, arguments);
};

/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetExclusion = function (facet, value) {
  this._change(this.state.setPage(0).removeExcludeRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */
AlgoliaSearchHelper.prototype.removeExclude = function () {
  return this.removeFacetExclusion.apply(this, arguments);
};

/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTag = function (tag) {
  this._change(this.state.setPage(0).removeTagRefinement(tag));
  return this;
};

/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetExclusion = function (facet, value) {
  this._change(this.state.setPage(0).toggleExcludeFacetRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */
AlgoliaSearchHelper.prototype.toggleExclude = function () {
  return this.toggleFacetExclusion.apply(this, arguments);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefinement = function (facet, value) {
  return this.toggleFacetRefinement(facet, value);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetRefinement = function (facet, value) {
  this._change(this.state.setPage(0).toggleFacetRefinement(facet, value));
  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefine = function () {
  return this.toggleFacetRefinement.apply(this, arguments);
};

/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleTag = function (tag) {
  this._change(this.state.setPage(0).toggleTagRefinement(tag));
  return this;
};

/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */
AlgoliaSearchHelper.prototype.nextPage = function () {
  return this.setPage(this.state.page + 1);
};

/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */
AlgoliaSearchHelper.prototype.previousPage = function () {
  return this.setPage(this.state.page - 1);
};

/**
 * @private
 */
function setCurrentPage(page) {
  if (page < 0) throw new Error('Page requested below 0.');

  this._change(this.state.setPage(page));
  return this;
}

/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;

/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setPage = setCurrentPage;

/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setIndex = function (name) {
  this._change(this.state.setPage(0).setIndex(name));
  return this;
};

/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */
AlgoliaSearchHelper.prototype.setQueryParameter = function (parameter, value) {
  this._change(this.state.setPage(0).setQueryParameter(parameter, value));
  return this;
};

/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setState = function (newState) {
  this._change(SearchParameters.make(newState));
  return this;
};

/**
 * Get the current search state stored in the helper. This object is immutable.
 * @param {string[]} [filters] optional filters to retrieve only a subset of the state
 * @return {SearchParameters|object} if filters is specified a plain object is
 * returned containing only the requested fields, otherwise return the unfiltered
 * state
 * @example
 * // Get the complete state as stored in the helper
 * helper.getState();
 * @example
 * // Get a part of the state with all the refinements on attributes and the query
 * helper.getState(['query', 'attribute:category']);
 */
AlgoliaSearchHelper.prototype.getState = function (filters) {
  if (filters === undefined) return this.state;
  return this.state.filter(filters);
};

/**
 * DEPRECATED Get part of the state as a query string. By default, the output keys will not
 * be prefixed and will only take the applied refinements and the query.
 * @deprecated
 * @param {object} [options] May contain the following parameters :
 *
 * **filters** : possible values are all the keys of the [SearchParameters](#searchparameters), `index` for
 * the index, all the refinements with `attribute:*` or for some specific attributes with
 * `attribute:theAttribute`
 *
 * **prefix** : prefix in front of the keys
 *
 * **moreAttributes** : more values to be added in the query string. Those values
 *    won't be prefixed.
 * @return {string} the query string
 */
AlgoliaSearchHelper.prototype.getStateAsQueryString = function getStateAsQueryString(options) {
  var filters = options && options.filters || ['query', 'attribute:*'];
  var partialState = this.getState(filters);

  return url.getQueryStringFromState(partialState, options);
};

/**
 * DEPRECATED Read a query string and return an object containing the state. Use
 * url module.
 * @deprecated
 * @static
 * @param {string} queryString the query string that will be decoded
 * @param {object} options accepted options :
 *   - prefix : the prefix used for the saved attributes, you have to provide the
 *     same that was used for serialization
 * @return {object} partial search parameters object (same properties than in the
 * SearchParameters but not exhaustive)
 * @see {@link url#getStateFromQueryString}
 */
AlgoliaSearchHelper.getConfigurationFromQueryString = url.getStateFromQueryString;

/**
 * DEPRECATED Retrieve an object of all the properties that are not understandable as helper
 * parameters. Use url module.
 * @deprecated
 * @static
 * @param {string} queryString the query string to read
 * @param {object} options the options
 *   - prefixForParameters : prefix used for the helper configuration keys
 * @return {object} the object containing the parsed configuration that doesn't
 * to the helper
 */
AlgoliaSearchHelper.getForeignConfigurationInQueryString = url.getUnrecognizedParametersInQueryString;

/**
 * DEPRECATED Overrides part of the state with the properties stored in the provided query
 * string.
 * @deprecated
 * @param {string} queryString the query string containing the informations to url the state
 * @param {object} options optional parameters :
 *  - prefix : prefix used for the algolia parameters
 *  - triggerChange : if set to true the state update will trigger a change event
 */
AlgoliaSearchHelper.prototype.setStateFromQueryString = function (queryString, options) {
  var triggerChange = options && options.triggerChange || false;
  var configuration = url.getStateFromQueryString(queryString, options);
  var updatedState = this.state.setQueryParameters(configuration);

  if (triggerChange) this.setState(updatedState);else this.overrideStateWithoutTriggeringChangeEvent(updatedState);
};

/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */
AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function (newState) {
  this.state = new SearchParameters(newState);
  return this;
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */
AlgoliaSearchHelper.prototype.isRefined = function (facet, value) {
  if (this.state.isConjunctiveFacet(facet)) {
    return this.state.isFacetRefined(facet, value);
  } else if (this.state.isDisjunctiveFacet(facet)) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
  }

  throw new Error(facet + ' is not properly defined in this helper configuration' + '(use the facets or disjunctiveFacets keys to configure it)');
};

/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */
AlgoliaSearchHelper.prototype.hasRefinements = function (attribute) {
  if (!isEmpty(this.state.getNumericRefinements(attribute))) {
    return true;
  } else if (this.state.isConjunctiveFacet(attribute)) {
    return this.state.isFacetRefined(attribute);
  } else if (this.state.isDisjunctiveFacet(attribute)) {
    return this.state.isDisjunctiveFacetRefined(attribute);
  } else if (this.state.isHierarchicalFacet(attribute)) {
    return this.state.isHierarchicalFacetRefined(attribute);
  }

  // there's currently no way to know that the user did call `addNumericRefinement` at some point
  // thus we cannot distinguish if there once was a numeric refinement that was cleared
  // so we will return false in every other situations to be consistent
  // while what we should do here is throw because we did not find the attribute in any type
  // of refinement
  return false;
};

/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */
AlgoliaSearchHelper.prototype.isExcluded = function (facet, value) {
  return this.state.isExcludeRefined(facet, value);
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */
AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function (facet, value) {
  return this.state.isDisjunctiveFacetRefined(facet, value);
};

/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */
AlgoliaSearchHelper.prototype.hasTag = function (tag) {
  return this.state.isTagRefined(tag);
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */
AlgoliaSearchHelper.prototype.isTagRefined = function () {
  return this.hasTagRefinements.apply(this, arguments);
};

/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */
AlgoliaSearchHelper.prototype.getIndex = function () {
  return this.state.index;
};

function getCurrentPage() {
  return this.state.page;
}

/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getPage = getCurrentPage;

/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */
AlgoliaSearchHelper.prototype.getTags = function () {
  return this.state.tagRefinements;
};

/**
 * Get a parameter of the search by its name. It is possible that a parameter is directly
 * defined in the index dashboard, but it will be undefined using this method.
 *
 * The complete list of parameters is
 * available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters have their own API)
 * @param {string} parameterName the parameter name
 * @return {any} the parameter value
 * @example
 * var hitsPerPage = helper.getQueryParameter('hitsPerPage');
 */
AlgoliaSearchHelper.prototype.getQueryParameter = function (parameterName) {
  return this.state.getQueryParameter(parameterName);
};

/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */
AlgoliaSearchHelper.prototype.getRefinements = function (facetName) {
  var refinements = [];

  if (this.state.isConjunctiveFacet(facetName)) {
    var conjRefinements = this.state.getConjunctiveRefinements(facetName);

    forEach(conjRefinements, function (r) {
      refinements.push({
        value: r,
        type: 'conjunctive'
      });
    });

    var excludeRefinements = this.state.getExcludeRefinements(facetName);

    forEach(excludeRefinements, function (r) {
      refinements.push({
        value: r,
        type: 'exclude'
      });
    });
  } else if (this.state.isDisjunctiveFacet(facetName)) {
    var disjRefinements = this.state.getDisjunctiveRefinements(facetName);

    forEach(disjRefinements, function (r) {
      refinements.push({
        value: r,
        type: 'disjunctive'
      });
    });
  }

  var numericRefinements = this.state.getNumericRefinements(facetName);

  forEach(numericRefinements, function (value, operator) {
    refinements.push({
      value: value,
      operator: operator,
      type: 'numeric'
    });
  });

  return refinements;
};

/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute of the record
 * @param {string} operator applied
 * @return {number} value of the refinement
 */
AlgoliaSearchHelper.prototype.getNumericRefinement = function (attribute, operator) {
  return this.state.getNumericRefinement(attribute, operator);
};

/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */
AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function (facetName) {
  return this.state.getHierarchicalFacetBreadcrumb(facetName);
};

// /////////// PRIVATE

/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */
AlgoliaSearchHelper.prototype._search = function () {
  var state = this.state;
  var mainQueries = requestBuilder._getQueries(state.index, state);

  var states = [{
    state: state,
    queriesCount: mainQueries.length,
    helper: this
  }];

  this.emit('search', state, this.lastResults);

  var derivedQueries = map(this.derivedHelpers, function (derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);
    var queries = requestBuilder._getQueries(derivedState.index, derivedState);
    states.push({
      state: derivedState,
      queriesCount: queries.length,
      helper: derivedHelper
    });
    derivedHelper.emit('search', derivedState, derivedHelper.lastResults);
    return queries;
  });

  var queries = mainQueries.concat(flatten(derivedQueries));
  var queryId = this._queryId++;

  this._currentNbQueries++;

  this.client.search(queries, this._dispatchAlgoliaResponse.bind(this, states, queryId));
};

/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {Error} err error if any, null otherwise
 * @param {object} content content of the response
 * @return {undefined}
 */
AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function (states, queryId, err, content) {
  // FIXME remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  if (err) {
    this.emit('error', err);

    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
  } else {
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');

    var results = content.results;
    forEach(states, function (s) {
      var state = s.state;
      var queriesCount = s.queriesCount;
      var helper = s.helper;
      var specificResults = results.splice(0, queriesCount);

      var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);
      helper.emit('result', formattedResponse, state);
    });
  }
};

AlgoliaSearchHelper.prototype.containsRefinement = function (query, facetFilters, numericFilters, tagFilters) {
  return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
};

/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */
AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function (facet) {
  return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
};

AlgoliaSearchHelper.prototype._change = function (newState) {
  if (newState !== this.state) {
    this.state = newState;
    this.emit('change', this.state, this.lastResults);
  }
};

/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */
AlgoliaSearchHelper.prototype.clearCache = function () {
  this.client.clearCache();
  return this;
};

/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */
AlgoliaSearchHelper.prototype.setClient = function (newClient) {
  if (this.client === newClient) return this;

  if (newClient.addAlgoliaAgent && !doesClientAgentContainsHelper(newClient)) newClient.addAlgoliaAgent('JS Helper ' + version);
  this.client = newClient;

  return this;
};

/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */
AlgoliaSearchHelper.prototype.getClient = function () {
  return this.client;
};

/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */
AlgoliaSearchHelper.prototype.derive = function (fn) {
  var derivedHelper = new DerivedHelper(this, fn);
  this.derivedHelpers.push(derivedHelper);
  return derivedHelper;
};

/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */
AlgoliaSearchHelper.prototype.detachDerivedHelper = function (derivedHelper) {
  var pos = this.derivedHelpers.indexOf(derivedHelper);
  if (pos === -1) throw new Error('Derived helper already detached');
  this.derivedHelpers.splice(pos, 1);
};

/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */
AlgoliaSearchHelper.prototype.hasPendingRequests = function () {
  return this._currentNbQueries > 0;
};

/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */

/**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */

/*
 * This function tests if the _ua parameter of the client
 * already contains the JS Helper UA
 */
function doesClientAgentContainsHelper(client) {
  // this relies on JS Client internal variable, this might break if implementation changes
  var currentAgent = client._ua;
  return !currentAgent ? false : currentAgent.indexOf('JS Helper') !== -1;
}

module.exports = AlgoliaSearchHelper;

/***/ }),

/***/ "IVes":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),

/***/ "IiHL":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

/***/ }),

/***/ "J1JZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// this will inject Zepto in window, unfortunately no easy commonJS zepto build

var zepto = __webpack_require__("nzdR");

// setup DOM element
var DOM = __webpack_require__("BiYY");
DOM.element = zepto;

// setup utils functions
var _ = __webpack_require__("udZ4");
_.isArray = zepto.isArray;
_.isFunction = zepto.isFunction;
_.isObject = zepto.isPlainObject;
_.bind = zepto.proxy;
_.each = function (collection, cb) {
  // stupid argument order for jQuery.each
  zepto.each(collection, reverseArgs);
  function reverseArgs(index, value) {
    return cb(value, index);
  }
};
_.map = zepto.map;
_.mixin = zepto.extend;
_.Event = zepto.Event;

var typeaheadKey = 'aaAutocomplete';
var Typeahead = __webpack_require__("2ldF");
var EventBus = __webpack_require__("V5xs");

function autocomplete(selector, options, datasets, typeaheadObject) {
  datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 2);

  var inputs = zepto(selector).each(function (i, input) {
    var $input = zepto(input);
    var eventBus = new EventBus({ el: $input });
    var typeahead = typeaheadObject || new Typeahead({
      input: $input,
      eventBus: eventBus,
      dropdownMenuContainer: options.dropdownMenuContainer,
      hint: options.hint === undefined ? true : !!options.hint,
      minLength: options.minLength,
      autoselect: options.autoselect,
      autoselectOnBlur: options.autoselectOnBlur,
      openOnFocus: options.openOnFocus,
      templates: options.templates,
      debug: options.debug,
      cssClasses: options.cssClasses,
      datasets: datasets,
      keyboardShortcuts: options.keyboardShortcuts,
      appendTo: options.appendTo,
      autoWidth: options.autoWidth
    });
    $input.data(typeaheadKey, typeahead);
  });

  // expose all methods in the `autocomplete` attribute
  inputs.autocomplete = {};
  _.each(['open', 'close', 'getVal', 'setVal', 'destroy', 'getWrapper'], function (method) {
    inputs.autocomplete[method] = function () {
      var methodArguments = arguments;
      var result;
      inputs.each(function (j, input) {
        var typeahead = zepto(input).data(typeaheadKey);
        result = typeahead[method].apply(typeahead, methodArguments);
      });
      return result;
    };
  });

  return inputs;
}

autocomplete.sources = Typeahead.sources;
autocomplete.escapeHighlightedString = _.escapeHighlightedString;

var wasAutocompleteSet = 'autocomplete' in window;
var oldAutocomplete = window.autocomplete;
autocomplete.noConflict = function noConflict() {
  if (wasAutocompleteSet) {
    window.autocomplete = oldAutocomplete;
  } else {
    delete window.autocomplete;
  }
  return autocomplete;
};

module.exports = autocomplete;

/***/ }),

/***/ "J2GV":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("BblM"),
    baseClone = __webpack_require__("/s7W"),
    baseUnset = __webpack_require__("HylV"),
    castPath = __webpack_require__("Tnr5"),
    copyObject = __webpack_require__("dtkN"),
    customOmitClone = __webpack_require__("D2K8"),
    flatRest = __webpack_require__("cbLE"),
    getAllKeysIn = __webpack_require__("l/4E");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function (object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function (path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;

/***/ }),

/***/ "JMt3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// default entrypoint is the node module
// this is overriden by the `browser` field in package.json
// https://github.com/substack/node-browserify#browser-field

module.exports = __webpack_require__("HIUO");

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./components/SearchBar/searchbar.css
var searchbar = __webpack_require__("pju1");
var searchbar_default = /*#__PURE__*/__webpack_require__.n(searchbar);

// CONCATENATED MODULE: ./components/SearchBar/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = Object(preact_min["h"])(
  'h1',
  { style: 'display: none;' },
  'Search for Restaurants by Name, Cuisine, Location'
);

var SearchBar_SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  SearchBar.prototype.handleChange = function handleChange(e) {
    this.props.onChange(e.target.value);
  };

  SearchBar.prototype.render = function render() {
    var _props = this.props,
        query = _props.query,
        onChange = _props.onChange;


    return Object(preact_min["h"])(
      'div',
      { id: searchbar_default.a.searchbar },
      _ref,
      Object(preact_min["h"])('input', {
        onInput: this.handleChange,
        placeholder: 'Search for Restaurants by Name, Cuisine, Location',
        type: 'text',
        value: query
      })
    );
  };

  return SearchBar;
}(preact_min["Component"]);

/* harmony default export */ var components_SearchBar = (SearchBar_SearchBar);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var node_modules_classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(node_modules_classnames);

// EXTERNAL MODULE: ./assets/icons/star-full.png
var star_full = __webpack_require__("gY/y");
var star_full_default = /*#__PURE__*/__webpack_require__.n(star_full);

// EXTERNAL MODULE: ./assets/icons/star-empty.png
var star_empty = __webpack_require__("Meo6");
var star_empty_default = /*#__PURE__*/__webpack_require__.n(star_empty);

// CONCATENATED MODULE: ./components/Stars/index.js


function Stars__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Stars__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Stars__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Stars__ref = Object(preact_min["h"])('img', { src: star_full_default.a, alt: 'full star', 'class': 'star' });

var $fullStars = [1, 2, 3, 4, 5].map(function (a) {
  return Stars__ref;
});

var _ref2 = Object(preact_min["h"])('img', { src: star_empty_default.a, alt: 'full star', 'class': 'star' });

var $emptyStars = [1, 2, 3, 4, 5].map(function (_) {
  return _ref2;
});

var Stars_Stars = function (_Component) {
  Stars__inherits(Stars, _Component);

  function Stars() {
    Stars__classCallCheck(this, Stars);

    return Stars__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Stars.prototype.render = function render() {
    var rating = this.props.rating;

    var stars = Math.floor(rating);

    return Object(preact_min["h"])(
      'div',
      { 'class': 'stars' },
      $fullStars.slice(0, stars),
      $emptyStars.slice(stars)
    );
  };

  return Stars;
}(preact_min["Component"]);

/* harmony default export */ var components_Stars = (Stars_Stars);
// CONCATENATED MODULE: ./components/LocationInput/index.js


function LocationInput__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LocationInput__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LocationInput__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LocationInput__ref = Object(preact_min["h"])(
  'div',
  { 'class': 'filter' },
  Object(preact_min["h"])(
    'h3',
    { 'class': 'filter__title' },
    'Location'
  ),
  Object(preact_min["h"])('input', { id: 'places', 'class': 'filter__input', type: 'search' })
);

var LocationInput = function (_Component) {
  LocationInput__inherits(LocationInput, _Component);

  function LocationInput() {
    LocationInput__classCallCheck(this, LocationInput);

    return LocationInput__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LocationInput.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var places = __webpack_require__("Y9nu");

    var autocomplete = places({
      container: document.querySelector('#places')
    });

    autocomplete.on('change', function (e) {
      _this2.props.onLocationChange(e.suggestion.latlng);
    });
  };

  LocationInput.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    // Necessary for PlacesAutocomplete
    // Also, it's simply not necessary to ever re-render this Component
    return false;
  };

  LocationInput.prototype.render = function render() {
    return LocationInput__ref;
  };

  return LocationInput;
}(preact_min["Component"]);

/* harmony default export */ var components_LocationInput = (LocationInput);
// CONCATENATED MODULE: ./components/SearchFilters/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function SearchFilters__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchFilters__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SearchFilters__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SearchFilters_SearchFilters = function (_Component) {
  SearchFilters__inherits(SearchFilters, _Component);

  function SearchFilters() {
    SearchFilters__classCallCheck(this, SearchFilters);

    return SearchFilters__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SearchFilters.prototype.render = function render() {
    var _props = this.props,
        show = _props.show,
        facets = _props.facets,
        filters = _props.filters,
        onFacetClick = _props.onFacetClick,
        onLocationChange = _props.onLocationChange,
        onNumericFilterClick = _props.onNumericFilterClick;


    var classes = { 'sidebar--show': show };

    return Object(preact_min["h"])(
      'div',
      { 'class': classnames_default()('sidebar', classes) },
      Object(preact_min["h"])(components_LocationInput, { onLocationChange: onLocationChange }),
      Object(preact_min["h"])(SearchFilters_SearchFilter, {
        facet: 'cuisine',
        onClick: onFacetClick,
        options: facets.cuisine,
        title: 'Cuisine/Food Type'
      }),
      Object(preact_min["h"])(SearchFilters_RatingsFilter, {
        onClick: onNumericFilterClick,
        selected: filters.rating
      }),
      Object(preact_min["h"])(SearchFilters_SearchFilter, {
        facet: 'paymentOptions',
        onClick: onFacetClick,
        options: facets.payments,
        title: 'Payment Options'
      })
    );
  };

  return SearchFilters;
}(preact_min["Component"]);

var SearchFilters_SearchFilter = function (_Component2) {
  SearchFilters__inherits(SearchFilter, _Component2);

  function SearchFilter() {
    SearchFilters__classCallCheck(this, SearchFilter);

    var _this2 = SearchFilters__possibleConstructorReturn(this, _Component2.call(this));

    _this2.handleFacetClick = _this2.handleFacetClick.bind(_this2);
    return _this2;
  }

  SearchFilter.prototype.handleFacetClick = function handleFacetClick(option) {
    this.props.onClick(this.props.facet, option);
  };

  SearchFilter.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        title = _props2.title,
        options = _props2.options,
        onClick = _props2.onClick;


    var $options = options.map(function (option) {
      return Object(preact_min["h"])(SearchFilters_FilterOption, _extends({}, option, { onClick: _this3.handleFacetClick }));
    });

    return Object(preact_min["h"])(
      'div',
      { 'class': 'filter' },
      Object(preact_min["h"])(
        'h3',
        { 'class': 'filter__title' },
        title
      ),
      Object(preact_min["h"])(
        'ul',
        { 'class': 'filter__options' },
        $options
      )
    );
  };

  return SearchFilter;
}(preact_min["Component"]);

var SearchFilters__ref = Object(preact_min["h"])(
  'h3',
  { 'class': 'filter__title' },
  'Rating'
);

var SearchFilters_RatingsFilter = function (_Component3) {
  SearchFilters__inherits(RatingsFilter, _Component3);

  function RatingsFilter() {
    SearchFilters__classCallCheck(this, RatingsFilter);

    var _this4 = SearchFilters__possibleConstructorReturn(this, _Component3.call(this));

    _this4.handleClick = _this4.handleClick.bind(_this4);
    return _this4;
  }

  RatingsFilter.prototype.handleClick = function handleClick(value) {
    this.props.onClick('rating', value);
  };

  RatingsFilter.prototype.render = function render() {
    var _this5 = this;

    var selected = this.props.selected;


    var $options = [1, 2, 3, 4, 5].map(function (n) {
      return Object(preact_min["h"])(SearchFilters_RatingOption, {
        onClick: _this5.handleClick,
        selected: n === selected,
        value: n
      });
    });

    return Object(preact_min["h"])(
      'div',
      { 'class': 'filter' },
      SearchFilters__ref,
      Object(preact_min["h"])(
        'ul',
        { 'class': 'filter__options' },
        $options
      )
    );
  };

  return RatingsFilter;
}(preact_min["Component"]);

var SearchFilters_FilterOption = function (_Component4) {
  SearchFilters__inherits(FilterOption, _Component4);

  function FilterOption() {
    SearchFilters__classCallCheck(this, FilterOption);

    var _this6 = SearchFilters__possibleConstructorReturn(this, _Component4.call(this));

    _this6.handleClick = _this6.handleClick.bind(_this6);
    return _this6;
  }

  FilterOption.prototype.handleClick = function handleClick() {
    this.props.onClick(this.props.name);
  };

  FilterOption.prototype.render = function render() {
    var _props3 = this.props,
        name = _props3.name,
        count = _props3.count,
        isRefined = _props3.isRefined;


    var classes = {
      'filter__option--selected': isRefined
    };

    var classnames = classnames_default()('filter__option', classes);

    return Object(preact_min["h"])(
      'li',
      { key: name, 'class': classnames, onClick: this.handleClick },
      Object(preact_min["h"])(
        'div',
        null,
        name
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'filter__option-label' },
        count
      )
    );
  };

  return FilterOption;
}(preact_min["Component"]);

var SearchFilters_RatingOption = function (_Component5) {
  SearchFilters__inherits(RatingOption, _Component5);

  function RatingOption() {
    SearchFilters__classCallCheck(this, RatingOption);

    var _this7 = SearchFilters__possibleConstructorReturn(this, _Component5.call(this));

    _this7.handleClick = _this7.handleClick.bind(_this7);
    return _this7;
  }

  RatingOption.prototype.handleClick = function handleClick() {
    this.props.onClick(this.props.value);
  };

  RatingOption.prototype.render = function render() {
    var _props4 = this.props,
        value = _props4.value,
        selected = _props4.selected;


    var classes = {
      'filter__option--selected': selected
    };

    var classnames = classnames_default()('filter__option', classes);

    return Object(preact_min["h"])(
      'li',
      { key: value, 'class': classnames, onClick: this.handleClick },
      Object(preact_min["h"])(components_Stars, { rating: value })
    );
  };

  return RatingOption;
}(preact_min["Component"]);

/* harmony default export */ var components_SearchFilters = (SearchFilters_SearchFilters);
// CONCATENATED MODULE: ./components/RestaurantList/index.js
var RestaurantList__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function RestaurantList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RestaurantList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function RestaurantList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var RestaurantList_RestaurantList = function (_Component) {
  RestaurantList__inherits(RestaurantList, _Component);

  function RestaurantList() {
    RestaurantList__classCallCheck(this, RestaurantList);

    return RestaurantList__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RestaurantList.prototype.render = function render() {
    var restaurants = this.props.restaurants;


    var $restaurants = restaurants.map(function (restaurant) {
      return Object(preact_min["h"])(RestaurantList_Restaurant, RestaurantList__extends({ key: restaurant.id }, restaurant));
    });

    return Object(preact_min["h"])(
      'ul',
      { 'class': 'restaurants' },
      $restaurants
    );
  };

  return RestaurantList;
}(preact_min["Component"]);

var RestaurantList_Restaurant = function (_Component2) {
  RestaurantList__inherits(Restaurant, _Component2);

  function Restaurant() {
    RestaurantList__classCallCheck(this, Restaurant);

    return RestaurantList__possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Restaurant.prototype.render = function render() {
    var _props = this.props,
        cuisine = _props.cuisine,
        image = _props.image,
        neighborhood = _props.neighborhood,
        name = _props.name,
        prices = _props.prices,
        rating = _props.rating,
        reviews = _props.reviews;


    return Object(preact_min["h"])(
      'div',
      { 'class': 'restaurant' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'restaurant__image' },
        Object(preact_min["h"])('img', { src: image })
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'restaurant__body' },
        Object(preact_min["h"])(
          'h2',
          { 'class': 'restaurant__name' },
          name
        ),
        Object(preact_min["h"])(RestaurantList_Rating, { rating: rating, reviews: reviews }),
        Object(preact_min["h"])(
          'div',
          { 'class': 'restaurant__meta' },
          cuisine,
          ' | ',
          neighborhood,
          ' | ',
          prices
        )
      )
    );
  };

  return Restaurant;
}(preact_min["Component"]);

var RestaurantList_Rating = function (_Component3) {
  RestaurantList__inherits(Rating, _Component3);

  function Rating() {
    RestaurantList__classCallCheck(this, Rating);

    return RestaurantList__possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  Rating.prototype.render = function render() {
    var _props2 = this.props,
        rating = _props2.rating,
        reviews = _props2.reviews;


    return Object(preact_min["h"])(
      'div',
      { 'class': 'rating' },
      Object(preact_min["h"])(
        'span',
        { 'class': 'rating__value' },
        rating
      ),
      Object(preact_min["h"])(components_Stars, { rating: rating }),
      Object(preact_min["h"])(
        'span',
        { 'class': 'rating__reviews' },
        '(',
        reviews,
        ' reviews)'
      )
    );
  };

  return Rating;
}(preact_min["Component"]);

/* harmony default export */ var components_RestaurantList = (RestaurantList_RestaurantList);
// EXTERNAL MODULE: ./components/SearchResults/searchresults.css
var searchresults = __webpack_require__("+Sye");
var searchresults_default = /*#__PURE__*/__webpack_require__.n(searchresults);

// CONCATENATED MODULE: ./components/SearchResults/index.js


function SearchResults__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchResults__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SearchResults__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SearchResults__ref = Object(preact_min["h"])('span', { 'class': 'infoline__underline' });

var SearchResults_SearchResults = function (_Component) {
  SearchResults__inherits(SearchResults, _Component);

  function SearchResults() {
    SearchResults__classCallCheck(this, SearchResults);

    return SearchResults__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SearchResults.prototype.render = function render() {
    var _props = this.props,
        hitCount = _props.hitCount,
        onShowMoreClick = _props.onShowMoreClick,
        queryTime = _props.queryTime,
        results = _props.results,
        showMore = _props.showMore;


    var seconds = toSeconds(queryTime);

    return Object(preact_min["h"])(
      'div',
      { id: searchresults_default.a.searchresults },
      Object(preact_min["h"])(
        'h4',
        { 'class': 'infoline' },
        Object(preact_min["h"])(
          'span',
          { 'class': 'infoline__text' },
          Object(preact_min["h"])(
            'strong',
            null,
            hitCount,
            ' results found'
          ),
          ' in ',
          seconds,
          ' seconds'
        ),
        SearchResults__ref
      ),
      Object(preact_min["h"])(components_RestaurantList, { restaurants: results }),
      showMore && Object(preact_min["h"])(
        'button',
        { 'class': 'button', onClick: onShowMoreClick },
        'Show More'
      )
    );
  };

  return SearchResults;
}(preact_min["Component"]);

function toSeconds(millis) {
  return (millis / 1000).toFixed(3);
}

/* harmony default export */ var components_SearchResults = (SearchResults_SearchResults);
// EXTERNAL MODULE: ./components/SearchStatus/searchstatus.css
var searchstatus = __webpack_require__("ICJj");
var searchstatus_default = /*#__PURE__*/__webpack_require__.n(searchstatus);

// EXTERNAL MODULE: ./assets/icons/filter.svg
var filter = __webpack_require__("sU8C");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: ./assets/icons/done.svg
var done = __webpack_require__("nHhQ");
var done_default = /*#__PURE__*/__webpack_require__.n(done);

// CONCATENATED MODULE: ./components/SearchStatus/index.js


function SearchStatus__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchStatus__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SearchStatus__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SearchStatus_SearchStatus = function (_Component) {
  SearchStatus__inherits(SearchStatus, _Component);

  function SearchStatus() {
    SearchStatus__classCallCheck(this, SearchStatus);

    var _this = SearchStatus__possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      showFilters: false
    };

    _this.handleShowFilters = _this.handleShowFilters.bind(_this);
    return _this;
  }

  SearchStatus.prototype.handleShowFilters = function handleShowFilters() {
    this.setState({
      showFilters: !this.state.showFilters
    });
  };

  SearchStatus.prototype.render = function render() {
    var showFilters = this.state.showFilters;
    var _props = this.props,
        facets = _props.facets,
        filters = _props.filters,
        hitCount = _props.hitCount,
        onFacetClick = _props.onFacetClick,
        onLocationChange = _props.onLocationChange,
        onNumericFilterClick = _props.onNumericFilterClick,
        onShowMoreClick = _props.onShowMoreClick,
        queryTime = _props.queryTime,
        results = _props.results,
        showMore = _props.showMore;


    return Object(preact_min["h"])(
      'div',
      { id: searchstatus_default.a.searchstatus },
      Object(preact_min["h"])(components_SearchFilters, {
        show: showFilters,
        facets: facets,
        filters: filters,
        onLocationChange: onLocationChange,
        onFacetClick: onFacetClick,
        onNumericFilterClick: onNumericFilterClick
      }),
      Object(preact_min["h"])(components_SearchResults, {
        hitCount: hitCount,
        onShowMoreClick: onShowMoreClick,
        results: results,
        queryTime: queryTime,
        showMore: showMore
      }),
      Object(preact_min["h"])(SearchStatus_SettingsButton, {
        onClick: this.handleShowFilters,
        toggled: showFilters
      })
    );
  };

  return SearchStatus;
}(preact_min["Component"]);

var SearchStatus__ref = Object(preact_min["h"])('img', { src: filter_default.a, alt: 'Show filters', 'class': 'filter-icon' });

var SearchStatus__ref2 = Object(preact_min["h"])('img', { src: done_default.a, alt: 'Done', 'class': 'done-icon' });

var SearchStatus_SettingsButton = function (_Component2) {
  SearchStatus__inherits(SettingsButton, _Component2);

  function SettingsButton() {
    SearchStatus__classCallCheck(this, SettingsButton);

    return SearchStatus__possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  SettingsButton.prototype.render = function render() {
    var _props2 = this.props,
        onClick = _props2.onClick,
        toggled = _props2.toggled;


    var classes = {
      'fab--filter': !toggled,
      'fab--done': toggled
    };

    var classnames = classnames_default()('fab', classes);

    return Object(preact_min["h"])(
      'button',
      { 'class': classnames, onClick: onClick },
      SearchStatus__ref,
      SearchStatus__ref2
    );
  };

  return SettingsButton;
}(preact_min["Component"]);

/* harmony default export */ var components_SearchStatus = (SearchStatus_SearchStatus);
// EXTERNAL MODULE: ../node_modules/algoliasearch/lite.js
var lite = __webpack_require__("dMJY");
var lite_default = /*#__PURE__*/__webpack_require__.n(lite);

// EXTERNAL MODULE: ../node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__("E2Rm");
var algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper);

// CONCATENATED MODULE: ./client.js



var client = lite_default()('NQGVMY8DAW', 'e0d1c5d72ec6979634b615f436b54b3c');

/* harmony default export */ var client_0 = (client);

var restaurantIndex = algoliasearch_helper_default()(client, 'restaurants', {
  disjunctiveFacets: ['cuisine', 'paymentOptions']
});
// CONCATENATED MODULE: ./components/app.js
var app__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var app_App = function (_Component) {
  app__inherits(App, _Component);

  function App() {
    app__classCallCheck(this, App);

    var _this = app__possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      facets: {
        cuisine: [],
        payments: []
      },
      filters: {
        rating: 0
      },
      hitCount: 0,
      results: [],
      query: '',
      queryTime: 0,
      showMore: true
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleNumericFilterClick = _this.handleNumericFilterClick.bind(_this);
    _this.handleShowMoreClick = _this.handleShowMoreClick.bind(_this);
    _this.handleSearchResult = _this.handleSearchResult.bind(_this);
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    restaurantIndex.on('result', this.handleSearchResult);

    window.navigator.geolocation.getCurrentPosition(function (position) {
      var _position$coords = position.coords,
          latitude = _position$coords.latitude,
          longitude = _position$coords.longitude;


      restaurantIndex.setQueryParameter('aroundLatLng', latitude + ', ' + longitude).search();
    });

    restaurantIndex.setQueryParameter('aroundPrecision', 200).setQueryParameter('aroundRadius', 300000).setQueryParameter('maxValuesPerFacet', 5).setQueryParameter('hitsPerPage', 5).search();
  };

  App.prototype.handleSearchResult = function handleSearchResult(content) {
    var cuisines = content.getFacetValues('cuisine');
    var payments = content.getFacetValues('paymentOptions');

    var results = this.state.results;


    var nextResults = content.page > 0 ? results.concat(content.hits) : content.hits;

    this.setState({
      facets: {
        cuisine: cuisines,
        payments: payments
      },
      hitCount: content.nbHits,
      queryTime: content.processingTimeMS,
      results: nextResults,
      showMore: content.page < content.nbPages - 1
    });
  };

  App.prototype.handleNumericFilterClick = function handleNumericFilterClick(name, value) {
    var refinement = restaurantIndex.getNumericRefinement(name, '>=');

    restaurantIndex.removeNumericRefinement(name);

    var nextValue = 0;
    if (typeof refinement === 'undefined' || refinement[0] !== value) {
      restaurantIndex.addNumericRefinement(name, '>=', value);
      nextValue = value;
    }

    this.setState(function (state) {
      var _extends2;

      return {
        filters: app__extends({}, state.filters, (_extends2 = {}, _extends2[name] = nextValue, _extends2))
      };
    });

    restaurantIndex.search();
  };

  App.prototype.handleFacetClick = function handleFacetClick(facet, option) {
    restaurantIndex.toggleFacetRefinement(facet, option).search();
  };

  App.prototype.handleLocationChange = function handleLocationChange(geoloc) {
    var lat = geoloc.lat,
        lng = geoloc.lng;


    restaurantIndex.setQueryParameter('aroundLatLng', lat + ', ' + lng).search();
  };

  App.prototype.handleInputChange = function handleInputChange(input) {
    this.setState({ query: input });

    restaurantIndex.setQuery(input).search();
  };

  App.prototype.handleShowMoreClick = function handleShowMoreClick() {
    restaurantIndex.nextPage().search();
  };

  App.prototype.render = function render() {
    var _state = this.state,
        facets = _state.facets,
        filters = _state.filters,
        hitCount = _state.hitCount,
        query = _state.query,
        queryTime = _state.queryTime,
        results = _state.results,
        showMore = _state.showMore;


    return Object(preact_min["h"])(
      'div',
      { id: 'app' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'page' },
        Object(preact_min["h"])(components_SearchBar, { query: query, onChange: this.handleInputChange }),
        Object(preact_min["h"])(components_SearchStatus, {
          facets: facets,
          filters: filters,
          hitCount: hitCount,
          onLocationChange: this.handleLocationChange,
          onFacetClick: this.handleFacetClick,
          onNumericFilterClick: this.handleNumericFilterClick,
          onShowMoreClick: this.handleShowMoreClick,
          queryTime: queryTime,
          results: results,
          showMore: showMore
        })
      )
    );
  };

  return App;
}(preact_min["Component"]);

/* harmony default export */ var app = (app_App);
// EXTERNAL MODULE: ./style/sidebar.css
var sidebar = __webpack_require__("dYEM");
var sidebar_default = /*#__PURE__*/__webpack_require__.n(sidebar);

// EXTERNAL MODULE: ./style/restaurants.css
var style_restaurants = __webpack_require__("dRA2");
var restaurants_default = /*#__PURE__*/__webpack_require__.n(style_restaurants);

// EXTERNAL MODULE: ./style/buttons.css
var buttons = __webpack_require__("eRa2");
var buttons_default = /*#__PURE__*/__webpack_require__.n(buttons);

// EXTERNAL MODULE: ./style/infoline.css
var infoline = __webpack_require__("10un");
var infoline_default = /*#__PURE__*/__webpack_require__.n(infoline);

// EXTERNAL MODULE: ./style/stars.css
var style_stars = __webpack_require__("ZYGj");
var stars_default = /*#__PURE__*/__webpack_require__.n(style_stars);

// CONCATENATED MODULE: ./index.js











/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "Jpv1":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "K7uZ":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("dtkN"),
    getSymbolsIn = __webpack_require__("6q/8");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ "K9uV":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),

/***/ "KGpJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__("cTKO");
var map = __webpack_require__("vGW8");
var reduce = __webpack_require__("bxLG");
var merge = __webpack_require__("yubd");
var isArray = __webpack_require__("p/0c");

var requestBuilder = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */
  _getQueries: function getQueries(index, state) {
    var queries = [];

    // One query for the hits
    queries.push({
      indexName: index,
      params: requestBuilder._getHitsSearchParams(state)
    });

    // One for each disjunctive facets
    forEach(state.getRefinedDisjunctiveFacets(), function (refinedFacet) {
      queries.push({
        indexName: index,
        params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
      });
    });

    // maybe more to get the root level of hierarchical facets when activated
    forEach(state.getRefinedHierarchicalFacets(), function (refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);

      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
      // if we are deeper than level 0 (starting from `beer > IPA`)
      // we want to get the root values
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
        queries.push({
          indexName: index,
          params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet, true)
        });
      }
    });

    return queries;
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */
  _getHitsSearchParams: function _getHitsSearchParams(state) {
    var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));

    var facetFilters = requestBuilder._getFacetFilters(state);
    var numericFilters = requestBuilder._getNumericFilters(state);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      facets: facets,
      tagFilters: tagFilters
    };

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    return merge(state.getQueryParams(), additionalParams);
  },

  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */
  _getDisjunctiveFacetSearchParams: function _getDisjunctiveFacetSearchParams(state, facet, hierarchicalRootLevel) {
    var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
    var numericFilters = requestBuilder._getNumericFilters(state, facet);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      hitsPerPage: 1,
      page: 0,
      attributesToRetrieve: [],
      attributesToHighlight: [],
      attributesToSnippet: [],
      tagFilters: tagFilters,
      analytics: false
    };

    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

    if (hierarchicalFacet) {
      additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
    } else {
      additionalParams.facets = facet;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    return merge(state.getQueryParams(), additionalParams);
  },

  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function _getNumericFilters(state, facetName) {
    if (state.numericFilters) {
      return state.numericFilters;
    }

    var numericFilters = [];

    forEach(state.numericRefinements, function (operators, attribute) {
      forEach(operators, function (values, operator) {
        if (facetName !== attribute) {
          forEach(values, function (value) {
            if (isArray(value)) {
              var vs = map(value, function (v) {
                return attribute + operator + v;
              });
              numericFilters.push(vs);
            } else {
              numericFilters.push(attribute + operator + value);
            }
          });
        }
      });
    });

    return numericFilters;
  },

  /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */
  _getTagFilters: function _getTagFilters(state) {
    if (state.tagFilters) {
      return state.tagFilters;
    }

    return state.tagRefinements.join(',');
  },

  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */
  _getFacetFilters: function _getFacetFilters(state, facet, hierarchicalRootLevel) {
    var facetFilters = [];

    forEach(state.facetsRefinements, function (facetValues, facetName) {
      forEach(facetValues, function (facetValue) {
        facetFilters.push(facetName + ':' + facetValue);
      });
    });

    forEach(state.facetsExcludes, function (facetValues, facetName) {
      forEach(facetValues, function (facetValue) {
        facetFilters.push(facetName + ':-' + facetValue);
      });
    });

    forEach(state.disjunctiveFacetsRefinements, function (facetValues, facetName) {
      if (facetName === facet || !facetValues || facetValues.length === 0) return;
      var orFilters = [];

      forEach(facetValues, function (facetValue) {
        orFilters.push(facetName + ':' + facetValue);
      });

      facetFilters.push(orFilters);
    });

    forEach(state.hierarchicalFacetsRefinements, function (facetValues, facetName) {
      var facetValue = facetValues[0];

      if (facetValue === undefined) {
        return;
      }

      var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeToRefine;
      var attributesIndex;

      // we ask for parent facet values only when the `facet` is the current hierarchical facet
      if (facet === facetName) {
        // if we are at the root level already, no need to ask for facet values, we get them from
        // the hits query
        if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) {
          return;
        }

        if (!rootPath) {
          attributesIndex = facetValue.split(separator).length - 2;
          facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
        } else {
          attributesIndex = rootPath.split(separator).length - 1;
          facetValue = rootPath;
        }

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      } else {
        attributesIndex = facetValue.split(separator).length - 1;

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      }

      if (attributeToRefine) {
        facetFilters.push([attributeToRefine + ':' + facetValue]);
      }
    });

    return facetFilters;
  },

  _getHitsHierarchicalFacetsAttributes: function _getHitsHierarchicalFacetsAttributes(state) {
    var out = [];

    return reduce(state.hierarchicalFacets,
    // ask for as much levels as there's hierarchical refinements
    function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
      var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];

      // if no refinement, ask for root level
      if (!hierarchicalRefinement) {
        allAttributes.push(hierarchicalFacet.attributes[0]);
        return allAttributes;
      }

      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      var level = hierarchicalRefinement.split(separator).length;
      var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);

      return allAttributes.concat(newAttributes);
    }, out);
  },

  _getDisjunctiveHierarchicalFacetAttribute: function _getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, rootLevel) {
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
    if (rootLevel === true) {
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeIndex = 0;

      if (rootPath) {
        attributeIndex = rootPath.split(separator).length;
      }
      return [hierarchicalFacet.attributes[attributeIndex]];
    }

    var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
    // if refinement is 'beers > IPA > Flying dog',
    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

    var parentLevel = hierarchicalRefinement.split(separator).length - 1;
    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
  },

  getSearchForFacetQuery: function getSearchForFacetQuery(facetName, query, maxFacetHits, state) {
    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
    var searchForFacetSearchParameters = {
      facetQuery: query,
      facetName: facetName
    };
    if (typeof maxFacetHits === 'number') {
      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
    }
    var queries = merge(requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters);
    return queries;
  }
};

module.exports = requestBuilder;

/***/ }),

/***/ "KIzM":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("dtkN"),
    createAssigner = __webpack_require__("gmQJ"),
    keysIn = __webpack_require__("+UAC");

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KRxT":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("UJWv"),
    shortOut = __webpack_require__("2NNl");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

/***/ }),

/***/ "LIpy":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "LKoo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var map = __webpack_require__("vGW8");
var isArray = __webpack_require__("p/0c");
var isNumber = __webpack_require__("Zva/");
var isString = __webpack_require__("5CkJ");
function valToNumber(v) {
  if (isNumber(v)) {
    return v;
  } else if (isString(v)) {
    return parseFloat(v);
  } else if (isArray(v)) {
    return map(v, valToNumber);
  }

  throw new Error('The value should be a number, a parseable string or an array of those.');
}

module.exports = valToNumber;

/***/ }),

/***/ "LN6c":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("dRuq"),
    isLength = __webpack_require__("GmNU");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "Lgs6":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("yeiR"),
    baseSet = __webpack_require__("mV+j"),
    castPath = __webpack_require__("Tnr5");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
        }
    }
    return result;
}

module.exports = basePickBy;

/***/ }),

/***/ "MIhM":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("j3D9");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "MNt9":
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__("Mkgn"),
    isIndex = __webpack_require__("A+gr");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;

/***/ }),

/***/ "Meo6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "619cd74c53fa8af97e9ee414400d9dbc.png";

/***/ }),

/***/ "MhNG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.test = function () {
  // Don't get fooled by e.g. browserify environments.
  return typeof process !== 'undefined' && !process.browser;
};

exports.install = function (func) {
  return function () {
    process.nextTick(func);
  };
};

/***/ }),

/***/ "Mkgn":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "MuiK":
/***/ (function(module, exports, __webpack_require__) {

var foreach = __webpack_require__("Sh+V");

module.exports = function merge(destination /* , sources */) {
  var sources = Array.prototype.slice.call(arguments);

  foreach(sources, function (source) {
    for (var keyName in source) {
      if (source.hasOwnProperty(keyName)) {
        if (typeof destination[keyName] === 'object' && typeof source[keyName] === 'object') {
          destination[keyName] = merge({}, destination[keyName], source[keyName]);
        } else if (source[keyName] !== undefined) {
          destination[keyName] = source[keyName];
        }
      }
    }
  });

  return destination;
};

/***/ }),

/***/ "N0V4":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("E5qx"),
    keys = __webpack_require__("HI10");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}

module.exports = getMatchData;

/***/ }),

/***/ "N5Tq":
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__("pmgD"),
    flatRest = __webpack_require__("cbLE");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function (object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;

/***/ }),

/***/ "NN+K":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;

/***/ }),

/***/ "Nk5W":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "NtBv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Some methods only accessible server side

module.exports = AlgoliaSearchServer;

var inherits = __webpack_require__("+ZRW");

var AlgoliaSearch = __webpack_require__("4izX");

function AlgoliaSearchServer(applicationID, apiKey, opts) {
  // Default protocol is https: on the server, to avoid leaking admin keys
  if (opts.protocol === undefined) {
    opts.protocol = 'https:';
  }

  AlgoliaSearch.apply(this, arguments);
}

inherits(AlgoliaSearchServer, AlgoliaSearch);

/*
 * Allow to use IP rate limit when you have a proxy between end-user and Algolia.
 * This option will set the X-Forwarded-For HTTP header with the client IP and the X-Forwarded-API-Key with the API Key having rate limits.
 * @param adminAPIKey the admin API Key you can find in your dashboard
 * @param endUserIP the end user IP (you can use both IPV4 or IPV6 syntax)
 * @param rateLimitAPIKey the API key on which you have a rate limit
 */
AlgoliaSearchServer.prototype.enableRateLimitForward = function (adminAPIKey, endUserIP, rateLimitAPIKey) {
  this._forward = {
    adminAPIKey: adminAPIKey,
    endUserIP: endUserIP,
    rateLimitAPIKey: rateLimitAPIKey
  };
};

/*
 * Disable IP rate limit enabled with enableRateLimitForward() function
 */
AlgoliaSearchServer.prototype.disableRateLimitForward = function () {
  this._forward = null;
};

/*
 * Specify the securedAPIKey to use with associated information
 */
AlgoliaSearchServer.prototype.useSecuredAPIKey = function (securedAPIKey, securityTags, userToken) {
  this._secure = {
    apiKey: securedAPIKey,
    securityTags: securityTags,
    userToken: userToken
  };
};

/*
 * If a secured API was used, disable it
 */
AlgoliaSearchServer.prototype.disableSecuredAPIKey = function () {
  this._secure = null;
};

AlgoliaSearchServer.prototype._computeRequestHeaders = function (additionalUA) {
  var headers = AlgoliaSearchServer.super_.prototype._computeRequestHeaders.call(this, additionalUA);

  if (this._forward) {
    headers['x-algolia-api-key'] = this._forward.adminAPIKey;
    headers['x-forwarded-for'] = this._forward.endUserIP;
    headers['x-forwarded-api-key'] = this._forward.rateLimitAPIKey;
  }

  if (this._secure) {
    headers['x-algolia-api-key'] = this._secure.apiKey;
    headers['x-algolia-tagfilters'] = this._secure.securityTags;
    headers['x-algolia-usertoken'] = this._secure.userToken;
  }

  return headers;
};

/***/ }),

/***/ "OFf3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("SZfA");
var parse = __webpack_require__("r1+p");
var formats = __webpack_require__("mdM2");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

/***/ }),

/***/ "OYyI":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("LIpy");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }
  return objValue;
}

module.exports = customDefaultsAssignIn;

/***/ }),

/***/ "OuyB":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "PBPf":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("j3D9");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "PD2+":
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;

/***/ }),

/***/ "PYZb":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "PYh1":
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;

/***/ }),

/***/ "PnXa":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "QEUV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// copy from https://github.com/nodejs/node/blob/v4.x/lib/_http_agent.js



var net = __webpack_require__("QPpz");
var util = __webpack_require__("Bcfi");
var EventEmitter = __webpack_require__("FpCL").EventEmitter;
var debug = __webpack_require__("EPjK").debug;

// New Agent code.

// The largest departure from the previous implementation is that
// an Agent instance holds connections for a variable number of host:ports.
// Surprisingly, this is still API compatible as far as third parties are
// concerned. The only code that really notices the difference is the
// request object.

// Another departure is that all code related to HTTP parsing is in
// ClientRequest.onSocket(). The Agent is now *strictly*
// concerned with managing a connection pool.

function Agent(options) {
  if (!(this instanceof Agent)) return new Agent(options);

  EventEmitter.call(this);

  var self = this;

  self.defaultPort = 80;
  self.protocol = 'http:';

  self.options = util._extend({}, options);

  // don't confuse net and make it think that we're connecting to a pipe
  self.options.path = null;
  self.requests = {};
  self.sockets = {};
  self.freeSockets = {};
  self.keepAliveMsecs = self.options.keepAliveMsecs || 1000;
  self.keepAlive = self.options.keepAlive || false;
  // free keep-alive socket timeout. By default free socket do not have a timeout.
  // keepAliveTimeout should be rename to `freeSocketKeepAliveTimeout`
  self.keepAliveTimeout = self.options.keepAliveTimeout || 0;
  // working socket timeout. By default working socket do not have a timeout.
  self.timeout = self.options.timeout || 0;
  self.maxSockets = self.options.maxSockets || Agent.defaultMaxSockets;
  self.maxFreeSockets = self.options.maxFreeSockets || 256;

  self.on('free', function (socket, options) {
    var name = self.getName(options);
    debug('agent.on(free)', name);

    if (!socket.destroyed && self.requests[name] && self.requests[name].length) {
      self.requests[name].shift().onSocket(socket);
      if (self.requests[name].length === 0) {
        // don't leak
        delete self.requests[name];
      }
      debug('continue handle next request');
    } else {
      // If there are no pending requests, then put it in
      // the freeSockets pool, but only if we're allowed to do so.
      var req = socket._httpMessage;
      if (req && req.shouldKeepAlive && !socket.destroyed && self.options.keepAlive) {
        var freeSockets = self.freeSockets[name];
        var freeLen = freeSockets ? freeSockets.length : 0;
        var count = freeLen;
        if (self.sockets[name]) count += self.sockets[name].length;
        // console.log(count, freeLen, self.maxSockets, self.maxFreeSockets)
        if (count > self.maxSockets || freeLen >= self.maxFreeSockets) {
          // console.log('hit max sockets', count, freeLen, self.maxSockets, self.maxFreeSockets);
          self.removeSocket(socket, options);
          socket.destroy();
        } else {
          freeSockets = freeSockets || [];
          self.freeSockets[name] = freeSockets;
          socket.setKeepAlive(true, self.keepAliveMsecs);
          socket.unref && socket.unref();
          socket._httpMessage = null;
          self.removeSocket(socket, options);
          freeSockets.push(socket);

          // Add a default error handler to avoid Unhandled 'error' event throw on idle socket
          // https://github.com/node-modules/agentkeepalive/issues/25
          // https://github.com/nodejs/node/pull/4482 (fixed in >= 4.4.0 and >= 5.4.0)
          if (socket.listeners('error').length === 0) {
            socket.once('error', freeSocketErrorListener);
          }

          // set free keepalive timer
          socket.setTimeout(self.keepAliveTimeout);
        }
      } else {
        self.removeSocket(socket, options);
        socket.destroy();
      }
    }
  });
}

util.inherits(Agent, EventEmitter);
exports.Agent = Agent;

function freeSocketErrorListener(err) {
  var socket = this;
  debug('SOCKET ERROR on FREE socket:', err.message, err.stack);
  socket.destroy();
  socket.emit('agentRemove');
}

Agent.defaultMaxSockets = Infinity;

Agent.prototype.createConnection = net.createConnection;

// Get the key for a given set of request options
Agent.prototype.getName = function (options) {
  var name = '';

  if (options.host) name += options.host;else name += 'localhost';

  name += ':';
  if (options.port) name += options.port;
  name += ':';
  if (options.localAddress) name += options.localAddress;
  name += ':';
  return name;
};

Agent.prototype.addRequest = function (req, options) {
  // Legacy API: addRequest(req, host, port, path)
  if (typeof options === 'string') {
    options = {
      host: options,
      port: arguments[2],
      path: arguments[3]
    };
  }

  options = util._extend({}, options);
  options = util._extend(options, this.options);

  var name = this.getName(options);
  if (!this.sockets[name]) {
    this.sockets[name] = [];
  }

  var freeLen = this.freeSockets[name] ? this.freeSockets[name].length : 0;
  var sockLen = freeLen + this.sockets[name].length;

  if (freeLen) {
    // we have a free socket, so use that.
    var socket = this.freeSockets[name].shift();
    debug('have free socket');

    socket.removeListener('error', freeSocketErrorListener);

    // restart the default timer
    socket.setTimeout(this.timeout);

    // don't leak
    if (!this.freeSockets[name].length) delete this.freeSockets[name];

    socket.ref && socket.ref();
    req.onSocket(socket);
    this.sockets[name].push(socket);
  } else if (sockLen < this.maxSockets) {
    debug('call onSocket', sockLen, freeLen);
    // If we are under maxSockets create a new one.
    req.onSocket(this.createSocket(req, options));
  } else {
    debug('wait for socket');
    // We are over limit so we'll add it to the queue.
    if (!this.requests[name]) {
      this.requests[name] = [];
    }
    this.requests[name].push(req);
  }
};

Agent.prototype.createSocket = function (req, options) {
  var self = this;
  options = util._extend({}, options);
  options = util._extend(options, self.options);

  if (!options.servername) {
    options.servername = options.host;
    if (req) {
      var hostHeader = req.getHeader('host');
      if (hostHeader) {
        options.servername = hostHeader.replace(/:.*$/, '');
      }
    }
  }

  var name = self.getName(options);

  debug('createConnection', name, options);
  options.encoding = null;
  var s = self.createConnection(options);
  if (!self.sockets[name]) {
    self.sockets[name] = [];
  }
  this.sockets[name].push(s);
  debug('sockets', name, this.sockets[name].length);

  function onFree() {
    self.emit('free', s, options);
  }
  s.on('free', onFree);

  function onClose(err) {
    debug('CLIENT socket onClose');
    // fix: socket.destroyed always be undefined on 0.10.x
    if (typeof s.destroyed !== 'boolean') {
      s.destroyed = true;
    }

    // This is the only place where sockets get removed from the Agent.
    // If you want to remove a socket from the pool, just close it.
    // All socket errors end in a close event anyway.
    self.removeSocket(s, options);
    self.emit('close');
  }
  s.on('close', onClose);

  function onTimeout() {
    debug('CLIENT socket onTimeout');
    s.destroy();
    // Remove it from freeSockets immediately to prevent new requests from being sent through this socket.
    self.removeSocket(s, options);
    self.emit('timeout');
  }
  s.on('timeout', onTimeout);
  // set the default timer
  s.setTimeout(self.timeout);

  function onRemove() {
    // We need this function for cases like HTTP 'upgrade'
    // (defined by WebSockets) where we need to remove a socket from the
    // pool because it'll be locked up indefinitely
    debug('CLIENT socket onRemove');
    self.removeSocket(s, options);
    s.removeListener('close', onClose);
    s.removeListener('free', onFree);
    s.removeListener('agentRemove', onRemove);
    // remove timer
    s.setTimeout(0, onTimeout);
  }
  s.on('agentRemove', onRemove);
  return s;
};

Agent.prototype.removeSocket = function (s, options) {
  var freeLen, sockLen;
  var name = this.getName(options);
  debug('removeSocket', name, 'destroyed:', s.destroyed);
  var sets = [this.sockets];

  // If the socket was destroyed, remove it from the free buffers too.
  if (s.destroyed) sets.push(this.freeSockets);

  for (var sk = 0; sk < sets.length; sk++) {
    var sockets = sets[sk];
    if (sockets[name]) {
      var index = sockets[name].indexOf(s);
      if (index !== -1) {
        sockets[name].splice(index, 1);
        // Don't leak
        if (sockets[name].length === 0) delete sockets[name];
      }
    }
  }

  freeLen = this.freeSockets[name] ? this.freeSockets[name].length : 0;
  sockLen = freeLen + this.sockets[name] ? this.sockets[name].length : 0;

  if (this.requests[name] && this.requests[name].length && sockLen < this.maxSockets) {
    debug('removeSocket, have a request, make a socket');
    var req = this.requests[name][0];
    // If we have pending requests and a socket gets closed make a new one
    this.createSocket(req, options).emit('free');
  }
};

Agent.prototype.destroy = function () {
  var sets = [this.freeSockets, this.sockets];
  for (var s = 0; s < sets.length; s++) {
    var set = sets[s];
    var keys = Object.keys(set);
    for (var v = 0; v < keys.length; v++) {
      var setName = set[keys[v]];
      for (var n = 0; n < setName.length; n++) {
        setName[n].destroy();
      }
    }
  }
};

exports.globalAgent = new Agent();

/***/ }),

/***/ "QKhG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file hosts our error definitions
// We use custom error "types" so that we can act on them when we need it
// e.g.: if error instanceof errors.UnparsableJSON then..

var inherits = __webpack_require__("+ZRW");

function AlgoliaSearchError(message, extraProperties) {
  var forEach = __webpack_require__("Sh+V");

  var error = this;

  // try to get a stacktrace
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, this.constructor);
  } else {
    error.stack = new Error().stack || 'Cannot get a stacktrace, browser is too old';
  }

  this.name = 'AlgoliaSearchError';
  this.message = message || 'Unknown error';

  if (extraProperties) {
    forEach(extraProperties, function addToErrorObject(value, key) {
      error[key] = value;
    });
  }
}

inherits(AlgoliaSearchError, Error);

function createCustomError(name, message) {
  function AlgoliaSearchCustomError() {
    var args = Array.prototype.slice.call(arguments, 0);

    // custom message not set, use default
    if (typeof args[0] !== 'string') {
      args.unshift(message);
    }

    AlgoliaSearchError.apply(this, args);
    this.name = 'AlgoliaSearch' + name + 'Error';
  }

  inherits(AlgoliaSearchCustomError, AlgoliaSearchError);

  return AlgoliaSearchCustomError;
}

// late exports to let various fn defs and inherits take place
module.exports = {
  AlgoliaSearchError: AlgoliaSearchError,
  UnparsableJSON: createCustomError('UnparsableJSON', 'Could not parse the incoming response as JSON, see err.more for details'),
  RequestTimeout: createCustomError('RequestTimeout', 'Request timedout before getting a response'),
  Network: createCustomError('Network', 'Network issue, see err.more for details'),
  JSONPScriptFail: createCustomError('JSONPScriptFail', '<script> was loaded but did not call our provided callback'),
  JSONPScriptError: createCustomError('JSONPScriptError', '<script> unable to load due to an `error` event on it'),
  Unknown: createCustomError('Unknown', 'Unknown error occured')
};

/***/ }),

/***/ "QPpz":
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "QStr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = inlineHeaders;

var encode = __webpack_require__("bvhO");

function inlineHeaders(url, headers) {
  if (/\?/.test(url)) {
    url += '&';
  } else {
    url += '?';
  }

  return url + encode(headers);
}

/***/ }),

/***/ "R62e":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("LIpy"),
    isArrayLike = __webpack_require__("LN6c"),
    isIndex = __webpack_require__("A+gr"),
    isObject = __webpack_require__("u9vI");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "R6wa":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("iKxp");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ "R9d0":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("BblM");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function (key) {
    return object[key];
  });
}

module.exports = baseValues;

/***/ }),

/***/ "RQ0L":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("bgO7");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "Ro2m":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("IiHL"),
    baseIsNaN = __webpack_require__("hgJw"),
    strictIndexOf = __webpack_require__("SftN");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

/***/ }),

/***/ "S7SM":
/***/ (function(module, exports) {

module.exports = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

/***/ }),

/***/ "SC1V":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("xqjy"),
    castFunction = __webpack_require__("tAcL");

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;

/***/ }),

/***/ "SZfA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("HHEV");
var formats = __webpack_require__("mdM2");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) {
        // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) {
        // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
        } else {
            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};

/***/ }),

/***/ "SfCF":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ }),

/***/ "SftN":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

/***/ }),

/***/ "Sh+V":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};

/***/ }),

/***/ "Sn5d":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("lW7l"),
    isArrayLike = __webpack_require__("LN6c"),
    keys = __webpack_require__("HI10");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function (collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function predicate(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;

/***/ }),

/***/ "StMk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {

    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');
    scriptEl.onreadystatechange = function () {
      handle();

      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };
    global.document.documentElement.appendChild(scriptEl);

    return handle;
  };
};

/***/ }),

/***/ "Sysa":
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;

/***/ }),

/***/ "T3Ap":
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__("mT5u"),
    arrayReduce = __webpack_require__("FhVQ"),
    mapToArray = __webpack_require__("7BjG");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

module.exports = cloneMap;

/***/ }),

/***/ "THd/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '2.23.2';

/***/ }),

/***/ "TL84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = createAutocompleteDataset;

var _createAutocompleteSource = __webpack_require__("Dx1J");

var _createAutocompleteSource2 = _interopRequireDefault(_createAutocompleteSource);

var _defaultTemplates = __webpack_require__("4w6Y");

var _defaultTemplates2 = _interopRequireDefault(_defaultTemplates);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createAutocompleteDataset(options) {
  var templates = _extends({}, _defaultTemplates2.default, options.templates);

  var source = (0, _createAutocompleteSource2.default)(_extends({}, options, {
    formatInputValue: templates.value,
    templates: undefined
  }));

  return {
    source: source,
    templates: templates,
    displayKey: 'value',
    name: 'places'
  };
}

/***/ }),

/***/ "TZ9N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = formatHit;

var _findCountryCode = __webpack_require__("yzKG");

var _findCountryCode2 = _interopRequireDefault(_findCountryCode);

var _findType = __webpack_require__("V37i");

var _findType2 = _interopRequireDefault(_findType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getBestHighlightedForm(highlightedValues) {
  var defaultValue = highlightedValues[0].value;
  // collect all other matches
  var bestAttributes = [];
  for (var i = 1; i < highlightedValues.length; ++i) {
    if (highlightedValues[i].matchLevel !== 'none') {
      bestAttributes.push({
        index: i,
        words: highlightedValues[i].matchedWords
      });
    }
  }
  // no matches in this attribute, retrieve first value
  if (bestAttributes.length === 0) {
    return defaultValue;
  }
  // sort the matches by `desc(words), asc(index)`
  bestAttributes.sort(function (a, b) {
    if (a.words > b.words) {
      return -1;
    } else if (a.words < b.words) {
      return 1;
    }
    return a.index - b.index;
  });
  // and append the best match to the first value
  return bestAttributes[0].index === 0 ? defaultValue + ' (' + highlightedValues[bestAttributes[1].index].value + ')' : highlightedValues[bestAttributes[0].index].value + ' (' + defaultValue + ')';
}

function formatHit(_ref) {
  var formatInputValue = _ref.formatInputValue,
      hit = _ref.hit,
      hitIndex = _ref.hitIndex,
      query = _ref.query,
      rawAnswer = _ref.rawAnswer;

  try {
    var name = hit.locale_names[0];
    var country = hit.country;
    var administrative = hit.administrative && hit.administrative[0] !== name ? hit.administrative[0] : undefined;
    var city = hit.city && hit.city[0] !== name ? hit.city[0] : undefined;

    var highlight = {
      name: getBestHighlightedForm(hit._highlightResult.locale_names),
      city: city ? getBestHighlightedForm(hit._highlightResult.city) : undefined,
      administrative: administrative ? getBestHighlightedForm(hit._highlightResult.administrative) : undefined,
      country: country ? hit._highlightResult.country.value : undefined
    };

    var suggestion = {
      name: name,
      administrative: administrative,
      city: city,
      country: country,
      countryCode: (0, _findCountryCode2.default)(hit._tags),
      type: (0, _findType2.default)(hit._tags),
      latlng: {
        lat: hit._geoloc.lat,
        lng: hit._geoloc.lng
      },
      postcode: hit.postcode && hit.postcode[0]
    };

    // this is the value to put inside the <input value=
    var value = formatInputValue(suggestion);

    return _extends({}, suggestion, {
      highlight: highlight,
      hit: hit,
      hitIndex: hitIndex,
      query: query,
      rawAnswer: rawAnswer,
      value: value
    });
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Could not parse object', hit);
    console.error(e);
    /* eslint-enable no-console */
    return {
      value: 'Could not parse object'
    };
  }
}

/***/ }),

/***/ "Tnr5":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("p/0c"),
    isKey = __webpack_require__("2ibm"),
    stringToPath = __webpack_require__("jXGU"),
    toString = __webpack_require__("A8RV");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "TpjK":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "UJWv":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("WMV8"),
    defineProperty = __webpack_require__("kAdy"),
    identity = __webpack_require__("Jpv1");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

/***/ }),

/***/ "UY82":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("ZC1a");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "V37i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findType;
function findType(tags) {
  var types = {
    country: 'country',
    city: 'city',
    'amenity/bus_station': 'busStop',
    'amenity/townhall': 'townhall',
    'railway/station': 'trainStation',
    'aeroway/aerodrome': 'airport',
    'aeroway/terminal': 'airport',
    'aeroway/gate': 'airport'
  };

  for (var t in types) {
    if (tags.indexOf(t) !== -1) {
      return types[t];
    }
  }

  return 'address';
}

/***/ }),

/***/ "V5xs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var namespace = 'autocomplete:';

var _ = __webpack_require__("udZ4");
var DOM = __webpack_require__("BiYY");

// constructor
// -----------

function EventBus(o) {
  if (!o || !o.el) {
    _.error('EventBus initialized without el');
  }

  this.$el = DOM.element(o.el);
}

// instance methods
// ----------------

_.mixin(EventBus.prototype, {

  // ### public

  trigger: function trigger(type) {
    var args = [].slice.call(arguments, 1);

    var event = _.Event(namespace + type);
    this.$el.trigger(event, args);
    return event;
  }
});

module.exports = EventBus;

/***/ }),

/***/ "VPfA":
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__("7D78"),
    arrayIncludes = __webpack_require__("mBEK");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function (pair) {
    var value = '_.' + pair[0];
    if (bitmask & pair[1] && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;

/***/ }),

/***/ "VcL+":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("r8MY"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c"),
    isBuffer = __webpack_require__("iyC2"),
    isIndex = __webpack_require__("A+gr"),
    isTypedArray = __webpack_require__("kwIb");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "VcxC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var immediate = __webpack_require__("/zmF");
var splitter = /\s+/;

module.exports = {
  onSync: onSync,
  onAsync: onAsync,
  off: off,
  trigger: trigger
};

function on(method, types, cb, context) {
  var type;

  if (!cb) {
    return this;
  }

  types = types.split(splitter);
  cb = context ? bindContext(cb, context) : cb;

  this._callbacks = this._callbacks || {};

  while (type = types.shift()) {
    this._callbacks[type] = this._callbacks[type] || { sync: [], async: [] };
    this._callbacks[type][method].push(cb);
  }

  return this;
}

function onAsync(types, cb, context) {
  return on.call(this, 'async', types, cb, context);
}

function onSync(types, cb, context) {
  return on.call(this, 'sync', types, cb, context);
}

function off(types) {
  var type;

  if (!this._callbacks) {
    return this;
  }

  types = types.split(splitter);

  while (type = types.shift()) {
    delete this._callbacks[type];
  }

  return this;
}

function trigger(types) {
  var type;
  var callbacks;
  var args;
  var syncFlush;
  var asyncFlush;

  if (!this._callbacks) {
    return this;
  }

  types = types.split(splitter);
  args = [].slice.call(arguments, 1);

  while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
    // eslint-disable-line
    syncFlush = getFlush(callbacks.sync, this, [type].concat(args));
    asyncFlush = getFlush(callbacks.async, this, [type].concat(args));

    if (syncFlush()) {
      immediate(asyncFlush);
    }
  }

  return this;
}

function getFlush(callbacks, context, args) {
  return flush;

  function flush() {
    var cancelled;

    for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
      // only cancel if the callback explicitly returns false
      cancelled = callbacks[i].apply(context, args) === false;
    }

    return !cancelled;
  }
}

function bindContext(fn, context) {
  return fn.bind ? fn.bind(context) : function () {
    fn.apply(context, [].slice.call(arguments, 0));
  };
}

/***/ }),

/***/ "Vhgk":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("srRO"),
    isArray = __webpack_require__("p/0c");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "Vy1O":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "WLsS":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("wppe");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ "WMV8":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "WdKa":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("ga8q"),
    baseLodash = __webpack_require__("YaGB");

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;

/***/ }),

/***/ "WqwZ":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("49I8"),
    assignMergeValue = __webpack_require__("2Tdb"),
    baseFor = __webpack_require__("mduf"),
    baseMergeDeep = __webpack_require__("XsjK"),
    isObject = __webpack_require__("u9vI"),
    keysIn = __webpack_require__("+UAC");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function (srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack());
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "Wum3":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "WwU5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }
  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};

/***/ }),

/***/ "X7Fw":
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__("qW88");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;

/***/ }),

/***/ "XJYD":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "XgVs":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "Xk23":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("s9iF"),
    listCacheDelete = __webpack_require__("+bWy"),
    listCacheGet = __webpack_require__("Ewuv"),
    listCacheHas = __webpack_require__("xDQX"),
    listCacheSet = __webpack_require__("h0zV");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),

/***/ "XsjK":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("2Tdb"),
    cloneBuffer = __webpack_require__("s4SJ"),
    cloneTypedArray = __webpack_require__("jXAN"),
    copyArray = __webpack_require__("Mkgn"),
    initCloneObject = __webpack_require__("qE2F"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c"),
    isArrayLikeObject = __webpack_require__("FwQQ"),
    isBuffer = __webpack_require__("iyC2"),
    isFunction = __webpack_require__("dRuq"),
    isObject = __webpack_require__("u9vI"),
    isPlainObject = __webpack_require__("ES04"),
    isTypedArray = __webpack_require__("kwIb"),
    toPlainObject = __webpack_require__("92s5");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "Y9nu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _places = __webpack_require__("yj/w");

var _places2 = _interopRequireDefault(_places);

var _version = __webpack_require__("HfM8");

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// must use module.exports to be commonJS compatible
// we need to export using commonjs for ease of usage in all
// JavaScript environments

/* eslint-disable import/no-commonjs */

module.exports = _places2.default;
module.exports.version = _version2.default;

/***/ }),

/***/ "YCGE":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("Ro2m"),
    toInteger = __webpack_require__("+d9A");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

module.exports = indexOf;

/***/ }),

/***/ "YIaf":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("FTXF");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "YLs0":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("d05+"),
    baseForOwn = __webpack_require__("xqjy"),
    baseIteratee = __webpack_require__("lW7l");

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function (value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

module.exports = mapKeys;

/***/ }),

/***/ "YaGB":
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;

/***/ }),

/***/ "Yu17":
/***/ (function(module, exports, __webpack_require__) {

module.exports = buildSearchMethod;

var errors = __webpack_require__("QKhG");

/**
 * Creates a search method to be used in clients
 * @param {string} queryParam the name of the attribute used for the query
 * @param {string} url the url
 * @return {function} the search method
 */
function buildSearchMethod(queryParam, url) {
  /**
   * The search method. Prepares the data and send the query to Algolia.
   * @param {string} query the string used for query search
   * @param {object} args additional parameters to send with the search
   * @param {function} [callback] the callback to be called with the client gets the answer
   * @return {undefined|Promise} If the callback is not provided then this methods returns a Promise
   */
  return function search(query, args, callback) {
    // warn V2 users on how to search
    if (typeof query === 'function' && typeof args === 'object' || typeof callback === 'object') {
      // .search(query, params, cb)
      // .search(cb, params)
      throw new errors.AlgoliaSearchError('index.search usage is index.search(query, params, cb)');
    }

    // Normalizing the function signature
    if (arguments.length === 0 || typeof query === 'function') {
      // Usage : .search(), .search(cb)
      callback = query;
      query = '';
    } else if (arguments.length === 1 || typeof args === 'function') {
      // Usage : .search(query/args), .search(query, cb)
      callback = args;
      args = undefined;
    }
    // At this point we have 3 arguments with values

    // Usage : .search(args) // careful: typeof null === 'object'
    if (typeof query === 'object' && query !== null) {
      args = query;
      query = undefined;
    } else if (query === undefined || query === null) {
      // .search(undefined/null)
      query = '';
    }

    var params = '';

    if (query !== undefined) {
      params += queryParam + '=' + encodeURIComponent(query);
    }

    var additionalUA;
    if (args !== undefined) {
      if (args.additionalUA) {
        additionalUA = args.additionalUA;
        delete args.additionalUA;
      }
      // `_getSearchParams` will augment params, do not be fooled by the = versus += from previous if
      params = this.as._getSearchParams(args, params);
    }

    return this._search(params, url, callback, additionalUA);
  };
}

/***/ }),

/***/ "YuqC":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "ZC1a":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("XJYD");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "ZEJm":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ "ZYGj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Zt7E":
/***/ (function(module, exports, __webpack_require__) {

var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.2+97478eb6
 */

(function (global, factory) {
   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
})(this, function () {
  'use strict';

  function objectOrFunction(x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }

  var _isArray = void 0;
  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;

  var len = 0;
  var vertxNext = void 0;
  var customSchedulerFn = void 0;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

  // test for web worker but not in IE10
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

  // node
  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  }

  // vertx
  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });

    return function () {
      node.data = iterations = ++iterations % 2;
    };
  }

  // web worker
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];

      callback(arg);

      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var r = require;
      var vertx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = void 0;
  // Decide what async method to use to triggering processing of queued callbacks:
  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && "function" === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var parent = this;

    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;

    if (_state) {
      var callback = arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }

  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.resolve(1);
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */
  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && typeof object === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(16);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  var GET_THEN_ERROR = new ErrorObject();

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function getThen(promise) {
    try {
      return promise.then;
    } catch (error) {
      GET_THEN_ERROR.error = error;
      return GET_THEN_ERROR;
    }
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }
        sealed = true;

        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === GET_THEN_ERROR) {
        reject(promise, GET_THEN_ERROR.error);
        GET_THEN_ERROR.error = null;
      } else if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      handleMaybeThenable(promise, value, getThen(value));
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }
    promise._state = REJECTED;
    promise._result = reason;

    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;

    parent._onerror = null;

    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = void 0,
        callback = void 0,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function ErrorObject() {
    this.error = null;
  }

  var TRY_CATCH_ERROR = new ErrorObject();

  function tryCatch(callback, detail) {
    try {
      return callback(detail);
    } catch (e) {
      TRY_CATCH_ERROR.error = e;
      return TRY_CATCH_ERROR;
    }
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = void 0,
        failed = void 0;

    if (hasCallback) {
      value = tryCatch(callback, detail);

      if (value === TRY_CATCH_ERROR) {
        failed = true;
        error = value.error;
        value.error = null;
      } else {
        succeeded = true;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
      succeeded = true;
    }

    if (promise._state !== PENDING) {
      // noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;
  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  var Enumerator = function () {
    function Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(noop);

      if (!this.promise[PROMISE_ID]) {
        makePromise(this.promise);
      }

      if (isArray(input)) {
        this.length = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate(input);
          if (this._remaining === 0) {
            fulfill(this.promise, this._result);
          }
        }
      } else {
        reject(this.promise, validationError());
      }
    }

    Enumerator.prototype._enumerate = function _enumerate(input) {
      for (var i = 0; this._state === PENDING && i < input.length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
      var c = this._instanceConstructor;
      var resolve$$1 = c.resolve;

      if (resolve$$1 === resolve$1) {
        var _then = getThen(entry);

        if (_then === then && entry._state !== PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof _then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === Promise$1) {
          var promise = new c(noop);
          handleMaybeThenable(promise, entry, _then);
          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function (resolve$$1) {
            return resolve$$1(entry);
          }), i);
        }
      } else {
        this._willSettleAt(resolve$$1(entry), i);
      }
    };

    Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
      var promise = this.promise;

      if (promise._state === PENDING) {
        this._remaining--;

        if (state === REJECTED) {
          reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        fulfill(promise, this._result);
      }
    };

    Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
      var enumerator = this;

      subscribe(promise, undefined, function (value) {
        return enumerator._settledAt(FULFILLED, i, value);
      }, function (reason) {
        return enumerator._settledAt(REJECTED, i, reason);
      });
    };

    return Enumerator;
  }();

  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```
  
    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```
  
    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */
  function all(entries) {
    return new Enumerator(this, entries).promise;
  }

  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.
  
    Example:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```
  
    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```
  
    An example real-world use case is implementing timeouts:
  
    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```
  
    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */
  function race(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;
        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }

  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */
  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.
  
    Terminology
    -----------
  
    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.
  
    A promise can be in one of three states: pending, fulfilled, or rejected.
  
    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.
  
    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.
  
  
    Basic Usage:
    ------------
  
    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);
  
      // on failure
      reject(reason);
    });
  
    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Advanced Usage:
    ---------------
  
    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.
  
    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
  
        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
  
        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }
  
    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Unlike callbacks, promises are great composable primitives.
  
    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON
  
      return values;
    });
    ```
  
    @class Promise
    @param {Function} resolver
    Useful for tooling.
    @constructor
  */

  var Promise$1 = function () {
    function Promise(resolver) {
      this[PROMISE_ID] = nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (noop !== resolver) {
        typeof resolver !== 'function' && needsResolver();
        this instanceof Promise ? initializePromise(this, resolver) : needsNew();
      }
    }

    /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
     ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
     Chaining
    --------
     The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
     ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
     findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
     ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
     Assimilation
    ------------
     Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
     If the assimliated promise rejects, then the downstream promise will also reject.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
     Simple Example
    --------------
     Synchronous Example
     ```javascript
    let result;
     try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
     Advanced Example
    --------------
     Synchronous Example
     ```javascript
    let author, books;
     try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
     function foundBooks(books) {
     }
     function failure(reason) {
     }
     findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
     @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
    */

    /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
    ```js
    function findAuthor(){
    throw new Error('couldn't find that author');
    }
    // synchronous
    try {
    findAuthor();
    } catch(reason) {
    // something went wrong
    }
    // async with promises
    findAuthor().catch(function(reason){
    // something went wrong
    });
    ```
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
    */

    Promise.prototype.catch = function _catch(onRejection) {
      return this.then(null, onRejection);
    };

    /**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves
    
      Synchronous example:
    
      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }
    
      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't affect the return value
      }
      ```
    
      Asynchronous example:
    
      ```js
      findAuthor().catch(function(reason){
        return findOtherAuther();
      }).finally(function(){
        // author was either found, or not
      });
      ```
    
      @method finally
      @param {Function} callback
      @return {Promise}
    */

    Promise.prototype.finally = function _finally(callback) {
      var promise = this;
      var constructor = promise.constructor;

      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    };

    return Promise;
  }();

  Promise$1.prototype.then = then;
  Promise$1.all = all;
  Promise$1.race = race;
  Promise$1.resolve = resolve$1;
  Promise$1.reject = reject$1;
  Promise$1._setScheduler = setScheduler;
  Promise$1._setAsap = setAsap;
  Promise$1._asap = asap;

  /*global self*/
  function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;
      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {
        // silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$1;
  }

  // Strange compat..
  Promise$1.polyfill = polyfill;
  Promise$1.Promise = Promise$1;

  return Promise$1;
});

//# sourceMappingURL=es6-promise.map

/***/ }),

/***/ "Zva/":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    isObjectLike = __webpack_require__("OuyB");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
}

module.exports = isNumber;

/***/ }),

/***/ "a+zQ":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "a8Tx":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("Ro2m");

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;

/***/ }),

/***/ "aP6i":
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__("DrEq"),
    root = __webpack_require__("MIhM");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;

/***/ }),

/***/ "aWGB":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("zb3a");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ "az4F":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("dtkN"),
    getSymbols = __webpack_require__("EvLK");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ "bSg1":
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__("+9qO"),
    noop = __webpack_require__("uTXi");

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function (func) {
  return metaMap.get(func);
};

module.exports = getData;

/***/ }),

/***/ "bU1I":
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;

/***/ }),

/***/ "bViC":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("iEGD"),
    getValue = __webpack_require__("Nk5W");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "bgO7":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    isObjectLike = __webpack_require__("OuyB");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "bvhO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

/***/ }),

/***/ "bx4M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = getDocumentProtocol;

function getDocumentProtocol() {
  var protocol = window.document.location.protocol;

  // when in `file:` mode (local html file), default to `http:`
  if (protocol !== 'http:' && protocol !== 'https:') {
    protocol = 'http:';
  }

  return protocol;
}

/***/ }),

/***/ "bxLG":
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__("FhVQ"),
    baseEach = __webpack_require__("z7ms"),
    baseIteratee = __webpack_require__("lW7l"),
    baseReduce = __webpack_require__("oN9Z"),
    isArray = __webpack_require__("p/0c");

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduce : baseReduce,
        initAccum = arguments.length < 3;

    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;

/***/ }),

/***/ "c9TW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("HI10");
var intersection = __webpack_require__("3m7z");
var forOwn = __webpack_require__("SC1V");
var forEach = __webpack_require__("cTKO");
var filter = __webpack_require__("FnLS");
var map = __webpack_require__("vGW8");
var reduce = __webpack_require__("bxLG");
var omit = __webpack_require__("J2GV");
var indexOf = __webpack_require__("YCGE");
var isNaN = __webpack_require__("zipZ");
var isArray = __webpack_require__("p/0c");
var isEmpty = __webpack_require__("BBRi");
var isEqual = __webpack_require__("R6wa");
var isUndefined = __webpack_require__("Sysa");
var isString = __webpack_require__("5CkJ");
var isFunction = __webpack_require__("dRuq");
var find = __webpack_require__("y1nO");
var trim = __webpack_require__("GgRv");

var defaults = __webpack_require__("mpS4");
var merge = __webpack_require__("yubd");

var valToNumber = __webpack_require__("LKoo");

var filterState = __webpack_require__("uk2Z");

var RefinementList = __webpack_require__("fF0A");

/**
 * like _.find but using _.isEqual to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into
 * @param {any} searchedValue the value we're looking for
 * @return {any} the searched value or undefined
 */
function findArray(array, searchedValue) {
  return find(array, function (currentValue) {
    return isEqual(currentValue, searchedValue);
  });
}

/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */

/**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */

/**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */
function SearchParameters(newParameters) {
  var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};

  /**
   * Targeted index. This parameter is mandatory.
   * @member {string}
   */
  this.index = params.index || '';

  // Query
  /**
   * Query string of the instant search. The empty string is a valid query.
   * @member {string}
   * @see https://www.algolia.com/doc/rest#param-query
   */
  this.query = params.query || '';

  // Facets
  /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.facets = params.facets || [];
  /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.disjunctiveFacets = params.disjunctiveFacets || [];
  /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */
  this.hierarchicalFacets = params.hierarchicalFacets || [];

  // Refinements
  /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsRefinements = params.facetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsExcludes = params.facetsExcludes || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */
  this.numericRefinements = params.numericRefinements || {};
  /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */
  this.tagRefinements = params.tagRefinements || [];
  /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};

  /**
   * Contains the numeric filters in the raw format of the Algolia API. Setting
   * this parameter is not compatible with the usage of numeric filters methods.
   * @see https://www.algolia.com/doc/javascript#numericFilters
   * @member {string}
   */
  this.numericFilters = params.numericFilters;

  /**
   * Contains the tag filters in the raw format of the Algolia API. Setting this
   * parameter is not compatible with the of the add/remove/toggle methods of the
   * tag api.
   * @see https://www.algolia.com/doc/rest#param-tagFilters
   * @member {string}
   */
  this.tagFilters = params.tagFilters;

  /**
   * Contains the optional tag filters in the raw format of the Algolia API.
   * @see https://www.algolia.com/doc/rest#param-tagFilters
   * @member {string}
   */
  this.optionalTagFilters = params.optionalTagFilters;

  /**
   * Contains the optional facet filters in the raw format of the Algolia API.
   * @see https://www.algolia.com/doc/rest#param-tagFilters
   * @member {string}
   */
  this.optionalFacetFilters = params.optionalFacetFilters;

  // Misc. parameters
  /**
   * Number of hits to be returned by the search API
   * @member {number}
   * @see https://www.algolia.com/doc/rest#param-hitsPerPage
   */
  this.hitsPerPage = params.hitsPerPage;
  /**
   * Number of values for each faceted attribute
   * @member {number}
   * @see https://www.algolia.com/doc/rest#param-maxValuesPerFacet
   */
  this.maxValuesPerFacet = params.maxValuesPerFacet;
  /**
   * The current page number
   * @member {number}
   * @see https://www.algolia.com/doc/rest#param-page
   */
  this.page = params.page || 0;
  /**
   * How the query should be treated by the search engine.
   * Possible values: prefixAll, prefixLast, prefixNone
   * @see https://www.algolia.com/doc/rest#param-queryType
   * @member {string}
   */
  this.queryType = params.queryType;
  /**
   * How the typo tolerance behave in the search engine.
   * Possible values: true, false, min, strict
   * @see https://www.algolia.com/doc/rest#param-typoTolerance
   * @member {string}
   */
  this.typoTolerance = params.typoTolerance;

  /**
   * Number of characters to wait before doing one character replacement.
   * @see https://www.algolia.com/doc/rest#param-minWordSizefor1Typo
   * @member {number}
   */
  this.minWordSizefor1Typo = params.minWordSizefor1Typo;
  /**
   * Number of characters to wait before doing a second character replacement.
   * @see https://www.algolia.com/doc/rest#param-minWordSizefor2Typos
   * @member {number}
   */
  this.minWordSizefor2Typos = params.minWordSizefor2Typos;
  /**
   * Configure the precision of the proximity ranking criterion
   * @see https://www.algolia.com/doc/rest#param-minProximity
   */
  this.minProximity = params.minProximity;
  /**
   * Should the engine allow typos on numerics.
   * @see https://www.algolia.com/doc/rest#param-allowTyposOnNumericTokens
   * @member {boolean}
   */
  this.allowTyposOnNumericTokens = params.allowTyposOnNumericTokens;
  /**
   * Should the plurals be ignored
   * @see https://www.algolia.com/doc/rest#param-ignorePlurals
   * @member {boolean}
   */
  this.ignorePlurals = params.ignorePlurals;
  /**
   * Restrict which attribute is searched.
   * @see https://www.algolia.com/doc/rest#param-restrictSearchableAttributes
   * @member {string}
   */
  this.restrictSearchableAttributes = params.restrictSearchableAttributes;
  /**
   * Enable the advanced syntax.
   * @see https://www.algolia.com/doc/rest#param-advancedSyntax
   * @member {boolean}
   */
  this.advancedSyntax = params.advancedSyntax;
  /**
   * Enable the analytics
   * @see https://www.algolia.com/doc/rest#param-analytics
   * @member {boolean}
   */
  this.analytics = params.analytics;
  /**
   * Tag of the query in the analytics.
   * @see https://www.algolia.com/doc/rest#param-analyticsTags
   * @member {string}
   */
  this.analyticsTags = params.analyticsTags;
  /**
   * Enable the synonyms
   * @see https://www.algolia.com/doc/rest#param-synonyms
   * @member {boolean}
   */
  this.synonyms = params.synonyms;
  /**
   * Should the engine replace the synonyms in the highlighted results.
   * @see https://www.algolia.com/doc/rest#param-replaceSynonymsInHighlight
   * @member {boolean}
   */
  this.replaceSynonymsInHighlight = params.replaceSynonymsInHighlight;
  /**
   * Add some optional words to those defined in the dashboard
   * @see https://www.algolia.com/doc/rest#param-optionalWords
   * @member {string}
   */
  this.optionalWords = params.optionalWords;
  /**
   * Possible values are "lastWords" "firstWords" "allOptional" "none" (default)
   * @see https://www.algolia.com/doc/rest#param-removeWordsIfNoResults
   * @member {string}
   */
  this.removeWordsIfNoResults = params.removeWordsIfNoResults;
  /**
   * List of attributes to retrieve
   * @see https://www.algolia.com/doc/rest#param-attributesToRetrieve
   * @member {string}
   */
  this.attributesToRetrieve = params.attributesToRetrieve;
  /**
   * List of attributes to highlight
   * @see https://www.algolia.com/doc/rest#param-attributesToHighlight
   * @member {string}
   */
  this.attributesToHighlight = params.attributesToHighlight;
  /**
   * Code to be embedded on the left part of the highlighted results
   * @see https://www.algolia.com/doc/rest#param-highlightPreTag
   * @member {string}
   */
  this.highlightPreTag = params.highlightPreTag;
  /**
   * Code to be embedded on the right part of the highlighted results
   * @see https://www.algolia.com/doc/rest#param-highlightPostTag
   * @member {string}
   */
  this.highlightPostTag = params.highlightPostTag;
  /**
   * List of attributes to snippet
   * @see https://www.algolia.com/doc/rest#param-attributesToSnippet
   * @member {string}
   */
  this.attributesToSnippet = params.attributesToSnippet;
  /**
   * Enable the ranking informations in the response, set to 1 to activate
   * @see https://www.algolia.com/doc/rest#param-getRankingInfo
   * @member {number}
   */
  this.getRankingInfo = params.getRankingInfo;
  /**
   * Remove duplicates based on the index setting attributeForDistinct
   * @see https://www.algolia.com/doc/rest#param-distinct
   * @member {boolean|number}
   */
  this.distinct = params.distinct;
  /**
   * Center of the geo search.
   * @see https://www.algolia.com/doc/rest#param-aroundLatLng
   * @member {string}
   */
  this.aroundLatLng = params.aroundLatLng;
  /**
   * Center of the search, retrieve from the user IP.
   * @see https://www.algolia.com/doc/rest#param-aroundLatLngViaIP
   * @member {boolean}
   */
  this.aroundLatLngViaIP = params.aroundLatLngViaIP;
  /**
   * Radius of the geo search.
   * @see https://www.algolia.com/doc/rest#param-aroundRadius
   * @member {number}
   */
  this.aroundRadius = params.aroundRadius;
  /**
   * Precision of the geo search.
   * @see https://www.algolia.com/doc/rest#param-aroundPrecision
   * @member {number}
   */
  this.minimumAroundRadius = params.minimumAroundRadius;
  /**
   * Precision of the geo search.
   * @see https://www.algolia.com/doc/rest#param-minimumAroundRadius
   * @member {number}
   */
  this.aroundPrecision = params.aroundPrecision;
  /**
   * Geo search inside a box.
   * @see https://www.algolia.com/doc/rest#param-insideBoundingBox
   * @member {string}
   */
  this.insideBoundingBox = params.insideBoundingBox;
  /**
   * Geo search inside a polygon.
   * @see https://www.algolia.com/doc/rest#param-insidePolygon
   * @member {string}
   */
  this.insidePolygon = params.insidePolygon;
  /**
   * Allows to specify an ellipsis character for the snippet when we truncate the text
   * (added before and after if truncated).
   * The default value is an empty string and we recommend to set it to "…"
   * @see https://www.algolia.com/doc/rest#param-insidePolygon
   * @member {string}
   */
  this.snippetEllipsisText = params.snippetEllipsisText;
  /**
   * Allows to specify some attributes name on which exact won't be applied.
   * Attributes are separated with a comma (for example "name,address" ), you can also use a
   * JSON string array encoding (for example encodeURIComponent('["name","address"]') ).
   * By default the list is empty.
   * @see https://www.algolia.com/doc/rest#param-disableExactOnAttributes
   * @member {string|string[]}
   */
  this.disableExactOnAttributes = params.disableExactOnAttributes;
  /**
   * Applies 'exact' on single word queries if the word contains at least 3 characters
   * and is not a stop word.
   * Can take two values: true or false.
   * By default, its set to false.
   * @see https://www.algolia.com/doc/rest#param-enableExactOnSingleWordQuery
   * @member {boolean}
   */
  this.enableExactOnSingleWordQuery = params.enableExactOnSingleWordQuery;

  // Undocumented parameters, still needed otherwise we fail
  this.offset = params.offset;
  this.length = params.length;

  var self = this;
  forOwn(params, function checkForUnknownParameter(paramValue, paramName) {
    if (SearchParameters.PARAMETERS.indexOf(paramName) === -1) {
      self[paramName] = paramValue;
    }
  });
}

/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */
SearchParameters.PARAMETERS = keys(new SearchParameters());

/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */
SearchParameters._parseNumbers = function (partialState) {
  // Do not reparse numbers in SearchParameters, they ought to be parsed already
  if (partialState instanceof SearchParameters) return partialState;

  var numbers = {};

  var numberKeys = ['aroundPrecision', 'aroundRadius', 'getRankingInfo', 'minWordSizefor2Typos', 'minWordSizefor1Typo', 'page', 'maxValuesPerFacet', 'distinct', 'minimumAroundRadius', 'hitsPerPage', 'minProximity'];

  forEach(numberKeys, function (k) {
    var value = partialState[k];
    if (isString(value)) {
      var parsedValue = parseFloat(value);
      numbers[k] = isNaN(parsedValue) ? value : parsedValue;
    }
  });

  // there's two formats of insideBoundingBox, we need to parse
  // the one which is an array of float geo rectangles
  if (Array.isArray(partialState.insideBoundingBox)) {
    numbers.insideBoundingBox = partialState.insideBoundingBox.map(function (geoRect) {
      return geoRect.map(function (value) {
        return parseFloat(value);
      });
    });
  }

  if (partialState.numericRefinements) {
    var numericRefinements = {};
    forEach(partialState.numericRefinements, function (operators, attribute) {
      numericRefinements[attribute] = {};
      forEach(operators, function (values, operator) {
        var parsedValues = map(values, function (v) {
          if (isArray(v)) {
            return map(v, function (vPrime) {
              if (isString(vPrime)) {
                return parseFloat(vPrime);
              }
              return vPrime;
            });
          } else if (isString(v)) {
            return parseFloat(v);
          }
          return v;
        });
        numericRefinements[attribute][operator] = parsedValues;
      });
    });
    numbers.numericRefinements = numericRefinements;
  }

  return merge({}, partialState, numbers);
};

/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */
SearchParameters.make = function makeSearchParameters(newParameters) {
  var instance = new SearchParameters(newParameters);

  forEach(newParameters.hierarchicalFacets, function (facet) {
    if (facet.rootPath) {
      var currentRefinement = instance.getHierarchicalRefinement(facet.name);

      if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
        instance = instance.clearRefinements(facet.name);
      }

      // get it again in case it has been cleared
      currentRefinement = instance.getHierarchicalRefinement(facet.name);
      if (currentRefinement.length === 0) {
        instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
      }
    }
  });

  return instance;
};

/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */
SearchParameters.validate = function (currentState, parameters) {
  var params = parameters || {};

  if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
    return new Error('[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' + 'an error, if it is really what you want, you should first clear the tags with clearTags method.');
  }

  if (currentState.tagRefinements.length > 0 && params.tagFilters) {
    return new Error('[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' + 'an error, if it is not, you should first clear the tags with clearTags method.');
  }

  if (currentState.numericFilters && params.numericRefinements && !isEmpty(params.numericRefinements)) {
    return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
  }

  if (!isEmpty(currentState.numericRefinements) && params.numericFilters) {
    return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
  }

  return null;
};

SearchParameters.prototype = {
  constructor: SearchParameters,

  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */
  clearRefinements: function clearRefinements(attribute) {
    var clear = RefinementList.clearRefinement;
    var patch = {
      numericRefinements: this._clearNumericRefinements(attribute),
      facetsRefinements: clear(this.facetsRefinements, attribute, 'conjunctiveFacet'),
      facetsExcludes: clear(this.facetsExcludes, attribute, 'exclude'),
      disjunctiveFacetsRefinements: clear(this.disjunctiveFacetsRefinements, attribute, 'disjunctiveFacet'),
      hierarchicalFacetsRefinements: clear(this.hierarchicalFacetsRefinements, attribute, 'hierarchicalFacet')
    };
    if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) {
      return this;
    }
    return this.setQueryParameters(patch);
  },
  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */
  clearTags: function clearTags() {
    if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;

    return this.setQueryParameters({
      tagFilters: undefined,
      tagRefinements: []
    });
  },
  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */
  setIndex: function setIndex(index) {
    if (index === this.index) return this;

    return this.setQueryParameters({
      index: index
    });
  },
  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */
  setQuery: function setQuery(newQuery) {
    if (newQuery === this.query) return this;

    return this.setQueryParameters({
      query: newQuery
    });
  },
  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */
  setPage: function setPage(newPage) {
    if (newPage === this.page) return this;

    return this.setQueryParameters({
      page: newPage
    });
  },
  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */
  setFacets: function setFacets(facets) {
    return this.setQueryParameters({
      facets: facets
    });
  },
  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */
  setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
    return this.setQueryParameters({
      disjunctiveFacets: facets
    });
  },
  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */
  setHitsPerPage: function setHitsPerPage(n) {
    if (this.hitsPerPage === n) return this;

    return this.setQueryParameters({
      hitsPerPage: n
    });
  },
  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */
  setTypoTolerance: function setTypoTolerance(typoTolerance) {
    if (this.typoTolerance === typoTolerance) return this;

    return this.setQueryParameters({
      typoTolerance: typoTolerance
    });
  },
  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function addNumericRefinement(attribute, operator, v) {
    var value = valToNumber(v);

    if (this.isNumericRefined(attribute, operator, value)) return this;

    var mod = merge({}, this.numericRefinements);

    mod[attribute] = merge({}, mod[attribute]);

    if (mod[attribute][operator]) {
      // Array copy
      mod[attribute][operator] = mod[attribute][operator].slice();
      // Add the element. Concat can't be used here because value can be an array.
      mod[attribute][operator].push(value);
    } else {
      mod[attribute][operator] = [value];
    }

    return this.setQueryParameters({
      numericRefinements: mod
    });
  },
  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function getConjunctiveRefinements(facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      throw new Error(facetName + ' is not defined in the facets attribute of the helper configuration');
    }
    return this.facetsRefinements[facetName] || [];
  },
  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function getDisjunctiveRefinements(facetName) {
    if (!this.isDisjunctiveFacet(facetName)) {
      throw new Error(facetName + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }
    return this.disjunctiveFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function getHierarchicalRefinement(facetName) {
    // we send an array but we currently do not support multiple
    // hierarchicalRefinements for a hierarchicalFacet
    return this.hierarchicalFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function getExcludeRefinements(facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      throw new Error(facetName + ' is not defined in the facets attribute of the helper configuration');
    }
    return this.facetsExcludes[facetName] || [];
  },

  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */
  removeNumericRefinement: function removeNumericRefinement(attribute, operator, paramValue) {
    if (paramValue !== undefined) {
      var paramValueAsNumber = valToNumber(paramValue);
      if (!this.isNumericRefined(attribute, operator, paramValueAsNumber)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (value, key) {
          return key === attribute && value.op === operator && isEqual(value.val, paramValueAsNumber);
        })
      });
    } else if (operator !== undefined) {
      if (!this.isNumericRefined(attribute, operator)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (value, key) {
          return key === attribute && value.op === operator;
        })
      });
    }

    if (!this.isNumericRefined(attribute)) return this;
    return this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function (value, key) {
        return key === attribute;
      })
    });
  },
  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList[]} list of refinements
   */
  getNumericRefinements: function getNumericRefinements(facetName) {
    return this.numericRefinements[facetName] || {};
  },
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute of the record
   * @param {string} operator applied
   * @return {number} value of the refinement
   */
  getNumericRefinement: function getNumericRefinement(attribute, operator) {
    return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
  },
  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */
  _clearNumericRefinements: function _clearNumericRefinements(attribute) {
    if (isUndefined(attribute)) {
      if (isEmpty(this.numericRefinements)) return this.numericRefinements;
      return {};
    } else if (isString(attribute)) {
      if (isEmpty(this.numericRefinements[attribute])) return this.numericRefinements;
      return omit(this.numericRefinements, attribute);
    } else if (isFunction(attribute)) {
      var hasChanged = false;
      var newNumericRefinements = reduce(this.numericRefinements, function (memo, operators, key) {
        var operatorList = {};

        forEach(operators, function (values, operator) {
          var outValues = [];
          forEach(values, function (value) {
            var predicateResult = attribute({ val: value, op: operator }, key, 'numeric');
            if (!predicateResult) outValues.push(value);
          });
          if (!isEmpty(outValues)) {
            if (outValues.length !== values.length) hasChanged = true;
            operatorList[operator] = outValues;
          } else hasChanged = true;
        });

        if (!isEmpty(operatorList)) memo[key] = operatorList;

        return memo;
      }, {});

      if (hasChanged) return newNumericRefinements;
      return this.numericRefinements;
    }
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */
  addFacet: function addFacet(facet) {
    if (this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      facets: this.facets.concat([facet])
    });
  },
  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */
  addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
    if (this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([facet])
    });
  },
  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
    if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
      throw new Error('Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
    }

    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
    });
  },
  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addFacetRefinement: function addFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addExcludeRefinement: function addExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */
  addTagRefinement: function addTagRefinement(tag) {
    if (this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.concat(tag)
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */
  removeFacet: function removeFacet(facet) {
    if (!this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      facets: filter(this.facets, function (f) {
        return f !== facet;
      })
    });
  },
  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */
  removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
    if (!this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      disjunctiveFacets: filter(this.disjunctiveFacets, function (f) {
        return f !== facet;
      })
    });
  },
  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */
  removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
    if (!this.isHierarchicalFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      hierarchicalFacets: filter(this.hierarchicalFacets, function (f) {
        return f.name !== facet;
      })
    });
  },
  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */
  removeFacetRefinement: function removeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */
  removeTagRefinement: function removeTagRefinement(tag) {
    if (!this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: filter(this.tagRefinements, function (t) {
        return t !== tag;
      })
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function toggleRefinement(facet, value) {
    return this.toggleFacetRefinement(facet, value);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
    if (this.isHierarchicalFacet(facet)) {
      return this.toggleHierarchicalFacetRefinement(facet, value);
    } else if (this.isConjunctiveFacet(facet)) {
      return this.toggleConjunctiveFacetRefinement(facet, value);
    } else if (this.isDisjunctiveFacet(facet)) {
      return this.toggleDisjunctiveFacetRefinement(facet, value);
    }

    throw new Error('Cannot refine the undeclared facet ' + facet + '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
    }

    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));

    var mod = {};

    var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && (
    // remove current refinement:
    // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
    this.hierarchicalFacetsRefinements[facet][0] === value ||
    // remove a parent refinement of the current refinement:
    //  - refinement was 'beer > IPA > Flying dog'
    //  - call is toggleRefine('beer > IPA')
    //  - refinement should be `beer`
    this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);

    if (upOneOrMultipleLevel) {
      if (value.indexOf(separator) === -1) {
        // go back to root level
        mod[facet] = [];
      } else {
        mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
      }
    } else {
      mod[facet] = [value];
    }

    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaults({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function addHierarchicalFacetRefinement(facet, path) {
    if (this.isHierarchicalFacetRefined(facet)) {
      throw new Error(facet + ' is already refined.');
    }
    var mod = {};
    mod[facet] = [path];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaults({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function removeHierarchicalFacetRefinement(facet) {
    if (!this.isHierarchicalFacetRefined(facet)) {
      throw new Error(facet + ' is not refined.');
    }
    var mod = {};
    mod[facet] = [];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaults({}, mod, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */
  toggleTagRefinement: function toggleTagRefinement(tag) {
    if (this.isTagRefined(tag)) {
      return this.removeTagRefinement(tag);
    }

    return this.addTagRefinement(tag);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isDisjunctiveFacet: function isDisjunctiveFacet(facet) {
    return indexOf(this.disjunctiveFacets, facet) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */
  isHierarchicalFacet: function isHierarchicalFacet(facetName) {
    return this.getHierarchicalFacetByName(facetName) !== undefined;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isConjunctiveFacet: function isConjunctiveFacet(facet) {
    return indexOf(this.facets, facet) > -1;
  },
  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function isFacetRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    return RefinementList.isRefined(this.facetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function isExcludeRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    return RefinementList.isRefined(this.facetsExcludes, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }
    return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
    }

    var refinements = this.getHierarchicalRefinement(facet);

    if (!value) {
      return refinements.length > 0;
    }

    return indexOf(refinements, value) !== -1;
  },
  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function isNumericRefined(attribute, operator, value) {
    if (isUndefined(value) && isUndefined(operator)) {
      return !!this.numericRefinements[attribute];
    }

    var isOperatorDefined = this.numericRefinements[attribute] && !isUndefined(this.numericRefinements[attribute][operator]);

    if (isUndefined(value) || !isOperatorDefined) {
      return isOperatorDefined;
    }

    var parsedValue = valToNumber(value);
    var isAttributeValueDefined = !isUndefined(findArray(this.numericRefinements[attribute][operator], parsedValue));

    return isOperatorDefined && isAttributeValueDefined;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */
  isTagRefined: function isTagRefined(tag) {
    return indexOf(this.tagRefinements, tag) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
    // attributes used for numeric filter can also be disjunctive
    var disjunctiveNumericRefinedFacets = intersection(keys(this.numericRefinements), this.disjunctiveFacets);

    return keys(this.disjunctiveFacetsRefinements).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
    return intersection(
    // enforce the order between the two arrays,
    // so that refinement name index === hierarchical facet index
    map(this.hierarchicalFacets, 'name'), keys(this.hierarchicalFacetsRefinements));
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */
  getUnrefinedDisjunctiveFacets: function getUnrefinedDisjunctiveFacets() {
    var refinedFacets = this.getRefinedDisjunctiveFacets();

    return filter(this.disjunctiveFacets, function (f) {
      return indexOf(refinedFacets, f) === -1;
    });
  },

  managedParameters: ['index', 'facets', 'disjunctiveFacets', 'facetsRefinements', 'facetsExcludes', 'disjunctiveFacetsRefinements', 'numericRefinements', 'tagRefinements', 'hierarchicalFacets', 'hierarchicalFacetsRefinements'],
  getQueryParams: function getQueryParams() {
    var managedParameters = this.managedParameters;

    var queryParams = {};

    forOwn(this, function (paramValue, paramName) {
      if (indexOf(managedParameters, paramName) === -1 && paramValue !== undefined) {
        queryParams[paramName] = paramValue;
      }
    });

    return queryParams;
  },
  /**
   * Let the user retrieve any parameter value from the SearchParameters
   * @param {string} paramName name of the parameter
   * @return {any} the value of the parameter
   */
  getQueryParameter: function getQueryParameter(paramName) {
    if (!this.hasOwnProperty(paramName)) {
      throw new Error("Parameter '" + paramName + "' is not an attribute of SearchParameters " + '(http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html)');
    }

    return this[paramName];
  },
  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function setParameter(parameter, value) {
    if (this[parameter] === value) return this;

    var modification = {};

    modification[parameter] = value;

    return this.setQueryParameters(modification);
  },
  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function setQueryParameters(params) {
    if (!params) return this;

    var error = SearchParameters.validate(this, params);

    if (error) {
      throw error;
    }

    var parsedParams = SearchParameters._parseNumbers(params);

    return this.mutateMe(function mergeWith(newInstance) {
      var ks = keys(params);

      forEach(ks, function (k) {
        newInstance[k] = parsedParams[k];
      });

      return newInstance;
    });
  },

  /**
   * Returns an object with only the selected attributes.
   * @param {string[]} filters filters to retrieve only a subset of the state. It
   * accepts strings that can be either attributes of the SearchParameters (e.g. hitsPerPage)
   * or attributes of the index with the notation 'attribute:nameOfMyAttribute'
   * @return {object}
   */
  filter: function filter(filters) {
    return filterState(this, filters);
  },
  /**
   * Helper function to make it easier to build new instances from a mutating
   * function
   * @private
   * @param {function} fn newMutableState -> previousState -> () function that will
   * change the value of the newMutable to the desired state
   * @return {SearchParameters} a new instance with the specified modifications applied
   */
  mutateMe: function mutateMe(fn) {
    var newState = new this.constructor(this);

    fn(newState, this);
    return newState;
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function _getHierarchicalFacetSortBy(hierarchicalFacet) {
    return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function _getHierarchicalFacetSeparator(hierarchicalFacet) {
    return hierarchicalFacet.separator || ' > ';
  },

  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function _getHierarchicalRootPath(hierarchicalFacet) {
    return hierarchicalFacet.rootPath || null;
  },

  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function _getHierarchicalShowParentLevel(hierarchicalFacet) {
    if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
      return hierarchicalFacet.showParentLevel;
    }
    return true;
  },

  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function getHierarchicalFacetByName(hierarchicalFacetName) {
    return find(this.hierarchicalFacets, { name: hierarchicalFacetName });
  },

  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function getHierarchicalFacetBreadcrumb(facetName) {
    if (!this.isHierarchicalFacet(facetName)) {
      throw new Error('Cannot get the breadcrumb of an unknown hierarchical facet: `' + facetName + '`');
    }

    var refinement = this.getHierarchicalRefinement(facetName)[0];
    if (!refinement) return [];

    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
    var path = refinement.split(separator);
    return map(path, trim);
  },

  toString: function toString() {
    return JSON.stringify(this, null, 2);
  }
};

/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */
module.exports = SearchParameters;

/***/ }),

/***/ "cDyG":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("ZC1a");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "cKQ/":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("IiHL"),
    baseIteratee = __webpack_require__("lW7l"),
    toInteger = __webpack_require__("+d9A");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;

/***/ }),

/***/ "cNwM":
/***/ (function(module, exports) {

module.exports = "0.28.3";

/***/ }),

/***/ "cTKO":
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__("7D78"),
    baseEach = __webpack_require__("z7ms"),
    castFunction = __webpack_require__("tAcL"),
    isArray = __webpack_require__("p/0c");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;

/***/ }),

/***/ "cbLE":
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__("0FvR"),
    overRest = __webpack_require__("qXFa"),
    setToString = __webpack_require__("KRxT");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;

/***/ }),

/***/ "ccDS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// this module will either get a regular http keepalive agent or
// a proxying agent if `HTTP_PROXY` or `HTTPS_PROXY` environment variables
// are set
// request/request module could have been used but it does not do any
// keepalive on POST requests https://github.com/request/request/issues/236#issuecomment-94587587

module.exports = getAgent;

function getAgent(protocol) {
  var agent;

  if (protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('get-agent: `protocol` must be `http:` or `https:`');
  }

  var parsedProxy = getParsedProxy();

  if (parsedProxy.protocol) {
    agent = getProxyingAgent(protocol, parsedProxy);
  } else {
    // no proxy given, let's use regular keepalived agents
    agent = getKeepaliveAgent(protocol);
  }

  return agent;
}

function getParsedProxy() {
  var url = __webpack_require__("Vy1O");
  var proxy = process.env.HTTP_PROXY || process.env.HTTPS_PROXY || '';

  return url.parse(proxy);
}

function getKeepaliveAgent(protocol) {
  var http = __webpack_require__("gHkb");
  var https = __webpack_require__("XgVs");

  var HttpsAgent = __webpack_require__("rgmI").HttpsAgent;
  var HttpAgent = __webpack_require__("rgmI");
  var semver = __webpack_require__("y4rL");

  var keepAliveAgent;

  // node 0.10 => agentkeepalive
  // node >= 0.12 => native keepalive
  // iojs => native keepalive
  // node >= 0.11.4 has good keepAlive https://github.com/joyent/node/commit/b5b841
  if (semver.satisfies(process.version, '<0.11.4')) {
    if (protocol === 'http:') {
      keepAliveAgent = new HttpAgent({
        maxSockets: Infinity
      });
    } else if (protocol === 'https:') {
      keepAliveAgent = new HttpsAgent({
        maxSockets: Infinity
      });
    }
  } else if (protocol === 'http:') {
    keepAliveAgent = new http.Agent({
      keepAlive: true,
      maxSockets: Infinity
    });
  } else if (protocol === 'https:') {
    keepAliveAgent = new https.Agent({
      keepAlive: true,
      maxSockets: Infinity
    });
  }

  return keepAliveAgent;
}

function getProxyingAgent(protocol, parsedProxy) {
  var tunnel = __webpack_require__("y81D");

  var agentSettings = {
    maxSockets: Infinity,
    proxy: {
      host: parsedProxy.hostname,
      port: parseInt(parsedProxy.port, 10),
      proxyAuth: parsedProxy.auth
    }
  };

  // httpOverHttps
  // httpsOverHttps
  // https://github.com/mikeal/tunnel-agent/blob/912a7a6d00e10ec76baf9c9369de280fa5badef3/index.js#L12-L15
  var tunnelType = protocol.replace(':', '') + 'Over' + parsedProxy.protocol.replace(':', '').replace('h', 'H');

  var agent = new tunnel[tunnelType](agentSettings);

  // `tunnel-agent` does not have a destroy method
  agent.destroy = function () {
    this.sockets.forEach(function (socket) {
      socket.destroy();
    });
  };

  return agent;
}

/***/ }),

/***/ "ckhT":
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__("PD2+");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = func.name + '',
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;

/***/ }),

/***/ "coim":
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;

/***/ }),

/***/ "d05+":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("kAdy");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "dD6k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = reduce;

var objectKeys = __webpack_require__("ywQn");

function reduce(list, iterator) {
    var keys = objectKeys(list),
        i = 0,
        accumulator = list[0],
        context = this;

    if (arguments.length === 2) {
        i = 1;
    } else if (arguments.length === 3) {
        accumulator = arguments[2];
    } else if (arguments.length >= 4) {
        context = arguments[2];
        accumulator = arguments[3];
    }

    for (var len = keys.length; i < len; i++) {
        var key = keys[i],
            value = list[key];

        accumulator = iterator.call(context, accumulator, value, key, list);
    }

    return accumulator;
}

/***/ }),

/***/ "dJdD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module containing the functions to serialize and deserialize
 * {SearchParameters} in the query string format
 * @module algoliasearchHelper.url
 */

var shortener = __webpack_require__("y8Tu");
var SearchParameters = __webpack_require__("c9TW");

var qs = __webpack_require__("OFf3");

var bind = __webpack_require__("k93N");
var forEach = __webpack_require__("cTKO");
var pick = __webpack_require__("N5Tq");
var map = __webpack_require__("vGW8");
var mapKeys = __webpack_require__("YLs0");
var mapValues = __webpack_require__("hwYF");
var isString = __webpack_require__("5CkJ");
var isPlainObject = __webpack_require__("ES04");
var isArray = __webpack_require__("p/0c");
var isEmpty = __webpack_require__("BBRi");
var invert = __webpack_require__("m2JM");

var encode = __webpack_require__("HHEV").encode;

function recursiveEncode(input) {
  if (isPlainObject(input)) {
    return mapValues(input, recursiveEncode);
  }
  if (isArray(input)) {
    return map(input, recursiveEncode);
  }
  if (isString(input)) {
    return encode(input);
  }
  return input;
}

var refinementsParameters = ['dFR', 'fR', 'nR', 'hFR', 'tR'];
var stateKeys = shortener.ENCODED_PARAMETERS;
function sortQueryStringValues(prefixRegexp, invertedMapping, a, b) {
  if (prefixRegexp !== null) {
    a = a.replace(prefixRegexp, '');
    b = b.replace(prefixRegexp, '');
  }

  a = invertedMapping[a] || a;
  b = invertedMapping[b] || b;

  if (stateKeys.indexOf(a) !== -1 || stateKeys.indexOf(b) !== -1) {
    if (a === 'q') return -1;
    if (b === 'q') return 1;

    var isARefinements = refinementsParameters.indexOf(a) !== -1;
    var isBRefinements = refinementsParameters.indexOf(b) !== -1;
    if (isARefinements && !isBRefinements) {
      return 1;
    } else if (isBRefinements && !isARefinements) {
      return -1;
    }
  }

  return a.localeCompare(b);
}

/**
 * Read a query string and return an object containing the state
 * @param {string} queryString the query string that will be decoded
 * @param {object} [options] accepted options :
 *   - prefix : the prefix used for the saved attributes, you have to provide the
 *     same that was used for serialization
 *   - mapping : map short attributes to another value e.g. {q: 'query'}
 * @return {object} partial search parameters object (same properties than in the
 * SearchParameters but not exhaustive)
 */
exports.getStateFromQueryString = function (queryString, options) {
  var prefixForParameters = options && options.prefix || '';
  var mapping = options && options.mapping || {};
  var invertedMapping = invert(mapping);

  var partialStateWithPrefix = qs.parse(queryString);
  var prefixRegexp = new RegExp('^' + prefixForParameters);
  var partialState = mapKeys(partialStateWithPrefix, function (v, k) {
    var hasPrefix = prefixForParameters && prefixRegexp.test(k);
    var unprefixedKey = hasPrefix ? k.replace(prefixRegexp, '') : k;
    var decodedKey = shortener.decode(invertedMapping[unprefixedKey] || unprefixedKey);
    return decodedKey || unprefixedKey;
  });

  var partialStateWithParsedNumbers = SearchParameters._parseNumbers(partialState);

  return pick(partialStateWithParsedNumbers, SearchParameters.PARAMETERS);
};

/**
 * Retrieve an object of all the properties that are not understandable as helper
 * parameters.
 * @param {string} queryString the query string to read
 * @param {object} [options] the options
 *   - prefixForParameters : prefix used for the helper configuration keys
 *   - mapping : map short attributes to another value e.g. {q: 'query'}
 * @return {object} the object containing the parsed configuration that doesn't
 * to the helper
 */
exports.getUnrecognizedParametersInQueryString = function (queryString, options) {
  var prefixForParameters = options && options.prefix;
  var mapping = options && options.mapping || {};
  var invertedMapping = invert(mapping);

  var foreignConfig = {};
  var config = qs.parse(queryString);
  if (prefixForParameters) {
    var prefixRegexp = new RegExp('^' + prefixForParameters);
    forEach(config, function (v, key) {
      if (!prefixRegexp.test(key)) foreignConfig[key] = v;
    });
  } else {
    forEach(config, function (v, key) {
      if (!shortener.decode(invertedMapping[key] || key)) foreignConfig[key] = v;
    });
  }

  return foreignConfig;
};

/**
 * Generate a query string for the state passed according to the options
 * @param {SearchParameters} state state to serialize
 * @param {object} [options] May contain the following parameters :
 *  - prefix : prefix in front of the keys
 *  - mapping : map short attributes to another value e.g. {q: 'query'}
 *  - moreAttributes : more values to be added in the query string. Those values
 *    won't be prefixed.
 *  - safe : get safe urls for use in emails, chat apps or any application auto linking urls.
 *  All parameters and values will be encoded in a way that it's safe to share them.
 *  Default to false for legacy reasons ()
 * @return {string} the query string
 */
exports.getQueryStringFromState = function (state, options) {
  var moreAttributes = options && options.moreAttributes;
  var prefixForParameters = options && options.prefix || '';
  var mapping = options && options.mapping || {};
  var safe = options && options.safe || false;
  var invertedMapping = invert(mapping);

  var stateForUrl = safe ? state : recursiveEncode(state);

  var encodedState = mapKeys(stateForUrl, function (v, k) {
    var shortK = shortener.encode(k);
    return prefixForParameters + (mapping[shortK] || shortK);
  });

  var prefixRegexp = prefixForParameters === '' ? null : new RegExp('^' + prefixForParameters);
  var sort = bind(sortQueryStringValues, null, prefixRegexp, invertedMapping);
  if (!isEmpty(moreAttributes)) {
    var stateQs = qs.stringify(encodedState, { encode: safe, sort: sort });
    var moreQs = qs.stringify(moreAttributes, { encode: safe });
    if (!stateQs) return moreQs;
    return stateQs + '&' + moreQs;
  }

  return qs.stringify(encodedState, { encode: safe, sort: sort });
};

/***/ }),

/***/ "dMJY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// For Node.js users, you will get the normal build (no lite)
// For browser users, this will be mapped to src/browser/builds/algoliasearchLite.js
// when used through browserify or webpack (see package.json browser field)
// This is done to ease universal applications (https://github.com/algolia/algoliasearch-client-js/issues/283)

module.exports = __webpack_require__("JMt3");

/***/ }),

/***/ "dRA2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dRuq":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    isObject = __webpack_require__("u9vI");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "dYEM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "daUR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = AlgoliaSearchCore;

var errors = __webpack_require__("QKhG");
var exitPromise = __webpack_require__("nb0e");
var IndexCore = __webpack_require__("ig01");
var store = __webpack_require__("qK61");

// We will always put the API KEY in the JSON body in case of too long API KEY,
// to avoid query string being too long and failing in various conditions (our server limit, browser limit,
// proxies limit)
var MAX_API_KEY_LENGTH = 500;
var RESET_APP_DATA_TIMER = process.env.RESET_APP_DATA_TIMER && parseInt(process.env.RESET_APP_DATA_TIMER, 10) || 60 * 2 * 1000; // after 2 minutes reset to first host

/*
 * Algolia Search library initialization
 * https://www.algolia.com/
 *
 * @param {string} applicationID - Your applicationID, found in your dashboard
 * @param {string} apiKey - Your API key, found in your dashboard
 * @param {Object} [opts]
 * @param {number} [opts.timeout=2000] - The request timeout set in milliseconds,
 * another request will be issued after this timeout
 * @param {string} [opts.protocol='http:'] - The protocol used to query Algolia Search API.
 *                                        Set to 'https:' to force using https.
 *                                        Default to document.location.protocol in browsers
 * @param {Object|Array} [opts.hosts={
 *           read: [this.applicationID + '-dsn.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]),
 *           write: [this.applicationID + '.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]) - The hosts to use for Algolia Search API.
 *           If you provide them, you will less benefit from our HA implementation
 */
function AlgoliaSearchCore(applicationID, apiKey, opts) {
  var debug = __webpack_require__("8NLT")('algoliasearch');

  var clone = __webpack_require__("S7SM");
  var isArray = __webpack_require__("YuqC");
  var map = __webpack_require__("BDy2");

  var usage = 'Usage: algoliasearch(applicationID, apiKey, opts)';

  if (opts._allowEmptyCredentials !== true && !applicationID) {
    throw new errors.AlgoliaSearchError('Please provide an application ID. ' + usage);
  }

  if (opts._allowEmptyCredentials !== true && !apiKey) {
    throw new errors.AlgoliaSearchError('Please provide an API key. ' + usage);
  }

  this.applicationID = applicationID;
  this.apiKey = apiKey;

  this.hosts = {
    read: [],
    write: []
  };

  opts = opts || {};

  var protocol = opts.protocol || 'https:';
  this._timeouts = opts.timeouts || {
    connect: 1 * 1000, // 500ms connect is GPRS latency
    read: 2 * 1000,
    write: 30 * 1000
  };

  // backward compat, if opts.timeout is passed, we use it to configure all timeouts like before
  if (opts.timeout) {
    this._timeouts.connect = this._timeouts.read = this._timeouts.write = opts.timeout;
  }

  // while we advocate for colon-at-the-end values: 'http:' for `opts.protocol`
  // we also accept `http` and `https`. It's a common error.
  if (!/:$/.test(protocol)) {
    protocol = protocol + ':';
  }

  if (opts.protocol !== 'http:' && opts.protocol !== 'https:') {
    throw new errors.AlgoliaSearchError('protocol must be `http:` or `https:` (was `' + opts.protocol + '`)');
  }

  this._checkAppIdData();

  if (!opts.hosts) {
    var defaultHosts = map(this._shuffleResult, function (hostNumber) {
      return applicationID + '-' + hostNumber + '.algolianet.com';
    });

    // no hosts given, compute defaults
    this.hosts.read = [this.applicationID + '-dsn.algolia.net'].concat(defaultHosts);
    this.hosts.write = [this.applicationID + '.algolia.net'].concat(defaultHosts);
  } else if (isArray(opts.hosts)) {
    // when passing custom hosts, we need to have a different host index if the number
    // of write/read hosts are different.
    this.hosts.read = clone(opts.hosts);
    this.hosts.write = clone(opts.hosts);
  } else {
    this.hosts.read = clone(opts.hosts.read);
    this.hosts.write = clone(opts.hosts.write);
  }

  // add protocol and lowercase hosts
  this.hosts.read = map(this.hosts.read, prepareHost(protocol));
  this.hosts.write = map(this.hosts.write, prepareHost(protocol));

  this.extraHeaders = {};

  // In some situations you might want to warm the cache
  this.cache = opts._cache || {};

  this._ua = opts._ua;
  this._useCache = opts._useCache === undefined || opts._cache ? true : opts._useCache;
  this._useFallback = opts.useFallback === undefined ? true : opts.useFallback;

  this._setTimeout = opts._setTimeout;

  debug('init done, %j', this);
}

/*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */
AlgoliaSearchCore.prototype.initIndex = function (indexName) {
  return new IndexCore(this, indexName);
};

/**
* Add an extra field to the HTTP request
*
* @param name the header field name
* @param value the header field value
*/
AlgoliaSearchCore.prototype.setExtraHeader = function (name, value) {
  this.extraHeaders[name.toLowerCase()] = value;
};

/**
* Get the value of an extra HTTP header
*
* @param name the header field name
*/
AlgoliaSearchCore.prototype.getExtraHeader = function (name) {
  return this.extraHeaders[name.toLowerCase()];
};

/**
* Remove an extra field from the HTTP request
*
* @param name the header field name
*/
AlgoliaSearchCore.prototype.unsetExtraHeader = function (name) {
  delete this.extraHeaders[name.toLowerCase()];
};

/**
* Augment sent x-algolia-agent with more data, each agent part
* is automatically separated from the others by a semicolon;
*
* @param algoliaAgent the agent to add
*/
AlgoliaSearchCore.prototype.addAlgoliaAgent = function (algoliaAgent) {
  if (this._ua.indexOf(';' + algoliaAgent) === -1) {
    this._ua += ';' + algoliaAgent;
  }
};

/*
 * Wrapper that try all hosts to maximize the quality of service
 */
AlgoliaSearchCore.prototype._jsonRequest = function (initialOpts) {
  this._checkAppIdData();

  var requestDebug = __webpack_require__("8NLT")('algoliasearch:' + initialOpts.url);

  var body;
  var additionalUA = initialOpts.additionalUA || '';
  var cache = initialOpts.cache;
  var client = this;
  var tries = 0;
  var usingFallback = false;
  var hasFallback = client._useFallback && client._request.fallback && initialOpts.fallback;
  var headers;

  if (this.apiKey.length > MAX_API_KEY_LENGTH && initialOpts.body !== undefined && (initialOpts.body.params !== undefined || // index.search()
  initialOpts.body.requests !== undefined) // client.search()
  ) {
      initialOpts.body.apiKey = this.apiKey;
      headers = this._computeRequestHeaders({
        additionalUA: additionalUA,
        withApiKey: false,
        headers: initialOpts.headers
      });
    } else {
    headers = this._computeRequestHeaders({
      additionalUA: additionalUA,
      headers: initialOpts.headers
    });
  }

  if (initialOpts.body !== undefined) {
    body = safeJSONStringify(initialOpts.body);
  }

  requestDebug('request start');
  var debugData = [];

  function doRequest(requester, reqOpts) {
    client._checkAppIdData();

    var startTime = new Date();
    var cacheID;

    if (client._useCache) {
      cacheID = initialOpts.url;
    }

    // as we sometime use POST requests to pass parameters (like query='aa'),
    // the cacheID must also include the body to be different between calls
    if (client._useCache && body) {
      cacheID += '_body_' + reqOpts.body;
    }

    // handle cache existence
    if (client._useCache && cache && cache[cacheID] !== undefined) {
      requestDebug('serving response from cache');
      return client._promise.resolve(JSON.parse(cache[cacheID]));
    }

    // if we reached max tries
    if (tries >= client.hosts[initialOpts.hostType].length) {
      if (!hasFallback || usingFallback) {
        requestDebug('could not get any response');
        // then stop
        return client._promise.reject(new errors.AlgoliaSearchError('Cannot connect to the AlgoliaSearch API.' + ' Send an email to support@algolia.com to report and resolve the issue.' + ' Application id was: ' + client.applicationID, { debugData: debugData }));
      }

      requestDebug('switching to fallback');

      // let's try the fallback starting from here
      tries = 0;

      // method, url and body are fallback dependent
      reqOpts.method = initialOpts.fallback.method;
      reqOpts.url = initialOpts.fallback.url;
      reqOpts.jsonBody = initialOpts.fallback.body;
      if (reqOpts.jsonBody) {
        reqOpts.body = safeJSONStringify(reqOpts.jsonBody);
      }
      // re-compute headers, they could be omitting the API KEY
      headers = client._computeRequestHeaders({
        additionalUA: additionalUA,
        headers: initialOpts.headers
      });

      reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
      client._setHostIndexByType(0, initialOpts.hostType);
      usingFallback = true; // the current request is now using fallback
      return doRequest(client._request.fallback, reqOpts);
    }

    var currentHost = client._getHostByType(initialOpts.hostType);

    var url = currentHost + reqOpts.url;
    var options = {
      body: reqOpts.body,
      jsonBody: reqOpts.jsonBody,
      method: reqOpts.method,
      headers: headers,
      timeouts: reqOpts.timeouts,
      debug: requestDebug
    };

    requestDebug('method: %s, url: %s, headers: %j, timeouts: %d', options.method, url, options.headers, options.timeouts);

    if (requester === client._request.fallback) {
      requestDebug('using fallback');
    }

    // `requester` is any of this._request or this._request.fallback
    // thus it needs to be called using the client as context
    return requester.call(client, url, options).then(success, tryFallback);

    function success(httpResponse) {
      // compute the status of the response,
      //
      // When in browser mode, using XDR or JSONP, we have no statusCode available
      // So we rely on our API response `status` property.
      // But `waitTask` can set a `status` property which is not the statusCode (it's the task status)
      // So we check if there's a `message` along `status` and it means it's an error
      //
      // That's the only case where we have a response.status that's not the http statusCode
      var status = httpResponse && httpResponse.body && httpResponse.body.message && httpResponse.body.status ||

      // this is important to check the request statusCode AFTER the body eventual
      // statusCode because some implementations (jQuery XDomainRequest transport) may
      // send statusCode 200 while we had an error
      httpResponse.statusCode ||

      // When in browser mode, using XDR or JSONP
      // we default to success when no error (no response.status && response.message)
      // If there was a JSON.parse() error then body is null and it fails
      httpResponse && httpResponse.body && 200;

      requestDebug('received response: statusCode: %s, computed statusCode: %d, headers: %j', httpResponse.statusCode, status, httpResponse.headers);

      var httpResponseOk = Math.floor(status / 100) === 2;

      var endTime = new Date();
      debugData.push({
        currentHost: currentHost,
        headers: removeCredentials(headers),
        content: body || null,
        contentLength: body !== undefined ? body.length : null,
        method: reqOpts.method,
        timeouts: reqOpts.timeouts,
        url: reqOpts.url,
        startTime: startTime,
        endTime: endTime,
        duration: endTime - startTime,
        statusCode: status
      });

      if (httpResponseOk) {
        if (client._useCache && cache) {
          cache[cacheID] = httpResponse.responseText;
        }

        return httpResponse.body;
      }

      var shouldRetry = Math.floor(status / 100) !== 4;

      if (shouldRetry) {
        tries += 1;
        return retryRequest();
      }

      requestDebug('unrecoverable error');

      // no success and no retry => fail
      var unrecoverableError = new errors.AlgoliaSearchError(httpResponse.body && httpResponse.body.message, { debugData: debugData, statusCode: status });

      return client._promise.reject(unrecoverableError);
    }

    function tryFallback(err) {
      // error cases:
      //  While not in fallback mode:
      //    - CORS not supported
      //    - network error
      //  While in fallback mode:
      //    - timeout
      //    - network error
      //    - badly formatted JSONP (script loaded, did not call our callback)
      //  In both cases:
      //    - uncaught exception occurs (TypeError)
      requestDebug('error: %s, stack: %s', err.message, err.stack);

      var endTime = new Date();
      debugData.push({
        currentHost: currentHost,
        headers: removeCredentials(headers),
        content: body || null,
        contentLength: body !== undefined ? body.length : null,
        method: reqOpts.method,
        timeouts: reqOpts.timeouts,
        url: reqOpts.url,
        startTime: startTime,
        endTime: endTime,
        duration: endTime - startTime
      });

      if (!(err instanceof errors.AlgoliaSearchError)) {
        err = new errors.Unknown(err && err.message, err);
      }

      tries += 1;

      // stop the request implementation when:
      if (
      // we did not generate this error,
      // it comes from a throw in some other piece of code
      err instanceof errors.Unknown ||

      // server sent unparsable JSON
      err instanceof errors.UnparsableJSON ||

      // max tries and already using fallback or no fallback
      tries >= client.hosts[initialOpts.hostType].length && (usingFallback || !hasFallback)) {
        // stop request implementation for this command
        err.debugData = debugData;
        return client._promise.reject(err);
      }

      // When a timeout occured, retry by raising timeout
      if (err instanceof errors.RequestTimeout) {
        return retryRequestWithHigherTimeout();
      }

      return retryRequest();
    }

    function retryRequest() {
      requestDebug('retrying request');
      client._incrementHostIndex(initialOpts.hostType);
      return doRequest(requester, reqOpts);
    }

    function retryRequestWithHigherTimeout() {
      requestDebug('retrying request with higher timeout');
      client._incrementHostIndex(initialOpts.hostType);
      client._incrementTimeoutMultipler();
      reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
      return doRequest(requester, reqOpts);
    }
  }

  var promise = doRequest(client._request, {
    url: initialOpts.url,
    method: initialOpts.method,
    body: body,
    jsonBody: initialOpts.body,
    timeouts: client._getTimeoutsForRequest(initialOpts.hostType)
  });

  // either we have a callback
  // either we are using promises
  if (typeof initialOpts.callback === 'function') {
    promise.then(function okCb(content) {
      exitPromise(function () {
        initialOpts.callback(null, content);
      }, client._setTimeout || setTimeout);
    }, function nookCb(err) {
      exitPromise(function () {
        initialOpts.callback(err);
      }, client._setTimeout || setTimeout);
    });
  } else {
    return promise;
  }
};

/*
* Transform search param object in query string
* @param {object} args arguments to add to the current query string
* @param {string} params current query string
* @return {string} the final query string
*/
AlgoliaSearchCore.prototype._getSearchParams = function (args, params) {
  if (args === undefined || args === null) {
    return params;
  }
  for (var key in args) {
    if (key !== null && args[key] !== undefined && args.hasOwnProperty(key)) {
      params += params === '' ? '' : '&';
      params += key + '=' + encodeURIComponent(Object.prototype.toString.call(args[key]) === '[object Array]' ? safeJSONStringify(args[key]) : args[key]);
    }
  }
  return params;
};

/**
 * Compute the headers for a request
 *
 * @param [string] options.additionalUA semi-colon separated string with other user agents to add
 * @param [boolean=true] options.withApiKey Send the api key as a header
 * @param [Object] options.headers Extra headers to send
 */
AlgoliaSearchCore.prototype._computeRequestHeaders = function (options) {
  var forEach = __webpack_require__("Sh+V");

  var ua = options.additionalUA ? this._ua + ';' + options.additionalUA : this._ua;

  var requestHeaders = {
    'x-algolia-agent': ua,
    'x-algolia-application-id': this.applicationID
  };

  // browser will inline headers in the url, node.js will use http headers
  // but in some situations, the API KEY will be too long (big secured API keys)
  // so if the request is a POST and the KEY is very long, we will be asked to not put
  // it into headers but in the JSON body
  if (options.withApiKey !== false) {
    requestHeaders['x-algolia-api-key'] = this.apiKey;
  }

  if (this.userToken) {
    requestHeaders['x-algolia-usertoken'] = this.userToken;
  }

  if (this.securityTags) {
    requestHeaders['x-algolia-tagfilters'] = this.securityTags;
  }

  forEach(this.extraHeaders, function addToRequestHeaders(value, key) {
    requestHeaders[key] = value;
  });

  if (options.headers) {
    forEach(options.headers, function addToRequestHeaders(value, key) {
      requestHeaders[key] = value;
    });
  }

  return requestHeaders;
};

/**
 * Search through multiple indices at the same time
 * @param  {Object[]}   queries  An array of queries you want to run.
 * @param {string} queries[].indexName The index name you want to target
 * @param {string} [queries[].query] The query to issue on this index. Can also be passed into `params`
 * @param {Object} queries[].params Any search param like hitsPerPage, ..
 * @param  {Function} callback Callback to be called
 * @return {Promise|undefined} Returns a promise if no callback given
 */
AlgoliaSearchCore.prototype.search = function (queries, opts, callback) {
  var isArray = __webpack_require__("YuqC");
  var map = __webpack_require__("BDy2");

  var usage = 'Usage: client.search(arrayOfQueries[, callback])';

  if (!isArray(queries)) {
    throw new Error(usage);
  }

  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts === undefined) {
    opts = {};
  }

  var client = this;

  var postObj = {
    requests: map(queries, function prepareRequest(query) {
      var params = '';

      // allow query.query
      // so we are mimicing the index.search(query, params) method
      // {indexName:, query:, params:}
      if (query.query !== undefined) {
        params += 'query=' + encodeURIComponent(query.query);
      }

      return {
        indexName: query.indexName,
        params: client._getSearchParams(query.params, params)
      };
    })
  };

  var JSONPParams = map(postObj.requests, function prepareJSONPParams(request, requestId) {
    return requestId + '=' + encodeURIComponent('/1/indexes/' + encodeURIComponent(request.indexName) + '?' + request.params);
  }).join('&');

  var url = '/1/indexes/*/queries';

  if (opts.strategy !== undefined) {
    url += '?strategy=' + opts.strategy;
  }

  return this._jsonRequest({
    cache: this.cache,
    method: 'POST',
    url: url,
    body: postObj,
    hostType: 'read',
    fallback: {
      method: 'GET',
      url: '/1/indexes/*',
      body: {
        params: JSONPParams
      }
    },
    callback: callback
  });
};

/**
 * Set the extra security tagFilters header
 * @param {string|array} tags The list of tags defining the current security filters
 */
AlgoliaSearchCore.prototype.setSecurityTags = function (tags) {
  if (Object.prototype.toString.call(tags) === '[object Array]') {
    var strTags = [];
    for (var i = 0; i < tags.length; ++i) {
      if (Object.prototype.toString.call(tags[i]) === '[object Array]') {
        var oredTags = [];
        for (var j = 0; j < tags[i].length; ++j) {
          oredTags.push(tags[i][j]);
        }
        strTags.push('(' + oredTags.join(',') + ')');
      } else {
        strTags.push(tags[i]);
      }
    }
    tags = strTags.join(',');
  }

  this.securityTags = tags;
};

/**
 * Set the extra user token header
 * @param {string} userToken The token identifying a uniq user (used to apply rate limits)
 */
AlgoliaSearchCore.prototype.setUserToken = function (userToken) {
  this.userToken = userToken;
};

/**
 * Clear all queries in client's cache
 * @return undefined
 */
AlgoliaSearchCore.prototype.clearCache = function () {
  this.cache = {};
};

/**
* Set the number of milliseconds a request can take before automatically being terminated.
* @deprecated
* @param {Number} milliseconds
*/
AlgoliaSearchCore.prototype.setRequestTimeout = function (milliseconds) {
  if (milliseconds) {
    this._timeouts.connect = this._timeouts.read = this._timeouts.write = milliseconds;
  }
};

/**
* Set the three different (connect, read, write) timeouts to be used when requesting
* @param {Object} timeouts
*/
AlgoliaSearchCore.prototype.setTimeouts = function (timeouts) {
  this._timeouts = timeouts;
};

/**
* Get the three different (connect, read, write) timeouts to be used when requesting
* @param {Object} timeouts
*/
AlgoliaSearchCore.prototype.getTimeouts = function () {
  return this._timeouts;
};

AlgoliaSearchCore.prototype._getAppIdData = function () {
  var data = store.get(this.applicationID);
  if (data !== null) this._cacheAppIdData(data);
  return data;
};

AlgoliaSearchCore.prototype._setAppIdData = function (data) {
  data.lastChange = new Date().getTime();
  this._cacheAppIdData(data);
  return store.set(this.applicationID, data);
};

AlgoliaSearchCore.prototype._checkAppIdData = function () {
  var data = this._getAppIdData();
  var now = new Date().getTime();
  if (data === null || now - data.lastChange > RESET_APP_DATA_TIMER) {
    return this._resetInitialAppIdData(data);
  }

  return data;
};

AlgoliaSearchCore.prototype._resetInitialAppIdData = function (data) {
  var newData = data || {};
  newData.hostIndexes = { read: 0, write: 0 };
  newData.timeoutMultiplier = 1;
  newData.shuffleResult = newData.shuffleResult || shuffle([1, 2, 3]);
  return this._setAppIdData(newData);
};

AlgoliaSearchCore.prototype._cacheAppIdData = function (data) {
  this._hostIndexes = data.hostIndexes;
  this._timeoutMultiplier = data.timeoutMultiplier;
  this._shuffleResult = data.shuffleResult;
};

AlgoliaSearchCore.prototype._partialAppIdDataUpdate = function (newData) {
  var foreach = __webpack_require__("Sh+V");
  var currentData = this._getAppIdData();
  foreach(newData, function (value, key) {
    currentData[key] = value;
  });

  return this._setAppIdData(currentData);
};

AlgoliaSearchCore.prototype._getHostByType = function (hostType) {
  return this.hosts[hostType][this._getHostIndexByType(hostType)];
};

AlgoliaSearchCore.prototype._getTimeoutMultiplier = function () {
  return this._timeoutMultiplier;
};

AlgoliaSearchCore.prototype._getHostIndexByType = function (hostType) {
  return this._hostIndexes[hostType];
};

AlgoliaSearchCore.prototype._setHostIndexByType = function (hostIndex, hostType) {
  var clone = __webpack_require__("S7SM");
  var newHostIndexes = clone(this._hostIndexes);
  newHostIndexes[hostType] = hostIndex;
  this._partialAppIdDataUpdate({ hostIndexes: newHostIndexes });
  return hostIndex;
};

AlgoliaSearchCore.prototype._incrementHostIndex = function (hostType) {
  return this._setHostIndexByType((this._getHostIndexByType(hostType) + 1) % this.hosts[hostType].length, hostType);
};

AlgoliaSearchCore.prototype._incrementTimeoutMultipler = function () {
  var timeoutMultiplier = Math.max(this._timeoutMultiplier + 1, 4);
  return this._partialAppIdDataUpdate({ timeoutMultiplier: timeoutMultiplier });
};

AlgoliaSearchCore.prototype._getTimeoutsForRequest = function (hostType) {
  return {
    connect: this._timeouts.connect * this._timeoutMultiplier,
    complete: this._timeouts[hostType] * this._timeoutMultiplier
  };
};

function prepareHost(protocol) {
  return function prepare(host) {
    return protocol + '//' + host.toLowerCase();
  };
}

// Prototype.js < 1.7, a widely used library, defines a weird
// Array.prototype.toJSON function that will fail to stringify our content
// appropriately
// refs:
//   - https://groups.google.com/forum/#!topic/prototype-core/E-SAVvV_V9Q
//   - https://github.com/sstephenson/prototype/commit/038a2985a70593c1a86c230fadbdfe2e4898a48c
//   - http://stackoverflow.com/a/3148441/147079
function safeJSONStringify(obj) {
  /* eslint no-extend-native:0 */

  if (Array.prototype.toJSON === undefined) {
    return JSON.stringify(obj);
  }

  var toJSON = Array.prototype.toJSON;
  delete Array.prototype.toJSON;
  var out = JSON.stringify(obj);
  Array.prototype.toJSON = toJSON;

  return out;
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function removeCredentials(headers) {
  var newHeaders = {};

  for (var headerName in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
      var value;

      if (headerName === 'x-algolia-api-key' || headerName === 'x-algolia-application-id') {
        value = '**hidden for security purposes**';
      } else {
        value = headers[headerName];
      }

      newHeaders[headerName] = value;
    }
  }

  return newHeaders;
}

/***/ }),

/***/ "dhxR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jsonpRequest;

var errors = __webpack_require__("QKhG");

var JSONPCounter = 0;

function jsonpRequest(url, opts, cb) {
  if (opts.method !== 'GET') {
    cb(new Error('Method ' + opts.method + ' ' + url + ' is not supported by JSONP.'));
    return;
  }

  opts.debug('JSONP: start');

  var cbCalled = false;
  var timedOut = false;

  JSONPCounter += 1;
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  var cbName = 'algoliaJSONP_' + JSONPCounter;
  var done = false;

  window[cbName] = function (data) {
    removeGlobals();

    if (timedOut) {
      opts.debug('JSONP: Late answer, ignoring');
      return;
    }

    cbCalled = true;

    clean();

    cb(null, {
      body: data /* ,
                 // We do not send the statusCode, there's no statusCode in JSONP, it will be
                 // computed using data.status && data.message like with XDR
                 statusCode*/
    });
  };

  // add callback by hand
  url += '&callback=' + cbName;

  // add body params manually
  if (opts.jsonBody && opts.jsonBody.params) {
    url += '&' + opts.jsonBody.params;
  }

  var ontimeout = setTimeout(timeout, opts.timeouts.complete);

  // script onreadystatechange needed only for
  // <= IE8
  // https://github.com/angular/angular.js/issues/4523
  script.onreadystatechange = readystatechange;
  script.onload = success;
  script.onerror = error;

  script.async = true;
  script.defer = true;
  script.src = url;
  head.appendChild(script);

  function success() {
    opts.debug('JSONP: success');

    if (done || timedOut) {
      return;
    }

    done = true;

    // script loaded but did not call the fn => script loading error
    if (!cbCalled) {
      opts.debug('JSONP: Fail. Script loaded but did not call the callback');
      clean();
      cb(new errors.JSONPScriptFail());
    }
  }

  function readystatechange() {
    if (this.readyState === 'loaded' || this.readyState === 'complete') {
      success();
    }
  }

  function clean() {
    clearTimeout(ontimeout);
    script.onload = null;
    script.onreadystatechange = null;
    script.onerror = null;
    head.removeChild(script);
  }

  function removeGlobals() {
    try {
      delete window[cbName];
      delete window[cbName + '_loaded'];
    } catch (e) {
      window[cbName] = window[cbName + '_loaded'] = undefined;
    }
  }

  function timeout() {
    opts.debug('JSONP: Script timeout');
    timedOut = true;
    clean();
    cb(new errors.RequestTimeout());
  }

  function error() {
    opts.debug('JSONP: Script error');

    if (done || timedOut) {
      return;
    }

    clean();
    cb(new errors.JSONPScriptError());
  }
}

/***/ }),

/***/ "dtkN":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("p/s9"),
    baseAssignValue = __webpack_require__("d05+");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "e5TX":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("wppe"),
    getRawTag = __webpack_require__("uiOY"),
    objectToString = __webpack_require__("lPmd");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "eFjB":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("dtkN"),
    keys = __webpack_require__("HI10");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ "eRa2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ei3g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * refer:
 *   * @atimb "Real keep-alive HTTP agent": https://gist.github.com/2963672
 *   * https://github.com/joyent/node/blob/master/lib/http.js
 *   * https://github.com/joyent/node/blob/master/lib/https.js
 *   * https://github.com/joyent/node/blob/master/lib/_http_agent.js
 *
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * Copyright(c) node-modules
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var https = __webpack_require__("XgVs");
var utils = __webpack_require__("EPjK");
var OriginalAgent = __webpack_require__("QEUV").Agent;
var OriginalHttpsAgent = https.Agent;

module.exports = Agent;

function Agent(options) {
  if (!(this instanceof Agent)) {
    return new Agent(options);
  }

  options = options || {};
  options.keepAlive = options.keepAlive !== false;
  // default is keep-alive and 15s free socket timeout
  if (options.keepAliveTimeout === undefined) {
    options.keepAliveTimeout = 15000;
  }
  // default timeout is double keepalive timeout
  if (options.timeout === undefined) {
    options.timeout = options.keepAliveTimeout * 2;
  }

  OriginalAgent.call(this, options);

  var self = this;
  self.createSocketCount = 0;
  self.closeSocketCount = 0;
  // socket error event count
  self.errorSocketCount = 0;
  self.requestCount = 0;
  self.timeoutSocketCount = 0;
  self.on('free', function () {
    self.requestCount++;
  });
  self.on('timeout', function () {
    self.timeoutSocketCount++;
  });
  self.on('close', function () {
    self.closeSocketCount++;
  });
  self.on('error', function () {
    self.errorSocketCount++;
  });
}

utils.inherits(Agent, OriginalAgent);

Agent.prototype.createSocket = function (req, options) {
  var socket = OriginalAgent.prototype.createSocket.call(this, req, options);
  if (this.keepAlive) {
    // Disable Nagle's algorithm: http://blog.caustik.com/2012/04/08/scaling-node-js-to-100k-concurrent-connections/
    // http://fengmk2.com/benchmark/nagle-algorithm-delayed-ack-mock.html
    socket.setNoDelay(true);
  }
  this.createSocketCount++;
  return socket;
};

Agent.prototype.getCurrentStatus = function () {
  return {
    createSocketCount: this.createSocketCount,
    closeSocketCount: this.closeSocketCount,
    errorSocketCount: this.errorSocketCount,
    timeoutSocketCount: this.timeoutSocketCount,
    requestCount: this.requestCount,
    freeSockets: inspect(this.freeSockets),
    sockets: inspect(this.sockets),
    requests: inspect(this.requests)
  };
};

function inspect(obj) {
  var res = {};
  for (var key in obj) {
    res[key] = obj[key].length;
  }
  return res;
}

/***/ }),

/***/ "epkN":
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ "f4Fl":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("Jpv1"),
    overRest = __webpack_require__("qXFa"),
    setToString = __webpack_require__("KRxT");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "f7dW":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ "fF0A":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */

var isUndefined = __webpack_require__("Sysa");
var isString = __webpack_require__("5CkJ");
var isFunction = __webpack_require__("dRuq");
var isEmpty = __webpack_require__("BBRi");
var defaults = __webpack_require__("mpS4");

var reduce = __webpack_require__("bxLG");
var filter = __webpack_require__("FnLS");
var omit = __webpack_require__("J2GV");

var lib = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function addRefinement(refinementList, attribute, value) {
    if (lib.isRefined(refinementList, attribute, value)) {
      return refinementList;
    }

    var valueAsString = '' + value;

    var facetRefinement = !refinementList[attribute] ? [valueAsString] : refinementList[attribute].concat(valueAsString);

    var mod = {};

    mod[attribute] = facetRefinement;

    return defaults({}, mod, refinementList);
  },
  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function removeRefinement(refinementList, attribute, value) {
    if (isUndefined(value)) {
      return lib.clearRefinement(refinementList, attribute);
    }

    var valueAsString = '' + value;

    return lib.clearRefinement(refinementList, function (v, f) {
      return attribute === f && valueAsString === v;
    });
  },
  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
    if (isUndefined(value)) throw new Error('toggleRefinement should be used with a value');

    if (lib.isRefined(refinementList, attribute, value)) {
      return lib.removeRefinement(refinementList, attribute, value);
    }

    return lib.addRefinement(refinementList, attribute, value);
  },
  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
    if (isUndefined(attribute)) {
      if (isEmpty(refinementList)) return refinementList;
      return {};
    } else if (isString(attribute)) {
      if (isEmpty(refinementList[attribute])) return refinementList;
      return omit(refinementList, attribute);
    } else if (isFunction(attribute)) {
      var hasChanged = false;

      var newRefinementList = reduce(refinementList, function (memo, values, key) {
        var facetList = filter(values, function (value) {
          return !attribute(value, key, refinementType);
        });

        if (!isEmpty(facetList)) {
          if (facetList.length !== values.length) hasChanged = true;
          memo[key] = facetList;
        } else hasChanged = true;

        return memo;
      }, {});

      if (hasChanged) return newRefinementList;
      return refinementList;
    }
  },
  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */
  isRefined: function isRefined(refinementList, attribute, refinementValue) {
    var indexOf = __webpack_require__("YCGE");

    var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;

    if (isUndefined(refinementValue) || !containsRefinements) {
      return containsRefinements;
    }

    var refinementValueAsString = '' + refinementValue;

    return indexOf(refinementList[attribute], refinementValueAsString) !== -1;
  }
};

module.exports = lib;

/***/ }),

/***/ "fLfT":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),

/***/ "fwYF":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xk23"),
    Map = __webpack_require__("K9uV"),
    MapCache = __webpack_require__("wtMJ");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "fy20":
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "g55O":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),

/***/ "gHkb":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "gTE+":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),

/***/ "gY/y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef75103cd855a2e3597ec9571f9d7e65.png";

/***/ }),

/***/ "ga8q":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("u9vI");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "gmQJ":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("f4Fl"),
    isIterateeCall = __webpack_require__("R62e");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "h0zV":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("yEjJ");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "hClK":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("FTXF");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "hDNm":
/***/ (function(module, exports, __webpack_require__) {

var baseInverter = __webpack_require__("CTp0");

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function (object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;

/***/ }),

/***/ "hgJw":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

/***/ }),

/***/ "hjtK":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;

/***/ }),

/***/ "hmcW":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("49I8"),
    baseIsEqual = __webpack_require__("iKxp");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

/***/ }),

/***/ "hwYF":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("d05+"),
    baseForOwn = __webpack_require__("xqjy"),
    baseIteratee = __webpack_require__("lW7l");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function (value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;

/***/ }),

/***/ "iEGD":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("dRuq"),
    isMasked = __webpack_require__("1qpN"),
    isObject = __webpack_require__("u9vI"),
    toSource = __webpack_require__("g55O");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "iKxp":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("6ykg"),
    isObjectLike = __webpack_require__("OuyB");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ "iS0Z":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("u9vI"),
    isSymbol = __webpack_require__("bgO7");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "ig01":
/***/ (function(module, exports, __webpack_require__) {

var buildSearchMethod = __webpack_require__("Yu17");
var deprecate = __webpack_require__("F888");
var deprecatedMessage = __webpack_require__("8OXg");

module.exports = IndexCore;

/*
* Index class constructor.
* You should not use this method directly but use initIndex() function
*/
function IndexCore(algoliasearch, indexName) {
  this.indexName = indexName;
  this.as = algoliasearch;
  this.typeAheadArgs = null;
  this.typeAheadValueOption = null;

  // make sure every index instance has it's own cache
  this.cache = {};
}

/*
* Clear all queries in cache
*/
IndexCore.prototype.clearCache = function () {
  this.cache = {};
};

/*
* Search inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the full text query
* @param {object} [args] (optional) if set, contains an object with query parameters:
* - page: (integer) Pagination parameter used to select the page to retrieve.
*                   Page is zero-based and defaults to 0. Thus,
*                   to retrieve the 10th page you need to set page=9
* - hitsPerPage: (integer) Pagination parameter used to select the number of hits per page. Defaults to 20.
* - attributesToRetrieve: a string that contains the list of object attributes
* you want to retrieve (let you minimize the answer size).
*   Attributes are separated with a comma (for example "name,address").
*   You can also use an array (for example ["name","address"]).
*   By default, all attributes are retrieved. You can also use '*' to retrieve all
*   values when an attributesToRetrieve setting is specified for your index.
* - attributesToHighlight: a string that contains the list of attributes you
*   want to highlight according to the query.
*   Attributes are separated by a comma. You can also use an array (for example ["name","address"]).
*   If an attribute has no match for the query, the raw value is returned.
*   By default all indexed text attributes are highlighted.
*   You can use `*` if you want to highlight all textual attributes.
*   Numerical attributes are not highlighted.
*   A matchLevel is returned for each highlighted attribute and can contain:
*      - full: if all the query terms were found in the attribute,
*      - partial: if only some of the query terms were found,
*      - none: if none of the query terms were found.
* - attributesToSnippet: a string that contains the list of attributes to snippet alongside
* the number of words to return (syntax is `attributeName:nbWords`).
*    Attributes are separated by a comma (Example: attributesToSnippet=name:10,content:10).
*    You can also use an array (Example: attributesToSnippet: ['name:10','content:10']).
*    By default no snippet is computed.
* - minWordSizefor1Typo: the minimum number of characters in a query word to accept one typo in this word.
* Defaults to 3.
* - minWordSizefor2Typos: the minimum number of characters in a query word
* to accept two typos in this word. Defaults to 7.
* - getRankingInfo: if set to 1, the result hits will contain ranking
* information in _rankingInfo attribute.
* - aroundLatLng: search for entries around a given
* latitude/longitude (specified as two floats separated by a comma).
*   For example aroundLatLng=47.316669,5.016670).
*   You can specify the maximum distance in meters with the aroundRadius parameter (in meters)
*   and the precision for ranking with aroundPrecision
*   (for example if you set aroundPrecision=100, two objects that are distant of
*   less than 100m will be considered as identical for "geo" ranking parameter).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - insideBoundingBox: search entries inside a given area defined by the two extreme points
* of a rectangle (defined by 4 floats: p1Lat,p1Lng,p2Lat,p2Lng).
*   For example insideBoundingBox=47.3165,4.9665,47.3424,5.0201).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - numericFilters: a string that contains the list of numeric filters you want to
* apply separated by a comma.
*   The syntax of one filter is `attributeName` followed by `operand` followed by `value`.
*   Supported operands are `<`, `<=`, `=`, `>` and `>=`.
*   You can have multiple conditions on one attribute like for example numericFilters=price>100,price<1000.
*   You can also use an array (for example numericFilters: ["price>100","price<1000"]).
* - tagFilters: filter the query by a set of tags. You can AND tags by separating them by commas.
*   To OR tags, you must add parentheses. For example, tags=tag1,(tag2,tag3) means tag1 AND (tag2 OR tag3).
*   You can also use an array, for example tagFilters: ["tag1",["tag2","tag3"]]
*   means tag1 AND (tag2 OR tag3).
*   At indexing, tags should be added in the _tags** attribute
*   of objects (for example {"_tags":["tag1","tag2"]}).
* - facetFilters: filter the query by a list of facets.
*   Facets are separated by commas and each facet is encoded as `attributeName:value`.
*   For example: `facetFilters=category:Book,author:John%20Doe`.
*   You can also use an array (for example `["category:Book","author:John%20Doe"]`).
* - facets: List of object attributes that you want to use for faceting.
*   Comma separated list: `"category,author"` or array `['category','author']`
*   Only attributes that have been added in **attributesForFaceting** index setting
*   can be used in this parameter.
*   You can also use `*` to perform faceting on all attributes specified in **attributesForFaceting**.
* - queryType: select how the query words are interpreted, it can be one of the following value:
*    - prefixAll: all query words are interpreted as prefixes,
*    - prefixLast: only the last word is interpreted as a prefix (default behavior),
*    - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - optionalWords: a string that contains the list of words that should
* be considered as optional when found in the query.
*   Comma separated and array are accepted.
* - distinct: If set to 1, enable the distinct feature (disabled by default)
* if the attributeForDistinct index setting is set.
*   This feature is similar to the SQL "distinct" keyword: when enabled
*   in a query with the distinct=1 parameter,
*   all hits containing a duplicate value for the attributeForDistinct attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best
*   one is kept and others are removed.
* - restrictSearchableAttributes: List of attributes you want to use for
* textual search (must be a subset of the attributesToIndex index setting)
* either comma separated or as an array
* @param {function} [callback] the result callback called with two arguments:
*  error: null or Error('message'). If false, the content contains the error.
*  content: the server answer that contains the list of results.
*/
IndexCore.prototype.search = buildSearchMethod('query');

/*
* -- BETA --
* Search a record similar to the query inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the similar query
* @param {object} [args] (optional) if set, contains an object with query parameters.
*   All search parameters are supported (see search function), restrictSearchableAttributes and facetFilters
*   are the two most useful to restrict the similar results and get more relevant content
*/
IndexCore.prototype.similarSearch = buildSearchMethod('similarQuery');

/*
* Browse index content. The response content will have a `cursor` property that you can use
* to browse subsequent pages for this query. Use `index.browseFrom(cursor)` when you want.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browse('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* }, callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/
IndexCore.prototype.browse = function (query, queryParameters, callback) {
  var merge = __webpack_require__("MuiK");

  var indexObj = this;

  var page;
  var hitsPerPage;

  // we check variadic calls that are not the one defined
  // .browse()/.browse(fn)
  // => page = 0
  if (arguments.length === 0 || arguments.length === 1 && typeof arguments[0] === 'function') {
    page = 0;
    callback = arguments[0];
    query = undefined;
  } else if (typeof arguments[0] === 'number') {
    // .browse(2)/.browse(2, 10)/.browse(2, fn)/.browse(2, 10, fn)
    page = arguments[0];
    if (typeof arguments[1] === 'number') {
      hitsPerPage = arguments[1];
    } else if (typeof arguments[1] === 'function') {
      callback = arguments[1];
      hitsPerPage = undefined;
    }
    query = undefined;
    queryParameters = undefined;
  } else if (typeof arguments[0] === 'object') {
    // .browse(queryParameters)/.browse(queryParameters, cb)
    if (typeof arguments[1] === 'function') {
      callback = arguments[1];
    }
    queryParameters = arguments[0];
    query = undefined;
  } else if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
    // .browse(query, cb)
    callback = arguments[1];
    queryParameters = undefined;
  }

  // otherwise it's a .browse(query)/.browse(query, queryParameters)/.browse(query, queryParameters, cb)

  // get search query parameters combining various possible calls
  // to .browse();
  queryParameters = merge({}, queryParameters || {}, {
    page: page,
    hitsPerPage: hitsPerPage,
    query: query
  });

  var params = this.as._getSearchParams(queryParameters, '');

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/browse',
    body: { params: params },
    hostType: 'read',
    callback: callback
  });
};

/*
* Continue browsing from a previous position (cursor), obtained via a call to `.browse()`.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browseFrom('14lkfsakl32', callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/
IndexCore.prototype.browseFrom = function (cursor, callback) {
  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/browse',
    body: { cursor: cursor },
    hostType: 'read',
    callback: callback
  });
};

/*
* Search for facet values
* https://www.algolia.com/doc/rest-api/search#search-for-facet-values
*
* @param {string} params.facetName Facet name, name of the attribute to search for values in.
* Must be declared as a facet
* @param {string} params.facetQuery Query for the facet search
* @param {string} [params.*] Any search parameter of Algolia,
* see https://www.algolia.com/doc/api-client/javascript/search#search-parameters
* Pagination is not supported. The page and hitsPerPage parameters will be ignored.
* @param callback (optional)
*/
IndexCore.prototype.searchForFacetValues = function (params, callback) {
  var clone = __webpack_require__("S7SM");
  var omit = __webpack_require__("8q90");
  var usage = 'Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])';

  if (params.facetName === undefined || params.facetQuery === undefined) {
    throw new Error(usage);
  }

  var facetName = params.facetName;
  var filteredParams = omit(clone(params), function (keyName) {
    return keyName === 'facetName';
  });
  var searchParameters = this.as._getSearchParams(filteredParams, '');

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/facets/' + encodeURIComponent(facetName) + '/query',
    hostType: 'read',
    body: { params: searchParameters },
    callback: callback
  });
};

IndexCore.prototype.searchFacet = deprecate(function (params, callback) {
  return this.searchForFacetValues(params, callback);
}, deprecatedMessage('index.searchFacet(params[, callback])', 'index.searchForFacetValues(params[, callback])'));

IndexCore.prototype._search = function (params, url, callback, additionalUA) {
  return this.as._jsonRequest({
    cache: this.cache,
    method: 'POST',
    url: url || '/1/indexes/' + encodeURIComponent(this.indexName) + '/query',
    body: { params: params },
    hostType: 'read',
    fallback: {
      method: 'GET',
      url: '/1/indexes/' + encodeURIComponent(this.indexName),
      body: { params: params }
    },
    callback: callback,
    additionalUA: additionalUA
  });
};

/*
* Get an object from this index
*
* @param objectID the unique identifier of the object to retrieve
* @param attrs (optional) if set, contains the array of attribute names to retrieve
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the object to retrieve or the error message if a failure occured
*/
IndexCore.prototype.getObject = function (objectID, attrs, callback) {
  var indexObj = this;

  if (arguments.length === 1 || typeof attrs === 'function') {
    callback = attrs;
    attrs = undefined;
  }

  var params = '';
  if (attrs !== undefined) {
    params = '?attributes=';
    for (var i = 0; i < attrs.length; ++i) {
      if (i !== 0) {
        params += ',';
      }
      params += attrs[i];
    }
  }

  return this.as._jsonRequest({
    method: 'GET',
    url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(objectID) + params,
    hostType: 'read',
    callback: callback
  });
};

/*
* Get several objects from this index
*
* @param objectIDs the array of unique identifier of objects to retrieve
*/
IndexCore.prototype.getObjects = function (objectIDs, attributesToRetrieve, callback) {
  var isArray = __webpack_require__("YuqC");
  var map = __webpack_require__("BDy2");

  var usage = 'Usage: index.getObjects(arrayOfObjectIDs[, callback])';

  if (!isArray(objectIDs)) {
    throw new Error(usage);
  }

  var indexObj = this;

  if (arguments.length === 1 || typeof attributesToRetrieve === 'function') {
    callback = attributesToRetrieve;
    attributesToRetrieve = undefined;
  }

  var body = {
    requests: map(objectIDs, function prepareRequest(objectID) {
      var request = {
        indexName: indexObj.indexName,
        objectID: objectID
      };

      if (attributesToRetrieve) {
        request.attributesToRetrieve = attributesToRetrieve.join(',');
      }

      return request;
    })
  };

  return this.as._jsonRequest({
    method: 'POST',
    url: '/1/indexes/*/objects',
    hostType: 'read',
    body: body,
    callback: callback
  });
};

IndexCore.prototype.as = null;
IndexCore.prototype.indexName = null;
IndexCore.prototype.typeAheadArgs = null;
IndexCore.prototype.typeAheadValueOption = null;

/***/ }),

/***/ "ivZO":
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;

/***/ }),

/***/ "iyC2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("MIhM"),
    stubFalse = __webpack_require__("PYZb");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "j3D9":
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/***/ }),

/***/ "jE9R":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("yeiR");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ }),

/***/ "jHmP":
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__("WdKa"),
    getData = __webpack_require__("bSg1"),
    getFuncName = __webpack_require__("ckhT"),
    lodash = __webpack_require__("xe3X");

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;

/***/ }),

/***/ "jXAN":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("zb3a");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "jXGU":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("2Axb");

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ }),

/***/ "jcLW":
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("y5CM");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),

/***/ "jf/K":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("Jpv1"),
    metaMap = __webpack_require__("+9qO");

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function (func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;

/***/ }),

/***/ "jsYr":
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__("yx+S"),
    insertWrapDetails = __webpack_require__("px7f"),
    setToString = __webpack_require__("KRxT"),
    updateWrapDetails = __webpack_require__("VPfA");

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + '';
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;

/***/ }),

/***/ "jskC":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ "k93N":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("f4Fl"),
    createWrap = __webpack_require__("0a/Y"),
    getHolder = __webpack_require__("coim"),
    replaceHolders = __webpack_require__("bU1I");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function (func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;

/***/ }),

/***/ "kAdy":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("bViC");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "kwIb":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("2L2L"),
    baseUnary = __webpack_require__("PnXa"),
    nodeUtil = __webpack_require__("PBPf");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),

/***/ "l/4E":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("Vhgk"),
    getSymbolsIn = __webpack_require__("6q/8"),
    keysIn = __webpack_require__("+UAC");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ "l0ul":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;

/***/ }),

/***/ "l262":
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "lBq7":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("C8N4"),
    ListCache = __webpack_require__("Xk23"),
    Map = __webpack_require__("K9uV");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "lPmd":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "lW7l":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("s6cN"),
    baseMatchesProperty = __webpack_require__("zCYT"),
    identity = __webpack_require__("Jpv1"),
    isArray = __webpack_require__("p/0c"),
    property = __webpack_require__("mWmH");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

/***/ }),

/***/ "low7":
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;

/***/ }),

/***/ "m+0x":
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__("jHmP"),
    setData = __webpack_require__("n4Xl"),
    setWrapToString = __webpack_require__("jsYr");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;

/***/ }),

/***/ "m2JM":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("WMV8"),
    createInverter = __webpack_require__("hDNm"),
    identity = __webpack_require__("Jpv1");

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function (result, value, key) {
  result[value] = key;
}, constant(identity));

module.exports = invert;

/***/ }),

/***/ "mAMs":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("zb3a"),
    cloneDataView = __webpack_require__("aWGB"),
    cloneMap = __webpack_require__("T3Ap"),
    cloneRegExp = __webpack_require__("jskC"),
    cloneSet = __webpack_require__("skla"),
    cloneSymbol = __webpack_require__("WLsS"),
    cloneTypedArray = __webpack_require__("jXAN");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ "mBEK":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("Ro2m");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;

/***/ }),

/***/ "mFpP":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("uf6I");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ "mJWJ":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("f4Fl"),
    createWrap = __webpack_require__("0a/Y"),
    getHolder = __webpack_require__("coim"),
    replaceHolders = __webpack_require__("bU1I");

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * This method is like `_.partial` except that partially applied arguments
 * are appended to the arguments it receives.
 *
 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var greetFred = _.partialRight(greet, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 *
 * // Partially applied with placeholders.
 * var sayHelloTo = _.partialRight(greet, 'hello', _);
 * sayHelloTo('fred');
 * // => 'hello fred'
 */
var partialRight = baseRest(function (func, partials) {
  var holders = replaceHolders(partials, getHolder(partialRight));
  return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partialRight.placeholder = {};

module.exports = partialRight;

/***/ }),

/***/ "mT5u":
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;

/***/ }),

/***/ "mV+j":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("p/s9"),
    castPath = __webpack_require__("Tnr5"),
    isIndex = __webpack_require__("A+gr"),
    isObject = __webpack_require__("u9vI"),
    toKey = __webpack_require__("RQ0L");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;

/***/ }),

/***/ "mWmH":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("wcxQ"),
    basePropertyDeep = __webpack_require__("jE9R"),
    isKey = __webpack_require__("2ibm"),
    toKey = __webpack_require__("RQ0L");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

/***/ }),

/***/ "mdM2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function RFC1738(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function RFC3986(value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

/***/ }),

/***/ "mduf":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("oVe7");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

/***/ }),

/***/ "mpS4":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("a+zQ"),
    assignInWith = __webpack_require__("KIzM"),
    baseRest = __webpack_require__("f4Fl"),
    customDefaultsAssignIn = __webpack_require__("OYyI");

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function (args) {
  args.push(undefined, customDefaultsAssignIn);
  return apply(assignInWith, undefined, args);
});

module.exports = defaults;

/***/ }),

/***/ "mqk9":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("lW7l"),
    baseSum = __webpack_require__("3tMo");

/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
    return array && array.length ? baseSum(array, baseIteratee(iteratee, 2)) : 0;
}

module.exports = sumBy;

/***/ }),

/***/ "n3ha":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseAlgoliaClientVersion(agent) {
  var parsed = agent.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);
  if (parsed) return [parsed[1], parsed[2], parsed[3]];
  return undefined;
};

/***/ }),

/***/ "n4Xl":
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__("jf/K"),
    shortOut = __webpack_require__("2NNl");

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;

/***/ }),

/***/ "nDR6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__("udZ4");

var css = {
  wrapper: {
    position: 'relative',
    display: 'inline-block'
  },
  hint: {
    position: 'absolute',
    top: '0',
    left: '0',
    borderColor: 'transparent',
    boxShadow: 'none',
    // #741: fix hint opacity issue on iOS
    opacity: '1'
  },
  input: {
    position: 'relative',
    verticalAlign: 'top',
    backgroundColor: 'transparent'
  },
  inputWithNoHint: {
    position: 'relative',
    verticalAlign: 'top'
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    zIndex: '100',
    display: 'none'
  },
  suggestions: {
    display: 'block'
  },
  suggestion: {
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  suggestionChild: {
    whiteSpace: 'normal'
  },
  ltr: {
    left: '0',
    right: 'auto'
  },
  rtl: {
    left: 'auto',
    right: '0'
  },
  defaultClasses: {
    root: 'algolia-autocomplete',
    prefix: 'aa',
    noPrefix: false,
    dropdownMenu: 'dropdown-menu',
    input: 'input',
    hint: 'hint',
    suggestions: 'suggestions',
    suggestion: 'suggestion',
    cursor: 'cursor',
    dataset: 'dataset',
    empty: 'empty'
  },
  // will be merged with the default ones if appendTo is used
  appendTo: {
    wrapper: {
      position: 'absolute',
      zIndex: '100',
      display: 'none'
    },
    input: {},
    inputWithNoHint: {},
    dropdown: {
      display: 'block'
    }
  }
};

// ie specific styling
if (_.isMsie()) {
  // ie6-8 (and 9?) doesn't fire hover and click events for elements with
  // transparent backgrounds, for a workaround, use 1x1 transparent gif
  _.mixin(css.input, {
    backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
  });
}

// ie7 and under specific styling
if (_.isMsie() && _.isMsie() <= 7) {
  // if someone can tell me why this is necessary to align
  // the hint with the query in ie7, i'll send you $5 - @JakeHarding
  _.mixin(css.input, { marginTop: '-1px' });
}

module.exports = css;

/***/ }),

/***/ "nHhQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dba357bfbba455428787fefc655ce120.svg";

/***/ }),

/***/ "nb0e":
/***/ (function(module, exports) {

// Parse cloud does not supports setTimeout
// We do not store a setTimeout reference in the client everytime
// We only fallback to a fake setTimeout when not available
// setTimeout cannot be override globally sadly
module.exports = function exitPromise(fn, _setTimeout) {
  _setTimeout(fn, 0);
};

/***/ }),

/***/ "nhsl":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "nzdR":
/***/ (function(module, exports) {

/* istanbul ignore next */
/* Zepto v1.2.0 - zepto event assets data - zeptojs.com/license */
(function (global, factory) {
  module.exports = factory(global);
})( /* this ##### UPDATED: here we want to use window/global instead of this which is the current file context ##### */window, function (window) {
  var Zepto = function () {
    var undefined,
        key,
        $,
        classList,
        emptyArray = [],
        _concat = emptyArray.concat,
        _filter = emptyArray.filter,
        _slice = emptyArray.slice,
        document = window.document,
        elementDisplay = {},
        classCache = {},
        cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        rootNodeRE = /^(?:body|html)$/i,
        capitalRE = /([A-Z])/g,


    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
        table = document.createElement('table'),
        tableRow = document.createElement('tr'),
        containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
        readyRE = /complete|loaded|interactive/,
        simpleSelectorRE = /^[\w-]*$/,
        class2type = {},
        toString = class2type.toString,
        zepto = {},
        camelize,
        uniq,
        tempParent = document.createElement('div'),
        propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
        isArray = Array.isArray || function (object) {
      return object instanceof Array;
    };

    zepto.matches = function (element, selector) {
      if (!selector || !element || element.nodeType !== 1) return false;
      var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
      if (matchesSelector) return matchesSelector.call(element, selector);
      // fall back to performing a selector:
      var match,
          parent = element.parentNode,
          temp = !parent;
      if (temp) (parent = tempParent).appendChild(element);
      match = ~zepto.qsa(parent, selector).indexOf(element);
      temp && tempParent.removeChild(element);
      return match;
    };

    function type(obj) {
      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }

    function isFunction(value) {
      return type(value) == "function";
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
      return type(obj) == "object";
    }
    function isPlainObject(obj) {
      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }

    function likeArray(obj) {
      var length = !!obj && 'length' in obj && obj.length,
          type = $.type(obj);

      return 'function' != type && !isWindow(obj) && ('array' == type || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);
    }

    function compact(array) {
      return _filter.call(array, function (item) {
        return item != null;
      });
    }
    function flatten(array) {
      return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = function camelize(str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    };
    function dasherize(str) {
      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }
    uniq = function uniq(array) {
      return _filter.call(array, function (item, idx) {
        return array.indexOf(item) == idx;
      });
    };

    function classRE(name) {
      return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
    }

    function maybeAddPx(name, value) {
      return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
    }

    function defaultDisplay(nodeName) {
      var element, display;
      if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName);
        document.body.appendChild(element);
        display = getComputedStyle(element, '').getPropertyValue("display");
        element.parentNode.removeChild(element);
        display == "none" && (display = "block");
        elementDisplay[nodeName] = display;
      }
      return elementDisplay[nodeName];
    }

    function _children(element) {
      return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
        if (node.nodeType == 1) return node;
      });
    }

    function Z(dom, selector) {
      var i,
          len = dom ? dom.length : 0;
      for (i = 0; i < len; i++) {
        this[i] = dom[i];
      }this.length = len;
      this.selector = selector || '';
    }

    // `$.zepto.fragment` takes a html string and an optional tag name
    // to generate DOM nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overridden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    zepto.fragment = function (html, name, properties) {
      var dom, nodes, container;

      // A special case optimization for a single tag
      if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

      if (!dom) {
        if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
        if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
        if (!(name in containers)) name = '*';

        container = containers[name];
        container.innerHTML = '' + html;
        dom = $.each(_slice.call(container.childNodes), function () {
          container.removeChild(this);
        });
      }

      if (isPlainObject(properties)) {
        nodes = $(dom);
        $.each(properties, function (key, value) {
          if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
        });
      }

      return dom;
    };

    // `$.zepto.Z` swaps out the prototype of the given `dom` array
    // of nodes with `$.fn` and thus supplying all the Zepto functions
    // to the array. This method can be overridden in plugins.
    zepto.Z = function (dom, selector) {
      return new Z(dom, selector);
    };

    // `$.zepto.isZ` should return `true` if the given object is a Zepto
    // collection. This method can be overridden in plugins.
    zepto.isZ = function (object) {
      return object instanceof zepto.Z;
    };

    // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
    // takes a CSS selector and an optional context (and handles various
    // special cases).
    // This method can be overridden in plugins.
    zepto.init = function (selector, context) {
      var dom;
      // If nothing given, return an empty Zepto collection
      if (!selector) return zepto.Z();
      // Optimize for string selectors
      else if (typeof selector == 'string') {
          selector = selector.trim();
          // If it's a html fragment, create nodes from it
          // Note: In both Chrome 21 and Firefox 15, DOM error 12
          // is thrown if the fragment doesn't begin with <
          if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
          // If there's a context, create a collection on that context first, and select
          // nodes from there
          else if (context !== undefined) return $(context).find(selector);
            // If it's a CSS selector, use it to select nodes.
            else dom = zepto.qsa(document, selector);
        }
        // If a function is given, call it when the DOM is ready
        else if (isFunction(selector)) return $(document).ready(selector);
          // If a Zepto collection is given, just return it
          else if (zepto.isZ(selector)) return selector;else {
              // normalize array if an array of nodes is given
              if (isArray(selector)) dom = compact(selector);
              // Wrap DOM nodes.
              else if (isObject(selector)) dom = [selector], selector = null;
                // If it's a html fragment, create nodes from it
                else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
                  // If there's a context, create a collection on that context first, and select
                  // nodes from there
                  else if (context !== undefined) return $(context).find(selector);
                    // And last but no least, if it's a CSS selector, use it to select nodes.
                    else dom = zepto.qsa(document, selector);
            }
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector);
    };

    // `$` will be the base `Zepto` object. When calling this
    // function just call `$.zepto.init, which makes the implementation
    // details of selecting nodes and creating Zepto collections
    // patchable in plugins.
    $ = function $(selector, context) {
      return zepto.init(selector, context);
    };

    function extend(target, source, deep) {
      for (key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
          if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
          extend(target[key], source[key], deep);
        } else if (source[key] !== undefined) target[key] = source[key];
      }
    }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function (target) {
      var deep,
          args = _slice.call(arguments, 1);
      if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
      }
      args.forEach(function (arg) {
        extend(target, arg, deep);
      });
      return target;
    };

    // `$.zepto.qsa` is Zepto's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overridden in plugins.
    zepto.qsa = function (element, selector) {
      var found,
          maybeID = selector[0] == '#',
          maybeClass = !maybeID && selector[0] == '.',
          nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
          // Ensure that a 1 char tag name still gets checked
      isSimple = simpleSelectorRE.test(nameOnly);
      return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById
      (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
      maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
      element.getElementsByTagName(selector) : // Or a tag
      element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      );
    };

    function filtered(nodes, selector) {
      return selector == null ? $(nodes) : $(nodes).filter(selector);
    }

    $.contains = document.documentElement.contains ? function (parent, node) {
      return parent !== node && parent.contains(node);
    } : function (parent, node) {
      while (node && (node = node.parentNode)) {
        if (node === parent) return true;
      }return false;
    };

    function funcArg(context, arg, idx, payload) {
      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }

    function setAttribute(node, name, value) {
      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }

    // access className property while respecting SVGAnimatedString
    function className(node, value) {
      var klass = node.className || '',
          svg = klass && klass.baseVal !== undefined;

      if (value === undefined) return svg ? klass.baseVal : klass;
      svg ? klass.baseVal = value : node.className = value;
    }

    // "true"  => true
    // "false" => false
    // "null"  => null
    // "42"    => 42
    // "42.5"  => 42.5
    // "08"    => "08"
    // JSON    => parse if valid
    // String  => self
    function deserializeValue(value) {
      try {
        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
      } catch (e) {
        return value;
      }
    }

    $.type = type;
    $.isFunction = isFunction;
    $.isWindow = isWindow;
    $.isArray = isArray;
    $.isPlainObject = isPlainObject;

    $.isEmptyObject = function (obj) {
      var name;
      for (name in obj) {
        return false;
      }return true;
    };

    $.isNumeric = function (val) {
      var num = Number(val),
          type = typeof val;
      return val != null && type != 'boolean' && (type != 'string' || val.length) && !isNaN(num) && isFinite(num) || false;
    };

    $.inArray = function (elem, array, i) {
      return emptyArray.indexOf.call(array, elem, i);
    };

    $.camelCase = camelize;
    $.trim = function (str) {
      return str == null ? "" : String.prototype.trim.call(str);
    };

    // plugin compatibility
    $.uuid = 0;
    $.support = {};
    $.expr = {};
    $.noop = function () {};

    $.map = function (elements, callback) {
      var value,
          values = [],
          i,
          key;
      if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i);
        if (value != null) values.push(value);
      } else for (key in elements) {
        value = callback(elements[key], key);
        if (value != null) values.push(value);
      }
      return flatten(values);
    };

    $.each = function (elements, callback) {
      var i, key;
      if (likeArray(elements)) {
        for (i = 0; i < elements.length; i++) {
          if (callback.call(elements[i], i, elements[i]) === false) return elements;
        }
      } else {
        for (key in elements) {
          if (callback.call(elements[key], key, elements[key]) === false) return elements;
        }
      }

      return elements;
    };

    $.grep = function (elements, callback) {
      return _filter.call(elements, callback);
    };

    if (window.JSON) $.parseJSON = JSON.parse;

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    // Define methods that will be available on all
    // Zepto collections
    $.fn = {
      constructor: zepto.Z,
      length: 0,

      // Because a collection acts like an array
      // copy over these useful array functions.
      forEach: emptyArray.forEach,
      reduce: emptyArray.reduce,
      push: emptyArray.push,
      sort: emptyArray.sort,
      splice: emptyArray.splice,
      indexOf: emptyArray.indexOf,
      concat: function concat() {
        var i,
            value,
            args = [];
        for (i = 0; i < arguments.length; i++) {
          value = arguments[i];
          args[i] = zepto.isZ(value) ? value.toArray() : value;
        }
        return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
      },

      // `map` and `slice` in the jQuery API work differently
      // from their array counterparts
      map: function map(fn) {
        return $($.map(this, function (el, i) {
          return fn.call(el, i, el);
        }));
      },
      slice: function slice() {
        return $(_slice.apply(this, arguments));
      },

      ready: function ready(callback) {
        // need to check if document.body exists for IE as that browser reports
        // document ready when it hasn't yet created the body element
        if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
          callback($);
        }, false);
        return this;
      },
      get: function get(idx) {
        return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
      },
      toArray: function toArray() {
        return this.get();
      },
      size: function size() {
        return this.length;
      },
      remove: function remove() {
        return this.each(function () {
          if (this.parentNode != null) this.parentNode.removeChild(this);
        });
      },
      each: function each(callback) {
        emptyArray.every.call(this, function (el, idx) {
          return callback.call(el, idx, el) !== false;
        });
        return this;
      },
      filter: function filter(selector) {
        if (isFunction(selector)) return this.not(this.not(selector));
        return $(_filter.call(this, function (element) {
          return zepto.matches(element, selector);
        }));
      },
      add: function add(selector, context) {
        return $(uniq(this.concat($(selector, context))));
      },
      is: function is(selector) {
        return this.length > 0 && zepto.matches(this[0], selector);
      },
      not: function not(selector) {
        var nodes = [];
        if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
          if (!selector.call(this, idx)) nodes.push(this);
        });else {
          var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
          this.forEach(function (el) {
            if (excludes.indexOf(el) < 0) nodes.push(el);
          });
        }
        return $(nodes);
      },
      has: function has(selector) {
        return this.filter(function () {
          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
        });
      },
      eq: function eq(idx) {
        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
      },
      first: function first() {
        var el = this[0];
        return el && !isObject(el) ? el : $(el);
      },
      last: function last() {
        var el = this[this.length - 1];
        return el && !isObject(el) ? el : $(el);
      },
      find: function find(selector) {
        var result,
            $this = this;
        if (!selector) result = $();else if (typeof selector == 'object') result = $(selector).filter(function () {
          var node = this;
          return emptyArray.some.call($this, function (parent) {
            return $.contains(parent, node);
          });
        });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
          return zepto.qsa(this, selector);
        });
        return result;
      },
      closest: function closest(selector, context) {
        var nodes = [],
            collection = typeof selector == 'object' && $(selector);
        this.each(function (_, node) {
          while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
            node = node !== context && !isDocument(node) && node.parentNode;
          }if (node && nodes.indexOf(node) < 0) nodes.push(node);
        });
        return $(nodes);
      },
      parents: function parents(selector) {
        var ancestors = [],
            nodes = this;
        while (nodes.length > 0) {
          nodes = $.map(nodes, function (node) {
            if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
              ancestors.push(node);
              return node;
            }
          });
        }return filtered(ancestors, selector);
      },
      parent: function parent(selector) {
        return filtered(uniq(this.pluck('parentNode')), selector);
      },
      children: function children(selector) {
        return filtered(this.map(function () {
          return _children(this);
        }), selector);
      },
      contents: function contents() {
        return this.map(function () {
          return this.contentDocument || _slice.call(this.childNodes);
        });
      },
      siblings: function siblings(selector) {
        return filtered(this.map(function (i, el) {
          return _filter.call(_children(el.parentNode), function (child) {
            return child !== el;
          });
        }), selector);
      },
      empty: function empty() {
        return this.each(function () {
          this.innerHTML = '';
        });
      },
      // `pluck` is borrowed from Prototype.js
      pluck: function pluck(property) {
        return $.map(this, function (el) {
          return el[property];
        });
      },
      show: function show() {
        return this.each(function () {
          this.style.display == "none" && (this.style.display = '');
          if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
        });
      },
      replaceWith: function replaceWith(newContent) {
        return this.before(newContent).remove();
      },
      wrap: function wrap(structure) {
        var func = isFunction(structure);
        if (this[0] && !func) var dom = $(structure).get(0),
            clone = dom.parentNode || this.length > 1;

        return this.each(function (index) {
          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
        });
      },
      wrapAll: function wrapAll(structure) {
        if (this[0]) {
          $(this[0]).before(structure = $(structure));
          var children;
          // drill down to the inmost element
          while ((children = structure.children()).length) {
            structure = children.first();
          }$(structure).append(this);
        }
        return this;
      },
      wrapInner: function wrapInner(structure) {
        var func = isFunction(structure);
        return this.each(function (index) {
          var self = $(this),
              contents = self.contents(),
              dom = func ? structure.call(this, index) : structure;
          contents.length ? contents.wrapAll(dom) : self.append(dom);
        });
      },
      unwrap: function unwrap() {
        this.parent().each(function () {
          $(this).replaceWith($(this).children());
        });
        return this;
      },
      clone: function clone() {
        return this.map(function () {
          return this.cloneNode(true);
        });
      },
      hide: function hide() {
        return this.css("display", "none");
      },
      toggle: function toggle(setting) {
        return this.each(function () {
          var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
        });
      },
      prev: function prev(selector) {
        return $(this.pluck('previousElementSibling')).filter(selector || '*');
      },
      next: function next(selector) {
        return $(this.pluck('nextElementSibling')).filter(selector || '*');
      },
      html: function html(_html) {
        return 0 in arguments ? this.each(function (idx) {
          var originHtml = this.innerHTML;
          $(this).empty().append(funcArg(this, _html, idx, originHtml));
        }) : 0 in this ? this[0].innerHTML : null;
      },
      text: function text(_text) {
        return 0 in arguments ? this.each(function (idx) {
          var newText = funcArg(this, _text, idx, this.textContent);
          this.textContent = newText == null ? '' : '' + newText;
        }) : 0 in this ? this.pluck('textContent').join("") : null;
      },
      attr: function attr(name, value) {
        var result;
        return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
          if (this.nodeType !== 1) return;
          if (isObject(name)) for (key in name) {
            setAttribute(this, key, name[key]);
          } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        });
      },
      removeAttr: function removeAttr(name) {
        return this.each(function () {
          this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
            setAttribute(this, attribute);
          }, this);
        });
      },
      prop: function prop(name, value) {
        name = propMap[name] || name;
        return 1 in arguments ? this.each(function (idx) {
          this[name] = funcArg(this, value, idx, this[name]);
        }) : this[0] && this[0][name];
      },
      removeProp: function removeProp(name) {
        name = propMap[name] || name;
        return this.each(function () {
          delete this[name];
        });
      },
      data: function data(name, value) {
        var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

        var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

        return data !== null ? deserializeValue(data) : undefined;
      },
      val: function val(value) {
        if (0 in arguments) {
          if (value == null) value = "";
          return this.each(function (idx) {
            this.value = funcArg(this, value, idx, this.value);
          });
        } else {
          return this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
            return this.selected;
          }).pluck('value') : this[0].value);
        }
      },
      offset: function offset(coordinates) {
        if (coordinates) return this.each(function (index) {
          var $this = $(this),
              coords = funcArg(this, coordinates, index, $this.offset()),
              parentOffset = $this.offsetParent().offset(),
              props = {
            top: coords.top - parentOffset.top,
            left: coords.left - parentOffset.left
          };

          if ($this.css('position') == 'static') props['position'] = 'relative';
          $this.css(props);
        });
        if (!this.length) return null;
        if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return { top: 0, left: 0 };
        var obj = this[0].getBoundingClientRect();
        return {
          left: obj.left + window.pageXOffset,
          top: obj.top + window.pageYOffset,
          width: Math.round(obj.width),
          height: Math.round(obj.height)
        };
      },
      css: function css(property, value) {
        if (arguments.length < 2) {
          var element = this[0];
          if (typeof property == 'string') {
            if (!element) return;
            return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
          } else if (isArray(property)) {
            if (!element) return;
            var props = {};
            var computedStyle = getComputedStyle(element, '');
            $.each(property, function (_, prop) {
              props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
            });
            return props;
          }
        }

        var css = '';
        if (type(property) == 'string') {
          if (!value && value !== 0) this.each(function () {
            this.style.removeProperty(dasherize(property));
          });else css = dasherize(property) + ":" + maybeAddPx(property, value);
        } else {
          for (key in property) {
            if (!property[key] && property[key] !== 0) this.each(function () {
              this.style.removeProperty(dasherize(key));
            });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
          }
        }

        return this.each(function () {
          this.style.cssText += ';' + css;
        });
      },
      index: function index(element) {
        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function hasClass(name) {
        if (!name) return false;
        return emptyArray.some.call(this, function (el) {
          return this.test(className(el));
        }, classRE(name));
      },
      addClass: function addClass(name) {
        if (!name) return this;
        return this.each(function (idx) {
          if (!('className' in this)) return;
          classList = [];
          var cls = className(this),
              newName = funcArg(this, name, idx, cls);
          newName.split(/\s+/g).forEach(function (klass) {
            if (!$(this).hasClass(klass)) classList.push(klass);
          }, this);
          classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
        });
      },
      removeClass: function removeClass(name) {
        return this.each(function (idx) {
          if (!('className' in this)) return;
          if (name === undefined) return className(this, '');
          classList = className(this);
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
            classList = classList.replace(classRE(klass), " ");
          });
          className(this, classList.trim());
        });
      },
      toggleClass: function toggleClass(name, when) {
        if (!name) return this;
        return this.each(function (idx) {
          var $this = $(this),
              names = funcArg(this, name, idx, className(this));
          names.split(/\s+/g).forEach(function (klass) {
            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
          });
        });
      },
      scrollTop: function scrollTop(value) {
        if (!this.length) return;
        var hasScrollTop = 'scrollTop' in this[0];
        if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        return this.each(hasScrollTop ? function () {
          this.scrollTop = value;
        } : function () {
          this.scrollTo(this.scrollX, value);
        });
      },
      scrollLeft: function scrollLeft(value) {
        if (!this.length) return;
        var hasScrollLeft = 'scrollLeft' in this[0];
        if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        return this.each(hasScrollLeft ? function () {
          this.scrollLeft = value;
        } : function () {
          this.scrollTo(value, this.scrollY);
        });
      },
      position: function position() {
        if (!this.length) return;

        var elem = this[0],

        // Get *real* offsetParent
        offsetParent = this.offsetParent(),

        // Get correct offsets
        offset = this.offset(),
            parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

        // Subtract element margins
        // note: when an element has margin: auto the offsetLeft and marginLeft
        // are the same in Safari causing offset.left to incorrectly be 0
        offset.top -= parseFloat($(elem).css('margin-top')) || 0;
        offset.left -= parseFloat($(elem).css('margin-left')) || 0;

        // Add offsetParent borders
        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

        // Subtract the two offsets
        return {
          top: offset.top - parentOffset.top,
          left: offset.left - parentOffset.left
        };
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          var parent = this.offsetParent || document.body;
          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
            parent = parent.offsetParent;
          }return parent;
        });
      }

      // for now
    };$.fn.detach = $.fn.remove

    // Generate the `width` and `height` functions
    ;['width', 'height'].forEach(function (dimension) {
      var dimensionProperty = dimension.replace(/./, function (m) {
        return m[0].toUpperCase();
      });

      $.fn[dimension] = function (value) {
        var offset,
            el = this[0];
        if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
          el = $(this);
          el.css(dimension, funcArg(this, value, idx, el[dimension]()));
        });
      };
    });

    function traverseNode(node, fun) {
      fun(node);
      for (var i = 0, len = node.childNodes.length; i < len; i++) {
        traverseNode(node.childNodes[i], fun);
      }
    }

    // Generate the `after`, `prepend`, `before`, `append`,
    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
    adjacencyOperators.forEach(function (operator, operatorIndex) {
      var inside = operatorIndex % 2; //=> prepend, append

      $.fn[operator] = function () {
        // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
        var argType,
            nodes = $.map(arguments, function (arg) {
          var arr = [];
          argType = type(arg);
          if (argType == "array") {
            arg.forEach(function (el) {
              if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());
              arr = arr.concat(zepto.fragment(el));
            });
            return arr;
          }
          return argType == "object" || arg == null ? arg : zepto.fragment(arg);
        }),
            parent,
            copyByClone = this.length > 1;
        if (nodes.length < 1) return this;

        return this.each(function (_, target) {
          parent = inside ? target : target.parentNode;

          // convert all methods to a "before" operation
          target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

          var parentInDocument = $.contains(document.documentElement, parent);

          nodes.forEach(function (node) {
            if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

            parent.insertBefore(node, target);
            if (parentInDocument) traverseNode(node, function (el) {
              if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) {
                var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
                target['eval'].call(target, el.innerHTML);
              }
            });
          });
        });
      };

      // after    => insertAfter
      // prepend  => prependTo
      // before   => insertBefore
      // append   => appendTo
      $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
        $(html)[operator](this);
        return this;
      };
    });

    zepto.Z.prototype = Z.prototype = $.fn;

    // Export internal API functions in the `$.zepto` namespace
    zepto.uniq = uniq;
    zepto.deserializeValue = deserializeValue;
    $.zepto = zepto;

    return $;
  }();(function ($) {
    var _zid = 1,
        undefined,
        slice = Array.prototype.slice,
        isFunction = $.isFunction,
        isString = function isString(obj) {
      return typeof obj == 'string';
    },
        handlers = {},
        specialEvents = {},
        focusinSupported = 'onfocusin' in window,
        focus = { focus: 'focusin', blur: 'focusout' },
        hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

    function zid(element) {
      return element._zid || (element._zid = _zid++);
    }
    function findHandlers(element, event, fn, selector) {
      event = parse(event);
      if (event.ns) var matcher = matcherFor(event.ns);
      return (handlers[zid(element)] || []).filter(function (handler) {
        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
      });
    }
    function parse(event) {
      var parts = ('' + event).split('.');
      return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
    }
    function matcherFor(ns) {
      return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
    }

    function eventCapture(handler, captureSetting) {
      return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
    }

    function realEvent(type) {
      return hover[type] || focusinSupported && focus[type] || type;
    }

    function add(element, events, fn, data, selector, delegator, capture) {
      var id = zid(element),
          set = handlers[id] || (handlers[id] = []);
      events.split(/\s/).forEach(function (event) {
        if (event == 'ready') return $(document).ready(fn);
        var handler = parse(event);
        handler.fn = fn;
        handler.sel = selector;
        // emulate mouseenter, mouseleave
        if (handler.e in hover) fn = function fn(e) {
          var related = e.relatedTarget;
          if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
        };
        handler.del = delegator;
        var callback = delegator || fn;
        handler.proxy = function (e) {
          e = compatible(e);
          if (e.isImmediatePropagationStopped()) return;
          e.data = data;
          var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
          if (result === false) e.preventDefault(), e.stopPropagation();
          return result;
        };
        handler.i = set.length;
        set.push(handler);
        if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    }
    function remove(element, events, fn, selector, capture) {
      var id = zid(element);(events || '').split(/\s/).forEach(function (event) {
        findHandlers(element, event, fn, selector).forEach(function (handler) {
          delete handlers[id][handler.i];
          if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        });
      });
    }

    $.event = { add: add, remove: remove };

    $.proxy = function (fn, context) {
      var args = 2 in arguments && slice.call(arguments, 2);
      if (isFunction(fn)) {
        var proxyFn = function proxyFn() {
          return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
        };
        proxyFn._zid = zid(fn);
        return proxyFn;
      } else if (isString(context)) {
        if (args) {
          args.unshift(fn[context], fn);
          return $.proxy.apply(null, args);
        } else {
          return $.proxy(fn[context], fn);
        }
      } else {
        throw new TypeError("expected function");
      }
    };

    $.fn.bind = function (event, data, callback) {
      return this.on(event, data, callback);
    };
    $.fn.unbind = function (event, callback) {
      return this.off(event, callback);
    };
    $.fn.one = function (event, selector, data, callback) {
      return this.on(event, selector, data, callback, 1);
    };

    var returnTrue = function returnTrue() {
      return true;
    },
        returnFalse = function returnFalse() {
      return false;
    },
        ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        eventMethods = {
      preventDefault: 'isDefaultPrevented',
      stopImmediatePropagation: 'isImmediatePropagationStopped',
      stopPropagation: 'isPropagationStopped'
    };

    function compatible(event, source) {
      if (source || !event.isDefaultPrevented) {
        source || (source = event);

        $.each(eventMethods, function (name, predicate) {
          var sourceMethod = source[name];
          event[name] = function () {
            this[predicate] = returnTrue;
            return sourceMethod && sourceMethod.apply(source, arguments);
          };
          event[predicate] = returnFalse;
        });

        event.timeStamp || (event.timeStamp = Date.now());

        if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
      }
      return event;
    }

    function createProxy(event) {
      var key,
          proxy = { originalEvent: event };
      for (key in event) {
        if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
      }return compatible(proxy, event);
    }

    $.fn.delegate = function (selector, event, callback) {
      return this.on(event, selector, callback);
    };
    $.fn.undelegate = function (selector, event, callback) {
      return this.off(event, selector, callback);
    };

    $.fn.live = function (event, callback) {
      $(document.body).delegate(this.selector, event, callback);
      return this;
    };
    $.fn.die = function (event, callback) {
      $(document.body).undelegate(this.selector, event, callback);
      return this;
    };

    $.fn.on = function (event, selector, data, callback, one) {
      var autoRemove,
          delegator,
          $this = this;
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.on(type, selector, data, fn, one);
        });
        return $this;
      }

      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
      if (callback === undefined || data === false) callback = data, data = undefined;

      if (callback === false) callback = returnFalse;

      return $this.each(function (_, element) {
        if (one) autoRemove = function autoRemove(e) {
          remove(element, e.type, callback);
          return callback.apply(this, arguments);
        };

        if (selector) delegator = function delegator(e) {
          var evt,
              match = $(e.target).closest(selector, element).get(0);
          if (match && match !== element) {
            evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
          }
        };

        add(element, event, callback, data, selector, delegator || autoRemove);
      });
    };
    $.fn.off = function (event, selector, callback) {
      var $this = this;
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.off(type, selector, fn);
        });
        return $this;
      }

      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

      if (callback === false) callback = returnFalse;

      return $this.each(function () {
        remove(this, event, callback, selector);
      });
    };

    $.fn.trigger = function (event, args) {
      event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
      event._args = args;
      return this.each(function () {
        // handle focus(), blur() by calling them directly
        if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
        // items in the collection might not be DOM elements
        else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
      });
    };

    // triggers event handlers on current element just as if an event occurred,
    // doesn't trigger an actual event, doesn't bubble
    $.fn.triggerHandler = function (event, args) {
      var e, result;
      this.each(function (i, element) {
        e = createProxy(isString(event) ? $.Event(event) : event);
        e._args = args;
        e.target = element;
        $.each(findHandlers(element, event.type || event), function (i, handler) {
          result = handler.proxy(e);
          if (e.isImmediatePropagationStopped()) return false;
        });
      });
      return result;
    }

    // shortcut methods for `.bind(event, fn)` for each event type
    ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
      $.fn[event] = function (callback) {
        return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
      };
    });

    $.Event = function (type, props) {
      if (!isString(type)) props = type, type = props.type;
      var event = document.createEvent(specialEvents[type] || 'Events'),
          bubbles = true;
      if (props) for (var name in props) {
        name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
      }event.initEvent(type, bubbles, true);
      return compatible(event);
    };
  })(Zepto);(function ($) {
    var cache = [],
        timeout;

    $.fn.remove = function () {
      return this.each(function () {
        if (this.parentNode) {
          if (this.tagName === 'IMG') {
            cache.push(this);
            this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(function () {
              cache = [];
            }, 60000);
          }
          this.parentNode.removeChild(this);
        }
      });
    };
  })(Zepto);(function ($) {
    var data = {},
        dataAttr = $.fn.data,
        camelize = $.camelCase,
        exp = $.expando = 'Zepto' + +new Date(),
        emptyArray = [];

    // Get value from node:
    // 1. first try key as given,
    // 2. then try camelized key,
    // 3. fall back to reading "data-*" attribute.
    function getData(node, name) {
      var id = node[exp],
          store = id && data[id];
      if (name === undefined) return store || setData(node);else {
        if (store) {
          if (name in store) return store[name];
          var camelName = camelize(name);
          if (camelName in store) return store[camelName];
        }
        return dataAttr.call($(node), name);
      }
    }

    // Store value under camelized key on node
    function setData(node, name, value) {
      var id = node[exp] || (node[exp] = ++$.uuid),
          store = data[id] || (data[id] = attributeData(node));
      if (name !== undefined) store[camelize(name)] = value;
      return store;
    }

    // Read all "data-*" attributes from a node
    function attributeData(node) {
      var store = {};
      $.each(node.attributes || emptyArray, function (i, attr) {
        if (attr.name.indexOf('data-') == 0) store[camelize(attr.name.replace('data-', ''))] = $.zepto.deserializeValue(attr.value);
      });
      return store;
    }

    $.fn.data = function (name, value) {
      return value === undefined ?
      // set multiple values via object
      $.isPlainObject(name) ? this.each(function (i, node) {
        $.each(name, function (key, value) {
          setData(node, key, value);
        });
      }) :
      // get value from first element
      0 in this ? getData(this[0], name) : undefined :
      // set value on all elements
      this.each(function () {
        setData(this, name, value);
      });
    };

    $.data = function (elem, name, value) {
      return $(elem).data(name, value);
    };

    $.hasData = function (elem) {
      var id = elem[exp],
          store = id && data[id];
      return store ? !$.isEmptyObject(store) : false;
    };

    $.fn.removeData = function (names) {
      if (typeof names == 'string') names = names.split(/\s+/);
      return this.each(function () {
        var id = this[exp],
            store = id && data[id];
        if (store) $.each(names || store, function (key) {
          delete store[names ? camelize(this) : key];
        });
      });
    }

    // Generate extended `remove` and `empty` functions
    ;['remove', 'empty'].forEach(function (methodName) {
      var origFn = $.fn[methodName];
      $.fn[methodName] = function () {
        var elements = this.find('*');
        if (methodName === 'remove') elements = elements.add(this);
        elements.removeData();
        return origFn.call(this);
      };
    });
  })(Zepto);
  return Zepto;
});

/***/ }),

/***/ "oDcN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// polyfill for navigator.language (IE <= 10)
// not polyfilled by https://cdn.polyfill.io/v2/docs/

// Defined: http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#navigatorlanguage
//   with allowable values at http://www.ietf.org/rfc/bcp/bcp47.txt
// Note that the HTML spec suggests that anonymizing services return "en-US" by default for
//   user privacy (so your app may wish to provide a means of changing the locale)

if (!('language' in navigator)) {
  navigator.language =
  // IE 10 in IE8 mode on Windows 7 uses upper-case in
  // navigator.userLanguage country codes but per
  // http://msdn.microsoft.com/en-us/library/ie/ms533052.aspx (via
  // http://msdn.microsoft.com/en-us/library/ie/ms534713.aspx), they
  // appear to be in lower case, so we bring them into harmony with navigator.language.
  navigator.userLanguage && navigator.userLanguage.replace(/-[a-z]{2}$/, String.prototype.toUpperCase) || 'en-US'; // Default for anonymizing services: http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#navigatorlanguage
}

/***/ }),

/***/ "oN9Z":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function (value, index, collection) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;

/***/ }),

/***/ "oVe7":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "oaAh":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("wppe"),
    Uint8Array = __webpack_require__("yfX1"),
    eq = __webpack_require__("LIpy"),
    equalArrays = __webpack_require__("pkMv"),
    mapToArray = __webpack_require__("7BjG"),
    setToArray = __webpack_require__("ZEJm");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ "of1r":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("Ro2m");

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;

/***/ }),

/***/ "oxMD":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;

/***/ }),

/***/ "p/0c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),

/***/ "p/s9":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("d05+"),
    eq = __webpack_require__("LIpy");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "p0NR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  wrapper: '<span class="%ROOT%"></span>',
  dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
  dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
  suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
  suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>'
};

/***/ }),

/***/ "pK4Y":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("e5TX"),
    isObjectLike = __webpack_require__("OuyB");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "pgru":
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ "pju1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchbar":"searchbar__1e4j-"};

/***/ }),

/***/ "pkMv":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("thFQ"),
    arraySome = __webpack_require__("SfCF"),
    cacheHas = __webpack_require__("qxaq");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ "pmgD":
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__("Lgs6"),
    hasIn = __webpack_require__("3Q8v");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function (value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;

/***/ }),

/***/ "px7f":
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;

/***/ }),

/***/ "q2Io":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("dtkN"),
    keysIn = __webpack_require__("+UAC");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ "q3B8":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("MIhM");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),

/***/ "qBl2":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "qE2F":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("ga8q"),
    getPrototype = __webpack_require__("CXf5"),
    isPrototype = __webpack_require__("nhsl");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "qK61":
/***/ (function(module, exports, __webpack_require__) {

var debug = __webpack_require__("8NLT")('algoliasearch:src/hostIndexState.js');
var localStorageNamespace = 'algoliasearch-client-js';

var store;
var moduleStore = {
  state: {},
  set: function set(key, data) {
    this.state[key] = data;
    return this.state[key];
  },
  get: function get(key) {
    return this.state[key] || null;
  }
};

var localStorageStore = {
  set: function set(key, data) {
    moduleStore.set(key, data); // always replicate localStorageStore to moduleStore in case of failure

    try {
      var namespace = JSON.parse(global.localStorage[localStorageNamespace]);
      namespace[key] = data;
      global.localStorage[localStorageNamespace] = JSON.stringify(namespace);
      return namespace[key];
    } catch (e) {
      return localStorageFailure(key, e);
    }
  },
  get: function get(key) {
    try {
      return JSON.parse(global.localStorage[localStorageNamespace])[key] || null;
    } catch (e) {
      return localStorageFailure(key, e);
    }
  }
};

function localStorageFailure(key, e) {
  debug('localStorage failed with', e);
  cleanup();
  store = moduleStore;
  return store.get(key);
}

store = supportsLocalStorage() ? localStorageStore : moduleStore;

module.exports = {
  get: getOrSet,
  set: getOrSet,
  supportsLocalStorage: supportsLocalStorage
};

function getOrSet(key, data) {
  if (arguments.length === 1) {
    return store.get(key);
  }

  return store.set(key, data);
}

function supportsLocalStorage() {
  try {
    if ('localStorage' in global && global.localStorage !== null) {
      if (!global.localStorage[localStorageNamespace]) {
        // actual creation of the namespace
        global.localStorage.setItem(localStorageNamespace, JSON.stringify({}));
      }
      return true;
    }

    return false;
  } catch (_) {
    return false;
  }
}

// In case of any error on localStorage, we clean our own namespace, this should handle
// quota errors when a lot of keys + data are used
function cleanup() {
  try {
    global.localStorage.removeItem(localStorageNamespace);
  } catch (_) {
    // nothing to do
  }
}

/***/ }),

/***/ "qW88":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("bgO7");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;

/***/ }),

/***/ "qXFa":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("a+zQ");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "qnOU":
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__("WdKa"),
    LodashWrapper = __webpack_require__("3euO"),
    copyArray = __webpack_require__("Mkgn");

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;

/***/ }),

/***/ "qxaq":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ "r0r+":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ "r1+p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("HHEV");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObject(chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

/***/ }),

/***/ "r8MY":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "rgmI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ei3g");
module.exports.HttpsAgent = __webpack_require__("s/23");

/***/ }),

/***/ "rodt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("J1JZ");

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ruT8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  hits: __webpack_require__("ws1Y"),
  popularIn: __webpack_require__("BtVy")
};

/***/ }),

/***/ "s/23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Https Agent base on custom http agent
 *
 * Copyright(c) node-modules and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */



/**
 * Module dependencies.
 */

var https = __webpack_require__("XgVs");
var utils = __webpack_require__("EPjK");
var HttpAgent = __webpack_require__("ei3g");
var OriginalHttpsAgent = https.Agent;

var HttpsAgent;

if (utils.isNode10) {
  // node v0.10
  HttpsAgent = function HttpsAgent(options) {
    HttpAgent.call(this, options);
    this.defaultPort = 443;
    this.protocol = 'https:';
  };

  utils.inherits(HttpsAgent, HttpAgent);

  HttpsAgent.prototype.createConnection = https.globalAgent.createConnection;
  HttpsAgent.prototype.getName = function (options) {
    var name = HttpAgent.prototype.getName.call(this, options);

    name += ':';
    if (options.ca) name += options.ca;

    name += ':';
    if (options.cert) name += options.cert;

    name += ':';
    if (options.ciphers) name += options.ciphers;

    name += ':';
    if (options.key) name += options.key;

    name += ':';
    if (options.pfx) name += options.pfx;

    name += ':';
    if (options.rejectUnauthorized !== undefined) name += options.rejectUnauthorized;

    return name;
  };
} else {
  HttpsAgent = function HttpsAgent(options) {
    HttpAgent.call(this, options);
    this.defaultPort = 443;
    this.protocol = 'https:';
    this.maxCachedSessions = this.options.maxCachedSessions;
    if (this.maxCachedSessions === undefined) this.maxCachedSessions = 100;

    this._sessionCache = {
      map: {},
      list: []
    };
  };

  utils.inherits(HttpsAgent, HttpAgent);

  ['createConnection', 'getName', '_getSession', '_cacheSession',
  // https://github.com/nodejs/node/pull/4982
  '_evictSession'].forEach(function (method) {
    if (typeof OriginalHttpsAgent.prototype[method] === 'function') {
      HttpsAgent.prototype[method] = OriginalHttpsAgent.prototype[method];
    }
  });
}

module.exports = HttpsAgent;

/***/ }),

/***/ "s4SJ":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("MIhM");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "s6cN":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("hmcW"),
    getMatchData = __webpack_require__("N0V4"),
    matchesStrictComparable = __webpack_require__("sruz");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ }),

/***/ "s9iF":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "sU8C":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a1e82d21fba625813deb6e4b998f609.svg";

/***/ }),

/***/ "skbs":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "skla":
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__("ivZO"),
    arrayReduce = __webpack_require__("FhVQ"),
    setToArray = __webpack_require__("ZEJm");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

module.exports = cloneSet;

/***/ }),

/***/ "smkV":
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__("ACee"),
    hasUnicode = __webpack_require__("oxMD"),
    unicodeToArray = __webpack_require__("NN+K");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

module.exports = stringToArray;

/***/ }),

/***/ "srRO":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "srTA":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("BblM"),
    baseIteratee = __webpack_require__("lW7l"),
    basePickBy = __webpack_require__("Lgs6"),
    getAllKeysIn = __webpack_require__("l/4E");

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function (prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function (value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;

/***/ }),

/***/ "sruz":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ }),

/***/ "t9LI":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("yeiR"),
    baseSlice = __webpack_require__("Chbn");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;

/***/ }),

/***/ "tALL":
/***/ (function(module, exports) {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined") {
    win = self;
} else {
    win = {};
}

module.exports = win;

/***/ }),

/***/ "tAcL":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("Jpv1");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;

/***/ }),

/***/ "tOd9":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("f4Fl"),
    createWrap = __webpack_require__("0a/Y"),
    getHolder = __webpack_require__("coim"),
    replaceHolders = __webpack_require__("bU1I");

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = baseRest(function (func, partials) {
  var holders = replaceHolders(partials, getHolder(partial));
  return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

module.exports = partial;

/***/ }),

/***/ "tQCT":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("fLfT"),
    Map = __webpack_require__("K9uV"),
    Promise = __webpack_require__("gTE+"),
    Set = __webpack_require__("IVes"),
    WeakMap = __webpack_require__("4N03"),
    baseGetTag = __webpack_require__("e5TX"),
    toSource = __webpack_require__("g55O");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ }),

/***/ "thFQ":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("wtMJ"),
    setCacheAdd = __webpack_require__("r0r+"),
    setCacheHas = __webpack_require__("41+b");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ }),

/***/ "u9vI":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "uTT0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

/***/ }),

/***/ "uTXi":
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;

/***/ }),

/***/ "udZ4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DOM = __webpack_require__("BiYY");

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

module.exports = {
  // those methods are implemented differently
  // depending on which build it is, using
  // $... or angular... or Zepto... or require(...)
  isArray: null,
  isFunction: null,
  isObject: null,
  bind: null,
  each: null,
  map: null,
  mixin: null,

  isMsie: function isMsie() {
    // from https://github.com/ded/bowser/blob/master/bowser.js
    return (/(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false
    );
  },

  // http://stackoverflow.com/a/6969486
  escapeRegExChars: function escapeRegExChars(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  },

  isNumber: function isNumber(obj) {
    return typeof obj === 'number';
  },

  toStr: function toStr(s) {
    return s === undefined || s === null ? '' : s + '';
  },

  cloneDeep: function cloneDeep(obj) {
    var clone = this.mixin({}, obj);
    var self = this;
    this.each(clone, function (value, key) {
      if (value) {
        if (self.isArray(value)) {
          clone[key] = [].concat(value);
        } else if (self.isObject(value)) {
          clone[key] = self.cloneDeep(value);
        }
      }
    });
    return clone;
  },

  error: function error(msg) {
    throw new Error(msg);
  },

  every: function every(obj, test) {
    var result = true;
    if (!obj) {
      return result;
    }
    this.each(obj, function (val, key) {
      result = test.call(null, val, key, obj);
      if (!result) {
        return false;
      }
    });
    return !!result;
  },

  any: function any(obj, test) {
    var found = false;
    if (!obj) {
      return found;
    }
    this.each(obj, function (val, key) {
      if (test.call(null, val, key, obj)) {
        found = true;
        return false;
      }
    });
    return found;
  },

  getUniqueId: function () {
    var counter = 0;
    return function () {
      return counter++;
    };
  }(),

  templatify: function templatify(obj) {
    if (this.isFunction(obj)) {
      return obj;
    }
    var $template = DOM.element(obj);
    if ($template.prop('tagName') === 'SCRIPT') {
      return function template() {
        return $template.text();
      };
    }
    return function template() {
      return String(obj);
    };
  },

  defer: function defer(fn) {
    setTimeout(fn, 0);
  },

  noop: function noop() {},

  formatPrefix: function formatPrefix(prefix, noPrefix) {
    return noPrefix ? '' : prefix + '-';
  },

  className: function className(prefix, clazz, skipDot) {
    return (skipDot ? '' : '.') + prefix + clazz;
  },

  escapeHighlightedString: function escapeHighlightedString(str, highlightPreTag, highlightPostTag) {
    highlightPreTag = highlightPreTag || '<em>';
    var pre = document.createElement('div');
    pre.appendChild(document.createTextNode(highlightPreTag));

    highlightPostTag = highlightPostTag || '</em>';
    var post = document.createElement('div');
    post.appendChild(document.createTextNode(highlightPostTag));

    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML.replace(RegExp(escapeRegExp(pre.innerHTML), 'g'), highlightPreTag).replace(RegExp(escapeRegExp(post.innerHTML), 'g'), highlightPostTag);
  }
};

/***/ }),

/***/ "uf6I":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("Vhgk"),
    getSymbols = __webpack_require__("EvLK"),
    keys = __webpack_require__("HI10");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "uiOY":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("wppe");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "uk2Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__("cTKO");
var filter = __webpack_require__("FnLS");
var map = __webpack_require__("vGW8");
var isEmpty = __webpack_require__("BBRi");
var indexOf = __webpack_require__("YCGE");

function filterState(state, filters) {
  var partialState = {};
  var attributeFilters = filter(filters, function (f) {
    return f.indexOf('attribute:') !== -1;
  });
  var attributes = map(attributeFilters, function (aF) {
    return aF.split(':')[1];
  });

  if (indexOf(attributes, '*') === -1) {
    forEach(attributes, function (attr) {
      if (state.isConjunctiveFacet(attr) && state.isFacetRefined(attr)) {
        if (!partialState.facetsRefinements) partialState.facetsRefinements = {};
        partialState.facetsRefinements[attr] = state.facetsRefinements[attr];
      }

      if (state.isDisjunctiveFacet(attr) && state.isDisjunctiveFacetRefined(attr)) {
        if (!partialState.disjunctiveFacetsRefinements) partialState.disjunctiveFacetsRefinements = {};
        partialState.disjunctiveFacetsRefinements[attr] = state.disjunctiveFacetsRefinements[attr];
      }

      if (state.isHierarchicalFacet(attr) && state.isHierarchicalFacetRefined(attr)) {
        if (!partialState.hierarchicalFacetsRefinements) partialState.hierarchicalFacetsRefinements = {};
        partialState.hierarchicalFacetsRefinements[attr] = state.hierarchicalFacetsRefinements[attr];
      }

      var numericRefinements = state.getNumericRefinements(attr);
      if (!isEmpty(numericRefinements)) {
        if (!partialState.numericRefinements) partialState.numericRefinements = {};
        partialState.numericRefinements[attr] = state.numericRefinements[attr];
      }
    });
  } else {
    if (!isEmpty(state.numericRefinements)) {
      partialState.numericRefinements = state.numericRefinements;
    }
    if (!isEmpty(state.facetsRefinements)) partialState.facetsRefinements = state.facetsRefinements;
    if (!isEmpty(state.disjunctiveFacetsRefinements)) {
      partialState.disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements;
    }
    if (!isEmpty(state.hierarchicalFacetsRefinements)) {
      partialState.hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements;
    }
  }

  var searchParameters = filter(filters, function (f) {
    return f.indexOf('attribute:') === -1;
  });

  forEach(searchParameters, function (parameterKey) {
    partialState[parameterKey] = state[parameterKey];
  });

  return partialState;
}

module.exports = filterState;

/***/ }),

/***/ "urtK":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;

/***/ }),

/***/ "uvMU":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "uy4o":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "vGW8":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("BblM"),
    baseIteratee = __webpack_require__("lW7l"),
    baseMap = __webpack_require__("wrrS"),
    isArray = __webpack_require__("p/0c");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;

/***/ }),

/***/ "vHs2":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "wcxQ":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),

/***/ "wppe":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("MIhM");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

/***/ }),

/***/ "wrrS":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("z7ms"),
    isArrayLike = __webpack_require__("LN6c");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;

/***/ }),

/***/ "wrxj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__("tALL");
var Promise = global.Promise || __webpack_require__("Zt7E").Promise;

// This is the standalone browser build entry point
// Browser implementation of the Algolia Search JavaScript client,
// using XMLHttpRequest, XDomainRequest and JSONP as fallback
module.exports = function createAlgoliasearch(AlgoliaSearch, uaSuffix) {
  var inherits = __webpack_require__("+ZRW");
  var errors = __webpack_require__("QKhG");
  var inlineHeaders = __webpack_require__("QStr");
  var jsonpRequest = __webpack_require__("dhxR");
  var places = __webpack_require__("/f3m");
  uaSuffix = uaSuffix || '';

  if (false) {
    require('debug').enable('algoliasearch*');
  }

  function algoliasearch(applicationID, apiKey, opts) {
    var cloneDeep = __webpack_require__("S7SM");

    var getDocumentProtocol = __webpack_require__("bx4M");

    opts = cloneDeep(opts || {});

    if (opts.protocol === undefined) {
      opts.protocol = getDocumentProtocol();
    }

    opts._ua = opts._ua || algoliasearch.ua;

    return new AlgoliaSearchBrowser(applicationID, apiKey, opts);
  }

  algoliasearch.version = __webpack_require__("6O7z");
  algoliasearch.ua = 'Algolia for vanilla JavaScript ' + uaSuffix + algoliasearch.version;
  algoliasearch.initPlaces = places(algoliasearch);

  // we expose into window no matter how we are used, this will allow
  // us to easily debug any website running algolia
  global.__algolia = {
    debug: __webpack_require__("8NLT"),
    algoliasearch: algoliasearch
  };

  var support = {
    hasXMLHttpRequest: 'XMLHttpRequest' in global,
    hasXDomainRequest: 'XDomainRequest' in global
  };

  if (support.hasXMLHttpRequest) {
    support.cors = 'withCredentials' in new XMLHttpRequest();
  }

  function AlgoliaSearchBrowser() {
    // call AlgoliaSearch constructor
    AlgoliaSearch.apply(this, arguments);
  }

  inherits(AlgoliaSearchBrowser, AlgoliaSearch);

  AlgoliaSearchBrowser.prototype._request = function request(url, opts) {
    return new Promise(function wrapRequest(resolve, reject) {
      // no cors or XDomainRequest, no request
      if (!support.cors && !support.hasXDomainRequest) {
        // very old browser, not supported
        reject(new errors.Network('CORS not supported'));
        return;
      }

      url = inlineHeaders(url, opts.headers);

      var body = opts.body;
      var req = support.cors ? new XMLHttpRequest() : new XDomainRequest();
      var reqTimeout;
      var timedOut;
      var connected = false;

      reqTimeout = setTimeout(onTimeout, opts.timeouts.connect);
      // we set an empty onprogress listener
      // so that XDomainRequest on IE9 is not aborted
      // refs:
      //  - https://github.com/algolia/algoliasearch-client-js/issues/76
      //  - https://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
      req.onprogress = onProgress;
      if ('onreadystatechange' in req) req.onreadystatechange = onReadyStateChange;
      req.onload = onLoad;
      req.onerror = onError;

      // do not rely on default XHR async flag, as some analytics code like hotjar
      // breaks it and set it to false by default
      if (req instanceof XMLHttpRequest) {
        req.open(opts.method, url, true);
      } else {
        req.open(opts.method, url);
      }

      // headers are meant to be sent after open
      if (support.cors) {
        if (body) {
          if (opts.method === 'POST') {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Simple_requests
            req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
          } else {
            req.setRequestHeader('content-type', 'application/json');
          }
        }
        req.setRequestHeader('accept', 'application/json');
      }

      req.send(body);

      // event object not received in IE8, at least
      // but we do not use it, still important to note
      function onLoad() /* event */{
        // When browser does not supports req.timeout, we can
        // have both a load and timeout event, since handled by a dumb setTimeout
        if (timedOut) {
          return;
        }

        clearTimeout(reqTimeout);

        var out;

        try {
          out = {
            body: JSON.parse(req.responseText),
            responseText: req.responseText,
            statusCode: req.status,
            // XDomainRequest does not have any response headers
            headers: req.getAllResponseHeaders && req.getAllResponseHeaders() || {}
          };
        } catch (e) {
          out = new errors.UnparsableJSON({
            more: req.responseText
          });
        }

        if (out instanceof errors.UnparsableJSON) {
          reject(out);
        } else {
          resolve(out);
        }
      }

      function onError(event) {
        if (timedOut) {
          return;
        }

        clearTimeout(reqTimeout);

        // error event is trigerred both with XDR/XHR on:
        //   - DNS error
        //   - unallowed cross domain request
        reject(new errors.Network({
          more: event
        }));
      }

      function onTimeout() {
        timedOut = true;
        req.abort();

        reject(new errors.RequestTimeout());
      }

      function onConnect() {
        connected = true;
        clearTimeout(reqTimeout);
        reqTimeout = setTimeout(onTimeout, opts.timeouts.complete);
      }

      function onProgress() {
        if (!connected) onConnect();
      }

      function onReadyStateChange() {
        if (!connected && req.readyState > 1) onConnect();
      }
    });
  };

  AlgoliaSearchBrowser.prototype._request.fallback = function requestFallback(url, opts) {
    url = inlineHeaders(url, opts.headers);

    return new Promise(function wrapJsonpRequest(resolve, reject) {
      jsonpRequest(url, opts, function jsonpRequestDone(err, content) {
        if (err) {
          reject(err);
          return;
        }

        resolve(content);
      });
    });
  };

  AlgoliaSearchBrowser.prototype._promise = {
    reject: function rejectPromise(val) {
      return Promise.reject(val);
    },
    resolve: function resolvePromise(val) {
      return Promise.resolve(val);
    },
    delay: function delayPromise(ms) {
      return new Promise(function resolveOnTimeout(resolve /* , reject*/) {
        setTimeout(resolve, ms);
      });
    }
  };

  return algoliasearch;
};

/***/ }),

/***/ "ws1Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__("udZ4");
var version = __webpack_require__("cNwM");
var parseAlgoliaClientVersion = __webpack_require__("n3ha");

module.exports = function search(index, params) {
  var algoliaVersion = parseAlgoliaClientVersion(index.as._ua);
  if (algoliaVersion && algoliaVersion[0] >= 3 && algoliaVersion[1] > 20) {
    params = params || {};
    params.additionalUA = 'autocomplete.js ' + version;
  }
  return sourceFn;

  function sourceFn(query, cb) {
    index.search(query, params, function (error, content) {
      if (error) {
        _.error(error.message);
        return;
      }
      cb(content.hits, content);
    });
  }
};

/***/ }),

/***/ "wtMJ":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("lBq7"),
    mapCacheDelete = __webpack_require__("cDyG"),
    mapCacheGet = __webpack_require__("G3gK"),
    mapCacheHas = __webpack_require__("85ue"),
    mapCacheSet = __webpack_require__("UY82");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),

/***/ "xDQX":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("yEjJ");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "xe3X":
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__("WdKa"),
    LodashWrapper = __webpack_require__("3euO"),
    baseLodash = __webpack_require__("YaGB"),
    isArray = __webpack_require__("p/0c"),
    isObjectLike = __webpack_require__("OuyB"),
    wrapperClone = __webpack_require__("qnOU");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;

/***/ }),

/***/ "xqjy":
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__("mduf"),
    keys = __webpack_require__("HI10");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

/***/ }),

/***/ "y1nO":
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__("Sn5d"),
    findIndex = __webpack_require__("cKQ/");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;

/***/ }),

/***/ "y4rL":
/***/ (function(module, exports) {

exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */var debug;
/* nomin */if (typeof process === 'object' &&
/* nomin */process.env &&
/* nomin */process.env.NODE_DEBUG &&
/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */debug = function debug() {
    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */args.unshift('SEMVER');
    /* nomin */console.log.apply(console, args);
    /* nomin */
  };
  /* nomin */else
  /* nomin */debug = function debug() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';

// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i]) re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer) return version;

  if (typeof version !== 'string') return null;

  if (version.length > MAX_LENGTH) return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version)) return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}

exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose) return version;else version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');

  if (!(this instanceof SemVer)) return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m) throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');

  // numberify any prerelease numeric ids
  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
    if (/^[0-9]+$/.test(id)) {
      var num = +id;
      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
    }
    return id;
  });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function () {
  return this.version;
};

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) this.prerelease = [0];else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
        } else this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof loose === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre' + key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '':case '=':case '==':
      ret = eq(a, b, loose);break;
    case '!=':
      ret = neq(a, b, loose);break;
    case '>':
      ret = gt(a, b, loose);break;
    case '>=':
      ret = gte(a, b, loose);break;
    case '<':
      ret = lt(a, b, loose);break;
    case '<=':
      ret = lte(a, b, loose);break;
    default:
      throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose) return comp;else comp = comp.value;
  }

  if (!(this instanceof Comparator)) return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function (comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m) throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=') this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function () {
  return this.value;
};

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY) return true;

  if (typeof version === 'string') version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function (comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, loose) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
  var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, loose) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');

  return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};

exports.Range = Range;
function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range)) return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim());
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function () {
  return this.range;
};

Range.prototype.parseRange = function (range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function (comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

Range.prototype.intersects = function (range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-') pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-') pr = '-' + pr;
      if (M === '0') {
        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX) gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm) m = 0;
      if (xp) p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm) M = +M + 1;else m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {

  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;

  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;

  return (from + ' ' + to).trim();
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) return false;

  if (typeof version === 'string') version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version)) return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY) continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  });
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  });
  return min;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose);
  r2 = new Range(r2, loose);
  return r1.intersects(r2);
}

/***/ }),

/***/ "y5CM":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("6IAg");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "y81D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var net = __webpack_require__("QPpz"),
    tls = __webpack_require__("pgru"),
    http = __webpack_require__("gHkb"),
    https = __webpack_require__("XgVs"),
    events = __webpack_require__("FpCL"),
    assert = __webpack_require__("5E5G"),
    util = __webpack_require__("Bcfi"),
    Buffer = __webpack_require__("38Wu").Buffer;

exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;

function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port) {
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === host && pending.port === port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
  var self = this;

  // Legacy API: addRequest(req, host, port, path)
  if (typeof options === 'string') {
    options = {
      host: options,
      port: arguments[2],
      path: arguments[3]
    };
  }

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push({ host: options.host, port: options.port, request: req });
    return;
  }

  // If we are under maxSockets create a new one.
  self.createConnection({ host: options.host, port: options.port, request: req });
};

TunnelingAgent.prototype.createConnection = function createConnection(pending) {
  var self = this;

  self.createSocket(pending, function (socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    pending.request.onSocket(socket);

    function onFree() {
      self.emit('free', socket, pending.host, pending.port);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, { method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false
  });
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' + Buffer.from(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade); // for v0.6
  connectReq.once('connect', onConnect); // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function () {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode === 200) {
      assert.equal(head.length, 0);
      debug('tunneling connection has established');
      self.sockets[self.sockets.indexOf(placeholder)] = socket;
      cb(socket);
    } else {
      debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
      var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
    }
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket);
  if (pos === -1) return;

  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createConnection(pending);
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function (socket) {
    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, mergeOptions({}, self.options, { servername: options.host,
      socket: socket
    }));
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}

var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function debug() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  };
} else {
  debug = function debug() {};
}
exports.debug = debug; // for test

/***/ }),

/***/ "y8Tu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var invert = __webpack_require__("m2JM");
var keys = __webpack_require__("HI10");

var keys2Short = {
  advancedSyntax: 'aS',
  allowTyposOnNumericTokens: 'aTONT',
  analyticsTags: 'aT',
  analytics: 'a',
  aroundLatLngViaIP: 'aLLVIP',
  aroundLatLng: 'aLL',
  aroundPrecision: 'aP',
  aroundRadius: 'aR',
  attributesToHighlight: 'aTH',
  attributesToRetrieve: 'aTR',
  attributesToSnippet: 'aTS',
  disjunctiveFacetsRefinements: 'dFR',
  disjunctiveFacets: 'dF',
  distinct: 'd',
  facetsExcludes: 'fE',
  facetsRefinements: 'fR',
  facets: 'f',
  getRankingInfo: 'gRI',
  hierarchicalFacetsRefinements: 'hFR',
  hierarchicalFacets: 'hF',
  highlightPostTag: 'hPoT',
  highlightPreTag: 'hPrT',
  hitsPerPage: 'hPP',
  ignorePlurals: 'iP',
  index: 'idx',
  insideBoundingBox: 'iBB',
  insidePolygon: 'iPg',
  length: 'l',
  maxValuesPerFacet: 'mVPF',
  minimumAroundRadius: 'mAR',
  minProximity: 'mP',
  minWordSizefor1Typo: 'mWS1T',
  minWordSizefor2Typos: 'mWS2T',
  numericFilters: 'nF',
  numericRefinements: 'nR',
  offset: 'o',
  optionalWords: 'oW',
  page: 'p',
  queryType: 'qT',
  query: 'q',
  removeWordsIfNoResults: 'rWINR',
  replaceSynonymsInHighlight: 'rSIH',
  restrictSearchableAttributes: 'rSA',
  synonyms: 's',
  tagFilters: 'tF',
  tagRefinements: 'tR',
  typoTolerance: 'tT',
  optionalTagFilters: 'oTF',
  optionalFacetFilters: 'oFF',
  snippetEllipsisText: 'sET',
  disableExactOnAttributes: 'dEOA',
  enableExactOnSingleWordQuery: 'eEOSWQ'
};

var short2Keys = invert(keys2Short);

module.exports = {
  /**
   * All the keys of the state, encoded.
   * @const
   */
  ENCODED_PARAMETERS: keys(short2Keys),
  /**
   * Decode a shorten attribute
   * @param {string} shortKey the shorten attribute
   * @return {string} the decoded attribute, undefined otherwise
   */
  decode: function decode(shortKey) {
    return short2Keys[shortKey];
  },
  /**
   * Encode an attribute into a short version
   * @param {string} key the attribute
   * @return {string} the shorten attribute
   */
  encode: function encode(key) {
    return keys2Short[key];
  }
};

/***/ }),

/***/ "yEjJ":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("LIpy");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "yTXS":
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__("GRkX"),
    composeArgsRight = __webpack_require__("GdxW"),
    countHolders = __webpack_require__("low7"),
    createCtor = __webpack_require__("DrEq"),
    createRecurry = __webpack_require__("m+0x"),
    getHolder = __webpack_require__("coim"),
    reorder = __webpack_require__("MNt9"),
    replaceHolders = __webpack_require__("bU1I"),
    root = __webpack_require__("MIhM");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;

/***/ }),

/***/ "yeiR":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("Tnr5"),
    toKey = __webpack_require__("RQ0L");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "yfX1":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("MIhM");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),

/***/ "yj/w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = places;

var _events = __webpack_require__("FpCL");

var _events2 = _interopRequireDefault(_events);

var _algoliasearchLite = __webpack_require__("GpBR");

var _algoliasearchLite2 = _interopRequireDefault(_algoliasearchLite);

var _autocomplete = __webpack_require__("rodt");

var _autocomplete2 = _interopRequireDefault(_autocomplete);

__webpack_require__("oDcN");

var _createAutocompleteDataset = __webpack_require__("TL84");

var _createAutocompleteDataset2 = _interopRequireDefault(_createAutocompleteDataset);

var _clear = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.566 1.698L0 1.13 1.132 0l.565.566L6 4.868 10.302.566 10.868 0 12 1.132l-.566.565L7.132 6l4.302 4.3.566.568L10.868 12l-.565-.566L6 7.132l-4.3 4.302L1.13 12 0 10.868l.566-.565L4.868 6 .566 1.698z\"/></svg>\n";

var _clear2 = _interopRequireDefault(_clear);

var _address = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 14 20\"><path d=\"M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C5.62 9.5 4.5 8.38 4.5 7S5.62 4.5 7 4.5 9.5 5.62 9.5 7 8.38 9.5 7 9.5z\"/></svg>\n";

var _address2 = _interopRequireDefault(_address);

var _places = ".algolia-places {\n  width: 100%;\n}\n\n.ap-input, .ap-hint {\n  width: 100%;\n  padding-right: 35px;\n  padding-left: 16px;\n  line-height: 40px;\n  height: 40px;\n  border: 1px solid #CCC;\n  border-radius: 3px;\n  outline: none;\n  font: inherit;\n  appearance: none;\n  -webkit-appearance: none;\n}\n\n.ap-input::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.ap-input::-ms-clear {\n  display: none;\n}\n\n.ap-input:hover ~ .ap-input-icon svg,\n.ap-input:focus ~ .ap-input-icon svg,\n.ap-input-icon:hover svg {\n  fill: #aaaaaa;\n}\n\n.ap-dropdown-menu {\n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  margin-top: 3px;\n  overflow: hidden;\n}\n\n.ap-suggestion {\n  cursor: pointer;\n  height: 46px;\n  line-height: 46px;\n  padding-left: 18px;\n  overflow: hidden;\n}\n\n.ap-suggestion em {\n  font-weight: bold;\n  font-style: normal;\n}\n\n.ap-address {\n  font-size: smaller;\n  margin-left: 12px;\n  color: #aaaaaa;\n}\n\n.ap-suggestion-icon {\n  margin-right: 10px;\n  width: 14px;\n  height: 20px;\n  vertical-align: middle;\n}\n\n.ap-suggestion-icon svg {\n  -webkit-transform: scale(0.9) translateY(2px);\n          transform: scale(0.9) translateY(2px);\n  fill: #cfcfcf;\n}\n\n.ap-input-icon {\n  border: 0;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 16px;\n  outline: none;\n}\n\n.ap-input-icon.ap-icon-pin {\n  cursor: initial;\n}\n\n.ap-input-icon svg {\n  fill: #cfcfcf;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.ap-cursor {\n  background: #efefef;\n}\n\n.ap-cursor .ap-suggestion-icon svg {\n  -webkit-transform: scale(1) translateY(2px);\n          transform: scale(1) translateY(2px);\n  fill: #aaaaaa;\n}\n\n.ap-footer {\n  opacity: .8;\n  text-align: right;\n  padding: .5em 1em .5em 0;\n  font-size: 12px;\n  line-height: 12px;\n}\n\n.ap-footer a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.ap-footer a svg {\n  vertical-align: text-bottom;\n  max-width: 60px;\n}\n\n.ap-footer:hover {\n  opacity: 1;\n}\n";

var _places2 = _interopRequireDefault(_places);

var _insertCss = __webpack_require__("27o/");

var _insertCss2 = _interopRequireDefault(_insertCss);

var _errors = __webpack_require__("F43H");

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _insertCss2.default)(_places2.default, { prepend: true });

function places(options) {
  var container = options.container,
      style = options.style,
      _options$autocomplete = options.autocompleteOptions,
      userAutocompleteOptions = _options$autocomplete === undefined ? {} : _options$autocomplete;

  // multiple DOM elements targeted

  if (container instanceof NodeList) {
    if (container.length > 1) {
      throw new Error(_errors2.default.multiContainers);
    }

    // if single node NodeList received, resolve to the first one
    return places(_extends({}, options, { container: container[0] }));
  }

  // container sent as a string, resolve it for multiple DOM elements issue
  if (typeof container === 'string') {
    var resolvedContainer = document.querySelectorAll(container);
    return places(_extends({}, options, { container: resolvedContainer }));
  }

  // if not an <input>, error
  if (!(container instanceof HTMLInputElement)) {
    throw new Error(_errors2.default.badContainer);
  }

  var placesInstance = new _events2.default();
  var prefix = 'ap' + (style === false ? '-nostyle' : '');

  var autocompleteOptions = _extends({
    autoselect: true,
    hint: false,
    cssClasses: {
      root: 'algolia-places' + (style === false ? '-nostyle' : ''),
      prefix: prefix
    },
    debug: "production" === 'development'
  }, userAutocompleteOptions);

  var autocompleteDataset = (0, _createAutocompleteDataset2.default)(_extends({}, options, {
    algoliasearch: _algoliasearchLite2.default,
    onHits: function onHits(_ref) {
      var hits = _ref.hits,
          rawAnswer = _ref.rawAnswer,
          query = _ref.query;
      return placesInstance.emit('suggestions', {
        rawAnswer: rawAnswer,
        query: query,
        suggestions: hits
      });
    },
    onError: function onError(e) {
      return placesInstance.emit('error', e);
    },
    onRateLimitReached: function onRateLimitReached() {
      var listeners = placesInstance.listenerCount('limit');
      if (listeners === 0) {
        console.log(_errors2.default.rateLimitReached); // eslint-disable-line
        return;
      }

      placesInstance.emit('limit', { message: _errors2.default.rateLimitReached });
    },
    container: undefined
  }));

  var autocompleteInstance = (0, _autocomplete2.default)(container, autocompleteOptions, autocompleteDataset);
  var autocompleteContainer = container.parentNode;

  var autocompleteChangeEvents = ['selected', 'autocompleted'];

  autocompleteChangeEvents.forEach(function (eventName) {
    autocompleteInstance.on('autocomplete:' + eventName, function (_, suggestion) {
      placesInstance.emit('change', {
        rawAnswer: suggestion.rawAnswer,
        query: suggestion.query,
        suggestion: suggestion,
        suggestionIndex: suggestion.hitIndex
      });
    });
  });
  autocompleteInstance.on('autocomplete:cursorchanged', function (_, suggestion) {
    placesInstance.emit('cursorchanged', {
      rawAnswer: suggestion.rawAnswer,
      query: suggestion.query,
      suggestion: suggestion,
      suggestionIndex: suggestion.hitIndex
    });
  });

  var clear = document.createElement('button');
  clear.setAttribute('type', 'button');
  clear.classList.add(prefix + '-input-icon');
  clear.classList.add(prefix + '-icon-clear');
  clear.innerHTML = _clear2.default;
  autocompleteContainer.appendChild(clear);
  clear.style.display = 'none';

  var pin = document.createElement('button');
  pin.setAttribute('type', 'button');
  pin.classList.add(prefix + '-input-icon');
  pin.classList.add(prefix + '-icon-pin');
  pin.innerHTML = _address2.default;
  autocompleteContainer.appendChild(pin);

  pin.addEventListener('click', function () {
    return autocompleteInstance.focus();
  });
  clear.addEventListener('click', function () {
    autocompleteInstance.autocomplete.setVal('');
    autocompleteInstance.focus();
    clear.style.display = 'none';
    pin.style.display = '';
    placesInstance.emit('clear');
  });

  var previousQuery = '';

  var inputListener = function inputListener() {
    var query = autocompleteInstance.val();
    if (query === '') {
      pin.style.display = '';
      clear.style.display = 'none';
      if (previousQuery !== query) {
        placesInstance.emit('clear');
      }
    } else {
      clear.style.display = '';
      pin.style.display = 'none';
    }
    previousQuery = query;
  };

  autocompleteContainer.querySelector('.' + prefix + '-input').addEventListener('input', inputListener);

  var autocompleteIsomorphicMethods = ['open', 'close', 'getVal'];
  autocompleteIsomorphicMethods.forEach(function (methodName) {
    placesInstance[methodName] = function () {
      var _autocompleteInstance;

      (_autocompleteInstance = autocompleteInstance.autocomplete)[methodName].apply(_autocompleteInstance, arguments);
    };
  });

  placesInstance.destroy = function () {
    var _autocompleteInstance2;

    autocompleteContainer.querySelector('.' + prefix + '-input').removeEventListener('input', inputListener);

    (_autocompleteInstance2 = autocompleteInstance.autocomplete).destroy.apply(_autocompleteInstance2, arguments);
  };

  placesInstance.setVal = function () {
    var _autocompleteInstance3;

    previousQuery = arguments.length <= 0 ? undefined : arguments[0];
    (_autocompleteInstance3 = autocompleteInstance.autocomplete).setVal.apply(_autocompleteInstance3, arguments);
  };

  placesInstance.autocomplete = autocompleteInstance;

  return placesInstance;
}

/***/ }),

/***/ "ymsk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reduce = __webpack_require__("bxLG");
var find = __webpack_require__("y1nO");
var startsWith = __webpack_require__("Aa6+");

/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */
module.exports = function formatSort(sortBy, defaults) {
  return reduce(sortBy, function preparePredicate(out, sortInstruction) {
    var sortInstructions = sortInstruction.split(':');
    if (defaults && sortInstructions.length === 1) {
      var similarDefault = find(defaults, function (predicate) {
        return startsWith(predicate, sortInstruction[0]);
      });
      if (similarDefault) {
        sortInstructions = similarDefault.split(':');
      }
    }
    out[0].push(sortInstructions[0]);
    out[1].push(sortInstructions[1]);
    return out;
  }, [[], []]);
};

/***/ }),

/***/ "yubd":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("WqwZ"),
    createAssigner = __webpack_require__("gmQJ");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;

/***/ }),

/***/ "ywQn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim

var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("uTT0");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = function () {
	/* global window */
	if (typeof window === 'undefined') {
		return false;
	}
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}();
var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2);
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

/***/ }),

/***/ "yx+S":
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;

/***/ }),

/***/ "yzKG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findCountryCode;
function findCountryCode(tags) {
  for (var tagIndex = 0; tagIndex < tags.length; tagIndex++) {
    var tag = tags[tagIndex];
    var find = tag.match(/country\/(.*)?/);
    if (find) {
      return find[1];
    }
  }

  return undefined;
}

/***/ }),

/***/ "z7ms":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("xqjy"),
    createBaseEach = __webpack_require__("71Gl");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

/***/ }),

/***/ "zCYT":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("iKxp"),
    get = __webpack_require__("5U5Y"),
    hasIn = __webpack_require__("3Q8v"),
    isKey = __webpack_require__("2ibm"),
    isStrictComparable = __webpack_require__("E5qx"),
    matchesStrictComparable = __webpack_require__("sruz"),
    toKey = __webpack_require__("RQ0L");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ }),

/***/ "zZIM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var datasetKey = 'aaDataset';
var valueKey = 'aaValue';
var datumKey = 'aaDatum';

var _ = __webpack_require__("udZ4");
var DOM = __webpack_require__("BiYY");
var html = __webpack_require__("p0NR");
var css = __webpack_require__("nDR6");
var EventEmitter = __webpack_require__("VcxC");

// constructor
// -----------

function Dataset(o) {
  o = o || {};
  o.templates = o.templates || {};

  if (!o.source) {
    _.error('missing source');
  }

  if (o.name && !isValidName(o.name)) {
    _.error('invalid dataset name: ' + o.name);
  }

  // tracks the last query the dataset was updated for
  this.query = null;
  this._isEmpty = true;

  this.highlight = !!o.highlight;
  this.name = typeof o.name === 'undefined' || o.name === null ? _.getUniqueId() : o.name;

  this.source = o.source;
  this.displayFn = getDisplayFn(o.display || o.displayKey);

  this.templates = getTemplates(o.templates, this.displayFn);

  this.css = _.mixin({}, css, o.appendTo ? css.appendTo : {});
  this.cssClasses = o.cssClasses = _.mixin({}, css.defaultClasses, o.cssClasses || {});
  this.cssClasses.prefix = o.cssClasses.formattedPrefix || _.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);

  var clazz = _.className(this.cssClasses.prefix, this.cssClasses.dataset);
  this.$el = o.$menu && o.$menu.find(clazz + '-' + this.name).length > 0 ? DOM.element(o.$menu.find(clazz + '-' + this.name)[0]) : DOM.element(html.dataset.replace('%CLASS%', this.name).replace('%PREFIX%', this.cssClasses.prefix).replace('%DATASET%', this.cssClasses.dataset));

  this.$menu = o.$menu;
  this.clearCachedSuggestions();
}

// static methods
// --------------

Dataset.extractDatasetName = function extractDatasetName(el) {
  return DOM.element(el).data(datasetKey);
};

Dataset.extractValue = function extractValue(el) {
  return DOM.element(el).data(valueKey);
};

Dataset.extractDatum = function extractDatum(el) {
  var datum = DOM.element(el).data(datumKey);
  if (typeof datum === 'string') {
    // Zepto has an automatic deserialization of the
    // JSON encoded data attribute
    datum = JSON.parse(datum);
  }
  return datum;
};

// instance methods
// ----------------

_.mixin(Dataset.prototype, EventEmitter, {

  // ### private

  _render: function render(query, suggestions) {
    if (!this.$el) {
      return;
    }
    var that = this;

    var hasSuggestions;
    var renderArgs = [].slice.call(arguments, 2);
    this.$el.empty();

    hasSuggestions = suggestions && suggestions.length;
    this._isEmpty = !hasSuggestions;

    if (!hasSuggestions && this.templates.empty) {
      this.$el.html(getEmptyHtml.apply(this, renderArgs)).prepend(that.templates.header ? getHeaderHtml.apply(this, renderArgs) : null).append(that.templates.footer ? getFooterHtml.apply(this, renderArgs) : null);
    } else if (hasSuggestions) {
      this.$el.html(getSuggestionsHtml.apply(this, renderArgs)).prepend(that.templates.header ? getHeaderHtml.apply(this, renderArgs) : null).append(that.templates.footer ? getFooterHtml.apply(this, renderArgs) : null);
    }

    if (this.$menu) {
      this.$menu.addClass(this.cssClasses.prefix + (hasSuggestions ? 'with' : 'without') + '-' + this.name).removeClass(this.cssClasses.prefix + (hasSuggestions ? 'without' : 'with') + '-' + this.name);
    }

    this.trigger('rendered', query);

    function getEmptyHtml() {
      var args = [].slice.call(arguments, 0);
      args = [{ query: query, isEmpty: true }].concat(args);
      return that.templates.empty.apply(this, args);
    }

    function getSuggestionsHtml() {
      var args = [].slice.call(arguments, 0);
      var $suggestions;
      var nodes;
      var self = this;

      var suggestionsHtml = html.suggestions.replace('%PREFIX%', this.cssClasses.prefix).replace('%SUGGESTIONS%', this.cssClasses.suggestions);
      $suggestions = DOM.element(suggestionsHtml).css(this.css.suggestions);

      // jQuery#append doesn't support arrays as the first argument
      // until version 1.8, see http://bugs.jquery.com/ticket/11231
      nodes = _.map(suggestions, getSuggestionNode);
      $suggestions.append.apply($suggestions, nodes);

      return $suggestions;

      function getSuggestionNode(suggestion) {
        var $el;

        var suggestionHtml = html.suggestion.replace('%PREFIX%', self.cssClasses.prefix).replace('%SUGGESTION%', self.cssClasses.suggestion);
        $el = DOM.element(suggestionHtml).attr({
          role: 'option',
          id: ['option', Math.floor(Math.random() * 100000000)].join('-')
        }).append(that.templates.suggestion.apply(this, [suggestion].concat(args)));

        $el.data(datasetKey, that.name);
        $el.data(valueKey, that.displayFn(suggestion) || undefined); // this led to undefined return value
        $el.data(datumKey, JSON.stringify(suggestion));
        $el.children().each(function () {
          DOM.element(this).css(self.css.suggestionChild);
        });

        return $el;
      }
    }

    function getHeaderHtml() {
      var args = [].slice.call(arguments, 0);
      args = [{ query: query, isEmpty: !hasSuggestions }].concat(args);
      return that.templates.header.apply(this, args);
    }

    function getFooterHtml() {
      var args = [].slice.call(arguments, 0);
      args = [{ query: query, isEmpty: !hasSuggestions }].concat(args);
      return that.templates.footer.apply(this, args);
    }
  },

  // ### public

  getRoot: function getRoot() {
    return this.$el;
  },

  update: function update(query) {
    function handleSuggestions(suggestions) {
      // if the update has been canceled or if the query has changed
      // do not render the suggestions as they've become outdated
      if (!this.canceled && query === this.query) {
        // concat all the other arguments that could have been passed
        // to the render function, and forward them to _render
        var extraArgs = [].slice.call(arguments, 1);
        this.cacheSuggestions(query, suggestions, extraArgs);
        this._render.apply(this, [query, suggestions].concat(extraArgs));
      }
    }

    this.query = query;
    this.canceled = false;

    if (this.shouldFetchFromCache(query)) {
      handleSuggestions.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs));
    } else {
      this.source(query, handleSuggestions.bind(this));
    }
  },

  cacheSuggestions: function cacheSuggestions(query, suggestions, extraArgs) {
    this.cachedQuery = query;
    this.cachedSuggestions = suggestions;
    this.cachedRenderExtraArgs = extraArgs;
  },

  shouldFetchFromCache: function shouldFetchFromCache(query) {
    return this.cachedQuery === query && this.cachedSuggestions && this.cachedSuggestions.length;
  },

  clearCachedSuggestions: function clearCachedSuggestions() {
    delete this.cachedQuery;
    delete this.cachedSuggestions;
    delete this.cachedRenderExtraArgs;
  },

  cancel: function cancel() {
    this.canceled = true;
  },

  clear: function clear() {
    this.cancel();
    this.$el.empty();
    this.trigger('rendered', '');
  },

  isEmpty: function isEmpty() {
    return this._isEmpty;
  },

  destroy: function destroy() {
    this.clearCachedSuggestions();
    this.$el = null;
  }
});

// helper functions
// ----------------

function getDisplayFn(display) {
  display = display || 'value';

  return _.isFunction(display) ? display : displayFn;

  function displayFn(obj) {
    return obj[display];
  }
}

function getTemplates(templates, displayFn) {
  return {
    empty: templates.empty && _.templatify(templates.empty),
    header: templates.header && _.templatify(templates.header),
    footer: templates.footer && _.templatify(templates.footer),
    suggestion: templates.suggestion || suggestionTemplate
  };

  function suggestionTemplate(context) {
    return '<p>' + displayFn(context) + '</p>';
  }
}

function isValidName(str) {
  // dashes, underscores, letters, and numbers
  return (/^[_a-zA-Z0-9-]+$/.test(str)
  );
}

module.exports = Dataset;

/***/ }),

/***/ "zb3a":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("yfX1");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "zbTb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateTrees;

var last = __webpack_require__("8uUO");
var map = __webpack_require__("vGW8");
var reduce = __webpack_require__("bxLG");
var orderBy = __webpack_require__("CiGM");
var trim = __webpack_require__("GgRv");
var find = __webpack_require__("y1nO");
var pickBy = __webpack_require__("srTA");

var prepareHierarchicalFacetSortBy = __webpack_require__("ymsk");

function generateTrees(state) {
  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
    var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || '';
    var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
    var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
    var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
    var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));

    var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);

    var results = hierarchicalFacetResult;

    if (hierarchicalRootPath) {
      results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
    }

    return reduce(results, generateTreeFn, {
      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
      count: null, // root level, no count
      isRefined: true, // root level, always refined
      path: null, // root level, no path
      data: null
    });
  };
}

function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
  return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
    var parent = hierarchicalTree;

    if (currentHierarchicalLevel > 0) {
      var level = 0;

      parent = hierarchicalTree;

      while (level < currentHierarchicalLevel) {
        parent = parent && find(parent.data, { isRefined: true });
        level++;
      }
    }

    // we found a refined parent, let's add current level data under it
    if (parent) {
      // filter values in case an object has multiple categories:
      //   {
      //     categories: {
      //       level0: ['beers', 'bières'],
      //       level1: ['beers > IPA', 'bières > Belges']
      //     }
      //   }
      //
      // If parent refinement is `beers`, then we do not want to have `bières > Belges`
      // showing up

      var onlyMatchingValuesFn = filterFacetValues(parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);

      parent.data = orderBy(map(pickBy(hierarchicalFacetResult.data, onlyMatchingValuesFn), formatHierarchicalFacetValue(hierarchicalSeparator, currentRefinement)), sortBy[0], sortBy[1]);
    }

    return hierarchicalTree;
  };
}

function filterFacetValues(parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
  return function (facetCount, facetValue) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) {
      return false;
    }

    // we always want root levels (only when there is no prefix path)
    return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 ||
    // if there is a rootPath, being root level mean 1 level under rootPath
    hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 ||
    // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 ||
    // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 ||
    // facetValue is a child of the current parent, add it
    facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
  };
}

function formatHierarchicalFacetValue(hierarchicalSeparator, currentRefinement) {
  return function format(facetCount, facetValue) {
    return {
      name: trim(last(facetValue.split(hierarchicalSeparator))),
      path: facetValue,
      count: facetCount,
      isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
      data: null
    };
  };
}

/***/ }),

/***/ "zipZ":
/***/ (function(module, exports, __webpack_require__) {

var isNumber = __webpack_require__("Zva/");

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map