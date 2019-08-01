import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import "./Checkbox.sass";

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["id", "label", "onChange"]);

  var handleChange = function handleChange() {
    onChange && onChange();
  };

  return React.createElement("div", {
    className: "vui-Checkbox"
  }, React.createElement("input", Object.assign({
    id: id,
    type: "checkbox",
    onChange: handleChange
  }, props)), React.createElement("label", {
    htmlFor: id
  }, label));
};

export default Checkbox;