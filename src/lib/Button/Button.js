import React from 'react'
import { classNames } from '../index'
import './Button.scss'

const Button = ({ children, className, outlined, text, icon, onClick }) => {
    className = classNames(
        className,
        'vui-Button',
        (!outlined && !text && !icon) && 'contained',
        (outlined) && 'outlined',
        (text) && 'text',
        (icon) && 'icon'
    )

    return (<button className={className}
                    onClick={onClick}>
        {children}
    </button>)
}

export default Button
