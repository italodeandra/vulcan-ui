import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState } from 'react';
import { useDeepCompareEffect } from '../index';

var useLocalStorage = function useLocalStorage(name, initialValue) {
  if (!localStorage.getItem(name) && initialValue) {
    localStorage.setItem(name, JSON.stringify(initialValue));
  }

  var _useState = useState(JSON.parse(localStorage.getItem(name))),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useDeepCompareEffect(function () {
    localStorage.setItem(name, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useLocalStorage;