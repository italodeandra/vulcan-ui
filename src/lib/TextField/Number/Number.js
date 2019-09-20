import React from 'react'
import TextField from '../TextField'
import NumberFormatter from './NumberFormatter'

const Number = ({ maskConfig, ...props }) => {
    maskConfig = maskConfig || {}
    if ((maskConfig.decimal && typeof maskConfig.decimal !== 'number') || (!maskConfig.decimal && maskConfig.money)) {
        maskConfig.decimal = 2
    }

    const onFocus = (e) => {
        props.onFocus && props.onFocus(e)
    }

    return (
        <TextField
            {...props}
            onFocus={onFocus}
            format={NumberFormatter(maskConfig)}
        />
    )
}

export default Number
