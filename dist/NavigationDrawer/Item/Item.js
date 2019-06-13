import React from 'react';
import { NavLink } from 'react-router-dom';
import './Item.scss';

var Item = function Item(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      to = _ref.to,
      exact = _ref.exact,
      title = _ref.title,
      onClick = _ref.onClick,
      badge = _ref.badge;
  return React.createElement(NavLink, {
    className: "vui-NavigationDrawer-item",
    activeClassName: "active",
    exact: exact,
    to: to,
    title: title ? title : undefined,
    onClick: onClick
  }, icon, React.createElement("span", {
    className: "label"
  }, children), !!badge && React.createElement("div", {
    className: "badge"
  }, badge));
};

export default Item;