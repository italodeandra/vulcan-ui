import React, {useEffect} from 'react'
import useTitle from './useTitle'
import {Checkbox, RadioButton, Switch} from '../lib'

const SelectionControlsDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Selection Controls'))

    function handleChange(e) {
        return
    }

    return (
        <>
            <>
                <h1>Checkbox</h1>
                <div>
                    <Checkbox label="checked?" name="checkbox" id="checkbox" onChange={handleChange} />
                </div>
                <pre>{`<Checkbox label="checked?" name="checkbox" id="checkbox" onChange={handleChange} />`}</pre>
            </>

            <>
                <h1>Radio Button</h1>
                <div>
                    <RadioButton label="True" name="radio" id="radiobutton" onChange={handleChange} />
                    <RadioButton label="False" name="radio" id="radiobutton2" onChange={handleChange} />
                </div>
                <pre>{`<RadioButton label="True" name="radio" id="radiobutton" onChange={handleChange} />
<RadioButton label="False" name="radio" id="radiobutton2" onChange={handleChange} />`}</pre>
            </>

            <>
                <h1>Switch</h1>
                <div>
                    <Switch label="Change value" name="switch" id="switch" onChange={handleChange} />
                </div>
                <pre>{`<Switch label="Change value" name="switch" id="switch" onChange={handleChange} />`}</pre>
            </>
        </>
    )
}

export default SelectionControlsDemo
