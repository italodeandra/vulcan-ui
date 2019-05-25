import React from 'react'
import { classNames } from '../index'
import './AppBar.scss'

const AppBar = ({ children, sticky }) => {
    const className = classNames(
        'vui-AppBar',
        sticky ? 'sticky' : ''
    )

    return (<>
        <div className={className}>
            {children}
        </div>
        {sticky &&
        <div className='vui-AppBar-placeholder' />
        }
    </>)
}

export default AppBar
