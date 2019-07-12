import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, {createContext, useState} from 'react';
import {useDeepCompareEffect} from '../index';
import Cell from './Cell/Cell';
import Column from './Column/Column';
import Columns from './Columns/Columns';
import './DataTable.scss';
import Header from './Header/Header';
import Row from './Row/Row';
import Rows from './Rows/Rows';

export var Context = createContext([{}, function () {
}, function () {
}]);

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
  }, React.createElement("div", {
      className: "vui-DataTable-overflow"
  }, React.createElement("table", {
      className: "vui-DataTable"
  }, children)));
};

DataTable.Header = Header;
DataTable.Columns = Columns;
DataTable.Column = Column;
DataTable.Rows = Rows;
DataTable.Row = Row;
DataTable.Cell = Cell;
export default DataTable;