"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Subtitle.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subtitle = function Subtitle(_ref) {
  var children = _ref.children;
  return _react.default.createElement("h2", {
    className: "vui-ListItem-Subtitle"
  }, children);
};

var _default = Subtitle;
exports.default = _default;