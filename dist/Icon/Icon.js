import React from 'react';
import { classNames } from '../index';
import './Icon.scss';
import account from './icons/account';
import accountGroup from './icons/accountGroup';
import checkCircleOutline from './icons/checkCircleOutline';
import close from './icons/close';
import fileChart from './icons/fileChart';
import filterVariant from './icons/filterVariant';
import formatListCheckbox from './icons/formatListCheckbox';
import home from './icons/home';
import link from './icons/link';
import menu from './icons/menu';
import openInNew from './icons/openInNew';
import plus from './icons/plus';
import progressCheck from './icons/progressCheck';
import sitemap from './icons/sitemap';
import speedometer from './icons/speedometer';
var icons = {
  account: account,
  accountGroup: accountGroup,
  checkCircleOutline: checkCircleOutline,
  close: close,
  fileChart: fileChart,
  filterVariant: filterVariant,
  formatListCheckbox: formatListCheckbox,
  home: home,
  link: link,
  menu: menu,
  openInNew: openInNew,
  plus: plus,
  progressCheck: progressCheck,
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