import React, { useState, useEffect } from 'react'
import { TextField } from '../lib/index'
import useTitle from './useTitle'

const AutocompleteDemo = () => {
    useTitle('Autocomplete')
    const [test, setTest] = useState(null)

    const handleItemSelect = (item) => {
        console.info(`You selected ${JSON.stringify(item)}`)
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
                        required: 'Please select an item'
                    }}
                    autocompleteConfig={{
                        // request: ({ query, page }) => `http://localhost:8080?query=${query}&page=${page}`,
                        // request: 'http://localhost:8080?query=&page=0',
                        request: {
                            url: 'https://jsonplaceholder.typicode.com/users',
                            // method: 'post',
                            // data: { query: '', page: 0 },
                            data: ({ query }) => ({ query: query ? query : undefined }),
                            // headers: {
                            //     Authorization: 'Bearer 1'
                            // }
                        },
                        itemTranspile: (i) => `${i.name} - ${i.id}`,
                        valueTranspile: (v) => v.name
                    }}
                    onItemSelect={handleItemSelect}
                    // keepValue
                />
                <pre>state: {test}</pre>
            </div>
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
            // method: 'post',
            // data: { query: '', page: 0 },
            data: ({ query }) => ({ query: query ? query : undefined }),
            // headers: {
            //     Authorization: 'Bearer 1'
            // }
        },
        itemTranspile: (i) => \`\${i.name} - \${i.id}\`,
        valueTranspile: (v) => v.name
    }}
    onItemSelect={handleItemSelect}
    // keepValue
/>`}</pre>
        </div>
    )
}

export default AutocompleteDemo
