import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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
    setListItems({
      unselected: unselected,
      selected: selected
    });
    setVirtualItems({
      unselected: unselected,
      selected: selected
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var handleClick = function handleClick(e, type, item, index) {
    setLastSelected({
      item: item,
      index: index
    });

    if (e.ctrlKey) {
      virtualItems[type].forEach(function (item, listIndex) {
        if (lastSelected.index <= index) {
          if (listIndex >= lastSelected.index && listIndex <= index) {
            item.checked = true;
            return item;
          }
        } else {
          if (listIndex <= lastSelected.index && listIndex >= index) {
            item.checked = true;
            return item;
          }
        }
      });
    } else {
      setVirtualItems(function (virtualItems) {
        var data = virtualItems[type].map(function (virtualItem) {
          if (virtualItem.id === item.id) virtualItem.checked = !virtualItem.checked;
          return virtualItem;
        });
        return _objectSpread({}, virtualItems, _defineProperty({}, type, data));
      });
    }
  };

  var handleDoubleClick =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(item, before, prev) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item['type'] = prev;
              item['checked'] = false;
              _context.t0 = onChange;
              _context.next = 5;
              return reflectList([item], before, prev);

            case 5:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDoubleClick(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var reflectList =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(items, before, prev) {
      var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

      return _regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context3.prev = 4;
              _loop =
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _loop() {
                var item;
                return _regeneratorRuntime.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        item = _step.value;
                        setVirtualItems(function (virtualItems) {
                          var _objectSpread3;

                          var prevData = _toConsumableArray(virtualItems[prev]);

                          prevData.push(item);

                          var beforeData = _toConsumableArray(virtualItems[before]);

                          var index = beforeData.findIndex(function (i) {
                            return i.id === item.id;
                          });
                          virtualItems[before].splice(index, 1);
                          return _objectSpread({}, virtualItems, (_objectSpread3 = {}, _defineProperty(_objectSpread3, item.type, prevData), _defineProperty(_objectSpread3, before, virtualItems[before]), _objectSpread3));
                        }); // eslint-disable-next-line no-loop-func

                        _context2.next = 4;
                        return setListItems(function (listItems) {
                          var _objectSpread4;

                          var prevData = _toConsumableArray(listItems[prev]);

                          prevData.push(item);

                          var beforeData = _toConsumableArray(listItems[before]);

                          var index = beforeData.findIndex(function (i) {
                            return i.id === item.id;
                          });
                          listItems[before].splice(index, 1);
                          data = _objectSpread({}, listItems, (_objectSpread4 = {}, _defineProperty(_objectSpread4, item.type, prevData), _defineProperty(_objectSpread4, before, listItems[before]), _objectSpread4));
                          return data;
                        });

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop);
              });
              _iterator = items[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context3.next = 12;
                break;
              }

              return _context3.delegateYield(_loop(), "t0", 9);

            case 9:
              _iteratorNormalCompletion = true;
              _context3.next = 7;
              break;

            case 12:
              _context3.next = 18;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t1 = _context3["catch"](4);
              _didIteratorError = true;
              _iteratorError = _context3.t1;

            case 18:
              _context3.prev = 18;
              _context3.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 21:
              _context3.prev = 21;

              if (!_didIteratorError) {
                _context3.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context3.finish(21);

            case 25:
              return _context3.finish(18);

            case 26:
              return _context3.abrupt("return", data);

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, null, [[4, 14, 18, 26], [19,, 21, 25]]);
    }));

    return function reflectList(_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChange =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(before, prev) {
      var items;
      return _regeneratorRuntime.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              items = [];
              virtualItems[before].forEach(function (item) {
                if (item.checked) {
                  item['type'] = prev;
                  item.checked = false;
                  items.push(item);
                }
              });
              _context4.t0 = onChange;
              _context4.next = 5;
              return reflectList(items, before, prev);

            case 5:
              _context4.t1 = _context4.sent;
              (0, _context4.t0)(_context4.t1);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));

    return function handleChange(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleSearch =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee4(type, value) {
      return _regeneratorRuntime.wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
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

              return _context5.abrupt("return", "");

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSearch(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleTransferAll =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee5(before, prev) {
      var items;
      return _regeneratorRuntime.wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              items = [];
              virtualItems[before].forEach(function (item) {
                item['type'] = prev;
                item.checked = false;
                items.push(item);
              });
              _context6.t0 = onChange;
              _context6.next = 5;
              return reflectList(items, before, prev);

            case 5:
              _context6.t1 = _context6.sent;
              (0, _context6.t0)(_context6.t1);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5);
    }));

    return function handleTransferAll(_x11, _x12) {
      return _ref6.apply(this, arguments);
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