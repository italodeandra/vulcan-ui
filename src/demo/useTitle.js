import { createSharedStateHook } from '../lib/index'

const initialState = ''

const userSharedStateHook = createSharedStateHook(initialState)

function useTitle() {
    const [title, setTitle] = userSharedStateHook()

    return [
        title,
        setTitle
    ]
}

export default useTitle
