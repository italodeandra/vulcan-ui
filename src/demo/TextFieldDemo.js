import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, TextField } from '../lib/index'
import useTitle from './useTitle'

const TextFieldDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Text field'))

    const [test1, setTest1] = useState(null)
    const [test2, setTest2] = useState(null)
    const [test3, setTest3] = useState(null)
    const [test4, setTest4] = useState(null)
    const [test5, setTest5] = useState(null)
    const [test6, setTest6] = useState(null)
    const [test7, setTest7] = useState(null)
    const [test8, setTest8] = useState(null)

    const customErrorFieldRef = useRef(null)

    const handleCustomErrorClick = () => {
        // noinspection JSUnresolvedFunction
        customErrorFieldRef.current.setCustomErrorMessage('Test custom error message')
    }

    const handleFormSubmit = (f) => {
        const isInvalid = f.isInvalid()
        if (isInvalid) {
            isInvalid.focusFirstInvalid()
        } else {
            console.info('Form is valid')
        }
    }

    return (
        <>
            <h1>Text field</h1>
            <>
                <h2>Normal text</h2>
                <div>
                    <TextField
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
                                message: 'Fill with more than or equal 50000'
                            }
                        }}
                        maskConfig={{ allowNegative: true }}
                    />
                    <pre>
                        state: {test2}
                    </pre>
                </div>
                <pre>{`<TextField.Number
    label='Integer'
    name='test2'
    value={test2}
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
    value={test3}
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
                        maskConfig={{ money: true, prefix: 'R$', decimal: 5 }}
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
    validation='{{'
        required: 'Please fill this field',
        maxAmount: 9859962.50
    }}
    maskConfig={{ money: true, prefix: 'R$' }}
/>`}</pre>
            </>
            <>
                <h2>Custom error</h2>
                <div>
                    <TextField
                        setRef={customErrorFieldRef}
                        label='Custom error'
                        name='test5'
                        value={test5}
                        onChange={setTest5}
                    />
                    <br />
                    <Button onClick={handleCustomErrorClick}>Set custom error</Button>
                </div>
                <pre>{`const customErrorFieldRef = useRef(null)

const handleCustomErrorClick = () => {
    customErrorFieldRef.current.setCustomErrorMessage('Test custom error message')
}

<TextField
    setRef={customErrorFieldRef}
    label='Custom error'
    name='test5'
    value={test5}
    onChange={setTest5}
/>
<br />
<Button onClick={handleCustomErrorClick}>Set custom error</Button>`}</pre>
            </>
            <>
                <h2>Form</h2>
                <div>
                    <Form onSubmit={handleFormSubmit}>
                        <TextField
                            label='Test 6'
                            name='test6'
                            value={test6}
                            onChange={setTest6}
                            validation={{
                                minLength: {
                                    length: 3,
                                    message: 'Fill with at least 3 characters'
                                }
                            }}
                        />
                        <br />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
                <pre>{`const handleFormSubmit = (f) => {
    const isInvalid = f.isInvalid()
    if (isInvalid) {
        isInvalid.focusFirstInvalid()
    } else {
        console.info('Form is valid')
    }
}

<Form onSubmit={handleFormSubmit}>
    <TextField
        label='Test 6'
        name='test6'
        value={test6}
        onChange={setTest6}
        validation={{
            minLength: {
                length: 3,
                message: 'Fill with at least 3 characters'
            }
        }}
    />
    <br />
    <Button type='submit'>Submit</Button>
</Form>`}</pre>
            </>
            <>
                <h2>Autosize</h2>
                <div>
                    <TextField.Autosize
                        label='Test 7'
                        name='test7'
                        value={test7}
                        onChange={setTest7}
                    />
                    <pre>
                        state: {test7}
                    </pre>
                </div>
                <pre>{`<TextField.Autosize
    label='Test 7'
    name='test7'
    value={test7}
    onChange={setTest7}
/>`}</pre>
            </>
            <>
                <h2>Select</h2>
                <div>
                    <TextField.Select
                        label='Test 8'
                        name='test8'
                        value={JSON.parse(test8 ? test8.toString() : 'null')}
                        onChange={setTest8}
                        options={[
                            { label: 'Test A', value: true },
                            { label: 'Test B', value: false }
                        ]}
                        required
                    />
                    <pre>
                        state: {JSON.stringify(test8)}
                    </pre>
                </div>
                <pre>{`<TextField.Select
    label='Test 8'
    name='test8'
    value={test8}
    onChange={setTest8}
    options={[
        { label: 'Test A', value: 'A' },
        { label: 'Test B', value: 'B' }
    ]}
    required
/>`}</pre>
            </>
        </>
    )
}

export default TextFieldDemo
