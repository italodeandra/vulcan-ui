import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';

var FixedRow = function Row(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("tr", Object.assign({
    className: "vui-DataTable-Row vui-DataTable-FixedRow"
  }, props), children);
};

export default FixedRow;