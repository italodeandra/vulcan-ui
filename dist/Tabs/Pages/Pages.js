import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useEffect, useRef, useState } from 'react';
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
      setPagesHeight(pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current].getBoundingClientRect().height);
    });
    clearTimeout(removeHeightTimer.current);
    removeHeightTimer.current = setTimeout(function () {
      setPagesHeight(undefined);
    }, 280);
  };

  useEffect(function () {
    setPagesHeight(pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current].getBoundingClientRect().height);
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
  var context = useContext(tabs);
  var currentPageRef = useRef(context.currentPage);

  var _useState3 = useState(true),
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
  return React.createElement("div", {
    className: "vui-Tabs-Page"
  }, show ? children : null);
};