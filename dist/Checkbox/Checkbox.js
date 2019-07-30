import React from "react";
import "./Checkbox.sass";

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange;
  return React.createElement("div", {
    className: "vui-Checkbox"
  }, React.createElement("input", {
    id: id,
    type: "checkbox",
    onChange: onChange
  }), React.createElement("label", {
    htmlFor: id
  }, label));
};

export default Checkbox;