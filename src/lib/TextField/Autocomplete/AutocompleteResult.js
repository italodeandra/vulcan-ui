import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { classNames, usePortal, useScroll } from '../../index'

const AutocompleteResult = ({ children, target, setRef, onScroll }) => {
    const ref = useRef(null)
    const portalContainer = usePortal('vuiAutocompleteResult')
    const [style, setStyle] = useState(null)
    const [scrollY, isScrollEnd] = useScroll(ref, 48)

    useEffect(() => {
        if (setRef) setRef.current = ref.current
    }, [setRef])

    useLayoutEffect(() => {
        const handlePosition = () => {
            const nextStyle = {}
            const targetDOMRect = target.current.element.getBoundingClientRect()
            const refDOMRect = ref.current.getBoundingClientRect()

            nextStyle.left = targetDOMRect.left
            nextStyle.width = targetDOMRect.width
            nextStyle.top = targetDOMRect.top + targetDOMRect.height

            if (refDOMRect.bottom > window.innerHeight) {
                nextStyle.bottom = 0
                nextStyle.minHeight = 0
            }

            setStyle(nextStyle)
        }

        handlePosition()

        function getScrollParent(node) {
            if (node == null) {
                return null;
            }

            if (node.scrollHeight > node.clientHeight) {
                return node;
            } else {
                return getScrollParent(node.parentNode);
            }
        }

        const scrollable = getScrollParent(target.current.element) || window

        scrollable.addEventListener('scroll', handlePosition)
        window.addEventListener('resize', handlePosition)
        return () => {
            scrollable.removeEventListener('scroll', handlePosition)
            window.removeEventListener('resize', handlePosition)
        }
    }, [target])

    useEffect(() => {
        onScroll && onScroll(isScrollEnd)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY])

    return createPortal(
        <div className='vui-TextField-AutocompleteResult' ref={ref} style={style}>
            {children}
        </div>,
        portalContainer
    )
}

AutocompleteResult.Item = ({ children, className, targetClassName, ...props }) => {
    return (
        <button className={classNames('item', targetClassName)} {...props} tabIndex='0'>
            {children}
        </button>
    )
}

export default AutocompleteResult
