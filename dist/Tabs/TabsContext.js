import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createContext, useState } from 'react';

var TabsContext = function TabsContext(initialPage) {
  var _useState = useState(initialPage),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  return createContext({
    currentPage: currentPage,
    setCurrentPage: setCurrentPage
  });
};

export default TabsContext;