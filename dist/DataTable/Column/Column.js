import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
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
      search = _ref.search,
      searchCustomInput = _ref.searchCustomInput,
      sortable = _ref.sortable;

  var _useContext = useContext(Context),
      columns = _useContext.columns,
      setColumns = _useContext.setColumns,
      isSearchActive = _useContext.isSearchActive,
      setIsSearchActive = _useContext.setIsSearchActive,
      onTrigger = _useContext.onTrigger;

  var className = classNames('vui-DataTable-Column', rightAligned && 'right-aligned', centerAligned && 'center-aligned', sortable && 'sortable', search && 'search');

  if (sortable && !name) {
    console.error('[DataTable.Column] The property "name" is required for sortable columns');
  }

  if (search && !name) {
    console.error('[DataTable.Column] The property "name" is required for search columns');
  }

  useEffect(function () {
    if (sortable && name) {
      setColumns(function (c) {
        return _objectSpread({}, c, _defineProperty({}, name, _objectSpread({}, c[name], {
          direction: null
        })));
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [name, sortable]);
  useEffect(function () {
    if (searchCustomInput && name) {
      setColumns(function (c) {
        return _objectSpread({}, c, _defineProperty({}, name, _objectSpread({}, c[name], {
          searchCustomInput: searchCustomInput
        })));
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [name, searchCustomInput]);

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
      setColumns(newColumns);
      onTrigger("columns", newColumns);
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
    className: classNames("search-icon search", columns[name] && columns[name].query ? "active" : ""),
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