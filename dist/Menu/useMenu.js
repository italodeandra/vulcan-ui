import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useRef, useState } from 'react';

function useMenu() {
  var ref = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return [ref, show, setShow];
}

export default useMenu;