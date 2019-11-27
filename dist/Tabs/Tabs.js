import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Page, Pages } from './Pages/Pages';
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
    var tabRect;
    var tabsRect = tabsRef.current.getBoundingClientRect();

    if (context.currentPage > -1) {
      tabRect = tabsRef.current.querySelectorAll('.vui-Tabs-Tab')[context.currentPage].getBoundingClientRect();
    } else {
      tabRect = {
        width: 0,
        height: 0,
        top: tabsRect.top - tabsRect.height,
        left: tabsRect.left
      };
    }

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

Tabs.Tab = Tab;
Tabs.Pages = Pages;
Tabs.Page = Page;
Tabs.Context = TabsContext;
export default Tabs;