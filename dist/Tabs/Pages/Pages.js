import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, useEffect, useRef, useState, useLayoutEffect } from 'react';
import './Pages.scss';
export var Pages = function Pages(_ref) {
  var children = _ref.children,
      tabs = _ref.tabs;
  var context = useContext(tabs);
  var pagesRef = useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      pagesHeight = _useState2[0],
      setPagesHeight = _useState2[1];

  var currentPageRef = useRef(context.currentPage);
  var removeHeightTimer = useRef(null);

  var setPagesSize = function setPagesSize() {
    setTimeout(function () {
      if (currentPageRef.current > -1) {
        var page = pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current];
        setPagesHeight(page.getBoundingClientRect().height);
      } else {
        setPagesHeight(0);
      }
    });
    clearTimeout(removeHeightTimer.current);
    removeHeightTimer.current = setTimeout(function () {
      setPagesHeight(undefined);
    }, 280);
  };

  useEffect(function () {
    if (currentPageRef.current > -1) {
      var page = pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current];
      setPagesHeight(page.getBoundingClientRect().height);
    } else {
      setPagesHeight(0);
    }

    currentPageRef.current = context.currentPage;
    setPagesSize();
  }, [context.currentPage]);
  useEffect(function () {
    setPagesSize();
    window.addEventListener('resize', setPagesSize);
    return function () {
      window.removeEventListener('resize', setPagesSize);
    };
  }, []);
  var style = {
    transform: "translateX(".concat(-(context.currentPage * 100), "%)"),
    height: pagesHeight
  };
  return React.createElement("div", {
    className: "vui-Tabs-Pages",
    ref: pagesRef
  }, React.createElement("div", {
    className: "pages-container",
    style: style
  }, children.map(function (c, i) {
    return _objectSpread({}, c, {
      props: _objectSpread({}, c.props, {
        tabs: tabs,
        key: i
      })
    });
  })));
};
export var Page = function Page(_ref2) {
  var children = _ref2.children,
      tabs = _ref2.tabs,
      key = _ref2.key;
  var ref = useRef(null);
  var context = useContext(tabs);
  var currentPageRef = useRef(context.currentPage);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  useEffect(function () {
    currentPageRef.current = context.currentPage;
    setShow(true);
    setTimeout(function () {
      if (key !== currentPageRef.current) {
        setShow(false);
      }
    }, 280);
  }, [context.currentPage, key]);
  useLayoutEffect(function () {
    ref.current.parentNode.parentNode.scrollTop = 0;
    ref.current.parentNode.parentNode.scrollLeft = 0;
  }, [show]);
  return React.createElement("div", {
    className: "vui-Tabs-Page",
    ref: ref
  }, show ? children : null);
};