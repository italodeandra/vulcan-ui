import React, { useEffect } from 'react'
import { Button, useSnackbar } from '../lib'
import useTitle from './useTitle'

const SnackbarDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Snackbar'))
    const [showSnackbar] = useSnackbar()

    const handleButtonClick = () => {
        const snackbar = showSnackbar('Test snackbar message', Infinity, 'Action')
        setTimeout(() => {
            snackbar.close()
        }, 5000)
    }

    return (
        <>
            <h1>Snackbar</h1>
            <div>
                <Button onClick={handleButtonClick}>Show a snackbar</Button>
            </div>
            <pre>{`const [showSnackbar] = useSnackbar()

showSnackbar('Test snackbar message')

showSnackbar('Test snackbar message', Infinity)

const snackbar = showSnackbar('Test snackbar message', Infinity, 'Action')
setTimeout(() => {
    snackbar.close()
}, 5000)`}</pre>
        </>
    )
}

export default SnackbarDemo
