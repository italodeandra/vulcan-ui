import React, {createContext, useEffect, useState} from 'react'
import {classNames, useDeepCompareEffect} from '../index'
import Cell from './Cell/Cell'
import Column from './Column/Column'
import Columns from './Columns/Columns'
import './DataTable.sass'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Pagination from './Pagination/Pagination'
import Row from './Row/Row'
import Rows from './Rows/Rows'
import Table from './Table/Table'

export const Context = createContext([{}, () => {
}, () => {
}])

const DataTable = ({
                       children,
                       onFilterChange,
                       className,
                       columns: defaultColumns
                   }) => {

    const [filter, setFilter] = useState({})
    const [columns, setColumns] = useState(defaultColumns || {})
    const [isSearchActive, setIsSearchActive] = useState(false)

    useEffect(() => {
        setFilter(filter => {
            let newFilter = {
                ...filter,
                columns
            }

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
        <Context.Provider
            value={{columns, setColumns, filter, setFilter, isSearchActive, setIsSearchActive, onFilterChange}}>
            <div className={classNames('vui-DataTable', className)}>
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
