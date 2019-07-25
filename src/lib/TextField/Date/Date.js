import React from 'react'
import DatePicker from "react-datepicker";
import TextField from '../TextField'

import 'react-datepicker/dist/react-datepicker.css';
import './Date.scss'

const Date = ({ setRef, options, value, readOnly, ...props }) => {
    return (
        <TextField
            {...props}
            value={value}
            readOnly={readOnly}
            inputElement={props =>
                <DatePicker
                    {...props}
                    selected={props.value}
                />
            }
        />
    )
}

export default Date
