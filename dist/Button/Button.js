import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
      props = _objectWithoutProperties(_ref, ["children", "className", "style", "outlined", "text", "icon", "onClick", "autoFocus", "type", "to", "setRef"]);

  type = type || 'button';
  var ref = useRef(null);
  className = classNames(className, 'vui-Button', !outlined && !text && !icon && 'contained', outlined && 'outlined', text && 'text', icon && 'icon');
  useEffect(function () {
    if (autoFocus) {
      ref.current.focus();
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
    type: type
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