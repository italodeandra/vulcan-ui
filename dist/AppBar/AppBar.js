import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef } from 'react';
import { classNames, useScroll } from '../index';
import './AppBar.scss';

var AppBar = function AppBar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      sticky = _ref.sticky,
      setRef = _ref.setRef;
  var ref = useRef(null);
  var windowRef = useRef(window);

  var _useScroll = useScroll(windowRef),
      _useScroll2 = _slicedToArray(_useScroll, 1),
      isWindowScrolled = _useScroll2[0];

  className = classNames(className, 'vui-AppBar', sticky && 'sticky', sticky && !!isWindowScrolled && 'scrolled');
  useEffect(function () {
    if (setRef) {
      setRef.current = ref.current;
    }
  }, [setRef]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: className,
    ref: ref
  }, children), sticky && React.createElement("div", {
    className: "vui-AppBar-placeholder"
  }));
};

export default AppBar;