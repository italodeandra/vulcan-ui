import { useEffect, useState } from 'react'

function useValidation(value, validation) {
    const [hasError, setHasError] = useState(false)
    const [errorText, setErrorText] = useState(null)

    useEffect(() => {
        setHasError(false)
        setErrorText(null)

        if (validation) {
            if (validation.required) {
                if (!value) {
                    setHasError(true)
                    setErrorText(validation.required.message || validation.required)
                    return
                }
            }

            if (validation.maxLength) {
                const maxLength = {}
                maxLength.length = validation.maxLength.length || validation.maxLength
                maxLength.message = validation.maxLength.message || (`${value.length}/${maxLength.length}`)
                if (value && value.length > maxLength.length) {
                    setHasError(true)
                    setErrorText(maxLength.message)
                    return
                }
            }

            if (validation.minLength) {
                const minLength = {}
                minLength.length = validation.minLength.length || validation.minLength
                minLength.message = validation.minLength.message
                if (value && value.length < minLength.length) {
                    setHasError(true)
                    setErrorText(minLength.message)
                    return
                }
            }

            if (validation.minAmount) {
                const minAmount = {}
                minAmount.amount = validation.minAmount.amount || validation.minAmount
                minAmount.message = validation.minAmount.message
                if (value && parseFloat(value) < minAmount.amount) {
                    setHasError(true)
                    setErrorText(minAmount.message)
                    return
                }
            }

            if (validation.maxAmount) {
                const maxAmount = {}
                maxAmount.amount = validation.maxAmount.amount || validation.maxAmount
                maxAmount.message = validation.maxAmount.message
                if (value && parseFloat(value) > maxAmount.amount) {
                    setHasError(true)
                    setErrorText(maxAmount.message)
                    return
                }
            }
        }
    }, [validation, value])

    return [
        hasError,
        errorText
    ]
}

export default useValidation
