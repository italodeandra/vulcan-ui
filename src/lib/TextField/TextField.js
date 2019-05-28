//TODO: Fix the assistive text changing fast between error and helper when it has an required error

import _isEqual from 'lodash.isequal'
import React, { useState } from 'react'
import { caretPosition, classNames, useDeepCompareEffect } from '../index'
import NumberMask from './masks/NumberMask'
import './TextField.scss'
import useValidation from './useValidation'

function checkIfIsCounter(value) {
    return new RegExp('^[0-9]+\\/[0-9]+$').test(value)
}

const TextField = ({
                       className,
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
                       onBlur
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
        hasError && 'has-error'
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
                    className='input'
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
                />
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
        </div>
    )
}

TextField.Number = ({ ...props }) => {
    const onFocus = (e) => {
        props.onFocus && props.onFocus(e)
        if (props.maskConfig && (props.maskConfig.decimal || props.maskConfig.money)) {
            const target = e.target
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
            format={NumberMask(props.maskConfig)}
        />
    )
}

export default TextField
