import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../index'
import './Button.scss'

const Button = ({ children, className, style, outlined, text, icon, onClick, autoFocus, type, to, setRef, ...props }) => {
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

    useEffect(() => {
        if (setRef) {
            setRef.current = ref.current
        }
    }, [])

    props = {
        ...props,
        ref: ref,
        className: className,
        style: style,
        onClick: onClick,
        'auto-focus': autoFocus ? 'true' : undefined,
        type: type
    }

    if (to) {
        return (
            <Link to={to} {...props}>
                {children}
            </Link>
        )
    } else {
        return (
            <button {...props}>
                {children}
            </button>
        )
    }
}

export default Button
