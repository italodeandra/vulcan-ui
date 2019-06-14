import React, { useEffect, useRef, useState } from 'react'
import { classNames, useScroll } from '../index'
import './AppBar.scss'

const AppBar = ({ className, children, sticky, setRef, style }) => {
    const ref = useRef(null)
    const windowRef = useRef(window)
    const [isWindowScrolled] = useScroll(windowRef)
    const [height, setHeight] = useState(undefined)

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

    useEffect(() => {
        setHeight(ref.current.getBoundingClientRect().height)
    }, [])

    return (<>
        <div className={className} ref={ref} style={{ ...style, height }}>
            {children}
        </div>
        {sticky &&
        <div className='vui-AppBar-placeholder' style={{ height }} />
        }
    </>)
}

AppBar.Row = ({ className, style, children }) => (
    <div className={classNames(className, 'vui-AppBar-row')} style={style}>
        {children}
    </div>
)

export default AppBar
