import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
//TODO: Remove the manual animation from the scrim and use the *future* Animation component
//TODO: Fix mobile version on collapsable
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { classNames, useMobile } from '../index';
import './NavigationDrawer.scss';

var NavigationDrawer = function NavigationDrawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      open = _ref.open,
      containerRef = _ref.containerRef,
      collapsable = _ref.collapsable,
      onScrimClick = _ref.onScrimClick,
      appBarRef = _ref.appBarRef;
  var scrimRef = useRef(null);
  var navigationDrawerRef = useRef(null);

  var _useMobile = useMobile(),
      _useMobile2 = _slicedToArray(_useMobile, 1),
      isMobile = _useMobile2[0];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAnimationReady = _useState2[0],
      setIsAnimationReady = _useState2[1];

  className = classNames(className, 'vui-NavigationDrawer', open && 'open', collapsable && 'collapsable', isMobile && 'mobile');
  useEffect(function () {
    if (isMobile) {
      setTimeout(function () {
        setIsAnimationReady(true);
      }, 280);
    }
  }, [isMobile]);
  useEffect(function () {
    if (!isMobile) {
      var containerRefEl = containerRef && containerRef.current;

      if (containerRefEl) {
        containerRefEl.style.transition = 'none';
        containerRefEl.style.animation = 'none';
        containerRefEl.classList.add('vui-NavigationDrawer-margin-left');
      }

      setTimeout(function () {
        if (containerRefEl) {
          containerRefEl.style.transition = '';
        }
      }, 140);
      return function () {
        if (containerRefEl) {
          containerRefEl.classList.remove('vui-NavigationDrawer-margin-left');
        }
      };
    }
  }, [containerRef, isMobile]);
  useEffect(function () {
    if (!isMobile) {
      var containerRefEl = containerRef && containerRef.current;

      if (containerRefEl) {
        if (collapsable) {
          containerRefEl.classList.add('vui-NavigationDrawer-collapsable');
        }

        containerRefEl.classList[open ? 'add' : 'remove']('vui-NavigationDrawer-open');
      }

      return function () {
        containerRefEl.classList.remove('vui-NavigationDrawer-open');
        containerRefEl.classList.remove('vui-NavigationDrawer-collapsable');
      };
    }

    if (open) {
      var autofocusEl = navigationDrawerRef.current.querySelector('[auto-focus]');
      autofocusEl && autofocusEl.focus();
    } else if (appBarRef) {
      var _autofocusEl = appBarRef.current.querySelector('[auto-focus]');

      _autofocusEl && _autofocusEl.focus();
    }
  }, [containerRef, open, collapsable, isMobile, appBarRef]);
  return React.createElement(React.Fragment, null, isMobile && React.createElement("div", {
    ref: scrimRef,
    className: classNames('vui-NavigationDrawer-scrim', open && 'open', isAnimationReady && 'animation-ready'),
    onClick: onScrimClick
  }), React.createElement("div", {
    className: className,
    ref: navigationDrawerRef
  }, children));
};

export default NavigationDrawer;

NavigationDrawer.Item = function (_ref2) {
  var children = _ref2.children,
      to = _ref2.to,
      exact = _ref2.exact,
      title = _ref2.title,
      onClick = _ref2.onClick;
  return React.createElement(NavLink, {
    className: "vui-NavigationDrawer-item",
    activeClassName: "active",
    exact: exact,
    to: to,
    title: title ? title : undefined,
    onClick: onClick
  }, children);
};

NavigationDrawer.Header = function (_ref3) {
  var children = _ref3.children;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useMobile3 = useMobile(),
      _useMobile4 = _slicedToArray(_useMobile3, 1),
      isMobile = _useMobile4[0];

  return isMobile ? React.createElement("div", {
    className: "vui-NavigationDrawer-header"
  }, children) : null;
};

NavigationDrawer.Divider = function () {
  return React.createElement("div", {
    className: "vui-NavigationDrawer-divider"
  });
};

NavigationDrawer.Subtitle = function (_ref4) {
  var children = _ref4.children;
  return React.createElement("div", {
    className: "vui-NavigationDrawer-subtitle"
  }, children);
};