import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import DatePicker from "react-datepicker";
import TextField from '../TextField';
import 'react-datepicker/dist/react-datepicker.css';
import './Date.scss';

var Date = function Date(_ref) {
  var setRef = _ref.setRef,
      options = _ref.options,
      value = _ref.value,
      readOnly = _ref.readOnly,
      props = _objectWithoutProperties(_ref, ["setRef", "options", "value", "readOnly"]);

  return React.createElement(TextField, Object.assign({}, props, {
    value: value,
    readOnly: readOnly,
    inputElement: function inputElement(props) {
      return React.createElement(DatePicker, Object.assign({}, props, {
        selected: props.value
      }));
    }
  }));
};

export default Date;