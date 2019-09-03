import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../index';
import './Button.scss';

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      outlined = _ref.outlined,
      text = _ref.text,
      icon = _ref.icon,
      onClick = _ref.onClick,
      autoFocus = _ref.autoFocus,
      type = _ref.type,
      to = _ref.to,
      setRef = _ref.setRef,
      disabled = _ref.disabled,
      fab = _ref.fab,
      props = _objectWithoutProperties(_ref, ["children", "className", "style", "outlined", "text", "icon", "onClick", "autoFocus", "type", "to", "setRef", "disabled", "fab"]);

  type = type || 'button';
  var ref = useRef(null);
  className = classNames(className, 'vui-Button', !outlined && !text && !icon && !fab && 'contained', outlined && 'outlined', text && 'text', icon && 'icon', disabled && 'disabled', fab && 'fab');
  useEffect(function () {
    if (autoFocus) {
      setTimeout(function () {
        ref.current.focus();
      });
    }
  }, [autoFocus]);
  useEffect(function () {
    if (setRef) {
      setRef.current = ref.current;
    }
  }, [setRef]);
  props = _objectSpread({}, props, {
    ref: ref,
    className: className,
    style: style,
    onClick: onClick,
    'auto-focus': autoFocus ? 'true' : undefined,
    type: type,
    disabled: disabled
  });

  if (to) {
    return React.createElement(Link, Object.assign({
      to: to
    }, props), children);
  } else {
    return React.createElement("button", props, children);
  }
};

export default Button;