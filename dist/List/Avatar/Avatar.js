import React from "react";
import classNames from "../../Utils/classNames";
import "./Avatar.sass";

var Avatar = function Avatar(_ref) {
  var children = _ref.children,
      circle = _ref.circle,
      large = _ref.large,
      right = _ref.right;
  var className = classNames("vui-ListItem-Avatar", circle && "circle", large && "large", right && "right");
  return React.createElement("div", {
    className: className
  }, children);
};

export default Avatar;