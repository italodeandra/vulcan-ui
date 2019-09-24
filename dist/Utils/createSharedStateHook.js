import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function createSharedStateHook(initialState) {
  var state = initialState;
  var listeners = [];
  var stateRef = {};

  function useSharedState() {
    var _useState = useState(state),
        _useState2 = _slicedToArray(_useState, 2),
        sharedState = _useState2[0],
        setSharedState = _useState2[1];

    var ready = useRef(false);
    useLayoutEffect(function () {
      ready.current = true;
      setTimeout(function () {
        listeners.forEach(function (setState) {
          return setState(state);
        });
      }, 100);
    }, []);

    var setAllStates = function setAllStates(newState) {
      if (ready.current) {
        state = newState;
        stateRef.value = state;
        listeners.forEach(function (setState) {
          return setState(state);
        });
      }
    };

    useEffect(function () {
      listeners.push(setSharedState);
      return function () {
        listeners.splice(listeners.indexOf(setSharedState), 1);
      };
    }, []);
    return [sharedState, setAllStates, stateRef];
  }

  return useSharedState;
}

export default createSharedStateHook;