"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Form = function Form(_ref) {
  var id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      onSubmit = _ref.onSubmit,
      setRef = _ref.setRef;
  className = (0, _index.classNames)(className, 'vui-Form');
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (setRef) {
      setRef.current = {
        element: ref.current,
        isInvalid: checkIfIsInvalid
      };
    }
  }, [setRef]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit && onSubmit({
      element: ref.current,
      isInvalid: checkIfIsInvalid
    });
  };

  var checkIfIsInvalid = function checkIfIsInvalid() {
    var firstInvalid = ref.current.querySelector('.vui-Field.has-error .input');

    if (firstInvalid) {
      return {
        focusFirstInvalid: function focusFirstInvalid() {
          firstInvalid.focus();
        }
      };
    } else {
      return null;
    }
  };

  return _react.default.createElement("form", {
    id: id,
    className: className,
    onSubmit: handleSubmit,
    ref: ref
  }, children);
};

var _default = Form;
exports.default = _default;