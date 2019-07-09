import { useEffect } from 'react'
import { useDeepCompareEffect } from '../index'
import createSharedStateHook from '../Utils/createSharedStateHook'

const localStorageSharedState = {}

const useLocalStorage = (name, initialValue) => {
    if (!localStorage.getItem(name) && initialValue) {
        localStorage.setItem(name, JSON.stringify(initialValue))
    }

    if (!localStorageSharedState[name]) {
        localStorageSharedState[name] = createSharedStateHook(JSON.parse(localStorage.getItem(name)))
    }

    const [state, setState] = localStorageSharedState[name]()

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
