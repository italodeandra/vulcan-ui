import React, { useContext, useEffect, useRef, useState } from 'react'
import { Page, Pages } from './Pages/Pages'
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

Tabs.Tab = Tab

Tabs.Pages = Pages

Tabs.Page = Page

Tabs.Context = TabsContext

export default Tabs
