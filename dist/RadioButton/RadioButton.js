import React from "react";
import "./RadioButton.sass";

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      onChange = _ref.onChange;
  return React.createElement("div", {
    className: "vui-RadioButton"
  }, React.createElement("input", {
    id: id,
    name: name,
    type: "radio",
    onChange: onChange
  }), React.createElement("label", {
    htmlFor: id
  }, label));
};

export default RadioButton;