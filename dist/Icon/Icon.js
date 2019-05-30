import React from 'react';
import home from './icons/home';
import menu from './icons/menu';
import './Icon.scss';
var icons = {
  home: home,
  menu: menu
};

var Icon = function Icon(_ref) {
  var name = _ref.name;
  return React.createElement("div", {
    className: "vui-Icon"
  }, icons[name]());
};

export default Icon;