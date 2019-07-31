import React from "react"
import ListItem from "./ListItem/ListItem"
import Avatar from "./Avatar/Avatar"
import Content from "./Content/Content"
import Divider from "../NavigationDrawer/Divider/Divider"
import Overline from "./Overline/Overline"
import Title from "./Title/Title"
import Action from "./Action/Action"
import Icon from "./Icon/Icon"
import Subtitle from "./Subtitle/Subtitle";

import "./List.scss"
import {classNames} from '../index'

const List = ({ children, ...props }) => {
    return (
        <div className={classNames("vui-List", props.className)} {...props}>
            {children}
        </div>
    );
}

List.Avatar = Avatar
List.Content = Content
List.Action = Action
List.Divider = Divider
List.Icon = Icon
List.ListItem = ListItem
List.Overline = Overline
List.Subtitle = Subtitle
List.Title = Title

export default List;