import _isEqual from 'lodash.isequal'
import React, { useState } from 'react'
import { classNames, useDeepCompareEffect } from '../index'
import './TextField.scss'
import useValidation from './useValidation'

const TextField = ({ className, id, name, label, onChange, type, value: defaultValue, helperText, validation, required }) => {
    type = type || 'text'
    id = id || name
    if (!validation && required) {
        validation = validation || {
            required
        }
    }
    const [value, setValue] = useState(defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [isPristine, setIsPristine] = useState(true)
    const [hasError, errorText] = useValidation(value, validation)

    className = classNames(
        className,
        'vui-TextField',
        isFocused && 'is-focused',
        isFilled && 'is-filled',
        isPristine && 'is-pristine',
        hasError && 'has-error'
    )

    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    useDeepCompareEffect(() => {
        if (!_isEqual(value, defaultValue)) {
            setIsPristine(false)
            setValue(defaultValue)
        }
    }, [defaultValue])

    useDeepCompareEffect(() => {
        if (!_isEqual(value, defaultValue)) {
            setIsPristine(false)
        }
        onChange && onChange(value)
        setIsFilled(!!value)
    }, [value])

    return (
        <div className={className}>
            <div className='input-container'>
                <input
                    className='input'
                    id={id}
                    name={name}
                    type={type}
                    onChange={handleChange}
                    value={value || ''}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                />
                {!!label &&
                <label htmlFor={id}>
                    {label}
                </label>
                }
                <div className='border' />
            </div>
            {(errorText || helperText) &&
            <div className='assistive-text'>
                {errorText || helperText}
            </div>
            }
        </div>
    )
}

export default TextField
