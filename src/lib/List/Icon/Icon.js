import React from "react";
import classNames from "../../Utils/classNames";
import "./Icon.sass"

const Icon = ({ children, right }) => {

    const className = classNames(
        "vui-ListItem-Icon",
        right && "right"
    );


    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Icon;