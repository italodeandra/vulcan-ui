import React from 'react'
import { classNames, Icon } from '../../index'
import './Subtitle.scss'

const Subtitle = ({ children, collapse, onCollapseChange }) => {
    const handleCollapseClick = () => {
        onCollapseChange && onCollapseChange(!collapse)
    }

    return (
        <div className={classNames('vui-NavigationDrawer-subtitle', onCollapseChange && 'pointer')}
             onClick={handleCollapseClick}>
            {children}
            {onCollapseChange &&
            <Icon className={classNames('chevron', collapse && 'collapse')} name='chevronUp' />
            }
        </div>
    )
}

export default Subtitle
