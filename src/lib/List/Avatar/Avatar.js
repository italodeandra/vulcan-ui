import React from "react"
import classNames from "../../Utils/classNames";
import "./Avatar.sass"

const Avatar = ({ children, circle, large, right }) => {

    const className = classNames(
      "vui-ListItem-Avatar",
        circle && "circle",
        large && "large",
        right && "right"
    );

    return (
        <div className={className}>{children}</div>
    );
}

export default Avatar;