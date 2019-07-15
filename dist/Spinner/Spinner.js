import React from 'react';
import classNames from '../Utils/classNames';
import './Spinner.scss';

var Spinner = function Spinner(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: classNames('vui-Spinner', className)
  }, React.createElement("svg", {
    viewBox: "0 0 44 44"
  }, React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "20",
    fill: "none",
    strokeWidth: "4"
  })));
};

export default Spinner;