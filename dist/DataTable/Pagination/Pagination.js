import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button, Icon } from '../../index';
import { Context } from '../DataTable';
import './Pagination.scss';

var Pagination = function Pagination(_ref) {
  var rowsPerPage = _ref.rowsPerPage,
      rowsPerPageOptions = _ref.rowsPerPageOptions,
      page = _ref.page,
      count = _ref.count;
  if (!rowsPerPage) console.error('The property "rowsPerPage" is required for Pagination');
  if (!rowsPerPageOptions) console.error('The property "rowsPerPageOptions" is required for Pagination');
  if (!page) console.error('The property "page" is required for Pagination');
  if (typeof count === 'undefined') console.error('The property "count" is required for Pagination');

  var _useContext = useContext(Context),
      onTrigger = _useContext.onTrigger,
      setFilter = _useContext.setFilter;

  var ref = useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      totalColumns = _useState2[0],
      setTotalColumns = _useState2[1];

  var _useState3 = useState({
    rowsPerPage: rowsPerPage,
    page: page
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1]; // useEffect(() => {
  //     setPagination(pagination => {
  //         let data = {
  //             ...pagination,
  //             page: 1
  //         }
  //
  //         return data
  //     })
  // }, [count])


  useEffect(function () {
    setPagination(function (pagination) {
      return _objectSpread({}, pagination, {
        page: page
      });
    });
  }, [page]);
  useEffect(function () {
    setFilter(function (filter) {
      return _objectSpread({}, filter, {
        pagination: pagination
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useLayoutEffect(function () {
    var length = ref.current.parentNode.parentNode.querySelectorAll('.vui-DataTable-Columns tr .vui-DataTable-Column').length;
    setTotalColumns(length); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(type) {
    setPagination(function (pagination) {
      var data = {
        page: type === 'prevPage' ? pagination.page - 1 : pagination.page + 1,
        rowsPerPage: pagination.rowsPerPage
      };
      onTrigger("pagination", data);
      return data;
    });
  }

  function handleChange(_ref2) {
    var target = _ref2.target;
    setPagination(function (pagination) {
      var data = {
        page: 1,
        rowsPerPage: +target.value
      };
      onTrigger("pagination", data);
      return data;
    });
  }

  function currentItems() {
    var pageItems = pagination.page * pagination.rowsPerPage;
    var initValue = pageItems - (pagination.rowsPerPage - 1);
    var lastValue = pageItems >= count ? count : pageItems;
    if (count === 0) initValue = 0;
    return React.createElement(React.Fragment, null, initValue, "-", lastValue, " de ", count);
  }

  return React.createElement("div", {
    className: "vui-DataTable-Row vui-DataTablePagination",
    ref: ref
  }, React.createElement("div", {
    className: "vui-DataTable-Cell",
    colSpan: totalColumns
  }, React.createElement("div", {
    className: "vui-DataTablePagination-Items"
  }, React.createElement("div", {
    className: "vui-DataTablePagination-Item"
  }, React.createElement("p", null, "Itens por p\xE1gina:"), React.createElement("select", {
    className: "vui-DataTablePagination-ItemsByPage",
    name: "rowsPerPage",
    onChange: handleChange,
    value: pagination.rowsPerPage
  }, rowsPerPageOptions && rowsPerPageOptions.map(function (option, index) {
    return React.createElement("option", {
      value: option,
      key: index
    }, option);
  }))), React.createElement("div", {
    className: "vui-DataTablePagination-Item"
  }, currentItems()), React.createElement("div", {
    className: "vui-DataTablePagination-Item"
  }, React.createElement(Button, {
    icon: true,
    disabled: pagination.page === 1,
    onClick: function onClick() {
      return handleClick('prevPage');
    }
  }, React.createElement(Icon, {
    name: "chevronLeft"
  })), React.createElement(Button, {
    icon: true,
    disabled: pagination.page * pagination.rowsPerPage >= count,
    onClick: function onClick() {
      return handleClick('nextPage');
    }
  }, React.createElement(Icon, {
    name: "chevronRight"
  }))))));
};

export default Pagination;