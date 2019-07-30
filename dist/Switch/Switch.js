import React from "react";
import "./Switch.sass";

var Switch = function Switch(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange;
  return React.createElement("div", {
    className: "vui-Switch"
  }, React.createElement("input", {
    id: id,
    type: "checkbox",
    onClick: onChange
  }), React.createElement("label", {
    htmlFor: id
  }, label));
};

export default Switch;