import React from 'react'

const Columns = ({ children }) => (
    <thead className='vui-DataTable-Columns'>
    <tr>
        {children}
    </tr>
    </thead>
)

export default Columns
