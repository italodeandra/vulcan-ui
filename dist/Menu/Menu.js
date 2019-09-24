import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import usePortal from '../Hooks/usePortal';
import { classNames } from '../index';
import './Menu.scss';

function Menu(_ref) {
  var target = _ref.target,
      targetAlign = _ref.targetAlign,
      onClickOutside = _ref.onClickOutside,
      children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      targetPositionX = _useState2[0],
      setTargetPositionX = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      targetPositionY = _useState4[0],
      setTargetPositionY = _useState4[1];

  var ref = useRef(null);
  var portalContainer = usePortal('vui-Menu-container');
  useEffect(function () {
    var targetPosition = {
      x: null,
      y: null
    };
    var targetAlignArray = targetAlign ? targetAlign.split(' ') : '';
    var targetDOMRect = target.current.getBoundingClientRect();
    var refDOMRect = ref.current.getBoundingClientRect();

    if (!targetAlignArray.includes('right')) {
      setTargetPositionX(targetDOMRect.x);
    } else {
      setTargetPositionX(targetDOMRect.x + targetDOMRect.width - refDOMRect.width);
    }

    if (!targetAlignArray.includes('bottom')) {
      setTargetPositionY(targetDOMRect.y);
    } else {
      setTargetPositionY(targetPosition.y = targetDOMRect.y + targetDOMRect.height);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [target]);
  useEffect(function () {
    if (onClickOutside) {
      window.addEventListener('click', handleClickOutside);
    }

    return function () {
      window.removeEventListener('click', handleClickOutside);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClickOutside(event) {
    if (event.target) {
      if (!event.target.classList.contains('vui-Menu') && !event.target.classList.contains('vui-Menu-item')) {
        onClickOutside();
      }
    }
  }

  return createPortal(React.createElement("div", {
    ref: ref,
    className: "vui-Menu",
    style: {
      left: targetPositionX,
      top: targetPositionY
    }
  }, children), portalContainer);
}

Menu.Item = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      to = _ref2.to,
      props = _objectWithoutProperties(_ref2, ["className", "children", "to"]);

  var elementProps = _objectSpread({
    className: classNames(className, 'vui-Menu-item'),
    to: to
  }, props, {
    children: children
  });

  return to ? React.createElement(Link, elementProps) : React.createElement("div", elementProps);
};

Menu.Title = function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["className", "children"]);

  return React.createElement("div", Object.assign({
    className: classNames(className, 'vui-Menu-title')
  }, props), children);
};

export default Menu;