import React, { useContext, useLayoutEffect, useRef } from 'react';
import { classNames } from '../..';
import SearchRow from '../SearchRow/SearchRow';
import { Context } from '../DataTable';

var Columns = function Columns(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky;

  var _useContext = useContext(Context),
      isSearchActive = _useContext.isSearchActive;

  var ref = useRef(null);
  var className = classNames('vui-DataTable-Columns', sticky && 'sticky');
  useLayoutEffect(function () {
    var overflow = ref.current.parentNode.parentNode;

    if (sticky && overflow.classList.contains("vui-DataTable-overflow")) {
      overflow.classList.add("sticky");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return React.createElement("thead", {
    ref: ref,
    className: className
  }, React.createElement("tr", null, children), isSearchActive && React.createElement(SearchRow, null));
};

export default Columns;