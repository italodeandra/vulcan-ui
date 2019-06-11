import React, { useEffect, useRef } from 'react'

const Form = ({ children, onSubmit, setRef }) => {
    const ref = useRef(null)

    useEffect(() => {
        if (setRef) {
            setRef.current = {
                element: ref.current,
                isInvalid: checkIfIsInvalid
            }
        }
    }, [setRef])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit && onSubmit({
            element: ref.current,
            isInvalid: checkIfIsInvalid
        })
    }

    const checkIfIsInvalid = () => {
        const firstInvalid = ref.current.querySelector('.vui-Field.has-error .input')
        if (firstInvalid) {
            return {
                focusFirstInvalid: () => {
                    firstInvalid.focus()
                }
            }
        } else {
            return null
        }
    }

    return (
        <form onSubmit={handleSubmit} ref={ref}>
            {children}
        </form>
    )
}

export default Form
