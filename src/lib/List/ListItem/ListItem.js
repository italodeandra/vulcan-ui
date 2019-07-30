import React, {useRef} from "react";
import classNames from "../../Utils/classNames";

import "./ListItem.sass"

const ListItem = ({ children, onClick }) => {

    const ref = useRef(null)
    const className = classNames(
        "vui-ListItem",
        onClick && "link"
    )

    function handleClick() {
        ref.current.blur()
        onClick && onClick()
    }

    return (
        <div ref={ref} className={className} onClick={handleClick} tabIndex={onClick ? "0" : undefined}>
            {children}
        </div>
    );
}

export default ListItem;