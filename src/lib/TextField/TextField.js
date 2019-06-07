//TODO: Fix the assistive text changing fast between error and helper when it has an required error

import _isEqual from 'lodash.isequal'
import React, { useState } from 'react'
import { classNames, useDeepCompareEffect } from '../index'
import Autocomplete from './Autocomplete/Autocomplete'
import Number from './Number/Number'
import './TextField.scss'
import useValidation from './useValidation'

function checkIfIsCounter(value) {
    return new RegExp('^[0-9]+\\/[0-9]+$').test(value)
}

const TextField = ({
                       className,
                       inputClassName,
                       id,
                       name,
                       label,
                       onChange,
                       type,
                       value: defaultValue,
                       helperText,
                       validation,
                       required,
                       format,
                       onFocus,
                       onBlur,
                       children,
                       autoComplete,
                       setRef,
                       suffix,
                       readOnly,
                       disabled,
                       hidden,
                       ...props
                   }) => {
    type = type || 'text'
    format = format || { parse: f => f, mask: f => f }
    id = id || name
    if (!validation && required) {
        validation = validation || {
            required
        }
    }
    if (!required && validation) {
        required = validation.required
    }
    const [value, setValue] = useState(defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(!!defaultValue)
    const [isPristine, setIsPristine] = useState(!defaultValue)
    const [hasError, errorText] = useValidation(value, validation)

    className = classNames(
        className,
        'vui-TextField',
        isFocused && 'is-focused',
        isFilled && 'is-filled',
        isPristine && 'is-pristine',
        hasError && 'has-error',
        suffix && 'has-suffix',
        readOnly && 'is-readonly',
        disabled && 'is-disabled',
        hidden && 'is-hidden'
    )

    const handleChange = ({ target }) => {
        const newValue = format.parse(target.value)

        setValue(newValue)
        setIsPristine(false)
        setIsFilled(!!newValue)
        onChange && onChange(newValue)
    }

    useDeepCompareEffect(() => {
        if (!_isEqual(value, defaultValue)) {
            const newValue = defaultValue

            setIsPristine(false)
            setValue(format.parse(newValue))
            setIsFilled(!!newValue)
        }
    }, [defaultValue])

    return (
        <div className={className}>
            <div className='input-container'>
                <input
                    ref={setRef}
                    className={classNames('input', inputClassName)}
                    id={id}
                    name={name}
                    type={type}
                    onChange={handleChange}
                    value={format.mask(value) || ''}
                    onFocus={e => {
                        setIsFocused(true)
                        if (onFocus) onFocus(e)
                    }}
                    onBlur={e => {
                        setIsFocused(false)
                        if (onBlur) onBlur(e)
                    }}
                    required={required}
                    autoComplete={autoComplete === false ? 'off' : undefined}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...props}
                />
                {suffix &&
                <div className='suffix'>{suffix}</div>
                }
                {!!label &&
                <label htmlFor={id}>
                    {label}
                </label>
                }
                <div className='border' />
            </div>
            {(hasError || helperText) &&
            <div className={classNames(
                'assistive-text',
                (hasError && checkIfIsCounter(errorText)) && 'counter')
            }>
                {(!isPristine && hasError) ? errorText : helperText}
            </div>
            }
            {children}
        </div>
    )
}

TextField.Number = Number

TextField.Autocomplete = Autocomplete

export default TextField
