import React, {createContext, useState} from 'react'
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
                       filter: defaultFilters,
                       columns: defaultColumns
                   }) => {

    const [filter, setFilter] = useState()
    const [columns, setColumns] = useState(defaultColumns || {})
    const [isSearchActive, setIsSearchActive] = useState(false)

    useDeepCompareEffect(() => {
        setFilter(filter => ({...filter, columns}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns])

    useDeepCompareEffect(() => {
        if (defaultColumns) {
            setColumns(defaultColumns)
        }
    }, [defaultColumns])

    useDeepCompareEffect(() => {
        if (defaultFilters)
            setColumns({...defaultFilters.columns})

    }, [defaultFilters])

    const onTrigger = (type, data) => {
        setFilter(filter => {
            let nextFilter = {
                ...filter,
                [type]: data
            }

            onFilterChange && onFilterChange(nextFilter)
            return nextFilter
        })
    }

    return (
        <Context.Provider
            value={{columns, setColumns, filter, setFilter, isSearchActive, setIsSearchActive, onTrigger}}>
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
