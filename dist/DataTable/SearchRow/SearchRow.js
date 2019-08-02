import _defineProperty from '@babel/runtime/helpers/esm/defineProperty'
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread'
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray'
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray'
import React, {useContext, useLayoutEffect, useRef, useState} from 'react'
import {Button, classNames, Icon} from '../..'
import {Context} from '../DataTable'
import './SearchRow.sass'

var SearchRow = function SearchRow() {
  var ref = useRef(null);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];

  var _useContext = useContext(Context),
      columns = _useContext.columns,
      setColumns = _useContext.setColumns,
      onTrigger = _useContext.onTrigger;

  useLayoutEffect(function () {
    var searchColumns = ref.current.previousSibling.querySelectorAll('.vui-DataTable-Column');
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
  }, []);

  function handleChange(_ref) {
    var target = _ref.target;
    setColumns(function (c) {
      var columns = _objectSpread({}, c, _defineProperty({}, target.name, _objectSpread({}, c[target.name], {
        query: target.value
      })));

      onTrigger("columns", columns);
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
        value: columns[key].query || ''
      }));
    }

    return React.createElement(React.Fragment, null, React.createElement("input", Object.assign({}, inputProps, {
      className: classNames(inputProps.className, 'default'),
      name: key,
      value: columns[key] && columns[key].query || ''
    })), React.createElement(Button, {
      className: "vui-DataTable-SearchRow-Button",
      icon: true,
      onClick: function onClick() {
        return onTrigger("columns", columns);
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
