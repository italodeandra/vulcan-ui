import React from "react";
import Search from '../Search/Search';
import { Checkbox, List } from '../../index';

var Item = function Item(_ref) {
  var before = _ref.before,
      prev = _ref.prev,
      items = _ref.items,
      _onDoubleClick = _ref.onDoubleClick,
      _onClick = _ref.onClick,
      onSearch = _ref.onSearch;
  return React.createElement("div", {
    className: "vui-ListBox-items"
  }, React.createElement(Search, {
    onChange: onSearch,
    name: before,
    placeholder: "Pesquisar..."
  }), React.createElement(List, {
    className: "vui-ListBox-List"
  }, items && items.map(function (item, index) {
    return React.createElement(List.ListItem, {
      key: item.id,
      onDoubleClick: function onDoubleClick() {
        return _onDoubleClick(item, before, prev);
      },
      onClick: function onClick(e) {
        return _onClick(e, before, item, index);
      },
      selectable: true,
      active: item.checked ? true : false
    }, React.createElement(List.Content, null, React.createElement(List.Title, null, item.label)), React.createElement(List.Action, {
      right: true
    }, React.createElement(Checkbox, {
      checked: item.checked ? true : false,
      id: item.id,
      name: item.id
    })));
  })));
};

export default Item;