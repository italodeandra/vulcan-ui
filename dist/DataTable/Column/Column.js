import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext } from 'react';
import { classNames, Icon, useDeepCompareEffect } from '../../index';
import { Context } from '../DataTable';
import './Column.scss';
var directions = ['asc', 'desc', null];

var Column = function Column(_ref) {
  var children = _ref.children,
      name = _ref.name,
      rightAligned = _ref.rightAligned,
      centerAligned = _ref.centerAligned,
      search = _ref.search,
      searchCustomInput = _ref.searchCustomInput,
      sortable = _ref.sortable;

  var _useContext = useContext(Context),
      isSearchActive = _useContext.isSearchActive,
      setIsSearchActive = _useContext.setIsSearchActive,
      onTrigger = _useContext.onTrigger,
      filter = _useContext.filter,
      setFilter = _useContext.setFilter;

  var columns = filter && filter.columns;
  var className = classNames('vui-DataTable-Column', rightAligned && 'right-aligned', centerAligned && 'center-aligned', sortable && 'sortable', search && 'search');

  if (sortable && !name) {
    console.error('[DataTable.Column] The property "name" is required for sortable columns');
  }

  if (search && !name) {
    console.error('[DataTable.Column] The property "name" is required for search columns');
  }

  useDeepCompareEffect(function () {
    if (name) {
      setFilter(function (f) {
        return _objectSpread({}, f, {
          columns: _objectSpread({}, f.columns, _defineProperty({}, name, _objectSpread({}, f.columns[name], {
            direction: !sortable ? null : f.columns[name] && f.columns[name].direction,
            searchCustomInput: searchCustomInput
          })))
        });
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [name, filter, sortable, searchCustomInput]);

  var handleClickSearch = function handleClickSearch(e) {
    e.preventDefault();
    e.stopPropagation();

    if (search) {
      setIsSearchActive(!isSearchActive);
    }
  };

  var handleClick = function handleClick() {
    if (sortable) {
      var newColumns = _objectSpread({}, columns);

      var currentDirection = newColumns[name].direction;
      newColumns[name].direction = directions[(directions.indexOf(currentDirection) + 1) % 3];
      setFilter(function (f) {
        return _objectSpread({}, f, {
          columns: newColumns
        });
      });
      onTrigger('columns', newColumns);
    }
  };

  var sorting;

  if (sortable && columns[name]) {
    sorting = React.createElement(Icon, {
      className: classNames('order-icon', columns[name].direction),
      name: "arrowDown"
    });
  }

  var searchButton = React.createElement(Icon, {
    className: classNames('search-icon search', columns[name] && columns[name].query ? 'active' : ''),
    name: "search",
    onClick: handleClickSearch
  });
  return React.createElement("th", {
    className: className,
    onClick: handleClick,
    name: name
  }, rightAligned && React.createElement(React.Fragment, null, sortable && sorting, search && searchButton), children, !rightAligned && React.createElement(React.Fragment, null, search && searchButton, sortable && sorting));
};

export default Column;