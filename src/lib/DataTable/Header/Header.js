import React from 'react'
import { classNames } from '../../index'

const Header = ({ className, children }) => (
    <div className={classNames('vui-DataTable-Header', className)}>
        {children}
    </div>
)

export default Header
