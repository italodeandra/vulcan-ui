import React from "react";
import "./Subtitle.sass";

var Subtitle = function Subtitle(_ref) {
  var children = _ref.children;
  return React.createElement("h2", {
    className: "vui-ListItem-Subtitle"
  }, children);
};

export default Subtitle;