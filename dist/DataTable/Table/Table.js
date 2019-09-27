import React, { useContext, useLayoutEffect, useRef } from 'react';
import { classNames } from '../../index';
import { Context } from '../DataTable';

var Table = function Table(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky,
      style = _ref.style,
      className = _ref.className;
  var ref = useRef(null);

  var _useContext = useContext(Context),
      filter = _useContext.filter;

  useLayoutEffect(function () {
    if (sticky) {
      var handleResize = function handleResize() {
        var offsetTop = ref.current.offsetTop;
        var pageSize = window.innerHeight;
        var height = pageSize - offsetTop;
        var pagination = ref.current.parentNode.querySelector('.vui-DataTablePagination');

        if (pagination) {
          height -= pagination.scrollHeight + 8;
        }

        ref.current.style.height = "".concat(height, "px");
      };

      handleResize();
      setTimeout(handleResize, 100);
      setTimeout(handleResize, 1000);
      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [filter]);
  return React.createElement("div", {
    className: classNames('vui-DataTable-overflow', className),
    ref: ref,
    style: style
  }, React.createElement("table", {
    className: "vui-DataTable-Table"
  }, children));
};

export default Table;