import React from 'react'
import { classNames } from '../index'
import Divider from '../NavigationDrawer/Divider/Divider'
import Action from './Action/Action'
import Avatar from './Avatar/Avatar'
import Content from './Content/Content'
import Icon from './Icon/Icon'

import './List.scss'
import ListItem from './ListItem/ListItem'
import Overline from './Overline/Overline'
import Subtitle from './Subtitle/Subtitle'
import Title from './Title/Title'

const List = ({ children, setRef, ...props }) => {
    return (
        <div className={classNames('vui-List', props.className)} {...props} ref={setRef}>
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
