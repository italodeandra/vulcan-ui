import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import './DataTable.scss';

var DataTable = function DataTable(_ref) {
  var children = _ref.children;
  return React.createElement("table", {
    className: "vui-DataTable"
  }, children);
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

DataTable.Column = function (_ref4) {
  var children = _ref4.children;
  return React.createElement("th", {
    className: "vui-DataTable-Column"
  }, children);
};

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

DataTable.Cell = function (_ref7) {
  var children = _ref7.children;
  return React.createElement("td", {
    className: "vui-DataTable-Cell"
  }, children);
};

export default DataTable;