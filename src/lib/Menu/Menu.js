import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import usePortal from '../Hooks/usePortal'
import { classNames } from '../index'
import './Menu.scss'

function Menu({ target, targetAlign, onClickOutside, children }) {
    const [targetPositionX, setTargetPositionX] = useState(null)
    const [targetPositionY, setTargetPositionY] = useState(null)
    const ref = useRef(null)
    const portalContainer = usePortal('vui-Menu-container')

    useEffect(() => {
        const targetPosition = {
            x: null,
            y: null
        }
        const targetAlignArray = targetAlign ? targetAlign.split(' ') : ''
        const targetDOMRect = target.current.getBoundingClientRect()
        const refDOMRect = ref.current.getBoundingClientRect()
        if (!targetAlignArray.includes('right')) {
            setTargetPositionX(targetDOMRect.x)
        } else {
            setTargetPositionX(targetDOMRect.x + targetDOMRect.width - refDOMRect.width)
        }
        if (!targetAlignArray.includes('bottom')) {
            setTargetPositionY(targetDOMRect.y)
        } else {
            setTargetPositionY(targetPosition.y = targetDOMRect.y + targetDOMRect.height)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target])

    useEffect(() => {
        if (onClickOutside) {
            window.addEventListener('click', handleClickOutside)
        }

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClickOutside(event) {
        if (event.target) {
            if (!event.target.classList.contains('vui-Menu') &&
                !event.target.classList.contains('vui-Menu-item')) {
                onClickOutside()
            }
        }
    }

    return createPortal(
        <div
            ref={ref}
            className='vui-Menu'
            style={{
                left: targetPositionX,
                top: targetPositionY
            }}
        >
            {children}
        </div>,
        portalContainer
    )
}

Menu.Item = ({ className, children, to, ...props }) => {
    const elementProps = {
        className: classNames(className, 'vui-Menu-item'),
        to,
        ...props,
        children
    }

    return to
        ? <Link {...elementProps} />
        : <div {...elementProps} />
}

Menu.Title = ({ className, children, ...props }) => (
    <div className={classNames(className, 'vui-Menu-title')} {...props}>
        {children}
    </div>
)

export default Menu
