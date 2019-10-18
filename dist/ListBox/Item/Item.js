import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Checkbox, List } from '../../index';
import Search from '../Search/Search';

var Item = function Item(_ref) {
  var before = _ref.before,
      prev = _ref.prev,
      items = _ref.items,
      _onDoubleClick = _ref.onDoubleClick,
      _onClick = _ref.onClick,
      onSearch = _ref.onSearch;

  var _useState = useState({
    from: 0,
    to: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      render = _useState2[0],
      setRender = _useState2[1];

  var scrollableRef = useRef();
  useEffect(function () {
    var target = scrollableRef.current;
    var from = Math.floor(target.scrollTop / 56) - 1;
    var to = Math.ceil(target.getBoundingClientRect().height / 56 + target.scrollTop / 56 + 2);

    if (items) {
      to = to > items.length ? items.length : to;
    }

    setRender({
      from: from,
      to: to
    });
  }, [before, prev, items]);

  function handleScroll(e) {
    var target = e.target;
    var from = Math.floor(target.scrollTop / 56);
    var to = Math.floor(target.getBoundingClientRect().height / 56 + target.scrollTop / 56);

    if (items) {
      to = to > items.length ? items.length : to;
    }

    setRender({
      from: from,
      to: to
    });
  }

  return React.createElement("div", {
    className: "vui-ListBox-items"
  }, React.createElement(Search, {
    onChange: onSearch,
    name: before,
    placeholder: "Pesquisar..."
  }), React.createElement(List, {
    className: "vui-ListBox-List",
    onScroll: handleScroll,
    setRef: scrollableRef
  }, items && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      height: 56 * render.from
    }
  }), items.sort(function (a, b) {
    return a.id > b.id ? 1 : -1;
  }).map(function (item, index) {
    return React.createElement(List.ListItem, {
      key: item.id,
      onDoubleClick: function onDoubleClick() {
        return _onDoubleClick(item, before, prev);
      },
      onClick: function onClick(e) {
        return _onClick(e, before, item, index);
      },
      selectable: true,
      active: !!item.checked
    }, React.createElement(List.Content, null, React.createElement(List.Title, null, item.label)), React.createElement(List.Action, {
      right: true
    }, React.createElement(Checkbox, {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      checked: !!item.checked,
      id: item.id,
      name: item.id
    })));
  }).filter(function (_, i) {
    return i >= render.from && i <= render.to;
  }), React.createElement("div", {
    style: {
      height: 56 * (items.length - render.to)
    }
  }))));
};

export default Item;