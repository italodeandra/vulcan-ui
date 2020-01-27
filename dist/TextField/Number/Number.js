"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("../TextField"));

var _NumberFormatter = _interopRequireDefault(require("./NumberFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Number = function Number(_ref) {
  var maskConfig = _ref.maskConfig,
      props = _objectWithoutProperties(_ref, ["maskConfig"]);

  maskConfig = maskConfig || {};

  if (maskConfig.decimal && typeof maskConfig.decimal !== 'number' || !maskConfig.decimal && maskConfig.money) {
    maskConfig.decimal = 2;
  }

  var onFocus = function onFocus(e) {
    props.onFocus && props.onFocus(e);
  };

  return _react.default.createElement(_TextField.default, _extends({}, props, {
    onFocus: onFocus,
    format: (0, _NumberFormatter.default)(maskConfig)
  }));
};

var _default = Number;
exports.default = _default;