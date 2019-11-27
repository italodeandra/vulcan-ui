import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//TODO: Fix the assistive text changing fast between error and helper when it has an required error
import _isEqual from 'lodash.isequal';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { classNames, useDeepCompareEffect } from '../index';
import checkValue from '../Utils/checkValue';
import Autocomplete from './Autocomplete/Autocomplete';
import Autosize from './Autosize/Autosize';
import Chips from './Chips/Chips';
import Date from './Date/Date';
import Number from './Number/Number';
import Select from './Select/Select';
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
      autosize = _ref.autosize,
      inputElement = _ref.inputElement,
      props = _objectWithoutProperties(_ref, ["className", "inputClassName", "id", "name", "label", "onChange", "type", "value", "helperText", "validation", "required", "format", "onFocus", "onBlur", "children", "autoComplete", "setRef", "suffix", "readOnly", "disabled", "hidden", "autosize", "inputElement"]);

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

  var _useState5 = useState(checkValue(defaultValue)),
      _useState6 = _slicedToArray(_useState5, 2),
      isFilled = _useState6[0],
      setIsFilled = _useState6[1];

  var _useState7 = useState(!checkValue(defaultValue)),
      _useState8 = _slicedToArray(_useState7, 2),
      isPristine = _useState8[0],
      setIsPristine = _useState8[1];

  var _useValidation = useValidation(value, validation),
      _useValidation2 = _slicedToArray(_useValidation, 4),
      hasError = _useValidation2[0],
      errorMessage = _useValidation2[1],
      setCustomErrorMessage = _useValidation2[2],
      validate = _useValidation2[3];

  className = classNames(className, 'vui-TextField', 'vui-Field', isFocused && 'is-focused', isFilled && 'is-filled', isPristine && 'is-pristine', hasError && 'has-error', suffix && 'has-suffix', readOnly && 'is-readonly', disabled && 'is-disabled', hidden && 'is-hidden', required && 'is-required');

  var handleChange = function handleChange(e) {
    var target = e.target;
    var newValue = format.parse(target ? target.value : e);
    setValue(newValue);
    setIsPristine(false);
    setIsFilled(checkValue(newValue));
    onChange && onChange(newValue);
  };

  useDeepCompareEffect(function () {
    if (!_isEqual(value, defaultValue)) {
      var newValue = defaultValue;
      setIsPristine(false);
      setValue(format.parse(newValue));
      setIsFilled(checkValue(newValue));
    }
  }, [defaultValue]);

  var handleAnimationStart = function handleAnimationStart(e) {
    switch (e.animationName) {
      case 'onAutoFillStart':
        setIsFilled(true);
        break;

      case 'onAutoFillCancel':
        setIsFilled(checkValue(value));
        break;

      default:
    }
  };

  var handleCustomErrorMessage = function handleCustomErrorMessage(errorMessage) {
    setIsPristine(false);
    setCustomErrorMessage(errorMessage);
  };

  useEffect(function () {
    var refContent = {
      element: ref.current,
      setCustomErrorMessage: handleCustomErrorMessage,
      setIsPristine: setIsPristine,
      setIsFilled: setIsFilled,
      validate: validate
    };

    if (setRef) {
      if (typeof setRef !== 'function') {
        setRef.current = refContent;
      } else {
        setRef({
          current: refContent
        });
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // eslint-disable-next-line

  var formattedValue = useMemo(function () {
    return format.mask(value);
  }, [value]);

  var inputElementProps = _objectSpread({
    ref: ref,
    className: classNames('input', inputClassName),
    id: id,
    name: name,
    type: type,
    onChange: handleChange,
    value: checkValue(formattedValue) ? formattedValue : '',
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
    disabled: disabled,
    onAnimationStart: handleAnimationStart
  }, props);

  var states = {
    isFocused: isFocused,
    isFilled: isFilled,
    isPristine: isPristine
  };
  return React.createElement("div", {
    className: className
  }, React.createElement("div", {
    className: "input-container"
  }, inputElement ? inputElement(inputElementProps, states) : React.createElement("input", inputElementProps), suffix && React.createElement("div", {
    className: "suffix"
  }, suffix), !!label && React.createElement("label", {
    htmlFor: id
  }, label), React.createElement("div", {
    className: "border"
  })), (hasError || helperText) && React.createElement("div", {
    className: classNames('assistive-text', hasError && checkIfIsCounter(errorMessage) && 'counter')
  }, !isPristine && hasError ? errorMessage : helperText), children);
};

TextField.Number = Number;
TextField.Autocomplete = Autocomplete;
TextField.Autosize = Autosize;
TextField.Select = Select;
TextField.Chips = Chips;
TextField.Date = Date;
export default TextField;