import _isEqual from 'lodash.isequal';
import { useLayoutEffect, useRef } from 'react';

function deepCompareEquals(a, b) {
  return _isEqual(a, b);
}

function useDeepCompareMemoize(value) {
  var ref = useRef(null);

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(callback, dependencies) {
  useLayoutEffect(callback, useDeepCompareMemoize(dependencies));
}

export default useDeepCompareEffect;