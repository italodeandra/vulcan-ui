import React, {useEffect, useState} from 'react'
import {TextField} from '../lib/index'
import useTitle from './useTitle'

const TextFieldDateDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Text field Date'))

    const [test, setTest] = useState(null)

    const setHours = () => {}
    const setMinutes = () => {}

    return (
        <>
            <>
                <h2>Date Default</h2>
                <div>
                    <TextField.Date
                        label='Test'
                        name='test'
                        value={test}
                        onChange={setTest}
                        required
                    />
                    <pre>
                    state: {JSON.stringify(test)}
                </pre>
                </div>
                <pre>{`<TextField.Date
    label='Test 8'
    name='test'
    value={test}
    onChange={setTest}
    required
/>`}</pre>
            </>
            <>
                <h2>Date Select Time</h2>
                <div>
                    <TextField.Date
                        label='Test'
                        name='test'
                        value={test}
                        onChange={setTest}
                        required
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                    />
                    <pre>
                    state: {JSON.stringify(test)}
                </pre>
                </div>
                <pre>{`<TextField.Date
    label='Test 8'
    name='test'
    value={test}
    onChange={setTest}
    showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="MMMM d, yyyy h:mm aa"
    timeCaption="time"
    required
/>`}</pre>
            </>
            <>
                <h2>Date Only Time</h2>
                <div>
                    <TextField.Date
                        label='Test'
                        name='test'
                        value={test}
                        onChange={setTest}
                        required
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="h:mm aa"
                        timeCaption="Time"
                    />
                    <pre>
                    state: {JSON.stringify(test)}
                </pre>
                </div>
                <pre>{`<TextField.Date
    label='Test 8'
    name='test'
    value={test}
    onChange={setTest}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    dateFormat="h:mm aa"
    timeCaption="Time"
    required
/>`}</pre>
            </>
            <>
                <h2>Date Specific Time Range</h2>
                <div>
                    <TextField.Date
                        label='Test'
                        name='test'
                        value={test}
                        onChange={setTest}
                        required
                        showTimeSelect
                        minTime={setHours(setMinutes(new Date(), 0), 17)}
                        maxTime={setHours(setMinutes(new Date(), 30), 20)}
                        dateFormat="MMMM d, yyyy"
                    />
                    <pre>
                    state: {JSON.stringify(test)}
                </pre>
                </div>
                <pre>{`<TextField.Date
    label='Test 8'
    name='test'
    value={test}
    onChange={setTest}
    showTimeSelect
  minTime={setHours(setMinutes(new Date(), 0), 17)}
  maxTime={setHours(setMinutes(new Date(), 30), 20)}
  dateFormat="MMMM d, yyyy"
    required
/>`}</pre>
            </>

            <>
                <h2>Date Custom date format</h2>
                <div>
                    <TextField.Date
                        label='Test'
                        name='test'
                        value={test}
                        onChange={setTest}
                        required
                        dateFormat="yyyy/MM/dd"
                    />
                    <pre>
                    state: {JSON.stringify(test)}
                </pre>
                </div>
                <pre>{`<TextField.Date
    label='Test 8'
    name='test'
    value={test}
    onChange={setTest}
    dateFormat="yyyy/MM/dd"
    required
/>`}</pre>
            </>

            <>
                <h2>More examples</h2>
                <p>

                    You can see more examples through this link <a href="https://reactdatepicker.com/" rel="noopener noreferrer" target="_blank">click here</a>. <br />
                    To use another example, just copy and paste props on the <b>{"<TextField.Date>"}</b> component
                </p>
            </>
        </>
    )
}

export default TextFieldDateDemo
