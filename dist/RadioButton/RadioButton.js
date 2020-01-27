"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./RadioButton.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      onChange = _ref.onChange;
  return _react.default.createElement("div", {
    className: "vui-RadioButton"
  }, _react.default.createElement("input", {
    id: id,
    name: name,
    type: "radio",
    onChange: onChange
  }), _react.default.createElement("label", {
    htmlFor: id
  }, label));
};

var _default = RadioButton;
exports.default = _default;