import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useEffect, useState } from 'react';
import { classNames, useDeepCompareEffect } from '../index';
import Cell from './Cell/Cell';
import Column from './Column/Column';
import Columns from './Columns/Columns';
import './DataTable.sass';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Pagination from './Pagination/Pagination';
import Row from './Row/Row';
import Rows from './Rows/Rows';
import Table from './Table/Table';
export var Context = createContext([{}, function () {}, function () {}]);

var DataTable = function DataTable(_ref) {
  var children = _ref.children,
      onFilterChange = _ref.onFilterChange,
      className = _ref.className,
      defaultColumns = _ref.columns;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = useState(defaultColumns || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      columns = _useState4[0],
      setColumns = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSearchActive = _useState6[0],
      setIsSearchActive = _useState6[1];

  useEffect(function () {
    setFilter(function (filter) {
      var newFilter = _objectSpread({}, filter, {
        columns: columns
      });

      onFilterChange && onFilterChange(newFilter);
      return newFilter;
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(columns)]);
  useDeepCompareEffect(function () {
    if (defaultColumns) {
      setColumns(defaultColumns);
    }
  }, [defaultColumns]);
  return React.createElement(Context.Provider, {
    value: {
      columns: columns,
      setColumns: setColumns,
      filter: filter,
      setFilter: setFilter,
      isSearchActive: isSearchActive,
      setIsSearchActive: setIsSearchActive,
      onFilterChange: onFilterChange
    }
  }, React.createElement("div", {
    className: classNames('vui-DataTable', className)
  }, children));
};

DataTable.Table = Table;
DataTable.Header = Header;
DataTable.Columns = Columns;
DataTable.Column = Column;
DataTable.Rows = Rows;
DataTable.Row = Row;
DataTable.Cell = Cell;
DataTable.Footer = Footer;
DataTable.Pagination = Pagination;
export default DataTable;