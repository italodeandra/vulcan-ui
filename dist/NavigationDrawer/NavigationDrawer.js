"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _disableBodyScroll = _interopRequireDefault(require("../Utils/disableBodyScroll"));

var _Divider = _interopRequireDefault(require("./Divider/Divider"));

var _Header = _interopRequireDefault(require("./Header/Header"));

var _Item = _interopRequireDefault(require("./Item/Item"));

var _ItemGroup = _interopRequireDefault(require("./ItemGroup/ItemGroup"));

require("./NavigationDrawer.scss");

var _Subtitle = _interopRequireDefault(require("./Subtitle/Subtitle"));

var _useTouchMove = _interopRequireDefault(require("./useTouchMove"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavigationDrawer = function NavigationDrawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      open = _ref.open,
      containerRef = _ref.containerRef,
      collapsable = _ref.collapsable,
      appBarRef = _ref.appBarRef,
      onOpenChange = _ref.onOpenChange,
      customMobileWidthViewport = _ref.customMobileWidthViewport;
  var scrimRef = (0, _react.useRef)(null);
  var navigationDrawerRef = (0, _react.useRef)(null);

  var _useMobile = (0, _index.useMobile)(customMobileWidthViewport),
      _useMobile2 = _slicedToArray(_useMobile, 1),
      isMobile = _useMobile2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 1),
      isAnimationReady = _useState2[0];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      top = _useState4[0],
      setTop = _useState4[1];

  var _useState5 = (0, _react.useState)(open),
      _useState6 = _slicedToArray(_useState5, 2),
      innerOpen = _useState6[0],
      setInnerOpen = _useState6[1];

  (0, _useTouchMove.default)(navigationDrawerRef, innerOpen, setInnerOpen);
  className = (0, _index.classNames)(className, 'vui-NavigationDrawer', 'can-scroll', innerOpen && 'open', collapsable && 'collapsable', isMobile && 'mobile');
  (0, _react.useEffect)(function () {
    if (!isMobile) {
      var containerRefEl = containerRef && containerRef.current;

      if (containerRefEl) {
        containerRefEl.style.transition = 'none';
        containerRefEl.style.animation = 'none';
        containerRefEl.classList.add('vui-NavigationDrawer-margin-left');
      }

      setTimeout(function () {
        if (containerRefEl) {
          containerRefEl.style.transition = '';
          containerRefEl.style.animation = '';
        }
      }, 140);
      return function () {
        if (containerRefEl) {
          containerRefEl.classList.remove('vui-NavigationDrawer-margin-left');
        }
      };
    }
  }, [containerRef, isMobile]);
  (0, _react.useEffect)(function () {
    var containerRefEl = containerRef && containerRef.current;

    if (containerRefEl) {
      containerRefEl.classList.add('animation-ready');

      if (!isMobile) {
        if (collapsable) {
          containerRefEl.classList.add('vui-NavigationDrawer-collapsable');
        }

        containerRefEl.classList[innerOpen ? 'add' : 'remove']('vui-NavigationDrawer-open');
      }
    }

    if (innerOpen) {
      var autofocusEl = navigationDrawerRef.current.querySelector('[auto-focus]');
      autofocusEl && autofocusEl.focus();
    } else if (appBarRef) {
      var _autofocusEl = appBarRef.current.querySelector('[auto-focus]');

      _autofocusEl && _autofocusEl.focus();
    }

    return function () {
      containerRefEl.classList.remove('vui-NavigationDrawer-open');
      containerRefEl.classList.remove('vui-NavigationDrawer-collapsable');
    };
  }, [containerRef, innerOpen, collapsable, isMobile, appBarRef]);
  (0, _react.useEffect)(function () {
    setTop(appBarRef.current.getBoundingClientRect().height);
  }, [appBarRef]);
  (0, _react.useEffect)(function () {
    onOpenChange && onOpenChange(innerOpen);

    if (innerOpen) {
      document.body.style.overflow = 'hidden';
      (0, _disableBodyScroll.default)(true, '.can-scroll');
    } else {
      document.body.style.overflow = '';
      (0, _disableBodyScroll.default)(false, '.can-scroll');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [innerOpen]);
  (0, _react.useEffect)(function () {
    setInnerOpen(open); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return _react.default.createElement(_react.default.Fragment, null, isMobile && _react.default.createElement("div", {
    ref: scrimRef,
    className: (0, _index.classNames)('vui-NavigationDrawer-scrim', 'can-scroll', innerOpen && 'open', isAnimationReady && 'animation-ready'),
    onClick: function onClick() {
      return setInnerOpen(false);
    }
  }), _react.default.createElement("div", {
    className: className,
    ref: navigationDrawerRef,
    style: {
      top: top
    }
  }, children));
};

NavigationDrawer.Item = _Item.default;
NavigationDrawer.Header = _Header.default;
NavigationDrawer.Divider = _Divider.default;
NavigationDrawer.Subtitle = _Subtitle.default;
NavigationDrawer.ItemGroup = _ItemGroup.default;
var _default = NavigationDrawer;
exports.default = _default;