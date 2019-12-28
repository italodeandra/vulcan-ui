"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "vui-ListItem-Content"
  }, children);
};

var _default = Content;
exports.default = _default;