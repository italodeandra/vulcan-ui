import React from "react"
import "./Switch.sass"

const Switch = ({ id, label, onChange }) => {

    return (
        <div className="vui-Switch">
            <input id={id} type="checkbox" onClick={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Switch