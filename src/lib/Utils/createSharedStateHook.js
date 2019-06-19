import { useEffect, useState } from 'react'

function createSharedStateHook(initialState) {
    let state = initialState
    const listeners = []

    function useSharedState() {
        const [sharedState, setSharedState] = useState(state)

        const setAllStates = (newState) => {
            state = newState
            listeners.forEach(setState => setState(state))
        }

        useEffect(() => {
            listeners.push(setSharedState)

            return () => {
                listeners.splice(listeners.indexOf(setSharedState), 1)
            }
        }, [])

        return [
            sharedState,
            setAllStates
        ]
    }

    return useSharedState
}

export default createSharedStateHook
