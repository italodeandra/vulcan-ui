import React, {useEffect, useLayoutEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import {Card, classNames, usePortal} from '../index'
import './Dialog.scss'

function Dialog({target, onClickOutside, children, className}) {
    const portalContainer = usePortal('vui-Dialog-container')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const targetRef = target && target.current
        return () => {
            if (targetRef && targetRef.focus && !open) {
                targetRef.focus()
            }
        }
        // eslint-disable-next-line
    }, [target])

    function handleClickOutside() {
        onClickOutside && onClickOutside()
    }

    className = classNames(
        'vui-Dialog',
        className,
        open && 'open',
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
        portalContainer,
    )
}

Dialog.Title = Card.Title
Dialog.Content = Card.Content
Dialog.Actions = Card.Actions

export default Dialog
