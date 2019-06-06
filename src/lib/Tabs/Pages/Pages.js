import React, { useContext, useEffect, useRef, useState } from 'react'
import './Pages.scss'

export const Pages = ({ children, tabs }) => {
    const context = useContext(tabs)
    const pagesRef = useRef(null)
    const [pagesHeight, setPagesHeight] = useState(0)
    const currentPageRef = useRef(context.currentPage)

    const setPagesSize = () => {
        setTimeout(() => {
            setPagesHeight(pagesRef.current.querySelectorAll('.vui-Tabs-Page')[currentPageRef.current].getBoundingClientRect().height)
        })
    }

    useEffect(() => {
        currentPageRef.current = context.currentPage
        setPagesSize()
    }, [context.currentPage])

    useEffect(() => {
        setPagesSize()

        window.addEventListener('resize', setPagesSize)

        return () => {
            window.removeEventListener('resize', setPagesSize)
        }
    }, [])

    const style = {
        transform: `translateX(${-(context.currentPage * 100)}%)`,
        height: pagesHeight
    }

    return (
        <div className='vui-Tabs-Pages' ref={pagesRef}>
            <div className='pages-container' style={style}>
                {children.map((c, i) => ({ ...c, props: { ...c.props, tabs, key: i } }))}
            </div>
        </div>
    )
}

export const Page = ({ children, tabs, key }) => {
    const context = useContext(tabs)
    const currentPageRef = useRef(context.currentPage)
    const [show, setShow] = useState(true)

    useEffect(() => {
        currentPageRef.current = context.currentPage
        setShow(true)
        setTimeout(() => {
            if (key !== currentPageRef.current) {
                setShow(false)
            }
        }, 280)
    }, [context.currentPage, key])

    return (
        <div className='vui-Tabs-Page'>
            {show ? children : null}
        </div>
    )
}
