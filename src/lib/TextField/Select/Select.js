import React from 'react'
import TextField from '../TextField'

const Select = ({ setRef, options, value, ...props }) => {
    value = typeof value === 'string' ? value : JSON.stringify(value)

    return (
        <TextField
            {...props}
            inputElement={props =>
                <select
                    {...props}
                    value={value}
                >
                    <option />
                    {options && options.map((o, i) => (
                        <option value={o.value} key={i.toString() + o.value}>{o.label}</option>
                    ))}
                </select>
            }
        />
    )
}

export default Select
