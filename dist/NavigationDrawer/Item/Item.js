"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _classNames = _interopRequireDefault(require("../../Utils/classNames"));

require("./Item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Item = function Item(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      to = _ref.to,
      exact = _ref.exact,
      title = _ref.title,
      onClick = _ref.onClick,
      badge = _ref.badge,
      url = _ref.url,
      disabled = _ref.disabled;
  children = _react.default.createElement(_react.default.Fragment, null, icon, _react.default.createElement("span", {
    className: "label"
  }, children), !!badge && _react.default.createElement("div", {
    className: "badge"
  }, badge));
  var elementProps = {
    className: (0, _classNames.default)('vui-NavigationDrawer-item', 'can-scroll', disabled && 'disabled'),
    exact: exact,
    title: title ? title : undefined,
    onClick: !disabled ? onClick : undefined
  };
  return url ? _react.default.createElement("a", _extends({}, elementProps, {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }), children) : _react.default.createElement(_reactRouterDom.NavLink, _extends({}, elementProps, {
    to: to,
    activeClassName: "active"
  }), children);
};

var _default = Item;
exports.default = _default;