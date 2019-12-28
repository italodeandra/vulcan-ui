"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Overline.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overline = function Overline(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "vui-ListItem-Overline"
  }, children);
};

var _default = Overline;
exports.default = _default;