import React, { useEffect, useState } from 'react'
import { PrettyJson, TextField } from '../lib/index'
import useTitle from './useTitle'

const TextFieldChipsDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Text field Chips'))

    const [test, setTest] = useState(null)

    return (
        <>
            <h1>Text field</h1>
            <>
                <h2>Chips</h2>
                <TextField.Chips
                    label='Test'
                    name='test'
                    value={test}
                    onChange={setTest}
                    validation={{
                        required: 'Please select an item'
                    }}
                    autocompleteConfig={{
                        request: {
                            url: 'https://jsonplaceholder.typicode.com/users',
                            data: ({ query }) => ({ name: query ? query : undefined })
                        },
                        itemTranspile: (i) => `${i.name} - ${i.id}`,
                        itemCompare: (i1, i2) => (i1.id === i2.id)
                    }}
                />
                <PrettyJson label='state' json={test}/>
            </>
            <pre>{``}</pre>
        </>
    )
}

export default TextFieldChipsDemo
