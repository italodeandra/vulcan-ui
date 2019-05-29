import React from 'react'
import { caretPosition } from '../../index'
import TextField from '../TextField'
import NumberFormatter from './NumberFormatter'

const Number = ({ maskConfig, ...props }) => {
    const onFocus = (e) => {
        props.onFocus && props.onFocus(e)

        const {target} = e

        if (maskConfig && (maskConfig.decimal || maskConfig.money)) {
            if (target.value === '') {
                props.onChange && props.onChange('0.00')
            }
            caretPosition.set(target, target.value.length)
        }
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
