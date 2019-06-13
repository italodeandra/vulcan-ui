import React, { useEffect, useMemo } from 'react'
import { classNames, Icon, useLocalStorage } from '../../index'
import './Subtitle.scss'

let vuiNavigationDrawerItemGroupCollapseIndex = 0
const Subtitle = ({ children, collapseId, onCollapse }) => {
    const [collapse, setCollapse] = useLocalStorage('vuiNavigationDrawerItemGroupCollapse' + (useMemo(() => collapseId ? collapseId : ++vuiNavigationDrawerItemGroupCollapseIndex, [])))

    useEffect(() => {
        onCollapse && onCollapse(collapse)
    }, [onCollapse, collapse])

    return (
        <div className={classNames('vui-NavigationDrawer-subtitle', onCollapse && 'pointer')}
             onClick={setCollapse && (() => setCollapse(c => !c))}>
            {children}
            {onCollapse &&
            <Icon className={classNames('chevron', collapse && 'collapse')} name='chevronUp' />
            }
        </div>
    )
}

export default Subtitle
