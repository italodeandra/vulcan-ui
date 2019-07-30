import React from "react"
import "./RadioButton.sass"

const RadioButton = ({ id, name, label, onChange }) => {

    return (
        <div className="vui-RadioButton">
            <input id={id} name={name} type="radio" onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default RadioButton