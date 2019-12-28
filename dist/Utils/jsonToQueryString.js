"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function jsonToQueryString(json) {
  var params = Object.keys(json).map(function (key) {
    var value = json[key];

    if (typeof value !== 'undefined') {
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }

    return null;
  }).filter(function (item) {
    return item;
  });
  return (params.length ? '?' : '') + params.join('&');
}

var _default = jsonToQueryString;
exports.default = _default;