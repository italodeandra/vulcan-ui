import React from 'react'
import TextField from '../TextField'

const Select = ({ setRef, options, value, readOnly, ...props }) => {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value)

    return (
        <TextField
            {...props}
            value={value}
            readOnly={readOnly}
            inputElement={props =>
                <select
                    {...props}
                    value={stringValue}
                >
                    <option disabled={readOnly} />
                    {options && options.map((o, i) => (
                        <option
                            key={i.toString() + o.value}
                            value={o.value}
                            disabled={readOnly}
                        >{o.label}</option>
                    ))}
                </select>
            }
        />
    )
}

export default Select
