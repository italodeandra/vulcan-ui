"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _DataTable = require("../DataTable");

var _SearchRow = _interopRequireDefault(require("../SearchRow/SearchRow"));

require("./Columns.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Columns = function Columns(_ref) {
  var children = _ref.children,
      sticky = _ref.sticky;

  var _useContext = (0, _react.useContext)(_DataTable.Context),
      isSearchActive = _useContext.isSearchActive;

  var ref = (0, _react.useRef)(null);
  var className = (0, _index.classNames)('vui-DataTable-Columns', sticky && 'sticky');
  (0, _react.useLayoutEffect)(function () {
    var overflow = ref.current.parentNode.parentNode;

    if (sticky && overflow.classList.contains("vui-DataTable-overflow")) {
      overflow.classList.add("sticky");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return _react.default.createElement("thead", {
    ref: ref,
    className: className
  }, _react.default.createElement("tr", null, children), isSearchActive && _react.default.createElement(_SearchRow.default, null));
};

var _default = Columns;
exports.default = _default;