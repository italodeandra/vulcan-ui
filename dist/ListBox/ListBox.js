import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useState } from 'react';
import './ListBox.sass';
import Item from './Item/Item';
import Control from './Control/Control';
var UNSELECTED = 'unselected';
var SELECTED = 'selected';

var ListBox = function ListBox(_ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      selected = _ref.selected,
      unselected = _ref.unselected;
  if (!unselected) console.error('The property "unselected" is required for ListBox');

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      lastSelected = _useState2[0],
      setLastSelected = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      listItems = _useState4[0],
      setListItems = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      virtualItems = _useState6[0],
      setVirtualItems = _useState6[1];

  useEffect(function () {
    var data = {
      unselected: unselected,
      selected: selected
    };
    setListItems(data);
    setVirtualItems(data); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, unselected]);

  var handleClick = function handleClick(e, type, item, index) {
    setLastSelected({
      item: item,
      index: index
    });

    if (e.ctrlKey) {
      virtualItems[type].forEach(function (item, listIndex) {
        if (lastSelected.index <= index) {
          if (listIndex >= lastSelected.index && listIndex <= index) item.checked = true;
        } else {
          if (listIndex <= lastSelected.index && listIndex >= index) item.checked = true;
        }
      });
    } else virtualItems[type][index].checked = !virtualItems[type][index].checked;
  };

  var handleDoubleClick = function handleDoubleClick(item, before, prev) {
    item['type'] = prev;
    item['checked'] = false;
    reflectList([item], before, prev);
  };

  var reflectList = function reflectList(items, before, prev) {
    setListItems(function (listItems) {
      var _objectSpread2;

      var prevData = _toConsumableArray(listItems[prev]);

      var beforeData = _toConsumableArray(listItems[before]);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var item = _step.value;
          prevData.push(item);
          var index = beforeData.findIndex(function (i) {
            return i.id === item.id;
          });
          beforeData.splice(index, 1);
        };

        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var data = _objectSpread({}, listItems, (_objectSpread2 = {}, _defineProperty(_objectSpread2, prev, prevData), _defineProperty(_objectSpread2, before, beforeData), _objectSpread2));

      setVirtualItems(data);
      onChange(data);
      return data;
    });
  };

  var handleChange =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(before, prev) {
      var items;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // eslint-disable-next-line array-callback-return
              items = virtualItems[before].filter(function (item) {
                if (item.checked) {
                  item['type'] = prev;
                  item.checked = false;
                  return item;
                }
              });
              reflectList(items, before, prev);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSearch =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(type, value) {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (value.length) {
                setVirtualItems(function (virtualItems) {
                  var items = _toConsumableArray(listItems[type]).filter(function (item) {
                    if (item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1) return item;
                    return null;
                  });

                  return _objectSpread({}, virtualItems, _defineProperty({}, type, items));
                });
              } else {
                setVirtualItems(function (virtualItems) {
                  return _objectSpread({}, virtualItems, _defineProperty({}, type, _toConsumableArray(listItems[type])));
                });
              }

              return _context2.abrupt("return", '');

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSearch(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleTransferAll =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(before, prev) {
      var items;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              items = virtualItems[before].map(function (item) {
                item['type'] = prev;
                item.checked = false;
                return item;
              });
              reflectList(items, before, prev);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleTransferAll(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  return React.createElement("div", {
    className: "vui-ListBox ".concat(className)
  }, React.createElement(Item, {
    before: UNSELECTED,
    prev: SELECTED,
    items: virtualItems && virtualItems.unselected,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onSearch: handleSearch
  }), React.createElement(Control, {
    nonSelected: UNSELECTED,
    selected: SELECTED,
    onChange: handleChange,
    onTransferAll: handleTransferAll
  }), React.createElement(Item, {
    before: SELECTED,
    prev: UNSELECTED,
    items: virtualItems && virtualItems.selected,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onSearch: handleSearch
  }));
};

export default ListBox;