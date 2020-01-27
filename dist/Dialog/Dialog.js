"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _index = require("../index");

require("./Dialog.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Dialog(_ref) {
  var target = _ref.target,
      onClickOutside = _ref.onClickOutside,
      children = _ref.children,
      className = _ref.className;
  var portalContainer = (0, _index.usePortal)('vui-Dialog-container');

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  (0, _react.useEffect)(function () {
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

  className = (0, _index.classNames)('vui-Dialog', className, open && 'open');
  (0, _react.useLayoutEffect)(function () {
    setTimeout(function () {
      setOpen(true);
    }, 100);
  }, []);
  return (0, _reactDom.createPortal)(_react.default.createElement("div", {
    className: className,
    onClick: handleClickOutside
  }, _react.default.createElement(_index.Card, {
    rounder: true,
    className: "dialog",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, children)), portalContainer);
}

Dialog.Title = _index.Card.Title;
Dialog.Content = _index.Card.Content;
Dialog.Actions = _index.Card.Actions;
var _default = Dialog;
exports.default = _default;