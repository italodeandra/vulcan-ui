"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _index.classNames)('vui-DataTable-Header', className)
  }, children);
};

var _default = Header;
exports.default = _default;