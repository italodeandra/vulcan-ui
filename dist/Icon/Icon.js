import React from 'react';
import {classNames} from '../index';
import './Icon.scss';
import account from './icons/account';
import accountGroup from './icons/accountGroup';
import arrowDown from './icons/arrowDown';
import autoFix from './icons/autoFix';
import calendar from './icons/calendar';
import calendarCheck from './icons/calendarCheck';
import checkCircleOutline from './icons/checkCircleOutline';
import chevronUp from './icons/chevronUp';
import clipboardCheckOutline from './icons/clipboardCheckOutline';
import close from './icons/close';
import compass from './icons/compass';
import eye from './icons/eye';
import eyeOff from './icons/eyeOff';
import fileChart from './icons/fileChart';
import fileTable from './icons/fileTable';
import fileUpload from './icons/fileUpload';
import filterVariant from './icons/filterVariant';
import fire from './icons/fire';
import formatListCheckbox from './icons/formatListCheckbox';
import home from './icons/home';
import libraryShelves from './icons/libraryShelves';
import link from './icons/link';
import menu from './icons/menu';
import openInNew from './icons/openInNew';
import plus from './icons/plus';
import printer from './icons/printer';
import progressCheck from './icons/progressCheck';
import rss from './icons/rss';
import sitemap from './icons/sitemap';
import speedometer from './icons/speedometer';
import store from './icons/store';
import truckCheck from './icons/truckCheck';
import upload from './icons/upload';
import arrowRight from "./icons/arrowRight";

var icons = {
  account: account,
  accountGroup: accountGroup,
  arrowDown: arrowDown,
    arrowRight: arrowRight,
  autoFix: autoFix,
  calendar: calendar,
    calendarCheck: calendarCheck,
  checkCircleOutline: checkCircleOutline,
  chevronUp: chevronUp,
    clipboardCheckOutline: clipboardCheckOutline,
  close: close,
  compass: compass,
  eye: eye,
  eyeOff: eyeOff,
  fileChart: fileChart,
    fileTable: fileTable,
    fileUpload: fileUpload,
  filterVariant: filterVariant,
  fire: fire,
  formatListCheckbox: formatListCheckbox,
  home: home,
  libraryShelves: libraryShelves,
  link: link,
  menu: menu,
  openInNew: openInNew,
  plus: plus,
    printer: printer,
  progressCheck: progressCheck,
  rss: rss,
  sitemap: sitemap,
    speedometer: speedometer,
    store: store,
    truckCheck: truckCheck,
    upload: upload
};

var Icon = function Icon(_ref) {
  var className = _ref.className,
      name = _ref.name,
      onClick = _ref.onClick;
    if (!icons[name] || typeof icons[name] !== 'function') throw new Error("Icon ".concat(name, " not installed"));
  return React.createElement("div", {
    className: classNames(className, 'vui-Icon'),
    onClick: onClick
  }, icons[name]());
};

export default Icon;