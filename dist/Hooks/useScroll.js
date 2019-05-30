import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';

var useScroll = function useScroll(element) {
  var endOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      scrollY = _useState2[0],
      setScrollY = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrollEnd = _useState4[0],
      setIsEndReached = _useState4[1];

  useEffect(function () {
    var elementRef = element.current;

    var handleScroll = function handleScroll() {
      var newScrollY = element.current.scrollY || element.current.scrollTop;
      var innerHeight = element.current.innerHeight || element.current.clientHeight;
      var scrollHeight = element.current.scrollHeight;

      if (scrollHeight > innerHeight) {
        setScrollY(newScrollY);
        setIsEndReached(newScrollY >= scrollHeight - innerHeight - endOffset);
      }
    };

    if (element.current) {
      handleScroll();
      elementRef.addEventListener('scroll', handleScroll);
      elementRef.addEventListener('resize', handleScroll);
    }

    return function () {
      elementRef.removeEventListener('scroll', handleScroll);
      elementRef.removeEventListener('resize', handleScroll);
    };
  }, [element, endOffset]);
  return [scrollY, isScrollEnd];
};

export default useScroll;