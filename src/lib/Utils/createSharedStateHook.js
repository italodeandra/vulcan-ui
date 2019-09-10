import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function createSharedStateHook(initialState) {
  let state = initialState
  const listeners = []
  const stateRef = {}

  function useSharedState() {
    const [sharedState, setSharedState] = useState(state)
    const ready = useRef(false)

    useLayoutEffect(() => {
      ready.current = true
      setTimeout(() => {
        listeners.forEach(setState => setState(state))
      }, 100)
    }, [])

    const setAllStates = (newState) => {
      if (ready.current) {
        state = newState
        stateRef.value = state
        listeners.forEach(setState => setState(state))
      }
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
