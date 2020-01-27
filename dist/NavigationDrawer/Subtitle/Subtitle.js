"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

require("./Subtitle.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subtitle = function Subtitle(_ref) {
  var children = _ref.children,
      collapse = _ref.collapse,
      onCollapseChange = _ref.onCollapseChange;

  var handleCollapseClick = function handleCollapseClick() {
    onCollapseChange && onCollapseChange(!collapse);
  };

  return _react.default.createElement("div", {
    className: (0, _index.classNames)('vui-NavigationDrawer-subtitle', onCollapseChange && 'pointer'),
    onClick: handleCollapseClick
  }, children, onCollapseChange && _react.default.createElement(_index.Icon, {
    className: (0, _index.classNames)('chevron', collapse && 'collapse'),
    name: "chevronUp"
  }));
};

var _default = Subtitle;
exports.default = _default;