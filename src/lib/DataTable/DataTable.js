import React from 'react'
import './DataTable.scss'

const DataTable = ({ children }) => {
    return (
        <table className='vui-DataTable'>
            {children}
        </table>
    )
}

DataTable.Header = ({ children }) => (
    <div className='vui-DataTable-Header'>
        {children}
    </div>
)

DataTable.Columns = ({ children }) => (
    <thead className='vui-DataTable-Columns'>
    <tr>
        {children}
    </tr>
    </thead>
)

DataTable.Column = ({ children }) => (
    <th className='vui-DataTable-Column'>
        {children}
    </th>
)

DataTable.Rows = ({ children }) => (
    <tbody className='vui-DataTable-Rows'>
    {children}
    </tbody>
)

DataTable.Row = ({ children, ...props }) => (
    <tr className='vui-DataTable-Row' {...props}>
        {children}
    </tr>
)

DataTable.Cell = ({ children }) => (
    <td className='vui-DataTable-Cell'>
        {children}
    </td>
)

export default DataTable
