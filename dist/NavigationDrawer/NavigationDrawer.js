import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
//TODO: Remove the manual animation from the scrim and use the *future* Animation component
//TODO: Fix mobile version on collapsable
import React, { useEffect, useRef, useState } from 'react';
import { classNames, useMobile } from '../index';
import Divider from './Divider/Divider';
import Header from './Header/Header';
import Item from './Item/Item';
import ItemGroup from './ItemGroup/ItemGroup';
import './NavigationDrawer.scss';
import Subtitle from './Subtitle/Subtitle';

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

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      top = _useState4[0],
      setTop = _useState4[1];

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
  useEffect(function () {
    setTop(appBarRef.current.getBoundingClientRect().height);
  }, []);
  return React.createElement(React.Fragment, null, isMobile && React.createElement("div", {
    ref: scrimRef,
    className: classNames('vui-NavigationDrawer-scrim', open && 'open', isAnimationReady && 'animation-ready'),
    onClick: onScrimClick
  }), React.createElement("div", {
    className: className,
    ref: navigationDrawerRef,
    style: {
      top: top
    }
  }, children));
};

export default NavigationDrawer;
NavigationDrawer.Item = Item;
NavigationDrawer.Header = Header;
NavigationDrawer.Divider = Divider;
NavigationDrawer.Subtitle = Subtitle;
NavigationDrawer.ItemGroup = ItemGroup;