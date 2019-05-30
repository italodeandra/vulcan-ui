import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';

function useValidation(value, validation) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      errorText = _useState4[0],
      setErrorText = _useState4[1];

  useEffect(function () {
    setHasError(false);
    setErrorText(null);

    if (validation) {
      if (validation.required) {
        if (!value) {
          setHasError(true);
          setErrorText(validation.required.message || validation.required);
          return;
        }
      }

      if (validation.maxLength) {
        var maxLength = {};
        maxLength.length = validation.maxLength.length || validation.maxLength;
        maxLength.message = validation.maxLength.message || "".concat(value.length, "/").concat(maxLength.length);

        if (value && value.length > maxLength.length) {
          setHasError(true);
          setErrorText(maxLength.message);
          return;
        }
      }

      if (validation.minLength) {
        var minLength = {};
        minLength.length = validation.minLength.length || validation.minLength;
        minLength.message = validation.minLength.message;

        if (value && value.length < minLength.length) {
          setHasError(true);
          setErrorText(minLength.message);
          return;
        }
      }

      if (validation.minAmount) {
        var minAmount = {};
        minAmount.amount = validation.minAmount.amount || validation.minAmount;
        minAmount.message = validation.minAmount.message;

        if (value && parseFloat(value) < minAmount.amount) {
          setHasError(true);
          setErrorText(minAmount.message);
          return;
        }
      }

      if (validation.maxAmount) {
        var maxAmount = {};
        maxAmount.amount = validation.maxAmount.amount || validation.maxAmount;
        maxAmount.message = validation.maxAmount.message;

        if (value && parseFloat(value) > maxAmount.amount) {
          setHasError(true);
          setErrorText(maxAmount.message);
          return;
        }
      }
    }
  }, [validation, value]);
  return [hasError, errorText];
}

export default useValidation;