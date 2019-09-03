import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, useRef, useState } from 'react';
import { Button, classNames, Icon, useDeepCompareLayoutEffect } from '../../index';
import { Context } from '../DataTable';
import './SearchRow.sass';

var SearchRow = function SearchRow() {
  var ref = useRef(null);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];

  var _useContext = useContext(Context),
      filter = _useContext.filter,
      setFilter = _useContext.setFilter,
      onTrigger = _useContext.onTrigger;

  var columns = filter && filter.columns;
  useDeepCompareLayoutEffect(function () {
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

    return React.createElement(React.Fragment, null, React.createElement("input", Object.assign({}, inputProps, {
      className: classNames(inputProps.className, 'default'),
      name: key,
      onChange: function onChange(e) {
        return handleChange(key, e.target.value);
      },
      value: columns[key] && columns[key].query || ''
    })), React.createElement(Button, {
      className: "vui-DataTable-SearchRow-Button",
      icon: true,
      onClick: function onClick() {
        return onTrigger('columns', columns);
      }
    }, React.createElement(Icon, {
      name: "search"
    })));
  };

  return React.createElement("tr", {
    className: "vui-DataTable-Columns vui-DataTable-SearchRow",
    ref: ref
  }, elements.map(function (element, index) {
    return React.createElement("td", {
      className: "vui-DataTable-SearchRow-Cell vui-DataTable-Cell",
      key: index
    }, element.input && input(element.name));
  }));
};

export default SearchRow;