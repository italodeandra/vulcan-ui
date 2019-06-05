import React from 'react';
import './Icon.scss';
import account from './icons/account';
import accountGroup from './icons/accountGroup';
import checkCircleOutline from './icons/checkCircleOutline';
import fileChart from './icons/fileChart';
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
  fileChart: fileChart,
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
  var name = _ref.name;
  return React.createElement("div", {
    className: "vui-Icon"
  }, icons[name]());
};

export default Icon;