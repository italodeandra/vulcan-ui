"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useScroll = function useScroll(element) {
  var endOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      scrollY = _useState2[0],
      setScrollY = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrollEnd = _useState4[0],
      setIsEndReached = _useState4[1];

  (0, _react.useEffect)(function () {
    var elementRef = element.current;

    var handleScroll = function handleScroll() {
      var newScrollY = element.current.scrollY || element.current.scrollTop;
      var innerHeight = element.current.innerHeight || element.current.clientHeight;
      var scrollHeight = element.current.scrollHeight || document.body.scrollHeight;

      if (scrollHeight > innerHeight) {
        setScrollY(newScrollY);
        setIsEndReached(newScrollY >= scrollHeight - innerHeight - endOffset);
      }
    };

    if (elementRef) {
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

var _default = useScroll;
exports.default = _default;