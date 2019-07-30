import React from "react"
import "./Subtitle.sass"

const Subtitle = ({ children }) => {
    return (
        <h2 className="vui-ListItem-Subtitle">{children}</h2>
    );
}

export default Subtitle;