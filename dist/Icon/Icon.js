import React from 'react';
import { classNames } from '../index';
import './Icon.scss';
import account from './icons/account';
import accountGroup from './icons/accountGroup';
import arrowDown from './icons/arrowDown';
import autoFix from './icons/autoFix';
import calendar from './icons/calendar';
import checkCircleOutline from './icons/checkCircleOutline';
import chevronUp from './icons/chevronUp';
import close from './icons/close';
import compass from './icons/compass';
import fileChart from './icons/fileChart';
import filterVariant from './icons/filterVariant';
import fire from './icons/fire';
import formatListCheckbox from './icons/formatListCheckbox';
import home from './icons/home';
import libraryShelves from './icons/libraryShelves';
import link from './icons/link';
import menu from './icons/menu';
import openInNew from './icons/openInNew';
import plus from './icons/plus';
import progressCheck from './icons/progressCheck';
import rss from './icons/rss';
import sitemap from './icons/sitemap';
import speedometer from './icons/speedometer';
var icons = {
  account: account,
  accountGroup: accountGroup,
  arrowDown: arrowDown,
  autoFix: autoFix,
  calendar: calendar,
  checkCircleOutline: checkCircleOutline,
  chevronUp: chevronUp,
  close: close,
  compass: compass,
  fileChart: fileChart,
  filterVariant: filterVariant,
  fire: fire,
  formatListCheckbox: formatListCheckbox,
  home: home,
  libraryShelves: libraryShelves,
  link: link,
  menu: menu,
  openInNew: openInNew,
  plus: plus,
  progressCheck: progressCheck,
  rss: rss,
  sitemap: sitemap,
  speedometer: speedometer
};

var Icon = function Icon(_ref) {
  var className = _ref.className,
      name = _ref.name,
      onClick = _ref.onClick;
  return React.createElement("div", {
    className: classNames(className, 'vui-Icon'),
    onClick: onClick
  }, icons[name]());
};

export default Icon;