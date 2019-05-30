import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { caretPosition } from '../../index';
import TextField from '../TextField';
import NumberFormatter from './NumberFormatter';

var Number = function Number(_ref) {
  var maskConfig = _ref.maskConfig,
      props = _objectWithoutProperties(_ref, ["maskConfig"]);

  var onFocus = function onFocus(e) {
    props.onFocus && props.onFocus(e);
    var target = e.target;

    if (maskConfig && (maskConfig.decimal || maskConfig.money)) {
      if (target.value === '') {
        props.onChange && props.onChange('0.00');
      }

      caretPosition.set(target, target.value.length);
    }
  };

  return React.createElement(TextField, Object.assign({}, props, {
    onFocus: onFocus,
    format: NumberFormatter(maskConfig)
  }));
};

export default Number;