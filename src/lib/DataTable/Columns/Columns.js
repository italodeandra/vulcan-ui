import React, { useContext, useLayoutEffect, useRef } from 'react'
import { classNames } from '../..';

import SearchRow from '../SearchRow/SearchRow'
import { Context } from '../DataTable';

import "./Columns.sass"

const Columns = ({ children, sticky }) => {

    const {isSearchActive} = useContext(Context);
    const ref = useRef(null);
    const className = classNames(
        'vui-DataTable-Columns',
        sticky && 'sticky'
    );

    useLayoutEffect(() => {
        let overflow = ref.current.parentNode.parentNode;

        if (sticky && overflow.classList.contains("vui-DataTable-overflow")) {
            overflow.classList.add("sticky");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <thead ref={ref} className={className}>
            <tr>
                {children}
            </tr>
            {isSearchActive && <SearchRow />}
        </thead>
    )
}

export default Columns
