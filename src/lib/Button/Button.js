import React, { useEffect, useRef } from 'react'
import { classNames } from '../index'
import './Button.scss'

const Button = ({ children, className, style, outlined, text, icon, onClick, autoFocus, type }) => {
    type = type || 'button'
    const ref = useRef(null)

    className = classNames(
        className,
        'vui-Button',
        (!outlined && !text && !icon) && 'contained',
        (outlined) && 'outlined',
        (text) && 'text',
        (icon) && 'icon'
    )

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus()
        }
    }, [autoFocus])

    return (
        <button
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            auto-focus={autoFocus ? 'true' : undefined}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
