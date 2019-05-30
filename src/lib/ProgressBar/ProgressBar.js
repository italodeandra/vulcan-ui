import React from 'react'
import { classNames } from '../index'
import './ProgressBar.scss'

const ProgressBar = ({ className, indeterminate, height, progression }) => (
    <div className={classNames(className, 'vui-ProgressBar')} style={{ height }}>
        <div className={indeterminate ? 'indeterminate' : 'determinate'}
             style={{ width: progression ? progression + '%' : undefined }} />
    </div>
)

export default ProgressBar
