import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
//TODO: Fix the assistive text changing fast between error and helper when it has an required error
import _isEqual from 'lodash.isequal';
import React, { useRef, useState } from 'react';
import { classNames, useDeepCompareEffect } from '../index';
import Autocomplete from './Autocomplete/Autocomplete';
import Number from './Number/Number';
import './TextField.scss';
import useValidation from './useValidation';

function checkIfIsCounter(value) {
  return new RegExp('^[0-9]+\\/[0-9]+$').test(value);
}

var TextField = function TextField(_ref) {
  var className = _ref.className,
      inputClassName = _ref.inputClassName,
      id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      onChange = _ref.onChange,
      type = _ref.type,
      defaultValue = _ref.value,
      helperText = _ref.helperText,
      validation = _ref.validation,
      required = _ref.required,
      format = _ref.format,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      children = _ref.children,
      autoComplete = _ref.autoComplete,
      setRef = _ref.setRef,
      suffix = _ref.suffix,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      props = _objectWithoutProperties(_ref, ["className", "inputClassName", "id", "name", "label", "onChange", "type", "value", "helperText", "validation", "required", "format", "onFocus", "onBlur", "children", "autoComplete", "setRef", "suffix", "readOnly", "disabled", "hidden"]);

  var ref = useRef(null);
  type = type || 'text';
  format = format || {
    parse: function parse(f) {
      return f;
    },
    mask: function mask(f) {
      return f;
    }
  };
  id = id || name;
  setRef = setRef || ref;

  if (!validation && required) {
    validation = validation || {
      required: required
    };
  }

  if (!required && validation) {
    required = validation.required;
  }

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var _useState5 = useState(!!defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      isFilled = _useState6[0],
      setIsFilled = _useState6[1];

  var _useState7 = useState(!defaultValue),
      _useState8 = _slicedToArray(_useState7, 2),
      isPristine = _useState8[0],
      setIsPristine = _useState8[1];

  var _useValidation = useValidation(value, validation),
      _useValidation2 = _slicedToArray(_useValidation, 2),
      hasError = _useValidation2[0],
      errorText = _useValidation2[1];

  className = classNames(className, 'vui-TextField', isFocused && 'is-focused', isFilled && 'is-filled', isPristine && 'is-pristine', hasError && 'has-error', suffix && 'has-suffix', readOnly && 'is-readonly', disabled && 'is-disabled', hidden && 'is-hidden');

  var handleChange = function handleChange(_ref2) {
    var target = _ref2.target;
    var newValue = format.parse(target.value);
    setValue(newValue);
    setIsPristine(false);
    setIsFilled(!!newValue);
    onChange && onChange(newValue);
  };

  useDeepCompareEffect(function () {
    if (!_isEqual(value, defaultValue)) {
      var newValue = defaultValue;
      setIsPristine(false);
      setValue(format.parse(newValue));
      setIsFilled(!!newValue);
    }
  }, [defaultValue]);

  var handleAnimationStart = function handleAnimationStart(e) {
    switch (e.animationName) {
      case 'onAutoFillStart':
        setIsFilled(true);
        break;

      case 'onAutoFillCancel':
        setIsFilled(!!value);
        break;

      default:
    }
  };

  return React.createElement("div", {
    className: className
  }, React.createElement("div", {
    className: "input-container"
  }, React.createElement("input", Object.assign({
    ref: setRef,
    className: classNames('input', inputClassName),
    id: id,
    name: name,
    type: type,
    onChange: handleChange,
    value: format.mask(value) || '',
    onFocus: function onFocus(e) {
      setIsFocused(true);
      if (_onFocus) _onFocus(e);
    },
    onBlur: function onBlur(e) {
      setIsFocused(false);
      if (_onBlur) _onBlur(e);
    },
    required: required,
    autoComplete: autoComplete === false ? 'off' : undefined,
    readOnly: readOnly,
    disabled: disabled
  }, props, {
    onAnimationStart: handleAnimationStart
  })), suffix && React.createElement("div", {
    className: "suffix"
  }, suffix), !!label && React.createElement("label", {
    htmlFor: id
  }, label), React.createElement("div", {
    className: "border"
  })), (hasError || helperText) && React.createElement("div", {
    className: classNames('assistive-text', hasError && checkIfIsCounter(errorText) && 'counter')
  }, !isPristine && hasError ? errorText : helperText), children);
};

TextField.Number = Number;
TextField.Autocomplete = Autocomplete;
export default TextField;