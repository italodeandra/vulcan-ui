import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
//TODO: Remove the manual animation from the scrim and use the *future* Animation component
import React, {useEffect, useRef, useState} from 'react';
import {classNames, useMobile} from '../index';
import disableBodyScroll from '../Utils/disableBodyScroll';
import Divider from './Divider/Divider';
import Header from './Header/Header';
import Item from './Item/Item';
import ItemGroup from './ItemGroup/ItemGroup';
import './NavigationDrawer.scss';
import Subtitle from './Subtitle/Subtitle';
import useTouchMove from './useTouchMove';

var NavigationDrawer = function NavigationDrawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      open = _ref.open,
      containerRef = _ref.containerRef,
      collapsable = _ref.collapsable,
      appBarRef = _ref.appBarRef,
      onOpenChange = _ref.onOpenChange;
  var scrimRef = useRef(null);
  var navigationDrawerRef = useRef(null);

  var _useMobile = useMobile(),
      _useMobile2 = _slicedToArray(_useMobile, 1),
      isMobile = _useMobile2[0];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 1),
      isAnimationReady = _useState2[0];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      top = _useState4[0],
      setTop = _useState4[1];

  var _useState5 = useState(open),
      _useState6 = _slicedToArray(_useState5, 2),
      innerOpen = _useState6[0],
      setInnerOpen = _useState6[1];

  useTouchMove(navigationDrawerRef, innerOpen, setInnerOpen);
  className = classNames(className, 'vui-NavigationDrawer', 'can-scroll', innerOpen && 'open', collapsable && 'collapsable', isMobile && 'mobile');
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
          containerRefEl.style.animation = '';
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
    var containerRefEl = containerRef && containerRef.current;

    if (containerRefEl) {
      containerRefEl.classList.add('animation-ready');

      if (!isMobile) {
        if (collapsable) {
          containerRefEl.classList.add('vui-NavigationDrawer-collapsable');
        }

        containerRefEl.classList[innerOpen ? 'add' : 'remove']('vui-NavigationDrawer-open');
      }
    }

    if (innerOpen) {
      var autofocusEl = navigationDrawerRef.current.querySelector('[auto-focus]');
      autofocusEl && autofocusEl.focus();
    } else if (appBarRef) {
      var _autofocusEl = appBarRef.current.querySelector('[auto-focus]');

      _autofocusEl && _autofocusEl.focus();
    }

    return function () {
      containerRefEl.classList.remove('vui-NavigationDrawer-open');
      containerRefEl.classList.remove('vui-NavigationDrawer-collapsable');
    };
  }, [containerRef, innerOpen, collapsable, isMobile, appBarRef]);
  useEffect(function () {
    setTop(appBarRef.current.getBoundingClientRect().height);
  }, [appBarRef]);
  useEffect(function () {
    onOpenChange && onOpenChange(innerOpen);

    if (innerOpen) {
      document.body.style.overflow = 'hidden';
      disableBodyScroll(true, '.can-scroll');
    } else {
      document.body.style.overflow = '';
      disableBodyScroll(false, '.can-scroll');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [innerOpen]);
  useEffect(function () {
    setInnerOpen(open); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return React.createElement(React.Fragment, null, isMobile && React.createElement("div", {
    ref: scrimRef,
    className: classNames('vui-NavigationDrawer-scrim', 'can-scroll', innerOpen && 'open', isAnimationReady && 'animation-ready'),
    onClick: function onClick() {
      return setInnerOpen(false);
    }
  }), React.createElement("div", {
    className: className,
    ref: navigationDrawerRef,
    style: {
      top: top
    }
  }, children));
};

NavigationDrawer.Item = Item;
NavigationDrawer.Header = Header;
NavigationDrawer.Divider = Divider;
NavigationDrawer.Subtitle = Subtitle;
NavigationDrawer.ItemGroup = ItemGroup;
export default NavigationDrawer;