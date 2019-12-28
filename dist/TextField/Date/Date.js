"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _TextField = _interopRequireDefault(require("../TextField"));

require("react-datepicker/dist/react-datepicker.css");

require("./Date.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Date = function Date(_ref) {
  var setRef = _ref.setRef,
      options = _ref.options,
      value = _ref.value,
      readOnly = _ref.readOnly,
      props = _objectWithoutProperties(_ref, ["setRef", "options", "value", "readOnly"]);

  return _react.default.createElement(_TextField.default, _extends({}, props, {
    value: value,
    readOnly: readOnly,
    inputElement: function inputElement(props) {
      return _react.default.createElement(_reactDatepicker.default, _extends({}, props, {
        selected: props.value
      }));
    }
  }));
};

var _default = Date;
exports.default = _default;