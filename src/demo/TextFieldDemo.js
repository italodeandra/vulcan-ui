import React, { useEffect, useState } from 'react'
import { TextField } from '../lib/index'
import useTitle from './useTitle'

const TextFielDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Text field'))

    const [test1, setTest1] = useState(null)
    const [test2, setTest2] = useState(null)
    const [test3, setTest3] = useState(null)
    const [test4, setTest4] = useState(null)

    return (
        <>
            <h1>Text field</h1>
            <>
                <h2>Normal text</h2>
                <div>
                    <TextField
                        // hidden // used for autofill
                        label='Test 1'
                        name='identifier'
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
                        // suffix={
                        //     <Button icon onClick={() => alert('Button clicked')}>
                        //         <Icon name='home' />
                        //     </Button>
                        // }
                    />
                    <TextField
                        // hidden // used for autofill
                        label='Password'
                        name='password'
                        type='password'
                        value={test2}
                        onChange={setTest2}
                        helperText='This is a helper text'
                        validation={{
                            required: 'Please fill this field',
                            minLength: {
                                length: 3,
                                message: 'Fill with at least 3 characters'
                            },
                            maxLength: 6
                        }}
                        // suffix={
                        //     <Button icon onClick={() => alert('Button clicked')}>
                        //         <Icon name='home' />
                        //     </Button>
                        // }
                    />
                    <pre>
                        state: {test1}
                    </pre>
                </div>
                <pre>{`<TextField
    // hidden // used for autofill
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
    // suffix={
    //     <Button icon onClick={() => alert('Button clicked')}>
    //         <Icon name='home' />
    //     </Button>
    // }
/>`}</pre>
            </>
            <>
                <h2>Integer</h2>
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
            </>
            <>
                <h2>Decimal</h2>
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
            </>
            <>
                <h2>Money</h2>
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
                        maskConfig={{ money: true, prefix: 'R$' }}
                    />
                    <pre>
                        state: {test4}
                    </pre>
                </div>
                <pre>{`<TextField.Number
    label='Money'
    name='test4'
    value={test4}
    onChange={setTest4}
    helperText='This is a helper text'
    validation={{
        required: 'Please fill this field',
        maxAmount: 9859962.50
    }}
    maskConfig={{ money: true, prefix: 'R$' }}
/>`}</pre>
            </>
        </>
    )
}

export default TextFielDemo
