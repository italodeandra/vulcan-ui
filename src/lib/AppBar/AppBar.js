import React, { useEffect, useRef } from 'react'
import { classNames, useScroll } from '../index'
import './AppBar.scss'

const AppBar = ({ className, children, sticky, setRef }) => {
    const ref = useRef(null)
    const windowRef = useRef(window)
    const [isWindowScrolled] = useScroll(windowRef)

    className = classNames(
        className,
        'vui-AppBar',
        sticky && 'sticky',
        (sticky && !!isWindowScrolled) && 'scrolled'
    )

    useEffect(() => {
        if (setRef) {
            setRef.current = ref.current
        }
    }, [setRef])

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
