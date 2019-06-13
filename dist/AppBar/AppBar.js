import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
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

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  className = classNames(className, 'vui-AppBar', sticky && 'sticky', sticky && !!isWindowScrolled && 'scrolled');
  useEffect(function () {
    if (setRef) {
      setRef.current = ref.current;
    }
  }, [setRef]);
  useEffect(function () {
    setHeight(ref.current.getBoundingClientRect().height);
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: className,
    ref: ref,
    style: {
      height: height
    }
  }, children), sticky && React.createElement("div", {
    className: "vui-AppBar-placeholder",
    style: {
      height: height
    }
  }));
};

AppBar.Row = function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      children = _ref2.children;
  return React.createElement("div", {
    className: classNames(className, 'vui-AppBar-row'),
    style: style
  }, children);
};

export default AppBar;