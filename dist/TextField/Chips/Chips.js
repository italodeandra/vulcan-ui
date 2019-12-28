"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

require("./Chips.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chips = function Chips(_ref) {
  var onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      value = _ref.value,
      autocompleteConfig = _ref.autocompleteConfig,
      props = _objectWithoutProperties(_ref, ["onBlur", "onChange", "value", "autocompleteConfig"]);

  autocompleteConfig = autocompleteConfig || {};

  autocompleteConfig.itemCompare = autocompleteConfig.itemCompare || function (i1, i2) {
    return i1 === i2;
  };

  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      autocompleteValue = _useState2[0],
      setAutocompleteValue = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedItems = _useState4[0],
      setSelectedItems = _useState4[1];

  autocompleteConfig.keepResultOpen = true;

  var handleAutocompleteChange = function handleAutocompleteChange(newAutocompleteValue) {
    setAutocompleteValue(newAutocompleteValue);
  };

  var handleItemSelect = function handleItemSelect(newItem) {
    setSelectedItems(function (oldItems) {
      var newItems = _toConsumableArray(oldItems);

      if (newItems.find(function (i) {
        return autocompleteConfig.itemCompare(i, newItem);
      })) {
        newItems.splice(newItems.findIndex(function (i) {
          return autocompleteConfig.itemCompare(i, newItem);
        }), 1);
      } else {
        newItems.push(newItem);
      }

      return newItems;
    });
    setTimeout(function () {
      ref.current.setIsFilled(true);
      ref.current.setCustomErrorMessage('');
    });
  };

  var handleBlur = function handleBlur() {
    onBlur && onBlur();
    setTimeout(function () {
      if (selectedItems.length) {
        ref.current.setIsFilled(true);
        ref.current.setCustomErrorMessage('');
      } else {
        ref.current.setIsFilled(false);
        ref.current.validate();
      }
    });
  };

  (0, _index.useDeepCompareEffect)(function () {
    onChange && onChange(selectedItems);
  }, [selectedItems]);

  var handleItemDelete = function handleItemDelete(item) {
    setSelectedItems(function (oldItems) {
      var newItems = _toConsumableArray(oldItems);

      newItems.splice(newItems.findIndex(function (i) {
        return autocompleteConfig.itemCompare(i, item);
      }), 1);
      ref.current.setIsFilled(!!newItems.length);
      return newItems;
    });
  };

  return _react.default.createElement(_index.TextField.Autocomplete, _extends({
    setRef: ref
  }, props, {
    autocompleteConfig: autocompleteConfig,
    value: autocompleteValue,
    onChange: handleAutocompleteChange,
    onItemSelect: handleItemSelect,
    onBlur: handleBlur,
    inputElement: function inputElement(_ref2) {
      var className = _ref2.className,
          ref = _ref2.ref,
          props2 = _objectWithoutProperties(_ref2, ["className", "ref"]);

      return _react.default.createElement("div", {
        className: (0, _index.classNames)(className, 'vui-TextField-Chips'),
        ref: ref
      }, _react.default.createElement("div", {
        className: "chips"
      }, selectedItems.map(function (item, i) {
        return _react.default.createElement("div", {
          key: i,
          className: "chip"
        }, autocompleteConfig.itemTranspile(item), _react.default.createElement(_index.Icon, {
          className: "close",
          name: "close",
          onClick: function onClick() {
            return handleItemDelete(item);
          }
        }));
      }), _react.default.createElement("input", _extends({
        className: className
      }, props2))));
    }
  }));
};

var _default = Chips;
exports.default = _default;