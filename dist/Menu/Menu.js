"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _usePortal = _interopRequireDefault(require("../Hooks/usePortal"));

var _index = require("../index");

require("./Menu.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Menu(_ref) {
  var target = _ref.target,
      targetAlign = _ref.targetAlign,
      onClickOutside = _ref.onClickOutside,
      children = _ref.children;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      targetPositionX = _useState2[0],
      setTargetPositionX = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      targetPositionY = _useState4[0],
      setTargetPositionY = _useState4[1];

  var ref = (0, _react.useRef)(null);
  var portalContainer = (0, _usePortal.default)('vui-Menu-container');
  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
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

  return (0, _reactDom.createPortal)(_react.default.createElement("div", {
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
    className: (0, _index.classNames)(className, 'vui-Menu-item'),
    to: to
  }, props, {
    children: children
  });

  return to ? _react.default.createElement(_reactRouterDom.Link, elementProps) : _react.default.createElement("div", elementProps);
};

Menu.Title = function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["className", "children"]);

  return _react.default.createElement("div", _extends({
    className: (0, _index.classNames)(className, 'vui-Menu-title')
  }, props), children);
};

var _default = Menu;
exports.default = _default;