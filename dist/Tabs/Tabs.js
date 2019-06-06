import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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

Tabs.Tab = Tab;
Tabs.Pages = Pages;
Tabs.Page = Page;
Tabs.Context = TabsContext;
export default Tabs;