import React, { useEffect, useRef } from 'react';

var Table = function Table(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky,
      style = _ref.style;
  var ref = useRef(null);
  useEffect(function () {
    if (sticky) {
      var handleResize = function handleResize() {
        var offsetTop = ref.current.offsetTop;
        var pageSize = window.innerHeight;

        if (offsetTop + ref.current.scrollHeight >= pageSize) {
          ref.current.style.height = "".concat(pageSize - offsetTop, "px");
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return function () {
        return window.removeEventListener("resize", handleResize);
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