import { useState } from 'react'
import { useDeepCompareEffect } from '../index'

function checkValue(value) {
    return typeof value !== 'undefined' && value !== null
}

function useValidation(value, validation) {
    const [hasError, setHasError] = useState(false)
    const [errorText, setErrorMessage] = useState(null)

    const setCustomErrorMessage = (errorMessage) => {
        setHasError(!!errorMessage)
        setErrorMessage(errorMessage)
    }

    const validate = () => {
        setHasError(false)
        setErrorMessage(null)

        if (validation) {
            if (validation.required) {
                if (!checkValue(value)) {
                    setHasError(true)
                    setErrorMessage(validation.required.message || validation.required)
                    return
                }
            }

            if (validation.maxLength) {
                const maxLength = {}
                maxLength.length = validation.maxLength.length || validation.maxLength
                maxLength.message = validation.maxLength.message || (`${value.length}/${maxLength.length}`)
                if (!checkValue(value) || value.length > maxLength.length) {
                    setHasError(true)
                    setErrorMessage(maxLength.message)
                    return
                }
            }

            if (validation.minLength) {
                const minLength = {}
                minLength.length = validation.minLength.length || validation.minLength
                minLength.message = validation.minLength.message
                if (!checkValue(value) || value.length < minLength.length) {
                    setHasError(true)
                    setErrorMessage(minLength.message)
                    return
                }
            }

            if (validation.minAmount) {
                const minAmount = {}
                minAmount.amount = validation.minAmount.amount || validation.minAmount
                minAmount.message = validation.minAmount.message
                if (!checkValue(value) || parseFloat(value) < minAmount.amount) {
                    setHasError(true)
                    setErrorMessage(minAmount.message)
                    return
                }
            }

            if (validation.maxAmount) {
                const maxAmount = {}
                maxAmount.amount = validation.maxAmount.amount || validation.maxAmount
                maxAmount.message = validation.maxAmount.message
                if (!checkValue(value) || parseFloat(value) > maxAmount.amount) {
                    setHasError(true)
                    setErrorMessage(maxAmount.message)
                    return
                }
            }
        }
    }

    useDeepCompareEffect(() => {
        validate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validation, value])

    return [
        hasError,
        errorText,
        setCustomErrorMessage,
        validate
    ]
}

export default useValidation
