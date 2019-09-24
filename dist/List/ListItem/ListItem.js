import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useState } from 'react';
import classNames from '../../Utils/classNames';
import './ListItem.sass';

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      selectable = _ref.selectable,
      props = _objectWithoutProperties(_ref, ["children", "onClick", "selectable"]);

  var ref = useRef(null);

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var className = classNames("vui-ListItem", onClick && "link", active && "active", props.active && "active");

  function handleClick(e) {
    ref.current.blur();

    if (selectable) {
      setActive(!active);
    }

    onClick && onClick(e);
  }

  delete props.active;
  return React.createElement("div", Object.assign({
    ref: ref,
    className: className,
    onClick: handleClick,
    tabIndex: onClick ? '0' : undefined
  }, props), children);
};

export default ListItem;