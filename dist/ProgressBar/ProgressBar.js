import React from 'react';
import { classNames } from '../index';
import './ProgressBar.scss';

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      indeterminate = _ref.indeterminate,
      height = _ref.height,
      progression = _ref.progression;
  return React.createElement("div", {
    className: classNames(className, 'vui-ProgressBar'),
    style: {
      height: height
    }
  }, React.createElement("div", {
    className: indeterminate ? 'indeterminate' : 'determinate',
    style: {
      width: progression ? progression + '%' : undefined
    }
  }));
};

export default ProgressBar;