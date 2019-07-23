import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from '../../Utils/classNames';

var Footer = function Footer(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky,
      props = _objectWithoutProperties(_ref, ["children", "sticky"]);

  var className = classNames("vui-DataTable-Row vui-DataTable-Footer", sticky && 'sticky');
  return React.createElement("tfoot", Object.assign({
    className: className
  }, props), children);
};

export default Footer;