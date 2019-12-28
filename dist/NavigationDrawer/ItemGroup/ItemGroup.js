"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemGroup = function ItemGroup(_ref) {
  var children = _ref.children,
      collapse = _ref.collapse;
  return _react.default.createElement(_react.default.Fragment, null, !collapse && _react.default.createElement("div", {
    className: "vui-NavigationDrawer-item-group"
  }, children));
};

var _default = ItemGroup;
exports.default = _default;