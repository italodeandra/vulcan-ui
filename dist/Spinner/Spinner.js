import React from 'react';
import './Spinner.scss';

var Spinner = function Spinner() {
  return React.createElement("div", {
    className: "vui-Spinner"
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