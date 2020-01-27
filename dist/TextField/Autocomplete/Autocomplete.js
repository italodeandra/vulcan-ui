"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../index");

require("./Autocomplete.scss");

var _AutocompleteDataSource = _interopRequireDefault(require("./AutocompleteDataSource"));

var _AutocompleteResult = _interopRequireDefault(require("./AutocompleteResult"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var autocompleteIndex = 0;

var Autocomplete = function Autocomplete(_ref) {
  var autocompleteConfig = _ref.autocompleteConfig,
      onChange = _ref.onChange,
      defaultValue = _ref.value,
      onItemSelect = _ref.onItemSelect,
      readOnly = _ref.readOnly,
      setRef = _ref.setRef,
      props = _objectWithoutProperties(_ref, ["autocompleteConfig", "onChange", "value", "onItemSelect", "readOnly", "setRef"]);

  autocompleteConfig = autocompleteConfig || {};
  autocompleteConfig.emptyLabel = autocompleteConfig.emptyLabel || 'No items found';
  autocompleteConfig.errorMessage = autocompleteConfig.errorMessage || 'There was an error during the request of the autocomplete';

  autocompleteConfig.responseTranspile = autocompleteConfig.responseTranspile || function (r) {
    return r;
  };

  autocompleteConfig.valueTranspile = autocompleteConfig.valueTranspile || function (r) {
    return r;
  };

  var resultRef = (0, _react.useRef)(null);

  var _usePortal$hook = _index.usePortal.hook(),
      _usePortal$hook2 = _slicedToArray(_usePortal$hook, 3),
      resultTargetRef = _usePortal$hook2[0],
      showResult = _usePortal$hook2[1],
      setShowResult = _usePortal$hook2[2];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultValue),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      result = _useState8[0],
      setResult = _useState8[1];

  var getResultIndex = (0, _react.useRef)(0);
  var getResultTimeout = (0, _react.useRef)(null);

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      page = _useState10[0],
      setPage = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isScrollEnd = _useState12[0],
      setIsScrollEnd = _useState12[1];

  var index = (0, _react.useRef)(++autocompleteIndex);

  var _useSnackbar = (0, _index.useSnackbar)(),
      _useSnackbar2 = _slicedToArray(_useSnackbar, 1),
      showSnackbar = _useSnackbar2[0];

  (0, _react.useEffect)(function () {
    if (setRef) {
      setRef.current = resultTargetRef.current;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [setRef]);
  (0, _index.useDeepCompareEffect)(function () {
    if (!(0, _lodash.default)(value, defaultValue)) {
      if (autocompleteConfig.keepValue) {
        setValue(defaultValue);
        setSelected(defaultValue);
      } else {
        setValue(null);
        setSelected(null);
        onChange && onChange(null);
      }
    }
  }, [defaultValue]);

  var getResult = function getResult(value, page) {
    if (page === 0) {
      setResult(null);
    }

    setShowResult(true);
    setIsLoading(true);
    setIsScrollEnd(false);
    var getResultIndexCurrent = ++getResultIndex.current;
    (0, _AutocompleteDataSource.default)(autocompleteConfig.request, value, page).get().then(function (res) {
      if (getResultIndex.current === getResultIndexCurrent) {
        var responseTranspiled = autocompleteConfig.responseTranspile(res.data);

        if (res && res.data && res.data.statusCode && res.data.statusCode === 200) {
          if (Array.isArray(responseTranspiled)) {
            setResult(page === 0 ? responseTranspiled : function (r) {
              return [].concat(_toConsumableArray(r), _toConsumableArray(responseTranspiled));
            });
          } else {
            if (responseTranspiled) {
              setSelected(value);
              onChange && onChange(value);
              setShowResult(false);
              setResult(null);
              onItemSelect && onItemSelect(responseTranspiled);
            }
          }
        }

        setIsLoading(false);
      }
    }).catch(function (err) {
      console.error(err);
      showSnackbar(autocompleteConfig.errorMessage, Infinity, function (snackbar) {
        return _react.default.createElement(_index.Button, {
          icon: true,
          onClick: snackbar.close
        }, _react.default.createElement(_index.Icon, {
          name: "close"
        }));
      });
      setIsLoading(false);
      setResult(null);
    });
  };

  var handleFocus = function handleFocus(e) {
    var relatedTarget = e.relatedTarget;
    props.onFocus && props.onFocus(e);

    if (!readOnly) {
      if (!relatedTarget || !relatedTarget.classList.contains("vui-TextField-Autocomplete-Target".concat(index.current))) {
        getResult(value, page);
      }
    }
  };

  var handleBlur = function handleBlur(e) {
    props.onBlur && props.onBlur(e);

    if (!readOnly) {
      var relatedTarget = e.relatedTarget;

      if (!relatedTarget || !relatedTarget.classList.contains("vui-TextField-Autocomplete-Target".concat(index.current))) {
        setShowResult(false);
        setPage(0);
        setResult(null);

        if (!autocompleteConfig.keepValue && !(0, _lodash.default)(value, selected)) {
          setValue(null);
          onChange && onChange(null);
        }
      }

      ++getResultIndex.current;
      setIsLoading(false);
      clearTimeout(getResultTimeout.current);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    props.onKeyDown && props.onKeyDown(e);

    if (!readOnly) {
      var key = e.key,
          target = e.target;

      switch (key) {
        case 'ArrowUp':
          e.preventDefault();

          if (target.previousElementSibling && target.previousElementSibling.classList && target.previousElementSibling.classList.contains('item')) {
            target.previousElementSibling.focus();
          } else {
            resultTargetRef.current.element.focus();
          }

          break;

        case 'ArrowDown':
          e.preventDefault();

          if (target.nextElementSibling && target.nextElementSibling.classList && target.nextElementSibling.classList.contains('item')) {
            target.nextElementSibling.focus();
          } else {
            var firstItem = resultRef.current.querySelector('.item');
            firstItem && firstItem.focus();
          }

          break;

        case 'Escape':
          resultTargetRef.current.element.focus();
          setShowResult(false);
          setResult(null);
          break;

        default:
      }
    }
  };

  var handleChange = function handleChange(newValue) {
    clearTimeout(getResultTimeout.current);
    setValue(newValue);
    getResultTimeout.current = setTimeout(function () {
      onChange && onChange(newValue);
      var newPage = 0;
      setPage(newPage);
      getResult(newValue, newPage);
    }, 300);
  };

  var handleItemClick = function handleItemClick(item) {
    resultTargetRef.current.element.focus();
    var newSelected = autocompleteConfig.valueTranspile(item);
    onItemSelect && onItemSelect(item);

    if (!autocompleteConfig.keepResultOpen) {
      onChange && onChange(newSelected);
      setSelected(newSelected);
      setValue(newSelected);
      setShowResult(false);
      setResult(null);
    } else {}
  };

  var handleScroll = function handleScroll(newIsScrollEnd) {
    setIsScrollEnd(newIsScrollEnd);
  };

  (0, _react.useEffect)(function () {
    if (!isLoading && isScrollEnd) {
      setIsLoading(true);
      var newPage = page + 1;
      setPage(newPage);
      getResult(value, newPage);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isScrollEnd]);
  return _react.default.createElement(_index.TextField, _extends({}, props, {
    value: value,
    setRef: resultTargetRef,
    autoComplete: false,
    onFocus: handleFocus,
    onBlur: handleBlur,
    inputClassName: "vui-TextField-Autocomplete-Target".concat(index.current),
    onKeyDown: handleKeyDown,
    suffix: isLoading && _react.default.createElement(_index.Button, {
      icon: true
    }, _react.default.createElement(_index.Spinner, null)),
    onChange: handleChange,
    readOnly: readOnly
  }), _react.default.createElement("div", {
    className: "auto-complete"
  }, showResult && _react.default.createElement(_AutocompleteResult.default, {
    target: resultTargetRef,
    setRef: resultRef,
    onScroll: autocompleteConfig.pagination ? handleScroll : undefined
  }, result && _react.default.createElement(_react.default.Fragment, null, result.map(function (item, i) {
    return _react.default.createElement(_AutocompleteResult.default.Item, {
      key: autocompleteConfig.valueTranspile(item).toString() + i,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onClick: function onClick() {
        return handleItemClick(item);
      },
      targetClassName: "vui-TextField-Autocomplete-Target".concat(index.current)
    }, autocompleteConfig.itemTranspile(item));
  }), !result.length && _react.default.createElement("div", {
    className: "empty"
  }, autocompleteConfig.emptyLabel)), isLoading ? _react.default.createElement(_index.ProgressBar, {
    indeterminate: true,
    height: result && result.length ? 4 : 2
  }) : _react.default.createElement("div", {
    style: {
      height: result && result.length ? 4 : 2
    }
  }))));
};

var _default = Autocomplete;
exports.default = _default;