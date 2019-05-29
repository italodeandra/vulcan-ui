import React, { useState } from 'react'
import { TextField } from '../lib/index'
import useTitle from './useTitle'

const AutocompleteDemo = () => {
    useTitle('Autocomplete')
    const [test, setTest] = useState(null)

    const handleItemSelect = (item) => {
        alert(`You selected ${JSON.stringify(item)}`)
    }

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
                        required: 'Please select an user'
                    }}
                    autocompleteConfig={{
                        endpoint: ({ page }) => `http://localhost:8080?page=${page}`,
                        itemTranspile: (i) => `${i.name} - ${i.id}`,
                        valueTranspile: (v) => v.name
                    }}
                    onItemSelect={handleItemSelect}
                />
                <pre>state: {test}</pre>
            </div>
            <pre>{``}</pre>
        </div>
    )
}

export default AutocompleteDemo
