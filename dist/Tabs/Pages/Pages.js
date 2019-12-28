"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = exports.Pages = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Pages.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pages = function Pages(_ref) {
  var children = _ref.children,
      tabs = _ref.tabs;
  var context = (0, _react.useContext)(tabs);
  var pagesRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      pagesHeight = _useState2[0],
      setPagesHeight = _useState2[1];

  var currentPageRef = (0, _react.useRef)(context.currentPage);
  var removeHeightTimer = (0, _react.useRef)(null);

  var setPagesSize = function setPagesSize() {
    setTimeout(function () {
      if (currentPageRef.current > -1) {
        var page = pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current];
        setPagesHeight(page.getBoundingClientRect().height);
      } else {
        setPagesHeight(0);
      }
    });
    clearTimeout(removeHeightTimer.current);
    removeHeightTimer.current = setTimeout(function () {
      setPagesHeight(undefined);
    }, 280);
  };

  (0, _react.useEffect)(function () {
    if (currentPageRef.current > -1) {
      var page = pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current];
      setPagesHeight(page.getBoundingClientRect().height);
    } else {
      setPagesHeight(0);
    }

    currentPageRef.current = context.currentPage;
    setPagesSize();
  }, [context.currentPage]);
  (0, _react.useEffect)(function () {
    setPagesSize();
    window.addEventListener('resize', setPagesSize);
    return function () {
      window.removeEventListener('resize', setPagesSize);
    };
  }, []);
  var style = {
    transform: "translateX(".concat(-(context.currentPage * 100), "%)"),
    height: pagesHeight
  };
  return _react.default.createElement("div", {
    className: "vui-Tabs-Pages",
    ref: pagesRef
  }, _react.default.createElement("div", {
    className: "pages-container",
    style: style
  }, children.map(function (c, i) {
    return _objectSpread({}, c, {
      props: _objectSpread({}, c.props, {
        tabs: tabs,
        key: i
      })
    });
  })));
};

exports.Pages = Pages;

var Page = function Page(_ref2) {
  var children = _ref2.children,
      tabs = _ref2.tabs,
      key = _ref2.key;
  var ref = (0, _react.useRef)(null);
  var context = (0, _react.useContext)(tabs);
  var currentPageRef = (0, _react.useRef)(context.currentPage);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  (0, _react.useEffect)(function () {
    currentPageRef.current = context.currentPage;
    setShow(true);
    setTimeout(function () {
      if (key !== currentPageRef.current) {
        setShow(false);
      }
    }, 280);
  }, [context.currentPage, key]);
  (0, _react.useLayoutEffect)(function () {
    ref.current.parentNode.parentNode.scrollTop = 0;
    ref.current.parentNode.parentNode.scrollLeft = 0;
  }, [show]);
  return _react.default.createElement("div", {
    className: "vui-Tabs-Page",
    ref: ref
  }, show ? children : null);
};

exports.Page = Page;