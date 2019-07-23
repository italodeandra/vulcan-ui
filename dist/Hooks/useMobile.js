import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
var defaultMobileWidthViewport = 758;

var useMobile = function useMobile(mobileWidthViewport) {
  mobileWidthViewport = mobileWidthViewport || defaultMobileWidthViewport;

  var _useState = useState(window.innerWidth <= mobileWidthViewport),
      _useState2 = _slicedToArray(_useState, 2),
      isMobile = _useState2[0],
      setIsMobile = _useState2[1];

  useEffect(function () {
    var handleResize = function handleResize() {
      setIsMobile(window.innerWidth <= mobileWidthViewport);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [isMobile];
};

export default useMobile;