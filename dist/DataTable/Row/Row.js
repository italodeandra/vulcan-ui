import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';

var Row = function Row(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("tr", Object.assign({
    className: "vui-DataTable-Row"
  }, props), children);
};

export default Row;