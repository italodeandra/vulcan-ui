import createSharedStateHook from '../Utils/createSharedStateHook'

const initialState = []

const useSnackbarsSharedState = createSharedStateHook(initialState)

let snackbarIndex = 0

const useSnackbar = () => {
    const [snackbars, setSnackbars, snackbarRef] = useSnackbarsSharedState()

    const closeSnackbar = (snackbar) => {
        const newSs = [...snackbarRef.value]
        newSs.splice(newSs.findIndex(s => s.id === snackbar.id), 1)
        setSnackbars(newSs)
    }

    const showSnackbar = (message, delay, action) => {
        const newSnackbars = [...snackbars]
        const newSnackbar = { id: ++snackbarIndex, message, action }
        newSnackbar.close = () => closeSnackbar(newSnackbar)
        newSnackbars.push(newSnackbar)
        setSnackbars(newSnackbars)
        if (delay !== Infinity) {
            setTimeout(() => {
                closeSnackbar(newSnackbar)
            }, delay || 5000)
        }
        return newSnackbar
    }

    return [
        showSnackbar,
        snackbars
    ]
}

export default useSnackbar
