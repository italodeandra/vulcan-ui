"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Control = _interopRequireDefault(require("./Control/Control"));

var _Item = _interopRequireDefault(require("./Item/Item"));

require("./ListBox.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UNSELECTED = 'unselected';
var SELECTED = 'selected';
/**
 * @param {className}
 * @param onChange
 * @param selected
 * @param unselected
 * @param filter */

var ListBox = function ListBox(_ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      selected = _ref.selected,
      unselected = _ref.unselected,
      filter = _ref.filter;

  filter = filter || function (item) {
    return item;
  };

  if (!unselected) console.error('The property "unselected" is required for ListBox');

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      lastSelected = _useState2[0],
      setLastSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      listItems = _useState4[0],
      setListItems = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      virtualItems = _useState6[0],
      setVirtualItems = _useState6[1];

  (0, _react.useEffect)(function () {
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
    regeneratorRuntime.mark(function _callee(before, prev) {
      var items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              items = listItems[before].filter(function (item) {
                if (item.checked) {
                  item['type'] = prev;
                  item.checked = false;
                  return item;
                }

                return false;
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
    regeneratorRuntime.mark(function _callee2(type, value) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
    regeneratorRuntime.mark(function _callee3(before, prev) {
      var items;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
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

  return _react.default.createElement("div", {
    className: "vui-ListBox ".concat(className)
  }, _react.default.createElement(_Item.default, {
    before: UNSELECTED,
    prev: SELECTED,
    items: virtualItems && virtualItems.unselected.filter(filter),
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onSearch: handleSearch
  }), _react.default.createElement(_Control.default, {
    nonSelected: UNSELECTED,
    selected: SELECTED,
    onChange: handleChange,
    onTransferAll: handleTransferAll
  }), _react.default.createElement(_Item.default, {
    before: SELECTED,
    prev: UNSELECTED,
    items: virtualItems && virtualItems.selected,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onSearch: handleSearch
  }));
};

var _default = ListBox;
exports.default = _default;