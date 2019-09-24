import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useState } from 'react';
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
export var Context = createContext({});

var DataTable = function DataTable(_ref) {
  var children = _ref.children,
      onFilterChange = _ref.onFilterChange,
      className = _ref.className,
      defaultFilter = _ref.filter;

  var _useState = useState({
    columns: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSearchActive = _useState4[0],
      setIsSearchActive = _useState4[1];

  useDeepCompareEffect(function () {
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

  return React.createElement(Context.Provider, {
    value: {
      filter: filter,
      setFilter: setFilter,
      isSearchActive: isSearchActive,
      setIsSearchActive: setIsSearchActive,
      onTrigger: onTrigger
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