import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';
import { useDeepCompareEffect } from '../index';

function createSharedStateHook(initialState) {
  var state = initialState;
  var listeners = [];

  function useSharedState() {
    var _useState = useState(state),
        _useState2 = _slicedToArray(_useState, 2),
        sharedState = _useState2[0],
        setSharedState = _useState2[1];

    var _useState3 = useState(state),
        _useState4 = _slicedToArray(_useState3, 2),
        innerState = _useState4[0],
        setInnerState = _useState4[1];

    useEffect(function () {
      listeners.push(setSharedState);
      return function () {
        listeners.splice(listeners.indexOf(setSharedState), 1);
      };
    }, []);
    useDeepCompareEffect(function () {
      if (!_isEqual(innerState, sharedState)) {
        state = innerState;
        listeners.forEach(function (setState) {
          return setState(state);
        });
      }
    }, [innerState]);
    return [sharedState, setInnerState];
  }

  return useSharedState;
}

export default createSharedStateHook;