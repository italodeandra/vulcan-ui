"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _Search = _interopRequireDefault(require("../Search/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Item = function Item(_ref) {
  var before = _ref.before,
      prev = _ref.prev,
      items = _ref.items,
      _onDoubleClick = _ref.onDoubleClick,
      _onClick = _ref.onClick,
      onSearch = _ref.onSearch;

  var _useState = (0, _react.useState)({
    from: 0,
    to: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      render = _useState2[0],
      setRender = _useState2[1];

  var scrollableRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var target = scrollableRef.current;
    var from = Math.floor(target.scrollTop / 56) - 1;
    var to = Math.ceil(target.getBoundingClientRect().height / 56 + target.scrollTop / 56 + 2);

    if (items) {
      to = to > items.length ? items.length : to;
    }

    setRender({
      from: from,
      to: to
    });
  }, [before, prev, items]);

  function handleScroll(e) {
    var target = e.target;
    var from = Math.floor(target.scrollTop / 56);
    var to = Math.floor(target.getBoundingClientRect().height / 56 + target.scrollTop / 56);

    if (items) {
      to = to > items.length ? items.length : to;
    }

    setRender({
      from: from,
      to: to
    });
  }

  return _react.default.createElement("div", {
    className: "vui-ListBox-items"
  }, _react.default.createElement(_Search.default, {
    onChange: onSearch,
    name: before,
    placeholder: "Pesquisar..."
  }), _react.default.createElement(_index.List, {
    className: "vui-ListBox-List",
    onScroll: handleScroll,
    setRef: scrollableRef
  }, items && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      height: 56 * render.from
    }
  }), items.sort(function (a, b) {
    return a.id > b.id ? 1 : -1;
  }).map(function (item, index) {
    return _react.default.createElement(_index.List.ListItem, {
      key: item.id,
      onDoubleClick: function onDoubleClick() {
        return _onDoubleClick(item, before, prev);
      },
      onClick: function onClick(e) {
        return _onClick(e, before, item, index);
      },
      selectable: true,
      active: !!item.checked
    }, _react.default.createElement(_index.List.Content, null, _react.default.createElement(_index.List.Title, null, item.label)), _react.default.createElement(_index.List.Action, {
      right: true
    }, _react.default.createElement(_index.Checkbox, {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      checked: !!item.checked,
      id: item.id,
      name: item.id
    })));
  }).filter(function (_, i) {
    return i >= render.from && i <= render.to;
  }), _react.default.createElement("div", {
    style: {
      height: 56 * (items.length - render.to)
    }
  }))));
};

var _default = Item;
exports.default = _default;