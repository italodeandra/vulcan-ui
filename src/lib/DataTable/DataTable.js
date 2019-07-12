import React, { createContext, useState } from 'react'
import { useDeepCompareEffect } from '../index'
import Cell from './Cell/Cell'
import Column from './Column/Column'
import Columns from './Columns/Columns'
import './DataTable.scss'
import Header from './Header/Header'
import Row from './Row/Row'
import Rows from './Rows/Rows'

export const Context = createContext([{}, () => {
}, () => {
}])

const DataTable = ({ children, onSortChange, columns: defaultColumns }) => {
    const [columns, setColumns] = useState(defaultColumns || {})

    useDeepCompareEffect(() => {
        if (defaultColumns) {
            setColumns(defaultColumns)
        }
    }, [defaultColumns])

    return (
        <Context.Provider value={[columns, setColumns, onSortChange]}>
            <div className='vui-DataTable-overflow'>
                <table className='vui-DataTable'>
                    {children}
                </table>
            </div>
        </Context.Provider>
    )
}

DataTable.Header = Header

DataTable.Columns = Columns

DataTable.Column = Column

DataTable.Rows = Rows

DataTable.Row = Row

DataTable.Cell = Cell

export default DataTable
