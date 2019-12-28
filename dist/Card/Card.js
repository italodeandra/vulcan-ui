"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

require("./Card.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rounder = _ref.rounder,
      onClick = _ref.onClick,
      setRef = _ref.setRef;
  className = (0, _index.classNames)(className, 'vui-Card', rounder ? 'rounder' : '');
  return _react.default.createElement("div", {
    className: className,
    onClick: onClick,
    ref: setRef
  }, children);
};

Card.Title = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  className = (0, _index.classNames)(className, 'vui-Card-title');
  return _react.default.createElement("div", {
    className: className
  }, children);
};

Card.Content = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  className = (0, _index.classNames)(className, 'vui-Card-content');
  return _react.default.createElement("div", {
    className: className
  }, children);
};

Card.Actions = function (_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      alignRight = _ref4.alignRight;
  className = (0, _index.classNames)(className, 'vui-Card-actions', alignRight ? 'align-right' : '');
  return _react.default.createElement("div", {
    className: className
  }, children);
};

var _default = Card;
exports.default = _default;