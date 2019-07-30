import React from "react";
import classNames from "../../Utils/classNames";
import "./Icon.sass";

var Icon = function Icon(_ref) {
  var children = _ref.children,
      right = _ref.right;
  var className = classNames("vui-ListItem-Icon", right && "right");
  return React.createElement("div", {
    className: className
  }, children);
};

export default Icon;