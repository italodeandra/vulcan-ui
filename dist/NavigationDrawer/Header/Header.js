import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { useMobile } from '../../index';
import './Header.scss';

var Header = function Header(_ref) {
  var children = _ref.children,
      customMobileWidthViewport = _ref.customMobileWidthViewport;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useMobile = useMobile(customMobileWidthViewport),
      _useMobile2 = _slicedToArray(_useMobile, 1),
      isMobile = _useMobile2[0];

  return isMobile ? React.createElement("div", {
    className: "vui-NavigationDrawer-header"
  }, children) : null;
};

export default Header;