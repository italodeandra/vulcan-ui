import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, classNames, usePortal } from '../index';
import './Dialog.scss';

function Dialog(_ref) {
  var onClickOutside = _ref.onClickOutside,
      children = _ref.children;
  var portalContainer = usePortal('vui-Dialog-container');

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  function handleClickOutside() {
    onClickOutside && onClickOutside();
  }

  var className = classNames('vui-Dialog', open && 'open');
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