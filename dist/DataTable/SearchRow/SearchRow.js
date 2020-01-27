"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _DataTable = require("../DataTable");

require("./SearchRow.sass");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchRow = function SearchRow() {
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];

  var _useContext = (0, _react.useContext)(_DataTable.Context),
      filter = _useContext.filter,
      setFilter = _useContext.setFilter,
      onTrigger = _useContext.onTrigger;

  var columns = filter && filter.columns;
  (0, _index.useDeepCompareLayoutEffect)(function () {
    var searchColumns = ref.current.previousSibling.querySelectorAll('.vui-DataTable-Column');
    setElements([]);
    searchColumns.forEach(function (column) {
      var columnName = column.getAttribute('name');

      if (column.classList.contains('search')) {
        // setColumns(c => ({...c, [columnName]: {...c[columnName]}}))
        setElements(function (elements) {
          return [].concat(_toConsumableArray(elements), [{
            name: columnName,
            input: true
          }]);
        });
      } else {
        setElements(function (elements) {
          return [].concat(_toConsumableArray(elements), [{}]);
        });
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, columns]);

  function handleChange(key, value) {
    setFilter(function (f) {
      var columns = _objectSpread({}, f.columns, _defineProperty({}, key, _objectSpread({}, f.columns[key], {
        query: value
      })));

      var filter = _objectSpread({}, f, {
        columns: columns
      });

      onTrigger('columns', columns);
      return filter;
    });
  }

  var inputProps = {
    onChange: handleChange,
    className: 'vui-DataTable-SearchRow-Input input'
  };

  var input = function input(key) {
    if (columns[key] && columns[key].searchCustomInput) {
      return columns[key].searchCustomInput(_objectSpread({}, inputProps, {
        name: key,
        onChange: function onChange(value) {
          return handleChange(key, value);
        },
        value: columns[key].query || ''
      }));
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", _extends({}, inputProps, {
      className: (0, _index.classNames)(inputProps.className, 'default'),
      name: key,
      onChange: function onChange(e) {
        return handleChange(key, e.target.value);
      },
      value: columns[key] && columns[key].query || ''
    })), _react.default.createElement(_index.Button, {
      className: "vui-DataTable-SearchRow-Button",
      icon: true,
      onClick: function onClick() {
        return onTrigger('columns', columns);
      }
    }, _react.default.createElement(_index.Icon, {
      name: "search"
    })));
  };

  return _react.default.createElement("tr", {
    className: "vui-DataTable-Columns vui-DataTable-SearchRow",
    ref: ref
  }, elements.map(function (element, index) {
    return _react.default.createElement("td", {
      className: "vui-DataTable-SearchRow-Cell vui-DataTable-Cell",
      key: index
    }, element.input && input(element.name));
  }));
};

var _default = SearchRow;
exports.default = _default;