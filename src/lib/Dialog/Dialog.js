import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Card, classNames, usePortal } from '../index'
import './Dialog.scss'

function Dialog({ onClickOutside, children }) {
    const portalContainer = usePortal('vui-Dialog-container')
    const [open, setOpen] = useState(false)

    function handleClickOutside() {
        onClickOutside && onClickOutside()
    }

    const className = classNames(
        'vui-Dialog',
        open && 'open'
    )

    useLayoutEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 100)
    }, [])

    return createPortal(
        <div
            className={className}
            onClick={handleClickOutside}
        >
            <Card
                rounder
                className='dialog'
                onClick={event => event.stopPropagation()}
            >
                {children}
            </Card>
        </div>,
        portalContainer
    )
}

Dialog.Title = Card.Title
Dialog.Content = Card.Content
Dialog.Actions = Card.Actions

export default Dialog
