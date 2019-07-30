import React from "react";
import "./Title.sass";

var Title = function Title(_ref) {
  var children = _ref.children;
  return React.createElement("h1", {
    className: "vui-ListItem-Title"
  }, children);
};

export default Title;