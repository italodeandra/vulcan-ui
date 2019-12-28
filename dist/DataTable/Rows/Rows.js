"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rows = function Rows(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tbody", {
    className: "vui-DataTable-Rows"
  }, children);
};

var _default = Rows;
exports.default = _default;