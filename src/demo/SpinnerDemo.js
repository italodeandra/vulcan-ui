import React from 'react'
import { Spinner } from '../lib'
import useTitle from './useTitle'

const SpinnerDemo = () => {
    useTitle('Spinner')

    return (
        <div className='component'>
            <h2>Spinner</h2>
            <p>
                <Spinner />
            </p>
            <pre>{`<Spinner />`}</pre>
        </div>
    )
}

export default SpinnerDemo
