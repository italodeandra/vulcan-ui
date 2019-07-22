import React from 'react'
import {NavLink} from 'react-router-dom'
import classNames from '../../Utils/classNames'
import './Item.scss'

const Item = ({icon, children, to, exact, title, onClick, badge, url, disabled}) => {
    children = <>
        {icon}
        <span className='label'>
            {children}
        </span>
        {!!badge &&
        <div className='badge'>{badge}</div>
        }
    </>

    const elementProps = {
        className: classNames(
            'vui-NavigationDrawer-item',
            'can-scroll',
            disabled && 'disabled',
        ),
        exact: exact,
        title: title ? title : undefined,
        onClick: !disabled ? onClick : undefined,
    }

    return url
        ? <a {...elementProps} href={url} target='_blank' rel='noopener noreferrer'>{children}</a>
        : <NavLink {...elementProps} to={to} activeClassName='active'>{children}</NavLink>
}

export default Item
