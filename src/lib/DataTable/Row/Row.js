import React from 'react'
import {classNames} from '../../index'
import './Row.sass'

const Row = ({children, onClick, className, ...props}) => (
    <tr
        className={classNames('vui-DataTable-Row', className, !!onClick && 'clickable')}
        onClick={onClick}
        {...props}
    >
        {children}
    </tr>
)

export default Row
