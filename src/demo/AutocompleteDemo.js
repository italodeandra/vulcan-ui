import React, { useState } from 'react'
import { TextField } from '../lib/index'
import useTitle from './useTitle'

const AutocompleteDemo = () => {
    useTitle('Autocomplete')
    const [test, setTest] = useState(null)

    return (
        <div className='demo'>
            <h2>Autocomplete</h2>
            <div>
                <TextField.Autocomplete
                    label='Test'
                    name='test'
                    value={test}
                    onChange={setTest}
                    validation={{
                        required: 'Please fill this field'
                    }}
                />
                <pre>state: {test}</pre>
            </div>
            <pre>{``}</pre>
        </div>
    )
}

export default AutocompleteDemo
