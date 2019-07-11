import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { classNames, Icon, useDeepCompareEffect } from '../index'
import './DataTable.scss'

const Context = createContext([{}, () => {
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

const directions = ['asc', 'desc', null]

const Column = ({ children, name, rightAligned, sortable }) => {
    const [columns, setColumns, onSortChange] = useContext(Context)
    const className = classNames(
        'vui-DataTable-Column',
        rightAligned && 'right-aligned',
        sortable && 'sortable'
    )

    if (sortable && !name) {
        console.error('[DataTable.Column] The property "name" is required for sortable columns')
    }

    useEffect(() => {
        if (sortable && name) {
            setColumns(c => ({ ...c, [name]: { direction: null } }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, sortable])

    let sorting
    if (sortable && columns[name]) {
        sorting = <Icon className={classNames('order-icon', columns[name].direction)} name='arrowDown' />
    }

    const handleClick = () => {
        if (sortable) {
            const newColumns = { ...columns }
            const currentDirection = newColumns[name].direction
            newColumns[name].direction = directions[(directions.indexOf(currentDirection) + 1) % 3]
            setColumns(newColumns)
            onSortChange && onSortChange(newColumns)
        }
    }

    return (
        <th className={className} onClick={handleClick}>
            {(rightAligned && sortable) &&
            sorting
            }
            {children}
            {(!rightAligned && sortable) &&
            sorting
            }
        </th>
    )
}
DataTable.Column = Column

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

const Cell = ({ children }) => {
    const ref = useRef(null)
    const [rightAligned, setRightAligned] = useState(false)

    useLayoutEffect(() => {
        const thisIndex = ref.current.parentNode.children.indexOf(ref.current)
        const isColumnRightAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('right-aligned')
        if (isColumnRightAligned) {
            ref.current.classList.add('right-aligned')
        }
        setRightAligned(isColumnRightAligned)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const className = classNames(
        'vui-DataTable-Cell',
        rightAligned && 'right-aligned'
    )

    return (
        <td className={className} ref={ref}>
            {children}
        </td>
    )
}
DataTable.Cell = Cell

export default DataTable
