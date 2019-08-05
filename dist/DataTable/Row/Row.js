import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { classNames } from '../../index';
import './Row.sass';

var Row = function Row(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "onClick", "className"]);

  return React.createElement("tr", Object.assign({
    className: classNames('vui-DataTable-Row', className, !!onClick && 'clickable'),
    onClick: onClick
  }, props), children);
};

export default Row;