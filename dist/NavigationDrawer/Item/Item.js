import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from '../../Utils/classNames';
import './Item.scss';

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
  children = React.createElement(React.Fragment, null, icon, React.createElement("span", {
    className: "label"
  }, children), !!badge && React.createElement("div", {
    className: "badge"
  }, badge));
  var elementProps = {
    className: classNames('vui-NavigationDrawer-item', 'can-scroll', disabled && 'disabled'),
    exact: exact,
    title: title ? title : undefined,
    onClick: !disabled ? onClick : undefined
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