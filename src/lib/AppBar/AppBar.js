import React, { useEffect, useRef } from 'react'
import { classNames, useScroll } from '../index'
import './AppBar.scss'

const AppBar = ({ className, children, sticky, getRef }) => {
    const ref = useRef(null)
    const windowRef = useRef(window)
    const [isWindowScrolled] = useScroll(windowRef)

    className = classNames(
        className,
        'vui-AppBar',
        sticky && 'sticky',
        !!isWindowScrolled && 'scrolled'
    )

    useEffect(() => {
        if (getRef) {
            getRef.current = ref.current
        }
    }, [getRef])

    return (<>
        <div className={className} ref={ref}>
            {children}
        </div>
        {sticky &&
        <div className='vui-AppBar-placeholder' />
        }
    </>)
}

export default AppBar
