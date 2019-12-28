"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

require("./ProgressBar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      indeterminate = _ref.indeterminate,
      height = _ref.height,
      progression = _ref.progression;
  return _react.default.createElement("div", {
    className: (0, _index.classNames)(className, 'vui-ProgressBar'),
    style: {
      height: height
    }
  }, _react.default.createElement("div", {
    className: indeterminate ? 'indeterminate' : 'determinate',
    style: {
      width: progression ? progression + '%' : undefined
    }
  }));
};

var _default = ProgressBar;
exports.default = _default;