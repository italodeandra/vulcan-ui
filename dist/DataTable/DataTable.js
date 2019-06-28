import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { classNames, Icon, useDeepCompareEffect } from '../index';
import './DataTable.scss';
var Context = createContext([{}, function () {}, function () {}]);

var DataTable = function DataTable(_ref) {
  var children = _ref.children,
      onSortChange = _ref.onSortChange,
      defaultColumns = _ref.columns;

  var _useState = useState(defaultColumns || {}),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  useDeepCompareEffect(function () {
    if (defaultColumns) {
      setColumns(defaultColumns);
    }
  }, [defaultColumns]);
  return React.createElement(Context.Provider, {
    value: [columns, setColumns, onSortChange]
  }, React.createElement("table", {
    className: "vui-DataTable"
  }, children));
};

DataTable.Header = function (_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: "vui-DataTable-Header"
  }, children);
};

DataTable.Columns = function (_ref3) {
  var children = _ref3.children;
  return React.createElement("thead", {
    className: "vui-DataTable-Columns"
  }, React.createElement("tr", null, children));
};

var directions = ['asc', 'desc', null];

var Column = function Column(_ref4) {
  var children = _ref4.children,
      name = _ref4.name,
      rightAligned = _ref4.rightAligned,
      sortable = _ref4.sortable;

  var _useContext = useContext(Context),
      _useContext2 = _slicedToArray(_useContext, 3),
      columns = _useContext2[0],
      setColumns = _useContext2[1],
      onSortChange = _useContext2[2];

  var className = classNames('vui-DataTable-Column', rightAligned && 'right-aligned', sortable && 'sortable');

  if (sortable && !name) {
    console.error('[DataTable.Column] The property "name" is required for sortable columns');
  }

  useEffect(function () {
    if (sortable && name) {
      setColumns(function (c) {
        return _objectSpread({}, c, _defineProperty({}, name, {
          direction: null
        }));
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [name, sortable]);
  var sorting;

  if (sortable && columns[name]) {
    sorting = React.createElement(Icon, {
      className: classNames('order-icon', columns[name].direction),
      name: "arrowDown"
    });
  }

  var handleClick = function handleClick() {
    if (sortable) {
      var newColumns = _objectSpread({}, columns);

      var currentDirection = newColumns[name].direction;
      newColumns[name].direction = directions[(directions.indexOf(currentDirection) + 1) % 3];
      setColumns(newColumns);
      onSortChange && onSortChange(newColumns);
    }
  };

  return React.createElement("th", {
    className: className,
    onClick: handleClick
  }, rightAligned && sortable && sorting, children, !rightAligned && sortable && sorting);
};

DataTable.Column = Column;

DataTable.Rows = function (_ref5) {
  var children = _ref5.children;
  return React.createElement("tbody", {
    className: "vui-DataTable-Rows"
  }, children);
};

DataTable.Row = function (_ref6) {
  var children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["children"]);

  return React.createElement("tr", Object.assign({
    className: "vui-DataTable-Row"
  }, props), children);
};

var Cell = function Cell(_ref7) {
  var children = _ref7.children;
  var ref = useRef(null);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      rightAligned = _useState4[0],
      setRightAligned = _useState4[1];

  useLayoutEffect(function () {
    var thisIndex = ref.current.parentNode.children.indexOf(ref.current);
    var isColumnRightAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('right-aligned');

    if (isColumnRightAligned) {
      ref.current.classList.add('right-aligned');
    }

    setRightAligned(isColumnRightAligned); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var className = classNames('vui-DataTable-Cell', rightAligned && 'right-aligned');
  return React.createElement("td", {
    className: className,
    ref: ref
  }, children);
};

DataTable.Cell = Cell;
export default DataTable;