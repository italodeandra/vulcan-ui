import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames, usePortal, useScroll } from '../../index';

var AutocompleteResult = function AutocompleteResult(_ref) {
  var children = _ref.children,
      target = _ref.target,
      setRef = _ref.setRef,
      onScroll = _ref.onScroll;
  var ref = useRef(null);
  var portalContainer = usePortal('vuiAutocompleteResult');

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      style = _useState2[0],
      setStyle = _useState2[1];

  var _useScroll = useScroll(ref, 48),
      _useScroll2 = _slicedToArray(_useScroll, 2),
      scrollY = _useScroll2[0],
      isScrollEnd = _useScroll2[1];

  useEffect(function () {
    if (setRef) setRef.current = ref.current;
  }, [setRef]);
  useLayoutEffect(function () {
    var handlePosition = function handlePosition() {
      var nextStyle = {};
      var targetDOMRect = target.current.getBoundingClientRect();
      var refDOMRect = ref.current.getBoundingClientRect();
      nextStyle.left = targetDOMRect.x;
      nextStyle.width = targetDOMRect.width;
      nextStyle.top = targetDOMRect.y + targetDOMRect.height;

      if (refDOMRect.bottom > window.innerHeight) {
        nextStyle.bottom = 0;
        nextStyle.minHeight = 0;
      }

      setStyle(nextStyle);
    };

    handlePosition();

    function getScrollParent(node) {
      if (node == null) {
        return null;
      }

      if (node.scrollHeight > node.clientHeight) {
        return node;
      } else {
        return getScrollParent(node.parentNode);
      }
    }

    var scrollable = getScrollParent(target.current) || window;
    scrollable.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);
    return function () {
      scrollable.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
    };
  }, [target]);
  useEffect(function () {
    onScroll && onScroll(isScrollEnd); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);
  return createPortal(React.createElement("div", {
    className: "vui-TextField-AutocompleteResult",
    ref: ref,
    style: style
  }, children), portalContainer);
};

AutocompleteResult.Item = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      targetClassName = _ref2.targetClassName,
      props = _objectWithoutProperties(_ref2, ["children", "className", "targetClassName"]);

  return React.createElement("button", Object.assign({
    className: classNames('item', targetClassName)
  }, props, {
    tabIndex: "0"
  }), children);
};

export default AutocompleteResult;