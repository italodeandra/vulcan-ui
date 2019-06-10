import React from 'react'
import TextField from '../TextField'

const Autosize = ({ setRef, ...props }) => {
    const handleKeyUp = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 1 + 'px'
    }

    return (
        <TextField
            {...props}
            onInput={handleKeyUp}
            inputElement={props => <textarea rows='2' {...props} />}
        />
    )
}

export default Autosize
