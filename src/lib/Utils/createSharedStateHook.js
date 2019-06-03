import _isEqual from 'lodash.isequal'
import { useEffect, useState } from 'react'
import { useDeepCompareEffect } from '../index'

function createSharedStateHook(initialState) {
    let state = initialState
    const listeners = []

    function useSharedState() {
        const [sharedState, setSharedState] = useState(state)
        const [innerState, setInnerState] = useState(state)

        useEffect(() => {
            listeners.push(setSharedState)

            return () => {
                listeners.splice(listeners.indexOf(setSharedState), 1)
            }
        }, [])

        useDeepCompareEffect(() => {
            if (!_isEqual(innerState, sharedState)) {
                state = innerState
                listeners.forEach(setState => setState(state))
            }
        }, [innerState])

        return [
            sharedState,
            setInnerState
        ]
    }

    return useSharedState
}

export default createSharedStateHook
