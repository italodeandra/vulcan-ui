import React from "react";
import classNames from "../../Utils/classNames";
import "./Action.sass";

var Action = function Action(_ref) {
  var children = _ref.children,
      right = _ref.right;
  var className = classNames("vui-List-Action", right && "right");
  return React.createElement("div", {
    className: className
  }, children);
};

export default Action;