import React from 'react';
import { classNames, Icon } from '../../index';
import './Subtitle.scss';

var Subtitle = function Subtitle(_ref) {
  var children = _ref.children,
      collapse = _ref.collapse,
      onCollapseChange = _ref.onCollapseChange;

  var handleCollapseClick = function handleCollapseClick() {
    onCollapseChange && onCollapseChange(!collapse);
  };

  return React.createElement("div", {
    className: classNames('vui-NavigationDrawer-subtitle', onCollapseChange && 'pointer'),
    onClick: handleCollapseClick
  }, children, onCollapseChange && React.createElement(Icon, {
    className: classNames('chevron', collapse && 'collapse'),
    name: "chevronUp"
  }));
};

export default Subtitle;