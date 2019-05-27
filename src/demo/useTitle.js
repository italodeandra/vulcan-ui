import { createSharedStateHook } from '../lib/index'

const initialState = 'Vulcan UI'

const userSharedStateHook = createSharedStateHook(initialState)

function useUser() {
    const [title, setTitle] = userSharedStateHook()

    return [
        title,
        setTitle
    ]
}

export default useUser
