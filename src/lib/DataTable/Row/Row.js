import React from 'react'

const Row = ({ children, ...props }) => (
    <tr className='vui-DataTable-Row' {...props}>
        {children}
    </tr>
)

export default Row
