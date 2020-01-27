"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _index = require("../index");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function checkValue(value) {
  return typeof value !== 'undefined' && value !== null && value !== '';
}

function useValidation(value, validation) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      errorText = _useState4[0],
      setErrorMessage = _useState4[1];

  var setCustomErrorMessage = function setCustomErrorMessage(errorMessage) {
    setHasError(!!errorMessage);
    setErrorMessage(errorMessage);
  };

  var validate = function validate() {
    setHasError(false);
    setErrorMessage(null);

    if (validation) {
      if (validation.required) {
        if (!checkValue(value)) {
          setHasError(true);
          setErrorMessage(validation.required.message || validation.required);
          return;
        }
      }

      if (validation.maxLength) {
        var maxLength = {};
        maxLength.length = validation.maxLength.length || validation.maxLength;
        maxLength.message = validation.maxLength.message || "".concat(value.length, "/").concat(maxLength.length);

        if (!checkValue(value) || value.length > maxLength.length) {
          setHasError(true);
          setErrorMessage(maxLength.message);
          return;
        }
      }

      if (validation.minLength) {
        var minLength = {};
        minLength.length = validation.minLength.length || validation.minLength;
        minLength.message = validation.minLength.message;

        if (!checkValue(value) || value.length < minLength.length) {
          setHasError(true);
          setErrorMessage(minLength.message);
          return;
        }
      }

      if (validation.minAmount) {
        var minAmount = {};
        minAmount.amount = validation.minAmount.amount || validation.minAmount;
        minAmount.message = validation.minAmount.message;

        if (!checkValue(value) || parseFloat(value) < minAmount.amount) {
          setHasError(true);
          setErrorMessage(minAmount.message);
          return;
        }
      }

      if (validation.maxAmount) {
        var maxAmount = {};
        maxAmount.amount = validation.maxAmount.amount || validation.maxAmount;
        maxAmount.message = validation.maxAmount.message;

        if (!checkValue(value) || parseFloat(value) > maxAmount.amount) {
          setHasError(true);
          setErrorMessage(maxAmount.message);
          return;
        }
      }

      if (validation.regexExpression) {
        var regexExpression = {};
        regexExpression.value = validation.regexExpression.value || validation.regexExpression;
        regexExpression.message = validation.regexExpression.message;
        var condition = new RegExp(regexExpression.value, 'g');

        if (value !== 'undefined' && value !== null && !condition.test(value)) {
          setHasError(true);
          setErrorMessage(regexExpression.message);
          return;
        }
      }
    }
  };

  (0, _index.useDeepCompareEffect)(function () {
    validate(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validation, value]);
  return [hasError, errorText, setCustomErrorMessage, validate];
}

var _default = useValidation;
exports.default = _default;