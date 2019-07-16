import React from 'react'
import classNames from '../Utils/classNames'
import './Spinner.scss'

const Spinner = ({className}) => (
    <div className={classNames('vui-Spinner', className)}>
        <svg viewBox='0 0 44 44'>
            <circle cx='22' cy='22' r='20' fill='none' strokeWidth='4'/>
        </svg>
    </div>
)

export default Spinner
