import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import TextField from '../TextField';

var Select = function Select(_ref) {
  var setRef = _ref.setRef,
      options = _ref.options,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["setRef", "options", "value"]);

  value = typeof value === 'string' ? value : JSON.stringify(value);
  return React.createElement(TextField, Object.assign({}, props, {
    inputElement: function inputElement(props) {
      return React.createElement("select", Object.assign({}, props, {
        value: value
      }), React.createElement("option", null), options && options.map(function (o, i) {
        return React.createElement("option", {
          value: o.value,
          key: i.toString() + o.value
        }, o.label);
      }));
    }
  }));
};

export default Select;