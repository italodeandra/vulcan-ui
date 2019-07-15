import React from 'react';

var Columns = function Columns(_ref) {
  var children = _ref.children;
  return React.createElement("thead", {
    className: "vui-DataTable-Columns"
  }, React.createElement("tr", null, children));
};

export default Columns;