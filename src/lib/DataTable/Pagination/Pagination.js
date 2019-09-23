import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Icon } from '../../index'
import { Context } from '../DataTable'

import './Pagination.scss'

const Pagination = ({ rowsPerPage, rowsPerPageOptions, page, count, actions }) => {

    if (!rowsPerPage)
        console.error('The property "rowsPerPage" is required for Pagination')

    if (!rowsPerPageOptions)
        console.error('The property "rowsPerPageOptions" is required for Pagination')

    if (!page)
        console.error('The property "page" is required for Pagination')

    if (typeof count === 'undefined')
        console.error('The property "count" is required for Pagination')

    const { onTrigger, setFilter } = useContext(Context)
    const ref = useRef(null)
    const [ pagination, setPagination ] = useState({ rowsPerPage, page })

    useEffect(() => {
        setPagination((pagination) => ({
            ...pagination,
            page
        }))
    }, [ page ])

    useEffect(() => {
        setFilter(filter => ({
            ...filter,
            pagination
        }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(type) {
        setPagination(pagination => {
            let data = {
                page: type === 'prevPage' ? pagination.page - 1 : pagination.page + 1,
                rowsPerPage: pagination.rowsPerPage
            }

            onTrigger('pagination', data)
            return data
        })
    }

    function handleChange({ target }) {
        setPagination(() => {
            let data = {
                page: 1,
                rowsPerPage: +target.value
            }

            onTrigger('pagination', data)
            return data
        })
    }

    function currentItems() {
        let pageItems = pagination.page * pagination.rowsPerPage

        let initValue = pageItems - (pagination.rowsPerPage - 1)
        let lastValue = pageItems >= count ? count : pageItems

        if (count === 0)
            initValue = 0

        return (
            <>{initValue}-{lastValue} de {count}</>
        )
    }

    return (
        <div className='vui-DataTable-Row vui-DataTablePagination' ref={ref}>
            <div className='vui-DataTable-Cell'>
                <div className='vui-DataTablePagination-Items'>
                    <div className='vui-DataTablePagination-Item'>
                        <p>Itens por página:</p>
                        <select
                            className='vui-DataTablePagination-ItemsByPage'
                            name='rowsPerPage'
                            onChange={handleChange}
                            value={pagination.rowsPerPage}
                        >
                            {rowsPerPageOptions && rowsPerPageOptions.map((option, index) => (
                                <option
                                    value={option}
                                    key={index}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='vui-DataTablePagination-Item'>
                        {currentItems()}
                    </div>
                    <div className='vui-DataTablePagination-Item'>
                        <Button
                            icon
                            disabled={pagination.page === 1}
                            onClick={() => handleClick('prevPage')}
                        >
                            <Icon name='chevronLeft'/>
                        </Button>
                        <Button
                            icon
                            disabled={pagination.page * pagination.rowsPerPage >= count}
                            onClick={() => handleClick('nextPage')}
                        >
                            <Icon name='chevronRight'/>
                        </Button>
                    </div>
                    {actions &&
                    <div className='actions'>
                        {actions}
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Pagination
