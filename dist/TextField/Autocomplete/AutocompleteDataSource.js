"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../../index");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var AutocompleteDataSource = function AutocompleteDataSource(request, query) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  query = query || '';
  var url;
  var method = 'get';
  var data;
  var headers = {};

  if (typeof request === 'string') {
    url = request;
  }

  if (typeof request === 'function') {
    url = request({
      query: query,
      page: page
    });
  }

  if (_typeof(request) === 'object') {
    url = request.url;
    method = request.method || method;
    data = typeof request.data !== 'function' ? request.data : request.data({
      query: query,
      page: page
    });
    headers = request.headers;

    if (method === 'get') {
      url = url + (0, _index.jsonToQueryString)(data);
      data = null;
    }
  }

  return {
    get: function get() {
      var _jsonToParams = (0, _index.jsonToParams)(url, data),
          newUrl = _jsonToParams.url,
          newData = _jsonToParams.data;

      var config = {
        url: newUrl,
        method: method,
        headers: headers,
        data: newData
      };
      return (0, _index.axios)(config);
    }
  };
};

var _default = AutocompleteDataSource;
exports.default = _default;