import React, { useContext, useEffect } from 'react'
import { classNames, Icon } from '../../index'
import { Context } from '../DataTable'

const directions = ['asc', 'desc', null]

const Column = ({ children, name, rightAligned, centerAligned, sortable }) => {
    const [columns, setColumns, onSortChange] = useContext(Context)
    const className = classNames(
        'vui-DataTable-Column',
        rightAligned && 'right-aligned',
        centerAligned && 'center-aligned',
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

export default Column
