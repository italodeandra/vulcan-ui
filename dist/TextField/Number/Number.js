import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import TextField from '../TextField';
import NumberFormatter from './NumberFormatter';

var Number = function Number(_ref) {
  var maskConfig = _ref.maskConfig,
      props = _objectWithoutProperties(_ref, ["maskConfig"]);

  maskConfig = maskConfig || {};

  if (maskConfig.decimal && typeof maskConfig.decimal !== 'number' || !maskConfig.decimal && maskConfig.money) {
    maskConfig.decimal = 2;
  }

  var onFocus = function onFocus(e) {
    props.onFocus && props.onFocus(e);
  };

  return React.createElement(TextField, Object.assign({}, props, {
    onFocus: onFocus,
    format: NumberFormatter(maskConfig)
  }));
};

export default Number;