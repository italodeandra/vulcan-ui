"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../Utils/classNames"));

require("./Action.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = function Action(_ref) {
  var children = _ref.children,
      right = _ref.right;
  var className = (0, _classNames.default)("vui-List-Action", right && "right");
  return _react.default.createElement("div", {
    className: className
  }, children);
};

var _default = Action;
exports.default = _default;