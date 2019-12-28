"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(_ref) {
  var nonSelected = _ref.nonSelected,
      selected = _ref.selected,
      onChange = _ref.onChange,
      onTransferAll = _ref.onTransferAll;

  var handleTransferAllRight = function handleTransferAllRight() {
    onTransferAll && onTransferAll(nonSelected, selected);
  };

  var handleTransferAllLeft = function handleTransferAllLeft() {
    onTransferAll && onTransferAll(selected, nonSelected);
  };

  var handleChangeRight = function handleChangeRight() {
    onChange && onChange(nonSelected, selected);
  };

  var handleChangeLeft = function handleChangeLeft() {
    onChange && onChange(selected, nonSelected);
  };

  return _react.default.createElement("div", {
    className: "vui-ListBox-controls"
  }, _react.default.createElement(_index.Button, {
    className: "vui-ListBox-controls-button",
    icon: true,
    onClick: handleTransferAllRight
  }, _react.default.createElement(_index.Icon, {
    name: "transferRight"
  })), _react.default.createElement(_index.Button, {
    className: "vui-ListBox-controls-button",
    icon: true,
    onClick: handleChangeRight
  }, _react.default.createElement(_index.Icon, {
    name: "arrowRight"
  })), _react.default.createElement(_index.Button, {
    className: "vui-ListBox-controls-button",
    icon: true,
    onClick: handleChangeLeft
  }, _react.default.createElement(_index.Icon, {
    name: "arrowLeft"
  })), _react.default.createElement(_index.Button, {
    className: "vui-ListBox-controls-button",
    icon: true,
    onClick: handleTransferAllLeft
  }, _react.default.createElement(_index.Icon, {
    name: "transferLeft"
  })));
};

var _default = Control;
exports.default = _default;