import React, { useLayoutEffect, useRef } from 'react';

var Table = function Table(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky,
      style = _ref.style;
  var ref = useRef(null);
  useLayoutEffect(function () {
    if (sticky) {
      var handleResize = function handleResize() {
        var offsetTop = ref.current.offsetTop;
        var pageSize = window.innerHeight;

        if (offsetTop + ref.current.scrollHeight >= pageSize) {
          var height = pageSize - offsetTop;
          var pagination = ref.current.parentNode.querySelector(".vui-DataTablePagination");

          if (pagination) {
            height -= pagination.scrollHeight + 8;
          }

          ref.current.style.height = "".concat(height, "px");
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return function () {
        window.removeEventListener("resize", handleResize);
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return React.createElement("div", {
    className: "vui-DataTable-overflow",
    ref: ref,
    style: style
  }, React.createElement("table", {
    className: "vui-DataTable-Table"
  }, children));
};

export default Table;