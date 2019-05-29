import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { classNames, usePortal } from '../../index'

const AutocompleteResult = ({ children, target, setRef }) => {
    const ref = useRef(null)
    const portalContainer = usePortal('AutocompleteResult')
    const [style, setStyle] = useState(null)

    useEffect(() => {
        if (setRef) setRef.current = ref.current
    }, [setRef])

    useEffect(() => {
        const handlePosition = () => {
            const nextStyle = {}
            const targetDOMRect = target.current.getBoundingClientRect()
            const refDOMRect = ref.current.getBoundingClientRect()

            nextStyle.left = targetDOMRect.x
            nextStyle.width = targetDOMRect.width
            nextStyle.top = targetDOMRect.y + targetDOMRect.height

            if (refDOMRect.bottom > window.innerHeight) {
                nextStyle.bottom = 0
                nextStyle.minHeight = 0
            }

            setStyle(nextStyle)
        }

        handlePosition()

        window.addEventListener('scroll', handlePosition)
        window.addEventListener('resize', handlePosition)
        return () => {
            window.removeEventListener('scroll', handlePosition)
            window.removeEventListener('resize', handlePosition)
        }
    }, [target])

    return createPortal(
        <div className='vui-TextField-AutocompleteResult' ref={ref} style={style}>
            {children}
        </div>,
        portalContainer
    )
}

AutocompleteResult.Item = ({ children, className, ...props }) => {
    return (
        <button className={classNames('item', 'vui-TextField-Autocomplete-Target')} {...props} tabIndex='0'>
            {children}
        </button>
    )
}

export default AutocompleteResult
