"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

var _Divider = _interopRequireDefault(require("../NavigationDrawer/Divider/Divider"));

var _Action = _interopRequireDefault(require("./Action/Action"));

var _Avatar = _interopRequireDefault(require("./Avatar/Avatar"));

var _Content = _interopRequireDefault(require("./Content/Content"));

var _Icon = _interopRequireDefault(require("./Icon/Icon"));

require("./List.scss");

var _ListItem = _interopRequireDefault(require("./ListItem/ListItem"));

var _Overline = _interopRequireDefault(require("./Overline/Overline"));

var _Subtitle = _interopRequireDefault(require("./Subtitle/Subtitle"));

var _Title = _interopRequireDefault(require("./Title/Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var List = function List(_ref) {
  var children = _ref.children,
      setRef = _ref.setRef,
      props = _objectWithoutProperties(_ref, ["children", "setRef"]);

  return _react.default.createElement("div", _extends({
    className: (0, _index.classNames)('vui-List', props.className)
  }, props, {
    ref: setRef
  }), children);
};

List.Avatar = _Avatar.default;
List.Content = _Content.default;
List.Action = _Action.default;
List.Divider = _Divider.default;
List.Icon = _Icon.default;
List.ListItem = _ListItem.default;
List.Overline = _Overline.default;
List.Subtitle = _Subtitle.default;
List.Title = _Title.default;
var _default = List;
exports.default = _default;