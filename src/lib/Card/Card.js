import React from 'react'
import { classNames } from '../index'
import './Card.scss'

const Card = ({ children, className, rounder }) => {
    className = classNames(
        className,
        'vui-Card',
        rounder ? 'rounder' : ''
    )

    return (
        <div className={className}>
            {children}
        </div>
    )
}

Card.Title = ({ children, className }) => {
    className = classNames(
        className,
        'vui-Card-title'
    )

    return (
        <div className={className}>
            {children}
        </div>
    )
}

Card.Content = ({ children, className }) => {
    className = classNames(
        className,
        'vui-Card-content'
    )

    return (
        <div className={className}>
            {children}
        </div>
    )
}

Card.Actions = ({ children, className, alignRight }) => {
    className = classNames(
        className,
        'vui-Card-actions',
        alignRight ? 'align-right' : ''
    )

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Card
