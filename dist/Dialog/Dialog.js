import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, classNames, usePortal } from '../index';
import './Dialog.scss';

function Dialog(_ref) {
  var target = _ref.target,
      onClickOutside = _ref.onClickOutside,
      children = _ref.children,
      className = _ref.className;
  var portalContainer = usePortal('vui-Dialog-container');

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function () {
    var targetRef = target && target.current;
    return function () {
      if (targetRef && targetRef.focus && !open) {
        targetRef.focus();
      }
    }; // eslint-disable-next-line
  }, [target]);

  function handleClickOutside() {
    onClickOutside && onClickOutside();
  }

  className = classNames('vui-Dialog', className, open && 'open');
  useLayoutEffect(function () {
    setTimeout(function () {
      setOpen(true);
    }, 100);
  }, []);
  return createPortal(React.createElement("div", {
    className: className,
    onClick: handleClickOutside
  }, React.createElement(Card, {
    rounder: true,
    className: "dialog",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, children)), portalContainer);
}

Dialog.Title = Card.Title;
Dialog.Content = Card.Content;
Dialog.Actions = Card.Actions;
export default Dialog;