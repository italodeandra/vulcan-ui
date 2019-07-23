import React, { createContext, useEffect, useState } from 'react'
import { useDeepCompareEffect } from '../index'
import Cell from './Cell/Cell'
import Column from './Column/Column'
import Columns from './Columns/Columns'
import './DataTable.scss'
import Header from './Header/Header'
import Row from './Row/Row'
import Rows from './Rows/Rows'
import Footer from './Footer/Footer'
import Pagination from './Pagination/Pagination'
import Table from './Table/Table'

export const Context = createContext([{}, () => {
}, () => {
}])

const DataTable = ({ children, onFilterChange, columns: defaultColumns }) => {

    const [filter, setFilter] = useState({})
    const [columns, setColumns] = useState(defaultColumns || {})
    const [isSearchActive, setIsSearchActive] = useState(false)

    useEffect(() => {
        setFilter(filter => {
            let newFilter = {
                ...filter,
                columns
            };

            onFilterChange && onFilterChange(newFilter)

           return newFilter
        })   

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(columns)])

    useDeepCompareEffect(() => {
        if (defaultColumns) {
            setColumns(defaultColumns)
        }
    }, [defaultColumns])

    return (
        <Context.Provider value={{columns, setColumns,filter, setFilter, isSearchActive, setIsSearchActive, onFilterChange}}>
            <div className='vui-DataTable'>
                {children}
            </div>
        </Context.Provider>
    )
}

DataTable.Table = Table

DataTable.Header = Header

DataTable.Columns = Columns

DataTable.Column = Column

DataTable.Rows = Rows

DataTable.Row = Row

DataTable.Cell = Cell

DataTable.Footer = Footer

DataTable.Pagination = Pagination

export default DataTable
