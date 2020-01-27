"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _index = require("../index");

var _createSharedStateHook = _interopRequireDefault(require("../Utils/createSharedStateHook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var localStorageSharedState = {};

var useLocalStorage = function useLocalStorage(name, initialValue) {
  if (!localStorage.getItem(name) && initialValue) {
    localStorage.setItem(name, JSON.stringify(initialValue));
  }

  if (!localStorageSharedState[name]) {
    localStorageSharedState[name] = (0, _createSharedStateHook.default)(JSON.parse(localStorage.getItem(name)));
  }

  var _localStorageSharedSt = localStorageSharedState[name](),
      _localStorageSharedSt2 = _slicedToArray(_localStorageSharedSt, 2),
      state = _localStorageSharedSt2[0],
      setState = _localStorageSharedSt2[1];

  (0, _react.useEffect)(function () {
    setState(JSON.parse(localStorage.getItem(name))); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _index.useDeepCompareEffect)(function () {
    localStorage.setItem(name, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

var _default = useLocalStorage;
exports.default = _default;