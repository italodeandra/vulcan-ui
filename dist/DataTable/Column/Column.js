"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _DataTable = require("../DataTable");

require("./Column.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var directions = ['asc', 'desc', null];

var Column = function Column(_ref) {
  var children = _ref.children,
      name = _ref.name,
      rightAligned = _ref.rightAligned,
      centerAligned = _ref.centerAligned,
      search = _ref.search,
      searchCustomInput = _ref.searchCustomInput,
      sortable = _ref.sortable,
      colSpan = _ref.colSpan;

  var _useContext = (0, _react.useContext)(_DataTable.Context),
      isSearchActive = _useContext.isSearchActive,
      setIsSearchActive = _useContext.setIsSearchActive,
      onTrigger = _useContext.onTrigger,
      filter = _useContext.filter,
      setFilter = _useContext.setFilter;

  var columns = filter && filter.columns;
  var className = (0, _index.classNames)('vui-DataTable-Column', rightAligned && 'right-aligned', centerAligned && 'center-aligned', sortable && 'sortable', search && 'search');

  if (sortable && !name) {
    console.error('[DataTable.Column] The property "name" is required for sortable columns');
  }

  if (search && !name) {
    console.error('[DataTable.Column] The property "name" is required for search columns');
  }

  (0, _index.useDeepCompareEffect)(function () {
    if (name) {
      setFilter(function (f) {
        return _objectSpread({}, f, {
          columns: _objectSpread({}, f.columns, _defineProperty({}, name, _objectSpread({}, f.columns[name], {
            direction: !sortable ? null : f.columns[name] && f.columns[name].direction,
            searchCustomInput: searchCustomInput
          })))
        });
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [name, filter, sortable, searchCustomInput]);

  var handleClickSearch = function handleClickSearch(e) {
    e.preventDefault();
    e.stopPropagation();

    if (search) {
      setIsSearchActive(!isSearchActive);
    }
  };

  var handleClick = function handleClick() {
    if (sortable) {
      var newColumns = _objectSpread({}, columns);

      var currentDirection = newColumns[name].direction;
      newColumns[name].direction = directions[(directions.indexOf(currentDirection) + 1) % 3];
      setFilter(function (f) {
        return _objectSpread({}, f, {
          columns: newColumns
        });
      });
      onTrigger('columns', newColumns);
    }
  };

  var sorting;

  if (sortable && columns[name]) {
    sorting = _react.default.createElement(_index.Icon, {
      className: (0, _index.classNames)('order-icon', columns[name].direction),
      name: "arrowDown"
    });
  }

  var searchButton = _react.default.createElement(_index.Icon, {
    className: (0, _index.classNames)('search-icon search', columns[name] && columns[name].query ? 'active' : ''),
    name: "search",
    onClick: handleClickSearch
  });

  return _react.default.createElement("th", {
    className: className,
    onClick: handleClick,
    name: name,
    colSpan: colSpan
  }, rightAligned && _react.default.createElement(_react.default.Fragment, null, sortable && sorting, search && searchButton), children, !rightAligned && _react.default.createElement(_react.default.Fragment, null, search && searchButton, sortable && sorting));
};

var _default = Column;
exports.default = _default;