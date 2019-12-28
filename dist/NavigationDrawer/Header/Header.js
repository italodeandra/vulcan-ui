"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

require("./Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = function Header(_ref) {
  var children = _ref.children,
      customMobileWidthViewport = _ref.customMobileWidthViewport;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useMobile = (0, _index.useMobile)(customMobileWidthViewport),
      _useMobile2 = _slicedToArray(_useMobile, 1),
      isMobile = _useMobile2[0];

  return isMobile ? _react.default.createElement("div", {
    className: "vui-NavigationDrawer-header"
  }, children) : null;
};

var _default = Header;
exports.default = _default;