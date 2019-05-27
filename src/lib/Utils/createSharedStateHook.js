import { useEffect, useState } from 'react'

function createSharedStateHook(initialState) {
    let state = initialState
    const listeners = []

    function useSharedState() {
        const [sharedState, setSharedState] = useState(state)

        useEffect(() => {
            listeners.push(setSharedState)

            return () => {
                listeners.splice(listeners.indexOf(setSharedState), 1)
            }
        }, [])

        return [
            sharedState,
            setUserAll
        ]
    }

    function setUserAll(nextState) {
        state = nextState
        listeners.forEach(setState => setState(nextState))
    }

    return useSharedState
}

export default createSharedStateHook
