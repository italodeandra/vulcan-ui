import React, { useEffect } from 'react'
import { Spinner } from '../lib'
import useTitle from './useTitle'

const SpinnerDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Spinner'))

    return (
        <>
            <h1>Spinner</h1>
            <div>
                <Spinner />
            </div>
            <pre>{`<Spinner />`}</pre>
        </>
    )
}

export default SpinnerDemo
