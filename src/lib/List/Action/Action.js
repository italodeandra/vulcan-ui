import React from "react"
import classNames from "../../Utils/classNames";
import "./Action.sass"

const Action = ({ children, right }) => {

    const className = classNames(
        "vui-List-Action",
        right && "right"
    );


    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Action;