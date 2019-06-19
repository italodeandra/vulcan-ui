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
      badge = _ref.badge,
      url = _ref.url;
  children = React.createElement(React.Fragment, null, icon, React.createElement("span", {
    className: "label"
  }, children), !!badge && React.createElement("div", {
    className: "badge"
  }, badge));
  var elementProps = {
    className: 'vui-NavigationDrawer-item can-scroll',
    exact: exact,
    title: title ? title : undefined,
    onClick: onClick
  };
  return url ? React.createElement("a", Object.assign({}, elementProps, {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }), children) : React.createElement(NavLink, Object.assign({}, elementProps, {
    to: to,
    activeClassName: "active"
  }), children);
};

export default Item;