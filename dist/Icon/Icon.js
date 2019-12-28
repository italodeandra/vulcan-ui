"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

require("./Icon.scss");

var _account = _interopRequireDefault(require("./icons/account"));

var _accountGroup = _interopRequireDefault(require("./icons/accountGroup"));

var _alarm = _interopRequireDefault(require("./icons/alarm"));

var _arrowDown = _interopRequireDefault(require("./icons/arrowDown"));

var _arrowLeft = _interopRequireDefault(require("./icons/arrowLeft"));

var _arrowRight = _interopRequireDefault(require("./icons/arrowRight"));

var _autoFix = _interopRequireDefault(require("./icons/autoFix"));

var _calendar = _interopRequireDefault(require("./icons/calendar"));

var _calendarCheck = _interopRequireDefault(require("./icons/calendarCheck"));

var _check = _interopRequireDefault(require("./icons/check"));

var _checkCircleOutline = _interopRequireDefault(require("./icons/checkCircleOutline"));

var _chevronLeft = _interopRequireDefault(require("./icons/chevronLeft"));

var _chevronRight = _interopRequireDefault(require("./icons/chevronRight"));

var _chevronUp = _interopRequireDefault(require("./icons/chevronUp"));

var _clipboardAlertOutline = _interopRequireDefault(require("./icons/clipboardAlertOutline"));

var _clipboardCheckOutline = _interopRequireDefault(require("./icons/clipboardCheckOutline"));

var _clipboardOutline = _interopRequireDefault(require("./icons/clipboardOutline"));

var _close = _interopRequireDefault(require("./icons/close"));

var _compass = _interopRequireDefault(require("./icons/compass"));

var _contentSave = _interopRequireDefault(require("./icons/contentSave"));

var _deletee = _interopRequireDefault(require("./icons/deletee"));

var _eye = _interopRequireDefault(require("./icons/eye"));

var _eyeOff = _interopRequireDefault(require("./icons/eyeOff"));

var _fileChart = _interopRequireDefault(require("./icons/fileChart"));

var _fileTable = _interopRequireDefault(require("./icons/fileTable"));

var _fileUpload = _interopRequireDefault(require("./icons/fileUpload"));

var _filterVariant = _interopRequireDefault(require("./icons/filterVariant"));

var _fire = _interopRequireDefault(require("./icons/fire"));

var _formatListCheckbox = _interopRequireDefault(require("./icons/formatListCheckbox"));

var _home = _interopRequireDefault(require("./icons/home"));

var _libraryShelves = _interopRequireDefault(require("./icons/libraryShelves"));

var _link = _interopRequireDefault(require("./icons/link"));

var _menu = _interopRequireDefault(require("./icons/menu"));

var _minusBoxOutline = _interopRequireDefault(require("./icons/minusBoxOutline"));

var _openInNew = _interopRequireDefault(require("./icons/openInNew"));

var _pencil = _interopRequireDefault(require("./icons/pencil"));

var _plus = _interopRequireDefault(require("./icons/plus"));

var _plusBoxOutline = _interopRequireDefault(require("./icons/plusBoxOutline"));

var _printer = _interopRequireDefault(require("./icons/printer"));

var _progressCheck = _interopRequireDefault(require("./icons/progressCheck"));

var _refresh = _interopRequireDefault(require("./icons/refresh"));

var _rss = _interopRequireDefault(require("./icons/rss"));

var _search = _interopRequireDefault(require("./icons/search"));

var _sitemap = _interopRequireDefault(require("./icons/sitemap"));

var _speedometer = _interopRequireDefault(require("./icons/speedometer"));

var _store = _interopRequireDefault(require("./icons/store"));

var _timer = _interopRequireDefault(require("./icons/timer"));

var _transferLeft = _interopRequireDefault(require("./icons/transferLeft"));

var _transferRight = _interopRequireDefault(require("./icons/transferRight"));

var _truckCheck = _interopRequireDefault(require("./icons/truckCheck"));

var _upload = _interopRequireDefault(require("./icons/upload"));

var _viewDashboard = _interopRequireDefault(require("./icons/viewDashboard"));

var _viewList = _interopRequireDefault(require("./icons/viewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  account: _account.default,
  accountGroup: _accountGroup.default,
  alarm: _alarm.default,
  arrowDown: _arrowDown.default,
  arrowLeft: _arrowLeft.default,
  arrowRight: _arrowRight.default,
  autoFix: _autoFix.default,
  calendar: _calendar.default,
  calendarCheck: _calendarCheck.default,
  check: _check.default,
  checkCircleOutline: _checkCircleOutline.default,
  chevronLeft: _chevronLeft.default,
  chevronRight: _chevronRight.default,
  chevronUp: _chevronUp.default,
  clipboardAlertOutline: _clipboardAlertOutline.default,
  clipboardCheckOutline: _clipboardCheckOutline.default,
  clipboardOutline: _clipboardOutline.default,
  close: _close.default,
  compass: _compass.default,
  contentSave: _contentSave.default,
  'delete': _deletee.default,
  eye: _eye.default,
  eyeOff: _eyeOff.default,
  fileChart: _fileChart.default,
  fileTable: _fileTable.default,
  fileUpload: _fileUpload.default,
  filterVariant: _filterVariant.default,
  fire: _fire.default,
  formatListCheckbox: _formatListCheckbox.default,
  home: _home.default,
  libraryShelves: _libraryShelves.default,
  link: _link.default,
  menu: _menu.default,
  minusBoxOutline: _minusBoxOutline.default,
  openInNew: _openInNew.default,
  pencil: _pencil.default,
  plus: _plus.default,
  plusBoxOutline: _plusBoxOutline.default,
  printer: _printer.default,
  progressCheck: _progressCheck.default,
  refresh: _refresh.default,
  rss: _rss.default,
  search: _search.default,
  sitemap: _sitemap.default,
  speedometer: _speedometer.default,
  store: _store.default,
  timer: _timer.default,
  transferLeft: _transferLeft.default,
  transferRight: _transferRight.default,
  truckCheck: _truckCheck.default,
  upload: _upload.default,
  viewDashboard: _viewDashboard.default,
  viewList: _viewList.default
};

var Icon = function Icon(_ref) {
  var className = _ref.className,
      name = _ref.name,
      onClick = _ref.onClick;
  if (!icons[name] || typeof icons[name] !== 'function') throw new Error("Icon ".concat(name, " not installed"));
  return _react.default.createElement("div", {
    className: (0, _index.classNames)(className, 'vui-Icon'),
    onClick: onClick
  }, icons[name]());
};

var _default = Icon;
exports.default = _default;