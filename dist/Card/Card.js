import React from 'react';
import { classNames } from '../index';
import './Card.scss';

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rounder = _ref.rounder;
  className = classNames(className, 'vui-Card', rounder ? 'rounder' : '');
  return React.createElement("div", {
    className: className
  }, children);
};

Card.Title = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  className = classNames(className, 'vui-Card-title');
  return React.createElement("div", {
    className: className
  }, children);
};

Card.Content = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  className = classNames(className, 'vui-Card-content');
  return React.createElement("div", {
    className: className
  }, children);
};

Card.Actions = function (_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      alignRight = _ref4.alignRight;
  className = classNames(className, 'vui-Card-actions', alignRight ? 'align-right' : '');
  return React.createElement("div", {
    className: className
  }, children);
};

export default Card;