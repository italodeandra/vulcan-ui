import React from "react";
import ListItem from "./ListItem/ListItem";
import Avatar from "./Avatar/Avatar";
import Content from "./Content/Content";
import Divider from "../NavigationDrawer/Divider/Divider";
import Overline from "./Overline/Overline";
import Title from "./Title/Title";
import Action from "./Action/Action";
import Icon from "./Icon/Icon";
import Subtitle from "./Subtitle/Subtitle";
import "./List.scss";

var List = function List(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "vui-List"
  }, children);
};

List.Avatar = Avatar;
List.Content = Content;
List.Action = Action;
List.Divider = Divider;
List.Icon = Icon;
List.ListItem = ListItem;
List.Overline = Overline;
List.Subtitle = Subtitle;
List.Title = Title;
export default List;