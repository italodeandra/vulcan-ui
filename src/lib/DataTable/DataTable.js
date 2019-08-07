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
                       filter: defaultFilter
                   }) => {

    const [filter, setFilter] = useState({columns: {}})
    const [isSearchActive, setIsSearchActive] = useState(false)

    useDeepCompareEffect(() => {
        if (defaultFilter) {
            setFilter(defaultFilter)
            let newIsSearchActive = isSearchActive
            Object.keys(defaultFilter.columns).forEach(k => {
                if (defaultFilter.columns[k].query) {
                    newIsSearchActive = true
                }
            })
            setIsSearchActive(newIsSearchActive)
        }
    }, [defaultFilter])

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
            value={{filter, setFilter, isSearchActive, setIsSearchActive, onTrigger}}>
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
