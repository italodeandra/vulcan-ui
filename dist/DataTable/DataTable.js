import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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