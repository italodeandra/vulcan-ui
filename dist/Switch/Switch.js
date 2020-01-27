"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Switch.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange;
  return _react.default.createElement("div", {
    className: "vui-Switch"
  }, _react.default.createElement("input", {
    id: id,
    type: "checkbox",
    onClick: onChange
  }), _react.default.createElement("label", {
    htmlFor: id
  }, label));
};

var _default = Switch;
exports.default = _default;