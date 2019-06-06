import React, { useEffect, useRef } from 'react';
import { classNames } from '../index';
import './Button.scss';

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      outlined = _ref.outlined,
      text = _ref.text,
      icon = _ref.icon,
      onClick = _ref.onClick,
      autoFocus = _ref.autoFocus,
      type = _ref.type;
  type = type || 'button';
  var ref = useRef(null);
  className = classNames(className, 'vui-Button', !outlined && !text && !icon && 'contained', outlined && 'outlined', text && 'text', icon && 'icon');
  useEffect(function () {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  return React.createElement("button", {
    ref: ref,
    className: className,
    onClick: onClick,
    "auto-focus": autoFocus ? 'true' : undefined,
    type: type
  }, children);
};

export default Button;