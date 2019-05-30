import _isEqual from 'lodash.isequal'
import React, { useEffect, useRef, useState } from 'react'
import { Button, ProgressBar, Spinner, TextField, usePortal } from '../../index'
import './Autocomplete.scss'
import AutocompleteDataSource from './AutocompleteDataSource'
import AutocompleteResult from './AutocompleteResult'

const Autocomplete = ({ autocompleteConfig, onChange, value: defaultValue, onItemSelect, ...props }) => {
    autocompleteConfig.emptyLabel = autocompleteConfig.emptyLabel || 'No items found'
    const resultRef = useRef(null)
    const [resultTargetRef, showResult, setShowResult] = usePortal.hook()
    const [isLoading, setIsLoading] = useState(false)
    const [value, setValue] = useState(defaultValue)
    const [selected, setSelected] = useState(defaultValue)
    const [result, setResult] = useState(null)
    const getResultIndex = useRef(0)
    const getResultTimeout = useRef(null)
    const [page, setPage] = useState(0)
    const [isScrollEnd, setIsScrollEnd] = useState(false)

    const getResult = (value, page) => {
        if (page === 0) {
            setResult(null)
        }
        setShowResult(true)
        setIsLoading(true)
        setIsScrollEnd(false)
        const getResultIndexCurrent = ++getResultIndex.current
        AutocompleteDataSource(autocompleteConfig.endpoint, value, page)
            .get()
            .then(res => {
                if (getResultIndex.current === getResultIndexCurrent) {
                    setIsLoading(false)
                    setResult(page === 0 ? res.data : (r) => [...r, ...res.data])
                }
            })
    }

    const handleFocus = (e) => {
        const { relatedTarget } = e
        props.onFocus && props.onFocus(e)
        if (!relatedTarget || !relatedTarget.classList.contains('vui-TextField-Autocomplete-Target')) {
            getResult(value, page)
        }
    }

    const handleBlur = (e) => {
        props.onBlur && props.onBlur(e)

        const { relatedTarget } = e

        if (!relatedTarget || !relatedTarget.classList.contains('vui-TextField-Autocomplete-Target')) {
            setShowResult(false)
            setPage(0)
            setResult(null)
        }

        if (!_isEqual(value, selected)) {
            setValue(null)
        }

        getResultIndex.current++
        setIsLoading(false)
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
            case 'Escape':
                resultTargetRef.current.focus()
                setShowResult(false)
                setResult(null)
                break
            default:
        }
    }

    const handleChange = (newValue) => {
        clearTimeout(getResultTimeout.current)
        getResultTimeout.current = setTimeout(() => {
            setValue(newValue)
            onChange && onChange(null)
            const newPage = 0
            setPage(newPage)
            getResult(newValue, newPage)
        }, 300)
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

    const handleScroll = (newIsScrollEnd) => {
        console.log(newIsScrollEnd)
        setIsScrollEnd(newIsScrollEnd)
    }

    useEffect(() => {
        if (!isLoading && isScrollEnd) {
            setIsLoading(true)
            const newPage = page + 1
            setPage(newPage)
            getResult(value, newPage)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isScrollEnd])

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
            suffix={
                isLoading &&
                <Button icon>
                    <Spinner />
                </Button>
            }
            onChange={handleChange}
        >
            <div className='auto-complete'>
                {(showResult) &&
                <AutocompleteResult target={resultTargetRef} setRef={resultRef} onScroll={handleScroll}>
                    {result && <>
                        {result.map(item =>
                            <AutocompleteResult.Item key={autocompleteConfig.valueTranspile(item)}
                                                     onBlur={handleBlur}
                                                     onKeyDown={handleKeyDown}
                                                     onClick={() => handleItemClick(item)}>
                                {autocompleteConfig.itemTranspile(item)}
                            </AutocompleteResult.Item>
                        )}
                        {!result.length &&
                        <div className='empty'>{autocompleteConfig.emptyLabel}</div>
                        }
                    </>}
                    {isLoading
                        ? <ProgressBar indeterminate height={result && result.length ? 4 : 2} />
                        : <div style={{ height: result && result.length ? 4 : 2 }} />
                    }
                </AutocompleteResult>
                }
            </div>
        </TextField>
    )
}

export default Autocomplete
