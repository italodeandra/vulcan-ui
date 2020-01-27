"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../Utils/classNames"));

require("./Spinner.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var className = _ref.className;
  return _react.default.createElement("div", {
    className: (0, _classNames.default)('vui-Spinner', className)
  }, _react.default.createElement("svg", {
    viewBox: "0 0 44 44"
  }, _react.default.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "20",
    fill: "none",
    strokeWidth: "4"
  })));
};

var _default = Spinner;
exports.default = _default;