import React, { useEffect, useState } from 'react'
import { Button, Icon, TextField } from '../lib/index'
import useTitle from './useTitle'

const TextFielDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Text field'))

    const [test1, setTest1] = useState(null)
    const [test2, setTest2] = useState(null)
    const [test3, setTest3] = useState(null)
    const [test4, setTest4] = useState(null)

    return (
        <div className='demo'>
            <h2>Text field</h2>
            <div className='subdemo'>
                <p><strong>Normal text</strong></p>
                <div>
                    <TextField
                        hiddenAutocomplete
                        label='Test 1'
                        name='test1'
                        value={test1}
                        onChange={setTest1}
                        helperText='This is a helper text'
                        validation={{
                            required: 'Please fill this field',
                            minLength: {
                                length: 3,
                                message: 'Fill with at least 3 characters'
                            },
                            maxLength: 6
                        }}
                        suffix={
                            <Button icon onClick={() => alert('Button clicked')}>
                                <Icon name='home' />
                            </Button>
                        }
                    />
                    <pre>
                        state: {test1}
                    </pre>
                </div>
                <pre>{`<TextField
    label='Test 1'
    name='test1'
    value='{test1}'
    onChange={setTest1}
    helperText='This is a helper text'
    validation='{{'
        required: 'Please fill this field',
        minLength: {
            length: 3,
            message: 'Fill with at least 3 characters'
        },
        maxLength: 6
    }}
/>`}</pre>
            </div>
            <div className='subdemo'>
                <p><strong>Integer</strong></p>
                <div>
                    <TextField.Number
                        label='Integer'
                        name='test2'
                        value={test2}
                        onChange={setTest2}
                        helperText='This is a helper text'
                        validation={{
                            required: 'Please fill this field',
                            minAmount: {
                                amount: 50000,
                                message: 'Fill with more than or equal 50.000,00'
                            }
                        }}
                    />
                    <pre>
                        state: {test2}
                    </pre>
                </div>
                <pre>{`<TextField.Number
    label='Integer'
    name='test2'
    value='{test2}'
    onChange={setTest2}
    helperText='This is a helper text'
    validation='{{'
        required: 'Please fill this field',
        minAmount: {
            amount: 50000,
            message: 'Fill with more than or equal 50.000,00'
        }
    }}
/>`}</pre>
            </div>
            <div className='subdemo'>
                <p><strong>Decimal</strong></p>
                <div>
                    <TextField.Number
                        label='Decimal'
                        name='test3'
                        value={test3}
                        onChange={setTest3}
                        helperText='This is a helper text'
                        validation={{
                            required: 'Please fill this field',
                            maxAmount: 9859962.50
                        }}
                        maskConfig={{ decimal: true }}
                    />
                    <pre>
                        state: {test3}
                    </pre>
                </div>
                <pre>{`<TextField.Number
    label='Decimal'
    name='test3'
    value='{test3}'
    onChange={setTest3}
    helperText='This is a helper text'
    validation='{{'
        required: 'Please fill this field',
        maxAmount: 9859962.50
    }}
    maskConfig={{ decimal: true }}
/>`}</pre>
            </div>
            <div className='subdemo'>
                <p><strong>Money</strong></p>
                <div>
                    <TextField.Number
                        label='Money'
                        name='test4'
                        value={test4}
                        onChange={setTest4}
                        helperText='This is a helper text'
                        validation={{
                            required: 'Please fill this field',
                            maxAmount: 9859962.50
                        }}
                        maskConfig={{ money: true }}
                    />
                    <pre>
                        state: {test4}
                    </pre>
                </div>
                <pre>{`<TextField.Number
    label='Money'
    name='test4'
    value='{test4}'
    onChange={setTest4}
    helperText='This is a helper text'
    validation='{{'
        required: 'Please fill this field',
        maxAmount: 9859962.50
    }}
    maskConfig={{ money: true }}
/>`}</pre>
            </div>
        </div>
    )
}

export default TextFielDemo
