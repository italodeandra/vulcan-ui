import React, { useRef } from "react";
import classNames from "../../Utils/classNames";
import "./ListItem.sass";

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  var ref = useRef(null);
  var className = classNames("vui-ListItem", onClick && "link");

  function handleClick() {
    ref.current.blur();
    onClick && onClick();
  }

  return React.createElement("div", {
    ref: ref,
    className: className,
    onClick: handleClick,
    tabIndex: onClick ? "0" : undefined
  }, children);
};

export default ListItem;