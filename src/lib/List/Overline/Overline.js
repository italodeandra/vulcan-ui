import React from "react"
import "./Overline.sass"

const Overline = ({ children }) => {
    return (
        <div className="vui-ListItem-Overline">{children}</div>
    );
}

export default Overline;