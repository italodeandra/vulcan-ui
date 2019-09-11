import React, { useRef, useState } from 'react'
import classNames from '../../Utils/classNames'

import './ListItem.sass'

const ListItem = ({ children, onClick, selectable, ...props }) => {

    const ref = useRef(null)
    const [active, setActive] = useState("")
    const className = classNames(
        "vui-ListItem",
        onClick && "link",
        active && "active",
        props.active && "active"
    )

    function handleClick(e) {
        ref.current.blur()

        if(selectable) {
            setActive(!active)
        }

        onClick && onClick(e)
    }

    delete props.active

    return (
        <div
            ref={ref}
            className={className}
            onClick={handleClick}
            tabIndex={onClick ? '0' : undefined}
            {...props}
        >
            {children}
        </div>
    );
}

export default ListItem;
