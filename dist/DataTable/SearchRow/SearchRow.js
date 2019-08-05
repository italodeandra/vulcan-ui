import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useRef, useState } from 'react';
import { Button, classNames, Icon, useDeepCompareLayoutEffect } from '../..';
import { Context } from '../DataTable';
import './SearchRow.sass';

var SearchRow = function SearchRow() {
  var ref = useRef(null);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];

  var _useContext = useContext(Context),
      columns = _useContext.columns,
      filter = _useContext.filter,
      setColumns = _useContext.setColumns,
      onTrigger = _useContext.onTrigger;

  useDeepCompareLayoutEffect(function () {
    var searchColumns = ref.current.previousSibling.querySelectorAll('.vui-DataTable-Column');
    setElements([]);
    searchColumns.forEach(function (column) {
      var columnName = column.getAttribute('name');

      if (column.classList.contains('search')) {
        setColumns(function (c) {
          return _objectSpread({}, c, _defineProperty({}, columnName, _objectSpread({}, c[columnName])));
        });
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
  }, [filter]);

  function handleChange(key, value) {
    setColumns(function (c) {
      var columns = _objectSpread({}, c, _defineProperty({}, key, _objectSpread({}, c[key], {
        query: value
      })));

      onTrigger('columns', columns);
      return columns;
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