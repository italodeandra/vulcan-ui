import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames, usePortal, useScroll } from '../../index';

var AutocompleteResult = function AutocompleteResult(_ref) {
  var children = _ref.children,
      target = _ref.target,
      setRef = _ref.setRef,
      onScroll = _ref.onScroll;
  var ref = useRef(null);
  var portalContainer = usePortal('AutocompleteResult');

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
  useEffect(function () {
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
    window.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);
    return function () {
      window.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
    };
  }, [target]);
  useEffect(function () {
    onScroll(isScrollEnd); // eslint-disable-next-line react-hooks/exhaustive-deps
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
      props = _objectWithoutProperties(_ref2, ["children", "className"]);

  return React.createElement("button", Object.assign({
    className: classNames('item', 'vui-TextField-Autocomplete-Target')
  }, props, {
    tabIndex: "0"
  }), children);
};

export default AutocompleteResult;