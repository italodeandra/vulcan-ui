"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _usePortal = _interopRequireDefault(require("../Hooks/usePortal"));

var _index = require("../index");

require("./Snackbar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Snackbars = function Snackbars() {
  var _useSnackbar = (0, _index.useSnackbar)(),
      _useSnackbar2 = _slicedToArray(_useSnackbar, 2),
      snackbars = _useSnackbar2[1];

  var portalContainer = (0, _usePortal.default)('vui-Snackbar-container');
  return (0, _reactDom.createPortal)(_react.default.createElement("div", {
    className: "vui-Snackbars"
  }, snackbars.map(function (snackbar) {
    var action;

    if (snackbar.action) {
      if (typeof snackbar.action === 'string') {
        action = _react.default.createElement(_index.Button, {
          text: true,
          onClick: function onClick() {
            return snackbar.close();
          }
        }, snackbar.action);
      } else {
        action = snackbar.action(snackbar);
      }
    }

    return _react.default.createElement("div", {
      className: "vui-Snackbar",
      key: snackbar.id
    }, snackbar.message, !!action && _react.default.createElement("div", {
      className: "action"
    }, action));
  })), portalContainer);
};

var _default = Snackbars;
exports.default = _default;