import { useEffect, useState } from 'react'

function createSharedStateHook(initialState) {
    let state = initialState
    const listeners = []
    const stateRef = {}

    function useSharedState() {
        const [sharedState, setSharedState] = useState(state)

        const setAllStates = (newState) => {
            state = newState
            stateRef.value = state
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
            setAllStates,
            stateRef
        ]
    }

    return useSharedState
}

export default createSharedStateHook
