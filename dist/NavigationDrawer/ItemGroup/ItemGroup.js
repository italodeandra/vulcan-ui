import React from 'react';

var ItemGroup = function ItemGroup(_ref) {
  var children = _ref.children,
      collapse = _ref.collapse;
  return React.createElement(React.Fragment, null, !collapse && React.createElement("div", {
    className: "vui-NavigationDrawer-item-group"
  }, children));
};

export default ItemGroup;