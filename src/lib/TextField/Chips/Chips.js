import React, { useRef, useState } from 'react'
import { classNames, TextField, useDeepCompareEffect, Icon } from '../../index'
import './Chips.scss'

const Chips = ({ onBlur, onChange, value, autocompleteConfig, ...props }) => {
    autocompleteConfig = autocompleteConfig || {}
    autocompleteConfig.itemCompare = autocompleteConfig.itemCompare || ((i1, i2) => (i1 === i2))
    const ref = useRef(null)
    const [autocompleteValue, setAutocompleteValue] = useState(null)
    const [selectedItems, setSelectedItems] = useState([])

    autocompleteConfig.keepResultOpen = true

    const handleAutocompleteChange = (newAutocompleteValue) => {
        setAutocompleteValue(newAutocompleteValue)
    }

    const handleItemSelect = (newItem) => {
        setSelectedItems((oldItems) => {
            const newItems = [...oldItems]
            if (newItems.find(i => autocompleteConfig.itemCompare(i, newItem))) {
                newItems.splice(newItems.findIndex(i => autocompleteConfig.itemCompare(i, newItem)), 1)
            } else {
                newItems.push(newItem)
            }
            return newItems
        })
        setTimeout(() => {
            ref.current.setIsFilled(true)
            ref.current.setCustomErrorMessage('')
        })
    }

    const handleBlur = () => {
        onBlur && onBlur()
        setTimeout(() => {
            if (selectedItems.length) {
                ref.current.setIsFilled(true)
                ref.current.setCustomErrorMessage('')
            } else {
                ref.current.setIsFilled(false)
                ref.current.validate()
            }
        })
    }

    useDeepCompareEffect(() => {
        onChange && onChange(selectedItems)
    }, [selectedItems])

    const handleItemDelete = (item) => {
        setSelectedItems((oldItems) => {
            const newItems = [...oldItems]
            newItems.splice(newItems.findIndex(i => autocompleteConfig.itemCompare(i, item)), 1)
            ref.current.setIsFilled(!!newItems.length)
            return newItems
        })
    }

    return (
        <TextField.Autocomplete
            setRef={ref}
            {...props}
            autocompleteConfig={autocompleteConfig}
            value={autocompleteValue}
            onChange={handleAutocompleteChange}
            onItemSelect={handleItemSelect}
            onBlur={handleBlur}
            inputElement={({ className, ref, ...props2 }) => (
                <div className={classNames(className, 'vui-TextField-Chips')} ref={ref}>
                    <div className='chips'>
                        {selectedItems.map((item, i) => (
                            <div key={i} className='chip'>
                                {autocompleteConfig.itemTranspile(item)}
                                <Icon className='close' name='close' onClick={() => handleItemDelete(item)}/>
                            </div>
                        ))}
                        <input className={className} {...props2} />
                    </div>
                </div>
            )}
        />
    )
}

export default Chips
