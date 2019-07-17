import React, { useLayoutEffect, useRef } from 'react'
import { classNames } from '../..';

const Columns = ({ children, sticky }) => {

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
        </thead>
    )
}

export default Columns
