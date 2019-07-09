import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect } from 'react';
import { useDeepCompareEffect } from '../index';
import createSharedStateHook from '../Utils/createSharedStateHook';
var localStorageSharedState = {};

var useLocalStorage = function useLocalStorage(name, initialValue) {
  if (!localStorage.getItem(name) && initialValue) {
    localStorage.setItem(name, JSON.stringify(initialValue));
  }

  if (!localStorageSharedState[name]) {
    localStorageSharedState[name] = createSharedStateHook(JSON.parse(localStorage.getItem(name)));
  }

  var _localStorageSharedSt = localStorageSharedState[name](),
      _localStorageSharedSt2 = _slicedToArray(_localStorageSharedSt, 2),
      state = _localStorageSharedSt2[0],
      setState = _localStorageSharedSt2[1];

  useEffect(function () {
    setState(JSON.parse(localStorage.getItem(name))); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useDeepCompareEffect(function () {
    localStorage.setItem(name, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useLocalStorage;