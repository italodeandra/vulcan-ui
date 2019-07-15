import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useEffect } from 'react';
import { classNames, Icon } from '../../index';
import { Context } from '../DataTable';
import './Column.scss';
var directions = ['asc', 'desc', null];

var Column = function Column(_ref) {
  var children = _ref.children,
      name = _ref.name,
      rightAligned = _ref.rightAligned,
      centerAligned = _ref.centerAligned,
      sortable = _ref.sortable;

  var _useContext = useContext(Context),
      _useContext2 = _slicedToArray(_useContext, 3),
      columns = _useContext2[0],
      setColumns = _useContext2[1],
      onSortChange = _useContext2[2];

  var className = classNames('vui-DataTable-Column', rightAligned && 'right-aligned', centerAligned && 'center-aligned', sortable && 'sortable');

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

export default Column;