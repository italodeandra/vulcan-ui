import { useEffect } from 'react'

import { createSharedStateHook } from '../lib/index'

const initialState = ''

const userSharedStateHook = createSharedStateHook(initialState)

function useUser(nextTitle) {
    const [title, setTitle] = userSharedStateHook()

    useEffect(() => {
        if (nextTitle) setTitle(nextTitle)
    })

    return [
        title,
        setTitle
    ]
}

export default useUser
