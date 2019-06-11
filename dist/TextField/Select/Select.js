import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import TextField from '../TextField';

var Select = function Select(_ref) {
  var setRef = _ref.setRef,
      options = _ref.options,
      value = _ref.value,
      readOnly = _ref.readOnly,
      props = _objectWithoutProperties(_ref, ["setRef", "options", "value", "readOnly"]);

  var stringValue = typeof value === 'string' ? value : JSON.stringify(value);
  return React.createElement(TextField, Object.assign({}, props, {
    value: value,
    readOnly: readOnly,
    inputElement: function inputElement(props) {
      return React.createElement("select", Object.assign({}, props, {
        value: stringValue
      }), React.createElement("option", {
        disabled: readOnly
      }), options && options.map(function (o, i) {
        return React.createElement("option", {
          key: i.toString() + o.value,
          value: o.value,
          disabled: readOnly
        }, o.label);
      }));
    }
  }));
};

export default Select;