import { useEffect, useRef } from 'react';
import { disableBodyScroll } from '../index';

var useTouchMove = function useTouchMove(elementRef, open, setOpen) {
  var touchStartX = useRef(null);
  var currentElementX = useRef(0);
  var openRef = useRef(open);
  var nextOpen = useRef(open);

  var handleTouchStart = function handleTouchStart(e) {
    e.preventDefault();

    if (elementRef.current) {
      touchStartX.current = e.touches[0].pageX;
      currentElementX.current = getTranslateX(elementRef.current);
    }
  };

  var handleTouchMove = function handleTouchMove(e) {
    if (elementRef.current) {
      if (!openRef.current && touchStartX.current < 60 || openRef.current && touchStartX.current > window.innerWidth - 56) {
        elementRef.current.classList.add('open');
        elementRef.current.style.transitionProperty = 'box-shadow';
        var touchMoveX = e.targetTouches[0].pageX;
        var newTranslateX = currentElementX.current + (touchMoveX - touchStartX.current);

        if (newTranslateX < 0) {
          elementRef.current.style.transform = "translateX(".concat(newTranslateX, "px)");
        }

        nextOpen.current = newTranslateX > -40;
        document.body.style.overflow = 'hidden';
        disableBodyScroll(true, '.vui-NavigationDrawer, .vui-NavigationDrawer-scrim');
      }
    }
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    if (elementRef.current) {
      elementRef.current.style.transitionProperty = '';
      elementRef.current.style.transform = '';

      if (nextOpen.current) {
        elementRef.current.classList.add('open');
        document.body.style.overflow = 'hidden';
        disableBodyScroll(true, '.can-scroll');
      } else {
        document.body.style.overflow = '';
        disableBodyScroll(false, '.can-scroll');
        elementRef.current.classList.remove('open');
      }

      setOpen(nextOpen.current);
    }
  };

  useEffect(function () {
    openRef.current = open;
    nextOpen.current = open;
  }, [open]);
  useEffect(function () {
    document.body.addEventListener('touchstart', handleTouchStart);
    document.body.addEventListener('touchmove', handleTouchMove);
    document.body.addEventListener('touchend', handleTouchEnd);
    return function () {
      document.body.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('touchend', handleTouchEnd);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

function getTranslateX(element) {
  var style = window.getComputedStyle(element).getPropertyValue('transform');
  return parseInt(style.split(',')[4]);
}

export default useTouchMove;