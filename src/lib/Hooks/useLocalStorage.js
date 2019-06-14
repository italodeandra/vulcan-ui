import { useEffect, useMemo } from 'react'
import { useDeepCompareEffect } from '../index'
import createSharedStateHook from '../Utils/createSharedStateHook'

const useLocalStorage = (name, initialValue) => {
    if (!localStorage.getItem(name) && initialValue) {
        localStorage.setItem(name, JSON.stringify(initialValue))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const useSharedState = useMemo(() => createSharedStateHook(JSON.parse(localStorage.getItem(name))), [])

    const [state, setState] = useSharedState()

    useEffect(() => {
        setState(JSON.parse(localStorage.getItem(name)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useDeepCompareEffect(() => {
        localStorage.setItem(name, JSON.stringify(state))
    }, [state])

    return [
        state,
        setState
    ]
}

export default useLocalStorage
