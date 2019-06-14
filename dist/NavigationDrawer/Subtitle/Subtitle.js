import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo } from 'react';
import { classNames, Icon, useLocalStorage } from '../../index';
import './Subtitle.scss';
var vuiNavigationDrawerItemGroupCollapseIndex = 0;

var Subtitle = function Subtitle(_ref) {
  var children = _ref.children,
      collapseId = _ref.collapseId,
      onCollapse = _ref.onCollapse;

  var _useLocalStorage = useLocalStorage('vuiNavigationDrawerItemGroupCollapse' + useMemo(function () {
    return collapseId ? collapseId : ++vuiNavigationDrawerItemGroupCollapseIndex;
  }, [collapseId])),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      collapse = _useLocalStorage2[0],
      setCollapse = _useLocalStorage2[1];

  useEffect(function () {
    onCollapse && onCollapse(collapse);
  }, [onCollapse, collapse]);
  return React.createElement("div", {
    className: classNames('vui-NavigationDrawer-subtitle', onCollapse && 'pointer'),
    onClick: setCollapse && function () {
      return setCollapse(function (c) {
        return !c;
      });
    }
  }, children, onCollapse && React.createElement(Icon, {
    className: classNames('chevron', collapse && 'collapse'),
    name: "chevronUp"
  }));
};

export default Subtitle;