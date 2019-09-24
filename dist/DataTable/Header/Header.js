import React from 'react';
import { classNames } from '../../index';

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: classNames('vui-DataTable-Header', className)
  }, children);
};

export default Header;