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
                    value={test}
                    onChange={setTest}
                    helperText='This is a helper text'
                    validation={{
                        required: 'Please fill this field',
                        maxLength: 3
                    }}
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
