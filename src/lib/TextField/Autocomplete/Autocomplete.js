import React, { useRef } from 'react'
import { TextField, usePortal } from '../../index'
import './Autocomplete.scss'
import AutocompleteResult from './AutocompleteResult'

const Autocomplete = ({ ...props }) => {
    const inputRef = useRef(null)
    const resultRef = useRef(null)
    const [resultTargetRef, showResult, setShowResult] = usePortal.hook()

    const handleBlur = ({ relatedTarget }) => {
        if (!relatedTarget || !relatedTarget.classList.contains('vui-TextField-Autocomplete-Target')) {
            setShowResult(false)
        }
    }

    const handleKeyDown = ({ key, target }) => {
        switch (key) {
            case 'ArrowUp':
                if (target.previousElementSibling && target.previousElementSibling.classList && target.previousElementSibling.classList.contains('item')) {
                    target.previousElementSibling.focus()
                } else {
                    inputRef.current.focus()
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

    return (
        <TextField
            setRef={inputRef}
            {...props}
            autoComplete={false}
            onFocus={() => setShowResult(true)}
            onBlur={handleBlur}
            inputClassName='vui-TextField-Autocomplete-Target'
            onKeyDown={handleKeyDown}
        >
            <div className='auto-complete' ref={resultTargetRef}>
                {showResult &&
                <AutocompleteResult target={resultTargetRef} setRef={resultRef}>
                    <AutocompleteResult.Item onBlur={handleBlur} onKeyDown={handleKeyDown}>
                        Hello world 1
                    </AutocompleteResult.Item>
                    <AutocompleteResult.Item onBlur={handleBlur} onKeyDown={handleKeyDown}>
                        Hello world 2
                    </AutocompleteResult.Item>
                </AutocompleteResult>
                }
            </div>
        </TextField>
    )
}

export default Autocomplete
