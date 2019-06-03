import React, { useEffect } from 'react'
import { Spinner } from '../lib'
import useTitle from './useTitle'

const SpinnerDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Spinner'))

    return (
        <div className='component'>
            <h2>Spinner</h2>
            <div>
                <Spinner />
            </div>
            <pre>{`<Spinner />`}</pre>
        </div>
    )
}

export default SpinnerDemo
