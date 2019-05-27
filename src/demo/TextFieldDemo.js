import React, { useEffect, useState } from 'react'
import { TextField } from '../lib/index'
import useTitle from './useTitle'

const TextFielDemo = () => {
    const [, setTitle] = useTitle()
    const [test, setTest] = useState(null)

    useEffect(() => {
        setTitle('Text field')
    }, [setTitle])

    return (
        <div className='demo'>
            <h2>Text field</h2>
            <div>
                <TextField
                    label='Teste'
                    name='test'
                    onChange={setTest}
                />
                <div>
                    {test}
                </div>
            </div>
            <pre>{``}</pre>
        </div>
    )
}

export default TextFielDemo
