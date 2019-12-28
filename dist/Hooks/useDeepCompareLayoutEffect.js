"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deepCompareEquals(a, b) {
  return (0, _lodash.default)(a, b);
}

function useDeepCompareMemoize(value) {
  var ref = (0, _react.useRef)(null);

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(callback, dependencies) {
  (0, _react.useLayoutEffect)(callback, useDeepCompareMemoize(dependencies));
}

var _default = useDeepCompareEffect;
exports.default = _default;