"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _DataTable = require("../DataTable");

require("./Pagination.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(_ref) {
  var rowsPerPage = _ref.rowsPerPage,
      rowsPerPageOptions = _ref.rowsPerPageOptions,
      page = _ref.page,
      count = _ref.count,
      actions = _ref.actions;
  if (!rowsPerPage) console.error('The property "rowsPerPage" is required for Pagination');
  if (!rowsPerPageOptions) console.error('The property "rowsPerPageOptions" is required for Pagination');
  if (!page) console.error('The property "page" is required for Pagination');
  if (typeof count === 'undefined') console.error('The property "count" is required for Pagination');

  var _useContext = (0, _react.useContext)(_DataTable.Context),
      onTrigger = _useContext.onTrigger,
      setFilter = _useContext.setFilter;

  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    rowsPerPage: rowsPerPage,
    page: page
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  (0, _react.useEffect)(function () {
    setPagination(function (pagination) {
      return _objectSpread({}, pagination, {
        page: page
      });
    });
  }, [page]);
  (0, _react.useEffect)(function () {
    setFilter(function (filter) {
      return _objectSpread({}, filter, {
        pagination: pagination
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(type) {
    setPagination(function (pagination) {
      var data = {
        page: type === 'prevPage' ? pagination.page - 1 : pagination.page + 1,
        rowsPerPage: pagination.rowsPerPage
      };
      onTrigger('pagination', data);
      return data;
    });
  }

  function handleChange(_ref2) {
    var target = _ref2.target;
    setPagination(function () {
      var data = {
        page: 1,
        rowsPerPage: +target.value
      };
      onTrigger('pagination', data);
      return data;
    });
  }

  function currentItems() {
    var pageItems = pagination.page * pagination.rowsPerPage;
    var initValue = pageItems - (pagination.rowsPerPage - 1);
    var lastValue = pageItems >= count ? count : pageItems;
    if (count === 0) initValue = 0;
    return _react.default.createElement(_react.default.Fragment, null, initValue, "-", lastValue, " de ", count);
  }

  return _react.default.createElement("div", {
    className: "vui-DataTable-Row vui-DataTablePagination",
    ref: ref
  }, _react.default.createElement("div", {
    className: "vui-DataTable-Cell"
  }, _react.default.createElement("div", {
    className: "vui-DataTablePagination-Items"
  }, _react.default.createElement("div", {
    className: "vui-DataTablePagination-Item"
  }, _react.default.createElement("p", null, "Itens por p\xE1gina:"), _react.default.createElement("select", {
    className: "vui-DataTablePagination-ItemsByPage",
    name: "rowsPerPage",
    onChange: handleChange,
    value: pagination.rowsPerPage
  }, rowsPerPageOptions && rowsPerPageOptions.map(function (option, index) {
    return _react.default.createElement("option", {
      value: option,
      key: index
    }, option);
  }))), _react.default.createElement("div", {
    className: "vui-DataTablePagination-Item"
  }, currentItems()), _react.default.createElement("div", {
    className: "vui-DataTablePagination-Item"
  }, _react.default.createElement(_index.Button, {
    icon: true,
    disabled: pagination.page === 1,
    onClick: function onClick() {
      return handleClick('prevPage');
    }
  }, _react.default.createElement(_index.Icon, {
    name: "chevronLeft"
  })), _react.default.createElement(_index.Button, {
    icon: true,
    disabled: pagination.page * pagination.rowsPerPage >= count,
    onClick: function onClick() {
      return handleClick('nextPage');
    }
  }, _react.default.createElement(_index.Icon, {
    name: "chevronRight"
  }))), actions && _react.default.createElement("div", {
    className: "actions"
  }, actions))));
};

var _default = Pagination;
exports.default = _default;