"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _index = require("../index");

var useTouchMove = function useTouchMove(elementRef, open, setOpen) {
  var touchStartX = (0, _react.useRef)(null);
  var currentElementX = (0, _react.useRef)(0);
  var openRef = (0, _react.useRef)(open);
  var nextOpen = (0, _react.useRef)(open);

  var handleTouchStart = function handleTouchStart(e) {
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

        nextOpen.current = newTranslateX > -(window.innerWidth / 2);
      }
    }
  };

  var handleTouchEnd = function handleTouchEnd() {
    if (elementRef.current) {
      elementRef.current.style.transitionProperty = '';
      elementRef.current.style.transform = '';

      if (nextOpen.current) {
        elementRef.current.classList.add('open');
        document.body.style.overflow = 'hidden';
        (0, _index.disableBodyScroll)(true, '.can-scroll');
      } else {
        document.body.style.overflow = '';
        (0, _index.disableBodyScroll)(false, '.can-scroll');
        elementRef.current.classList.remove('open');
      }

      setOpen(nextOpen.current);
    }
  };

  (0, _react.useEffect)(function () {
    openRef.current = open;
    nextOpen.current = open;
  }, [open]);
  (0, _react.useEffect)(function () {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    return function () {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

function getTranslateX(element) {
  var style = window.getComputedStyle(element).getPropertyValue('transform');
  return parseInt(style.split(',')[4]);
}

var _default = useTouchMove;
exports.default = _default;