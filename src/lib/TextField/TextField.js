import _isEqual from 'lodash.isequal'
import React, { useState } from 'react'
import { classNames, useDeepCompareEffect } from '../index'

const TextField = ({ className, id, name, label, onChange, type, value: defaultValue }) => {
    type = type || 'text'
    id = id || name
    className = classNames(
        className,
        'vui-TextField'
    )
    const [value, setValue] = useState(defaultValue)
    const [isFocused, setFocused] = useState(false)
    const [isFilled, setFilled] = useState(false)
    const [isPristine, setPristine] = useState(true)

    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    useDeepCompareEffect(() => {
        if (!_isEqual(value, defaultValue)) {
            setPristine(false)
            setValue(defaultValue)
        }
    }, [defaultValue])

    useDeepCompareEffect(() => {
        if (!_isEqual(value, defaultValue)) {
            setPristine(false)
        }
        onChange && onChange(value)
        setFilled(!!value)
    }, [value])

    return (
        <div className={className}>
            {!!label &&
            <label htmlFor={id}>
                {label}
            </label>
            }
            <input
                id={id}
                name={name}
                type={type}
                onChange={handleChange}
                value={value || ''}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    )
}

export default TextField
