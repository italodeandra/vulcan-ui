import React, { useEffect, useState } from 'react'
import { TextField } from '../lib/index'
import useTitle from './useTitle'

const AutocompleteDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Autocomplete'))

    const [test, setTest] = useState(null)

    const handleItemSelect = (item) => {
        console.info(`You selected ${JSON.stringify(item)}`)
    }

    return (
        <>
            <h1>Text field</h1>
            <>
                <h2>Autocomplete</h2>
                <TextField.Autocomplete
                    label='Test'
                    name='test'
                    value={test}
                    onChange={setTest}
                    validation={{
                        required: 'Please select an item'
                    }}
                    autocompleteConfig={{
                        // request: ({ query, page }) => `http://localhost:8080?query=${query}&page=${page}`,
                        // request: 'http://localhost:8080?query=&page=0',
                        request: {
                            url: 'https://jsonplaceholder.typicode.com/users',
                            // method: 'post', // default "get"
                            // data: { query: '', page: 0 }
                            data: ({ query }) => ({ name: query ? query : undefined })
                            // headers: {
                            //     Authorization: 'Bearer 1'
                            // }
                        },
                        itemTranspile: (i) => `${i.name} - ${i.id}`,
                        valueTranspile: (v) => v.name
                    }}
                    onItemSelect={handleItemSelect}
                    // keepValue // value doesn't clear on blur
                />
                <pre>state: {test}</pre>
            </>
            <pre>{`<TextField.Autocomplete
    label='Test'
    name='test'
    value={test}
    onChange={setTest}
    validation={{
        required: 'Please select an item'
    }}
    autocompleteConfig={{
        // request: ({ query, page }) => \`http://localhost:8080?query=\${query}&page=\${page}\`,
        // request: 'http://localhost:8080?query=&page=0',
        request: {
            url: 'https://jsonplaceholder.typicode.com/users',
            // method: 'post', // default "get"
            // data: { query: '', page: 0 }
            data: ({ query }) => ({ name: query ? query : undefined })
            // headers: {
            //     Authorization: 'Bearer 1'
            // }
        },
        itemTranspile: (i) => \`\${i.name} - \${i.id}\`,
        valueTranspile: (v) => v.name
    }}
    onItemSelect={handleItemSelect}
    // keepValue // value doesn't clear on blur
/>`}</pre>
        </>
    )
}

export default AutocompleteDemo
