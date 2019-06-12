import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useState } from 'react';
import { classNames, TextField, useDeepCompareEffect, Icon } from '../../index';
import './Chips.scss';

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

  var ref = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      autocompleteValue = _useState2[0],
      setAutocompleteValue = _useState2[1];

  var _useState3 = useState([]),
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

  useDeepCompareEffect(function () {
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

  return React.createElement(TextField.Autocomplete, Object.assign({
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

      return React.createElement("div", {
        className: classNames(className, 'vui-TextField-Chips'),
        ref: ref
      }, React.createElement("div", {
        className: "chips"
      }, selectedItems.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          className: "chip"
        }, autocompleteConfig.itemTranspile(item), React.createElement(Icon, {
          className: "close",
          name: "close",
          onClick: function onClick() {
            return handleItemDelete(item);
          }
        }));
      }), React.createElement("input", Object.assign({
        className: className
      }, props2))));
    }
  }));
};

export default Chips;