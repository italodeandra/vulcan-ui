"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSharedStateHook = _interopRequireDefault(require("../Utils/createSharedStateHook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = [];
var useSnackbarsSharedState = (0, _createSharedStateHook.default)(initialState);
var snackbarIndex = 0;

var useSnackbar = function useSnackbar() {
  var _useSnackbarsSharedSt = useSnackbarsSharedState(),
      _useSnackbarsSharedSt2 = _slicedToArray(_useSnackbarsSharedSt, 3),
      snackbars = _useSnackbarsSharedSt2[0],
      setSnackbars = _useSnackbarsSharedSt2[1],
      snackbarRef = _useSnackbarsSharedSt2[2];

  var closeSnackbar = function closeSnackbar(snackbar) {
    var newSs = _toConsumableArray(snackbarRef.value);

    newSs.splice(newSs.findIndex(function (s) {
      return s.id === snackbar.id;
    }), 1);
    setSnackbars(newSs);
  };

  var showSnackbar = function showSnackbar(message, delay, action) {
    var newSnackbars = _toConsumableArray(snackbars);

    var newSnackbar = {
      id: ++snackbarIndex,
      message: message,
      action: action
    };

    newSnackbar.close = function () {
      return closeSnackbar(newSnackbar);
    };

    newSnackbars.push(newSnackbar);
    setSnackbars(newSnackbars);

    if (delay !== Infinity) {
      setTimeout(function () {
        closeSnackbar(newSnackbar);
      }, delay || 5000);
    }

    return newSnackbar;
  };

  return [showSnackbar, snackbars];
};

var _default = useSnackbar;
exports.default = _default;