"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var polyfill = function polyfill() {
  /* padEnd > */
  // https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
  if (!String.prototype.padEnd) {
    // eslint-disable-next-line no-extend-native
    String.prototype.padEnd = function padEnd(targetLength, padString) {
      targetLength = targetLength >> 0; //floor if number or convert non-number to 0;

      padString = String(typeof padString !== 'undefined' ? padString : ' ');

      if (this.length > targetLength) {
        return String(this);
      } else {
        targetLength = targetLength - this.length;

        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }

        return String(this) + padString.slice(0, targetLength);
      }
    };
  }
  /* < padEnd */

  /**
   * String.padStart()
   * version 1.0.1
   * Feature            Chrome  Firefox Internet Explorer   Opera    Safari    Edge
   * Basic support    57    51      (No)                44    10      15
   * -------------------------------------------------------------------------------
   */


  if (!String.prototype.padStart) {
    // eslint-disable-next-line no-extend-native
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0; //floor if number or convert non-number to 0;

      padString = String(typeof padString !== 'undefined' ? padString : ' ');

      if (this.length > targetLength) {
        return String(this);
      } else {
        targetLength = targetLength - this.length;

        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }

        return padString.slice(0, targetLength) + String(this);
      }
    };
  }
  /* closest > */
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }
  /* < closest */

  /* findIndex > */
  // https://tc39.github.io/ecma262/#sec-array.prototype.findindex


  if (!Array.prototype.findIndex) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(Array.prototype, 'findIndex', {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


        var thisArg = arguments[1]; // 5. Let k be 0.

        var k = 0; // 6. Repeat, while k < len

        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return k.
          var kValue = o[k];

          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          } // e. Increase k by 1.


          k++;
        } // 7. Return -1.


        return -1;
      },
      configurable: true,
      writable: true
    });
  }
  /* < findIndex*/

  /* array methos to other types */


  NodeList.prototype.findIndex = Array.prototype.findIndex;
  HTMLCollection.prototype.indexOf = Array.prototype.indexOf;
};

var _default = polyfill;
exports.default = _default;