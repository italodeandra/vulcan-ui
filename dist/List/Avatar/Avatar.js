"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../Utils/classNames"));

require("./Avatar.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var children = _ref.children,
      circle = _ref.circle,
      large = _ref.large,
      right = _ref.right;
  var className = (0, _classNames.default)("vui-ListItem-Avatar", circle && "circle", large && "large", right && "right");
  return _react.default.createElement("div", {
    className: className
  }, children);
};

var _default = Avatar;
exports.default = _default;