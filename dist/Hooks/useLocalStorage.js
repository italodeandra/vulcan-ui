import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useMemo } from 'react';
import { useDeepCompareEffect } from '../index';
import createSharedStateHook from '../Utils/createSharedStateHook';

var useLocalStorage = function useLocalStorage(name, initialValue) {
  if (!localStorage.getItem(name) && initialValue) {
    localStorage.setItem(name, JSON.stringify(initialValue));
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  var useSharedState = useMemo(function () {
    return createSharedStateHook(JSON.parse(localStorage.getItem(name)));
  }, []);

  var _useSharedState = useSharedState(),
      _useSharedState2 = _slicedToArray(_useSharedState, 2),
      state = _useSharedState2[0],
      setState = _useSharedState2[1];

  useEffect(function () {
    setState(JSON.parse(localStorage.getItem(name))); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useDeepCompareEffect(function () {
    localStorage.setItem(name, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useLocalStorage;