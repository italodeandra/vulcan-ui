import React from 'react'
import { useMobile } from '../../index'
import './Header.scss'

const Header = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isMobile] = useMobile()

    return isMobile ? (
        <div className='vui-NavigationDrawer-header'>
            {children}
        </div>
    ) : null
}

export default Header
