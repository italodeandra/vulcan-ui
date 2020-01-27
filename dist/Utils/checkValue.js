"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkValue;

function checkValue(value) {
  return typeof value !== 'undefined' && value !== null && value !== '';
}