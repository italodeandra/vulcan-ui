import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// TODO: Make better animations
import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../Hooks/usePortal';
import { Button, useSnackbar } from '../index';
import './Snackbar.scss';

var Snackbars = function Snackbars() {
  var _useSnackbar = useSnackbar(),
      _useSnackbar2 = _slicedToArray(_useSnackbar, 2),
      snackbars = _useSnackbar2[1];

  var portalContainer = usePortal('vui-Snackbar-container');
  return createPortal(React.createElement("div", {
    className: "vui-Snackbars"
  }, snackbars.map(function (snackbar) {
    var action;

    if (snackbar.action) {
      if (typeof snackbar.action === 'string') {
        action = React.createElement(Button, {
          text: true,
          onClick: function onClick() {
            return snackbar.close();
          }
        }, snackbar.action);
      } else {
        action = snackbar.action(snackbar);
      }
    }

    return React.createElement("div", {
      className: "vui-Snackbar",
      key: snackbar.id
    }, snackbar.message, !!action && React.createElement("div", {
      className: "action"
    }, action));
  })), portalContainer);
};

export default Snackbars;