import React from 'react'
import { NavLink } from 'react-router-dom'
import './Item.scss'

const Item = ({ icon, children, to, exact, title, onClick, badge }) => (
    <NavLink
        className='vui-NavigationDrawer-item'
        activeClassName='active'
        exact={exact}
        to={to}
        title={title ? title : undefined}
        onClick={onClick}
    >
        {icon}
        <span className='label'>
        {children}
        </span>
        {!!badge &&
        <div className='badge'>{badge}</div>
        }
    </NavLink>
)

export default Item
