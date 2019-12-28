"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _index = require("../../index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AutocompleteResult = function AutocompleteResult(_ref) {
  var children = _ref.children,
      target = _ref.target,
      setRef = _ref.setRef,
      onScroll = _ref.onScroll;
  var ref = (0, _react.useRef)(null);
  var portalContainer = (0, _index.usePortal)('vuiAutocompleteResult');

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      style = _useState2[0],
      setStyle = _useState2[1];

  var _useScroll = (0, _index.useScroll)(ref, 48),
      _useScroll2 = _slicedToArray(_useScroll, 2),
      scrollY = _useScroll2[0],
      isScrollEnd = _useScroll2[1];

  (0, _react.useEffect)(function () {
    if (setRef) setRef.current = ref.current;
  }, [setRef]);
  (0, _react.useLayoutEffect)(function () {
    var handlePosition = function handlePosition() {
      var nextStyle = {};
      var targetDOMRect = target.current.element.getBoundingClientRect();
      var refDOMRect = ref.current.getBoundingClientRect();
      nextStyle.left = targetDOMRect.left;
      nextStyle.width = targetDOMRect.width;
      nextStyle.top = targetDOMRect.top + targetDOMRect.height;

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

    var scrollable = getScrollParent(target.current.element) || window;
    scrollable.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);
    return function () {
      scrollable.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
    };
  }, [target]);
  (0, _react.useEffect)(function () {
    onScroll && onScroll(isScrollEnd); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);
  return (0, _reactDom.createPortal)(_react.default.createElement("div", {
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

  return _react.default.createElement("button", _extends({
    className: (0, _index.classNames)('item', targetClassName)
  }, props, {
    tabIndex: "0"
  }), children);
};

var _default = AutocompleteResult;
exports.default = _default;