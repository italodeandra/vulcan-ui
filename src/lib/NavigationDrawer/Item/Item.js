import React from 'react'
import { NavLink } from 'react-router-dom'
import './Item.scss'

const Item = ({ icon, children, to, exact, title, onClick, badge, url }) => {
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
        className: 'vui-NavigationDrawer-item',
        exact: exact,
        to: to,
        title: title ? title : undefined,
        onClick: onClick
    }

    return url
        ? <a href={url} target='_blank' rel='noopener noreferrer' {...elementProps} >{children}</a>
        : <NavLink {...elementProps} activeClassName='active'>{children}</NavLink>
}

export default Item
