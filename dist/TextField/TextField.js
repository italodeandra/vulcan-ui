"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _checkValue = _interopRequireDefault(require("../Utils/checkValue"));

var _Autocomplete = _interopRequireDefault(require("./Autocomplete/Autocomplete"));

var _Autosize = _interopRequireDefault(require("./Autosize/Autosize"));

var _Chips = _interopRequireDefault(require("./Chips/Chips"));

var _Date = _interopRequireDefault(require("./Date/Date"));

var _Number = _interopRequireDefault(require("./Number/Number"));

var _Select = _interopRequireDefault(require("./Select/Select"));

require("./TextField.scss");

var _useValidation3 = _interopRequireDefault(require("./useValidation"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  var ref = (0, _react.useRef)(null);
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

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var _useState5 = (0, _react.useState)((0, _checkValue.default)(defaultValue)),
      _useState6 = _slicedToArray(_useState5, 2),
      isFilled = _useState6[0],
      setIsFilled = _useState6[1];

  var _useState7 = (0, _react.useState)(!(0, _checkValue.default)(defaultValue)),
      _useState8 = _slicedToArray(_useState7, 2),
      isPristine = _useState8[0],
      setIsPristine = _useState8[1];

  var _useValidation = (0, _useValidation3.default)(value, validation),
      _useValidation2 = _slicedToArray(_useValidation, 4),
      hasError = _useValidation2[0],
      errorMessage = _useValidation2[1],
      setCustomErrorMessage = _useValidation2[2],
      validate = _useValidation2[3];

  className = (0, _index.classNames)(className, 'vui-TextField', 'vui-Field', isFocused && 'is-focused', isFilled && 'is-filled', isPristine && 'is-pristine', hasError && 'has-error', suffix && 'has-suffix', readOnly && 'is-readonly', disabled && 'is-disabled', hidden && 'is-hidden', required && 'is-required');

  var handleChange = function handleChange(e) {
    var target = e.target;
    var newValue = format.parse(target ? target.value : e);
    setValue(newValue);
    setIsPristine(false);
    setIsFilled((0, _checkValue.default)(newValue));
    onChange && onChange(newValue);
  };

  (0, _index.useDeepCompareEffect)(function () {
    if (!(0, _lodash.default)(value, defaultValue)) {
      var newValue = defaultValue;
      setIsPristine(false);
      setValue(format.parse(newValue));
      setIsFilled((0, _checkValue.default)(newValue));
    }
  }, [defaultValue]);

  var handleAnimationStart = function handleAnimationStart(e) {
    switch (e.animationName) {
      case 'onAutoFillStart':
        setIsFilled(true);
        break;

      case 'onAutoFillCancel':
        setIsFilled((0, _checkValue.default)(value));
        break;

      default:
    }
  };

  var handleCustomErrorMessage = function handleCustomErrorMessage(errorMessage) {
    setIsPristine(false);
    setCustomErrorMessage(errorMessage);
  };

  (0, _react.useEffect)(function () {
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

  var formattedValue = (0, _react.useMemo)(function () {
    return format.mask(value);
  }, [value]);

  var inputElementProps = _objectSpread({
    ref: ref,
    className: (0, _index.classNames)('input', inputClassName),
    id: id,
    name: name,
    type: type,
    onChange: handleChange,
    value: (0, _checkValue.default)(formattedValue) ? formattedValue : '',
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
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "input-container"
  }, inputElement ? inputElement(inputElementProps, states) : _react.default.createElement("input", inputElementProps), suffix && _react.default.createElement("div", {
    className: "suffix"
  }, suffix), !!label && _react.default.createElement("label", {
    htmlFor: id
  }, label), _react.default.createElement("div", {
    className: "border"
  })), (hasError || helperText) && _react.default.createElement("div", {
    className: (0, _index.classNames)('assistive-text', hasError && checkIfIsCounter(errorMessage) && 'counter')
  }, !isPristine && hasError ? errorMessage : helperText), children);
};

TextField.Number = _Number.default;
TextField.Autocomplete = _Autocomplete.default;
TextField.Autosize = _Autosize.default;
TextField.Select = _Select.default;
TextField.Chips = _Chips.default;
TextField.Date = _Date.default;
var _default = TextField;
exports.default = _default;