import React, { createContext, useEffect, useRef, useState } from 'react'
import { useDeepCompareEffect } from '../index'
import Cell from './Cell/Cell'
import Column from './Column/Column'
import Columns from './Columns/Columns'
import './DataTable.scss'
import Header from './Header/Header'
import Row from './Row/Row'
import Rows from './Rows/Rows'
import Footer from './Footer/Footer'

export const Context = createContext([{}, () => {
}, () => {
}])

const DataTable = ({ children, onSortChange, columns: defaultColumns, sticky, style }) => {
    const [columns, setColumns] = useState(defaultColumns || {})
    const ref = useRef(null);

    useDeepCompareEffect(() => {
        if (defaultColumns) {
            setColumns(defaultColumns)
        }
    }, [defaultColumns])


    useEffect(() => {
        if (sticky) {
            function handleResize() {
                let offsetTop = ref.current.offsetTop;
                let pageSize = window.innerHeight;
        
                if (offsetTop + ref.current.scrollHeight >= pageSize) {
                    ref.current.style.height = `${pageSize - offsetTop}px`;
                }
            }

            handleResize();
            window.addEventListener("resize", handleResize);    
            
            return () =>  window.removeEventListener("resize", handleResize); 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Context.Provider value={[columns, setColumns, onSortChange]}>
            <div className='vui-DataTable-overflow' ref={ref} style={style}>
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

DataTable.Footer = Footer

export default DataTable
