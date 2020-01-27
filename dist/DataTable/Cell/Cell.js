"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _checkValue = _interopRequireDefault(require("../../Utils/checkValue"));

require("./Cell.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Cell = function Cell(_ref) {
  var bold = _ref.bold,
      children = _ref.children,
      editable = _ref.editable,
      onChange = _ref.onChange,
      style = _ref.style,
      customInput = _ref.customInput,
      colSpan = _ref.colSpan,
      className = _ref.className;
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      rightAligned = _useState2[0],
      setRightAligned = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      centerAligned = _useState4[0],
      setCenterAligned = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEditing = _useState6[0],
      setIsEditing = _useState6[1];

  (0, _react.useLayoutEffect)(function () {
    // noinspection JSUnresolvedVariable
    var thisIndex = ref.current.parentNode.children.indexOf(ref.current); // noinspection JSUnresolvedFunction

    var isColumnRightAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('right-aligned');

    if (isColumnRightAligned) {
      // noinspection JSUnresolvedVariable
      ref.current.classList.add('right-aligned');
    }

    setRightAligned(isColumnRightAligned); // noinspection JSUnresolvedFunction

    var isColumnCenterAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('center-aligned');

    if (isColumnCenterAligned) {
      // noinspection JSUnresolvedVariable
      ref.current.classList.add('center-aligned');
    }

    setCenterAligned(isColumnCenterAligned); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  className = (0, _index.classNames)('vui-DataTable-Cell', className, editable && 'editable', rightAligned && 'right-aligned', centerAligned && 'center-aligned', bold && 'bold');

  var handleChange = function handleChange(_ref2) {
    var target = _ref2.target;
    onChange && onChange(target.value);
  };

  var handleDoubleClick = function handleDoubleClick() {
    setIsEditing(true);
  };

  var handleEnter = function handleEnter(_ref3) {
    var key = _ref3.key;

    if (key === 'Enter') {
      setIsEditing(false);
    }
  };

  var inputProps = {
    value: (0, _checkValue.default)(children) ? children : '',
    onBlur: function onBlur() {
      return setIsEditing(false);
    },
    autoFocus: editable !== 'always',
    onChange: handleChange,
    onKeyDown: handleEnter
  };
  var input = customInput ? customInput(inputProps) : _react.default.createElement("input", inputProps);
  return _react.default.createElement("td", {
    className: className,
    ref: ref,
    onClick: editable ? handleDoubleClick : undefined,
    style: style,
    colSpan: colSpan
  }, !isEditing && editable !== 'always' ? children : input);
};

var _default = Cell;
exports.default = _default;