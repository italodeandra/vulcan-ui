import { useEffect, useState } from 'react'

function useValidation(value, validation) {
    const [errorText, setErrorText] = useState(null)

    useEffect(() => {
        setErrorText(null)

        if (validation) {
            if (validation.required) {
                if (!value) {
                    setErrorText(validation.required.message || validation.required)
                    return
                }
            }

            if (validation.maxLength) {
                const maxLength = {}
                maxLength.length = validation.maxLength.length || validation.maxLength
                maxLength.message = validation.maxLength.message || (`${value.length}/${maxLength.length}`)
                if (value && value.length > maxLength.length) {
                    setErrorText(maxLength.message)
                    return
                }
            }
        }
    }, [validation, value])

    return [
        !!errorText,
        errorText
    ]
}

export default useValidation
