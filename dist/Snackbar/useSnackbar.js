import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import createSharedStateHook from '../Utils/createSharedStateHook';
var initialState = [];
var useSnackbarsSharedState = createSharedStateHook(initialState);
var snackbarIndex = 0;

var useSnackbar = function useSnackbar() {
  var _useSnackbarsSharedSt = useSnackbarsSharedState(),
      _useSnackbarsSharedSt2 = _slicedToArray(_useSnackbarsSharedSt, 2),
      snackbars = _useSnackbarsSharedSt2[0],
      setSnackbars = _useSnackbarsSharedSt2[1];

  var closeSnackbar = function closeSnackbar(snackbar) {
    setSnackbars(function (ss) {
      var newSs = _toConsumableArray(ss);

      newSs.splice(newSs.findIndex(function (s) {
        return s.id === snackbar.id;
      }), 1);
      return newSs;
    });
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

export default useSnackbar;