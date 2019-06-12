import _isEqual from 'lodash.isequal'
import React, { useEffect, useRef, useState } from 'react'
import { Button, ProgressBar, Spinner, TextField, useDeepCompareEffect, usePortal } from '../../index'
import './Autocomplete.scss'
import AutocompleteDataSource from './AutocompleteDataSource'
import AutocompleteResult from './AutocompleteResult'

let autocompleteIndex = 0

const Autocomplete = ({ autocompleteConfig, onChange, value: defaultValue, onItemSelect, readOnly, setRef, ...props }) => {
    autocompleteConfig = autocompleteConfig || {}
    autocompleteConfig.emptyLabel = autocompleteConfig.emptyLabel || 'No items found'
    autocompleteConfig.responseTranspile = autocompleteConfig.responseTranspile || ((r) => r)
    autocompleteConfig.valueTranspile = autocompleteConfig.valueTranspile || ((r) => r)
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
    const index = useRef(++autocompleteIndex)

    useEffect(() => {
        if (setRef) {
            setRef.current = resultTargetRef.current
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setRef])

    useDeepCompareEffect(() => {
        if (!_isEqual(value, defaultValue)) {
            if (autocompleteConfig.keepValue) {
                setValue(defaultValue)
                setSelected(defaultValue)
            } else {
                setValue(null)
                setSelected(null)
                onChange && onChange(null)
            }
        }
    }, [defaultValue])

    const getResult = (value, page) => {
        if (page === 0) {
            setResult(null)
        }
        setShowResult(true)
        setIsLoading(true)
        setIsScrollEnd(false)
        const getResultIndexCurrent = ++getResultIndex.current
        AutocompleteDataSource(autocompleteConfig.request, value, page)
            .get()
            .then(res => {
                if (getResultIndex.current === getResultIndexCurrent) {
                    const responseTranspiled = autocompleteConfig.responseTranspile(res.data)
                    if (Array.isArray(responseTranspiled)) {
                        setResult(page === 0 ? responseTranspiled : (r) => [...r, ...responseTranspiled])
                    } else {
                        if (responseTranspiled) {
                            setSelected(value)
                            onChange && onChange(value)
                            setShowResult(false)
                            setResult(null)
                            onItemSelect && onItemSelect(responseTranspiled)
                        }
                    }
                    setIsLoading(false)
                }
            })
            .catch((err) => {
                console.error(err)
                //TODO: Use snackbar when implemented
                setIsLoading(false)
                setResult(null)
            })
    }

    const handleFocus = (e) => {
        const { relatedTarget } = e
        props.onFocus && props.onFocus(e)

        if (!readOnly) {
            if (!relatedTarget || !relatedTarget.classList.contains(`vui-TextField-Autocomplete-Target${index.current}`)) {
                getResult(value, page)
            }
        }
    }

    const handleBlur = (e) => {
        props.onBlur && props.onBlur(e)

        if (!readOnly) {
            const { relatedTarget } = e

            if (!relatedTarget || !relatedTarget.classList.contains(`vui-TextField-Autocomplete-Target${index.current}`)) {
                setShowResult(false)
                setPage(0)
                setResult(null)

                if (!autocompleteConfig.keepValue && !_isEqual(value, selected)) {
                    setValue(null)
                    onChange && onChange(null)
                }
            }

            ++getResultIndex.current
            setIsLoading(false)
            clearTimeout(getResultTimeout.current)
        }
    }

    const handleKeyDown = (e) => {
        props.onKeyDown && props.onKeyDown(e)

        if (!readOnly) {
            const { key, target } = e

            switch (key) {
                case 'ArrowUp':
                    e.preventDefault()
                    if (target.previousElementSibling && target.previousElementSibling.classList && target.previousElementSibling.classList.contains('item')) {
                        target.previousElementSibling.focus()
                    } else {
                        resultTargetRef.current.element.focus()
                    }
                    break
                case 'ArrowDown':
                    e.preventDefault()
                    if (target.nextElementSibling && target.nextElementSibling.classList && target.nextElementSibling.classList.contains('item')) {
                        target.nextElementSibling.focus()
                    } else {
                        const firstItem = resultRef.current.querySelector('.item')
                        firstItem && firstItem.focus()
                    }
                    break
                case 'Escape':
                    resultTargetRef.current.element.focus()
                    setShowResult(false)
                    setResult(null)
                    break
                default:
            }
        }
    }

    const handleChange = (newValue) => {
        clearTimeout(getResultTimeout.current)
        setValue(newValue)
        getResultTimeout.current = setTimeout(() => {
            onChange && onChange(newValue)
            const newPage = 0
            setPage(newPage)
            getResult(newValue, newPage)
        }, 300)
    }

    const handleItemClick = (item) => {
        resultTargetRef.current.element.focus()
        const newSelected = autocompleteConfig.valueTranspile(item)
        onItemSelect && onItemSelect(item)
        if (!autocompleteConfig.keepResultOpen) {
            onChange && onChange(newSelected)
            setSelected(newSelected)
            setValue(newSelected)
            setShowResult(false)
            setResult(null)
        } else {

        }
    }

    const handleScroll = (newIsScrollEnd) => {
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
            inputClassName={`vui-TextField-Autocomplete-Target${index.current}`}
            onKeyDown={handleKeyDown}
            suffix={
                isLoading &&
                <Button icon>
                    <Spinner />
                </Button>
            }
            onChange={handleChange}
            readOnly={readOnly}
        >
            <div className='auto-complete'>
                {(showResult) &&
                <AutocompleteResult
                    target={resultTargetRef}
                    setRef={resultRef}
                    onScroll={autocompleteConfig.pagination ? handleScroll : undefined}
                >
                    {result && <>
                        {result.map((item, i) =>
                            <AutocompleteResult.Item
                                key={autocompleteConfig.valueTranspile(item).toString() + i}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                                onClick={() => handleItemClick(item)}
                                targetClassName={`vui-TextField-Autocomplete-Target${index.current}`}
                            >
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
