import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';

function createSharedStateHook(initialState) {
  var state = initialState;
  var listeners = [];

  function useSharedState() {
    var _useState = useState(state),
        _useState2 = _slicedToArray(_useState, 2),
        sharedState = _useState2[0],
        setSharedState = _useState2[1];

    useEffect(function () {
      listeners.push(setSharedState);
      return function () {
        listeners.splice(listeners.indexOf(setSharedState), 1);
      };
    }, []);
    return [sharedState, setUserAll];
  }

  function setUserAll(nextState) {
    state = nextState;
    listeners.forEach(function (setState) {
      return setState(nextState);
    });
  }

  return useSharedState;
}

export default createSharedStateHook;