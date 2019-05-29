import _isEqual from 'lodash.isequal'
import React, { useRef, useState } from 'react'
import { Button, Spinner, TextField, usePortal } from '../../index'
import './Autocomplete.scss'
import AutocompleteResult from './AutocompleteResult'

const Autocomplete = ({ autocompleteConfig, onChange, value: defaultValue, onItemSelect, ...props }) => {
    const resultRef = useRef(null)
    const [resultTargetRef, showResult, setShowResult] = usePortal.hook()
    const [isLoading, setIsLoading] = useState(false)
    const [value, setValue] = useState(defaultValue)
    const [selected, setSelected] = useState(defaultValue)
    const [result, setResult] = useState(null)

    const handleFocus = (e) => {
        props.onFocus && props.onFocus(e)
        setShowResult(true)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setResult([
                {
                    'id': 16,
                    'name': 'Ítalo 16'
                },
                {
                    'id': 17,
                    'name': 'Ítalo 17'
                },
                {
                    'id': 18,
                    'name': 'Ítalo 18'
                }
            ])
        }, 500)
    }

    const handleBlur = (e) => {
        props.onBlur && props.onBlur(e)

        const { relatedTarget } = e

        if (!relatedTarget || !relatedTarget.classList.contains('vui-TextField-Autocomplete-Target')) {
            setShowResult(false)
        }

        if (!_isEqual(value, selected)) {
            setValue(null)
        }
    }

    const handleKeyDown = (e) => {
        props.onKeyDown && props.onKeyDown(e)

        const { key, target } = e

        switch (key) {
            case 'ArrowUp':
                if (target.previousElementSibling && target.previousElementSibling.classList && target.previousElementSibling.classList.contains('item')) {
                    target.previousElementSibling.focus()
                } else {
                    resultTargetRef.current.focus()
                }
                break
            case 'ArrowDown':
                if (target.nextElementSibling && target.nextElementSibling.classList && target.nextElementSibling.classList.contains('item')) {
                    target.nextElementSibling.focus()
                } else {
                    const firstItem = resultRef.current.querySelector('.item')
                    firstItem && firstItem.focus()
                }
                break
            default:
        }
    }

    const handleChange = (newValue) => {
        setValue(newValue)
        onChange && onChange(null)
    }

    const handleItemClick = (item) => {
        resultTargetRef.current.focus()
        const newSelected = autocompleteConfig.valueTranspile(item)
        setValue(newSelected)
        setSelected(newSelected)
        onChange && onChange(autocompleteConfig.valueTranspile(item))
        setShowResult(false)
        setResult(null)
        onItemSelect && onItemSelect(item)
    }

    return (
        <TextField
            {...props}
            value={value}
            setRef={resultTargetRef}
            autoComplete={false}
            onFocus={handleFocus}
            onBlur={handleBlur}
            inputClassName='vui-TextField-Autocomplete-Target'
            onKeyDown={handleKeyDown}
            suffix={isLoading &&
            <Button icon>
                <Spinner />
            </Button>
            }
            onChange={handleChange}
        >
            <div className='auto-complete'>
                {(showResult && result) &&
                <AutocompleteResult target={resultTargetRef} setRef={resultRef}>
                    {result.map(item =>
                        <AutocompleteResult.Item key={autocompleteConfig.valueTranspile(item)}
                                                 onBlur={handleBlur}
                                                 onKeyDown={handleKeyDown}
                                                 onClick={() => handleItemClick(item)}>
                            {autocompleteConfig.itemTranspile(item)}
                        </AutocompleteResult.Item>
                    )}
                </AutocompleteResult>
                }
            </div>
        </TextField>
    )
}

export default Autocomplete
