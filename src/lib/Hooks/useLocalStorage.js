import { useState } from 'react'
import { useDeepCompareEffect } from '../index'

const useLocalStorage = (name, initialValue) => {
    if (!localStorage.getItem(name) && initialValue) {
        localStorage.setItem(name, JSON.stringify(initialValue))
    }

    const [state, setState] = useState(JSON.parse(localStorage.getItem(name)))

    useDeepCompareEffect(() => {
        localStorage.setItem(name, JSON.stringify(state))
    }, [state])

    return [
        state,
        setState
    ]
}

export default useLocalStorage
