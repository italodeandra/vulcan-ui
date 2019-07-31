import React from "react"
import "./Checkbox.sass"

const Checkbox = ({ id, label, onChange, ...props }) => {

    const handleChange = () => {
        onChange && onChange()
    }

    return (
        <div className="vui-Checkbox">
            <input id={id} type="checkbox" onChange={handleChange} {...props} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox