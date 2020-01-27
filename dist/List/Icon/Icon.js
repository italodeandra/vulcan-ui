"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../Utils/classNames"));

require("./Icon.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var children = _ref.children,
      right = _ref.right;
  var className = (0, _classNames.default)("vui-ListItem-Icon", right && "right");
  return _react.default.createElement("div", {
    className: className
  }, children);
};

var _default = Icon;
exports.default = _default;