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
        }
    }, [validation, value])

    return [
        !!errorText,
        errorText
    ]
}

export default useValidation
