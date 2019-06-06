import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useEffect, useRef, useState } from 'react';
import './Tabs.scss';
import TabsContext from './TabsContext';

function Tabs(_ref) {
  var children = _ref.children,
      tabs = _ref.tabs;
  var context = useContext(tabs);
  var tabsRef = useRef(null);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      currentTabPosition = _useState2[0],
      setCurrentTabPosition = _useState2[1];

  useEffect(function () {
    var tabRect = tabsRef.current.querySelectorAll('.vui-Tabs-Tab')[context.currentPage].getBoundingClientRect();
    var tabsRect = tabsRef.current.getBoundingClientRect();
    setCurrentTabPosition({
      width: tabRect.width,
      top: tabsRect.top - tabRect.top + tabRect.height,
      left: tabRect.left - tabsRect.left
    });
  }, [context.currentPage]);
  return React.createElement("div", {
    className: "vui-Tabs",
    ref: tabsRef
  }, children.map(function (c, i) {
    return _objectSpread({}, c, {
      props: _objectSpread({}, c.props, {
        tabs: tabs,
        key: i
      })
    });
  }), React.createElement("div", {
    className: "active-indicator",
    style: currentTabPosition
  }));
}

var Tab = function Tab(_ref2) {
  var children = _ref2.children,
      tabs = _ref2.tabs,
      key = _ref2.key;
  var context = useContext(tabs);
  return React.createElement("button", {
    className: "vui-Tabs-Tab",
    type: "button",
    onClick: function onClick() {
      return context.setCurrentPage(key);
    }
  }, children);
};

var Pages = function Pages(_ref3) {
  var children = _ref3.children,
      tabs = _ref3.tabs;
  var context = useContext(tabs);
  var pagesRef = useRef(null);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pagesHeight = _useState4[0],
      setPagesHeight = _useState4[1];

  var currentPageRef = useRef(context.currentPage);

  var setPagesSize = function setPagesSize() {
    setTimeout(function () {
      setPagesHeight(pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current].getBoundingClientRect().height);
    });
  };

  useEffect(function () {
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

var Page = function Page(_ref4) {
  var children = _ref4.children,
      tabs = _ref4.tabs,
      key = _ref4.key;
  var context = useContext(tabs);
  var currentPageRef = useRef(context.currentPage);

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

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

Tabs.Tab = Tab;
Tabs.Pages = Pages;
Tabs.Page = Page;
Tabs.Context = TabsContext;
export default Tabs;