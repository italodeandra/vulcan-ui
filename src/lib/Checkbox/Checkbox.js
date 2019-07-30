import React from "react"
import "./Checkbox.scss"

const Checkbox = ({ id, label, onChange }) => {
    return (
        <div className="vui-Checkbox">
            <input id={id} type="checkbox" onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox