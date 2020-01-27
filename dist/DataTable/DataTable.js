"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _Cell = _interopRequireDefault(require("./Cell/Cell"));

var _Column = _interopRequireDefault(require("./Column/Column"));

var _Columns = _interopRequireDefault(require("./Columns/Columns"));

require("./DataTable.sass");

var _Footer = _interopRequireDefault(require("./Footer/Footer"));

var _Header = _interopRequireDefault(require("./Header/Header"));

var _Pagination = _interopRequireDefault(require("./Pagination/Pagination"));

var _Row = _interopRequireDefault(require("./Row/Row"));

var _Rows = _interopRequireDefault(require("./Rows/Rows"));

var _Table = _interopRequireDefault(require("./Table/Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Context = (0, _react.createContext)({});
exports.Context = Context;

var DataTable = function DataTable(_ref) {
  var children = _ref.children,
      onFilterChange = _ref.onFilterChange,
      className = _ref.className,
      defaultFilter = _ref.filter;

  var _useState = (0, _react.useState)({
    columns: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSearchActive = _useState4[0],
      setIsSearchActive = _useState4[1];

  (0, _index.useDeepCompareEffect)(function () {
    if (defaultFilter) {
      setFilter(defaultFilter);
      var newIsSearchActive = isSearchActive;
      Object.keys(defaultFilter.columns).forEach(function (k) {
        if (defaultFilter.columns[k].query) {
          newIsSearchActive = true;
        }
      });
      setIsSearchActive(newIsSearchActive);
    } else {
      setFilter({
        columns: {}
      });
    }
  }, [defaultFilter]);

  var onTrigger = function onTrigger(type, data) {
    setFilter(function (filter) {
      var nextFilter = _objectSpread({}, filter, _defineProperty({}, type, data));

      onFilterChange && onFilterChange(nextFilter);
      return nextFilter;
    });
  };

  return _react.default.createElement(Context.Provider, {
    value: {
      filter: filter,
      setFilter: setFilter,
      isSearchActive: isSearchActive,
      setIsSearchActive: setIsSearchActive,
      onTrigger: onTrigger
    }
  }, _react.default.createElement("div", {
    className: (0, _index.classNames)('vui-DataTable', className)
  }, children));
};

DataTable.Table = _Table.default;
DataTable.Header = _Header.default;
DataTable.Columns = _Columns.default;
DataTable.Column = _Column.default;
DataTable.Rows = _Rows.default;
DataTable.Row = _Row.default;
DataTable.Cell = _Cell.default;
DataTable.Footer = _Footer.default;
DataTable.Pagination = _Pagination.default;
var _default = DataTable;
exports.default = _default;