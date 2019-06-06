import React, { useContext, useEffect, useRef, useState } from 'react'
import './Tabs.scss'
import TabsContext from './TabsContext'

function Tabs({ children, tabs }) {
    const context = useContext(tabs)
    const tabsRef = useRef(null)
    const [currentTabPosition, setCurrentTabPosition] = useState({})

    useEffect(() => {
        const tabRect = tabsRef.current.querySelectorAll('.vui-Tabs-Tab')[context.currentPage].getBoundingClientRect()
        const tabsRect = tabsRef.current.getBoundingClientRect()
        setCurrentTabPosition({
            width: tabRect.width,
            top: tabsRect.top - tabRect.top + tabRect.height,
            left: tabRect.left - tabsRect.left
        })
    }, [context.currentPage])

    return (
        <div className='vui-Tabs' ref={tabsRef}>
            {children.map((c, i) => ({ ...c, props: { ...c.props, tabs, key: i } }))}
            <div className='active-indicator' style={currentTabPosition} />
        </div>
    )
}

const Tab = ({ children, tabs, key }) => {
    const context = useContext(tabs)

    return (
        <button className='vui-Tabs-Tab' type='button' onClick={() => context.setCurrentPage(key)}>
            {children}
        </button>
    )
}

const Pages = ({ children, tabs }) => {
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

const Page = ({ children, tabs, key }) => {
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

Tabs.Tab = Tab

Tabs.Pages = Pages

Tabs.Page = Page

Tabs.Context = TabsContext

export default Tabs
